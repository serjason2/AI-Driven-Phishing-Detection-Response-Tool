document.addEventListener("DOMContentLoaded", () => {
    const resultDisplay = document.getElementById("result");
    const iconDisplay = document.getElementById("icon");

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0) {
            resultDisplay.textContent = "No active tab found.";
            return;
        }

        const activeTab = tabs[0];

        chrome.runtime.sendMessage(
            { type: "PAGE_URL", url: activeTab.url },
            (response) => {
                if (chrome.runtime.lastError) {
                    resultDisplay.textContent = "Error: " + chrome.runtime.lastError.message;
                    return;
                }

                if (response?.safe) {
                    iconDisplay.textContent = "✅";
                    resultDisplay.textContent = "This page appears safe.";
                    resultDisplay.className = "safe";
                } else {
                    iconDisplay.textContent = "⚠️";
                    resultDisplay.textContent = "This page might be suspicious!";
                    resultDisplay.className = "suspicious";
                }
            }
        );
    });
});
