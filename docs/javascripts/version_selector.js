document$.subscribe(function() {

    // If there is a version selector on the page, 
    // add a callback to change URL according to the selector
    var versionDropdown = document.getElementById('version-select');
    if (versionDropdown) {
        versionDropdown.addEventListener('change', function() {
            console.log(`callback triggered version changed to ${versionDropdown.value}`);
            var selectedVersion = versionDropdown.value;
            
            // Normalize the URL path by trimming trailing slashes
            var currentPath = window.location.pathname;
            if (currentPath.endsWith('/')) {
                currentPath = currentPath.slice(0, -1);  // Remove the trailing slash
            }
            
            currentPath = currentPath.split('/');
            currentPath.pop();  // Remove the current file
            currentPath.push(selectedVersion + '.html');
            
            // Reconstruct the new path and navigate
            window.location.pathname = currentPath.join('/');
        });
    }
});
