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
                                rect: ['0px', '0px', '100%', '235px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'containerEle',
                            type: 'group',
                            rect: ['0px', '1px', '100%', '100%', 'auto', 'auto'],
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
                                    rect: ['42px', '801px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    opacity: '0'
                                },
                                {
                                    id: 'button_next',
                                    symbolName: 'button_next',
                                    display: 'none',
                                    type: 'rect',
                                    rect: ['600px', '801px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    opacity: '1'
                                },
                                {
                                    id: 'button_continue',
                                    symbolName: 'button_continue',
                                    display: 'none',
                                    type: 'rect',
                                    rect: ['600px', '801px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer'
                                },
                                {
                                    id: 'button_reset',
                                    symbolName: 'button_reset',
                                    display: 'none',
                                    type: 'rect',
                                    rect: ['301', '801px', '197', '50', 'auto', 'auto']
                                },
                                {
                                    id: 'content_3',
                                    symbolName: 'content_3',
                                    type: 'rect',
                                    rect: ['0px', '275px', 'undefined', 'undefined', 'auto', 'auto']
                                },
                                {
                                    id: 'content_2',
                                    symbolName: 'content_2',
                                    type: 'rect',
                                    rect: ['0px', '275px', 'undefined', 'undefined', 'auto', 'auto']
                                },
                                {
                                    id: 'content_1',
                                    symbolName: 'content_1',
                                    type: 'rect',
                                    rect: ['0', '275px', '800', '486px', 'auto', 'auto']
                                },
                                {
                                    id: 'intro',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['2px', '90px', '800px', '115px', 'auto', 'auto'],
                                    opacity: '0',
                                    text: "<p style=\"margin:0px\">​Something else you’ll need to know to have better business conversations is how to approach common customer objections to purchasing a Samsung zero client. Below are a series of three common customer objections with two different possible responses. See if you can guess which is the correct response to each customer objection. Good luck!\n</p><p style=\"margin:0px\">\n</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\">Listen to the customer objection, then tap the correct answer.</span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span>\n</p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span>\n</p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span>\n</p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span>\n</p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span>\n</p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\">\n\n</p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span>\n</p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin: 0px;\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin: 0px;\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p>",
                                    align: "left",
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, "px"], "rgba(83,86,90,1.00)", "400", "none", "normal", "break-word", ""],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'heading',
                                    display: 'none',
                                    type: 'text',
                                    rect: ['-50px', '45px', '800px', '42px', 'auto', 'auto'],
                                    opacity: '0',
                                    text: "<p style=\"margin: 0px;\">​Customer Objections\n</p><p style=\"margin: 0px;\"><span style=\"color: rgb(83, 86, 90);\"></span>\n</p>",
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
                                    text: "<p style=\"margin: 0px;\">​Cloud Access: Selling Zero and Thin Clients\n\n</p>",
                                    align: "left",
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,122,194,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'overlay',
                            symbolName: 'overlay',
                            display: 'block',
                            type: 'rect',
                            rect: ['0px', '255px', 'undefined', 'undefined', 'auto', 'auto'],
                            userClass: "full-width",
                            transform: [[],[],[],['1','1.07605']]
                        },
                        {
                            id: 'transparent_overlay',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '195px', '800px', '566px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: ""
                        },
                        {
                            id: 'incorrect_sound',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['571', '537', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"incorrect_sound.wav"],
                            preload: 'auto'
                        },
                        {
                            id: 'correct_sound',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['571', '537', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"correct_sound.wav"],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '901px', 'auto', 'auto'],
                            sizeRange: ['900px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(245,245,245,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 14250,
                    autoPlay: true,
                    labels: {
                        "start": 250,
                        "show_buttons": 1750,
                        "show_continue": 6186
                    },
                    data: [
                        [
                            "eid793",
                            "display",
                            0,
                            0,
                            "linear",
                            "${transparent_overlay}",
                            'none',
                            'none'
                        ],
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
                            "eid337",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${button_next}",
                            'none',
                            'none'
                        ],
                        [
                            "eid338",
                            "display",
                            6186,
                            0,
                            "easeOutQuad",
                            "${button_next}",
                            'none',
                            'block'
                        ],
                        [
                            "eid336",
                            "opacity",
                            6186,
                            555,
                            "easeOutQuad",
                            "${button_next}",
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
                            "eid753",
                            "display",
                            0,
                            0,
                            "linear",
                            "${button_continue}",
                            'none',
                            'none'
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
                            "eid335",
                            "left",
                            6186,
                            555,
                            "easeOutQuad",
                            "${button_next}",
                            '560px',
                            '600px'
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
                            "eid787",
                            "display",
                            0,
                            0,
                            "linear",
                            "${button_reset}",
                            'none',
                            'none'
                        ],
                            [ "eid380", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${overlay}', [] ] ],
                            [ "eid781", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${button_continue}', [] ] ],
                            [ "eid771", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${content_3}', [] ] ],
                            [ "eid770", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${content_2}', [] ] ],
                            [ "eid688", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${content_1}', [] ] ],
                            [ "eid789", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${button_reset}', [] ] ],
                            [ "eid381", "trigger", 1750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${overlay}', [] ] ],
                            [ "eid689", "trigger", 1750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${content_1}', [] ] ]
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
                            text: 'Next',
                            rect: ['39px', '16px', '122px', '18px', 'auto', 'auto']
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
            "content_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'Group',
                            opacity: '0',
                            rect: ['0', '0px', '800', '486px', 'auto', 'auto'],
                            overflow: 'hidden',
                            type: 'group',
                            c: [
                            {
                                type: 'image',
                                id: 'background_image',
                                rect: ['0px', '0px', '800px', '486px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/background.jpg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '0px', '800px', '486px', 'auto', 'auto'],
                                id: 'background_grey',
                                opacity: '1',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/background_grey.jpg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'customer',
                                rect: ['-245px', '0px', '245px', '486px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/customer.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'it-channel-partner',
                                rect: ['559px', '0px', '245px', '486px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/it-channel-partner.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueBold, Arial Bold', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                align: 'center',
                                id: 'customer-text',
                                opacity: '0',
                                text: '<p style=\"margin: 0px;\">CUSTOMER</p>',
                                rect: ['0px', '428px', '195px', '85px', 'auto', 'auto']
                            },
                            {
                                font: ['HelveticaNeueBold, Arial Bold', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                align: 'center',
                                id: 'it-channel-partner-text',
                                opacity: '0',
                                text: '<p style=\"margin: 0px;\">​IT CHANNEL&nbsp;\nPARTNER</p><p style=\"margin: 0px;\"></p>',
                                rect: ['605px', '428px', '195px', '85px', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                display: 'none',
                                symbolName: 'correct_option_1',
                                rect: ['397px', '166px', null, null, 'auto', 'auto'],
                                id: 'correct_option_1'
                            },
                            {
                                type: 'rect',
                                display: 'none',
                                symbolName: 'incorrect_option_1',
                                rect: ['397px', '27px', null, null, 'auto', 'auto'],
                                id: 'incorrect_option_1'
                            },
                            {
                                rect: ['155px', '76px', '222px', '96px', 'auto', 'auto'],
                                id: 'bubble-1',
                                opacity: '0',
                                type: 'group',
                                c: [
                                {
                                    type: 'image',
                                    id: 'bubble-left',
                                    rect: ['0px', '0px', '222px', '96px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/bubble-left-3.png', '0px', '0px']
                                },
                                {
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    type: 'text',
                                    textStyle: ['', '', '', '', 'none'],
                                    id: 'Text',
                                    text: '<p style=\"margin: 0px;\">​A zero client cannot deliver PC-like performance.</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>',
                                    align: 'left',
                                    rect: ['45px', '16px', '150px', '60px', 'auto', 'auto']
                                }]
                            },
                            {
                                preload: 'auto',
                                type: 'audio',
                                source: ['media/audio_1.mp3'],
                                id: 'audio_1',
                                rect: ['520', '118', '320px', '45px', 'auto', 'auto'],
                                display: 'none',
                                tag: 'audio'
                            },
                            {
                                preload: 'auto',
                                type: 'audio',
                                source: ['media/response_1.mp3'],
                                id: 'response_1',
                                rect: ['409', '141', '320px', '45px', 'auto', 'auto'],
                                display: 'none',
                                tag: 'audio'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '486px']
                        }
                    }
                },
                timeline: {
                    duration: 12500,
                    autoPlay: true,
                    labels: {
                        "play": 2000,
                        "hide_content": 12000
                    },
                    data: [
                        [
                            "eid777",
                            "opacity",
                            2000,
                            500,
                            "linear",
                            "${background_grey}",
                            '1',
                            '0'
                        ],
                        [
                            "eid594",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${it-channel-partner-text}",
                            '428px',
                            '398px'
                        ],
                        [
                            "eid733",
                            "display",
                            0,
                            0,
                            "linear",
                            "${correct_option_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid589",
                            "opacity",
                            3000,
                            500,
                            "linear",
                            "${customer-text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid572",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${Group}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid586",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${customer}",
                            '-245px',
                            '0px'
                        ],
                        [
                            "eid764",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid766",
                            "opacity",
                            12000,
                            500,
                            "linear",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid590",
                            "opacity",
                            3000,
                            500,
                            "linear",
                            "${it-channel-partner-text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid593",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${customer-text}",
                            '428px',
                            '398px'
                        ],
                        [
                            "eid573",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${Group}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid585",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${it-channel-partner}",
                            '800px',
                            '555px'
                        ],
                        [
                            "eid734",
                            "display",
                            0,
                            0,
                            "linear",
                            "${incorrect_option_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid694",
                            "opacity",
                            3509,
                            241,
                            "linear",
                            "${bubble-1}",
                            '0',
                            '1'
                        ],
                            [ "eid737", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${correct_option_1}', [] ] ],
                            [ "eid738", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${incorrect_option_1}', [] ] ],
                            [ "eid730", "trigger", 3500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audio_1}', [] ] ]
                    ]
                }
            },
            "correct_option_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'bubble-correct',
                            opacity: '0',
                            rect: ['0px', '0px', '306px', '314px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '306px', '314px', 'auto', 'auto'],
                                id: 'bubble-correct-14',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/bubble-correct-14.png', '0px', '0px']
                            },
                            {
                                rect: ['20px', '11px', '240px', '90px', 'auto', 'auto'],
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                align: 'left',
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px; font-family: HelveticaNeueRegular, Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 16px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">That may have been the case a few years ago, but zero client technology has a come a long way.</p><div style=\"height: 5px;\"></div><p style=\"margin: 0px; font-family: HelveticaNeueRegular, Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 16px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">For productivity workers, Samsung is using the latest Teradici chipset which improves pixel performance by 6x over</p><p style=\"margin: 0px; font-family: HelveticaNeueRegular, Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 16px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">the previous generation.</p><div style=\"height: 5px;\"></div><p style=\"margin: 0px; font-family: HelveticaNeueRegular, Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 16px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">For power users, you can</p><p style=\"margin: 0px; font-family: HelveticaNeueRegular, Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 16px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">always add a hardware accelerator card, virtual GPU, or graphics card to achieve</p><p style=\"margin: 0px; font-family: HelveticaNeueRegular, Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 16px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">server-class performance.</p><p style=\"margin: 0px; font-family: HelveticaNeueRegular, Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 16px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\"></p><p style=\"margin: 0px; font-family: HelveticaNeueRegular, Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 16px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: HelveticaNeueRegular, Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 16px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p>',
                                textStyle: ['', '', '', '', 'none'],
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['0px', '0px', '306px', '314px', 'auto', 'auto'],
                            id: 'bubble',
                            opacity: '1',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '306px', '314px', 'auto', 'auto'],
                                id: 'bubble-right-14',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/bubble-right-14.png', '0px', '0px']
                            },
                            {
                                rect: ['20px', '11px', '239px', '90px', 'auto', 'auto'],
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                align: 'left',
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​That may have been the case a few years ago, but zero client technology has a come a long way.</p><div style=\"height: 5px;\"></div><p style=\"margin: 0px;\">For productivity workers, Samsung is using the latest Teradici chipset which improves pixel performance by 6x over</p><p style=\"margin: 0px;\">the previous generation.</p><div style=\"height: 5px;\"></div><p style=\"margin: 0px;\">For power users, you can</p><p style=\"margin: 0px;\">always add a hardware accelerator card, virtual GPU, or graphics card to achieve</p><p style=\"margin: 0px;\">server-class performance.</p><p style=\"margin: 0px;\"></p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p><p style=\"margin: 0px;\"><span style=\"font-family: HelveticaNeueRegular, Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 16px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\"></span></p>',
                                textStyle: ['', '', '', '', 'none'],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '256px', '306px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: true,
                    labels: {
                        "show_result": 1000
                    },
                    data: [
                        [
                            "eid697",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${bubble}",
                            '0',
                            '1'
                        ],
                        [
                            "eid703",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${bubble}",
                            '1',
                            '0'
                        ],
                        [
                            "eid704",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${bubble-correct}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "incorrect_option_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'bubble-incorrect',
                            opacity: '0',
                            rect: ['0px', '0px', '256px', '133px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '306px', '133px', 'auto', 'auto'],
                                id: 'bubble-incorrect-5',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/bubble-incorrect-5.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['20px', '18px', '250px', '90px', 'auto', 'auto'],
                                align: 'left',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​You’re right, they can’t. However, Samsung is working on a chipset that can deliver PC-like pixel performance. It should be available sometime in 2019.</p><p style=\"margin: 0px;\"></p><p style=\"margin:0px\"></p>',
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                            }]
                        },
                        {
                            rect: ['0px', '0px', '256px', '133px', 'auto', 'auto'],
                            id: 'bubble',
                            opacity: '1',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '306px', '133px', 'auto', 'auto'],
                                id: 'bubble-right-5',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/bubble-right-5.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['20px', '18px', '250px', '90px', 'auto', 'auto'],
                                align: 'left',
                                id: 'Text',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​You’re right, they can’t. However, Samsung is working on a chipset that can deliver PC-like pixel performance. It should be available sometime in 2019.</p><p style=\"margin: 0px;\"></p><p style=\"margin:0px\"></p>',
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '306px', '133px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: true,
                    labels: {
                        "show_result": 1000
                    },
                    data: [
                        [
                            "eid697",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${bubble}",
                            '0',
                            '1'
                        ],
                        [
                            "eid714",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${bubble}",
                            '1',
                            '0'
                        ],
                        [
                            "eid704",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${bubble-incorrect}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "incorrect_option_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'bubble-incorrect',
                            opacity: '0',
                            rect: ['0px', '0px', '306px', '133px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '306px', '133px', 'auto', 'auto'],
                                id: 'bubble-right-incorrect-5',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/bubble-incorrect-5.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['20px', '18px', '230px', '90px', 'auto', 'auto'],
                                align: 'left',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\"><span style=\"font-family: HelveticaNeueRegular, Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 16px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">Zero clients require serious management and we recommend hiring an additional employee or two to stay on top of it.</span>\n\n</p><p style=\"margin: 0px;\"></p>',
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                            }]
                        },
                        {
                            rect: ['0px', '0px', '306px', '133px', 'auto', 'auto'],
                            id: 'bubble',
                            opacity: '1',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '306px', '133px', 'auto', 'auto'],
                                id: 'bubble-right-5',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/bubble-right-5.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['20px', '18px', '230px', '90px', 'auto', 'auto'],
                                align: 'left',
                                id: 'Text',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Zero clients require serious management and we recommend hiring an additional employee or two to stay on top of it.\n\n</p><p style=\"margin: 0px;\"></p>',
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '306px', '133px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: true,
                    labels: {
                        "show_result": 1000
                    },
                    data: [
                        [
                            "eid697",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${bubble}",
                            '0',
                            '1'
                        ],
                        [
                            "eid714",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${bubble}",
                            '1',
                            '0'
                        ],
                        [
                            "eid704",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${bubble-incorrect}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "incorrect_option_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '306px', '113px', 'auto', 'auto'],
                            id: 'bubble-incorrect',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                id: 'bubble-incorrect-4',
                                type: 'image',
                                rect: ['0px', '0px', '306px', '113px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/bubble-incorrect-4.png', '0px', '0px']
                            },
                            {
                                rect: ['20px', '18px', '240px', '90px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px;\">​They will lose the PC</p><p style=\"margin: 0px;\">functionality but eventually</p><p style=\"margin: 0px;\">they’ll learn to adjust to zero</p><p style=\"margin: 0px;\">clients.</p><p style=\"margin:0px\">​</p>',
                                align: 'left',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['0px', '0px', '306px', '113px', 'auto', 'auto'],
                            id: 'bubble',
                            opacity: '1',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'bubble-right-4',
                                type: 'image',
                                rect: ['0px', '0px', '306px', '113px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/bubble-right-4.png', '0px', '0px']
                            },
                            {
                                rect: ['20px', '18px', '220px', '90px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​They will lose the PC functionality but eventually they’ll learn to adjust to zero clients.</p><p style=\"margin:0px\"></p>',
                                align: 'left',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '306px', '113px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: true,
                    labels: {
                        "show_result": 1000
                    },
                    data: [
                        [
                            "eid697",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${bubble}",
                            '0',
                            '1'
                        ],
                        [
                            "eid714",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${bubble}",
                            '1',
                            '0'
                        ],
                        [
                            "eid704",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${bubble-incorrect}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "correct_option_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '306px', '151px', 'auto', 'auto'],
                            id: 'bubble-correct',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                id: 'bubble-correct-6',
                                type: 'image',
                                rect: ['0px', '0px', '306px', '151px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/bubble-correct-6.png', '0px', '0px']
                            },
                            {
                                rect: ['20px', '16px', '240px', '90px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px;\">Desktop virtualization simply moves the brains of the</p><p style=\"margin: 0px;\">desktop into the datacenter.</p><p style=\"margin: 0px;\">The experience is the same or better if the network and server are sized properly.​</p>',
                                align: 'left',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['0px', '0px', '306px', '151px', 'auto', 'auto'],
                            id: 'bubble',
                            opacity: '1',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'bubble-right-6',
                                type: 'image',
                                rect: ['0px', '0px', '306px', '151px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/bubble-right-6.png', '0px', '0px']
                            },
                            {
                                rect: ['20px', '16px', '240px', '90px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Desktop virtualization simply moves the brains of the</p><p style=\"margin: 0px;\">desktop into the datacenter. </p><p style=\"margin: 0px;\">The experience is the same or better if the network and server are sized properly.</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin:0px\">​</p>',
                                align: 'left',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '306px', '151px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: true,
                    labels: {
                        "show_result": 1000
                    },
                    data: [
                        [
                            "eid697",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${bubble}",
                            '0',
                            '1'
                        ],
                        [
                            "eid703",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${bubble}",
                            '1',
                            '0'
                        ],
                        [
                            "eid704",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${bubble-correct}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "correct_option_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '306px', '151px', 'auto', 'auto'],
                            id: 'bubble-correct',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                type: 'image',
                                id: 'bubble-correct-6',
                                rect: ['0px', '0px', '306px', '151px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/bubble-correct-6.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '20px', '', 'none'],
                                id: 'TextCopy17',
                                text: '<p style=\"margin: 0px;\">​Zero clients require little or no management at all. Simple utilities are included to automate setup, configuration changes and mid-life firmware updates.</p><p style=\"margin: 0px;\"></p>',
                                align: 'left',
                                rect: ['20px', '13px', '220px', '24px', 'auto', 'auto']
                            }]
                        },
                        {
                            rect: ['0px', '0px', '306px', '151px', 'auto', 'auto'],
                            id: 'bubble',
                            opacity: '1',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                type: 'image',
                                id: 'bubble-right-6',
                                rect: ['0px', '0px', '306px', '151px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/bubble-right-6.png', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '20px', '', 'none'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Zero clients require little or no management at all. Simple utilities are included to automate setup, configuration changes and mid-life firmware updates.</p><p style=\"margin: 0px;\"></p>',
                                align: 'left',
                                rect: ['20px', '13px', '220px', '24px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '306px', '151px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: true,
                    labels: {
                        "show_result": 1000
                    },
                    data: [
                        [
                            "eid697",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${bubble}",
                            '0',
                            '1'
                        ],
                        [
                            "eid703",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${bubble}",
                            '1',
                            '0'
                        ],
                        [
                            "eid704",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${bubble-correct}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "content_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0', '0px', '800', '486px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Group',
                            opacity: '0',
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'group',
                            c: [
                            {
                                id: 'background_image',
                                type: 'image',
                                rect: ['0px', '0px', '800px', '486px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/background.jpg', '0px', '0px']
                            },
                            {
                                id: 'customer',
                                type: 'image',
                                rect: ['0px', '0px', '245px', '486px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/customer.png', '0px', '0px']
                            },
                            {
                                id: 'it-channel-partner',
                                type: 'image',
                                rect: ['555px', '0px', '245px', '486px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/it-channel-partner.png', '0px', '0px']
                            },
                            {
                                rect: ['0px', '398px', '195px', '85px', 'auto', 'auto'],
                                font: ['HelveticaNeueBold, Arial Bold', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                align: 'center',
                                id: 'customer-text',
                                opacity: '1',
                                text: '<p style=\"margin: 0px;\">CUSTOMER</p>',
                                type: 'text'
                            },
                            {
                                rect: ['605px', '398px', '195px', '85px', 'auto', 'auto'],
                                font: ['HelveticaNeueBold, Arial Bold', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                align: 'center',
                                id: 'it-channel-partner-text',
                                opacity: '1',
                                text: '<p style=\"margin: 0px;\">​IT CHANNEL&nbsp;\nPARTNER</p><p style=\"margin: 0px;\"></p>',
                                type: 'text'
                            },
                            {
                                type: 'rect',
                                display: 'none',
                                symbolName: 'correct_option_2',
                                rect: ['397px', '58px', null, '132px', 'auto', 'auto'],
                                id: 'correct_option_2'
                            },
                            {
                                type: 'rect',
                                display: 'none',
                                symbolName: 'incorrect_option_2',
                                rect: ['397px', '216px', null, null, 'auto', 'auto'],
                                id: 'incorrect_option_2'
                            },
                            {
                                rect: ['145', '76px', '222px', '96px', 'auto', 'auto'],
                                id: 'bubble-1',
                                opacity: '0',
                                type: 'group',
                                c: [
                                {
                                    id: 'bubble-left',
                                    type: 'image',
                                    rect: ['0px', '0px', '222px', '96px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/bubble-left-3.png', '0px', '0px']
                                },
                                {
                                    rect: ['45px', '16px', '170px', '60px', 'auto', 'auto'],
                                    textStyle: ['', '', '', '', 'none'],
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                    id: 'Text',
                                    text: '<p style=\"margin: 0px;\">​My users are afraid</p><p style=\"margin: 0px;\">to lose the PC functionality.</p><p style=\"margin:0px\"></p>',
                                    align: 'left',
                                    type: 'text'
                                }]
                            },
                            {
                                preload: 'auto',
                                type: 'audio',
                                source: ['media/audio_2.mp3'],
                                id: 'audio_2',
                                rect: ['-5389px', '-3122px', '320px', '45px', 'auto', 'auto'],
                                display: 'none',
                                tag: 'audio'
                            },
                            {
                                preload: 'auto',
                                type: 'audio',
                                source: ['media/response_2.mp3'],
                                id: 'response_2',
                                rect: ['-105', '35', '320px', '45px', 'auto', 'auto'],
                                display: 'none',
                                tag: 'audio'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '800px', '486px']
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: true,
                    labels: {
                        "play": 1000,
                        "hide_content": 6500
                    },
                    data: [
                        [
                            "eid574",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid767",
                            "opacity",
                            6500,
                            500,
                            "linear",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid694",
                            "opacity",
                            1509,
                            241,
                            "linear",
                            "${bubble-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid573",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${Group}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid572",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${Group}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid735",
                            "display",
                            0,
                            0,
                            "linear",
                            "${incorrect_option_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid736",
                            "display",
                            0,
                            0,
                            "linear",
                            "${correct_option_2}",
                            'none',
                            'none'
                        ],
                            [ "eid739", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${correct_option_2}', [] ] ],
                            [ "eid740", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${incorrect_option_2}', [] ] ],
                            [ "eid741", "trigger", 1500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audio_2}', [] ] ]
                    ]
                }
            },
            "content_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'Group',
                            opacity: '0',
                            rect: ['0', '0px', '800', '486px', 'auto', 'auto'],
                            overflow: 'hidden',
                            type: 'group',
                            c: [
                            {
                                type: 'image',
                                id: 'background_image',
                                rect: ['0px', '0px', '800px', '486px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/background.jpg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'customer',
                                rect: ['0px', '0px', '245px', '486px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/customer.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'it-channel-partner',
                                rect: ['555px', '0px', '245px', '486px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/it-channel-partner.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['0px', '398px', '195px', '85px', 'auto', 'auto'],
                                align: 'center',
                                id: 'customer-text',
                                text: '<p style=\"margin: 0px;\">CUSTOMER</p><p style=\"margin: 0px;\">​</p>',
                                opacity: '1',
                                font: ['HelveticaNeueBold, Arial Bold', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                            },
                            {
                                type: 'text',
                                rect: ['605px', '398px', '195px', '85px', 'auto', 'auto'],
                                align: 'center',
                                id: 'it-channel-partner-text',
                                text: '<p style=\"margin: 0px;\">​IT CHANNEL&nbsp;\nPARTNER</p><p style=\"margin: 0px;\"></p>',
                                opacity: '1',
                                font: ['HelveticaNeueBold, Arial Bold', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                            },
                            {
                                rect: ['378px', '58px', null, '151px', 'auto', 'auto'],
                                id: 'correct_option_3',
                                symbolName: 'correct_option_3',
                                type: 'rect',
                                display: 'none'
                            },
                            {
                                rect: ['378px', '216px', null, null, 'auto', 'auto'],
                                id: 'incorrect_option_3',
                                symbolName: 'incorrect_option_3',
                                type: 'rect',
                                display: 'none'
                            },
                            {
                                rect: ['145', '76px', '222px', '96px', 'auto', 'auto'],
                                id: 'bubble-1',
                                opacity: '0',
                                type: 'group',
                                c: [
                                {
                                    type: 'image',
                                    id: 'bubble-left',
                                    rect: ['0px', '0px', '222px', '96px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/bubble-left-3.png', '0px', '0px']
                                },
                                {
                                    type: 'text',
                                    rect: ['45px', '16px', '160px', '60px', 'auto', 'auto'],
                                    text: '<p style=\"margin: 0px;\">​IT staff needs to learn and maintain new management tools.</p><p style=\"margin: 0px;\"></p><p style=\"margin:0px\"></p>',
                                    id: 'Text',
                                    textStyle: ['', '', '', '', 'none'],
                                    align: 'left',
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                                }]
                            },
                            {
                                preload: 'auto',
                                type: 'audio',
                                source: ['media/audio_3.mp3'],
                                id: 'audio_3',
                                rect: ['422', '314', '320px', '45px', 'auto', 'auto'],
                                display: 'none',
                                tag: 'audio'
                            },
                            {
                                preload: 'auto',
                                type: 'audio',
                                source: ['media/response_3.mp3'],
                                id: 'response_3',
                                rect: ['659', '214', '320px', '45px', 'auto', 'auto'],
                                display: 'none',
                                tag: 'audio'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '486px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    labels: {
                        "play": 1000,
                        "hide_content": 7500
                    },
                    data: [
                        [
                            "eid744",
                            "display",
                            0,
                            0,
                            "linear",
                            "${incorrect_option_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid572",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${Group}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid573",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${Group}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid574",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid768",
                            "opacity",
                            7500,
                            500,
                            "linear",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid743",
                            "display",
                            0,
                            0,
                            "linear",
                            "${correct_option_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid694",
                            "opacity",
                            1509,
                            241,
                            "linear",
                            "${bubble-1}",
                            '0',
                            '1'
                        ],
                            [ "eid746", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${incorrect_option_3}', [] ] ],
                            [ "eid745", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${correct_option_3}', [] ] ],
                            [ "eid742", "trigger", 1500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audio_3}', [] ] ]
                    ]
                }
            },
            "button_continue": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '200', '50', 'auto', 'auto'],
                            id: 'Group',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '200px', '50px', 'auto', 'auto'],
                                id: 'continue_box',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/continue_box.jpg', '0px', '0px']
                            },
                            {
                                font: ['HelveticaNeueBold, Arial Bold', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(43, 29, 29)', 'normal', 'break-word', ''],
                                type: 'text',
                                align: 'center',
                                id: 'Text',
                                textStyle: ['', '', '18px', '', ''],
                                text: '<p style=\"margin:0px\">Continue</p>',
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
                    duration: 555,
                    autoPlay: true,
                    data: [
                        [
                            "eid778",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${Group}",
                            'none',
                            'block'
                        ],
                        [
                            "eid779",
                            "opacity",
                            0,
                            555,
                            "easeOutQuad",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid780",
                            "left",
                            0,
                            555,
                            "easeOutQuad",
                            "${Group}",
                            '-40px',
                            '0px'
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
                            rect: ['0px', '0', '197', '50', 'auto', 'auto'],
                            id: 'Group3',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                type: 'image',
                                id: 'reset-button-background',
                                rect: ['0px', '0px', '197px', '50px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/reset-button-background.jpg', '0px', '0px']
                            },
                            {
                                rect: ['26px', '14px', '115px', '22px', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Reset Activity</p>',
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
