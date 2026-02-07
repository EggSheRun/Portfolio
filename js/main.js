window.addEventListener("load", function() {
    const loader = document.getElementById("loader-wrapper");
    
    // Add the hidden class to trigger the CSS transition
    loader.classList.add("loader-hidden");
    
    // Optional: Remove from DOM entirely after transition
    setTimeout(() => {
        loader.style.display = "none";
    }, 500); 
});