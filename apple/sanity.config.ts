import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/index';

export default defineConfig({
  name: 'default',
  title: 'apple',

  projectId: '4ibnncd8',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
