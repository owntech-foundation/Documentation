document$.subscribe(function() {
    // Example: Initialize a third-party library or custom logic
    console.log("Page fully loaded. Initializing custom JavaScript.");
    
    // Add your custom logic here
    var versionDropdown = document.getElementById('version-select');
    if (versionDropdown) {
        versionDropdown.addEventListener('change', function() {
            var selectedVersion = versionDropdown.value;
            var currentPath = window.location.pathname.split('/');
            currentPath.pop();  // Remove current file
            currentPath.push(selectedVersion + '.html');
            window.location.pathname = currentPath.join('/');
        });
    }
});
