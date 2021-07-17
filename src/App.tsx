import { useState } from "react"
import CodeEditor from "./components/CodeEditor"

const code = `function add(a, b) {
  return a + b;
}
`;

const App = () => {
  const [value, setValue] = useState(code)
  
  return (
    <div>
      slack-block-builder-viewer
      <CodeEditor value={value} setValue={setValue} />
    </div>
  )
}

export default App
