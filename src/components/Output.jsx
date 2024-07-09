import { Box, Text, Button } from '@chakra-ui/react';
import { executeCode } from '../api';


const Output = (props) => {
  const { editorRef, language } = props;

  const runCode = async () => {
    console.log('runCode');
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      const {} = await executeCode(language, sourceCode);
    } catch (error) {}
  };

  return (
    <Box>
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Button variant="outline" colorScheme="green" mb={4} onClick={runCode}>
        ▶
      </Button>
      <Box
        height="40vh"
        p={2}
        border="1px solid"
        borderRadius={4}
        borderColor="#333"
      >
        test
      </Box>
    </Box>
  );
};

export default Output;
