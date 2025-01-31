"use client"
// Embla
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
import styles from "./autoscroll.module.css"

export default function AutoScrollSlider({
    direction = "forward",
    wrapperCss = "",
    emblaWrapper = styles.emblaWrapper,
    align = "start",
    children
}) {
    const plugins = [
        AutoScroll({ playOnInit: true, speed: 0.9, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: false, direction })
    ]

    const [emblaRef] = useEmblaCarousel({ align: align, dragFree: true, loop: true }, plugins)

    return (
        <div className={`${styles.overflowHidden} ${wrapperCss}`} ref={emblaRef}>
            <div className={emblaWrapper}>
                {children}
            </div>
        </div>
    )
}
