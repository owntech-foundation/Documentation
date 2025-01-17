document.addEventListener('DOMContentLoaded', function() {
    var versionDropdown = document.getElementById('version-select');
    versionDropdown.addEventListener('change', function() {
        var selectedVersion = versionDropdown.value;
        var currentPath = window.location.pathname.split('/');
        currentPath.pop();  // Remove current file
        currentPath.push(selectedVersion + '.html');
        window.location.pathname = currentPath.join('/');
    });
});
