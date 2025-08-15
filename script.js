// Sample blog post data
const blogPosts = [
    {
        id: 1,
        title: "Bienvenue Sur Immopreneur" ,
        author: "Groupe Marketing",
        date: "15 / 07 /2025",
        contentFile: "posts/post1.html"
        
    },
];

// Function to display blog posts
function displayPosts() {
    const postsContainer = document.getElementById('blogPosts');
    
    blogPosts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.className = 'post';
        postElement.innerHTML = `
            <h2 class="bigtitle">${post.title}</h2>
            <p class="post-meta"> ${post.author} on ${post.date}</p>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href="${post.contentFile}" class="read-more">Read More</a>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Load posts when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayPosts();
    
    // Simple navigation active state
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
});