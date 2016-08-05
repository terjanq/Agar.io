var tags=[
        '',
        '✿',
        'Ʋ₮✤#A827A8',
        'Hɪ:#FF00FF',
        '㉿',
        'ƵŦ✿#2196F3',
        '《ℝ》#75C41F',
        'ƬψƬ ☢#46DBD1',
        'Ɲ̶ℱ♔#e0000d',
        'IÐ✺#2A8F15',

    ];
   // $("body").css("background-color", "#fff");
    $(".aTitle").html("terjanq++");
     $(".lbTitle").html("terjanq++").css("color", "#e60000");
     // $("#canvas").css("background-color", "#f4eefb");
     // GirdColor = "#d7c9ef";

    // window.onContextMenu = function() { return false; };
    // document.getElementById("canvas").onselectstart = function() { return false; };

    document.getElementsByClassName("joinParty")[0].onclick = function() { joinParty($('.partyToken').val().trim()); return false; }
        // Add a div for our private server dropdown and connect button
        $(".agarioProfilePanel:nth-last-child(1):not(.hotkeys)").after('<div id="privateServerBox" class="agario-panel agario-side-panel"></div>');
        $("#nick").attr("maxlength", 30);


       // Add the private server select dropdown input box
        $("#privateServerBox").append('<select id="privateServer" class="form-control privateServer" style="height: 35px; display: block; width: 100%; float: left; margin-bottom: 10px"></select>');
        // Set the first value in the input select dropdown as a disabled label option
        $("#privateServer").append('<option value="Private Servers" disabled default selected style="display: none;">Private Servers</option><option value="ws://dmr.secureobscure.com:4444">HungerGames (Auto-remerge)</option><option value="ws://149.202.87.51:443">FFA1(EU)</option><option value="ws://149.202.87.51:446">FFA2(EU)</option><option value="ws://158.69.23.150:443">FFA1(US)</option><option value="ws://158.69.23.150:446">FFA2(US)</option>');
        // Add the connect button after the select dropdown, this updates the partyToken for minimap/chat in private servers!
        $("#privateServer").after('<button class="btn btn-ter joinPrivate1" onclick="connect($(\'#privateServer\').val());">Connect</button>');
        // Attempt to grab the list of private servers currently running

        $("#privateServerBox").after('<div id="bots" class="agario-panel agario-side-panel"></div>');
        // $("#bots").after('<div id="pellets" class="agario-panel agario-side-panel"></div>');
        // $("#pellets").append('<span style="line-height:30px; font-weight:400">Pellets\' colour</span>').append('<button onclick="localStorage.setItem(\'UserColours\', $(\'#pelletsList\').val())" class="btn btn-ter botstart">change</button>');
        // $("#pellets").append('<input  id="pelletsList" class="nokey form-control" style="width:100%; margin-top:10px; background:#000!important" type="text"placeholder="#FF0033,#FF00CC,#CC00FF">');
        // if(localStorage.getItem("UserColours")) $("#pelletsList").val(localStorage.getItem("UserColours"));

        $('#bots').append('<div style="display:block; float:right; width:100%"></div>');
        $('#bots div').append('<button id="botstop" class="btn btn-ter botstop">stop</button>')
        .append('<button id="botstart" class="btn btn-ter botstart">start</button>')
        .append('<button id="mouse" class="btn btn-ter mouse"> </button>');
        $('#bots').append('<div id="botstatus" style="border-radius:3px; margin-top:10px;  padding:5px; display:block; float:left; width:100%; background:#000"><span>Status: </span><span class="botstatus2">sleeping</span></div>');


        $("head link[rel='stylesheet']").last().after("<style>.joinPrivate1 { width: 100%; background: #52256F!important}</style>");
        $("head link[rel='stylesheet']").last().after("<style>.joinPrivate1:hover { background: #421F63!important}</style>");
        $("head link[rel='stylesheet']").last().after("<style>.mouse.follow{opacity:0.3; background-color: #302B54 !important}");
        $("head link[rel='stylesheet']").last().after("<style>.mouse { float: left; height: 30px; width: 10%; background: #E0EEEE center/90% 90% url(https://cdn4.iconfinder.com/data/icons/fevzicons-1/100/noun_183251-512.png) no-repeat;}</style>");
        $("head link[rel='stylesheet']").last().after("<style>.mouse:hover{opacity:0.3; background-color: #302B54 !important}");
        $("head link[rel='stylesheet']").last().after("<style>.botstart { float: left; width: 40%; background: #298C0B!important}</style>");
        $("head link[rel='stylesheet']").last().after("<style>.botstart:hover{ color: #FFF; background: #1F6B08!important}</style>");
        $("head link[rel='stylesheet']").last().after("<style>.botstop { float: left; width: 40%; background: #DB0A23!important}</style>");
        $("head link[rel='stylesheet']").last().after("<style>.botstop:hover { color:#fff; background: #B2081C!important}</style>");
        $("head link[rel='stylesheet']").last().after("<style>#pelletsList:focus { position:relative; z-index:2000!important; width:500px!important; }</style>");
        $("head link[rel='stylesheet']").last().after("<style>.btn-ter{margin: 2px;}</style>");
        $("head link[rel='stylesheet']").last().after("<style>.botstatus2{font-weight: 700; color:#DB0A23; margin-left:10px}</style>");
        $("head link[rel='stylesheet']").last().after("<style>.botatwork{color:#298C0B!important}</style>");
       // $("h2.title").replaceWith('<h2 class="title">ṯẹṛjạṉq最佳</h2>');

        $("span.title").replaceWith('<span class="title">Lєα∂єявσαя∂</span>');
        $("#teamNameContainer").css("position", "relative");
        $("#teamNameContainer").append('<select id="tags" class="form-control" style="width:20px;height:20px;display:block;position:absolute;right:0;top:10px;z-index:100"><option disabled default style="display:none"></option></select>');
        $.each(tags, function(key, value){
               var v = value+"#FFF";
               var vals = v.split("#");
            $("#tags").append('<option style="font-weight:600!important;color:#'+vals[1]+'">'+vals[0]+'</option>');
        });
        $("#tags").on("change", function(){$("#teamName").val($("#tags option:selected").text())});

         document.forms[0].getElementsByTagName("button")[0].onclick = function(){

            if($("#nick").val().indexOf("#0")>-1){
                $("#nick").val($("#nick").val().replace("#0", ""));

                $("#color").val($("#color").val().replace(/,[^,]*\)/, ",0)")).change();

            }

            if($("#nick").val().indexOf("#1")>-1){
                $("#nick").val($("#nick").val().replace("#1", ""));
                $("#color").val($("#color").val().replace(/,[^,]*\)/, ",1)")).change();
            }
            setNick(document.getElementById("nick").value);
            return false;



         };
