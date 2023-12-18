import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

function Piece() {
  const [move, setMove] = useState(false);

  const array = [
    "bg-slate-200",
    "bg-red-200",
    "bg-blue-500",
    "bg-yellow-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-gray-200",
    "bg-indigo-200",
  ];

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            entry.target,
            { duration: 2, x: -100, opacity: 0 },
            { duration: 2, x: 0, opacity: 1, ease: "expo.inOut" }
          );
          observer.unobserve(entry.target);
        } else {
          gsap.set(entry.target, { opacity: 0 });
        }
      });
    },
    { threshold: 1 }
  );

  const loader = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // loaderElement.current.classList.remove("hidden");
          gsap.to(entry.target, { duration: 2, opacity: 0, onComplete: () => { gsap.to(entry.target, { duration: 2, height: 0, width: 0, ease: "expo.inOut", onComplete: () => {
            gsap.set(entry.target, { display: "none" });
          } }) } });
        }
      });
    },
    { threshold: 1 }
  );

  const observedElement = useRef(null);
  const loaderElement = useRef(null);

  useEffect(() => {
    observer.observe(observedElement.current);
    loader.observe(loaderElement.current);
  }, []);

  // Make random number generator
  const random = (max) => {
    return Math.floor(Math.random() * (max + 1));
  };

  return (
    <div className={`flex flex-col p-4 rounded-lg justify-center items-center gap-2 ${
      array[random(array.length)]
    }`}>
      <div
        ref={observedElement}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className={`h-52 w-52 rounded flex flex-col justify-center items-center ${
          array[random(array.length)]
        }`}
      >
        Piece
      </div>
      <div
        ref={loaderElement}
        className={`text-center w-full rounded ${array[random(array.length)]}`}
      >
        Loading
      </div>
    </div>
  );
}

export default Piece;
