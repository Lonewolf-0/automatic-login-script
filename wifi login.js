// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://192.168.1.254:8090/httpclient.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=1.254
// @grant        none
// ==/UserScript==

//made by aryan tyagi
//CSE 2nd year, ABES Engineering College, Ghaziabad

(function() {
    'use strict';

    // Your code here...
    document.querySelector("#username").setAttribute("value","username");
    document.querySelector("#password").setAttribute("value","password");
    document.querySelector("#loginbutton").click();
})();
