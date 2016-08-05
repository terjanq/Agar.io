// ==UserScript==
// @name         Multiboxing+
// @description  Agar.io enhanced
// @version      1.1
// @author       Terjanq
// @include      http://agar.io/*
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// @connect diephack.tk
// ==/UserScript==


window.stop(); document.documentElement.innerHTML = null;
var ret1 = GM_xmlhttpRequest({
    method: "GET",
    url: "http://diephack.tk/multiboxingplus/agar.html",
    onload: function(e) {
        document.open(); document.write(e.responseText.replace(/main_out\.js\?v=\d+/, "http://diephack.tk/multiboxingplus/main_out.js")); document.close();
    }
});
