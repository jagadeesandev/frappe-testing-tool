import React, { useState } from 'react';
import { 
  Box, 
  VStack, 
  Heading, 
  Checkbox, 
  CheckboxGroup, 
  Button, 
  SimpleGrid,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react';

const TEST_TYPES = [
  {
    name: 'Unit Testing',
    description: 'Test individual components or functions in isolation',
    key: 'unit'
  },
  {
    name: 'Integration Testing', 
    description: 'Verify interaction between different modules and components',
    key: 'integration'
  },
  {
    name: 'System Testing',
    description: 'Evaluate complete and integrated software system',
    key: 'system'
  },
  {
    name: 'Functional Testing',
    description: 'Validate software functions against requirements',
    key: 'functional'
  },
  {
    name: 'Performance Testing',
    description: 'Measure system responsiveness and stability',
    key: 'performance'
  },
  {
    name: 'Security Testing',
    description: 'Identify vulnerabilities and check security mechanisms',
    key: 'security'
  },
  {
    name: 'User Acceptance Testing',
    description: 'Final validation by end-users',
    key: 'uat'
  },
  {
    name: 'Regression Testing',
    description: 'Ensure new changes do not break existing functionality',
    key: 'regression'
  },
  {
    name: 'Mobile & Responsive Testing',
    description: 'Validate application performance across devices',
    key: 'mobile'
  },
  {
    name: 'Compatibility Testing',
    description: 'Verify functionality across different environments',
    key: 'compatibility'
  }
];

function TestingDashboard({ repoUrl }) {
  const [selectedTests, setSelectedTests] = useState([]);

  const handleTestSelection = (tests) => {
    setSelectedTests(tests);
  };

  const runSelectedTests = () => {
    // TODO: Implement actual test runner logic
    console.log('Running tests:', selectedTests);
  };

  return (
    <Box>
      <Heading size="md" mb={4}>Frappe Testing Dashboard</Heading>
      
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Select Testing Types
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <CheckboxGroup 
              colorScheme="green" 
              value={selectedTests}
              onChange={handleTestSelection}
            >
              <SimpleGrid columns={[1, 2, 3]} spacing={4}>
                {TEST_TYPES.map((testType) => (
                  <Checkbox 
                    key={testType.key} 
                    value={testType.key}
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
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Button 
        mt={4} 
        colorScheme="blue" 
        onClick={runSelectedTests}
        isDisabled={selectedTests.length === 0}
      >
        Run Selected Tests
      </Button>
    </Box>
  );
}

export default TestingDashboard;
