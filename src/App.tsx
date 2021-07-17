import { useState } from "react"
import CodeEditor from "./components/CodeEditor"
import { Message, Blocks, Elements, HomeTab, Modal } from 'slack-block-builder';

const code = `
Message()
    .channel("Channel name")
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
            .danger(),
          Elements.Button()
            .text('One Does Not')
            .actionId('scaredyCat')
            .primary()))
`
const defaultPreviewLink = "https://api.slack.com/tools/block-kit-builder?blocks=%5B%7B%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22One+does+not+simply+walk+into+Slack+and+click+a+button.%22%7D%2C%22type%22%3A%22section%22%7D%2C%7B%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22At+least+that%27s+what+my+friend+Slackomir+said+%3Acrossed_swords%3A%22%7D%2C%22type%22%3A%22section%22%7D%2C%7B%22type%22%3A%22divider%22%7D%2C%7B%22elements%22%3A%5B%7B%22text%22%3A%7B%22type%22%3A%22plain_text%22%2C%22text%22%3A%22Sure+One+Does%22%7D%2C%22action_id%22%3A%22gotClicked%22%2C%22style%22%3A%22danger%22%2C%22type%22%3A%22button%22%7D%2C%7B%22text%22%3A%7B%22type%22%3A%22plain_text%22%2C%22text%22%3A%22One+Does+Not%22%7D%2C%22action_id%22%3A%22scaredyCat%22%2C%22style%22%3A%22primary%22%2C%22type%22%3A%22button%22%7D%5D%2C%22type%22%3A%22actions%22%7D%5D&mode=message"
const defaultResult = `{"channel":"Channel name","text":"Alas, my friend.","blocks":[{"text":{"type":"mrkdwn","text":"One does not simply walk into Slack and click a button."},"type":"section"},{"text":{"type":"mrkdwn","text":"At least that's what my friend Slackomir said :crossed_swords:"},"type":"section"},{"type":"divider"},{"elements":[{"text":{"type":"plain_text","text":"Sure One Does"},"action_id":"gotClicked","style":"danger","type":"button"},{"text":{"type":"plain_text","text":"One Does Not"},"action_id":"scaredyCat","style":"primary","type":"button"}],"type":"actions"}]}`

const App = () => {
  const [value, setValue] = useState(code)
  const [result, setResult] = useState(defaultResult)
  const [previewLink, setPreviewLink] = useState(defaultPreviewLink)
  const [error, setError] = useState("")

  const evaluateCode = () => {
    try {
      const x = eval(`(function a(Message, Blocks, Elements, HomeTab, Modal) { const code = ${value}; const json = code.buildToJSON(); const preview = code.printPreviewUrl(); return [json, preview]; })`)
      const [json, preview] = x(Message, Blocks, Elements, HomeTab, Modal)
      const blocks = JSON.parse(json)["blocks"]

      const q = new URLSearchParams()
      q.append('blocks', JSON.stringify(blocks))
      q.append('mode', 'message')
      setPreviewLink(`https://api.slack.com/tools/block-kit-builder?${q}`)

      setResult(json)
      setError("")
    } catch (error) {
      setResult("")
      setError(`${error}`)
    }
  }

  return (
    <div>
      <h1>slack-block-builder-viewer</h1>
      <CodeEditor language="js" value={value} setValue={setValue} />

      <br />

      <button onClick={evaluateCode}>evaluate</button>

      <br />

      <h2>result</h2>

      <a href={previewLink}>view on slack block builder</a>

      <br />

      <CodeEditor language="json" value={result} />

      <br />

      {error && [<h2>error</h2>, error]}

    </div>
  )
}

export default App
