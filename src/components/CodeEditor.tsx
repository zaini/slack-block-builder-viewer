import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';

const CodeEditor = ({ value, setValue }: { value: string, setValue: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <div>
            editor

            <Editor
                value={value}
                onValueChange={(code: string) => setValue(code)}
                highlight={(code: string) => highlight(code, languages.js, 'js')}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 16,
                }}
            />
        </div>
    )
}

export default CodeEditor
