document$.subscribe(function() {

    var versionDropdown = document.getElementById('version-select');
    if (versionDropdown) {
        // Set the dropdown to match the current URL's version on page load
        var currentPath = window.location.pathname.split('/');
        if (currentPath[0] === "") {
            currentPath.shift(); // Remove the leading empty element if present
        }
        var currentVersion = currentPath[currentPath.length - 1]; // Last segment of the path
        versionDropdown.value = currentVersion;

        versionDropdown.addEventListener('change', function() {
            console.log(`callback triggered version changed to ${versionDropdown.value}`);
            var selectedVersion = versionDropdown.value;

            var pathString = window.location.pathname;
            if (pathString.endsWith('/')) {
                pathString = pathString.slice(0, -1);
            }

            currentPath = pathString.split('/');
            currentPath.pop(); // Remove the current file
            currentPath.push(selectedVersion);

            // Reconstruct the new path
            var newPath = '/' + currentPath.join('/');
            
            console.log(`Navigating to new path: ${newPath}`);
            window.location.pathname = newPath;
        });
    }
});
