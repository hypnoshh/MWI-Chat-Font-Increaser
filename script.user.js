// ==UserScript==
// @name         Milky Way Idle - Chat History Font Size Increaser
// @namespace    http://www.milkywayidle.com/
// @version      1.0
// @description  Change font size to 20px for Chat History
// @author       physon
// @match        https://www.milkywayidle.com/*
// @match        https://test.milkywayidle.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to apply font size changes
    function changeFontSize() {
        const chatHistoryDivs = document.querySelectorAll('.ChatHistory_chatHistory__1EiG3');
        chatHistoryDivs.forEach(div => {
            div.style.fontSize = '18px';
            div.style.lineHeight = '28px';
        });
        const characterNameDivs = document.querySelectorAll('.CharacterName_characterName__2FqyZ');
        characterNameDivs.forEach(div => {
            div.style.fontSize = '18px';
            div.style.lineHeight = '28px';
        });
    }

    // Apply changes immediately
    changeFontSize();

    // Watch for dynamically added content
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                changeFontSize();
            }
        });
    });

    // Start observing
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();