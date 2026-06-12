/**
 * common.js
 * This script runs on every page of your website.
 */

console.log("Common site scripts loaded.");

// You can add global site functions here
document.addEventListener('DOMContentLoaded', () => {
    console.log("Site is ready.");
    
    // Example: Add a simple navigation toggle or site-wide interaction here
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        console.log("Navigation initialized.");
    }
});

// Example: A helper function available on all pages
function logAction(actionName) {
    console.log("User action performed: " + actionName);
}