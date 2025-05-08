// background.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type == "PAGE_URL") {
        const url = message.url;
        console.log("Received URL from content script:", url);

        // Placeholder: this is where AI phishing check will be placed

        // Send a response back to the content script
        sendResponse({ status:"received", safe:true });
    }

    // keep the message channel open for async response if needed
    return true
});