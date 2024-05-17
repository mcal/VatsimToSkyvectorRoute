var initFixJson = JSON.parse(`[
    {
        "airport":"KMEM",
        "frequencies": 
            { 
                "APP":"125.8",
                "TWR":"119.7",
                "GND":"121.9",
                "DEL":"125.2",
                "ATIS":"127.75",
            },
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
    },
    {
        "airport":"KBNA",
        "departures": 
            [                
                {
                    "type": "RNAV",
                    "dp": "CHADM",                    
                    "trans":"SWAPP",
                    "alt":"",
                    "initialWaypoints": [                        
                        {
                            "runway":"2C | 2L | 2R | 20C | 20L | 20R | 13 | 31",
                            "waypoint":"ASSIGN HDG THEN RADAR VECTORS TO: <strong>OZCAR</strong>"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "DANLS",                    
                    "trans":"SPKER",
                    "alt":"",
                    "initialWaypoints": [                        
                        {
                            "runway":"2C | 2L | 2R | 20C | 20L | 20R | 13 | 31",
                            "waypoint":"ASSIGN HDG THEN RADAR VECTORS TO: <strong>BGDDY</strong>"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "DRURY",                    
                    "trans":"ACKEE or HAGIE or JALAR",
                    "alt":"",
                    "initialWaypoints": [                        
                        {
                            "runway":"2C | 2L | 2R | 20C | 20L | 20R | 13 | 31",
                            "waypoint":"ASSIGN HDG THEN RADAR VECTORS TO: <strong>GRCHN</strong>"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "EVVAN",                    
                    "trans":"",
                    "alt":"",
                    "initialWaypoints": [                        
                        {
                            "runway":"2C | 2L | 2R | 20C | 20L | 20R | 13 | 31",
                            "waypoint":"ASSIGN HDG THEN RADAR VECTORS TO: <strong>CHPPY</strong>"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "FLAME",                    
                    "trans":"GENDE",
                    "alt":"",
                    "initialWaypoints": [                        
                        {
                            "runway":"2C | 2L | 2R | 20C | 20L | 20R | 13 | 31",
                            "waypoint":"ASSIGN HDG THEN RADAR VECTORS TO: <strong>BGDDY</strong>"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "GDOGG",                    
                    "trans":"FAPER",
                    "alt":"",
                    "initialWaypoints": [                        
                        {
                            "runway":"2C | 2L | 2R | 20C | 20L | 20R | 13 | 31",
                            "waypoint":"ASSIGN HDG THEN RADAR VECTORS TO: <strong>KNNGG</strong>"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "HGGRD",                    
                    "trans":"TINGS",
                    "alt":"",
                    "initialWaypoints": [                        
                        {
                            "runway":"2C | 2L | 2R | 20C | 20L | 20R | 13 | 31",
                            "waypoint":"ASSIGN HDG THEN RADAR VECTORS TO: <strong>MERRL</strong>"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "KRSTA",                    
                    "trans":"OLSIE",
                    "alt":"",
                    "initialWaypoints": [                        
                        {
                            "runway":"2C | 2L | 2R | 20C | 20L | 20R | 13 | 31",
                            "waypoint":"ASSIGN HDG THEN RADAR VECTORS TO: <strong>CERAH</strong>"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "PARDN",                    
                    "trans":"HODJS or JJEFF or NAKIY",
                    "alt":"",
                    "initialWaypoints": [                        
                        {
                            "runway":"2C | 2L | 2R | 20C | 20L | 20R | 13 | 31",
                            "waypoint":"ASSIGN HDG THEN RADAR VECTORS TO: <strong>KELLO</strong>"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "TAZMO",                    
                    "trans":"BURME",
                    "alt":"",
                    "initialWaypoints": [                        
                        {
                            "runway":"2C | 2L | 2R | 20C | 20L | 20R | 13 | 31",
                            "waypoint":"ASSIGN HDG THEN RADAR VECTORS TO: <strong>SAAMY</strong>"
                        }
                    ]
                },
                {
                    "type": "RNAV",
                    "dp": "TIPPN",
                    "trans":"BRXTN",
                    "alt":"",
                    "initialWaypoints": [                        
                        {
                            "runway":"2C | 2L | 2R | 20C | 20L | 20R | 13 | 31",
                            "waypoint":"ASSIGN HDG THEN RADAR VECTORS TO: <strong>RORRY</strong>"
                        }
                    ]
                }
            ]
    }
]`);
