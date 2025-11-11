import React, { useState } from 'react';
import { 
  ChakraProvider, 
  Box, 
  VStack, 
  Container, 
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel 
} from '@chakra-ui/react';

// Import components
import RepositoryInput from './components/RepositoryInput';
import TestingDashboard from './components/TestingDashboard';
import RepositoryAnalysis from './components/RepositoryAnalysis';
import TestConfiguration from './components/TestConfiguration';

// Import types
import { 
  RepositoryDetails, 
  TestCoverage 
} from './types';

const App: React.FC = () => {
  const [repositoryUrl, setRepositoryUrl] = useState<string>('');
  const [repositoryAnalyzed, setRepositoryAnalyzed] = useState<boolean>(false);
  const [repositoryDetails, setRepositoryDetails] = useState<RepositoryDetails | null>(null);
  const [testCoverage, setTestCoverage] = useState<TestCoverage | null>(null);

  const handleRepositoryAnalysis = async (url: string) => {
    try {
      // Simulated repository analysis
      setRepositoryUrl(url);
      setRepositoryAnalyzed(true);

      // Mock repository details
      setRepositoryDetails({
        name: url.split('/').pop() || 'Unknown',
        owner: url.split('/')[3] || 'Unknown',
        branch: 'main',
        totalCommits: 120,
        lastUpdated: new Date().toLocaleDateString()
      });

      // Mock test coverage
      setTestCoverage({
        unitTests: 15,
        integrationTests: 8,
        totalFiles: 50,
        testedFiles: 30
      });
    } catch (error) {
      console.error('Repository analysis failed', error);
      // Handle error
    }
  };

  return (
    <ChakraProvider>
      <Container maxW="container.xl" py={10}>
        <VStack spacing={6}>
          <RepositoryInput onAnalyze={handleRepositoryAnalysis} />

          {repositoryAnalyzed && (
            <Box width="100%">
              <Tabs variant="enclosed">
                <TabList>
                  <Tab>Testing Dashboard</Tab>
                  <Tab>Repository Analysis</Tab>
                  <Tab>Test Configuration</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <TestingDashboard repositoryUrl={repositoryUrl} />
                  </TabPanel>
                  <TabPanel>
                    <RepositoryAnalysis 
                      details={repositoryDetails} 
                      coverage={testCoverage} 
                    />
                  </TabPanel>
                  <TabPanel>
                    <TestConfiguration repositoryUrl={repositoryUrl} />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          )}
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default App;
