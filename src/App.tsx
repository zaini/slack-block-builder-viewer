import { useState } from "react"
import CodeEditor from "./components/CodeEditor"
import { Message, Blocks, Elements } from 'slack-block-builder';

const variables = `
let channel = "channelname";
let dangerLevel = 50;
`

const code = `
Message()
    .channel(channel)
    .text('Alas, my friend.')
    .blocks(
      Blocks.Section()
        .text('One does not simply walk into Slack and click a button.'),
      Blocks.Section()
        .text('At least that\\'s what my friend Slackomir said :crossed_swords:'),
      Blocks.Divider(),
      Blocks.Actions()
        .elements(
          Elements.Button()
            .text('Sure One Does')
            .actionId('gotClicked')
            .danger(dangerLevel > 42), // Optional argument, defaults to 'true'
          Elements.Button()
            .text('One Does Not')
            .actionId('scaredyCat')
            .primary()))
`

const App = () => {
  const [value, setValue] = useState(code)
  const [result, setResult] = useState("")
  const [error, setError] = useState("")

  const evaluateCode = () => {
    try {
      const x = eval(`(function a(Message, Blocks, Elements) { ${variables} const res = ${value}.buildToJSON(); return res; })`)
      const res = x(Message, Blocks, Elements)
      setResult(res)
    } catch (error) {
      setResult("")
      setError(`${error}`)
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

      <br />

      {error && [<h2>error</h2>, error]}

    </div>
  )
}

export default App
