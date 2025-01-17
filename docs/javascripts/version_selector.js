To ensure that the version-select dropdown reflects the current version from the URL, you can update the dropdown's value based on the last segment of the URL path when the page loads. Here's how you can modify the script:
Updated Code:

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

            if (currentPath.endsWith('/')) {
                currentPath = currentPath.slice(0, -1);
            }

            currentPath.pop(); // Remove the current file
            currentPath.push(selectedVersion);

            // Reconstruct the new path
            var newPath = '/' + currentPath.join('/');
            
            console.log(`Navigating to new path: ${newPath}`);
            window.location.pathname = newPath;
        });
    }
});
