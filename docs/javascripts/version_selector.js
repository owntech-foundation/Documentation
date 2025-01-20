document$.subscribe(function() {

    var hardwareDropdown = document.getElementById('hardware-select');
    if (hardwareDropdown) {
        // Set the dropdown to match the current URL's version on page load
        var currentPath = window.location.pathname.split('/');
        if (currentPath[0] === "") {
            currentPath.shift(); // Remove the leading empty element if present
        }
        var currentVersion = currentPath[currentPath.length - 2]; 
        // hardwareDropdown.value = currentVersion;

        hardwareDropdown.addEventListener('change', function() {
            console.log(`callback triggered`);
            // var selectedVersion = versionDropdown.value;

            // var pathString = window.location.pathname;
            // if (pathString.endsWith('/')) {
            //     pathString = pathString.slice(0, -1);
            // }

            // currentPath = pathString.split('/');
            // currentPath.pop(); // Remove the current file
            // currentPath.push(selectedVersion);

            // // Reconstruct the new path
            // var newPath = '/' + currentPath.join('/');
            // window.location.pathname = newPath;
        });
    }
});
