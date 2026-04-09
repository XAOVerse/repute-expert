"use client";

import React from "react";
import styles from "./PlatformsMediaSection.module.css";

/* âââ SVG Logos âââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

const CBSLogo = () => (
  <img src="/images/cbs-logo.svg" alt="CBS" width={68} height={24} style={{ objectFit: "contain" }} />
);

const BBCLogo = () => (
  <div className="flex gap-[2px] flex-shrink-0">
    {["B", "B", "C"].map((l, i) => (
      <span key={i} className="w-[20px] h-[20px] bg-[#1a1a1a] text-white text-[11px] font-bold flex items-center justify-center rounded-[1px]">{l}</span>
    ))}
  </div>
);

const FOXNewsLogo = () => (
  <div className="flex flex-col items-center leading-none rounded-[2px] overflow-hidden" style={{ width: 48 }}>
    <div className="w-full bg-[#003366] flex flex-col items-center py-[3px] px-[4px] relative">
      <span className="text-[14px] font-black italic text-white tracking-[-0.03em] leading-none" style={{ fontFamily: "Arial Black, sans-serif" }}>FOX</span>
      <span className="text-[8px] font-bold text-white tracking-[0.06em] uppercase leading-none mt-[1px]" style={{ fontFamily: "Arial, sans-serif" }}>NEWS</span>
    </div>
    <div className="w-full bg-[#c8102e] flex items-center justify-center py-[1.5px]">
      <span className="text-[5.5px] text-white font-bold tracking-[0.05em] leading-none" style={{ fontFamily: "Arial, sans-serif" }}>channel</span>
    </div>
  </div>
);

const BusinessInsiderLogo = () => (
  <div className="flex flex-col leading-none">
    <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-[#1a1a1a] leading-tight" style={{ fontFamily: "Arial, sans-serif" }}>BUSINESS</span>
    <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-[#1a1a1a] leading-tight" style={{ fontFamily: "Arial, sans-serif" }}>INSIDER</span>
  </div>
);

const CBSLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 192.756 192.756">
    <g fillRule="evenodd" clipRule="evenodd">
      <path fill="#fff" d="M0 0h192.756v192.756H0V0z"/>
      <path d="M163.246 68.787c-14.732 0-26.676 11.943-26.676 26.676s11.943 26.676 26.676 26.676 26.676-11.943 26.676-26.676-11.943-26.676-26.676-26.676zm0 42.346c-10.955-.046-19.863-7.239-24.578-15.861 4.762-8.575 13.717-15.529 24.578-15.529 11.051 0 19.91 6.907 24.578 15.529-4.668 8.622-13.431 15.909-24.578 15.861z"/>
      <path d="M163.246 109.609c7.812 0 14.145-6.334 14.145-14.146 0-7.813-6.332-14.146-14.145-14.146S149.1 87.65 149.1 95.463c0 7.812 6.334 14.146 14.146 14.146zM47.052 70.204h23.864c10.136 0 17.193 6.223 17.193 12.573 0 4.747-1.796 9.238-11.804 11.419 3.849.513 14.37 3.335 14.37 13.343s-11.034 14.884-18.604 14.884H47.052v-.514h24.762c5.902 0 9.623-2.438 9.623-13.6 0-11.163-4.106-13.729-9.238-13.857h-7.698v-.512h8.147c3.336 0 6.864-.513 6.864-11.291s-4.234-11.933-8.725-11.933H64.5v51.193h-9.495V70.717H47.05v-.513h.002zM13.356 96.641c0-19.759 5.773-26.815 12.573-26.815 9.623 0 14.883 14.242 16.551 19.759V70.467c-1.668 1.283-2.438 1.925-4.234 1.925-1.796 0-4.491-.898-5.774-1.668-1.283-.77-3.849-1.411-6.415-1.411-8.468 0-23.223 11.162-23.223 27.328 0 19.117 13.087 27.329 23.223 27.329 2.566 0 5.389-1.026 6.672-1.797 1.283-.77 3.721-1.796 5.517-1.796 1.796 0 2.566.642 4.234 1.925v-19.246c-1.412 7.442-6.928 20.4-16.551 20.4-2.758 0-6.543-1.283-8.275-3.079-.533-.553-4.298-3.209-4.298-23.736zM124.863 112.148c-.127 4.234-3.336 9.88-10.008 9.751-6.672-.128-14.754-5.132-17.834-18.604v18.219c1.283-1.154 3.465-3.207 6.93-1.668 3.463 1.54 8.596 2.566 10.904 2.566 2.311 0 15.012-2.438 15.525-17.064.129-7.313-5.133-11.034-8.34-12.189-3.721-1.412-8.98-3.079-12.061-4.106-3.078-1.026-8.082-4.233-7.955-10.136.129-5.902 3.721-9.109 8.598-9.109 4.875 0 11.418 3.849 14.754 17.449v-18.09c-1.924 1.668-3.465 2.438-4.619 2.438-1.025 0-4.008-1.171-5.516-1.636-1.668-.513-3.305-.706-5.391-.673-3.656.056-12.252 4.49-12.83 16.423-.421 8.718 6.031 12.061 8.982 13.086 2.566.898 10.008 3.593 12.188 4.491 2.183.897 6.931 3.977 6.673 8.852z"/>
    </g>
  </svg>
);

const DigitalJournalLogo = () => (
  <div className="flex items-start gap-[3px]">
    <span className="inline-block w-[10px] h-[12px] bg-[#b91c1c] rounded-[1px] mt-[2px] flex-shrink-0" />
    <div className="flex flex-col leading-none" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
      <span className="text-[11px] font-bold text-[#1a1a1a] tracking-[-0.01em] leading-[1.1]">DIGITAL</span>
      <span className="text-[11px] font-bold text-[#1a1a1a] tracking-[-0.01em] leading-[1.1]">JOURNAL</span>
    </div>
  </div>
);

const ArrowUpRight = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

/* âââ Card overlay content (same as AwardsStrip homepage) ââââââââââââââ */

const ReddotOverlay = () => (
  <div className="flex items-center gap-3">
    <svg width="44" height="44" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="2" />
      {[0, 1, 2, 3, 4].map((i) => (
        <ellipse key={i} cx="40" cy={18 + i * 10} rx={28 - i * 3.5} ry="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      ))}
    </svg>
    <span className="text-[22px] font-medium tracking-[-0.01em]">reddot</span>
  </div>
);

const JEOverlay = () => (
  <div className="w-[90px] h-[90px] rounded-full bg-[#1a1a1a] flex items-center justify-center">
    <span className="text-white text-[32px]" style={{ fontFamily: "Georgia, serif" }}>JE</span>
  </div>
);

const ForbesOverlay = () => (
  <span className="text-[40px] font-bold italic tracking-[-0.02em]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>Forbes</span>
);

const FintechTimesOverlay = () => (
  <div className="flex items-center gap-1.5">
    <span className="text-[15px] tracking-[0.02em]" style={{ fontFamily: "Georgia, serif" }}>THE</span>
    <span className="text-[15px] px-2 py-0.5 font-bold border border-current" style={{ fontFamily: "Georgia, serif" }}>FINTECH</span>
    <span className="text-[15px] tracking-[0.02em]" style={{ fontFamily: "Georgia, serif" }}>TIMES</span>
  </div>
);

/* âââ Data ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

const MENTIONS = [
  { logo: <CBSLogo />, name: "CBS", url: "#" },
  { logo: <BBCLogo />, name: "BBC", url: "#" },
  { logo: <FOXNewsLogo />, name: "FOX News", url: "#" },
  { logo: <BusinessInsiderLogo />, name: "Business Insider", url: "#" },
  { logo: <CBSLogo />, name: "CBS", url: "#" },
  { logo: <DigitalJournalLogo />, name: "Digital Journal", url: "#" },
];

// Correct extensions per actual files in /public/images/
const MEDIA_IMAGES = [
  { src: "/images/media-1.webp", alt: "Media partner 1" },
  { src: "/images/media-2.png",  alt: "Media partner 2" },
  { src: "/images/media-3.png",  alt: "Media partner 3" },
  { src: "/images/media-4.svg",  alt: "Media partner 4" },
  { src: "/images/media-5.svg",  alt: "Media partner 5" },
  { src: "/images/media-6.svg",  alt: "Media partner 6" },
  { src: "/images/media-7.svg",  alt: "Media partner 7" },
  { src: "/images/media-8.webp", alt: "Media partner 8" },
  { src: "/images/media-9.png",  alt: "Media partner 9" },
  { src: "/images/media-10.png", alt: "Media partner 10" },
  { src: "/images/media-11.png", alt: "Media partner 11" },
];

/* âââ Media card â white bg + dark overlay by default, image + white overlay on hover ââ */

function MediaCardItem({ image, overlay, url }: { image: string; overlay: React.ReactNode; url: string }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.mediaCard}
      style={
        hovered && image
          ? { backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }
          : undefined
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`${styles.mediaCardOverlay} ${hovered ? styles.overlayVisible : ""}`} />
      <div className={`${styles.mediaCardContent} ${hovered ? styles.contentOnHover : styles.contentDefault}`}>
        {overlay}
      </div>
      <div className={`${styles.arrowBadge} ${hovered ? styles.arrowOnHover : styles.arrowDefault}`}>
        <ArrowUpRight />
      </div>
    </a>
  );
}

/* âââ Component âââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

export function PlatformsMediaSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Platforms and Media Outlets"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">

        {/* ââ Heading âââââââââââââââââââââââââââââââââââââââââââââââ */}
        <h2
          className="text-[#1a1a1a] font-medium text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15] tracking-[-0.02em] mb-8 lg:mb-10"
        >
          Platforms &amp; Media Outlets
        </h2>

        {/* ââ 3-column grid (mentions + 2 card cols) âââââââââââââââ */}
        <div className={styles.grid}>

          {/* Left: mention list */}
          <div className={styles.mentionsCol}>
            {MENTIONS.map((m, i) => (
              <a key={i} href={m.url} target="_blank" rel="noopener noreferrer" className={styles.mentionRow}>
                <div className={styles.mentionLogo}>{m.logo}</div>
                <span className={styles.mentionName}>{m.name}</span>
                <span className={styles.mentionArrow}><ArrowUpRight /></span>
              </a>
            ))}
          </div>

          {/* Middle col: 2 media cards */}
          <div className={styles.cardsCol}>
            <MediaCardItem image="/images/image-1.webp" overlay={<ReddotOverlay />} url="#" />
            <MediaCardItem image="/images/image-2.webp" overlay={<JEOverlay />} url="#" />
          </div>

          {/* Right col: 2 media cards */}
          <div className={styles.cardsCol}>
            <MediaCardItem image="/images/image-3.webp" overlay={<ForbesOverlay />} url="#" />
            <MediaCardItem image="/images/image-4.webp" overlay={<FintechTimesOverlay />} url="#" />
          </div>
        </div>

        {/* ââ Media Partners carousel ââââââââââââââââââââââââââââââââ */}
        <div className="mt-14 lg:mt-16">
          <h3 className="text-[#1a1a1a] text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium tracking-[-0.02em] mb-6">
            Media Partners
          </h3>

          {/* Outer mask for fade edges */}
          <div className={styles.marqueeWrapper}>
            <div className={styles.marqueeTrack}>
              {/* Duplicate for seamless loop */}
              {[...MEDIA_IMAGES, ...MEDIA_IMAGES].map((img, i) => (
                <div key={i} className={styles.marqueeItem}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={styles.marqueeImg}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
