import { Frag, Code } from '@phenomenon/slides'
import React from 'react'
import { Container } from '../App'
import styled from 'styled-components'
export function Background4() {
    return (
        <Container>
            <ExampleBg>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
                    deserunt nulla ullam explicabo, possimus officiis nam magnam fuga
                    amet?{' '}
                    <a href="#" className="line">
                        Totam sunt nostrum ducimus iste molestias ipsa
                    </a>{' '}
                    Totam sunt nostrum ducimus iste molestias ipsa rem temporibus numquam
                    dolore?
                </p>
            </ExampleBg>
        </Container>
    )
}
export const ExampleBg = styled.div`
    font-size: 24px;
    line-height: 1.4em;
    .line {
        text-decoration: none;
        color: #e032d9;
        background: linear-gradient(to right, #e032d9, #29a9df);
        background-repeat: no-repeat;
        background-size: 0% 1px;
        background-position: 100% 100%;
        transition: background-size 0.35s ease;
    }

    .line:hover {
        color: #e75ee1;
        background-size: 100% 1px;
        background-position: 0% 100%;
    }
`
