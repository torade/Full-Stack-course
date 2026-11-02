import express from 'express';
import path from 'path';
import posts from './route/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
const app = express();
const port = process.env.PORT || 8000;


//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//logger middleware
app.use(logger);

// routes
app.use('/api/posts', posts)

//error handler
app.use(errorHandler);


app.listen(port, () => console.log(`Server is running on port ${port}`));
