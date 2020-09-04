import { Code, Frag } from '@phenomenon/slides'
import { lighten } from 'polished'
import React from 'react'
import { artColor } from 'styles/colors'
export function Background1() {
    let i = 0
    return (
        <>
            <Code
                filename="style.css"
                code={`
                        .line {
                            text-decoration: none;
                            color: ${artColor};
                            $BG1
                            $BG2
                            $BG3
                        }
                        
                        .line:hover {
                            color: ${lighten(0.3, artColor)};
                        }
                        `}
            >
                <Frag
                    id="BG1"
                    in={++i}
                    indent={1}
                    code={`background: linear-gradient(0.25turn, #ea500e, #29a9df);`}
                />
                <Frag
                    id="BG2"
                    in={++i}
                    indent={1}
                    code={`background-repeat: no-repeat;`}
                />
                <Frag
                    id="BG3"
                    in={++i}
                    indent={1}
                    code={`
                        background-size: 0% 1px;
                        background-position: 100% 100%;
                    `}
                />
            </Code>
        </>
    )
}
