# Formant OpenAPI Client Code Generator

```bash
npm install
npm run build --workspaces
cd packages/api-client-typescript-axios/
npm install
npm run build
# fix assorted build errors due to errors in generation, 2 at time of writing
# modify .tsconfig to use `"lib": ["es2017", "dom"],`
npm run build
cd ../code-generator
npm run clean-typescript-axios
```
