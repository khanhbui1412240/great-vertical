/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
                    'HelveticaNeueRegular, Arial, Helvetica, sans-serif': '<link rel=\"stylesheet\" type=\"text/css\" href=\"css/stylesheet.css\">',
                    'HelveticaNeueBold, \'Arial Bold\'': '<link rel=\"stylesheet\" type=\"text/css\" href=\"css/stylesheet.css\">',
        						'HelveticaNeueRegularThin, Arial, Helvetica, sans-serif': '<link rel=\"stylesheet\" type=\"text/css\" href=\"css/stylesheet.css\">'
        				},
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"video.js",
            js+"vjs.vimeo.js",
            js+"iframe.js",
            js+"jquery-2.0.3.min.js",
            js+"dragAndDropClass.js",
            js+"jquery-ui-1.10.4.custom.min.js",
            js+"jquery.ui.touch-punch.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'background',
                            type: 'group',
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            c: [
                            {
                                id: 'white_background',
                                type: 'rect',
                                rect: ['0px', '0px', '100%', '250px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'containerEle',
                            type: 'group',
                            rect: ['-1px', '0px', '100%', '100%', 'auto', 'auto'],
                            userClass: "centerEL",
                            c: [
                            {
                                id: 'contentEle',
                                type: 'rect',
                                rect: ['0px', '0px', '800px', '100%', 'auto', 'auto'],
                                fill: ["rgba(192,192,192,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                c: [
                                {
                                    id: 'button_next',
                                    symbolName: 'button_next',
                                    display: 'none',
                                    type: 'rect',
                                    rect: ['600px', '878px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    opacity: '1'
                                },
                                {
                                    id: 'button_previous',
                                    symbolName: 'button_previous',
                                    type: 'rect',
                                    rect: ['-20px', '878px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    opacity: '1'
                                },
                                {
                                    id: 'button_reset',
                                    symbolName: 'button_reset',
                                    type: 'rect',
                                    rect: ['307px', '878px', '197', '50', 'auto', 'auto'],
                                    cursor: 'pointer'
                                },
                                {
                                    id: 'RectangleGroupTab1',
                                    type: 'rect',
                                    rect: ['0px', '440px', '260px', '398px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,1)"],
                                    stroke: [0,"rgb(0, 87, 184)","solid"],
                                    c: [
                                    {
                                        id: 'Rectangle3Copy',
                                        type: 'rect',
                                        rect: ['0px', '393px', '260px', '4px', 'auto', 'auto'],
                                        fill: ["rgba(122,184,0,1.00)"],
                                        stroke: [0,"rgb(0, 87, 184)","solid"]
                                    },
                                    {
                                        id: 'drop_answer_1',
                                        symbolName: 'content_type_1',
                                        type: 'rect',
                                        rect: ['10px', '93px', '240', '93', 'auto', 'auto']
                                    },
                                    {
                                        id: 'drop_answer_2',
                                        symbolName: 'content_type_1',
                                        type: 'rect',
                                        rect: ['10px', '192px', '240', '93', 'auto', 'auto']
                                    },
                                    {
                                        id: 'drop_answer_3',
                                        symbolName: 'content_type_1',
                                        type: 'rect',
                                        rect: ['10px', '291px', '240', '93', 'auto', 'auto']
                                    },
                                    {
                                        id: 'drop_1',
                                        type: 'rect',
                                        rect: ['1px', '0px', '259px', '396px', 'auto', 'auto'],
                                        fill: ["rgba(192,192,192,0.00)"],
                                        stroke: [0,"rgba(0,0,0,1)","none"]
                                    },
                                    {
                                        id: 'Text4Copy',
                                        type: 'text',
                                        rect: ['70px', '68px', '115px', '18px', 'auto', 'auto'],
                                        text: "<p style=\"margin: 0px;\">​DROP HERE</p>",
                                        align: "center",
                                        font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [14, "px"], "rgba(166,169,170,1.00)", "400", "none", "normal", "break-word", "normal"],
                                        textStyle: ["", "", "", "", "none"]
                                    },
                                    {
                                        id: 'RectangleCopy',
                                        type: 'rect',
                                        rect: ['0px', '0px', '252px', '48px', 'auto', 'auto'],
                                        fill: ["rgba(255,255,255,1.00)"],
                                        stroke: [4,"rgba(122,184,0,1.00)","solid"],
                                        c: [
                                        {
                                            id: 'Text3Copy',
                                            type: 'text',
                                            rect: ['17px', '13px', '225px', '22px', 'auto', 'auto'],
                                            text: "<p style=\"margin: 0px;\">​Zero Client AiO Displays</p>",
                                            align: "center",
                                            font: ['HelveticaNeueBold, Arial Bold', [16, "px"], "rgba(122,184,0,1.00)", "normal", "none", "", "break-word", "normal"]
                                        }]
                                    }]
                                },
                                {
                                    id: 'RectangleGroupTab2',
                                    type: 'rect',
                                    rect: ['272px', '440px', '260px', '398px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,1)"],
                                    stroke: [0,"rgb(0, 87, 184)","solid"],
                                    c: [
                                    {
                                        id: 'footer',
                                        type: 'rect',
                                        rect: ['0px', '394px', '260px', '4px', 'auto', 'auto'],
                                        fill: ["rgba(83,86,90,1.00)"],
                                        stroke: [0,"rgb(0, 87, 184)","solid"]
                                    },
                                    {
                                        id: 'drop_answer_4',
                                        symbolName: 'content_type_2',
                                        type: 'rect',
                                        rect: ['10px', '93px', 'undefined', 'undefined', 'auto', 'auto']
                                    },
                                    {
                                        id: 'drop_answer_5',
                                        symbolName: 'content_type_2',
                                        type: 'rect',
                                        rect: ['10px', '192px', 'undefined', 'undefined', 'auto', 'auto']
                                    },
                                    {
                                        id: 'drop_answer_6',
                                        symbolName: 'content_type_2',
                                        type: 'rect',
                                        rect: ['10px', '291px', 'undefined', 'undefined', 'auto', 'auto']
                                    },
                                    {
                                        id: 'drop_2',
                                        type: 'rect',
                                        rect: ['0px', '0px', '260px', '397px', 'auto', 'auto'],
                                        fill: ["rgba(192,192,192,0.00)"],
                                        stroke: [0,"rgba(0,0,0,1)","none"]
                                    },
                                    {
                                        id: 'Text4',
                                        type: 'text',
                                        rect: ['70px', '68px', '115px', '18px', 'auto', 'auto'],
                                        text: "<p style=\"margin: 0px;\">​DROP HERE</p>",
                                        align: "center",
                                        font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [14, "px"], "rgba(166,169,170,1.00)", "400", "none", "normal", "break-word", "normal"],
                                        textStyle: ["", "", "", "", "none"]
                                    },
                                    {
                                        id: 'Rectangle',
                                        type: 'rect',
                                        rect: ['0px', '0px', '252px', '48px', 'auto', 'auto'],
                                        fill: ["rgba(255,255,255,1.00)"],
                                        stroke: [4,"rgba(83,86,90,1.00)","solid"],
                                        c: [
                                        {
                                            id: 'Text3',
                                            type: 'text',
                                            rect: ['17px', '13px', '225px', '22px', 'auto', 'auto'],
                                            text: "<p style=\"margin: 0px;\">​Thin Client AiO Displays</p>",
                                            align: "center",
                                            font: ['HelveticaNeueBold, Arial Bold', [16, "px"], "rgba(83,86,90,1.00)", "normal", "none", "", "break-word", "normal"]
                                        }]
                                    }]
                                },
                                {
                                    id: 'RectangleGroupTab3',
                                    type: 'rect',
                                    rect: ['540px', '440px', '260px', '398px', 'auto', 'auto'],
                                    opacity: '0',
                                    fill: ["rgba(255,255,255,1)"],
                                    stroke: [0,"rgb(0, 87, 184)","solid"],
                                    c: [
                                    {
                                        id: 'footer3',
                                        type: 'rect',
                                        rect: ['0px', '394px', '260px', '4px', 'auto', 'auto'],
                                        fill: ["rgba(83,86,90,1.00)"],
                                        stroke: [0,"rgb(0, 87, 184)","solid"]
                                    },
                                    {
                                        id: 'drop_answer_7',
                                        symbolName: 'content_type_3',
                                        type: 'rect',
                                        rect: ['10px', '93px', 'undefined', 'undefined', 'auto', 'auto']
                                    },
                                    {
                                        id: 'drop_answer_8',
                                        symbolName: 'content_type_3',
                                        type: 'rect',
                                        rect: ['10px', '192px', 'undefined', 'undefined', 'auto', 'auto']
                                    },
                                    {
                                        id: 'drop_answer_9',
                                        symbolName: 'content_type_3',
                                        type: 'rect',
                                        rect: ['10px', '291px', 'undefined', 'undefined', 'auto', 'auto']
                                    },
                                    {
                                        id: 'drop_3',
                                        type: 'rect',
                                        rect: ['1px', '0px', '260px', '398px', 'auto', 'auto'],
                                        fill: ["rgba(192,192,192,0.00)"],
                                        stroke: [0,"rgba(0,0,0,1)","none"]
                                    },
                                    {
                                        id: 'Text4Copy2',
                                        type: 'text',
                                        rect: ['70px', '68px', '115px', '18px', 'auto', 'auto'],
                                        text: "<p style=\"margin: 0px;\">​DROP HERE</p>",
                                        align: "center",
                                        font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [14, "px"], "rgba(166,169,170,1.00)", "400", "none", "normal", "break-word", "normal"],
                                        textStyle: ["", "", "", "", "none"]
                                    },
                                    {
                                        id: 'header3',
                                        type: 'rect',
                                        rect: ['0px', '0px', '252px', '48px', 'auto', 'auto'],
                                        fill: ["rgba(255,255,255,1.00)"],
                                        stroke: [4,"rgba(83,86,90,1.00)","solid"],
                                        c: [
                                        {
                                            id: 'Text3Copy2',
                                            type: 'text',
                                            rect: ['17px', '13px', '225px', '22px', 'auto', 'auto'],
                                            text: "<p style=\"margin: 0px;\">​Zero Client Desktops</p>",
                                            align: "center",
                                            font: ['HelveticaNeueBold, Arial Bold', [16, "px"], "rgba(83,86,90,1.00)", "normal", "none", "", "break-word", "normal"]
                                        }]
                                    }]
                                },
                                {
                                    id: 'wrong_feedback',
                                    symbolName: 'wrong_feedback',
                                    type: 'rect',
                                    rect: ['320px', '354px', '171', '38', 'auto', 'auto']
                                },
                                {
                                    id: 'correct_feedback',
                                    symbolName: 'correct_feedback',
                                    type: 'rect',
                                    rect: ['320px', '354px', '171', '38', 'auto', 'auto']
                                },
                                {
                                    id: 'GroupDrap',
                                    type: 'group',
                                    rect: ['283px', '325', '240', '94', 'auto', 'auto'],
                                    c: [
                                    {
                                        id: 'drag_1',
                                        type: 'rect',
                                        rect: ['0px', '0px', '240px', '94px', 'auto', 'auto'],
                                        cursor: 'pointer',
                                        fill: ["rgba(255,255,255,0.00)"],
                                        stroke: [0,"rgb(0, 0, 0)","none"],
                                        c: [
                                        {
                                            id: 'image_bg_drag',
                                            type: 'image',
                                            rect: ['0px', '0px', '241px', '94px', 'auto', 'auto'],
                                            fill: ["rgba(0,0,0,0)",im+"image_bg_drag.png",'0px','0px']
                                        },
                                        {
                                            id: 'Text2',
                                            type: 'text',
                                            rect: ['16px', '8px', '197px', '80px', 'auto', 'auto'],
                                            text: "<p style=\"margin: 0px;\">​An affordable desktop </p><p style=\"margin: 0px;\">replacement option with 6 </p><p style=\"margin: 0px;\">USB ports and support for </p><p style=\"margin: 0px;\">dual monitor.\n\n</p>",
                                            align: "left",
                                            font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "normal"],
                                            textStyle: ["", "", "", "", "none"]
                                        }]
                                    },
                                    {
                                        id: 'drag_2',
                                        display: 'none',
                                        type: 'rect',
                                        rect: ['0px', '0px', '240px', '94px', 'auto', 'auto'],
                                        cursor: 'pointer',
                                        fill: ["rgba(255,255,255,0.00)"],
                                        stroke: [0,"rgb(0, 0, 0)","none"],
                                        c: [
                                        {
                                            id: 'image_bg_dragCopy',
                                            type: 'image',
                                            rect: ['0px', '0px', '241px', '94px', 'auto', 'auto'],
                                            fill: ["rgba(0,0,0,0)",im+"image_bg_drag.png",'0px','0px']
                                        },
                                        {
                                            id: 'Text2Copy',
                                            type: 'text',
                                            rect: ['16px', '17px', '197px', '60px', 'auto', 'auto'],
                                            text: "<p style=\"margin: 0px;\">​Minimizes unused cloud </p><p style=\"margin: 0px;\">access components (only </p><p style=\"margin: 0px;\">installs what you need).\n\n</p>",
                                            align: "left",
                                            font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "normal"],
                                            textStyle: ["", "", "", "", "none"]
                                        }]
                                    },
                                    {
                                        id: 'drag_3',
                                        display: 'none',
                                        type: 'rect',
                                        rect: ['0px', '0px', '240px', '94px', 'auto', 'auto'],
                                        cursor: 'pointer',
                                        fill: ["rgba(255,255,255,0.00)"],
                                        stroke: [0,"rgb(0, 0, 0)","none"],
                                        c: [
                                        {
                                            id: 'image_bg_dragCopy2',
                                            type: 'image',
                                            rect: ['0px', '0px', '241px', '94px', 'auto', 'auto'],
                                            fill: ["rgba(0,0,0,0)",im+"image_bg_drag.png",'0px','0px']
                                        },
                                        {
                                            id: 'Text2Copy2',
                                            type: 'text',
                                            rect: ['16px', '17px', '197px', '60px', 'auto', 'auto'],
                                            text: "<p style=\"margin: 0px;\">​Support for Amazon </p><p style=\"margin: 0px;\">​Workspaces + VMware </p><p style=\"margin: 0px;\">Horizon.</p>",
                                            align: "left",
                                            font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "normal"],
                                            textStyle: ["", "", "", "", "none"]
                                        }]
                                    },
                                    {
                                        id: 'drag_4',
                                        display: 'none',
                                        type: 'rect',
                                        rect: ['0px', '0px', '240px', '94px', 'auto', 'auto'],
                                        cursor: 'pointer',
                                        fill: ["rgba(255,255,255,0.00)"],
                                        stroke: [0,"rgb(0, 0, 0)","none"],
                                        c: [
                                        {
                                            id: 'image_bg_dragCopy3',
                                            type: 'image',
                                            rect: ['0px', '0px', '241px', '94px', 'auto', 'auto'],
                                            fill: ["rgba(0,0,0,0)",im+"image_bg_drag.png",'0px','0px']
                                        },
                                        {
                                            id: 'Text2Copy3',
                                            type: 'text',
                                            rect: ['16px', '27px', '197px', '42px', 'auto', 'auto'],
                                            text: "<p style=\"margin: 0px;\">​Citrix, Microsoft, VMware, </p><p style=\"margin: 0px;\">Web support.\n\n</p>",
                                            align: "left",
                                            font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "normal"],
                                            textStyle: ["", "", "", "", "none"]
                                        }]
                                    },
                                    {
                                        id: 'drag_5',
                                        display: 'none',
                                        type: 'rect',
                                        rect: ['0px', '0px', '240px', '94px', 'auto', 'auto'],
                                        cursor: 'pointer',
                                        fill: ["rgba(255,255,255,0.00)"],
                                        stroke: [0,"rgb(0, 0, 0)","none"],
                                        c: [
                                        {
                                            id: 'image_bg_dragCopy7',
                                            type: 'image',
                                            rect: ['0px', '0px', '241px', '94px', 'auto', 'auto'],
                                            fill: ["rgba(0,0,0,0)",im+"image_bg_drag.png",'0px','0px']
                                        },
                                        {
                                            id: 'Text2Copy7',
                                            type: 'text',
                                            rect: ['16px', '16px', '197px', '62px', 'auto', 'auto'],
                                            text: "<p style=\"margin: 0px;\">​Imprivata smart card support for secure tap-in session access.\n\n</p>",
                                            align: "left",
                                            font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "normal"],
                                            textStyle: ["", "", "", "", "none"]
                                        }]
                                    },
                                    {
                                        id: 'drag_6',
                                        display: 'none',
                                        type: 'rect',
                                        rect: ['0px', '0px', '240px', '94px', 'auto', 'auto'],
                                        cursor: 'pointer',
                                        fill: ["rgba(255,255,255,0.00)"],
                                        stroke: [0,"rgb(0, 0, 0)","none"],
                                        c: [
                                        {
                                            id: 'image_bg_dragCopy6',
                                            type: 'image',
                                            rect: ['0px', '0px', '241px', '94px', 'auto', 'auto'],
                                            fill: ["rgba(0,0,0,0)",im+"image_bg_drag.png",'0px','0px']
                                        },
                                        {
                                            id: 'Text2Copy6',
                                            type: 'text',
                                            rect: ['16px', '17px', '220px', '60px', 'auto', 'auto'],
                                            text: "<p style=\"margin: 0px;\">​NX series is equipped with </p><p style=\"margin: 0px;\">Teradici Gen2 Chipset, DDR3 </p><p style=\"margin: 0px;\">memory and six USB ports.\n\n</p>",
                                            align: "left",
                                            font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "normal"],
                                            textStyle: ["", "", "", "", "none"]
                                        }]
                                    },
                                    {
                                        id: 'drag_7',
                                        display: 'none',
                                        type: 'rect',
                                        rect: ['0px', '0px', '240px', '94px', 'auto', 'auto'],
                                        cursor: 'pointer',
                                        fill: ["rgba(255,255,255,0.00)"],
                                        stroke: [0,"rgb(0, 0, 0)","none"],
                                        c: [
                                        {
                                            id: 'image_bg_dragCopy5',
                                            type: 'image',
                                            rect: ['0px', '0px', '241px', '94px', 'auto', 'auto'],
                                            fill: ["rgba(0,0,0,0)",im+"image_bg_drag.png",'0px','0px']
                                        },
                                        {
                                            id: 'Text2Copy5',
                                            type: 'text',
                                            rect: ['16px', '17px', '197px', '60px', 'auto', 'auto'],
                                            text: "<p style=\"margin: 0px;\">​Business class display with </p><p style=\"margin: 0px;\">built-in zero client </p><p style=\"margin: 0px;\">technology.\n\n</p>",
                                            align: "left",
                                            font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "normal"],
                                            textStyle: ["", "", "", "", "none"]
                                        }]
                                    },
                                    {
                                        id: 'drag_8',
                                        display: 'none',
                                        type: 'rect',
                                        rect: ['0px', '0px', '240px', '94px', 'auto', 'auto'],
                                        cursor: 'pointer',
                                        fill: ["rgba(255,255,255,0.00)"],
                                        stroke: [0,"rgb(0, 0, 0)","none"],
                                        c: [
                                        {
                                            id: 'image_bg_dragCopy4',
                                            type: 'image',
                                            rect: ['0px', '0px', '241px', '94px', 'auto', 'auto'],
                                            fill: ["rgba(0,0,0,0)",im+"image_bg_drag.png",'0px','0px']
                                        },
                                        {
                                            id: 'Text2Copy4',
                                            type: 'text',
                                            rect: ['16px', '26px', '197px', '42px', 'auto', 'auto'],
                                            text: "<p style=\"margin: 0px;\">​Licensed for IGEL UMS 5 automation tool.\n\n</p>",
                                            align: "left",
                                            font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "normal"],
                                            textStyle: ["", "", "", "", "none"]
                                        }]
                                    }]
                                },
                                {
                                    id: 'Text',
                                    type: 'text',
                                    rect: ['325px', '290px', '150px', '18px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​DRAG THIS</p>",
                                    align: "center",
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [14, "px"], "rgba(166,169,170,1.00)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'header',
                                    type: 'group',
                                    rect: ['0', '19', '100%', '171', 'auto', 'auto'],
                                    c: [
                                    {
                                        id: 'intro',
                                        type: 'text',
                                        rect: ['-38px', '79px', '800px', '120px', 'auto', 'auto'],
                                        opacity: '0',
                                        text: "<p style=\"margin:0px\">​A wide variety of industries from Healthcare to Education can benefit from thin client and zero client all-in-one displays, and knowing which device is best suited for each individual customer is key. Below are the jumbled up features of thin client and zero client all-in-one displays as well as zero client desktops. See if you can correctly match them.&nbsp;</p><p style=\"margin:0px\">\n</p><p style=\"margin:0px\">\n</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\">Match each device feature with its correct category.</span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin: 0px;\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin: 0px;\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p>",
                                        align: "left",
                                        font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, "px"], "rgba(83,86,90,1.00)", "400", "none", "normal", "break-word", ""],
                                        textStyle: ["", "", "", "", "none"]
                                    },
                                    {
                                        id: 'heading',
                                        display: 'none',
                                        type: 'text',
                                        rect: ['-50px', '19px', '100%', '51px', 'auto', 'auto'],
                                        opacity: '0',
                                        text: "<p style=\"margin: 0px;\">​Zero Client and Thin Client Matching Game\n<span style=\"color: rgb(83, 86, 90);\"></span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(83, 86, 90);\"></span>\n</p>",
                                        align: "left",
                                        font: ['HelveticaNeueBold, \'Arial Bold\'', [35, "px"], "rgba(113,116,119,1.00)", "400", "none", "normal", "break-word", ""],
                                        textStyle: ["", "", "", "", "none"]
                                    },
                                    {
                                        id: 'title',
                                        display: 'none',
                                        type: 'text',
                                        rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                        opacity: '0.88',
                                        text: "<p style=\"margin: 0px;\">​Cloud Access: Selling Zero and Thin Clients\n\n\n\n\n\n\n\n</p>",
                                        align: "left",
                                        font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,122,194,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                        textStyle: ["", "", "", "", "none"]
                                    }]
                                }]
                            }]
                        },
                        {
                            id: 'VDI_3_end_audio',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['452', '553', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"VDI_3_end_audio.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'overlay',
                            symbolName: 'overlay',
                            type: 'rect',
                            rect: ['0px', '299px', 'undefined', 'undefined', 'auto', 'auto'],
                            userClass: "full-width",
                            transform: [[],[],[],['1','1.12564']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '978px', 'auto', 'auto'],
                            sizeRange: ['900px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(245,245,245,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 29459.125,
                    autoPlay: true,
                    labels: {
                        "active_content": 4750,
                        "play_audio": 5500,
                        "show_continue": 28959
                    },
                    data: [
                        [
                            "eid45",
                            "left",
                            500,
                            750,
                            "easeOutCubic",
                            "${heading}",
                            '-50px',
                            '0px'
                        ],
                        [
                            "eid2090",
                            "background-color",
                            4750,
                            250,
                            "linear",
                            "${footer}",
                            'rgba(83,86,90,1.00)',
                            'rgba(0,87,184,1)'
                        ],
                        [
                            "eid2078",
                            "opacity",
                            2000,
                            250,
                            "linear",
                            "${RectangleGroupTab1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2086",
                            "border-color",
                            4750,
                            250,
                            "linear",
                            "${header3}",
                            'rgba(83,86,90,1.00)',
                            'rgb(0, 156, 166)'
                        ],
                        [
                            "eid1779",
                            "opacity",
                            28870,
                            0,
                            "linear",
                            "${button_next}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2162",
                            "display",
                            0,
                            0,
                            "linear",
                            "${drag_8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2158",
                            "display",
                            0,
                            0,
                            "linear",
                            "${drag_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2092",
                            "border-color",
                            4750,
                            250,
                            "linear",
                            "${Rectangle}",
                            'rgba(83,86,90,1.00)',
                            'rgb(0, 87, 184)'
                        ],
                        [
                            "eid44",
                            "opacity",
                            500,
                            750,
                            "easeOutCubic",
                            "${heading}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2091",
                            "color",
                            4750,
                            250,
                            "linear",
                            "${Text3}",
                            'rgba(83,86,90,1.00)',
                            'rgba(0,87,184,1)'
                        ],
                        [
                            "eid2160",
                            "display",
                            0,
                            0,
                            "linear",
                            "${drag_6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid50",
                            "opacity",
                            1000,
                            750,
                            "easeOutCubic",
                            "${intro}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2084",
                            "background-color",
                            4750,
                            250,
                            "linear",
                            "${footer3}",
                            'rgba(83,86,90,1.00)',
                            'rgba(0,156,166,1)'
                        ],
                        [
                            "eid2077",
                            "opacity",
                            2000,
                            250,
                            "linear",
                            "${RectangleGroupTab2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2159",
                            "display",
                            0,
                            0,
                            "linear",
                            "${drag_5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2098",
                            "border-color",
                            4750,
                            250,
                            "linear",
                            "${RectangleCopy}",
                            'rgba(83,86,90,1.00)',
                            'rgba(122,184,0,1.00)'
                        ],
                        [
                            "eid38",
                            "display",
                            0,
                            0,
                            "linear",
                            "${title}",
                            'none',
                            'none'
                        ],
                        [
                            "eid41",
                            "display",
                            250,
                            0,
                            "linear",
                            "${title}",
                            'none',
                            'block'
                        ],
                        [
                            "eid39",
                            "display",
                            0,
                            0,
                            "linear",
                            "${heading}",
                            'none',
                            'none'
                        ],
                        [
                            "eid43",
                            "display",
                            500,
                            0,
                            "linear",
                            "${heading}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2096",
                            "background-color",
                            4750,
                            250,
                            "linear",
                            "${Rectangle3Copy}",
                            'rgba(83,86,90,1.00)',
                            'rgba(122,184,0,1.00)'
                        ],
                        [
                            "eid2079",
                            "opacity",
                            2000,
                            250,
                            "linear",
                            "${drag_1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2080",
                            "opacity",
                            2000,
                            250,
                            "linear",
                            "${Text}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2076",
                            "opacity",
                            2000,
                            250,
                            "linear",
                            "${RectangleGroupTab3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid665",
                            "display",
                            0,
                            0,
                            "linear",
                            "${button_next}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1774",
                            "display",
                            28870,
                            0,
                            "linear",
                            "${button_next}",
                            'none',
                            'block'
                        ],
                        [
                            "eid58",
                            "left",
                            1000,
                            750,
                            "easeOutCubic",
                            "${intro}",
                            '-38px',
                            '2px'
                        ],
                        [
                            "eid2097",
                            "color",
                            4750,
                            250,
                            "linear",
                            "${Text3Copy}",
                            'rgba(83,86,90,1.00)',
                            'rgba(122,184,0,1.00)'
                        ],
                        [
                            "eid581",
                            "left",
                            3315,
                            867,
                            "easeOutCubic",
                            "${button_previous}",
                            '-20px',
                            '0px'
                        ],
                        [
                            "eid2153",
                            "top",
                            6500,
                            0,
                            "linear",
                            "${button_reset}",
                            '878px',
                            '878px'
                        ],
                        [
                            "eid579",
                            "opacity",
                            3315,
                            867,
                            "easeOutCubic",
                            "${button_previous}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2085",
                            "color",
                            4750,
                            250,
                            "linear",
                            "${Text3Copy2}",
                            'rgba(83,86,90,1.00)',
                            'rgba(0,156,166,1)'
                        ],
                        [
                            "eid2156",
                            "display",
                            0,
                            0,
                            "linear",
                            "${drag_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2161",
                            "display",
                            0,
                            0,
                            "linear",
                            "${drag_7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2157",
                            "display",
                            0,
                            0,
                            "linear",
                            "${drag_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid42",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${title}",
                            '0',
                            '1'
                        ],
                        [
                            "eid544",
                            "opacity",
                            500,
                            0,
                            "easeOutQuad",
                            "${title}",
                            '1',
                            '1'
                        ],
                            [ "eid670", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${overlay}', [] ] ],
                            [ "eid2193", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${wrong_feedback}', [] ] ],
                            [ "eid1460", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${button_reset}', [] ] ],
                            [ "eid2167", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${drop_answer_2}', [] ] ],
                            [ "eid2169", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${drop_answer_3}', [] ] ],
                            [ "eid2170", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${drop_answer_9}', [] ] ],
                            [ "eid2171", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${drop_answer_8}', [] ] ],
                            [ "eid2192", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${correct_feedback}', [] ] ],
                            [ "eid2164", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${drop_answer_6}', [] ] ],
                            [ "eid2165", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${drop_answer_4}', [] ] ],
                            [ "eid2163", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${drop_answer_5}', [] ] ],
                            [ "eid2166", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${drop_answer_1}', [] ] ],
                            [ "eid2168", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${drop_answer_7}', [] ] ],
                            [ "eid671", "trigger", 1750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${overlay}', [] ] ],
                            [ "eid2172", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${drop_answer_1}', [] ] ],
                            [ "eid2173", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${drop_answer_6}', [] ] ],
                            [ "eid2177", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${drop_answer_9}', [] ] ],
                            [ "eid2176", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${drop_answer_7}', [] ] ],
                            [ "eid2175", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${drop_answer_4}', [] ] ],
                            [ "eid2180", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${drop_answer_2}', [] ] ],
                            [ "eid2179", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${drop_answer_3}', [] ] ],
                            [ "eid2178", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${drop_answer_8}', [] ] ],
                            [ "eid2174", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${drop_answer_5}', [] ] ],
                            [ "eid2194", "trigger", 5500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${VDI_3_end_audio}', [] ] ],
                            [ "eid1773", "trigger", 28959.125, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${button_next}', [] ] ]
                    ]
                }
            },
            "button_previous": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '50px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(61,132,200,1.00)']
                        },
                        {
                            font: ['HelveticaNeueBold, Arial Bold', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(43, 29, 29)', 'normal', 'break-word', ''],
                            type: 'text',
                            textStyle: ['', '', '50px', '', ''],
                            id: 'Text',
                            text: '<p style=\"margin:0px\">Previous​</p>',
                            align: 'center',
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto']
                        },
                        {
                            rect: ['22px', '15px', '10px', '19px', 'auto', 'auto'],
                            id: 'arrow_left',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/arrow_left.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "button_next": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group',
                            opacity: '0',
                            rect: ['-40px', '0', '200', '50', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '200px', '50px', 'auto', 'auto'],
                                opacity: '1',
                                id: 'Rectangle',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(61,132,200,1.00)']
                            },
                            {
                                rect: ['39px', '16px', '122px', '18px', 'auto', 'auto'],
                                font: ['HelveticaNeueBold, Arial Bold', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(43, 29, 29)', 'normal', 'break-word', ''],
                                align: 'center',
                                id: 'Text',
                                text: 'Next',
                                textStyle: ['', '', '18px', '', ''],
                                type: 'text'
                            },
                            {
                                rect: ['167px', '15px', '11px', '19px', 'auto', 'auto'],
                                id: 'arrow_right',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/arrow_right.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid1781",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Group}",
                            '-40px',
                            '0px'
                        ],
                        [
                            "eid1778",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Group}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "overlay": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '100%', '526px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'overlay',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(245,245,245,0.75)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '900px', '526px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    labels: {
                        "remove_overlay": 500
                    },
                    data: [
                        [
                            "eid442",
                            "display",
                            746,
                            0,
                            "linear",
                            "${overlay}",
                            'block',
                            'block'
                        ],
                        [
                            "eid317",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${overlay}",
                            '0',
                            '1'
                        ],
                        [
                            "eid440",
                            "opacity",
                            500,
                            1000,
                            "linear",
                            "${overlay}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "button_reset": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'ResetButton',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '197px', '50px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)'],
                            c: [
                            {
                                type: 'image',
                                id: 'image_reset_gray',
                                rect: ['0px', '0px', '197px', '50px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/image_reset_gray.jpg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'image_reset_icon',
                                rect: ['150px', '12px', '25px', '25px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/image_reset_icon.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                id: 'Text4',
                                text: '<p style=\"margin: 0px;\">Reset Activity​</p>',
                                rect: ['22px', '13px', '129px', '25px', 'auto', 'auto'],
                                font: ['HelveticaNeueBold, Arial Bold', [18, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '197px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid1455",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${ResetButton}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "content_type_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle_bg',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '241px', '93px', 'auto', 'auto'],
                            fill: ['rgba(230,231,232,1)']
                        },
                        {
                            type: 'group',
                            display: 'none',
                            id: 'Content_1',
                            rect: ['0', '0', '240', '93', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                rect: ['0px', '0px', '240px', '93px', 'auto', 'auto'],
                                id: 'Rectangle2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(230,231,232,1.00)'],
                                c: [
                                {
                                    rect: ['0px', '0px', '241px', '94px', 'auto', 'auto'],
                                    id: 'image_bg_type_1',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/image_bg_type_1.png', '0px', '0px']
                                }]
                            },
                            {
                                type: 'text',
                                rect: ['16px', '17px', '195px', '60px', 'auto', 'auto'],
                                align: 'center',
                                id: 'Text5',
                                text: '<p style=\"margin: 0px; text-align: left;\">​Support for Amazon </p><p style=\"margin: 0px; text-align: left;\">Workspaces + VMware </p><p style=\"margin: 0px; text-align: left;\">Horizon.</p>',
                                textStyle: ['', '', '', '', 'none'],
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(250,250,250,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                            }]
                        },
                        {
                            type: 'group',
                            display: 'none',
                            id: 'Content_2',
                            rect: ['0', '0', '240', '93', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                rect: ['0px', '0px', '240px', '93px', 'auto', 'auto'],
                                id: 'Rectangle2Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(230,231,232,1.00)'],
                                c: [
                                {
                                    rect: ['0px', '0px', '241px', '94px', 'auto', 'auto'],
                                    id: 'image_bg_type_1Copy',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/image_bg_type_1.png', '0px', '0px']
                                }]
                            },
                            {
                                type: 'text',
                                rect: ['16px', '17px', '215px', '60px', 'auto', 'auto'],
                                align: 'center',
                                id: 'Text5Copy',
                                text: '<p style=\"margin: 0px; text-align: left;\">​Imprivata smart card support </p><p style=\"margin: 0px; text-align: left;\">for secure tap-in session </p><p style=\"margin: 0px; text-align: left;\">access.</p><p style=\"margin: 0px; text-align: left;\"></p>',
                                textStyle: ['', '', '', '', 'none'],
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(250,250,250,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                            }]
                        },
                        {
                            type: 'group',
                            display: 'none',
                            id: 'Content_3',
                            rect: ['0', '0', '240', '93', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                rect: ['0px', '0px', '240px', '93px', 'auto', 'auto'],
                                id: 'Rectangle2Copy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(230,231,232,1.00)'],
                                c: [
                                {
                                    rect: ['0px', '0px', '241px', '94px', 'auto', 'auto'],
                                    id: 'image_bg_type_1Copy2',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/image_bg_type_1.png', '0px', '0px']
                                }]
                            },
                            {
                                type: 'text',
                                rect: ['16px', '17px', '215px', '60px', 'auto', 'auto'],
                                align: 'center',
                                id: 'Text5Copy2',
                                text: '<p style=\"margin: 0px; text-align: left;\">​Business class display with </p><p style=\"margin: 0px; text-align: left;\">built-in zero client </p><p style=\"margin: 0px; text-align: left;\">technology.\n</p><p style=\"margin: 0px; text-align: left;\"></p><p style=\"margin: 0px; text-align: left;\"></p>',
                                textStyle: ['', '', '', '', 'none'],
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(250,250,250,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '240px', '93px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    labels: {
                        "show_content_3": 500,
                        "show_content_5": 1000,
                        "show_content_7": 1500
                    },
                    data: [
                        [
                            "eid2115",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Content_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2117",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${Content_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2118",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${Content_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2114",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Content_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2116",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Content_1}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "content_type_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle_bg',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '241px', '93px', 'auto', 'auto'],
                            fill: ['rgba(230,231,232,1)']
                        },
                        {
                            type: 'group',
                            display: 'none',
                            id: 'Content_1',
                            rect: ['0', '0', '240', '93', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                rect: ['0px', '0px', '240px', '93px', 'auto', 'auto'],
                                id: 'Rectangle2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(230,231,232,1.00)'],
                                c: [
                                {
                                    rect: ['0px', '0px', '241px', '94px', 'auto', 'auto'],
                                    id: 'image_bg_type_2',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/image_bg_type_2.png', '0px', '0px']
                                }]
                            },
                            {
                                type: 'text',
                                rect: ['16px', '17px', '195px', '60px', 'auto', 'auto'],
                                align: 'center',
                                id: 'Text5',
                                text: '<p style=\"margin: 0px; text-align: left;\">​Minimizes unused cloud </p><p style=\"margin: 0px; text-align: left;\">access components (only </p><p style=\"margin: 0px; text-align: left;\">installs what you need).</p><p style=\"margin: 0px; text-align: left;\"></p>',
                                textStyle: ['', '', '', '', 'none'],
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(250,250,250,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                            }]
                        },
                        {
                            type: 'group',
                            display: 'none',
                            id: 'Content_2',
                            rect: ['0', '0', '240', '93', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                rect: ['0px', '0px', '240px', '93px', 'auto', 'auto'],
                                id: 'Rectangle2Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(230,231,232,1.00)'],
                                c: [
                                {
                                    rect: ['0px', '0px', '241px', '94px', 'auto', 'auto'],
                                    id: 'image_bg_type_2Copy',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/image_bg_type_2.png', '0px', '0px']
                                }]
                            },
                            {
                                type: 'text',
                                rect: ['16px', '26px', '215px', '42px', 'auto', 'auto'],
                                align: 'center',
                                id: 'Text5Copy',
                                text: '<p style=\"margin: 0px; text-align: left;\">​Citrix, Microsoft, VMware, </p><p style=\"margin: 0px; text-align: left;\">Web support.</p><p style=\"margin: 0px; text-align: left;\"></p><p style=\"margin: 0px; text-align: left;\"></p>',
                                textStyle: ['', '', '', '', 'none'],
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(250,250,250,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                            }]
                        },
                        {
                            type: 'group',
                            display: 'none',
                            id: 'Content_3',
                            rect: ['0', '0', '240', '93', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                rect: ['0px', '0px', '240px', '93px', 'auto', 'auto'],
                                id: 'Rectangle2Copy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(230,231,232,1.00)'],
                                c: [
                                {
                                    rect: ['0px', '0px', '241px', '94px', 'auto', 'auto'],
                                    id: 'image_bg_type_2Copy2',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/image_bg_type_2.png', '0px', '0px']
                                }]
                            },
                            {
                                type: 'text',
                                rect: ['16px', '26px', '215px', '42px', 'auto', 'auto'],
                                align: 'center',
                                id: 'Text5Copy2',
                                text: '<p style=\"margin: 0px; text-align: left;\">​Licensed for IGEL UMS 5 automation tool.</p><p style=\"margin: 0px; text-align: left;\">\n</p><p style=\"margin: 0px; text-align: left;\"></p><p style=\"margin: 0px; text-align: left;\"></p>',
                                textStyle: ['', '', '', '', 'none'],
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(250,250,250,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '240px', '93px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    labels: {
                        "show_content_2": 500,
                        "show_content_4": 1000,
                        "show_content_8": 1500
                    },
                    data: [
                        [
                            "eid2115",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Content_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2117",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${Content_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2118",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${Content_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2114",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Content_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2116",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Content_1}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "content_type_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle_bg',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '241px', '93px', 'auto', 'auto'],
                            fill: ['rgba(230,231,232,1)']
                        },
                        {
                            type: 'group',
                            display: 'none',
                            id: 'Content_1',
                            rect: ['0', '0', '240', '93', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                rect: ['0px', '0px', '240px', '93px', 'auto', 'auto'],
                                id: 'Rectangle2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(230,231,232,1.00)'],
                                c: [
                                {
                                    rect: ['0px', '0px', '241px', '94px', 'auto', 'auto'],
                                    id: 'image_bg_type_3',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/image_bg_type_3.png', '0px', '0px']
                                }]
                            },
                            {
                                type: 'text',
                                rect: ['16px', '8px', '195px', '78px', 'auto', 'auto'],
                                align: 'center',
                                id: 'Text5',
                                text: '<p style=\"margin: 0px; text-align: left;\">​An affordable desktop </p><p style=\"margin: 0px; text-align: left;\">replacement option with 6 </p><p style=\"margin: 0px; text-align: left;\">USB ports and support for </p><p style=\"margin: 0px; text-align: left;\">dual monitor.</p><p style=\"margin: 0px; text-align: left;\"></p><p style=\"margin: 0px; text-align: left;\"></p>',
                                textStyle: ['', '', '', '', 'none'],
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(250,250,250,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                            }]
                        },
                        {
                            type: 'group',
                            display: 'none',
                            id: 'Content_2',
                            rect: ['0', '0', '240', '93', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                rect: ['0px', '0px', '240px', '93px', 'auto', 'auto'],
                                id: 'Rectangle2Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(230,231,232,1.00)'],
                                c: [
                                {
                                    rect: ['0px', '0px', '241px', '94px', 'auto', 'auto'],
                                    id: 'image_bg_type_3Copy',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/image_bg_type_3.png', '0px', '0px']
                                }]
                            },
                            {
                                type: 'text',
                                rect: ['16px', '17px', '215px', '60px', 'auto', 'auto'],
                                align: 'center',
                                id: 'Text5Copy',
                                text: '<p style=\"margin: 0px; text-align: left;\">​NX series is equipped with </p><p style=\"margin: 0px; text-align: left;\">Teradici Gen2 Chipset, DDR3 </p><p style=\"margin: 0px; text-align: left;\">memory and six USB ports.</p><p style=\"margin: 0px; text-align: left;\"></p><p style=\"margin: 0px; text-align: left;\"></p><p style=\"margin: 0px; text-align: left;\"></p>',
                                textStyle: ['', '', '', '', 'none'],
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(250,250,250,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '240px', '93px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: true,
                    labels: {
                        "show_content_1": 500,
                        "show_content_6": 1000
                    },
                    data: [
                        [
                            "eid2115",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Content_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2114",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Content_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2116",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Content_1}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "wrong_feedback": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '171', '38', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                type: 'image',
                                id: 'image_wrong_bg',
                                rect: ['0px', '0px', '171px', '38px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/image_wrong_bg.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueBold, Arial Bold', [18, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                id: 'Text5',
                                text: '<p style=\"margin: 0px;\">Oops, try again!​</p>',
                                align: 'center',
                                rect: ['6px', '6px', '160px', '25px', 'auto', 'auto']
                            }]
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/INCORRECT_sound.wav'],
                            id: 'INCORRECT_sound',
                            rect: ['44', '6', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '171px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: true,
                    data: [
                        [
                            "eid2183",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Group}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2185",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${Group}",
                            '1',
                            '0'
                        ],
                            [ "eid2186", "trigger", 51, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${INCORRECT_sound}', [] ] ]
                    ]
                }
            },
            "correct_feedback": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '171', '38', 'auto', 'auto'],
                            id: 'Group2',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                type: 'image',
                                id: 'image_correct_bg',
                                rect: ['0px', '0px', '171px', '38px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/image_correct_bg.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['12px', '6px', '148px', '25px', 'auto', 'auto'],
                                text: '<p style=\"margin: 0px;\">Correct!​</p>',
                                id: 'Text6',
                                textStyle: ['', '', '', '', 'none'],
                                align: 'center',
                                font: ['HelveticaNeueBold, \'Arial Bold\'', [18, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '171px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 3250,
                    autoPlay: true,
                    labels: {
                        "show_content": 2000,
                        "hide_content": 3000
                    },
                    data: [
                        [
                            "eid2189",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Group2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2191",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${Group2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2195",
                            "opacity",
                            2000,
                            250,
                            "linear",
                            "${Group2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2196",
                            "opacity",
                            3000,
                            250,
                            "linear",
                            "${Group2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-20515506");
