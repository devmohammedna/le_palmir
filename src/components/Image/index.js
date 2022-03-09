import React, { useState } from "react";

export default function Image({ src, alt, width, height }) {
  const [imageError, setImageError] = useState(false);
  return (
    <img
      style={{ objectFit: "contain" }}
      src={imageError ? "/static/not-found-image.png" : src}
      alt={alt}
      width={width}
      height={height}
      onError={() => setImageError(true)}
      loading="lazy"
    />
  );
}
