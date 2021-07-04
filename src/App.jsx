/* eslint no-eval: 0 */
import { useState } from "react"
import words from 'lodash.words'

import Result from "./components/Result"
import MathOperations from "./components/MathOperations"
import Functions from "./components/Functions"
import Numbers from './components/Numbers'

import "./App.css"

const App = () => {
    const [stack, setStack] = useState(``)

    const items = words(stack, /[^-^+^*^/]+/g)
    const value = items.length > 0 ? items[items.length-1] : "0"

    return (
        <main className="react-calculator">
            <Result value={value} />
            <Numbers onClickNumber={number => setStack(`${stack}${number}`)} />
            <Functions onContentClear={() => setStack(``)} onDelete={() => stack.length > 0 && setStack(stack.substring(0,stack.length - 1))} />
            <MathOperations onClickOperation={operation => setStack(`${stack}${operation}`)} onClickEqual={() => setStack(eval(stack).toString())} />
        </main>
    )
}

export default App