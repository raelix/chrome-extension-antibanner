// background.js

chrome.webNavigation.onDOMContentLoaded.addListener(
    (details) => {

        console.log(details.url);
        chrome.scripting.executeScript({
            target: {
                tabId: details.tabId
            },
            function: () => {
                let color = '#3aa757';
                let text = 'Pubblicità rimossa';
                try {
                    document.querySelector('.news-banner').innerHTML = text;
                    document.querySelector('.news-banner').style.backgroundColor = color;
                } catch { }
            }
        }, _ => chrome.runtime.lastError)
    }, { urls: [{ hostPrefix: "streamingcommunity.agency" }] },
);
