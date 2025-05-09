// popup.js

document.addEventListener("DOMContentLoaded", () => {
    const resultDisplay = document.getElementById("result");

    // Query the active tab
    chrome.tabs.query({ active: true, currentWindow: true}, (tabs) => {
        if (tabs.length === 0) {
            returnDisplay.textContent = "No active tab found.";
            return;
        }

        const activeTab = tabs[0];

        // Send message to background.js with the current tab URL
        chrome.runtime.sendMessage (
            { type: "PAGE_URL", url: activeTab.url },
            (response) => {
                if (chrome.runtime.lastError) {
                    resultDisplay.textContent = "Error: " + chrome.runtime.lastError.message;
                    return;
                }

                if (response?.safe) {
                    resultDisplay.textContent = "This page appears safe. ✅";
                } else {
                    resultDisplay.textContent = "This page might be suspicious. ⚠️";
                }
            }
        );
    });
});