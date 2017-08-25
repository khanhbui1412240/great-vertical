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
                                    rect: ['42px', '619px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    opacity: '0'
                                },
                                {
                                    id: 'button_continue',
                                    symbolName: 'button_next',
                                    type: 'rect',
                                    rect: ['600px', '620px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    opacity: '1'
                                },
                                {
                                    id: 'button_reset_activity',
                                    symbolName: 'button_reset_activity',
                                    type: 'rect',
                                    rect: ['300px', '619px', 'undefined', 'undefined', 'auto', 'auto']
                                },
                                {
                                    id: 'Symbol_1',
                                    symbolName: 'Symbol_1',
                                    type: 'rect',
                                    rect: ['-50px', '254', '440', '325', 'auto', 'auto']
                                },
                                {
                                    id: 'Symbol_2',
                                    symbolName: 'Symbol_2',
                                    type: 'rect',
                                    rect: ['360px', '254px', 'undefined', 'undefined', 'auto', 'auto']
                                },
                                {
                                    id: 'RectangleLock',
                                    display: 'none',
                                    type: 'rect',
                                    rect: ['411px', '254px', '389px', '324px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'intro',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['-46px', '92px', '800px', '97px', 'auto', 'auto'],
                                    opacity: '0',
                                    text: "<p style=\"margin:0px\">​What would I recommend in this scenario? Artie’s on-premises cloud server environment is powered by VMware Horizon View, with some off-premises resources hosted from an Amazon Workspaces (AWS) cloud environment. Does Artie need a zero client or a thin client?&nbsp;</p><p style=\"margin:0px\">​<span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\">​</span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\">​Tap the image to make your selection.</span></p><p style=\"margin:0px\">​</p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">\n\n</p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span>\n</p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin:0px\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin: 0px;\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p><p style=\"margin: 0px;\"><span style=\"font-family: HelveticaNeueBold, 'Arial Bold';\"></span></p>",
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
                                    text: "<p style=\"margin: 0px;\">​What Would I Recommend?\n</p><p style=\"margin: 0px;\"><span style=\"color: rgb(83, 86, 90);\"></span>\n</p>",
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
                                    text: "<p style=\"margin: 0px;\">​Cloud Access: Selling Zero and Thin Clients\n\n\n\n</p><p style=\"margin: 0px;\">\n\n\n\n\n</p>",
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
                            rect: ['0px', '211px', 'undefined', 'undefined', 'auto', 'auto'],
                            userClass: "full-width"
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '719px', 'auto', 'auto'],
                            sizeRange: ['900px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(245,245,245,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 21750,
                    autoPlay: true,
                    labels: {
                        "start": 250,
                        "show_buttons": 1750,
                        "show_continue": 5436
                    },
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
                            "eid672",
                            "top",
                            3321,
                            0,
                            "linear",
                            "${button_previous}",
                            '619px',
                            '619px'
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
                            "eid336",
                            "opacity",
                            5436,
                            555,
                            "easeOutQuad",
                            "${button_continue}",
                            '0',
                            '1'
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
                            "eid965",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleLock}",
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
                            "eid335",
                            "left",
                            5436,
                            555,
                            "easeOutQuad",
                            "${button_continue}",
                            '560px',
                            '600px'
                        ],
                            [ "eid380", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${overlay}', [] ] ],
                            [ "eid961", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_2}', [] ] ],
                            [ "eid958", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${button_reset_activity}', [] ] ],
                            [ "eid940", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_1}', [] ] ],
                            [ "eid941", "trigger", 1750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Symbol_1}', [] ] ],
                            [ "eid962", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Symbol_2}', [] ] ],
                            [ "eid835", "trigger", 2500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${overlay}', [] ] ]
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
                            type: 'text',
                            rect: ['39px', '16px', '122px', '18px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text',
                            textStyle: ['', '', '18px', '', ''],
                            text: 'Next',
                            font: ['HelveticaNeueBold, Arial Bold', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(43, 29, 29)', 'normal', 'break-word', '']
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
                            opacity: '0',
                            id: 'overlay',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
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
                            rect: ['0px', '0px', '100%', '405px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'overlay',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(245,245,245,0.75)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100%', '405px']
                        }
                    }
                },
                timeline: {
                    duration: 19250,
                    autoPlay: true,
                    labels: {
                        "remove_overlay": 500
                    },
                    data: [
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
                        ],
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
                            "eid992",
                            "height",
                            19250,
                            0,
                            "linear",
                            "${overlay}",
                            '405px',
                            '405px'
                        ],
                        [
                            "eid967",
                            "width",
                            0,
                            0,
                            "linear",
                            "${overlay}",
                            '100%',
                            '100%'
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
                            rect: ['50px', '0px', '390px', '324px', 'auto', 'auto'],
                            id: '_1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(165,211,255,0.00)'],
                            c: [
                            {
                                rect: ['0px', '-50px', '390px', '325px', 'auto', 'auto'],
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                id: 'Gray',
                                opacity: '0',
                                type: 'rect',
                                fill: ['rgba(100,139,192,1.00)'],
                                c: [
                                {
                                    id: 'img_grey_1',
                                    type: 'image',
                                    rect: ['0px', '0px', '390px', '269px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/img_grey_1.jpg', '0px', '0px']
                                },
                                {
                                    id: 'img_grey_1Copy',
                                    type: 'image',
                                    rect: ['0px', '0px', '390px', '269px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/img_grey_1.jpg', '0px', '0px']
                                },
                                {
                                    rect: ['0px', '262px', '390px', '63px', 'auto', 'auto'],
                                    id: 'Tittle',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(83,86,90,1.00)'],
                                    c: [
                                    {
                                        textStyle: ['', '', '36px', '', 'none'],
                                        rect: ['89px', '21px', '200px', '22px', 'auto', 'auto'],
                                        font: ['HelveticaNeueBold, \'Arial Bold\'', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                                        align: 'center',
                                        id: 'headingCopy',
                                        opacity: '1',
                                        text: '<p style=\"margin: 0px; line-height: 22px;\">​<span style=\"font-size: 22px; color: rgb(255, 255, 255); font-family: HelveticaNeueRegular, Arial, Helvetica, sans-serif;\">Zero Client</span>\n</p><p style=\"margin: 0px;\"><span style=\"color: rgb(83, 86, 90);\"></span>\n</p>',
                                        type: 'text'
                                    }]
                                }]
                            },
                            {
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['0px', '-50px', '390px', '325px', 'auto', 'auto'],
                                type: 'rect',
                                id: 'Color',
                                opacity: '0',
                                display: 'none',
                                fill: ['rgba(100,139,192,1.00)'],
                                c: [
                                {
                                    id: 'img_color_1',
                                    type: 'image',
                                    rect: ['0px', '0px', '390px', '269px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/img_color_1.jpg', '0px', '0px']
                                },
                                {
                                    rect: ['0px', '262px', '390px', '63px', 'auto', 'auto'],
                                    id: 'TittleCopy',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(61,132,200,1.00)']
                                },
                                {
                                    textStyle: ['', '', '36px', '', 'none'],
                                    rect: ['89px', '283px', '200px', '22px', 'auto', 'auto'],
                                    font: ['HelveticaNeueBold, \'Arial Bold\'', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                                    align: 'center',
                                    id: 'headingCopy2',
                                    opacity: '1',
                                    text: '<p style=\"margin: 0px; line-height: 22px;\">​<span style=\"font-size: 22px; color: rgb(255, 255, 255); font-family: HelveticaNeueRegular, Arial, Helvetica, sans-serif;\">Zero Client</span>\n</p><p style=\"margin: 0px;\"><span style=\"color: rgb(83, 86, 90);\"></span>\n</p>',
                                    type: 'text'
                                }]
                            },
                            {
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['0px', '-30px', '390px', '325px', 'auto', 'auto'],
                                type: 'rect',
                                id: 'Color_3',
                                opacity: '1',
                                display: 'none',
                                fill: ['rgba(100,139,192,1.00)'],
                                c: [
                                {
                                    id: 'img_color_1Copy',
                                    type: 'image',
                                    rect: ['0px', '0px', '390px', '269px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/img_color_1.jpg', '0px', '0px']
                                },
                                {
                                    rect: ['0px', '262px', '390px', '63px', 'auto', 'auto'],
                                    id: 'TittleCopy2',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(122,184,0,1.00)'],
                                    c: [
                                    {
                                        rect: ['158px', '-30px', '59px', '59px', 'auto', 'auto'],
                                        borderRadius: ['50%', '50%', '50%', '50%'],
                                        id: 'Ellipse',
                                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                        type: 'ellipse',
                                        fill: ['rgba(122,184,0,1)']
                                    },
                                    {
                                        id: 'icon_1',
                                        type: 'image',
                                        rect: ['167px', '-21px', '39px', '39px', 'auto', 'auto'],
                                        fill: ['rgba(0,0,0,0)', 'images/icon_1.png', '0px', '0px']
                                    },
                                    {
                                        rect: ['58px', '24px', '261px', '29px', 'auto', 'auto'],
                                        textStyle: ['', '', '', '', 'none'],
                                        font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                        id: 'TextCopy',
                                        text: '<p style=\"margin: 0px;\">​<span style=\"font-family: HelveticaNeueRegular, Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 22px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">Zero Client</span></p>',
                                        align: 'center',
                                        type: 'text'
                                    }]
                                }]
                            },
                            {
                                rect: ['0px', '0px', '390px', '325px', 'auto', 'auto'],
                                display: 'block',
                                type: 'rect',
                                id: 'Click_area',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(100,139,192,0.00)']
                            },
                            {
                                preload: 'auto',
                                type: 'audio',
                                source: ['media/VDI_5.mp3'],
                                id: 'VDI_5',
                                rect: ['503', '407', '320px', '45px', 'auto', 'auto'],
                                display: 'none',
                                tag: 'audio'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '440px', '325px']
                        }
                    }
                },
                timeline: {
                    duration: 17684,
                    autoPlay: true,
                    labels: {
                        "action_1": 2000,
                        "reset_content": 2750,
                        "action_2": 3050
                    },
                    data: [
                        [
                            "eid924",
                            "opacity",
                            3050,
                            550,
                            "linear",
                            "${Color_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid993",
                            "display",
                            3050,
                            0,
                            "linear",
                            "${Click_area}",
                            'block',
                            'none'
                        ],
                        [
                            "eid917",
                            "opacity",
                            2000,
                            550,
                            "linear",
                            "${Color}",
                            '0',
                            '1'
                        ],
                        [
                            "eid912",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Color}",
                            'none',
                            'none'
                        ],
                        [
                            "eid913",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Color}",
                            'none',
                            'block'
                        ],
                        [
                            "eid911",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Gray}",
                            '0',
                            '1'
                        ],
                        [
                            "eid914",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Color_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid923",
                            "display",
                            3050,
                            0,
                            "linear",
                            "${Color_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid937",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Gray}",
                            '-50px',
                            '0px'
                        ],
                        [
                            "eid959",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${Color}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid960",
                            "top",
                            3600,
                            0,
                            "linear",
                            "${Color_3}",
                            '0px',
                            '0px'
                        ],
                            [ "eid966", "trigger", 3050, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${VDI_5}', [] ] ]
                    ]
                }
            },
            "button_reset_activity": {
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
                            id: 'Group2',
                            rect: ['1', '0', '199', '50', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'image_reset_gray',
                                rect: ['0px', '0px', '199px', '50px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/image_reset_gray.jpg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'image_reset_icon',
                                rect: ['151px', '12px', '25px', '25px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/image_reset_icon.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                id: 'Text4',
                                text: '<p style=\"margin: 0px;\">Reset Activity​</p>',
                                rect: ['19px', '14px', '129px', '25px', 'auto', 'auto'],
                                font: ['HelveticaNeueBold, Arial Bold', [18, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                            }]
                        },
                        {
                            rect: ['0px', '0px', '200px', '50px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'RectangleClick',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,135,135,0)']
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
                    autoPlay: true,
                    data: [
                        [
                            "eid957",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${Group2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid963",
                            "display",
                            250,
                            0,
                            "linear",
                            "${RectangleClick}",
                            'none',
                            'block'
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
                            rect: ['50px', '0px', '390px', '324px', 'auto', 'auto'],
                            id: '_1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(165,211,255,0.00)'],
                            c: [
                            {
                                rect: ['0px', '-50px', '390px', '325px', 'auto', 'auto'],
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                id: 'Gray',
                                opacity: '0',
                                type: 'rect',
                                fill: ['rgba(100,139,192,1.00)'],
                                c: [
                                {
                                    id: 'img_grey_2',
                                    type: 'image',
                                    rect: ['0px', '0px', '390px', '269px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/img_grey_2.jpg', '0px', '0px']
                                },
                                {
                                    rect: ['0px', '262px', '390px', '63px', 'auto', 'auto'],
                                    id: 'Tittle',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(83,86,90,1.00)'],
                                    c: [
                                    {
                                        textStyle: ['', '', '22px', '', 'none'],
                                        rect: ['89px', '21px', '200px', '22px', 'auto', 'auto'],
                                        font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                                        align: 'center',
                                        id: 'headingCopy',
                                        opacity: '1',
                                        text: '<p style=\"margin:0px\">Thin Client​</p>',
                                        type: 'text'
                                    }]
                                }]
                            },
                            {
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['0px', '-50px', '390px', '325px', 'auto', 'auto'],
                                type: 'rect',
                                id: 'Color',
                                opacity: '0',
                                display: 'none',
                                fill: ['rgba(100,139,192,1.00)'],
                                c: [
                                {
                                    id: 'img_color_2',
                                    type: 'image',
                                    rect: ['0px', '0px', '390px', '269px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/img_color_2.jpg', '0px', '0px']
                                },
                                {
                                    rect: ['0px', '262px', '390px', '63px', 'auto', 'auto'],
                                    id: 'TittleCopy',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(61,132,200,1.00)']
                                },
                                {
                                    textStyle: ['', '', '22px', '', 'none'],
                                    rect: ['89px', '283px', '200px', '22px', 'auto', 'auto'],
                                    font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                                    align: 'center',
                                    id: 'headingCopy3',
                                    opacity: '1',
                                    text: 'Thin Client\n',
                                    type: 'text'
                                }]
                            },
                            {
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['0px', '-30px', '390px', '325px', 'auto', 'auto'],
                                type: 'rect',
                                id: 'Color_3',
                                opacity: '1',
                                display: 'none',
                                fill: ['rgba(100,139,192,1.00)'],
                                c: [
                                {
                                    id: 'img_grey_2Copy3',
                                    type: 'image',
                                    rect: ['0px', '0px', '390px', '269px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/img_grey_2.jpg', '0px', '0px']
                                },
                                {
                                    rect: ['0px', '262px', '390px', '63px', 'auto', 'auto'],
                                    id: 'TittleCopy2',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(166,169,170,1.00)'],
                                    c: [
                                    {
                                        rect: ['158px', '-30px', '59px', '59px', 'auto', 'auto'],
                                        borderRadius: ['50%', '50%', '50%', '50%'],
                                        id: 'Ellipse',
                                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                        type: 'ellipse',
                                        fill: ['rgba(166,169,170,1.00)']
                                    },
                                    {
                                        id: 'icon_2',
                                        type: 'image',
                                        rect: ['167px', '-21px', '40px', '39px', 'auto', 'auto'],
                                        fill: ['rgba(0,0,0,0)', 'images/icon_2.png', '0px', '0px']
                                    },
                                    {
                                        rect: ['58px', '24px', '261px', '29px', 'auto', 'auto'],
                                        textStyle: ['', '', '', '', 'none'],
                                        font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                        id: 'TextCopy',
                                        text: '<p style=\"margin: 0px;\">​Thin Client<span style=\"font-family: HelveticaNeueRegular, Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 22px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\"></span></p>',
                                        align: 'center',
                                        type: 'text'
                                    }]
                                }]
                            },
                            {
                                rect: ['0px', '0px', '390px', '325px', 'auto', 'auto'],
                                type: 'rect',
                                id: 'Click_area',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(100,139,192,0.00)']
                            }]
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/INCORRECT_sound.wav'],
                            id: 'INCORRECT_sound',
                            rect: ['181', '180', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '440px', '325px']
                        }
                    }
                },
                timeline: {
                    duration: 3600,
                    autoPlay: true,
                    labels: {
                        "action_1": 2000,
                        "reset_content": 2750,
                        "action_2": 3050
                    },
                    data: [
                        [
                            "eid917",
                            "opacity",
                            2000,
                            550,
                            "linear",
                            "${Color}",
                            '0',
                            '1'
                        ],
                        [
                            "eid911",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Gray}",
                            '0',
                            '1'
                        ],
                        [
                            "eid912",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Color}",
                            'none',
                            'none'
                        ],
                        [
                            "eid913",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Color}",
                            'none',
                            'block'
                        ],
                        [
                            "eid914",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Color_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid923",
                            "display",
                            3050,
                            0,
                            "linear",
                            "${Color_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid924",
                            "opacity",
                            3050,
                            550,
                            "linear",
                            "${Color_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid937",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Gray}",
                            '-50px',
                            '0px'
                        ],
                        [
                            "eid959",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${Color}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid960",
                            "top",
                            3600,
                            0,
                            "linear",
                            "${Color_3}",
                            '0px',
                            '0px'
                        ],
                            [ "eid964", "trigger", 3100.2810672823, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${INCORRECT_sound}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-20515506");
