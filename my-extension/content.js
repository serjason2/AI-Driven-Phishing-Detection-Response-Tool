// content.js

// Grab the current pages URL
const currentURL = window.location.href;

// Send the URL to the bg script
chrome.runtime.sendMessage({type: "PAGE_URL", url:currentURL}, (response) => {
    console.log("Phishing scan initiated for:", currentURL);
    console.log("Background response:", response)
})