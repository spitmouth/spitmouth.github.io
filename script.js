document.addEventListener("DOMContentLoaded", function() {
    fetch("content.txt") // Fetch the content from content.txt
        .then(response => response.text())
        .then(data => {
            const bulletinDiv = document.getElementById("bulletin");
            bulletinDiv.innerHTML = data; // Set the fetched content to the bulletin div
        })
        .catch(error => {
            console.error("Error fetching content:", error);
        });
});
