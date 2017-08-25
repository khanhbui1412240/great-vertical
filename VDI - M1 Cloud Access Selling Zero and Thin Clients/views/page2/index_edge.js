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
            js+"jquery-2.0.3.min.js",
            js+"jquery-ui-1.10.4.custom.min.js",
            js+"jquery.ui.touch-punch.min.js",
            js+"dragAndDropClass.js"
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
                                rect: ['0px', '0px', '100%', '220px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'containerEle',
                            type: 'group',
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
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
                                    type: 'rect',
                                    rect: ['600px', '591px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer'
                                },
                                {
                                    id: 'button_reset',
                                    symbolName: 'button_reset',
                                    display: 'none',
                                    type: 'rect',
                                    rect: ['300px', '591px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer'
                                },
                                {
                                    id: 'overlay_button_reset',
                                    display: 'none',
                                    type: 'rect',
                                    rect: ['300px', '591px', '200px', '50px', 'auto', 'auto'],
                                    fill: ["rgba(245,245,245,0.75)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                },
                                {
                                    id: 'button_previous',
                                    symbolName: 'button_previous',
                                    type: 'rect',
                                    rect: ['0px', '591px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer'
                                },
                                {
                                    id: 'Group_bg',
                                    type: 'group',
                                    rect: ['485', '286', '316', '264', 'auto', 'auto'],
                                    opacity: '0',
                                    c: [
                                    {
                                        id: 'bd_drop_content_1',
                                        type: 'rect',
                                        rect: ['-1px', '0px', '316px', '82px', 'auto', 'auto'],
                                        fill: ["rgba(255,255,255,0.00)"],
                                        stroke: [0,"rgb(0, 0, 0)","none"],
                                        userClass: "",
                                        c: [
                                        {
                                            id: 'Rectangle2',
                                            type: 'rect',
                                            rect: ['19px', '0px', '296px', '82px', 'auto', 'auto'],
                                            fill: ["rgba(255,255,255,1)"],
                                            stroke: [0,"rgb(0, 0, 0)","none"],
                                            c: [
                                            {
                                                id: 'Text',
                                                type: 'text',
                                                rect: ['13px', '10px', '265px', '60px', 'auto', 'auto'],
                                                text: "<p style=\"margin: 0px;\">​Single protocol desktop appliance </p><p style=\"margin: 0px;\">that is purpose-built for dedicated </p><p style=\"margin: 0px;\">cloud access.</p>",
                                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, "px"], "rgba(83,86,90,1.00)", "normal", "none", "", "break-word", "normal"]
                                            }]
                                        },
                                        {
                                            id: 'bg_drop_1',
                                            type: 'rect',
                                            rect: ['1px', '0px', '15px', '82px', 'auto', 'auto'],
                                            fill: ["rgba(166,169,170,1.00)"],
                                            stroke: [0,"rgb(0, 0, 0)","none"]
                                        }]
                                    },
                                    {
                                        id: 'bd_drop_content_2',
                                        type: 'rect',
                                        rect: ['-1px', '89px', '316px', '82px', 'auto', 'auto'],
                                        fill: ["rgba(255,255,255,0.00)"],
                                        stroke: [0,"rgb(0, 0, 0)","none"],
                                        userClass: "",
                                        c: [
                                        {
                                            id: 'Rectangle2Copy',
                                            type: 'rect',
                                            rect: ['19px', '0px', '296px', '82px', 'auto', 'auto'],
                                            fill: ["rgba(255,255,255,1)"],
                                            stroke: [0,"rgb(0, 0, 0)","none"],
                                            c: [
                                            {
                                                id: 'TextCopy',
                                                type: 'text',
                                                rect: ['13px', '20px', '275px', '42px', 'auto', 'auto'],
                                                text: "<p style=\"margin: 0px;\">​Multi-protocol desktop appliance </p><p style=\"margin: 0px;\">streamlined for hybrid cloud access.</p><p style=\"margin: 0px;\"></p>",
                                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, "px"], "rgba(83,86,90,1.00)", "normal", "none", "", "break-word", "normal"]
                                            }]
                                        },
                                        {
                                            id: 'bg_drop_2',
                                            type: 'rect',
                                            rect: ['1px', '0px', '15px', '82px', 'auto', 'auto'],
                                            fill: ["rgba(166,169,170,1.00)"],
                                            stroke: [0,"rgb(0, 0, 0)","none"]
                                        }]
                                    },
                                    {
                                        id: 'bd_drop_content_3',
                                        type: 'rect',
                                        rect: ['-1px', '182px', '316px', '82px', 'auto', 'auto'],
                                        fill: ["rgba(255,255,255,0.00)"],
                                        stroke: [0,"rgb(0, 0, 0)","none"],
                                        userClass: "",
                                        c: [
                                        {
                                            id: 'Rectangle2Copy2',
                                            type: 'rect',
                                            rect: ['19px', '0px', '296px', '82px', 'auto', 'auto'],
                                            fill: ["rgba(255,255,255,1)"],
                                            stroke: [0,"rgb(0, 0, 0)","none"],
                                            c: [
                                            {
                                                id: 'TextCopy2',
                                                type: 'text',
                                                rect: ['13px', '10px', '275px', '60px', 'auto', 'auto'],
                                                text: "<p style=\"margin: 0px;\">​Software architecture that centralizes </p><p style=\"margin: 0px;\">the user desktop environment into a </p><p style=\"margin: 0px;\">cloud-based server platform.</p><p style=\"margin: 0px;\"></p>",
                                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, "px"], "rgba(83,86,90,1.00)", "normal", "none", "", "break-word", "normal"]
                                            }]
                                        },
                                        {
                                            id: 'bg_drop_3',
                                            type: 'rect',
                                            rect: ['1px', '0px', '15px', '82px', 'auto', 'auto'],
                                            fill: ["rgba(166,169,170,1.00)"],
                                            stroke: [0,"rgb(0, 0, 0)","none"]
                                        }]
                                    }]
                                },
                                {
                                    id: 'drop_able1',
                                    type: 'rect',
                                    rect: ['485px', '286px', '316px', '82px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    userClass: "droppable droppable1"
                                },
                                {
                                    id: 'drop1',
                                    type: 'rect',
                                    rect: ['485px', '286px', '15px', '82px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    userClass: "constraint1"
                                },
                                {
                                    id: 'drop_able2',
                                    type: 'rect',
                                    rect: ['485px', '375px', '316px', '82px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    userClass: "droppable droppable2"
                                },
                                {
                                    id: 'drop2',
                                    type: 'rect',
                                    rect: ['485px', '375px', '15px', '82px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    userClass: "constraint2"
                                },
                                {
                                    id: 'drop_able3',
                                    type: 'rect',
                                    rect: ['485px', '468px', '316px', '82px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    userClass: "droppable droppable3"
                                },
                                {
                                    id: 'drop3',
                                    type: 'rect',
                                    rect: ['485px', '468px', '15px', '82px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    userClass: "constraint3"
                                },
                                {
                                    id: 'svg-holder',
                                    type: 'rect',
                                    rect: ['0px', '220px', '801px', '351px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.11)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'tab_3',
                                    symbolName: 'tab_3',
                                    type: 'rect',
                                    rect: ['0px', '468px', 'undefined', 'undefined', 'auto', 'auto']
                                },
                                {
                                    id: 'tab_2',
                                    symbolName: 'tab_2',
                                    type: 'rect',
                                    rect: ['0px', '375px', 'undefined', 'undefined', 'auto', 'auto']
                                },
                                {
                                    id: 'tab_1',
                                    symbolName: 'tab_1',
                                    type: 'rect',
                                    rect: ['0px', '286px', '316', '82', 'auto', 'auto']
                                },
                                {
                                    id: 'draggables',
                                    display: 'none',
                                    type: 'group',
                                    rect: ['0px', '224px', '326px', '351px', 'auto', 'auto'],
                                    opacity: '1',
                                    c: [
                                    {
                                        id: 'cross-first',
                                        type: 'rect',
                                        rect: ['301px', '62px', '15px', '82px', 'auto', 'auto'],
                                        fill: ["rgba(122,184,0,1.00)"],
                                        stroke: [0,"rgb(0, 0, 0)","none"],
                                        userClass: "draggables set1"
                                    },
                                    {
                                        id: 'cross-second',
                                        type: 'rect',
                                        rect: ['301px', '151px', '15px', '82px', 'auto', 'auto'],
                                        fill: ["rgba(0,156,166,1.00)"],
                                        stroke: [0,"rgb(0, 0, 0)","none"],
                                        userClass: "draggables set2"
                                    },
                                    {
                                        id: 'cross-third',
                                        type: 'rect',
                                        rect: ['301px', '244px', '15px', '82px', 'auto', 'auto'],
                                        fill: ["rgba(0,169,224,1.00)"],
                                        stroke: [0,"rgb(0, 0, 0)","none"],
                                        userClass: "draggables set3"
                                    }]
                                },
                                {
                                    id: 'wrong_feedback',
                                    symbolName: 'wrong_feedback',
                                    type: 'rect',
                                    rect: ['326px', '286', '150', '38', 'auto', 'auto']
                                },
                                {
                                    id: 'right_feedback',
                                    symbolName: 'right_feedback',
                                    type: 'rect',
                                    rect: ['326', '286', '149', '38', 'auto', 'auto']
                                },
                                {
                                    id: 'Group_title',
                                    type: 'group',
                                    rect: ['139', '260', '570', '22', 'auto', 'auto'],
                                    opacity: '0',
                                    c: [
                                    {
                                        id: 'image_arrow_right',
                                        type: 'image',
                                        rect: ['350px', '10px', '13px', '12px', 'auto', 'auto'],
                                        fill: ["rgba(0,0,0,0)",im+"image_arrow_right.png",'0px','0px']
                                    },
                                    {
                                        id: 'Text2Copy',
                                        type: 'text',
                                        rect: ['370px', '0px', '200px', '22px', 'auto', 'auto'],
                                        text: "<p style=\"margin: 0px;\">​DROP ON THESE BARS</p>",
                                        align: "left",
                                        font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, "px"], "rgba(166,169,170,1.00)", "400", "none", "normal", "break-word", "normal"],
                                        textStyle: ["", "", "", "", "none"]
                                    },
                                    {
                                        id: 'image_arrow_left',
                                        type: 'image',
                                        rect: ['161px', '10px', '12px', '12px', 'auto', 'auto'],
                                        fill: ["rgba(0,0,0,0)",im+"image_arrow_left.png",'0px','0px']
                                    },
                                    {
                                        id: 'Text2',
                                        type: 'text',
                                        rect: ['0px', '0px', '156px', '22px', 'auto', 'auto'],
                                        text: "<p style=\"margin: 0px;\">​DRAG THESE BARS</p>",
                                        align: "right",
                                        font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, "px"], "rgba(166,169,170,1.00)", "400", "none", "normal", "break-word", "normal"],
                                        textStyle: ["", "", "", "", "none"]
                                    }]
                                },
                                {
                                    id: 'head',
                                    type: 'group',
                                    rect: ['0', '19', '850', '171', 'auto', 'auto'],
                                    c: [
                                    {
                                        id: 'intro',
                                        display: 'block',
                                        type: 'text',
                                        rect: ['0px', '71px', '800px', '100px', 'auto', 'auto'],
                                        opacity: '0',
                                        text: "<p style=\"margin:0px\">​Hello and welcome to your Samsung Selling Zero and Thin Clients training. In this module, we will learn how to identify customers that need zero clients or thin clients and how to position them. But first, let's review some key terms from your previous modules exploring cloud access.&nbsp;\n</p><p style=\"margin:0px\">\n</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\">Match the terms with their correct definitions. Good luck!</span>\n</p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span>  </p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin: 0px;\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin: 0px;\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p>",
                                        align: "left",
                                        font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, "px"], "rgba(83,86,90,1.00)", "400", "none", "normal", "break-word", ""],
                                        textStyle: ["", "", "", "", "none"]
                                    },
                                    {
                                        id: 'heading',
                                        type: 'text',
                                        rect: ['0px', '19px', '850px', '43px', 'auto', 'auto'],
                                        opacity: '0',
                                        text: "<p style=\"margin: 0px;\">​Vocab Review\n</p><p style=\"margin: 0px;\"><span style=\"color: rgb(83, 86, 90);\"></span>\n</p>",
                                        align: "left",
                                        font: ['HelveticaNeueBold, \'Arial Bold\'', [35, "px"], "rgba(113,116,119,1.00)", "400", "none", "normal", "break-word", ""],
                                        textStyle: ["", "", "", "", "none"]
                                    },
                                    {
                                        id: 'title',
                                        type: 'text',
                                        rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                        opacity: '0',
                                        text: "<p style=\"margin: 0px;\">​Cloud Access: Selling Zero and Thin Clients\n\n</p>",
                                        align: "left",
                                        font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,122,194,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                        textStyle: ["", "", "", "", "none"]
                                    }]
                                }]
                            }]
                        },
                        {
                            id: 'overlay',
                            symbolName: 'overlay',
                            type: 'rect',
                            rect: ['0px', '140px', 'undefined', 'undefined', 'auto', 'auto'],
                            userClass: "full-width",
                            transform: [[],[],[],['1','0.70002']]
                        },
                        {
                            id: 'transparent_overplay',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '214px', '900px', '508px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "full-width"
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '691px', 'auto', 'auto'],
                            sizeRange: ['900px','','',''],
                            overflow: 'visible',
                            fill: ["rgba(245,245,245,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 5250,
                    autoPlay: true,
                    labels: {
                        "active_content": 4000,
                        "next": 4750
                    },
                    data: [
                        [
                            "eid14",
                            "left",
                            500,
                            750,
                            "easeOutCubic",
                            "${heading}",
                            '-50px',
                            '0px'
                        ],
                        [
                            "eid10",
                            "display",
                            250,
                            0,
                            "linear",
                            "${title}",
                            'none',
                            'block'
                        ],
                        [
                            "eid68",
                            "display",
                            0,
                            0,
                            "linear",
                            "${button_reset}",
                            'none',
                            'none'
                        ],
                        [
                            "eid45",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${button_reset}",
                            'none',
                            'block'
                        ],
                        [
                            "eid388",
                            "opacity",
                            2250,
                            250,
                            "linear",
                            "${Group_title}",
                            '0',
                            '1'
                        ],
                        [
                            "eid392",
                            "display",
                            0,
                            0,
                            "linear",
                            "${draggables}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${title}",
                            '0',
                            '1'
                        ],
                        [
                            "eid29",
                            "left",
                            4750,
                            500,
                            "easeOutQuad",
                            "${button_next}",
                            '560px',
                            '600px'
                        ],
                        [
                            "eid27",
                            "display",
                            0,
                            0,
                            "linear",
                            "${button_next}",
                            'none',
                            'none'
                        ],
                        [
                            "eid26",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${button_next}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17",
                            "left",
                            1000,
                            750,
                            "easeOutCubic",
                            "${intro}",
                            '-40px',
                            '0px'
                        ],
                        [
                            "eid25",
                            "left",
                            1750,
                            500,
                            "easeOutQuad",
                            "${button_previous}",
                            '40px',
                            '0px'
                        ],
                        [
                            "eid13",
                            "opacity",
                            500,
                            750,
                            "easeOutCubic",
                            "${heading}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "display",
                            500,
                            0,
                            "linear",
                            "${heading}",
                            'none',
                            'block'
                        ],
                        [
                            "eid22",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${button_previous}",
                            'none',
                            'none'
                        ],
                        [
                            "eid23",
                            "display",
                            1750,
                            0,
                            "easeOutQuad",
                            "${button_previous}",
                            'none',
                            'block'
                        ],
                        [
                            "eid28",
                            "opacity",
                            4750,
                            500,
                            "easeOutQuad",
                            "${button_next}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${intro}",
                            'block',
                            'block'
                        ],
                        [
                            "eid391",
                            "opacity",
                            2250,
                            250,
                            "linear",
                            "${Group_bg}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid24",
                            "opacity",
                            1750,
                            345,
                            "easeOutQuad",
                            "${button_previous}",
                            '0',
                            '1'
                        ],
                        [
                            "eid69",
                            "display",
                            0,
                            0,
                            "linear",
                            "${overlay_button_reset}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16",
                            "opacity",
                            1000,
                            750,
                            "easeOutCubic",
                            "${intro}",
                            '0',
                            '1'
                        ],
                        [
                            "eid46",
                            "display",
                            0,
                            0,
                            "linear",
                            "${transparent_overplay}",
                            'none',
                            'none'
                        ],
                            [ "eid18", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${overlay}', [] ] ],
                            [ "eid393", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${tab_3}', [] ] ],
                            [ "eid394", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${tab_1}', [] ] ],
                            [ "eid395", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${tab_2}', [] ] ],
                            [ "eid412", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${wrong_feedback}', [] ] ],
                            [ "eid411", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${right_feedback}', [] ] ],
                            [ "eid19", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${overlay}', [] ] ],
                            [ "eid398", "trigger", 2250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${tab_3}', [] ] ],
                            [ "eid396", "trigger", 2250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${tab_2}', [] ] ],
                            [ "eid397", "trigger", 2250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${tab_1}', [] ] ]
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
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '200px', '50px', 'auto', 'auto'],
                            fill: ['rgba(61,132,200,1.00)']
                        },
                        {
                            rect: ['39px', '16px', '122px', '18px', 'auto', 'auto'],
                            font: ['HelveticaNeueBold, Arial Bold', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(43, 29, 29)', 'normal', 'break-word', ''],
                            align: 'center',
                            id: 'TextCopy5',
                            text: '<p style=\"margin:0px\">Next​</p>',
                            textStyle: ['', '', '18px', '', ''],
                            type: 'text'
                        },
                        {
                            rect: ['167px', '15px', '11px', '19px', 'auto', 'auto'],
                            id: 'arrow_right',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/arrow_right.png', '0px', '0px']
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
                    autoPlay: false,
                    data: [

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
                            rect: ['0px', '0', '200', '50', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '1',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '200px', '50px', 'auto', 'auto'],
                                id: 'Rectangle2',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(61,132,200,1.00)']
                            },
                            {
                                font: ['HelveticaNeueBold', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(43, 29, 29)', 'normal', 'break-word', ''],
                                type: 'text',
                                text: '<p style=\"margin:0px\">​Previous</p>',
                                id: 'Text',
                                textStyle: ['', '', '18px', '', ''],
                                align: 'center',
                                rect: ['32px', '16px', '136px', '18px', 'auto', 'auto']
                            },
                            {
                                transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                                type: 'group',
                                id: 'chevron-right',
                                opacity: '1',
                                rect: ['14px', '14', '25', '21', 'auto', 'auto'],
                                c: [
                                {
                                    rect: ['7px', '3px', '15px', '15px', 'auto', 'auto'],
                                    transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                    id: 'Rectangle',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                },
                                {
                                    rect: ['4px', '3px', '15px', '15px', 'auto', 'auto'],
                                    transform: [[], ['45'], ['0', '1'], [1, 1, 1]],
                                    id: 'mask',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(61,132,200,1.00)']
                                }]
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
                    duration: 0,
                    autoPlay: false,
                    data: [

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
                            1500,
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
                            rect: ['-20px', '0', '200', '50', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '200px', '50px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(61,132,200,1.00)', [0, [['rgba(136,139,141,1.00)', 0], ['rgba(166,169,170,1.00)', 100]]]]
                            },
                            {
                                type: 'text',
                                rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                                text: '<p style=\"margin: 0px;\">Reset Activity​</p>',
                                id: 'Text',
                                textStyle: ['', '', '50px', '22px', ''],
                                align: 'left',
                                font: ['HelveticaNeueBold, Arial Bold', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(43, 29, 29)', 'normal', 'break-word', '']
                            },
                            {
                                rect: ['158px', '13px', '25px', '25px', 'auto', 'auto'],
                                id: 'arror-cricel',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/arror-cricel.png', '0px', '0px']
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
                    duration: 1092,
                    autoPlay: false,
                    data: [
                        [
                            "eid647",
                            "left",
                            92,
                            1000,
                            "linear",
                            "${Group}",
                            '-20px',
                            '0px'
                        ],
                        [
                            "eid646",
                            "opacity",
                            92,
                            1000,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "tab_1": {
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
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '316px', '81px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0.00)'],
                            c: [
                            {
                                rect: ['301px', '0px', '15px', '81px', 'auto', 'auto'],
                                id: 'Rectangle2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(83,86,90,1)']
                            },
                            {
                                rect: ['0', '0', '299', '82', 'auto', 'auto'],
                                id: 'Group',
                                opacity: '1',
                                type: 'group',
                                c: [
                                {
                                    type: 'image',
                                    id: 'image_bg_content_1',
                                    rect: ['0px', '0px', '299px', '82px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/image_bg_content_1.png', '0px', '0px']
                                }]
                            },
                            {
                                rect: ['0', '0', '299', '82', 'auto', 'auto'],
                                id: 'Group2',
                                opacity: '1',
                                type: 'group',
                                c: [
                                {
                                    type: 'image',
                                    id: 'image_bg_content',
                                    rect: ['0px', '0px', '299px', '82px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/image_bg_content.png', '0px', '0px']
                                }]
                            },
                            {
                                font: ['HelveticaNeueBold, Arial Bold', [16, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">Desktop virtualization</p><p style=\"margin: 0px;\">(Cloud infrastructure)​</p>',
                                type: 'text',
                                rect: ['15px', '18px', '240px', '43px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '316px', '82px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: true,
                    labels: {
                        "show_content_tab": 1000
                    },
                    data: [
                        [
                            "eid355",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid359",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${Group2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid361",
                            "background-color",
                            1000,
                            250,
                            "linear",
                            "${Rectangle2}",
                            'rgba(83,86,90,1)',
                            'rgba(122,184,0,1.00)'
                        ]
                    ]
                }
            },
            "tab_2": {
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
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '316px', '81px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0.00)'],
                            c: [
                            {
                                type: 'rect',
                                id: 'Rectangle2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['301px', '0px', '15px', '81px', 'auto', 'auto'],
                                fill: ['rgba(0,156,166,1.00)']
                            },
                            {
                                type: 'group',
                                id: 'Group',
                                opacity: '1',
                                rect: ['0', '0', '299', '82', 'auto', 'auto'],
                                c: [
                                {
                                    rect: ['0px', '0px', '299px', '82px', 'auto', 'auto'],
                                    id: 'image_bg_content_2',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/image_bg_content_2.png', '0px', '0px']
                                }]
                            },
                            {
                                type: 'group',
                                id: 'Group2',
                                opacity: '1',
                                rect: ['0', '0', '299', '82', 'auto', 'auto'],
                                c: [
                                {
                                    rect: ['0px', '0px', '299px', '82px', 'auto', 'auto'],
                                    id: 'image_bg_content',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/image_bg_content.png', '0px', '0px']
                                }]
                            },
                            {
                                font: ['HelveticaNeueBold, Arial Bold', [16, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">Zero client​</p>',
                                type: 'text',
                                rect: ['15px', '29px', '240px', '23px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '316px', '82px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: true,
                    labels: {
                        "show_content_tab": 1000
                    },
                    data: [
                        [
                            "eid355",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid359",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${Group2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid361",
                            "background-color",
                            1000,
                            250,
                            "linear",
                            "${Rectangle2}",
                            'rgba(83,86,90,1)',
                            'rgba(0,156,166,1.00)'
                        ]
                    ]
                }
            },
            "tab_3": {
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
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '316px', '81px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0.00)'],
                            c: [
                            {
                                type: 'rect',
                                id: 'Rectangle2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['301px', '0px', '15px', '81px', 'auto', 'auto'],
                                fill: ['rgba(0,169,224,1.00)']
                            },
                            {
                                type: 'group',
                                id: 'Group',
                                opacity: '1',
                                rect: ['0', '0', '299', '82', 'auto', 'auto'],
                                c: [
                                {
                                    rect: ['0px', '0px', '299px', '82px', 'auto', 'auto'],
                                    id: 'image_bg_content_3',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/image_bg_content_3.png', '0px', '0px']
                                }]
                            },
                            {
                                type: 'group',
                                id: 'Group2',
                                opacity: '1',
                                rect: ['0', '0', '299', '82', 'auto', 'auto'],
                                c: [
                                {
                                    rect: ['0px', '0px', '299px', '82px', 'auto', 'auto'],
                                    id: 'image_bg_content',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/image_bg_content.png', '0px', '0px']
                                }]
                            },
                            {
                                font: ['HelveticaNeueBold, Arial Bold', [16, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">Thin client​</p>',
                                type: 'text',
                                rect: ['15px', '29px', '240px', '23px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '316px', '82px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: true,
                    labels: {
                        "show_content_tab": 1000
                    },
                    data: [
                        [
                            "eid355",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid359",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${Group2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid361",
                            "background-color",
                            1000,
                            250,
                            "linear",
                            "${Rectangle2}",
                            'rgba(83,86,90,1)',
                            'rgba(0,169,224,1.00)'
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
                            rect: ['0px', '0px', '150', '38', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                id: 'image_bg_wrong',
                                type: 'image',
                                rect: ['0px', '0px', '150px', '38px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/image_bg_wrong.png', '0px', '0px']
                            },
                            {
                                rect: ['22px', '8px', '106px', '22px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['HelveticaNeueBold, Arial Bold', [16, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text3',
                                text: '<p style=\"margin: 0px;\">​Not quite!</p>',
                                align: 'center',
                                type: 'text'
                            }]
                        },
                        {
                            preload: 'auto',
                            rect: ['59', '19', '320px', '45px', 'auto', 'auto'],
                            source: ['media/INCORRECT_sound.wav'],
                            id: 'INCORRECT_sound',
                            type: 'audio',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '150px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: true,
                    data: [
                        [
                            "eid401",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Group}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid403",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${Group}",
                            '1',
                            '0'
                        ],
                            [ "eid413", "trigger", 48, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${INCORRECT_sound}', [] ] ]
                    ]
                }
            },
            "right_feedback": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '149', '38', 'auto', 'auto'],
                            id: 'Group2',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                id: 'image_bg_right',
                                type: 'image',
                                rect: ['0px', '0px', '149px', '38px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/image_bg_right.png', '0px', '0px']
                            },
                            {
                                rect: ['10px', '8px', '130px', '22px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['HelveticaNeueBold, Arial Bold', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text4',
                                text: '<p style=\"margin: 0px;\">All correct!​</p>',
                                align: 'center',
                                type: 'text'
                            }]
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/VDI_2VocabReview_Closing.mp3'],
                            id: 'VDI_2VocabReview_Closing',
                            rect: ['88', '13', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '149px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 30500,
                    autoPlay: true,
                    labels: {
                        "hide_feedback": 30500
                    },
                    data: [
                        [
                            "eid407",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Group2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid428",
                            "opacity",
                            30500,
                            0,
                            "linear",
                            "${Group2}",
                            '1',
                            '0'
                        ],
                            [ "eid414", "trigger", 104, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${VDI_2VocabReview_Closing}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-20515506");
