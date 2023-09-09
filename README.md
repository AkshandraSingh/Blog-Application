# Blog Application 📝

Welcome to the Blog Application! This platform lets you share and discover amazing blogs built with Express.js and MongoDB. Express yourself, connect with others, and find inspiration! 🚀

## Table of Contents 📚

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Contributing](#contributing)

## Features 🌈

- ✨ **User Authentication:** Secure user registration and authentication.

- 📝 **Create, Edit, and Delete Blogs:** Share your thoughts, stories, and ideas effortlessly.

- 💬 **Comment on Blogs:** Engage in discussions and connect with fellow bloggers.

- ❤️ **Like Blogs:** Show appreciation with a simple click.

- 🔍 **Search for Blogs:** Find blogs using powerful keyword search.

- 📈 **View Trending Blogs:** Stay updated with popular blogs.

- 🗃️ **View All Blogs and User-Specific Blogs:** Explore diverse content.

## Prerequisites 🛠️

Before you start, ensure you have:

- 📡 Node.js and npm installed.

- 📦 MongoDB database set up.

- 🔑 Necessary environment variables configured.

## Installation 🚀

Getting started is easy:

1. 📥 Clone the repository:

   ```bash
   git clone https://github.com/ishansingh1010/Blog-Application
   ```

2. 📂 Change to the project directory:

   ```bash
   cd Blog-Application
   ```

3. 📦 Install dependencies:

   ```bash
   npm install
   ```

## Usage 🚦

Follow these steps:

1. 📝 Set up environment variables in a `.env` file.

2. 🚀 Start the application:

   ```bash
   npm start
   ```

3. 🌐 Access the application at `http://localhost:8000`.

## API Routes 🚀

Explore the API routes:

### User Routes 👤

- `/createUser`: POST route for user registration.
- `/loginUser`: POST route for user login.
- `/sendMail`: POST route to send password reset emails.
- `/resetPassword/:id/:token`: POST route to reset passwords.
- `/editProfile/:id`: PATCH route for editing user profiles.
- `/setNewPassword/:id`: PATCH route to set new passwords.

### Blog Routes 📚

- `/createBlog/:id`: POST route to create a new blog.
- `/updateBlog/:id`: PATCH route to update a blog.
- `/deleteBlog/:id`: DELETE route to delete a blog.
- `/searchBlog/:letter`: GET route to search for blogs by a keyword.
- `/detailBlog/:id`: GET route to view detailed information about a blog.
- `/trendingBlogs`: GET route to fetch trending blogs.
- `/allBlogs`: GET route to view all blogs.
- `/likeBlog`: GET route to like a blog.
- `/myBlogs/:userId`: GET route to view blogs specific to a user.

### Comment Routes 💬

- `/createComment`: POST route to create a new comment.
- `/updateComment/:id`: PATCH route to update a comment.
- `/deleteComment/:id`: DELETE route to delete a comment.

## Contributing 🤝

We welcome your contributions to make this application better! Here's how you can get involved:

1. 🍴 Fork the repository on GitHub.

2. 🧰 Clone your forked repository to your local machine.

3. 🌟 Create a new branch for your feature or bug fix.

4. 📦 Make your changes and commit them with clear and concise commit messages.

5. 🚀 Push your changes to your forked repository.

6. 🔄 Create a pull request to merge your changes into the main repository.

Join us in shaping the future of blogging with the Blog Application! 📢
