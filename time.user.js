// ==UserScript==
// @name         faster time
// @namespace    https://github.com/catnaut/learn-tampermonkey
// @version      1
// @description  Hook setInterval()
// @author       catnaut
// @match        https://time.is/zh/China
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @grant        none
// @run-at       document-start
// @license      GPLv3
// ==/UserScript==

(function() {
    'use strict';
    let hookedsetInterval = window.setInterval;
    window.setInterval = function (func, delay) {
        return hookedsetInterval(func, delay/10);
    };
})();