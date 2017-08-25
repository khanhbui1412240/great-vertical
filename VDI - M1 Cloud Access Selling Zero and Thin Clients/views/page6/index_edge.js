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
                                rect: ['0px', '0px', '100%', '214px', 'auto', 'auto'],
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
                                    id: 'button_previous',
                                    symbolName: 'button_previous',
                                    display: 'none',
                                    type: 'rect',
                                    rect: ['42px', '698px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    opacity: '0'
                                },
                                {
                                    id: 'button_continue',
                                    symbolName: 'button_next',
                                    type: 'rect',
                                    rect: ['600px', '699px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    opacity: '1'
                                },
                                {
                                    id: 'VDI_6_Closing',
                                    display: 'none',
                                    type: 'audio',
                                    tag: 'audio',
                                    rect: ['691', '546', '320px', '45px', 'auto', 'auto'],
                                    source: [aud+"VDI_6_Closing.mp3"],
                                    preload: 'auto'
                                },
                                {
                                    id: 'Symbol_1',
                                    symbolName: 'Symbol_1',
                                    type: 'rect',
                                    rect: ['0', '254', '253', '194', 'auto', 'auto']
                                },
                                {
                                    id: 'Symbol_2',
                                    symbolName: 'Symbol_2',
                                    type: 'rect',
                                    rect: ['274px', '254px', 'undefined', 'undefined', 'auto', 'auto']
                                },
                                {
                                    id: 'Symbol_3',
                                    symbolName: 'Symbol_3',
                                    type: 'rect',
                                    rect: ['547', '254px', 'undefined', 'undefined', 'auto', 'auto']
                                },
                                {
                                    id: 'Symbol_4',
                                    symbolName: 'Symbol_4',
                                    type: 'rect',
                                    rect: ['0px', '464px', 'undefined', 'undefined', 'auto', 'auto']
                                },
                                {
                                    id: 'Symbol_5',
                                    symbolName: 'Symbol_5',
                                    type: 'rect',
                                    rect: ['274px', '464px', 'undefined', 'undefined', 'auto', 'auto']
                                },
                                {
                                    id: 'Symbol_6',
                                    symbolName: 'Symbol_6',
                                    type: 'rect',
                                    rect: ['547px', '464px', 'undefined', 'undefined', 'auto', 'auto']
                                },
                                {
                                    id: 'intro',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['-46px', '92px', '817px', '97px', 'auto', 'auto'],
                                    opacity: '0',
                                    text: "<p style=\"margin:0px\">​Once you’ve identified that your customer needs a zero client, the next step is to communicate with them the several key benefits of using a zero client. Below are some statements about zero clients. Can you guess which benefits are true and which ones are false?&nbsp;&nbsp;\n</p><p style=\"margin:0px\">​<span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\">​</span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\">​Review the statements below, tap only the statements that are TRUE.</span></p><p style=\"margin:0px\">​</p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">\n\n</p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span>\n</p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin: 0px;\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin: 0px;\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p>",
                                    align: "left",
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, "px"], "rgba(83,86,90,1.00)", "400", "none", "normal", "break-word", ""],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'heading',
                                    display: 'none',
                                    type: 'text',
                                    rect: ['-50px', '41px', '800px', '42px', 'auto', 'auto'],
                                    opacity: '0',
                                    text: "<p style=\"margin: 0px;\">​Zero Client Benefits\n</p><p style=\"margin: 0px;\"><span style=\"color: rgb(83, 86, 90);\"></span>\n</p>",
                                    align: "left",
                                    font: ['HelveticaNeueBold, \'Arial Bold\'', [35, "px"], "rgba(113,116,119,1.00)", "400", "none", "normal", "break-word", ""],
                                    textStyle: ["", "", "36px", "", "none"]
                                },
                                {
                                    id: 'title',
                                    display: 'none',
                                    type: 'text',
                                    rect: ['2px', '19px', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0',
                                    text: "<p style=\"margin: 0px;\">​Cloud Access: Selling Zero and Thin Clients\n\n\n\n\n</p><p style=\"margin: 0px;\">\n\n\n\n\n</p>",
                                    align: "left",
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,122,194,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'overlay',
                            symbolName: 'overlay_1',
                            type: 'rect',
                            rect: ['0px', '193px', 'undefined', 'undefined', 'auto', 'auto'],
                            userClass: "full-width",
                            transform: [[],[],[],['1','0.92302']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '798px', 'auto', 'auto'],
                            sizeRange: ['900px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(245,245,245,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 42555,
                    autoPlay: true,
                    labels: {
                        "start": 250,
                        "show_buttons": 1750,
                        "show_continue": 7000
                    },
                    data: [
                        [
                            "eid62",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${button_previous}",
                            'none',
                            'none'
                        ],
                        [
                            "eid63",
                            "display",
                            1750,
                            0,
                            "easeOutQuad",
                            "${button_previous}",
                            'none',
                            'block'
                        ],
                        [
                            "eid335",
                            "left",
                            42000,
                            555,
                            "easeOutQuad",
                            "${button_continue}",
                            '560px',
                            '600px'
                        ],
                        [
                            "eid588",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${intro}",
                            '-46px',
                            '-38px'
                        ],
                        [
                            "eid349",
                            "left",
                            1000,
                            750,
                            "easeOutCubic",
                            "${intro}",
                            '-38px',
                            '2px'
                        ],
                        [
                            "eid645",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${intro}",
                            '2px',
                            '2px'
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
                            "eid336",
                            "opacity",
                            42000,
                            555,
                            "easeOutQuad",
                            "${button_continue}",
                            '0',
                            '1'
                        ],
                        [
                            "eid672",
                            "top",
                            3321,
                            0,
                            "linear",
                            "${button_previous}",
                            '698px',
                            '698px'
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
                            "eid634",
                            "line-height",
                            3321,
                            0,
                            "linear",
                            "${heading}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid64",
                            "left",
                            1750,
                            500,
                            "easeOutQuad",
                            "${button_previous}",
                            '40px',
                            '0px'
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
                            "eid350",
                            "opacity",
                            1000,
                            750,
                            "easeOutCubic",
                            "${intro}",
                            '0',
                            '1'
                        ],
                        [
                            "eid65",
                            "opacity",
                            1750,
                            345,
                            "easeOutQuad",
                            "${button_previous}",
                            '0',
                            '1'
                        ],
                            [ "eid380", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${overlay}', [] ] ],
                            [ "eid979", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_3}', [] ] ],
                            [ "eid969", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_1}', [] ] ],
                            [ "eid978", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_5}', [] ] ],
                            [ "eid977", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_4}', [] ] ],
                            [ "eid974", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_2}', [] ] ],
                            [ "eid976", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_6}', [] ] ],
                            [ "eid970", "trigger", 1750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Symbol_1}', [] ] ],
                            [ "eid975", "trigger", 2144, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Symbol_2}', [] ] ],
                            [ "eid980", "trigger", 2500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Symbol_3}', [] ] ],
                            [ "eid835", "trigger", 2500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${overlay}', [] ] ],
                            [ "eid981", "trigger", 2817, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Symbol_4}', [] ] ],
                            [ "eid982", "trigger", 3157, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Symbol_5}', [] ] ],
                            [ "eid983", "trigger", 3500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Symbol_6}', [] ] ],
                            [ "eid1005", "trigger", 7000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${VDI_6_Closing}', [] ] ]
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
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '200px', '50px', 'auto', 'auto'],
                            fill: ['rgba(61,132,200,1.00)']
                        },
                        {
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            font: ['HelveticaNeueBold, Arial Bold', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(43, 29, 29)', 'normal', 'break-word', ''],
                            align: 'center',
                            id: 'Text',
                            textStyle: ['', '', '50px', '', ''],
                            text: '<p style=\"margin:0px\">Previous​</p>',
                            type: 'text'
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
                            rect: ['0px', '0px', '200px', '50px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Rectangle',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(61,132,200,1.00)']
                        },
                        {
                            font: ['HelveticaNeueBold, Arial Bold', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(43, 29, 29)', 'normal', 'break-word', ''],
                            type: 'text',
                            text: 'Next',
                            id: 'Text',
                            textStyle: ['', '', '18px', '', ''],
                            align: 'center',
                            rect: ['39px', '16px', '122px', '18px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'arrow_right',
                            rect: ['167px', '15px', '11px', '19px', 'auto', 'auto'],
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
                    autoPlay: true,
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
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'overlay',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.50)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '900px', '526px']
                        }
                    }
                },
                timeline: {
                    duration: 627,
                    autoPlay: true,
                    labels: {
                        "remove_overlay": 381
                    },
                    data: [
                        [
                            "eid442",
                            "display",
                            627,
                            0,
                            "linear",
                            "${overlay}",
                            'block',
                            'none'
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
                            381,
                            246,
                            "linear",
                            "${overlay}",
                            '1',
                            '0'
                        ],
                        [
                            "eid441",
                            "opacity",
                            627,
                            0,
                            "linear",
                            "${overlay}",
                            '0',
                            '0'
                        ]
                    ]
                }
            },
            "overlay_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '100%', '511px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'overlay',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(245,245,245,0.75)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100%', '526px']
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
            "Symbol_1": {
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
                            id: 'Symbol_1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            rect: ['0px', '0px', '252px', '194px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(252,170,170,0.00)'],
                            c: [
                            {
                                type: 'rect',
                                id: 'True_cover',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['110px', '45px', '143px', '150px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ['rgba(252,170,170,0.00)'],
                                c: [
                                {
                                    rect: ['0px', '0px', '143px', '150px', 'auto', 'auto'],
                                    id: 'trueBG',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/trueBG.png', '0px', '0px']
                                },
                                {
                                    rect: ['32px', '114px', '26px', '26px', 'auto', 'auto'],
                                    id: 'true_icon',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/true_icon.png', '0px', '0px']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(83,86,90,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    align: 'left',
                                    id: 'Text',
                                    textStyle: ['0px', '0px', '', '', 'none'],
                                    text: '<p style=\"margin: 0px;\">​<span style=\"font-family: HelveticaNeueBold, \'Arial Bold\'; color: rgb(255, 255, 255);\">True</span></p>',
                                    rect: ['64px', '116px', '51px', '24px', 'auto', 'auto']
                                }]
                            },
                            {
                                rect: ['0px', '0px', '253px', '152px', 'auto', 'auto'],
                                id: 'Gray_1',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/Gray_1.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                rect: ['0px', '0px', '253px', '152px', 'auto', 'auto'],
                                id: 'color_1',
                                opacity: '0',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/color_1.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Text2Copy',
                                textStyle: ['', '', '19px', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-family: HelveticaNeueRegular, Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 16px; color: rgb(83, 86, 90); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\"></span>Simple design&nbsp;</p><p style=\"margin: 0px;\">with 3-year&nbsp;</p><p style=\"margin: 0px;\">warranty and&nbsp;</p><p style=\"margin: 0px;\">dedicated B2B&nbsp;</p><p style=\"margin: 0px;\">support.</p><p style=\"margin: 0px;\">​</p>',
                                rect: ['123px', '7px', '115px', '99px', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                rect: ['2px', '0px', '251px', '150px', 'auto', 'auto'],
                                id: 'Click_area',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                display: 'block',
                                fill: ['rgba(252,170,170,0)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '253px', '194px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    labels: {
                        "action_1": 1250,
                        "action": 2500
                    },
                    data: [
                        [
                            "eid966",
                            "opacity",
                            2500,
                            500,
                            "easeInOutBack",
                            "${True_cover}",
                            '0',
                            '1'
                        ],
                        [
                            "eid957",
                            "display",
                            0,
                            0,
                            "linear",
                            "${color_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid956",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${color_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid959",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${color_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid955",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${Symbol_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid968",
                            "top",
                            2500,
                            500,
                            "easeInOutBack",
                            "${True_cover}",
                            '-21px',
                            '45px'
                        ],
                        [
                            "eid999",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${Click_area}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "Symbol_2": {
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
                            id: 'Symbol_1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            rect: ['0px', '0px', '252px', '194px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(252,170,170,0.00)'],
                            c: [
                            {
                                type: 'rect',
                                id: 'True_cover',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['110px', '45px', '143px', '150px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ['rgba(252,170,170,0.00)'],
                                c: [
                                {
                                    rect: ['0px', '0px', '143px', '150px', 'auto', 'auto'],
                                    id: 'trueBG',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/trueBG.png', '0px', '0px']
                                },
                                {
                                    rect: ['32px', '114px', '26px', '26px', 'auto', 'auto'],
                                    id: 'true_icon',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/true_icon.png', '0px', '0px']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(83,86,90,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    align: 'left',
                                    id: 'Text',
                                    textStyle: ['0px', '0px', '', '', 'none'],
                                    text: '<p style=\"margin: 0px;\">​<span style=\"font-family: HelveticaNeueBold, \'Arial Bold\'; color: rgb(255, 255, 255);\">True</span></p>',
                                    rect: ['64px', '116px', '51px', '24px', 'auto', 'auto']
                                }]
                            },
                            {
                                rect: ['0px', '0px', '253px', '152px', 'auto', 'auto'],
                                id: 'gray_2',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/gray_2.png', '0px', '0px']
                            },
                            {
                                rect: ['0px', '0px', '253px', '152px', 'auto', 'auto'],
                                id: 'color_2',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/color_2.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Text2Copy',
                                textStyle: ['', '', '19px', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-family: HelveticaNeueRegular, Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 16px; color: rgb(83, 86, 90); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\"></span>Delivers&nbsp;</p><p style=\"margin: 0px;\">business class&nbsp;</p><p style=\"margin: 0px;\">performance&nbsp;</p><p style=\"margin: 0px;\">while eliminating&nbsp;</p><p style=\"margin: 0px;\">the need for a full&nbsp;</p><p style=\"margin: 0px;\">blown operating&nbsp;</p><p style=\"margin: 0px;\">system.</p><p style=\"margin: 0px;\"></p>',
                                rect: ['123px', '7px', '129px', '99px', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'Click_area',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['2px', '0px', '251px', '150px', 'auto', 'auto'],
                                fill: ['rgba(252,170,170,0)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '253px', '194px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    labels: {
                        "action_1": 1250,
                        "action": 2500
                    },
                    data: [
                        [
                            "eid966",
                            "opacity",
                            2500,
                            500,
                            "easeInOutBack",
                            "${True_cover}",
                            '0',
                            '1'
                        ],
                        [
                            "eid972",
                            "display",
                            0,
                            0,
                            "linear",
                            "${color_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid971",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${color_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid973",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${color_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid955",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${Symbol_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid968",
                            "top",
                            2500,
                            500,
                            "easeInOutBack",
                            "${True_cover}",
                            '-21px',
                            '45px'
                        ],
                        [
                            "eid1000",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${Click_area}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "Symbol_3": {
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
                            id: 'Symbol_1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            rect: ['0px', '0px', '252px', '194px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(252,170,170,0.00)'],
                            c: [
                            {
                                type: 'rect',
                                id: 'True_cover',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['110px', '45px', '143px', '150px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ['rgba(252,170,170,0.00)'],
                                c: [
                                {
                                    rect: ['0px', '0px', '143px', '150px', 'auto', 'auto'],
                                    id: 'trueBG',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/trueBG.png', '0px', '0px']
                                },
                                {
                                    rect: ['32px', '114px', '26px', '26px', 'auto', 'auto'],
                                    id: 'true_icon',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/true_icon.png', '0px', '0px']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(83,86,90,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    align: 'left',
                                    id: 'Text',
                                    textStyle: ['0px', '0px', '', '', 'none'],
                                    text: '<p style=\"margin: 0px;\">​<span style=\"font-family: HelveticaNeueBold, \'Arial Bold\'; color: rgb(255, 255, 255);\">True</span></p>',
                                    rect: ['64px', '116px', '51px', '24px', 'auto', 'auto']
                                }]
                            },
                            {
                                rect: ['0px', '0px', '253px', '152px', 'auto', 'auto'],
                                id: 'gray_3',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/gray_3.png', '0px', '0px']
                            },
                            {
                                rect: ['0px', '0px', '253px', '152px', 'auto', 'auto'],
                                id: 'color_3',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/color_3.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Text2Copy',
                                textStyle: ['', '', '19px', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-family: HelveticaNeueRegular, Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 16px; color: rgb(83, 86, 90); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\"></span>Almost no&nbsp;</p><p style=\"margin: 0px;\">attack surface&nbsp;</p><p style=\"margin: 0px;\">for greater IT&nbsp;</p><p style=\"margin: 0px;\">security.</p><p style=\"margin: 0px;\"></p>',
                                rect: ['123px', '7px', '115px', '99px', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'Click_area',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['2px', '0px', '251px', '150px', 'auto', 'auto'],
                                fill: ['rgba(252,170,170,0)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '253px', '194px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    labels: {
                        "action_1": 1250,
                        "action": 2500
                    },
                    data: [
                        [
                            "eid966",
                            "opacity",
                            2500,
                            500,
                            "easeInOutBack",
                            "${True_cover}",
                            '0',
                            '1'
                        ],
                        [
                            "eid985",
                            "display",
                            0,
                            0,
                            "linear",
                            "${color_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid984",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${color_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid986",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${color_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid955",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${Symbol_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid968",
                            "top",
                            2500,
                            500,
                            "easeInOutBack",
                            "${True_cover}",
                            '-21px',
                            '45px'
                        ],
                        [
                            "eid1001",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${Click_area}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "Symbol_4": {
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
                            id: 'Symbol_1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            rect: ['0px', '0px', '252px', '194px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(252,170,170,0.00)'],
                            c: [
                            {
                                type: 'rect',
                                id: 'True_cover',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['110px', '45px', '143px', '150px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ['rgba(252,170,170,0.00)'],
                                c: [
                                {
                                    rect: ['0px', '0px', '143px', '150px', 'auto', 'auto'],
                                    id: 'trueBG',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/trueBG.png', '0px', '0px']
                                },
                                {
                                    rect: ['32px', '114px', '26px', '26px', 'auto', 'auto'],
                                    id: 'true_icon',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/true_icon.png', '0px', '0px']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(83,86,90,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    align: 'left',
                                    id: 'Text',
                                    textStyle: ['0px', '0px', '', '', 'none'],
                                    text: '<p style=\"margin: 0px;\">​<span style=\"font-family: HelveticaNeueBold, \'Arial Bold\'; color: rgb(255, 255, 255);\">True</span></p>',
                                    rect: ['64px', '116px', '51px', '24px', 'auto', 'auto']
                                }]
                            },
                            {
                                rect: ['0px', '0px', '253px', '152px', 'auto', 'auto'],
                                id: 'gray_4',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/gray_4.png', '0px', '0px']
                            },
                            {
                                rect: ['0px', '0px', '253px', '152px', 'auto', 'auto'],
                                id: 'color_4',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/color_4.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Text2Copy',
                                textStyle: ['', '', '19px', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-family: HelveticaNeueRegular, Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 16px; color: rgb(83, 86, 90); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\"></span>Nearly&nbsp;</p><p style=\"margin: 0px;\">eliminates&nbsp;</p><p style=\"margin: 0px;\">client-side&nbsp;</p><p style=\"margin: 0px;\">administration.</p><p style=\"margin: 0px;\"></p>',
                                rect: ['123px', '7px', '115px', '99px', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'Click_area',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['2px', '0px', '251px', '150px', 'auto', 'auto'],
                                fill: ['rgba(252,170,170,0)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '253px', '194px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    labels: {
                        "action_1": 1250,
                        "action": 2500
                    },
                    data: [
                        [
                            "eid966",
                            "opacity",
                            2500,
                            500,
                            "easeInOutBack",
                            "${True_cover}",
                            '0',
                            '1'
                        ],
                        [
                            "eid998",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${color_4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid997",
                            "display",
                            0,
                            0,
                            "linear",
                            "${color_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid996",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${color_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid955",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${Symbol_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid968",
                            "top",
                            2500,
                            500,
                            "easeInOutBack",
                            "${True_cover}",
                            '-21px',
                            '45px'
                        ],
                        [
                            "eid1002",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${Click_area}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "Symbol_5": {
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
                            id: 'Symbol_1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            rect: ['0px', '0px', '252px', '194px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(252,170,170,0.00)'],
                            c: [
                            {
                                type: 'rect',
                                id: 'True_cover',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['110px', '45px', '143px', '150px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ['rgba(252,170,170,0.00)'],
                                c: [
                                {
                                    rect: ['0px', '0px', '143px', '150px', 'auto', 'auto'],
                                    id: 'trueBG',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/trueBG.png', '0px', '0px']
                                },
                                {
                                    rect: ['32px', '114px', '26px', '26px', 'auto', 'auto'],
                                    id: 'true_icon',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/true_icon.png', '0px', '0px']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(83,86,90,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    align: 'left',
                                    id: 'Text',
                                    textStyle: ['0px', '0px', '', '', 'none'],
                                    text: '<p style=\"margin: 0px;\">​<span style=\"font-family: HelveticaNeueBold, \'Arial Bold\'; color: rgb(255, 255, 255);\">True</span></p>',
                                    rect: ['64px', '116px', '51px', '24px', 'auto', 'auto']
                                }]
                            },
                            {
                                rect: ['0px', '0px', '253px', '152px', 'auto', 'auto'],
                                id: 'gray_5',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/gray_5.png', '0px', '0px']
                            },
                            {
                                rect: ['0px', '0px', '253px', '152px', 'auto', 'auto'],
                                id: 'color_5',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/color_5.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Text2Copy',
                                textStyle: ['', '', '19px', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-family: HelveticaNeueRegular, Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 16px; color: rgb(83, 86, 90); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\"></span>Reduces power&nbsp;</p><p style=\"margin: 0px;\">consumption =&nbsp;</p><p style=\"margin: 0px;\">lowers energy&nbsp;</p><p style=\"margin: 0px;\">costs.</p><p style=\"margin: 0px;\"></p>',
                                rect: ['123px', '7px', '115px', '99px', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'Click_area',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['2px', '0px', '251px', '150px', 'auto', 'auto'],
                                fill: ['rgba(252,170,170,0)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '253px', '194px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    labels: {
                        "action_1": 1250,
                        "action": 2500
                    },
                    data: [
                        [
                            "eid966",
                            "opacity",
                            2500,
                            500,
                            "easeInOutBack",
                            "${True_cover}",
                            '0',
                            '1'
                        ],
                        [
                            "eid989",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${color_5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid988",
                            "display",
                            0,
                            0,
                            "linear",
                            "${color_5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid987",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${color_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid955",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${Symbol_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid968",
                            "top",
                            2500,
                            500,
                            "easeInOutBack",
                            "${True_cover}",
                            '-21px',
                            '45px'
                        ],
                        [
                            "eid1003",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${Click_area}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "Symbol_6": {
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
                            id: 'Symbol_1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            rect: ['0px', '0px', '252px', '194px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(252,170,170,0.00)'],
                            c: [
                            {
                                type: 'rect',
                                id: 'True_cover',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['110px', '45px', '143px', '150px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ['rgba(252,170,170,0.00)'],
                                c: [
                                {
                                    rect: ['0px', '0px', '143px', '150px', 'auto', 'auto'],
                                    id: 'trueBG',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/trueBG.png', '0px', '0px']
                                },
                                {
                                    rect: ['32px', '114px', '26px', '26px', 'auto', 'auto'],
                                    id: 'true_icon',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/true_icon.png', '0px', '0px']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(83,86,90,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    align: 'left',
                                    id: 'Text',
                                    textStyle: ['0px', '0px', '', '', 'none'],
                                    text: '<p style=\"margin: 0px;\">​<span style=\"font-family: HelveticaNeueBold, \'Arial Bold\'; color: rgb(255, 255, 255);\">True</span></p>',
                                    rect: ['64px', '116px', '51px', '24px', 'auto', 'auto']
                                }]
                            },
                            {
                                rect: ['0px', '0px', '253px', '152px', 'auto', 'auto'],
                                id: 'gray_6',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/gray_6.png', '0px', '0px']
                            },
                            {
                                rect: ['0px', '0px', '253px', '152px', 'auto', 'auto'],
                                id: 'color_6',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/color_6.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Text2Copy',
                                textStyle: ['', '', '19px', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-family: HelveticaNeueRegular, Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 16px; color: rgb(83, 86, 90); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\"></span>Zero clients&nbsp;</p><p style=\"margin: 0px;\">streamline and&nbsp;</p><p style=\"margin: 0px;\">simplify the&nbsp;</p><p style=\"margin: 0px;\">desktop&nbsp;</p><p style=\"margin: 0px;\">endpoint.</p><p style=\"margin: 0px;\"></p>',
                                rect: ['123px', '7px', '115px', '99px', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'Click_area',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['2px', '0px', '251px', '150px', 'auto', 'auto'],
                                fill: ['rgba(252,170,170,0)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '253px', '194px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    labels: {
                        "action_1": 1250,
                        "action": 2500
                    },
                    data: [
                        [
                            "eid966",
                            "opacity",
                            2500,
                            500,
                            "easeInOutBack",
                            "${True_cover}",
                            '0',
                            '1'
                        ],
                        [
                            "eid992",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${color_6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid991",
                            "display",
                            0,
                            0,
                            "linear",
                            "${color_6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid990",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${color_6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid955",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${Symbol_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid968",
                            "top",
                            2500,
                            500,
                            "easeInOutBack",
                            "${True_cover}",
                            '-21px',
                            '45px'
                        ],
                        [
                            "eid1004",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${Click_area}",
                            'block',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-20515506");
