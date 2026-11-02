import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import posts from './route/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
const app = express();
const port = process.env.PORT || 8000;

//get directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//logger middleware
app.use(logger);

//setup static folder
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api/posts', posts)

app.use(notFound);

//error handler
app.use(errorHandler);


app.listen(port, () => console.log(`Server is running on port ${port}`));
