import { Frag, Code } from '@phenomenon/slides'
import React from 'react'
import { Container } from '../App'
export function Background0() {
    return (
        <Container>
            <Code
                filename="index.html"
                code={`
                        <p>
                            Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Dignissimos deserunt 
                            nulla ullam explicabo, possimus officiis
                            nam magnam fuga amet? 
                            $LINK
                            Totam sunt nostrum ducimus iste molestias ipsa
                            rem temporibus numquam dolore?
                        </p>
                        `}
            >
                <Frag
                    id="LINK"
                    // in={1}
                    hlIn={1}
                    hlOut={2}
                    indent={1}
                    code={`

                            <a href="#" class="line">
                                Totam sunt nostrum ducimus iste  molestias ipsa
                            </a> 
                            
                        `}
                />
            </Code>
        </Container>
    )
}
