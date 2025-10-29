import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
import { codeInput } from '@sanity/code-input';
import { structureTool } from 'sanity/structure';

import { schemaTypes } from './src/schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'portfolio',
  projectId: '19lqd67t',
  dataset: 'production',
  plugins: [structureTool(), visionTool(), codeInput()],
  schema: {
    types: schemaTypes,
  },
});
