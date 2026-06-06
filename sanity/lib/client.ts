import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '../env'

// Create a client instance, but only if projectId is provided and looks valid
// This prevents build-time crashes on Vercel
export const client = createClient({
  apiVersion,
  dataset,
  projectId: projectId && projectId !== 'your-project-id' ? projectId : 'placeholder-id',
  useCdn,
})
