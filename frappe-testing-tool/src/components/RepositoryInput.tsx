import React, { useState } from 'react';
import { 
  Box, 
  Input, 
  Button, 
  FormControl, 
  FormLabel, 
  VStack,
  useToast
} from '@chakra-ui/react';

interface RepositoryInputProps {
  onAnalyze: (url: string) => void;
}

const RepositoryInput: React.FC<RepositoryInputProps> = ({ onAnalyze }) => {
  const [repositoryUrl, setRepositoryUrl] = useState<string>('');
  const toast = useToast();

  const handleAnalyze = () => {
    // Basic GitHub URL validation
    const githubRegex = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+$/;
    
    if (!githubRegex.test(repositoryUrl)) {
      toast({
        title: "Invalid Repository URL",
        description: "Please enter a valid GitHub repository URL",
        status: "error",
        duration: 3000,
        isClosable: true
      });
      return;
    }

    onAnalyze(repositoryUrl);
  };

  return (
    <Box width="100%">
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>GitHub Repository URL</FormLabel>
          <Input 
            placeholder="https://github.com/frappe/frappe" 
            value={repositoryUrl}
            onChange={(e) => setRepositoryUrl(e.target.value)}
          />
        </FormControl>
        <Button 
          colorScheme="blue" 
          onClick={handleAnalyze}
          width="full"
        >
          Analyze Repository
        </Button>
      </VStack>
    </Box>
  );
};

export default RepositoryInput;
