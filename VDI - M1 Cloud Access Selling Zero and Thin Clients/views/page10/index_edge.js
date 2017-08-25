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
                                rect: ['0px', '0px', '100%', '109px', 'auto', 'auto'],
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
                                    rect: ['42px', '639px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    opacity: '0'
                                },
                                {
                                    id: 'button_continue',
                                    symbolName: 'button_next',
                                    display: 'none',
                                    type: 'rect',
                                    rect: ['600px', '639px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    opacity: '1'
                                },
                                {
                                    id: 'video',
                                    display: 'none',
                                    type: 'video',
                                    tag: 'video',
                                    rect: ['0px', '149px', '800px', '450px', 'auto', 'auto'],
                                    controls: 'controls',
                                    source: [vid+"video.mp4"],
                                    preload: 'auto'
                                },
                                {
                                    id: 'heading',
                                    display: 'none',
                                    type: 'text',
                                    rect: ['-50px', '38px', '800px', '48px', 'auto', 'auto'],
                                    opacity: '0',
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-family: HelveticaNeueBold, 'Arial Bold'; font-weight: 400; font-style: normal; text-decoration: none; font-size: 35px; color: rgb(113, 116, 119); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">Sales Scenario Part 3</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(83, 86, 90);\"></span>\n</p>",
                                    align: "left",
                                    font: ['HelveticaNeueBold, \'Arial Bold\'', [35, "px"], "rgba(113,116,119,1.00)", "400", "none", "normal", "break-word", ""],
                                    textStyle: ["", "", "", "", "none"]
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
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '739px', 'auto', 'auto'],
                            sizeRange: ['900px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(245,245,245,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 164817,
                    autoPlay: true,
                    labels: {
                        "start": 250,
                        "show_buttons": 1750,
                        "show_continue": 164262
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
                            164262,
                            555,
                            "easeOutQuad",
                            "${button_continue}",
                            '560px',
                            '600px'
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
                            "eid337",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${button_continue}",
                            'none',
                            'none'
                        ],
                        [
                            "eid338",
                            "display",
                            164262,
                            0,
                            "easeOutQuad",
                            "${button_continue}",
                            'none',
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
                            "eid336",
                            "opacity",
                            164262,
                            555,
                            "easeOutQuad",
                            "${button_continue}",
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
                            "eid348",
                            "display",
                            0,
                            0,
                            "linear",
                            "${video}",
                            'none',
                            'none'
                        ],
                        [
                            "eid349",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${video}",
                            'none',
                            'block'
                        ],
                            [ "eid352", "trigger", 1750, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${video}', [] ] ]
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
                            text: '<p style=\"margin:0px\">Previous​</p>',
                            textStyle: ['', '', '50px', '', ''],
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
                            rect: ['39px', '16px', '122px', '18px', 'auto', 'auto'],
                            font: ['HelveticaNeueBold, Arial Bold', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(43, 29, 29)', 'normal', 'break-word', ''],
                            textStyle: ['', '', '18px', '', ''],
                            id: 'Text',
                            text: 'Next',
                            align: 'center',
                            type: 'text'
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-20515506");
