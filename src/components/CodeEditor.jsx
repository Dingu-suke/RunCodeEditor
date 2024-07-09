import { Box } from '@chakra-ui/react';
import { Editor } from '@monaco-editor/react';
import { useRef, useState } from 'react';
import LanguageSelector from './LanguageSelector';

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState('');

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  }

  return (
    <Box>
      <LanguageSelector/>
      <Editor
        height="90vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={onMount}
        value={value}
        onChange={(value) => setValue(value)}
      />
    </Box>
  );
};
export default CodeEditor;