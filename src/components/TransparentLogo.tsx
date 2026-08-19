import { useEffect, useState } from "react";

interface TransparentLogoProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export function TransparentLogo({
  src,
  alt,
  className = "",
  style = {},
}: TransparentLogoProps) {
  const [cleanedSrc, setCleanedSrc] = useState<string>(src);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const w = img.naturalWidth || img.width;
        const h = img.naturalHeight || img.height;

        if (w === 0 || h === 0) return;

        canvas.width = w;
        canvas.height = h;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, w, h);
        const data = imgData.data;

        // Process pixels to make dark grey/black checkerboard background 100% transparent
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // Calculate color neutrality (difference between R, G, B)
          const maxDiff = Math.max(
            Math.abs(r - g),
            Math.abs(g - b),
            Math.abs(r - b)
          );

          // Calculate brightness
          const brightness = (r + g + b) / 3;

          // Target dark neutral grey / black checkerboard background pixels
          if (maxDiff < 30 && brightness < 90) {
            data[i + 3] = 0; // Fully transparent
          } else if (maxDiff < 35 && brightness < 120) {
            // Smooth edge alpha feathering
            const alphaFactor = Math.max(0, (brightness - 85) / 35);
            data[i + 3] = Math.round(data[i + 3] * alphaFactor);
          }
        }

        ctx.putImageData(imgData, 0, 0);
        setCleanedSrc(canvas.toDataURL("image/png"));
      } catch (err) {
        console.error("Canvas background removal error:", err);
      }
    };
  }, [src]);

  return (
    <img
      src={cleanedSrc}
      alt={alt}
      className={className}
      style={{
        mixBlendMode: "lighten",
        ...style,
      }}
    />
  );
}
