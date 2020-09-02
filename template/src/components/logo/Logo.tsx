import { useStep } from '@phenomenon/slides'
import { StepProps } from '@phenomenon/slides/dist/types/StepProps'
import bezier from 'bezier-easing'
import { delay, fromTo, htmlElementRenderer, parallel, trail, val } from 'light-trails'
import React, { useRef } from 'react'
import styled from 'styled-components'
import { LogoSvg } from './LogoSvg'

interface LogoProps extends StepProps {
    color: string
}

export const Logo = (props: LogoProps) => {
    const ref = useRef(null)
    const refGlass = useRef(null)
    const refLiquid = useRef(null)
    const refFront = useRef(null)
    const refCooking = useRef(null)
    const refDot = useRef(null)
    const refBubbles = useRef(null)

    useStep(
        props.in,
        () =>
            parallel([
                glass(refGlass),
                liquid(refLiquid),
                textFront(refFront),
                textCooking(refCooking),
                textDot(refDot),
                bubbles(refBubbles),
            ]),
        { title: 'Logo' },
    )

    return (
        <Container ref={ref}>
            <LogoSvg
                color={props.color}
                refGlass={refGlass}
                refLiquid={refLiquid}
                refFront={refFront}
                refCooking={refCooking}
                refDot={refDot}
                refBubbles={refBubbles}
            />
        </Container>
    )
}

const easeFlip = bezier(0.34, 1.4, 0.5, 1)
const easeFlip2 = bezier(0.34, 1.8, 0.5, 1)

const timescale = 0.8

const glass = (ref: any) =>
    trail(htmlElementRenderer(ref.current), [
        fromTo(
            {
                rotate: val(180, 0, 'deg'),
                x: val(150, 0, 'px'),
                opacity: val(0, 1),
            },
            800 * timescale,
            easeFlip,
        ),
    ])

const liquid = (ref: any) =>
    trail(htmlElementRenderer(ref.current), [
        fromTo(
            {
                rotate: val(-240, 0, 'deg'),
            },
            1000 * timescale,
            easeFlip,
        ),
    ])

const textFront = (ref: any) =>
    trail(htmlElementRenderer(ref.current), [
        delay(75 * timescale),
        fromTo(
            {
                x: val(50, 0, 'px'),
                opacity: val(0, 1),
            },
            900 * timescale,
            easeFlip2,
        ),
    ])

const textCooking = (ref: any) =>
    trail(htmlElementRenderer(ref.current), [
        delay(75 * timescale),
        fromTo(
            {
                x: val(50, 0, 'px'),
                opacity: val(0, 1),
            },
            1000 * timescale,
            easeFlip2,
        ),
    ])

const textDot = (ref: any) =>
    trail(htmlElementRenderer(ref.current), [
        delay(250 * timescale),
        fromTo(
            {
                scale: val(0, 1),
                x: val(20, 0, 'px'),
                opacity: val(0, 1),
            },
            500 * timescale,
            easeFlip2,
        ),
    ])

const bubbles = (ref: any) =>
    trail(htmlElementRenderer(ref.current), [
        delay(450 * timescale),
        fromTo(
            {
                opacity: val(0, 1),
                rotate: val(-25, 0, 'deg'),
                scale: val(0.6, 1),
            },
            1000 * timescale,
            easeFlip,
        ),
    ])

const Container = styled.div`
    padding: 20px;
`
