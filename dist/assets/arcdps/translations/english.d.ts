declare enum m_translate {
    LANG_CORE = 1,
    LANG_COMMON_PROF = 100,
    LANG_COMMON_PROF_GUARDIAN = 101,
    LANG_COMMON_PROF_DRAGONHUNTER = 102,
    LANG_COMMON_PROF_WARRIOR = 103,
    LANG_COMMON_PROF_BERSERKER = 104,
    LANG_COMMON_PROF_ENGINEER = 105,
    LANG_COMMON_PROF_SCRAPPER = 106,
    LANG_COMMON_PROF_RANGER = 107,
    LANG_COMMON_PROF_DRUID = 108,
    LANG_COMMON_PROF_THIEF = 109,
    LANG_COMMON_PROF_DAREDEVIL = 110,
    LANG_COMMON_PROF_ELEMENTALIST = 111,
    LANG_COMMON_PROF_TEMPEST = 112,
    LANG_COMMON_PROF_MESMER = 113,
    LANG_COMMON_PROF_CHRONOMANCER = 114,
    LANG_COMMON_PROF_NECROMANCER = 115,
    LANG_COMMON_PROF_REAPER = 116,
    LANG_COMMON_PROF_RECKONER = 117,
    LANG_COMMON_PROF_HERALD = 118,
    LANG_COMMON_PROF_FIREBRAND = 119,
    LANG_COMMON_PROF_SPELLBREAKER = 120,
    LANG_COMMON_PROF_HOLOSMITH = 121,
    LANG_COMMON_PROF_SOULBEAST = 122,
    LANG_COMMON_PROF_DEADEYE = 123,
    LANG_COMMON_PROF_WEAVER = 124,
    LANG_COMMON_PROF_MIRAGE = 125,
    LANG_COMMON_PROF_SCOURGE = 126,
    LANG_COMMON_PROF_RENEGADE = 127,
    LANG_COMMON_SKILLS_TOTAL = 130,
    LANG_COMMON_SKILLS_H = 131,
    LANG_COMMON_SKILLS_F = 132,
    LANG_COMMON_SKILLS_ACTIVATIONS = 133,
    LANG_COMMON_SKILLS_CANCELS = 134,
    LANG_COMMON_SKILLS_WASTED = 135,
    LANG_COMMON_SKILLS_HITSCOMPRESS = 136,
    LANG_COMMON_SKILLS_HITSTOTAL = 137,
    LANG_COMMON_SKILLS_NINETY = 138,
    LANG_COMMON_SKILLS_FIFTY = 139,
    LANG_COMMON_SKILLS_MOVING = 140,
    LANG_COMMON_SKILLS_FLANKING = 141,
    LANG_COMMON_SKILLS_CRITS = 142,
    LANG_COMMON_SKILLS_VALUE = 143,
    LANG_COMMON_SKILLS_MIN = 144,
    LANG_COMMON_SKILLS_AVG = 145,
    LANG_COMMON_SKILLS_MAX = 146,
    LANG_COMMON_SKILLS_APXDMG = 147,
    LANG_COMMON_SKILLS_OVERSTACK = 148,
    LANG_COMMON_SKILLS_NOSKILLS = 149,
    LANG_COMMON_SKILLS_REMOVED = 150,
    LANG_COMMON_SKILLS_RESISTED = 151,
    LANG_COMMON_SKILLS_GLANCE = 152,
    LANG_COMMON_SKILLS_MISS = 153,
    LANG_COMMON_SKILLS_NOTARGETS = 154,
    LANG_COMMON_ATT_HEADER = 155,
    LANG_COMMON_ATT_HOSTILE = 156,
    LANG_COMMON_ATT_FRIENDLY = 157,
    LANG_COMMON_DATATYPE_HEADER = 160,
    LANG_COMMON_DATATYPE_COMBAT = 161,
    LANG_COMMON_DATATYPE_ACTIVE = 162,
    LANG_COMMON_DIRECTION_HEADER = 165,
    LANG_COMMON_DIRECTION_OUTGOING = 166,
    LANG_COMMON_DIRECTION_INCOMING = 167,
    LANG_COMMON_DATASTYLE_HEADER = 170,
    LANG_COMMON_DATASTYLE_PERSECOND = 171,
    LANG_COMMON_DATASTYLE_TOTAL = 172,
    LANG_COMMON_DATASTYLE_PERCENT = 173,
    LANG_PAN_PERSONALDPS_HEADER = 200,
    LANG_PAN_PERSONALDPS_OUT = 201,
    LANG_PAN_PERSONALDPS_IN = 202,
    LANG_PAN_PERSONALDPS_CBT = 203,
    LANG_PAN_PERSONALDPS_ACT = 204,
    LANG_PAN_PERSONALDPS_DAMAGE = 205,
    LANG_PAN_PERSONALDPS_PHYS = 206,
    LANG_PAN_PERSONALDPS_BUFF = 207,
    LANG_PAN_PERSONALDPS_HEALING = 208,
    LANG_PAN_PERSONALDPS_CRIT = 209,
    LANG_PAN_PERSONALDPS_NINETY = 210,
    LANG_PAN_PERSONALDPS_FIFTY = 211,
    LANG_PAN_PERSONALDPS_EVADE = 212,
    LANG_PAN_PERSONALDPS_BLOCK = 213,
    LANG_PAN_PERSONALDPS_ABSORB = 214,
    LANG_PAN_PERSONALDPS_INTERRUPT = 215,
    LANG_PAN_PERSONALDPS_CURRENT = 216,
    LANG_PAN_PERSONALDPS_HIST = 217,
    LANG_PAN_PERSONALDPS_COMBAT = 218,
    LANG_PAN_PERSONALDPS_PS = 219,
    LANG_PAN_PERSONALDPS_DMG = 220,
    LANG_PAN_PERSONALDPS_PERSONAL = 221,
    LANG_PAN_PERSONALDPS_INTERVAL = 222,
    LANG_PAN_PERSONALDPS_MILLISECONDS = 223,
    LANG_PAN_PERSONALDPS_HISTLEFT = 224,
    LANG_PAN_PERSONALDPS_HISTRIGHT = 225,
    LANG_PAN_PERSONALDPS_SHIELDS = 226,
    LANG_PAN_PERSONALSKILLS_HEADER = 240,
    LANG_PAN_PERSONALSKILLS_OUT = 241,
    LANG_PAN_PERSONALSKILLS_IN = 242,
    LANG_PAN_PERSONALSKILLS_ALL = 243,
    LANG_PAN_PERSONALSKILLS_BUFFS = 244,
    LANG_PAN_PERSONALSKILLS_PHYS = 245,
    LANG_PAN_PERSONALSKILLS_SKREMOVE = 246,
    LANG_PAN_PERSONALSKILLS_CURRENT = 247,
    LANG_PAN_PERSONALSKILLS_HIST = 248,
    LANG_PAN_PERSONALSKILLS_COMBAT = 249,
    LANG_PAN_PERSONALSKILLS_PERSONAL = 250,
    LANG_PAN_PERSONALSKILLS_INTERVAL = 251,
    LANG_PAN_PERSONALSKILLS_MILLISECONDS = 252,
    LANG_PAN_PERSONALSKILLS_HEADERSHORT = 253,
    LANG_PAN_TARGET_HEADER = 270,
    LANG_PAN_TARGET_LOGAUTO = 271,
    LANG_PAN_TARGET_LOGMANUAL = 272,
    LANG_PAN_TARGET_LOGNONE = 273,
    LANG_PAN_TARGET_LOGUNAVAILABLE = 274,
    LANG_PAN_TARGET_NOLOCK = 275,
    LANG_PAN_TARGET_COMBAT = 276,
    LANG_PAN_TARGET_RS = 277,
    LANG_PAN_TARGET_DPS = 278,
    LANG_PAN_TARGET_TTK = 279,
    LANG_PAN_TARGET_START = 280,
    LANG_PAN_TARGET_STOP = 281,
    LANG_PAN_HEALTHBAR_HEADER = 290,
    LANG_PAN_HEALTHBAR_HP = 291,
    LANG_PAN_CHCLI_HEADER = 300,
    LANG_PAN_CHCLI_OUT = 301,
    LANG_PAN_CHCLI_IN = 302,
    LANG_PAN_CHCLI_ADPS = 303,
    LANG_PAN_CHCLI_BUFFS = 304,
    LANG_PAN_CHCLI_PHYS = 305,
    LANG_PAN_CHCLI_CND = 306,
    LANG_PAN_CHCLI_TOTAL = 307,
    LANG_PAN_CHCLI_H = 308,
    LANG_PAN_CHCLI_F = 309,
    LANG_PAN_CHCLI_COMBAT = 310,
    LANG_PAN_CHCLI_PS = 311,
    LANG_PAN_CHCLI_DMG = 312,
    LANG_PAN_CHCLI_DISABLED = 313,
    LANG_PAN_CHCLI_SKREMOVE = 314,
    LANG_PAN_CHCLI_CURRENT = 315,
    LANG_PAN_CHCLI_HIST = 316,
    LANG_PAN_CHCLI_AGREMOVE = 317,
    LANG_PAN_CHCLI_CHCLI = 318,
    LANG_PAN_CHCLI_INTERVAL = 319,
    LANG_PAN_CHCLI_MILLISECONDS = 320,
    LANG_PAN_CHCLI_PCT = 321,
    LANG_PAN_CHCLI_NOPLAYERS = 322,
    LANG_PAN_CHCLI_HISTLEFT = 323,
    LANG_PAN_CHCLI_HISTRIGHT = 324,
    LANG_PAN_SUMMARY_HEADER = 340,
    LANG_PAN_SUMMARY_CBTTIME = 341,
    LANG_PAN_SUMMARY_ADPSOUT = 342,
    LANG_PAN_SUMMARY_TGADPSOUT = 343,
    LANG_PAN_SUMMARY_ADPSIN = 344,
    LANG_PAN_SUMMARY_TGADPSIN = 345,
    LANG_PAN_SUMMARY_CRIT = 346,
    LANG_PAN_SUMMARY_NINETY = 347,
    LANG_PAN_SUMMARY_FIFTY = 348,
    LANG_PAN_SUMMARY_MOVING = 349,
    LANG_PAN_SUMMARY_FLANK = 350,
    LANG_PAN_SUMMARY_CANCELTIME = 351,
    LANG_PAN_SUMMARY_RESCOUNT = 352,
    LANG_PAN_SUMMARY_RESTIME = 353,
    LANG_PAN_SUMMARY_DOWNCOUNT = 354,
    LANG_PAN_SUMMARY_CLEANSEDOUT = 355,
    LANG_PAN_SUMMARY_STRIPPEDOUT = 356,
    LANG_PAN_SUMMARY_GLANCE = 357,
    LANG_PAN_SUMMARY_EVADES = 358,
    LANG_PAN_SUMMARY_INTERRUPTS = 359,
    LANG_PAN_SUMMARY_MISSED = 360,
    LANG_PAN_SUMMARY_DODGE = 361,
    LANG_PAN_SUMMARY_HIST = 362,
    LANG_PAN_SUMMARY_SQSHORT1 = 363,
    LANG_PAN_SUMMARY_SQSHORT2 = 364,
    LANG_PAN_SUMMARY_CLEANSEDIN = 365,
    LANG_PAN_SUMMARY_STRIPPEDIN = 366,
    LANG_PAN_SUMMARY_DOWNTIME = 367,
    LANG_PAN_SUMMARY_CANCELCOUNT = 368,
    LANG_PAN_SUMMARY_SHIELDPCT = 369,
    LANG_PAN_SUMMARY_SHIELDEFF = 370,
    LANG_PAN_SUMMARY_BLOCKS = 371,
    LANG_PAN_SUMMARY_ABSORBS = 372,
    LANG_PAN_SUMMARY_CLEANSEDSELF = 373,
    LANG_PAN_SUMMARY_DURATION = 374,
    LANG_PAN_SUMMARY_INTENSITY = 375,
    LANG_PAN_SUMMARY_PHYS = 376,
    LANG_PAN_SUMMARY_COND = 377,
    LANG_PAN_SUMMARY_DPSUPTIME = 378,
    LANG_PAN_SUMMARY_PROT = 379,
    LANG_PAN_LOGGER_HEADER = 390,
    LANG_PAN_LOGGER_CBT = 391,
    LANG_PAN_LOGGER_ENG = 392,
    LANG_PAN_LOGGER_GME = 393,
    LANG_PAN_LOGGER_BOT = 394,
    LANG_PAN_LOGGER_TOP = 395,
    LANG_PAN_LOGGER_AUTO = 396,
    LANG_PAN_LOGGER_SCROLL = 397,
    LANG_PAN_LOGGER_FILTER = 398,
    LANG_PAN_LOGGER_RESQ = 399,
    LANG_PAN_LOGGER_CBTQ = 400,
    LANG_PAN_LOGGER_MBLK = 401,
    LANG_PAN_LOGGER_MSZ = 402,
    LANG_PAN_LOGGER_AG = 403,
    LANG_PAN_LOGGER_CH = 404,
    LANG_PAN_LOGGER_CEA = 405,
    LANG_PAN_LOGGER_GRC = 406,
    LANG_PAN_LOGGER_CBS = 407,
    LANG_PAN_LOGGER_CCX = 408,
    LANG_PAN_LOGGER_TGC = 409,
    LANG_PAN_LOGGER_SCR = 410,
    LANG_PAN_LOGGER_RTH = 411,
    LANG_PAN_LOGGER_CCS = 412,
    LANG_PAN_LOGGER_BCX = 413,
    LANG_PAN_LOGGER_GPT = 414,
    LANG_PAN_LOGGER_RND = 415,
    LANG_PAN_LOGGER_REF = 416,
    LANG_PAN_LOGGER_LOGGER = 417,
    LANG_PAN_LOGGER_CHANNEL = 418,
    LANG_PAN_LOGGER_SIM = 419,
    LANG_PAN_LOGGER_MCI = 420,
    LANG_PAN_LOGGER_MCO = 421,
    LANG_PAN_COMPASS_HEADER = 440,
    LANG_PAN_COMPASS_N = 441,
    LANG_PAN_COMPASS_E = 442,
    LANG_PAN_COMPASS_S = 443,
    LANG_PAN_COMPASS_W = 444,
    LANG_PAN_COMPASS_BEARING = 445,
    LANG_PAN_METRICS_HEADER = 450,
    LANG_PAN_METRICS_FPS = 451,
    LANG_PAN_METRICS_PING = 452,
    LANG_PAN_METRICS_MAPTYPE = 453,
    LANG_PAN_METRICS_MAPID = 454,
    LANG_PAN_METRICS_MAPLV = 455,
    LANG_PAN_METRICS_BUILDGW = 456,
    LANG_PAN_METRICS_BUILDARC = 457,
    LANG_PAN_METRICS_TICK = 458,
    LANG_PAN_GATHER_HEADER = 460,
    LANG_PAN_GATHER_PICKH = 461,
    LANG_PAN_GATHER_AXEH = 462,
    LANG_PAN_GATHER_SICKLEH = 463,
    LANG_PAN_GATHER_PICKED = 464,
    LANG_PAN_GATHER_AXED = 465,
    LANG_PAN_GATHER_SICKLED = 466,
    LANG_PAN_GATHER_TOOLS = 467,
    LANG_PAN_GATHER_PICKREMAIN = 468,
    LANG_PAN_GATHER_AXEREMAIN = 469,
    LANG_PAN_GATHER_SICKLEREMAIN = 470,
    LANG_PAN_GATHER_TIME = 471,
    LANG_PAN_OPTIONS_HEADER = 490,
    LANG_PAN_OPTIONS_PANELS = 491,
    LANG_PAN_OPTIONS_SUMMARIES = 492,
    LANG_PAN_OPTIONS_BASIC = 493,
    LANG_PAN_OPTIONS_Y = 494,
    LANG_PAN_OPTIONS_N = 495,
    LANG_PAN_OPTIONS_SM_LINK = 496,
    LANG_PAN_OPTIONS_SM_AUTOOPEN = 497,
    LANG_PAN_OPTIONS_SM_ADPSOUT = 498,
    LANG_PAN_OPTIONS_SM_ADPSIN = 499,
    LANG_PAN_OPTIONS_SM_BUFFS = 500,
    LANG_PAN_OPTIONS_SM_RATES = 501,
    LANG_PAN_OPTIONS_SM_AGSTATES = 502,
    LANG_PAN_OPTIONS_SM_BUFFEVENTS = 503,
    LANG_PAN_OPTIONS_SM_RESULTS = 504,
    LANG_PAN_OPTIONS_BS_LOCKTARGET = 505,
    LANG_PAN_OPTIONS_BS_SAVELOGS = 506,
    LANG_PAN_OPTIONS_BS_NPCINPATH = 507,
    LANG_PAN_OPTIONS_BS_COMPRESS = 508,
    LANG_PAN_OPTIONS_BS_PANSNAP = 509,
    LANG_PAN_OPTIONS_BS_ALWAYSREQMOD = 510,
    LANG_PAN_OPTIONS_BS_COMBATDETAIL = 511,
    LANG_PAN_OPTIONS_BS_VERBOSITY = 512,
    LANG_PAN_OPTIONS_RESTRICTED = 513,
    LANG_PAN_OPTIONS_RS_HBARS = 514,
    LANG_PAN_OPTIONS_RS_EMBEDLL = 515,
    LANG_PAN_OPTIONS_RS_FLASHWHISPER = 516,
    LANG_PAN_OPTIONS_RS_FLASHPARTY = 517,
    LANG_PAN_OPTIONS_RS_RWACCEPT = 518,
    LANG_PAN_OPTIONS_RS_CONSUMEMAX = 519,
    LANG_PAN_OPTIONS_RS_CONSUMESKIPDELAY = 520,
    LANG_PAN_OPTIONS_RS_KEYS = 521,
    LANG_PAN_OPTIONS_BS_GUILDINPATH = 522,
    LANG_PAN_OPTIONS_BS_BGBARS = 523,
    LANG_PAN_OPTIONS_BS_FWDINPUT = 524,
    LANG_PAN_OPTIONS_BS_TRANSPARENCY = 525,
    LANG_PAN_OPTIONS_BS_BGBARCOLOUR = 526,
    LANG_PAN_OPTIONS_BS_PLAYERINPATH = 527,
    LANG_PAN_OPTIONS_BS_ALTERNATEUI = 528,
    LANG_PAN_OPTIONS_BS_RECOUNTLIKE = 529,
    LANG_PAN_OPTIONS_BS_ALTUITRIM = 530,
    LANG_PAN_OPTIONS_BS_ALTUIMOVELOCK = 531,
    LANG_PAN_OPTIONS_BS_MENULOCK = 532,
    LANG_PAN_OPTIONS_BS_NOTOTALS = 533,
    LANG_PAN_OPTIONS_BS_ALTUICLICKLOCK = 534,
    LANG_PAN_OPTIONS_RS_EMBEDEXTRA = 535,
    LANG_PAN_OPTIONS_LOGGING = 536,
    LANG_PAN_OPTIONS_SM_HIDEZEROBUFFS = 537,
    LANG_PAN_OPTIONS_RS_HIDEOBLACH = 538,
    LANG_PAN_OPTIONS_RS_HIDEOBLQUEST = 539,
    LANG_PAN_OPTIONS_BS_NOTIMERS = 540,
    LANG_PAN_OPTIONS_BS_FASTCLOSE = 541,
    LANG_PAN_CONSUME_HEADER = 550,
    LANG_PAN_CONSUME_NONE = 551,
    LANG_PAN_WAYPOINT_HEADER = 560,
    LANG_PAN_WAYPOINT_EBG = 561,
    LANG_PAN_WAYPOINT_RBL = 562,
    LANG_PAN_WAYPOINT_BBL = 563,
    LANG_PAN_WAYPOINT_GBL = 564,
    LANG_PAN_WAYPOINT_NONE = 565,
    LANG_PAN_WAYPOINT_DISABLED = 566,
    LANG_PAN_TEMPLATES_HEADER = 570,
    LANG_PAN_TEMPLATES_LOAD = 571,
    LANG_PAN_TEMPLATES_SAVE = 572,
    LANG_PAN_TEMPLATES_SELSIMILAR = 573,
    LANG_PAN_TEMPLATES_TRAITS = 574,
    LANG_PAN_TEMPLATES_GEAR = 575,
    LANG_PAN_TEMPLATES_SKILLS = 576,
    LANG_PAN_TEMPLATES_LEGENDARY = 577,
    LANG_PAN_TEMPLATES_PVP = 578,
    LANG_PAN_TEMPLATES_UNEQUIP = 579,
    LANG_PAN_TEMPLATES_ALPHA = 580,
    LANG_PAN_TEMPLATES_COPY = 581,
    LANG_PAN_TEMPLATES_NAME = 582,
    LANG_PAN_TEMPLATES_DELETE = 583,
    LANG_PAN_TEMPLATES_OVERWRITE = 584,
    LANG_PAN_TEMPLATES_SAVED = 585,
    LANG_PAN_TEMPLATES_LOADING = 586,
    LANG_PAN_TEMPLATES_REDUCEDRATE = 587,
    LANG_PAN_TEMPLATES_DISABLED = 588,
    LANG_PAN_TEMPLATES_CANCEL = 589,
    LANG_PAN_BUFFS_HEADER = 590,
    LANG_PAN_BUFFS_WARNING = 591,
    LANG_PAN_DETAIL_HEADER = 610,
    LANG_PAN_DETAIL_MIN = 611,
    LANG_PAN_DETAIL_MAX = 612,
    LANG_PAN_DETAIL_ELAPSED = 613,
    LANG_COMMON_CSK_DODGE = 620,
    LANG_COMMON_CSK_SHIELD = 621,
    LANG_COMMON_SKILLS2_NOEVENTS = 630,
    LANG_COMMON_SKILLS2_SHIELD = 631,
    LANG_COMMON_SKILLS2_HITSANY = 632,
    LANG_COMMON_SKILLS2_DMGPHYS = 633,
    LANG_COMMON_SKILLS2_DMGBUFF = 634,
    LANG_COMMON_SKILLS2_CHANNELED = 635,
    LANG_COMMON_SKILLS2_PROTECTED = 636,
    LANG_COMMON_AS_SUCCESS = 660,
    LANG_COMMON_AS_FAIL = 661,
    LANG_END = 662,
}
export { m_translate };
declare let lang: {};
export { lang };
export default lang;
