var BDBridge = window.BDBridge || (function(){

    var self;
    var CONFIG = {
        BD_BRIDGE_OPEN : 1,
        BD_BRIDGE_ROOT : "http://qiao.baidu.com/v3/"
    };

    document.cookie = 'VERSION=2,0,0,0';
    
    if ((CONFIG.BD_BRIDGE_OPEN == 1) && (typeof window["BD_BRIDGE_LOADED"] == "undefined")) {
        window["BD_BRIDGE_LOADED"] = 1;
        var script = document.createElement("script");
        script.type="text/javascript";
        script.charset = "UTF-8";
        script.src = CONFIG.BD_BRIDGE_ROOT + "asset/js/bw.js?v=20130902";
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    
    
    return self = {
    
        BD_BRIDGE_OPEN : CONFIG.BD_BRIDGE_OPEN,
        BD_BRIDGE_ROOT : CONFIG.BD_BRIDGE_ROOT,
        BD_BRIDGE_RCV_ROOT : "http://r.qiao.baidu.com/",
        BD_BRIDGE_DATA : {mainid : "120282936", SITE_ID : "7ed1cdb9aea08bbc639287d211653936", siteid : "2632330", userName: '南京泛盈'},
        OPEN_MODULAR : 11111,
                BD_BRIDGE_SPECIAL :  [] ,
        
                BD_BRIDGE_STYLE_ITEM : 
        [        {
            pageid : "0",
            
           
                        BD_BRIDGE_GROUP:  [ '1' - 0 , '2' - 0 ] ,
            
            BD_BRIDGE_ICON_CONFIG : {
                iconlvtype : "1" - 0,
                background : {
                    color : "",
                    url   : "http://qiao.baidu.com/v3/res/iconbg/02.jpg",
                    bgcolor : "#275f87"
                },
                head : {
                    url    : "http://qiao.baidu.com/v3/res/iconhead/12.png",
                    width  : "131" - 0,
                    height : "70" - 0
                },
                button : {
                    color : "",
                    url   : "http://qiao.baidu.com/v3/res/iconbtn/12.png",
                    text  : "#bd4b13"
                },
                flow     : "1" - 0,
                position : "2" - 0,
                special : "0"
            },
            BD_BRIDGE_INVITE_CONFIG : {
                on : "0" - 0,
                show : {
                    pos : "0" - 0,
                    width : "320" - 0,
                    height : "150" - 0,
                    font : "宋体",
                    fontsize : "14",
                    fontcolor : "#000000",
                    type : "0" - 0
                },
                background : {
                    color : "",
                    url   : "http://qiao.baidu.com/v3/res/invitebg/08.jpg"
                },
                head : {
                    show : "0" - 0,
                    size : "0" - 0,
                    url  : "http://qiao.baidu.com/style/936/120282936/1/invitehead.jpg"
                },
                text   : "南京泛盈科技欢迎您！<br><br>有什么可以帮助您的么？",
                button : "#206cd3",
                mode   : "0" - 0,
                special : "4" - 0
            },
            BD_BRIDGE_INVITE : {
                inviteauto : "1" - 0,
                invitemanual : "1" - 0,
                invitetype   : "1" - 0,
                inviterepeat : "1" - 0,
                invitetime   : "20" - 0,
                invitedisaptype : "0" - 0,
                invitedisaptime : "20" - 0
            },
            BD_BRIDGE_WEBIM : {
                webimopentype : "1" - 0,
                webimbgcolor  : "#d5d5d5",
                floatposition : "0" - 0,
                floatChatName : "2" - 0,
                floatCustomname : ""
            },
                        BD_BRIDGE_PIGEON_SOUL : {
                disableMess     : "0" - 0,
                messType        : 1,
                messFloatType   : "0" - 0,
                language        : "0" - 0,
                position        : "0" - 0,
                backgroundColor : "",
                backgroundUrl       : "http://qiao.baidu.com/v3/res/messbg/05.png", 
                messItemName    : "0",
                messItemPhone   : "0",
                messItemAddress : "2",
                messItemEmail   : "2",
                extraMessItems  :  [ { key : "平台", subItems : [ "iPhone、Android客户端", "网站建设", "其他" ], necessity : 0 }, { key : "渠道", subItems : [ "百度搜索", "谷歌搜索", "搜狗搜索", "其他" ], necessity : 0 } ] 
            }
        }        ]
        
    }
   


})();
