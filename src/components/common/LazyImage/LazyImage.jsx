import React, { useEffect, useState, useRef } from "react";

const LazyImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    let observer;
    let didCancel = false;

    if (img && IntersectionObserver) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              !didCancel &&
              (entry.intersectionRatio > 0 || entry.isIntersecting)
            ) {
              const imgElement = entry.target;
              imgElement.src = src;
              imgElement.onload = () => setLoaded(true);
              observer.unobserve(imgElement);
            }
          });
        },
        {
          threshold: 0.01,
          rootMargin: "75%",
        }
      );
      observer.observe(img);
    }

    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(img);
      }
    };
  }, [src]);

  return (
    <img
      ref={imgRef}
      alt={alt}
      className={`${className} ${loaded ? "lazy-loaded" : "lazy"}`}
    />
  );
};

export default LazyImage;
