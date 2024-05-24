import express from 'express'; 

// For starting install: 

// yarn add typescript -D
// yarn add express
// yarn add -D @types/express

// For executing -> yarn tsc src/index.ts

// If the error export occurs you need to run `yarn tsc --init` for creating tsconfig.json
// And after just running `yarn tsc`

// Then you need to run `node src/index.ts`
  
const app = express();

app.get('/', );

app.listen(3333);