import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

interface Item {
  id: string;
  imageUrl: string;
  title: string;
}

interface GalleryInterface {
  items: Item[];
  onItemClick: any;
}

const Gallery = ({ items, onItemClick }: GalleryInterface) => {
  return (
    <div className={styles.gridContainer}>
      {items.map((item) => (
        <button
          key={item.id}
          className={styles.gridItem}
          onClick={() => onItemClick && onItemClick(item)}
        >
          <Image src={item.imageUrl} alt={item.title} />
        </button>
      ))}
    </div>
  );
};

export default Gallery;
