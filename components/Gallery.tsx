import Image from "next/image";
import styles from "./Gallery.module.css";

type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type GalleryProps = {
  images: GalleryImage[];
};

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <figure
          key={image.src}
          className={`${styles.item} ${index % 3 === 1 ? styles.itemTall : ""}`}
        >
          <div className={styles.imageWrap}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className={styles.image}
            />
          </div>
          {image.caption && (
            <figcaption className={styles.caption}>{image.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
