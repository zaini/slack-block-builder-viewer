import { useState } from "react"
import CodeEditor from "./components/CodeEditor"
import { Message, Blocks, Elements } from 'slack-block-builder';

const test = `
const x = () => {
  return Message({ channel, text: 'Alas, my friend.' }).blocks(
    Blocks.Section({ text: 'One does not simply walk into Slack and click a button.' }),
    Blocks.Section({ text: 'At least that\'s what my friend Slackomir said :crossed_swords:' }
    ).buildToJSON()
}
`;

const code = `console.log("howdy")`

const evaluateCode = () => {
  const evaluation = eval(`${test}`)
  console.log("" + evaluation)
}

const App = () => {
  const [value, setValue] = useState(test)
  const [result, setResult] = useState("")

  return (
    <div>
      slack-block-builder-viewer
      <CodeEditor value={value} setValue={setValue} />

      <br />

      <button onClick={evaluateCode}>evaluate code</button>

      <br />

      result
      {result}
    </div>
  )
}

export default App
