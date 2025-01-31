"use client"
// Embla
import useEmblaCarousel from "embla-carousel-react"
import ClassNames from "embla-carousel-class-names"
import Autoplay from "embla-carousel-autoplay"
// Components
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../sliderarrows/SliderArrows"
import { DotButton, useDotButton } from "../sliderdots/SliderDots"
import styles from "./autoplay.module.css"

export default function AutoPlaySlider({
  wrapperClasses = "",
  emblaWrapper = styles.emblaWrapper,
  options,
  align = "start",
  children,
  arrows = true,
  arrowsCss = "",
  arrowPrevCss,
  arrowNextCss,
  dots = false,
}) {
  const plugins = [
    ClassNames(),
    Autoplay({ delay: 3000, stopOnFocusIn: false, stopOnInteraction: false }),
  ]
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { dragFree: true, align: align, loop: true, ...options },
    plugins
  )

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)
  return (
    <>
      <div
        className={`${styles.overflowHidden} ${wrapperClasses}`}
        ref={emblaRef}
      >
        <div className={emblaWrapper}>{children}</div>
      </div>
      {arrows && (
        <div className={`${styles.arrowsWrapper} ${arrowsCss}`}>
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            classes={arrowPrevCss}
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            classes={arrowNextCss}
          />
        </div>
      )}
      {dots && (
        <div className={styles.embla__controls}>
          <div className={styles.embla__dots}>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`${styles.embla__dot} ${
                  index === selectedIndex ? styles.embla__dot__selected : ""
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
