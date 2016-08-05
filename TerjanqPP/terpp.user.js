// ==UserScript==
// @name         Terjanq++
// @description  Agar+ Enhanced
// @version      2.0
// @author       Agarplus.io (enhanced by terjanq)
// @include      http://agarlist.com/*
// @include      http://agar.io/*
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @connect      diephack.tk
// ==/UserScript==



window.stop(), document.documentElement.innerHTML = null;
var ret1 = GM_xmlhttpRequest({
    method: "GET",
    url: "http://diephack.tk/terjanqplusplus/agar.html",
    onload: function(e) {
        document.open(), document.write(e.responseText), document.close();
    }
});
