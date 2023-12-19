// ==UserScript==
// @name         select and click
// @namespace    https://github.com/catnaut/learn-tampermonkey
// @version      1
// @description  使用选择器选择元素,并点击它们,以便在页面加载后自动执行一些操作,比如点击按钮,或者填写表单等等.
// @author       catnaut
// @match        https://www.example.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @grant        none
// @license      GPLv3
// ==/UserScript==

(function() {
    'use strict';
    let p = document.querySelector("body > div > p:nth-child(3) > a");
    p.click();
})();