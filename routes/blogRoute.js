const express = require('express')

const userAuthentication = require('../middleware/authToken');
const blog = require('../controller/blogController');
const blogValidator = require('../validations/blog/blogValidator');
const { upload } = require('../middleware/blogImageStorage')

const router = express.Router()

router.post('/createBlog/:id', userAuthentication, upload.single('blogImage'), blogValidator.createBlog, blog.createBlog)
router.patch('/updateBlog/:id', userAuthentication, blog.updateBlog)
router.delete('/deleteBlog/:id', userAuthentication, blog.deleteBlog)
router.get('/searchBlog/:letter', userAuthentication, blog.blogSearch)
router.get('/detailBlog/:id', userAuthentication, blog.blogDetails)
router.get('/trendingBlogs', userAuthentication, blog.trendingBlogs)
router.get('/allBlogs', userAuthentication, blog.allBlogs)
router.get('/likeBlog', userAuthentication, blog.likeBlog)

module.exports = router
