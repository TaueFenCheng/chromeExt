console.log('这是chrome插件')
chrome.storage.sync.set({ minutes: 1 });
chrome.storage.local.get('signed_in', (data) => {
  console.log(data,'kkkkkkkkkkk')
  if (data.signed_in) {
    chrome.action.setPopup({popup: 'popup.html'});
  } else {
    chrome.action.setPopup({popup: 'popup_sign_in.html'});
  }
});