import Editor from 'react-simple-code-editor';
import { Grammar, highlight, languages } from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism.css'

const languageMap: { [id: string]: Grammar } = {
    "js": languages.js,
    "json": languages.json
}

const CodeEditor = ({ language, value, setValue }: { language: string, value: string, setValue?: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <div>
            <Editor
                value={value}
                onValueChange={(code: string) => setValue && setValue(code)}
                highlight={(code: string) => highlight(code, languageMap[language], language)}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 16,
                    backgroundColor: "#F6F6F6",
                    margin: "2rem",
                    border: "1px solid black"
                }}
            />
        </div>
    )
}

export default CodeEditor
