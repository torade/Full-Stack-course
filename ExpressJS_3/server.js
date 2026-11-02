import express from 'express';
import path from 'path';
import posts from './route/posts.js';
const app = express();
const port = process.env.PORT || 8000;


//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/posts', posts)


app.listen(port, () => console.log(`Server is running on port ${port}`));
