var initFixJson = JSON.parse(`[
    {
        "airport":"KMEM",
        "departures": 
            [                
                {
                    "type": "RNAV",
                    "dp": "AUTMN",                    
                    "trans":"LUVEC",
                    "alt":"ELVIS.SFOUR for non-jet",
                    "initialWaypoints": [                        
                        {
                            "runway":"36L",
                            "waypoint":"LUVEC"
                        },
                        {
                            "runway":"36C/R",
                            "waypoint":"BEEAL"
                        },
                        {
                            "runway":"18L/C",
                            "waypoint":"GADEC"
                        },
                        {
                            "runway":"18R",
                            "waypoint":"HURTN"
                        }
                    ]
                },
                {
                    "type": "SID",
                    "dp": "ELVIS",                    
                    "trans":"SFOUR",
                    "initialWaypoints": [
                        {
                            "runway":"VECTORS",
                            "waypoint":"SHAAA"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "AZONE7",
                    "trans":"PITEW",
                    "alt":"ELVIS.ETWOO for non-jet",
                    "initialWaypoints": [
                        {
                            "runway":"36L",
                            "waypoint":"JAAXX"
                        },
                        {
                            "runway":"36C/R",
                            "waypoint":"JAAXX"
                        },
                        {
                            "runway":"18L/C",
                            "waypoint":"RIBZZ"
                        },
                        {
                            "runway":"18R",
                            "waypoint":"RIBZZ"
                        }
                    ]
                },
                {
                    "type": "SID",
                    "dp": "ELVIS",
                    "trans":"ETWOO",
                    "initialWaypoints": [
                        {
                            "runway":"VECTORS",
                            "waypoint":"TOWND"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "BBKNG",
                    "trans":"KERMI",
                    "alt":"ELVIS.ETREE for non-jet",
                    "initialWaypoints": [
                        {
                            "runway":"36L",
                            "waypoint":"JAAXX"
                        },
                        {
                            "runway":"36C/R",
                            "waypoint":"JAAXX"
                        },
                        {
                            "runway":"18L/C",
                            "waypoint":"RIBZZ"
                        },
                        {
                            "runway":"18R",
                            "waypoint":"RIBZZ"
                        }
                    ]
                },
                {
                    "type": "SID",
                    "dp": "ELVIS",
                    "trans":"ETREE",
                    "initialWaypoints": [
                        {
                            "runway":"VECTORS",
                            "waypoint":"LEOOO"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "BINKY",
                    "trans":"BASBE",
                    "alt":"ELVIS.STREE for non-jet",
                    "initialWaypoints": [
                        {
                            "runway":"36L",
                            "waypoint":"BEALL"
                        },
                        {
                            "runway":"36C/R",
                            "waypoint":"BEALL"
                        },
                        {
                            "runway":"18L/C",
                            "waypoint":"GADEC"
                        },
                        {
                            "runway":"18R",
                            "waypoint":"HURTN"
                        }
                    ]
                },
                {
                    "type": "SID",
                    "dp": "ELVIS",
                    "trans":"ETREE",
                    "initialWaypoints": [
                        {
                            "runway":"VECTORS",
                            "waypoint":"IMABE"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "CHLDR",
                    "trans":"ANSWA",
                    "alt":"ELVIS.WONEE for non-jet",
                    "initialWaypoints": [
                        {
                            "runway":"36L",
                            "waypoint":"BEALL"
                        },
                        {
                            "runway":"36C/R",
                            "waypoint":"BEALL"
                        },
                        {
                            "runway":"18L/C",
                            "waypoint":"CHETO"
                        },
                        {
                            "runway":"18R",
                            "waypoint":"CHETO"
                        }
                    ]
                },
                {
                    "type": "SID",
                    "dp": "ELVIS",
                    "trans":"ETREE",
                    "initialWaypoints": [
                        {
                            "runway":"VECTORS",
                            "waypoint":"PEPOC"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "CRSON",
                    "trans":"HUMMS",
                    "alt":"ELVIS.NFOUR for non-jet",
                    "initialWaypoints": [
                        {
                            "runway":"36L",
                            "waypoint":"SLONN"
                        },
                        {
                            "runway":"36C/R",
                            "waypoint":"SLONN"
                        },
                        {
                            "runway":"18L/C",
                            "waypoint":"RIBZZ"
                        },
                        {
                            "runway":"18R",
                            "waypoint":"RIBZZ"
                        }
                    ]
                },
                {
                    "type": "SID",
                    "dp": "ELVIS",
                    "trans":"NFOUR",
                    "initialWaypoints": [
                        {
                            "runway":"VECTORS",
                            "waypoint":"LYZZI"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "DUCKZ",
                    "trans":"HELAR",
                    "alt":"ELVIS.WTWOO for non-jet",
                    "initialWaypoints": [
                        {
                            "runway":"36L",
                            "waypoint":"BEALL"
                        },
                        {
                            "runway":"36C/R",
                            "waypoint":"BEALL"
                        },
                        {
                            "runway":"18L/C",
                            "waypoint":"CHETO"
                        },
                        {
                            "runway":"18R",
                            "waypoint":"CHETO"
                        }
                    ]
                },
                {
                    "type": "SID",
                    "dp": "ELVIS",
                    "trans":"WTWOO",
                    "initialWaypoints": [
                        {
                            "runway":"VECTORS",
                            "waypoint":"WSTIN"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "GENEH",
                    "trans":"NUYID",
                    "alt":"ELVIS.NFIVE for non-jet",
                    "initialWaypoints": [
                        {
                            "runway":"36L",
                            "waypoint":"SLONN"
                        },
                        {
                            "runway":"36C/R",
                            "waypoint":"SLONN"
                        },
                        {
                            "runway":"18L/C",
                            "waypoint":"RIBZZ"
                        },
                        {
                            "runway":"18R",
                            "waypoint":"RIBZZ"
                        }
                    ]
                },
                {
                    "type": "SID",
                    "dp": "ELVIS",
                    "trans":"NFIVE",
                    "initialWaypoints": [
                        {
                            "runway":"VECTORS",
                            "waypoint":"BASAC"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "GMBUD",
                    "trans":"HJADET",
                    "alt":"ELVIS.EFOUR for non-jet",
                    "initialWaypoints": [
                        {
                            "runway":"36L",
                            "waypoint":"JAAXX"
                        },
                        {
                            "runway":"36C/R",
                            "waypoint":"JAAXX"
                        },
                        {
                            "runway":"18L/C",
                            "waypoint":"RIBZZ"
                        },
                        {
                            "runway":"18R",
                            "waypoint":"RIBZZ"
                        }
                    ]
                },
                {
                    "type": "SID",
                    "dp": "ELVIS",
                    "trans":"EFOUT",
                    "initialWaypoints": [
                        {
                            "runway":"VECTORS",
                            "waypoint":"CUVDO"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "GOETZ",
                    "trans":"DIYAB",
                    "alt":"ELVIS.EONEE for non-jet",
                    "initialWaypoints": [
                        {
                            "runway":"36L",
                            "waypoint":"JAAXX"
                        },
                        {
                            "runway":"36C/R",
                            "waypoint":"JAAXX"
                        },
                        {
                            "runway":"18L/C",
                            "waypoint":"RIBZZ"
                        },
                        {
                            "runway":"18R",
                            "waypoint":"RIBZZ"
                        }
                    ]
                },
                {
                    "type": "SID",
                    "dp": "ELVIS",
                    "trans":"WTWOO",
                    "initialWaypoints": [
                        {
                            "runway":"VECTORS",
                            "waypoint":"DOUUG"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "GRRIZ",
                    "trans":"MIEDZ",
                    "alt":"ELVIS.NRONE for non-jet",
                    "initialWaypoints": [
                        {
                            "runway":"36L",
                            "waypoint":"DLONG"
                        },
                        {
                            "runway":"36C/R",
                            "waypoint":"DLONG"
                        },
                        {
                            "runway":"18L/C",
                            "waypoint":"CHETO"
                        },
                        {
                            "runway":"18R",
                            "waypoint":"CHETO"
                        }
                    ]
                },
                {
                    "type": "SID",
                    "dp": "ELVIS",
                    "trans":"NRONE",
                    "initialWaypoints": [
                        {
                            "runway":"VECTORS",
                            "waypoint":"FHLPS"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "HOTRD",
                    "trans":"TOMKE",
                    "alt":"ELVIS.WFIVE for non-jet",
                    "initialWaypoints": [
                        {
                            "runway":"36L",
                            "waypoint":"BEALL"
                        },
                        {
                            "runway":"36C/R",
                            "waypoint":"BEALL"
                        },
                        {
                            "runway":"18L/C",
                            "waypoint":"CHETO"
                        },
                        {
                            "runway":"18R",
                            "waypoint":"CHETO"
                        }
                    ]
                },
                {
                    "type": "SID",
                    "dp": "ELVIS",
                    "trans":"WFIVE",
                    "initialWaypoints": [
                        {
                            "runway":"VECTORS",
                            "waypoint":"ZELKO"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "JTEEE",
                    "trans":"ODATE",
                    "alt":"ELVIS.WTWOO for non-jet",
                    "initialWaypoints": [
                        {
                            "runway":"36L",
                            "waypoint":"DLONG"
                        },
                        {
                            "runway":"36C/R",
                            "waypoint":"DLONG"
                        },
                        {
                            "runway":"18L/C",
                            "waypoint":"CHETO"
                        },
                        {
                            "runway":"18R",
                            "waypoint":"CHETO"
                        }
                    ]
                },
                {
                    "type": "SID",
                    "dp": "ELVIS",
                    "trans":"NTWOO",
                    "initialWaypoints": [
                        {
                            "runway":"VECTORS",
                            "waypoint":"HSTON"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "NIKEI",
                    "trans":"INAYO",
                    "alt":"ELVIS.WFOUR for non-jet",
                    "initialWaypoints": [
                        {
                            "runway":"36L",
                            "waypoint":"BEALL"
                        },
                        {
                            "runway":"36C/R",
                            "waypoint":"BEALL"
                        },
                        {
                            "runway":"18L/C",
                            "waypoint":"CHETO"
                        },
                        {
                            "runway":"18R",
                            "waypoint":"CHETO"
                        }
                    ]
                },
                {
                    "type": "SID",
                    "dp": "ELVIS",
                    "trans":"WTWOO",
                    "initialWaypoints": [
                        {
                            "runway":"VECTORS",
                            "waypoint":"LRNCE"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "OLEMS",
                    "trans":"LEYIK",
                    "alt":"ELVIS.SONEI for non-jet",
                    "initialWaypoints": [
                        {
                            "runway":"36L",
                            "waypoint":"BEALL"
                        },
                        {
                            "runway":"36C/R",
                            "waypoint":"BEALL"
                        },
                        {
                            "runway":"18L/C",
                            "waypoint":"GADEC"
                        },
                        {
                            "runway":"18R",
                            "waypoint":"EMIIT"
                        }
                    ]
                },
                {
                    "type": "SID",
                    "dp": "ELVIS",
                    "trans":"SONEI",
                    "initialWaypoints": [
                        {
                            "runway":"VECTORS",
                            "waypoint":"CASLN"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "PIEPE",
                    "trans":"IBUFY",
                    "alt":"ELVIS.STWOO for non-jet",
                    "initialWaypoints": [
                        {
                            "runway":"36L",
                            "waypoint":"BEALL"
                        },
                        {
                            "runway":"36C/R",
                            "waypoint":"BEALL"
                        },
                        {
                            "runway":"18L/C",
                            "waypoint":"GADEC"
                        },
                        {
                            "runway":"18R",
                            "waypoint":"EMIIT"
                        }
                    ]
                },
                {
                    "type": "SID",
                    "dp": "ELVIS",
                    "trans":"WTWOO",
                    "initialWaypoints": [
                        {
                            "runway":"VECTORS",
                            "waypoint":"BEBIE"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "SELPH",
                    "trans":"OHULO",
                    "alt":"ELVIS.NTREE for non-jet",
                    "initialWaypoints": [
                        {
                            "runway":"36L",
                            "waypoint":"SLONN"
                        },
                        {
                            "runway":"36C/R",
                            "waypoint":"SLONN"
                        },
                        {
                            "runway":"18L/C",
                            "waypoint":"RIBZZ"
                        },
                        {
                            "runway":"18R",
                            "waypoint":"RIBZZ"
                        }
                    ]
                },
                {
                    "type": "SID",
                    "dp": "ELVIS",
                    "trans":"WTWOO",
                    "initialWaypoints": [
                        {
                            "runway":"VECTORS",
                            "waypoint":"BETYY"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "ZUMIT",
                    "trans":"FOXOM",
                    "alt":"ELVIS.WTREE for non-jet",
                    "initialWaypoints": [
                        {
                            "runway":"36L",
                            "waypoint":"BEALL"
                        },
                        {
                            "runway":"36C/R",
                            "waypoint":"BEALL"
                        },
                        {
                            "runway":"18L/C",
                            "waypoint":"CHETO"
                        },
                        {
                            "runway":"18R",
                            "waypoint":"CHETO"
                        }
                    ]
                },
                {
                    "type": "SID",
                    "dp": "ELVIS",
                    "trans":"WTREE",
                    "initialWaypoints": [
                        {
                            "runway":"VECTORS",
                            "waypoint":"STVVV"
                        }
                    ]
                }
            ]        
    }
]`);
