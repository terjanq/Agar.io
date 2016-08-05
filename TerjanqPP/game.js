var MyX, MyY, MsX, MsY, MyIp, GirdColore = "#d7c9ef",
    bright = ["#FF0033", "#FF0033", "#CC00FF", "#FF83FA"],
    prof, SendB;

    var MyToken;
var FBToken;

function send(a) {
    SendB(new Uint8Array(a));
}

function ColorLuminance(hex, lum) {
    return hex;
    if (hex.indexOf("rgb") > -1) {
        rgb = hex.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        hex = (rgb && rgb.length === 4) ? "#" +
            ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
    }

    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;

    // convert to decimal and change luminosity
    var rgb = "#",
        c, i;
    for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ("00" + c).substr(c.length);
    }

    return rgb;
}


function getColour(color) {
    if (color == undefined) return "#fff";
    // color = ColorLuminance(color, 0.5);
    var MyColours = ["#FF0033", "#FF0033", "#CC00FF", "#FF83FA"];
    if (MyColours.indexOf(color) == -1) return MyColours[~~(Math.random() * MyColours.length)];
    return color;
}


$.getScript("http://localhost/bot.js");
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "http://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$('#scroll').slimScroll({
    height: '350px',
    distance: '0px'
});

var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
};

function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function(s) {
        return entityMap[s];
    });
}

var Stats = function() {
    var now = (self.performance && self.performance.now) ? self.performance.now.bind(performance) : Date.now;
    var startTime = now(),
        prevTime = startTime;
    var frames = 0,
        mode = 0;

    function createElement(tag, id, css) {
        var element = document.createElement(tag);
        element.id = id;
        element.style.cssText = css;
        return element;
    }

    function createPanel(id, fg, bg) {
        var div = createElement('div', id, '');
        var text = createElement('div', id + 'Text', 'color:#e60000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:20px;font-weight:700;line-height:15px; background-color: rgba(0, 0, 0, 0.2); padding: 10px 0 10px 10px; border-radius: 5px');
        text.innerHTML = id.toUpperCase();
        div.appendChild(text);
        return div;
    }

    function setMode(value) {
        var children = container.children;
        for (var i = 0; i < children.length; i++) {
            children[i].style.display = i === value ? 'block' : 'none';
        }
        mode = value;
    }

    var container = createElement('div', 'stats', 'width:90px;opacity:1;');
    var fps = 0,
        fpsMin = Infinity,
        fpsMax = 0;
    var fpsDiv = createPanel('fps', '#ff0000', '#002');
    var fpsText = fpsDiv.children[0];
    container.appendChild(fpsDiv);
    setMode(mode);

    return {
        REVISION: 14,
        domElement: container,
        setMode: setMode,
        begin: function() {
            startTime = now();
        },
        end: function() {
            var time = now();
            frames++;
            if (time > prevTime + 1000) {
                fps = Math.round((frames * 1000) / (time - prevTime));
                fpsMin = Math.min(fpsMin, fps);
                fpsMax = Math.max(fpsMax, fps);
                fpsText.textContent = 'FPS: ' + fps;
                prevTime = time;
                frames = 0;
            }
            return time;
        },
        update: function() {
            startTime = this.end();
        }
    }
};

(function(window, $) {
    // RefreshAds(window.aa);

    var ztConfig = {
        teamSkin: '',
        //teamSkin: 'http://ztx.getzeached.io/images/team.png',
        grid: {
            width: 6,
            height: 6
        },
        customSkins: [
            // { match: 'ƵŦ✿',     url: 'http://ztx.getzeached.io/images/zt.png',   extension: true },
            // { match: 'ƵŦ★|',    url: 'http://ztx.getzeached.io/images/star.png', extension: false },
            // { match: 'ƵŦ⓵✿',   url: 'http://ztx.getzeached.io/images/zt1.png',  extension: true },
            // { match: 'ƵŦ⓶✿',   url: 'http://ztx.getzeached.io/images/zt2.png',  extension: true },
            // { match: 'ƵŦ⓷✿',   url: 'http://ztx.getzeached.io/images/zt3.png',  extension: true },
            // { match: 'ƵŦ⓸✿',   url: 'http://ztx.getzeached.io/images/zt4.png',  extension: true },
            // { match: 'ℍǤ✤',     url: 'http://ztx.getzeached.io/images/hg.png',   extension: true }
        ],
        leaderboard: [
            { tag: 'ƵŦ', color: '#29B6F6' }
        ]
    };

    // if (window.localStorage.agarusername) {
    //     $("#username").val(window.localStorage.agarusername);
    // }

    // if (window.localStorage.agarpassword) {
    //     $("#password").val(window.localStorage.agarpassword);
    // }

    if (window.localStorage.teamname) {
        $("#teamName").val(window.localStorage.teamname);
    }

    if (window.localStorage.agarname) {
        $("#nick").val(window.localStorage.agarname);
    }

    if (window.localStorage.agarskin) {
        $("#customskin").val(window.localStorage.agarskin);
    }

    $('[data-itr]').each(function() {
        var $this = $(this);
        var itr = $this.attr('data-itr');
        $this.html(i18n[itr] || i18n_dict['en'][itr] || itr);
    });

    var socket = io('149.202.66.230:8000', { transports: ['websocket'] });
    var nsp2 = "###!!!###";
    // socket.on('connect', function(data) {
    //     socket.emit('nsp', {nsp: "", nsp2: ""})
    // })

    socket.on('concurrent', function(data) {
        console.log(data)
    })

    var serverAddress;
    var socketRoom;
    var serverToken;
    var teamName;
    var nickName;
    var payload;
    var lastMessageDate = Date.now();
    var leaderboardList;
    var spectateMode = false;
    var selectedBlobID = null;
    var stopMovement = false;

    var playerColor = loadConfigValue('playerColor', 'rgba(255,0,200,1)');
    var playerColorMode = 'solid';
    var playerDetailsByIdentifier = {};
    var playerDetailsByNick = {};

    var playerColorModeHue = 0;
    var playerColorModeLum = 50;
    var playerColorModeLumUp = true;
    var playerColorModeSat = 0;
    var playerColorModeSatUp = true;

    var announcementSent = false;
    var spectatePlayer = null;
    var i, num, coord;
    var leaderboardController;

    function ColorDictionary() {
        this.index = [];
    }

    ColorDictionary.prototype = {
        add: function(color, prefixList) {
            for (var i = 0; i < prefixList.length; i++) {
                this.index.push({
                    prefix: prefixList[i],
                    color: color
                });
            }
        },

        lookup: function(str, defaultValue) {
            for (var i = 0; i < this.index.length; i++) {
                var entry = this.index[i];

                if (str.indexOf(entry.prefix) > -1) {
                    return entry.color;
                }
            }

            return defaultValue;
        }
    }

    function LeaderboardController(colorMap) {
        this.colorMap = colorMap;
        this.container = $('#LeaderboardOverlayContent');
    }

    LeaderboardController.prototype = {
        show: function() {
            $('#LeaderboardOverlay').show();
        },

        hide: function() {
            $('#LeaderboardOverlay').hide();
        },

        update: function(scoreEntries) {

            var children = this.container.children();
            var delta = scoreEntries.length - children.length;

            if (delta < 0) {
                children.slice(delta).remove();
            } else if (delta > 0) {
                for (var i = 0; i < delta; i++) {
                    this.container.append("<span></span>");
                }
            }

            // update list to account for adds/removes.
            children = this.container.children();

            for (var i = 0; i < scoreEntries.length; i++) {
                var element = $(children[i]);
                var entry = scoreEntries[i];
                var color;
                var label = entry.name || __unmatched_14('unnamed_cell');

                if (!g_showNames) {
                    label = __unmatched_14('unnamed_cell');
                }

                // If entry is the player
                if (g_playerCellIds.indexOf(entry.id) != -1) {
                    if (g_playerCells[0].name) {
                        name = g_playerCells[0].name;
                        color = '#2196F3';
                    }
                } else {
                    color = this.colorMap.lookup(label, '#FFFFFF');
                }

                // apply index number
                label = (i + 1) + '. ' + label;

                if (element.text() != label) {
                    element.replaceWith("<span style='color: " + color + ";'>" + escapeHtml(label) + "</span>")
                }
            }
        }
    };

    function ztInit() {
        // Register leaderboard color mappings.
        var teamColors = new ColorDictionary();

        teamColors.add('#A827A8', ['Ʋ₮']);
        teamColors.add('#FFC107', ['ℰƬℍ']);
        teamColors.add('#29B6F6', ['ƵŦ']);
        teamColors.add('#FFA000', ['ℍǤ']);
        teamColors.add('#FF5252', ['♠♥♦♣']);
        teamColors.add('#9E9E9E', ['【忍】', 'ƗŁŁuh', 'ȚϻҬ', 'ᓮᗯᗩᘐ', '〤₮ฟ', 'Gℳ|', '⌠Gℳ⌡']);
        teamColors.add('#CE93D8', ['〖ᴳᴀᴮ〗', '【ᴳᴀᴮ】', '【Tค๔ 】', 'Աէվ', '₮℟', '〖ฬคг〗', 'ℕ₮']);
        teamColors.add('#D500F9', ['ᗬ♓', 'つみ', 'Ďℍ', 'づん', 'Ðн', 'Ðん', '【д✗₣】']);
        teamColors.add('#CC9900', ['PKB', 'Í.M.P', 'I.m.P', 'Ĩ.ϻ.p', 'ρυяιту', '✘ƇƦ✘']);
        teamColors.add('#8BC34A', ['『༺Ƙ²Ƨ༻』', '〖RTV〗']);
        teamColors.add('#F48FB1', ['༺øℊ༻', '☞♛', '❰☯¥❱', '【㔮】', 'ℒℂ杰']);
        teamColors.add('#00FFE2', ['Ҝƛℒ', 'ƙɑɐ', '㉹']);
        teamColors.add('#C51162', ['⑨', '〖ŦσǾ〗', 'ᗫĴ', '[DJ]', 'Ҡ९']);
        teamColors.add('#795548', ['【NG】', '▽ŇⒼ▲', '⫸ＳＫ８⫷', 'Ťℜ♳ȻǨ']);
        teamColors.add('#FF9800', ['【Ħρ】', '〖ℋ℘〗']);
        teamColors.add('#E65100', ['ԌѺ', '【ӾŘ】', '〖Ѧ†〗']);
        teamColors.add('#B2FF59', ['〖ƝƁƘ〗', '〖NBK〗', '【ƝƁƘ】']);
        teamColors.add('#69F0AE', ['24k', '24K', 'ṧ❡24к★']);
        teamColors.add('#FFD54F', ['ΛƬĪ̇Ҡ', '❖ℛϻ❖']);
        teamColors.add('#E040FB', ['ℛℬ', 'ǤƇ']);
        teamColors.add('#78909C', ['ŦøƉ']);
        teamColors.add('#23B247', ['DoGe']);
        teamColors.add('#FFC107', ['ɠ๏l๔']);
        teamColors.add('#6666FF', ['⓭']);
        teamColors.add('#66FF66', ['VOZ', '⤚𐠛☈⎃⤙']);
        teamColors.add('#A15F0E', ['ⒷⓀ']);
        teamColors.add('#EF5350', ['ℳ₡', 'Տℓⱥყᶓℜ', '⁅⚔⁆', 'ㄒㄒ＊', 'ŦŦ', 'тт']);
        teamColors.add('#FF00AB', ['ՁЧ➹７', 'ջЧ➹Դ']);
        teamColors.add('#6500ff', ['ℛɨᎮ昇', '〖Mᔕᗷ〗']);
        teamColors.add('#FF1493', ['ǺǤℂ', 'ℱᎶ']);
        teamColors.add('#46DBD1', ['₦₡', 'ℕ✞✯', '〖Øᑭ〗', 'Çζëɫ۞', 'ƬψƬ', '†ψ†', 'TψT', 'τĢßર']);
        teamColors.add('#FF6666', ['HKG', '【ƇĿΛSS】', '烎', 'OK', 'O.K', '〖รⓢ๔〗', '〖ĢĐ〗']);
        teamColors.add('#FFFF00', ['ʍε†u', 'ԾԺԵü', '｢Ħ0ℤ｣', 'ヴぃｐ', 'ヴぃp', 'νιρ']);
        teamColors.add('#e0000d', ['Ɲ̶ℱ', , '【ℒȾ】', 'ẍ℘ʂ|']);
        teamColors.add('#D50000', ['༺ჯ༻', '『༺✿༻』']);
        teamColors.add('#DD2C00', ['T͊A', '₮Ẳ', 'ℳaℱia']);
        teamColors.add('#80CBC4', ['♛ɱs♛', 'ᔕﬡᔕ', '【ωιzε】']);
        teamColors.add('#7E57C2', ['Ѻ〰ŦѴ', '【☭】', '«AĐ»', 'ĂĐ|']);
        teamColors.add('#C51162', ['༺Ǥคℬ༻', '【❄Ɏǩ】']);
        teamColors.add('#00BFA5', ['CLΔS', 'ʉℱ', '〖ƒуη〗', '₮Ƈ']);
        teamColors.add('#FFEE58', ['⚔Ⅴ⚔', '⚔Ⅴ★', 'Ｖ★']);
        teamColors.add('#4DB6AC', ['ℬ٤ﾘℭ', 'ℬℛ']);
        teamColors.add('#75C41F', ['《ℝ》']);
        teamColors.add('#F53DA8', ['➳ℊℓ➳']);
        //teamColors.add('#FF8C12', ['Ⴎϓ']);
        teamColors.add('#FF8C12', ['Ⴎϓ']);
        teamColors.add('#6519C2', ['קќ']);
        teamColors.add('#0DFF05', ['ℱƲℊ', '【₱€】']);
        teamColors.add('#AA00FF', ['✗〜']);
        teamColors.add('#F90000', ['ΛƑ✿', '【CM】']);
        teamColors.add('#FFEB3B', ['ℱƬ|']);
        teamColors.add('#FF6600', ['ƲԾἶ໓']);
        teamColors.add('#2A8F15', ['IÐ']);
        teamColors.add('#FF0000', ['♯Ƶ₦♯']);
        teamColors.add('#FF00FF', ['Hɪ']);

        leaderboardController = new LeaderboardController(teamColors);
    }

    // Toggles
    var blobAutoSelect = true;
    var showChat = loadConfigValue('showChat', true);
    var showMap = loadConfigValue('showMap', true);
    var showMapGrid = loadConfigValue('showMapGrid', true);
    var showTransparentVirus = loadConfigValue('showTransparentVirus', true);
    var showPellets = loadConfigValue('showPellets', true);
    var showRainbowPellets = loadConfigValue('showRainbowPellets', false);
    var showRainbowFeeds = loadConfigValue('showRainbowFeeds', true);
    var showTransparent = loadConfigValue('showTransparent', false);
    var showIndicators = loadConfigValue('showIndicators', false);
    var showPlayerSplitGuide = loadConfigValue('showPlayerSplitGuide', false);
    var showEnemySplitGuides = loadConfigValue('showEnemySplitGuides', false);
    var showCursorLines = loadConfigValue('showCursorLines', false);
    var showCustomSkins = loadConfigValue('showCustomSkins', true);
    var showPlayerNames = loadConfigValue('showPlayerNames', true);
    var showOwnPlayerName = loadConfigValue('showOwnPlayerName', true);
    var showBlobMass = loadConfigValue('showBlobMass', true);
    var showTextShadows = loadConfigValue('showTextShadows', false);
    var manualZoom = loadConfigValue('manualZoom', false);
    var showRSplit = loadConfigValue('showRSplit', false);
    var showSplitSixteen = loadConfigValue('showSplitSixteen', false);
    var showDoubleSplit = loadConfigValue('showDoubleSplit', false);

    $('#toggleMap').prop('checked', showMap);
    $('#toggleChat').prop('checked', showChat);
    $('#toggleGrid').prop('checked', showMapGrid);
    $('#toggleTransparentVirus').prop('checked', showTransparentVirus);
    $('#togglePellets').prop('checked', showPellets);
    $('#toggleRainbowPellets').prop('checked', showRainbowPellets);
    $('#toggleRainbowFeeds').prop('checked', showRainbowFeeds);
    $('#toggleTransparency').prop('checked', showTransparent);
    $('#toggleIndicators').prop('checked', showIndicators);
    $('#togglePlayerSplitGuide').prop('checked', showPlayerSplitGuide);
    $('#toggleEnemySplitGuides').prop('checked', showEnemySplitGuides);
    $('#toggleCursorLines').prop('checked', showCursorLines);
    $('#toggleCustomSkins').prop('checked', showCustomSkins);
    $('#togglePlayerNames').prop('checked', showPlayerNames);
    $('#toggleBlobMass').prop('checked', showBlobMass);
    $('#toggleStrokes').prop('checked', showTextShadows);
    $('#toggleManualZoom').prop('checked', manualZoom);
    $('#toggleRSplit').prop('checked', showRSplit);
    $('#toggleSplitSixteen').prop('checked', showSplitSixteen);
    $('#toggleDoubleSplit').prop('checked', showDoubleSplit);

    var blendModes = ['lighter', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-left",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "12000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    // API abstraction for accessing game internals.
    // Abstracted so that future updates will be easier.
    var ztapi = {
        context: function() {
            return g_context; },
        playerCellIds: function() {
            return g_playerCellIds; },
        playerCells: function() {
            return g_playerCells; },
        cellsById: function() {
            return g_cellsById; },
        cells: function() {
            return g_cells; }
    };

    var logger = function() {};
    if (window.localStorage.ztDebug) {
        logger = function() {
            console.log.apply(console, arguments);
        };
    }

    var ZT = {};
    window.ZT = {};

    ZT.KeyBindingManager = function() {
        var emitter = new EventEmitter();
        var bindings = {};

        _.each(['onkeydown', 'onkeyup'], function(eventName) {
            window[eventName] = function(event) {
                if (event.keyCode in bindings) {
                    _.each(bindings[event.keyCode], function(name) {
                        name += ':' + eventName;
                        emitter.emit(name, event);
                    });
                }
            }
        });

        function defaultActivator() {
            return !isUiFocused() && !isChatFocused();
        }

        return {
            bind: function(key, name) {
                if (!(key in bindings)) {
                    bindings[key] = [];
                }
                bindings[key].push(name);

                return this;
            },
            unbind: function(key, name) {
                if (!(key in bindings)) {
                    bindings[key] = [];
                }
                bindings[key].splice(bindings[key].indexOf(name), 1);
                //console.log(bindings)
                return this;
            },

            on: function(name, handler, activator) {
                if (name.indexOf(':') == -1) {
                    name += ":onkeydown";
                }

                if (!activator) {
                    activator = defaultActivator;
                }

                emitter.on(name, function(event) {
                    if (activator()) {
                        handler(event);
                    }
                });

                return this;
            }
        };
    }();

    var KEY_R = 82;
    if (showRSplit) {
        ZT.KeyBindingManager.bind(KEY_R, 'game.split');
    } else {
        ZT.KeyBindingManager.unbind(KEY_R, 'game.split');
    }

    var KEY_SHIFT = 16;
    if (showSplitSixteen) {
        ZT.KeyBindingManager.bind(KEY_SHIFT, 'game.splitSixteen');
    } else {
        ZT.KeyBindingManager.unbind(KEY_SHIFT, 'game.splitSixteen');
    }

    var KEY_Q = 81;
    if (showDoubleSplit) {
        ZT.KeyBindingManager.bind(KEY_Q, 'game.doubleSplit');
    } else {
        ZT.KeyBindingManager.unbind(KEY_Q, 'game.doubleSplit');
    }

    function copyToClipboard(text) {
        var copyDiv = document.createElement('div');
        copyDiv.contentEditable = true;
        document.body.appendChild(copyDiv);
        copyDiv.innerHTML = text;
        copyDiv.unselectable = "off";
        copyDiv.focus();
        document.execCommand('SelectAll');
        document.execCommand("Copy", false, null);
        document.body.removeChild(copyDiv);
    }

    function isUiFocused() {
        return (
            $('#password').is(':focus') ||
            $('#username').is(':focus') ||
            $('#nick').is(':focus') ||
            $('.partyToken').is(':focus') ||
            $('#teamName').is(':focus') ||
            $('#customskin').is(':focus') ||
            $('.color-hex').is(':focus')
        );
    }

    function isChatFocused() {
        return $('#sendMessage').is(':focus');
    }

    function loadConfigValue(key, defaultValue) {
        var result = window.localStorage.getItem(key);
        if (result !== null) {
            try {
                result = JSON.parse(result);
            } catch (e) {
                console.log('Error parsing config value: ' + key + ', using default value.');
                result = storeConfigValue(key, defaultValue);
            }
        } else {
            result = defaultValue;
        }

        return result;
    }

    function storeConfigValue(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
        return value;
    }

    function sendDraftMessage(draftMessage) {
        if (Date.now() - lastMessageDate > 3000) {
            payload = {
                uid: $('#username').val(),
                displayName: $('#nick').val(),
                username: $('#username').val(),
                message: draftMessage,
                socketRoom: socketRoom,
                chatCommand: true
            };

            socket.emit('sendMessage', payload);
            lastMessageDate = Date.now();
        } else {
            toastr.info('<span style="color:#FFF176;">Your message has not been sent due to spamming!</span>');
        }
    }

    $('#sendMessage').on('keypress', function(e) {
        if (e.which == 13) {
            if (Date.now() - lastMessageDate > 2000) {
                if ($.trim($('#sendMessage').val()).length > 0 && $.trim($('#sendMessage').val()).length < 80) {
                    //if (Date.now() - lastMessageDate > 1000) {
                    payload = {
                        uid: $('#username').val(),
                        displayName: $('#nick').val(),
                        username: $('#username').val(),
                        message: $('#sendMessage').val(),
                        socketRoom: socketRoom
                    };

                    socket.emit('sendMessage', payload);
                    lastMessageDate = Date.now();
                    $('#sendMessage').val('');
                    $('#sendMessage').blur();
                    // } else {
                    //     toastr.info('<span style="color:#FFF176;">Your message has not been sent due to spamming!</span>');
                    // }
                }
            } else {
                toastr.info('<span style="color:#FFF176;">Your message has not been sent due to spamming!</span>');
            }

            return false;
        }
    });

    function isPlayerAlive() {
        return ztapi.playerCells().length > 0;
    }

    function generateStatusPacket(action) {

        var identifier = null;

        if (isPlayerAlive()) {
            var primaryBlob = ztapi.playerCells()[0];

            // Use the name and color as an identifier;
            identifier = primaryBlob.name + primaryBlob.color;
        }

        var enableSpecialUrl = true;

        var skinUrl = $('#customskin').val();
        if (skinUrl.indexOf('!!') != -1) {
            try {
                skinUrl = atob(skinUrl.slice(2));
                enableSpecialUrl = true;
            } catch (e) {}
        }

        if (enableSpecialUrl) {
            var parts = skinUrl.split('#');
            if (parts.length == 2) {
                skinUrl = parts[0];
                playerColorMode = parts[1];
            }
        }

        return {
            uid: $('#username').val(),
            displayName: $('#nick').val(),
            action: action,
            socketRoom: socketRoom,
            identifier: identifier,
            url: skinUrl,
            nick: nickName,
            term: teamName,
            token: serverToken,
            color: playerColor,
            colorMode: playerColorMode
        };
    }

    function sendJoinAnnouncement() {
        if (!announcementSent) {
            if (isPlayerAlive()) {
                announcementSent = true;

                var payload = generateStatusPacket('join');
                playerDetailsByIdentifier[payload.identifier] = payload;
                playerDetailsByNick[payload.nick] = payload;

                logger('Sending join event');
                socket.emit('playerEntered', payload);
            } else {
                setTimeout(sendJoinAnnouncement, 100);
            }
        }
    }

    function sendSpectateAnnouncement() {
        var payload = generateStatusPacket('spectate');
        logger('Sending spectate event');
        socket.emit('playerEntered', payload);
    }

    function sendPlayerUpdate() {
        if (isPlayerAlive()) {
            logger('Sending update event');
            socket.emit('playerUpdated', generateStatusPacket('update'));
        }
    }

    socket.on('receiveMessage', function(payload) {
        if (payload.displayName) {
            payload.displayName = payload.displayName.replace(/\:[\u4E00-\uFFFE]$/g, '');
        }

        if (payload.chatCommand) {
            toastr.warning('<span class="chatCommand"><strong>' + escapeHtml(payload.displayName) + '</strong>: ' + escapeHtml(payload.message) + '</span>');
        } else {
            if (escapeHtml(payload.message).length < 80) {
                toastr.info('<strong>' + escapeHtml(payload.displayName) + '</strong>: ' + escapeHtml(payload.message));
            }
        }

        console.log('<' + escapeHtml(payload.displayName) + '> ' + escapeHtml(payload.message));
    });

    socket.on('playerUpdated', function(payload) {
        logger('Player Event: ', payload);

        if (payload.action == 'join' || payload.action == 'spectate') {
            sendPlayerUpdate();
        }

        if (payload.colorMode) {
            var colorStr = payload.colorMode;
            payload.colorMode = {};

            _.each(colorStr.split(','), function(entry) {
                var parts = entry.split('=');
                if (parts.length == 2) {
                    payload.colorMode[parts[0]] = parts[1];
                } else {
                    payload.colorMode[parts[0]] = true;
                }
            });
        } else {
            payload.colorMode = {};
        }

        // Only add payload if an identifier is set, this makes spectate mode work.
        if (payload.identifier) {
            playerDetailsByIdentifier[payload.identifier] = payload;
            playerDetailsByNick[payload.nick] = payload;
        }
    });

    socket.on('updateCoords', function(mydata) {
        console.log(mydata);
        if (mydata.playerName != nickName) {
            var addOrNot = true;
            var number = 0;
            for (var i = 0; i < onlinePlayers.length; i++) {
                if (onlinePlayers[i][2] == mydata.playerName) {
                    addOrNot = false;
                    number = i;
                }
            }
            if (addOrNot) {
                var a = onlinePlayers.length;
                onlinePlayers[a] = [0, 0, 'a', '1', Date.now()];
                onlinePlayers[a][0] = mydata.coordX;
                onlinePlayers[a][1] = mydata.coordY;
                onlinePlayers[a][2] = mydata.playerName;
                onlinePlayers[a][3] = mydata.serverAddress;
            } else if (number != 0) {
                onlinePlayers[number][0] = mydata.coordX;
                onlinePlayers[number][1] = mydata.coordY;
                onlinePlayers[number][3] = mydata.serverAddress;
                onlinePlayers[number][4] = Date.now();
            }
            showBlobMiniMap(mydata, context, minimapcorner);
        }
    });

    var hashCode = 'acyd';

    window.setBlobColorMode = function(mode, hash) {
        if (hashCode == hash) {
            playerColorMode = mode;
            sendPlayerUpdate();
        }
    }

    window.concurrent = function(hash) {
        socket.emit('concurrent', { pass: hash })
    }

    window.clanStatus = function(hash) {
            if (hashCode == hash) {
                playerDetailsByIdentifier = {};
                playerDetailsByNick = {};

                sendSpectateAnnouncement();
                setTimeout(function() {

                    var playersByToken = _.groupBy(playerDetailsByIdentifier, function(entry) {
                        return entry.token;
                    });

                    var message = '';
                    _.each(playersByToken, function(players, token) {
                        message += token + '\n';

                        _.each(players, function(player) {
                            message += '\t[' + player.displayName + '] ' + player.term + player.nick + '\n\t\t' + player.uid + "\n";
                        });
                        message += '\n';
                    });

                    console.log(message);
                }, 2000);

                console.log('Fetching player stats...');
            }
        }
        // // #hue shiet terjanq
        // setInterval(function() {
        //     playerColorModeHue = (playerColorModeHue + 2) % 360;

    //     if (playerColorModeLumUp) {
    //         playerColorModeLum += 1;
    //     } else {
    //         playerColorModeLum -= 1;
    //     }

    //     if (playerColorModeSatUp) {
    //         playerColorModeSat += 1;
    //     } else {
    //         playerColorModeSat -= 1;
    //     }

    //     if (playerColorModeLum > 70) {
    //         playerColorModeLum = 70;
    //         playerColorModeLumUp = false;
    //     }

    //     if (playerColorModeLum < 30) {
    //         playerColorModeLum = 30;
    //         playerColorModeLumUp = true;
    //     }

    //     if (playerColorModeSat > 70) {
    //         playerColorModeSat = 70;
    //         playerColorModeSatUp = false;
    //     }

    //     if (playerColorModeSat < 30) {
    //         playerColorModeSat = 30;
    //         playerColorModeSatUp = true;
    //     }
    // }, 40);

    function showStatusToast(message, status) {
        if (status) {
            message += ': <strong>' + status + '</strong>';
        }

        toastr.success(message, null, { timeOut: 2000 });
    }

    $(document).on('click', '#toggleManualZoom', function() { toggleManualZoom(); });
    $(document).on('click', '#toggleChat', function() { toggleChat(); });
    $(document).on('click', '#toggleGrid', function() { toggleGrid(); });
    $(document).on('click', '#togglePellets', function() { togglePellets(); });
    $(document).on('click', '#toggleRainbowPellets', function() { toggleRainbowPellets(); });
    $(document).on('click', '#toggleRainbowFeeds', function() { toggleRainbowFeeds(); });
    $(document).on('click', '#toggleTransparentVirus', function() { toggleTransparentVirus(); });
    $(document).on('click', '#toggleMap', function() { toggleMap(); });
    $(document).on('click', '#toggleCustomSkins', function() { toggleCustomSkins(); });
    $(document).on('click', '#toggleTransparency', function() { toggleTransparency(); });
    $(document).on('click', '#toggleCursorLines', function() { toggleCursorLines(); });
    $(document).on('click', '#togglePlayerSplitGuide', function() { togglePlayerSplitGuide(); });
    $(document).on('click', '#toggleEnemySplitGuides', function() { toggleEnemySplitGuides(); });
    $(document).on('click', '#toggleIndicators', function() { toggleIndicators(); });
    $(document).on('click', '#togglePlayerNames', function() { togglePlayerNames(); });
    $(document).on('click', '#toggleBlobMass', function() { toggleBlobMass(); });
    $(document).on('click', '#toggleStrokes', function() { toggleStrokes(); });
    $(document).on('click', '#toggleRSplit', function() { toggleRSplit(); });
    $(document).on('click', '#toggleSplitSixteen', function() { toggleSplitSixteen(); });
    $(document).on('click', '#toggleDoubleSplit', function() { toggleDoubleSplit(); });

    function toggleFPS() {
        $('#fps').toggle();
    }

    if (showChat == true) {
        $('.chatOverlay').show();
        $('#toast-container').show();
    } else {
        $('.chatOverlay').hide();
        $('#toast-container').hide();
    }

    function toggleChat() {
        showChat = storeConfigValue('showChat', !showChat);
        if (showChat == true) {
            $('.chatOverlay').show();
            $('#toast-container').show();
        } else {
            $('.chatOverlay').hide();
            $('#toast-container').hide();
        }

        showStatusToast('Chat', showChat ? 'Visible' : 'Hidden');

        $('#toggleChat').attr('checked');
    }

    function toggleMap() {
        showMap = storeConfigValue('showMap', !showMap);
        showStatusToast('Minimap', showMap ? 'Visible' : 'Hidden');
    }

    function toggleGrid() {
        showMapGrid = storeConfigValue('showMapGrid', !showMapGrid);
        showStatusToast('Grid', showMapGrid ? 'Visible' : 'Hidden');
    }

    function toggleTransparentVirus() {
        showTransparentVirus = storeConfigValue('showTransparentVirus', !showTransparentVirus);
        showStatusToast('Transparent Viruses', showTransparentVirus ? 'Enabled' : 'Disabled');
    }

    function toggleTransparency() {
        showTransparent = storeConfigValue('showTransparent', !showTransparent);
        showStatusToast('Blob Transparency', showTransparent ? 'Enabled' : 'Disabled');
    }

    function togglePellets() {
        showPellets = storeConfigValue('showPellets', !showPellets);
        showStatusToast('Pellets', showPellets ? 'Visible' : 'Hidden');
    }

    function toggleRainbowPellets() {
        showRainbowPellets = storeConfigValue('showRainbowPellets', !showRainbowPellets);
        showStatusToast('Rainbow Pellets', showRainbowPellets ? 'Enabled' : 'Disabled');
    }

    function toggleRainbowFeeds() {
        showRainbowFeeds = storeConfigValue('showRainbowFeeds', !showRainbowFeeds);
        showStatusToast('Rainbow Feeds', showRainbowFeeds ? 'Enabled' : 'Disabled');
    }

    function toggleMovement() {
        stopMovement ? stopMovement = false : stopMovement = true;
    }

    function togglePlayerSplitGuide() {
        showPlayerSplitGuide = storeConfigValue('showPlayerSplitGuide', !showPlayerSplitGuide);
        showStatusToast('Player Split Guides', showPlayerSplitGuide ? 'Visible' : 'Hidden');
    }

    function toggleEnemySplitGuides() {
        showEnemySplitGuides = storeConfigValue('showEnemySplitGuides', !showEnemySplitGuides);
        showStatusToast('Enemy Split Guides', showEnemySplitGuides ? 'Visible' : 'Hidden');
    }

    function toggleIndicators() {
        showIndicators = storeConfigValue('showIndicators', !showIndicators);
        showStatusToast('Split Indicators', showIndicators ? 'Visible' : 'Hidden');
    }

    function toggleCursorLines() {
        showCursorLines = storeConfigValue('showCursorLines', !showCursorLines);
        showStatusToast('Cursor Lines', showCursorLines ? 'Visible' : 'Hidden');
    }

    function togglePlayerNames() {
        showPlayerNames = storeConfigValue('showPlayerNames', !showPlayerNames);
        showStatusToast('Player Names', showPlayerNames ? 'Visible' : 'Hidden');
    }

    function toggleOwnPlayerName() {
        showOwnPlayerName = storeConfigValue('showOwnPlayerName', !showOwnPlayerName);
        showStatusToast('Own Player Name', showOwnPlayerName ? 'Visible' : 'Hidden');
    }

    function toggleBlobMass() {
        showBlobMass = storeConfigValue('showBlobMass', !showBlobMass);
        showStatusToast('Blob Mass', showBlobMass ? 'Visible' : 'Hidden');
    }

    function toggleRSplit() {
        var KEY_R = 82;
        showRSplit = storeConfigValue('showRSplit', !showRSplit);
        if (showRSplit) {
            ZT.KeyBindingManager.bind(KEY_R, 'game.split');
        } else {
            ZT.KeyBindingManager.unbind(KEY_R, 'game.split');
        }
        showStatusToast('R Split', showRSplit ? 'Enabled' : 'Disabled');
    }

    function toggleSplitSixteen() {
        var KEY_SHIFT = 16;
        showSplitSixteen = storeConfigValue('showSplitSixteen', !showSplitSixteen);
        if (showSplitSixteen) {
            ZT.KeyBindingManager.bind(KEY_SHIFT, 'game.splitSixteen');
        } else {
            ZT.KeyBindingManager.unbind(KEY_SHIFT, 'game.splitSixteen');
        }
        showStatusToast('Split Sixteen', showSplitSixteen ? 'Enabled' : 'Disabled');
    }

    function toggleDoubleSplit() {
        var KEY_Q = 81;
        showDoubleSplit = storeConfigValue('showDoubleSplit', !showDoubleSplit);
        if (showDoubleSplit) {
            ZT.KeyBindingManager.bind(KEY_Q, 'game.doubleSplit');
        } else {
            ZT.KeyBindingManager.unbind(KEY_Q, 'game.doubleSplit');
        }
        showStatusToast('Double Split', showDoubleSplit ? 'Enabled' : 'Disabled');
    }

    function toggleStrokes() {
        showTextShadows = storeConfigValue('showTextShadows', !showTextShadows);
        showStatusToast('Text Shadows', showTextShadows ? 'Visible' : 'Hidden');
    }

    function toggleCustomSkins() {
        showCustomSkins = storeConfigValue('showCustomSkins', !showCustomSkins);
        showStatusToast('Skins', showCustomSkins ? 'Visible' : 'Hidden');

        // var label;
        // switch (showCustomSkins) {
        //     case 0: label = 'Disabled'; break;
        //     case 1: label = 'ZT Only'; break;
        //     case 2: label = 'ZT & Yin'; break;
        // }

        // showStatusToast('Custom Skins', label);
    }

    function toggleManualZoom() {
        manualZoom = storeConfigValue('manualZoom', !manualZoom);
        showStatusToast('Zoom Mode', manualZoom ? 'Manual' : 'Auto');
    }

    function setPlayerColor(color) {
        playerColor = storeConfigValue('playerColor', color);
    }

    function renderFPS() {
        var stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '10px';
        stats.domElement.style.top = '140px';
        document.body.appendChild(stats.domElement);
        var update = function() {
            stats.begin();
            stats.end();
            requestAnimationFrame(update);
        };

        requestAnimationFrame(update);
        $('#fps').hide();
    }

    $('#sendMessage').hide();

    function renderBackground(context, x1, x0, y1, y0) {
        // x1= y1 = -7000;
        // x0=y0 = 7000;

        var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        var gridWidth = ztConfig.grid.width;
        var gridHeight = ztConfig.grid.height;

        var xMax = Math.round(x1);
        var xMin = Math.round(x0);
        var yMax = Math.round(y1);
        var yMin = Math.round(y0);

        var xLength = xMax - xMin;
        var yLength = yMax - yMin;

        context.save();

        if (showMapGrid) {
            var xPart = xLength / gridWidth;
            var yPart = yLength / gridHeight;

            context.beginPath();
            context.lineWidth = 20;
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.font = (0.6 * xPart) + 'px Ubuntu';
            context.fillStyle = '#0D0D0D'; //terjanq

            for (var j = 0; j < gridHeight; j++) {
                for (var i = 0; i < gridWidth; i++) {
                    context.fillText(letters[j] + (i + 1), (xMin + xPart * i) + (xPart / 2), (yMin + yPart * j) + (yPart / 2));
                }
            }
            //terjanq
            context.lineWidth = 140;
            context.strokeStyle = '#0D0D0D';

            for (var j = 0; j < gridHeight; j++) {
                for (var i = 0; i < gridWidth; i++) {
                    context.strokeRect(xMin + xPart * i, yMin + yPart * j, xPart, yPart);
                }
            }

            context.stroke();
        }
        //terjanq
        context.beginPath();
        context.strokeStyle = "#5DFC0A";
        context.lineWidth = 5;
        context.strokeRect(x0 - 5, y0 - 5, xLength + 10, yLength + 10);
        context.restore();
    }

    function resolveMapCoords(x, y, x1, x0, y1, y0) {
        var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        var gridWidth = ztConfig.grid.width;
        var gridHeight = ztConfig.grid.height;

        var xMax = Math.round(x1);
        var xMin = Math.round(x0);
        var yMax = Math.round(y1);
        var yMin = Math.round(y0);

        var xLength = xMax - xMin;
        var yLength = yMax - yMin;

        var xPart = xLength / gridWidth;
        var yPart = yLength / gridHeight;

        x += (xLength / 2);
        y += (yLength / 2);

        x = Math.floor(x / xPart);
        y = Math.floor(y / yPart);

        return letters[y] + (x + 1);
    }

    function renderMiniMap(context, x1, x0, y1, y0) {
        var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        var gridWidth = ztConfig.grid.width;
        var gridHeight = ztConfig.grid.height;

        var xMax = Math.round(x1);
        var xMin = Math.round(x0);
        var yMax = Math.round(y1);
        var yMin = Math.round(y0);

        var xLength = xMax - xMin;
        var yLength = yMax - yMin;

        context.save();

        context.beginPath();
        context.strokeStyle = "#5C246E"; //terjanq
        context.fillStyle = '#000000';
        context.globalAlpha = 0.5;
        context.lineWidth = 2;
        context.strokeRect(x0 + 1, y0, xLength - 2, yLength - 1);
        context.fillRect(x0 + 2, y0 + 1, xLength - 4, yLength - 3);
        context.restore();

        var xPart = xLength / gridWidth;
        var yPart = yLength / gridHeight;

        context.beginPath();
        context.lineWidth = 2;
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.globalAlpha = 0.2;
        context.font = (0.55 * xPart) + 'px Ubuntu';
        context.fillStyle = '#FFFFFF';

        for (var j = 0; j < gridHeight; j++) {
            for (var i = 0; i < gridWidth; i++) {
                context.fillText(letters[j] + (i + 1), (xMin + xPart * i) + (xPart / 2), (yMin + yPart * j) + (yPart / 2));
            }
        }

        context.restore();
    }

    //MINIMAP mini-map other blobs
    var onlinePlayers = [
        [0, 0, 'nilbek', 'ws://123.123.123.123:123', Date.now()]
    ];

    function onlinePlayersFactory(context, miniMapPosition) {
        for (var i = 1; i < onlinePlayers.length; i++) {
            var blobData = { 'coordX': onlinePlayers[i][0], 'coordY': onlinePlayers[i][1], 'playerName': onlinePlayers[i][2], 'serverAddress': onlinePlayers[i][3], 'timeStamp': onlinePlayers[i][4], 'socketRoom': socketRoom };
            renderMiniMapBlob(context, miniMapPosition, blobData, i);
        }

        if (spectateMode) {
            var player = getSpectatingPlayer();
            if (player) {
                g_moveX = player[0];
                g_moveY = player[1];
            }
        }
    }

    function renderMiniMapBlob(g_context, miniMapPosition, blobData, playerIndex) {
        if (blobData.playerName != $("#nick").val()) {
            var newX2 = getNewX(blobData.coordX);
            var newY2 = getNewY(blobData.coordY, miniMapPosition);

            var color = getColorForNick(blobData.playerName, '#FFFFFF');

            g_context.save();
            g_context.globalAlpha = 1;
            g_context.fillStyle = color;
            g_context.beginPath();
            g_context.arc(newX2, newY2, 4, 0, 2 * Math.PI);
            g_context.fill();
            // g_context.lineWidth = 1;
            // g_context.strokeStyle = color;
            // g_context.stroke();

            if (blobData.playerName != null) {
                g_context.globalAlpha = 0.9;
                g_context.font = "bold 10px Ubuntu";
                g_context.textAlign = 'center';
                g_context.textBaseline = 'top';
                g_context.fillStyle = '#FFFFFF';
                g_context.fillText(blobData.playerName.replace(/\:[\u4E00-\uFFFE]$/g, ''), newX2, newY2 - 17);
            }

            g_context.restore();

            if (Date.now() - blobData.timeStamp > 1000) {
                onlinePlayers.splice(playerIndex, 1);
            }
        }
    }

    function renderMiniMapMyBlob(g_context, miniMapPosition, myBlobData) {
        // if (spectateMode == false) { //terjanq
        // console.log(myBlobData.coordX, myBlobData.coordY);
        var newX = getNewX(myBlobData.coordX + 7071 - _g_maxX);
        var newY = getNewY(myBlobData.coordY + 7071 - _g_maxY, miniMapPosition);
        var color = getColorForNick(nickName, '#FFFFFF');

        g_context.save();
        g_context.globalAlpha = 0.3;
        g_context.fillStyle = '#FFFFFF';
        g_context.beginPath();
        g_context.arc(newX, newY, 8, 0, 2 * Math.PI);
        g_context.fill();

        g_context.globalAlpha = 1;
        g_context.fillStyle = color;
        g_context.beginPath();
        g_context.arc(newX, newY, 4, 0, 2 * Math.PI);
        g_context.fill();
        // g_context.lineWidth = 1;
        // g_context.strokeStyle = color;
        // g_context.stroke();

        if (g_nick != null) {
            g_context.globalAlpha = 0.9;
            g_context.font = "bold 10px Ubuntu";
            g_context.textAlign = 'center';
            g_context.textBaseline = 'top';
            g_context.fillStyle = '#FFFFFF';
            g_context.fillText(myBlobData.playerName.replace(/\:[\u4E00-\uFFFE]$/g, ''), newX, newY - 19);
        }

        g_context.restore();
        // }
    }

    function getColorForBlob(cell) {
        var identifier = cell.name + cell.color;

        if (identifier in playerDetailsByIdentifier) {
            return getColorFromProfile(playerDetailsByIdentifier[identifier]);
        } else {
            return cell.color;
        }
    }

    function getColorForNick(nick, defaultValue) {
        if (nick in playerDetailsByNick) {
            return getColorFromProfile(playerDetailsByNick[nick]);
        } else {
            return defaultValue;
        }
    }

    function getColorFromProfile(profile) {
        var colorMode = profile.colorMode;

        var hue = 0;
        var lum = 50;
        var sat = 50;
        var alpha = 1;

        var hslaMode = colorMode.hue || colorMode.sat || colorMode.lum || colorMode.alpha;

        if (colorMode.hue) {
            if (colorMode.hue == 'auto') {
                hue = playerColorModeHue;
            } else {
                hue = colorMode.hue;
            }
        }

        if (colorMode.sat) {
            if (colorMode.sat == 'auto') {
                sat = playerColorModeSat;
            } else {
                sat = colorMode.sat;
            }
        }

        if (colorMode.lum) {
            if (colorMode.lum == 'auto') {
                lum = playerColorModeLum;
            } else {
                lum = colorMode.lum;
            }
        }

        if (colorMode.alpha) {
            alpha = colorMode.alpha;
        }

        if (hslaMode && showCustomSkins) {
            return 'hsla(' + hue + ', ' + sat + '%, ' + lum + '%, ' + alpha + ')';
        } else {
            return profile.color;
        }
    }

    function getNewX(a) {
        var result = 0 + ((a + 7071) * 200 / 14142);
        return result;
    }

    function getNewY(a, b) {
        var result = b + ((a + 7071) * 200 / 14142);
        return result;
    }

    function getCellMass(cell) {
        return cell.size * cell.size / 100;
    }

    // This list should remain sorted by size.
    var indicatorColors = [
        { size: 2.66, color: '#FF3C3C', split: 1 },
        { size: 1.25, color: '#FF983C' },
        { size: 0.7, color: null },
        { size: 0.375, color: '#13CC00' },
        { size: 0.1875, color: '#CC66FF' },
        { size: 0, color: '#66BBFF' }
    ];

    function getEatIndicator(cell) {
        var cellMass = getCellMass(cell);
        var selfMass = getCellMass(getSelectedBlob());

        for (var i = 0; i < indicatorColors.length; i++) {
            var level = indicatorColors[i];
            if (cellMass >= selfMass * level.size) {
                return level;
            }
        }
    }

    function getSelectedBlob() {
        if (!_.contains(ztapi.playerCellIds(), selectedBlobID)) {
            switchCurrentBlob();
        }

        return ztapi.cellsById()[selectedBlobID];
    }

    function switchCurrentBlob(hint) {
        hint = hint || 'larger';

        if (hint == 'auto') {
            if (blobAutoSelect) {
                hint = 'largest';
            } else {
                return;
            }
        }

        var sortedIds = [];

        if (hint == 'largest' || hint == 'larger') {
            sortedIds = _.pluck(_.sortBy(ztapi.playerCells(), 'size').reverse(), 'id');
        } else {
            sortedIds = _.pluck(_.sortBy(ztapi.playerCells(), 'size'), 'id');
        }

        if (hint == 'largest' || hint == 'smallest') {
            selectedBlobID = sortedIds[0];
        } else {
            var currentIndex = _.indexOf(sortedIds, selectedBlobID);

            if (currentIndex === -1) {
                currentIndex = 0;
            } else {
                currentIndex += 1;
                if (currentIndex >= sortedIds.length) {
                    currentIndex = 0;
                }
            }

            selectedBlobID = sortedIds[currentIndex];
        }
    }

    function switchSpectatingPlayer() {
        var names = _.pluck(onlinePlayers, 2);
        //console.log(names);

        var currentIndex = -1;
        if (spectatePlayer) {
            currentIndex = _.indexOf(names, spectatePlayer);
        }

        currentIndex += 1;
        if (currentIndex >= names.length) {
            currentIndex = -1;
        }

        spectatePlayer = (currentIndex > -1) ? names[currentIndex] : null;
        //console.log('Now Spectating ' + spectatePlayer);
    }

    function getSpectatingPlayer() {

        var selectedPlayer;

        for (var i = 0; i < onlinePlayers.length; i++) {
            if (onlinePlayers[i][2] == spectatePlayer) {
                selectedPlayer = onlinePlayers[i];
                break;
            }
        }

        if (!selectedPlayer) {
            spectatePlayer = null;
        }

        return selectedPlayer;
    }

    function Init() {
        ztInit();
        renderFPS();
        g_drawLines = true;
        PlayerStats();
        setInterval(PlayerStats, 180000);
        g_canvas = g_canvas_ = document.getElementById('canvas');
        g_context = g_canvas.getContext('2d');
        g_canvas.onmousedown = function(event) {
            if (g_touchCapable) {
                var deltaX = event.clientX - (5 + g_protocol / 5 / 2);
                var deltaY = event.clientY - (5 + g_protocol / 5 / 2);
                if (Math.sqrt(deltaX * deltaX + deltaY * deltaY) <= g_protocol / 5 / 2) {
                    SendPos();
                    SendCmd(17);
                    return;
                }
            }
            g_mouseX = event.clientX;
            g_mouseY = event.clientY;
            UpdatePos();
            SendPos();
        };
        g_canvas.onmousemove = function(event) {
            g_mouseX = event.clientX;
            g_mouseY = event.clientY;
            UpdatePos();
        };
        g_canvas.onmouseup = function() {};
        if (/firefox/i.test(navigator.userAgent)) {
            document.addEventListener('DOMMouseScroll', WheelHandler, false);
        } else {
            $(".chatMessages").scroll(function() {
                return;
            });
            document.body.onmousewheel = WheelHandler;
        }

        var KEY_TAB = 9;
        var KEY_ENTER = 13;
        var KEY_SHIFT = 16;
        var KEY_ESCAPE = 27;
        var KEY_SPACE = 32;
        var KEY_ARROW_LEFT = 37;
        var KEY_ARROW_UP = 38;
        var KEY_ARROW_RIGHT = 39;
        var KEY_ARROW_DOWN = 40;
        var KEY_0 = 48;
        var KEY_1 = 49;
        var KEY_2 = 50;
        var KEY_3 = 51;
        var KEY_4 = 52;
        var KEY_5 = 53;
        var KEY_6 = 54;
        var KEY_7 = 55;
        var KEY_8 = 56;
        var KEY_9 = 57;
        var KEY_B = 66;
        var KEY_C = 67;
        var KEY_E = 69;
        var KEY_G = 71;
        var KEY_H = 72;
        var KEY_I = 73;
        var KEY_J = 74;
        var KEY_K = 75;
        var KEY_L = 76;
        var KEY_M = 77;
        var KEY_N = 78;
        var KEY_O = 79;
        var KEY_P = 80;
        var KEY_Q = 81;
        var KEY_R = 82;
        var KEY_S = 83;
        var KEY_T = 84;
        var KEY_U = 85;
        var KEY_V = 86;
        var KEY_W = 87;
        var KEY_X = 88;
        var KEY_Z = 90;
        var KEY_COMMA = 188;
        var KEY_PERIOD = 190;
        var KEY_SLASH = 191;
        var KEY_BRACKET = 219;
        var KEY_CLOSE_BRACKET = 221;

        var spaceDown = false;
        var cachedSkin = false;
        var ekeyDown = false;
        var wkeyDown = false;

        // Bind keys to events
        ZT.KeyBindingManager
            .bind(KEY_ESCAPE, 'global.focus')
            .bind(KEY_C, 'game.toggleChat')
            .bind(KEY_H, 'chat.showHotkeys')
            .bind(KEY_1, 'chat.messages.1')
            .bind(KEY_2, 'chat.messages.2')
            .bind(KEY_3, 'chat.messages.3')
            .bind(KEY_4, 'chat.messages.4')
            .bind(KEY_5, 'chat.messages.5')
            .bind(KEY_6, 'chat.messages.6')
            .bind(KEY_7, 'chat.messages.7')
            .bind(KEY_8, 'chat.messages.8')
            .bind(KEY_9, 'chat.messages.9')
            .bind(KEY_0, 'chat.messages.0')
            .bind(KEY_ENTER, 'chat.focus')
            .bind(KEY_TAB, 'game.switchSpectatingPlayer')
            .bind(KEY_L, 'game.copyToClipboard')
            .bind(KEY_X, 'game.toggleManualZoom')
            .bind(KEY_Z, 'game.resetZoom')
            .bind(KEY_ARROW_LEFT, 'game.targetBlobSmaller')
            .bind(KEY_ARROW_RIGHT, 'game.targetBlobLarger')
            .bind(KEY_ARROW_UP, 'game.targetBlobLargest')
            .bind(KEY_ARROW_DOWN, 'game.targetBlobSmallest')
            .bind(KEY_S, 'game.toggleMovement')
            .bind(KEY_CLOSE_BRACKET, 'game.toggleRSplit')
            .bind(KEY_P, 'game.togglePellets')
            .bind(KEY_J, 'game.toggleRainbowPellets')
            .bind(KEY_B, 'game.toggleRainbowFeeds')
            .bind(KEY_COMMA, 'game.togglePlayerNames')
            .bind(KEY_BRACKET, 'game.toggleOwnPlayerName')
            .bind(KEY_PERIOD, 'game.toggleBlobMass')
            .bind(KEY_SLASH, 'game.toggleStrokes')
            .bind(KEY_G, 'game.toggleGrid')
            .bind(KEY_V, 'game.toggleTransparentVirus')
            .bind(KEY_M, 'game.toggleMap')
            .bind(KEY_N, 'game.toggleCustomSkins')
            .bind(KEY_T, 'game.toggleTransparency')
            .bind(KEY_U, 'game.togglePlayerSplitGuide')
            .bind(KEY_I, 'game.toggleIndicators')
            .bind(KEY_O, 'game.toggleEnemySplitGuides')
            .bind(KEY_K, 'game.toggleCursorLines')
            .bind(KEY_SPACE, 'game.split')
            .bind(KEY_Q, 'game.clearSkinCache')
            .bind(KEY_E, 'game.quickFeed')
            .bind(KEY_W, 'game.feed');

        // Bind handlers to events
        ZT.KeyBindingManager

        // Special event for dealing with the Escape key.
            .on('global.focus',
            function() {
                if (isChatFocused()) {
                    $('#sendMessage').val('');
                    $('#sendMessage').blur();
                } else {
                    ShowOverlay(300);
                }
            },
            function() {
                return true; }
        )

        // Chat Handlers
        .on('chat.showHotkeys', function() {
                toastr.info('<span class="chatCommands"><strong>Chat hotkeys:</strong><br />1: Need backup<br/>2: Enemy spotted<br/>3: We need to pop him<br/>4: We need to run<br/>5: Tank the viruses<br/>6: Feed me<br/>7: Split into me<br/>8: Kill his teammate<br/>9: Roger that<br/>0: Negative<br/></span>');
            })
            .on('chat.messages.1', function() {
                sendDraftMessage('Need backup at ' + resolveMapCoords(g_viewX_, g_viewY_, g_maxX, g_minX, g_maxY, g_minY));
            })
            .on('chat.messages.2', function() {
                sendDraftMessage('Enemy spotted at ' + resolveMapCoords(g_viewX_, g_viewY_, g_maxX, g_minX, g_maxY, g_minY));
            })
            .on('chat.messages.3', function() {
                sendDraftMessage('We need to pop him!');
            })
            .on('chat.messages.4', function() {
                sendDraftMessage('We need to run!');
            })
            .on('chat.messages.5', function() {
                sendDraftMessage('Tank the viruses!');
            })
            .on('chat.messages.6', function() {
                sendDraftMessage('Feed me!');
            })
            .on('chat.messages.7', function() {
                sendDraftMessage('Split into me!');
            })
            .on('chat.messages.8', function() {
                sendDraftMessage('Kill his teammate!');
            })
            .on('chat.messages.9', function() {
                sendDraftMessage('Roger that!');
            })
            .on('chat.messages.0', function() {
                sendDraftMessage('Negative!');
            })
            .on('chat.focus', function() {
                $('#sendMessage').focus();
            })

        // Game Handlers
        .on('game.switchSpectatingPlayer', function(event) {
                event.preventDefault();
                switchSpectatingPlayer();
            })
            .on('game.copyToClipboard', function() {
                var lbList = '';
                $.each($('#LeaderboardOverlayContent span'), function(index, value) {
                    lbList += $(value).text() + ' ';
                })

                console.log(lbList)

                copyToClipboard(lbList);
                showStatusToast('Leaderboard copied to clipboard')
            })
            .on('game.resetZoom', function() {
                g_zoom = 1;
            })
            .on('game.toggleChat', function() {
                toggleChat();
                var checkbox = $('#toggleChat');
                checkbox.prop("checked", !checkbox.prop("checked"));
            })
            .on('game.toggleManualZoom', function() {
                toggleManualZoom();
                var checkbox = $('#toggleManualZoom');
                checkbox.prop("checked", !checkbox.prop("checked"));
            })
            .on('game.toggleMovement', function() {
                toggleMovement();
            })
            .on('game.togglePellets', function() {
                togglePellets();
                var checkbox = $('#togglePellets');
                checkbox.prop("checked", !checkbox.prop("checked"));
            })
            .on('game.toggleRainbowPellets', function() {
                toggleRainbowPellets();
                var checkbox = $('#toggleRainbowPellets');
                checkbox.prop("checked", !checkbox.prop("checked"));
            })
            .on('game.toggleRainbowFeeds', function() {
                toggleRainbowFeeds();
                var checkbox = $('#toggleRainbowFeeds');
                checkbox.prop("checked", !checkbox.prop("checked"));
            })
            .on('game.togglePlayerNames', function() {
                togglePlayerNames();
                var checkbox = $('#togglePlayerNames');
                checkbox.prop("checked", !checkbox.prop("checked"));
            })
            .on('game.toggleOwnPlayerName', function() {
                toggleOwnPlayerName();
            })
            .on('game.toggleBlobMass', function() {
                toggleBlobMass();
                var checkbox = $('#toggleBlobMass');
                checkbox.prop("checked", !checkbox.prop("checked"));
            })
            .on('game.toggleRSplit', function() {
                toggleRSplit();
                var checkbox = $('#toggleRSplit');
                checkbox.prop("checked", !checkbox.prop("checked"));
            })
            .on('game.toggleSplitSixteen', function() {
                toggleSplitSixteen();
                var checkbox = $('#toggleSplitSixteen');
                checkbox.prop("checked", !checkbox.prop("checked"));
            })
            .on('game.toggleDoubleSplit', function() {
                toggleDoubleSplit();
                var checkbox = $('#toggleDoubleSplit');
                checkbox.prop("checked", !checkbox.prop("checked"));
            })
            .on('game.toggleStrokes', function() {
                toggleStrokes();
                var checkbox = $('#toggleStrokes');
                checkbox.prop("checked", !checkbox.prop("checked"));
            })
            .on('game.toggleGrid', function() {
                toggleGrid();
                var checkbox = $('#toggleGrid');
                checkbox.prop("checked", !checkbox.prop("checked"));
            })
            .on('game.toggleTransparentVirus', function() {
                toggleTransparentVirus();
                var checkbox = $('#toggleTransparentVirus');
                checkbox.prop("checked", !checkbox.prop("checked"));
            })
            .on('game.toggleMap', function() {
                toggleMap();
                var checkbox = $('#toggleMap');
                checkbox.prop("checked", !checkbox.prop("checked"));
            })
            .on('game.toggleTransparency', function() {
                toggleTransparency();
                var checkbox = $('#toggleTransparency');
                checkbox.prop("checked", !checkbox.prop("checked"));
            })
            .on('game.togglePlayerSplitGuide', function() {
                togglePlayerSplitGuide();
                var checkbox = $('#togglePlayerSplitGuide');
                checkbox.prop("checked", !checkbox.prop("checked"));
            })
            .on('game.toggleIndicators', function() {
                toggleIndicators();
                var checkbox = $('#toggleIndicators');
                checkbox.prop("checked", !checkbox.prop("checked"));
            })
            .on('game.toggleEnemySplitGuides', function() {
                toggleEnemySplitGuides();
                var checkbox = $('#toggleEnemySplitGuides');
                checkbox.prop("checked", !checkbox.prop("checked"));
            })
            .on('game.toggleCursorLines', function() {
                toggleCursorLines();
                var checkbox = $('#toggleCursorLines');
                checkbox.prop("checked", !checkbox.prop("checked"));
            })
            .on('game.toggleCustomSkins', function() {
                toggleCustomSkins();
                var checkbox = $('#toggleCustomSkins');
                checkbox.prop("checked", !checkbox.prop("checked"));
            })
            .on('game.splitSixteen:onkeydown', function() {
                if (!spaceDown) {
                    SendPos();
                    SendCmd(17);
                    setTimeout(function() {
                        SendPos();
                        SendCmd(17);
                    }, 20);
                    setTimeout(function() {
                        SendPos();
                        SendCmd(17);
                    }, 40);
                    setTimeout(function() {
                        SendPos();
                        SendCmd(17);
                    }, 60);
                    spaceDown = true;
                }
            })
            .on('game.splitSixteen:onkeyup', function() {
                spaceDown = false;
            })
            .on('game.doubleSplit:onkeydown', function() {
                if (!spectateMode) {
                    if (!spaceDown) {
                        SendPos();
                        SendCmd(17);
                        setTimeout(function() {
                            SendPos();
                            SendCmd(17);
                        }, 50);
                        spaceDown = true;
                    }
                }
            })
            .on('game.doubleSplit:onkeyup', function() {
                if (!spectateMode) {
                    spaceDown = false;
                }
            })
            .on('game.split:onkeydown', function() {
                if (!spaceDown) {
                    SendPos();
                    SendCmd(17);
                    spaceDown = true;
                }
            })
            .on('game.split:onkeyup', function() {
                spaceDown = false;
            })
            .on('game.clearSkinCache:onkeydown', function() {
                if (!cachedSkin) {
                    SendCmd(18);
                    cachedSkin = true;
                }
            })
            .on('game.clearSkinCache:onkeyup', function() {
                if (cachedSkin) {
                    SendCmd(19);
                    cachedSkin = false;
                }
            })
            .on('game.quickFeed:onkeydown', function() {
                ekeyDown = true;
                handleQuickW();
            })
            .on('game.quickFeed:onkeyup', function() {
                ekeyDown = false;
            })
            .on('game.feed:onkeydown', function() {
                if (!wkeyDown) {
                    wkeyDown = true;
                    SendPos();
                    SendCmd(21);
                }
            })
            .on('game.feed:onkeyup', function() {
                wkeyDown = false;
            });

        window.onblur = function() {
            SendCmd(19);
            ekeyDown = wkeyDown = cachedSkin = spaceDown = false;
        };

        function handleQuickW() {
            if (ekeyDown) {
                SendPos();
                SendCmd(21);

                // 142 = ~1/7th a second
                setTimeout(handleQuickW, 100);
            }
        }

        window.onbeforeunload = function(event) {
            // If the overlay isn't visible, prompt to confirm navigation.
            if (!$('#overlays').is(':visible')) {
                return "You are about to leave Agar.io.";
            }
        }

        $('#colorPicker [type="hidden"]').val(playerColor);
        $('#colorPicker').colorpicker({
                input: '[type="hidden"]',
                horizontal: true,
                template: '<div class="colorpicker dropdown-menu">' +
                    '<div class="colorpicker-saturation"><i><b></b></i></div>' +
                    '<div class="colorpicker-hue"><i></i></div>' +
                    '<div class="colorpicker-selectors"></div>' +
                    '<input type="text" class="color-hex">' +
                    '</div>',
            }).on('changeColor', function(event) {
                $('.color-hex').val(event.color.toHex());
                var data = event.color.toRGB();
                var color = 'rgba(' + data.r + ',' + data.g + ',' + data.b + ',' + data.a + ')';
                setPlayerColor(color);
            })
            .on('showPicker', function(event) {
                $('.color-hex').val(event.color.toHex());
            });

        $('.color-hex').on('change', function(event) {
            $('#colorPicker').colorpicker('setValue', $('.color-hex').val());
        })

        _.each(['mouseup', 'mousedown', 'mousemove'], function(name) {
            document.addEventListener(name, function(event) {
                var target = $(event.target);
                var zone = target.closest('input');
                if (zone.is('.color-hex')) {
                    event.stopPropagation();
                }
            }, true);
        });

        window.onresize = ResizeHandler;
        window.requestAnimationFrame(__unmatched_128);
        setInterval(SendPos, 40);
        if (g_region) {
            $('#region').val(g_region);
        }
        SyncRegion();
        SetRegion($('#region').val());
        if (0 == __unmatched_110 && g_region) {
            Start();
        }
        g_ready = true;
        $('#overlays').show();
        ResizeHandler();

        if (window.paryCode) {
            RenderLoop(window.paryCode);
        }
    }

    function getPlayerDetailsForCell(cell) {
        var identifier = cell.name + cell.color;
        if (identifier in playerDetailsByIdentifier) {
            return playerDetailsByIdentifier[identifier];
        }
    }

    function resolveSkin(cell, playerDetails, defaultSkins, skinCache, showSkins, gameMode) {
        if (cell.n || gameMode == ':teams') {
            return null;
        }

        var result = null;
        var url = false;

        // Player Custom Skins
        if (showCustomSkins && playerDetails) {
            url = playerDetails.url;
        }

        // Yin Custom Skins
        // if (showCustomSkins > 1 && !url) {

        // }

        // ZT Custom Skins
        if (!url) {
            _.each(ztConfig.customSkins, function(skin) {
                if (cell.name.indexOf(skin.match) !== -1) {
                    if (!skin.extension || playerDetails) {
                        url = skin.url;
                        return false;
                    }
                }
            });
        }

        // Stock Skins
        if (!url && showSkins) {
            if (defaultSkins.indexOf(name) != -1) {
                url = 'skins/' + name + '.png';
            }
        }

        // Custom team skin
        if (!url) {
            var tag = $('#teamName').val();
            if (tag) {
                if (cell.name.indexOf(tag) !== -1) {
                    url = ztConfig.teamSkin;
                }
            }
        }

        if (url) {
            if (!skinCache.hasOwnProperty(url)) {
                var image = new Image();
                image.src = url;

                skinCache[url] = image;
            }

            if (skinCache[url].width && skinCache[url].complete) {
                result = skinCache[url];
            }
        }

        return result;
    }

    window.setTeam = function(team) {
        $('#teamName').val(team);
    }

    function WheelHandler(event) {
        // zoomDate = Date.now();
        g_zoom *= Math.pow(0.9, event.wheelDelta / -120 || event.detail || 0);
    }

    function compareScale() {
        if (Math.abs(g_scale - lastScale) > 0.1) { scaleDate = Date.now();
            lastScale = g_scale; }
        // if(MyScore() != 0 ) if(MyScore() > 1500000)  showPellets = false;
        // else showPellets = true;
    }

    function notScalling() {
        return (Date.now() - scaleDate < 300 ? false : true);
    }

    function UpdateTree() {
        if (0.4 > g_scale) {
            g_pointTree = null;
        } else {
            for (var minX = Number.POSITIVE_INFINITY, minY = Number.POSITIVE_INFINITY, maxX = Number.NEGATIVE_INFINITY, maxY = Number.NEGATIVE_INFINITY, maxSize = 0, i = 0; i < g_cells.length; i++) {
                var cell = g_cells[i];
                if (!(!cell.N() || cell.R || 20 >= cell.size * g_scale)) {
                    maxSize = Math.max(cell.size, maxSize);
                    minX = Math.min(cell.x, minX);
                    minY = Math.min(cell.y, minY);
                    maxX = Math.max(cell.x, maxX);
                    maxY = Math.max(cell.y, maxY);
                }
            }
            g_pointTree = QTreeFactory.ka({
                ca: minX - (maxSize + 100),
                da: minY - (maxSize + 100),
                oa: maxX + (maxSize + 100),
                pa: maxY + (maxSize + 100),
                ma: 2,
                na: 4
            });
            for (i = 0; i < g_cells.length; i++) {
                if (cell = g_cells[i], cell.N() && !(20 >= cell.size * g_scale)) {
                    for (minX = 0; minX < cell.a.length; ++minX) {
                        minY = cell.a[minX].x;
                        maxX = cell.a[minX].y;
                        if (!(minY < g_viewX - g_protocol / 2 / g_scale || maxX < g_viewY - start / 2 / g_scale || minY > g_viewX + g_protocol / 2 / g_scale || maxX > g_viewY + start / 2 / g_scale)) {
                            g_pointTree.m(cell.a[minX]);
                        }
                    }
                }
            }
        }
    }

    function UpdatePos() {
        if (spectateMode && getSpectatingPlayer()) {
            return;
        }

        if (!stopMovement) {
            g_moveX = (g_mouseX - g_protocol / 2) / g_scale + g_viewX;
            g_moveY = (g_mouseY - start / 2) / g_scale + g_viewY;
        } else {
            g_moveX = g_viewX_;
            g_moveY = g_viewY_;
        }
    }

    function PlayerStats() {
        if (null == g_regionLabels) {
            g_regionLabels = {};
            $('#region').children().each(function() {
                var $this = $(this);
                var val = $this.val();
                if (val) {
                    g_regionLabels[val] = $this.text();
                }
            });
        }
        // $.get('http://m.agar.io/info', function(data) {
        //     var regionNumPlayers = {};
        //     var region;
        //     for (region in data.regions) {
        //         var region_ = region.split(':')[0];
        //         regionNumPlayers[region_] = regionNumPlayers[region_] || 0;
        //         regionNumPlayers[region_] += data.regions[region].numPlayers;
        //     }
        //     for (region in regionNumPlayers) {
        //         $('#region option[value="' + region + '"]').text(g_regionLabels[region] + ' (' + regionNumPlayers[region] + ' players)');
        //     }
        // }, 'json');
    }

    function HideOverlay() {
        $('#adsBottom').hide();
        $('#overlays').hide();
        $('#stats').hide();
        $('#mainPanelOverlay').hide();
        g_ready = false;
        SyncRegion();
        if (window.googletag && window.googletag.pubads && window.googletag.pubads().clear) {
            window.googletag.pubads().clear(window.aa.concat(window.ab));
        }
    }

    function SetRegion(val) {
        if (val && val != g_region) {
            if ($('#region').val() != val) {
                $('#region').val(val);
            }
            g_region = window.localStorage.location = val;
            $('.region-message').hide();
            $('.region-message.' + val).show();
            $('.btn-needs-server').prop('disabled', false);
            if (g_drawLines) {
                Start();
            }
        }
    }

    function ShowOverlay(delay) {

        //stopMovement = true;
        $('#fps').hide();
        $('#gameStats').hide();
        $('#sendMessage').hide();
        if (!g_ready) {
            socket.emit('leaveRoom', socketRoom);
            g_nick = null;
            // RefreshAds(window.aa);
            if (1000 > delay) {
                qkeyDown = 1;
            }
            g_ready = true;
            // console.log("boom");
            $('#mainPanelOverlay').show();
            if (0 < delay) {
                $('#overlays').fadeIn(delay);
            } else {
                $('#overlays').show();
            }
        }
    }

    function Render(__unmatched_172) {
        $('#helloContainer').attr('data-gamemode', __unmatched_172);
        __unmatched_93 = __unmatched_172;
        $('#gamemode').val(__unmatched_172);
    }

    function SyncRegion() {
        if ($('#region').val()) {
            window.localStorage.location = $('#region').val();
        } else if (window.localStorage.location) {
            $('#region').val(window.localStorage.location);
        }
        if ($('#region').val()) {
            $('#locationKnown').append($('#region'));
        } else {
            $('#locationUnknown').append($('#region'));
        }
    }
    // // refresh ads terjanq
    // function RefreshAds(__unmatched_173) {
    //     if (g_canRefreshAds) {
    //         g_canRefreshAds = false;
    //         setTimeout(function() {
    //             g_canRefreshAds = true;
    //         }, 60000 * g_refreshAdsCooldown);
    //         if (window.googletag && window.googletag.pubads && window.googletag.pubads().refresh) {
    //             window.googletag.pubads().refresh(__unmatched_173);
    //         }
    //     }
    // }
    function __unmatched_14(i_) {
        return window.i18n[i_] || window.i18n_dict.en[i_] || i_;
    }

    function FindGame() {
        var __unmatched_175 = ++__unmatched_110;
        if (__unmatched_93 == 'FFA') { __unmatched_93 = ''; }
        //console.log('Find ' + g_region + __unmatched_93);
        // $.ajax('http://m.agar.io/', {
        //     error: function() {
        //         setTimeout(FindGame, 1000);
        //     },
        //     success: function(__unmatched_176) {
        //         if (__unmatched_175 == __unmatched_110) {
        //             __unmatched_176 = __unmatched_176.split('\n');
        //             if (__unmatched_176[2]) {
        //                 alert(__unmatched_176[2]);
        //             }
        //             Connect('ws://' + __unmatched_176[0], __unmatched_176[1]);
        //         }
        //     },
        //     dataType: 'text',
        //     method: 'POST',
        //     cache: false,
        //     crossDomain: true,
        //     data: (g_region + __unmatched_93 || '?') + '\n2200049715'
        // });
    }

    function Start() {
        if (g_drawLines && g_region) {
            $('#connecting').show();
            FindGame();
        }
    }

    function Connect(address, ticket) {
        if (g_leaderboardCanvas) {
            g_leaderboardCanvas.onopen = null;
            g_leaderboardCanvas.onmessage = null;
            g_leaderboardCanvas.onclose = null;
            try {
                g_leaderboardCanvas.close();
            } catch (exception) {}
            g_leaderboardCanvas = null;
        }
        if (__unmatched_111.la) {
            address = 'ws://' + __unmatched_111.la;
        }
        if (null != __unmatched_119) {
            var __unmatched_179 = __unmatched_119;
            __unmatched_119 = function() {
                __unmatched_179(ticket);
            };
        }
        if (g_secure) {
            var parts = address.split(':');
            address = parts[0] + 's://ip-' + parts[1].replace(/\./g, '-').replace(/\//g, '') + '.tech.agar.io:' + (+parts[2] + 2000);
        }
        g_playerCellIds = [];
        g_playerCells = [];
        g_cellsById = {};
        g_cells = [];
        g_destroyedCells = [];
        g_scoreEntries = [];
        text = g_scorePartitions = null;
        g_maxScore = 0;
        g_connectSuccessful = false;
        //console.log('Connecting to ' + address);
        serverAddress = address;
        MyIp = address;
        g_leaderboardCanvas = new WebSocket(address);
        g_leaderboardCanvas.binaryType = 'arraybuffer';
        g_leaderboardCanvas.onopen = function() {
            var data;
            // console.log('socket open');
            console.log(address);
            data = GetBuffer(5);
            data.setUint8(0, 254);
            data.setUint32(1, 5, true);
            SendBuffer(data);
            data = GetBuffer(5);
            data.setUint8(0, 255);
            data.setUint32(1, 154669603, true);
            SendBuffer(data);
            data = GetBuffer(1 + ticket.length);
            data.setUint8(0, 80);
            for (var i = 0; i < ticket.length; ++i) {
                data.setUint8(i + 1, ticket.charCodeAt(i));
            }
            SendBuffer(data);
           if(FBToken) SendFBToken();

        };
        g_leaderboardCanvas.onmessage = MessageHandler;
        g_leaderboardCanvas.onclose = CloseHandler;
        g_leaderboardCanvas.onerror = function() {
            console.log('socket error');
        };
    }

    function GetBuffer(size) {
        return new DataView(new ArrayBuffer(size));
    }

    function SendBuffer(data) {
        g_leaderboardCanvas.send(data.buffer);
    }
    SendB = SendBuffer;

    function CloseHandler() {
        if (g_connectSuccessful) {
            g_retryTimeout = 500;
        }
        // console.log('socket close');
        setTimeout(Start, g_retryTimeout);
        g_retryTimeout *= 2;
    }

    function MessageHandler(data) {
        Receive(new DataView(data.data));
    }

    function Receive(data) {
        function getString16() {
            var result = '';
            while (true) {
                var c = data.getUint16(offset, true);
                offset += 2;
                if (c == 0) {
                    break;
                }
                result += String.fromCharCode(c);
            }
            return result;
        }

        var offset = 0;
        if (data.getUint8(offset) == 240) {
            offset += 5;
        }
        var _case = data.getUint8(offset++);
        // console.log("case ",  _case);
        switch (_case) {
            case 16:
                ParseCellUpdates(data, offset);
                break;

            case 17:
                g_viewX_ = data.getFloat32(offset, true);
                offset += 4;
                g_viewY_ = data.getFloat32(offset, true);
                offset += 4;
                g_scale_ = data.getFloat32(offset, true);
                offset += 4;
                break;
            case 18:
                g_playerCellIds = [];
                g_playerCells = [];
                g_cellsById = {};
                g_cells = [];
            case 20:
                g_playerCells = [];
                g_playerCellIds = [];
                break;

            case 21:
                g_linesX_ = data.getInt16(offset, true);
                offset += 2;
                g_linesY_ = data.getInt16(offset, true);
                offset += 2;
                if (!__unmatched_96) {
                    __unmatched_96 = true;
                    g_linesX = g_linesX_;
                    g_linesY = g_linesY_;
                }
                break;

            case 32:
                g_playerCellIds.push(data.getUint32(offset, true));
                offset += 4;
                break;

            case 49:
                if (g_scorePartitions != null) {
                    break;
                }

                g_scoreEntries = [];

                var count = data.getUint32(offset, true);
                offset += 4;

                for (var i = 0; i < count; i++) {
                    var id = data.getUint32(offset, true);
                    offset += 4;
                    g_scoreEntries.push({
                        id: id,
                        name: getString16()
                    });
                }

                UpdateLeaderboard();
                break;

            case 50:
                g_scorePartitions = [];

                var count = data.getUint32(offset, true);
                offset += 4;

                for (var i = 0; i < count; i++) {
                    g_scorePartitions.push(data.getFloat32(offset, true));
                    offset += 4;
                }

                UpdateLeaderboard();
                break;

            case 64:
                g_minX = data.getFloat64(offset, true);
                offset += 8;
                g_minY = data.getFloat64(offset, true);
                offset += 8;
                g_maxX = data.getFloat64(offset, true);
                offset += 8;
                g_maxY = data.getFloat64(offset, true);
                offset += 8;

                if (g_maxX - g_minX > 14000) { _g_maxX = g_maxX;
                    _g_maxY = g_maxY;
                    _g_minY = g_minY;
                    _g_minX = g_minX; }
                // g_maxX += 7071 - _g_maxX;
                // g_minX += 7071 - _g_maxX;
                // g_maxY += 7071 - _g_maxY;
                // g_minX += 7071 - _g_maxY;
                // if(~~_g_minX == ~~ __g_minX && ~~_g_maxX != ~~ __g_maxX) {  g_minX = _g_minX; g_maxX = g_minX + 14142; }


                // if(~~_g_minX != ~~ __g_minX && ~~_g_maxX == ~~ __g_maxX) { g_maxX = _g_maxX; g_minX = g_maxX - 14142; }


                //  if(~~_g_minY == ~~ __g_minY && ~~_g_maxY != ~~ __g_maxY) {  g_minY = _g_minY; g_maxY = g_minY + 14142; }

                //  if(~~_g_minY != ~~ __g_minY && ~~_g_maxY == ~~ __g_maxY) {  g_maxY = _g_maxY; g_minY = g_maxY - 14142; }
                __g_maxY = _g_maxY;
                __g_maxX = _g_maxX;
                __g_minX = _g_minX;
                __g_minY = _g_minY;



                g_viewX_ = (g_maxX + g_minX) / 2;
                g_viewY_ = (g_maxY + g_minY) / 2;
                g_scale_ = 1;

                if (g_playerCells.length == 0) {
                    g_viewX = g_viewX_;
                    g_viewY = g_viewY_;
                    g_scale = g_scale_;

                }

                if (data.byteLength > offset) {
                    data.getUint32(offset, true);
                    offset += 4;


                }
                // console.log("g_minX, g_maxX, g_minY, g_maxY", _g_minX, _g_maxX, _g_minY, _g_maxY);
                break;

            case 81:
                var level = data.getUint32(offset, true);
                offset += 4;
                var xp = data.getUint32(offset, true);
                offset += 4;
                var xpNeeded = data.getUint32(offset, true);
                offset += 4;

                setTimeout(function() {
                    __unmatched_42({
                        e: level,
                        f: xp,
                        d: xpNeeded
                    });
                }, 1200);
                break;

        }
    }

    function ParseCellUpdates(data, offset) {
        //name
        function getString16() {
            var result = '';
            while (true) {
                var c = data.getUint16(offset, true);
                offset += 2;
                if (c == 0) {
                    break;
                }
                result += String.fromCharCode(c);
            }

            return result;
        }

        //skin
        function getString8() {
            var result = '';
            while (true) {
                var c = data.getUint8(offset++);
                if (c == 0) {
                    break;
                }
                result += String.fromCharCode(c);
            }

            return result;
        }

        __unmatched_105 = g_time = Date.now();
        if (!g_connectSuccessful) {
            g_connectSuccessful = true;

            $('#connecting').hide();
            SendNick();
            if (__unmatched_119) {
                __unmatched_119();
                __unmatched_119 = null;
            }
        }

        __unmatched_86 = false;
        var countA = data.getUint16(offset, true);

        offset += 2;

        for (var i = 0; i < countA; i++) {
            var cellA = g_cellsById[data.getUint32(offset, true)];
            var cellB = g_cellsById[data.getUint32(offset + 4, true)];
            // console.log(cellA, cellB);
            offset += 8;

            if (cellA && cellB) {
                cellB.X();
                cellB.s = cellB.x;
                cellB.t = cellB.y;
                cellB.r = cellB.size;
                cellB.J = cellA.x;
                cellB.K = cellA.y;
                cellB.q = cellB.size;
                cellB.Q = g_time;

                unknownUpdateStats(cellA, cellB);
            }
        }

        while (true) {
            var id = data.getUint32(offset, true); //asd
            offset += 4;
            if (id == 0) {
                break;
            }

            var cellB = data.getInt32(offset, true);
            offset += 4;
            var cellA = data.getInt32(offset, true);
            offset += 4;
            var size = data.getInt16(offset, true);
            offset += 2;

            var color = decodeColor(
                data.getUint8(offset++) << 16 |
                data.getUint8(offset++) << 8 |
                data.getUint8(offset++));

            var flags = data.getUint8(offset++);

            var flagA = !!(flags & 1);
            var isAgitated = !!(flags & 16);

            var unknownString1 = null;
            if (flags & 2) {
                offset += 4 + data.getUint32(offset, true);
            }

            if (flags & 4) {
                unknownString1 = getString8();
            }

            var unknownString2 = getString16();

            var cell = null;
            if (g_cellsById.hasOwnProperty(id)) {
                cell = g_cellsById[id];
                cell.P();
                cell.s = cell.x;
                cell.t = cell.y;
                cell.r = cell.size;
                cell.color = color;
            } else {
                cell = new Cell(id, cellB, cellA, size, color, unknownString2);
                g_cells.push(cell);
                g_cellsById[id] = cell;
                cell.ua = cellB;
                cell.va = cellA;
            }

            cell.h = flagA;
            cell.n = isAgitated;
            cell.J = cellB;
            cell.K = cellA;
            cell.q = size;
            cell.Q = g_time;
            cell.ba = flags;
            if (unknownString2) {
                cell.B(unknownString2);
            }

            if (g_playerCellIds.indexOf(id) != -1 && g_playerCells.indexOf(cell) == -1) {
                g_playerCells.push(cell);

                if (g_playerCells.length == 1) {
                    g_viewX = cell.x;
                    g_viewY = cell.y;
                    __unmatched_134();
                    document.getElementById('overlays').style.display = 'none';
                    cached = [];
                    __unmatched_137 = 0;
                    isVirus = g_playerCells[0].color;
                    __unmatched_140 = true;
                    __unmatched_141 = Date.now();
                    __unmatched_145 = __unmatched_144 = __unmatched_143 = 0;
                }
            }
        }

        var countB = data.getUint32(offset, true);
        offset += 4;

        for (var i = 0; i < countB; i++) {
            var id = data.getUint32(offset, true);
            offset += 4;

            var cell = g_cellsById[id];
            if (cell != null) {
                cell.X();
            }
        }

        if (__unmatched_86 && g_playerCells.length == 0) {
            __unmatched_142 = Date.now();
            __unmatched_140 = false;
            if (!(g_ready)) {
                ShowOverlay(1000);
            }
        }
    }

    function SendPos() {
        if (IsConnected()) {
            var deltaY = g_mouseX - g_protocol / 2;
            var delta = g_mouseY - start / 2;
            if (!(64 > deltaY * deltaY + delta * delta || 0.01 > Math.abs(g_lastMoveY - g_moveX) && 0.01 > Math.abs(g_lastMoveX - g_moveY))) {
                g_lastMoveY = g_moveX;
                g_lastMoveX = g_moveY;

                deltaY = GetBuffer(13);
                deltaY.setUint8(0, 16);
                deltaY.setInt32(1, g_moveX, true);
                deltaY.setInt32(5, g_moveY, true);
                deltaY.setUint32(9, 0, true);
                SendBuffer(deltaY);
            }
        }
    }

    function SendNick() {
        if (IsConnected() && g_connectSuccessful && null != g_nick) {
            var data = GetBuffer(1 + 2 * g_nick.length);
            data.setUint8(0, 0);
            for (var i = 0; i < g_nick.length; ++i) {
                data.setUint16(1 + 2 * i, g_nick.charCodeAt(i), true);
            }

            SendBuffer(data);
        }
    }

    function IsConnected() {
        return null != g_leaderboardCanvas && g_leaderboardCanvas.readyState == g_leaderboardCanvas.OPEN;
    }

    function SendCmd(cmd) {
        if (IsConnected()) {
            var data = GetBuffer(1);
            data.setUint8(0, cmd);
            SendBuffer(data);
        }
    }

    function SendFBToken() {

            console.log(FBToken);
            if (IsConnected() && FBToken && FBToken!=null) {


            var FBArray = [102, 8, 1, 18, FBToken.length + 25, 1, 8, 10, 82, FBToken.length + 20, 1, 10, 13, 8, 5, 18, 5, 49, 46, 52, 46, 57, 24, 0, 32, 0, 16, 2, 26, FBToken.length, 1];
                                    for (var i=0 ; i <= FBToken.length - 1;i++)
                                      FBArray.push(FBToken.charCodeAt(i));

                SendBuffer((new Uint8Array(FBArray)));
            }

    }

    function ResizeHandler() {
        g_protocol = window.innerWidth;
        start = window.innerHeight;
        g_canvas_.width = g_canvas.width = g_protocol;
        g_canvas_.height = g_canvas.height = start;
        var $dialog = $('#helloContainer');
        $dialog.css('transform', 'none');
        var dialogHeight = $dialog.height();
        var height = window.innerHeight;
        if (dialogHeight > height / 1.1) {
            $dialog.css('transform', 'translate(-50%, -50%) scale(' + height / dialogHeight / 1.1 + ')');
        } else {
            $dialog.css('transform', 'translate(-50%, -50%)');
        }

        GetScore();
    }

    function ScaleModifier() {

        var scale;
        scale = 1 * Math.max(start / 1080, g_protocol / 1920);
        return scale * g_zoom;
    }

    function __unmatched_32() {
        if (0 != g_playerCells.length) {
            for (var scale = 0, __unmatched_225 = 0; __unmatched_225 < g_playerCells.length; __unmatched_225++) {
                scale += g_playerCells[__unmatched_225].size;
            }
            if (!manualZoom) {
                scale = Math.pow(Math.min(64 / scale, 1), 0.4) * ScaleModifier();
            } else {
                scale = ScaleModifier();
            }
            g_scale = (9 * g_scale + scale) / 10;

        }
    }

    function GetScore() {
        var x, y1, x1, y2, x2, y3, x3;
        var rand = Date.now();
        ++__unmatched_73;
        g_time = rand;
        if (0 < g_playerCells.length) {
            __unmatched_32();
            for (var y = x = 0, i = 0; i < g_playerCells.length; i++) {
                g_playerCells[i].P();
                x += g_playerCells[i].x / g_playerCells.length;
                y += g_playerCells[i].y / g_playerCells.length;
            }
            g_viewX_ = x;
            g_viewY_ = y;
            g_scale_ = g_scale;
            g_viewX = (g_viewX + x) / 2;
            g_viewY = (g_viewY + y) / 2;
        } else {
            g_viewX = (29 * g_viewX + g_viewX_) / 30;
            g_viewY = (29 * g_viewY + g_viewY_) / 30;
            g_scale = (9 * g_scale + g_scale_ * ScaleModifier()) / 10;


        }
        UpdateTree();
        UpdatePos();
        if (!g_showTrails) {
            g_context.clearRect(0, 0, g_protocol, start);
        }
        /*  terjanq WTF?! drawing same thing 1000x times
        if (g_showTrails) {
            g_context.fillStyle = g_showMass ? '#111111' : '#F2FBFF';
            g_context.globalAlpha = 0.05;
            g_context.fillRect(0, 0, g_protocol, start);
            g_context.globalAlpha = 1;
        } else {
            DrawGrid();
        }*/
        g_cells.sort(function(A, B) {
            return A.size == B.size ? A.id - B.id : A.size - B.size;
        });
        g_context.save();
        g_context.translate(g_protocol / 2, start / 2);
        g_context.scale(g_scale, g_scale);
        g_context.translate(-g_viewX, -g_viewY);

        renderBackground(g_context, _g_maxX, _g_minX, _g_maxY, _g_minY);

        for (i = 0; i < g_destroyedCells.length; i++) {
            g_destroyedCells[i].w(g_context);
        }
        for (i = 0; i < g_cells.length; i++) {
            g_cells[i].drawUnderlay(g_context);
        }
        for (i = 0; i < g_cells.length; i++) {
            g_cells[i].w(g_context);
        }
        if (__unmatched_96) {
            g_linesX = (3 * g_linesX + g_linesX_) / 4;
            g_linesY = (3 * g_linesY + g_linesY_) / 4;
            g_context.save();
            g_context.strokeStyle = '#FFAAAA';
            g_context.lineWidth = 10;
            g_context.lineCap = 'round';
            g_context.lineJoin = 'round';
            g_context.globalAlpha = 0.5;
            g_context.beginPath();
            for (i = 0; i < g_playerCells.length; i++) {
                g_context.moveTo(g_playerCells[i].x, g_playerCells[i].y);
                g_context.lineTo(g_linesX, g_linesY);
            }
            g_context.stroke();
            g_context.restore();
        }
        g_context.restore();
        if (text && text.width) {
            g_context.drawImage(text, g_protocol - text.width - 10, 10);
        }
        g_maxScore = Math.max(g_maxScore, MyScore());
        //if (0 != g_maxScore) {
        if (!g_ready && g_nick != null) {
            if (null == g_cachedScore) {
                g_cachedScore = new CachedCanvas(20, '#DDDDDD');
            }
            if (null == g_cachedScore1) {
                g_cachedScore1 = new CachedCanvas(20, '#00CC00');
            }
            if (null == g_cachedScore2) {
                g_cachedScore2 = new CachedCanvas(20, '#EFDD2A');
            }
            if (null == g_cachedScore3) {
                g_cachedScore3 = new CachedCanvas(20, '#EF5350');
            }

            var myScore = ~~(MyScore() / 100);
            //console.log(myScore);
            var eat = ~~(myScore / 1.31) - 1;
            var split = ~~(myScore / 2 / 1.31) - 1;
            var caneat = ~~(myScore * 1.31) + 1;
            var cansplit = ~~(myScore * 2 * 1.31) + 1;

            //g_cachedScore1.C(__unmatched_14('Eat') + ': ' + eat + ' | ' + __unmatched_14('Split') +': ' + split + ' ');
            //y1 = g_cachedScore1.L();
            //x1 = y1.width;

            // g_cachedScore2.C(__unmatched_14('Can eat') + ': ' + caneat + ' | ' + __unmatched_14('Can split') + ': ' + cansplit + ' ');
            //y2 = g_cachedScore2.L();
            //x2 = y2.width;

            $('#gameStats #eat').text('Eat: ' + eat + ' | Split: ' + split);
            $('#gameStats #canEat').text('Can eat: ' + caneat + ' | Can split: ' + cansplit);
            $('#gameStats #score').text('Score: ' + ~~(g_maxScore / 100) + ' | Mass: ' + myScore + ' | [  ' + g_playerCells.length + '/16 ]');
            // if(!played && myScore > 50)  startSong();

            //g_cachedScore.C(__unmatched_14('score') + ': ' + ~~(g_maxScore / 100) + ' | ' + __unmatched_14('Pieces') + ': ' + g_playerCells.length + '/16 ');
            //y = g_cachedScore.L();
            //x = y.width;

            g_cachedScore3.C('Movement Stopped');
            y3 = g_cachedScore3.L();
            x3 = y3.width;

            g_context.save();
            g_context.globalAlpha = 0.2;
            g_context.fillStyle = '#000000';
            //g_context.fillRect(10, 10, x + 10, 34);
            //g_context.fillRect(10, 80, x1 + 10, 34);
            //g_context.fillRect(10, 45, x2 + 10, 34);
            if (stopMovement) {
                g_context.fillRect(((g_protocol - x3) / 2) + 10, 10, x3 + 10, 34);
            }
            g_context.globalAlpha = 1;
            //g_context.drawImage(y, 15, 15);
            //g_context.drawImage(y1, 15, 85);
            //g_context.drawImage(y2, 15, 50);
            if (stopMovement) {
                g_context.drawImage(y3, ((g_protocol - x3) / 2) + 15, 15);
            }
            g_context.restore();
        }
        DrawSplitImage();
        rand = Date.now() - rand;
        if (rand > 1000 / 60) {
            g_pointNumScale -= 0.01;
        } else if (rand < 1000 / 65) {
            g_pointNumScale += 0.01;
        }
        if (0.4 > g_pointNumScale) {
            g_pointNumScale = 0.4;
        }
        if (1 < g_pointNumScale) {
            g_pointNumScale = 1;
        }
        rand = g_time - __unmatched_75;
        if (!IsConnected() || g_ready) {
            qkeyDown += rand / 2000;
            if (1 < qkeyDown) {
                qkeyDown = 1;
            }
        } else {
            qkeyDown -= rand / 300;
            if (0 > qkeyDown) {
                qkeyDown = 0;
            }
        }
        if (0 < qkeyDown) {
            g_context.fillStyle = '#000000';
            g_context.globalAlpha = 0.5 * qkeyDown;
            g_context.fillRect(0, 0, g_protocol, start);
            g_context.globalAlpha = 1;
        }
        __unmatched_75 = g_time;
    }
    /*  terjanq useless function
  function DrawGrid() {
        console.log(g_protocol);
        g_context.fillStyle = g_showMass ? '#000000' : '#F2FBFF';
        g_context.fillRect(0, 0, g_protocol, start);
        g_context.save();
        g_context.strokeStyle = g_showMass ? '#fff' : '#000000';
        g_context.globalAlpha = 0.2 * g_scale;
        g_context.restore();
    }*/
    function DrawSplitImage() {
        if (g_touchCapable && g_splitImage.width) {
            var size = g_protocol / 5;
            g_context.drawImage(g_splitImage, 5, 5, size, size);
        }
    }

    function MyScore() {
        for (var score = 0, i = 0; i < g_playerCells.length; i++) {
            score += g_playerCells[i].q * g_playerCells[i].q;
        }
        return score;
    }

    window.setGrid = function(width, height) {
        ztConfig.grid.width = width;
        ztConfig.grid.height = height;
    }

    function UpdateLeaderboard() {
        text = null;
        if (null != g_scorePartitions || 0 != g_scoreEntries.length) {
            if (null != g_scorePartitions || g_showNames) {
                text = document.createElement('canvas');
                var context = text.getContext('2d');
                var height = 60;
                var height = null == g_scorePartitions ? height + 24 * g_scoreEntries.length : height + 180;
                var scale = Math.min(200, 0.3 * g_protocol) / 200;
                text.width = 200 * scale;
                //text.height = height * scale;
                text.height = start * scale - 20;
                context.scale(scale, scale);
                //context.globalAlpha = 0.4;
                //context.fillStyle = '#000000';
                //context.fillRect(0, 0, 200, height);
                //context.globalAlpha = 1;
                //context.fillStyle = '#FFFFFF';
                scale = null;
                scale = __unmatched_14('leaderboard');
                //context.font = 'bold 30px Ubuntu';
                //context.fillText(scale, 100 - context.measureText(scale).width / 2, 40);
                if (null == g_scorePartitions) {
                    leaderboardController.show();
                    leaderboardController.update(g_scoreEntries)
                } else {
                    leaderboardController.hide();
                }
                if ($('#nick').val() != null && showMap) {
                    //if (!g_ready && showMap && g_nick != null) {
                    var scale = Math.min(200, 0.3 * g_protocol) / 200;
                    var miniMapPosition = (start * scale - 20) - 200;

                    var coordX = g_viewX_;
                    var coordY = g_viewY_;
                    var playerName = nickName;
                    var timeStamp = Date.now();

                    var blobData = { coordX: coordX, coordY: coordY, playerName: playerName, serverAddress: serverToken, timeStamp: timeStamp, socketRoom: socketRoom };

                    // if (g_playerCellDestroyed === false && spectateMode === false && g_ready === false && $('.partyToken').val() != '') {
                    //     setTimeout(function(){ socket.emit('coords', blobData);  }, 2000);
                    // }

                    renderMiniMap(context, 200, 0, miniMapPosition + 200, miniMapPosition);
                    renderMiniMapMyBlob(context, miniMapPosition, blobData);
                    onlinePlayersFactory(context, miniMapPosition);
                }
            }
        }
    }

    function __unmatched_38(__unmatched_242, __unmatched_243, __unmatched_244, __unmatched_245, __unmatched_246) {
        this.V = __unmatched_242;
        this.x = __unmatched_243;
        this.y = __unmatched_244;
        this.i = __unmatched_245;
        this.b = __unmatched_246;
    }

    function Cell(id, x, y, size, color, name) {
        this.id = id;
        this.s = this.x = x;
        this.t = this.y = y;
        this.r = this.size = size;
        this.color = color;
        this.a = [];
        this.W();
        this.B(name);
    }

    function decodeColor(value) {
        value = value.toString(16);
        while (value.length < 6) {
            value = "0" + value;
        }
        return "#" + value;
    }

    function CachedCanvas(size, color, stroke, strokeColor) {
        // if (size) {
        //     this.u = size;
        // }
        if (color) {
            this.S = color;
        }
        this.U = !!stroke;
        if (strokeColor) {
            this.v = strokeColor;
        }
    }

    function __unmatched_41(__unmatched_257) {
        for (var size_ = __unmatched_257.length, __unmatched_259, __unmatched_260; 0 < size_;) {
            __unmatched_260 = Math.floor(Math.random() * size_);
            size_--;
            __unmatched_259 = __unmatched_257[size_];
            __unmatched_257[size_] = __unmatched_257[__unmatched_260];
            __unmatched_257[__unmatched_260] = __unmatched_259;
        }
    }

    function __unmatched_42(g_socket, __unmatched_262) {
        var noClip = '1' == $('#helloContainer').attr('data-has-account-data');
        $('#helloContainer').attr('data-has-account-data', '1');
        if (null == __unmatched_262 && window.localStorage.loginCache) {
            var __unmatched_264 = JSON.parse(window.localStorage.loginCache);
            __unmatched_264.f = g_socket.f;
            __unmatched_264.d = g_socket.d;
            __unmatched_264.e = g_socket.e;
            window.localStorage.loginCache = JSON.stringify(__unmatched_264);
        }
        if (noClip) {
            var __unmatched_265 = +$('.agario-exp-bar .progress-bar-text').first().text().split('/')[0];
            var noClip = +$('.agario-exp-bar .progress-bar-text').first().text().split('/')[1].split(' ')[0];
            var __unmatched_264 = $('.agarioProfilePanel .progress-bar-star').first().text();
            if (__unmatched_264 != g_socket.e) {
                __unmatched_42({
                    f: noClip,
                    d: noClip,
                    e: __unmatched_264
                }, function() {
                    $('.agarioProfilePanel .progress-bar-star').text(g_socket.e);
                    $('.agario-exp-bar .progress-bar').css('width', '100%');
                    $('.progress-bar-star').addClass('animated tada').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $('.progress-bar-star').removeClass('animated tada');
                    });
                    setTimeout(function() {
                        $('.agario-exp-bar .progress-bar-text').text(g_socket.d + '/' + g_socket.d + ' XP');
                        __unmatched_42({
                            f: 0,
                            d: g_socket.d,
                            e: g_socket.e
                        }, function() {
                            __unmatched_42(g_socket, __unmatched_262);
                        });
                    }, 1000);
                });
            } else {
                var __unmatched_266 = Date.now();
                var name = function() {
                    var deltaX;
                    deltaX = (Date.now() - __unmatched_266) / 1000;
                    deltaX = 0 > deltaX ? 0 : 1 < deltaX ? 1 : deltaX;
                    deltaX = deltaX * deltaX * (3 - 2 * deltaX);
                    $('.agario-exp-bar .progress-bar-text').text(~~(__unmatched_265 + (g_socket.f - __unmatched_265) * deltaX) + '/' + g_socket.d + ' XP');
                    $('.agario-exp-bar .progress-bar').css('width', (88 * (__unmatched_265 + (g_socket.f - __unmatched_265) * deltaX) / g_socket.d).toFixed(2) + '%');
                    if (1 > deltaX) {
                        window.requestAnimationFrame(name);
                    } else if (__unmatched_262) {
                        __unmatched_262();
                    }
                };
                window.requestAnimationFrame(name);
            }
        } else {
            $('.agarioProfilePanel .progress-bar-star').text(g_socket.e);
            $('.agario-exp-bar .progress-bar-text').text(g_socket.f + '/' + g_socket.d + ' XP');
            $('.agario-exp-bar .progress-bar').css('width', (88 * g_socket.f / g_socket.d).toFixed(2) + '%');
            if (__unmatched_262) {
                __unmatched_262();
            }
        }
    }

    function __unmatched_43(__unmatched_269) {
        if ('string' == typeof __unmatched_269) {
            __unmatched_269 = JSON.parse(__unmatched_269);
        }
        if (Date.now() + 1800000 > __unmatched_269.ja) {
            $('#helloContainer').attr('data-logged-in', '0');
        } else {
            window.localStorage.loginCache = JSON.stringify(__unmatched_269);
            FBToken = __unmatched_269.fa;
            $('.agario-profile-name').text(__unmatched_269.name);
            SendFBToken();
            __unmatched_42({
                f: __unmatched_269.f,
                d: __unmatched_269.d,
                e: __unmatched_269.e
            });
            $('#helloContainer').attr('data-logged-in', '1');
        }
    }

    function __unmatched_44(data) {
        data = data.split('\n');
        __unmatched_43({
            name: data[0],
            ta: data[1],
            fa: data[2],
            ja: 1000 * +data[3],
            e: +data[4],
            f: +data[5],
            d: +data[6]
        });
    }

    function UpdateScale(__unmatched_271) {
        if ('connected' == __unmatched_271.status) {
            var x = FBToken = __unmatched_271.authResponse.accessToken;
            SendFBToken();
            window.FB.api('/me/picture?width=180&height=180', function(__unmatched_273) {
                window.localStorage.fbPictureCache = __unmatched_273.data.url;
                $('.agario-profile-picture').attr('src', __unmatched_273.data.url);
            });

            window.FB.api('/me/', function(a) { prof = a; });
            $('#helloContainer').attr('data-logged-in', '1');
        }
    }

    function RenderLoop(x) {
        Render(':party');
        $('#helloContainer').attr('data-party-state', '4');
        x = decodeURIComponent(x).replace(/.*#/gim, '');
        __unmatched_47('#' + window.encodeURIComponent(x));
        // $.ajax(__unmatched_51 + '//m.agar.io/getToken', {
        //     error: function() {
        //         $('#helloContainer').attr('data-party-state', '6');
        //     },
        //     success: function(quick) {
        //         quick = quick.split('\n');
        //         $('.partyToken').val(window.encodeURIComponent(x));
        //         $('#helloContainer').attr('data-party-state', '5');
        //         Render(':party');
        //         Connect('ws://' + quick[0], x);
        //     },
        //     dataType: 'text',
        //     method: 'POST',
        //     cache: false,
        //     crossDomain: true,
        //     data: x
        // });
    }

    function __unmatched_47(__unmatched_277) {
        if (window.history && window.history.replaceState) {
            window.history.replaceState({}, window.document.title, __unmatched_277);
        }
    }

    function unknownUpdateStats(cellA, cellB) {
        var hasCellA = g_playerCellIds.indexOf(cellA.id) != -1;
        var hasCellB = g_playerCellIds.indexOf(cellB.id) != -1;

        var flag = cellB.size > 30;

        if (hasCellA && hasCellB) {
            __unmatched_137++;
        }

        if (!flag && !!hasCellA && !hasCellB) {
            __unmatched_144++;
        }
    }

    function __unmatched_48(__unmatched_278) {
        __unmatched_278 = ~~__unmatched_278;
        var color = (__unmatched_278 % 60).toString();
        __unmatched_278 = (~~(__unmatched_278 / 60)).toString();
        if (2 > color.length) {
            color = '0' + color;
        }
        return __unmatched_278 + ':' + color;
    }

    function __unmatched_49() {
        if (null == g_scoreEntries) {
            return 0;
        }
        for (var i = 0; i < g_scoreEntries.length; ++i) {
            if (-1 != g_playerCellIds.indexOf(g_scoreEntries[i].id)) {
                return i + 1;
            }
        }
        return 0;
    }
    if (!window.agarioNoInit) {
        var __unmatched_51 = window.location.protocol;
        var g_secure = 'https:' == __unmatched_51;
        if (g_secure && -1 == window.location.search.indexOf('fb')) {
            window.location.href = 'http://agar.io/';
        } else {
            var items = window.navigator.userAgent;
            if (-1 != items.indexOf('Android')) {
                if (window.ga) {
                    window.ga('send', 'event', 'MobileRedirect', 'PlayStore');
                }
                setTimeout(function() {
                    window.location.href = 'https://play.google.com/store/apps/details?id=com.miniclip.agar.io';
                }, 1000);
            } else if (-1 != items.indexOf('iPhone') || -1 != items.indexOf('iPad') || -1 != items.indexOf('iPod')) {
                if (window.ga) {
                    window.ga('send', 'event', 'MobileRedirect', 'AppStore');
                }
                setTimeout(function() {
                    window.location.href = 'https://itunes.apple.com/app/agar.io/id995999703?mt=8&at=1l3vajp';
                }, 1000);
            } else {
                var g_canvas_;
                var g_context;
                var g_canvas;
                var g_protocol;
                var start;
                var g_pointTree = null;
                var g_leaderboardCanvas = null;
                var g_viewX = 0;
                var g_viewY = 0;
                var g_playerCellIds = [];
                var g_playerCells = [];
                var g_cellsById = {};
                var g_cells = [];
                var g_destroyedCells = [];
                var g_scoreEntries = [];
                var g_mouseX = 0;
                var g_mouseY = 0;
                var g_moveX = -1;
                var g_moveY = -1;
                MyX = function() {
                    return g_viewX + 7071 - _g_maxX; };
                MyY = function() {
                    return g_viewY + 7071 - _g_maxY; };
                MsX = function() {
                    return g_moveX + 7071 - _g_maxX; };
                MsY = function() {
                    return g_moveY + 7071 - _g_maxY };
                var __unmatched_73 = 0;
                var g_time = 0;
                var __unmatched_75 = 0;
                var g_nick = null;
                var g_minX = -30000;
                var g_minY = -30000;
                var g_maxX = 30000;
                var g_maxY = 30000;
                var _g_minX = -20000;
                var _g_minY = -20000;
                var _g_maxX = 20000;
                var _g_maxY = 20000;
                var __g_minX = -21000;
                var __g_minY = -21000;
                var __g_maxX = 21000;
                var __g_maxY = 21000;

                var g_scale = 1;
                var g_region = null;
                var g_showSkins = false;
                var g_showNames = true;
                var g_noColors = false;
                var __unmatched_86 = false;
                var g_maxScore = 0;
                var g_showMass = true;
                var g_darkTheme = true;
                var g_viewX_ = g_viewX = ~~((g_minX + g_maxX) / 2);
                var g_viewY_ = g_viewY = ~~((g_minY + g_maxY) / 2);
                var g_scale_ = 1;
                var __unmatched_93 = '';
                var g_scorePartitions = null;
                var g_drawLines = false;
                var __unmatched_96 = false;
                var g_linesX_ = 0;
                var g_linesY_ = 0;
                var g_linesX = 0;
                var g_linesY = 0;
                var g_ABGroup = 0;
                var g_teamColors = [
                    '#333333',
                    '#FF3333',
                    '#33FF33',
                    '#3333FF'
                ];
                var g_showTrails = false;
                var g_connectSuccessful = false;
                var __unmatched_105 = 0;

                var g_zoom = 1;
                var lastScale = 1;
                var scaleDate = Date.now();
                var lastNew = Date.now();
                var lastUpdated = Date.now();

                function doNew(p) {
                    return ((p.made && p.istext && Date.now() - lastNew > 35) ? true : false);
                }

                function doUpdate(p) {
                    return (!p.made && p.istext && Date.now() - lastUpdated > 80 ? true : false);
                }
                var qkeyDown = 1;
                var g_ready = true;
                var __unmatched_110 = 0;
                var __unmatched_111 = {};
                (function() {
                    var point = window.location.search;
                    if ('?' == point.charAt(0)) {
                        point = point.slice(1);
                    }
                    for (var point = point.split('&'), __unmatched_292 = 0; __unmatched_292 < point.length; __unmatched_292++) {
                        var parts = point[__unmatched_292].split('=');
                        __unmatched_111[parts[0]] = parts[1];
                    }
                }());
                var g_touchCapable = 'ontouchstart' in window && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
                var g_splitImage = new Image();
                var canvasTest = document.createElement('canvas');
                if ('undefined' == typeof console || 'undefined' == typeof DataView || 'undefined' == typeof WebSocket || null == canvasTest || null == canvasTest.getContext || null == window.localStorage) {
                    alert('You browser does not support this game, we recommend you to use Firefox to play this');
                } else {
                    var g_regionLabels = null;
                    window.setNick = function(val) {
                        stopMovement = false;
                        spectateMode = false;
                        $('#fps').show();
                        $('#gameStats').show();
                        $('#sendMessage').show();
                        $("#teamName").prop('disabled', true);
                        HideOverlay();
                        nickName = $('#nick').val();
                        g_nick = $('#teamName').val() + $('#nick').val();
                        teamName = $('#teamName').val();
                        SendNick();
                        g_maxScore = 0;
                        window.localStorage.teamname = $('#teamName').val();
                        window.localStorage.agarname = $('#nick').val();
                        window.localStorage.agarusername = $('#username').val();
                        window.localStorage.agarpassword = $('#password').val();
                        window.localStorage.agarskin = $('#customskin').val();
                        serverToken = $('.partyToken').val();
                        socketRoom = teamName + serverToken;
                        socket.emit('joinRoom', socketRoom);
                        announcementSent = false;
                        sendJoinAnnouncement();
                    };
                    window.setRegion = SetRegion;
                    window.setSkins = function(val) {
                        g_showSkins = val;
                    };
                    window.setNames = function(val) {
                        g_showNames = val;
                    };
                    window.setDarkTheme = function(val) {
                        g_showMass = val;
                    };
                    window.setColors = function(val) {
                        g_noColors = val;
                    };
                    window.setShowMass = function(val) {
                        g_darkTheme = val;
                    };
                    window.spectate = function() {
                        spectateMode = true;
                        $('#fps').show();
                        $('#sendMessage').show();
                        teamName = $('#teamName').val();
                        serverToken = $('.partyToken').val();
                        socketRoom = teamName + serverToken;
                        socket.emit('joinRoom', socketRoom);
                        g_nick = null;
                        SendCmd(1);
                        HideOverlay();
                        sendSpectateAnnouncement();
                    };
                    window.setGameMode = function(val) {
                        if (':party' == __unmatched_93) {
                            $('#helloContainer').attr('data-party-state', '0');
                        }
                        Render(val);
                        if (':party' != val) {
                            Start();
                        }
                    };
                    window.setAcid = function(val) {
                        g_showTrails = val;
                    };
                    if (null != window.localStorage) {
                        if (null == window.localStorage.AB9) {
                            window.localStorage.AB9 = 0 + ~~(100 * Math.random());
                        }
                        g_ABGroup = +window.localStorage.AB9;
                        window.ABGroup = g_ABGroup;
                    }
                    // $.get(__unmatched_51 + '//gc.agar.io', function(code) {
                    //     var __unmatched_303 = code.split(' ');
                    //     code = __unmatched_303[0];
                    //     __unmatched_303 = __unmatched_303[1] || '';
                    //     if (-1 == ['UA'].indexOf(code)) {
                    //         g_skinNamesA.push('ussr');
                    //     }
                    //     if (g_regionsByCC.hasOwnProperty(code)) {
                    //         if ('string' == typeof g_regionsByCC[code]) {
                    //             if (!g_region) {
                    //                 SetRegion(g_regionsByCC[code]);
                    //             } else if (g_regionsByCC[code].hasOwnProperty(__unmatched_303)) {
                    //                 if (!g_region) {
                    //                     SetRegion(g_regionsByCC[code][__unmatched_303]);
                    //                 }
                    //             }
                    //         }
                    //     }
                    // }, 'text');
                    if (window.ga) {
                        window.ga('send', 'event', 'User-Agent', window.navigator.userAgent, {
                            nonInteraction: 1
                        });
                    }

                    // var g_canRefreshAds = false;
                    // var g_refreshAdsCooldown = 0;
                    // setTimeout(function() {
                    //     g_canRefreshAds = true;
                    // }, Math.max(60000 * g_refreshAdsCooldown, 3000));
                    var g_regionsByCC = {
                        AF: 'JP-Tokyo',
                        AX: 'EU-London',
                        AL: 'EU-London',
                        DZ: 'EU-London',
                        AS: 'SG-Singapore',
                        AD: 'EU-London',
                        AO: 'EU-London',
                        AI: 'US-Atlanta',
                        AG: 'US-Atlanta',
                        AR: 'BR-Brazil',
                        AM: 'JP-Tokyo',
                        AW: 'US-Atlanta',
                        AU: 'SG-Singapore',
                        AT: 'EU-London',
                        AZ: 'JP-Tokyo',
                        BS: 'US-Atlanta',
                        BH: 'JP-Tokyo',
                        BD: 'JP-Tokyo',
                        BB: 'US-Atlanta',
                        BY: 'EU-London',
                        BE: 'EU-London',
                        BZ: 'US-Atlanta',
                        BJ: 'EU-London',
                        BM: 'US-Atlanta',
                        BT: 'JP-Tokyo',
                        BO: 'BR-Brazil',
                        BQ: 'US-Atlanta',
                        BA: 'EU-London',
                        BW: 'EU-London',
                        BR: 'BR-Brazil',
                        IO: 'JP-Tokyo',
                        VG: 'US-Atlanta',
                        BN: 'JP-Tokyo',
                        BG: 'EU-London',
                        BF: 'EU-London',
                        BI: 'EU-London',
                        KH: 'JP-Tokyo',
                        CM: 'EU-London',
                        CA: 'US-Atlanta',
                        CV: 'EU-London',
                        KY: 'US-Atlanta',
                        CF: 'EU-London',
                        TD: 'EU-London',
                        CL: 'BR-Brazil',
                        CN: 'CN-China',
                        CX: 'JP-Tokyo',
                        CC: 'JP-Tokyo',
                        CO: 'BR-Brazil',
                        KM: 'EU-London',
                        CD: 'EU-London',
                        CG: 'EU-London',
                        CK: 'SG-Singapore',
                        CR: 'US-Atlanta',
                        CI: 'EU-London',
                        HR: 'EU-London',
                        CU: 'US-Atlanta',
                        CW: 'US-Atlanta',
                        CY: 'JP-Tokyo',
                        CZ: 'EU-London',
                        DK: 'EU-London',
                        DJ: 'EU-London',
                        DM: 'US-Atlanta',
                        DO: 'US-Atlanta',
                        EC: 'BR-Brazil',
                        EG: 'EU-London',
                        SV: 'US-Atlanta',
                        GQ: 'EU-London',
                        ER: 'EU-London',
                        EE: 'EU-London',
                        ET: 'EU-London',
                        FO: 'EU-London',
                        FK: 'BR-Brazil',
                        FJ: 'SG-Singapore',
                        FI: 'EU-London',
                        FR: 'EU-London',
                        GF: 'BR-Brazil',
                        PF: 'SG-Singapore',
                        GA: 'EU-London',
                        GM: 'EU-London',
                        GE: 'JP-Tokyo',
                        DE: 'EU-London',
                        GH: 'EU-London',
                        GI: 'EU-London',
                        GR: 'EU-London',
                        GL: 'US-Atlanta',
                        GD: 'US-Atlanta',
                        GP: 'US-Atlanta',
                        GU: 'SG-Singapore',
                        GT: 'US-Atlanta',
                        GG: 'EU-London',
                        GN: 'EU-London',
                        GW: 'EU-London',
                        GY: 'BR-Brazil',
                        HT: 'US-Atlanta',
                        VA: 'EU-London',
                        HN: 'US-Atlanta',
                        HK: 'JP-Tokyo',
                        HU: 'EU-London',
                        IS: 'EU-London',
                        IN: 'JP-Tokyo',
                        ID: 'JP-Tokyo',
                        IR: 'JP-Tokyo',
                        IQ: 'JP-Tokyo',
                        IE: 'EU-London',
                        IM: 'EU-London',
                        IL: 'JP-Tokyo',
                        IT: 'EU-London',
                        JM: 'US-Atlanta',
                        JP: 'JP-Tokyo',
                        JE: 'EU-London',
                        JO: 'JP-Tokyo',
                        KZ: 'JP-Tokyo',
                        KE: 'EU-London',
                        KI: 'SG-Singapore',
                        KP: 'JP-Tokyo',
                        KR: 'JP-Tokyo',
                        KW: 'JP-Tokyo',
                        KG: 'JP-Tokyo',
                        LA: 'JP-Tokyo',
                        LV: 'EU-London',
                        LB: 'JP-Tokyo',
                        LS: 'EU-London',
                        LR: 'EU-London',
                        LY: 'EU-London',
                        LI: 'EU-London',
                        LT: 'EU-London',
                        LU: 'EU-London',
                        MO: 'JP-Tokyo',
                        MK: 'EU-London',
                        MG: 'EU-London',
                        MW: 'EU-London',
                        MY: 'JP-Tokyo',
                        MV: 'JP-Tokyo',
                        ML: 'EU-London',
                        MT: 'EU-London',
                        MH: 'SG-Singapore',
                        MQ: 'US-Atlanta',
                        MR: 'EU-London',
                        MU: 'EU-London',
                        YT: 'EU-London',
                        MX: 'US-Atlanta',
                        FM: 'SG-Singapore',
                        MD: 'EU-London',
                        MC: 'EU-London',
                        MN: 'JP-Tokyo',
                        ME: 'EU-London',
                        MS: 'US-Atlanta',
                        MA: 'EU-London',
                        MZ: 'EU-London',
                        MM: 'JP-Tokyo',
                        NA: 'EU-London',
                        NR: 'SG-Singapore',
                        NP: 'JP-Tokyo',
                        NL: 'EU-London',
                        NC: 'SG-Singapore',
                        NZ: 'SG-Singapore',
                        NI: 'US-Atlanta',
                        NE: 'EU-London',
                        NG: 'EU-London',
                        NU: 'SG-Singapore',
                        NF: 'SG-Singapore',
                        MP: 'SG-Singapore',
                        NO: 'EU-London',
                        OM: 'JP-Tokyo',
                        PK: 'JP-Tokyo',
                        PW: 'SG-Singapore',
                        PS: 'JP-Tokyo',
                        PA: 'US-Atlanta',
                        PG: 'SG-Singapore',
                        PY: 'BR-Brazil',
                        PE: 'BR-Brazil',
                        PH: 'JP-Tokyo',
                        PN: 'SG-Singapore',
                        PL: 'EU-London',
                        PT: 'EU-London',
                        PR: 'US-Atlanta',
                        QA: 'JP-Tokyo',
                        RE: 'EU-London',
                        RO: 'EU-London',
                        RU: 'RU-Russia',
                        RW: 'EU-London',
                        BL: 'US-Atlanta',
                        SH: 'EU-London',
                        KN: 'US-Atlanta',
                        LC: 'US-Atlanta',
                        MF: 'US-Atlanta',
                        PM: 'US-Atlanta',
                        VC: 'US-Atlanta',
                        WS: 'SG-Singapore',
                        SM: 'EU-London',
                        ST: 'EU-London',
                        SA: 'EU-London',
                        SN: 'EU-London',
                        RS: 'EU-London',
                        SC: 'EU-London',
                        SL: 'EU-London',
                        SG: 'JP-Tokyo',
                        SX: 'US-Atlanta',
                        SK: 'EU-London',
                        SI: 'EU-London',
                        SB: 'SG-Singapore',
                        SO: 'EU-London',
                        ZA: 'EU-London',
                        SS: 'EU-London',
                        ES: 'EU-London',
                        LK: 'JP-Tokyo',
                        SD: 'EU-London',
                        SR: 'BR-Brazil',
                        SJ: 'EU-London',
                        SZ: 'EU-London',
                        SE: 'EU-London',
                        CH: 'EU-London',
                        SY: 'EU-London',
                        TW: 'JP-Tokyo',
                        TJ: 'JP-Tokyo',
                        TZ: 'EU-London',
                        TH: 'JP-Tokyo',
                        TL: 'JP-Tokyo',
                        TG: 'EU-London',
                        TK: 'SG-Singapore',
                        TO: 'SG-Singapore',
                        TT: 'US-Atlanta',
                        TN: 'EU-London',
                        TR: 'TK-Turkey',
                        TM: 'JP-Tokyo',
                        TC: 'US-Atlanta',
                        TV: 'SG-Singapore',
                        UG: 'EU-London',
                        UA: 'EU-London',
                        AE: 'EU-London',
                        GB: 'EU-London',
                        US: 'US-Atlanta',
                        UM: 'SG-Singapore',
                        VI: 'US-Atlanta',
                        UY: 'BR-Brazil',
                        UZ: 'JP-Tokyo',
                        VU: 'SG-Singapore',
                        VE: 'BR-Brazil',
                        VN: 'JP-Tokyo',
                        WF: 'SG-Singapore',
                        EH: 'EU-London',
                        YE: 'JP-Tokyo',
                        ZM: 'EU-London',
                        ZW: 'EU-London'
                    };
                    var __unmatched_119 = null;
                    window.connect = Connect;
                    var g_retryTimeout = 500;
                    var __unmatched_121 = null;
                    var __unmatched_122 = 0;
                    var g_lastMoveY = -1;
                    var g_lastMoveX = -1;
                    var text = null;
                    var g_pointNumScale = 1;
                    var g_cachedScore = null;
                    var g_cachedScore1 = null;
                    var g_cachedScore2 = null;
                    var g_cachedScore3 = null;
                    var __unmatched_128 = function() {
                        var sizeRatio = Date.now();
                        var __unmatched_305 = 1000 / 60;
                        return function() {
                            window.requestAnimationFrame(__unmatched_128);
                            var r = Date.now();
                            var step = r - sizeRatio;
                            if (step > __unmatched_305) {
                                sizeRatio = r - step % __unmatched_305;
                                if (!IsConnected() || 240 > Date.now() - __unmatched_105) {
                                    GetScore();
                                }
                                __unmatched_135();
                            }
                        };
                    }();
                    var g_skinCache = {};
                    var g_skinNamesA = 'poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook'.split(';');
                    var g_skinNamesB = [
                        '8',
                        'nasa'
                    ];
                    var g_skinNamesC = ['m\'blob'];
                    __unmatched_38.prototype = {
                        V: null,
                        x: 0,
                        y: 0,
                        i: 0,
                        b: 0
                    };
                    Cell.prototype = {
                        id: 0,
                        a: null,
                        name: null,
                        o: null,
                        O: null,
                        x: 0,
                        y: 0,
                        size: 0,
                        s: 0,
                        t: 0,
                        r: 0,
                        J: 0,
                        K: 0,
                        q: 0,
                        ba: 0,
                        Q: 0,
                        sa: 0,
                        ia: 0,
                        G: false,
                        h: false,
                        n: false,
                        R: true,
                        Y: 0,
                        X: function() {
                            var i;
                            for (i = 0; i < g_cells.length; i++) {
                                if (g_cells[i] == this) {
                                    g_cells.splice(i, 1);
                                    break;
                                }
                            }
                            delete g_cellsById[this.id];
                            i = g_playerCells.indexOf(this);
                            if (-1 != i) {
                                __unmatched_86 = true;
                                g_playerCells.splice(i, 1);
                            }
                            i = g_playerCellIds.indexOf(this.id);
                            if (-1 != i) {
                                g_playerCellIds.splice(i, 1);
                            }
                            this.G = true;
                            if (0 < this.Y) {
                                g_destroyedCells.push(this);
                            }
                        },
                        l: function() {
                            return Math.max(~~(0.3 * this.size), 24);
                        },
                        B: function(val) {
                            if (this.name = val) {
                                if (null == this.o) {
                                    this.o = new CachedCanvas(this.l(), '#FFFFFF', true, '#000000');
                                } else {
                                    this.o.M(this.l());
                                }
                                this.o.C(this.name.replace(/\:[\u4E00-\uFFFE]$/g, ''));
                            }
                        },
                        W: function() {
                            for (var num = this.I(); this.a.length > num;) {
                                var i = ~~(Math.random() * this.a.length);
                                this.a.splice(i, 1);
                            }
                            for (0 == this.a.length && 0 < num && this.a.push(new __unmatched_38(this, this.x, this.y, this.size, Math.random() - 0.5)); this.a.length < num;) {
                                i = ~~(Math.random() * this.a.length);
                                i = this.a[i];
                                this.a.push(new __unmatched_38(this, i.x, i.y, i.i, i.b));
                            }
                        },
                        I: function() {
                            var num = 10;
                            if (20 > this.size) {
                                num = 0;
                            }
                            if (this.h) {
                                num = 30;
                            }
                            var size = this.size;
                            if (!this.h) {
                                size *= g_scale;
                            }
                            size *= g_pointNumScale;
                            if (this.ba & 32) {
                                size *= 0.25;
                            }
                            return ~~Math.max(size, num);
                        },
                        qa: function() {
                            this.W();
                            for (var cell = this.a, num = cell.length, i = 0; i < num; ++i) {
                                var prevAcc = cell[(i - 1 + num) % num].b;
                                var nextAcc = cell[(i + 1) % num].b;
                                cell[i].b += (Math.random() - 0.5) * (this.n ? 3 : 1);
                                cell[i].b *= 0.7;
                                if (10 < cell[i].b) {
                                    cell[i].b = 10;
                                }
                                if (-10 > cell[i].b) {
                                    cell[i].b = -10;
                                }
                                cell[i].b = (prevAcc + nextAcc + 8 * cell[i].b) / 10;
                            }
                            for (var thisCell = this, roll = this.h ? 0 : (this.id / 1000 + g_time / 10000) % (2 * Math.PI), i = 0; i < num; ++i) {
                                var size = cell[i].i;
                                var prevAcc = cell[(i - 1 + num) % num].i;
                                var nextAcc = cell[(i + 1) % num].i;
                                if (15 < this.size && null != g_pointTree && 20 < this.size * g_scale && 0 < this.id) {
                                    var reduce = false;
                                    var x = cell[i].x;
                                    var y = cell[i].y;
                                    g_pointTree.ra(x - 5, y - 5, 10, 10, function(point) {
                                        if (point.V != thisCell && 25 > (x - point.x) * (x - point.x) + (y - point.y) * (y - point.y)) {
                                            reduce = true;
                                        }
                                    });
                                    if (!reduce && (cell[i].x < g_minX || cell[i].y < g_minY || cell[i].x > g_maxX || cell[i].y > g_maxY)) {
                                        reduce = true;
                                    }
                                    if (reduce) {
                                        if (0 < cell[i].b) {
                                            cell[i].b = 0;
                                        }
                                        cell[i].b -= 1;
                                    }
                                }
                                size += cell[i].b;
                                if (0 > size) {
                                    size = 0;
                                }
                                size = this.n ? (19 * size + this.size) / 20 : (12 * size + this.size) / 13;
                                cell[i].i = (prevAcc + nextAcc + 8 * size) / 10;
                                prevAcc = 2 * Math.PI / num;
                                nextAcc = this.a[i].i;
                                if (this.h && 0 == i % 2) {
                                    nextAcc += 5;
                                }
                                cell[i].x = this.x + Math.cos(prevAcc * i + roll) * nextAcc;
                                cell[i].y = this.y + Math.sin(prevAcc * i + roll) * nextAcc;
                            }
                        },
                        P: function() {
                            if (0 >= this.id) {
                                return 1;
                            }
                            var posRatio;
                            posRatio = (g_time - this.Q) / 120;
                            posRatio = 0 > posRatio ? 0 : 1 < posRatio ? 1 : posRatio;
                            var sizeRatio = 0 > posRatio ? 0 : 1 < posRatio ? 1 : posRatio;
                            this.l();
                            if (this.G && 1 <= sizeRatio) {
                                var i = g_destroyedCells.indexOf(this);
                                if (-1 != i) {
                                    g_destroyedCells.splice(i, 1);
                                }
                            }
                            this.x = posRatio * (this.J - this.s) + this.s;
                            this.y = posRatio * (this.K - this.t) + this.t;
                            this.size = sizeRatio * (this.q - this.r) + this.r;
                            return sizeRatio;
                        },
                        N: function() {
                            return 0 >= this.id ? true : this.x + this.size + 40 < g_viewX - g_protocol / 2 / g_scale || this.y + this.size + 40 < g_viewY - start / 2 / g_scale || this.x - this.size - 40 > g_viewX + g_protocol / 2 / g_scale || this.y - this.size - 40 > g_viewY + start / 2 / g_scale ? false : true;
                        },
                        drawUnderlay: function(context) {
                            if (this.N()) {

                                var SPLIT_RADIUS = 800;

                                var zoom = 1 / g_scale;
                                var haloSize = Math.max(10, 10 * zoom * 0.5);
                                var haloDistance = Math.max(15, 15 * zoom * 0.5);
                                var innerRadius = this.size + haloDistance;
                                var outerRadius = innerRadius + haloSize;

                                context.save();

                                i = this.P();

                                switchCurrentBlob('auto');

                                var isPlayerAlive = ztapi.playerCells().length > 0;
                                var isPlayerCell = _.contains(ztapi.playerCells(), this);

                                var mass = getCellMass(this);

                                if (isPlayerAlive) {

                                    if (!isPlayerCell) {

                                        var indicator = getEatIndicator(this);

                                        // Draw Indicators
                                        if (showIndicators) {
                                            if (indicator.color && mass > 15 && !this.h) {
                                                context.globalAlpha = 0.6;
                                                context.fillStyle = indicator.color;
                                                context.beginPath();
                                                context.arc(this.x, this.y, outerRadius, 0, 2 * Math.PI, false);
                                                context.arc(this.x, this.y, innerRadius, 0, 2 * Math.PI, true);
                                                context.closePath();
                                                context.fill();
                                            }

                                            // Draw Enemy Split Guide
                                            if (showEnemySplitGuides) {
                                                if (indicator.split > 0 && !this.h) {
                                                    context.lineWidth = 2;
                                                    context.strokeStyle = indicator.color;

                                                    context.globalAlpha = 1;
                                                    context.beginPath();
                                                    context.arc(this.x, this.y, this.size + SPLIT_RADIUS, 0, 2 * Math.PI, false);
                                                    context.closePath();
                                                    context.stroke();
                                                }
                                            }
                                        }
                                    } else if (showCursorLines) {
                                        context.save();
                                        context.strokeStyle = '#E3F2FD';
                                        context.lineWidth = 2;
                                        context.lineCap = 'round';
                                        context.lineJoin = 'round';
                                        context.globalAlpha = 0.8;
                                        context.beginPath();
                                        context.moveTo(this.x, this.y);
                                        context.lineTo(g_moveX, g_moveY);
                                        context.stroke();
                                        context.restore();
                                    }

                                    if (this == getSelectedBlob()) {
                                        context.fillStyle = "#FFFFFF";
                                        context.strokeStyle = "#FFFFFF";

                                        if (showIndicators) {
                                            // Draw Selected Blob Indicator
                                            context.globalAlpha = 0.8;
                                            context.beginPath();
                                            context.arc(this.x, this.y, outerRadius, 0, 2 * Math.PI, false);
                                            context.arc(this.x, this.y, innerRadius, 0, 2 * Math.PI, true);
                                            context.closePath();
                                            context.fill();
                                        }

                                        if (showPlayerSplitGuide) {
                                            // Draw Player Outer Split Guide
                                            context.globalAlpha = 1;
                                            context.lineWidth = 4;
                                            context.beginPath();
                                            context.arc(this.x, this.y, this.size + SPLIT_RADIUS, 0, 2 * Math.PI, false);
                                            context.closePath();
                                            context.stroke();

                                            // Draw Player Inner Split Guide
                                            context.globalAlpha = 0.4;
                                            context.lineWidth = 2;
                                            context.beginPath();
                                            context.arc(this.x, this.y, SPLIT_RADIUS, 0, 2 * Math.PI, false);
                                            context.closePath();
                                            context.stroke();
                                        }
                                    }

                                }

                                context.restore();
                            }

                        },
                        w: function(context) {
                            if (this.N()) {
                                this.Y++;
                                this.R = true;

                                context.save();

                                var fade = this.P();
                                if (this.G) {
                                    context.globalAlpha *= 1 - fade;
                                }

                                var render = true;
                                var renderSkin = false;
                                var playerDetails = getPlayerDetailsForCell(this);

                                // if (g_nick == this.name && getCellMass(this) >= 1000) {
                                //     showPellets = false;
                                // }
                                // Cell is a virus
                                if (this.h) { // virus

                                    if (showTransparentVirus) {

                                        context.globalAlpha = 0.6;
                                        context.lineWidth = 8;
                                        context.strokeStyle = '#800000'; //Terjanq
                                        context.fillStyle = '#C5908E';
                                    } else {
                                        context.fillStyle = this.color;
                                    }
                                }

                                // Cell is feed
                                else if (this.size >= 36 && this.size <= 38 && this.name == "") {
                                    this.color = ColorLuminance(this.color, -0.3);
                                    //var color = getColorForBlob(this);
                                    if (showRainbowFeeds) {
                                        context.fillStyle = this.color;
                                        context.strokeStyle = this.color;
                                    } else {
                                        context.fillStyle = '#0288D1';
                                        context.strokeStyle = '#0288D1';
                                    }
                                }
                                // Cell is a pellet
                                else if (this.size < 30) {
                                    this.color = ColorLuminance(this.color, -0.2);

                                    if (showRainbowPellets) {
                                        context.fillStyle = this.color;
                                        context.strokeStyle = this.color;
                                    } else {
                                        //terjanq
                                        if (!this.color2) this.color2 = ColorLuminance(getColour(this.color), -0.3);
                                        context.fillStyle = this.color2;
                                        context.strokeStyle = this.color2;
                                    }

                                    render = showPellets;
                                }
                                // Cell is player
                                else {

                                    var color = ColorLuminance(getColorForBlob(this), -0.2),
                                        color2;


                                    if (this.name == "REAL TERJANQ" && this.size < 300) color2 = bright[~~(Math.random() * 4)]
                                    context.lineWidth = 5;
                                    // console.log(color);
                                    // context.strokeStyle = ColorLuminance(color, -0.1);
                                    context.fillStyle = color2 || color;




                                    renderSkin = true;
                                }

                                if (render) {
                                    context.beginPath();
                                    context.arc(this.x, this.y, this.size + 5, 0, 2 * Math.PI, false);
                                    context.closePath();

                                    if (this.h) { // isVirus
                                        if (!showTransparentVirus) {
                                            this.qa();
                                            context.beginPath();
                                            var i = this.I();
                                            context.moveTo(this.a[0].x, this.a[0].y);
                                            value = 1;
                                            for (; value <= i; ++value) {
                                                var c = value % i;
                                                context.lineTo(this.a[c].x, this.a[c].y);
                                            }
                                            context.closePath();
                                        }

                                        context.stroke();
                                    }


                                    var skin = resolveSkin(this, playerDetails, g_skinNamesA, g_skinCache, g_showSkins, __unmatched_93);

                                    if (showTransparent) {
                                        context.globalAlpha *= 0.9;
                                    }

                                    var blendMode;
                                    if (playerDetails && playerDetails.colorMode.blend && showCustomSkins) {
                                        if (blendModes.indexOf(playerDetails.colorMode.blend) != -1) {
                                            blendMode = playerDetails.colorMode.blend;
                                        }
                                    }

                                    if (!blendMode) {
                                        context.fill();
                                        // context.stroke();
                                    }

                                    if (skin && renderSkin) {
                                        context.save();
                                        context.clip();

                                        var ss = Math.min(skin.width, skin.height);
                                        var sx = (skin.width - ss) / 2;
                                        var sy = (skin.height - ss) / 2;

                                        var size = this.size + 5;

                                        context.drawImage(skin, sx, sy, ss, ss, this.x - size, this.y - size, 2 * size, 2 * size);
                                        context.restore();
                                    }

                                    if (blendMode && renderSkin) {
                                        context.save();
                                        context.globalCompositeOperation = blendMode;
                                        context.fill();
                                        context.restore();
                                    }

                                    var relocateText = (playerDetails && playerDetails.colorMode.label == 'bottom' && showCustomSkins);

                                    context.globalAlpha = 1;

                                    // Text rendering voodoo
                                    //console.log(g_playerCells.indexOf(this).length);
                                    var i = -1 != g_playerCells.indexOf(this);
                                    var isSimpleDrawing = this.y;
                                    //var cellMass = getCellMass(this);
                                    //var ownMass = ~~(MyScore()/100);

                                    //if (0 != this.id && (g_nick != this.name || showOwnPlayerName) && (g_nick == this.name || showPlayerNames || i) && (g_nick == this.name || cellMass >= 20) && this.name && this.o && (null == skin || -1 == g_skinNamesB.indexOf(num))) {
                                    //if (g_zoom > 0.2 && (cellMass < 200) || cellMass > 200) {
                                    //name

                                    //  console.log(g_scale);

                                    compareScale();
                                    if (this.size * g_scale > 10 && 0 != this.id && (g_nick != this.name || showOwnPlayerName) && (g_nick == this.name || showPlayerNames || i) && (g_nick == this.name || getCellMass(this) >= 8) && this.name && this.o && (null == skin || -1 == g_skinNamesB.indexOf(num))) {
                                        skin = this.o;

                                        if (showCustomSkins > 1 || playerDetails) {
                                            skin.C(this.name.replace(/\:[\u4E00-\uFFFE]$/g, ''));
                                        } else {
                                            skin.C(this.name);
                                        }
                                        var num = 0 >= this.id ? 1 : Math.ceil(g_scale * 10) / 10;

                                        skin.istext = true;
                                        skin.M(this.l() * 1.4); // terjanq-temp
                                        skin.ea(num);


                                        var skin = skin.L();
                                        var g_width, g_height;
                                        var k = skin.width / skin.height;

                                        var l = this.l() * 1.4;
                                        //skin.getContext('2d').scale(num, num);
                                        var zoom = Math.max(g_scale, 1);
                                        g_width = k * l;
                                        g_height = l;
                                        // skin.width = g_width;
                                        // skin.height = g_height;




                                        if (relocateText) {
                                            context.drawImage(skin, this.x - (g_width / 2), isSimpleDrawing + (g_height), g_width, g_height);
                                            isSimpleDrawing += skin.height / 2 / num - 4;
                                        } else {
                                            context.drawImage(skin, this.x - (g_width / 2), isSimpleDrawing - (g_height / 2), g_width, g_height);
                                        }
                                        isSimpleDrawing += g_height * 0.8;
                                    }
                                    // draw masss
                                    if ((this.size * g_scale > 20 && (g_nick == this.name || getCellMass(this) >= 20) && showBlobMass) || this.h) {
                                        if (null == this.O) {
                                            this.O = new CachedCanvas(this.l() / 2, '#FFFFFF', true, '#000000');
                                        }
                                        i = this.O;


                                        i.C(~~(this.size * this.size / 100));
                                        i.M(this.l());


                                        var num = Math.ceil(100 * g_scale) / 100;
                                        i.ea(num);

                                        skin = i.L();

                                        var k = skin.width / skin.height;
                                        var l = this.l();
                                        var zoom =
                                            g_width = ~~(k * l);
                                        g_height = ~~(l);


                                        if (relocateText) {
                                            context.drawImage(skin, this.x - (g_width / 2), isSimpleDrawing + (g_height), g_width, g_height);
                                        } else {
                                            context.drawImage(skin, this.x - (g_width / 2), isSimpleDrawing - (g_height / 2), g_width, g_height);
                                        }
                                    }
                                }

                                context.restore();
                            }
                        }
                    };
                    CachedCanvas.prototype = {
                        F: '',
                        S: '#000000',
                        U: false,
                        v: '#000000',
                        u: 16,
                        p: null,
                        T: null,
                        k: false,
                        D: 1,
                        made: true,
                        istext: true,
                        M: function(val) {
                            if (Math.min(val, this.u) / Math.max(val, this.u) <= 0.96 || this.k);
                            this.k != val && (this.u = ~~val, this.k = !0)
                        },
                        ea: function(val) {
                            if (this.D != val) {
                                this.D = val;
                                // this.k = true;
                            }
                        },
                        setStrokeColor: function(val) {
                            if (this.v != val) {
                                this.v = val;
                                this.k = true;
                            }
                        },
                        C: function(val) {
                            var oo;


                            if (!isNaN(val) && !isNaN(this.F) && this.F != 0 && val != 0 && this.F != val) {
                                // console.log(val, Math.abs((val-this.F)/this.F));
                                // if (Math.abs((val-this.F)/this.F)<0.012){

                                this.k = !0;
                                this.F = val;
                                this.ismass = true;
                                // }
                            }

                            if (this.F == '' && this.F != val) {
                                if (!isNaN(val)) this.ismass = true;
                                this.F = val;
                                this.k = true;
                                return;
                            }


                        },
                        L: function() {
                            if (null == this.p) {
                                this.p = document.createElement('canvas');
                                this.T = this.p.getContext('2d');
                            }

                            if (this.k && (doNew(this) || doUpdate(this) || this.ismass)) {
                                if (this.istext && this.made) {
                                    this.made = false;
                                    lastNew = Date.now();
                                    // console.log("new: ", this.F, " font: ", this.u);
                                } else if (this.istext) {
                                    lastUpdated = Date.now();
                                    //console.log("upd: ", this.F, " font: ", this.u);
                                }

                                this.k = false;

                                var canvas = this.p;
                                var context = this.T;
                                var value = this.F;
                                var scale = this.D;
                                var size = this.u;
                                var font = 'bold ' + size + 'px Ubuntu';
                                context.font = font;
                                var extra = ~~(0.2 * size);
                                canvas.width = (context.measureText(value).width + 6) * scale;
                                canvas.height = (size + extra) * scale;
                                context.font = font;
                                context.scale(scale, scale);
                                context.globalAlpha = 1;
                                // if (showTextShadows) {
                                //     context.lineWidth = 4 + extra / 2.7;
                                // }
                                context.strokeStyle = this.v;
                                context.fillStyle = this.S;
                                // if (this.U) {
                                //     context.strokeText(value, 3, size - extra / 2);
                                // }
                                context.fillText(value, 3, size - extra / 2);

                            }
                            this.istext = false;

                            return this.p;
                        }
                    };
                    if (!Date.now) {
                        Date.now = function() {
                            return new Date().getTime();
                        };
                    }
                    (function() {
                        for (var __unmatched_347 = [
                                'ms',
                                'moz',
                                'webkit',
                                'o'
                            ], i = 0; i < __unmatched_347.length && !window.requestAnimationFrame; ++i) {
                            window.requestAnimationFrame = window[__unmatched_347[i] + 'RequestAnimationFrame'];
                            window.cancelAnimationFrame = window[__unmatched_347[i] + 'CancelAnimationFrame'] || window[__unmatched_347[i] + 'CancelRequestAnimationFrame'];
                        }
                        if (!window.requestAnimationFrame) {
                            window.requestAnimationFrame = function(__unmatched_349) {
                                return setTimeout(__unmatched_349, 1000 / 50);
                            };
                            window.cancelAnimationFrame = function(__unmatched_350) {
                                clearTimeout(__unmatched_350);
                            };
                        }
                    }());
                    var QTreeFactory = {
                        ka: function(params) {
                            function Node(left, top, width, height, depth) {
                                this.x = left;
                                this.y = top;
                                this.j = width;
                                this.g = height;
                                this.depth = depth;
                                this.items = [];
                                this.c = [];
                            }
                            var maxItems = params.ma || 2;
                            var maxDepth = params.na || 4;
                            Node.prototype = {
                                x: 0,
                                y: 0,
                                j: 0,
                                g: 0,
                                depth: 0,
                                items: null,
                                c: null,
                                H: function(rect) {
                                    for (var i = 0; i < this.items.length; ++i) {
                                        var item = this.items[i];
                                        if (item.x >= rect.x && item.y >= rect.y && item.x < rect.x + rect.j && item.y < rect.y + rect.g) {
                                            return true;
                                        }
                                    }
                                    if (0 != this.c.length) {
                                        var thisNode = this;
                                        return this.$(rect, function(n) {
                                            return thisNode.c[n].H(rect);
                                        });
                                    }
                                    return false;
                                },
                                A: function(rect, callback) {
                                    for (var i = 0; i < this.items.length; ++i) {
                                        callback(this.items[i]);
                                    }
                                    if (0 != this.c.length) {
                                        var node = this;
                                        this.$(rect, function(n) {
                                            node.c[n].A(rect, callback);
                                        });
                                    }
                                },
                                m: function(item) {
                                    if (0 != this.c.length) {
                                        this.c[this.Z(item)].m(item);
                                    } else if (this.items.length >= maxItems && this.depth < maxDepth) {
                                        this.ha();
                                        this.c[this.Z(item)].m(item);
                                    } else {
                                        this.items.push(item);
                                    }
                                },
                                Z: function(item) {
                                    return item.x < this.x + this.j / 2 ? item.y < this.y + this.g / 2 ? 0 : 2 : item.y < this.y + this.g / 2 ? 1 : 3;
                                },
                                $: function(rect, callback) {
                                    return rect.x < this.x + this.j / 2 && (rect.y < this.y + this.g / 2 && callback(0) || rect.y >= this.y + this.g / 2 && callback(2)) || rect.x >= this.x + this.j / 2 && (rect.y < this.y + this.g / 2 && callback(1) || rect.y >= this.y + this.g / 2 && callback(3)) ? true : false;
                                },
                                ha: function() {
                                    var depth = this.depth + 1;
                                    var width = this.j / 2;
                                    var height = this.g / 2;
                                    this.c.push(new Node(this.x, this.y, width, height, depth));
                                    this.c.push(new Node(this.x + width, this.y, width, height, depth));
                                    this.c.push(new Node(this.x, this.y + height, width, height, depth));
                                    this.c.push(new Node(this.x + width, this.y + height, width, height, depth));
                                    depth = this.items;
                                    this.items = [];
                                    for (width = 0; width < depth.length; width++) {
                                        this.m(depth[width]);
                                    }
                                },
                                clear: function() {
                                    for (var i = 0; i < this.c.length; i++) {
                                        this.c[i].clear();
                                    }
                                    this.items.length = 0;
                                    this.c.length = 0;
                                }
                            };
                            var __unmatched_355 = {
                                x: 0,
                                y: 0,
                                j: 0,
                                g: 0
                            };
                            return {
                                root: new Node(params.ca, params.da, params.oa - params.ca, params.pa - params.da, 0),
                                m: function(item) {
                                    this.root.m(item);
                                },
                                A: function(rect, callback) {
                                    this.root.A(rect, callback);
                                },
                                ra: function(left, top, width, height, callback) {
                                    __unmatched_355.x = left;
                                    __unmatched_355.y = top;
                                    __unmatched_355.j = width;
                                    __unmatched_355.g = height;
                                    this.root.A(__unmatched_355, callback);
                                },
                                H: function(rect) {
                                    return this.root.H(rect);
                                },
                                clear: function() {
                                    this.root.clear();
                                }
                            };
                        }
                    };
                    var __unmatched_134 = function() {
                        var __unmatched_388 = new Cell(0, 0, 0, 32, '#ED1C24', '');
                        var __unmatched_389 = document.createElement('canvas');
                        __unmatched_389.width = 32;
                        __unmatched_389.height = 32;
                        var rect = __unmatched_389.getContext('2d');
                        return function() {
                            if (0 < g_playerCells.length) {
                                __unmatched_388.color = g_playerCells[0].color;
                                __unmatched_388.B(g_playerCells[0].name);
                            }
                            rect.clearRect(0, 0, 32, 32);
                            rect.save();
                            rect.translate(16, 16);
                            rect.scale(0.4, 0.4);
                            __unmatched_388.w(rect);
                            rect.restore();
                        };
                    }();
                    $(function() {
                        __unmatched_134();
                    });
                    $(function() {
                        if (+window.localStorage.wannaLogin) {
                            if (window.localStorage.loginCache) {
                                __unmatched_43(window.localStorage.loginCache);
                            }
                            if (window.localStorage.fbPictureCache) {
                                $('.agario-profile-picture').attr('src', window.localStorage.fbPictureCache);
                            }
                        }
                    });
                    window.facebookLogin = function() {
                        window.localStorage.wannaLogin = 1;
                    };
                    window.fbAsyncInit = function() {
                        function __unmatched_393() {
                            window.localStorage.wannaLogin = 1;
                            if (null == window.FB) {
                                alert('You seem to have something blocking Facebook on your browser, please check for any extensions');
                            } else {
                                window.FB.login(function(__unmatched_394) {
                                    UpdateScale(__unmatched_394);
                                }, {
                                    scope: 'public_profile, email'
                                });
                            }
                        }
                        window.FB.init({
                            appId: '677505792353827',
                            cookie: true,
                            xfbml: true,
                            status: true,
                            version: 'v2.2'
                        });
                        window.FB.Event.subscribe('auth.statusChange', function(__unmatched_395) {
                            if (+window.localStorage.wannaLogin) {
                                if ('connected' == __unmatched_395.status) {
                                    UpdateScale(__unmatched_395);
                                } else {
                                    __unmatched_393();
                                }
                            }
                        });
                        window.facebookLogin = __unmatched_393;
                    };
                    window.logout = function() {
                        FBToken = null;
                        $('#helloContainer').attr('data-logged-in', '0');
                        $('#helloContainer').attr('data-has-account-data', '0');
                        delete window.localStorage.wannaLogin;
                        delete window.localStorage.loginCache;
                        delete window.localStorage.fbPictureCache;
                        Start();
                    };
                    var __unmatched_135 = function() {
                        function ParseString(__unmatched_405, __unmatched_406, __unmatched_407, __unmatched_408, __unmatched_409) {
                            var canvas = __unmatched_406.getContext('2d');
                            var width = __unmatched_406.width;
                            __unmatched_406 = __unmatched_406.height;
                            __unmatched_405.color = __unmatched_409;
                            __unmatched_405.B(__unmatched_407);
                            __unmatched_405.size = __unmatched_408;
                            canvas.save();
                            canvas.translate(width / 2, __unmatched_406 / 2);
                            __unmatched_405.w(canvas);
                            canvas.restore();
                        }
                        for (var __unmatched_397 = new Cell(-1, 0, 0, 32, '#5bc0de', ''), __unmatched_398 = new Cell(-1, 0, 0, 32, '#5bc0de', ''), __unmatched_399 = '#0791ff #5a07ff #ff07fe #ffa507 #ff0774 #077fff #3aff07 #ff07ed #07a8ff #ff076e #3fff07 #ff0734 #07ff20 #ff07a2 #ff8207 #07ff0e'.split(' '), __unmatched_400 = [], j = 0; j < __unmatched_399.length; ++j) {
                            var sub = j / __unmatched_399.length * 12;
                            var playerOwned = 30 * Math.sqrt(j / __unmatched_399.length);
                            __unmatched_400.push(new Cell(-1, Math.cos(sub) * playerOwned, Math.sin(sub) * playerOwned, 10, __unmatched_399[j], ''));
                        }
                        __unmatched_41(__unmatched_400);
                        var data = document.createElement('canvas');
                        data.getContext('2d');
                        data.width = data.height = 70;
                        ParseString(__unmatched_398, data, '', 26, '#ebc0de');
                        return function() {
                            $('.cell-spinner').filter(':visible').each(function() {
                                var __unmatched_412 = $(this);
                                var g = Date.now();
                                var y = this.width;
                                var __unmatched_415 = this.height;
                                var __unmatched_416 = this.getContext('2d');
                                __unmatched_416.clearRect(0, 0, y, __unmatched_415);
                                __unmatched_416.save();
                                __unmatched_416.translate(y / 2, __unmatched_415 / 2);
                                for (var g_numFrames = 0; 10 > g_numFrames; ++g_numFrames) {
                                    __unmatched_416.drawImage(data, (0.1 * g + 80 * g_numFrames) % (y + 140) - y / 2 - 70 - 35, __unmatched_415 / 2 * Math.sin((0.001 * g + g_numFrames) % Math.PI * 2) - 35, 70, 70);
                                }
                                __unmatched_416.restore();
                                if (__unmatched_412 = __unmatched_412.attr('data-itr')) {
                                    __unmatched_412 = __unmatched_14(__unmatched_412);
                                }
                                ParseString(__unmatched_397, this, __unmatched_412 || '', +$(this).attr('data-size'), '#5bc0de');
                            });
                            $('#statsPellets').filter(':visible').each(function() {
                                $(this);
                                var __unmatched_418 = this.width;
                                var __unmatched_419 = this.height;
                                this.getContext('2d').clearRect(0, 0, __unmatched_418, __unmatched_419);
                                for (__unmatched_418 = 0; __unmatched_418 < __unmatched_400.length; __unmatched_418++) {
                                    ParseString(__unmatched_400[__unmatched_418], this, '', __unmatched_400[__unmatched_418].size, __unmatched_400[__unmatched_418].color);
                                }
                            });
                        };
                    }();
                    window.createParty = function() {
                        Render(':party');
                        __unmatched_119 = function(__unmatched_420) {
                            __unmatched_47('/#' + window.encodeURIComponent(__unmatched_420));
                            $('.partyToken').val(window.encodeURIComponent(__unmatched_420));
                            $('#helloContainer').attr('data-party-state', '1');
                        };
                        Start();
                    };
                    window.joinParty = RenderLoop;
                    window.cancelParty = function() {
                        __unmatched_47('/');
                        $('#helloContainer').attr('data-party-state', '0');
                        Render('');
                        Start();
                    };
                    var cached = [];
                    var __unmatched_137 = 0;
                    var isVirus = '#000000';
                    var g_playerCellDestroyed = false;
                    var __unmatched_140 = false;
                    var __unmatched_141 = 0;
                    var __unmatched_142 = 0;
                    var __unmatched_143 = 0;
                    var __unmatched_144 = 0;
                    var __unmatched_145 = 0;
                    setInterval(function() {
                        if (__unmatched_140) {
                            cached.push(MyScore() / 100);
                        }
                    }, 1000 / 60);
                    setInterval(function() {
                        var id = __unmatched_49();
                        if (0 != id) {
                            ++__unmatched_143;
                            __unmatched_145 = Math.min(__unmatched_145, id);
                        }
                    }, 1000);

                    $(function() {
                        $(Init);
                    });
                }
            }
        }

        //     // bots //

    }
}(window, window.jQuery));



if (typeof module === 'object') {
    module.exports = Stats;
}
