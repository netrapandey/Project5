// Sample blog data
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with JavaScript",
        excerpt: "Learn the fundamentals of JavaScript and how to start building interactive websites.",
        category: "JavaScript",
        author: "John Smith",
        date: "April 10, 2023",
        image: "https://source.unsplash.com/random/600x400/?coding"
    },
    {
        id: 2,
        title: "CSS Grid Layout Explained",
        excerpt: "A comprehensive guide to using CSS Grid for modern web layouts.",
        category: "CSS",
        author: "Sarah Johnson",
        date: "March 28, 2023",
        image: "https://source.unsplash.com/random/600x400/?design"
    },
    {
        id: 3,
        title: "The Power of Semantic HTML",
        excerpt: "Why semantic HTML matters for accessibility and SEO in modern web development.",
        category: "HTML",
        author: "Mike Williams",
        date: "March 15, 2023",
        image: "https://source.unsplash.com/random/600x400/?html"
    },
    {
        id: 4,
        title: "Responsive Design Principles",
        excerpt: "Key principles to follow when creating responsive websites that work on all devices.",
        category: "Design",
        author: "Emily Chen",
        date: "February 22, 2023",
        image: "https://source.unsplash.com/random/600x400/?responsive"
    },
    {
        id: 5,
        title: "JavaScript Performance Tips",
        excerpt: "Optimize your JavaScript code for better performance and faster load times.",
        category: "JavaScript",
        author: "David Wilson",
        date: "February 10, 2023",
        image: "https://source.unsplash.com/random/600x400/?performance"
    },
    {
        id: 6,
        title: "CSS Variables in Action",
        excerpt: "How to use CSS variables to create maintainable and themeable stylesheets.",
        category: "CSS",
        author: "Lisa Brown",
        date: "January 28, 2023",
        image: "https://source.unsplash.com/random/600x400/?css"
    }
];

// DOM Elements
const blogPostsContainer = document.getElementById('blogPosts');
const loadMoreBtn = document.getElementById('loadMore');
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

// Variables
let visiblePosts = 4;

// Initialize the app
function init() {
    renderPosts();
    setupEventListeners();
}

// Render blog posts
function renderPosts() {
    blogPostsContainer.innerHTML = '';
    
    const postsToShow = blogPosts.slice(0, visiblePosts);
    
    postsToShow.forEach(post => {
        const postElement = document.createElement('article');
        postElement.className = 'post-card small';
        postElement.innerHTML = `
            <img src="${post.image}" loading="lazy" alt="${post.title}" class="post-image">
            <div class="post-content">
                <span class="post-category">${post.category}</span>
                <h2 class="post-title">${post.title}</h2>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <span class="post-author">By ${post.author}</span>
                    <span class="post-date">${post.date}</span>
                </div>
                <a href="#" class="read-more">Read More</a>
            </div>
        `;
        blogPostsContainer.appendChild(postElement);
    });

    // Hide load more button if all posts are visible
    loadMoreBtn.style.display = visiblePosts >= blogPosts.length ? 'none' : 'block';
}

// Setup event listeners
function setupEventListeners() {
    // Load more posts
    loadMoreBtn.addEventListener('click', () => {
        visiblePosts += 2;
        renderPosts();
    });

    // Mobile navigation toggle
    navToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Performance optimization: Load non-critical resources after page load
window.addEventListener('load', function() {
    // You could load additional non-critical resources here
    console.log('Page fully loaded');
});

// Progressive enhancement: Check for JavaScript support
document.documentElement.classList.add('js');
