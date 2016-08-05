//agar v69 16.03.2016

var OUT = "";

var stop = false;



var VERSION = 0.55;
Auth = false;

Nick = "MULTBOXING";


function changePic(e){
    var profileOverlay = localStorage.getItem("profileOverlay");
    if(profileOverlay) profileOverlay = JSON.parse(profileOverlay);
    else profileOverlay = {pic: "", name: ""};

   var   src = prompt("Put image url", profileOverlay.pic);

    if(src == ""){
        $(".agario-profile-picture").eq(0).show()
        $(".agario-profile-picture").eq(1).hide();
        profileOverlay.pic = "";
    }
    else if(src && src != null){
        $(".agario-profile-picture").eq(0).hide();
        $(".agario-profile-picture").eq(1).attr("src", src).show();
        profileOverlay.pic = src;
    }

   var name = prompt("Put your name", profileOverlay.name);

    if(name == ""){
        $(".agario-profile-name").eq(0).show()
        $(".agario-profile-name").eq(1).hide();
        profileOverlay.name = "";
    }  else if(name && name != null){
        $(".agario-profile-name").eq(0).hide();
        $(".agario-profile-name").eq(1).html(name).show();
        profileOverlay.name = name;
    }

    localStorage.setItem("profileOverlay", JSON.stringify(profileOverlay));
    e.preventDefault();
}

function setBotNick(a){ if(a) Nick = a; return Nick; }
var dat = Date.now();
var img;
var swap = false;

var send, msgs = [];

function Send(a) {
    send(new Uint8Array(a.split(',')));
}

var HAPPY = "102,8,1,18,24,8,80,130,5,19,10,17,8,1,16,1,26,11,115,107,105,110,95,114,97,112,116,111,114", ANGRY = "102,8,1,18,23,8,80,130,5,18,10,16,8,1,16,1,26,10,115,107,105,110,95,116,95,114,101,120";

var inter = false;

(function(){

    var t = ["102,8,1,18,24,8,80,130,5,19,10,17,8,1,16,1,26,11,115,107,105,110,95,109,101,116,101,111,114", "102,8,1,18,24,8,80,130,5,19,10,17,8,1,16,1,26,11,115,107,105,110,95,114,111,99,107,101,116", "102,8,1,18,22,8,80,130,5,17,10,15,8,1,16,1,26,9,115,107,105,110,95,103,114,101,121"];
    var i = 0;

    var sl_down = false;
    var isanimate = false;

     window.addEventListener("keydown", function(e){
        if(e.keyCode == 191) sl_down = true;
    });

    window.addEventListener("keyup", function(e){
        if(e.keyCode == 191) sl_down = false;
        if(e.keyCode == 75) if(sl_down) isanimate ^= true;
    });


    var int = setInterval(function(){
        if(isanimate){
            Send(t[i]);
            i++;
            i %= 3;
        }
    }, 500);


})();

(function(c, e$$1) {
    function ra(a, b) {
        if (b) {
            var d = new Date;
            d.setTime(d.getTime() + 864E5 * b);
            d = "; expires=" + d.toGMTString()
        } else d = "";
        document.cookie = "agario_redirect=" + a + d + "; path=/"
    }

    function vc() {
        var a = document.cookie.split(";");
        var b = 0;
        for (; b < a.length; b++) {
            var d = a[b];
            for (;
                " " == d.charAt(0);) d = d.substring(1, d.length);
            if (0 == d.indexOf("agario_redirect=")) return d.substring(16, d.length)
        }
        return null
    }

    function KeyBind() {
        c.onkeydown = function(a) {
            if (!(32 != a.keyCode))
                if (!sa) {
                    if ("nick" != a.target.id) a.preventDefault();
                    Za();
                    sa = true
                }
            if (81 == a.keyCode) {
                X(18);
                ta = true
            }
            if (!(87 != a.keyCode))
                if (!ua) {
                    Mb();
                    ua = true
                }
            if (a.keyCode == 69 && !Edown) {
                Edown = true;
                var macrofeed = function() {
                    if (Edown) {
                        Mb();
                        setTimeout(macrofeed, 100)
                    }
                };
                macrofeed()
            }
            if (a.keyCode == 81 && !Spacedown) {
                Spacedown = true;
                Za();
                setTimeout(Za, 15)
            }
            if (a.keyCode == 16 && !Shiftdown) {
                Shiftdown = true;
                Za();
                setTimeout(Za, 25);
                setTimeout(Za, 50);
                setTimeout(Za, 75)
            }
            if (27 == a.keyCode) {
                a.preventDefault();
                va(300);
                if (e$$1("#oferwallContainer").is(":visible")) c.closeOfferwall();
                if (e$$1("#videoContainer").is(":visible")) c.closeVideoContainer()
            }

            if (68 == a.keyCode){
                LineDirection.b = false;
                LineDirection.bx = msX;
                LineDirection.by = msY;
                if(!LineDirection.bdown) LineDirection.bdown = Date.now();
            }

            if( 83 == a.keyCode){
                LineDirection.p = false;
                LineDirection.px = msX;
                LineDirection.py = msY;
                if(!LineDirection.pdown) LineDirection.pdown = Date.now();
            }

        };
        c.onkeyup = function(a) {
            if (32 == a.keyCode) sa = false;
            if (82 == a.keyCode) this.setNick($("#nick").val());
            if (87 == a.keyCode) ua = false;
            if (81 == a.keyCode)
                if (ta) {
                    X(19);
                    ta = false
                }
            if (81 == a.keyCode) Spacedown = false;
            if (16 == a.keyCode) Shiftdown = false;
            if (69 == a.keyCode) Edown = false;
            if (88 == a.keyCode) {
                if (!swap) {
                    viewX = BotCells[0].x;
                    viewY = BotCells[0].y
                }
                else {
                    viewX = PlayerCells[0].x;
                    viewY = PlayerCells[0].y
                }
                swap ^= 1; }
            if (83 == a.keyCode) {
                if(Date.now() - LineDirection.pdown > 200 )
                    LineDirection.p = false;
                else{
                    LineDirection.p = true;
                    LineDirection.px = msX;
                    LineDirection.py = msY;
                }

                 LineDirection.pdown = false;


            }

            if(80 == a.keyCode){
                StopMovement ^= true;
            }


            if (68 == a.keyCode && !botDead){
                if(Date.now() - LineDirection.bdown > 200 )
                    LineDirection.b = false;
                else{
                    LineDirection.b = true;
                    LineDirection.bx = msX;
                    LineDirection.by = msY;
                }

                 LineDirection.bdown = false;
            }
        }
    }




    function Nb(a) {
        a.preventDefault();
        gzoom *= Math.pow(0.8, a.wheelDelta / -120 || (a.detail || 0));
        if (ShowBorders) {
            if (0.05 > gzoom) gzoom = 0.05;
            if (gzoom > 10 / gscale) gzoom = 10 / gscale
        } else {
            if (1 > gzoom) gzoom = 1;
            if (gzoom > 4 / gscale) gzoom = 4 / gscale
        }
    }

    function wc() {
        if (0.4 > gscale) ia = null;
        else {
            var a = Number.POSITIVE_INFINITY;
            var b = Number.POSITIVE_INFINITY;
            var d = Number.NEGATIVE_INFINITY;
            var c = Number.NEGATIVE_INFINITY;
            var g = 0;
            for (; g < Cells.length; g++) {
                var e = Cells[g];
                if (!!e.P())
                    if (!e.V)
                        if (!(20 >= e.size * gscale)) {
                            a = Math.min(e.x - e.size, a);
                            b = Math.min(e.y - e.size, b);
                            d = Math.max(e.x + e.size, d);
                            c = Math.max(e.y + e.size, c)
                        }
            }
            ia = xc.init({ Ba: a - 10, Ca: b - 10, za: d + 10, Aa: c + 10, Ja: 2, Ka: 4 });
            g = 0;
            for (; g < Cells.length; g++)
                if (e = Cells[g], e.P() && !(20 >= e.size * gscale)) {
                    a = 0;
                    for (; a < e.a.length; ++a) {
                        b = e.a[a].x;
                        d = e.a[a].y;
                        if (!(b < viewX - q / 2 / gscale))
                            if (!(d < viewY - u / 2 / gscale))
                                if (!(b > viewX + q / 2 / gscale))
                                    if (!(d > viewY + u / 2 / gscale)) ia.va(e.a[a])
                    }
                }
        }
    }

    function $a() {
        // posX = A - (7071 + Borders.x0);
        // posY = B - (7071 + Borders.y0);
        msX = (Y - q / 2) / gscale + viewX;
        msY = (Z - u / 2) / gscale + viewY;
    }

    function Ob() {
        if (null == ya) {
            ya = {};
            e$$1("#region").children().each(function() {
                var a = e$$1(this);
                var b = a.val();
                if (b) ya[b] = a.text()
            })
        }
        e$$1.get(za + "info", function(a) {
            var b = {};
            var d;
            for (d in a.regions) {
                var c = d.split(":")[0];
                b[c] = b[c] || 0;
                b[c] += a.regions[d].numPlayers
            }
            for (d in b) e$$1('#region option[value="' + d + '"]').text(ya[d] + " (" + b[d] + " players)")
        }, "json")
    }

    function Pb() {
        e$$1("#adsBottom").hide();
        e$$1("#overlays").hide();
        e$$1("#stats").hide();
        e$$1("#mainPanel").hide();
        aa = mainShow = false;
        Qb();
        c.destroyAd(c.adSlots.aa);
        c.destroyAd(c.adSlots.ac)
    }

    var botstart = function(){
         $(".botstatus").html("connecting").css("color", "rgb(200,200,0)");
    }

    var botstop = function(){
        $(".botstatus").html("closing").css("color", "rgb(150, 25,0)");
    }

    function Aa(a) {
        if (a)
            if (a == G) e$$1(".btn-needs-server").prop("disabled", false);
            else {
                if (e$$1("#region").val() != a) e$$1("#region").val(a);
                G = c.localStorage.location = a;
                e$$1(".region-message").hide();
                e$$1(".region-message." + a).show();
                e$$1(".btn-needs-server").prop("disabled", false);
                if (ab) Q()
            }
    }

    function va(a) {
        if (!mainShow)
            if (!aa) {
                // if (Ba) e$$1(".btn-spectate").prop("disabled", true);
                // else e$$1(".btn-spectate").prop("disabled", false);
                Ca = false;
                N = null;
                // if (!bb) {
                //     e$$1("#adsBottom").show();
                //     e$$1("#g300x250").hide();
                //     e$$1("#a300x250").show();
                //     e$$1("#g728x90").hide();
                //     e$$1("#a728x90").show()
                // }
                // c.refreshAd(bb ? c.adSlots.ac : c.adSlots.aa);
                bb = false;
                if (1E3 > a) C = 1;
                mainShow = true;
                e$$1("#mainPanel").show();
                if (0 < a) e$$1("#overlays").fadeIn(a);
                else e$$1("#overlays").show()
            }
    }

    function ka(a) {
        e$$1("#helloContainer").attr("data-gamemode", a);
        la = a;
        e$$1("#gamemode").val(a)
    }

    function Qb() {
        if (e$$1("#region").val()) c.localStorage.location =
            e$$1("#region").val();
        else if (c.localStorage.location) e$$1("#region").val(c.localStorage.location);
        if (e$$1("#region").val()) e$$1("#locationKnown").append(e$$1("#region"));
        else e$$1("#locationUnknown").append(e$$1("#region"))
    }

    function cb(a) {
        if ("env_local" in EnvConfig)
            if ("true" == EnvConfig.load_local_configuration) c.MC.updateConfigurationID("base");
            else c.MC.updateConfigurationID(EnvConfig.configID);
        else c.MC.updateConfigurationID(a)
    }

    function yc() {
        if ("configID" in E) cb(E.configID);
        else e$$1.get(za + "getLatestID",
            function(a) {
                cb(a);
                c.localStorage.last_config_id = a
            }).fail(function() {
            var a;
            if (a = "last_config_id" in c.localStorage) {
                a = c.localStorage.last_config_id;
                a = !(null == a || (void 0 == a || "" === a))
            }
            if (a) {
                a = c.localStorage.last_config_id;
                console.log("Fallback to stored configID: " + a);
                cb(a)
            }
        })
    }

    function zc() {
        e$$1.get(db + "//gc.agar.io", function(a) {
                var b = a.split(" ");
                a = b[0];
                b = b[1] || "";
                if (-1 == ["UA"].indexOf(a)) Rb.push("ussr");
                if (ma.hasOwnProperty(a))
                    if ("string" == typeof ma[a]) {
                        if (!G) Aa(ma[a])
                    } else if (ma[a].hasOwnProperty(b))
                    if (!G) Aa(ma[a][b])
            },
            "text")
    }

    function R(a) {
        return c.i18n[a] || (c.i18n_dict.en[a] || a)
    }

    function Sb() {
        var a = ++eb;
        console.log("Find " + G + la);
        Tb();
        e$$1.ajax(za + "findServer", {
            error: function() {
                "Failed to get server. Will retry in 30 seconds";
                setTimeout(Sb, 3E4)
            },
            success: function(b) {
                if (a == eb) {
                    if (b.alert) alert(b.alert);
                    var d = b.ip;
                    if ("game_server_port" in EnvConfig) d = c.location.hostname + ":" + EnvConfig.game_server_port;
                    fb("ws" + (gb ? "s" : "") + "://" + d, b.token)
                }
            },
            dataType: "json",
            method: "POST",
            cache: false,
            crossDomain: true,
            data: (G +
                la || "?") + "\n2200049715"
        })
    }

    function Q() {
        if (ab)
            if (G) {
                e$$1("#connecting").show();
                // Sb()
            }
    }

    function Tb() {
        if (gamesock) {
            gamesock.onopen = null;
            gamesock.onmessage = null;
            gamesock.onclose = null;
            try { gamesock.close() } catch (a) {}
            gamesock = null
        }
    }

    function fb(a$$0, b) {
        Tb();
        if (E.ip) a$$0 = "ws" + (gb ? "s" : "") + "://" + E.ip;
        if (null != S) {
            var d$$0 = S;
            S = function() { d$$0(b) }
        }
        if (gb && (!EnvConfig.env_development && !EnvConfig.env_local)) {
            var c = a$$0.split(":");
            a$$0 = "wss://ip-" + c[1].replace(/\./g, "-").replace(/\//g, "") + ".tech.agar.io:" + +c[2]
        }
        PlayerCellIds = [];
        PlayerCells = [];

        BotCells = [];
        BotCellIds = [];
        CellsById = {};
        Cells = [];
        DestroyedCells = [];
        D = [];
        I =
            J = null;
        T = 0;
        na = false;
        console.log("Connecting to " + a$$0);
        m.cache.sentGameServerLogin = false;
        gamesock = new WebSocket(a$$0);
        IP = a$$0;
        gamesock.binaryType = "arraybuffer";
        gamesock.onopen = function() {
            var a;
            Da = y = Date.now();
            oa = 120;
            Ea = 0;
            console.log("socket open");
            a = U(5);
            a.setUint8(0, 254);
            a.setUint32(1, 5, true);
            // a = new Int8Array([-2,6,0,0,0]);
            sockSend(a);
            a = U(5);
            a.setUint8(0, 255);
            a.setUint32(1, 154669603, true);
            // a = new Int8Array([-1,-78,-86,42,-87]);
            sockSend(a);
            a = U(1 + b.length);
            a.setUint8(0, 80);
            Token = b || "";
            var d = 0;
            for (; d < b.length; ++d) a.setUint8(d + 1, b.charCodeAt(d));
            // V(a);
            botstop();
            Authorised = false;
            // m.core.proxy.onSocketOpen()
        };
        gamesock.onmessage = Ac;
        gamesock.onclose = gamesockClose;
        gamesock.onerror = function() { console.log(hb.la() + " socket error", arguments) }
    }

    function U(a) {
        return new DataView(new ArrayBuffer(a))
    }

    function sockSend(a) { gamesock.send(a.buffer) }

    send = sockSend;

    function gamesockClose() {
        if (na) Fa = 500;
        m.core.proxy.onSocketClosed();
        console.log(hb.la() + " socket close");
        setTimeout(Q, Fa);
        console.log(botsock);
        Fa *= 2
    }

    function Ac(a) {
        // if(!stop) OUT += (new Uint8Array(a.data)).join() + "\n";
        //console.dir((new Uint8Array(a.data)).join());
        Cc(new DataView(a.data))
    }

    function Cc(a) {
        function b$$0() {
            var b = "";
            for (;;) {
                var c = a.getUint16(d, true);
                d += 2;
                if (0 == c) break;
                b += String.fromCharCode(c)
            }
            return b
        }
        var d = 0;
        var CASE = a.getUint8(d++);
        // console.log(CASE);
        // if (240 == a.getUint8(d)) Ga();
        switch (CASE) {
            case 16:
                Dc(a, d);
                break;
            case 17:
                ib = a.getFloat32(d, true);
                d += 4;
                jb = a.getFloat32(d, true);
                d += 4;
                kb = a.getFloat32(d, true);
                d += 4;
                break;
            case 18:
                PlayerCellIds = [];
                PlayerCells = [];
                // BotCells = [];
                // CellsById = {};
                // Cells = [];
                for (var i = 0; i < Cells.length; i++)
                    if (Cells[i])
                        if (!Cells[i].bot) {
                            delete CellsById[Cells[i].id];
                            Cells.splice(i--, 1);
                        } else {

                            Cells[i].x = Cells[i].L = Cells[i].s = Cells[i].J = Cells[i].ja = Cells[i].x - DX;
                            Cells[i].y = Cells[i].u = Cells[i].M = Cells[i].K = Cells[i].ka = Cells[i].y - DY;

                        }
                for (var i = 0; i < BotCells.length; i++) {
                    BotCells[i].x = BotCells[i].L = BotCells[i].s = BotCells[i].J = BotCells[i].ja = BotCells[i].x - DX;
                    BotCells[i].y = BotCells[i].u = BotCells[i].M = BotCells[i].K = BotCells[i].ka = BotCells[i].y - DY;
                }
                DX = 0;
                DY = 0;
                LineDirection.b = false;
                LineDirection.p = false;

                break;
            case 20:
                PlayerCells = [];
                PlayerCellIds = [];
                break;
            case 21:
                lb = a.getInt16(d, true);
                d += 2;
                mb = a.getInt16(d, true);
                d += 2;
                if (!nb) {
                    nb = true;
                    Ha = lb;
                    Ia = mb
                }
                break;
            case 32:
                PlayerCellIds.push(a.getUint32(d, true));
                //console.log(PlayerCellIds);
                d += 4;
                break;
            case 49:
                if (null != J) break;
                var v = a.getUint32(d, true);
                d = d + 4;
                D = [];
                var g = 0;
                for (; g < v; ++g) {
                    var e = a.getUint32(d, true);
                    d = d + 4;
                    D.push({ id: e, name: b$$0() })
                }
                Ub();
                break;
            case 50:
                J = [];
                v = a.getUint32(d,
                    true);
                d += 4;
                g = 0;
                for (; g < v; ++g) {
                    J.push(a.getFloat32(d, true));
                    d += 4
                }
                Ub();
                break;
            case 64:
                vminX = a.getFloat64(d, true);
                d += 8;
                vminY = a.getFloat64(d, true);
                d += 8;
                vmaxX = a.getFloat64(d, true);
                d += 8;
                vmaxY = a.getFloat64(d, true);
                d += 8;

                if (vmaxX - vminX > 14E3 && vmaxY - vminY > 14E3) {
                    Borders.x0 = vminX;
                    Borders.y0 = vminY;
                    Borders.xlength = vmaxX - vminX;
                    Borders.ylength = vmaxY - vminY;
                    DX = Borders.x0 + 7071;
                    DY = Borders.y0 + 7071;

                    for (var i = 0; i < Cells.length; i++)
                        if (Cells[i])
                            if (Cells[i].bot) {

                                Cells[i].x = Cells[i].L = Cells[i].s = Cells[i].J = Cells[i].ja = Cells[i].x + DX;
                                Cells[i].y = Cells[i].u = Cells[i].M = Cells[i].K = Cells[i].ka = Cells[i].y + DY;


                            }
                }
                if (a.byteLength > d) {
                    v = a.getUint32(d, true);
                    d += 4;
                    sb = !!(v & 1);
                    tb = b$$0();
                    c.MC.updateServerVersion(tb);
                    console.log("Server version " + tb)
                }
                break;
            case 102:
                v = a.buffer.slice(d);
                m.core.proxy.forwardProtoMessage(v);
                break;
            case 104:
                c.logout()
        }
    }

    function Dc(a, b, bot) {
        function d$$0() {
            var d = "";
            for (;;) {
                var c = a.getUint16(b, true);
                b += 2;
                if (0 == c) break;
                d += String.fromCharCode(c)
            }
            return d
        }

        function v() {
            var d = "";
            for (;;) {
                var c = a.getUint8(b++);
                if (0 == c) break;
                d += String.fromCharCode(c)
            }
            return d
        }
        y = Date.now();
        var id = y - Da;



        Da = y;
        oa = Ec * oa + Fc * id;
        Ea = Gc * Ea + Hc * Math.abs(id - oa);
        if (m.core.debug) {
            m.debug.updateChart("networkUpdate", y, id);
            m.debug.updateChart("rttMean", y, oa);
            m.debug.updateChart("rttSDev", y, Ea)
        }
        if (!na) {
            na = true;
            e$$1("#connecting").hide();
            Vb();
            if (S) {
                S();
                S = null
            }
        }
        ub = false;
        id = a.getUint16(b, true);
        b += 2;
        var p = 0;
        for (; p < id; ++p) {
            var M = CellsById[a.getUint32(b, true)];
            var l = CellsById[a.getUint32(b + 4, true)];
            b += 8;
            if (M)
                if (l) {
                    l.ca();
                    l.s = l.x;
                    l.u = l.y;
                    l.o = l.size;
                    l.pa(M.x, M.y);
                    l.g = l.size;
                    l.T = y;
                    Ic(M, l)
                }
        }
        p = 0;
        while (true) {

            id = a.getUint32(b, true);

            b += 4;
            if (0 == id) break;
            // if(dx)  console.log(id); //tt1
            ++p;
            var vb;
            M = a.getInt32(b, true);
            b += 4;
            l = a.getInt32(b, true);
            b += 4;
            M += (bot ? (botdx + DX) : 0);
            l += (bot ? (botdy + DY) : 0);
            vb = a.getInt16(b, true);
            b += 2;
            var n = a.getUint8(b++);
            var f = a.getUint8(b++);
            var h = a.getUint8(b++);
            f = Jc(n << 16 | f << 8 | h);
            h = a.getUint8(b++);
            var k = !!(h & 1);
            var r = !!(h & 16);
            var q = null;
            if (h & 2) b += 4 + a.getUint32(b, true);
            if (h & 4) q = v();
            var u = d$$0();
            n = null;

            if (CellsById.hasOwnProperty(id)) {
                n = CellsById[id];
                if (!bot && n.bot) n.bot = false;
                n.S();
                n.s = n.x;
                n.u = n.y;
                n.o = n.size;
                n.color;
            } else {
                n = new ca(id, M, l, vb, f, u);
                if (bot) n.bot = true;
                Cells.push(n);
                CellsById[id] = n
            }
            n.c = k;
            n.h = r;
            n.pa(M, l);
            n.g = vb;
            n.T = y;
            n.ea = h;
            if (q) n.C = q;
            if (u) n.A(u);
            if (-1 != PlayerCellIds.indexOf(id))
                if (-1 == PlayerCells.indexOf(n)) {
                    PlayerCells.push(n);
                    n.I = true;
                    if (1 == PlayerCells.length) {
                        n.wa = true;
                        // A = n.x;
                        // B = n.y;
                        Wb();
                        document.getElementById("overlays").style.display =
                            "none";
                        F = [];
                        wb = 0;
                        xb = PlayerCells[0].color;
                        Ba = true;
                        Ja = Date.now();
                        W = yb = zb = 0
                    }
                }
                // BOT PUSH
                // if(Date.now() - dat) console.log(BotCellIds);

            if (-1 != BotCellIds.indexOf(id)) {

                if (-1 == BotCells.indexOf(n)) {

                    BotCells.push(n);
                    n.I = true;
                    if (1 == BotCells.length) {
                        n.wa = true;
                    }
                }
            }

        }
        M = a.getUint32(b, true);
        b += 4;
        p = 0;
        for (; p < M; p++) {
            id = a.getUint32(b, true);
            b += 4;
            n = CellsById[id];
            if (null != n) n.ca()
        }

        if(0 == BotCells.length) botDead = true;

        if (ub)
            if (0 == PlayerCells.length)
                if (AutoRespawn) {
                    if (!mainShow)
                        if (!swap)
                            $("#blackscreen").fadeIn(800, function() { c.setNick($("#nick").val());
                                $("#blackscreen").fadeOut(500) });
                        else c.setNick($("#nick").val());
                        // setTimeout(function(){ c.setNick($("#nick").val())}, 800);
                    return
                }
                else
                    if (0 == c.MC.isUserLoggedIn()) Ga();
                    else Xb = setTimeout(Ga, 2E3)





    }

    function Ka() {
        if (da()) {
            var a = Y - q / 2;
            var b = Z - u / 2;
            if (!(64 > a * a + b * b))
                if (!(0.01 > Math.abs(Yb - msX) && 0.01 > Math.abs(Zb - msY))) {
                    Yb = msX;
                    Zb = msY;
                    a = U(13);
                    a.setUint8(0, 16);

                    if (LineDirection.p) {
                        a.setInt32(1, LineDirection.px, true);
                        a.setInt32(5, LineDirection.py, true);
                    }
                    else if(!swap && StopMovement){
                        a.setInt32(1, posX, true);
                        a.setInt32(5, posY, true);
                    }
                    else  {
                        a.setInt32(1, msX, true);
                        a.setInt32(5, msY, true);
                    }
                    a.setUint32(9, 0, true);
                    sockSend(a)
                }
        }
    }

    function Vb() {
        if (da() && (na &&
                null != N)) {
            var a = U(1 + 2 * N.length);
            a.setUint8(0, 0);
            var b = 0;
            for (; b < N.length; ++b) a.setUint16(1 + 2 * b, N.charCodeAt(b), true);
            sockSend(a);
            N = null;
            Ca = true
        }
    }

    function Za() {
        // Send(ANGRY);
        // if(!inter){
        //     inter = setTimeout(function(){Send(HAPPY)}, 2000);
        // }
        // else{
        //     clearTimeout(inter);
        //     inter = setTimeout(function(){Send(HAPPY)}, 2000);
        // }
        Ka();
        X(17);

    }

    function Mb() {
        Ka();
        X(21)
    }

    function da() {
        return null != gamesock && gamesock.readyState == gamesock.OPEN
    }

    function X(a) {
        if (da()) {
            var b = U(1);
            b.setUint8(0, a);
            sockSend(b)
        }
    }

    function Kc(a) {
        if ("auto" == a.toLowerCase()) h$$1.auto = true;
        else {
            m.renderSettings.selected = m.renderSettings[a.toLowerCase()];
            h$$1.auto = false
        }
    }

    function $b() {
        q = 1 * c.innerWidth;
        u = 1 * c.innerHeight;
        Ab.width = O.width = q;
        Ab.height = O.height = u;
        var a = e$$1("#helloContainer");
        a.css("transform", "none");
        var b = a.height();
        var d = c.innerHeight;
        if (0 != b / 2 % 2) {
            b++;
            a.height(b)
        }
        if (b > d / 1.1) a.css("transform", "translate(-50%, -50%) scale(" + d / b / 1.1 + ")");
        else a.css("transform", "translate(-50%, -50%)");
        ac()
    }

    function bc() {
        var a;
        a = 1 * Math.max(u / 1080, q / 1920);
        return a *= gzoom
    }

    function Lc() {
        if (0 != PlayerCells.length) {
            var a = 0;
            var b = 0;
            for (; b < PlayerCells.length; b++) a += PlayerCells[b].size;
            gscale = (9 * gscale + Math.pow(Math.min(64 / a, 1), 0.4) * bc()) / 10
        }
    }

    function ac() {
        var a$$0;
        var b$$0 = Date.now();
        ++Mc;
        if (cc) {
            ++La;
            if (180 < La) La = 0
        }
        y = b$$0;
        // if(Date.now() - dat > 300) { console.log(PlayerCells, BotCells); dat=Date.now(); }
        if (0 < PlayerCells.length) {
            Lc();
            posX = posY = botX = botY = 0;

            for (var c = 0; c < PlayerCells.length; c++) {
                PlayerCells[c].S();
                posX += PlayerCells[c].x / PlayerCells.length;
                posY += PlayerCells[c].y / PlayerCells.length
            }

            for (var c = 0; c < BotCells.length; c++) {
                BotCells[c].S();
                botX += BotCells[c].x / BotCells.length;
                botY += BotCells[c].y / BotCells.length
            }


            ib = posX;
            jb = posY;
            kb = gscale;

            viewX = (swap ? ((viewX + botX) / 2) : ((viewX + posX) / 2));
            viewY = (swap ? ((viewY + botY) / 2) : ((viewY + posY) / 2));




        } else {
            viewX = (5 * viewX + ib) / 6;
            viewY = (5 * viewY + jb) / 6;


            gscale = (9 * gscale + kb * bc()) / 10
        }

        wc();
        $a();
        if (Bb) {
            ctx.fillStyle = ea ? "#111111" : "#F2FBFF";
            ctx.globalAlpha = 0.05;
            ctx.fillRect(0, 0, q, u);
            ctx.globalAlpha = 1
        } else Nc();
        Cells.sort(function(a, b) {
            return a.size == b.size ? a.id - b.id : a.size - b.size
        });
        ctx.save();
        ctx.translate(q / 2, u / 2);
        ctx.scale(gscale, gscale);

        ctx.translate(-viewX, -viewY);
        if (ShowBorders) {
            ctx.beginPath();
            ctx.strokeStyle = "#5DFC0A";
            ctx.lineWidth = 5;
            ctx.strokeRect(Borders.x0, Borders.y0, Borders.xlength, Borders.ylength)
        }
        c = 0;
        for (; c < DestroyedCells.length; c++)
            if (!DestroyedCells[c].bot) DestroyedCells[c].w(ctx);
        c = 0;
        var MAXX = Number.NEGATIVE_INFINITY,
            MINX = Number.POSITIVE_INFINITY,
            MINY = MINX,
            MAXY = MAXX;
        for (; c < Cells.length; c++) {
            if (!Cells[c].bot) {
                MINX = Math.min(MINX, Cells[c].x);
                MAXX = Math.max(MAXX, Cells[c].x);
                MINY = Math.min(MINY, Cells[c].y);
                MAXY = Math.max(MAXY, Cells[c].y);
                Cells[c].w(ctx);
            }

        }
        c = 0;
        for (; c < Cells.length; c++) {
            if (Cells[c].bot && (Cells[c].x < MINX || Cells[c].x > MAXX || Cells[c].y < MINY || Cells[c].y > MAXY)) Cells[c].w(ctx);
        }

        // draw circle

        c = getPlayerMass(BotCells);

        if (BotCells.length > 0 && ((botX < MINX || botX > MAXX || botY < MINY || botY > MAXY) && c<15000 || c < 7000)){
            ctx.save();
            ctx.strokeStyle = "rgba(250,0,0,0.9)";
            ctx.lineWidth = 5 / (gscale * 2);
            var r = 300;
            if(!(botX < MINX || botX > MAXX || botY < MINY || botY > MAXY)){
                r = 150;
                if(c>1850) ctx.strokeStyle = "rgba(0,250,0,0.9)";
            }
            for (var c = 0; c < BotCells.length; c++) {
                ctx.beginPath();
                ctx.arc(BotCells[c].x, BotCells[c].y, r, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.closePath();
            }
             ctx.restore();
        }


        // draw line

        if (LineDirection.b && !botDead) {
            ctx.save();
            ctx.strokeStyle = "rgb(250,0,0)";
            ctx.lineWidth = 10;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.globalAlpha = 0.9;
            ctx.beginPath();
            ctx.moveTo(botX, botY);
            ctx.lineTo(LineDirection.bx, LineDirection.by);
            ctx.stroke();

            ctx.lineWidth = 20;
            var r = 30;
            ctx.moveTo(LineDirection.bx - r, LineDirection.by - r);
            ctx.lineTo(LineDirection.bx + r, LineDirection.by + r);

            ctx.moveTo(LineDirection.bx + r, LineDirection.by - r);
            ctx.lineTo(LineDirection.bx - r, LineDirection.by + r);

             ctx.stroke();


            ctx.restore()
        }

         if (LineDirection.p) {
            console.log(1);
            ctx.save();
            ctx.strokeStyle = "rgb(0,250,0)";
            ctx.lineWidth = 10;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.globalAlpha = 0.9;
            ctx.beginPath();
            ctx.moveTo(posX, posY);
            ctx.lineTo(LineDirection.px, LineDirection.py);
            ctx.stroke();

            ctx.lineWidth = 20;
            var r = 30;
            ctx.moveTo(LineDirection.px - r, LineDirection.py - r);
            ctx.lineTo(LineDirection.px + r, LineDirection.py + r);

            ctx.moveTo(LineDirection.px + r, LineDirection.py - r);
            ctx.lineTo(LineDirection.px - r, LineDirection.py + r);

             ctx.stroke();


            ctx.restore()
        }


        // nb = true;

        if (nb) {
            Ha = (3 * Ha + lb) / 4;
            Ia = (3 * Ia + mb) / 4;
            ctx.save();
            ctx.strokeStyle = "#FFAAAA";
            ctx.lineWidth = 10;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.globalAlpha = 0.5;
            ctx.beginPath();
            c = 0;
            for (; c < PlayerCells.length; c++) {
                ctx.moveTo(PlayerCells[c].x, PlayerCells[c].y);
                ctx.lineTo(Ha, Ia)
            }
            ctx.stroke();
            ctx.restore()
        }
        ctx.restore();
        if (I)
            if (I.width) ctx.drawImage(I, q - I.width - 10, 10);
        T = Math.max(T, getPlayerMass());
        var ll;

        if (0 != T) {
            if (null == Ma) Ma = new Na(24, "#FFFFFF");
            Ma.B(R("score") + ": " + ~~(T / 100));
            d = Ma.N();
            a$$0 = ll = d.width;
            ctx.globalAlpha = 0.2;
            ctx.fillStyle = "#000000";
            ctx.fillRect(10, u - 10 - 24 - 10, a$$0 + 10, 34);
            ctx.globalAlpha = 1;
            ctx.drawImage(d, 15, u - 10 - 24 - 5)
        }
        BotScore = Math.max(BotScore, getPlayerMass(BotCells));

        if (0 != BotScore) {
            if (null == BotScoreText) BotScoreText = new Na(24, "#FFFFFF");
            BotScoreText.B("Duo: " + ~~((BotScore + T) / 100));

            d = BotScoreText.N();
            a$$0 = d.width;
            ctx.globalAlpha = 0.2;
            ctx.fillStyle = "brown";
            ctx.fillRect(ll + 30, u - 10 - 24 - 10, a$$0 + 10, 34);
            ctx.globalAlpha = 1;
            ctx.drawImage(d, ll + 35, u - 10 - 24 - 5)
        }



        Oc();
        b$$0 = Date.now() - b$$0;
        if (b$$0 > 1E3 / 60) h$$1.detail -= 0.01;
        else if (b$$0 < 1E3 / 65) h$$1.detail += 0.001;
        if (h$$1.detail < h$$1.selected.minDetail) {
            if (h$$1.auto) h$$1.downgrade();
            h$$1.detail = h$$1.selected.minDetail
        }
        if (h$$1.detail > h$$1.selected.maxDetail) {
            if (h$$1.auto) h$$1.upgrade();
            h$$1.detail =
                h$$1.selected.maxDetail
        }
        b$$0 = y - ec;
        if (!da() || (mainShow || aa)) {
            C += b$$0 / 2E3;
            if (1 < C) C = 1
        } else {
            C -= b$$0 / 300;
            if (0 > C) C = 0
        }
        if (0 < C) {
            ctx.fillStyle = "#000000";
            if (fc) {
                ctx.globalAlpha = C;
                ctx.fillRect(0, 0, q, u);
                if (K.complete)
                    if (K.width) {
                        if (K.width / K.height < q / u) {
                            b$$0 = q;
                            a$$0 = K.height * q / K.width
                        } else {
                            b$$0 = K.width * u / K.height;
                            a$$0 = u
                        }
                        ctx.drawImage(K, (q - b$$0) / 2, (u - a$$0) / 2, b$$0, a$$0);
                        ctx.globalAlpha = 0.5 * C;
                        ctx.fillRect(0, 0, q, u)
                    }
            } else {
                ctx.globalAlpha = 0.5 * C;
                ctx.fillRect(0, 0, q, u)
            }
            ctx.globalAlpha = 1
        } else fc = false;
        if (h$$1.selected.ma)
            if (Ca) {
                Oa++;
                if (Oa > 10 * h$$1.selected.warnFps) {
                    h$$1.selected.ma = false;
                    Oa = -1;
                    Pa = 0
                } else Pc()
            }
        ec = y
    }

    function Pc() {
        var a = document.createElement("canvas");
        var b = a.getContext("2d");
        var d = Math.min(800, 0.6 * q) / 800;
        a.width = 800 * d;
        a.height = 60 * d;
        b.globalAlpha = 0.3;
        b.fillStyle = "#000000";
        b.fillRect(0, 0, 800, 60);
        b.globalAlpha = 1;
        b.fillStyle = "#FFFFFF";
        b.scale(d, d);
        d = null;
        d = "Your computer is running slow,";
        b.font = "18px Ubuntu";
        b.fillText(d, 400 - b.measureText(d).width / 2, 25);
        d = "please close other applications or tabs in your browser for better game performance.";
        b.fillText(d, 400 - b.measureText(d).width /
            2, 45);
        ctx.drawImage(a, (q - a.width) / 2, u - a.height - 10)
    }

    function Nc() {
        ctx.fillStyle = ea ? "#111111" : "#F2FBFF";
        ctx.fillRect(0, 0, q, u);
        ctx.save();
        ctx.strokeStyle = ea ? "#AAAAAA" : "#000000";
        ctx.globalAlpha = 0.2 * gscale;
        if (!HideGirds && gzoom > 0.19) {
            var a = q / gscale;
            var b = u / gscale;
            var d = (-viewX + a / 2) % 50;
            for (; d < a; d += 50) {
                ctx.beginPath();
                ctx.moveTo(d * gscale - 0.5, 0);
                ctx.lineTo(d * gscale - 0.5, b * gscale);
                ctx.stroke()
            }
            d = (-viewY + b / 2) % 50;
            for (; d < b; d += 50) {
                ctx.beginPath();
                ctx.moveTo(0, d * gscale - 0.5);
                ctx.lineTo(a * gscale, d * gscale - 0.5);
                ctx.stroke()
            }
        }
        ctx.restore()
    }


    function Oc() {
        if (gc && Cb.width) {
            var a = q / 5;
            ctx.drawImage(Cb, 5, 5, a, a)
        }
    }

    function getPlayerMass(t) {
        if (!t) t = PlayerCells;
        var a = 0;
        var b = 0;
        for (; b < t.length; b++) a += t[b].g * t[b].g;
        return a
    }

    function Ub() {
        I = null;
        if (null != J || 0 != D.length)
            if (null != J || fa) {
                I = document.createElement("canvas");
                var a = I.getContext("2d");
                var b = 60;
                b = null == J ? b + 24 * D.length : b + 180;
                var d = Math.min(200, 0.3 * q) / 200;
                I.width = 200 * d;
                I.height = b * d;
                a.scale(d, d);
                a.globalAlpha = 0.4;
                a.fillStyle = "#000000";
                a.fillRect(0, 0, 200, b);
                a.globalAlpha = 1;
                a.fillStyle = "#FFFFFF";
                d = null;
                d = R("leaderboard");
                a.font = "30px Ubuntu";
                a.fillText(d, 100 - a.measureText(d).width / 2, 40);
                var c;
                var e;
                if (null == J) {
                    a.font =
                        "20px Ubuntu";
                    b = 0;
                    for (; b < D.length; ++b) {
                        d = D[b].name || R("unnamed_cell");
                        if (!fa) d = R("unnamed_cell");
                        if (1 == D[b].id || -1 != PlayerCellIds.indexOf(D[b].id)) {
                            if (PlayerCells[0].name) d = PlayerCells[0].name;
                            a.fillStyle = "#FFAAAA"
                        } else a.fillStyle = "#FFFFFF";
                        d = b + 1 + ". " + d;
                        e = a.measureText(d).width;
                        c = 70 + 24 * b;
                        if (200 < e) a.fillText(d, 10, c);
                        else a.fillText(d, (200 - e) / 2, c)
                    }
                } else {
                    b = d = 0;
                    for (; b < J.length; ++b) {
                        c = d + J[b] * Math.PI * 2;
                        a.fillStyle = Qc[b + 1];
                        a.beginPath();
                        a.moveTo(100, 140);
                        a.arc(100, 140, 80, d, c, false);
                        a.fill();
                        d = c
                    }
                }
            }
    }

    function Rc(a) {
        if (null == a || 0 == a.length) return null;
        if ("%" == a[0]) {
            if (!c.MC || !c.MC.getSkinInfo) return null;
            a = c.MC.getSkinInfo("skin_" + a.slice(1));
            if (null == a) return null;
            a = (+a.color).toString(16);
            for (; 6 > a.length;) a = "0" + a;
            return "#" + a
        }
        return null
    }

    function hc(a) {
        if (null == a || 0 == a.length) return null;
        if (!pa.hasOwnProperty(a)) {
            var b = new Image;
            if (":" == a[0]) b.src = a.slice(1);
            else if ("%" == a[0]) {
                if (!c.MC || !c.MC.getSkinInfo) return null;
                var d = c.MC.getSkinInfo("skin_" + a.slice(1));
                if (null == d) return null;
                b.src = c.ASSETS_ROOT + d.url
            }
            pa[a] = b
        }
        return 0 != pa[a].width && pa[a].complete ?
            pa[a] : null
    }

    function Db(a, b, d, c, e) {
        this.$ = a;
        this.x = b;
        this.y = d;
        this.f = c;
        this.b = e
    }

    function ca(a, b, d, c, e, p) {
        this.id = a;
        this.s = this.x = this.L = this.J = b;
        this.u = this.y = this.M = this.K = d;
        this.o = this.size = c;
        this.color = e;
        this.a = [];
        this.ba();
        this.A(p)
    }

    function Jc(a) {
        a = a.toString(16);
        for (; 6 > a.length;) a = "0" + a;
        return "#" + a
    }

    function Na(a, b, d, c) {
        if (a) this.v = a;
        if (b) this.W = b;
        this.Y = !!d;
        if (c) this.Z = c
    }

    function Sc(a) {
        var b = a.length;
        var d;
        var c;
        for (; 0 < b;) {
            c = Math.floor(Math.random() * b);
            b--;
            d = a[b];
            a[b] = a[c];
            a[c] = d
        }
    }

    function Tc() {
        k =
            Qa
    }

    function ic(a) {
        k.context = "google" == a ? "google" : "facebook";
        Ra()
    }

    function Ra() {
        c.localStorage.storeObjectInfo = JSON.stringify(k);
        k = JSON.parse(c.localStorage.storeObjectInfo);
        c.storageInfo = k;
        if ("google" == k.context) {
            e$$1("#gPlusShare").show();
            e$$1("#fbShare").hide()
        } else {
            e$$1("#gPlusShare").hide();
            e$$1("#fbShare").show()
        }
    }

    function jc(a) {
        e$$1("#helloContainer").attr("data-has-account-data");
        if ("" != a.displayName) a.name = a.displayName;
        if (null == a.name || void 0 == a.name) a.name = "";
        var b = a.name.lastIndexOf("_");
        if (-1 != b) a.name = a.name.substring(0, b);
        e$$1("#helloContainer").attr("data-has-account-data", "1");
        e$$1("#helloContainer").attr("data-logged-in", "1");
        e$$1(".agario-profile-panel .progress-bar-star").text(a.level);
        e$$1(".agario-exp-bar .progress-bar-text").text(a.xp + "/" + a.xpNeeded + " XP");
        e$$1(".agario-exp-bar .progress-bar").css("width", (88 * a.xp / a.xpNeeded).toFixed(2) + "%");
        e$$1(".agario-profile-name").eq(0).text(a.name);
        if ("" != a.picture) e$$1(".agario-profile-picture").eq(0).attr("src", a.picture);
        Eb();
        k.userInfo.level =
            a.level;
        k.userInfo.xp = a.xp;
        k.userInfo.xpNeeded = a.xpNeeded;
        k.userInfo.displayName = a.name;
        k.userInfo.loggedIn = "1";
        c.updateStorage()
    }

    function ga(a$$0, b) {
        var d = a$$0;
        if (k.userInfo.loggedIn) {
            var v = e$$1("#helloContainer").is(":visible") && "1" == e$$1("#helloContainer").attr("data-has-account-data");
            if (null == d || void 0 == d) d = k.userInfo;
            if (v) {
                var g = +e$$1(".agario-exp-bar .progress-bar-text").first().text().split("/")[0];
                v = +e$$1(".agario-exp-bar .progress-bar-text").first().text().split("/")[1].split(" ")[0];
                var p =
                    e$$1(".agario-profile-panel .progress-bar-star").first().text();
                if (p != d.level) ga({ xp: v, xpNeeded: v, level: p }, function() {
                    e$$1(".agario-profile-panel .progress-bar-star").text(d.level);
                    e$$1(".agario-exp-bar .progress-bar").css("width", "100%");
                    e$$1(".progress-bar-star").addClass("animated tada").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() { e$$1(".progress-bar-star").removeClass("animated tada") });
                    setTimeout(function() {
                        e$$1(".agario-exp-bar .progress-bar-text").text(d.xpNeeded +
                            "/" + d.xpNeeded + " XP");
                        ga({ xp: 0, xpNeeded: d.xpNeeded, level: d.level }, function() { ga(d) })
                    }, 1E3)
                });
                else {
                    var f = Date.now();
                    var l = function() {
                        var a;
                        a = (Date.now() - f) / 1E3;
                        a = 0 > a ? 0 : 1 < a ? 1 : a;
                        a = a * a * (3 - 2 * a);
                        e$$1(".agario-exp-bar .progress-bar-text").text(~~(g + (d.xp - g) * a) + "/" + d.xpNeeded + " XP");
                        e$$1(".agario-exp-bar .progress-bar").css("width", (88 * (g + (d.xp - g) * a) / d.xpNeeded).toFixed(2) + "%");
                        if (b) b();
                        if (1 > a) c.requestAnimationFrame(l)
                    };
                    c.requestAnimationFrame(l)
                }
            }
        }
    }

    function Eb() {
        var a;
        if ("undefined" !== typeof a && a || "none" ==
            e$$1("#settings").css("display") && "none" == e$$1("#socialLoginContainer").css("display")) e$$1("#instructions").show()
    }

    function kc(a) {
        if ("connected" == a.status) {
            var b$$0 = a.authResponse.accessToken;
            console.log(b$$0);
            if (null == b$$0 || ("undefined" == b$$0 || "" == b$$0)) {
                if (3 > lc) {
                    lc++;
                    c.facebookRelogin()
                }
                c.logout()
            } else {
                c.MC.doLoginWithFB(b$$0);
                m.cache.login_info = [b$$0, "facebook"];
                c.FB.api("/me/picture?width=180&height=180", function(b) {
                    k.userInfo.picture = b.data.url;
                    c.updateStorage();
                    e$$1(".agario-profile-picture").eq(0).attr("src", b.data.url);
                    k.userInfo.socialId = a.authResponse.userID;
                    Sa()
                });
                e$$1("#helloContainer").attr("data-logged-in", "1");
                k.context = "facebook";
                k.loginIntent = "1";
                c.updateStorage()
            }
        }
    }

    function mc(a) {
        ka(":party");
        e$$1("#helloContainer").attr("data-party-state", "4");
        a = decodeURIComponent(a).replace(/.*#/gim, "");
        Fb("#" + c.encodeURIComponent(a));
        e$$1.ajax(za + "getToken", {
            error: function() { e$$1("#helloContainer").attr("data-party-state", "6") },
            success: function(b) {
                b = b.split("\n");
                e$$1(".partyToken").val("agar.io/#" + c.encodeURIComponent(a));
                e$$1("#helloContainer").attr("data-party-state", "5");
                ka(":party");
                fb("ws://" + b[0], a)
            },
            dataType: "text",
            method: "POST",
            cache: false,
            crossDomain: true,
            data: a
        })
    }

    function Fb(a) {
        if (c.history)
            if (c.history.replaceState) c.history.replaceState({}, c.document.title, a)
    }

    function Ga() {
        if (AutoRespawn) return;
        Ca = false;
        clearTimeout(Xb);
        if (null == c.storageInfo) c.createDefaultStorage();
        Gb = Date.now();
        if (0 >= Ja) Ja = Gb;
        Ba = false;
        Uc()
    }

    function Ic(a, b) {
        var d = -1 != PlayerCellIds.indexOf(a.id);
        var c = -1 != PlayerCellIds.indexOf(b.id);
        var e = 30 > b.size;
        if (d)
            if (e) ++wb;
        if (!e)
            if (!!d)
                if (!c)
                    if (!(b.ea & 32)) ++yb
    }

    function nc(a) {
        a = ~~a;
        var b = (a % 60).toString();
        a = (~~(a / 60)).toString();
        if (2 > b.length) b = "0" + b;
        return a + ":" + b
    }

    function Vc() {
        if (null == D) return 0;
        var a = 0;
        for (; a < D.length; ++a)
            if (D[a].id & 1) return a + 1;
        return 0
    }

    function Wc() {
        e$$1(".stats-food-eaten").text(wb);
        e$$1(".stats-time-alive").text(nc((Gb - Ja) / 1E3));
        e$$1(".stats-leaderboard-time").text(nc(zb));
        e$$1(".stats-highest-mass").text(~~(T / 100));
        e$$1(".stats-cells-eaten").text(yb);
        e$$1(".stats-top-position").text(0 ==
            W ? ":(" : W);
        var a$$0 = document.getElementById("statsGraph");
        if (a$$0) {
            var b$$0 = a$$0.getContext("2d");
            var d = a$$0.width;
            a$$0 = a$$0.height;
            b$$0.clearRect(0, 0, d, a$$0);
            if (2 < F.length) {
                var c = 200;
                var g = 0;
                for (; g < F.length; g++) c = Math.max(F[g], c);
                b$$0.lineWidth = 3;
                b$$0.lineCap = "round";
                b$$0.lineJoin = "round";
                b$$0.strokeStyle = xb;
                b$$0.fillStyle = xb;
                b$$0.beginPath();
                b$$0.moveTo(0, a$$0 - F[0] / c * (a$$0 - 10) + 10);
                g = 1;
                for (; g < F.length; g += Math.max(~~(F.length / d), 1)) {
                    var p = g / (F.length - 1) * d;
                    var f = [];
                    var l = -20;
                    for (; 20 >= l; ++l)
                        if (!(0 > g +
                                l))
                            if (!(g + l >= F.length)) f.push(F[g + l]);
                    f = f.reduce(function(a, b) {
                        return a + b
                    }) / f.length / c;
                    b$$0.lineTo(p, a$$0 - f * (a$$0 - 10) + 10)
                }
                b$$0.stroke();
                b$$0.globalAlpha = 0.5;
                b$$0.lineTo(d, a$$0);
                b$$0.lineTo(0, a$$0);
                b$$0.fill();
                b$$0.globalAlpha = 1
            }
        }
    }

    function Uc() {
        if (!mainShow)
            if (!aa)
                if (Ta) {
                    // c.refreshAd(c.adSlots.ab);
                    Wc();
                    aa = true;
                    setTimeout(function() {
                        e$$1("#overlays").fadeIn(500, function() { ga() });
                        e$$1("#stats").show();
                        var a = oc("g_plus_share_stats");
                        c.fillSocialValues(a, "gPlusShare")
                    }, 100)
                } else va(500)
    }

    function oc(a) {
        var b =
            e$$1(".stats-time-alive").text();
        return c.parseString(a, "%@", [b.split(":")[0], b.split(":")[1], e$$1(".stats-highest-mass").text()])
    }

    function Xc() { c.open("https://plus.google.com/share?url=www.agar.io&hl=en-US", "Agar.io", "width=484,height=580,menubar=no,toolbar=no,resizable=yes,scrollbars=no,left=" + (c.screenX + c.innerWidth / 2 - 242) + ",top=" + (c.innerHeight - 580) / 2) }
    var Edown = false;
    var Spacedown = false;
    var Shiftdown = false;
    var pc = document.createElement("canvas");
    if ("undefined" == typeof console || ("undefined" ==
            typeof DataView || ("undefined" == typeof WebSocket || (null == pc || (null == pc.getContext || null == c.localStorage))))) alert("You browser does not support this game, we recommend you to use Firefox to play this");
    else {
        var E = {};
        (function() {
            var a = c.location.search;
            if ("?" == a.charAt(0)) a = a.slice(1);
            a = a.split("&");
            var b = 0;
            for (; b < a.length; b++) {
                var d = a[b].split("=");
                E[d[0]] = d[1]
            }
        })();
        c.queryString = E;
        var qc = "fb" in E;
        var Yc = "miniclip" in E;
        var w = { skinsEnabled: "0", namesEnabled: "0", noColors: "0", blackTheme: "0", showMass: "0", statsEnabled: "0" };
        var Zc = function() { ra("", -1) };
        var rc = "http:" != c.location.protocol;
        var $c = "1" == vc();
        var sc = false;
        if (!qc)
            if (!Yc)
                if (rc && !$c) {
                    ra("1", 1);
                    c.location.href = "http:" + c.location.href.substring(c.location.protocol.length);
                    sc = true
                } else ra("", -1);
        if (!rc) ra("", -1);
        if (!sc) setTimeout(Zc, 3E3);
        if (!c.agarioNoInit) {
            var db = c.location.protocol;
            var gb = "https:" == db;
            if (E.master) EnvConfig.master_url = E.master;
            var za = db + "//" + EnvConfig.master_url + "/";
            var Ua = c.navigator.userAgent;
            if (-1 != Ua.indexOf("Android")) {
                if (c.ga) c.ga("send",
                    "event", "MobileRedirect", "PlayStore");
                setTimeout(function() { c.location.href = "https://play.google.com/store/apps/details?id=com.miniclip.agar.io" }, 1E3)
            } else if (-1 != Ua.indexOf("iPhone") || (-1 != Ua.indexOf("iPad") || -1 != Ua.indexOf("iPod"))) {
                if (c.ga) c.ga("send", "event", "MobileRedirect", "AppStore");
                setTimeout(function() { c.location.href = "https://itunes.apple.com/app/agar.io/id995999703?mt=8&at=1l3vajp" }, 1E3)
            } else {
                var m = {};
                c.agarApp = m;
                var Ab;
                var ctx;
                var O;
                var q;
                var u;
                var ia = null;
                var gamesock = null;
                var botsock = null;
                var viewX = 0;
                var viewY = 0;
                var PlayerCellIds = [];
                var PlayerCells = [];
                var CellsById = {};
                var Cells = [];
                var BotCells = [];
                var BotCellIds = [];
                var bCells = [];
                var bCellsById = {};

                var DestroyedCells = [];
                var D = [];
                var Y = 0;
                var Z = 0;
                var msX = -1;
                var msY = -1;
                var Borders = {};
                var Mc = 0,
                    y = 0,
                    ec = 0,
                    N = null,
                    vminX = 0,
                    vminY = 0,
                    vmaxX = 1E4,
                    vmaxY = 1E4,
                    gscale = 1,
                    G = null,
                    Va = true,
                    fa = true,
                    qa = false,
                    ub = false,
                    botDead = true,
                    T = 0,
                    BotScore = 0,
                    ea = false,
                    Wa = false,
                    ShowMassAll = false,
                    AutoRespawn = false,
                    ShowMinimap = false,
                    ShowBorders = false,
                    StopMovement = false,
                    LineDirection = {b : false, p : false},
                    HideGirds = 0,
                    posX = 0,
                    posY = 0,
                    msX = 0,
                    msY = 0,
                    botX = 0,
                    botY = 0,
                    botdx = 0,
                    botdy = 0,
                    DX = 0,
                    DY = 0,
                    IP = 0,
                    Token = null,
                    Authorised = false,
                    ib = viewX = ~~((vminX + vmaxX) / 2),
                    jb = viewY = ~~((vminY + vmaxY) / 2),
                    kb = 1,
                    la = "",
                    J = null,
                    ab = false,
                    nb = false,
                    lb = 0,
                    mb = 0,
                    Ha = 0,
                    Ia = 0,
                    Qc = ["#333333", "#FF3333", "#33FF33", "#3333FF"],
                    Bb = false,
                    na = false,
                    Da = 0,
                    gzoom = 1,
                    C = 1,
                    mainShow = false,
                    eb = 0,
                    fc = true,
                    tb = null,
                    sb = false,
                    K = new Image;
                K.src = "/img/background.png";
                var gc = "ontouchstart" in c && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(c.navigator.userAgent);
                var Cb = new Image;
                Cb.src = "/img/split.png";
                var sa = false;
                var ta = false;
                var ua = false;
                var Xa = false;
                var Hb;
                var Ib;
                if ("gamepad" in E) setInterval(function() {
                    if (Xa) {
                        Y = Ya.ha(Y, Hb);
                        Z = Ya.ha(Z, Ib)
                    }
                }, 25);
                c.gamepadAxisUpdate = function(a, b) {
                    var d = 0.1 > b * b;
                    if (0 == a)
                        if (d) Hb = q / 2;
                        else {
                            Hb = (b + 1) / 2 * q;
                            Xa = true
                        }
                    if (1 ==
                        a)
                        if (d) Ib = u / 2;
                        else {
                            Ib = (b + 1) / 2 * u;
                            Xa = true
                        }
                };
                c.agarioInit = function() {
                    $("#mbversion").html("v: "+VERSION+ " (beta)");
                    var profileOverlay = localStorage.getItem("profileOverlay");
                    if(profileOverlay){
                        profileOverlay = JSON.parse(profileOverlay);
                        if(profileOverlay.pic){
                            $(".agario-profile-picture").eq(0).hide();
                            $(".agario-profile-picture").eq(1).attr("src", profileOverlay.pic).show()
                        }
                        if(profileOverlay.name){
                            $(".agario-profile-name").eq(0).hide();
                            $(".agario-profile-name").eq(1).html(profileOverlay.name).show()
                        }
                    }
                    ab = true;
                    // zc();  //terjanq, original
                    yc();
                    // m.core.init();
                    if (null != c.localStorage.settings) {
                        w = JSON.parse(c.localStorage.settings);
                        Wa = w.showMass;
                        ea = w.blackTheme;
                        fa = w.namesEnabled;
                        qa = w.noColors;
                        Ta = w.statsEnabled;
                        Va = w.skinsEnabled;
                        ShowMassAll = w.showMassAll;
                        AutoRespawn = w.autoRespawn;
                        ShowMinimap = w.showMinimap;
                        ShowBorders = w.showBorders;
                        HideGirds = w.hideGirds
                    }
                    $("#nick").val(w.nick || "");
                    e$$1("#showMass").prop("checked", w.showMass);
                    e$$1("#noSkins").prop("checked", !w.skinsEnabled);
                    e$$1("#skipStats").prop("checked", !w.statsEnabled);
                    e$$1("#noColors").prop("checked", w.noColors);
                    e$$1("#noNames").prop("checked", !w.namesEnabled);
                    e$$1("#darkTheme").prop("checked", w.blackTheme);
                    e$$1("#showMassAll").prop("checked", w.showMassAll);
                    e$$1("#autoRespawn").prop("checked", w.autoRespawn);
                    e$$1("#showBorders").prop("checked", w.showBorders);
                    e$$1("#showMinimap").prop("checked", w.showMinimap);
                    e$$1("#noGirds").prop("checked", w.hideGirds);
                    this.setShowMinimap(ShowMinimap);
                 //   Ob(); // terjanq, original
                    setInterval(Ob, 18E4);
                    O = Ab = document.getElementById("canvas");
                    (function MinimapInit() {
                        function draw() {
                            var
                                _posX = posX - Borders.x0;
                            _posY = posY - Borders.y0;
                            _botX = botX - Borders.x0;
                            _botY = botY - Borders.y0;

                            ctx.clearRect(0, 0, 200, 200);
                            ctx.beginPath();
                            ctx.arc((_posX) * dx + 3, (_posY) * dx + 3, 6, 0, 2 * Math.PI);
                            ctx.fillStyle = "rgba(250,250,250,0.7)";
                            ctx.fill();
                            ctx.closePath();

                            if (BotCells.length > 0) {
                                ctx.beginPath();
                                ctx.arc((_botX) * dx + 3, (_botY) * dx + 3, 6, 0, 2 * Math.PI);
                                ctx.fillStyle = "rgba(250,0,0,0.7)";
                                ctx.fill();
                                ctx.closePath();
                            }

                            requestAnimationFrame(draw)
                        }
                        var can = document.getElementById("minimap")
                        var ctx = can.getContext("2d");
                        ctx.beginPath();
                        ctx.lineWidth = "2.2";
                        ctx.strokeStyle = "rgba(11, 11, 14, 0.9)";
                        ctx.moveTo(0, 100);
                        ctx.lineTo(200, 100);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.moveTo(100, 0);
                        ctx.lineTo(100, 200);
                        ctx.stroke();

                        can.style.backgroundImage = "url(" + can.toDataURL() + ")";
                        // ctx.clearRect(0,0,200,200);

                        var dx = 194 / 14141;
                        var dy = 194 / 14141;
                        draw()
                    })();




                    (function BotInit() {

                        document.getElementById("canvas").oncontextmenu = function() {
                            return false
                        };
                        document.getElementById("canvas").onselectstart = function() {
                            return false
                        };

                        var obj = function() {
                            var z0 = S(13);
                            z0.setUint8(0, 16);

                            if(LineDirection.b){
                                z0.setInt32(1, LineDirection.bx - botdx - DX, true);
                                z0.setInt32(5, LineDirection.by - botdy - DY, true);
                            }
                            else if(swap && StopMovement){
                                z0.setInt32(1, botX - botdx - DX, true);
                                z0.setInt32(5, botY - botdy - DY, true);
                            } else
                            {
                                z0.setInt32(1, msX - botdx - DX, true);
                                z0.setInt32(5, msY - botdy - DY, true);
                            }
                            z0.setUint32(9, 0, true);
                            return new Uint8Array(z0["buffer"])
                        };
                        var MS = 50;

                        $(".fbtoken").val(window.FBToken);

                        $(".botstart").on("click", function() { botstart()});
                        $(".botstop").on("click", function() { botstop() });
                        $(".fbtoken-refresh").on("click", function(){
                            botstop();
                            getFBToken(function(e){
                                $(".fbtoken").val(e);
                            });
                        });


                        botstart = function() {
                            botstop();
                            var token = Token || "";
                            // console.log(token);
                            var ws = IP;
                            var nick = "terjanq";

                            // console.log("bot start");

                            var FBToken = $(".fbtoken").val();

                            $(".botstatus").html("connecting").css("color", "rgb(200,200,0)");

                            botsock = new WebSocket(ws);
                            botsock.binaryType = "arraybuffer";

                            botsock.onopen = function() {

                                function sendData() {
                                    if (botsock && botsock.readyState < 2) {

                                        if (botsock.readyState == 1) {

                                            if(botDead) {
                                                sendNick(Nick);
                                                botDead = false;
                                            }
                                            var dv = new Uint8Array(obj());
                                            botsockSend(dv)
                                        }
                                        setTimeout(sendData, MS)
                                    }
                                }
                                setTimeout(function(){$(".botstatus").html("working").css("color", "rgb(0,250,0)"); $("#botpanel").css("left", "-207px");}, 500);
                                $("#quality").val("Low").change();
                                dv = S(5);
                                dv.setUint8(0, 254);
                                dv.setUint32(1, 5, true);
                                botsockSend(dv);
                                dv = S(5);
                                dv.setUint8(0, 255);
                                dv.setUint32(1, 154669603, true);
                                botsockSend(dv);
                                dv = S(1 + token.length);
                                dv.setUint8(0, 80);
                                var c = 0;
                                for (; c < token.length; ++c) dv.setUint8(c + 1, token.charCodeAt(c));
                                botsockSend(dv);

                                if (FBToken) {
                                    var FBArray = [102, 8, 1, 18, FBToken.length + 25, 1, 8, 10, 82, FBToken.length + 20, 1, 10, 13, 8, 5, 18, 5, 49, 46, 52, 46, 57, 24, 0, 32, 0, 16, 2, 26, FBToken.length, 1];
                                    for (var i=0 ; i <= FBToken.length - 1;i++)
                                      FBArray.push(FBToken.charCodeAt(i));



                                    botsock.send((new Uint8Array(FBArray)).buffer);

                                }

                                sendData();



                            };
                            botsock.onmessage = Handler;
                            botsock.onclose = function() {
                               setTimeout(function(){$(".botstatus").html("sleeping").css("color", "rgb(250,0,0)");
                                $("#botpanel").css("left", "0px");
                                $('.botstart').show(); $('.botstop').hide()
                            }, 500);
                                BotCells = [];
                                BotCellIds = [];
                                for (var i = 0; i < Cells.length; i++)
                                    if (Cells[i] && Cells[i].bot) {
                                        delete CellsById[Cells[i].id];
                                        Cells.splice(i--, 1);
                                    }

                            };
                            botsock.onerror = function() { $(".botstatus").html("error"); $('.botstart').show(); $('.botstop').hide() }
                        }

                        function Handler(data) {
                            data = new DataView(data.data);
                            var offset = 0;
                            if (data.getUint8(offset) == 240) offset += 5;
                            var _case = data.getUint8(offset++);
                            // console.log(_case);
                            switch (_case) {
                                case 64:
                                    var g_minX;
                                    var g_maxX;
                                    var g_minY;
                                    var g_maxY;
                                    g_minX = data.getFloat64(offset, true);
                                    offset += 8;
                                    g_minY = data.getFloat64(offset, true);
                                    offset += 8;
                                    g_maxX = data.getFloat64(offset, true);
                                    offset += 8;
                                    g_maxY = data.getFloat64(offset,
                                        true);
                                    offset += 8;
                                    if (g_maxX - g_minX > 14E3) {
                                        botdx = 7071 - g_maxX;
                                        botdy = 7071 - g_maxY;
                                    }

                                    break;
                                case 16:
                                    Dc(data, offset, true);
                                    break;
                                case 18:
                                    for (var i = 0; i < Cells.length; i++)
                                        if (Cells[i] && Cells[i].bot) {
                                            delete CellsById[Cells[i].id];
                                            Cells.splice(i--, 1);
                                        }
                                    BotCellIds = [];
                                    BotCells = [];
                                    BotScore = 0;
                                    LineDirection.p = false;
                                    break;
                                case 32:

                                    BotCellIds.push(data.getUint32(offset, true));
                                    offset += 4;
                                    break;
                            }
                        }

                        function S(dv) {
                            return new DataView(new ArrayBuffer(dv))
                        }

                        function botsockSend(dv) { botsock.send(dv.buffer) }

                        function scrollTo(msg) {
                            var dv = S(2 + msg["length"]);
                            dv["setUint8"](0, 82);
                            dv["setUint8"](1, 1);
                            var e = 0;
                            for (; e < msg["length"]; ++e) dv["setUint8"](2 + e, msg["charCodeAt"](e));
                            botsockSend(dv)
                        }

                        function sendNick(nick) {
                            var dv = S(1 + 2 * nick.length);
                            dv.setUint8(0, 0);
                            var b = 0;
                            for (; b < nick.length; ++b) dv.setUint16(1 + 2 * b, nick.charCodeAt(b), true);
                            botsockSend(dv)
                        }

                        function doubleSplit() {
                            if (rclick == true && lclick == true) setTimeout(function() { action(17) }, 100)
                        }

                        function macroW() {
                            if (lclick) {
                                action(21);
                                setTimeout(macroW, 100)
                            }
                        }

                        function macroSplit() {
                            if (macrosplit) {
                                action(17);
                                setTimeout(macroSplit, 300)
                            }
                        }

                        function action(a) {
                            if (botsock && botsock.readyState == 1) {
                                var sp = S(1);
                                var dv = new Uint8Array(obj());
                                sp.setUint8(0, a);
                                botsockSend(dv);
                                botsockSend(sp)
                            }
                        }

                       botstop = function() {
                            if (botsock && botsock.readyState == 1) {
                                $(".botstatus").html("closing").css("color", "rgb(150, 25,0)");
                                $("#botpanel").css("left", "0px");
                                botsock.close();
                            }
                        }


                        var lclick = false;
                        var rclick = false;
                        var macrosplit = false;
                        $("#canvas").mousedown(function(event) {
                            switch (event.which) {
                                case 1:

                                    lclick = true;
                                    action(21);
                                    macroW();
                                    doubleSplit();
                                    return false;
                                    break;
                                case 2:
                                    macrosplit ^= 1;
                                    macroSplit();
                                    break;
                                case 3:
                                    rclick = true;
                                    action(17);
                                    doubleSplit();
                                    return false;
                                    break;
                                default:
                                    console.log("You have a strange Mouse!")
                            }
                        });
                        $("#canvas").mouseup(function(event) {
                            switch (event.which) {
                                case 1:
                                    lclick = false;
                                    break;
                                case 3:
                                    rclick = timer = 0;
                                    break;
                                default:
                                    console.log("You have a strange Mouse!")
                            }
                        });

                    })();


                    if (null != O) {
                        ctx = O.getContext("2d");
                        O.onmousedown = function(a) {
                            if (gc) {
                                var b = a.clientX - (5 + q / 5 / 2);
                                var d = a.clientY - (5 + q / 5 / 2);
                                if (Math.sqrt(b * b + d * d) <= q / 5 / 2) {
                                    Za();
                                    return
                                }
                            }
                            Y = 1 * a.clientX;
                            Z = 1 * a.clientY;
                            $a();
                            Ka()
                        };
                        O.onmousemove = function(a) {
                            Xa = false;
                            Y = 1 * a.clientX;
                            Z = 1 * a.clientY;
                            $a()
                        };
                        O.onmouseup = function() {};
                        if (/firefox/i.test(navigator.userAgent)) document.addEventListener("DOMMouseScroll", Nb, false);
                        else document.body.onmousewheel = Nb;
                        c.onblur = function() {
                            X(19);
                            ua = ta = sa = false
                        };
                        c.onresize = $b;
                        c.requestAnimationFrame(tc);
                        setInterval(Ka, 40);
                        if (G) e$$1("#region").val(G);
                        Qb();
                        Aa(e$$1("#region").val());
                        if (0 == eb)
                            if (G) Q();
                        va(0);
                        $b();
                        if (c.location.hash)
                            if (6 <= c.location.hash.length) mc(c.location.hash)
                    }
                };
                var ya = null;
                c.setNick = function(a) {
                    if (c.ga) c.ga("send", "event", "Nick", a.toLowerCase());
                    Pb();
                    N = a;
                    Vb();
                    T = 0;
                    w.skinsEnabled = Va;
                    w.namesEnabled = fa;
                    w.noColors = qa;
                    w.blackTheme = ea;
                    w.showMass = Wa;
                    w.statsEnabled = Ta;
                    w.showMassAll = ShowMassAll;
                    w.nick = $("#nick").val();
                    w.autoRespawn = AutoRespawn;
                    w.showMinimap = ShowMinimap;
                    w.showBorders = ShowBorders;
                    w.hideGirds = HideGirds;
                    c.localStorage.settings = JSON.stringify(w);
                    KeyBind()
                };
                c.setShowMassAll = function(a) { ShowMassAll = a };
                c.setAutoRespawn = function(a) { AutoRespawn = a };
                c.setSkins = function(a) {
                    Va =
                        a
                };
                c.setNames = function(a) { fa = a };
                c.setDarkTheme = function(a) { ea = a };
                c.setColors = function(a) { qa = a };
                c.setShowMass = function(a) { Wa = a };
                c.setShowMinimap = function(a) {
                    ShowMinimap = a;
                    if (a == true) $("#minimapContener").show();
                    else $("#minimapContener").hide()
                };
                c.setShowBorders = function(a) { ShowBorders = a };
                c.setHideGirds = function(a) { HideGirds = a };
                c.spectate = function() {
                    N = null;
                    KeyBind();
                    X(1);
                    Pb()
                };
                c.setRegion = Aa;
                var bb = true;
                c.setGameMode = function(a) {
                    if (a != la) {
                        if (":party" == la) e$$1("#helloContainer").attr("data-party-state",
                            "0");
                        ka(a);
                        if (":party" != a) Q()
                    }
                };
                c.setAcid = function(a) { Bb = a };
                var ad = function(a$$0) {
                    var b = {};
                    var d$$0 = false;
                    var v = { skipDraw: true, predictionModifier: 1.1 };
                    a$$0.init = function() {
                        m.account.init();
                        m.google.xa();
                        m.fa.init();
                        if (d$$0 = "debug" in c.queryString) m.debug.showDebug()
                    };
                    a$$0.bind = function(a, d) { e$$1(b).bind(a, d) };
                    a$$0.unbind = function(a, d) { e$$1(b).unbind(a, d) };
                    a$$0.trigger = function(a, d) { e$$1(b).trigger(a, d) };
                    a$$0.__defineGetter__("debug", function() {
                        return d$$0
                    });
                    a$$0.__defineSetter__("debug", function(a) {
                        return d$$0 =
                            a
                    });
                    a$$0.__defineGetter__("proxy", function() {
                        return c.MC
                    });
                    a$$0.__defineGetter__("config", function() {
                        return v
                    });
                    return a$$0
                }({});
                m.core = ad;
                m.cache = {};
                var bd = function(a$$0) {
                    function b$$0(a, b, d, c) {
                        a = a + "Canvas";
                        var g = e$$1("<canvas>", { id: a });
                        p.append(g);
                        d = new SmoothieChart(d);
                        g = 0;
                        for (; g < b.length; g++) {
                            var v = b[g];
                            var f = _.extend(h, c[g]);
                            d.addTimeSeries(v, f)
                        }
                        d.streamTo(document.getElementById(a), 0)
                    }

                    function d$$0(a, d) {
                        l[a] = c$$0();
                        b$$0(a, [l[a]], d, [{ strokeStyle: "rgba(0, 255, 0, 1)", fillStyle: "rgba(0, 255, 0, 0.2)", lineWidth: 2 }])
                    }

                    function c$$0() {
                        return new TimeSeries({ Ma: false })
                    }
                    var g$$0 = false;
                    var p;
                    var f$$0 = false;
                    var l = {};
                    var h = { strokeStyle: "rgba(0, 255, 0, 1)", fillStyle: "rgba(0, 255, 0, 0.2)", lineWidth: 2 };
                    a$$0.showDebug = function() {
                        if (!g$$0) {
                            p = e$$1("#debug-overlay");
                            d$$0("networkUpdate", { name: "network updates", minValue: 0, maxValue: 120 });
                            d$$0("fps", { name: "fps", minValue: 0, maxValue: 120 });
                            l.rttSDev = c$$0();
                            l.rttMean = c$$0();
                            b$$0("rttMean", [l.rttSDev, l.rttMean], { name: "rtt", minValue: 0, maxValue: 120 }, [{ strokeStyle: "rgba(255, 0, 0, 1)", fillStyle: "rgba(0, 255, 0, 0.2)", lineWidth: 2 },
                                { strokeStyle: "rgba(0, 255, 0, 1)", fillStyle: "rgba(0, 255, 0, 0)", lineWidth: 2 }
                            ]);
                            g$$0 = true
                        }
                        m.core.debug = true;
                        p.show()
                    };
                    a$$0.hideDebug = function() {
                        p.hide();
                        m.core.debug = false
                    };
                    a$$0.updateChart = function(a, b, d) {
                        if (g$$0)
                            if (a in l) l[a].append(b, d)
                    };
                    a$$0.__defineGetter__("showPrediction", function() {
                        return f$$0
                    });
                    a$$0.__defineSetter__("showPrediction", function(a) {
                        return f$$0 = a
                    });
                    return a$$0
                }({});
                m.debug = bd;
                var ma = { AF: "JP-Tokyo", AX: "EU-London", AL: "EU-London", DZ: "EU-London", AS: "SG-Singapore", AD: "EU-London", AO: "EU-London", AI: "US-Atlanta", AG: "US-Atlanta", AR: "BR-Brazil", AM: "JP-Tokyo", AW: "US-Atlanta", AU: "SG-Singapore", AT: "EU-London", AZ: "JP-Tokyo", BS: "US-Atlanta", BH: "JP-Tokyo", BD: "JP-Tokyo", BB: "US-Atlanta", BY: "EU-London", BE: "EU-London", BZ: "US-Atlanta", BJ: "EU-London", BM: "US-Atlanta", BT: "JP-Tokyo", BO: "BR-Brazil", BQ: "US-Atlanta", BA: "EU-London", BW: "EU-London", BR: "BR-Brazil", IO: "JP-Tokyo", VG: "US-Atlanta", BN: "JP-Tokyo", BG: "EU-London", BF: "EU-London", BI: "EU-London", KH: "JP-Tokyo", CM: "EU-London", CA: "US-Atlanta", CV: "EU-London", KY: "US-Atlanta", CF: "EU-London", TD: "EU-London", CL: "BR-Brazil", CN: "CN-China", CX: "JP-Tokyo", CC: "JP-Tokyo", CO: "BR-Brazil", KM: "EU-London", CD: "EU-London", CG: "EU-London", CK: "SG-Singapore", CR: "US-Atlanta", CI: "EU-London", HR: "EU-London", CU: "US-Atlanta", CW: "US-Atlanta", CY: "JP-Tokyo", CZ: "EU-London", DK: "EU-London", DJ: "EU-London", DM: "US-Atlanta", DO: "US-Atlanta", EC: "BR-Brazil", EG: "EU-London", SV: "US-Atlanta", GQ: "EU-London", ER: "EU-London", EE: "EU-London", ET: "EU-London", FO: "EU-London", FK: "BR-Brazil", FJ: "SG-Singapore", FI: "EU-London", FR: "EU-London", GF: "BR-Brazil", PF: "SG-Singapore", GA: "EU-London", GM: "EU-London", GE: "JP-Tokyo", DE: "EU-London", GH: "EU-London", GI: "EU-London", GR: "EU-London", GL: "US-Atlanta", GD: "US-Atlanta", GP: "US-Atlanta", GU: "SG-Singapore", GT: "US-Atlanta", GG: "EU-London", GN: "EU-London", GW: "EU-London", GY: "BR-Brazil", HT: "US-Atlanta", VA: "EU-London", HN: "US-Atlanta", HK: "JP-Tokyo", HU: "EU-London", IS: "EU-London", IN: "JP-Tokyo", ID: "JP-Tokyo", IR: "JP-Tokyo", IQ: "JP-Tokyo", IE: "EU-London", IM: "EU-London", IL: "JP-Tokyo", IT: "EU-London", JM: "US-Atlanta", JP: "JP-Tokyo", JE: "EU-London", JO: "JP-Tokyo", KZ: "JP-Tokyo", KE: "EU-London", KI: "SG-Singapore", KP: "JP-Tokyo", KR: "JP-Tokyo", KW: "JP-Tokyo", KG: "JP-Tokyo", LA: "JP-Tokyo", LV: "EU-London", LB: "JP-Tokyo", LS: "EU-London", LR: "EU-London", LY: "EU-London", LI: "EU-London", LT: "EU-London", LU: "EU-London", MO: "JP-Tokyo", MK: "EU-London", MG: "EU-London", MW: "EU-London", MY: "JP-Tokyo", MV: "JP-Tokyo", ML: "EU-London", MT: "EU-London", MH: "SG-Singapore", MQ: "US-Atlanta", MR: "EU-London", MU: "EU-London", YT: "EU-London", MX: "US-Atlanta", FM: "SG-Singapore", MD: "EU-London", MC: "EU-London", MN: "JP-Tokyo", ME: "EU-London", MS: "US-Atlanta", MA: "EU-London", MZ: "EU-London", MM: "JP-Tokyo", NA: "EU-London", NR: "SG-Singapore", NP: "JP-Tokyo", NL: "EU-London", NC: "SG-Singapore", NZ: "SG-Singapore", NI: "US-Atlanta", NE: "EU-London", NG: "EU-London", NU: "SG-Singapore", NF: "SG-Singapore", MP: "SG-Singapore", NO: "EU-London", OM: "JP-Tokyo", PK: "JP-Tokyo", PW: "SG-Singapore", PS: "JP-Tokyo", PA: "US-Atlanta", PG: "SG-Singapore", PY: "BR-Brazil", PE: "BR-Brazil", PH: "JP-Tokyo", PN: "SG-Singapore", PL: "EU-London", PT: "EU-London", PR: "US-Atlanta", QA: "JP-Tokyo", RE: "EU-London", RO: "EU-London", RU: "RU-Russia", RW: "EU-London", BL: "US-Atlanta", SH: "EU-London", KN: "US-Atlanta", LC: "US-Atlanta", MF: "US-Atlanta", PM: "US-Atlanta", VC: "US-Atlanta", WS: "SG-Singapore", SM: "EU-London", ST: "EU-London", SA: "EU-London", SN: "EU-London", RS: "EU-London", SC: "EU-London", SL: "EU-London", SG: "JP-Tokyo", SX: "US-Atlanta", SK: "EU-London", SI: "EU-London", SB: "SG-Singapore", SO: "EU-London", ZA: "EU-London", SS: "EU-London", ES: "EU-London", LK: "JP-Tokyo", SD: "EU-London", SR: "BR-Brazil", SJ: "EU-London", SZ: "EU-London", SE: "EU-London", CH: "EU-London", SY: "EU-London", TW: "JP-Tokyo", TJ: "JP-Tokyo", TZ: "EU-London", TH: "JP-Tokyo", TL: "JP-Tokyo", TG: "EU-London", TK: "SG-Singapore", TO: "SG-Singapore", TT: "US-Atlanta", TN: "EU-London", TR: "TK-Turkey", TM: "JP-Tokyo", TC: "US-Atlanta", TV: "SG-Singapore", UG: "EU-London", UA: "EU-London", AE: "EU-London", GB: "EU-London", US: "US-Atlanta", UM: "SG-Singapore", VI: "US-Atlanta", UY: "BR-Brazil", UZ: "JP-Tokyo", VU: "SG-Singapore", VE: "BR-Brazil", VN: "JP-Tokyo", WF: "SG-Singapore", EH: "EU-London", YE: "JP-Tokyo", ZM: "EU-London", ZW: "EU-London" };
                var oa = 0;
                var Ea = 0;
                var S = null;
                var Ca = false;
                var Xb;
                c.connect = fb;
                var Fa = 500;
                var Ec = 0.875;
                var Gc = 0.75;
                var Hc = 0.25;
                var Fc = 0.125;
                var Yb = -1;
                var Zb = -1;
                c.sendMitosis = Za;
                c.sendEject = Mb;
                m.networking = function(a$$0) {
                    a$$0.loginRealm = { GG: "google", FB: "facebook" };
                    a$$0.sendMessage = function(a) {
                        if (da()) {
                            var d = a.byteView;
                            if (null != d) {
                                a = U(1 + a.length);
                                a.setUint8(0, 102);

                                var c = 0;
                                for (; c < d.length; ++c) a.setUint8(1 + c, d[c]);
                                    if(Auth){
                                        var x = (new Uint8Array(a.buffer)).join();
                                        console.log(x);
                                    }
                                if(!Auth)
                                sockSend(a)
                            }
                        }
                    };
                    return a$$0
                }({});
                var I = null;
                var Ma = null;
                var BotScoreText = null;
                var h$$1 = m.renderSettings = {
                    high: { warnFps: 30, simpleDraw: false, maxDetail: 1, minDetail: 0.6, U: 30 },
                    medium: { warnFps: 30, simpleDraw: false, maxDetail: 0.5, minDetail: 0.3, U: 25 },
                    low: { warnFps: 30, simpleDraw: true, maxDetail: 0.3, minDetail: 0.2, U: 25 },
                    upgrade: function() {
                        if (h$$1.selected ==
                            h$$1.low) {
                            h$$1.selected = h$$1.medium;
                            h$$1.detail = h$$1.medium.maxDetail
                        } else if (h$$1.selected == h$$1.medium) {
                            h$$1.selected = h$$1.high;
                            h$$1.detail = h$$1.high.maxDetail
                        }
                    },
                    downgrade: function() {
                        if (h$$1.selected == h$$1.high) h$$1.selected = h$$1.medium;
                        else if (h$$1.selected == h$$1.medium) h$$1.selected = h$$1.low
                    }
                };
                h$$1.selected = h$$1.high;
                h$$1.detail = 1;
                h$$1.auto = false;
                var Jb = 0;
                var Pa = 0;
                var Oa = 0;
                var tc = function() {
                    var a = Date.now();
                    var b = 1E3 / 60;
                    return function() {
                        c.requestAnimationFrame(tc);
                        var d = Date.now();
                        var e = d - a;
                        if (e > b) {
                            a = d - e % b;
                            var g = Date.now();
                            if (!da() || (240 > g - Da || !m.core.config.skipDraw)) ac();
                            else console.warn("Skipping draw");
                            cd();
                            Jb = 1E3 / e;
                            m.debug.updateChart("fps", d, Jb);
                            // var div = document.getElementById("fps");
                            // if(!div){
                            //     div=document.createElement("div");
                            //     div.style.cssText = "font-size:20px; font-weight:600; position:absolute; top:20px; left:50px; backgorund:rgba(0,0,0,0.7);color:white;z-index:1000;pointer-events:none";
                            //     div.id="fps";
                            //     document.body.appendChild(div);
                            //     div.Date = 0;
                            // }

                            // if(Date.now() - div.Date > 1000){ div.innerHTML = ~~Jb; div.Date = Date.now(); }
                            if (Jb < h$$1.selected.warnFps) {
                                if (0 == Oa) {
                                    Pa++;
                                    if (Pa > 2 * h$$1.selected.warnFps) h$$1.selected.ma = true
                                }
                            } else Pa = 0
                        }
                    }
                }();
                c.setQuality = Kc;
                var ha = {};
                var Rb = "poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;venezuela;blatter;chavez;cuba;fidel;merkel;palin;queen;boris;bush;trump;underwood".split(";");
                var dd = "8;nasa;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;blatter;chavez;fidel;merkel;palin;queen;boris;bush;trump;underwood".split(";");
                var pa = {};
                Db.prototype = { $: null, x: 0, y: 0, f: 0, b: 0 };
                var La = -1;
                var cc = false;
                ca.prototype = {
                    id: 0,
                    a: null,
                    name: null,
                    i: null,
                    R: null,
                    x: 0,
                    y: 0,
                    size: 0,
                    s: 0,
                    u: 0,
                    o: 0,
                    ja: 0,
                    ka: 0,
                    g: 0,
                    L: 0,
                    M: 0,
                    J: 0,
                    K: 0,
                    ea: 0,
                    T: 0,
                    ta: 0,
                    G: false,
                    c: false,
                    h: false,
                    V: true,
                    da: 0,
                    C: null,
                    ia: 0,
                    wa: false,
                    I: false,
                    ca: function() {
                        var a;
                        a = 0;
                        for (; a < Cells.length; a++)
                            if (Cells[a] == this) {
                                Cells.splice(a, 1);
                                break
                            }
                        delete CellsById[this.id];

                        a = PlayerCells.indexOf(this);
                        if (-1 != a) {
                            ub = true;
                            PlayerCells.splice(a, 1)
                        }

                        a = BotCells.indexOf(this);
                        if (-1 != a) {
                            BotCells.splice(a, 1)
                        }

                        a = PlayerCellIds.indexOf(this.id);
                        if (-1 != a) PlayerCellIds.splice(a, 1);
                        a = BotCellIds.indexOf(this.id);
                        if (-1 != a) BotCellIds.splice(a, 1);
                        this.G = true;
                        if (0 < this.da) { DestroyedCells.push(this); }
                    },
                    m: function() {
                        return Math.max(~~(0.3 * this.size), 24)
                    },
                    A: function(a) {
                        if (this.name = a) {
                            if (null == this.i) this.i = new Na(this.m(), "#FFFFFF", true, "#000000");
                            else this.i.O(this.m());
                            this.i.B(this.name)
                        }
                    },
                    ba: function() {
                        var a = this.H();
                        for (; this.a.length > a;) {
                            var b = ~~(Math.random() * this.a.length);
                            this.a.splice(b, 1)
                        }
                        if (0 == this.a.length)
                            if (0 <
                                a) this.a.push(new Db(this, this.x, this.y, this.size, Math.random() - 0.5));
                        for (; this.a.length < a;) {
                            b = ~~(Math.random() * this.a.length);
                            b = this.a[b];
                            this.a.push(new Db(this, b.x, b.y, b.f, b.b))
                        }
                    },
                    H: function() {
                        var a = 10;
                        if (20 > this.size) a = 0;
                        if (this.c) a = m.renderSettings.selected.U;
                        var b = this.size;
                        if (!this.c) b *= gscale;
                        b *= h$$1.detail;
                        return ~~Math.max(b, a)
                    },
                    Da: function() {
                        this.ba();
                        var a$$0 = this.a;
                        var b = a$$0.length;
                        var d = this;
                        var c = this.c ? 0 : (this.id / 1E3 + y / 1E4) % (2 * Math.PI);
                        var e = 0;
                        var p = 0;
                        for (; p < b; ++p) {
                            var f = a$$0[(p - 1 + b) % b].b;
                            var l = a$$0[(p + 1) % b].b;
                            var h = a$$0[p];
                            h.b += (Math.random() - 0.5) * (this.h ? 3 : 1);
                            h.b *= 0.7;
                            if (10 < h.b) h.b = 10;
                            if (-10 > h.b) h.b = -10;
                            h.b = (f + l + 8 * h.b) / 10;
                            var n = h.f;
                            f = a$$0[(p - 1 + b) % b].f;
                            l = a$$0[(p + 1) % b].f;
                            if (15 < this.size && (null != ia && (20 < this.size * gscale && 0 < this.id))) {
                                var k = false;
                                var m = h.x;
                                var q = h.y;
                                ia.Ga(m - 5, q - 5, 10, 10, function(a) {
                                    if (a.$ != d)
                                        if (25 > (m - a.x) * (m - a.x) + (q - a.y) * (q - a.y)) k = true
                                });
                                if (!k)
                                    if (h.x < vminX || (h.y < vminY || (h.x > vmaxX || h.y > vmaxY))) k = true;
                                if (k && !h$$1.selected.simpleDraw) {
                                    if (0 < h.b) h.b = 0;
                                    --h.b
                                }
                            }
                            n += h.b;
                            if (0 > n) n = 0;
                            n = this.h ? (19 * n + this.size) / 20 : (12 * n + this.size) /
                                13;
                            h.f = (f + l + 8 * n) / 10;
                            f = 2 * Math.PI / b;
                            l = h.f;
                            if (this.c)
                                if (0 == p % 2) l += 5;
                            h.x = this.x + Math.cos(f * p + c) * l;
                            h.y = this.y + Math.sin(f * p + c) * l;
                            e = Math.max(e, l)
                        }
                        this.ia = e
                    },
                    pa: function(a, b) {
                        this.L = a;
                        this.M = b;
                        this.J = a;
                        this.K = b;
                        this.ja = a;
                        this.ka = b
                    },
                    S: function() {
                        if (0 >= this.id) return 1;
                        var a = Ya.ra((y - this.T) / 120, 0, 1);
                        if (this.G && 1 <= a) {
                            var b = DestroyedCells.indexOf(this);
                            if (-1 != b) DestroyedCells.splice(b, 1)
                        }
                        this.x = a * (this.ja - this.s) + this.s;
                        this.y = a * (this.ka - this.u) + this.u;
                        this.size = a * (this.g - this.o) + this.o;
                        if (0.01 > Math.abs(this.size - this.g)) this.size =
                            this.g;
                        return a
                    },
                    P: function() {
                        return 0 >= this.id ? true : this.x + this.size + 40 < viewX - q / 2 / gscale || (this.y + this.size + 40 < viewY - u / 2 / gscale || (this.x - this.size - 40 > viewX + q / 2 / gscale || this.y - this.size - 40 > viewY + u / 2 / gscale)) ? false : true
                    },
                    sa: function(a) {
                        a.beginPath();
                        var b = this.H();
                        a.moveTo(this.a[0].x, this.a[0].y);
                        var d = 1;
                        for (; d <= b; ++d) {
                            var c = d % b;
                            a.lineTo(this.a[c].x, this.a[c].y)
                        }
                        a.closePath();
                        a.stroke()
                    },
                    w: function(ctx) {
                        if (this.P()) {
                            ++this.da;
                            var simpleDrawing = 0 < this.id && (!this.c && (!this.h && 0.4 > gscale)) || h$$1.selected.simpleDraw && !this.c;
                            if (5 > this.H())
                                if (0 < this.id) simpleDrawing =
                                    true;
                            if (this.V && !simpleDrawing) {
                                var d = 0;
                                for (; d < this.a.length; d++) this.a[d].f = this.size
                            }
                            this.V = simpleDrawing;
                            ctx.save();
                            this.ta = y;
                            d = this.S();
                            if (this.G) ctx.globalAlpha *= 1 - d;
                            ctx.lineWidth = 10;
                            ctx.lineCap = "round";
                            ctx.lineJoin = this.c ? "miter" : "round";
                            var e = this.name.toLowerCase();
                            var g = null;
                            var p = null;
                            d = false;
                            var f = this.color;
                            var l = false;
                            if (!this.h)
                                if (!!Va)
                                    if (!sb) {
                                        if (-1 != Rb.indexOf(e)) {
                                            if (!ha.hasOwnProperty(e)) {
                                                ha[e] = new Image;
                                                ha[e].src = c.ASSETS_ROOT + "skins/" + e + ".png";

                                            }
                                            g = 0 != ha[e].width && ha[e].complete ? ha[e] : null
                                        } else g = null;
                                        if (null != g) {
                                            if (-1 !=
                                                dd.indexOf(e)) d = true
                                        } else {

                                            if (this.I)
                                                if ("%starball" == this.C)
                                                    if ("shenron" == e)
                                                        if (7 <= PlayerCells.length) {
                                                            cc = d = true;
                                                            p = hc("%starball1")
                                                        }
                                            g = hc(this.C);
                                            if (null != g) {
                                                l = true;
                                                f = Rc(this.C) || f
                                            }
                                        }
                                    }
                            if (m.core.debug)
                                if (m.debug.showPrediction)
                                    if (this.I) {
                                        ctx.strokeStyle = "#0000FF";
                                        ctx.beginPath();
                                        ctx.arc(this.L, this.M, this.size + 5, 0, 2 * Math.PI, false);
                                        ctx.closePath();
                                        ctx.stroke();
                                        ctx.strokeStyle = "#00FF00";
                                        ctx.beginPath();
                                        ctx.arc(this.J, this.K, this.size + 5, 0, 2 * Math.PI, false);
                                        ctx.closePath();
                                        ctx.stroke()
                                    }
                            if (qa && !sb) {
                                ctx.fillStyle = "#FFFFFF";
                                ctx.strokeStyle = "#AAAAAA"
                            } else {
                                ctx.fillStyle =
                                    f;
                                ctx.strokeStyle = f
                            }
                            if (simpleDrawing) {
                                ctx.beginPath();
                                ctx.arc(this.x, this.y, this.size + 5, 0, 2 * Math.PI, false);
                                ctx.closePath()
                            } else {
                                 this.Da();
                                this.sa(ctx)
                            }
                            if (!l) ctx.fill();
                            if (null != g) {
                                this.na(ctx, g);
                                if (null != p) this.na(ctx, p, { alpha: Math.sin(0.0174 * La) })
                            }
                            if (qa || 20 < this.size)
                                if (!simpleDrawing) {
                                    ctx.strokeStyle = "#000000";
                                    ctx.globalAlpha *= 0.1;
                                    ctx.stroke()
                                }
                            ctx.globalAlpha = 1;
                            e = -1 != PlayerCells.indexOf(this);
                            simpleDrawing = ~~this.y;
                            if (0 != this.id)
                                if (fa || e)
                                    if (this.name)
                                        if (this.i)
                                            if (!d) {
                                                g = this.i;
                                                g.B(this.name);
                                                g.O(this.m());
                                                d = 0 >= this.id ? 1 : Math.ceil(10 * gscale) / 10;
                                                g.oa(d);
                                                g = g.N();
                                                p = Math.ceil(g.width /
                                                    d);
                                                f = Math.ceil(g.height / d);
                                                ctx.drawImage(g, ~~this.x - ~~(p / 2), simpleDrawing - ~~(f / 2), p, f);
                                                simpleDrawing += g.height / 2 / d + 4
                                            }
                            if (0 < this.id)
                                if (Wa)
                                    if (e || (ShowMassAll || 0 == PlayerCells.length && (!this.c || this.h)) && 40 < this.size) {
                                        if (null == this.R) this.R = new Na(this.m() / 2, "#FFFFFF", true, "#000000");
                                        e = this.R;
                                        e.O(this.m() / 2);
                                        e.B(~~(this.size * this.size / 100));
                                        d = Math.ceil(10 * gscale) / 10;
                                        e.oa(d);
                                        g = e.N();
                                        p = Math.ceil(g.width / d);
                                        f = Math.ceil(g.height / d);
                                        ctx.drawImage(g, ~~this.x - ~~(p / 2), simpleDrawing - ~~(f / 2), p, f)
                                    }
                            ctx.restore()
                        }
                    },
                    na: function(a, b, d) {
                        a.save();
                        a.clip();
                        var c = Math.max(this.size,
                            this.ia);
                        if (null != d)
                            if (null != d.alpha) a.globalAlpha = d.alpha;
                        a.drawImage(b, this.x - c - 5, this.y - c - 5, 2 * c + 10, 2 * c + 10);
                        a.restore()
                    }
                };
                var Ya = function(a$$0) {
                    function b$$0(a, b, c) {
                        return a < b ? b : a > c ? c : a
                    }
                    a$$0.ha = function(a, c) {
                        var e;
                        e = b$$0(0.5, 0, 1);
                        return a + e * (c - a)
                    };
                    a$$0.ra = b$$0;
                    a$$0.fixed = function(a, b) {
                        var c = Math.pow(10, b);
                        return ~~(a * c) / c
                    };
                    return a$$0
                }({});
                c.Maths = Ya;
                var hb = function(a$$0) {
                    a$$0.la = function() {
                        var a = new Date;
                        var d = [a.getMonth() + 1, a.getDate(), a.getFullYear()];
                        a = [a.getHours(), a.getMinutes(), a.getSeconds()];
                        var c = 1;
                        for (; 3 > c; c++)
                            if (10 > a[c]) a[c] = "0" + a[c];
                        return "[" + d.join("/") + " " + a.join(":") + "]"
                    };
                    return a$$0
                }({});
                c.Utils = hb;
                Na.prototype = {
                    F: "",
                    W: "#000000",
                    Y: false,
                    Z: "#000000",
                    v: 16,
                    j: null,
                    X: null,
                    l: false,
                    D: 1,
                    O: function(a) {
                        if (this.v != a) {
                            this.v = a;
                            this.l = true
                        }
                    },
                    oa: function(a) {
                        if (this.D != a) {
                            this.D = a;
                            this.l = true
                        }
                    },
                    B: function(a) {
                        if (a != this.F) {
                            this.F = a;
                            this.l = true
                        }
                    },
                    N: function() {
                        if (null == this.j) {
                            this.j = document.createElement("canvas");
                            this.X = this.j.getContext("2d")
                        }
                        if (this.l) {
                            this.l = false;
                            var a = this.j;
                            var b = this.X;
                            var c = this.F;
                            var e = this.D;
                            var g = this.v;
                            var f = g + "px Ubuntu";
                            b.font = f;
                            var h = ~~(0.2 * g);
                            a.width = (b.measureText(c).width + 6) * e;
                            a.height = (g + h) * e;
                            b.font = f;
                            b.scale(e, e);
                            b.globalAlpha = 1;
                            b.lineWidth = 3;
                            b.strokeStyle = this.Z;
                            b.fillStyle = this.W;
                            if (this.Y) b.strokeText(c, 3, g - h / 2);
                            b.fillText(c, 3, g - h / 2)
                        }
                        return this.j
                    }
                };
                if (!Date.now) Date.now = function() {
                    return (new Date).getTime()
                };
                (function() {
                    var a$$0 = ["ms", "moz", "webkit", "o"];
                    var b = 0;
                    for (; b < a$$0.length && !c.requestAnimationFrame; ++b) {
                        c.requestAnimationFrame = c[a$$0[b] +
                            "RequestAnimationFrame"];
                        c.cancelAnimationFrame = c[a$$0[b] + "CancelAnimationFrame"] || c[a$$0[b] + "CancelRequestAnimationFrame"]
                    }
                    if (!c.requestAnimationFrame) {
                        c.requestAnimationFrame = function(a) {
                            return setTimeout(a, 1E3 / 60)
                        };
                        c.cancelAnimationFrame = function(a) { clearTimeout(a) }
                    }
                })();
                var xc = {
                    init: function(a$$0) {
                        function b(a) {
                            if (a < e$$0) a = e$$0;
                            if (a > f$$0) a = f$$0;
                            return ~~((a - e$$0) / 32)
                        }

                        function c(a) {
                            if (a < g$$0) a = g$$0;
                            if (a > h$$0) a = h$$0;
                            return ~~((a - g$$0) / 32)
                        }
                        var e$$0 = a$$0.Ba;
                        var g$$0 = a$$0.Ca;
                        var f$$0 = a$$0.za;
                        var h$$0 =
                            a$$0.Aa;
                        var l = ~~((f$$0 - e$$0) / 32) + 1;
                        var k = ~~((h$$0 - g$$0) / 32) + 1;
                        var n = Array(l * k);
                        return {
                            va: function(a) {
                                var e = b(a.x) + c(a.y) * l;
                                if (null == n[e]) n[e] = a;
                                else if (Array.isArray(n[e])) n[e].push(a);
                                else n[e] = [n[e], a]
                            },
                            Ga: function(a, e, g, f, h) {
                                var p = b(a);
                                var v = c(e);
                                a = b(a + g);
                                e = c(e + f);
                                if (0 > p || (p >= l || (0 > v || v >= k))) debugger;
                                for (; v <= e; ++v) {
                                    f = p;
                                    for (; f <= a; ++f)
                                        if (g = n[f + v * l], null != g)
                                            if (Array.isArray(g)) {
                                                var m = 0;
                                                for (; m < g.length; m++) h(g[m])
                                            } else h(g)
                                }
                            }
                        }
                    }
                };
                var Wb = function() {
                    var a = new ca(0, 0, 0, 32, "#ED1C24", "");
                    var b = document.createElement("canvas");
                    b.width = 32;
                    b.height = 32;
                    var c = b.getContext("2d");
                    return function() {
                        if (0 < PlayerCells.length) {
                            a.color = PlayerCells[0].color;
                            a.A(PlayerCells[0].name)
                        }
                        c.clearRect(0, 0, 32, 32);
                        c.save();
                        c.translate(16, 16);
                        c.scale(0.4, 0.4);
                        a.w(c);
                        c.restore();
                        var e = document.getElementById("favicon");
                        var g = e.cloneNode(true);
                        g.setAttribute("href", b.toDataURL("image/png"));
                        e.parentNode.replaceChild(g, e)
                    }
                }();
                e$$1(function() { Wb() });
                var Qa = { context: null, defaultProvider: "facebook", loginIntent: "0", userInfo: { socialToken: null, tokenExpires: "", level: "", xp: "", xpNeeded: "", name: "", picture: "", displayName: "", loggedIn: "0", socialId: "" } };
                var k = c.defaultSt = Qa;
                c.storageInfo = k;
                c.createDefaultStorage = Tc;
                c.updateStorage = Ra;
                e$$1(function() {
                    if (null != c.localStorage.storeObjectInfo) k = JSON.parse(c.localStorage.storeObjectInfo);
                    if ("1" == k.loginIntent) ic(k.context);
                    if (!("" == k.userInfo.name && "" == k.userInfo.displayName)) jc(k.userInfo)
                });
                c.checkLoginStatus = function() {
                    if ("1" == k.loginIntent) {
                        Sa();
                        ic(k.context)
                    }
                };
                var Sa = function() {
                    c.MC.setProfilePicture(k.userInfo.picture);
                    c.MC.setSocialId(k.userInfo.socialId)
                };
                c.logout = function() {
                    k = Qa;
                    delete c.localStorage.storeObjectInfo;
                    c.localStorage.storeObjectInfo = JSON.stringify(Qa);
                    Ra();
                    uc();
                    m.cache.sentGameServerLogin = false;
                    delete m.cache.login_info;
                    e$$1("#helloContainer").attr("data-logged-in", "0");
                    e$$1("#helloContainer").attr("data-has-account-data", "0");
                    e$$1(".timer").text("");
                    e$$1("#gPlusShare").hide();
                    e$$1("#fbShare").show();
                    e$$1("#user-id-tag").text("");
                    Q();
                    c.MC.doLogout()
                };
                c.toggleSocialLogin = function() {
                    e$$1("#socialLoginContainer").toggle();
                    e$$1("#settings").hide();
                    e$$1("#instructions").hide();
                    Eb()
                };
                c.toggleSettings =
                    function() {
                        e$$1("#settings").toggle();
                        e$$1("#socialLoginContainer").hide();
                        e$$1("#instructions").hide();
                        Eb()
                    };
                m.account = function(a$$0) {
                    function b$$0() {}

                    function d(a, b) {
                        if (null == f || f.id != b.id) {
                            f = b;
                            if (null != c.ssa_json) {
                                c.ssa_json.applicationUserId = "" + b.id;
                                c.ssa_json.custom_user_id = "" + b.id
                            }
                            if ("undefined" != typeof SSA_CORE) SSA_CORE.start()
                        }
                    }
                    var f = null;
                    a$$0.init = function() {
                        m.core.bind("user_login", d);
                        m.core.bind("user_logout", b$$0)
                    };
                    a$$0.setUserData = function(a) { jc(a) };
                    a$$0.setAccountData = function(a, b) {
                        var c =
                            e$$1("#helloContainer").attr("data-has-account-data", "1");
                        k.userInfo.xp = a.xp;
                        k.userInfo.xpNeeded = a.xpNeeded;
                        k.userInfo.level = a.level;
                        Ra();
                        if (c && b) ga(a);
                        else {
                            e$$1(".agario-profile-panel .progress-bar-star").text(a.level);
                            e$$1(".agario-exp-bar .progress-bar-text").text(a.xp + "/" + a.xpNeeded + " XP");
                            e$$1(".agario-exp-bar .progress-bar").css("width", (88 * a.xp / a.xpNeeded).toFixed(2) + "%")
                        }
                    };
                    a$$0.Ia = function(a) { ga(a) };
                    return a$$0
                }({});
                var lc = 0;
                c.fbAsyncInit = function() {
                    function a$$0() {
                        if (null == c.FB) alert("You seem to have something blocking Facebook on your browser, please check for any extensions");
                        else {
                            k.loginIntent = "1";
                            c.updateStorage();
                            c.FB.login(function(a) { kc(a) }, { scope: "public_profile, email" })
                        }
                    }
                    c.FB.init({ appId: EnvConfig.fb_app_id, cookie: true, xfbml: true, status: true, version: "v2.2" });
                    if ("1" == c.storageInfo.loginIntent && "facebook" == c.storageInfo.context || qc) c.FB.getLoginStatus(function(b) {
                        if ("connected" === b.status) kc(b);
                        else if ("not_authorized" === b.status) {
                            c.logout();
                            a$$0()
                        } else c.logout()
                    });
                    c.facebookRelogin = a$$0;
                    c.facebookLogin = a$$0
                };
                var Kb = false;
                (function(a$$1) {
                    function b$$0() {
                        var a = document.createElement("script");
                        a.type = "text/javascript";
                        a.async = true;
                        a.src = "//apis.google.com/js/client:platform.js?onload=gapiAsyncInit";
                        var b = document.getElementsByTagName("script")[0];
                        b.parentNode.insertBefore(a, b);
                        f = true
                    }
                    var d = {};
                    var f = false;
                    c.gapiAsyncInit = function() { e$$1(d).trigger("initialized") };
                    a$$1.google = {
                        xa: function() { b$$0() },
                        ua: function(a$$0, b) {
                            c.gapi.client.load("plus", "v1", function() {
                                console.log("fetching me profile");
                                gapi.client.plus.people.get({ userId: "me" }).execute(function(a) { b(a) })
                            })
                        }
                    };
                    a$$1.Fa = function(a) {
                        if (!f) b$$0();
                        if ("undefined" !== typeof gapi) a();
                        else e$$1(d).bind("initialized", a)
                    };
                    return a$$1
                })(m);
                var ed = function(a$$1) {
                    function b$$0(a) {
                        c.MC.doLoginWithGPlus(a);
                        m.cache.login_info = [a, "google"]
                    }

                    function d(a) {
                        k.userInfo.picture = a;
                        e$$1(".agario-profile-picture").eq(0).attr("src", a)
                    }
                    var f = null;
                    var g$$0 = { client_id: EnvConfig.gplus_client_id, cookie_policy: "single_host_origin", scope: "profile email" };
                    a$$1.fa = {
                        qa: function() {
                            return f
                        },
                        init: function() {
                            var a$$0 = this;
                            var b = k && ("1" == k.loginIntent && "google" == k.context);
                            m.Fa(function() {
                                c.gapi.ytsubscribe.go("agarYoutube");
                                c.gapi.load("auth2", function() {
                                    f = c.gapi.auth2.init(g$$0);
                                    f.attachClickHandler(document.getElementById("gplusLogin"), {}, function(a) { console.log("googleUser : " + a) }, function(a) { console.log("failed to login in google plus: ", JSON.stringify(a, void 0, 2)) });
                                    f.currentUser.listen(_.bind(a$$0.Ea, a$$0));
                                    if (b)
                                        if (1 == f.isSignedIn.get()) f.signIn()
                                })
                            })
                        },
                        Ea: function(a$$0) {
                            if (f && (a$$0 && (f.isSignedIn.get() && !Kb))) {
                                Kb = true;
                                k.loginIntent = "1";
                                var e = a$$0.getAuthResponse();
                                var g = e.access_token;
                                c.qa = e;
                                console.log("loggedIn with G+!");
                                var h = a$$0.getBasicProfile();
                                a$$0 = h.getImageUrl();
                                if (void 0 == a$$0) m.google.ua(e, function(a) {
                                    if (a.result.isPlusUser) {
                                        if (a) d(a.image.url);
                                        b$$0(g);
                                        if (a) k.userInfo.picture = a.image.url;
                                        k.userInfo.socialId = h.getId();
                                        Sa()
                                    } else {
                                        alert("Please add Google+ to your Google account and try again.\nOr you can login with another account.");
                                        c.logout()
                                    }
                                });
                                else {
                                    d(a$$0);
                                    k.userInfo.picture = a$$0;
                                    k.userInfo.socialId = h.getId();
                                    Sa();
                                    b$$0(g)
                                }
                                k.context = "google";
                                c.updateStorage()
                            }
                        },
                        ya: function() {
                            if (f) {
                                f.signOut();
                                Kb = false
                            }
                        }
                    };
                    return a$$1
                }(m);
                c.gplusModule = ed;
                var uc = function() { m.fa.ya() };
                c.logoutGooglePlus = uc;
                var cd = function() {
                    function a$$0(a, b, c, d, e) {
                        var f = b.getContext("2d");
                        var g = b.width;
                        b = b.height;
                        a.color = e;
                        a.A(c);
                        a.size = d;
                        f.save();
                        f.translate(g / 2, b / 2);
                        a.w(f);
                        f.restore()
                    }
                    var b$$0 = new ca(-1, 0, 0, 32, "#5bc0de", "");
                    var c$$0 = new ca(-1, 0, 0, 32, "#5bc0de", "");
                    var f$$0 = "#0791ff #5a07ff #ff07fe #ffa507 #ff0774 #077fff #3aff07 #ff07ed #07a8ff #ff076e #3fff07 #ff0734 #07ff20 #ff07a2 #ff8207 #07ff0e".split(" ");
                    var g$$0 = [];
                    var h$$0 =
                        0;
                    for (; h$$0 < f$$0.length; ++h$$0) {
                        var k$$0 = h$$0 / f$$0.length * 12;
                        var l = 30 * Math.sqrt(h$$0 / f$$0.length);
                        g$$0.push(new ca(-1, Math.cos(k$$0) * l, Math.sin(k$$0) * l, 10, f$$0[h$$0], ""))
                    }
                    Sc(g$$0);
                    var m = document.createElement("canvas");
                    m.getContext("2d");
                    m.width = m.height = 70;
                    a$$0(c$$0, m, "", 26, "#ebc0de");
                    return function() {
                        e$$1(".cell-spinner").filter(":visible").each(function() {
                            var c = e$$1(this);
                            var d = Date.now();
                            var f = this.width;
                            var g = this.height;
                            var h = this.getContext("2d");
                            h.clearRect(0, 0, f, g);
                            h.save();
                            h.translate(f /
                                2, g / 2);
                            var k = 0;
                            for (; 10 > k; ++k) h.drawImage(m, (0.1 * d + 80 * k) % (f + 140) - f / 2 - 70 - 35, g / 2 * Math.sin((0.001 * d + k) % Math.PI * 2) - 35, 70, 70);
                            h.restore();
                            if (c = c.attr("data-itr")) c = R(c);
                            a$$0(b$$0, this, c || "", +e$$1(this).attr("data-size"), "#5bc0de")
                        });
                        e$$1("#statsPellets").filter(":visible").each(function() {
                            e$$1(this);
                            var b = this.width;
                            var c = this.height;
                            this.getContext("2d").clearRect(0, 0, b, c);
                            b = 0;
                            for (; b < g$$0.length; b++) a$$0(g$$0[b], this, "", g$$0[b].size, g$$0[b].color)
                        })
                    }
                }();
                c.createParty = function() {
                    ka(":party");
                    S = function(a) {
                        Fb("/#" +
                            c.encodeURIComponent(a));
                        e$$1(".partyToken").val("agar.io/#" + c.encodeURIComponent(a));
                        e$$1("#helloContainer").attr("data-party-state", "1")
                    };
                    Q()
                };
                c.joinParty = mc;
                c.cancelParty = function() {
                    Fb("/");
                    e$$1("#helloContainer").attr("data-party-state", "0");
                    ka("");
                    Q()
                };
                var F = [];
                var wb = 0;
                var xb = "#000000";
                var aa = false;
                var Ba = false;
                var Ja = 0;
                var Gb = 0;
                var zb = 0;
                var yb = 0;
                var W = 0;
                var Ta = true;
                c.onPlayerDeath = Ga;
                setInterval(function() {
                    if (Ba) F.push(getPlayerMass() / 100)
                }, 1E3 / 60);
                setInterval(function() {
                    var a = Vc();
                    if (0 != a) {
                        ++zb;
                        if (0 ==
                            W) W = a;
                        W = Math.min(W, a)
                    }
                }, 1E3);
                c.closeStats = function() {
                    aa = false;
                    e$$1("#stats").hide();
                    c.destroyAd(c.adSlots.ab);
                    va(0)
                };
                c.setSkipStats = function(a) { Ta = !a };
                c.getStatsString = oc;
                c.gPlusShare = Xc;
                c.twitterShareStats = function() {
                    var a = c.getStatsString("tt_share_stats");
                    c.open("https://twitter.com/intent/tweet?text=" + a, "Agar.io", "width=660,height=310,menubar=no,toolbar=no,resizable=yes,scrollbars=no,left=" + (c.screenX + c.innerWidth / 2 - 330) + ",top=" + (c.innerHeight - 310) / 2)
                };
                c.fbShareStats = function() {
                    var a = c.getStatsString("fb_matchresults_subtitle");
                    c.FB.ui({ method: "feed", display: "iframe", name: R("fb_matchresults_title"), caption: R("fb_matchresults_description"), description: a, link: "http://agar.io", La: "http://static2.miniclipcdn.com/mobile/agar/Agar.io_matchresults_fb_1200x630.png", Ha: { name: "play now!", link: "http://agar.io" } })
                };
                c.fillSocialValues = function(a, b) {
                    if (1 == c.isChrome)
                        if ("google" == c.storageInfo.context) c.gapi.interactivepost.render(b, { contenturl: EnvConfig.game_url, clientid: EnvConfig.gplus_client_id, cookiepolicy: "http://agar.io", prefilltext: a, calltoactionlabel: "BEAT", calltoactionurl: EnvConfig.game_url })
                };
                e$$1(function() {
                    if ("MAsyncInit" in c) c.MAsyncInit()
                })
            }
        }
    }
})(window, window.jQuery);


