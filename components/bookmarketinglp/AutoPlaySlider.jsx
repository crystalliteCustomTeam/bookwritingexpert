"use client"
// Embla
import useEmblaCarousel from "embla-carousel-react"
import ClassNames from "embla-carousel-class-names"
import Autoplay from "embla-carousel-autoplay"
// Components
import { PrevButton, NextButton, usePrevNextButtons } from "./SliderArrows"

export default function AutoPlaySlider({ wrapperClasses = " ", options, children, arrows = true, arrowsCss = " ", EmblaBtn="" ,flexClasses=""}) {
    const plugins = [
        ClassNames(),
        Autoplay({ delay: 5000, stopOnFocusIn: false, stopOnInteraction: false })
    ]
    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, loop: true, ...options }, plugins)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <>
            <div className={`overflow-hidden ${wrapperClasses}`} ref={emblaRef}>
                <div className={`d-flex ${flexClasses} gap-0 [margin-left:calc(0rem_*_-1)] my-3`}>
                    {children}
                </div>
            </div>
            {arrows && <div className={`d-flex justify-content-center mt-5 ${EmblaBtn}`}>
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} css={arrowsCss} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} css={arrowsCss} />
            </div>}
        </>
    )
}