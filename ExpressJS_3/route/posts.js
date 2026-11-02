import express from 'express';
const router = express.Router();

//setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    { id:1, title: 'Post 1'},
    { id:2, title: 'Post 2'},
    { id:3, title: 'Post 3'}
]

//get all posts
router.get('/', (req, res, next) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }
    
    res.status(200).json(posts);
})

//get a single post
router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error('Post not found');
        error.status = 404
        return next(error);
    }
    res.status(200).json(post);
})

//create new post
router.post('/', (req, res, next) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }
    if (!newPost.title) {
        const error = new Error('Please include a title');
        error.status = 400;
        return next(error);
    }
    posts.push(newPost);
    res.status(201).json(newPost);
})

//update a post
router.put('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error('Post not found');
        error.status = 404
        return next(error);
    }

    post.title = req.body.title;
    res.status(200).json(posts);
})


//delete a post
router.delete('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error('Post not found');
        error.status = 404;
        return next(error);
    }

    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
})

export default router;
