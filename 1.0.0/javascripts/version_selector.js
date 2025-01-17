document$.subscribe(function() {

    var versionDropdown = document.getElementById('version-select');
    if (versionDropdown) {
        versionDropdown.addEventListener('change', function() {
            console.log(`callback triggered version changed to ${versionDropdown.value}`);
            var selectedVersion = versionDropdown.value;

            var currentPath = window.location.pathname;
            if (currentPath.endsWith('/')) {
                currentPath = currentPath.slice(0, -1);
            }

            currentPath = currentPath.split('/');
            
            // Remove the first empty element if it exists
            if (currentPath[0] === "") {
                currentPath.shift();
            }
            
            currentPath.pop(); // Remove the current file
            currentPath.push(selectedVersion);

            // Reconstruct the new path
            var newPath = '/' + currentPath.join('/');
            window.location.pathname = newPath;
        });
    }
});
