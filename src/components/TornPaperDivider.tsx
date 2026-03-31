type TornPaperProps = {
  paperColor?: string;
  backgroundColor?: string;
  height?: number;
  flip?: boolean;
};

export function TornPaperDivider({
  paperColor = "#f7f3ea",
  backgroundColor = "#ffffff",
  height = 140,
  flip = false,
}: TornPaperProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${flip ? "rotate-180" : ""}`}
      style={{ height, background: backgroundColor }}
      aria-hidden="true"
    >
      {/* upper paper layer */}
      <div
        className="absolute inset-x-0 top-0"
        style={{
          height: "100%",
          background: paperColor,
          clipPath: `
            polygon(
              0% 0%, 100% 0%, 100% 72%,
              97% 74%, 95% 70%, 92% 77%, 89% 71%,
              86% 79%, 83% 73%, 80% 82%, 76% 75%,
              72% 84%, 68% 76%, 64% 86%, 60% 78%,
              56% 87%, 52% 79%, 48% 88%, 44% 80%,
              40% 89%, 36% 81%, 32% 87%, 28% 78%,
              24% 85%, 20% 76%, 16% 82%, 12% 73%,
              8% 79%, 5% 71%, 2% 75%, 0% 70%
            )
          `,
          boxShadow:
            "0 8px 18px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.06)",
        }}
      />

      {/* torn edge shadow */}
      <div
        className="absolute inset-x-0 pointer-events-none"
        style={{
          top: "68%",
          height: "24%",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.10), rgba(0,0,0,0.03) 35%, transparent 100%)",
          filter: "blur(4px)",
          clipPath: `
            polygon(
              0% 8%, 2% 13%, 5% 4%, 8% 18%, 12% 8%, 16% 22%, 20% 10%, 24% 24%,
              28% 12%, 32% 26%, 36% 14%, 40% 28%, 44% 15%, 48% 29%, 52% 16%, 56% 28%,
              60% 17%, 64% 27%, 68% 15%, 72% 25%, 76% 14%, 80% 23%, 83% 12%, 86% 20%,
              89% 10%, 92% 18%, 95% 8%, 97% 14%, 100% 9%, 100% 100%, 0% 100%
            )
          `,
        }}
      />

      {/* highlight on torn edge fibers */}
      <div
        className="absolute inset-x-0 pointer-events-none"
        style={{
          top: "67.2%",
          height: "10%",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.65), rgba(255,255,255,0.18), transparent)",
          clipPath: `
            polygon(
              0% 40%, 2% 50%, 5% 30%, 8% 58%, 12% 36%, 16% 64%, 20% 39%, 24% 68%,
              28% 43%, 32% 71%, 36% 46%, 40% 73%, 44% 48%, 48% 75%, 52% 50%, 56% 74%,
              60% 52%, 64% 72%, 68% 50%, 72% 69%, 76% 48%, 80% 66%, 83% 44%, 86% 60%,
              89% 41%, 92% 55%, 95% 36%, 97% 48%, 100% 40%, 100% 100%, 0% 100%
            )
          `,
          opacity: 0.7,
        }}
      />

      {/* subtle paper grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.10] mix-blend-multiply"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(0,0,0,0.35) 0.6px, transparent 0.8px),
            radial-gradient(circle at 80% 20%, rgba(0,0,0,0.28) 0.6px, transparent 0.8px),
            radial-gradient(circle at 60% 80%, rgba(0,0,0,0.30) 0.6px, transparent 0.8px),
            radial-gradient(circle at 35% 60%, rgba(0,0,0,0.22) 0.6px, transparent 0.8px)
          `,
          backgroundSize: "18px 18px, 22px 22px, 20px 20px, 16px 16px",
        }}
      />

      {/* rough paper fibers */}
      <svg
        className="absolute inset-x-0 top-[64%] h-[18%] w-full pointer-events-none opacity-35"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0 55
             L20 58 L36 48 L54 60 L78 46 L104 64 L130 50 L154 68 L182 49
             L214 73 L246 53 L278 78 L312 56 L346 81 L380 58 L414 82 L448 61
             L484 84 L520 64 L556 87 L592 66 L630 89 L668 69 L706 91 L744 70
             L782 90 L820 68 L858 88 L896 66 L934 85 L972 63 L1010 81 L1048 60
             L1086 78 L1122 57 L1158 75 L1194 55 L1230 72 L1264 53 L1298 68 L1330 50
             L1362 61 L1400 48 L1440 52"
          fill="none"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M0 64
             L22 67 L40 59 L60 71 L82 57 L110 76 L136 61 L164 79 L194 60
             L226 84 L258 64 L292 88 L326 66 L360 92 L394 69 L430 94 L466 72
             L504 95 L542 74 L580 96 L618 76 L656 97 L694 78 L732 98 L770 77
             L808 96 L846 75 L884 94 L922 73 L960 90 L998 70 L1036 86 L1074 68
             L1112 82 L1148 65 L1184 79 L1220 61 L1256 75 L1290 58 L1324 70 L1360 56
             L1400 64 L1440 60"
          fill="none"
          stroke="rgba(92,70,38,0.20)"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
