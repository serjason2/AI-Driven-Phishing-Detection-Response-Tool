// background.js

const SAFE_BROWSING_URL = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${API_KEY}`;

async function checkUrlWithGoogleSafeBrowsing(urlToCheck) {
    const requestBody = {
        client: {
            clientId: "phishing_guard_extension",  // any string
            clientVersion: "1.0"
        },
        threatInfo: {
            threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE", "THREAT_TYPE_UNSPECIFIED"],
            platformTypes: ["ANY_PLATFORM"],
            threatEntryTypes: ["URL"],
            threatEntries: [
                { url: urlToCheck }
            ]
        }
    };

    const response = await fetch(SAFE_BROWSING_URL, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await response.json();
    console.log("Safe Browsing response:", data);

    if (data && data.matches) {
        return { safe: false, source: "Google Safe Browsing" };
    } else {
        return { safe: true };
    }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "PAGE_URL") {
        checkUrlWithGoogleSafeBrowsing(message.url).then(result => {
            sendResponse(result);
        });
        return true;
    }
});
