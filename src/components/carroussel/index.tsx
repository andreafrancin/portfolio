import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./index.module.scss";
import ArrowIcon from "@/assets/icons/Arrow";

const Carroussel = ({ data }: {data: any}) => {
    const [visibleData, setVisibleData] = useState<any>(null);
    const [translateX, setTranslateX] = useState(0);
    const contentRef = useRef<any>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const canMoveRight = useMemo(() => {
        return visibleData && currentIndex < visibleData?.image_resources?.length - 1;
    }, [currentIndex, visibleData]);

    const canMoveLeft = useMemo(() => {
        return visibleData && currentIndex > 0;
    }, [currentIndex, visibleData]);

    const canDisplayButtons = useMemo(() => {
        return visibleData && visibleData?.image_resources?.length > 1;
    }, [visibleData]);

    useEffect(() => {
        if (data) {
            setVisibleData(data);
            setCurrentIndex(Math.floor(data?.image_resources?.length / 2));
        }
    }, [data]);

    const onArrowClick = useCallback((direction: string) => {
        if (contentRef.current && visibleData?.image_resources?.length > 0) {
            let newTranslateX = 0;
            let childWidth = contentRef.current.children[currentIndex].getBoundingClientRect().width + 20;

            if (direction === "right" && canMoveRight) {
                newTranslateX = -childWidth;
                setCurrentIndex((prevState) => prevState + 1);
            } else if (direction === "left" && canMoveLeft) {
                newTranslateX = childWidth;
                setCurrentIndex((prevState) => prevState - 1);
            }

            setTranslateX((prevState) => prevState + newTranslateX);
        }
    }, [currentIndex, canMoveLeft, canMoveRight, visibleData]);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.transform = `translateX(${translateX}px)`;
        }
    }, [translateX]);

    // Funciones para manejar el swipe en móviles
    const handleTouchStart = (e: any) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: any) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const deltaX = touchStartX.current - touchEndX.current;
        if (deltaX > 50) {
            onArrowClick("right");
        } else if (deltaX < -50) {
            onArrowClick("left");
        }
    };

    return (
        <div className={styles.container}>
            <div 
                ref={contentRef} 
                className={styles.content}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {visibleData?.image_resources?.map((item: any, index: number) => (
                    <div 
                        key={index} 
                        className={styles.item} 
                        style={{ opacity: index === currentIndex ? 1 : 0, transition: "opacity 0.2s ease-in-out" }}
                    >
                        <img src={item.image_url} alt={`Project Image ${index + 1}`} />
                    </div>
                ))}
            </div>
            {canDisplayButtons && (
                <div className={styles.buttonsContainer}>
                    {canMoveLeft ? (
                        <button onClick={() => onArrowClick("left")} className={styles.arrowLeft}>
                            <ArrowIcon width={15} />
                        </button>
                    ) : (
                        <div className={styles.arrowLeft} />
                    )}
                    {canMoveRight ? (
                        <button onClick={() => onArrowClick("right")} className={styles.arrowRight}>
                            <ArrowIcon width={15} />
                        </button>
                    ) : (
                        <div className={styles.arrowRight} />
                    )}
                </div>
            )}
        </div>
    );
};

export default Carroussel;
