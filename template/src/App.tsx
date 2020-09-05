import { Deck, Slide, Frag, Code, Fade, Expand } from '@phenomenon/slides'
import { Logo } from 'components/logo/Logo'
import React from 'react'
import { brandColor, artColor } from 'styles/colors'
import styled from 'styled-components'
import { Background0 } from './slides/Background0'
import { Background1 } from './slides/Background1'
import { Background2 } from './slides/Background2'
import { Background3 } from './slides/Background3'
import { Background4, ExampleBg } from './slides/Background4'

export const App = () => {
    let i = 0
    return (
        <Deck>
            <Slide></Slide>
            <Slide>
                <Logo color={artColor} in={0} />

                <Fade in={0}>
                    <Title>Hover podkreslenie z wysuwającą się linia</Title>
                </Fade>
            </Slide>
            <Slide>
                <>
                    <Code
                        filename="index.html"
                        code={`

                            <a href="#"$CLASS>Example link</a>
                            
                        `}
                    >
                        <Frag id="CLASS" in={1} code={` class="line"`} inline />
                    </Code>
                </>
            </Slide>
            <Slide>
                <>
                    <Code
                        filename="style.css"
                        code={`
                        $LINE
                        $AFTER
                        $HOVER
                        `}
                        maxHeight={390}
                    >
                        <Frag
                            id="LINE"
                            in={i++}
                            indent={0}
                            code={`
                            .line {
                                $STEP1
                                $STEP2
                                $STEP3
                                $STEP4
                            }
                        `}
                        />
                        <Frag
                            id="STEP1"
                            in={i++}
                            indent={1}
                            code={`
                            text-decoration: none;
                            color: #fff;
                            padding: 10px;
                            margin: 20px;
                            font-size: 25px;
                        `}
                        />
                        <Frag
                            id="STEP2"
                            in={i++}
                            indent={1}
                            code={`

                            transition: color 0.35s ease;
                        `}
                        />
                        <Frag
                            id="STEP3"
                            in={i++}
                            indent={1}
                            code={`
                            display: block;
                        `}
                        />
                        <Frag
                            id="STEP4"
                            in={i++}
                            indent={1}
                            code={`
                            position: relative;
                        `}
                        />
                        <Frag
                            id="AFTER"
                            in={i++}
                            indent={0}
                            code={`
                            
                            .line::after {
                                content: "";
                                $AFTER1
                                $AFTER2
                                $AFTER3
                            }
                        `}
                        />
                        <Frag
                            id="AFTER1"
                            in={i++}
                            indent={1}
                            code={`
                                position: absolute;
                                left: 0;
                                right: 0;
                                bottom: 0;
                                height: 1px;
                                background: ${artColor};
                        `}
                        />

                        <Frag
                            id="HOVER"
                            in={i++}
                            indent={0}
                            code={`

                            .line:hover::after {
                                $HOVER1
                            }
                        `}
                        />

                        <Frag
                            id="AFTER2"
                            in={++i}
                            indent={1}
                            code={`
                            transform: scaleX(0);
                        `}
                        />
                        <Frag
                            id="HOVER1"
                            in={i}
                            indent={1}
                            code={`
                            transform: scaleX(1);
                        `}
                        />
                        <Frag
                            id="AFTER3"
                            in={++i}
                            indent={1}
                            code={`
                            transition: transform 0.35s ease;
                        `}
                        />
                    </Code>
                </>
            </Slide>

            <Slide>
                <Example1>
                    <a href="#" className="line">
                        Example Link
                    </a>
                </Example1>
            </Slide>

            <Slide>
                <>
                    <Code
                        filename="style.css"
                        code={`
                        .line::after {
                            content: "";
                            position: absolute;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            height: 1px;
                            background: ${artColor};
                            transform: scaleX(0);
                            transition: transform 0.35s ease;
                            $AFTER
                        }
                        
                        .line:hover::after {
                            transform: scaleX(1);
                            $HOVER
                        }
                        `}
                    >
                        <Frag
                            id="AFTER"
                            in={++i}
                            indent={1}
                            code={`transform-origin: 100% 50%;`}
                        />
                        <Frag
                            id="HOVER"
                            in={i}
                            indent={1}
                            code={`transform-origin: 0% 50%;`}
                        />
                    </Code>
                </>
            </Slide>
            <Slide>
                <Example2>
                    <a href="#" className="line">
                        Example Link
                    </a>
                </Example2>
                <Expand in={i}>
                    <Example3>
                        <a href="#" className="line">
                            Example Link 2
                        </a>
                    </Example3>
                    <Example4>
                        <a href="#" className="line">
                            Example Link 3
                        </a>
                    </Example4>
                    <Example5>
                        <a href="#" className="line">
                            Example Link 4
                        </a>
                    </Example5>
                </Expand>
            </Slide>
            <Slide>
                <Container>
                    <Example2>
                        <a href="#" className="line">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit
                            Possimus repudiandae consectetur
                        </a>
                    </Example2>
                </Container>
            </Slide>
            <Slide>
                <Background0 />
            </Slide>
            <Slide>
                <Background1 />
            </Slide>
            <Slide>
                <Background2 />
            </Slide>
            <Slide>
                <Background3 />
            </Slide>
            <Slide>
                <Background4 />
            </Slide>
            <Slide>
                <Logo
                    color={artColor}
                    in={0}
                    style={{ width: '300px', margin: '0 auto' }}
                />
                <Fade in={0}>
                    <ExampleBg>
                        <Title>Wykonanie:</Title>
                        <Text>Głos: Bartosz Kozak</Text>
                        <Text>Prezentacja: Bartosz Kozak & Kacper Kozak</Text>
                        <Text>Research i tekst: Bartosz Kozak & Kacper Kozak</Text>
                        <Text>
                            Powered by:{' '}
                            <a
                                className="line"
                                href="https://react-phenomenon.github.io/phenomenon/"
                            >
                                phenomenon
                            </a>
                        </Text>
                        <Text>
                            <a className="line" href="https://front.cooking">
                                Front.Cooking
                            </a>
                        </Text>
                    </ExampleBg>
                </Fade>
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
const Text = styled.p`
    text-align: center;
    font-size: 20px;
`

export const Container = styled.div`
    max-width: 600px;
`

const LinkBase = styled.div`
    text-align: center;
    font-size: 25px;

    .line {
        text-decoration: none;
        color: #fff;
        padding: 15px;
        margin: 0 40px 20px;
        transition: color 0.35s ease;
        display: block;
        position: relative;
    }
    .line::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        transform: scaleX(0);
        transition: transform 0.35s ease;
        background: ${artColor};
    }
    .line:hover::after {
        transform: scaleX(1);
    }
`

const Example1 = styled(LinkBase)`
    .line::after {
        bottom: 0;
        height: 1px;
    }
`

const Example2 = styled(LinkBase)`
    .line::after {
        bottom: 0;
        height: 1px;
        transform-origin: 100% 50%;
    }

    .line:hover::after {
        transform-origin: 0% 50%;
    }
`

const Example3 = styled(LinkBase)`
    .line::after {
        top: 50%;
        height: 3px;
        border-radius: 3px;
        transform-origin: 100% 50%;
    }

    .line:hover::after {
        transform: scaleX(1);
        transform-origin: 0% 50%;
    }
`

const Example4 = styled(LinkBase)`
    .line::after {
        margin: 0 auto;
        height: 5px;
        bottom: 0;
        border-radius: 3px;
        max-width: 50px;
        transform-origin: 100% 50%;
    }

    .line:hover::after {
        transform-origin: 0% 50%;
    }
`

const Example5 = styled(LinkBase)`
    .line::after {
        top: 0;
        bottom: 0;
        transform: skewX(-15deg) scaleX(0);
        transform-origin: 100% 50%;
        border-radius: 5px;
        z-index: -1;
    }

    .line:hover::after {
        transform: skewX(-15deg) scaleX(1);
        transform-origin: 0% 50%;
    }
`
