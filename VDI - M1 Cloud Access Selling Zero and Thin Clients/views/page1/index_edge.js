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
                            id: 'containerEle',
                            type: 'group',
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            userClass: "centerEL",
                            c: [
                            {
                                id: 'white_background',
                                display: 'none',
                                type: 'rect',
                                rect: ['0px', '0px', '100%', '164px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'contentEle',
                                type: 'rect',
                                rect: ['0px', '0px', '800px', '100%', 'auto', 'auto'],
                                fill: ["rgba(192,192,192,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                c: [
                                {
                                    id: 'button_next_group',
                                    type: 'group',
                                    rect: ['650px', 'auto', '200px', '50', 'auto', '50px'],
                                    opacity: '0',
                                    c: [
                                    {
                                        id: 'button_continue',
                                        symbolName: 'button_continue',
                                        type: 'rect',
                                        rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto'],
                                        cursor: 'pointer',
                                        opacity: '1'
                                    }]
                                },
                                {
                                    id: 'content',
                                    type: 'group',
                                    rect: ['0px', '71', '800', '427', 'auto', 'auto'],
                                    c: [
                                    {
                                        id: 'intro-bg',
                                        display: 'none',
                                        type: 'image',
                                        rect: ['0px', '0px', '800px', '427px', 'auto', 'auto'],
                                        opacity: '1',
                                        fill: ["rgba(0,0,0,0)",im+"intro-bg.jpg",'0px','0px']
                                    },
                                    {
                                        id: 'samsung-logo',
                                        display: 'none',
                                        type: 'image',
                                        rect: ['275px', '139px', '249px', '38px', 'auto', 'auto'],
                                        opacity: '0',
                                        fill: ["rgba(0,0,0,0)",im+"samsung-logo.png",'0px','0px']
                                    },
                                    {
                                        id: 'heading',
                                        display: 'none',
                                        type: 'text',
                                        rect: ['0px', '184px', '100%', '43px', 'auto', 'auto'],
                                        opacity: '0',
                                        text: "<p style=\"margin: 0px;\">​ Cloud Access: </p><p style=\"margin: 0px;\">Selling Zero and Thin Clients\n\n</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\">\n\n\n</p><p style=\"margin: 0px;\">\n\n\n</p><p style=\"margin: 0px;\">\n</p>",
                                        align: "center",
                                        font: ['HelveticaNeueBold, \'Arial Bold\'', [35, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", ""],
                                        textStyle: ["", "", "36px", "", "none"]
                                    },
                                    {
                                        id: 'instruction',
                                        display: 'none',
                                        type: 'text',
                                        rect: ['289px', '303px', 'auto', 'auto', 'auto', 'auto'],
                                        opacity: '0',
                                        text: "<p style=\"margin: 0px;\">Tap Next to start the module.</p>",
                                        align: "center",
                                        font: ['HelveticaNeueBold, \'Arial Bold\'', [16, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                        textStyle: ["", "", "", "", "none"]
                                    }]
                                }]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '638px', 'auto', 'auto'],
                            sizeRange: ['900px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(245,245,245,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    labels: {
                        "start": 790,
                        "show_continue": 3195
                    },
                    data: [
                        [
                            "eid53",
                            "left",
                            3195,
                            805,
                            "linear",
                            "${button_next_group}",
                            '560px',
                            '600px'
                        ],
                        [
                            "eid31",
                            "top",
                            2250,
                            500,
                            "easeOutQuad",
                            "${heading}",
                            '184px',
                            '214px'
                        ],
                        [
                            "eid46",
                            "opacity",
                            3195,
                            563,
                            "easeOutQuad",
                            "${button_next_group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${instruction}",
                            'none',
                            'none'
                        ],
                        [
                            "eid32",
                            "display",
                            3000,
                            0,
                            "easeOutQuad",
                            "${instruction}",
                            'none',
                            'block'
                        ],
                        [
                            "eid19",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${heading}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29",
                            "display",
                            2250,
                            0,
                            "easeOutQuad",
                            "${heading}",
                            'none',
                            'block'
                        ],
                        [
                            "eid28",
                            "top",
                            1421,
                            579,
                            "easeOutQuad",
                            "${samsung-logo}",
                            '169px',
                            '139px'
                        ],
                        [
                            "eid38",
                            "opacity",
                            790,
                            460,
                            "easeOutQuad",
                            "${intro-bg}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${white_background}",
                            'none',
                            'none'
                        ],
                        [
                            "eid33",
                            "opacity",
                            3000,
                            500,
                            "easeOutQuad",
                            "${instruction}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${samsung-logo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid24",
                            "display",
                            1421,
                            0,
                            "easeOutQuad",
                            "${samsung-logo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid34",
                            "display",
                            790,
                            0,
                            "easeOutQuad",
                            "${intro-bg}",
                            'none',
                            'block'
                        ],
                        [
                            "eid30",
                            "opacity",
                            2250,
                            500,
                            "easeOutQuad",
                            "${heading}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "opacity",
                            1421,
                            579,
                            "easeOutQuad",
                            "${samsung-logo}",
                            '0',
                            '1'
                        ]
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-20515506");
