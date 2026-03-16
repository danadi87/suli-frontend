import { useEffect, useRef } from "react";
import "../styles/CustomCursor.css";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;

    const onMouseMove = (e) => {
      const { clientX: mx, clientY: my } = e;
      cursor.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
      ring.style.transform = `translate(${mx - 18}px, ${my - 18}px)`;
    };

    const onEnter = () => {
      ring.style.opacity = "1";
      ring.style.width = "54px";
      ring.style.height = "54px";
    };

    const onLeave = () => {
      ring.style.opacity = "0.5";
      ring.style.width = "36px";
      ring.style.height = "36px";
    };

    document.addEventListener("mousemove", onMouseMove);

    const interactives = document.querySelectorAll(
      "a, button, .pillar, .service-card, .testi-card, .plan",
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
