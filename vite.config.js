import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/GithubActionsDemo/', // Add this line to set the base path
  plugins: [react()],
});
