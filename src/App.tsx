import { useState } from "react"
import CodeEditor from "./components/CodeEditor"
import { Message, Blocks, Elements } from 'slack-block-builder';

const code = `console.log("howdy")`

const App = () => {
  const [value, setValue] = useState(code)
  const [result, setResult] = useState("")

  const evaluateCode = () => {
    try {
      let x = eval(`(function a(Message, Blocks, Elements) { return ${value}.buildToJSON() })`)
      setResult(x(Message, Blocks, Elements))
    } catch (error) {
      setResult(`${error}`)
    }
  }

  return (
    <div>
      <h1>slack-block-builder-viewer</h1>
      <CodeEditor value={value} setValue={setValue} />

      <br />

      <button onClick={evaluateCode}>evaluate</button>

      <br />

      <h2>result</h2>
      {result}
    </div>
  )
}

export default App
