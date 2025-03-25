import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./index.module.scss";
import ArrowIcon from "@/assets/icons/Arrow";

const Carroussel = ({ data }: { data: any }) => {
    const [visibleData, setVisibleData] = useState<any>(null);
    const contentRef = useRef<HTMLDivElement>(null);
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
        }
    }, [data]);

    const onArrowClick = useCallback(
        (direction: string) => {
            if (contentRef.current && visibleData?.image_resources?.length > 0) {
                let childWidth = contentRef.current.children[0].getBoundingClientRect().width + 20;

                setCurrentIndex((prevIndex) => {
                    let newIndex = prevIndex;
                    if (direction === "right" && canMoveRight) {
                        newIndex = prevIndex + 1;
                    } else if (direction === "left" && canMoveLeft) {
                        newIndex = prevIndex - 1;
                    }

                    contentRef.current?.scrollTo({ left: newIndex * childWidth, behavior: "smooth" });
                    return newIndex;
                });
            }
        },
        [canMoveRight, canMoveLeft, visibleData]
    );

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
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
                style={{ display: "flex", scrollBehavior: "smooth" }}
            >
                {visibleData?.image_resources?.map((item: any, index: number) => (
                    <div 
                        key={index} 
                        className={styles.item} 
                        style={{ 
                            minWidth: "100%", 
                            transition: "opacity 0.2s ease-in-out", 
                            opacity: index === currentIndex ? 1 : 0
                        }}
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
