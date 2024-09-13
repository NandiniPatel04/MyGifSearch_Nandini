document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchInput').value;
    fetchGifs(searchTerm);
});

function fetchGifs(searchTerm) {
    const apiKey = 'tq0siVUdsS3qHh4zj0SuBN7jmmu04Q9y'; 
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=10&offset=0&rating=g&lang=en`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayGifs(data.data);
        })
        .catch(error => {
            console.error('Error fetching the GIFs:', error);
        });
}

function displayGifs(gifs) {
    const gifContainer = document.getElementById('gifContainer');
    gifContainer.innerHTML = ''; 

    gifs.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url;
        img.alt = gif.title;
        img.classList.add('gif');
        gifContainer.appendChild(img);
    });
}
