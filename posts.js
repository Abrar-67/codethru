// posts.js

// AI Safety Filter for dangerous words
const dangerousWords = ['badword1', 'badword2', 'badword3'];

function containsDangerousWords(text) {
    return dangerousWords.some(word => text.includes(word));
}

// Function to create a post
function createPost(title, content) {
    if (containsDangerousWords(content)) {
        console.log('Post contains dangerous words. Cannot create post.');
        return;
    }
    const post = { title, content, likes: 0, comments: [] };
    // Here you would typically save the post to a database
    console.log('Post created:', post);
}

// Function to display posts
function displayPosts(posts) {
    posts.forEach(post => {
        console.log(`Title: ${post.title}`);
        console.log(`Content: ${post.content}`);
        console.log(`Likes: ${post.likes}`);
        console.log(`Comments: ${post.comments.length} comments`);
        console.log('-------------------');
    });
}

// Function to like a post
function likePost(post) {
    post.likes += 1;
    console.log('Post liked! Total likes: ', post.likes);
}

// Function to comment on a post
function commentOnPost(post, comment) {
    if (containsDangerousWords(comment)) {
        console.log('Comment contains dangerous words. Cannot add comment.');
        return;
    }
    post.comments.push(comment);
    console.log('Comment added:', comment);
}

// Example usage
const posts = [];
createPost('My First Post', 'This is the content of my first post.');
createPost('My Second Post', 'This contains badword1.'); // This post should be blocked

const myPost = { title: 'My First Post', content: 'This is the content of my first post.', likes: 0, comments: [] };
likePost(myPost);
commentOnPost(myPost, 'Great post!');  
commentOnPost(myPost, 'This is badword2 comment.'); // This comment should be blocked

displayPosts(posts);
