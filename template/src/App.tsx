import { Deck, Slide } from '@phenomenon/slides'
import { Logo } from 'components/logo/Logo'
import React from 'react'
import { brandColor } from 'styles/colors'

export const App = () => {
    return (
        <Deck>
            <Slide>
                <div className="App">
                    <Logo color={brandColor} in={0} />
                    <h2>Start editing to see some magic happen!</h2>
                </div>
            </Slide>
            <Slide>
                <div className="App">
                    <h1>Hello CodeSandbox</h1>
                    <h2>Start editing to see some magic happen!</h2>
                </div>
            </Slide>
        </Deck>
    )
}
