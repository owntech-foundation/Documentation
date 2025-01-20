import { requestJSON } from "~/browser";
import { configuration } from "~/_";
import { Version } from "~/templates";

async function getCurrentVersion() {
  const config = configuration();
  const versions = await requestJSON<Version[]>(new URL("../versions.json", config.base)).toPromise();

  // Extract current version from the base URL
  const [, currentVersion] = config.base.match(/([^/]+)\/?$/) || [];
  
  const current = versions.find(({ version, aliases }) => (
    version === currentVersion || aliases.includes(currentVersion)
  )) || versions[0];  // Default to the first version if no match is found

  return current;
}

document$.subscribe(function() {
  getCurrentVersion().then(current => {
    console.log("Current version:", current);
  });
});



// document$.subscribe(function() {

//     var versionDropdown = document.getElementById('version-select');
//     if (versionDropdown) {
//         // Set the dropdown to match the current URL's version on page load
//         var currentPath = window.location.pathname.split('/');
//         if (currentPath[0] === "") {
//             currentPath.shift(); // Remove the leading empty element if present
//         }
//         var currentVersion = currentPath[currentPath.length - 2]; 
//         versionDropdown.value = currentVersion;

//         versionDropdown.addEventListener('change', function() {
//             console.log(`callback triggered version changed to ${versionDropdown.value}`);
//             var selectedVersion = versionDropdown.value;

//             var pathString = window.location.pathname;
//             if (pathString.endsWith('/')) {
//                 pathString = pathString.slice(0, -1);
//             }

//             currentPath = pathString.split('/');
//             currentPath.pop(); // Remove the current file
//             currentPath.push(selectedVersion);

//             // Reconstruct the new path
//             var newPath = '/' + currentPath.join('/');
//             window.location.pathname = newPath;
//         });
//     }
// });
