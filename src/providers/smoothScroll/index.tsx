/* eslint-disable react-hooks/exhaustive-deps */
import { PropsWithChildren, useEffect, useRef } from "react";

const useSmoothScrollProvider = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  return wrapperRef;
};

const SmoothScrollProvider = ({ children }: PropsWithChildren) => {
  const wrapperRef = useSmoothScrollProvider();

  const requestAnimationFrame = window.requestAnimationFrame;
  let easing = "cubic-bezier(0.23, 1, 0.32, 1)";
  let duration = "1.5s";
  let lastScrollY = window.scrollY;
  let pos = 0;

  const onScroll = (scrollY: any) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    pos = -(scrollY || document.documentElement.scrollTop);
    wrapper.style.transform = "translateY(" + pos + "px)";
  };

  const loop = () => {
    let scrollY = window.scrollY;

    if (lastScrollY === scrollY) {
      requestAnimationFrame(loop);
      return;
    } else {
      lastScrollY = scrollY;
      onScroll(scrollY);
      requestAnimationFrame(loop);
    }
  };

  const init = () => {
    const wrapper = wrapperRef.current;
    const target = document.getElementsByTagName("body")[0];

    if (!wrapper) return;

    target.style.height = wrapper.offsetHeight + "px";
    target.style.overflow = "auto";

    wrapper.style.transition = "transform " + duration + " " + easing;
    wrapper.style.position = "fixed";
    wrapper.style.top = "0";
    wrapper.style.left = "0";
    wrapper.style.width = "100%";
    wrapper.style.padding = "0";
    wrapper.style.zIndex = "2";
    wrapper.style.display = "block";
    wrapper.style.backfaceVisibility = "hidden";

    loop();
  };

  useEffect(() => {
    init();
  }, [init]);

  return (
    <div ref={wrapperRef} className="wrapper">
      {children}
    </div>
  );
};

export default SmoothScrollProvider;
