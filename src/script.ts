chrome.browserAction.onClicked.addListener((activeTab) => {
	if(activeTab.id) chrome.tabs.executeScript(activeTab.id, { file: 'content.js' })
})
