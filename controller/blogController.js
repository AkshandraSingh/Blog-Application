const blogSchema = require('../models/blogSchema');
const commentSchema = require('../models/commentSchema');
const userSchema = require('../models/userSchema');
const blogLogger = require('../utils/blogLogger/blogLogger');
const { mailOptions } = require('../services/emailService');

module.exports = {
    createBlog: async (req, res) => {
        try {
            const userId = req.params.id
            const blogData = new blogSchema(req.body);
            const userData = await userSchema.findById(userId);
            const blogImage = req.file ? `/upload/userProfile/${req.file.filename}` : undefined
            blogData.blogImage = blogImage
            blogData.userId = userId
            await mailOptions(userData.userEmail, 1);
            await blogData.save();
            blogLogger.log('info', "Blog Created Successfully .")
            res.status(201).send({
                success: true,
                message: "Blog Created Successfully ."
            });
        } catch (error) {
            blogLogger.log('error', `Error: ${error.message}`)
            res.status(500).send({
                success: false,
                message: "Error Occurs .",
                error: error.message
            });
        }
    },

    updateBlog: async (req, res) => {
        try {
            const blogID = req.params.id;
            const blogData = await blogSchema.findByIdAndUpdate(blogID, req.body, {
                new: true,
            });
            blogLogger.log('info', "Your blog updated Successfully .")
            res.status(200).send({
                success: true,
                message: 'Your blog updated Successfully .'
            })
        }
        catch (error) {
            blogLogger.log('error', `Error: ${error.message}`)
            res.status(500).send({
                success: false,
                message: "Error",
                error: error.message
            })
        }
    },

    deleteBlog: async (req, res) => {
        try {
            const blogID = req.params.id;
            const blogData = await blogSchema.findByIdAndDelete(blogID);
            blogLogger.log('info', "Your blog Deleted Successfully .")
            res.status(200).send({
                success: true,
                message: 'Your blog Deleted Successfully .'
            })
        }
        catch {
            blogLogger.log('error', `Error: ${error.message}`)
            res.status(500).send({
                success: false,
                message: "Error",
                error: error.message
            })
        }
    },

    blogSearch: async (req, res) => {
        try {
            const letter = req.params.letter;
            const blogSearch = await blogSchema.find({ blogTopic: { $regex: `^${letter}`, $options: "i" } })
                .select('blogTopic');
            blogLogger.log('info', "Blogs Founded.")
            res.status(200).json({
                success: true,
                message: 'Blogs Which Found.',
                blogTopic: blogSearch
            });
        } catch (err) {
            blogLogger.log('error', `Error: ${err.message}`)
            res.status(500).json({
                success: false,
                message: err.message
            });
        }
    },

    blogDetails: async (req, res) => {
        const id = req.params.id;
        try {
            const blogData = await blogSchema.findById(id).select("blogTopic blogDescription blogLikes")
                .populate({ path: "userId", select: "userName" });
            if (!blogData) {
                return res.status(404).json({
                    success: false,
                    message: 'Blog not found'
                });
            }
            const commentData = await commentSchema
                .find({ blogId: id })
                .populate({ path: "userId", select: "userName" });
            blogLogger.log('info', "Blog Detail.")
            res.status(200).json({
                success: true,
                message: 'Blog Detail.',
                blog: blogData,
                comments: commentData
            });
        } catch (err) {
            blogLogger.log('error', `Error: ${err.message}`)
            res.status(500).json({
                success: false,
                message: 'Internal Server Error',
                error: err.message
            });
        }
    },

    trendingBlogs: async (req, res) => {
        try {
            const topBlogs = await blogSchema.find({})
                .sort({ blogLikes: -1 })
            // * Ascending order me data lae ga .
            blogLogger.log('info', "Trending Blogs Found!")
            res.status(200).send({
                success: true,
                message: "Trending Blogs!!",
                topBlogs: topBlogs
            })
        } catch (error) {
            blogLogger.log('error', `Error: ${error.message}`)
            res.status(500).json({
                success: false,
                error: `Error occur : ${error.message}`,
            });
        }
    },

    allBlogs: async (req, res) => {
        try {
            const allBlogs = await blogSchema.find({})
            blogLogger.log('info', "All blogs")
            res.status(200).send({
                success: true,
                message: "All blogs!",
                allBlogs: allBlogs
            })
        } catch (error) {
            blogLogger.log('error', `Error: ${error.message}`)
            res.status(500).json({
                success: false,
                error: `Error occurred: ${error.message}`,
            });
        }
    },

    likeBlog: async (req, res) => {
        try {
            const { userId, blogId } = req.query;
            const blogData = await blogSchema.findById(blogId);
            const userData = await userSchema.findById(userId)
            const userEmail = userData.userEmail
            if (blogData.likedBy.includes(userEmail)) {
                const userIndex = blogData.likedBy.indexOf(userEmail);
                blogData.blogLikes--;
                blogData.likedBy.splice(userIndex, 1);
                await blogData.save();
                return res.status(400).json({
                    success: false,
                    message: "You remove the like"
                });
            }
            blogData.blogLikes++;
            blogData.likedBy.push(userEmail);
            await blogData.save();
            blogLogger.log('info', "You liked the blog!");
            res.status(200).send({
                success: true,
                message: "You liked the blog!"
            });
        } catch (error) {
            blogLogger.log('error', `Error: ${error.message}`);
            res.status(500).json({
                success: false,
                error: `Error occurred: ${error.message}`,
            });
        }
    },

    myBlogs: async (req, res) => {
        try {
            const { userId } = req.params
            const userPost = await blogSchema.find({
                userId: userId
            })
            blogLogger.log('info', 'User blog found')
            res.status(200).send({
                success: true,
                message: "Your blogs",
                postData: userPost,
            })
        } catch (error) {
            blogLogger.log('error', `Error: ${error.message}`);
            res.status(500).json({
                success: false,
                error: `Error occurred: ${error.message}`,
            });
        }
    }
}
