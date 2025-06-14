
// Exemplos de retorno:

// ORSDirections.calculate
const exemplo1 = {
    "bbox": [
        -43.9766,
        -19.895741,
        -43.954155,
        -19.868149
    ],
    "routes": [
        {
            "summary": {
                "distance": 4738.1,
                "duration": 3411.4
            },
            "segments": [
                {
                    "distance": 4738.1,
                    "duration": 3411.4,
                    "steps": [
                        {
                            "distance": 90.6,
                            "duration": 65.2,
                            "type": 11,
                            "instruction": "Siga para nordoeste em direção a Rua do Pintagol",
                            "name": "Rua do Pintagol",
                            "way_points": [
                                0,
                                1
                            ]
                        },
                        {
                            "distance": 356.5,
                            "duration": 256.7,
                            "type": 13,
                            "instruction": "Vire à direita em direção a Rua Pássaro Preto",
                            "name": "Rua Pássaro Preto",
                            "way_points": [
                                1,
                                4
                            ]
                        },
                        {
                            "distance": 44.9,
                            "duration": 32.4,
                            "type": 5,
                            "instruction": "Vire ligeiramente à direita em direção a Rua Pássaro Preto",
                            "name": "Rua Pássaro Preto",
                            "way_points": [
                                4,
                                6
                            ]
                        },
                        {
                            "distance": 20.3,
                            "duration": 14.6,
                            "type": 0,
                            "instruction": "Vire à esquerda em direção a Rua Itaguaí",
                            "name": "Rua Itaguaí",
                            "way_points": [
                                6,
                                7
                            ]
                        },
                        {
                            "distance": 358.8,
                            "duration": 258.3,
                            "type": 1,
                            "instruction": "Vire à direita em direção a Rua Antônio José de Carvalho",
                            "name": "Rua Antônio José de Carvalho",
                            "way_points": [
                                7,
                                14
                            ]
                        },
                        {
                            "distance": 78.7,
                            "duration": 56.6,
                            "type": 0,
                            "instruction": "Vire à esquerda em direção a Avenida Del Rey",
                            "name": "Avenida Del Rey",
                            "way_points": [
                                14,
                                17
                            ]
                        },
                        {
                            "distance": 12.6,
                            "duration": 9,
                            "type": 1,
                            "instruction": "Vire à direita",
                            "name": "-",
                            "way_points": [
                                17,
                                18
                            ]
                        },
                        {
                            "distance": 75.6,
                            "duration": 54.4,
                            "type": 0,
                            "instruction": "Vire à esquerda em direção a Avenida Del Rey",
                            "name": "Avenida Del Rey",
                            "way_points": [
                                18,
                                21
                            ]
                        },
                        {
                            "distance": 47.1,
                            "duration": 33.9,
                            "type": 6,
                            "instruction": "Continuar em frente",
                            "name": "-",
                            "way_points": [
                                21,
                                23
                            ]
                        },
                        {
                            "distance": 19.9,
                            "duration": 14.3,
                            "type": 0,
                            "instruction": "Vire à esquerda",
                            "name": "-",
                            "way_points": [
                                23,
                                24
                            ]
                        },
                        {
                            "distance": 564.5,
                            "duration": 406.5,
                            "type": 0,
                            "instruction": "Vire à esquerda em direção a Avenida Presidente Carlos Luz",
                            "name": "Avenida Presidente Carlos Luz",
                            "way_points": [
                                24,
                                35
                            ]
                        },
                        {
                            "distance": 10.6,
                            "duration": 7.7,
                            "type": 1,
                            "instruction": "Vire à direita",
                            "name": "-",
                            "way_points": [
                                35,
                                37
                            ]
                        },
                        {
                            "distance": 1034.5,
                            "duration": 744.8,
                            "type": 0,
                            "instruction": "Vire à esquerda em direção a Avenida Presidente Carlos Luz",
                            "name": "Avenida Presidente Carlos Luz",
                            "way_points": [
                                37,
                                50
                            ]
                        },
                        {
                            "distance": 204.3,
                            "duration": 147.1,
                            "type": 13,
                            "instruction": "Vire à direita em direção a Rua Professor Moacir Gomes de Freitas",
                            "name": "Rua Professor Moacir Gomes de Freitas",
                            "way_points": [
                                50,
                                55
                            ]
                        },
                        {
                            "distance": 20.8,
                            "duration": 15,
                            "type": 2,
                            "instruction": "Vire bastante à esquerda",
                            "name": "-",
                            "way_points": [
                                55,
                                59
                            ]
                        },
                        {
                            "distance": 256.2,
                            "duration": 184.5,
                            "type": 1,
                            "instruction": "Vire à direita",
                            "name": "-",
                            "way_points": [
                                59,
                                62
                            ]
                        },
                        {
                            "distance": 720.3,
                            "duration": 518.6,
                            "type": 13,
                            "instruction": "Vire à direita",
                            "name": "-",
                            "way_points": [
                                62,
                                76
                            ]
                        },
                        {
                            "distance": 10.4,
                            "duration": 7.5,
                            "type": 1,
                            "instruction": "Vire à direita",
                            "name": "-",
                            "way_points": [
                                76,
                                77
                            ]
                        },
                        {
                            "distance": 129.2,
                            "duration": 93,
                            "type": 0,
                            "instruction": "Vire à esquerda em direção a Rua Professor Moacir Gomes de Freitas",
                            "name": "Rua Professor Moacir Gomes de Freitas",
                            "way_points": [
                                77,
                                79
                            ]
                        },
                        {
                            "distance": 423.7,
                            "duration": 305,
                            "type": 5,
                            "instruction": "Vire ligeiramente à direita em direção a Rua Professor Giorgio Schreiber",
                            "name": "Rua Professor Giorgio Schreiber",
                            "way_points": [
                                79,
                                89
                            ]
                        },
                        {
                            "distance": 29.5,
                            "duration": 21.2,
                            "type": 0,
                            "instruction": "Vire à esquerda",
                            "name": "-",
                            "way_points": [
                                89,
                                90
                            ]
                        },
                        {
                            "distance": 229.1,
                            "duration": 165,
                            "type": 1,
                            "instruction": "Vire à direita",
                            "name": "-",
                            "way_points": [
                                90,
                                97
                            ]
                        },
                        {
                            "distance": 0,
                            "duration": 0,
                            "type": 10,
                            "instruction": "Chegar ao seu destino, em frente",
                            "name": "-",
                            "way_points": [
                                97,
                                97
                            ]
                        }
                    ]
                }
            ],
            "bbox": [
                -43.9766,
                -19.89555,
                -43.963733,
                -19.868328
            ],
            "geometry": "dzlxBdjkkGeC~A}@CwCMiLc@YYe@Y[XWm@m@aAuDmF}AwBIQGa@@a@QGgAw@WULSs@k@KOUo@Ki@Gm@c@C{A|As@r@gC~B[XwCfCq@p@k@t@a@n@]z@Y`AWjAKCE@ENy@tDw@hDk@hAo@bAiAz@i@XcAZgPlCwC`@wEx@m@NuB`@c@AOEk@k@uByCk@u@CPCBK@A@OK_AcAoIoBWGKGw@{@yAeBo@y@iAuBCi@JuC?i@Q]s@}@gAsAcCyC}BiDLK_BsBm@mAD_@@q@LgDPqFBW@SFgBOg@UWs@eAi@b@}@wAi@?OUa@Eo@l@Gd@bAtA",
            "way_points": [
                0,
                97
            ]
        },
        {
            "summary": {
                "distance": 5606.1,
                "duration": 4036.4
            },
            "segments": [
                {
                    "distance": 5606.1,
                    "duration": 4036.4,
                    "steps": [
                        {
                            "distance": 25.7,
                            "duration": 18.5,
                            "type": 11,
                            "instruction": "Siga para sudeste em direção a Rua do Pintagol",
                            "name": "Rua do Pintagol",
                            "way_points": [
                                0,
                                1
                            ]
                        },
                        {
                            "distance": 103.8,
                            "duration": 74.8,
                            "type": 2,
                            "instruction": "Vire bastante à esquerda em direção a Rua Beija Flor Dourado",
                            "name": "Rua Beija Flor Dourado",
                            "way_points": [
                                1,
                                2
                            ]
                        },
                        {
                            "distance": 72.8,
                            "duration": 52.4,
                            "type": 1,
                            "instruction": "Vire à direita em direção a Rua da Tesourinha",
                            "name": "Rua da Tesourinha",
                            "way_points": [
                                2,
                                3
                            ]
                        },
                        {
                            "distance": 47.9,
                            "duration": 34.5,
                            "type": 0,
                            "instruction": "Vire à esquerda em direção a Rua Itaguaí",
                            "name": "Rua Itaguaí",
                            "way_points": [
                                3,
                                4
                            ]
                        },
                        {
                            "distance": 96.2,
                            "duration": 69.3,
                            "type": 3,
                            "instruction": "Vire bastante à direita em direção a Rua Olau Ferreira",
                            "name": "Rua Olau Ferreira",
                            "way_points": [
                                4,
                                5
                            ]
                        },
                        {
                            "distance": 73.1,
                            "duration": 52.6,
                            "type": 2,
                            "instruction": "Vire bastante à esquerda em direção a Rua Ortosoe",
                            "name": "Rua Ortosoe",
                            "way_points": [
                                5,
                                9
                            ]
                        },
                        {
                            "distance": 242.4,
                            "duration": 174.5,
                            "type": 0,
                            "instruction": "Vire à esquerda em direção a Rua Itarana",
                            "name": "Rua Itarana",
                            "way_points": [
                                9,
                                11
                            ]
                        },
                        {
                            "distance": 93.4,
                            "duration": 67.2,
                            "type": 6,
                            "instruction": "Continue em frente em direção a Rua Princesa Elizabeth",
                            "name": "Rua Princesa Elizabeth",
                            "way_points": [
                                11,
                                13
                            ]
                        },
                        {
                            "distance": 71,
                            "duration": 51.1,
                            "type": 1,
                            "instruction": "Vire à direita em direção a Travessa Geraldo Tavares",
                            "name": "Travessa Geraldo Tavares",
                            "way_points": [
                                13,
                                14
                            ]
                        },
                        {
                            "distance": 15.1,
                            "duration": 10.8,
                            "type": 1,
                            "instruction": "Vire à direita em direção a Rua Alabandina",
                            "name": "Rua Alabandina",
                            "way_points": [
                                14,
                                15
                            ]
                        },
                        {
                            "distance": 41.3,
                            "duration": 29.7,
                            "type": 2,
                            "instruction": "Vire bastante à esquerda",
                            "name": "-",
                            "way_points": [
                                15,
                                21
                            ]
                        },
                        {
                            "distance": 281.7,
                            "duration": 202.8,
                            "type": 6,
                            "instruction": "Continue em frente em direção a Avenida Del Rey",
                            "name": "Avenida Del Rey",
                            "way_points": [
                                21,
                                32
                            ]
                        },
                        {
                            "distance": 14.2,
                            "duration": 10.2,
                            "type": 1,
                            "instruction": "Vire à direita",
                            "name": "-",
                            "way_points": [
                                32,
                                33
                            ]
                        },
                        {
                            "distance": 23.3,
                            "duration": 16.8,
                            "type": 0,
                            "instruction": "Vire à esquerda em direção a Avenida Del Rey",
                            "name": "Avenida Del Rey",
                            "way_points": [
                                33,
                                35
                            ]
                        },
                        {
                            "distance": 16.3,
                            "duration": 11.7,
                            "type": 13,
                            "instruction": "Vire à direita",
                            "name": "-",
                            "way_points": [
                                35,
                                36
                            ]
                        },
                        {
                            "distance": 65.6,
                            "duration": 47.2,
                            "type": 0,
                            "instruction": "Vire à esquerda",
                            "name": "-",
                            "way_points": [
                                36,
                                38
                            ]
                        },
                        {
                            "distance": 19.2,
                            "duration": 13.8,
                            "type": 1,
                            "instruction": "Vire à direita em direção a Avenida Presidente Carlos Luz",
                            "name": "Avenida Presidente Carlos Luz",
                            "way_points": [
                                38,
                                39
                            ]
                        },
                        {
                            "distance": 64.2,
                            "duration": 46.2,
                            "type": 1,
                            "instruction": "Vire à direita em direção a Rua Granito",
                            "name": "Rua Granito",
                            "way_points": [
                                39,
                                40
                            ]
                        },
                        {
                            "distance": 145,
                            "duration": 104.4,
                            "type": 1,
                            "instruction": "Vire à direita em direção a Rua Coronel Ascendino Costa",
                            "name": "Rua Coronel Ascendino Costa",
                            "way_points": [
                                40,
                                44
                            ]
                        },
                        {
                            "distance": 17.1,
                            "duration": 12.3,
                            "type": 1,
                            "instruction": "Vire à direita em direção a Rua Sumare",
                            "name": "Rua Sumare",
                            "way_points": [
                                44,
                                45
                            ]
                        },
                        {
                            "distance": 449.2,
                            "duration": 323.4,
                            "type": 0,
                            "instruction": "Vire à esquerda em direção a Rua Reis de Abreu",
                            "name": "Rua Reis de Abreu",
                            "way_points": [
                                45,
                                49
                            ]
                        },
                        {
                            "distance": 107.9,
                            "duration": 77.7,
                            "type": 0,
                            "instruction": "Vire à esquerda em direção a Rua Santa Josefina",
                            "name": "Rua Santa Josefina",
                            "way_points": [
                                49,
                                50
                            ]
                        },
                        {
                            "distance": 151.3,
                            "duration": 108.9,
                            "type": 1,
                            "instruction": "Vire à direita em direção a Rua Otaviano Fabri",
                            "name": "Rua Otaviano Fabri",
                            "way_points": [
                                50,
                                51
                            ]
                        },
                        {
                            "distance": 26.7,
                            "duration": 19.2,
                            "type": 1,
                            "instruction": "Vire à direita em direção a Rua Açores",
                            "name": "Rua Açores",
                            "way_points": [
                                51,
                                53
                            ]
                        },
                        {
                            "distance": 257.7,
                            "duration": 185.5,
                            "type": 2,
                            "instruction": "Vire bastante à esquerda em direção a Rua Rodrigues do Prado",
                            "name": "Rua Rodrigues do Prado",
                            "way_points": [
                                53,
                                62
                            ]
                        },
                        {
                            "distance": 204.1,
                            "duration": 146.9,
                            "type": 0,
                            "instruction": "Vire à esquerda em direção a Rua Rodrigues do Prado",
                            "name": "Rua Rodrigues do Prado",
                            "way_points": [
                                62,
                                66
                            ]
                        },
                        {
                            "distance": 14.7,
                            "duration": 10.6,
                            "type": 5,
                            "instruction": "Vire ligeiramente à direita em direção a Anel Rodoviário Celso Mello de Azevedo",
                            "name": "Anel Rodoviário Celso Mello de Azevedo",
                            "way_points": [
                                66,
                                67
                            ]
                        },
                        {
                            "distance": 12.9,
                            "duration": 9.3,
                            "type": 1,
                            "instruction": "Vire à direita em direção a Avenida Henrique Diniz",
                            "name": "Avenida Henrique Diniz",
                            "way_points": [
                                67,
                                68
                            ]
                        },
                        {
                            "distance": 194.6,
                            "duration": 140.1,
                            "type": 0,
                            "instruction": "Vire à esquerda",
                            "name": "-",
                            "way_points": [
                                68,
                                84
                            ]
                        },
                        {
                            "distance": 670.8,
                            "duration": 482.9,
                            "type": 4,
                            "instruction": "Vire ligeiramente à esquerda em direção a Rua Viana do Castelo",
                            "name": "Rua Viana do Castelo",
                            "way_points": [
                                84,
                                91
                            ]
                        },
                        {
                            "distance": 467.1,
                            "duration": 336.3,
                            "type": 0,
                            "instruction": "Vire à esquerda em direção a Rua Leiria",
                            "name": "Rua Leiria",
                            "way_points": [
                                91,
                                95
                            ]
                        },
                        {
                            "distance": 145,
                            "duration": 104.4,
                            "type": 1,
                            "instruction": "Vire à direita em direção a Rua Padre Leopoldo Mertens",
                            "name": "Rua Padre Leopoldo Mertens",
                            "way_points": [
                                95,
                                96
                            ]
                        },
                        {
                            "distance": 373.9,
                            "duration": 269.2,
                            "type": 0,
                            "instruction": "Vire à esquerda em direção a Rua Alentejo",
                            "name": "Rua Alentejo",
                            "way_points": [
                                96,
                                102
                            ]
                        },
                        {
                            "distance": 39.1,
                            "duration": 28.1,
                            "type": 6,
                            "instruction": "Continuar em frente",
                            "name": "-",
                            "way_points": [
                                102,
                                103
                            ]
                        },
                        {
                            "distance": 9.7,
                            "duration": 7,
                            "type": 4,
                            "instruction": "Vire ligeiramente à esquerda em direção a Avenida Perimetral Sul",
                            "name": "Avenida Perimetral Sul",
                            "way_points": [
                                103,
                                104
                            ]
                        },
                        {
                            "distance": 19.3,
                            "duration": 13.9,
                            "type": 1,
                            "instruction": "Vire à direita",
                            "name": "-",
                            "way_points": [
                                104,
                                105
                            ]
                        },
                        {
                            "distance": 362.7,
                            "duration": 261.2,
                            "type": 0,
                            "instruction": "Vire à esquerda em direção a Rua Professor Edmundo Lins",
                            "name": "Rua Professor Edmundo Lins",
                            "way_points": [
                                105,
                                112
                            ]
                        },
                        {
                            "distance": 24,
                            "duration": 17.3,
                            "type": 12,
                            "instruction": "Vire à esquerda em direção a Rua Reitor Manuel Pires de Carvalho e Albuquerque",
                            "name": "Rua Reitor Manuel Pires de Carvalho e Albuquerque",
                            "way_points": [
                                112,
                                113
                            ]
                        },
                        {
                            "distance": 287.9,
                            "duration": 207.3,
                            "type": 7,
                            "instruction": "Entre na rotunda e saia na 1ª saída em direção a Rua Reitor Manuel Pires de Carvalho e Albuquerque",
                            "name": "Rua Reitor Manuel Pires de Carvalho e Albuquerque",
                            "exit_number": 1,
                            "way_points": [
                                113,
                                128
                            ]
                        },
                        {
                            "distance": 29.5,
                            "duration": 21.2,
                            "type": 1,
                            "instruction": "Vire à direita",
                            "name": "-",
                            "way_points": [
                                128,
                                129
                            ]
                        },
                        {
                            "distance": 229.1,
                            "duration": 165,
                            "type": 1,
                            "instruction": "Vire à direita",
                            "name": "-",
                            "way_points": [
                                129,
                                136
                            ]
                        },
                        {
                            "distance": 0,
                            "duration": 0,
                            "type": 10,
                            "instruction": "Chegar ao seu destino, em frente",
                            "name": "-",
                            "way_points": [
                                136,
                                136
                            ]
                        }
                    ]
                }
            ],
            "bbox": [
                -43.972347,
                -19.895741,
                -43.954155,
                -19.868149
            ],
            "geometry": "dzlxBdjkkGd@[yDQJkCuAIbCuBWMQOKOW{@qIuAuASiAC}AE@gCXAQCEEEK?OBIFENIR]La@B_@Ek@ESeAuBiAqBKIWWOGDYKC[?WQsA`A@N_@LoAyApAsBDOCGgAgAL]gEeEMK_EkD_EaEeCtCgEaELUHU]EYK]g@aA_Ba@o@q@aAO]Kc@Ci@qAm@cEuAWO[WGYJUKKKk@DIH?BJEFyBh@IFADBFHDDADG@CGYMa@qAmByDwDoEcEcB}AkBeBmBgBwAqAaDzDgC~CkCzCaCvCeEqDqCrCaAhAeDzDIRg@jAURo@v@CPa@G[XKHEDqFhEuBbBwArAKHQh@?FAFB^DPPp@DF`@h@z@dAFFZb@RZ\\f@b@l@\\f@FHi@b@}@wAi@?OUa@Eo@l@Gd@bAtA",
            "way_points": [
                0,
                136
            ]
        },
        {
            "summary": {
                "distance": 5010.8,
                "duration": 3607.7
            },
            "segments": [
                {
                    "distance": 5010.8,
                    "duration": 3607.7,
                    "steps": [
                        {
                            "distance": 90.6,
                            "duration": 65.2,
                            "type": 11,
                            "instruction": "Siga para nordoeste em direção a Rua do Pintagol",
                            "name": "Rua do Pintagol",
                            "way_points": [
                                0,
                                1
                            ]
                        },
                        {
                            "distance": 356.5,
                            "duration": 256.7,
                            "type": 13,
                            "instruction": "Vire à direita em direção a Rua Pássaro Preto",
                            "name": "Rua Pássaro Preto",
                            "way_points": [
                                1,
                                4
                            ]
                        },
                        {
                            "distance": 44.9,
                            "duration": 32.4,
                            "type": 5,
                            "instruction": "Vire ligeiramente à direita em direção a Rua Pássaro Preto",
                            "name": "Rua Pássaro Preto",
                            "way_points": [
                                4,
                                6
                            ]
                        },
                        {
                            "distance": 20.3,
                            "duration": 14.6,
                            "type": 0,
                            "instruction": "Vire à esquerda em direção a Rua Itaguaí",
                            "name": "Rua Itaguaí",
                            "way_points": [
                                6,
                                7
                            ]
                        },
                        {
                            "distance": 26.7,
                            "duration": 19.3,
                            "type": 1,
                            "instruction": "Vire à direita em direção a Rua Antônio José de Carvalho",
                            "name": "Rua Antônio José de Carvalho",
                            "way_points": [
                                7,
                                8
                            ]
                        },
                        {
                            "distance": 167.6,
                            "duration": 120.7,
                            "type": 0,
                            "instruction": "Vire à esquerda",
                            "name": "-",
                            "way_points": [
                                8,
                                16
                            ]
                        },
                        {
                            "distance": 354.2,
                            "duration": 255,
                            "type": 1,
                            "instruction": "Vire à direita em direção a Anel Rodoviário Celso Mello de Azevedo",
                            "name": "Anel Rodoviário Celso Mello de Azevedo",
                            "way_points": [
                                16,
                                20
                            ]
                        },
                        {
                            "distance": 286.7,
                            "duration": 206.4,
                            "type": 13,
                            "instruction": "Vire à direita",
                            "name": "-",
                            "way_points": [
                                20,
                                33
                            ]
                        },
                        {
                            "distance": 500.8,
                            "duration": 360.6,
                            "type": 2,
                            "instruction": "Vire bastante à esquerda em direção a Anel Rodoviário Celso Mello de Azevedo",
                            "name": "Anel Rodoviário Celso Mello de Azevedo",
                            "way_points": [
                                33,
                                40
                            ]
                        },
                        {
                            "distance": 502.8,
                            "duration": 362,
                            "type": 12,
                            "instruction": "Vire à esquerda",
                            "name": "-",
                            "way_points": [
                                40,
                                56
                            ]
                        },
                        {
                            "distance": 314,
                            "duration": 226.1,
                            "type": 5,
                            "instruction": "Vire ligeiramente à direita",
                            "name": "-",
                            "way_points": [
                                56,
                                65
                            ]
                        },
                        {
                            "distance": 738.7,
                            "duration": 531.8,
                            "type": 12,
                            "instruction": "Vire à esquerda",
                            "name": "-",
                            "way_points": [
                                65,
                                79
                            ]
                        },
                        {
                            "distance": 743.4,
                            "duration": 535.2,
                            "type": 1,
                            "instruction": "Vire à direita",
                            "name": "-",
                            "way_points": [
                                79,
                                88
                            ]
                        },
                        {
                            "distance": 7.3,
                            "duration": 5.3,
                            "type": 2,
                            "instruction": "Vire bastante à esquerda",
                            "name": "-",
                            "way_points": [
                                88,
                                89
                            ]
                        },
                        {
                            "distance": 173.9,
                            "duration": 125.2,
                            "type": 3,
                            "instruction": "Vire bastante à direita em direção a Rua Professor Moacir Gomes de Freitas",
                            "name": "Rua Professor Moacir Gomes de Freitas",
                            "way_points": [
                                89,
                                92
                            ]
                        },
                        {
                            "distance": 423.7,
                            "duration": 305,
                            "type": 5,
                            "instruction": "Vire ligeiramente à direita em direção a Rua Professor Giorgio Schreiber",
                            "name": "Rua Professor Giorgio Schreiber",
                            "way_points": [
                                92,
                                102
                            ]
                        },
                        {
                            "distance": 29.5,
                            "duration": 21.2,
                            "type": 0,
                            "instruction": "Vire à esquerda",
                            "name": "-",
                            "way_points": [
                                102,
                                103
                            ]
                        },
                        {
                            "distance": 229.1,
                            "duration": 165,
                            "type": 1,
                            "instruction": "Vire à direita",
                            "name": "-",
                            "way_points": [
                                103,
                                110
                            ]
                        },
                        {
                            "distance": 0,
                            "duration": 0,
                            "type": 10,
                            "instruction": "Chegar ao seu destino, em frente",
                            "name": "-",
                            "way_points": [
                                110,
                                110
                            ]
                        }
                    ]
                }
            ],
            "bbox": [
                -43.97456,
                -19.89555,
                -43.963733,
                -19.868328
            ],
            "geometry": "dzlxBdjkkGeC~A}@CwCMiLc@YYe@Y[XWm@_@VG?o@eAQISCKF{@hASPaAyAeDoEkC}Cm@w@?_@QQTUACSRAA^a@AAcDfDCCl@o@RRZFoAiBoAcBmCsDcCmCq@kAi@qAi@w@]IO@MBmC`Ay@b@IF_@`@IXYjASd@eAt@ELb@bCEJIf@RlCU`@aA^mAZuA^e@Xe@LiAb@mAb@UPq@TyExBaGpBoAh@WRwB`Cs@`@eAXo@`@uAfAm@Zo@TWVINcD}@[O_F}GAc@FuCEm@_@w@g@s@wGeJGJq@cA_BsBm@mAD_@@q@LgDPqFBW@SFgBOg@UWs@eAi@b@}@wAi@?OUa@Eo@l@Gd@bAtA",
            "way_points": [
                0,
                110
            ]
        }
    ],
    "metadata": {
        "attribution": "openrouteservice.org | OpenStreetMap contributors",
        "service": "routing",
        "timestamp": 1749924158839,
        "query": {
            "coordinates": [
                [
                    -43.972347,
                    -19.89555
                ],
                [
                    -43.964576,
                    -19.868668
                ]
            ],
            "profile": "foot-walking",
            "profileName": "foot-walking",
            "format": "json",
            "language": "pt",
            "alternative_routes": {
                "target_count": 3
            }
        },
        "engine": {
            "version": "9.1.2",
            "build_date": "2025-04-10T21:25:30Z",
            "graph_date": "2025-04-29T17:55:38Z"
        }
    }
}

// ORSGeocode.geocode
const exemplo2 = {
    geocoding: {
        version: "0.2",
        attribution: "https://openrouteservice.org/terms-of-service/#attribution-geocode",
        query: {
            text: "Rua do Pintagol, 91",
            size: 10,
            private: false,
            lang: { name: "English", iso6391: "en", iso6393: "eng", via: "default", defaulted: true },
            querySize: 20,
            parser: "libpostal",
            parsed_text: { street: "rua do pintagol", housenumber: "91" },
        },
        engine: { name: "Pelias", author: "Mapzen", version: "1.0" },
        timestamp: 1749921740308,
    },
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            geometry: { type: "Point", coordinates: [-43.972347, -19.89555] },
            properties: {
                id: "polyline:24317652",
                gid: "openstreetmap:street:polyline:24317652",
                layer: "street",
                source: "openstreetmap",
                source_id: "polyline:24317652",
                name: "Rua do Pintagol",
                street: "Rua do Pintagol",
                confidence: 0.8,
                match_type: "fallback",
                accuracy: "centroid",
                country: "Brazil",
                country_gid: "whosonfirst:country:85633009",
                country_a: "BRA",
                macroregion: "Southeast",
                macroregion_gid: "whosonfirst:macroregion:1511777411",
                region: "Minas Gerais",
                region_gid: "whosonfirst:region:85681941",
                region_a: "MG",
                county: "Belo Horizonte",
                county_gid: "whosonfirst:county:102053515",
                localadmin: "Belo Horizonte",
                localadmin_gid: "whosonfirst:localadmin:404555403",
                locality: "Belo Horizonte",
                locality_gid: "whosonfirst:locality:101948979",
                continent: "South America",
                continent_gid: "whosonfirst:continent:102191577",
                label: "Rua do Pintagol, Belo Horizonte, MG, Brazil",
            },
            bbox: [-43.973103, -19.896574, -43.971617, -19.894544],
        },
        {
            type: "Feature",
            geometry: { type: "Point", coordinates: [-49.235873, -25.316876] },
            properties: {
                id: "polyline:25073944",
                gid: "openstreetmap:street:polyline:25073944",
                layer: "street",
                source: "openstreetmap",
                source_id: "polyline:25073944",
                name: "Rua do Pintagol",
                street: "Rua do Pintagol",
                confidence: 0.8,
                match_type: "fallback",
                accuracy: "centroid",
                country: "Brazil",
                country_gid: "whosonfirst:country:85633009",
                country_a: "BRA",
                macroregion: "South",
                macroregion_gid: "whosonfirst:macroregion:1511777409",
                region: "Parana",
                region_gid: "whosonfirst:region:85681983",
                region_a: "PR",
                county: "Colombo",
                county_gid: "whosonfirst:county:102057583",
                localadmin: "Colombo",
                localadmin_gid: "whosonfirst:localadmin:404561065",
                locality: "Colombo",
                locality_gid: "whosonfirst:locality:101964197",
                continent: "South America",
                continent_gid: "whosonfirst:continent:102191577",
                label: "Rua do Pintagol, Colombo, PR, Brazil",
            },
            bbox: [-49.236186, -25.317764, -49.235562, -25.315989],
        },
    ],
    bbox: [-49.236186, -25.317764, -43.971617, -19.894544],
}
