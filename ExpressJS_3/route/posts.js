import express from 'express';
import { getPosts, getPost, createPost, updatePost, deletePost} from '../controllers/postController.js';
const router = express.Router();

//setup static folder
// app.use(express.static(path.join(__dirname, 'public')));



//get all posts
router.get('/', getPosts)

//get a single post
router.get('/:id', getPost)

//create new post
router.post('/', createPost)

//update a post
router.put('/:id', updatePost)


//delete a post
router.delete('/:id', deletePost)

export default router;
