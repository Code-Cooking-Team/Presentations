import { Code, Frag } from '@phenomenon/slides'
import { lighten } from 'polished'
import React from 'react'
import { artColor } from '../styles/colors'
export function Background3() {
    let i = 0
    return (
        <>
            <Code
                filename="style.css"
                code={`
                        .line {
                            text-decoration: none;
                            color: ${artColor};
                            background: linear-gradient(to right, #e032d9, #29a9df);
                            background-repeat: no-repeat;
                            background-size: $BG1$BG2 1px;
                            background-position: 100% 100%;
                            $BG3
                        }
                        
                        .line:hover {
                            color: ${lighten(0.1, artColor)};
                            $BG4
                            $BG5
                        }
                        `}
            >
                <Frag id="BG1" out={++i} inline code={`100%`} />
                <Frag id="BG2" in={i} inline code={`0%`} />
                <Frag
                    id="BG3"
                    in={++i}
                    indent={1}
                    code={`
	                transition: background-size 0.35s ease;
                    `}
                />
                <Frag
                    id="BG4"
                    in={++i}
                    indent={1}
                    code={`
                    background-size: 100% 1px;
                    `}
                />
                <Frag
                    id="BG5"
                    in={++i}
                    indent={1}
                    code={`
                    background-position: 0% 100%;
                `}
                />
            </Code>
        </>
    )
}
