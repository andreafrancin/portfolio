import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

interface GalleryInterface {
  items: any;
  onItemClick: any;
}

const Gallery = ({ items, onItemClick }: GalleryInterface) => {
  if (!items) return null;

  return (
    <div className={styles.gridContainer}>
      {items?.map((item: any) => (
        <button
          key={item.id}
          className={styles.gridItem}
          onClick={() => onItemClick && onItemClick(item)}
        >
          <img src={item?.image_resources[0]?.image_url} alt={item.title} />
        </button>
      ))}
    </div>
  );
};

export default Gallery;
