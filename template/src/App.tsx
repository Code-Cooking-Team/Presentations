import { Deck, Slide, Frag, Code } from '@phenomenon/slides'
import { Logo } from 'components/logo/Logo'
import React from 'react'
import { brandColor } from 'styles/colors'
import styled from 'styled-components'

export const App = () => {
    return (
        <Deck>
            <Slide></Slide>
            <Slide>
                <Logo color={brandColor} in={0} />
                <Title>Hover podkreslenie z wysuwającą się linia</Title>
            </Slide>
            <Slide>
                <>
                    <Title>React</Title>
                    <Code
                        filename="index.html"
                        code={`
                            $DIV_END
                        `}
                    >
                        <Frag id="DIV_END" in={2} code={`</div>`} />
                    </Code>
                </>
            </Slide>
        </Deck>
    )
}

const Title = styled.div`
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin-top: 20px;
`
