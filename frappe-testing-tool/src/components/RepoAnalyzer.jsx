import React, { useState, useEffect } from 'react';
import { 
  Box, 
  VStack, 
  Heading, 
  Text, 
  Table, 
  Thead, 
  Tbody, 
  Tr, 
  Th, 
  Td,
  Badge
} from '@chakra-ui/react';

function RepoAnalyzer({ repoUrl }) {
  const [repoDetails, setRepoDetails] = useState(null);
  const [fileStructure, setFileStructure] = useState([]);
  const [testCoverage, setTestCoverage] = useState({
    unitTests: 0,
    integrationTests: 0,
    totalFiles: 0,
    testedFiles: 0
  });

  useEffect(() => {
    // Simulated repo analysis
    const analyzeRepository = async () => {
      // TODO: Implement actual GitHub repo analysis
      setRepoDetails({
        name: repoUrl.split('/').pop(),
        owner: repoUrl.split('/')[3],
        branch: 'main',
        totalCommits: 120,
        lastUpdated: new Date().toLocaleDateString()
      });

      // Mock file structure and test coverage
      setFileStructure([
        { path: 'frappe/tests/test_utils.py', type: 'Test File', coverage: '85%' },
        { path: 'frappe/utils.py', type: 'Source File', coverage: '60%' },
        { path: 'frappe/core/doctype/user/test_user.py', type: 'Test File', coverage: '90%' }
      ]);

      setTestCoverage({
        unitTests: 15,
        integrationTests: 8,
        totalFiles: 50,
        testedFiles: 30
      });
    };

    analyzeRepository();
  }, [repoUrl]);

  return (
    <Box>
      <Heading size="md" mb={4}>Repository Analysis</Heading>
      
      {repoDetails && (
        <VStack align="start" spacing={4}>
          <Box>
            <Text fontWeight="bold">Repository Details</Text>
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Owner</Th>
                  <Th>Branch</Th>
                  <Th>Total Commits</Th>
                  <Th>Last Updated</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>{repoDetails.name}</Td>
                  <Td>{repoDetails.owner}</Td>
                  <Td>{repoDetails.branch}</Td>
                  <Td>{repoDetails.totalCommits}</Td>
                  <Td>{repoDetails.lastUpdated}</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>

          <Box width="100%">
            <Text fontWeight="bold" mb={2}>Test Coverage</Text>
            <VStack align="start" spacing={2}>
              <Text>
                Unit Tests: <Badge colorScheme="green">{testCoverage.unitTests}</Badge>
              </Text>
              <Text>
                Integration Tests: <Badge colorScheme="blue">{testCoverage.integrationTests}</Badge>
              </Text>
              <Text>
                Tested Files: <Badge>{testCoverage.testedFiles} / {testCoverage.totalFiles}</Badge>
              </Text>
            </VStack>
          </Box>

          <Box width="100%">
            <Text fontWeight="bold" mb={2}>File Structure & Coverage</Text>
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <Th>File Path</Th>
                  <Th>Type</Th>
                  <Th>Coverage</Th>
                </Tr>
              </Thead>
              <Tbody>
                {fileStructure.map((file, index) => (
                  <Tr key={index}>
                    <Td>{file.path}</Td>
                    <Td>
                      <Badge 
                        colorScheme={file.type === 'Test File' ? 'green' : 'blue'}
                      >
                        {file.type}
                      </Badge>
                    </Td>
                    <Td>{file.coverage}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </VStack>
      )}
    </Box>
  );
}

export default RepoAnalyzer;
