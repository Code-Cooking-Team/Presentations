import { Deck, Slide } from '@phenomenon/slides'
import { Logo } from 'components/logo/Logo'
import React from 'react'

export const App = () => {
    return (
        <Deck>
            <Slide>
                <div className="App">
                    <Logo in={0} />
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
