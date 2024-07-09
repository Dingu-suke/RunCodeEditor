import { Box, Text, Button, useToast } from '@chakra-ui/react';
import { executeCode } from '../api';
import { useState } from 'react';


const Output = (props) => {  
  const { editorRef, language } = props;
  const toast = useToast();
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const runCode = async () => {
    console.log('runCode');
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true)
      const {run:result} = await executeCode(language, sourceCode);
      setOutput(result.output)
    } catch (error) {  
      console.log(error);
      toast({
            title: "An error occurred.",            
            description: error.message || "Unable to run code",
            status: "error",
            duration: 2500,
      })
    } finally {
      setIsLoading(false);
    }  
  };

  return (
    <Box>
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Button variant="outline" colorScheme="green" mb={4} isLoading={isLoading} onClick={runCode}>
        ▶
      </Button>
      <Box
        height="40vh"
        p={2}
        border="1px solid"
        borderRadius={4}
        borderColor="#333"
      >
        {output ? output : "Click ▶️ to see the output here"}
      </Box>
    </Box>
  );
};

export default Output;
