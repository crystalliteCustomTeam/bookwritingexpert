"use client";
// Embla
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import AutoScroll from "embla-carousel-auto-scroll";

export default function AutoScrollSlider({wrapperClasses = " ", direction = "forward", options, children, classes = "d-flex"}) {
  const plugins = [ClassNames(), AutoScroll({playOnInit: true, speed: 0.5, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: false, direction})];
  const [emblaRef] = useEmblaCarousel({align: "center", dragFree: true, loop: true, ...options}, plugins);
  return (
    <div className={`overflow-hidden ${wrapperClasses}`} ref={emblaRef}>
      <div className={`${classes}`}>{children}</div>
    </div>
  );
}
