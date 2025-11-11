import React from 'react';
import { 
  Box, 
  VStack, 
  Heading, 
  Table, 
  Thead, 
  Tbody, 
  Tr, 
  Th, 
  Td,
  Badge,
  SimpleGrid,
  Text
} from '@chakra-ui/react';

import { RepositoryDetails, TestCoverage } from '../types';

interface RepositoryAnalysisProps {
  details: RepositoryDetails | null;
  coverage: TestCoverage | null;
}

const RepositoryAnalysis: React.FC<RepositoryAnalysisProps> = ({ details, coverage }) => {
  if (!details || !coverage) {
    return <Box>No repository analysis available</Box>;
  }

  return (
    <VStack spacing={6} align="stretch">
      <Box>
        <Heading size="md" mb={4}>Repository Details</Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Property</Th>
              <Th>Value</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Name</Td>
              <Td>{details.name}</Td>
            </Tr>
            <Tr>
              <Td>Owner</Td>
              <Td>{details.owner}</Td>
            </Tr>
            <Tr>
              <Td>Branch</Td>
              <Td>{details.branch}</Td>
            </Tr>
            <Tr>
              <Td>Total Commits</Td>
              <Td>{details.totalCommits}</Td>
            </Tr>
            <Tr>
              <Td>Last Updated</Td>
              <Td>{details.lastUpdated}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Box>
        <Heading size="md" mb={4}>Test Coverage</Heading>
        <SimpleGrid columns={2} spacing={4}>
          <Box p={4} bg="gray.100" borderRadius="md">
            <Text fontWeight="bold">Unit Tests</Text>
            <Badge colorScheme="green" fontSize="lg">
              {coverage.unitTests}
            </Badge>
          </Box>
          <Box p={4} bg="gray.100" borderRadius="md">
            <Text fontWeight="bold">Integration Tests</Text>
            <Badge colorScheme="blue" fontSize="lg">
              {coverage.integrationTests}
            </Badge>
          </Box>
          <Box p={4} bg="gray.100" borderRadius="md">
            <Text fontWeight="bold">Total Files</Text>
            <Badge colorScheme="purple" fontSize="lg">
              {coverage.totalFiles}
            </Badge>
          </Box>
          <Box p={4} bg="gray.100" borderRadius="md">
            <Text fontWeight="bold">Tested Files</Text>
            <Badge colorScheme="orange" fontSize="lg">
              {coverage.testedFiles} ({((coverage.testedFiles / coverage.totalFiles) * 100).toFixed(2)}%)
            </Badge>
          </Box>
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

export default RepositoryAnalysis;
