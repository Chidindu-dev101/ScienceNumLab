var backToTopButton = document.getElementById("back-to-top");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
backToTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};