import React, { useState } from 'react';
import { 
  ChakraProvider, 
  Box, 
  VStack, 
  Heading, 
  Container, 
  FormControl, 
  FormLabel, 
  Input, 
  Button, 
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel,
  useToast
} from '@chakra-ui/react';
import TestingDashboard from './components/TestingDashboard';
import RepoAnalyzer from './components/RepoAnalyzer';
import TestConfigManager from './components/TestConfigManager';

function App() {
  const [githubRepo, setGithubRepo] = useState('');
  const [repoAnalyzed, setRepoAnalyzed] = useState(false);
  const toast = useToast();

  const handleRepoSubmit = async () => {
    try {
      // Validate GitHub repo URL
      const repoUrlPattern = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+$/;
      if (!repoUrlPattern.test(githubRepo)) {
        toast({
          title: "Invalid GitHub Repository",
          description: "Please enter a valid GitHub repository URL",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      // TODO: Implement GitHub repo cloning and analysis logic
      // This would typically involve backend API call to clone and analyze repo
      setRepoAnalyzed(true);
      
      toast({
        title: "Repository Analyzed",
        description: "Your repository has been successfully loaded for testing",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Analysis Error",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <ChakraProvider>
      <Container maxW="container.xl" py={10}>
        <VStack spacing={6}>
          <Heading>Frappe Framework Testing Tool</Heading>
          
          <Box width="100%">
            <FormControl>
              <FormLabel>GitHub Repository URL</FormLabel>
              <Input 
                placeholder="https://github.com/username/repo" 
                value={githubRepo}
                onChange={(e) => setGithubRepo(e.target.value)}
              />
              <Button 
                mt={4} 
                colorScheme="blue" 
                onClick={handleRepoSubmit}
              >
                Analyze Repository
              </Button>
            </FormControl>
          </Box>

          {repoAnalyzed && (
            <Tabs variant="enclosed" width="100%">
              <TabList>
                <Tab>Test Dashboard</Tab>
                <Tab>Repository Analysis</Tab>
                <Tab>Test Configuration</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <TestingDashboard repoUrl={githubRepo} />
                </TabPanel>
                <TabPanel>
                  <RepoAnalyzer repoUrl={githubRepo} />
                </TabPanel>
                <TabPanel>
                  <TestConfigManager repoUrl={githubRepo} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          )}
        </VStack>
      </Container>
    </ChakraProvider>
  );
}

export default App;
