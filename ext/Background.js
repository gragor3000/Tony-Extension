/*chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.tabs.executeScript(null, {file: "Tony.js"});
});*/

chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "http://www.twitch.tv/rsgloryandgold";
  chrome.tabs.create({ url: newURL });
});
/*
// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({
    code: 'var win = window.open("http://www.twitch.tv/rsgloryandgold"; win.focus();'
  });
});*/