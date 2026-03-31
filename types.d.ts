declare module 'vite-plugin-eslint' {
  import { Plugin } from 'vite';
  const eslint: (options?: any) => Plugin;
  export default eslint;
}