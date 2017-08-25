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
                                rect: ['0px', '0px', '100%', '174px', 'auto', 'auto'],
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
                                    id: 'content',
                                    symbolName: 'content',
                                    display: 'none',
                                    type: 'rect',
                                    rect: ['-304', '214', '1404', '1089', 'auto', 'auto']
                                },
                                {
                                    id: 'button_reset',
                                    symbolName: 'button_reset',
                                    type: 'rect',
                                    rect: ['301', '754px', '197', '50', 'auto', 'auto']
                                },
                                {
                                    id: 'overlay_button_reset',
                                    display: 'none',
                                    type: 'rect',
                                    rect: ['301px', '681px', '197px', '50px', 'auto', 'auto'],
                                    fill: ["rgba(245,245,245,0.75)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                },
                                {
                                    id: 'button_done',
                                    symbolName: 'button_done',
                                    type: 'rect',
                                    rect: ['602px', '754px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer'
                                },
                                {
                                    id: 'button_previous',
                                    symbolName: 'button_previous',
                                    type: 'rect',
                                    rect: ['-20px', '754px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    opacity: '0'
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
                                        rect: ['-38px', '71px', '800px', '54px', 'auto', 'auto'],
                                        opacity: '0',
                                        text: "<p style=\"margin:0px\">​So there you have it.</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\">Tap ‘Next’ to continue.&nbsp;</span></p><p style=\"margin:0px\"> </p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin: 0px;\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin: 0px;\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p>",
                                        align: "left",
                                        font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, "px"], "rgba(83,86,90,1.00)", "400", "none", "normal", "break-word", ""],
                                        textStyle: ["", "", "", "", "none"]
                                    },
                                    {
                                        id: 'heading',
                                        display: 'none',
                                        type: 'text',
                                        rect: ['-50px', '19px', '100%', '43px', 'auto', 'auto'],
                                        opacity: '0',
                                        text: "<p style=\"margin: 0px;\">​Customer Objections Recap\n<span style=\"color: rgb(83, 86, 90);\"></span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(83, 86, 90);\"></span>\n</p>",
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
                                        text: "<p style=\"margin: 0px;\">​Cloud Access: Selling Zero and Thin Clients\n\n\n\n</p>",
                                        align: "left",
                                        font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,122,194,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                        textStyle: ["", "", "", "", "none"]
                                    }]
                                }]
                            }]
                        },
                        {
                            id: 'animation_sound',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['457', '144', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"animation_sound.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'overlay',
                            symbolName: 'overlay',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '199px', 'undefined', 'undefined', 'auto', 'auto'],
                            userClass: "full-width",
                            transform: [[],[],[],['1','1.11351']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '853px', 'auto', 'auto'],
                            sizeRange: ['900px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(245,245,245,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 34638,
                    autoPlay: true,
                    data: [
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
                            "eid579",
                            "opacity",
                            2000,
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
                            2000,
                            867,
                            "easeOutCubic",
                            "${button_previous}",
                            '-20px',
                            '0px'
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
                            "eid1264",
                            "display",
                            0,
                            0,
                            "linear",
                            "${content}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1265",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${content}",
                            'none',
                            'block'
                        ],
                        [
                            "eid745",
                            "display",
                            0,
                            0,
                            "linear",
                            "${overlay_button_reset}",
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
                            "eid1263",
                            "display",
                            0,
                            0,
                            "linear",
                            "${overlay}",
                            'none',
                            'none'
                        ],
                            [ "eid670", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${overlay}', [] ] ],
                            [ "eid742", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${button_reset}', [] ] ],
                            [ "eid1260", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${content}', [] ] ],
                            [ "eid1131", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${button_reset}', [] ] ],
                            [ "eid1261", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${content}', [] ] ],
                            [ "eid671", "trigger", 3000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${overlay}', [] ] ]
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
                            type: 'text',
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            text: '<p style=\"margin:0px\">Previous​</p>',
                            id: 'Text',
                            textStyle: ['', '', '50px', '', ''],
                            align: 'center',
                            font: ['HelveticaNeueBold, Arial Bold', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(43, 29, 29)', 'normal', 'break-word', '']
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
                            rect: ['-40px', '0', '200', '50', 'auto', 'auto'],
                            type: 'group',
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
                                textStyle: ['', '', '18px', '', ''],
                                text: '<p style=\"margin:0px\">Next</p>',
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
                            rect: ['0px', '0px', '100%', '571px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'overlay',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(245,245,245,0.75)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '900px', '495px']
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
                            rect: ['0px', '0px', '197', '50', 'auto', 'auto'],
                            id: 'Group3',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                type: 'image',
                                id: 'Rectangle-1',
                                rect: ['0px', '0px', '197px', '50px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Rectangle-1.jpg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'reset2',
                                rect: ['152px', '14px', '25px', '25px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/reset2.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueBold, Arial Bold', [16, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">Replay</p>',
                                type: 'text',
                                rect: ['53px', '14px', '69px', '22px', 'auto', 'auto']
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
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "show_reset_button": 500
                    },
                    data: [
                        [
                            "eid494",
                            "left",
                            500,
                            500,
                            "easeOutQuad",
                            "${Group3}",
                            '-40px',
                            '0px'
                        ],
                        [
                            "eid493",
                            "opacity",
                            500,
                            345,
                            "easeOutQuad",
                            "${Group3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid492",
                            "display",
                            500,
                            0,
                            "easeOutQuad",
                            "${Group3}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "content": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['304px', '0px', '800px', '1089', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Content',
                            type: 'group',
                            c: [
                            {
                                id: 'BG_grid',
                                type: 'group',
                                rect: ['0', '0px', '800', '500', 'auto', 'auto'],
                                c: [
                                {
                                    rect: ['0px', '0px', '265px', '141px', 'auto', 'auto'],
                                    id: '_1',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(255,127,127,1)']
                                },
                                {
                                    rect: ['0px', '143px', '265px', '204px', 'auto', 'auto'],
                                    id: '_1Copy2',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(255,127,127,1)']
                                },
                                {
                                    rect: ['0px', '349px', '265px', '151px', 'auto', 'auto'],
                                    id: '_1Copy3',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(255,127,127,1)']
                                },
                                {
                                    rect: ['267px', '0px', '265px', '200px', 'auto', 'auto'],
                                    id: '_2',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                },
                                {
                                    rect: ['267px', '202px', '265px', '187px', 'auto', 'auto'],
                                    id: '_2Copy2',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                },
                                {
                                    rect: ['267px', '391px', '265px', '109px', 'auto', 'auto'],
                                    id: '_2Copy3',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                },
                                {
                                    rect: ['534px', '0px', '266px', '140px', 'auto', 'auto'],
                                    id: '_3a',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                },
                                {
                                    rect: ['534px', '142px', '266px', '205px', 'auto', 'auto'],
                                    id: '_3aCopy2',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                },
                                {
                                    rect: ['534px', '349px', '266px', '151px', 'auto', 'auto'],
                                    id: '_3aCopy3',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                },
                                {
                                    rect: ['0px', '0px', '265px', '500px', 'auto', 'auto'],
                                    id: 'h1',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                }]
                            },
                            {
                                rect: ['0', '0', '265', '500', 'auto', 'auto'],
                                overflow: 'hidden',
                                id: 'Sym_1',
                                type: 'group',
                                c: [
                                {
                                    id: 'ani_1',
                                    type: 'group',
                                    rect: ['-4px', '0', '421', '500', 'auto', 'auto'],
                                    c: [
                                    {
                                        id: 'img1aCopy',
                                        type: 'image',
                                        rect: ['0px', '0px', '421px', '500px', 'auto', 'auto'],
                                        fill: ['rgba(0,0,0,0)', 'images/img1a.jpg', '0px', '0px']
                                    }]
                                },
                                {
                                    rect: ['0px', '141px', '265px', '2px', 'auto', 'auto'],
                                    id: 'lineH1Copy3',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(245,245,245,1.00)']
                                },
                                {
                                    rect: ['0px', '347px', '265px', '2px', 'auto', 'auto'],
                                    id: 'lineH1Copy2',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(245,245,245,1.00)']
                                }]
                            },
                            {
                                rect: ['267', '0', '265px', '500px', 'auto', 'auto'],
                                overflow: 'hidden',
                                id: 'Sym_2',
                                type: 'group',
                                c: [
                                {
                                    rect: ['0px', '0px', '265px', '500px', 'auto', 'auto'],
                                    id: 'h2',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                },
                                {
                                    id: 'ani_2',
                                    type: 'group',
                                    rect: ['0', '-402px', '265', '900', 'auto', 'auto'],
                                    c: [
                                    {
                                        id: '_22',
                                        type: 'image',
                                        rect: ['0px', '30px', '265px', '900px', 'auto', 'auto'],
                                        fill: ['rgba(0,0,0,0)', 'images/2.jpg', '0px', '0px']
                                    }]
                                },
                                {
                                    rect: ['0px', '200px', '265px', '2px', 'auto', 'auto'],
                                    id: 'lineH2',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(245,245,245,1.00)']
                                },
                                {
                                    rect: ['0px', '389px', '265px', '2px', 'auto', 'auto'],
                                    id: 'lineH2Copy',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(245,245,245,1.00)']
                                }]
                            },
                            {
                                rect: ['534', '0', '566', '500', 'auto', 'auto'],
                                overflow: 'hidden',
                                id: 'Sym_3',
                                type: 'group',
                                c: [
                                {
                                    rect: ['1px', '0px', '265px', '500px', 'auto', 'auto'],
                                    id: 'h3',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                },
                                {
                                    id: 'ani_3',
                                    type: 'group',
                                    rect: ['100px', '0', '565', '500', 'auto', 'auto'],
                                    c: [
                                    {
                                        id: 'img3a',
                                        type: 'image',
                                        rect: ['0px', '0px', '565px', '500px', 'auto', 'auto'],
                                        fill: ['rgba(0,0,0,0)', 'images/img3a.jpg', '0px', '0px']
                                    }]
                                },
                                {
                                    rect: ['0px', '140px', '266px', '2px', 'auto', 'auto'],
                                    id: 'lineH3',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(245,245,245,1.00)']
                                },
                                {
                                    rect: ['0px', '347px', '266px', '2px', 'auto', 'auto'],
                                    id: 'lineH3Copy',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(245,245,245,1.00)']
                                }]
                            },
                            {
                                rect: ['0', '143', '265', '204', 'auto', 'auto'],
                                id: 'Text_1',
                                opacity: '0',
                                type: 'group',
                                c: [
                                {
                                    rect: ['0px', '0px', '265px', '204px', 'auto', 'auto'],
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    id: 'Rectangle3',
                                    opacity: '0.8',
                                    type: 'rect',
                                    fill: ['rgba(0,169,224,1.00)']
                                },
                                {
                                    rect: ['17px', '14px', '230px', '175px', 'auto', 'auto'],
                                    textStyle: ['', '', '', '', 'none'],
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(83,86,90,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    id: 'Text',
                                    text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">Samsung is using the latest\nTeradici chipset which\nimproves pixel performance for\na PC-like experience.\nIf necessary, you can add a&nbsp;\nhardware accelerator card,&nbsp;\nvirtual GPU, or graphics card&nbsp;</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">to achieve server-class&nbsp;</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">performance.</span></p>',
                                    align: 'left',
                                    type: 'text'
                                }]
                            },
                            {
                                rect: ['267px', '202px', '265', '204', 'auto', 'auto'],
                                id: 'Text_2',
                                opacity: '0',
                                type: 'group',
                                c: [
                                {
                                    rect: ['0px', '0px', '265px', '187px', 'auto', 'auto'],
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    id: 'Rectangle3Copy2',
                                    opacity: '0.8',
                                    type: 'rect',
                                    fill: ['rgba(20,40,160,1.00)']
                                },
                                {
                                    rect: ['17px', '14px', '230px', '175px', 'auto', 'auto'],
                                    textStyle: ['', '', '', '', 'none'],
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(83,86,90,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    id: 'TextCopy2',
                                    text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">IT staff does not need to learn\nand maintain a bunch of new&nbsp;\nstuff because zero clients\nrequire little to no management&nbsp;\nand simple utilities are included\nto automate setup, configure&nbsp;\nchanges and mid-life with&nbsp;\nfirmware updates.</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\"></span></p>',
                                    align: 'left',
                                    type: 'text'
                                }]
                            },
                            {
                                rect: ['534px', '143px', '265', '204', 'auto', 'auto'],
                                id: 'Text_3',
                                opacity: '0',
                                type: 'group',
                                c: [
                                {
                                    rect: ['0px', '0px', '265px', '204px', 'auto', 'auto'],
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    id: 'Rectangle3Copy3',
                                    opacity: '0.8',
                                    type: 'rect',
                                    fill: ['rgba(0,122,194,1.00)']
                                },
                                {
                                    rect: ['17px', '14px', '230px', '175px', 'auto', 'auto'],
                                    textStyle: ['', '', '', '', 'none'],
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(83,86,90,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    id: 'TextCopy3',
                                    text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">Users don’t need to fear losing&nbsp;\nPC functionality because cloud\naccess simply transfers the&nbsp;\nbrains of the desktop to a data&nbsp;\ncenter. No worries.</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\"></span></p>',
                                    align: 'left',
                                    type: 'text'
                                }]
                            },
                            {
                                rect: ['265px', '0px', '2px', '500px', 'auto', 'auto'],
                                id: 'line_1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(245,245,245,1.00)']
                            },
                            {
                                rect: ['532px', '0px', '2px', '500px', 'auto', 'auto'],
                                id: 'line_1Copy3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(245,245,245,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1404px', '1089px']
                        }
                    }
                },
                timeline: {
                    duration: 32638,
                    autoPlay: true,
                    data: [
                        [
                            "eid1258",
                            "opacity",
                            31388,
                            1250,
                            "easeInOutBack",
                            "${Text_3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1247",
                            "top",
                            0,
                            1000,
                            "easeInOutBack",
                            "${ani_2}",
                            '166px',
                            '-402px'
                        ],
                        [
                            "eid1255",
                            "opacity",
                            16931,
                            1250,
                            "easeInOutBack",
                            "${Text_2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1243",
                            "left",
                            0,
                            1000,
                            "easeInOutBack",
                            "${ani_1}",
                            '-370px',
                            '-4px'
                        ],
                        [
                            "eid1252",
                            "opacity",
                            1160,
                            1250,
                            "easeInOutBack",
                            "${Text_1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1245",
                            "left",
                            0,
                            1000,
                            "easeInOutBack",
                            "${ani_3}",
                            '100px',
                            '-300px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-20515506");
