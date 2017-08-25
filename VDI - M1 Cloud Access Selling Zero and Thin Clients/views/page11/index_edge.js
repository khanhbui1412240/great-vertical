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
            js+"iframe.js"
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
                                rect: ['0px', '0px', '100%', '200px', 'auto', 'auto'],
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
                                    id: 'button_continue',
                                    symbolName: 'button_next',
                                    display: 'none',
                                    type: 'rect',
                                    rect: ['517px', '769px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    opacity: '0'
                                },
                                {
                                    id: 'button_previous',
                                    symbolName: 'button_previous',
                                    type: 'rect',
                                    rect: ['-20px', '769px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    opacity: '0'
                                },
                                {
                                    id: 'tab_1',
                                    symbolName: 'tab_1',
                                    type: 'rect',
                                    rect: ['0px', '240', '800', '303', 'auto', 'auto']
                                },
                                {
                                    id: 'tab_2',
                                    symbolName: 'tab_2',
                                    type: 'rect',
                                    rect: ['0px', '302px', 'undefined', 'undefined', 'auto', 'auto']
                                },
                                {
                                    id: 'tab_3',
                                    symbolName: 'tab_3',
                                    type: 'rect',
                                    rect: ['0px', '364px', 'undefined', 'undefined', 'auto', 'auto']
                                },
                                {
                                    id: 'tab_4',
                                    symbolName: 'tab_4',
                                    type: 'rect',
                                    rect: ['0px', '426px', 'undefined', 'undefined', 'auto', 'auto']
                                },
                                {
                                    id: 'click_tab2',
                                    symbolName: 'click_tab',
                                    type: 'rect',
                                    rect: ['0px', '241', '802', '488', 'auto', 'auto']
                                },
                                {
                                    id: 'header',
                                    type: 'group',
                                    rect: ['0', '19', '100%', '171', 'auto', 'auto'],
                                    c: [
                                    {
                                        id: 'intro',
                                        display: 'block',
                                        type: 'text',
                                        rect: ['-38px', '73px', '811px', '80px', 'auto', 'auto'],
                                        opacity: '0',
                                        text: "<p style=\"margin:0px\">​The healthcare industry isn’t the only vertical that can benefit from Samsung zero clients. Samsung zero clients are ideal for any organization that wants to improve productivity, lower support costs and protect sensitive data.&nbsp;</p><p style=\"margin:0px\">​</p><p style=\"margin: 0px; font-family: HelveticaNeueBold, 'Arial Bold'; font-weight: 400; font-style: normal; text-decoration: none; font-size: 16px; color: rgb(83, 86, 90); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">Tap each vertical below to learn how they can benefit from Samsung zero clients and why.<br></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin: 0px;\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin: 0px;\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p>",
                                        align: "left",
                                        font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, "px"], "rgba(83,86,90,1.00)", "400", "none", "normal", "break-word", ""],
                                        textStyle: ["", "", "", "", "none"]
                                    },
                                    {
                                        id: 'heading',
                                        display: 'none',
                                        type: 'text',
                                        rect: ['-50px', '19px', '100%', '41px', 'auto', 'auto'],
                                        opacity: '0',
                                        text: "<p style=\"margin: 0px;\">​Zero Clients in Other Industries\n</p><p style=\"margin: 0px; font-family: HelveticaNeueBold, 'Arial Bold'; font-weight: 400; font-style: normal; text-decoration: none; font-size: 35px; color: rgb(113, 116, 119); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 36px;\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold'; font-weight: 400; font-style: normal; text-decoration: none; font-size: 35px; color: rgb(113, 116, 119); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\"></span>\n<span style=\"color: rgb(83, 86, 90);\"></span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(83, 86, 90);\"></span>\n</p>",
                                        align: "left",
                                        font: ['HelveticaNeueBold, \'Arial Bold\'', [35, "px"], "rgba(113,116,119,1.00)", "400", "none", "normal", "break-word", ""],
                                        textStyle: ["", "", "", "", "none"]
                                    },
                                    {
                                        id: 'title',
                                        display: 'none',
                                        type: 'text',
                                        rect: ['0px', '0px', '408px', '19px', 'auto', 'auto'],
                                        opacity: '0.88',
                                        text: "<p style=\"margin: 0px;\">Cloud Access: Selling Zero and Thin Clients\n\n​</p>",
                                        align: "left",
                                        font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,122,194,1.00)", "400", "none", "normal", "break-word", ""],
                                        textStyle: ["", "", "", "", "none"]
                                    }]
                                }]
                            }]
                        },
                        {
                            id: 'overlay',
                            symbolName: 'overlay',
                            type: 'rect',
                            rect: ['0px', '252px', 'undefined', 'undefined', 'auto', 'auto'],
                            userClass: "full-width",
                            transform: [[],[],[],['1','1.22227']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '869px', 'auto', 'auto'],
                            sizeRange: ['900px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(245,245,245,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 9000,
                    autoPlay: true,
                    labels: {
                        "show_continue": 6000
                    },
                    data: [
                        [
                            "eid1114",
                            "left",
                            6000,
                            500,
                            "linear",
                            "${button_continue}",
                            '512px',
                            '602px'
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
                            "eid1116",
                            "opacity",
                            6000,
                            500,
                            "linear",
                            "${button_continue}",
                            '0',
                            '1'
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
                            "eid37",
                            "display",
                            0,
                            0,
                            "linear",
                            "${intro}",
                            'block',
                            'block'
                        ],
                        [
                            "eid49",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${intro}",
                            'block',
                            'block'
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
                            "eid1493",
                            "opacity",
                            1250,
                            0,
                            "linear",
                            "${heading}",
                            '1',
                            '1'
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
                            "eid581",
                            "left",
                            3315,
                            867,
                            "linear",
                            "${button_previous}",
                            '-20px',
                            '0px'
                        ],
                        [
                            "eid1540",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${button_continue}",
                            'none',
                            'block'
                        ],
                            [ "eid670", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${overlay}', [] ] ],
                            [ "eid1586", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${tab_3}', [] ] ],
                            [ "eid1584", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${tab_4}', [] ] ],
                            [ "eid1111", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${button_continue}', [] ] ],
                            [ "eid1585", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${tab_1}', [] ] ],
                            [ "eid1583", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${tab_2}', [] ] ],
                            [ "eid671", "trigger", 2500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${overlay}', [] ] ],
                            [ "eid1590", "trigger", 2750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${tab_1}', [] ] ],
                            [ "eid1587", "trigger", 2750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${tab_2}', [] ] ],
                            [ "eid1589", "trigger", 2750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${tab_4}', [] ] ],
                            [ "eid1588", "trigger", 2750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${tab_3}', [] ] ]
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
                            type: 'image',
                            id: 'arrow_left',
                            rect: ['22px', '15px', '10px', '19px', 'auto', 'auto'],
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
            "button_done": {
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
                            rect: ['-40px', '0', '200', '50', 'auto', 'auto'],
                            display: 'none',
                            opacity: '0',
                            id: 'Group',
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
                                font: ['HelveticaNeueBold, Arial Bold', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(43, 29, 29)', 'normal', 'break-word', ''],
                                type: 'text',
                                align: 'center',
                                id: 'Text',
                                text: '<p style=\"margin:0px\">Done</p>',
                                textStyle: ['', '', '18px', '', ''],
                                rect: ['39px', '16px', '122px', '18px', 'auto', 'auto']
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
                    duration: 645,
                    autoPlay: false,
                    data: [
                        [
                            "eid653",
                            "left",
                            90,
                            555,
                            "linear",
                            "${Group}",
                            '-40px',
                            '0px'
                        ],
                        [
                            "eid652",
                            "opacity",
                            90,
                            555,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid657",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            'none',
                            'none'
                        ],
                        [
                            "eid658",
                            "display",
                            90,
                            0,
                            "linear",
                            "${Group}",
                            'none',
                            'block'
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
                            rect: ['0px', '0px', '100%', '461px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'overlay',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(245,245,245,0.75)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '789px', '461px']
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
                            rect: ['0px', '0', '200', '50', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '1',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '200px', '50px', 'auto', 'auto'],
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                id: 'Rectangle',
                                opacity: '1',
                                type: 'rect',
                                fill: ['rgba(61,132,200,1.00)']
                            },
                            {
                                rect: ['39px', '16px', '122px', '18px', 'auto', 'auto'],
                                font: ['HelveticaNeueBold, Arial Bold', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(43, 29, 29)', 'normal', 'break-word', ''],
                                text: 'Next',
                                id: 'Text',
                                textStyle: ['', '', '18px', '', ''],
                                align: 'center',
                                type: 'text'
                            },
                            {
                                type: 'image',
                                id: 'arrow_right',
                                rect: ['167px', '15px', '11px', '19px', 'auto', 'auto'],
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
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tab_4": {
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
                            id: 'tab_1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '800px', '303px', 'auto', 'auto'],
                            opacity: '0',
                            clip: 'rect(0px 800px 60px 0px)',
                            fill: ['rgba(255,255,255,0.00)'],
                            c: [
                            {
                                rect: ['0px', '0px', '400px', '303px', 'auto', 'auto'],
                                type: 'rect',
                                id: 'content_1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(136,139,141,1.00)'],
                                c: [
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2',
                                    text: '<p style=\"margin: 0px;\">​Improve IT and employee productivity while </p><p style=\"margin: 0px;\">cutting operating costs.</p><p style=\"margin: 0px;\">\n</p>',
                                    align: 'left',
                                    rect: ['32px', '77px', '352px', '42px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy2',
                                    text: '<p style=\"margin: 0px;\">​•</p>',
                                    align: 'left',
                                    rect: ['20px', '77px', '10px', '19px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy9',
                                    text: '<p style=\"margin: 0px;\">Create a more productive work environment with </p><p style=\"margin: 0px;\">a clutter-free work space, high-quality monitors </p><p style=\"margin: 0px;\">and ergonomic features for a more productive </p><p style=\"margin: 0px;\">work environment.​</p>',
                                    align: 'left',
                                    rect: ['32px', '122px', '352px', '78px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy7',
                                    text: '<p style=\"margin: 0px;\">​•</p>',
                                    align: 'left',
                                    rect: ['20px', '122px', '10px', '19px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy6',
                                    text: '<p style=\"margin: 0px;\">​Reduce IT service calls and centralize end-user </p><p style=\"margin: 0px;\">computing.</p><p style=\"margin: 0px;\"></p>',
                                    align: 'left',
                                    rect: ['32px', '203px', '362px', '42px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy10',
                                    text: '<p style=\"margin: 0px;\">​•</p>',
                                    align: 'left',
                                    rect: ['20px', '203px', '10px', '19px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy12',
                                    text: '<p style=\"margin: 0px;\">​Work more economically with dramatically lower </p><p style=\"margin: 0px;\">electricity and support costs.</p><p style=\"margin: 0px;\"></p>',
                                    align: 'left',
                                    rect: ['32px', '248px', '362px', '40px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy11',
                                    text: '<p style=\"margin: 0px;\">​•</p>',
                                    align: 'left',
                                    rect: ['20px', '248px', '10px', '19px', 'auto', 'auto']
                                },
                                {
                                    rect: ['0px', '60px', '400px', '1px', 'auto', 'auto'],
                                    id: 'line',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                },
                                {
                                    font: ['HelveticaNeueBold, Arial Bold', [16, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text',
                                    text: '<p style=\"margin: 0px;\">​Business</p>',
                                    align: 'left',
                                    rect: ['17px', '20px', '190px', '22px', 'auto', 'auto']
                                }]
                            },
                            {
                                type: 'image',
                                id: 'image_content_4',
                                rect: ['400px', '0px', '400px', '303px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/image_content_4.png', '0px', '0px']
                            },
                            {
                                rect: ['400', '0', '400', '303', 'auto', 'auto'],
                                id: 'Group',
                                opacity: '1',
                                type: 'group',
                                c: [
                                {
                                    type: 'image',
                                    id: 'image_content_4_gray',
                                    rect: ['0px', '0px', '400px', '303px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/image_content_4_gray.png', '0px', '0px']
                                }]
                            },
                            {
                                rect: ['0px', '0px', '800px', '60px', 'auto', 'auto'],
                                type: 'rect',
                                display: 'block',
                                id: 'RectangleClick',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(255,255,255,0)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '303px']
                        }
                    }
                },
                timeline: {
                    duration: 6250,
                    autoPlay: true,
                    labels: {
                        "active_tab": 500,
                        "active_move_down": 1000,
                        "active_move_up": 2000,
                        "show_content_down": 3000,
                        "hide_content_up": 4000,
                        "deactive_move_down": 5000,
                        "deactive_move_up": 6000
                    },
                    data: [
                        [
                            "eid1559",
                            "opacity",
                            3000,
                            250,
                            "linear",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1561",
                            "opacity",
                            4000,
                            250,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1606",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${RectangleClick}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1607",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${RectangleClick}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1555",
                            "clip",
                            0,
                            0,
                            "linear",
                            "${tab_1}",
                            [0,800,60,0],
                            [0,800,60,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1557",
                            "clip",
                            3000,
                            250,
                            "linear",
                            "${tab_1}",
                            [0,800,60,0],
                            [0,800,303,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1563",
                            "clip",
                            4000,
                            250,
                            "linear",
                            "${tab_1}",
                            [0,800,303,0],
                            [0,800,60,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1567",
                            "top",
                            1000,
                            250,
                            "linear",
                            "${tab_1}",
                            '0px',
                            '243px'
                        ],
                        [
                            "eid1569",
                            "top",
                            2000,
                            250,
                            "linear",
                            "${tab_1}",
                            '243px',
                            '0px'
                        ],
                        [
                            "eid1573",
                            "top",
                            5000,
                            250,
                            "linear",
                            "${tab_1}",
                            '0px',
                            '243px'
                        ],
                        [
                            "eid1575",
                            "top",
                            6000,
                            250,
                            "linear",
                            "${tab_1}",
                            '243px',
                            '0px'
                        ],
                        [
                            "eid1601",
                            "background-color",
                            500,
                            250,
                            "linear",
                            "${content_1}",
                            'rgba(136,139,141,1.00)',
                            'rgba(104,91,199,1.00)'
                        ],
                        [
                            "eid1565",
                            "background-color",
                            4000,
                            250,
                            "linear",
                            "${content_1}",
                            'rgba(104,91,199,1.00)',
                            'rgba(136,139,141,1.00)'
                        ],
                        [
                            "eid1549",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${tab_1}",
                            '0.000000',
                            '1'
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
                            id: 'tab_1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '800px', '303px', 'auto', 'auto'],
                            opacity: '0',
                            clip: 'rect(0px 800px 60px 0px)',
                            fill: ['rgba(255,255,255,0.00)'],
                            c: [
                            {
                                rect: ['0px', '0px', '400px', '303px', 'auto', 'auto'],
                                type: 'rect',
                                id: 'content_1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(136,139,141,1.00)'],
                                c: [
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2',
                                    text: '<p style=\"margin: 0px;\">​Harden data security by centralizing sensitive </p><p style=\"margin: 0px;\">data to a secure cloud or data center.\n</p>',
                                    align: 'left',
                                    rect: ['32px', '77px', '352px', '42px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy2',
                                    text: '<p style=\"margin: 0px;\">​•</p>',
                                    align: 'left',
                                    rect: ['20px', '77px', '10px', '19px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy9',
                                    text: '<p style=\"margin: 0px;\">Reduce IT overhead end-client workload to </p><p style=\"margin: 0px;\">allow focus on more critical IT priorities.​</p>',
                                    align: 'left',
                                    rect: ['32px', '122px', '352px', '40px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy7',
                                    text: '<p style=\"margin: 0px;\">​•</p>',
                                    align: 'left',
                                    rect: ['20px', '122px', '10px', '19px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy6',
                                    text: '<p style=\"margin: 0px;\">​Improve employee productivity by reducing </p><p style=\"margin: 0px;\">workspace clutter.</p>',
                                    align: 'left',
                                    rect: ['31px', '165px', '362px', '42px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy10',
                                    text: '<p style=\"margin: 0px;\">​•</p>',
                                    align: 'left',
                                    rect: ['20px', '165px', '10px', '19px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy12',
                                    text: '<p style=\"margin: 0px;\">​Provide high-resolution displays that can be </p><p style=\"margin: 0px;\">adjusted to each employee’s needs.</p>',
                                    align: 'left',
                                    rect: ['32px', '210px', '362px', '40px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy11',
                                    text: '<p style=\"margin: 0px;\">​•</p>',
                                    align: 'left',
                                    rect: ['20px', '210px', '10px', '19px', 'auto', 'auto']
                                },
                                {
                                    rect: ['0px', '60px', '400px', '1px', 'auto', 'auto'],
                                    id: 'line',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                },
                                {
                                    font: ['HelveticaNeueBold, Arial Bold', [16, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text',
                                    text: '<p style=\"margin: 0px;\">​Government</p>',
                                    align: 'left',
                                    rect: ['17px', '20px', '190px', '22px', 'auto', 'auto']
                                }]
                            },
                            {
                                type: 'image',
                                id: 'image_content_3',
                                rect: ['400px', '0px', '400px', '303px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/image_content_3.png', '0px', '0px']
                            },
                            {
                                rect: ['400', '0', '400', '303', 'auto', 'auto'],
                                id: 'Group',
                                opacity: '1',
                                type: 'group',
                                c: [
                                {
                                    type: 'image',
                                    id: 'image_content_3_gray',
                                    rect: ['0px', '0px', '400px', '303px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/image_content_3_gray.png', '0px', '0px']
                                }]
                            },
                            {
                                rect: ['0px', '0px', '800px', '60px', 'auto', 'auto'],
                                type: 'rect',
                                display: 'block',
                                id: 'RectangleClick',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(255,255,255,0)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '303px']
                        }
                    }
                },
                timeline: {
                    duration: 6250,
                    autoPlay: true,
                    labels: {
                        "active_tab": 500,
                        "active_move_down": 1000,
                        "active_move_up": 2000,
                        "show_content_down": 3000,
                        "hide_content_up": 4000,
                        "deactive_move_down": 5000,
                        "deactive_move_up": 6000
                    },
                    data: [
                        [
                            "eid1567",
                            "top",
                            1000,
                            250,
                            "linear",
                            "${tab_1}",
                            '0px',
                            '243px'
                        ],
                        [
                            "eid1569",
                            "top",
                            2000,
                            250,
                            "linear",
                            "${tab_1}",
                            '243px',
                            '0px'
                        ],
                        [
                            "eid1573",
                            "top",
                            5000,
                            250,
                            "linear",
                            "${tab_1}",
                            '0px',
                            '243px'
                        ],
                        [
                            "eid1575",
                            "top",
                            6000,
                            250,
                            "linear",
                            "${tab_1}",
                            '243px',
                            '0px'
                        ],
                        [
                            "eid1604",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${RectangleClick}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1605",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${RectangleClick}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1599",
                            "background-color",
                            500,
                            250,
                            "linear",
                            "${content_1}",
                            'rgba(136,139,141,1.00)',
                            'rgba(0,169,224,1.00)'
                        ],
                        [
                            "eid1565",
                            "background-color",
                            4000,
                            250,
                            "linear",
                            "${content_1}",
                            'rgba(0,169,224,1.00)',
                            'rgba(136,139,141,1.00)'
                        ],
                        [
                            "eid1559",
                            "opacity",
                            3000,
                            250,
                            "linear",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1561",
                            "opacity",
                            4000,
                            250,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1555",
                            "clip",
                            0,
                            0,
                            "linear",
                            "${tab_1}",
                            [0,800,60,0],
                            [0,800,60,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1557",
                            "clip",
                            3000,
                            250,
                            "linear",
                            "${tab_1}",
                            [0,800,60,0],
                            [0,800,303,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1563",
                            "clip",
                            4000,
                            250,
                            "linear",
                            "${tab_1}",
                            [0,800,303,0],
                            [0,800,60,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1549",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${tab_1}",
                            '0.000000',
                            '1'
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
                            id: 'tab_1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '800px', '303px', 'auto', 'auto'],
                            opacity: '0',
                            clip: 'rect(0px 800px 60px 0px)',
                            fill: ['rgba(255,255,255,0.00)'],
                            c: [
                            {
                                rect: ['0px', '0px', '400px', '303px', 'auto', 'auto'],
                                type: 'rect',
                                id: 'content_1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(136,139,141,1.00)'],
                                c: [
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2',
                                    text: '<p style=\"margin: 0px;\">​Limit tampering/theft with an AiO design.\n</p>',
                                    align: 'left',
                                    rect: ['32px', '77px', '352px', '22px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy3',
                                    text: '<p style=\"margin: 0px;\">​Smart usage.</p>',
                                    align: 'left',
                                    rect: ['32px', '170px', '352px', '22px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy6',
                                    text: '<p style=\"margin: 0px;\">​Follow Me user sessions for class changes.</p>',
                                    align: 'left',
                                    rect: ['31px', '195px', '362px', '22px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy10',
                                    text: '<p style=\"margin: 0px;\">​•</p>',
                                    align: 'left',
                                    rect: ['20px', '195px', '10px', '19px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy12',
                                    text: '<p style=\"margin: 0px;\">​Secure SSO (Imprivata) for secure, single sign-on </p><p style=\"margin: 0px;\">access that\'s fast and easy.</p>',
                                    align: 'left',
                                    rect: ['32px', '220px', '362px', '40px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy11',
                                    text: '<p style=\"margin: 0px;\">​•</p>',
                                    align: 'left',
                                    rect: ['20px', '220px', '10px', '19px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy',
                                    text: '<p style=\"margin: 0px;\">​•</p>',
                                    align: 'left',
                                    rect: ['20px', '170px', '10px', '19px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy2',
                                    text: '<p style=\"margin: 0px;\">​•</p>',
                                    align: 'left',
                                    rect: ['20px', '77px', '10px', '19px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy5',
                                    text: 'Reduced setup, deployment and service costs.\n',
                                    align: 'left',
                                    rect: ['32px', '102px', '352px', '22px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy4',
                                    text: '<p style=\"margin: 0px;\">​•</p>',
                                    align: 'left',
                                    rect: ['20px', '102px', '10px', '19px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy8',
                                    text: '<p style=\'margin: 0px;\'>&#8203</p>',
                                    align: 'left',
                                    rect: ['32px', '127px', '352px', '22px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy7',
                                    text: '<p style=\"margin: 0px;\">​•</p>',
                                    align: 'left',
                                    rect: ['20px', '127px', '10px', '19px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy9',
                                    text: '<p style=\"margin: 0px;\">Zero-out the desktop to maximize VDI and DaaS </p><p style=\"margin: 0px;\">investment.​</p>',
                                    align: 'left',
                                    rect: ['32px', '127px', '352px', '40px', 'auto', 'auto']
                                },
                                {
                                    rect: ['0px', '60px', '400px', '1px', 'auto', 'auto'],
                                    id: 'line',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                },
                                {
                                    font: ['HelveticaNeueBold, Arial Bold', [16, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text',
                                    text: '<p style=\"margin: 0px;\">​Education</p>',
                                    align: 'left',
                                    rect: ['17px', '20px', '190px', '22px', 'auto', 'auto']
                                }]
                            },
                            {
                                type: 'image',
                                id: 'image_content_2',
                                rect: ['400px', '0px', '400px', '303px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/image_content_2.png', '0px', '0px']
                            },
                            {
                                rect: ['400', '0', '400', '303', 'auto', 'auto'],
                                id: 'Group',
                                opacity: '1',
                                type: 'group',
                                c: [
                                {
                                    type: 'image',
                                    id: 'image_content_2_gray',
                                    rect: ['0px', '0px', '400px', '303px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/image_content_2_gray.png', '0px', '0px']
                                }]
                            },
                            {
                                rect: ['0px', '0px', '800px', '60px', 'auto', 'auto'],
                                type: 'rect',
                                display: 'block',
                                id: 'RectangleClick',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(255,255,255,0)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '303px']
                        }
                    }
                },
                timeline: {
                    duration: 6250,
                    autoPlay: true,
                    labels: {
                        "active_tab": 500,
                        "active_move_down": 1000,
                        "active_move_up": 2000,
                        "show_content_down": 3000,
                        "hide_content_up": 4000,
                        "deactive_move_down": 5000,
                        "deactive_move_up": 6000
                    },
                    data: [
                        [
                            "eid1602",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${RectangleClick}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1603",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${RectangleClick}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1567",
                            "top",
                            1000,
                            250,
                            "linear",
                            "${tab_1}",
                            '0px',
                            '243px'
                        ],
                        [
                            "eid1569",
                            "top",
                            2000,
                            250,
                            "linear",
                            "${tab_1}",
                            '243px',
                            '0px'
                        ],
                        [
                            "eid1573",
                            "top",
                            5000,
                            250,
                            "linear",
                            "${tab_1}",
                            '0px',
                            '243px'
                        ],
                        [
                            "eid1575",
                            "top",
                            6000,
                            250,
                            "linear",
                            "${tab_1}",
                            '243px',
                            '0px'
                        ],
                        [
                            "eid1597",
                            "background-color",
                            500,
                            250,
                            "linear",
                            "${content_1}",
                            'rgba(136,139,141,1.00)',
                            'rgba(122,184,0,1.00)'
                        ],
                        [
                            "eid1565",
                            "background-color",
                            4000,
                            250,
                            "linear",
                            "${content_1}",
                            'rgba(122,184,0,1.00)',
                            'rgba(136,139,141,1.00)'
                        ],
                        [
                            "eid1559",
                            "opacity",
                            3000,
                            250,
                            "linear",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1561",
                            "opacity",
                            4000,
                            250,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1555",
                            "clip",
                            0,
                            0,
                            "linear",
                            "${tab_1}",
                            [0,800,60,0],
                            [0,800,60,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1557",
                            "clip",
                            3000,
                            250,
                            "linear",
                            "${tab_1}",
                            [0,800,60,0],
                            [0,800,303,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1563",
                            "clip",
                            4000,
                            250,
                            "linear",
                            "${tab_1}",
                            [0,800,303,0],
                            [0,800,60,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1549",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${tab_1}",
                            '0.000000',
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
                            id: 'tab_1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '800px', '303px', 'auto', 'auto'],
                            opacity: '0',
                            clip: 'rect(0px 800px 60px 0px)',
                            fill: ['rgba(255,255,255,0.00)'],
                            c: [
                            {
                                rect: ['0px', '0px', '400px', '303px', 'auto', 'auto'],
                                type: 'rect',
                                id: 'content_1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(136,139,141,1.00)'],
                                c: [
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2',
                                    text: '<p style=\"margin: 0px;\">​Innovation, efficiency and security.\n</p>',
                                    align: 'left',
                                    rect: ['32px', '77px', '352px', '22px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy3',
                                    text: '<p style=\"margin: 0px;\">​Centralized data with secure endpoints.</p>',
                                    align: 'left',
                                    rect: ['32px', '152px', '352px', '22px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy6',
                                    text: '<p style=\"margin: 0px;\">​All-in-One (AiO) designs to free up workspace.</p>',
                                    align: 'left',
                                    rect: ['32px', '177px', '362px', '22px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy2',
                                    text: '<p style=\"margin: 0px;\">​•</p>',
                                    align: 'left',
                                    rect: ['20px', '77px', '10px', '19px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy5',
                                    text: '<p style=\"margin: 0px;\"><span style=\"font-family: HelveticaNeueRegular, Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 16px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">Multi-monitor for greater productivity.&nbsp;</span>\n</p>',
                                    align: 'left',
                                    rect: ['32px', '102px', '352px', '22px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy4',
                                    text: '<p style=\"margin: 0px;\">​•</p>',
                                    align: 'left',
                                    rect: ['20px', '102px', '10px', '19px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy8',
                                    text: '<p style=\'margin: 0px;\'>&#8203</p>',
                                    align: 'left',
                                    rect: ['32px', '127px', '352px', '22px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy7',
                                    text: '<p style=\"margin: 0px;\">​•</p>',
                                    align: 'left',
                                    rect: ['20px', '127px', '10px', '19px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy',
                                    text: '<p style=\"margin: 0px;\">​•</p>',
                                    align: 'left',
                                    rect: ['20px', '152px', '10px', '19px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy10',
                                    text: '<p style=\"margin: 0px;\">​•</p>',
                                    align: 'left',
                                    rect: ['20px', '177px', '10px', '19px', 'auto', 'auto']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text2Copy9',
                                    text: '<p style=\"margin: 0px; font-family: HelveticaNeueRegular, Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 16px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">Performance and hi-res streaming video.&nbsp;</p>',
                                    align: 'left',
                                    rect: ['32px', '127px', '352px', '22px', 'auto', 'auto']
                                },
                                {
                                    rect: ['0px', '60px', '400px', '1px', 'auto', 'auto'],
                                    id: 'line',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                },
                                {
                                    font: ['HelveticaNeueBold, Arial Bold', [16, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text',
                                    text: '<p style=\"margin: 0px;\">​Finance</p>',
                                    align: 'left',
                                    rect: ['17px', '20px', '190px', '22px', 'auto', 'auto']
                                }]
                            },
                            {
                                type: 'image',
                                id: 'image_content_1',
                                rect: ['400px', '0px', '400px', '303px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/image_content_1.jpg', '0px', '0px']
                            },
                            {
                                rect: ['400', '0', '400', '303', 'auto', 'auto'],
                                id: 'Group',
                                opacity: '1',
                                type: 'group',
                                c: [
                                {
                                    type: 'image',
                                    id: 'image_content_1_gray',
                                    rect: ['0px', '0px', '400px', '303px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/image_content_1_gray.jpg', '0px', '0px']
                                }]
                            },
                            {
                                rect: ['0px', '0px', '800px', '60px', 'auto', 'auto'],
                                type: 'rect',
                                display: 'block',
                                id: 'RectangleClick',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(255,255,255,0)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '303px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: true,
                    labels: {
                        "active_tab": 500,
                        "show_content_down": 1000,
                        "hide_content_up": 2000
                    },
                    data: [
                        [
                            "eid1592",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${RectangleClick}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1593",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${RectangleClick}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1559",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1561",
                            "opacity",
                            2000,
                            250,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1595",
                            "background-color",
                            500,
                            250,
                            "linear",
                            "${content_1}",
                            'rgba(136,139,141,1.00)',
                            'rgba(0,122,194,1)'
                        ],
                        [
                            "eid1565",
                            "background-color",
                            2000,
                            250,
                            "linear",
                            "${content_1}",
                            'rgba(0,122,194,1)',
                            'rgba(136,139,141,1.00)'
                        ],
                        [
                            "eid1555",
                            "clip",
                            0,
                            0,
                            "linear",
                            "${tab_1}",
                            [0,800,60,0],
                            [0,800,60,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1557",
                            "clip",
                            1000,
                            250,
                            "linear",
                            "${tab_1}",
                            [0,800,60,0],
                            [0,800,303,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1563",
                            "clip",
                            2000,
                            250,
                            "linear",
                            "${tab_1}",
                            [0,800,303,0],
                            [0,800,60,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1549",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${tab_1}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "click_tab": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '802px', '60px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'block',
                            id: 'click_1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['0px', '62px', '802px', '60px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'block',
                            id: 'click_2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['0px', '124px', '802px', '60px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'block',
                            id: 'click_3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['0px', '186px', '802px', '60px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'block',
                            id: 'click_4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '802px', '488px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    labels: {
                        "show_1": 1000,
                        "show_2": 2000,
                        "show_3": 3000,
                        "show_4": 4000
                    },
                    data: [
                        [
                            "eid1631",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${click_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1636",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${click_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1637",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${click_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1639",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${click_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1630",
                            "top",
                            0,
                            0,
                            "linear",
                            "${click_4}",
                            '186px',
                            '186px'
                        ],
                        [
                            "eid1627",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${click_4}",
                            '186px',
                            '429px'
                        ],
                        [
                            "eid1640",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${click_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1628",
                            "top",
                            0,
                            0,
                            "linear",
                            "${click_2}",
                            '62px',
                            '62px'
                        ],
                        [
                            "eid1625",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${click_2}",
                            '62px',
                            '305px'
                        ],
                        [
                            "eid1638",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${click_2}",
                            '305px',
                            '62px'
                        ],
                        [
                            "eid1629",
                            "top",
                            0,
                            0,
                            "linear",
                            "${click_3}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid1626",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${click_3}",
                            '124px',
                            '367px'
                        ],
                        [
                            "eid1641",
                            "top",
                            4000,
                            0,
                            "linear",
                            "${click_3}",
                            '367px',
                            '124px'
                        ],
                        [
                            "eid1624",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${click_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1632",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${click_1}",
                            'none',
                            'block'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-20515506");
