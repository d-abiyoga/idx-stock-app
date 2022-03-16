import { createApp } from './app';
import { db } from './db';

const app = createApp(db);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Sever listening on port:${port}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});

export default app;
