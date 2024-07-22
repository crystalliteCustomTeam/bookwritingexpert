// Next
import Image from "next/image"
// React
import React, { useCallback, useEffect, useState } from "react"
// Media
import PrevArrow from "/public/images/bookmarketinglp/leftArrow.png"
import NextArrow from "/public/images/bookmarketinglp/rightArrow.png"

export const usePrevNextButtons = (emblaApi) => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
    }, [emblaApi])

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
    }, [emblaApi])

    const onSelect = useCallback((emblaApi) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on("reInit", onSelect).on("select", onSelect)
    }, [emblaApi, onSelect])

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    }
}

export const PrevButton = (props) => {
    const { children,css ,...restProps } = props

    return (
        <button
            type="button"
            className="border-0 bg-transparent"
            {...restProps}
        >
            <Image src={PrevArrow} alt="PrevArrow" className={css} width={30} height={30}/>
        </button>
    )
}

export const NextButton = (props) => {
    const { children,css ,...restProps } = props

    return (
        <button
            type="button"
            className="border-0 bg-transparent"
            {...restProps}
        >
            <Image src={NextArrow} alt="NextArrow" className={css} width={30} height={30}/>
        </button>
    )
}
