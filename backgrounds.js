chrome.browserAction.onClicked.addListener(buttonClicked);
function buttonClicked (tab){
  let  msg = {
      "txt": "message sent from background console to normal console"
  };
// console.log(tab);
chrome.tabs.sendMessage(tab.id, msg);
}