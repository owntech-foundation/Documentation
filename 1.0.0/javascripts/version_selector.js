document$.subscribe(function() {
    var versionButton = document.getElementById('versionButton');
    if (versionButton) {
        // Set the dropdown to match the current URL's version on page load
        var currentPath = window.location.pathname.split('/');
        var currentVersion = currentPath[currentPath.length - 3]; 
        var currentBoard = currentPath[currentPath.length - 4]; 
        var versions = {};
        if (currentBoard == "twist") {
            versions = {
                "1.4.1": {
                    buttonText: "1.4.1",
                    aliasText: "Latest"
                },
                "1.3.0": {
                    buttonText: "1.3",
                    aliasText: "Stable"
                },
                "1.2.0": {
                    buttonText: "1.2",
                    aliasText: "Stable"
                }
            };
        }
        else if (currentBoard == "spin") {
            versions = {
                "1.2.0": {
                    buttonText: "1.2.0",
                    aliasText: "Latest"
                },
                "1.1.0": {
                    buttonText: "1.1.0",
                    aliasText: "Stable"
                },
                "1.0.0": {
                    buttonText: "1.0.0",
                    aliasText: "Stable"
                }
            };
        }
        else if (currentBoard == "ownverter") {
            versions = {
                "1.0.0": {
                    buttonText: "1.0.0",
                    aliasText: "Latest"
                }
            };
        }
        if (versions[currentVersion]) {
            versionButton.innerHTML = `${versions[currentVersion].buttonText} <span class="md-version__alias">${versions[currentVersion].aliasText}</span>`;
        }
    }
});
