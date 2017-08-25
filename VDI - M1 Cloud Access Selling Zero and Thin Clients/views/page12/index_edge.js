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
                                    id: 'button_reset',
                                    symbolName: 'button_reset',
                                    type: 'rect',
                                    rect: ['301', '681px', '197', '50', 'auto', 'auto']
                                },
                                {
                                    id: 'button_done',
                                    symbolName: 'button_done',
                                    type: 'rect',
                                    rect: ['602px', '681px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer'
                                },
                                {
                                    id: 'button_previous',
                                    symbolName: 'button_previous',
                                    type: 'rect',
                                    rect: ['-20px', '681px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    opacity: '0'
                                },
                                {
                                    id: 'content',
                                    symbolName: 'content',
                                    type: 'rect',
                                    rect: ['0', '214', '802', '428', 'auto', 'auto'],
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
                                        text: "<p style=\"margin:0px\">​Congratulations on completing this module.\n<br><br>\n</p><p style=\"margin:0px\">​<span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\">To test your knowledge, launch the quiz in the following module.</span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin: 0px;\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin: 0px;\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p>",
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
                                        text: "<p style=\"margin: 0px;\">​Wrap-up&nbsp;\n<span style=\"color: rgb(83, 86, 90);\"></span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(83, 86, 90);\"></span>\n</p>",
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
                                        text: "<p style=\"margin: 0px;\">​Cloud Access: Selling Zero and Thin Clients\n\n\n</p>",
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
                            type: 'rect',
                            rect: ['0px', '167px', 'undefined', 'undefined', 'auto', 'auto'],
                            userClass: "full-width",
                            transform: [[],[],[],['1','0.92518']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '781px', 'auto', 'auto'],
                            sizeRange: ['900px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(245,245,245,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 104000,
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
                            3000,
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
                            "eid851",
                            "opacity",
                            3000,
                            400,
                            "linear",
                            "${content}",
                            '0',
                            '1'
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
                            "eid581",
                            "left",
                            3000,
                            867,
                            "easeOutCubic",
                            "${button_previous}",
                            '-20px',
                            '0px'
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
                            [ "eid670", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${overlay}', [] ] ],
                            [ "eid852", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${content}', [] ] ],
                            [ "eid696", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${animation_sound}', [] ] ],
                            [ "eid742", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${button_reset}', [] ] ],
                            [ "eid698", "trigger", 3000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${content}', [] ] ],
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
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '200px', '50px', 'auto', 'auto'],
                            fill: ['rgba(61,132,200,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text',
                            textStyle: ['', '', '50px', '', ''],
                            text: '<p style=\"margin:0px\">Previous​</p>',
                            font: ['HelveticaNeueBold, Arial Bold', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(43, 29, 29)', 'normal', 'break-word', '']
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
                            rect: ['0px', '0px', '100%', '495px', 'auto', 'auto'],
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
            "content": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'set_1_-_locked',
                            opacity: '1',
                            rect: ['0px', '0px', '803px', '428px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/set%201%20-%20locked.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'set_1',
                            opacity: '0',
                            rect: ['0px', '0px', '803px', '428px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/set%201.png', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            opacity: '0',
                            rect: ['-200px', '0', '803', '428', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '22px', '250px', '75px', 'auto', 'auto'],
                                id: 'Title_box_1',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/Title%20box%201.png', '0px', '0px']
                            },
                            {
                                font: ['\"HelveticaNeueThin\", Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Basic cloud terms\n</p>',
                                type: 'text',
                                rect: ['30px', '45px', '195px', '29px', 'auto', 'auto']
                            }]
                        },
                        {
                            transform: [[], [], [], ['1.00125']],
                            type: 'image',
                            rect: ['-1px', '0px', '803px', '428px', 'auto', 'auto'],
                            id: 'set_2',
                            opacity: '0',
                            clip: 'rect(0px 803px 0px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/set%202.png', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'Group2',
                            opacity: '0',
                            rect: ['700px', '321px', '300', '90', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '-4px', '300px', '90px', 'auto', 'auto'],
                                id: 'Title_box_2',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/Title%20box%202.png', '0px', '0px']
                            },
                            {
                                font: ['\"HelveticaNeueThin\", Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px;\">​Main features of </p><p style=\"margin: 0px;\">zero and thin clients\n</p>',
                                type: 'text',
                                rect: ['29px', '12px', '241px', '59px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'image',
                            rect: ['0px', '0px', '803px', '429px', 'auto', 'auto'],
                            id: 'set_3',
                            opacity: '1',
                            clip: 'rect(0px 803px 0px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/set%203.png', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'Group5',
                            opacity: '0',
                            rect: ['-200px', '22', '310', '75', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '310px', '75px', 'auto', 'auto'],
                                id: 'Title_box_3',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/Title%20box%203.png', '0px', '0px']
                            },
                            {
                                font: ['\'HelveticaNeueThin\', Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Text3',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Hospital sales scenario</p>',
                                rect: ['30px', '23px', '250px', '29px', 'auto', 'auto']
                            }]
                        },
                        {
                            rect: ['0px', '338px', '803px', '90px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,156,166,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['85px', '373px', '173px', '17px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​VMware Horizon View</p>',
                            opacity: '0',
                            align: 'left'
                        },
                        {
                            type: 'group',
                            id: 'Group3',
                            opacity: '0',
                            rect: ['282px', '373', '224', '19', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '19px', '19px', 'auto', 'auto'],
                                id: 'add',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/add.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Text2Copy',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Amazon Workspaces</p>',
                                rect: ['60px', '0px', '164px', '17px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'Group4',
                            opacity: '0',
                            rect: ['533px', '373', '135', '17', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '5px', '19px', '10px', 'auto', 'auto'],
                                id: 'equal',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/equal.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Text2Copy2',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Zero client</p>',
                                rect: ['48px', '0px', '87px', '17px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'image',
                            rect: ['0px', '0px', '803px', '429px', 'auto', 'auto'],
                            id: 'set_4',
                            opacity: '0',
                            clip: 'rect(0px 803px 0px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/set%204.png', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'Group6',
                            opacity: '0',
                            rect: ['700px', '22', '350', '75', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '350px', '75px', 'auto', 'auto'],
                                id: 'Title_box_4',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/Title%20box%204.png', '0px', '0px']
                            },
                            {
                                font: ['\'HelveticaNeueThin\', Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Text4',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Key benefits of zero clients\n</p>',
                                rect: ['29px', '23px', '280px', '29px', 'auto', 'auto']
                            }]
                        },
                        {
                            rect: ['0px', '338px', '803px', '90px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(122,184,0,1.00)']
                        },
                        {
                            type: 'group',
                            id: 'Group7',
                            opacity: '0',
                            rect: ['12px', '364', '193', '39', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '1px', '57px', '37px', 'auto', 'auto'],
                                id: 'display_indoor',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/display_indoor.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Text5',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Ultra-small</p><p style=\"margin: 0px;\"> attack surface\n\n\n\n</p>',
                                rect: ['76px', '0px', '117px', '39px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'Group8',
                            opacity: '0',
                            rect: ['255px', '359', '277', '48', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '47px', '48px', 'auto', 'auto'],
                                id: 'person_business',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/person_business.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Text5Copy',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Nearly eliminated</p><p style=\"margin: 0px;\"> client-side administration\n\n</p><p style=\"margin: 0px;\">\n\n\n\n</p>',
                                rect: ['67px', '5px', '210px', '39px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'Group9',
                            opacity: '0',
                            rect: ['570px', '360', '188', '46', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '49px', '46px', 'auto', 'auto'],
                                id: 'OS',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/OS.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Text5Copy2',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​No operating </p><p style=\"margin: 0px;\">system\n\n</p><p style=\"margin: 0px;\">\n\n</p><p style=\"margin: 0px;\">\n\n\n\n</p>',
                                rect: ['68px', '4px', '120px', '39px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'image',
                            rect: ['0px', '-1px', '803px', '432px', 'auto', 'auto'],
                            id: 'set_5',
                            opacity: '0',
                            clip: 'rect(0px 803px 429px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/set%205.png', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'Group10',
                            opacity: '0',
                            rect: ['700px', '54', '380', '75', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '380px', '75px', 'auto', 'auto'],
                                id: 'Title_box_5',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/Title%20box%205.png', '0px', '0px']
                            },
                            {
                                font: ['\"HelveticaNeueThin\", Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text6',
                                text: '<p style=\"margin: 0px;\">​Top three customer objections\n</p>',
                                type: 'text',
                                rect: ['31px', '23px', '321px', '29px', 'auto', 'auto']
                            }]
                        },
                        {
                            rect: ['0px', '338px', '803px', '90px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,156,166,1.00)']
                        },
                        {
                            type: 'group',
                            id: 'Group11',
                            opacity: '0',
                            rect: ['12px', '353px', '238', '59', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '7px', '52px', '45px', 'auto', 'auto'],
                                id: 'performance',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/performance.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Text7',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Zero clients can’t</p><p style=\"margin: 0px;\"> deliver PC-like</p><p style=\"margin: 0px;\"> performance\n\n\n\n\n</p>',
                                rect: ['72px', '0px', '166px', '59px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'Group12',
                            opacity: '0',
                            rect: ['261px', '353px', '220', '59', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '6px', '55px', '49px', 'auto', 'auto'],
                                id: 'advisor',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/advisor.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Text7Copy2',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Users are afraid</p><p style=\"margin: 0px;\"> to lose PC-like</p><p style=\"margin: 0px;\"> functionality\n\n\n</p><p style=\"margin: 0px;\">\n\n\n\n\n</p>',
                                rect: ['75px', '0px', '145px', '59px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'Group13',
                            opacity: '0',
                            rect: ['503px', '353px', '262', '59', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '8px', '54px', '46px', 'auto', 'auto'],
                                id: 'file_management',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/file_management.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Text7Copy',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​IT staff needs to learn</p><p style=\"margin: 0px;\"> and maintain new</p><p style=\"margin: 0px;\"> management tools\n\n\n</p><p style=\"margin: 0px;\">\n\n\n</p><p style=\"margin: 0px;\">\n\n\n\n\n</p>',
                                rect: ['74px', '0px', '188px', '59px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'image',
                            rect: ['0px', '0px', '803px', '429px', 'auto', 'auto'],
                            id: 'set_6',
                            opacity: '0',
                            clip: 'rect(0px 803px 0px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/set%206.png', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'Group14',
                            opacity: '0',
                            rect: ['-200px', '54', '300', '89', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '300px', '89px', 'auto', 'auto'],
                                id: 'Title_box_6',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/Title%20box%206.png', '0px', '0px']
                            },
                            {
                                font: ['\"HelveticaNeueThin\", Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Text8',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Four cost-effective </p><p style=\"margin: 0px;\">benefits of zero clients</p>',
                                rect: ['30px', '16px', '270px', '59px', 'auto', 'auto']
                            }]
                        },
                        {
                            rect: ['0px', '338px', '803px', '90px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(20,40,160,1.00)']
                        },
                        {
                            type: 'group',
                            id: 'Group15',
                            opacity: '0',
                            rect: ['-16px', '360', '183px', '46', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '0px', '46px', '46px', 'auto', 'auto'],
                                id: 'warranty',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/warranty.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Text9',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​3-year warranty</p>',
                                rect: ['65px', '12px', '118px', '26px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'Group16',
                            opacity: '0',
                            rect: ['204px', '359', '167', '47', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '0px', '31px', '47px', 'auto', 'auto'],
                                id: 'display_outdoor',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/display_outdoor.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Text9Copy',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Zero client</p><p style=\"margin: 0px;\"> adjustability\n\n</p>',
                                rect: ['51px', '5px', '116px', '42px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'Group17',
                            opacity: '0',
                            rect: ['377px', '361', '183', '44', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '0px', '47px', '44px', 'auto', 'auto'],
                                id: 'energy',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/energy.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Text9Copy2',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Low power</p><p style=\"margin: 0px;\"> consumption\n\n\n</p><p style=\"margin: 0px;\">\n\n</p>',
                                rect: ['67px', '1px', '116px', '42px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'Group19',
                            opacity: '0',
                            rect: ['569px', '362', '196', '42', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '3px', '48px', '37px', 'auto', 'auto'],
                                id: 'samsung_S',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/samsung_S.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Text9Copy3',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​90% Samsung</p><p style=\"margin: 0px;\"> components</p><p style=\"margin: 0px;\">\n\n</p>',
                                rect: ['67px', '0px', '129px', '42px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'image',
                            rect: ['0px', '0px', '803px', '429px', 'auto', 'auto'],
                            id: 'set_7',
                            opacity: '0',
                            clip: 'rect(0px 803px 0px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/set%207.png', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'Group18',
                            opacity: '0',
                            rect: ['700px', '22', '280', '75', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '280px', '75px', 'auto', 'auto'],
                                id: 'Title_box_7',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/Title%20box%207.png', '0px', '0px']
                            },
                            {
                                font: ['\"HelveticaNeueThin\", Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Text10',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Four other verticals\n</p>',
                                rect: ['29px', '23px', '246px', '29px', 'auto', 'auto']
                            }]
                        },
                        {
                            rect: ['0px', '338px', '803px', '90px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(104,91,199,1.00)']
                        },
                        {
                            type: 'group',
                            id: 'Group20',
                            opacity: '0',
                            rect: ['1px', '361', '154', '46', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '46px', '46px', 'auto', 'auto'],
                                id: 'cost',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/cost.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text11',
                                text: '<p style=\"margin: 0px;\">​Finance\n</p>',
                                type: 'text',
                                rect: ['60px', '11px', '94px', '19px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'Group21',
                            opacity: '0',
                            rect: ['185px', '364', '174', '35', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '66px', '35px', 'auto', 'auto'],
                                id: 'education_cap',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/education_cap.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text11Copy',
                                text: '<p style=\"margin: 0px;\">​Education\n</p>',
                                type: 'text',
                                rect: ['80px', '8px', '94px', '19px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'Group22',
                            opacity: '0',
                            rect: ['402px', '359', '161', '47', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '43px', '47px', 'auto', 'auto'],
                                id: 'government',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/government.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text11Copy2',
                                text: '<p style=\"margin: 0px;\">​Government\n\n</p>',
                                type: 'text',
                                rect: ['57px', '13px', '104px', '19px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'Group23',
                            opacity: '0',
                            rect: ['613px', '362', '167', '41', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '48px', '41px', 'auto', 'auto'],
                                id: 'business',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/business.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text11Copy3',
                                text: '<p style=\"margin: 0px;\">​Business\n\n</p>',
                                type: 'text',
                                rect: ['63px', '10px', '104px', '19px', 'auto', 'auto']
                            }]
                        },
                        {
                            transform: [[], [], [], ['1.00375', '1.00375']],
                            type: 'image',
                            rect: ['1px', '1px', '800px', '429px', 'auto', 'auto'],
                            id: 'end',
                            opacity: '0',
                            clip: 'rect(0px 800px 0px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/end.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '802px', '428px']
                        }
                    }
                },
                timeline: {
                    duration: 101000,
                    autoPlay: true,
                    labels: {
                        "show_content": 1000
                    },
                    data: [
                        [
                            "eid1333",
                            "left",
                            79000,
                            1000,
                            "linear",
                            "${Group16}",
                            '204px',
                            '234px'
                        ],
                        [
                            "eid1318",
                            "clip",
                            72000,
                            1000,
                            "linear",
                            "${set_6}",
                            [0,803,0,0],
                            [0,803,428,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1239",
                            "left",
                            9000,
                            1000,
                            "linear",
                            "${Group2}",
                            '700px',
                            '503px'
                        ],
                        [
                            "eid1331",
                            "opacity",
                            79000,
                            1000,
                            "linear",
                            "${Group16}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1264",
                            "left",
                            33000,
                            1000,
                            "linear",
                            "${Group4}",
                            '533px',
                            '563px'
                        ],
                        [
                            "eid1253",
                            "opacity",
                            26000,
                            1000,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1229",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${set_1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1285",
                            "opacity",
                            49000,
                            1000,
                            "linear",
                            "${Group9}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1309",
                            "left",
                            61000,
                            1000,
                            "linear",
                            "${Group12}",
                            '261px',
                            '291px'
                        ],
                        [
                            "eid1305",
                            "left",
                            57000,
                            1000,
                            "linear",
                            "${Group11}",
                            '12px',
                            '42px'
                        ],
                        [
                            "eid1297",
                            "opacity",
                            53000,
                            1000,
                            "linear",
                            "${Group10}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1287",
                            "left",
                            49000,
                            1000,
                            "linear",
                            "${Group9}",
                            '570px',
                            '600px'
                        ],
                        [
                            "eid1277",
                            "opacity",
                            44000,
                            1000,
                            "linear",
                            "${Group7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1295",
                            "opacity",
                            52000,
                            1000,
                            "linear",
                            "${set_5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1245",
                            "clip",
                            13000,
                            1000,
                            "linear",
                            "${set_3}",
                            [0,803,0,0],
                            [0,803,428,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1266",
                            "opacity",
                            40000,
                            1000,
                            "linear",
                            "${set_4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1303",
                            "opacity",
                            57000,
                            1000,
                            "linear",
                            "${Group11}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1355",
                            "opacity",
                            97500,
                            500,
                            "linear",
                            "${Group20}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1255",
                            "left",
                            26000,
                            1000,
                            "linear",
                            "${Text2}",
                            '85px',
                            '115px'
                        ],
                        [
                            "eid1233",
                            "left",
                            2000,
                            1000,
                            "linear",
                            "${Group}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid1260",
                            "left",
                            29000,
                            1000,
                            "linear",
                            "${Group3}",
                            '282px',
                            '312px'
                        ],
                        [
                            "eid1307",
                            "opacity",
                            61000,
                            1000,
                            "linear",
                            "${Group12}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1283",
                            "left",
                            47000,
                            1000,
                            "linear",
                            "${Group8}",
                            '255px',
                            '285px'
                        ],
                        [
                            "eid1342",
                            "left",
                            82000,
                            1000,
                            "linear",
                            "${Group19}",
                            '569px',
                            '599px'
                        ],
                        [
                            "eid1241",
                            "opacity",
                            9000,
                            1000,
                            "linear",
                            "${Group2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1326",
                            "opacity",
                            78000,
                            1000,
                            "linear",
                            "${Group15}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1363",
                            "opacity",
                            98000,
                            500,
                            "linear",
                            "${Group21}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1349",
                            "opacity",
                            96000,
                            1000,
                            "linear",
                            "${Group18}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1251",
                            "opacity",
                            22000,
                            1000,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '0.699999988079071'
                        ],
                        [
                            "eid1328",
                            "left",
                            78000,
                            1000,
                            "linear",
                            "${Group15}",
                            '-16px',
                            '26px'
                        ],
                        [
                            "eid1337",
                            "left",
                            81000,
                            1000,
                            "linear",
                            "${Group17}",
                            '377px',
                            '407px'
                        ],
                        [
                            "eid1375",
                            "opacity",
                            100000,
                            1000,
                            "linear",
                            "${end}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1345",
                            "opacity",
                            88000,
                            1000,
                            "linear",
                            "${set_7}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1279",
                            "left",
                            44000,
                            1000,
                            "linear",
                            "${Group7}",
                            '12px',
                            '42px'
                        ],
                        [
                            "eid1353",
                            "opacity",
                            97000,
                            500,
                            "linear",
                            "${Rectangle14}",
                            '0',
                            '0.699999988079071'
                        ],
                        [
                            "eid1272",
                            "left",
                            42000,
                            1000,
                            "linear",
                            "${Group6}",
                            '700px',
                            '452px'
                        ],
                        [
                            "eid1322",
                            "left",
                            73000,
                            1000,
                            "linear",
                            "${Group14}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid1249",
                            "left",
                            15000,
                            1069,
                            "linear",
                            "${Group5}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid1316",
                            "opacity",
                            72000,
                            1000,
                            "linear",
                            "${set_6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1313",
                            "left",
                            66000,
                            1000,
                            "linear",
                            "${Group13}",
                            '503px',
                            '533px'
                        ],
                        [
                            "eid1258",
                            "opacity",
                            29000,
                            1000,
                            "linear",
                            "${Group3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1299",
                            "left",
                            53000,
                            1000,
                            "linear",
                            "${Group10}",
                            '700px',
                            '422px'
                        ],
                        [
                            "eid1301",
                            "opacity",
                            55000,
                            1000,
                            "linear",
                            "${Rectangle5}",
                            '0',
                            '0.699999988079071'
                        ],
                        [
                            "eid1247",
                            "opacity",
                            15000,
                            1069,
                            "linear",
                            "${Group5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1335",
                            "opacity",
                            81000,
                            1000,
                            "linear",
                            "${Group17}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1268",
                            "clip",
                            40000,
                            1000,
                            "linear",
                            "${set_4}",
                            [0,803,0,0],
                            [0,803,428,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1281",
                            "opacity",
                            47000,
                            1000,
                            "linear",
                            "${Group8}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1235",
                            "opacity",
                            7075,
                            925,
                            "linear",
                            "${set_2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1243",
                            "opacity",
                            13000,
                            1000,
                            "linear",
                            "${set_3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1262",
                            "opacity",
                            33000,
                            1000,
                            "linear",
                            "${Group4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1340",
                            "opacity",
                            82000,
                            1000,
                            "linear",
                            "${Group19}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1311",
                            "opacity",
                            66000,
                            1000,
                            "linear",
                            "${Group13}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1274",
                            "opacity",
                            43000,
                            1000,
                            "linear",
                            "${Rectangle8}",
                            '0',
                            '0.699999988079071'
                        ],
                        [
                            "eid1351",
                            "left",
                            96000,
                            1000,
                            "linear",
                            "${Group18}",
                            '700px',
                            '522px'
                        ],
                        [
                            "eid1324",
                            "opacity",
                            77000,
                            1000,
                            "linear",
                            "${Rectangle7}",
                            '0',
                            '0.699999988079071'
                        ],
                        [
                            "eid1320",
                            "opacity",
                            73000,
                            1000,
                            "linear",
                            "${Group14}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1347",
                            "clip",
                            88000,
                            1000,
                            "linear",
                            "${set_7}",
                            [0,803,0,0],
                            [0,803,428,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1369",
                            "left",
                            98500,
                            500,
                            "linear",
                            "${Group22}",
                            '402px',
                            '432px'
                        ],
                        [
                            "eid1290",
                            "clip",
                            52000,
                            1000,
                            "linear",
                            "${set_5}",
                            [0,803,0,0],
                            [0,803,429,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1231",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${Group}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1237",
                            "clip",
                            7075,
                            925,
                            "linear",
                            "${set_2}",
                            [0,803,0,0],
                            [0,803,428,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1365",
                            "left",
                            98000,
                            500,
                            "linear",
                            "${Group21}",
                            '185px',
                            '215px'
                        ],
                        [
                            "eid1357",
                            "left",
                            97500,
                            500,
                            "linear",
                            "${Group20}",
                            '1px',
                            '31px'
                        ],
                        [
                            "eid1377",
                            "clip",
                            100000,
                            1000,
                            "linear",
                            "${end}",
                            [0,800,0,0],
                            [0,800,428,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1371",
                            "opacity",
                            99000,
                            500,
                            "linear",
                            "${Group23}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1270",
                            "opacity",
                            42000,
                            1000,
                            "linear",
                            "${Group6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1367",
                            "opacity",
                            98500,
                            500,
                            "linear",
                            "${Group22}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1373",
                            "left",
                            99000,
                            500,
                            "linear",
                            "${Group23}",
                            '613px',
                            '643px'
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
                                rect: ['53px', '14px', '69px', '22px', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">Replay</p>',
                                font: ['HelveticaNeueBold, Arial Bold', [16, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text'
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-20515506");
