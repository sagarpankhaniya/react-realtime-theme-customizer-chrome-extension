chrome.storage.sync.get(["backgroundColor", "textColor"], (data) => {
    document.body.style.backgroundColor = data.backgroundColor || "#ffffff";
    document.body.style.color = data.textColor || "#000000";
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "changeTheme") {
      document.body.style.backgroundColor = request.backgroundColor;
      document.body.style.color = request.textColor;
  
      chrome.storage.sync.set({
        backgroundColor: request.backgroundColor,
        textColor: request.textColor
      });
  
      sendResponse({ status: "Theme updated" });
    }
  });
  