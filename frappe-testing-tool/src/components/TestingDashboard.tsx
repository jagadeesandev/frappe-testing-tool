import React, { useState } from 'react';
import { 
  Box, 
  VStack, 
  Heading, 
  Checkbox, 
  CheckboxGroup, 
  Button, 
  Text, 
  SimpleGrid,
  useToast
} from '@chakra-ui/react';

import { TestType } from '../types';

interface TestingDashboardProps {
  repositoryUrl: string;
}

const TEST_TYPES: TestType[] = [
  {
    id: 'unit',
    name: 'Unit Testing',
    description: 'Test individual components or functions in isolation'
  },
  {
    id: 'integration',
    name: 'Integration Testing',
    description: 'Verify interaction between different modules and components'
  },
  {
    id: 'system',
    name: 'System Testing',
    description: 'Evaluate the complete and integrated software system'
  },
  {
    id: 'functional',
    name: 'Functional Testing',
    description: 'Validate that each function meets specific requirements'
  },
  {
    id: 'performance',
    name: 'Performance Testing',
    description: 'Measure system responsiveness and stability'
  }
];

const TestingDashboard: React.FC<TestingDashboardProps> = ({ repositoryUrl }) => {
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  const toast = useToast();

  const handleTestExecution = () => {
    if (selectedTests.length === 0) {
      toast({
        title: "No Tests Selected",
        description: "Please select at least one test type",
        status: "warning",
        duration: 3000,
        isClosable: true
      });
      return;
    }

    // TODO: Implement actual test execution logic
    toast({
      title: "Tests Initiated",
      description: `Running tests: ${selectedTests.join(', ')}`,
      status: "success",
      duration: 3000,
      isClosable: true
    });
  };

  return (
    <Box>
      <Heading size="md" mb={4}>Test Selection</Heading>
      
      <CheckboxGroup 
        colorScheme="green"
        value={selectedTests}
        onChange={(value) => setSelectedTests(value as string[])}
      >
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {TEST_TYPES.map((testType) => (
            <Checkbox 
              key={testType.id} 
              value={testType.id}
            >
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold">{testType.name}</Text>
                <Text fontSize="xs" color="gray.500">
                  {testType.description}
                </Text>
              </VStack>
            </Checkbox>
          ))}
        </SimpleGrid>
      </CheckboxGroup>

      <Button 
        mt={4} 
        colorScheme="blue" 
        onClick={handleTestExecution}
        width="full"
      >
        Run Selected Tests
      </Button>
    </Box>
  );
};

export default TestingDashboard;
