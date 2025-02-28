document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    let contentDiv = document.getElementById('content');
    let loadingDiv = document.getElementById('loading');
    let page = 1;

    function generateRandomContent() {
        console.log("Generating random content");
        // Generate random text content
        let text = '';
        let possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 100; i++) {
            text += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
        }

        // Create a new content element
        let contentElement = document.createElement('div');
        contentElement.className = 'content-element';
        contentElement.innerHTML = '<p>' + text + '</p>';

        // Append the new content element to the content div
        contentDiv.appendChild(contentElement);
    }

    function loadMoreContent() {
        console.log("Loading more content");
        for (let i = 0; i < 10; i++) {
            generateRandomContent();
        }
    }

    // Infinite scrolling
    window.addEventListener('scroll', function() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
            loadingDiv.style.display = 'block';
            setTimeout(function() {
                page++;
                loadMoreContent();
                loadingDiv.style.display = 'none';
            }, 500);
        }
    });

    // Initial load
    loadMoreContent();
});
