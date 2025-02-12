"use client";

import React, {
  useState,
  useRef,
  useEffect,
  CSSProperties,
  KeyboardEvent,
} from "react";
import ReactDOM from "react-dom";

interface LiteYoutubeProps {
  videoId: string;
  videoTitle?: string;
  start?: number; // en segundos
  autoload?: boolean;
  nocookie?: boolean;
  playlistid?: string;
  short?: boolean;
  style?: CSSProperties;
  className?: string;
}

const LiteYoutube: React.FC<LiteYoutubeProps> = ({
  videoId,
  videoTitle = "Video de YouTube",
  start,
  autoload = false,
  nocookie = false,
  playlistid,
  style = { display: "block", width: "100%", aspectRatio: "16/9" },
  className = "",
}) => {
  // Estado para determinar si se activó el video (se muestra el iframe)
  const [activated, setActivated] = useState(false);
  // Referencia para el contenedor que usará Shadow DOM
  const containerRef = useRef<HTMLDivElement | null>(null);
  // Guardamos la referencia al shadow root
  const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null);

  // Crear el shadow root una vez que el contenedor está listo
  useEffect(() => {
    if (containerRef.current && !shadowRoot) {
      const sr = containerRef.current.attachShadow({ mode: "open" });
      setShadowRoot(sr);
    }
  }, [containerRef, shadowRoot]);

  // Si autoload está activado, usamos Intersection Observer para activar el video
  useEffect(() => {
    if (
      autoload &&
      containerRef.current &&
      !activated &&
      "IntersectionObserver" in window
    ) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivated(true);
            observer.disconnect();
          }
        });
      });
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [autoload, activated]);

  // Maneja la activación mediante click o teclado
  const handleActivate = () => {
    if (!activated) {
      setActivated(true);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      handleActivate();
    }
  };

  // Construcción de la URL del iframe
  const baseUrl = nocookie
    ? "https://www.youtube-nocookie.com/embed/"
    : "https://www.youtube.com/embed/";
  let src = `${baseUrl}${videoId}?autoplay=1`;
  if (start) src += `&start=${start}`;
  if (playlistid) src += `&list=${playlistid}`;

  // URLs de placeholder (WebP con fallback a JPEG)
  const webpUrl = `https://i.ytimg.com/vi_webp/${videoId}/hqdefault.webp`;
  const jpgUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  // Contenido que se mostrará dentro del Shadow DOM
  const content = (
    <div
      className={`lite-youtube-wrapper ${className}`}
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "56.25%", // 16:9
        backgroundColor: "#000",
        overflow: "hidden",
        cursor: activated ? "auto" : "pointer",
        ...style,
      }}
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={activated ? -1 : 0}
      aria-label={videoTitle}
    >
      {activated ? (
        <iframe
          src={src}
          title={videoTitle}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      ) : (
        <>
          <picture>
            <source srcSet={webpUrl} type="image/webp" />
            <img
              src={jpgUrl}
              alt={videoTitle}
              loading="lazy"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </picture>
          {/* Botón de reproducción centrado */}
          <div
            className="play-button"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "68px",
              height: "48px",
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2068%2048%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M66.52%207.47c1.5%201.08%201.5%203.11%200%204.19L10.74%2040.13c-1.5%201.08-3.38%201.08-4.88%200L1.48%2036.52C0%2035.44%200%2033.42%201.48%2032.34L59.64%207.47C61.14%206.39%2063.02%206.39%2064.52%207.47Z%22%20fill%3D%22white%22/%3E%3C/svg%3E")',
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />
        </>
      )}
    </div>
  );

  // Estilos encapsulados en el Shadow DOM (opcional)
  const styleTag = (
    <style>
      {`
        :host {
          display: block;
        }
        .lite-youtube-wrapper:focus {
          outline: 2px solid #fff;
        }
      `}
    </style>
  );

  return (
    <div ref={containerRef}>
      {shadowRoot
        ? ReactDOM.createPortal(
            <>
              {styleTag}
              {content}
            </>,
            shadowRoot
          )
        : null}
    </div>
  );
};

export default LiteYoutube;
