import { Frag, Code } from '@phenomenon/slides'
import React from 'react'
import { Container } from '../App'
import styled from 'styled-components'
export function Background2() {
    return (
        <Container>
            <Example>
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
            </Example>
        </Container>
    )
}
const Example = styled.div`
    font-size: 24px;
    line-height: 1.4em;
    .line {
        text-decoration: none;
        color: #e032d9;
        background: linear-gradient(to right, #e032d9, #29a9df);
        background-repeat: no-repeat;
        background-size: 100% 1px;
        background-position: 100% 100%;
    }

    .line:hover {
        color: #e75ee1;
    }
`
