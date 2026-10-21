"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { useLocale } from "@/contexts/LocaleContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getEventBrand } from "@/lib/i18n";
import { publicAsset } from "@/lib/publicAsset";
import { navItems, type NavKey } from "@/lib/nav";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const { t } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";
  const useDark = isHome && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const brand = getEventBrand(t);

  return (
    <header
      className={`${styles.header} ${useDark ? styles.headerDark : styles.headerSolid}`}
    >
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu} prefetch={false}>
          <Image
            src={publicAsset("/images/logo-wolf.png")}
            alt={brand}
            width={128}
            height={152}
            className={styles.logoImage}
          />
        </Link>

        <div className={styles.right}>
          <nav className={styles.navDesktop}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    prefetch={false}
                    className={`${styles.navLink} ${
                      pathname === item.href ? styles.navLinkActive : ""
                    }`}
                  >
                    {t.nav[item.key as NavKey]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <LanguageSwitcher variant={useDark ? "light" : "dark"} />

          <button
            type="button"
            className={`${styles.iconBtn} ${styles.loginBtnDisabled}`}
            aria-label={t.nav.login}
            aria-disabled="true"
            onClick={(e) => e.preventDefault()}
          >
            <IoPersonOutline size={22} />
          </button>

          <button
            type="button"
            className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`${styles.navMobile} ${menuOpen ? styles.navOpen : ""}`}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    prefetch={false}
                    className={`${styles.navLink} ${
                      pathname === item.href ? styles.navLinkActive : ""
                    }`}
                    onClick={closeMenu}
                  >
                    {t.nav[item.key as NavKey]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
