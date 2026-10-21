import { publicAsset } from "@/lib/publicAsset";
import styles from "./PageBanner.module.css";

const banners = {
  about: { pc: [1920, 425], mob: [960, 662] },
  venue: { pc: [1920, 425], mob: [960, 662] },
  contact: { pc: [1920, 425], mob: [960, 662] },
  circles: { pc: [1920, 425], mob: [960, 662] },
  notes: { pc: [1920, 425], mob: [960, 662] },
  event: { pc: [1920, 425], mob: [960, 662] },
  register: { pc: [1920, 425], mob: [960, 662] },
} as const;

export type PageBannerName = keyof typeof banners;

type PageBannerProps = {
  name: PageBannerName;
  title: string;
  subtitle: string;
};

export default function PageBanner({ name, title, subtitle }: PageBannerProps) {
  const size = banners[name];

  return (
    <section className={styles.banner}>
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={publicAsset(`/images/banners/${name}-mob.jpg`)}
          width={size.mob[0]}
          height={size.mob[1]}
        />
        <img
          src={publicAsset(`/images/banners/${name}-pc.jpg`)}
          alt=""
          width={size.pc[0]}
          height={size.pc[1]}
          className={styles.image}
          fetchPriority="high"
        />
      </picture>
      <div className={styles.copy}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}
