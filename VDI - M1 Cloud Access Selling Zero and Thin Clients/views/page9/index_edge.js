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
                                    id: 'video_control_overlay',
                                    display: 'none',
                                    type: 'rect',
                                    rect: ['2px', '568px', '800px', '31px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.75)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                },
                                {
                                    id: 'content',
                                    symbolName: 'content',
                                    type: 'rect',
                                    rect: ['0px', '149px', 'undefined', 'undefined', 'auto', 'auto']
                                },
                                {
                                    id: 'heading',
                                    display: 'none',
                                    type: 'text',
                                    rect: ['-50px', '38px', '800px', '48px', 'auto', 'auto'],
                                    opacity: '0',
                                    text: "<p style=\"margin: 0px;\">​Sales Scenario Part 2\n</p><p style=\"margin: 0px;\"><span style=\"color: rgb(83, 86, 90);\"></span>\n</p>",
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
                        },
                        {
                            id: 'audio',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['333', '170', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"audio.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'audio_1',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['522', '310', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"audio_1.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'audio_2',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['485', '315', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"audio_2.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'audio_3',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['506', '347', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"audio_3.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'audio_4',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['564', '295', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"audio_4.mp3"],
                            preload: 'auto'
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
                            "eid411",
                            "display",
                            0,
                            0,
                            "linear",
                            "${video_control_overlay}",
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
                            [ "eid384", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${content}', [] ] ],
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
                            rect: ['0px', '0px', '200px', '50px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(61,132,200,1.00)']
                        },
                        {
                            font: ['HelveticaNeueBold, Arial Bold', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(43, 29, 29)', 'normal', 'break-word', ''],
                            type: 'text',
                            text: '<p style=\"margin:0px\">Previous​</p>',
                            id: 'Text',
                            textStyle: ['', '', '50px', '', ''],
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
                            text: 'Next',
                            textStyle: ['', '', '18px', '', ''],
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
                            type: 'rect',
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['175px', '0px', '545px', '63px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(0,0,0,0.40)'],
                            c: [
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '', '', 'none'],
                                id: 'Text2',
                                text: '<p style=\"margin: 0px;\">​Samsung zero clients are low heat and low power consumption, cutting down as much as 60%.</p>',
                                align: 'left',
                                rect: ['19px', '11px', '520px', '38px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            opacity: '0',
                            cursor: 'pointer',
                            rect: ['0px', '0px', '175px', '63px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(83,86,90,1)'],
                            c: [
                            {
                                font: ['HelveticaNeueBold, Arial Bold', [16, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Low Power Consumption</p>',
                                align: 'center',
                                rect: ['0px', '13px', '100%', '38px', 'auto', 'auto']
                            }]
                        },
                        {
                            rect: ['0px', '0px', '175px', '63px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'overlay',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '720px', '63px']
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: true,
                    labels: {
                        "active_content": 750,
                        "deactive_content": 1500,
                        "show_content": 2250
                    },
                    data: [
                        [
                            "eid364",
                            "left",
                            2250,
                            500,
                            "linear",
                            "${Rectangle4}",
                            '134px',
                            '175px'
                        ],
                        [
                            "eid357",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '0.4'
                        ],
                        [
                            "eid361",
                            "opacity",
                            750,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '0.4000000059604645',
                            '1'
                        ],
                        [
                            "eid386",
                            "opacity",
                            1500,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0.4'
                        ],
                        [
                            "eid405",
                            "opacity",
                            2000,
                            750,
                            "linear",
                            "${Rectangle3}",
                            '0.4000000059604645',
                            '1'
                        ],
                        [
                            "eid387",
                            "display",
                            750,
                            0,
                            "linear",
                            "${overlay}",
                            'block',
                            'none'
                        ],
                        [
                            "eid390",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${overlay}",
                            'none',
                            'block'
                        ],
                        [
                            "eid368",
                            "background-color",
                            2250,
                            500,
                            "linear",
                            "${Rectangle3}",
                            'rgba(83,86,90,1)',
                            'rgba(0,87,184,1.00)'
                        ],
                        [
                            "eid358",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid359",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid365",
                            "opacity",
                            2250,
                            500,
                            "linear",
                            "${Rectangle4}",
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
                            type: 'rect',
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['175px', '0px', '545px', '63px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(0,0,0,0.40)'],
                            c: [
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '18px', '', 'none'],
                                id: 'Text2',
                                text: '<p style=\"margin: 0px;\">​Samsung manufactures 90% of the electronics and display components used in all of their products. Having this level of design control allows Samsung to deliver more features and innovation at a lower price.</p>',
                                align: 'left',
                                rect: ['19px', '3px', '520px', '58px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            opacity: '0',
                            cursor: 'pointer',
                            rect: ['0px', '0px', '175px', '63px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(200,0,161,1.00)'],
                            c: [
                            {
                                font: ['HelveticaNeueBold, Arial Bold', [16, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Seamless</p><p style=\"margin: 0px;\">Integration</p>',
                                align: 'center',
                                rect: ['0px', '13px', '175px', '38px', 'auto', 'auto']
                            }]
                        },
                        {
                            rect: ['0px', '0px', '175px', '63px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'overlay',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '720px', '63px']
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: true,
                    labels: {
                        "active_content": 750,
                        "deactive_content": 1500,
                        "show_content": 2250
                    },
                    data: [
                        [
                            "eid368",
                            "background-color",
                            2250,
                            500,
                            "linear",
                            "${Rectangle3}",
                            'rgba(83,86,90,1)',
                            'rgba(200,0,161,1.00)'
                        ],
                        [
                            "eid357",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '0.4'
                        ],
                        [
                            "eid361",
                            "opacity",
                            750,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '0.4000000059604645',
                            '1'
                        ],
                        [
                            "eid393",
                            "opacity",
                            1500,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0.4'
                        ],
                        [
                            "eid404",
                            "opacity",
                            2000,
                            750,
                            "linear",
                            "${Rectangle3}",
                            '0.4000000059604645',
                            '1'
                        ],
                        [
                            "eid394",
                            "display",
                            750,
                            0,
                            "linear",
                            "${overlay}",
                            'block',
                            'none'
                        ],
                        [
                            "eid395",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${overlay}",
                            'none',
                            'block'
                        ],
                        [
                            "eid364",
                            "left",
                            2250,
                            500,
                            "linear",
                            "${Rectangle4}",
                            '134px',
                            '175px'
                        ],
                        [
                            "eid358",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid359",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid365",
                            "opacity",
                            2250,
                            500,
                            "linear",
                            "${Rectangle4}",
                            '0',
                            '1'
                        ]
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
                            type: 'rect',
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['175px', '0px', '545px', '63px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(0,0,0,0.40)'],
                            c: [
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '', '', 'none'],
                                id: 'Text2',
                                text: '<p style=\"margin: 0px;\">​Samsung zero client displays are height adjustable and also pivot, tilt and swivel.</p>',
                                align: 'left',
                                rect: ['19px', '11px', '520px', '38px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            opacity: '0',
                            cursor: 'pointer',
                            rect: ['0px', '0px', '175px', '63px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(122,184,0,1.00)'],
                            c: [
                            {
                                font: ['HelveticaNeueBold, Arial Bold', [16, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '63px', '', ''],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Adjustable</p>',
                                align: 'center',
                                rect: ['0px', '0px', '175px', '63px', 'auto', 'auto']
                            }]
                        },
                        {
                            rect: ['0px', '0px', '175px', '63px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'overlay',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '720px', '63px']
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: true,
                    labels: {
                        "active_content": 750,
                        "deactive_content": 1500,
                        "show_content": 2250
                    },
                    data: [
                        [
                            "eid364",
                            "left",
                            2250,
                            500,
                            "linear",
                            "${Rectangle4}",
                            '134px',
                            '175px'
                        ],
                        [
                            "eid357",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '0.4'
                        ],
                        [
                            "eid361",
                            "opacity",
                            750,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '0.4000000059604645',
                            '1'
                        ],
                        [
                            "eid396",
                            "opacity",
                            1500,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0.4'
                        ],
                        [
                            "eid403",
                            "opacity",
                            2000,
                            750,
                            "linear",
                            "${Rectangle3}",
                            '0.4000000059604645',
                            '1'
                        ],
                        [
                            "eid397",
                            "display",
                            750,
                            0,
                            "linear",
                            "${overlay}",
                            'block',
                            'none'
                        ],
                        [
                            "eid398",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${overlay}",
                            'none',
                            'block'
                        ],
                        [
                            "eid368",
                            "background-color",
                            2250,
                            500,
                            "linear",
                            "${Rectangle3}",
                            'rgba(83,86,90,1)',
                            'rgba(122,184,0,1.00)'
                        ],
                        [
                            "eid358",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid359",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid365",
                            "opacity",
                            2250,
                            500,
                            "linear",
                            "${Rectangle4}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "content_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['175px', '0px', '545px', '63px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(0,0,0,0.40)'],
                            c: [
                            {
                                font: ['HelveticaNeueRegular, Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '', '', 'none'],
                                id: 'Text2',
                                text: '<p style=\"margin: 0px;\">​Samsung offers 3-year warranties as well as B2B (business to business) support.</p>',
                                align: 'left',
                                rect: ['19px', '11px', '520px', '38px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            opacity: '0',
                            cursor: 'pointer',
                            rect: ['0px', '0px', '175px', '63px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,169,224,1.00)'],
                            c: [
                            {
                                font: ['HelveticaNeueBold, Arial Bold', [16, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '63px', '', ''],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Warranty</p>',
                                align: 'center',
                                rect: ['0px', '0px', '175px', '63px', 'auto', 'auto']
                            }]
                        },
                        {
                            rect: ['0px', '0px', '175px', '63px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'overlay',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '720px', '63px']
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: true,
                    labels: {
                        "active_content": 750,
                        "deactive_content": 1500,
                        "show_content": 2250
                    },
                    data: [
                        [
                            "eid368",
                            "background-color",
                            2250,
                            500,
                            "linear",
                            "${Rectangle3}",
                            'rgba(83,86,90,1)',
                            'rgba(0,169,224,1.00)'
                        ],
                        [
                            "eid357",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '0.4'
                        ],
                        [
                            "eid361",
                            "opacity",
                            750,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '0.4000000059604645',
                            '1'
                        ],
                        [
                            "eid399",
                            "opacity",
                            1500,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0.4'
                        ],
                        [
                            "eid402",
                            "opacity",
                            2000,
                            750,
                            "linear",
                            "${Rectangle3}",
                            '0.4000000059604645',
                            '1'
                        ],
                        [
                            "eid400",
                            "display",
                            750,
                            0,
                            "linear",
                            "${overlay}",
                            'block',
                            'none'
                        ],
                        [
                            "eid401",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${overlay}",
                            'none',
                            'block'
                        ],
                        [
                            "eid364",
                            "left",
                            2250,
                            500,
                            "linear",
                            "${Rectangle4}",
                            '134px',
                            '175px'
                        ],
                        [
                            "eid358",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid359",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid365",
                            "opacity",
                            2250,
                            500,
                            "linear",
                            "${Rectangle4}",
                            '0',
                            '1'
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
                            rect: ['0px', '0px', '800', '419px', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '0',
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '800px', '419px', 'auto', 'auto'],
                                id: 'Rectangle2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,0.80)']
                            },
                            {
                                id: 'content_1',
                                symbolName: 'content_1',
                                rect: ['40px', '100px', '720px', '63', 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                id: 'content_2',
                                symbolName: 'content_2',
                                rect: ['40px', '171px', null, null, 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                id: 'content_3',
                                symbolName: 'content_3',
                                rect: ['40px', '242px', null, null, 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                id: 'content_4',
                                symbolName: 'content_4',
                                rect: ['40px', '313px', null, null, 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                rect: ['40px', '23px', '500px', '50px', 'auto', 'auto'],
                                textStyle: ['', '', '24px', '', 'none'],
                                font: ['HelveticaNeueBold, Arial Bold', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text3',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 24px;\">Cost-effective?</span></p><p style=\"margin: 0px;\">\nTap each key point for more details.</p>',
                                align: 'left',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '800px', '419px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    labels: {
                        "hide_content": 3500
                    },
                    data: [
                        [
                            "eid410",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${Group}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid417",
                            "scaleY",
                            3500,
                            500,
                            "linear",
                            "${Group}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid375",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid415",
                            "opacity",
                            3500,
                            500,
                            "linear",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid409",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${Group}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid416",
                            "scaleX",
                            3500,
                            500,
                            "linear",
                            "${Group}",
                            '1',
                            '0.5'
                        ],
                            [ "eid372", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${content_4}', [] ] ],
                            [ "eid377", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${content_1}', [] ] ],
                            [ "eid373", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${content_3}', [] ] ],
                            [ "eid378", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${content_2}', [] ] ],
                            [ "eid381", "trigger", 500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${content_2}', [] ] ],
                            [ "eid380", "trigger", 500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${content_4}', [] ] ],
                            [ "eid379", "trigger", 500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${content_3}', [] ] ],
                            [ "eid382", "trigger", 500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${content_1}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-20515506");
