import React, { useState } from 'react';
import { 
  Box, 
  VStack, 
  Heading, 
  FormControl, 
  FormLabel, 
  Select, 
  Checkbox, 
  CheckboxGroup,
  Button,
  Text,
  Textarea,
  HStack
} from '@chakra-ui/react';

function TestConfigManager({ repoUrl }) {
  const [testEnvironment, setTestEnvironment] = useState('development');
  const [selectedTestTools, setSelectedTestTools] = useState([]);
  const [customConfig, setCustomConfig] = useState('');

  const TEST_TOOLS = [
    { 
      name: 'Pytest', 
      description: 'Python testing framework',
      key: 'pytest'
    },
    { 
      name: 'Coverage.py', 
      description: 'Code coverage measurement',
      key: 'coverage'
    },
    { 
      name: 'Selenium', 
      description: 'Web browser automation',
      key: 'selenium'
    },
    { 
      name: 'Locust', 
      description: 'Performance testing',
      key: 'locust'
    }
  ];

  const ENVIRONMENTS = [
    { value: 'development', label: 'Development' },
    { value: 'staging', label: 'Staging' },
    { value: 'production', label: 'Production' }
  ];

  const saveTestConfiguration = () => {
    // TODO: Implement configuration saving logic
    const testConfig = {
      environment: testEnvironment,
      selectedTools: selectedTestTools,
      customConfig: customConfig
    };
    console.log('Saving Test Configuration:', testConfig);
  };

  return (
    <Box>
      <Heading size="md" mb={4}>Test Configuration Manager</Heading>
      
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Test Environment</FormLabel>
          <Select 
            value={testEnvironment}
            onChange={(e) => setTestEnvironment(e.target.value)}
          >
            {ENVIRONMENTS.map((env) => (
              <option key={env.value} value={env.value}>
                {env.label}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Select Testing Tools</FormLabel>
          <CheckboxGroup 
            colorScheme="green"
            value={selectedTestTools}
            onChange={setSelectedTestTools}
          >
            <HStack spacing={4}>
              {TEST_TOOLS.map((tool) => (
                <Checkbox key={tool.key} value={tool.key}>
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="bold">{tool.name}</Text>
                    <Text fontSize="xs" color="gray.500">
                      {tool.description}
                    </Text>
                  </VStack>
                </Checkbox>
              ))}
            </HStack>
          </CheckboxGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Custom Test Configuration</FormLabel>
          <Textarea 
            placeholder="Enter custom test configuration (JSON/YAML)"
            value={customConfig}
            onChange={(e) => setCustomConfig(e.target.value)}
            rows={6}
          />
        </FormControl>

        <Button 
          colorScheme="blue" 
          onClick={saveTestConfiguration}
        >
          Save Test Configuration
        </Button>
      </VStack>
    </Box>
  );
}

export default TestConfigManager;
