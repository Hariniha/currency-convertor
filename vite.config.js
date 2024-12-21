import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

// https://vite.dev/config/
dotenv.config({ path: '.custom-env' });
export default defineConfig({
  plugins: [react()],
})
