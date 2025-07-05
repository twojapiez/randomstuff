// ==UserScript==
// @name         Steam Comment Remover
// @version      1.0.2
// @description  Auto-click trash bins to delete comments on Steam
// @author       Lusee
// @match        https://steamcommunity.com/*
// @grant        none
// ==/UserScript==
    // THIS WILL JUST DELETE EVERYTHING IF YOU USE THIS YOU ARE AWARE OF THE FACT THIS DOES NOT CARE ABOUT ANYTHING IT JUST CLICKS TO DELETE THE COMMENTS
(function() {
    'use strict';
    function clickTrash() {
        const trashLinks = document.querySelectorAll('.commentthread_comment_actions a.actionlink[data-tooltip-text="Delete"]');
        if (trashLinks.length > 0) {
            console.log(`Deleting comment...`);
            trashLinks[0].click();
        } else {
            console.log(`No trash bins found!`);
        }
    }
    setInterval(clickTrash, 1000);
})();
