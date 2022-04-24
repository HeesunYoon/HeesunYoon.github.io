// background.js

let color = '#dce6ea';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %silver', `color: ${color}`);
});