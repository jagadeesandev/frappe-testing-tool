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
  Textarea,
  useToast
} from '@chakra-ui/react';

import { TestTool, TestEnvironment, TestConfiguration } from '../types';

interface TestConfigurationProps {
  repositoryUrl: string;
}

const TEST_ENVIRONMENTS: TestEnvironment[] = [
  { id: 'development', name: 'Development' },
  { id: 'staging', name: 'Staging' },
  { id: 'production', name: 'Production' }
];

const TEST_TOOLS: TestTool[] = [
  { 
    id: 'pytest', 
    name: 'Pytest', 
    description: 'Python testing framework' 
  },
  { 
    id: 'coverage', 
    name: 'Coverage.py', 
    description: 'Code coverage measurement' 
  },
  { 
    id: 'selenium', 
    name: 'Selenium', 
    description: 'Web browser automation testing' 
  }
];

const TestConfiguration: React.FC<TestConfigurationProps> = ({ repositoryUrl }) => {
  const [environment, setEnvironment] = useState<string>('development');
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [customConfig, setCustomConfig] = useState<string>('');
  const toast = useToast();

  const handleConfigSave = () => {
    const testConfiguration: TestConfiguration = {
      environment,
      selectedTools,
      customConfig
    };

    // TODO: Implement actual configuration saving logic
    toast({
      title: "Configuration Saved",
      description: "Test configuration has been saved successfully",
      status: "success",
      duration: 3000,
      isClosable: true
    });

    console.log('Saved Configuration:', testConfiguration);
  };

  return (
    <Box>
      <Heading size="md" mb={4}>Test Configuration</Heading>
      
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Test Environment</FormLabel>
          <Select 
            value={environment}
            onChange={(e) => setEnvironment(e.target.value)}
          >
            {TEST_ENVIRONMENTS.map((env) => (
              <option key={env.id} value={env.id}>
                {env.name}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Select Testing Tools</FormLabel>
          <CheckboxGroup 
            colorScheme="green"
            value={selectedTools}
            onChange={(value) => setSelectedTools(value as string[])}
          >
            <VStack align="start">
              {TEST_TOOLS.map((tool) => (
                <Checkbox key={tool.id} value={tool.id}>
                  {tool.name} - {tool.description}
                </Checkbox>
              ))}
            </VStack>
          </CheckboxGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Custom Configuration</FormLabel>
          <Textarea 
            placeholder="Enter custom test configuration (JSON/YAML)"
            value={customConfig}
            onChange={(e) => setCustomConfig(e.target.value)}
            rows={6}
          />
        </FormControl>

        <Button 
          colorScheme="blue" 
          onClick={handleConfigSave}
          width="full"
        >
          Save Configuration
        </Button>
      </VStack>
    </Box>
  );
};

export default TestConfiguration;
