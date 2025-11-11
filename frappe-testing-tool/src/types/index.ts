// src/types/index.ts
export interface TestType {
  id: string;
  name: string;
  description: string;
  isSelected?: boolean;
}

export interface RepositoryDetails {
  name: string;
  owner: string;
  branch: string;
  totalCommits: number;
  lastUpdated: string;
}

export interface TestCoverage {
  unitTests: number;
  integrationTests: number;
  totalFiles: number;
  testedFiles: number;
}

export interface TestTool {
  id: string;
  name: string;
  description: string;
}

export interface TestEnvironment {
  id: string;
  name: string;
}

export interface TestConfiguration {
  environment: string;
  selectedTools: string[];
  customConfig?: string;
}
