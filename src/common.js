const carFlags = {
  'StreetCar': [
    'streetLandingPage',
    'streetBodywork',
    'fendersUnmodified',
    'tires200Treadwear',
    'wheelsStockWidth',
    'wheelOffsetPlusMinus7Inches',
    'wheelDiameterPlusMinus1Inch',
    'stockNumberOfWheelBoltsOrStuds',
    'shocksAtMost2Way',
    'suspensionGeometryAltered',
    'hasStandardBrakeLinesUnless1992OrOlder',
    'hasSingleAntiRollBar',
    'hasStockSprings',
    'hasStockBushings',
    'stockECUProgramming',
    'stockIntake',
    'stockExhaust',
  ],
  'StreetTouringCar': [
    'stLandingPage',
    'streetTouringBodywork',
    'stTires',
    'stWheels',
    'stShocks',
    'stBrakes',
    'stSwayBar',
    'stSuspension',
    'stElectrical',
    'stEngine',
  ],
  'sscCar': [
    'sscLandingPage',
    'sscBodywork',
    'sscSuspension',
    'sscBrakes',
    'sscWheels',
    'sscTires',
    'sscElectrical',
    'sscEngineAndDrivetrain',
  ],
  'xsCar': [
    'xsLandingPage',
    'xsBodywork',
    'xsSuspension',
    'xsBrakes',
    'xsWheels',
    'xsTires',
    'xsWeight',
    'xsEngineAndDrivetrain',
  ],
  'camCar': [
    'camLandingPage',
    'camBodywork',
    'camSuspension',
    'camBrakes',
    'camWheels',
    'camTires',
    'camWeight',
    'camEngineAndDrivetrain',
  ],
  'smCar': [
    'smLandingPage',
    'smBodywork',
    'smSuspension',
    'smBrakes',
    'smWheels',
    'smTires',
    'Weight',
    'smEngineAndDrivetrain',
    'smSteering',
  ],
  'spCar': [
    'spLandingPage',
    'spBodywork',
    'spSuspension',
    'spBrakes',
    'spWheels',
    'spTires',
    'spElectrical',
    'spEngineAndDrivetrain',
  ],
  'pCar': [
    'pLandingPage',
    'pBodywork',
    'pSuspension',
    'pBrakes',
    'pWheels',
    'pTires',
    'pWeight',
    'pElectrical',
    'pEngineAndDrivetrain',
  ],
  'mCar': [
    'mLandingPage',
    'mBodywork',
    'mSuspension',
    'mBrakes',
    'mWheels',
    'mTires',
    'mWeight',
    'mEngineAndDrivetrain',
    'mSteering',
  ],
};

/*
 * this maps the friendly subclass names
 * to the html id tag names
 */
const subclassMap = {
  'ss': 'Super Street (SS)',
  'as': 'A Street (AS)',
  'bs': 'B Street (BS)',
  'cs': 'C Street (CS)',
  'ds': 'D Street (DS)',
  'es': 'E Street (ES)',
  'fs': 'F Street (FS)',
  'gs': 'G Street (GS)',
  'hs': 'H Street (HS)',
  'ssr': 'Super Street R (SSR)',
  'ssc': 'Solo Spec Coupe (SSC)',
  'stu': 'Street Touring Ultra (STU)',
  'str': 'Street Touring Roadster (STR)',
  'stx': 'Street Touring Xtreme (STX)',
  'sts': 'Street Touring Sport (STS)',
  'sth': 'Street Touring Hatchback (STH)',
  'camc': 'Classic American Muscle Contemporary (CAM C)',
  'camt': 'Classic American Muscle Traditional (CAM T)',
  'cams': 'Classic American Muscle Sports (CAM S)',
  'xsa': 'Xtreme Street A (XSA)',
  'xsb': 'Xtreme Street B (XSB)',
  'ssp': 'Super Street Prepared (SSP)',
  'asp': 'A Street Prepared (ASP)',
  'bsp': 'B Street Prepared (BSP)',
  'csp': 'C Street Prepared (CSP)',
  'dsp': 'D Street Prepared (DSP)',
  'esp': 'E Street Prepared (ESP)',
  'fsp': 'F Street Prepared (FSP)',
  'ssm': 'Super Street Modified (SSM)',
  'sm': 'Street Modified (SM)',
  'smf': 'Street Modified Front-Wheel-Drive (SMF)',
  'xp': 'X Prepared (XP)',
  'cp': 'C Prepared (CP)',
  'dp': 'D Prepared (DP)',
  'ep': 'E Prepared (EP)',
  'fp': 'F Prepared (FP)',
  'am': 'A Modified (AM)',
  'bm': 'B Modified (BM)',
  'cm': 'C Modified (CM)',
  'dm': 'D Modified (DM)',
  'em': 'E Modified (EM)',
  'fm': 'F Modified (FM)',
};

const allSoloCars = {
  'AMC': {
    'AMX': {
      'all': ['fs', 'esp', 'sm', 'cams', 'xp', 'xsa'],
    },
    'Gremlin (4-cyl)': {
      'all': ['hs', 'fsp', 'sm', 'cams', 'xp', 'xsa'],
    },
    'Gremlin (6-cyl)': {
      'all': ['hs', 'sm', 'cams', 'xp', 'xsa'],
    },
    'Javelin (V8)': {
      'all': ['fs', 'esp', 'sm', 'camt', 'xp', 'xsa'],
    },
    'Spirit (4-cyl)': {
      'all': ['hs', 'fsp', 'sm', 'camt', 'xp', 'xsa'],
    },
    'Spirit (6-cyl)': {
      'all': ['hs', 'sm', 'camt', 'xp', 'xsa'],
    },
  },
  'Acura': {
    'CL (all)': {
      'all': ['hs', 'sm', 'xp', 'xsa'],
    },
    'ILX': {
      '2012': ['hs', 'sm', 'xp', 'xsa'],
      '2013': ['hs', 'stx', 'sm', 'xp', 'xsa'],
      '2014': ['hs', 'stx', 'sm', 'xp', 'xsa'],
      '2015': ['hs', 'stx', 'sm', 'xp', 'xsa'],
      '2016': ['hs', 'stx', 'sm', 'xp', 'xsa'],
      '2017': ['hs', 'stx', 'sm', 'xp', 'xsa'],
      '2018': ['hs', 'stx', 'sm', 'xp', 'xsa'],
      '2019': ['hs', 'stx', 'sm', 'xp', 'xsa'],
      '2020': ['hs', 'stx', 'sm', 'xp', 'xsa'],
    },
    'Integra (all except Type R)': {
      '1986': ['hs', 'sts', 'fsp', 'sm', 'smf', 'ep', 'xp', 'xsa'],
      '1987': ['hs', 'sts', 'fsp', 'sm', 'smf', 'ep', 'xp', 'xsa'],
      '1988': ['hs', 'sts', 'fsp', 'sm', 'smf', 'ep', 'xp', 'xsa'],
      '1989': ['hs', 'sts', 'fsp', 'sm', 'smf', 'ep', 'xp', 'xsa'],
      '1990': ['hs', 'sts', 'dsp', 'sm', 'smf', 'ep', 'xp', 'xsa'],
      '1991': ['hs', 'sts', 'dsp', 'sm', 'smf', 'ep', 'xp', 'xsa'],
      '1992': ['hs', 'sts', 'dsp', 'sm', 'smf', 'ep', 'xp', 'xsa'],
      '1993': ['hs', 'sts', 'dsp', 'sm', 'smf', 'ep', 'xp', 'xsa'],
      '1994': ['hs', 'stx', 'dsp', 'sm', 'smf', 'ep', 'xp', 'xsa'],
      '1995': ['hs', 'stx', 'dsp', 'sm', 'smf', 'ep', 'xp', 'xsa'],
      '1996': ['hs', 'stx', 'dsp', 'sm', 'smf', 'ep', 'xp', 'xsa'],
      '1997': ['hs', 'stx', 'dsp', 'sm', 'smf', 'ep', 'xp', 'xsa'],
      '1998': ['hs', 'stx', 'dsp', 'sm', 'smf', 'ep', 'xp', 'xsa'],
      '1999': ['hs', 'stx', 'dsp', 'sm', 'smf', 'ep', 'xp', 'xsa'],
      '2000': ['hs', 'stx', 'dsp', 'sm', 'smf', 'ep', 'xp', 'xsa'],
      '2001': ['hs', 'stx', 'dsp', 'sm', 'smf', 'ep', 'xp', 'xsa'],
    },
    'Integra Type R': {
      'all': ['ds', 'stx', 'dsp', 'sm', 'smf', 'ep', 'xsa'],
    },
    'Legend': {
      'all': ['hs', 'fsp', 'sm', 'smf', 'xp', 'xsa'],
    },
    'NSX': {
      '1990': ['bs', 'asp', 'ssm', 'sm', 'fp', 'xsa'],
      '1991': ['bs', 'asp', 'ssm', 'sm', 'fp', 'xsa'],
      '1992': ['bs', 'asp', 'ssm', 'sm', 'fp', 'xsa'],
      '1993': ['bs', 'asp', 'ssm', 'sm', 'fp', 'xsa'],
      '1994': ['bs', 'asp', 'ssm', 'sm', 'fp', 'xsa'],
      '1995': ['bs', 'asp', 'ssm', 'sm', 'fp', 'xsa'],
      '1996': ['bs', 'asp', 'ssm', 'sm', 'fp', 'xsa'],
      '1997': ['bs', 'asp', 'ssm', 'sm', 'fp', 'xsa'],
      '1998': ['bs', 'asp', 'ssm', 'sm', 'fp', 'xsa'],
      '1999': ['bs', 'asp', 'ssm', 'sm', 'fp', 'xsa'],
      '2000': ['bs', 'asp', 'ssm', 'sm', 'fp', 'xsa'],
      '2001': ['bs', 'asp', 'ssm', 'sm', 'fp', 'xsa'],
      '2002': ['bs', 'asp', 'ssm', 'sm', 'fp', 'xsa'],
      '2003': ['bs', 'asp', 'ssm', 'sm', 'fp', 'xsa'],
      '2004': ['bs', 'asp', 'ssm', 'sm', 'fp', 'xsa'],
      '2005': ['bs', 'asp', 'ssm', 'sm', 'fp', 'xsa'],
      '2016': ['ss', 'ssp', 'ssm', 'xp', 'xsa'],
      '2017': ['ss', 'ssp', 'ssm', 'xp', 'xsa'],
      '2018': ['ss', 'ssp', 'ssm', 'xp', 'xsa'],
      '2019': ['ss', 'ssp', 'ssm', 'xp', 'xsa'],
      '2020': ['ss', 'ssp', 'ssm', 'xp', 'xsa'],
    },
    'NSX Alex Zanardi Signature Edition': {
      'all': ['as', 'ssm', 'xp', 'xsa'],
    },
    'RLX': {
      'all': ['gs', 'sm', 'xp', 'xsa'],
    },
    'RSX': {
      'all': ['hs', 'stx', 'dsp', 'ep', 'sm', 'smf', 'xp', 'xsa'],
    },
    'TL': {
      'all': ['hs', 'sm', 'smf', 'xp', 'xsa'],
    },
    'TLX': {
      'all': ['gs', 'sm', 'xp', 'xsa'],
    },
    'TSX': {
      'all': ['hs', 'stx', 'dsp', 'sm', 'smf', 'xp', 'xsa'],
    },
    'Vigor': {
      'all': ['hs', 'sm', 'smf', 'xp', 'xsa'],
    },
  },
  'Alfa Romeo': {
    '1300': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xsb'],
    },
    '1600': {
      'all': ['hs', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
    },
    '4C (incl. Spider)': {
      '2015': ['ss', 'ssr', 'ssm', 'xp', 'xsa'],
      '2016': ['ss', 'ssr', 'ssm', 'xp', 'xsa'],
      '2017': ['ss', 'ssr', 'ssm', 'xp', 'xsa'],
      '2018': ['ss', 'ssr', 'ssm', 'xp', 'xsa'],
      '2019': ['ss', 'ssr', 'ssm', 'xp', 'xsa'],
      '2020': ['ss', 'ssr', 'ssm', 'xp', 'xsa'],
    },
    '164 (non-S)': {
      '1991': ['hs', 'sm', 'xp', 'xsa'],
      '1992': ['hs', 'sm', 'xp', 'xsa'],
      '1993': ['hs', 'sm', 'xp', 'xsa'],
    },
    '1600 GTV': {
      'all': ['dp', 'sm', 'xp', 'xsb'],
    },
    '1750 & 1750 GTV': {
      'all': ['hs', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
    },
    '2000 (4-door sedan)': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xsa'],
    },
    '2000 GTV': {
      'all': ['es', 'fsp', 'sm', 'dp', 'xp', 'xsa'],
    },
    '2000 Spider': {
      'all': ['es', 'fsp', 'sm', 'dp', 'xp', 'xsa'],
    },
    'Alfetta GT': {
      'all': ['fsp', 'sm', 'dp', 'xp', 'xsa'],
    },
    'GT 1300 Junior & GTA Junior': {
      '1966': ['dp', 'sm', 'xp', 'xsb'],
      '1967': ['dp', 'sm', 'xp', 'xsb'],
      '1968': ['dp', 'sm', 'xp', 'xsb'],
      '1969': ['dp', 'sm', 'xp', 'xsb'],
      '1970': ['dp', 'sm', 'xp', 'xsb'],
      '1971': ['dp', 'sm', 'xp', 'xsb'],
      '1972': ['dp', 'sm', 'xp', 'xsb'],
      '1973': ['dp', 'sm', 'xp', 'xsb'],
      '1974': ['dp', 'sm', 'xp', 'xsb'],
      '1975': ['dp', 'sm', 'xp', 'xsb'],
      '1976': ['dp', 'sm', 'xp', 'xsb'],
      '1977': ['dp', 'sm', 'xp', 'xsb'],
    },
    'GTA (bore & stroke: 78mm x 67.5mm)': {
      'all': ['dp', 'sm', 'xp', 'xsb'],
    },
    'GTV V6': {
      'all': ['hs', 'dsp', 'sm', 'fp', 'xp', 'xsa'],
    },
    'Giuletta Sprint & Spider (1570 cc)': {
      'all': ['dp', 'sm', 'xp', 'xsa'],
    },
    'Giulia 1300 & 1300 Ti': {
      '1964': ['dp', 'sm', 'xp', 'xsb'],
      '1965': ['dp', 'sm', 'xp', 'xsb'],
      '1966': ['dp', 'sm', 'xp', 'xsb'],
      '1967': ['dp', 'sm', 'xp', 'xsb'],
      '1968': ['dp', 'sm', 'xp', 'xsb'],
      '1969': ['dp', 'sm', 'xp', 'xsb'],
      '1970': ['dp', 'sm', 'xp', 'xsb'],
      '1971': ['dp', 'sm', 'xp', 'xsb'],
    },
    'Giulia (incl. Ti)': {
      '2016': ['ds', 'stu', 'sm', 'xp', 'xsa'],
      '2017': ['ds', 'stu', 'sm', 'xp', 'xsa'],
      '2018': ['ds', 'stu', 'sm', 'xp', 'xsa'],
      '2019': ['ds', 'stu', 'sm', 'xp', 'xsa'],
      '2020': ['ds', 'stu', 'sm', 'xp', 'xsa'],
    },
    'Giulia Quadrifoglio': {
      '2017': ['as', 'sm', 'xp', 'xsa'],
      '2018': ['as', 'sm', 'xp', 'xsa'],
      '2019': ['as', 'sm', 'xp', 'xsa'],
      '2020': ['as', 'sm', 'xp', 'xsa'],
    },
    'Junior Z': {
      'all': ['dp', 'sm', 'xp', 'xsb'],
    },
    'Milano': {
      'all': ['hs', 'dsp', 'sm', 'xp', 'xsa'],
    },
    'Sedan (Not Otherwise Classified)': {
      'all': ['hs', 'sm', 'xp', 'xsa'],
    },
    'Spider Duetto 1750 Spider Veloce (1779 cc)': {
      '1969': ['dp', 'sm', 'xp', 'xsb'],
      '1970': ['dp', 'sm', 'xp', 'xsb'],
    },
    'Sport Sedan': {
      'all': ['dp', 'sm', 'xp', 'xsa'],
    },
  },
  'Aston Martin': {
    'V8 Vantage': {
      '2005': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2006': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2007': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2008': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2009': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2010': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2011': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2012': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2013': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2014': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2015': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2016': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2017': ['bs', 'stu', 'sm', 'xp', 'xsa'],
    },
  },
  'Audi': {
    '80': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xsb'],
    },
    '90': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xsa'],
    },
    '4000': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xsa'],
    },
    '5000': {
      'all': ['hs', 'esp', 'sm', 'xp', 'xsa'],
    },
    '100 (non-S4)': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xsa'],
    },
    '200 Turbo quattro': {
      'all': ['hs', 'esp', 'sm', 'xp', 'xsa'],
    },
    '5000 Turbo': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xsa'],
    },
    'A3 (1.8T, FWD)': {
      '2015': ['gs', 'sth', 'sm', 'smf', 'xp', 'xsa'],
      '2016': ['gs', 'sth', 'sm', 'smf', 'xp', 'xsa'],
    },
    'A3 (2.0T, all)': {
      '2015': ['ds', 'sth', 'sm', 'xp', 'xsa'],
      '2016': ['ds', 'sth', 'sm', 'xp', 'xsa'],
      '2017': ['ds', 'sth', 'sm', 'xp', 'xsa'],
      '2018': ['ds', 'sth', 'sm', 'xp', 'xsa'],
      '2019': ['ds', 'sth', 'sm', 'xp', 'xsa'],
      '2020': ['ds', 'sth', 'sm', 'xp', 'xsa'],
    },
    'A3 (FWD)': {
      '2006': ['hs', 'sth', 'dsp', 'sm', 'smf', 'xp', 'xsa'],
      '2007': ['hs', 'sth', 'dsp', 'sm', 'smf', 'xp', 'xsa'],
      '2008': ['hs', 'sth', 'dsp', 'sm', 'smf', 'xp', 'xsa'],
      '2009': ['hs', 'sth', 'dsp', 'sm', 'smf', 'xp', 'xsa'],
      '2010': ['hs', 'sth', 'dsp', 'sm', 'smf', 'xp', 'xsa'],
      '2011': ['hs', 'sth', 'dsp', 'sm', 'smf', 'xp', 'xsa'],
      '2012': ['hs', 'sth', 'dsp', 'sm', 'smf', 'xp', 'xsa'],
      '2013': ['hs', 'sth', 'dsp', 'sm', 'smf', 'xp', 'xsa'],
    },
    'A3 Sportback e-tron': {
      '2017': ['gs', 'sth', 'sm', 'xp', 'xsa'],
      '2018': ['gs', 'sth', 'sm', 'xp', 'xsa'],
    },
    'A3 quattro (3.2L V6, AWD)': {
      '2006': ['ds', 'sth', 'sm', 'xp', 'xsa'],
      '2007': ['ds', 'sth', 'sm', 'xp', 'xsa'],
      '2008': ['ds', 'sth', 'sm', 'xp', 'xsa'],
      '2009': ['ds', 'sth', 'sm', 'xp', 'xsa'],
    },
    'A4': {
      '1994': ['gs', 'sth', 'sm', 'xp', 'xsa'],
      '1995': ['gs', 'sth', 'dsp', 'sm', 'xp', 'xsa'],
      '1996': ['gs', 'sth', 'dsp', 'sm', 'xp', 'xsa'],
      '1997': ['gs', 'sth', 'dsp', 'sm', 'xp', 'xsa'],
      '1998': ['gs', 'sth', 'dsp', 'sm', 'xp', 'xsa'],
      '1999': ['gs', 'sth', 'dsp', 'sm', 'xp', 'xsa'],
      '2000': ['gs', 'sth', 'dsp', 'sm', 'xp', 'xsa'],
      '2001': ['gs', 'sth', 'dsp', 'sm', 'xp', 'xsa'],
      '2002': ['gs', 'sth', 'dsp', 'sm', 'xp', 'xsa'],
      '2003': ['gs', 'sth', 'dsp', 'sm', 'xp', 'xsa'],
      '2004': ['gs', 'sth', 'dsp', 'sm', 'xp', 'xsa'],
      '2005': ['gs', 'sth', 'dsp', 'sm', 'xp', 'xsa'],
      '2006': ['gs', 'sth', 'sm', 'xp', 'xsa'],
      '2007': ['gs', 'sth', 'sm', 'xp', 'xsa'],
      '2008': ['gs', 'sth', 'asp', 'sm', 'xp', 'xsa'],
      '2009': ['gs', 'sth', 'asp', 'sm', 'xp', 'xsa'],
      '2010': ['gs', 'sth', 'asp', 'sm', 'xp', 'xsa'],
      '2011': ['gs', 'sth', 'asp', 'sm', 'xp', 'xsa'],
      '2012': ['gs', 'sth', 'asp', 'sm', 'xp', 'xsa'],
      '2013': ['gs', 'sth', 'asp', 'sm', 'xp', 'xsa'],
      '2014': ['gs', 'sth', 'asp', 'sm', 'xp', 'xsa'],
      '2015': ['gs', 'sth', 'asp', 'sm', 'xp', 'xsa'],
      '2016': ['gs', 'sth', 'asp', 'sm', 'xp', 'xsa'],
      '2017': ['gs', 'sth', 'sm', 'xp', 'xsa'],
      '2018': ['gs', 'sth', 'sm', 'xp', 'xsa'],
      '2019': ['gs', 'sth', 'sm', 'xp', 'xsa'],
      '2020': ['gs', 'sth', 'sm', 'xp', 'xsa'],
    },
    'A5': {
      '2008': ['ds', 'sm', 'xp', 'xsa'],
      '2009': ['ds', 'sm', 'xp', 'xsa'],
      '2010': ['ds', 'sm', 'xp', 'xsa'],
      '2011': ['ds', 'sm', 'xp', 'xsa'],
      '2012': ['ds', 'sm', 'xp', 'xsa'],
      '2013': ['ds', 'sm', 'xp', 'xsa'],
      '2014': ['ds', 'sm', 'xp', 'xsa'],
      '2015': ['ds', 'sm', 'xp', 'xsa'],
      '2016': ['ds', 'sm', 'xp', 'xsa'],
      '2017': ['ds', 'sm', 'xp', 'xsa'],
    },
    'A6 (V6 Not Otherwise Classified & 4-cyl)': {
      'all': ['gs', 'sm', 'xp', 'xsa'],
    },
    'A6 (V6 Supercharged)': {
      '2008': ['fs', 'sm', 'xp', 'xsa'],
      '2009': ['fs', 'sm', 'xp', 'xsa'],
      '2010': ['fs', 'sm', 'xp', 'xsa'],
      '2011': ['fs', 'sm', 'xp', 'xsa'],
      '2012': ['fs', 'sm', 'xp', 'xsa'],
      '2013': ['fs', 'sm', 'xp', 'xsa'],
      '2014': ['fs', 'sm', 'xp', 'xsa'],
      '2015': ['fs', 'sm', 'xp', 'xsa'],
      '2016': ['fs', 'sm', 'xp', 'xsa'],
      '2017': ['fs', 'sm', 'xp', 'xsa'],
    },
    'A6 (V8)': {
      '1997': ['fs', 'sm', 'xp', 'xsa'],
      '1998': ['fs', 'sm', 'xp', 'xsa'],
      '1999': ['fs', 'sm', 'xp', 'xsa'],
      '2000': ['fs', 'sm', 'xp', 'xsa'],
      '2001': ['fs', 'sm', 'xp', 'xsa'],
      '2002': ['fs', 'sm', 'xp', 'xsa'],
      '2003': ['fs', 'sm', 'xp', 'xsa'],
      '2004': ['fs', 'sm', 'xp', 'xsa'],
      '2005': ['fs', 'sm', 'xp', 'xsa'],
      '2006': ['fs', 'sm', 'xp', 'xsa'],
      '2007': ['fs', 'sm', 'xp', 'xsa'],
      '2008': ['fs', 'sm', 'xp', 'xsa'],
      '2009': ['fs', 'sm', 'xp', 'xsa'],
      '2010': ['fs', 'sm', 'xp', 'xsa'],
      '2011': ['fs', 'sm', 'xp', 'xsa'],
    },
    'A7 (all)': {
      '2010': ['fs', 'sm', 'xp', 'xsa'],
      '2011': ['fs', 'sm', 'xp', 'xsa'],
      '2012': ['fs', 'sm', 'xp', 'xsa'],
      '2013': ['fs', 'sm', 'xp', 'xsa'],
      '2014': ['fs', 'sm', 'xp', 'xsa'],
      '2015': ['fs', 'sm', 'xp', 'xsa'],
      '2016': ['fs', 'sm', 'xp', 'xsa'],
      '2017': ['fs', 'sm', 'xp', 'xsa'],
      '2018': ['fs', 'sm', 'xp', 'xsa'],
      '2019': ['fs', 'sm', 'xp', 'xsa'],
      '2020': ['fs', 'sm', 'xp', 'xsa'],
    },
    'A8 & V8 quattro (AWD)': {
      'all': ['gs', 'esp', 'sm', 'xp', 'xsa'],
    },
    'Coupe quattro (non-turbo)': {
      'all': ['hs', 'dsp', 'sm', 'xp', 'xsa'],
    },
    'Quattro (Coupe Turbo)': {
      'all': ['gs', 'bsp', 'sm', 'xp', 'xsa'],
    },
    'R8 (non-GT)': {
      '2008': ['ss', 'ssp', 'ssm', 'xp', 'xsa'],
      '2009': ['ss', 'ssp', 'ssm', 'xp', 'xsa'],
      '2010': ['ss', 'ssp', 'ssm', 'xp', 'xsa'],
      '2011': ['ss', 'ssp', 'ssm', 'xp', 'xsa'],
      '2012': ['ss', 'ssp', 'ssm', 'xp', 'xsa'],
      '2013': ['ss', 'ssp', 'ssm', 'xp', 'xsa'],
      '2014': ['ss', 'ssp', 'ssm', 'xp', 'xsa'],
      '2015': ['ss', 'ssp', 'ssm', 'xp', 'xsa'],
      '2016': ['ssp', 'ssm', 'xp', 'xsa'],
      '2017': ['ssp', 'ssm', 'xp', 'xsa'],
      '2018': ['ssp', 'ssm', 'xp', 'xsa'],
      '2019': ['ssp', 'ssm', 'xp', 'xsa'],
    },
    'R8 (non-Plus)': {
      '2016': ['ss', 'ssm', 'xp', 'xsa'],
      '2017': ['ss', 'ssm', 'xp', 'xsa'],
      '2018': ['ss', 'ssm', 'xp', 'xsa'],
      '2019': ['ss', 'ssm', 'xp', 'xsa'],
      '2020': ['ss', 'ssm', 'xp', 'xsa'],
    },
    'RS 3': {
      '2017': ['bs', 'sm', 'xp', 'xsa'],
      '2018': ['bs', 'sm', 'xp', 'xsa'],
      '2019': ['bs', 'sm', 'xp', 'xsa'],
    },
    'RS 4': {
      '2007': ['bs', 'sm', 'xp', 'xsa'],
      '2008': ['bs', 'sm', 'xp', 'xsa'],
    },
    'RS 5': {
      '2013': ['bs', 'sm', 'xp', 'xsa'],
      '2014': ['bs', 'sm', 'xp', 'xsa'],
      '2015': ['bs', 'sm', 'xp', 'xsa'],
    },
    'RS 6 (C5 Chassis)': {
      '2003': ['bs', 'sm', 'xp', 'xsa'],
      '2004': ['bs', 'sm', 'xp', 'xsa'],
    },
    'S3 (2.0T)': {
      '2015': ['ds', 'stu', 'sm', 'xp', 'xsa'],
      '2016': ['ds', 'stu', 'sm', 'xp', 'xsa'],
      '2017': ['ds', 'stu', 'sm', 'xp', 'xsa'],
      '2018': ['ds', 'stu', 'sm', 'xp', 'xsa'],
      '2019': ['ds', 'stu', 'sm', 'xp', 'xsa'],
      '2020': ['ds', 'sm', 'xp', 'xsa'],
    },
    'S4': {
      '2000': ['ds', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2001': ['ds', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2002': ['ds', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2003': ['ds', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2004': ['fs', 'stu', 'esp', 'sm', 'xp', 'xsa'],
      '2005': ['fs', 'stu', 'esp', 'sm', 'xp', 'xsa'],
      '2006': ['fs', 'stu', 'esp', 'sm', 'xp', 'xsa'],
      '2007': ['fs', 'stu', 'esp', 'sm', 'xp', 'xsa'],
      '2008': ['fs', 'stu', 'esp', 'sm', 'xp', 'xsa'],
      '2009': ['fs', 'stu', 'esp', 'sm', 'xp', 'xsa'],
      '2010': ['bs', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2011': ['bs', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2012': ['bs', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2013': ['bs', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2014': ['bs', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2015': ['bs', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2016': ['bs', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2017': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2018': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2019': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2020': ['bs', 'stu', 'sm', 'xp', 'xsa'],
    },
    'S4 (100 CS chassis)': {
      '1992': ['hs', 'stu', 'sm', 'xp', 'xsa'],
      '1993': ['hs', 'stu', 'sm', 'xp', 'xsa'],
      '1994': ['hs', 'stu', 'sm', 'xp', 'xsa'],
    },
    'S5': {
      '2008': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2009': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2010': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2011': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2012': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2013': ['bs', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2014': ['bs', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2015': ['bs', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2016': ['bs', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2017': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2018': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2019': ['bs', 'stu', 'sm', 'xp', 'xsa'],
    },
    'S6': {
      '2013': ['bs', 'sm', 'xp', 'xsa'],
      '2014': ['bs', 'sm', 'xp', 'xsa'],
      '2015': ['bs', 'sm', 'xp', 'xsa'],
      '2016': ['bs', 'sm', 'xp', 'xsa'],
      '2017': ['bs', 'sm', 'xp', 'xsa'],
      '2018': ['bs', 'sm', 'xp', 'xsa'],
    },
    'S7': {
      '2012': ['bs', 'sm', 'xp', 'xsa'],
      '2013': ['bs', 'sm', 'xp', 'xsa'],
      '2014': ['bs', 'sm', 'xp', 'xsa'],
      '2015': ['bs', 'sm', 'xp', 'xsa'],
      '2016': ['bs', 'sm', 'xp', 'xsa'],
      '2017': ['bs', 'sm', 'xp', 'xsa'],
      '2018': ['bs', 'sm', 'xp', 'xsa'],
    },
    'TT (1.8T, non-quattro/FWD)': {
      '2000': ['ds', 'sth', 'bsp', 'sm', 'smf', 'xp', 'xsa'],
      '2001': ['ds', 'sth', 'bsp', 'sm', 'smf', 'xp', 'xsa'],
      '2002': ['ds', 'sth', 'bsp', 'sm', 'smf', 'xp', 'xsa'],
      '2003': ['ds', 'sth', 'bsp', 'sm', 'smf', 'xp', 'xsa'],
      '2004': ['ds', 'sth', 'bsp', 'sm', 'smf', 'xp', 'xsa'],
      '2005': ['ds', 'sth', 'bsp', 'sm', 'smf', 'xp', 'xsa'],
      '2006': ['ds', 'sth', 'bsp', 'sm', 'smf', 'xp', 'xsa'],
    },
    'TT (2.0T, non-quattro/FWD)': {
      '2008': ['ds', 'sth', 'sm', 'smf', 'xp', 'xsa'],
      '2009': ['ds', 'sth', 'sm', 'smf', 'xp', 'xsa'],
    },
    'TT RS': {
      '2012': ['ss', 'ssr', 'ssp', 'ssm', 'xp', 'xsa'],
      '2013': ['ss', 'ssr', 'ssp', 'ssm', 'xp', 'xsa'],
      '2018': ['ss', 'asp', 'ssm', 'xsa', 'xp'],
      '2019': ['ss', 'asp', 'ssm', 'xsa', 'xp'],
      '2020': ['ss', 'ssm', 'xsa', 'xp'],
    },
    'TT quattro (AWD)': {
      '2000': ['ds', 'sth', 'bsp', 'sm', 'xp', 'xsa'],
      '2001': ['ds', 'sth', 'bsp', 'sm', 'xp', 'xsa'],
      '2002': ['ds', 'sth', 'bsp', 'sm', 'xp', 'xsa'],
      '2003': ['ds', 'sth', 'bsp', 'sm', 'xp', 'xsa'],
      '2004': ['ds', 'sth', 'bsp', 'sm', 'xp', 'xsa'],
      '2005': ['ds', 'sth', 'bsp', 'sm', 'xp', 'xsa'],
      '2006': ['ds', 'sth', 'bsp', 'sm', 'xp', 'xsa'],
      '2008': ['ds', 'sth', 'bsp', 'sm', 'xp', 'xsa'],
      '2009': ['ds', 'sth', 'bsp', 'sm', 'xp', 'xsa'],
      '2010': ['ds', 'sth', 'bsp', 'sm', 'xp', 'xsa'],
      '2011': ['ds', 'sth', 'bsp', 'sm', 'xp', 'xsa'],
      '2012': ['ds', 'sth', 'bsp', 'sm', 'xp', 'xsa'],
      '2013': ['ds', 'sth', 'bsp', 'sm', 'xp', 'xsa'],
      '2014': ['ds', 'sth', 'bsp', 'sm', 'xp', 'xsa'],
      '2015': ['ds', 'sth', 'bsp', 'sm', 'xp', 'xsa'],
      '2016': ['ds', 'sth', 'bsp', 'sm', 'xp', 'xsa'],
      '2017': ['ds', 'sth', 'bsp', 'sm', 'xp', 'xsa'],
      '2018': ['ds', 'sth', 'bsp', 'sm', 'xp', 'xsa'],
      '2019': ['ds', 'sth', 'bsp', 'sm', 'xp', 'xsa'],
      '2020': ['ds', 'sth', 'bsp', 'sm', 'xp', 'xsa'],
    },
    'TTS': {
      '2008': ['ds', 'stu', 'sm', 'xp', 'xsa'],
      '2009': ['ds', 'stu', 'bsp', 'sm', 'xp', 'xsa'],
      '2010': ['ds', 'stu', 'bsp', 'sm', 'xp', 'xsa'],
      '2011': ['ds', 'stu', 'bsp', 'sm', 'xp', 'xsa'],
      '2012': ['ds', 'stu', 'bsp', 'sm', 'xp', 'xsa'],
      '2013': ['ds', 'stu', 'bsp', 'sm', 'xp', 'xsa'],
      '2014': ['ds', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2015': ['ds', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2016': ['bs', 'asp', 'sm', 'xp', 'xsa'],
      '2017': ['bs', 'asp', 'sm', 'xp', 'xsa'],
      '2018': ['bs', 'asp', 'sm', 'xp', 'xsa'],
      '2019': ['bs', 'asp', 'sm', 'xp', 'xsa'],
      '2020': ['bs', 'sm', 'xp', 'xsa'],
    },
  },
  'BMW': {
    '315': {
      '1981': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1982': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1983': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
    },
    '316': {
      '1975': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1976': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1977': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1978': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1979': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1980': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1981': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
    },
    '318': {
      '1975': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1976': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1977': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1978': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1979': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1980': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
    },
    '320': {
      '1975': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1976': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1977': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
    },
    '1600': {
      'all': ['hs', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
    },
    '1602': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xsb'],
    },
    '1800': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xsb'],
    },
    '2002': {
      'all': ['hs', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
    },
    '2500': {
      'all': ['esp', 'sm', 'xp', 'xsa'],
    },
    '2800': {
      'all': ['esp', 'sm', 'xp', 'xsa'],
    },
    '1M Coupe': {
      '2011': ['bs', 'asp', 'sm', 'xp', 'xsa'],
      '2012': ['bs', 'asp', 'sm', 'xp', 'xsa'],
    },
    '3 Series (E9x chassis, turbo)': {
      '2006': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2007': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2008': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2009': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2010': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2011': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2012': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2013': ['fs', 'stu', 'sm', 'xp', 'xsa'],
    },
    '3 Series (F30/F31 chassis; 6-cyl Turbo, non-M3)': {
      '2012': ['fs', 'sm', 'xp', 'xsa'],
      '2013': ['fs', 'sm', 'xp', 'xsa'],
      '2014': ['fs', 'sm', 'xp', 'xsa'],
      '2015': ['fs', 'sm', 'xp', 'xsa'],
      '2016': ['fs', 'sm', 'xp', 'xsa'],
      '2017': ['fs', 'sm', 'xp', 'xsa'],
      '2018': ['fs', 'sm', 'xp', 'xsa'],
      '2019': ['fs', 'sm', 'xp', 'xsa'],
      '2020': ['fs', 'sm', 'xp', 'xsa'],
    },
    '3 Series (non-M3, non-turbo)': {
      '1975': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsa'],
      '1976': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsa'],
      '1977': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsa'],
      '1978': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsa'],
      '1979': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsa'],
      '1980': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsa'],
      '1981': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsa'],
      '1982': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsa'],
      '1983': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsa'],
      '1984': ['gs', 'stx', 'dsp', 'sm', 'dp', 'xp', 'xsa'],
      '1985': ['gs', 'stx', 'dsp', 'sm', 'dp', 'xp', 'xsa'],
      '1986': ['gs', 'stx', 'dsp', 'sm', 'dp', 'xp', 'xsa'],
      '1987': ['gs', 'stx', 'dsp', 'sm', 'dp', 'xp', 'xsa'],
      '1988': ['gs', 'stx', 'dsp', 'sm', 'dp', 'xp', 'xsa'],
      '1989': ['gs', 'stx', 'dsp', 'sm', 'dp', 'xp', 'xsa'],
      '1990': ['gs', 'stx', 'dsp', 'sm', 'dp', 'xp', 'xsa'],
      '1991': ['gs', 'stx', 'dsp', 'sm', 'dp', 'xp', 'xsa'],
      '1992': ['gs', 'stx', 'dsp', 'sm', 'dp', 'xp', 'xsa'],
      '1993': ['gs', 'stx', 'dsp', 'sm', 'dp', 'xp', 'xsa'],
      '1994': ['gs', 'stx', 'dsp', 'sm', 'xp', 'xsa'],
      '1995': ['gs', 'stx', 'dsp', 'sm', 'xp', 'xsa'],
      '1996': ['gs', 'stx', 'dsp', 'sm', 'xp', 'xsa'],
      '1997': ['gs', 'stx', 'dsp', 'sm', 'xp', 'xsa'],
      '1998': ['gs', 'stx', 'dsp', 'sm', 'xp', 'xsa'],
      '1999': ['gs', 'stx', 'dsp', 'sm', 'xp', 'xsa'],
      '2000': ['gs', 'stx', 'dsp', 'sm', 'xp', 'xsa'],
      '2001': ['gs', 'stx', 'dsp', 'sm', 'xp', 'xsa'],
      '2002': ['gs', 'stx', 'dsp', 'sm', 'xp', 'xsa'],
      '2003': ['gs', 'stx', 'dsp', 'sm', 'xp', 'xsa'],
      '2004': ['gs', 'stx', 'dsp', 'sm', 'xp', 'xsa'],
      '2005': ['gs', 'stx', 'dsp', 'sm', 'xp', 'xsa'],
      '2006': ['gs', 'stx', 'dsp', 'sm', 'xp', 'xsa'],
      '2007': ['gs', 'stx', 'sm', 'xp', 'xsa'],
      '2008': ['gs', 'stx', 'sm', 'xp', 'xsa'],
      '2009': ['gs', 'stx', 'sm', 'xp', 'xsa'],
      '2010': ['gs', 'stx', 'sm', 'xp', 'xsa'],
      '2011': ['gs', 'stx', 'sm', 'xp', 'xsa'],
      '2012': ['gs', 'stx', 'sm', 'xp', 'xsa'],
      '2013': ['gs', 'stx', 'sm', 'xp', 'xsa'],
    },
    '3.0S & CS': {
      'all': ['esp', 'sm', 'xp', 'xsa'],
    },
    '4 Series (F32/F33/F36 chassis; 6-cyl Turbo)': {
      '2014': ['fs', 'sm', 'xp', 'xsa'],
      '2015': ['fs', 'sm', 'xp', 'xsa'],
      '2016': ['fs', 'sm', 'xp', 'xsa'],
      '2017': ['fs', 'sm', 'xp', 'xsa'],
      '2018': ['fs', 'sm', 'xp', 'xsa'],
      '2019': ['fs', 'sm', 'xp', 'xsa'],
      '2020': ['fs', 'sm', 'xp', 'xsa'],
    },
    '5 Series (G30/G31/G38 chassis)': {
      '2017': ['fs', 'sm', 'xp', 'xsa'],
      '2018': ['fs', 'sm', 'xp', 'xsa'],
      '2019': ['fs', 'sm', 'xp', 'xsa'],
      '2020': ['fs', 'sm', 'xp', 'xsa'],
    },
    '5 Series (V8)': {
      'all': ['fs', 'sm', 'xp', 'xsa'],
    },
    '5 Series; 6-cyl, non-M5)': {
      '1975': ['gs', 'esp', 'sm', 'dp', 'xp', 'xsa'],
      '1976': ['gs', 'esp', 'sm', 'dp', 'xp', 'xsa'],
      '1977': ['gs', 'esp', 'sm', 'dp', 'xp', 'xsa'],
      '1978': ['gs', 'esp', 'sm', 'dp', 'xp', 'xsa'],
      '1985': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1986': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1987': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1988': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1989': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1990': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1991': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1992': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1993': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1994': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1995': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1996': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1997': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1998': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1999': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '2000': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '2001': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '2002': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '2003': ['gs', 'esp', 'sm', 'xp', 'xsa'],
    },
    '6 Series; 6-cyl, non-M6)': {
      '1984': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1985': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1986': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1987': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1988': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1989': ['gs', 'esp', 'sm', 'xp', 'xsa'],
    },
    '6 series (E63/E64, F12/F13, & G32 chassis)': {
      '2003': ['fs', 'sm', 'xp', 'xsa'],
      '2004': ['fs', 'sm', 'xp', 'xsa'],
      '2005': ['fs', 'sm', 'xp', 'xsa'],
      '2006': ['fs', 'sm', 'xp', 'xsa'],
      '2007': ['fs', 'sm', 'xp', 'xsa'],
      '2008': ['fs', 'sm', 'xp', 'xsa'],
      '2009': ['fs', 'sm', 'xp', 'xsa'],
      '2010': ['fs', 'sm', 'xp', 'xsa'],
      '2011': ['fs', 'sm', 'xp', 'xsa'],
      '2012': ['fs', 'sm', 'xp', 'xsa'],
      '2013': ['fs', 'sm', 'xp', 'xsa'],
      '2014': ['fs', 'sm', 'xp', 'xsa'],
      '2015': ['fs', 'sm', 'xp', 'xsa'],
      '2016': ['fs', 'sm', 'xp', 'xsa'],
      '2017': ['fs', 'sm', 'xp', 'xsa'],
      '2018': ['fs', 'sm', 'xp', 'xsa'],
      '2019': ['fs', 'sm', 'xp', 'xsa'],
      '2020': ['fs', 'sm', 'xp', 'xsa'],
    },
    '7 Series (6-cyl)': {
      'all': ['hs', 'esp', 'sm', 'xp', 'xsa'],
    },
    '8 series coupe': {
      'all': ['fs', 'sm', 'xp', 'xsa'],
    },
    '128i': {
      '2008': ['ds', 'stx', 'bsp', 'sm', 'fp', 'xp', 'xsa'],
      '2009': ['ds', 'stx', 'bsp', 'sm', 'fp', 'xp', 'xsa'],
      '2010': ['ds', 'stx', 'bsp', 'sm', 'fp', 'xp', 'xsa'],
      '2011': ['ds', 'stx', 'bsp', 'sm', 'xp', 'xsa'],
      '2012': ['ds', 'stx', 'bsp', 'sm', 'xp', 'xsa'],
      '2013': ['ds', 'stx', 'bsp', 'sm', 'xp', 'xsa'],
    },
    '135i': {
      '2008': ['fs', 'stu', 'asp', 'sm', 'fp', 'xp', 'xsa'],
      '2009': ['fs', 'stu', 'asp', 'sm', 'fp', 'xp', 'xsa'],
      '2010': ['fs', 'stu', 'asp', 'sm', 'fp', 'xp', 'xsa'],
      '2011': ['fs', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2012': ['fs', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2013': ['fs', 'stu', 'asp', 'sm', 'xp', 'xsa'],
    },
    '135is': {
      '2008': ['fs', 'asp', 'sm', 'fp', 'xp', 'xsa'],
      '2009': ['fs', 'asp', 'sm', 'fp', 'xp', 'xsa'],
      '2010': ['fs', 'asp', 'sm', 'fp', 'xp', 'xsa'],
      '2011': ['fs', 'asp', 'sm', 'xp', 'xsa'],
      '2012': ['fs', 'asp', 'sm', 'xp', 'xsa'],
      '2013': ['fs', 'asp', 'sm', 'xp', 'xsa'],
    },
    '228i': {
      '2014': ['ds', 'stu', 'sm', 'xp', 'xsa'],
      '2015': ['ds', 'stu', 'sm', 'xp', 'xsa'],
      '2016': ['ds', 'sm', 'xp', 'xsa'],
      '2017': ['ds', 'sm', 'xp', 'xsa'],
      '2018': ['ds', 'sm', 'xp', 'xsa'],
      '2019': ['ds', 'sm', 'xp', 'xsa'],
      '2020': ['ds', 'sm', 'xp', 'xsa'],
    },
    '230i': {
      '2014': ['ds', 'sm', 'xp', 'xsa'],
      '2015': ['ds', 'sm', 'xp', 'xsa'],
      '2016': ['ds', 'sm', 'xp', 'xsa'],
      '2017': ['ds', 'sm', 'xp', 'xsa'],
      '2018': ['ds', 'sm', 'xp', 'xsa'],
      '2019': ['ds', 'sm', 'xp', 'xsa'],
      '2020': ['ds', 'sm', 'xp', 'xsa'],
    },
    '318 (8v)': {
      'all': ['hs', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
    },
    '318 (16v)': {
      'all': ['hs', 'dsp', 'sm', 'dp', 'xp', 'xsb'],
    },
    '318i': {
      '1975': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1976': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1977': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1978': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1979': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1980': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
    },
    '318i & 318is (E36 Chassis)': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xsa'],
    },
    '320 (Not Otherwise Classified)': {
      'all': ['hs', 'sm', 'xp', 'xsa'],
    },
    '320/6': {
      '1977': ['gs', 'stx', 'fsp', 'sm', 'xp', 'xsb'],
      '1978': ['gs', 'stx', 'fsp', 'sm', 'xp', 'xsb'],
      '1979': ['gs', 'stx', 'fsp', 'sm', 'xp', 'xsb'],
      '1980': ['gs', 'stx', 'fsp', 'sm', 'xp', 'xsb'],
      '1981': ['gs', 'stx', 'fsp', 'sm', 'xp', 'xsb'],
      '1982': ['gs', 'stx', 'fsp', 'sm', 'xp', 'xsb'],
    },
    '320i': {
      '1975': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1976': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1977': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1978': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1979': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1980': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1981': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1982': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1983': ['gs', 'stx', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '2012': ['gs', 'bsp', 'sm', 'xp', 'xsa'],
      '2013': ['gs', 'bsp', 'sm', 'xp', 'xsa'],
      '2014': ['gs', 'bsp', 'sm', 'xp', 'xsa'],
      '2015': ['gs', 'bsp', 'sm', 'xp', 'xsa'],
      '2016': ['gs', 'bsp', 'sm', 'xp', 'xsa'],
      '2017': ['gs', 'sm', 'xp', 'xsa'],
      '2018': ['gs', 'sm', 'xp', 'xsa'],
      '2019': ['gs', 'sm', 'xp', 'xsa'],
    },
    '323i Convertible': {
      '1998': ['gs', 'sm', 'xp', 'xsa'],
      '1999': ['gs', 'sm', 'xp', 'xsa'],
    },
    '323is': {
      '1998': ['gs', 'sm', 'xp', 'xsa'],
      '1999': ['gs', 'sm', 'xp', 'xsa'],
    },
    '328d': {
      '2012': ['ds', 'sm', 'xp', 'xsa'],
      '2013': ['ds', 'sm', 'xp', 'xsa'],
      '2014': ['ds', 'sm', 'xp', 'xsa'],
      '2015': ['ds', 'sm', 'xp', 'xsa'],
      '2016': ['ds', 'sm', 'xp', 'xsa'],
      '2017': ['ds', 'sm', 'xp', 'xsa'],
      '2018': ['ds', 'sm', 'xp', 'xsa'],
      '2019': ['ds', 'sm', 'xp', 'xsa'],
      '2020': ['ds', 'sm', 'xp', 'xsa'],
    },
    '328i': {
      '2012': ['ds', 'sm', 'xp', 'xsa'],
      '2013': ['ds', 'sm', 'xp', 'xsa'],
      '2014': ['ds', 'sm', 'xp', 'xsa'],
      '2015': ['ds', 'sm', 'xp', 'xsa'],
      '2016': ['ds', 'sm', 'xp', 'xsa'],
      '2017': ['ds', 'sm', 'xp', 'xsa'],
      '2018': ['ds', 'sm', 'xp', 'xsa'],
      '2019': ['ds', 'sm', 'xp', 'xsa'],
      '2020': ['ds', 'sm', 'xp', 'xsa'],
    },
    '328i Convertible': {
      '1996': ['gs', 'sm', 'xp', 'xsa'],
      '1997': ['gs', 'sm', 'xp', 'xsa'],
      '1998': ['gs', 'sm', 'xp', 'xsa'],
      '1999': ['gs', 'sm', 'xp', 'xsa'],
    },
    '328is (E36)': {
      '1996': ['gs', 'sm', 'xp', 'xsa'],
      '1997': ['gs', 'sm', 'xp', 'xsa'],
      '1998': ['gs', 'sm', 'xp', 'xsa'],
      '1999': ['gs', 'sm', 'xp', 'xsa'],
    },
    '330i': {
      '2012': ['ds', 'sm', 'xp', 'xsa'],
      '2013': ['ds', 'sm', 'xp', 'xsa'],
      '2014': ['ds', 'sm', 'xp', 'xsa'],
      '2015': ['ds', 'sm', 'xp', 'xsa'],
      '2016': ['ds', 'sm', 'xp', 'xsa'],
      '2017': ['ds', 'sm', 'xp', 'xsa'],
      '2018': ['ds', 'sm', 'xp', 'xsa'],
      '2019': ['ds', 'sm', 'xp', 'xsa'],
      '2020': ['ds', 'sm', 'xp', 'xsa'],
    },
    '335d': {
      '2009': ['fs', 'asp', 'sm', 'xp', 'xsa'],
      '2010': ['fs', 'asp', 'sm', 'xp', 'xsa'],
      '2011': ['fs', 'asp', 'sm', 'xp', 'xsa'],
    },
    '335i': {
      '2006': ['asp', 'sm', 'xp', 'xsa'],
      '2007': ['fs', 'asp', 'sm', 'xp', 'xsa'],
      '2008': ['fs', 'asp', 'sm', 'xp', 'xsa'],
      '2009': ['fs', 'asp', 'sm', 'xp', 'xsa'],
      '2010': ['fs', 'asp', 'sm', 'xp', 'xsa'],
      '2011': ['fs', 'asp', 'sm', 'xp', 'xsa'],
      '2012': ['fs', 'asp', 'sm', 'xp', 'xsa'],
      '2013': ['fs', 'asp', 'sm', 'xp', 'xsa'],
    },
    '335is': {
      '2007': ['fs', 'asp', 'sm', 'xp', 'xsa'],
      '2008': ['fs', 'asp', 'sm', 'xp', 'xsa'],
      '2009': ['fs', 'asp', 'sm', 'xp', 'xsa'],
      '2010': ['fs', 'asp', 'sm', 'xp', 'xsa'],
      '2011': ['fs', 'asp', 'sm', 'xp', 'xsa'],
      '2012': ['fs', 'asp', 'sm', 'xp', 'xsa'],
      '2013': ['fs', 'asp', 'sm', 'xp', 'xsa'],
    },
    '428i': {
      '2014': ['ds', 'sm', 'xp', 'xsa'],
      '2015': ['ds', 'sm', 'xp', 'xsa'],
      '2016': ['ds', 'sm', 'xp', 'xsa'],
      '2017': ['ds', 'sm', 'xp', 'xsa'],
      '2018': ['ds', 'sm', 'xp', 'xsa'],
      '2019': ['ds', 'sm', 'xp', 'xsa'],
      '2020': ['ds', 'sm', 'xp', 'xsa'],
    },
    '430i': {
      '2014': ['ds', 'sm', 'xp', 'xsa'],
      '2015': ['ds', 'sm', 'xp', 'xsa'],
      '2016': ['ds', 'sm', 'xp', 'xsa'],
      '2017': ['ds', 'sm', 'xp', 'xsa'],
      '2018': ['ds', 'sm', 'xp', 'xsa'],
      '2019': ['ds', 'sm', 'xp', 'xsa'],
      '2020': ['ds', 'sm', 'xp', 'xsa'],
    },
    '2000 CS Coupe': {
      'all': ['hs', 'sm', 'xp', 'xsb'],
    },
    '2000ti': {
      'all': ['hs', 'sm', 'dp', 'xp', 'xsb'],
    },
    'Bavaria': {
      'all': ['dsp', 'sm', 'xp', 'xsa'],
    },
    'M2 (except Performance Edition ZL9)': {
      '2016': ['bs', 'asp', 'sm', 'xsa', 'xp'],
      '2017': ['bs', 'asp', 'sm', 'xsa', 'xp'],
      '2018': ['bs', 'asp', 'sm', 'xsa', 'xp'],
      '2019': ['bs', 'asp', 'sm', 'xsa', 'xp'],
      '2020': ['bs', 'asp', 'sm', 'xsa', 'xp'],
    },
    'M2 Competition': {
      '2019': ['bs', 'sm', 'xp', 'xsa'],
      '2020': ['bs', 'sm', 'xp', 'xsa'],
    },
    'M2 Performance Edition (ZL9)': {
      'all': ['as', 'sm', 'xp', 'xsa'],
    },
    'M3': {
      '1988': ['cs', 'csp', 'sm', 'dp', 'xsa', 'xp'],
      '1989': ['cs', 'csp', 'sm', 'dp', 'xsa', 'xp'],
      '1990': ['cs', 'csp', 'sm', 'dp', 'xsa', 'xp'],
      '1991': ['cs', 'csp', 'sm', 'dp', 'xsa', 'xp'],
      '1995': ['ds', 'str', 'bsp', 'sm', 'xsa', 'xp'],
      '1996': ['ds', 'str', 'bsp', 'sm', 'xsa', 'xp'],
      '1997': ['ds', 'str', 'bsp', 'sm', 'xsa', 'xp'],
      '1998': ['ds', 'str', 'bsp', 'sm', 'xsa', 'xp'],
      '1999': ['ds', 'str', 'bsp', 'sm', 'xsa', 'xp'],
      '2000': ['fs', 'stu', 'bsp', 'sm', 'xsa', 'xp'],
      '2001': ['fs', 'stu', 'bsp', 'sm', 'xsa', 'xp'],
      '2002': ['fs', 'stu', 'bsp', 'sm', 'xsa', 'xp'],
      '2003': ['fs', 'stu', 'bsp', 'sm', 'xsa', 'xp'],
      '2004': ['fs', 'stu', 'bsp', 'sm', 'xsa', 'xp'],
      '2005': ['fs', 'stu', 'bsp', 'sm', 'xsa', 'xp'],
      '2006': ['fs', 'stu', 'bsp', 'sm', 'xsa', 'xp'],
      '2007': ['fs', 'esp', 'sm', 'xsa', 'xp'],
      '2008': ['fs', 'esp', 'sm', 'xsa', 'xp'],
      '2009': ['fs', 'esp', 'sm', 'xsa', 'xp'],
      '2010': ['fs', 'esp', 'sm', 'xsa', 'xp'],
      '2011': ['fs', 'esp', 'sm', 'xsa', 'xp'],
      '2012': ['fs', 'esp', 'sm', 'xsa', 'xp'],
      '2013': ['fs', 'esp', 'sm', 'xsa', 'xp'],
      '2015': ['bs', 'ssr', 'sm', 'xsa', 'xp'],
      '2016': ['bs', 'ssr', 'sm', 'xsa', 'xp'],
      '2017': ['bs', 'ssr', 'sm', 'xsa', 'xp'],
      '2018': ['bs', 'sm', 'xsa', 'xp'],
      '2019': ['bs', 'sm', 'xsa', 'xp'],
      '2020': ['bs', 'sm', 'xsa', 'xp'],
    },
    'M3 CS': {
      '2018': ['as', 'sm', 'xp', 'xsa'],
      '2019': ['as', 'sm', 'xp', 'xsa'],
      '2020': ['as', 'sm', 'xp', 'xsa'],
    },
    'M4': {
      '2015': ['bs', 'ssr', 'asp', 'sm', 'xp', 'xsa'],
      '2016': ['bs', 'ssr', 'asp', 'sm', 'xp', 'xsa'],
      '2017': ['bs', 'ssr', 'asp', 'sm', 'xp', 'xsa'],
      '2018': ['bs', 'asp', 'sm', 'xp', 'xsa'],
      '2019': ['bs', 'asp', 'sm', 'xp', 'xsa'],
      '2020': ['bs', 'asp', 'sm', 'xp', 'xsa'],
    },
    'M4 CS': {
      '2018': ['as', 'sm', 'xp', 'xsa'],
      '2019': ['as', 'sm', 'xp', 'xsa'],
      '2020': ['as', 'sm', 'xp', 'xsa'],
    },
    'M4 GTS': {
      'all': ['ss', 'ssm', 'xp', 'xsa'],
    },
    'M5': {
      '1988': ['fs', 'sm', 'xp', 'xsa'],
      '1989': ['fs', 'sm', 'xp', 'xsa'],
      '1990': ['fs', 'sm', 'xp', 'xsa'],
      '1991': ['fs', 'sm', 'xp', 'xsa'],
      '1992': ['fs', 'sm', 'xp', 'xsa'],
      '1993': ['fs', 'sm', 'xp', 'xsa'],
      '1998': ['fs', 'stx', 'sm', 'xp', 'xsa'],
      '1999': ['fs', 'stx', 'sm', 'xp', 'xsa'],
      '2000': ['fs', 'stx', 'sm', 'xp', 'xsa'],
      '2001': ['fs', 'stx', 'sm', 'xp', 'xsa'],
      '2002': ['fs', 'stx', 'sm', 'xp', 'xsa'],
      '2003': ['fs', 'stx', 'sm', 'xp', 'xsa'],
      '2004': ['fs', 'sm', 'xp', 'xsa'],
      '2005': ['fs', 'sm', 'xp', 'xsa'],
      '2006': ['fs', 'sm', 'xp', 'xsa'],
      '2007': ['fs', 'sm', 'xp', 'xsa'],
      '2008': ['fs', 'sm', 'xp', 'xsa'],
      '2009': ['fs', 'sm', 'xp', 'xsa'],
      '2010': ['fs', 'sm', 'xp', 'xsa'],
    },
    'M235i': {
      '2014': ['fs', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2015': ['fs', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2016': ['fs', 'stu', 'asp', 'sm', 'xp', 'xsa'],
    },
    'M240i (incl. xDrive)': {
      '2017': ['fs', 'sm', 'xp', 'xsa'],
      '2018': ['fs', 'sm', 'xp', 'xsa'],
      '2019': ['fs', 'sm', 'xp', 'xsa'],
      '2020': ['fs', 'sm', 'xp', 'xsa'],
    },
    'M Coupe': {
      '1996': ['cs', 'bsp', 'sm', 'xp', 'xsa'],
      '1997': ['cs', 'bsp', 'sm', 'xp', 'xsa'],
      '1998': ['cs', 'str', 'bsp', 'sm', 'xp', 'xsa'],
      '1999': ['cs', 'str', 'bsp', 'sm', 'xp', 'xsa'],
      '2000': ['cs', 'str', 'bsp', 'sm', 'xp', 'xsa'],
      '2001': ['bs', 'str', 'bsp', 'sm', 'xp', 'xsa'],
      '2002': ['bs', 'str', 'bsp', 'sm', 'xp', 'xsa'],
    },
    'M Roadster': {
      '1996': ['cs', 'bsp', 'sm', 'xp', 'xsa'],
      '1997': ['cs', 'bsp', 'sm', 'xp', 'xsa'],
      '1998': ['cs', 'str', 'bsp', 'sm', 'xp', 'xsa'],
      '1999': ['cs', 'str', 'bsp', 'sm', 'xp', 'xsa'],
      '2000': ['cs', 'str', 'bsp', 'sm', 'xp', 'xsa'],
      '2001': ['bs', 'str', 'bsp', 'sm', 'xp', 'xsa'],
      '2002': ['bs', 'str', 'bsp', 'sm', 'xp', 'xsa'],
    },
    'X1': {
      '2013': ['stu', 'sm', 'xp', 'xsa'],
      '2014': ['stu', 'sm', 'xp', 'xsa'],
      '2015': ['stu', 'sm', 'xp', 'xsa'],
    },
    'Z3 (4-cyl)': {
      '1995': ['sts', 'csp', 'sm', 'dp', 'xp', 'xsa'],
      '1996': ['es', 'sts', 'csp', 'sm', 'dp', 'xp', 'xsa'],
      '1997': ['es', 'sts', 'csp', 'sm', 'dp', 'xp', 'xsa'],
      '1998': ['es', 'sts', 'csp', 'sm', 'dp', 'xp', 'xsa'],
      '1999': ['sts', 'csp', 'sm', 'dp', 'xp', 'xsa'],
      '2000': ['sts', 'csp', 'sm', 'dp', 'xp', 'xsa'],
      '2001': ['sts', 'csp', 'sm', 'dp', 'xp', 'xsa'],
      '2002': ['sts', 'csp', 'sm', 'dp', 'xp', 'xsa'],
    },
    'Z3 (6-cyl, non M)': {
      '1997': ['cs', 'str', 'bsp', 'sm', 'fp', 'xp', 'xsa'],
      '1998': ['cs', 'str', 'bsp', 'sm', 'fp', 'xp', 'xsa'],
      '1999': ['cs', 'str', 'bsp', 'sm', 'fp', 'xp', 'xsa'],
      '2000': ['cs', 'str', 'bsp', 'sm', 'fp', 'xp', 'xsa'],
      '2001': ['cs', 'str', 'bsp', 'sm', 'fp', 'xp', 'xsa'],
      '2002': ['cs', 'str', 'bsp', 'sm', 'fp', 'xp', 'xsa'],
    },
    'Z4 28i & 30i': {
      '2009': ['cs', 'sm', 'xp', 'xsa'],
      '2010': ['cs', 'sm', 'xp', 'xsa'],
      '2011': ['cs', 'sm', 'xp', 'xsa'],
      '2012': ['cs', 'sm', 'xp', 'xsa'],
      '2013': ['cs', 'sm', 'xp', 'xsa'],
      '2014': ['cs', 'sm', 'xp', 'xsa'],
      '2015': ['cs', 'sm', 'xp', 'xsa'],
      '2016': ['cs', 'sm', 'xp', 'xsa'],
    },
    'Z4 35i & 35is': {
      '2009': ['bs', 'sm', 'xp', 'xsa'],
      '2010': ['bs', 'sm', 'xp', 'xsa'],
      '2011': ['bs', 'sm', 'xp', 'xsa'],
      '2012': ['bs', 'asp', 'sm', 'xp', 'xsa'],
      '2013': ['bs', 'asp', 'sm', 'xp', 'xsa'],
      '2014': ['bs', 'sm', 'xp', 'xsa'],
      '2015': ['bs', 'sm', 'xp', 'xsa'],
      '2016': ['bs', 'sm', 'xp', 'xsa'],
    },
    'Z4 Coupe & Roadster (non-M)': {
      '2003': ['cs', 'str', 'bsp', 'sm', 'fp', 'xp', 'xsa'],
      '2004': ['cs', 'str', 'bsp', 'sm', 'fp', 'xp', 'xsa'],
      '2005': ['cs', 'str', 'bsp', 'sm', 'fp', 'xp', 'xsa'],
      '2006': ['cs', 'str', 'bsp', 'sm', 'fp', 'xp', 'xsa'],
      '2007': ['cs', 'str', 'bsp', 'sm', 'fp', 'xp', 'xsa'],
      '2008': ['cs', 'str', 'bsp', 'sm', 'fp', 'xp', 'xsa'],
    },
    'Z4 M Coupe & Roadster': {
      '2006': ['bs', 'bsp', 'sm', 'xp', 'xsa'],
      '2007': ['bs', 'bsp', 'sm', 'xp', 'xsa'],
      '2008': ['bs', 'bsp', 'sm', 'xp', 'xsa'],
    },
    'Z8': {
      'all': ['ss', 'asp', 'ssm', 'xp', 'xsa'],
    },
    'i3': {
      'all': ['hs', 'sm', 'xp', 'xsa'],
    },
    'i8': {
      '2014': ['ss', 'ssm', 'xp', 'xsa'],
      '2015': ['ss', 'ssm', 'xp', 'xsa'],
      '2016': ['ss', 'ssm', 'xp', 'xsa'],
      '2017': ['ss', 'ssm', 'xp', 'xsa'],
      '2018': ['ss', 'ssm', 'xp', 'xsa'],
      '2019': ['ss', 'ssm', 'xp', 'xsa'],
      '2020': ['ss', 'ssm', 'xp', 'xsa'],
    },
  },
  'Buick': {
    'Grand National': {
      'all': ['fs', 'xp', 'xsa', 'sm'],
    },
    'Reatta': {
      'all': ['hs', 'esp', 'xp', 'xsa', 'sm'],
    },
    'Regal (V6 & V8, RWD)': {
      '1980': ['esp', 'xp', 'xsa', 'sm'],
      '1981': ['esp', 'xp', 'xsa', 'sm'],
      '1982': ['esp', 'cp', 'xp', 'xsa', 'sm'],
      '1983': ['esp', 'cp', 'xp', 'xsa', 'sm'],
      '1984': ['esp', 'cp', 'xp', 'xsa', 'sm'],
      '1985': ['esp', 'cp', 'xp', 'xsa', 'sm'],
      '1986': ['esp', 'cp', 'xp', 'xsa', 'sm'],
      '1987': ['esp', 'cp', 'xp', 'xsa', 'sm'],
      '1988': ['esp', 'cp', 'xp', 'xsa', 'sm'],
    },
    'Regal (V6Turbo)': {
      'all': ['fs', 'xp', 'xsa', 'sm'],
    },
    'Regal (all)': {
      '2014': ['gs', 'xp', 'xsa', 'sm'],
      '2015': ['gs', 'xp', 'xsa', 'sm'],
      '2016': ['gs', 'xp', 'xsa', 'sm'],
      '2017': ['gs', 'xp', 'xsa', 'sm'],
      '2018': ['gs', 'xp', 'xsa', 'sm'],
      '2019': ['gs', 'xp', 'xsa', 'sm'],
      '2020': ['gs', 'xp', 'xsa', 'sm'],
    },
    'Verano (non-turbo)': {
      '2013': ['hs', 'xp', 'xsa', 'sm'],
      '2014': ['hs', 'xp', 'xsa', 'sm'],
      '2015': ['hs', 'xp', 'xsa', 'sm'],
      '2016': ['hs', 'xp', 'xsa', 'sm'],
      '2017': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Verano Turbo': {
      '2013': ['gs', 'xp', 'xsa', 'sm'],
      '2014': ['gs', 'xp', 'xsa', 'sm'],
      '2015': ['gs', 'xp', 'xsa', 'sm'],
      '2016': ['gs', 'xp', 'xsa', 'sm'],
      '2017': ['gs', 'xp', 'xsa', 'sm'],
    },
  },
  'Cadillac': {
    'ATS (2.0L Turbo)': {
      '2012': ['ds', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2013': ['ds', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2014': ['ds', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2015': ['ds', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2016': ['ds', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2017': ['ds', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2018': ['ds', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2019': ['ds', 'stu', 'camc', 'xp', 'xsa', 'sm'],
    },
    'ATS (2.5L 4-cyl non-turbo)': {
      '2013': ['gs', 'camc', 'xp', 'xsa', 'sm'],
      '2014': ['gs', 'camc', 'xp', 'xsa', 'sm'],
      '2015': ['gs', 'camc', 'xp', 'xsa', 'sm'],
      '2016': ['gs', 'camc', 'xp', 'xsa', 'sm'],
    },
    'ATS (3.6L V6)': {
      'all': ['fs', 'camc', 'xp', 'xsa', 'sm'],
    },
    'ATS-V': {
      '2016': ['bs', 'camc', 'xp', 'xsa', 'sm'],
      '2017': ['bs', 'camc', 'xp', 'xsa', 'sm'],
      '2018': ['bs', 'camc', 'xp', 'xsa', 'sm'],
      '2019': ['bs', 'camc', 'xp', 'xsa', 'sm'],
    },
    'CTS (non-V, non-Vsport)': {
      '2003': ['ds', 'cp', 'camc', 'xp', 'xsa', 'sm'],
      '2004': ['ds', 'cp', 'camc', 'xp', 'xsa', 'sm'],
      '2005': ['ds', 'cp', 'camc', 'xp', 'xsa', 'sm'],
      '2006': ['ds', 'cp', 'camc', 'xp', 'xsa', 'sm'],
      '2007': ['ds', 'cp', 'camc', 'xp', 'xsa', 'sm'],
      '2008': ['ds', 'camc', 'xp', 'xsa', 'sm'],
      '2009': ['ds', 'camc', 'xp', 'xsa', 'sm'],
      '2010': ['ds', 'camc', 'xp', 'xsa', 'sm'],
      '2011': ['ds', 'camc', 'xp', 'xsa', 'sm'],
      '2012': ['ds', 'camc', 'xp', 'xsa', 'sm'],
      '2013': ['ds', 'camc', 'xp', 'xsa', 'sm'],
      '2014': ['ds', 'camc', 'xp', 'xsa', 'sm'],
      '2015': ['ds', 'camc', 'xp', 'xsa', 'sm'],
      '2016': ['ds', 'camc', 'xp', 'xsa', 'sm'],
      '2017': ['ds', 'camc', 'xp', 'xsa', 'sm'],
      '2018': ['ds', 'camc', 'xp', 'xsa', 'sm'],
      '2019': ['ds', 'camc', 'xp', 'xsa', 'sm'],
    },
    'CTS-V & CTS-Vsport': {
      '2004': ['fs', 'esp', 'cp', 'camc', 'xp', 'xsa', 'sm'],
      '2005': ['fs', 'esp', 'cp', 'camc', 'xp', 'xsa', 'sm'],
      '2006': ['fs', 'esp', 'cp', 'camc', 'xp', 'xsa', 'sm'],
      '2007': ['fs', 'esp', 'cp', 'camc', 'xp', 'xsa', 'sm'],
      '2008': ['fs', 'camc', 'xp', 'xsa', 'sm'],
      '2009': ['fs', 'camc', 'xp', 'xsa', 'sm'],
      '2010': ['fs', 'camc', 'xp', 'xsa', 'sm'],
      '2011': ['fs', 'camc', 'xp', 'xsa', 'sm'],
      '2012': ['fs', 'camc', 'xp', 'xsa', 'sm'],
      '2013': ['fs', 'camc', 'xp', 'xsa', 'sm'],
      '2014': ['fs', 'camc', 'xp', 'xsa', 'sm'],
      '2015': ['fs', 'camc', 'xp', 'xsa', 'sm'],
      '2016': ['fs', 'camc', 'xp', 'xsa', 'sm'],
      '2017': ['fs', 'camc', 'xp', 'xsa', 'sm'],
      '2018': ['fs', 'camc', 'xp', 'xsa', 'sm'],
      '2019': ['fs', 'camc', 'xp', 'xsa', 'sm'],
    },
    'Catera': {
      'all': ['hs', 'camt', 'xp', 'xsa', 'sm'],
    },
    'ELR': {
      '2014': ['gs', 'xp', 'xsa', 'sm'],
      '2015': ['gs', 'xp', 'xsa', 'sm'],
      '2016': ['gs', 'xp', 'xsa', 'sm'],
    },
    'XLR': {
      'all': ['ssr', 'as', 'camc', 'xp', 'xsa', 'sm'],
    },
  },
  'Chevrolet': {
    'Aveo': {
      'all': ['hs', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Beretta (Not Otherwise Classified)': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Bolt': {
      'all': ['hs', 'sth', 'xp', 'xsa', 'sm'],
    },
    'Camaro (4-cyl & 6-cyl)': {
      '1967': ['hs', 'stu', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1968': ['hs', 'stu', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1969': ['hs', 'stu', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1970': ['hs', 'stu', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1971': ['hs', 'stu', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1972': ['hs', 'stu', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1973': ['hs', 'stu', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1974': ['hs', 'stu', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1975': ['hs', 'stu', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1976': ['hs', 'stu', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1977': ['hs', 'stu', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1978': ['hs', 'stu', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1979': ['hs', 'stu', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1980': ['hs', 'stu', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1981': ['hs', 'stu', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1982': ['hs', 'stu', 'fsp', 'camt', 'xp', 'xsa', 'sm'],
      '1983': ['hs', 'stu', 'fsp', 'camt', 'xp', 'xsa', 'sm'],
      '1984': ['hs', 'stu', 'fsp', 'camt', 'xp', 'xsa', 'sm'],
      '1985': ['hs', 'stu', 'fsp', 'camt', 'xp', 'xsa', 'sm'],
      '1986': ['hs', 'stu', 'fsp', 'camt', 'xp', 'xsa', 'sm'],
      '1987': ['hs', 'stu', 'camt', 'xp', 'xsa', 'sm'],
      '1988': ['hs', 'stu', 'camt', 'xp', 'xsa', 'sm'],
      '1989': ['hs', 'stu', 'camt', 'xp', 'xsa', 'sm'],
      '1990': ['hs', 'stu', 'camt', 'xp', 'xsa', 'sm'],
      '1991': ['hs', 'stu', 'camt', 'xp', 'xsa', 'sm'],
      '1992': ['hs', 'stu', 'camt', 'xp', 'xsa', 'sm'],
      '1993': ['hs', 'stu', 'camt', 'xp', 'xsa', 'sm'],
      '1994': ['hs', 'stu', 'camt', 'xp', 'xsa', 'sm'],
      '1995': ['hs', 'stu', 'camt', 'xp', 'xsa', 'sm'],
      '1996': ['hs', 'stu', 'camt', 'xp', 'xsa', 'sm'],
      '1997': ['hs', 'stu', 'camt', 'xp', 'xsa', 'sm'],
      '1998': ['hs', 'stu', 'camt', 'xp', 'xsa', 'sm'],
      '1999': ['hs', 'stu', 'camt', 'xp', 'xsa', 'sm'],
      '2000': ['hs', 'stu', 'camt', 'xp', 'xsa', 'sm'],
      '2001': ['hs', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2002': ['hs', 'stu', 'camc', 'xp', 'xsa', 'sm'],
    },
    'Camaro (V6 & V8; excl. SS 1LE, ZL1, Suspension Lowering Kit, and Brembo\u00ae 6-piston Front Brake Kit)': {
      '2016': ['fs', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2017': ['fs', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2018': ['fs', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2019': ['fs', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2020': ['fs', 'stu', 'camc', 'xp', 'xsa', 'sm'],
    },
    'Camaro (V6)': {
      '2010': ['ds', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2011': ['ds', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2012': ['ds', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2013': ['ds', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2014': ['ds', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2015': ['ds', 'stu', 'camc', 'xp', 'xsa', 'sm'],
    },
    'Camaro (V8 non-supercharged, not otherwise classified)': {
      'all': ['fs', 'stu', 'camc', 'xp', 'xsa', 'sm'],
    },
    'Camaro LS & LT (2.0L Turbo; incl. 1LE)': {
      '2016': ['ds', 'esp', 'camc', 'xp', 'xsa', 'sm'],
      '2017': ['ds', 'esp', 'camc', 'xp', 'xsa', 'sm'],
      '2018': ['ds', 'esp', 'camc', 'xp', 'xsa', 'sm'],
      '2019': ['ds', 'esp', 'camc', 'xp', 'xsa', 'sm'],
      '2020': ['ds', 'esp', 'camc', 'xp', 'xsa', 'sm'],
    },
    'Camaro SS 1LE': {
      '1998': ['fs', 'stu', 'camt', 'xp', 'xsa', 'sm'],
      '1999': ['fs', 'stu', 'camt', 'xp', 'xsa', 'sm'],
      '2000': ['fs', 'stu', 'camt', 'xp', 'xsa', 'sm'],
      '2001': ['fs', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2002': ['fs', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2010': ['fs', 'stu', 'esp', 'camc', 'xp', 'xsa', 'sm'],
      '2011': ['fs', 'stu', 'esp', 'camc', 'xp', 'xsa', 'sm'],
      '2012': ['fs', 'stu', 'esp', 'camc', 'xp', 'xsa', 'sm'],
      '2013': ['fs', 'stu', 'esp', 'camc', 'xp', 'xsa', 'sm'],
      '2014': ['fs', 'stu', 'esp', 'camc', 'xp', 'xsa', 'sm'],
      '2015': ['fs', 'stu', 'esp', 'camc', 'xp', 'xsa', 'sm'],
      '2017': ['bs', 'ssr', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2018': ['bs', 'ssr', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2019': ['bs', 'ssr', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2020': ['bs', 'ssr', 'stu', 'camc', 'xp', 'xsa', 'sm'],
    },
    'Camaro SS (non-1LE)': {
      '2016': ['fs', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2017': ['fs', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2018': ['fs', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2019': ['fs', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2020': ['fs', 'stu', 'camc', 'xp', 'xsa', 'sm'],
    },
    'Camaro V6 1LE': {
      '2017': ['fs', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2018': ['fs', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2019': ['fs', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2020': ['fs', 'stu', 'camc', 'xp', 'xsa', 'sm'],
    },
    'Camaro Z28': {
      '2014': ['as', 'ssr', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2015': ['as', 'ssr', 'stu', 'camc', 'xp', 'xsa', 'sm'],
    },
    'Camaro ZL1 1LE': {
      '2018': ['ss', 'camc', 'xp', 'xsa', 'sm'],
      '2019': ['ss', 'camc', 'xp', 'xsa', 'sm'],
      '2020': ['ss', 'camc', 'xp', 'xsa', 'sm'],
    },
    'Camaro ZL1 (non-1LE)': {
      '2012': ['as', 'ssr', 'asp', 'camc', 'xp', 'xsa', 'sm'],
      '2013': ['as', 'ssr', 'asp', 'camc', 'xp', 'xsa', 'sm'],
      '2014': ['as', 'ssr', 'camc', 'xp', 'xsa', 'sm'],
      '2015': ['as', 'ssr', 'camc', 'xp', 'xsa', 'sm'],
      '2017': ['as', 'ssr', 'asp', 'camc', 'xp', 'xsa', 'sm'],
      '2018': ['as', 'ssr', 'asp', 'camc', 'xp', 'xsa', 'sm'],
      '2019': ['as', 'ssr', 'asp', 'camc', 'xp', 'xsa', 'sm'],
      '2020': ['as', 'ssr', 'camc', 'xp', 'xsa', 'sm'],
    },
    'Chevelle': {
      '1964': ['esp', 'camt', 'xp', 'xsa', 'sm'],
      '1965': ['esp', 'camt', 'xp', 'xsa', 'sm'],
      '1966': ['esp', 'camt', 'xp', 'xsa', 'sm'],
      '1967': ['esp', 'camt', 'xp', 'xsa', 'sm'],
      '1968': ['esp', 'camt', 'xp', 'xsa', 'sm'],
      '1969': ['esp', 'camt', 'xp', 'xsa', 'sm'],
      '1970': ['esp', 'camt', 'xp', 'xsa', 'sm'],
      '1971': ['esp', 'camt', 'xp', 'xsa', 'sm'],
      '1972': ['esp', 'camt', 'xp', 'xsa', 'sm'],
      '1973': ['esp', 'camt', 'xp', 'xsa', 'sm'],
      '1974': ['esp', 'camt', 'xp', 'xsa', 'sm'],
      '1975': ['esp', 'camt', 'xp', 'xsa', 'sm'],
      '1976': ['esp', 'camt', 'xp', 'xsa', 'sm'],
    },
    'Chevette': {
      'all': ['hs', 'fsp', 'camt', 'xp', 'xsa', 'sm'],
    },
    'Cobalt (all, non-turbo, STS: 2.2L)': {
      '2005': ['hs', 'stx', 'sts', 'dsp', 'xp', 'xsa', 'sm'],
      '2006': ['hs', 'stx', 'sts', 'dsp', 'xp', 'xsa', 'sm'],
      '2007': ['hs', 'stx', 'sts', 'dsp', 'xp', 'xsa', 'sm'],
      '2008': ['hs', 'stx', 'sts', 'dsp', 'xp', 'xsa', 'sm'],
      '2009': ['hs', 'stx', 'sts', 'dsp', 'xp', 'xsa', 'sm'],
      '2010': ['hs', 'stx', 'sts', 'dsp', 'xp', 'xsa', 'sm'],
    },
    'Cobalt SS (2.0L SC)': {
      '2005': ['gs', 'stx', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
      '2006': ['gs', 'stx', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
      '2007': ['gs', 'stx', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Cobalt SS (2.0L Turbo)': {
      '2008': ['ds', 'sth', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
      '2009': ['ds', 'sth', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
      '2010': ['ds', 'sth', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Corvair (all non-yenko)': {
      'all': ['hs', 'fsp', 'camt', 'xp', 'xsa', 'sm'],
    },
    'Corvair (all yenko)': {
      'all': ['hs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
    },
    'Corvette': {
      '1953': ['fs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1954': ['fs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1955': ['fs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1956': ['fs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1957': ['fs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1958': ['fs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1959': ['fs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1960': ['fs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1961': ['fs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1962': ['fs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1963': ['cs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1964': ['cs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1965': ['cs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1966': ['cs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1967': ['cs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1968': ['cs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1969': ['cs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1970': ['cs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1971': ['cs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1972': ['cs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1973': ['cs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1974': ['cs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1975': ['cs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1976': ['cs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1977': ['cs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1978': ['cs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1979': ['cs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1980': ['cs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1981': ['cs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
      '1982': ['cs', 'bsp', 'cams', 'ssm', 'xp', 'xsa'],
    },
    'Corvette (C4, all, STU excl. LT4 engine & ZR1)': {
      '1984': ['bs', 'stu', 'bsp', 'cams', 'xp', 'xsa', 'ssm'],
      '1985': ['bs', 'stu', 'bsp', 'cams', 'xp', 'xsa', 'ssm'],
      '1986': ['bs', 'stu', 'bsp', 'cams', 'xp', 'xsa', 'ssm'],
      '1987': ['bs', 'stu', 'bsp', 'cams', 'xp', 'xsa', 'ssm'],
      '1988': ['bs', 'stu', 'bsp', 'cams', 'xp', 'xsa', 'ssm'],
      '1989': ['bs', 'stu', 'bsp', 'cams', 'xp', 'xsa', 'ssm'],
      '1990': ['bs', 'stu', 'bsp', 'cams', 'xp', 'xsa', 'ssm'],
      '1991': ['bs', 'stu', 'bsp', 'cams', 'xp', 'xsa', 'ssm'],
      '1992': ['bs', 'stu', 'bsp', 'cams', 'xp', 'xsa', 'ssm'],
      '1993': ['bs', 'stu', 'bsp', 'cams', 'xp', 'xsa', 'ssm'],
      '1994': ['bs', 'stu', 'bsp', 'cams', 'xp', 'xsa', 'ssm'],
      '1995': ['bs', 'stu', 'bsp', 'cams', 'xp', 'xsa', 'ssm'],
      '1996': ['bs', 'stu', 'bsp', 'cams', 'xp', 'xsa', 'ssm'],
    },
    'Corvette (C5, non-Z06)': {
      '1997': ['bs', 'stu', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '1998': ['bs', 'stu', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '1999': ['bs', 'stu', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2000': ['bs', 'stu', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2001': ['bs', 'stu', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2002': ['bs', 'stu', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2003': ['bs', 'stu', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2004': ['bs', 'stu', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
    },
    'Corvette (C6, non-ZR1)': {
      '2005': ['as', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2006': ['as', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2007': ['as', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2008': ['as', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2009': ['as', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2010': ['as', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2011': ['as', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2012': ['as', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2013': ['as', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
    },
    'Corvette Grand Sport': {
      '2017': ['ss', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2018': ['ss', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2019': ['ss', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
    },
    'Corvette Stingray': {
      '2014': ['as', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2015': ['as', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2016': ['as', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2017': ['as', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2018': ['as', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2019': ['as', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2020': ['ss', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
    },
    'Corvette Z06': {
      '2001': ['as', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2002': ['as', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2003': ['as', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2004': ['as', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2015': ['ss', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2016': ['ss', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2017': ['ss', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2018': ['ss', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2019': ['ss', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
    },
    'Corvette ZR1': {
      '2009': ['ss', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2010': ['ss', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2011': ['ss', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2012': ['ss', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2013': ['ss', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
    },
    'Cruze': {
      'all': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
    },
    'HHR': {
      '2008': ['sth', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
      '2009': ['sth', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
      '2010': ['sth', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['sth', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Malibu (all)': {
      '2008': ['gs', 'xp', 'xsa', 'sm', 'smf'],
      '2009': ['gs', 'xp', 'xsa', 'sm', 'smf'],
      '2010': ['gs', 'xp', 'xsa', 'sm', 'smf'],
      '2011': ['gs', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['gs', 'xp', 'xsa', 'sm', 'smf'],
      '2013': ['gs', 'xp', 'xsa', 'sm', 'smf'],
      '2014': ['gs', 'xp', 'xsa', 'sm', 'smf'],
      '2015': ['gs', 'xp', 'xsa', 'sm', 'smf'],
      '2016': ['gs', 'xp', 'xsa', 'sm', 'smf'],
      '2017': ['gs', 'xp', 'xsa', 'sm', 'smf'],
      '2018': ['gs', 'xp', 'xsa', 'sm', 'smf'],
      '2019': ['gs', 'xp', 'xsa', 'sm', 'smf'],
      '2020': ['gs', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Nova (FWD)': {
      '1986': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '1987': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '1988': ['hs', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Nova (RWD 4-cyl & 6-cyl)': {
      '1962': ['hs', 'camt', 'xp', 'xsa', 'sm'],
      '1963': ['hs', 'camt', 'xp', 'xsa', 'sm'],
      '1964': ['hs', 'camt', 'xp', 'xsa', 'sm'],
      '1965': ['hs', 'camt', 'xp', 'xsa', 'sm'],
      '1966': ['hs', 'camt', 'xp', 'xsa', 'sm'],
      '1967': ['hs', 'camt', 'xp', 'xsa', 'sm'],
      '1968': ['hs', 'camt', 'xp', 'xsa', 'sm'],
      '1969': ['hs', 'camt', 'xp', 'xsa', 'sm'],
      '1970': ['hs', 'camt', 'xp', 'xsa', 'sm'],
      '1971': ['hs', 'camt', 'xp', 'xsa', 'sm'],
      '1972': ['hs', 'camt', 'xp', 'xsa', 'sm'],
      '1973': ['hs', 'camt', 'xp', 'xsa', 'sm'],
      '1974': ['hs', 'camt', 'xp', 'xsa', 'sm'],
      '1975': ['hs', 'camt', 'xp', 'xsa', 'sm'],
      '1976': ['hs', 'camt', 'xp', 'xsa', 'sm'],
      '1977': ['hs', 'camt', 'xp', 'xsa', 'sm'],
      '1978': ['hs', 'camt', 'xp', 'xsa', 'sm'],
      '1979': ['hs', 'camt', 'xp', 'xsa', 'sm'],
    },
    'S10 (4-cyl & 6-cyl), N/A': {
      '2001-any': ['stx', 'fsp', 'camc', 'xp', 'xsa', 'sm'],
      'any-2000': ['stx', 'fsp', 'camt', 'xp', 'xsa', 'sm'],
    },
    'SS Sedan': {
      '2013': ['fs', 'esp', 'camc', 'xp', 'xsa', 'sm'],
      '2014': ['fs', 'esp', 'camc', 'xp', 'xsa', 'sm'],
      '2015': ['fs', 'esp', 'camc', 'xp', 'xsa', 'sm'],
      '2016': ['fs', 'esp', 'camc', 'xp', 'xsa', 'sm'],
      '2017': ['fs', 'esp', 'camc', 'xp', 'xsa', 'sm'],
    },
    'Sonic (all, non-turbo)': {
      '2012': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2013': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2014': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2015': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2016': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2017': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2018': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2019': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2020': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Sonic (all, turbo)': {
      '2012': ['hs', 'sth', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2013': ['hs', 'sth', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2014': ['hs', 'sth', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2015': ['hs', 'sth', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2016': ['hs', 'sth', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2017': ['hs', 'sth', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2018': ['hs', 'sth', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2019': ['hs', 'sth', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2020': ['hs', 'sth', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Spark': {
      'all': ['sts', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Spectrum': {
      'all': ['hs', 'camt', 'xp', 'xsa', 'sm'],
    },
    'Sprint': {
      'all': ['hs', 'sts', 'xp', 'xsa', 'sm'],
    },
    'Vega & Cosworth Vega': {
      'all': ['hs', 'dp', 'camt', 'xp', 'xsa', 'sm'],
    },
    'Volt': {
      '2011': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2013': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2014': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2015': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2016': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2017': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2018': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2019': ['hs', 'xp', 'xsa', 'sm', 'smf'],
    },
  },
  'Chrysler': {
    '200 (4-cyl)': {
      '2010': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2011': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2013': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2014': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2015': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2016': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2017': ['hs', 'xp', 'xsa', 'sm', 'smf'],
    },
    '200 (V6)': {
      '2010': ['gs', 'xp', 'xsa', 'sm', 'smf'],
      '2011': ['gs', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['gs', 'xp', 'xsa', 'sm', 'smf'],
      '2013': ['gs', 'xp', 'xsa', 'sm', 'smf'],
      '2014': ['gs', 'xp', 'xsa', 'sm', 'smf'],
      '2015': ['gs', 'xp', 'xsa', 'sm', 'smf'],
      '2016': ['gs', 'xp', 'xsa', 'sm', 'smf'],
      '2017': ['gs', 'xp', 'xsa', 'sm', 'smf'],
    },
    '300 (V6)': {
      '2004': ['gs', 'camc', 'xp', 'xsa', 'sm'],
      '2005': ['gs', 'camc', 'xp', 'xsa', 'sm'],
      '2006': ['cp', 'gs', 'camc', 'xp', 'xsa', 'sm'],
      '2007': ['cp', 'gs', 'camc', 'xp', 'xsa', 'sm'],
      '2008': ['cp', 'gs', 'camc', 'xp', 'xsa', 'sm'],
      '2009': ['cp', 'gs', 'camc', 'xp', 'xsa', 'sm'],
      '2010': ['cp', 'gs', 'camc', 'xp', 'xsa', 'sm'],
      '2011': ['cp', 'ds', 'camc', 'xp', 'xsa', 'sm'],
      '2012': ['cp', 'ds', 'camc', 'xp', 'xsa', 'sm'],
      '2013': ['cp', 'ds', 'camc', 'xp', 'xsa', 'sm'],
      '2014': ['cp', 'ds', 'camc', 'xp', 'xsa', 'sm'],
      '2015': ['cp', 'ds', 'camc', 'xp', 'xsa', 'sm'],
      '2016': ['cp', 'ds', 'camc', 'xp', 'xsa', 'sm'],
      '2017': ['cp', 'ds', 'camc', 'xp', 'xsa', 'sm'],
      '2018': ['ds', 'camc', 'xp', 'xsa', 'sm'],
      '2019': ['ds', 'camc', 'xp', 'xsa', 'sm'],
      '2020': ['ds', 'camc', 'xp', 'xsa', 'sm'],
    },
    '300 (V8, all)': {
      '2004': ['fs', 'camc', 'xp', 'xsa', 'sm'],
      '2005': ['fs', 'camc', 'xp', 'xsa', 'sm'],
      '2006': ['cp', 'fs', 'camc', 'xp', 'xsa', 'sm'],
      '2007': ['cp', 'fs', 'camc', 'xp', 'xsa', 'sm'],
      '2008': ['cp', 'fs', 'camc', 'xp', 'xsa', 'sm'],
      '2009': ['cp', 'fs', 'camc', 'xp', 'xsa', 'sm'],
      '2010': ['cp', 'fs', 'camc', 'xp', 'xsa', 'sm'],
      '2011': ['cp', 'fs', 'camc', 'xp', 'xsa', 'sm'],
      '2012': ['cp', 'fs', 'camc', 'xp', 'xsa', 'sm'],
      '2013': ['cp', 'fs', 'camc', 'xp', 'xsa', 'sm'],
      '2014': ['cp', 'fs', 'camc', 'xp', 'xsa', 'sm'],
      '2015': ['cp', 'fs', 'camc', 'xp', 'xsa', 'sm'],
      '2016': ['cp', 'fs', 'camc', 'xp', 'xsa', 'sm'],
      '2017': ['cp', 'fs', 'camc', 'xp', 'xsa', 'sm'],
      '2018': ['fs', 'camc', 'xp', 'xsa', 'sm'],
      '2019': ['fs', 'camc', 'xp', 'xsa', 'sm'],
      '2020': ['fs', 'camc', 'xp', 'xsa', 'sm'],
    },
    '300M': {
      '1999': ['hs', 'camt', 'xp', 'xsa', 'sm'],
      '2000': ['hs', 'camt', 'xp', 'xsa', 'sm'],
      '2001': ['hs', 'camc', 'xp', 'xsa', 'sm'],
      '2002': ['hs', 'camc', 'xp', 'xsa', 'sm'],
      '2003': ['hs', 'camc', 'xp', 'xsa', 'sm'],
      '2004': ['hs', 'camc', 'xp', 'xsa', 'sm'],
    },
    'Acclaim (V6 & Turbo)': {
      'all': ['dsp', 'camc', 'xp', 'xsa', 'sm'],
    },
    'Arrow 1600, 2000, & 2600': {
      'all': ['fsp', 'camc', 'xp', 'xsa', 'sm'],
    },
    'Cirrus (V6)': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Conquest Turbo': {
      'all': ['gs', 'esp', 'xp', 'xsa', 'sm'],
    },
    'Crossfire (non-SRT-6)': {
      'all': ['ds', 'dsp', 'camc', 'xp', 'xsa', 'ssm'],
    },
    'Crossfire SRT6': {
      'all': ['fs', 'bsp', 'camc', 'xp', 'xsa', 'ssm'],
    },
    'Laser': {
      '1982': ['hs', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1983': ['hs', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1984': ['hs', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1985': ['hs', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1986': ['hs', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1987': ['hs', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1988': ['hs', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1989': ['hs', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1990': ['hs', 'ep', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Neon (all)': {
      '1995': ['gs', 'fsp', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '1996': ['gs', 'fsp', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '1997': ['gs', 'fsp', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '1998': ['gs', 'fsp', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '1999': ['gs', 'fsp', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2000': ['hs', 'fsp', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2001': ['hs', 'fsp', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2002': ['hs', 'fsp', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2003': ['hs', 'fsp', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2004': ['hs', 'fsp', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2005': ['hs', 'fsp', 'sts', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Neon (non-turbo and SRT4)': {
      '1995': ['gs', 'ep', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '1996': ['gs', 'ep', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '1997': ['gs', 'ep', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '1998': ['gs', 'ep', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '1999': ['gs', 'ep', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2000': ['hs', 'ep', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2001': ['hs', 'ep', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2002': ['hs', 'ep', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2003': ['hs', 'ep', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2004': ['hs', 'ep', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2005': ['hs', 'ep', 'sts', 'xp', 'xsa', 'sm', 'smf'],
    },
    'PT Cruiser (Turbo)': {
      '2003': ['gs', 'sm', 'xp', 'xsa', 'smf'],
      '2004': ['gs', 'sm', 'xp', 'xsa', 'smf'],
      '2005': ['gs', 'sm', 'xp', 'xsa', 'smf'],
      '2006': ['gs', 'sm', 'xp', 'xsa', 'smf'],
      '2007': ['gs', 'sm', 'xp', 'xsa', 'smf'],
      '2008': ['gs', 'sm', 'xp', 'xsa', 'smf'],
      '2009': ['gs', 'sm', 'xp', 'xsa', 'smf'],
    },
    'PT Cruiser (non-turbo)': {
      '2001': ['hs', 'sm', 'xp', 'xsa', 'smf'],
      '2002': ['hs', 'sm', 'xp', 'xsa', 'smf'],
      '2003': ['hs', 'sm', 'xp', 'xsa', 'smf'],
      '2004': ['hs', 'sm', 'xp', 'xsa', 'smf'],
      '2005': ['hs', 'sm', 'xp', 'xsa', 'smf'],
      '2006': ['hs', 'sm', 'xp', 'xsa', 'smf'],
      '2007': ['hs', 'sm', 'xp', 'xsa', 'smf'],
      '2008': ['hs', 'sm', 'xp', 'xsa', 'smf'],
      '2009': ['hs', 'sm', 'xp', 'xsa', 'smf'],
      '2010': ['hs', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Sebring': {
      'all': ['hs', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Sedans (N/A, FWD, Not Otherwise Classified)': {
      'all': ['ep', 'sm', 'xp', 'xsa'],
    },
  },
  'Daewoo': {
    'all': {
      'all': ['hs', 'sm', 'xp', 'xsa'],
    },
  },
  'Datsun': {
    '210': {
      'all': ['fsp', 'sm', 'xp', 'xsb'],
    },
    '310': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xsa'],
    },
    '510': {
      '1968': ['hs', 'fsp', 'sm', 'xp', 'xsb'],
      '1969': ['hs', 'fsp', 'sm', 'xp', 'xsb'],
      '1970': ['hs', 'fsp', 'sm', 'xp', 'xsb'],
      '1971': ['hs', 'fsp', 'sm', 'xp', 'xsb'],
      '1972': ['hs', 'fsp', 'sm', 'xp', 'xsb'],
      '1973': ['hs', 'fsp', 'sm', 'xp', 'xsb'],
      '1978': ['hs', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1979': ['hs', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1980': ['hs', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
      '1981': ['hs', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
    },
    '610': {
      'all': ['fsp', 'hs', 'sm', 'dp', 'xp', 'xsb'],
    },
    '710': {
      '1974': ['dp', 'fsp', 'hs', 'sm', 'xp', 'xsb'],
      '1975': ['dp', 'fsp', 'hs', 'sm', 'xp', 'xsb'],
      '1976': ['dp', 'fsp', 'hs', 'sm', 'xp', 'xsb'],
      '1977': ['dp', 'fsp', 'hs', 'sm', 'xp', 'xsb'],
    },
    '810': {
      '1976': ['dp', 'hs', 'sm', 'xp', 'xsa'],
      '1977': ['dp', 'hs', 'sm', 'xp', 'xsa'],
      '1978': ['dp', 'hs', 'sm', 'xp', 'xsa'],
      '1979': ['dp', 'hs', 'sm', 'xp', 'xsa'],
      '1980': ['dp', 'hs', 'sm', 'xp', 'xsa'],
    },
    '1200': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xsa'],
    },
    '2000': {
      'all': ['es', 'sm', 'xp', 'xsa'],
    },
    '200SX': {
      '1976': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xsb'],
      '1977': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xsb'],
      '1978': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xsb'],
      '1979': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xsb'],
      '1980': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xsb'],
      '1981': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xsb'],
      '1982': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xsb'],
      '1983': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xsb'],
      '1984': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xsb'],
      '1985': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xsb'],
      '1986': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xsb'],
      '1987': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xsb'],
      '1988': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xsb'],
    },
    '200SX (V6)': {
      'all': ['dsp', 'sm', 'xp', 'xsa'],
    },
    '200SX SE-R': {
      'all': ['fsp', 'sm', 'xp', 'xsa'],
    },
    '200SX Turbo': {
      'all': ['dsp', 'gs', 'sm', 'xp', 'xsa'],
    },
    '210 & B-210': {
      'all': ['hs', 'sm', 'xp', 'xsa'],
    },
    '210 (1397 & 1488 cc)': {
      '1979': ['dp', 'sm', 'xp', 'xsa'],
      '1980': ['dp', 'sm', 'xp', 'xsa'],
      '1981': ['dp', 'sm', 'xp', 'xsa'],
      '1982': ['dp', 'sm', 'xp', 'xsa'],
    },
    '210 (B310 chassis; 1.4 L)': {
      '1978': ['dp', 'sm', 'xp', 'xsa'],
      '1979': ['dp', 'sm', 'xp', 'xsa'],
      '1980': ['dp', 'sm', 'xp', 'xsa'],
      '1981': ['dp', 'sm', 'xp', 'xsa'],
      '1982': ['dp', 'sm', 'xp', 'xsa'],
    },
    '240Z': {
      'all': ['es', 'str', 'bsp', 'fp', 'sm', 'xp', 'xsb'],
    },
    '260Z': {
      'all': ['es', 'str', 'bsp', 'fp', 'sm', 'xp', 'xsa'],
    },
    '280Z': {
      'all': ['es', 'str', 'bsp', 'fp', 'sm', 'xp', 'xsa'],
    },
    '280ZX (non-turbo)': {
      'all': ['es', 'str', 'bsp', 'fp', 'sm', 'xp', 'xsa'],
    },
    '280ZX Turbo': {
      'all': ['fs', 'str', 'bsp', 'fp', 'sm', 'xp', 'xsa'],
    },
    '720 (2WD)': {
      '1980': ['dp', 'sm', 'xp', 'xsa'],
      '1981': ['dp', 'sm', 'xp', 'xsa'],
      '1982': ['dp', 'sm', 'xp', 'xsa'],
      '1983': ['dp', 'sm', 'xp', 'xsa'],
      '1984': ['dp', 'sm', 'xp', 'xsa'],
      '1985': ['dp', 'sm', 'xp', 'xsa'],
      '1986': ['dp', 'sm', 'xp', 'xsa'],
    },
    '810 Maxima': {
      '1981': ['dp', 'sm', 'xp', 'xsa'],
      '1982': ['dp', 'sm', 'xp', 'xsa'],
      '1983': ['dp', 'sm', 'xp', 'xsa'],
    },
    '1500 & 1600 Roadster': {
      'all': ['hs', 'csp', 'dp', 'sm', 'xp', 'xsa'],
    },
    'B110 (1171, 1237, 1288, 1397, & 1488 cc)': {
      '1970': ['dp', 'sm', 'xp', 'xsa'],
      '1971': ['dp', 'sm', 'xp', 'xsa'],
      '1972': ['dp', 'sm', 'xp', 'xsa'],
      '1973': ['dp', 'sm', 'xp', 'xsa'],
    },
    'B210': {
      'all': ['fsp', 'dp', 'sm', 'xp', 'xsa'],
    },
    'F-10': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xsa'],
    },
    'Pulsar (N12 chassis)': {
      '1983': ['ep', 'sm', 'xp', 'xsa'],
      '1984': ['ep', 'sm', 'xp', 'xsa'],
      '1985': ['ep', 'sm', 'xp', 'xsa'],
      '1986': ['ep', 'sm', 'xp', 'xsa'],
    },
    'Sedan (N/A, FWD, Not Otherwise Classified)': {
      'all': ['ep', 'sm', 'xp', 'xsa'],
    },
    'Sentra (B11 chassis)': {
      '1983': ['ep', 'sm', 'xp', 'xsa'],
      '1984': ['ep', 'sm', 'xp', 'xsa'],
      '1985': ['ep', 'sm', 'xp', 'xsa'],
      '1986': ['ep', 'sm', 'xp', 'xsa'],
    },
  },
  'DeTomaso': {
    'Mangusta': {
      'all': ['bs', 'asp', 'ssm', 'xp', 'xsa'],
    },
    'Pantera': {
      'all': ['bs', 'asp', 'ssm', 'xp', 'xsa'],
    },
  },
  'Dodge': {
    '024': {
      'all': ['hs', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Avenger': {
      'all': ['hs', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Caliber SRT4': {
      'all': ['gs', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Challenger': {
      '1978': ['hs', 'esp', 'sm', 'xp', 'xsa'],
      '1979': ['hs', 'esp', 'sm', 'xp', 'xsa'],
      '1980': ['hs', 'esp', 'sm', 'xp', 'xsa'],
      '1981': ['hs', 'esp', 'sm', 'xp', 'xsa'],
      '1982': ['hs', 'esp', 'sm', 'xp', 'xsa'],
      '1983': ['hs', 'esp', 'sm', 'xp', 'xsa'],
    },
    'Challenger (V6)': {
      '2008': ['gs', 'stx', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2009': ['gs', 'stx', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2010': ['gs', 'stx', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2011': ['gs', 'stx', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2012': ['gs', 'stx', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2013': ['gs', 'stx', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2014': ['gs', 'stx', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2015': ['gs', 'stx', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2016': ['gs', 'stx', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2017': ['gs', 'stx', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2018': ['gs', 'stx', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2019': ['gs', 'stx', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2020': ['gs', 'stx', 'esp', 'camc', 'sm', 'xp', 'xsa'],
    },
    'Challenger (V8, all)': {
      '2008': ['fs', 'stu', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2009': ['fs', 'stu', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2010': ['fs', 'stu', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2011': ['fs', 'stu', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2012': ['fs', 'stu', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2013': ['fs', 'stu', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2014': ['fs', 'stu', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2015': ['fs', 'stu', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2016': ['fs', 'stu', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2017': ['fs', 'stu', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2018': ['fs', 'stu', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2019': ['fs', 'stu', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2020': ['fs', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2021': ['fs', 'esp', 'camc', 'sm', 'xp', 'xsa'],
    },
    'Challenger R/T Scat Pack Widebody': {
      '2019': ['bs', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2020': ['bs', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2021': ['bs', 'esp', 'camc', 'sm', 'xp', 'xsa'],
    },
    'Charger (V6)': {
      '2006': ['gs', 'stx', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2007': ['gs', 'stx', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2008': ['gs', 'stx', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2009': ['gs', 'stx', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2010': ['gs', 'stx', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2011': ['gs', 'stx', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2012': ['gs', 'stx', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2013': ['gs', 'stx', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2014': ['gs', 'stx', 'camc', 'sm', 'xp', 'xsa'],
      '2015': ['gs', 'stx', 'camc', 'sm', 'xp', 'xsa'],
      '2016': ['gs', 'stx', 'camc', 'sm', 'xp', 'xsa'],
      '2017': ['gs', 'stx', 'camc', 'sm', 'xp', 'xsa'],
      '2018': ['gs', 'stx', 'camc', 'sm', 'xp', 'xsa'],
      '2019': ['gs', 'stx', 'camc', 'sm', 'xp', 'xsa'],
      '2020': ['gs', 'stx', 'camc', 'sm', 'xp', 'xsa'],
    },
    'Charger (V8, all)': {
      '2006': ['fs', 'stu', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2007': ['fs', 'stu', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2008': ['fs', 'stu', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2009': ['fs', 'stu', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2010': ['fs', 'stu', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2011': ['fs', 'stu', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2012': ['fs', 'stu', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2013': ['fs', 'stu', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2014': ['fs', 'stu', 'camc', 'sm', 'xp', 'xsa'],
      '2015': ['fs', 'stu', 'camc', 'sm', 'xp', 'xsa'],
      '2016': ['fs', 'stu', 'camc', 'sm', 'xp', 'xsa'],
      '2017': ['fs', 'stu', 'camc', 'sm', 'xp', 'xsa'],
      '2018': ['fs', 'stu', 'camc', 'sm', 'xp', 'xsa'],
      '2019': ['fs', 'stu', 'camc', 'sm', 'xp', 'xsa'],
      '2020': ['fs', 'stu', 'camc', 'sm', 'xp', 'xsa'],
      '2021': ['fs', 'camc', 'sm', 'xp', 'xsa'],
    },
    'Charger (non-turbo, FWD)': {
      '1981': ['hs', 'sm', 'xp', 'xsa'],
      '1982': ['hs', 'sm', 'xp', 'xsa'],
      '1983': ['hs', 'sm', 'xp', 'xsa'],
      '1984': ['hs', 'sm', 'xp', 'xsa'],
      '1985': ['hs', 'sm', 'xp', 'xsa'],
      '1986': ['hs', 'sm', 'xp', 'xsa'],
      '1987': ['hs', 'sm', 'xp', 'xsa'],
    },
    'Charger Turbo': {
      'all': ['es', 'sm', 'xp', 'xsa'],
    },
    'Colt': {
      'all': ['hs', 'dsp', 'dp', 'sm', 'xp', 'xsa'],
    },
    'Conquest Turbo': {
      'all': ['gs', 'esp', 'sm', 'xp', 'xsa'],
    },
    'Dart (1.4L)': {
      '2013': ['hs', 'sth', 'sm', 'xp', 'xsa', 'smf'],
      '2014': ['hs', 'sth', 'sm', 'xp', 'xsa', 'smf'],
      '2015': ['hs', 'sth', 'sm', 'xp', 'xsa', 'smf'],
      '2016': ['hs', 'sth', 'sm', 'xp', 'xsa', 'smf'],
      '2017': ['hs', 'sth', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Dart (2.0L)': {
      '2013': ['hs', 'sts', 'smf'],
      '2014': ['hs', 'sts', 'smf'],
      '2015': ['hs', 'sts', 'smf'],
      '2016': ['hs', 'sts', 'smf'],
      '2017': ['hs', 'sts', 'smf'],
    },
    'Dart (2.4L)': {
      '2013': ['hs', 'stx', 'sm', 'xp', 'xsa', 'smf'],
      '2014': ['hs', 'stx', 'sm', 'xp', 'xsa', 'smf'],
      '2015': ['hs', 'stx', 'sm', 'xp', 'xsa', 'smf'],
      '2016': ['hs', 'stx', 'sm', 'xp', 'xsa', 'smf'],
      '2017': ['hs', 'stx', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Daytona (V6)': {
      'all': ['hs', 'dsp', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Daytona (non-turbo)': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Daytona Turbo': {
      'all': ['hs', 'dsp', 'sm', 'xp', 'xsa', 'smf'],
    },
    'GLH (non-turbo)': {
      'all': ['hs', 'sm', 'xp', 'xsa', 'smf'],
    },
    'GLH Turbo': {
      'all': ['es', 'dsp', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Intrepid': {
      'all': ['hs', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Lancer Turbo': {
      'all': ['hs', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Magnum (V6)': {
      '2005': ['gs', 'camc', 'sm', 'xp', 'xsa'],
      '2006': ['gs', 'camc', 'sm', 'xp', 'xsa'],
      '2007': ['gs', 'camc', 'sm', 'xp', 'xsa'],
      '2008': ['gs', 'camc', 'sm', 'xp', 'xsa'],
    },
    'Magnum (V8)': {
      '2005': ['fs', 'camc', 'sm', 'xp', 'xsa'],
      '2006': ['fs', 'camc', 'sm', 'xp', 'xsa'],
      '2007': ['fs', 'camc', 'sm', 'xp', 'xsa'],
      '2008': ['fs', 'camc', 'sm', 'xp', 'xsa'],
    },
    'Neon': {
      '1995': ['gs', 'sts', 'ep', 'sm', 'xp', 'xsa', 'smf'],
      '1996': ['gs', 'sts', 'ep', 'sm', 'xp', 'xsa', 'smf'],
      '1997': ['gs', 'sts', 'ep', 'sm', 'xp', 'xsa', 'smf'],
      '1998': ['gs', 'sts', 'ep', 'sm', 'xp', 'xsa', 'smf'],
      '1999': ['gs', 'sts', 'ep', 'sm', 'xp', 'xsa', 'smf'],
      '2000': ['hs', 'sts', 'ep', 'sm', 'xp', 'xsa', 'smf'],
      '2001': ['hs', 'sts', 'ep', 'sm', 'xp', 'xsa', 'smf'],
      '2002': ['hs', 'sts', 'ep', 'sm', 'xp', 'xsa', 'smf'],
      '2003': ['hs', 'sts', 'ep', 'sm', 'xp', 'xsa', 'smf'],
      '2004': ['hs', 'sts', 'ep', 'sm', 'xp', 'xsa', 'smf'],
      '2005': ['hs', 'sts', 'ep', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Omni': {
      'all': ['hs', 'fsp', 'fp', 'ep', 'sm', 'smf', 'xp', 'xsb'],
    },
    'Ram SRT10': {
      '2004': ['fs', 'camc', 'sm', 'xp', 'xsa'],
      '2005': ['fs', 'camc', 'sm', 'xp', 'xsa'],
      '2006': ['fs', 'camc', 'sm', 'xp', 'xsa'],
    },
    'Rampage': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xsa'],
    },
    'SRT-4 (Neon chassis)': {
      'all': ['gs', 'sth', 'ep', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Shadow': {
      'all': ['hs', 'dsp', 'ep', 'xp', 'sm', 'smf', 'xsa'],
    },
    'Spirit': {
      'all': ['hs', 'sm', 'xp', 'xsa'],
    },
    'Stealth (non-turbo)': {
      'all': ['hs', 'esp', 'sm', 'xp', 'xsa'],
    },
    'Stealth Turbo': {
      'all': ['fs', 'asp', 'sm', 'xp', 'xsa'],
    },
    'Stratus': {
      'all': ['hs', 'sm', 'xp', 'xsa'],
    },
    'Viper': {
      '1992': ['as', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '1993': ['as', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '1994': ['as', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '1995': ['as', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '1996': ['as', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '1997': ['as', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '1998': ['as', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '1999': ['as', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '2000': ['as', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '2001': ['as', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '2002': ['as', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '2003': ['as', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '2004': ['as', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '2005': ['as', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '2006': ['as', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '2007': ['as', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '2008': ['as', 'ssr', 'cams', 'ssp', 'camc', 'ssm', 'xp', 'xsa'],
      '2009': ['as', 'ssr', 'cams', 'ssp', 'camc', 'ssm', 'xp', 'xsa'],
      '2010': ['as', 'ssr', 'cams', 'ssp', 'camc', 'ssm', 'xp', 'xsa'],
      '2013': ['ss', 'ssr', 'ssp', 'ssm', 'xp', 'xsa'],
      '2014': ['ss', 'ssr', 'ssp', 'ssm', 'xp', 'xsa'],
      '2015': ['ss', 'ssr', 'ssp', 'ssm', 'xp', 'xsa'],
      '2016': ['ss', 'ssr', 'ssp', 'ssm', 'xp', 'xsa'],
      '2017': ['ss', 'ssr', 'ssp', 'ssm', 'xp', 'xsa'],
    },
    'Viper ACR': {
      'all': ['ss', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
    },
    'Viper GTS': {
      '1996': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '1997': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '1998': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '1999': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '2000': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '2001': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '2002': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '2003': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '2004': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '2005': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '2013': ['ss', 'ssr', 'ssp', 'ssm', 'xp', 'xsa'],
      '2014': ['ss', 'ssr', 'ssp', 'ssm', 'xp', 'xsa'],
      '2015': ['ss', 'ssr', 'ssp', 'ssm', 'xp', 'xsa'],
      '2016': ['ss', 'ssr', 'ssp', 'ssm', 'xp', 'xsa'],
      '2017': ['ss', 'ssr', 'ssp', 'ssm', 'xp', 'xsa'],
    },
    'Viper R/T': {
      '1992': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '1993': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '1994': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '1995': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '1996': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '1997': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '1998': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '1999': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '2000': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '2001': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '2002': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '2003': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
    },
    'Viper SRT-10': {
      '2003': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '2004': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '2005': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '2006': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
      '2007': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
    },
    'Viper TA': {
      'all': ['ss', 'ssp', 'cams', 'ssm', 'xp', 'xsa'],
    },
  },
  'Eagle': {
    'Summit': {
      'all': ['hs', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Summit Turbo (16v)': {
      '1989': ['dsp', 'sm', 'xp', 'xsa', 'smf'],
      '1990': ['dsp', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Talon (FWD)': {
      'all': ['hs', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Talon (non-turbo)': {
      '1989': ['fsp', 'sm', 'xp', 'xsa'],
      '1990': ['fsp', 'sm', 'xp', 'xsa'],
      '1991': ['fsp', 'sm', 'xp', 'xsa'],
      '1992': ['fsp', 'sm', 'xp', 'xsa'],
      '1993': ['fsp', 'sm', 'xp', 'xsa'],
      '1994': ['fsp', 'sm', 'xp', 'xsa'],
      '1995': ['fsp', 'sm', 'xp', 'xsa'],
      '1996': ['fsp', 'sm', 'xp', 'xsa'],
      '1997': ['fsp', 'sm', 'xp', 'xsa'],
      '1998': ['fsp', 'sm', 'xp', 'xsa'],
      '1999': ['fsp', 'sm', 'xp', 'xsa'],
    },
    'Talon Turbo (AWD)': {
      'all': ['ds', 'sth', 'sm', 'xp', 'xsa'],
    },
  },
  'Ferrari': {
    '275': {
      'all': ['asp', 'ssm', 'xp', 'xsb'],
    },
    '308': {
      'all': ['cs', 'fp', 'ssm', 'xp', 'xsb'],
    },
    '328': {
      'all': ['cs', 'ssm', 'xp', 'xsa'],
    },
    '330': {
      'all': ['asp', 'ssm', 'xp', 'xsa'],
    },
    '348': {
      'all': ['asp', 'ssm', 'xp', 'xsa'],
    },
    '355': {
      'all': ['ssp', 'ssm', 'xp', 'xsa'],
    },
    '360': {
      'all': ['ssp', 'ssm', 'xp', 'xsa'],
    },
    '250 (non-LM)': {
      'all': ['asp', 'ssm', 'xp', 'xsa'],
    },
    '308 Coupe & Spider': {
      'all': ['asp', 'ssm', 'xp', 'xsa'],
    },
    '360 Modena & Spider (non-Challenge Stradale)': {
      '1999': ['ss', 'ssm', 'xp', 'xsa'],
      '2000': ['ss', 'ssm', 'xp', 'xsa'],
      '2001': ['ss', 'ssm', 'xp', 'xsa'],
      '2002': ['ss', 'ssm', 'xp', 'xsa'],
      '2003': ['ss', 'ssm', 'xp', 'xsa'],
      '2004': ['ss', 'ssm', 'xp', 'xsa'],
      '2005': ['ss', 'ssm', 'xp', 'xsa'],
    },
    '365 Daytona GTB, GTC': {
      'all': ['asp', 'ssm', 'xp', 'xsa'],
    },
    '400 America (all)': {
      'all': ['esp', 'ssm', 'xp', 'xsa'],
    },
    '500 Superfast (all)': {
      'all': ['esp', 'ssm', 'xp', 'xsa'],
    },
    'Dino 206 & 246 (all)': {
      'all': ['ssp', 'ssm', 'xp', 'xsa'],
    },
    'Dino 246': {
      'all': ['fp', 'ssm', 'xp', 'xsa'],
    },
    'Dino 246 GT': {
      'all': ['fp', 'ssm', 'xp', 'xsa'],
    },
    'F430 (all)': {
      'all': ['ssp', 'ssm', 'xp', 'xsa'],
    },
  },
  'Fiat': {
    '128': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xsb'],
    },
    '124, 124 Spider (incl. Abarth)': {
      '1966': ['hs', 'fsp', 'dp', 'ssm', 'xp', 'xsb'],
      '1967': ['hs', 'fsp', 'dp', 'ssm', 'xp', 'xsb'],
      '1968': ['hs', 'fsp', 'dp', 'ssm', 'xp', 'xsb'],
      '1969': ['hs', 'fsp', 'dp', 'ssm', 'xp', 'xsb'],
      '1970': ['hs', 'fsp', 'dp', 'ssm', 'xp', 'xsb'],
      '1971': ['hs', 'fsp', 'dp', 'ssm', 'xp', 'xsb'],
      '1972': ['hs', 'fsp', 'dp', 'ssm', 'xp', 'xsb'],
      '1973': ['hs', 'fsp', 'dp', 'ssm', 'xp', 'xsb'],
      '1974': ['hs', 'fsp', 'dp', 'ssm', 'xp', 'xsb'],
      '1975': ['hs', 'csp', 'dp', 'ssm', 'xp', 'xsb'],
      '1976': ['hs', 'csp', 'dp', 'ssm', 'xp', 'xsb'],
      '1977': ['hs', 'csp', 'dp', 'ssm', 'xp', 'xsb'],
      '1978': ['hs', 'csp', 'dp', 'ssm', 'xp', 'xsb'],
      '2016': ['cs', 'stu', 'bsp', 'fp', 'ssm', 'xp', 'xsb'],
      '2017': ['cs', 'stu', 'bsp', 'fp', 'ssm', 'xp', 'xsb'],
      '2018': ['cs', 'stu', 'bsp', 'fp', 'ssm', 'xp', 'xsb'],
      '2019': ['cs', 'stu', 'bsp', 'fp', 'ssm', 'xp', 'xsb'],
      '2020': ['cs', 'stu', 'bsp', 'fp', 'ssm', 'xp', 'xsb'],
      '2021': ['cs', 'stu', 'bsp', 'fp', 'ssm', 'xp', 'xsb'],
    },
    '500 Abarth': {
      '2012': ['hs', 'sth', 'dsp', 'sm', 'smf', 'xp', 'xsa'],
      '2013': ['hs', 'sth', 'dsp', 'sm', 'smf', 'xp', 'xsa'],
      '2014': ['hs', 'sth', 'sm', 'smf', 'xp', 'xsa'],
      '2015': ['hs', 'sth', 'sm', 'smf', 'xp', 'xsa'],
      '2016': ['hs', 'sth', 'sm', 'smf', 'xp', 'xsa'],
      '2017': ['hs', 'sth', 'sm', 'smf', 'xp', 'xsa'],
      '2018': ['hs', 'sth', 'sm', 'smf', 'xp', 'xsa'],
      '2019': ['hs', 'sth', 'sm', 'smf', 'xp', 'xsa'],
    },
    '2000 Spider': {
      'all': ['hs', 'csp', 'ssm', 'xp', 'xsb'],
    },
    'NOC': {
      'all': ['hs'],
    },
    'X1/9': {
      'all': ['es', 'fsp', 'dp', 'ssm', 'xp', 'xsb'],
    },
  },
  // TODO Continue adding SM/XP/XS classes from here
  'Ford': {
    'Aspire': {
      'all': ['hs'],
    },
    'Contour': {
      'all': ['hs'],
    },
    'Cortina': {
      'all': ['hs', 'fsp', 'dp'],
    },
    'Crown Victoria': {
      'all': ['hs'],
    },
    'EXP': {
      'all': ['hs'],
    },
    'Escort (non-ZX2 S/R)': {
      'all': ['hs', 'sts', 'fsp', 'sm', 'dp'],
    },
    'Festiva': {
      'all': ['hs', 'fsp'],
    },
    'Fiesta': {
      '1976': ['hs', 'sts'],
      '1977': ['hs', 'sts'],
      '1978': ['hs', 'sts'],
      '1979': ['hs', 'sts'],
      '1980': ['hs', 'sts'],
    },
    'Fiesta ST': {
      '2014': ['hs', 'sth', 'dsp', 'ep'],
      '2015': ['hs', 'sth', 'dsp', 'ep'],
      '2016': ['hs', 'sth', 'dsp', 'ep'],
      '2017': ['hs', 'sth', 'dsp', 'ep'],
      '2018': ['hs', 'sth', 'dsp', 'ep'],
      '2019': ['hs', 'sth', 'ep'],
    },
    'Five Hundred': {
      'all': ['hs'],
    },
    'Focus': {
      '2012': ['hs', 'sts'],
      '2013': ['hs', 'sts'],
      '2014': ['hs', 'sts'],
      '2015': ['hs', 'sts'],
      '2016': ['hs', 'sts'],
      '2017': ['hs', 'sts'],
      '2018': ['hs', 'sts'],
    },
    'Focus RS': {
      '2016': ['ds', 'stu', 'asp'],
      '2017': ['ds', 'stu', 'asp'],
      '2018': ['bs'],
    },
    'Focus ST': {
      '2013': ['gs', 'sth', 'dsp'],
      '2014': ['gs', 'sth', 'dsp'],
      '2015': ['gs', 'sth', 'dsp'],
      '2016': ['gs', 'sth', 'dsp'],
      '2017': ['gs', 'sth', 'dsp'],
      '2018': ['gs', 'sth', 'dsp'],
    },
    'Fusion (4-cyl)': {
      'all': ['hs', 'fsp'],
    },
    'Fusion (6-cyl)': {
      'all': ['gs', 'dsp'],
    },
    'Fusion Sport': {
      '2017': ['gs', 'sth'],
      '2018': ['gs', 'sth'],
      '2019': ['gs', 'sth'],
    },
    'GT': {
      'all': ['ssp'],
    },
    'Mustang (4-cyl Turbo except SVO)': {
      '1979': ['hs', 'stu', 'sm', 'camt'],
      '1980': ['hs', 'stu', 'sm', 'camt'],
      '1981': ['hs', 'stu', 'sm', 'camt'],
      '1982': ['hs', 'stu', 'sm', 'camt'],
      '1983': ['hs', 'stu', 'sm', 'camt'],
      '1984': ['hs', 'stu', 'sm', 'camt'],
      '1985': ['hs', 'stu', 'sm', 'camt'],
      '1986': ['hs', 'stu', 'sm', 'camt'],
      '1987': ['hs', 'stu', 'sm', 'camt'],
      '1988': ['hs', 'stu', 'sm', 'camt'],
      '1989': ['hs', 'stu', 'sm', 'camt'],
      '1990': ['hs', 'stu', 'sm', 'camt'],
      '1991': ['hs', 'stu', 'sm', 'camt'],
      '1992': ['hs', 'stu', 'sm', 'camt'],
      '1993': ['hs', 'stu', 'sm', 'camt'],
    },
    'Mustang (4-cyl)': {
      '1973': ['hs', 'fsp', 'sm', 'camt'],
      '1974': ['hs', 'fsp', 'sm', 'dp', 'camt'],
      '1975': ['hs', 'fsp', 'sm', 'dp', 'camt'],
      '1976': ['hs', 'fsp', 'sm', 'dp', 'camt'],
      '1977': ['hs', 'fsp', 'sm', 'dp', 'camt'],
      '1978': ['hs', 'fsp', 'sm', 'dp', 'camt'],
      '1979': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt'],
      '1980': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt'],
      '1981': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt'],
      '1982': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt'],
      '1983': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt'],
      '1984': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt'],
      '1985': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt'],
      '1986': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt'],
      '1987': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt'],
      '1988': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt'],
      '1989': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt'],
      '1990': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt'],
      '1991': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt'],
      '1992': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt'],
      '1993': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt'],
    },
    'Mustang (6-cyl)': {
      '1964': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1965': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1966': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1967': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1968': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1969': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1970': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1971': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1972': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1973': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1974': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1975': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1976': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1977': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1978': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1979': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1980': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1981': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1982': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1983': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1984': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1985': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1986': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1987': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1988': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1989': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1990': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1991': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1992': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1993': ['hs', 'stu', 'sm', 'cp', 'camt'],
      '1994': ['hs', 'stu', 'sm', 'camt'],
      '1995': ['hs', 'stu', 'sm', 'camt'],
      '1996': ['hs', 'stu', 'sm', 'camt'],
      '1997': ['hs', 'stu', 'sm', 'camt'],
      '1998': ['hs', 'stu', 'sm', 'camt'],
      '1999': ['hs', 'stu', 'sm', 'camt'],
      '2000': ['hs', 'stu', 'sm', 'camt'],
      '2001': ['hs', 'stu', 'sm', 'camt'],
      '2002': ['hs', 'stu', 'sm', 'camt'],
      '2003': ['hs', 'stu', 'sm', 'camt'],
      '2004': ['hs', 'stu', 'sm', 'camt'],
      '2005': ['gs', 'stu', 'sm', 'camc'],
      '2006': ['gs', 'stu', 'sm', 'camc'],
      '2007': ['gs', 'stu', 'sm', 'camc'],
      '2008': ['gs', 'stu', 'sm', 'camc'],
      '2009': ['gs', 'stu', 'sm', 'camc'],
      '2010': ['gs', 'stu', 'sm', 'camc'],
      '2011': ['ds', 'stu', 'sm', 'camc'],
      '2012': ['ds', 'stu', 'sm', 'camc'],
      '2013': ['ds', 'stu', 'sm', 'camc'],
      '2014': ['ds', 'stu', 'sm', 'camc'],
      '2015': ['ds', 'stu', 'esp', 'sm', 'camc'],
      '2016': ['ds', 'stu', 'esp', 'sm', 'camc'],
      '2017': ['ds', 'stu', 'esp', 'sm', 'camc'],
    },
    'Mustang Boss 302 Laguna Seca': {
      '2012': ['ssr', 'as', 'esp', 'sm', 'camc'],
      '2013': ['ssr', 'as', 'esp', 'sm', 'camc'],
    },
    'Mustang Boss 302 non-Laguna Seca': {
      '2012': ['fs', 'esp', 'sm', 'camc'],
      '2013': ['fs', 'esp', 'sm', 'camc'],
    },
    'Mustang Bullitt': {
      '2019': ['fs', 'sm', 'camc'],
      '2020': ['fs', 'sm', 'camc'],
      '2021': ['fs', 'sm', 'camc'],
    },
    'Mustang Cobra': {
      '2003': ['fs', 'esp', 'sm', 'camt', 'camc'],
      '2004': ['fs', 'esp', 'sm', 'camt', 'camc'],
    },
    'Mustang Cobra R': {
      '1993': ['ss', 'esp', 'sm', 'camt'],
      '1995': ['ss', 'esp', 'sm', 'camt'],
      '2000': ['ss', 'esp', 'sm', 'camt'],
    },
    'Mustang EcoBoost': {
      '2015': ['ds', 'stu', 'esp', 'sm', 'camc'],
      '2016': ['ds', 'stu', 'esp', 'sm', 'camc'],
      '2017': ['ds', 'stu', 'esp', 'sm', 'camc'],
      '2018': ['ds', 'stu', 'esp', 'sm', 'camc'],
      '2019': ['ds', 'stu', 'esp', 'sm', 'camc'],
      '2020': ['ds', 'stu', 'sm', 'camc'],
      '2021': ['ds', 'stu', 'sm', 'camc'],
    },
    'Mustang GT500': {
      '2020': ['ss', 'asp', 'sm', 'camc'],
      '2021': ['ss', 'sm', 'camc'],
    },
    'Mustang GT (non-Performance Package)': {
      '2010': ['fs', 'sm', 'camc'],
      '2011': ['fs', 'sm', 'camc'],
      '2012': ['fs', 'sm', 'camc'],
      '2013': ['fs', 'sm', 'camc'],
      '2014': ['fs', 'sm', 'camc'],
      '2015': ['fs', 'esp', 'sm', 'camc'],
      '2016': ['fs', 'esp', 'sm', 'camc'],
      '2017': ['fs', 'esp', 'sm', 'camc'],
      '2018': ['fs', 'esp', 'sm', 'camc'],
      '2019': ['fs', 'esp', 'sm', 'camc'],
      '2020': ['fs', 'sm', 'camc'],
    },
    'Mustang GT (w/ Performance Package)': {
      '2018': ['bs', 'esp', 'sm', 'camc'],
      '2019': ['bs', 'esp', 'sm', 'camc'],
      '2020': ['bs', 'sm', 'camc'],
    },
    'Mustang Mach 1': {
      '2003': ['fs', 'stu', 'sm', 'camt'],
      '2004': ['fs', 'stu', 'sm', 'camt'],
      '2021': ['bs', 'sm', 'camc'],
    },
    'Mustang SVO': {
      'all': ['gs', 'stu', 'esp', 'sm', 'cp', 'camt', 'camc'],
    },
    'Mustang SVT Cobra': {
      'all': ['fs', 'stu', 'sm', 'camt'],
    },
    'Mustang Shelby GT350': {
      '2015': ['ssr', 'bs', 'asp', 'sm', 'camc'],
      '2016': ['ssr', 'bs', 'asp', 'sm', 'camc'],
      '2017': ['ssr', 'bs', 'sm', 'camc'],
      '2018': ['ssr', 'bs', 'sm', 'camc'],
      '2019': ['ssr', 'bs', 'sm', 'camc'],
      '2020': ['ssr', 'bs', 'sm', 'camc'],
    },
    'Mustang Shelby GT350R': {
      '2015': ['ssr', 'ss', 'asp', 'sm', 'camc'],
      '2016': ['ssr', 'ss', 'asp', 'sm', 'camc'],
      '2017': ['ssr', 'ss', 'sm', 'camc'],
      '2018': ['ssr', 'ss', 'sm', 'camc'],
      '2019': ['ssr', 'ss', 'sm', 'camc'],
      '2020': ['ssr', 'ss', 'sm', 'camc'],
    },
    'Mustang Shelby GT500': {
      '2007': ['as', 'esp', 'sm', 'camc'],
      '2008': ['as', 'esp', 'sm', 'camc'],
      '2009': ['as', 'esp', 'sm', 'camc'],
      '2010': ['as', 'esp', 'sm', 'camc'],
      '2011': ['as', 'asp', 'sm', 'camc'],
      '2012': ['as', 'asp', 'sm', 'camc'],
      '2013': ['as', 'asp', 'sm', 'camc'],
      '2014': ['as', 'asp', 'sm', 'camc'],
      '2015': ['as', 'sm', 'camc'],
    },
    'Mustang V8 (NOC)': {
      'all': ['fs', 'stu', 'esp', 'sm', 'cp', 'camt'],
    },
    'Pinto': {
      'all': ['hs', 'fsp', 'dp'],
    },
    'Probe (4-cyl non-turbo)': {
      'all': ['hs', 'fsp', 'sm', 'ep'],
    },
    'Probe (Turbo & V6)': {
      'all': ['hs', 'dsp', 'sm'],
    },
    'Ranger': {
      'all': ['stu'],
    },
    'Taurus': {
      'all': ['hs'],
    },
    'Taurus SHO': {
      '1989': ['hs', 'esp', 'camt'],
      '1990': ['hs', 'esp', 'camt'],
      '1991': ['hs', 'esp', 'camt'],
      '1992': ['hs', 'esp', 'camt'],
      '1993': ['hs', 'esp', 'camt'],
      '1994': ['hs', 'esp', 'camt'],
      '1995': ['hs', 'esp', 'camt'],
      '1996': ['gs', 'esp', 'camt'],
      '1997': ['gs', 'esp', 'camt'],
      '1998': ['gs', 'esp', 'camt'],
      '1999': ['gs', 'esp', 'camt'],
      '2010': ['gs', 'esp', 'camt'],
      '2011': ['gs', 'esp', 'camt'],
      '2012': ['gs', 'esp', 'camt'],
      '2013': ['gs', 'esp', 'camt'],
      '2014': ['gs', 'esp', 'camt'],
      '2015': ['gs', 'esp', 'camt'],
      '2016': ['gs', 'esp', 'camt'],
      '2017': ['gs', 'esp', 'camt'],
      '2018': ['gs', 'esp', 'camt'],
      '2019': ['gs', 'esp', 'camt'],
    },
    'Tempo': {
      'all': ['hs'],
    },
    'Thunderbird (V6 Supercharged)': {
      '1989': ['gs', 'esp'],
      '1990': ['gs', 'esp'],
      '1991': ['gs', 'esp'],
      '1992': ['gs', 'esp'],
      '1993': ['gs', 'esp'],
      '1994': ['gs', 'esp'],
      '1995': ['gs', 'esp'],
      '1996': ['gs', 'esp'],
      '1997': ['gs', 'esp'],
    },
    'Thunderbird (V6 non-Supercharged)': {
      '1989': ['hs', 'esp', 'cp'],
      '1990': ['hs', 'esp', 'cp'],
      '1991': ['hs', 'esp', 'cp'],
      '1992': ['hs', 'esp', 'cp'],
      '1993': ['hs', 'esp', 'cp'],
      '1994': ['hs', 'esp', 'cp'],
      '1995': ['hs', 'esp', 'cp'],
      '1996': ['hs', 'esp', 'cp'],
      '1997': ['hs', 'esp', 'cp'],
    },
    'Thunderbird (V8)': {
      '1955': ['fs', 'camt'],
      '1956': ['fs', 'camt'],
      '1957': ['fs', 'camt'],
      '1958': ['fs', 'camt'],
      '1959': ['fs', 'camt'],
      '1960': ['fs', 'camt'],
      '1961': ['fs', 'camt'],
      '1962': ['fs', 'camt'],
      '1963': ['fs', 'camt'],
      '1964': ['fs', 'camt'],
      '1965': ['fs', 'camt'],
      '1966': ['fs', 'camt'],
      '1967': ['fs', 'camt'],
      '1968': ['fs', 'camt'],
      '1969': ['fs', 'camt'],
      '1970': ['fs', 'camt'],
      '1971': ['fs', 'camt'],
      '1972': ['fs', 'camt'],
      '1973': ['fs', 'camt'],
      '1974': ['fs', 'camt'],
      '1975': ['fs', 'camt'],
      '1976': ['fs', 'camt'],
      '1977': ['fs', 'camt'],
      '1978': ['fs', 'camt'],
      '1979': ['fs', 'camt'],
      '1980': ['fs', 'camt'],
      '1981': ['fs', 'camt'],
      '1982': ['fs', 'camt'],
      '1983': ['fs', 'camt'],
      '1984': ['fs', 'camt'],
      '1985': ['fs', 'camt'],
      '1986': ['fs', 'camt'],
      '1987': ['fs', 'camt'],
      '1988': ['fs', 'camt'],
      '1989': ['gs', 'esp', 'camt'],
      '1990': ['gs', 'esp', 'camt'],
      '1991': ['gs', 'esp', 'camt'],
      '1992': ['gs', 'esp', 'camt'],
      '1993': ['gs', 'esp', 'camt'],
      '1994': ['gs', 'esp', 'camt'],
      '1995': ['gs', 'esp', 'camt'],
      '1996': ['gs', 'esp', 'camt'],
      '1997': ['gs', 'esp', 'camt'],
      '2002': ['fs', 'camc'],
      '2003': ['fs', 'camc'],
      '2004': ['fs', 'camc'],
      '2005': ['fs', 'camc'],
    },
    'Thunderbird Turbo Coupe': {
      'all': ['hs', 'cp'],
    },
    'ZX2': {
      'all': ['hs', 'sts', 'fsp', 'ep'],
    },
    'ZX2 S/R': {
      '1999': ['gs'],
      '2000': ['gs'],
      '2001': ['gs'],
      '2002': ['gs'],
      '2003': ['gs'],
    },
  },
  'GMC': {
    'Sonoma (4-cyl & 6-cyl, N/A)': {
      'all': ['stx'],
    },
    'Sonoma (6-cyl)': {
      '1982': ['cp'],
      '1983': ['cp'],
      '1984': ['cp'],
      '1985': ['cp'],
      '1986': ['cp'],
      '1987': ['cp'],
      '1988': ['cp'],
      '1989': ['cp'],
      '1990': ['cp'],
      '1991': ['cp'],
      '1992': ['cp'],
      '1993': ['cp'],
      '1994': ['cp'],
      '1995': ['cp'],
      '1996': ['cp'],
      '1997': ['cp'],
      '1998': ['cp'],
      '1999': ['cp'],
      '2000': ['cp'],
      '2001': ['cp'],
      '2002': ['cp'],
      '2003': ['cp'],
      '2004': ['cp'],
    },
    'Syclone': {
      'all': ['fs'],
    },
    'Typhoon': {
      'all': ['fs'],
    },
  },
  'Geo': {
    'Metro': {
      'all': ['hs'],
    },
    'Metro 13BA': {
      '1989': ['ep'],
      '1990': ['ep'],
      '1991': ['ep'],
      '1992': ['ep'],
      '1993': ['ep'],
      '1994': ['ep'],
    },
    'Prizm': {
      'all': ['hs'],
    },
    'Spectrum': {
      'all': ['hs'],
    },
    'Spectrum Turbo': {
      '1985': ['dsp'],
      '1986': ['dsp'],
      '1987': ['dsp'],
      '1988': ['dsp'],
      '1989': ['dsp'],
    },
    'Storm': {
      '2005': ['sp'],
      '2006': ['dsp'],
      '2007': ['dsp'],
    },
    'Storm GSi': {
      '1985': ['dsp'],
      '1986': ['dsp'],
      '1987': ['dsp'],
      '1988': ['dsp'],
      '1989': ['dsp'],
    },
  },
  'Honda': {
    '600': {
      '1964': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1965': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1966': ['hs', 'sts', 'fsp', 'smf', 'ep'],
    },
    '800': {
      '1967': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1968': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1969': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1970': ['hs', 'sts', 'fsp', 'smf', 'ep'],
    },
    'Accord': {
      '1976': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1977': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1978': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1979': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1980': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1981': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1982': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1983': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1984': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1985': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1986': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1987': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1988': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1989': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1990': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1991': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1992': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1993': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1994': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1995': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1996': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1997': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1998': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1999': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2000': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2001': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2002': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2003': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2004': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2005': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2006': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2007': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2008': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2009': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2010': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2011': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2012': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2013': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2014': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2015': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2016': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2017': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2018': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2019': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2020': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2021': ['hs', 'sts', 'fsp', 'smf', 'ep'],
    },
    'CR-Z': {
      '2010': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2011': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2012': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2013': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2014': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2015': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2016': ['hs', 'sts', 'fsp', 'smf', 'ep'],
    },
    'CRX': {
      '1984': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1985': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1986': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1987': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1988': ['hs', 'sts', 'csp', 'smf', 'ep'],
      '1989': ['hs', 'sts', 'csp', 'smf', 'ep'],
      '1990': ['hs', 'sts', 'csp', 'smf', 'ep'],
      '1991': ['hs', 'sts', 'csp', 'smf', 'ep'],
    },
    'Civic': {
      '1975': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1976': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1977': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1978': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1979': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1980': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1981': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1982': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1983': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1984': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1985': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1986': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1987': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1988': ['hs', 'sts', 'csp', 'smf', 'ep'],
      '1989': ['hs', 'sts', 'csp', 'smf', 'ep'],
      '1990': ['hs', 'sts', 'csp', 'smf', 'ep'],
      '1991': ['hs', 'sts', 'csp', 'smf', 'ep'],
      '1992': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1993': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1994': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1995': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1996': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1997': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1998': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1999': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2000': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2001': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2002': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2003': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2004': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2005': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2006': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2007': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2008': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2009': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2010': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2011': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2012': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2013': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2014': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2015': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2016': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2017': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2018': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2019': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2020': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2021': ['hs', 'sts', 'fsp', 'smf', 'ep'],
    },
    'Civic Si': {
      '1984': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1985': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1986': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1987': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1988': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1989': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1990': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1991': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1992': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1993': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1994': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1995': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1996': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1997': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1998': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1999': ['hs', 'sts', 'dsp', 'smf', 'ep'],
      '2000': ['hs', 'sts', 'dsp', 'smf', 'ep'],
      '2001': ['hs', 'sts', 'dsp', 'smf', 'ep'],
      '2002': ['hs', 'stx', 'dsp', 'smf', 'ep'],
      '2003': ['hs', 'stx', 'dsp', 'smf', 'ep'],
      '2004': ['hs', 'stx', 'dsp', 'smf', 'ep'],
      '2005': ['hs', 'stx', 'dsp', 'smf', 'ep'],
      '2006': ['hs', 'stx', 'dsp', 'smf', 'ep'],
      '2007': ['hs', 'stx', 'dsp', 'smf', 'ep'],
      '2008': ['hs', 'stx', 'dsp', 'smf', 'ep'],
      '2009': ['hs', 'stx', 'dsp', 'smf', 'ep'],
      '2010': ['hs', 'stx', 'dsp', 'smf', 'ep'],
      '2011': ['hs', 'stx', 'dsp', 'smf', 'ep'],
      '2012': ['hs', 'stx', 'dsp', 'smf', 'ep'],
      '2013': ['hs', 'stx', 'fsp', 'smf', 'ep'],
      '2014': ['hs', 'stx', 'fsp', 'smf', 'ep'],
      '2015': ['hs', 'stx', 'fsp', 'smf', 'ep'],
      '2016': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2017': ['gs', 'sth', 'fsp', 'smf', 'ep'],
      '2018': ['gs', 'sth', 'fsp', 'smf', 'ep'],
      '2019': ['gs', 'sth', 'fsp', 'smf', 'ep'],
      '2020': ['gs', 'sth', 'fsp', 'smf', 'ep'],
      '2021': ['gs', 'sth', 'fsp', 'smf', 'ep'],
    },
    'Civic Si Mugen': {
      '2008': ['gs', 'sts', 'fsp', 'smf', 'ep'],
    },
    'Civic Type R': {
      '2017': ['ds', 'stu', 'dsp', 'smf', 'ep'],
      '2018': ['ds', 'stu', 'dsp', 'smf', 'ep'],
      '2019': ['ds', 'stu', 'dsp', 'smf', 'ep'],
      '2020': ['ds', 'dsp', 'smf', 'ep'],
      '2021': ['ds', 'dsp', 'smf', 'ep'],
    },
    'Fit': {
      '2007': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2008': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2009': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2010': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2011': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2012': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2013': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2014': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2015': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2016': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2017': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2018': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2019': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2020': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2021': ['hs', 'sts', 'fsp', 'smf', 'ep'],
    },
    'Insight': {
      '1999': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2000': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2001': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2002': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2003': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2004': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2005': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2006': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2009': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2010': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2011': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2012': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2013': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2014': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2018': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2019': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2020': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '2021': ['hs', 'sts', 'fsp', 'smf', 'ep'],
    },
    'Prelude': {
      '1978': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1979': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1980': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1981': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1982': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1983': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1984': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1985': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1986': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1987': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1988': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1989': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1990': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1991': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1992': ['hs', 'sts', 'dsp', 'smf', 'ep'],
      '1993': ['hs', 'sts', 'dsp', 'smf', 'ep'],
      '1994': ['hs', 'sts', 'dsp', 'smf', 'ep'],
      '1995': ['hs', 'sts', 'dsp', 'smf', 'ep'],
      '1996': ['hs', 'sts', 'dsp', 'smf', 'ep'],
      '1997': ['hs', 'sts', 'dsp', 'smf', 'ep'],
      '1998': ['hs', 'sts', 'dsp', 'smf', 'ep'],
      '1999': ['hs', 'sts', 'dsp', 'smf', 'ep'],
      '2000': ['hs', 'sts', 'dsp', 'smf', 'ep'],
      '2001': ['hs', 'sts', 'dsp', 'smf', 'ep'],
    },
    'S2000 (non-CR)': {
      '1999': ['cs', 'str', 'bsp', 'ssm', 'fp'],
      '2000': ['cs', 'str', 'bsp', 'ssm', 'fp'],
      '2001': ['cs', 'str', 'bsp', 'ssm', 'fp'],
      '2002': ['cs', 'str', 'bsp', 'ssm', 'fp'],
      '2003': ['cs', 'str', 'bsp', 'ssm', 'fp'],
      '2004': ['cs', 'str', 'bsp', 'ssm', 'fp'],
      '2005': ['cs', 'str', 'bsp', 'ssm', 'fp'],
      '2006': ['cs', 'str', 'bsp', 'ssm', 'fp'],
      '2007': ['cs', 'str', 'bsp', 'ssm', 'fp'],
      '2008': ['cs', 'str', 'bsp', 'ssm', 'fp'],
      '2009': ['cs', 'str', 'bsp', 'ssm', 'fp'],
    },
    'S2000 CR': {
      '2008': ['as', 'str', 'bsp', 'ssm', 'fp'],
      '2009': ['as', 'str', 'bsp', 'ssm', 'fp'],
    },
    'del Sol (DOHC)': {
      '1992': ['hs', 'sts', 'dsp', 'smf', 'ep'],
      '1993': ['hs', 'sts', 'dsp', 'smf', 'ep'],
      '1994': ['hs', 'sts', 'dsp', 'smf', 'ep'],
      '1995': ['hs', 'sts', 'dsp', 'smf', 'ep'],
      '1996': ['hs', 'sts', 'dsp', 'smf', 'ep'],
      '1997': ['hs', 'sts', 'dsp', 'smf', 'ep'],
      '1998': ['hs', 'sts', 'dsp', 'smf', 'ep'],
    },
    'del Sol (SOHC)': {
      '1992': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1993': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1994': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1995': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1996': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1997': ['hs', 'sts', 'fsp', 'smf', 'ep'],
      '1998': ['hs', 'sts', 'fsp', 'smf', 'ep'],
    },
  },
  'Hyundai': {
    'Accent': {
      '1995': ['hs'],
      '1996': ['hs'],
      '1997': ['hs'],
      '1998': ['hs'],
      '1999': ['hs'],
      '2000': ['hs'],
      '2001': ['hs'],
      '2002': ['hs'],
      '2003': ['hs'],
      '2004': ['hs'],
      '2005': ['hs'],
      '2006': ['hs'],
      '2007': ['hs'],
      '2008': ['hs'],
      '2009': ['hs'],
      '2010': ['hs'],
      '2011': ['hs'],
      '2012': ['hs', 'sts'],
      '2013': ['hs', 'sts'],
      '2014': ['hs', 'sts'],
      '2015': ['hs', 'sts'],
      '2016': ['hs', 'sts'],
      '2017': ['hs', 'sts'],
      '2018': ['hs'],
      '2019': ['hs'],
      '2020': ['hs'],
      '2021': ['hs'],
    },
    'Elantra (incl. GT Turbo)': {
      '1990': ['hs'],
      '1991': ['hs'],
      '1992': ['hs'],
      '1993': ['hs'],
      '1994': ['hs'],
      '1995': ['hs'],
      '1996': ['hs'],
      '1997': ['hs'],
      '1998': ['hs'],
      '1999': ['hs'],
      '2000': ['hs'],
      '2001': ['hs', 'sts'],
      '2002': ['hs', 'sts'],
      '2003': ['hs', 'sts'],
      '2004': ['hs', 'sts'],
      '2005': ['hs', 'sts'],
      '2006': ['hs', 'sts'],
      '2007': ['hs', 'sts'],
      '2008': ['hs', 'sts'],
      '2009': ['hs', 'sts'],
      '2010': ['hs', 'sts'],
      '2011': ['hs', 'sts'],
      '2012': ['hs', 'sts'],
      '2013': ['hs', 'sts'],
      '2014': ['hs', 'sts'],
      '2015': ['hs', 'sts'],
      '2016': ['hs'],
      '2017': ['hs'],
      '2018': ['hs'],
      '2019': ['hs'],
      '2020': ['hs'],
      '2021': ['hs'],
      'all': ['fsp', 'sm'],
    },
    'Excel': {
      'all': ['fsp'],
    },
    'Genesis': {
      '2009': ['esp'],
      '2010': ['esp'],
      '2011': ['esp'],
      '2012': ['esp'],
    },
    'Genesis (V6)': {
      'all': ['stu'],
    },
    'Genesis Coupe (4-cyl Turbo)': {
      '2010': ['gs', 'sth'],
      '2011': ['gs', 'sth'],
      '2012': ['gs', 'sth'],
      '2013': ['ds', 'stu'],
      '2014': ['ds', 'stu'],
      '2015': ['ds', 'stu'],
      '2016': ['ds', 'stu'],
    },
    'Genesis Coupe (V6)': {
      '2010': ['ds', 'stu'],
      '2011': ['ds', 'stu'],
      '2012': ['ds', 'stu'],
      '2013': ['fs', 'stu'],
      '2014': ['fs', 'stu'],
      '2015': ['fs', 'stu'],
    },
    'Genesis G70': {
      '2018': ['fs'],
      '2019': ['fs'],
      '2020': ['fs'],
    },
    'Not Otherwise Classified': {
      'all': ['hs', 'fsp'],
    },
    'Scoupe': {
      'all': ['hs', 'fsp'],
    },
    'Sonata': {
      '1990': ['ep'],
      '1991': ['ep'],
      '1992': ['ep'],
      '1993': ['ep'],
      '1994': ['ep'],
      '1995': ['ep'],
      '1996': ['ep'],
      '1997': ['ep'],
      '1998': ['ep'],
      '1999': ['ep'],
      '2000': ['ep'],
      '2001': ['ep'],
      '2002': ['ep'],
      '2003': ['ep'],
      '2004': ['ep'],
      '2005': ['ep'],
    },
    'Tiburon (4-cyl)': {
      'all': ['hs', 'dsp', 'sm'],
    },
    'Tiburon (V6)': {
      '2003': ['hs', 'sts', 'dsp'],
      '2004': ['hs', 'sts', 'dsp'],
      '2005': ['hs', 'sts', 'dsp'],
      '2006': ['hs', 'sts', 'dsp'],
      '2007': ['hs', 'sts', 'dsp'],
      '2008': ['hs', 'sts', 'dsp'],
    },
    'Veloster': {
      '2011': ['hs', 'sts'],
      '2012': ['hs', 'sts'],
      '2013': ['hs', 'sts'],
      '2014': ['hs', 'sts'],
      '2015': ['hs', 'sts'],
      '2016': ['hs', 'sts'],
      '2017': ['hs', 'sts'],
      '2018': ['hs', 'sts'],
      '2019': ['hs'],
      '2020': ['hs'],
    },
    'Veloster N': {
      '2019': ['ds', 'stu'],
      '2020': ['ds', 'stu'],
    },
    'Veloster Turbo': {
      '2012': ['hs'],
      '2013': ['hs', 'sth'],
      '2014': ['hs', 'sth'],
      '2015': ['hs', 'sth'],
      '2016': ['hs', 'sth'],
      '2017': ['hs'],
      '2019': ['gs', 'sth', 'dsp'],
      '2020': ['gs', 'sth'],
    },
    'Veloster Turbo Rally Edition': {
      '2016': ['gs'],
      '2017': ['gs'],
    },
  },
  'Infiniti': {
    'G20': {
      'all': ['hs', 'fsp'],
    },
    'G35 Coupe': {
      '2003': ['ds', 'stu', 'esp'],
      '2004': ['ds', 'stu', 'esp'],
      '2005': ['ds', 'stu', 'esp'],
      '2006': ['ds', 'stu', 'esp'],
      '2007': ['ds', 'stu', 'esp'],
    },
    'G35 Sedan': {
      '2003': ['ds', 'stx', 'esp'],
      '2004': ['ds', 'stx', 'esp'],
      '2005': ['ds', 'stx', 'esp'],
      '2006': ['ds', 'stx', 'esp'],
      '2007': ['ds', 'stx', 'esp'],
    },
    'G37': {
      'all': ['stu', 'esp'],
    },
    'G37 Coupe': {
      'all': ['fs'],
    },
    'G37 Sedan': {
      'all': ['fs'],
    },
    'I30': {
      '1996': ['ep'],
      '1997': ['ep'],
      '1998': ['ep'],
      '1999': ['ep'],
      '2000': ['ep'],
      '2001': ['ep'],
    },
    'I35': {
      '2002': ['ep'],
      '2003': ['ep'],
      '2004': ['ep'],
    },
    'M30': {
      'all': ['hs', 'esp'],
    },
    'Q45': {
      'all': ['fs', 'esp'],
    },
    'Q50 Sport': {
      '2014': ['fs'],
      '2015': ['fs'],
      '2016': ['fs'],
      '2017': ['fs'],
      '2018': ['fs'],
      '2019': ['fs'],
      '2020': ['fs'],
    },
    'Q60': {
      '2014': ['fs'],
      '2015': ['fs'],
      '2016': ['fs'],
      '2017': ['fs'],
      '2018': ['fs'],
      '2019': ['fs'],
      '2020': ['fs'],
    },
  },
  'Isuzu': {
    'FWD models': {
      '1985': ['fsp'],
      '1986': ['fsp'],
      '1987': ['fsp'],
      '1988': ['fsp'],
      '1989': ['fsp'],
    },
    'I-Mark': {
      '1981': ['dp', 'hs'],
      '1982': ['dp', 'hs'],
      '1983': ['dp', 'hs'],
      '1984': ['dp', 'hs'],
      '1985': ['ep'],
      '1986': ['ep'],
      '1987': ['ep'],
      '1988': ['ep'],
      '1989': ['ep'],
    },
    'I-Mark (1.5L non-turbo)': {
      'all': ['fsp'],
    },
    'I-Mark (RWD)': {
      '1980': ['fsp'],
      '1981': ['fsp'],
      '1982': ['fsp'],
      '1983': ['fsp'],
      '1984': ['fsp'],
      '1985': ['fsp'],
    },
    'I-Mark LS (16v & Turbo, FWD)': {
      '1985': ['dsp'],
      '1986': ['dsp'],
      '1987': ['dsp'],
      '1988': ['dsp'],
      '1989': ['dsp'],
    },
    'I-Mark RS (16v & Turbo, FWD)': {
      'all': ['dsp', 'fp', 'hs'],
    },
    'I-Mark RS (16v)': {
      '1985': ['fsp'],
      '1986': ['fsp'],
      '1987': ['fsp'],
      '1988': ['fsp'],
      '1989': ['fsp'],
    },
    'Impulse (16v & Turbo)': {
      'all': ['dsp'],
    },
    'Impulse (non-turbo)': {
      '1980': ['hs'],
      '1981': ['hs'],
      '1982': ['hs'],
      '1983': ['dp', 'hs', 'fsp'],
      '1984': ['dp', 'hs', 'fsp'],
      '1985': ['dp', 'hs', 'fsp'],
      '1986': ['dp', 'hs', 'fsp'],
      '1987': ['dp', 'hs', 'fsp'],
      '1988': ['dp', 'hs', 'fsp'],
      '1989': ['dp', 'hs', 'fsp'],
      '1990': ['hs', 'ep'],
      '1991': ['hs', 'ep'],
      '1992': ['hs', 'ep'],
      '1993': ['hs'],
    },
    'Impulse RS (RWD)': {
      '1983': ['dsp'],
      '1984': ['dsp'],
      '1985': ['dsp'],
      '1986': ['dsp'],
      '1987': ['dsp'],
      '1988': ['dsp'],
      '1989': ['dsp'],
    },
    'Impulse RS Turbo (AWD)': {
      '1990': ['dsp'],
      '1991': ['dsp'],
      '1992': ['dsp'],
      '1993': ['dsp'],
    },
    'Impulse Turbo & RS (RWD)': {
      '1980': ['gs'],
      '1981': ['gs'],
      '1982': ['gs'],
      '1983': ['dsp'],
      '1984': ['dsp'],
      '1985': ['dsp'],
      '1986': ['dsp'],
      '1987': ['dsp'],
      '1988': ['dsp'],
      '1989': ['dsp'],
      '1990': ['gs'],
      '1991': ['gs'],
      '1992': ['gs'],
      '1993': ['gs'],
    },
    'Impulse XS (16v non-turbo)': {
      '1990': ['dsp'],
      '1991': ['dsp'],
      '1992': ['dsp'],
      '1993': ['dsp'],
    },
    'Stylus': {
      '1990': ['hs'],
      '1991': ['hs', 'ep'],
      '1992': ['hs', 'ep'],
      '1993': ['hs', 'ep'],
    },
    'Stylus S (12v)': {
      '1990': ['fsp'],
      '1991': ['fsp'],
      '1992': ['fsp'],
      '1993': ['fsp'],
    },
    'Stylus XS & RS (16v) (1990-93) ': {
      '1990': ['dsp'],
      '1991': ['dsp'],
      '1992': ['dsp'],
      '1993': ['dsp'],
    },
  },
  'Jaguar': {
    '120': {
      'all': ['hs'],
    },
    '140': {
      'all': ['hs'],
    },
    '150': {
      'all': ['hs'],
    },
    'E-type (all)': {
      'all': ['asp'],
    },
    'F-Type (non-Project 7)': {
      '2014': ['as', 'ssr'],
      '2015': ['as', 'ssr'],
      '2016': ['as', 'ssr'],
      '2017': ['as', 'ssr'],
      '2018': ['as', 'ssr'],
      '2019': ['as', 'ssr'],
      '2020': ['as', 'ssr'],
    },
    'F-Type R & SVR': {
      '2018': ['ss'],
      '2019': ['ss'],
      '2020': ['ss'],
    },
    'S-Type (6-cyl)': {
      '2002': ['gs'],
      '2003': ['gs'],
      '2004': ['gs'],
      '2005': ['gs'],
      '2006': ['gs'],
      '2007': ['gs'],
      '2008': ['gs'],
    },
    'S-Type R': {
      'all': ['fs'],
    },
    'Sedan (6-cyl)': {
      'all': ['esp'],
    },
    'Sedan (12-cyl)': {
      'all': ['esp', 'fs'],
    },
    'X-Type (2.5L)': {
      '2002': ['hs'],
      '2003': ['hs'],
      '2004': ['hs'],
      '2005': ['hs'],
    },
    'X-Type (3.0L)': {
      '2002': ['gs'],
      '2003': ['gs'],
      '2004': ['gs'],
      '2005': ['gs'],
      '2006': ['gs'],
      '2007': ['gs'],
      '2008': ['gs'],
    },
    'XJ': {
      '1998': ['fs'],
      '1999': ['fs'],
      '2000': ['fs'],
      '2001': ['fs'],
      '2002': ['fs'],
      '2003': ['fs'],
      '2004': ['fs'],
      '2005': ['fs'],
      '2006': ['fs'],
      '2007': ['fs'],
      '2008': ['fs'],
      '2009': ['fs'],
      '2010': ['fs'],
      '2011': ['fs'],
      '2012': ['fs'],
      '2013': ['fs'],
      '2014': ['fs'],
      '2015': ['fs'],
      '2016': ['fs'],
      '2017': ['fs'],
      '2018': ['fs'],
      '2019': ['fs'],
    },
    'XJ-S': {
      '1976': ['esp', 'fs'],
      '1977': ['esp', 'fs'],
      '1978': ['esp', 'fs'],
      '1979': ['esp', 'fs'],
      '1980': ['esp', 'fs'],
      '1981': ['esp', 'fs'],
      '1982': ['esp', 'fs'],
      '1983': ['esp', 'fs'],
      '1984': ['esp', 'fs'],
      '1985': ['esp', 'fs'],
      '1986': ['esp', 'fs'],
      '1987': ['esp', 'fs'],
      '1988': ['esp', 'fs'],
      '1989': ['esp', 'fs'],
      '1990': ['esp', 'fs'],
      '1991': ['esp', 'fs'],
      '1992': ['esp', 'fs'],
      '1993': ['esp', 'fs'],
      '1994': ['esp', 'fs'],
      '1995': ['esp', 'fs'],
      '1996': ['esp', 'fs'],
    },
    'XK8': {
      '1997': ['fs'],
      '1998': ['fs'],
      '1999': ['fs'],
      '2000': ['fs'],
      '2001': ['fs'],
      '2002': ['fs'],
      '2003': ['fs'],
      '2004': ['fs'],
      '2005': ['fs'],
      '2006': ['fs'],
    },
    'XK 120, 140, 150, & 160': {
      'all': ['esp'],
    },
    'XKE': {
      'all': ['cs'],
    },
    'XKE (6-cyl)': {
      '1961': ['fp'],
      '1962': ['fp'],
      '1963': ['fp'],
      '1964': ['fp'],
      '1965': ['fp'],
      '1966': ['fp'],
      '1967': ['fp'],
      '1968': ['fp'],
      '1969': ['fp'],
      '1970': ['fp'],
      '1971': ['fp'],
      '1972': ['fp'],
      '1973': ['fp'],
      '1974': ['fp'],
    },
    'XKE (V12)': {
      '1961': ['fp'],
      '1962': ['fp'],
      '1963': ['fp'],
      '1964': ['fp'],
      '1965': ['fp'],
      '1966': ['fp'],
      '1967': ['fp'],
      '1968': ['fp'],
      '1969': ['fp'],
      '1970': ['fp'],
      '1971': ['fp'],
      '1972': ['fp'],
      '1973': ['fp'],
      '1974': ['fp'],
    },
    'XKR Coupe': {
      'all': ['bs'],
    },
  },
  'Jensen': {
    'Jensen-Healey': {
      'all': ['cs', 'fsp', 'dp'],
    },
  },
  'Kia': {
    'Forte5': {
      '2014': ['hs'],
      '2015': ['hs'],
      '2016': ['hs'],
      '2017': ['hs'],
      '2018': ['hs'],
    },
    'Forte (non-turbo)': {
      'all': ['hs', 'sts', 'fsp'],
    },
    'Forte Koup (non-turbo)': {
      'all': ['hs', 'sts', 'dsp'],
    },
    'Forte Koup Turbo': {
      'all': ['hs', 'sth', 'dsp'],
    },
    'Forte Turbo': {
      'all': ['hs', 'sth', 'fsp'],
    },
    'Optima': {
      'all': ['hs'],
    },
    'Rio': {
      '2012': ['hs', 'sts'],
      '2013': ['hs', 'sts'],
      '2014': ['hs', 'sts'],
      '2015': ['hs', 'sts'],
      '2016': ['hs', 'sts'],
      '2017': ['hs', 'sts'],
      '2018': ['hs'],
      '2019': ['hs'],
      '2020': ['hs'],
    },
    'Sephia': {
      'all': ['hs'],
    },
    'Spectra': {
      'all': ['hs', 'fsp'],
    },
    'Stinger (4-cyl Turbo)': {
      '2018': ['gs'],
      '2019': ['gs'],
      '2020': ['gs'],
    },
    'Stinger (V6 Turbo)': {
      '2018': ['fs'],
      '2019': ['fs'],
      '2020': ['fs'],
    },
  },
  'Lancia': {
    'Beta': {
      '1975': ['hs', 'ep', 'fsp'],
      '1976': ['hs', 'ep', 'fsp'],
      '1977': ['hs', 'ep', 'fsp'],
      '1978': ['hs', 'ep', 'fsp'],
      '1979': ['hs', 'ep', 'fsp'],
      '1980': ['hs', 'ep', 'fsp'],
      '1981': ['hs', 'ep', 'fsp'],
      '1982': ['hs', 'ep', 'fsp'],
      '1983': ['hs', 'fsp'],
    },
    'Scorpion': {
      'all': ['hs', 'csp', 'dp'],
    },
    'Zagato': {
      '1975': ['fsp', 'ep'],
      '1976': ['fsp', 'ep'],
      '1977': ['fsp', 'ep'],
      '1978': ['fsp', 'ep'],
      '1979': ['fsp', 'ep'],
      '1980': ['fsp', 'ep'],
      '1981': ['fsp', 'ep'],
      '1982': ['fsp', 'ep'],
      '1983': ['fsp'],
    },
  },
  'Lexus': {
    'CT 200h': {
      '2011': ['hs', 'sts'],
      '2012': ['hs', 'sts'],
      '2013': ['hs', 'sts'],
      '2014': ['hs', 'sts'],
      '2015': ['hs', 'sts'],
      '2016': ['hs', 'sts'],
      '2017': ['hs'],
    },
    'ES 250': {
      'all': ['hs', 'esp'],
    },
    'ES 300': {
      'all': ['hs'],
    },
    'GS 300': {
      'all': ['hs'],
    },
    'GS 350': {
      '2005': ['ds'],
      '2006': ['ds'],
      '2007': ['ds'],
      '2008': ['ds'],
      '2009': ['ds'],
      '2010': ['ds'],
      '2011': ['ds'],
      '2012': ['ds'],
      '2013': ['ds'],
      '2014': ['ds'],
      '2015': ['ds'],
      '2016': ['ds'],
      '2017': ['ds'],
      '2018': ['ds'],
    },
    'GS 400': {
      '1998': ['esp', 'fs'],
      '1999': ['esp', 'fs'],
      '2000': ['esp', 'fs'],
    },
    'GS-F': {
      '2016': ['fs'],
      '2017': ['fs'],
      '2018': ['fs'],
      '2019': ['fs'],
      '2020': ['fs'],
    },
    'IS 250': {
      'all': ['stx'],
    },
    'IS 300': {
      '2000': ['dsp', 'stx'],
      '2001': ['dsp', 'stx', 'gs', 'fp'],
      '2002': ['dsp', 'stx', 'gs', 'fp'],
      '2003': ['dsp', 'stx', 'gs', 'fp'],
      '2004': ['dsp', 'stx', 'gs', 'fp'],
      '2005': ['dsp', 'stx', 'gs', 'fp'],
      '2007': ['dsp', 'stx'],
      '2008': ['dsp', 'stx'],
      '2009': ['dsp', 'stx'],
      '2010': ['dsp', 'stx'],
      '2011': ['dsp', 'stx'],
      '2012': ['dsp', 'stx'],
      '2013': ['dsp', 'stx'],
      '2014': ['dsp', 'stx'],
      '2015': ['dsp', 'stx'],
      '2016': ['dsp', 'stx'],
      '2017': ['dsp', 'stx'],
      '2018': ['dsp', 'stx'],
      '2019': ['dsp', 'stx'],
      '2020': ['dsp', 'stx'],
    },
    'IS 350': {
      'all': ['stx'],
    },
    'IS (all excl. IS-F)': {
      '2006': ['ds'],
      '2007': ['ds'],
      '2008': ['ds'],
      '2009': ['ds'],
      '2010': ['ds'],
      '2011': ['ds'],
      '2012': ['ds'],
      '2013': ['ds'],
      '2014': ['ds'],
      '2015': ['ds'],
      '2016': ['ds'],
      '2017': ['ds'],
      '2018': ['ds'],
      '2019': ['ds'],
      '2020': ['ds'],
    },
    'IS F': {
      '2008': ['esp', 'fs', 'stu'],
      '2009': ['esp', 'fs', 'stu'],
      '2010': ['esp', 'fs', 'stu'],
      '2011': ['esp', 'fs', 'stu'],
      '2012': ['esp', 'fs', 'stu'],
      '2013': ['esp', 'fs', 'stu'],
      '2014': ['esp', 'fs', 'stu'],
    },
    'LS 400': {
      'all': ['esp'],
    },
    'RC (non-F)': {
      '2015': ['fs'],
      '2016': ['fs'],
      '2017': ['fs'],
      '2018': ['fs'],
      '2019': ['fs'],
      '2020': ['fs'],
    },
    'RC-F': {
      '2015': ['bs'],
      '2016': ['bs'],
      '2017': ['bs'],
      '2018': ['bs'],
      '2019': ['bs'],
      '2020': ['bs'],
    },
    'SC 300': {
      '1992': ['gs', 'stx'],
      '1993': ['gs', 'stx'],
      '1994': ['gs', 'stx'],
      '1995': ['gs', 'stx'],
      '1996': ['gs', 'stx'],
      '1997': ['gs', 'stx'],
      '1998': ['gs', 'stx'],
      '1999': ['gs', 'stx'],
      '2000': ['gs', 'stx'],
    },
    'SC 400': {
      '1992': ['ds', 'esp'],
      '1993': ['ds', 'esp'],
      '1994': ['ds', 'esp'],
      '1995': ['ds', 'esp'],
      '1996': ['ds', 'esp'],
      '1997': ['ds', 'esp'],
      '1998': ['ds', 'esp'],
      '1999': ['ds', 'esp'],
      '2000': ['ds', 'esp'],
    },
  },
  'Lincoln': {
    'LS (V6)': {
      'all': ['hs'],
    },
    'LS (V8)': {
      '2000': ['fs'],
      '2001': ['fs', 'camc'],
      '2002': ['fs', 'camc'],
      '2003': ['fs', 'camc'],
      '2004': ['fs', 'camc'],
      '2005': ['fs', 'camc'],
      '2006': ['fs', 'camc'],
    },
    'MKZ': {
      '2006': ['gs'],
      '2007': ['gs'],
      '2008': ['gs'],
      '2009': ['gs'],
      '2010': ['gs'],
      '2011': ['gs'],
      '2012': ['gs'],
    },
    'MKZ (AWD)': {
      '2013': ['ds'],
      '2014': ['ds'],
      '2015': ['ds'],
      '2016': ['ds'],
      '2017': ['ds'],
      '2018': ['ds'],
      '2019': ['ds'],
      '2020': ['ds'],
    },
    'MKZ (FWD)': {
      '2013': ['gs'],
      '2014': ['gs'],
      '2015': ['gs'],
      '2016': ['gs'],
      '2017': ['gs'],
      '2018': ['gs'],
      '2019': ['gs'],
      '2020': ['gs'],
    },
    'Mark VIII': {
      '1993': ['fs', 'camt'],
      '1994': ['fs', 'camt'],
      '1995': ['fs', 'camt'],
      '1996': ['fs', 'camt'],
      '1997': ['fs', 'camt'],
      '1998': ['fs', 'camt'],
    },
  },
  'Lotus': {
    '7 & 7A': {
      'all': ['cs', 'ssp', 'dp'],
    },
    'Cortina': {
      'all': ['csp', 'hs'],
    },
    'Eclat': {
      'all': ['cs', 'ssp'],
    },
    'Elan': {
      'all': ['cs', 'dp', 'ssp'],
    },
    'Elise': {
      '1996': ['fp', 'ssm'],
      '1997': ['fp', 'ssm'],
      '1998': ['fp', 'ssm'],
      '1999': ['fp', 'ssm'],
      '2000': ['fp', 'ssm'],
      '2001': ['fp', 'ssm'],
      '2002': ['fp', 'ssm'],
      '2003': ['fp', 'ssm'],
      '2004': ['fp', 'ssm'],
      '2005': ['as', 'fp', 'ssm', 'ssp', 'ssr'],
      '2006': ['as', 'fp', 'ssm', 'ssp', 'ssr'],
      '2007': ['as', 'fp', 'ssm', 'ssp', 'ssr'],
      '2008': ['as', 'fp', 'ssm', 'ssp', 'ssr'],
      '2009': ['as', 'fp', 'ssm', 'ssp', 'ssr'],
      '2010': ['as', 'fp', 'ssm', 'ssp', 'ssr'],
      '2011': ['as', 'ssm', 'ssp', 'ssr'],
    },
    'Elise SC': {
      '2008': ['ss'],
      '2009': ['ss'],
      '2010': ['ss'],
      '2011': ['ss'],
    },
    'Elite': {
      'all': ['cs'],
    },
    'Elite 2+2': {
      'all': ['ssp'],
    },
    'Elite (1216 cc)': {
      'all': ['csp'],
    },
    'Esprit': {
      'all': ['cs', 'ssm', 'ssp'],
    },
    'Esprit Turbo': {
      '1996': ['as', 'ssp'],
      '1997': ['as', 'ssp'],
      '1998': ['as', 'ssp'],
      '1999': ['as', 'ssp'],
      '2000': ['as', 'ssp'],
      '2001': ['as', 'ssp'],
      '2002': ['as', 'ssp'],
      '2003': ['as', 'ssp'],
      '2004': ['as', 'ssp'],
    },
    'Europa': {
      'all': ['cs', 'dp', 'ssp'],
    },
    'Evora': {
      '2010': ['bs', 'ssm', 'ssp'],
      '2011': ['bs', 'ssm', 'ssp'],
      '2012': ['bs', 'ssm', 'ssp'],
      '2013': ['bs', 'ssm', 'ssp'],
      '2014': ['bs', 'ssm', 'ssp'],
      '2015': ['bs', 'ssm'],
    },
    'Evora 400': {
      'all': ['ss', 'ssp'],
    },
    'Evora 410 Sport': {
      '2018': ['ss'],
    },
    'Evora GT': {
      '2020': ['as'],
    },
    'Evora S': {
      '2010': ['ssp'],
      '2011': ['as', 'ssp', 'ssr'],
      '2012': ['as', 'ssp', 'ssr'],
      '2013': ['as', 'ssp', 'ssr'],
      '2014': ['as', 'ssp', 'ssr'],
      '2015': ['as', 'ssr'],
    },
    'Exige': {
      '1996': ['fp', 'ssm'],
      '1997': ['fp', 'ssm'],
      '1998': ['fp', 'ssm'],
      '1999': ['fp', 'ssm'],
      '2000': ['fp', 'ssm'],
      '2001': ['fp', 'ssm'],
      '2002': ['fp', 'ssm'],
      '2003': ['fp', 'ssm'],
      '2004': ['fp', 'ssm'],
      '2005': ['fp', 'ssm', 'ssp'],
      '2006': ['as', 'fp', 'ssm', 'ssp', 'ssr'],
      '2007': ['fp', 'ssm', 'ssp'],
      '2008': ['fp', 'ssm', 'ssp'],
      '2009': ['fp', 'ssm', 'ssp'],
      '2010': ['fp', 'ssm', 'ssp'],
      '2011': ['ssm', 'ssp'],
    },
    'Exige S': {
      '2005': ['ssp'],
      '2006': ['ssp'],
      '2007': ['ss', 'ssp'],
      '2008': ['ss', 'ssp'],
      '2009': ['ss', 'ssp'],
      '2010': ['ss', 'ssp'],
      '2011': ['ss', 'ssp'],
    },
    'Super 7 (1340 cc & 1498 cc)': {
      'all': ['dp'],
    },
  },
  'MG': {
    '1100, 1300 Sedan (all) ': {
      'all': ['hs', 'fsp'],
    },
    'A (all)': {
      'all': ['hs', 'fsp'],
    },
    'B & B GT (all)': {
      'all': ['hs', 'fsp'],
    },
    'C & C GT (all)': {
      'all': ['hs', 'fsp'],
    },
  },
  'Maserati': {
    'BiTurbo': {
      'all': ['cs', 'dsp'],
    },
    'Coupe': {
      '2002': ['bs'],
      '2003': ['bs'],
      '2004': ['bs'],
      '2005': ['bs'],
      '2006': ['bs'],
      '2007': ['bs'],
    },
    'GranSport': {
      '2004': ['bs'],
      '2005': ['bs'],
      '2006': ['bs'],
      '2007': ['bs'],
    },
    'Spyder': {
      '2002': ['bs'],
      '2003': ['bs'],
      '2004': ['bs'],
      '2005': ['bs'],
      '2006': ['bs'],
      '2007': ['bs'],
    },
  },
  'Mazda': {
    '626': {
      'all': ['hs', 'fsp', 'dp'],
    },
    '808': {
      'all': ['hs'],
    },
    '929': {
      'all': ['hs', 'esp'],
    },
    '323 (non-turbo)': {
      'all': ['hs', 'stx', 'fsp', 'ep'],
    },
    '323 GT Turbo': {
      'all': ['gs', 'sth', 'dsp'],
    },
    '323 GTX Turbo': {
      'all': ['gs', 'sth', 'dsp'],
    },
    'Cosmo': {
      'all': ['hs', 'fsp', 'dp'],
    },
    'MX-3': {
      'all': ['hs'],
    },
    'MX-5 Miata': {
      '1990': ['es', 'sts', 'csp', 'ssm', 'dp', 'xsb'],
      '1991': ['es', 'sts', 'csp', 'ssm', 'dp', 'xsb'],
      '1992': ['es', 'sts', 'csp', 'ssm', 'dp', 'xsb'],
      '1993': ['es', 'sts', 'csp', 'ssm', 'dp', 'xsb'],
      '1994': ['es', 'str', 'csp', 'ssm', 'dp', 'xsb'],
      '1995': ['es', 'str', 'csp', 'ssm', 'dp', 'xsb'],
      '1996': ['es', 'str', 'csp', 'ssm', 'dp', 'xsb'],
      '1997': ['es', 'str', 'csp', 'ssm', 'dp', 'xsb'],
      '1998': ['es', 'str', 'csp', 'ssm', 'dp', 'xsb'],
      '1999': ['es', 'str', 'csp', 'ssm', 'dp', 'xsb'],
      '2000': ['es', 'str', 'csp', 'ssm', 'dp', 'xsb'],
      '2001': ['es', 'str', 'csp', 'ssm', 'dp', 'xsb'],
      '2002': ['es', 'str', 'csp', 'ssm', 'dp', 'xsb'],
      '2003': ['es', 'str', 'csp', 'ssm', 'dp', 'xsb'],
      '2004': ['es', 'str', 'csp', 'ssm', 'dp', 'xsb'],
      '2005': ['es', 'str', 'csp', 'ssm', 'dp', 'xsb'],
      '2006': ['cs', 'str', 'csp', 'ssm', 'dp', 'xsb'],
      '2007': ['cs', 'str', 'csp', 'ssm', 'dp', 'xsb'],
      '2008': ['cs', 'str', 'csp', 'ssm', 'dp', 'xsb'],
      '2009': ['cs', 'str', 'csp', 'ssm', 'dp', 'xsb'],
      '2010': ['cs', 'str', 'csp', 'ssm', 'dp', 'xsb'],
      '2011': ['cs', 'str', 'csp', 'ssm', 'dp', 'xsb'],
      '2012': ['cs', 'str', 'csp', 'ssm', 'dp', 'xsb'],
      '2013': ['cs', 'str', 'csp', 'ssm', 'dp', 'xsb'],
      '2014': ['cs', 'str', 'csp', 'ssm', 'dp', 'xsb'],
      '2015': ['cs', 'str', 'csp', 'ssm', 'dp', 'xsb'],
      '2016': ['cs', 'str', 'bsp', 'ssm', 'dp', 'xsb'],
      '2017': ['cs', 'str', 'bsp', 'ssm', 'dp', 'xsb'],
      '2018': ['cs', 'str', 'bsp', 'ssm', 'dp', 'xsb'],
      '2019': ['cs', 'str', 'bsp', 'ssm', 'dp', 'xsb'],
      '2020': ['cs', 'str', 'dp', 'ssm', 'xsb'],
      '2021': ['cs', 'str', 'dp', 'ssm', 'xsb'],
    },
    'MX-5 Miata First Generation (NA) non-Torsen differential': {
      '1990': ['es', 'sts', 'csp', 'ssm', 'dp', 'xsb'],
      '1991': ['es', 'sts', 'csp', 'ssm', 'dp', 'xsb'],
      '1992': ['es', 'sts', 'csp', 'ssm', 'dp', 'xsb'],
      '1993': ['es', 'sts', 'csp', 'ssm', 'dp', 'xsb'],
      '1994': ['es', 'sts', 'csp', 'ssm', 'dp', 'xsb'],
      '1995': ['es', 'sts', 'csp', 'ssm', 'dp', 'xsb'],
      '1996': ['es', 'sts', 'csp', 'ssm', 'dp', 'xsb'],
      '1997': ['es', 'sts', 'csp', 'ssm', 'dp', 'xsb'],
    },
    'MX-5 Miata MS-R': {
      '2007': ['bs', 'ssm', 'xsb'],
    },
    'MX-6': {
      'all': ['hs', 'dsp', 'ep'],
    },
    'Mazda2': {
      '2011': ['hs', 'sts', 'fsp', 'ep'],
      '2012': ['hs', 'sts', 'fsp', 'ep'],
      '2013': ['hs', 'sts', 'fsp', 'ep'],
      '2014': ['hs', 'sts', 'fsp', 'ep'],
    },
    'Mazda3': {
      '2004': ['hs', 'sts', 'fsp'],
      '2005': ['hs', 'sts', 'fsp'],
      '2006': ['hs', 'sts', 'fsp'],
      '2007': ['hs', 'sts', 'fsp'],
      '2008': ['hs', 'sts', 'fsp'],
      '2009': ['hs', 'sts', 'fsp'],
      '2010': ['hs', 'sts', 'fsp'],
      '2011': ['hs', 'sts', 'fsp'],
      '2012': ['hs', 'sts', 'fsp'],
      '2013': ['hs', 'sts', 'fsp'],
      '2014': ['hs', 'sts', 'fsp'],
      '2015': ['hs', 'sts', 'fsp'],
      '2016': ['hs', 'sts', 'fsp'],
      '2017': ['hs', 'sts', 'fsp'],
      '2018': ['hs', 'sts', 'fsp'],
      '2019': ['hs', 'sts', 'fsp'],
      '2020': ['hs', 'sts', 'fsp'],
      '2021': ['hs', 'sts', 'fsp'],
    },
    'Mazda6': {
      'all': ['hs', 'sts', 'dsp'],
    },
    'Mazdaspeed3': {
      'all': ['gs', 'sth', 'dsp'],
    },
    'Mazdaspeed6': {
      'all': ['ds', 'sth', 'esp'],
    },
    'Mazdaspeed Miata': {
      '2004': ['es', 'stu', 'bsp', 'ssm', 'fp', 'xsb'],
      '2005': ['es', 'stu', 'bsp', 'ssm', 'fp', 'xsb'],
    },
    'Mazdaspeed Prot\u00e9g\u00e9': {
      'all': ['gs', 'sth', 'dsp', 'fp'],
    },
    'Miata Club Sport': {
      '2003': ['bs', 'ssm', 'dp'],
    },
    'Millenia': {
      'all': ['hs'],
    },
    'Prot\u00e9g\u00e9': {
      'all': ['hs', 'sts', 'fsp'],
    },
    'R100': {
      'all': ['hs', 'fsp'],
    },
    'RX-2': {
      'all': ['hs', 'csp'],
    },
    'RX-3': {
      'all': ['hs', 'csp'],
    },
    'RX-4': {
      'all': ['hs', 'fsp'],
    },
    'RX-7 Non-Turbo': {
      'all': ['es', 'sts', 'csp'],
    },
    'RX-7 Turbo': {
      '1987': ['cs', 'str', 'bsp'],
      '1988': ['cs', 'str', 'bsp'],
      '1989': ['cs', 'str', 'bsp'],
      '1990': ['cs', 'str', 'bsp'],
      '1991': ['cs', 'str', 'bsp'],
      '1992': ['cs', 'str', 'bsp'],
      '1993': ['as', 'str', 'asp'],
      '1994': ['as', 'str', 'asp'],
      '1995': ['as', 'str', 'asp'],
    },
    'RX-8': {
      'all': ['cs', 'stx', 'dsp'],
    },
    'Spec Miata': {
      'all': ['dsp'],
    },
  },
  'McLaren': {
    '570GT': {
      'all': ['ss'],
    },
    '570S': {
      'all': ['ss'],
    },
    '600LT (limited prep)': {
      'all': ['ssp'],
    },
    '620R (limited prep)': {
      'all': ['ssp'],
    },
    '650S': {
      'all': ['ss'],
    },
    '720S': {
      'all': ['ssp'],
    },
    'MP4-12C': {
      'all': ['ss', 'ssm', 'ssp'],
    },
  },
  'Mercedes': {
    '280': {
      '1995': ['hs'],
      '1996': ['hs'],
      '1997': ['hs'],
      '1998': ['hs'],
      '1999': ['hs'],
      '2000': ['hs'],
    },
    '190 (all, non-16v)': {
      '1984': ['gs', 'dsp', 'dp'],
      '1985': ['gs', 'dsp', 'dp'],
      '1986': ['gs', 'dsp', 'dp'],
      '1987': ['gs', 'dsp', 'dp'],
      '1988': ['gs', 'dsp', 'dp'],
      '1989': ['gs', 'dsp', 'dp'],
      '1990': ['gs', 'dsp', 'dp'],
      '1991': ['gs', 'dsp', 'dp'],
      '1992': ['gs', 'dsp', 'dp'],
      '1993': ['gs', 'dsp', 'dp'],
    },
    '190E (16v)': {
      '1983': ['gs', 'csp', 'dp'],
      '1984': ['gs', 'csp', 'dp'],
      '1985': ['gs', 'csp', 'dp'],
      '1986': ['gs', 'csp', 'dp'],
      '1987': ['gs', 'csp', 'dp'],
      '1988': ['gs', 'csp', 'dp'],
      '1989': ['gs', 'csp', 'dp'],
      '1990': ['gs', 'csp', 'dp'],
      '1991': ['gs', 'csp', 'dp'],
      '1992': ['gs', 'csp', 'dp'],
      '1993': ['gs', 'csp', 'dp'],
    },
    '220, 230, 250, & 280 Sedans (all)': {
      'all': ['esp'],
    },
    '230SL, 250SL, & 280SL (all)': {
      'all': ['esp'],
    },
    '280 (4.5L, all) & 300 (6.3, all)': {
      'all': ['esp'],
    },
    '350SL, 380SL, & 450SL (all)': {
      'all': ['esp'],
    },
    'AMG (Not Otherwise Classified)': {
      'all': ['ss', 'ssr'],
    },
    'AMG GT, GTC, GTR, GTS': {
      '2015': ['ss'],
      '2016': ['ss'],
      '2017': ['ss'],
      '2018': ['ss'],
      '2019': ['ss'],
      '2020': ['ss'],
    },
    'C32 AMG': {
      '2002': ['bs'],
      '2003': ['bs'],
      '2004': ['bs'],
    },
    'C36 AMG': {
      'all': ['fs'],
    },
    'C55 AMG': {
      '2005': ['fs'],
      '2006': ['fs'],
    },
    'C63 AMG (non-Black Series)': {
      '2008': ['fs'],
      '2009': ['fs'],
      '2010': ['fs'],
      '2011': ['fs'],
      '2012': ['fs'],
      '2013': ['fs'],
      '2014': ['fs'],
      '2015': ['fs'],
      '2016': ['fs'],
      '2017': ['fs'],
      '2018': ['fs'],
      '2019': ['fs'],
      '2020': ['fs'],
    },
    'C230': {
      '1999': ['gs', 'dsp'],
      '2000': ['gs', 'dsp'],
      '2001': ['gs', 'dsp'],
      '2002': ['gs', 'dsp'],
      '2003': ['gs', 'dsp'],
      '2004': ['gs', 'dsp'],
      '2005': ['gs', 'dsp'],
      '2006': ['gs', 'dsp'],
      '2007': ['gs', 'dsp'],
    },
    'C300': {
      '2007': ['fs'],
      '2008': ['fs'],
      '2009': ['fs'],
      '2010': ['fs'],
      '2011': ['fs'],
      '2012': ['fs'],
      '2013': ['fs'],
      '2014': ['fs'],
      '2015': ['fs'],
      '2016': ['fs'],
      '2017': ['fs'],
      '2018': ['fs'],
      '2019': ['fs'],
      '2020': ['fs'],
    },
    'C450 & C43 AMG': {
      '2015': ['fs'],
      '2016': ['fs'],
      '2017': ['fs'],
      '2018': ['fs'],
      '2019': ['fs'],
      '2020': ['fs'],
    },
    'C-Class (6-cyl, non-AMG)': {
      '2001': ['ds'],
      '2002': ['ds'],
      '2003': ['ds'],
      '2004': ['ds'],
      '2005': ['ds'],
      '2006': ['ds'],
      '2007': ['ds'],
      '2008': ['ds'],
      '2009': ['ds'],
      '2010': ['ds'],
      '2011': ['ds'],
      '2012': ['ds'],
      '2013': ['ds'],
      '2014': ['ds'],
      '2015': ['ds'],
      '2016': ['ds'],
    },
    'CLA45 AMG': {
      '2014': ['bs'],
      '2015': ['bs'],
      '2016': ['bs'],
      '2017': ['bs'],
      '2018': ['bs'],
      '2019': ['bs'],
      '2020': ['bs'],
    },
    'CLA250 4matic': {
      'all': ['ds'],
    },
    'CLA250 (FWD)': {
      'all': ['gs'],
    },
    'CLK55': {
      '2001': ['stu'],
      '2002': ['stu'],
      '2003': ['stu'],
      '2004': ['stu'],
      '2005': ['stu'],
      '2006': ['stu'],
    },
    'CLK55 AMG': {
      '2001': ['bs'],
      '2002': ['bs'],
      '2003': ['bs'],
      '2004': ['bs'],
      '2005': ['bs'],
      '2006': ['bs'],
    },
    'CLK430': {
      '1999': ['stu'],
      '2000': ['stu'],
      '2001': ['stu'],
      '2002': ['stu'],
      '2003': ['stu'],
    },
    'CLK 320 & CLK 32 AMG': {
      'all': ['asp'],
    },
    'CLK (V6)': {
      '1998': ['ds'],
      '1999': ['ds'],
      '2000': ['ds'],
      '2001': ['ds'],
      '2002': ['ds'],
      '2003': ['ds'],
      '2004': ['ds'],
      '2005': ['ds'],
      '2006': ['ds'],
      '2007': ['ds'],
      '2008': ['ds'],
      '2009': ['ds'],
    },
    'CLK (non-V6)': {
      'all': ['fs'],
    },
    'E55 AMG': {
      'all': ['fs'],
    },
    'E63 AMG': {
      '2010': ['bs', 'asp'],
      '2011': ['bs', 'asp'],
      '2012': ['bs', 'asp'],
      '2013': ['bs', 'asp'],
      '2014': ['bs', 'asp'],
      '2015': ['bs', 'asp'],
      '2016': ['bs', 'asp'],
    },
    'E550 (non-AMG)': {
      '2014': ['stu'],
      '2015': ['stu'],
      '2016': ['stu'],
    },
    'E Class (W212 chassis; non-AMG)': {
      '2009': ['fs'],
      '2010': ['fs'],
      '2011': ['fs'],
      '2012': ['fs'],
      '2013': ['fs'],
      '2014': ['fs'],
      '2015': ['fs'],
      '2016': ['fs'],
      '2017': ['fs'],
      '2018': ['fs'],
      '2019': ['fs'],
      '2020': ['fs'],
    },
    'GLA45 AMG': {
      '2015': ['bs'],
      '2016': ['bs'],
      '2017': ['bs'],
      '2018': ['bs'],
      '2019': ['bs'],
    },
    'GLA250 4matic': {
      'all': ['ds'],
    },
    'GLA250 (FWD)': {
      'all': ['gs'],
    },
    'Not Otherwise Classified': {
      'all': ['hs'],
    },
    'SLK32 AMG': {
      '2002': ['bs'],
      '2003': ['bs'],
      '2004': ['bs'],
    },
    'SLK55 AMG': {
      '2005': ['bs', 'asp'],
      '2006': ['bs', 'asp'],
      '2007': ['bs', 'asp'],
      '2008': ['bs', 'asp'],
      '2009': ['bs', 'asp'],
      '2010': ['bs', 'asp'],
      '2011': ['bs', 'asp'],
      '2012': ['as'],
      '2013': ['as'],
      '2014': ['as'],
      '2015': ['as'],
      '2016': ['as'],
    },
    'SLK350': {
      '2005': ['bs'],
      '2006': ['bs'],
      '2007': ['bs'],
      '2008': ['bs'],
      '2009': ['bs'],
      '2010': ['bs'],
      '2011': ['bs'],
      '2012': ['bs'],
      '2013': ['bs'],
      '2014': ['bs'],
      '2015': ['bs'],
      '2016': ['bs'],
    },
    'SLK 230 Kompressor': {
      '1996': ['cs', 'str'],
      '1997': ['cs', 'str'],
      '1998': ['cs', 'str'],
      '1999': ['cs', 'str'],
      '2000': ['cs', 'str'],
      '2001': ['cs', 'str'],
      '2002': ['cs', 'str'],
      '2003': ['cs', 'str'],
      '2004': ['cs', 'str'],
    },
    'SLK (Not Otherwise Classified)': {
      'all': ['cs'],
    },
    'Sedans': {
      'all': ['esp'],
    },
  },
  'Mercury': {
    'Bobcat': {
      'all': ['hs'],
    },
    'Capri (6-cyl)': {
      '1979': ['hs', 'dsp', 'cp', 'camt'],
      '1980': ['hs', 'dsp', 'cp', 'camt'],
      '1981': ['hs', 'dsp', 'cp', 'camt'],
      '1982': ['hs', 'dsp', 'cp', 'camt'],
      '1983': ['hs', 'dsp', 'cp', 'camt'],
      '1984': ['hs', 'dsp', 'cp', 'camt'],
      '1985': ['hs', 'dsp', 'cp', 'camt'],
      '1986': ['hs', 'dsp', 'cp', 'camt'],
      '1987': ['hs', 'dsp', 'cp', 'camt'],
      '1988': ['hs', 'dsp', 'cp', 'camt'],
      '1989': ['hs', 'dsp', 'cp', 'camt'],
      '1990': ['hs', 'dsp', 'cp', 'camt'],
      '1991': ['hs', 'dsp', 'cp', 'camt'],
      '1992': ['hs', 'dsp', 'cp', 'camt'],
      '1993': ['hs', 'dsp', 'cp', 'camt'],
    },
    'Capri (8-cyl)': {
      '1979': ['fs', 'cp', 'camt'],
      '1980': ['fs', 'cp', 'camt'],
      '1981': ['fs', 'cp', 'camt'],
      '1982': ['fs', 'cp', 'camt'],
      '1983': ['fs', 'cp', 'camt'],
      '1984': ['fs', 'cp', 'camt'],
      '1985': ['fs', 'cp', 'camt'],
      '1986': ['fs', 'cp', 'camt'],
      '1987': ['fs', 'cp', 'camt'],
      '1988': ['fs', 'cp', 'camt'],
      '1989': ['fs', 'cp', 'camt'],
      '1990': ['fs', 'cp', 'camt'],
      '1991': ['fs', 'dsp', 'cp', 'camt'],
      '1992': ['fs', 'dsp', 'cp', 'camt'],
      '1993': ['fs', 'dsp', 'cp', 'camt'],
    },
    'Capri (non-US)': {
      '1969': ['hs', 'dp'],
      '1970': ['hs', 'dp'],
      '1971': ['hs', 'dp'],
      '1972': ['hs', 'dp'],
      '1973': ['hs', 'dp'],
      '1974': ['hs', 'dp'],
      '1975': ['hs', 'dp'],
      '1976': ['hs', 'dp'],
      '1977': ['hs', 'dp'],
    },
    'Capri II': {
      '1976': ['fsp'],
      '1977': ['fsp'],
    },
    'Capri Turbo (4-cyl)': {
      '1979': ['hs', 'dsp', 'cp', 'camt'],
      '1980': ['hs', 'dsp', 'cp', 'camt'],
      '1981': ['hs', 'dsp', 'cp', 'camt'],
      '1982': ['hs', 'dsp', 'cp', 'camt'],
      '1983': ['hs', 'dsp', 'cp', 'camt'],
      '1984': ['hs', 'dsp', 'cp', 'camt'],
      '1985': ['hs', 'dsp', 'cp', 'camt'],
      '1986': ['hs', 'dsp', 'cp', 'camt'],
      '1987': ['hs', 'dsp', 'cp', 'camt'],
      '1988': ['hs', 'dsp', 'cp', 'camt'],
      '1989': ['hs', 'dsp', 'cp', 'camt'],
      '1990': ['hs', 'dsp', 'cp', 'camt'],
      '1991': ['hs', 'dsp', 'cp', 'camt'],
      '1992': ['hs', 'dsp', 'cp', 'camt'],
      '1993': ['hs', 'dsp', 'cp', 'camt'],
    },
    'Comet (6-cyl & 8cyl)': {
      '1970': ['cp', 'camt'],
      '1971': ['cp', 'camt'],
      '1972': ['cp', 'camt'],
      '1973': ['cp', 'camt'],
      '1974': ['cp', 'camt'],
      '1975': ['cp', 'camt'],
      '1976': ['cp', 'camt'],
      '1977': ['cp', 'camt'],
    },
    'Cougar (4-cyl & V6 non-S/C)': {
      'all': ['hs', 'esp'],
    },
    'Cougar (V8 & V6 Supercharged)': {
      '1989': ['gs', 'esp', 'camt'],
      '1990': ['gs', 'esp', 'camt'],
      '1991': ['gs', 'esp', 'camt'],
      '1992': ['gs', 'esp', 'camt'],
      '1993': ['gs', 'esp', 'camt'],
      '1994': ['gs', 'esp', 'camt'],
      '1995': ['gs', 'esp', 'camt'],
      '1996': ['gs', 'esp', 'camt'],
      '1997': ['gs', 'esp', 'camt'],
    },
    'Cougar (V8)': {
      '1967': ['fs', 'esp', 'camt'],
      '1968': ['fs', 'esp', 'camt'],
      '1969': ['fs', 'esp', 'camt'],
      '1970': ['fs', 'esp', 'camt'],
      '1971': ['fs', 'esp', 'camt'],
      '1972': ['fs', 'esp', 'camt'],
      '1973': ['fs', 'esp', 'camt'],
      '1974': ['fs', 'esp', 'camt'],
      '1975': ['fs', 'esp', 'camt'],
      '1976': ['fs', 'esp', 'camt'],
      '1977': ['fs', 'esp', 'camt'],
      '1978': ['fs', 'esp', 'camt'],
      '1979': ['fs', 'esp', 'camt'],
      '1980': ['fs', 'esp', 'camt'],
      '1981': ['fs', 'esp', 'camt'],
      '1982': ['fs', 'esp', 'camt'],
      '1983': ['fs', 'esp', 'camt'],
      '1984': ['fs', 'esp', 'camt'],
      '1985': ['fs', 'esp', 'camt'],
      '1986': ['fs', 'esp', 'camt'],
      '1987': ['fs', 'esp', 'camt'],
      '1988': ['fs', 'esp', 'camt'],
    },
    'LN-7': {
      'all': ['hs'],
    },
    'Lynx': {
      'all': ['hs'],
    },
    'Milan': {
      'all': ['hs'],
    },
    'Milan (6-cyl)': {
      '2006': ['dsp'],
      '2007': ['dsp'],
      '2008': ['dsp'],
      '2009': ['dsp'],
      '2010': ['dsp'],
      '2011': ['dsp'],
      '2012': ['dsp'],
      '2013': ['dsp'],
    },
    'Montego': {
      'all': ['hs'],
    },
    'Mystique': {
      'all': ['hs'],
    },
    'Sable': {
      'all': ['hs'],
    },
    'Scorpio': {
      'all': ['hs'],
    },
    'Topaz': {
      'all': ['hs'],
    },
    'Tracer': {
      'all': ['hs'],
    },
  },
  'Mini': {
    'Clubman (non-S, non-JCW)': {
      '2008': ['hs'],
      '2009': ['hs'],
      '2010': ['hs'],
      '2011': ['hs'],
      '2012': ['hs'],
      '2013': ['hs'],
      '2014': ['hs'],
    },
    'Clubman John Cooper WorksAll4': {
      '2017': ['ds'],
      '2018': ['ds'],
      '2019': ['ds'],
      '2020': ['ds'],
    },
    'Cooper (non-S)': {
      '2000': ['sts'],
      '2001': ['sts'],
      '2002': ['sts'],
      '2003': ['sts'],
      '2004': ['sts'],
      '2005': ['sts'],
      '2006': ['sts'],
      '2007': ['sts'],
      '2008': ['sts'],
      '2009': ['sts'],
      '2010': ['sts'],
      '2011': ['sts'],
      '2012': ['sts'],
      '2013': ['sts'],
      '2014': ['stu'],
      '2015': ['stu'],
      '2016': ['stu'],
      '2017': ['stu'],
      '2018': ['stu'],
      '2019': ['stu'],
    },
    'Cooper Clubman (non-S, non-JCW)': {
      '2016': ['gs'],
      '2017': ['gs'],
      '2018': ['gs'],
      '2019': ['gs'],
      '2020': ['gs'],
    },
    'Cooper Clubman JCW': {
      '2009': ['ds'],
      '2010': ['ds'],
      '2011': ['ds'],
      '2012': ['ds'],
      '2013': ['ds'],
      '2014': ['ds'],
    },
    'Cooper Clubman S': {
      '2008': ['ds'],
      '2009': ['ds'],
      '2010': ['ds'],
      '2011': ['ds'],
      '2012': ['ds'],
      '2013': ['ds'],
      '2014': ['ds'],
      '2016': ['ds'],
      '2017': ['ds'],
      '2018': ['ds'],
      '2019': ['ds'],
      '2020': ['ds'],
    },
    'Cooper Coupe (non-S, non-JCW)': {
      '2012': ['hs'],
      '2013': ['hs'],
      '2014': ['hs'],
      '2015': ['hs'],
    },
    'Cooper Coupe JCW': {
      '2013': ['ds'],
      '2014': ['ds'],
      '2015': ['ds'],
    },
    'Cooper Coupe S': {
      '2013': ['ds'],
      '2014': ['ds'],
      '2015': ['ds'],
    },
    'Cooper Hardtop (non-S, non-JCW)': {
      '2002': ['hs'],
      '2003': ['hs'],
      '2004': ['hs'],
      '2005': ['hs'],
      '2006': ['hs'],
      '2007': ['hs'],
      '2008': ['hs'],
      '2009': ['hs'],
      '2010': ['hs'],
      '2011': ['hs'],
      '2012': ['hs'],
      '2013': ['hs'],
      '2014': ['gs'],
      '2015': ['gs'],
      '2016': ['gs'],
      '2017': ['gs'],
      '2018': ['gs'],
      '2019': ['gs'],
      '2020': ['gs'],
    },
    'Cooper Hardtop JCW': {
      '2006': ['ds'],
      '2007': ['ds'],
      '2008': ['ds'],
      '2009': ['ds'],
      '2010': ['ds'],
      '2011': ['ds'],
      '2012': ['ds'],
      '2013': ['ds'],
      '2014': ['ds'],
      '2015': ['ds'],
      '2016': ['ds'],
      '2017': ['ds'],
      '2018': ['ds'],
      '2019': ['ds'],
      '2020': ['ds'],
    },
    'Cooper Hardtop S': {
      '2002': ['ds'],
      '2003': ['ds'],
      '2004': ['ds'],
      '2005': ['ds'],
      '2006': ['ds'],
      '2007': ['ds'],
      '2008': ['ds'],
      '2009': ['ds'],
      '2010': ['ds'],
      '2011': ['ds'],
      '2012': ['ds'],
      '2013': ['ds'],
      '2014': ['ds'],
      '2015': ['ds'],
      '2016': ['ds'],
      '2017': ['ds'],
      '2018': ['ds'],
      '2019': ['ds'],
      '2020': ['ds'],
    },
    'Cooper Roadster (non-S, non-JCW)': {
      '2012': ['hs'],
      '2013': ['hs'],
      '2014': ['hs'],
      '2015': ['hs'],
    },
    'Cooper Roadster JCW': {
      '2012': ['ds'],
      '2013': ['ds'],
      '2014': ['ds'],
      '2015': ['ds'],
    },
    'Cooper Roadster S': {
      '2012': ['ds'],
      '2013': ['ds'],
      '2014': ['ds'],
      '2015': ['ds'],
    },
    'Cooper S & Cooper S JCW': {
      '2001': ['stx'],
      '2002': ['stx'],
      '2003': ['stx'],
      '2004': ['stx'],
      '2005': ['stx'],
      '2006': ['stx'],
      '2007': ['stu'],
      '2008': ['stu'],
      '2009': ['stu'],
      '2010': ['stu'],
      '2011': ['stu'],
      '2012': ['stu'],
      '2013': ['stu'],
      '2014': ['stu'],
      '2015': ['stu'],
      '2016': ['stu'],
      '2017': ['stu'],
      '2018': ['stu'],
      '2019': ['stu'],
    },
    'Cooper S (including JCW & JCWGP except Countryman)': {
      'all': ['dsp'],
    },
    'Cooper SE': {
      '2020': ['gs'],
    },
  },
  'Mitsubishi': {
    '3000 GT (non-turbo)': {
      'all': ['hs', 'esp'],
    },
    '3000 GT Turbo': {
      'all': ['fs', 'asp'],
    },
    'Cordia': {
      'all': ['hs', 'fsp', 'ep'],
    },
    'Eclipse Turbo (AWD)': {
      'all': ['ds', 'sth', 'dsp', 'fp'],
    },
    'Eclipse V6': {
      '1999': ['hs', 'stx', 'dsp'],
      '2000': ['hs', 'stx', 'dsp'],
      '2001': ['hs', 'stx', 'dsp'],
      '2002': ['hs', 'stx', 'dsp'],
      '2003': ['hs', 'stx', 'dsp'],
      '2004': ['hs', 'stx', 'dsp'],
      '2005': ['hs', 'stx', 'dsp'],
      '2006': ['hs', 'stx', 'dsp'],
      '2007': ['hs', 'stx', 'dsp'],
      '2008': ['hs', 'stx', 'dsp'],
      '2009': ['hs', 'stx', 'dsp'],
      '2010': ['hs', 'stx', 'dsp'],
      '2011': ['hs', 'stx', 'dsp'],
      '2012': ['hs', 'stx', 'dsp'],
    },
    'Eclipse all (FWD)': {
      '1989': ['hs', 'dsp', 'fp'],
      '1990': ['hs', 'dsp', 'fp'],
      '1991': ['hs', 'dsp', 'fp'],
      '1992': ['hs', 'dsp', 'fp'],
      '1993': ['hs', 'dsp', 'fp'],
      '1994': ['hs', 'dsp', 'fp'],
      '1995': ['hs', 'dsp', 'fp'],
      '1996': ['hs', 'dsp', 'fp'],
      '1997': ['hs', 'dsp', 'fp'],
      '1998': ['hs', 'dsp', 'fp'],
      '1999': ['hs', 'dsp', 'fp'],
      '2000': ['hs', 'dsp', 'fp'],
      '2001': ['hs', 'dsp', 'fp'],
      '2002': ['hs', 'dsp', 'fp'],
      '2003': ['hs', 'dsp', 'fp'],
      '2004': ['hs', 'dsp', 'fp'],
      '2005': ['hs', 'dsp', 'fp'],
      '2006': ['hs', 'dsp', 'fp'],
      '2007': ['hs', 'dsp', 'fp'],
      '2008': ['hs', 'dsp', 'fp'],
      '2009': ['hs', 'dsp', 'fp'],
      '2010': ['hs', 'dsp', 'fp'],
      '2011': ['hs', 'dsp', 'fp'],
      '2012': ['hs', 'dsp', 'fp'],
    },
    'Galant (4-cyl non-turbo)': {
      'all': ['hs', 'dsp', 'ep'],
    },
    'Galant (V6 & 4-cyl Turbo)': {
      'all': ['gs', 'dsp'],
    },
    'Lancer (non-turbo)': {
      'all': ['hs', 'sts', 'fsp'],
    },
    'Lancer Evolution': {
      '2003': ['ds', 'stu', 'asp', 'fp'],
      '2004': ['ds', 'stu', 'asp', 'fp'],
      '2005': ['ds', 'stu', 'asp', 'fp'],
      '2006': ['ds', 'stu', 'asp', 'fp'],
      '2007': ['ds', 'stu', 'asp'],
      '2008': ['ds', 'stu', 'asp'],
      '2009': ['ds', 'stu', 'asp'],
      '2010': ['ds', 'stu', 'asp'],
      '2011': ['ds', 'stu', 'asp'],
      '2012': ['ds', 'stu', 'asp'],
      '2013': ['ds', 'stu', 'asp'],
      '2014': ['ds', 'stu'],
      '2015': ['ds', 'stu'],
    },
    'Lancer Ralliart': {
      '2009': ['ds', 'sth'],
      '2010': ['ds', 'sth'],
      '2011': ['ds'],
      '2012': ['ds'],
      '2013': ['ds'],
      '2014': ['ds'],
      '2015': ['ds'],
    },
    'Mirage (non-turbo)': {
      '1978': ['hs', 'ep'],
      '1979': ['hs', 'ep'],
      '1980': ['hs', 'ep'],
      '1981': ['hs', 'ep'],
      '1982': ['hs', 'ep'],
      '1983': ['hs', 'ep'],
      '1984': ['hs', 'fsp', 'ep'],
      '1985': ['hs', 'fsp', 'ep'],
      '1986': ['hs', 'fsp', 'ep'],
      '1987': ['hs', 'fsp', 'ep'],
      '1988': ['hs', 'fsp', 'ep'],
      '1989': ['hs', 'fsp', 'ep'],
      '1990': ['hs', 'fsp', 'ep'],
      '1991': ['hs', 'fsp', 'ep'],
      '1992': ['hs', 'fsp', 'ep'],
      '1993': ['hs', 'fsp', 'ep'],
      '1994': ['hs', 'fsp', 'ep'],
      '1995': ['hs', 'fsp', 'ep'],
      '1996': ['hs', 'fsp', 'ep'],
      '1997': ['hs', 'fsp'],
      '1998': ['hs', 'fsp'],
      '1999': ['hs', 'fsp'],
      '2000': ['hs', 'fsp'],
      '2001': ['hs', 'fsp'],
      '2002': ['hs', 'fsp'],
      '2003': ['hs', 'fsp'],
    },
    'Mirage Turbo': {
      '1978': ['hs', 'ep'],
      '1979': ['hs', 'ep'],
      '1980': ['hs', 'ep'],
      '1981': ['hs', 'ep'],
      '1982': ['hs', 'ep'],
      '1983': ['hs', 'ep'],
      '1984': ['hs', 'dsp', 'ep'],
      '1985': ['hs', 'dsp', 'ep'],
      '1986': ['hs', 'dsp', 'ep'],
      '1987': ['hs', 'dsp', 'ep'],
      '1988': ['hs', 'dsp', 'ep'],
      '1989': ['hs', 'dsp', 'ep'],
      '1990': ['hs', 'dsp', 'ep'],
      '1991': ['hs', 'dsp', 'ep'],
      '1992': ['hs', 'dsp', 'ep'],
      '1993': ['hs', 'ep'],
      '1994': ['hs', 'ep'],
      '1995': ['hs', 'ep'],
      '1996': ['hs', 'ep'],
      '1997': ['hs', 'ep'],
      '1998': ['hs', 'ep'],
      '1999': ['hs', 'ep'],
      '2000': ['hs', 'ep'],
      '2001': ['hs', 'ep'],
      '2002': ['hs', 'ep'],
      '2003': ['hs', 'ep'],
    },
    'Precis': {
      'all': ['hs'],
    },
    'Premier': {
      'all': ['hs'],
    },
    'Starion (non-turbo)': {
      'all': ['hs'],
    },
    'Starion Turbo': {
      'all': ['gs', 'esp', 'fp'],
    },
    'Tredia (non-turbo)': {
      'all': ['hs', 'fsp'],
    },
    'Tredia Turbo': {
      'all': ['hs', 'dsp'],
    },
  },
  'Morgan': {
    '4/4': {
      'all': ['es', 'csp', 'dp'],
    },
    'Plus 4': {
      'all': ['es', 'fsp'],
    },
    'Plus 8': {
      'all': ['as', 'fp'],
    },
    'Roadster (V6)': {
      'all': ['as'],
    },
    'V8 (all)': {
      'all': ['ssp'],
    },
  },
  'Nissan': {
    '210': {
      '1978': ['dp', 'fsp'],
      '1979': ['dp', 'fsp'],
      '1980': ['dp', 'fsp'],
      '1981': ['dp', 'fsp'],
      '1982': ['dp', 'fsp'],
    },
    '310': {
      'all': ['fsp'],
    },
    '510': {
      '1968': ['fsp', 'dp'],
      '1969': ['fsp', 'dp'],
      '1970': ['fsp', 'dp'],
      '1971': ['fsp', 'dp'],
      '1972': ['fsp', 'dp'],
      '1973': ['fsp', 'dp'],
      '1978': ['fsp', 'dp'],
      '1979': ['fsp', 'dp'],
      '1980': ['fsp', 'dp'],
      '1981': ['fsp', 'dp'],
    },
    '610': {
      'all': ['fsp', 'dp'],
    },
    '710': {
      'all': ['fsp', 'dp'],
    },
    '810': {
      '1976': ['dp'],
      '1977': ['dp'],
      '1978': ['dp'],
      '1979': ['dp'],
      '1980': ['dp'],
    },
    '1200': {
      'all': ['fsp'],
    },
    '200SX': {
      '1976': ['dsp', 'hs', 'fsp'],
      '1977': ['dsp', 'hs', 'dp', 'fsp'],
      '1978': ['dsp', 'hs', 'dp', 'fsp'],
      '1979': ['dsp', 'hs', 'dp', 'fsp'],
      '1980': ['dsp', 'hs', 'dp', 'fsp'],
      '1981': ['dsp', 'hs', 'dp', 'fsp'],
      '1982': ['dsp', 'hs', 'dp', 'fsp'],
      '1983': ['dsp', 'hs', 'dp', 'fsp'],
      '1984': ['dsp', 'hs', 'dp', 'fsp'],
      '1985': ['dsp', 'hs', 'dp', 'fsp'],
      '1986': ['dsp', 'hs', 'dp', 'fsp'],
      '1987': ['dsp', 'hs', 'dp', 'fsp'],
      '1988': ['dsp', 'hs', 'dp', 'fsp'],
      '1989': ['dsp', 'hs'],
      '1990': ['dsp', 'hs'],
      '1991': ['dsp', 'hs'],
      '1992': ['dsp', 'hs'],
      '1993': ['dsp', 'hs'],
      '1994': ['dsp', 'hs'],
      '1995': ['dsp', 'hs', 'ep', 'sts'],
      '1996': ['dsp', 'hs', 'ep', 'sts'],
      '1997': ['dsp', 'hs', 'ep', 'sts'],
      '1998': ['dsp', 'hs', 'ep', 'sts'],
      '1999': ['dsp', 'hs', 'ep'],
      '2000': ['dsp', 'hs'],
      '2001': ['dsp', 'hs'],
      '2002': ['dsp', 'hs'],
    },
    '240SX': {
      '1988': ['hs', 'stx'],
      '1989': ['hs', 'stx', 'dp'],
      '1990': ['hs', 'stx', 'dp'],
      '1991': ['hs', 'stx', 'dp'],
      '1992': ['hs', 'stx', 'dp'],
      '1993': ['hs', 'stx', 'dp'],
      '1994': ['hs', 'stx', 'dp'],
      '1995': ['hs', 'stx', 'dp'],
      '1996': ['hs', 'stx', 'dp'],
      '1997': ['hs', 'stx', 'dp'],
      '1998': ['hs', 'stx', 'dp'],
    },
    '240Z': {
      'all': ['bsp'],
    },
    '240Z (incl. 2+2) - Alternate part: headlight covers': {
      '1970': ['fp'],
      '1971': ['fp'],
      '1972': ['fp'],
      '1973': ['fp'],
      '1974': ['fp'],
      '1975': ['fp'],
      '1976': ['fp'],
      '1977': ['fp'],
      '1978': ['fp'],
    },
    '260Z': {
      'all': ['bsp'],
    },
    '260Z (incl. 2+2) - Alternate part: headlight covers': {
      '1970': ['fp'],
      '1971': ['fp'],
      '1972': ['fp'],
      '1973': ['fp'],
      '1974': ['fp'],
      '1975': ['fp'],
      '1976': ['fp'],
      '1977': ['fp'],
      '1978': ['fp'],
    },
    '280Z': {
      'all': ['bsp'],
    },
    '280Z (incl. 2+2) - Alternate part: headlight covers': {
      '1970': ['fp'],
      '1971': ['fp'],
      '1972': ['fp'],
      '1973': ['fp'],
      '1974': ['fp'],
      '1975': ['fp'],
      '1976': ['fp'],
      '1977': ['fp'],
      '1978': ['fp'],
    },
    '280ZX': {
      'all': ['bsp'],
    },
    '280ZX (incl. 2+2) - Alternate part: headlight covers': {
      '1979': ['fp'],
      '1980': ['fp'],
      '1981': ['fp'],
      '1982': ['fp'],
      '1983': ['fp'],
    },
    '280ZX Turbo': {
      'all': ['bsp'],
    },
    '300ZX (Z31 chassis) - Alternate part: headlight covers': {
      '1984': ['fp'],
      '1985': ['fp'],
      '1986': ['fp'],
      '1987': ['fp'],
      '1988': ['fp'],
      '1989': ['fp'],
    },
    '300ZX (Z32 chassis; non-turbo) - Alternate part: rear facing hood scoop (3.5\' max height)': {
      '1990': ['fp'],
      '1991': ['fp'],
      '1992': ['fp'],
      '1993': ['fp'],
      '1994': ['fp'],
      '1995': ['fp'],
      '1996': ['fp'],
    },
    '300ZX (non-turbo)': {
      '1984': ['hs', 'stu', 'stx', 'esp'],
      '1985': ['hs', 'stu', 'stx', 'esp'],
      '1986': ['hs', 'stu', 'stx', 'esp'],
      '1987': ['hs', 'stu', 'stx', 'esp'],
      '1988': ['hs', 'stu', 'stx', 'esp'],
      '1989': ['hs', 'stu', 'stx', 'esp'],
      '1990': ['fs', 'esp'],
      '1991': ['fs', 'esp'],
      '1992': ['fs', 'esp'],
      '1993': ['fs', 'esp'],
      '1994': ['fs', 'esp'],
      '1995': ['fs', 'esp'],
      '1996': ['fs', 'esp'],
    },
    '300ZX Turbo': {
      '1984': ['fs', 'bsp'],
      '1985': ['fs', 'bsp'],
      '1986': ['fs', 'bsp'],
      '1987': ['fs', 'bsp'],
      '1988': ['fs', 'bsp'],
      '1989': ['fs', 'bsp'],
      '1990': ['cs', 'bsp'],
      '1991': ['cs', 'bsp'],
      '1992': ['cs', 'bsp'],
      '1993': ['cs', 'bsp'],
      '1994': ['cs', 'bsp'],
      '1995': ['cs', 'bsp'],
      '1996': ['cs', 'bsp'],
    },
    '350Z (non-NISMO)': {
      '2002': ['fs', 'bsp', 'stu'],
      '2003': ['fs', 'bsp', 'stu', 'fp'],
      '2004': ['fs', 'bsp', 'stu', 'fp'],
      '2005': ['fs', 'bsp', 'stu', 'fp'],
      '2006': ['fs', 'bsp', 'stu', 'fp'],
      '2007': ['fs', 'bsp', 'stu', 'fp'],
      '2008': ['fs', 'bsp', 'stu', 'fp'],
      '2009': ['fs', 'bsp', 'stu', 'fp'],
    },
    '350Z NISMO': {
      '2004': ['bs'],
      '2005': ['bs'],
      '2006': ['bs'],
      '2007': ['bs'],
      '2008': ['bs'],
    },
    '370Z (non-NISMO)': {
      '2009': ['stu', 'bsp', 'fp', 'fs'],
      '2010': ['stu', 'bsp', 'fp', 'fs'],
      '2011': ['stu', 'bsp', 'fp', 'fs'],
      '2012': ['stu', 'bsp', 'fp', 'fs'],
      '2013': ['stu', 'bsp', 'fp', 'fs'],
      '2014': ['stu', 'bsp', 'fp', 'fs'],
      '2015': ['stu', 'bsp', 'fp', 'fs'],
      '2016': ['stu', 'bsp', 'fp', 'fs'],
      '2017': ['stu', 'bsp', 'fp', 'fs'],
      '2018': ['stu', 'bsp', 'fs'],
      '2019': ['stu', 'fs'],
      '2020': ['stu', 'fs'],
    },
    '370Z NISMO': {
      '2009': ['bs', 'stu'],
      '2010': ['bs', 'stu'],
      '2011': ['bs', 'stu'],
      '2012': ['bs', 'stu'],
      '2013': ['bs', 'stu'],
      '2014': ['bs', 'stu'],
      '2015': ['bs', 'stu'],
      '2016': ['bs', 'stu'],
      '2017': ['bs', 'stu'],
      '2018': ['bs', 'stu'],
      '2019': ['bs', 'stu'],
      '2020': ['bs', 'stu'],
    },
    '720 (2WD)': {
      '1980': ['dp'],
      '1981': ['dp'],
      '1982': ['dp'],
      '1983': ['dp'],
      '1984': ['dp'],
      '1985': ['dp'],
      '1986': ['dp'],
    },
    '810 Maxima': {
      '1981': ['dp'],
      '1982': ['dp'],
      '1983': ['dp'],
    },
    'Altima': {
      'all': ['hs', 'sm'],
    },
    'B110 (1171, 1237, 1288, 1397, & 1488 cc)': {
      '1970': ['dp'],
      '1971': ['dp'],
      '1972': ['dp'],
      '1973': ['dp'],
    },
    'B210': {
      'all': ['fsp', 'dp'],
    },
    'F-10': {
      'all': ['fsp'],
    },
    'GT-R (R35)': {
      'all': ['ssp'],
    },
    'GT-R (excluding NISMO & Track Edition)': {
      '2009': ['ss'],
      '2010': ['ss'],
      '2011': ['ss'],
      '2012': ['ss'],
      '2013': ['ss'],
      '2014': ['ss'],
      '2015': ['ss'],
      '2016': ['ss'],
      '2017': ['ss'],
      '2018': ['ss'],
      '2019': ['ss'],
      '2020': ['ss'],
    },
    'Juke * All vehicles must meet the requirements of Section 3.1': {
      '2011': ['sth'],
      '2012': ['sth'],
      '2013': ['sth'],
      '2014': ['sth'],
      '2015': ['sth'],
      '2016': ['sth'],
    },
    'Leaf': {
      '2011': ['hs'],
      '2012': ['hs'],
      '2013': ['hs'],
      '2014': ['hs'],
      '2015': ['hs'],
      '2016': ['hs'],
      '2017': ['hs'],
      '2018': ['hs'],
      '2019': ['hs'],
      '2020': ['hs'],
    },
    'Maxima': {
      'all': ['hs'],
    },
    'NX1600': {
      'all': ['hs', 'fsp'],
    },
    'NX2000': {
      '1991': ['fsp', 'hs', 'sts'],
      '1992': ['fsp', 'hs', 'sts'],
      '1993': ['fsp', 'hs', 'sts'],
      '1994': ['fsp', 'sts'],
    },
    'NX (B13 chassis)': {
      '1991': ['ep'],
      '1992': ['ep'],
      '1993': ['ep'],
    },
    'Pulsar': {
      'all': ['hs', 'fsp'],
    },
    'Pulsar & Pulsar NX (non-turbo)': {
      'all': ['fsp'],
    },
    'Pulsar (N12 chassis) - Alternate cylinder head: 11041-15M00': {
      '1983': ['ep'],
      '1984': ['ep'],
      '1985': ['ep'],
      '1986': ['ep'],
    },
    'Pulsar (N13 chassis; 16v) - Alternate cylinder head: 11041-15M00 Alternate engine: A14': {
      '1987': ['ep'],
      '1988': ['ep'],
      '1989': ['ep'],
      '1990': ['ep'],
    },
    'Sedan (N/A, FWD, Not Otherwise Classified)': {
      'all': ['ep'],
    },
    'Sentra': {
      'all': ['hs', 'fsp', 'sm'],
    },
    'Sentra (1.6L)': {
      '1991': ['sts'],
      '1992': ['sts'],
      '1993': ['sts'],
      '1994': ['sts'],
      '1995': ['sts'],
      '1996': ['sts'],
      '1997': ['sts'],
      '1998': ['sts'],
      '1999': ['sts'],
      '2000': ['sts'],
      '2001': ['sts'],
      '2002': ['sts'],
      '2003': ['sts'],
      '2004': ['sts'],
      '2005': ['sts'],
      '2006': ['sts'],
      '2007': ['sts'],
      '2008': ['sts'],
      '2009': ['sts'],
      '2010': ['sts'],
      '2011': ['sts'],
      '2012': ['sts'],
    },
    'Sentra (1.8L)': {
      '1991': ['sts'],
      '1992': ['sts'],
      '1993': ['sts'],
      '1994': ['sts'],
      '1995': ['sts'],
      '1996': ['sts'],
      '1997': ['sts'],
      '1998': ['sts'],
      '1999': ['sts', 'fsp'],
      '2000': ['sts', 'fsp'],
      '2001': ['sts', 'fsp'],
      '2002': ['sts', 'fsp'],
      '2003': ['sts', 'fsp'],
      '2004': ['sts', 'fsp'],
      '2005': ['sts', 'fsp'],
      '2006': ['sts', 'fsp'],
      '2007': ['sts'],
      '2008': ['sts'],
      '2009': ['sts'],
      '2010': ['sts'],
      '2011': ['sts'],
      '2012': ['sts'],
    },
    'Sentra (2.0L)': {
      '1991': ['sts'],
      '1992': ['sts'],
      '1993': ['sts'],
      '1994': ['sts'],
      '1995': ['sts', 'fsp'],
      '1996': ['sts', 'fsp'],
      '1997': ['sts', 'fsp'],
      '1998': ['sts', 'fsp'],
      '1999': ['sts', 'fsp'],
      '2000': ['sts'],
      '2001': ['sts'],
      '2002': ['sts'],
      '2003': ['sts'],
      '2004': ['sts'],
      '2005': ['sts'],
      '2006': ['sts'],
      '2007': ['sts'],
      '2008': ['sts'],
      '2009': ['sts'],
      '2010': ['sts'],
      '2011': ['sts'],
      '2012': ['sts'],
    },
    'Sentra (B11 chassis) - Alternate cylinder head: 11041-15M00': {
      '1983': ['ep'],
      '1984': ['ep'],
      '1985': ['ep'],
      '1986': ['ep'],
    },
    'Sentra (B12 chassis; 1.6 L) - Alternate cylinder head: 11041-15M00 Alternate engine: L16': {
      '1987': ['ep'],
      '1988': ['ep'],
      '1989': ['ep'],
      '1990': ['ep'],
    },
    'Sentra (B13 chassis; 2.0 L) - Alternate cylinder head: 11041-H5704': {
      '1991': ['ep'],
      '1992': ['ep'],
      '1993': ['ep'],
      '1994': ['ep'],
    },
    'Sentra (B14 chassis)': {
      '1995': ['ep'],
      '1996': ['ep'],
      '1997': ['ep'],
      '1998': ['ep'],
      '1999': ['ep'],
    },
    'Sentra SE-R': {
      '1991': ['fsp'],
      '1992': ['fsp'],
      '1993': ['fsp'],
      '1994': ['fsp'],
      '2000': ['stx'],
      '2001': ['stx'],
      '2002': ['stx'],
      '2003': ['stx'],
      '2004': ['stx'],
      '2005': ['stx'],
      '2006': ['stx'],
      '2007': ['stx'],
      '2008': ['stx'],
      '2009': ['stx'],
      '2010': ['stx'],
      '2011': ['stx'],
      '2012': ['stx'],
    },
    'Sentra SE-R Spec V': {
      'all': ['stx'],
    },
    'Stanza': {
      'all': ['hs', 'fsp'],
    },
    'Versa': {
      '2007': ['hs', 'sts', 'fsp'],
      '2008': ['hs', 'sts', 'fsp'],
      '2009': ['hs', 'sts', 'fsp'],
      '2010': ['hs', 'sts', 'fsp', 'ep'],
      '2011': ['hs', 'sts', 'fsp', 'ep'],
      '2012': ['hs', 'sts', 'fsp', 'ep'],
      '2013': ['hs', 'sts', 'fsp', 'ep'],
      '2014': ['hs', 'fsp', 'ep'],
      '2015': ['hs', 'fsp', 'ep'],
      '2016': ['hs', 'fsp'],
      '2017': ['hs'],
      '2018': ['hs'],
      '2019': ['hs'],
      '2020': ['hs'],
    },
  },
  'Oldsmobile': {
    'Calais W41': {
      'all': ['hs'],
    },
    'Cutlass': {
      '1968': ['cp', 'camt'],
      '1969': ['cp', 'camt'],
      '1970': ['cp', 'camt'],
      '1971': ['cp', 'camt'],
      '1972': ['cp', 'camt'],
      '1973': ['cp', 'camt'],
      '1974': ['cp', 'camt'],
      '1975': ['cp', 'camt'],
      '1976': ['cp', 'camt'],
      '1977': ['cp', 'camt'],
      '1978': ['cp', 'camt'],
      '1979': ['cp', 'camt'],
      '1980': ['cp', 'camt'],
      '1981': ['cp', 'camt'],
    },
    'Omega': {
      'all': ['fsp'],
    },
    'Starfire (V6)': {
      'all': ['esp'],
    },
  },
  'Opel': {
    '1900': {
      'all': ['hs', 'fsp'],
    },
    'Ascona': {
      '1971': ['hs', 'dp'],
      '1972': ['hs', 'dp'],
      '1973': ['hs', 'dp'],
      '1974': ['hs', 'dp'],
      '1975': ['hs', 'dp'],
    },
    'GT': {
      'all': ['hs', 'fsp', 'dp'],
    },
    'Kadett': {
      'all': ['hs', 'fsp', 'dp'],
    },
    'Manta': {
      'all': ['hs', 'fsp', 'dp'],
    },
    'Not Otherwise Classified': {
      'all': ['hs'],
    },
  },
  'Peugeot': {
    '405': {
      'all': ['hs', 'esp'],
    },
    '505': {
      '1979': ['hs', 'dsp'],
      '1980': ['hs', 'dsp'],
      '1981': ['hs', 'dsp'],
      '1982': ['hs', 'dsp'],
      '1983': ['hs', 'dsp'],
      '1984': ['hs', 'dsp'],
      '1985': ['hs', 'dsp'],
      '1986': ['hs', 'dsp'],
      '1987': ['hs', 'dsp'],
      '1988': ['hs', 'dsp'],
      '1989': ['hs', 'dsp'],
      '1990': ['hs', 'dsp'],
      '1991': ['hs', 'dsp'],
    },
    '405 (non-turbo)': {
      '1987': ['ep'],
      '1988': ['ep'],
      '1989': ['ep'],
      '1990': ['ep'],
      '1991': ['ep'],
    },
    '405 DL': {
      'all': ['fsp'],
    },
    '405 S': {
      'all': ['fsp'],
    },
  },
  'Plymouth': {
    'Acclaim': {
      'all': ['hs', 'dsp', 'ep'],
    },
    'Arrow': {
      'all': ['hs'],
    },
    'Champ': {
      'all': ['hs', 'dp'],
    },
    'Colt': {
      'all': ['hs', 'dp'],
    },
    'Horizon': {
      'all': ['hs', 'fsp'],
    },
    'Laser (non-turbo) AWD': {
      'all': ['hs', 'dsp', 'ep'],
    },
    'Laser (non-turbo) FWD': {
      'all': ['hs', 'esp', 'ep'],
    },
    'Neon': {
      '1995': ['gs', 'sts', 'ep'],
      '1996': ['gs', 'sts', 'ep'],
      '1997': ['gs', 'sts', 'ep'],
      '1998': ['gs', 'sts', 'ep'],
      '1999': ['gs', 'sts', 'ep'],
      '2000': ['hs', 'sts', 'ep'],
      '2001': ['hs', 'sts', 'ep'],
      '2002': ['hs', 'sts', 'ep'],
      '2003': ['hs', 'sts', 'ep'],
      '2004': ['hs', 'sts', 'ep'],
      '2005': ['hs', 'sts', 'ep'],
    },
    'Prowler': {
      'all': ['cs'],
    },
    'Sapporo': {
      'all': ['hs', 'fsp'],
    },
    'Scamp': {
      'all': ['hs'],
    },
    'Sundance': {
      'all': ['hs', 'dsp', 'ep', 'xp', 'sm', 'smf', 'xsa'],
    },
    'TC3': {
      'all': ['hs', 'fsp'],
    },
    'Turismo': {
      'all': ['hs', 'fsp'],
    },
    'Valiant': {
      '1963': ['hs', 'esp', 'cp'],
      '1964': ['hs', 'esp', 'cp'],
      '1965': ['hs', 'esp', 'cp'],
      '1966': ['hs', 'esp', 'cp'],
      '1967': ['hs', 'esp', 'cp'],
      '1968': ['hs', 'esp', 'cp'],
      '1969': ['hs', 'esp', 'cp'],
      '1970': ['hs', 'esp', 'cp'],
      '1971': ['hs', 'esp', 'cp'],
      '1972': ['hs', 'esp', 'cp'],
      '1973': ['hs', 'esp', 'cp'],
      '1974': ['hs', 'esp', 'cp'],
      '1975': ['hs', 'esp', 'cp'],
      '1976': ['hs', 'esp', 'cp'],
    },
  },
  'Pontiac': {
    'Fiero (4-cyl)': {
      'all': ['hs', 'sts', 'fsp', 'dp'],
    },
    'Fiero (V6)': {
      'all': ['cs', 'str', 'bsp', 'fp'],
    },
    'Firebird (4-cyl & 6-cyl)': {
      'all': ['hs', 'stu', 'fsp', 'cp', 'camt'],
    },
    'Firebird (V8, NOC)': {
      'all': ['fs', 'stu', 'cp', 'camt'],
    },
    'Firebird Trans Am & Formula (WS6, base car only, including GM-installed 1LE)': {
      '1998': ['fs', 'stu', 'cp', 'camt'],
      '1999': ['fs', 'stu', 'cp', 'camt'],
      '2000': ['fs', 'stu', 'cp', 'camt'],
      '2001': ['fs', 'stu', 'cp', 'camc'],
      '2002': ['fs', 'stu', 'cp', 'camc'],
    },
    'G5 (2.0L Turbo)': {
      'all': ['hs', 'sth'],
    },
    'G5 (2.2L)': {
      'all': ['hs', 'sts'],
    },
    'G8 (V6)': {
      '2008': ['hs', 'esp', 'camc'],
      '2009': ['hs', 'esp', 'camc'],
    },
    'G8 (V8 & NOC)': {
      '2008': ['fs', 'esp', 'camc'],
      '2009': ['fs', 'esp', 'camc'],
    },
    'GTO': {
      '2004': ['fs', 'stu', 'esp', 'cp', 'camc'],
      '2005': ['fs', 'stu', 'esp', 'cp', 'camc'],
      '2006': ['fs', 'stu', 'esp', 'cp', 'camc'],
    },
    'LeMans (FWD)': {
      '1988': ['hs'],
      '1989': ['hs'],
      '1990': ['hs'],
      '1991': ['hs'],
      '1992': ['hs'],
      '1993': ['hs'],
    },
    'Solstice (non-turbo; non-ZOK)': {
      '2007': ['cs', 'str', 'csp', 'dp', 'cams'],
      '2008': ['cs', 'str', 'csp', 'dp', 'cams'],
      '2009': ['cs', 'str', 'csp', 'dp', 'cams'],
      '2010': ['cs', 'str', 'csp', 'dp', 'cams'],
    },
    'Solstice (non-turbo; w/ ZOK ClubSport package)': {
      '2007': ['bs', 'str', 'csp', 'cams'],
      '2008': ['bs', 'str', 'csp', 'cams'],
      '2009': ['bs', 'str', 'csp', 'cams'],
      '2010': ['bs', 'str', 'csp', 'cams'],
    },
    'Solstice GXP (Turbo)': {
      '2007': ['as', 'asp', 'fp', 'cams'],
      '2008': ['as', 'asp', 'fp', 'cams'],
      '2009': ['as', 'asp', 'fp', 'cams'],
    },
    'Sunfire': {
      'all': ['hs'],
    },
    'T-1000': {
      'all': ['hs', 'camt'],
    },
    'Trans Am Turbo (V6)': {
      '1989': ['fs', 'esp', 'cp', 'camt'],
    },
    'Vibe': {
      'all': ['hs', 'sts', 'dsp'],
    },
  },
  'Porsche': {
    '356': {
      'all': ['csp'],
    },
    '912': {
      'all': ['hs', 'fsp'],
    },
    '924': {
      'all': ['str'],
    },
    '968': {
      '1992': ['fp'],
      '1993': ['fp'],
      '1994': ['fp'],
      '1995': ['fp'],
      'all': ['bs', 'str', 'bsp'],
    },
    '1300': {
      'all': ['dp'],
    },
    '1600': {
      'all': ['csp'],
    },
    '356 (non-Carrera)': {
      'all': ['hs'],
    },
    '356 Carrera (4-cam)': {
      'all': ['cs'],
    },
    '356, except Carrera and 1500, 1600': {
      'all': ['dp'],
    },
    '911 (non-Turbo)': {
      '1963': ['cs', 'bsp', 'fp'],
      '1964': ['cs', 'bsp', 'fp'],
      '1965': ['cs', 'bsp', 'fp'],
      '1966': ['cs', 'bsp', 'fp'],
      '1967': ['cs', 'bsp', 'fp'],
      '1968': ['cs', 'bsp', 'fp'],
      '1969': ['cs', 'bsp', 'fp'],
      '1970': ['cs', 'bsp', 'fp'],
      '1971': ['cs', 'bsp', 'fp'],
      '1972': ['cs', 'bsp', 'fp'],
      '1973': ['cs', 'bsp', 'fp'],
      '1974': ['cs', 'bsp', 'fp'],
      '1975': ['cs', 'bsp', 'fp'],
      '1976': ['cs', 'bsp', 'fp'],
      '1977': ['cs', 'bsp', 'fp'],
      '1978': ['cs', 'str', 'bsp', 'fp'],
      '1979': ['cs', 'str', 'bsp', 'fp'],
      '1980': ['cs', 'str', 'bsp', 'fp'],
      '1981': ['cs', 'str', 'bsp', 'fp'],
      '1982': ['cs', 'str', 'bsp', 'fp'],
      '1983': ['cs', 'str', 'bsp', 'fp'],
      '1984': ['cs', 'str', 'bsp', 'fp'],
      '1985': ['cs', 'str', 'bsp', 'fp'],
      '1986': ['cs', 'str', 'bsp', 'fp'],
      '1987': ['cs', 'str', 'bsp', 'fp'],
      '1988': ['cs', 'str', 'bsp', 'fp'],
      '1989': ['cs', 'str', 'bsp', 'fp'],
      '1990': ['cs', 'bsp', 'fp'],
      '1991': ['cs', 'bsp', 'fp'],
      '1992': ['cs', 'bsp', 'fp'],
      '1993': ['cs', 'bsp', 'fp'],
      '1994': ['cs', 'bsp', 'fp'],
      '1995': ['bs', 'bsp', 'fp'],
      '1996': ['bs', 'bsp', 'fp'],
      '1997': ['bs', 'bsp', 'fp'],
      '1998': ['as', 'bsp', 'fp'],
      '1999': ['as', 'asp', 'fp'],
      '2000': ['as', 'asp', 'fp'],
      '2001': ['as', 'asp', 'fp'],
      '2002': ['as', 'asp', 'fp'],
      '2003': ['as', 'asp', 'fp'],
      '2004': ['as', 'asp', 'fp'],
      '2005': ['as', 'ssr', 'asp', 'fp'],
      '2006': ['as', 'ssr', 'asp', 'fp'],
      '2007': ['as', 'ssr', 'asp', 'fp'],
      '2008': ['as', 'ssr', 'asp', 'fp'],
      '2009': ['as', 'ssr', 'asp', 'fp'],
      '2010': ['as', 'ssr', 'asp', 'fp'],
      '2011': ['as', 'ssr', 'asp', 'fp'],
      '2012': ['ss', 'ssr', 'asp', 'fp'],
      '2013': ['ss', 'ssr', 'bsp'],
      '2014': ['ss', 'ssr', 'bsp'],
      '2015': ['ss', 'ssr', 'bsp'],
      '2016': ['ss', 'ssr', 'bsp'],
      '2017': ['ss', 'ssr', 'bsp'],
      '2018': ['ss', 'ssr', 'bsp'],
      '2019': ['ss', 'ssr', 'bsp'],
      '2020': ['ss', 'bsp'],
    },
    '911 Club Sport': {
      '1987': ['cs'],
      '1988': ['cs'],
      '1989': ['cs'],
    },
    '911 GT2': {
      '1999': ['ss', 'ssr', 'ssp'],
      '2000': ['ss', 'ssr', 'ssp'],
      '2001': ['ss', 'ssr', 'ssp'],
      '2002': ['ss', 'ssr', 'ssp'],
      '2003': ['ss', 'ssr', 'ssp'],
      '2004': ['ss', 'ssr', 'ssp'],
      '2006': ['ss', 'ssr', 'ssp'],
      '2007': ['ss', 'ssr', 'ssp'],
      '2008': ['ss', 'ssr', 'ssp'],
      '2009': ['ss', 'ssr', 'ssp'],
      '2010': ['ss', 'ssr', 'ssp'],
      '2011': ['ss', 'ssr', 'ssp'],
    },
    '911 GT2 RS': {
      '1999': ['ss', 'ssr', 'ssp'],
      '2000': ['ss', 'ssr', 'ssp'],
      '2001': ['ss', 'ssr', 'ssp'],
      '2002': ['ss', 'ssr', 'ssp'],
      '2003': ['ss', 'ssr', 'ssp'],
      '2004': ['ss', 'ssr', 'ssp'],
      '2006': ['ss', 'ssr', 'ssp'],
      '2007': ['ss', 'ssr', 'ssp'],
      '2008': ['ss', 'ssr', 'ssp'],
      '2009': ['ss', 'ssr', 'ssp'],
      '2010': ['ss', 'ssr', 'ssp'],
      '2011': ['ss', 'ssr', 'ssp'],
      '2012': ['ss', 'ssr', 'ssp'],
      '2017': ['ss', 'ssp'],
      '2018': ['ss', 'ssp'],
      '2019': ['ss', 'ssp'],
    },
    '911 GT3': {
      '1999': ['ss', 'ssr', 'ssp'],
      '2000': ['ss', 'ssr', 'ssp'],
      '2001': ['ss', 'ssr', 'ssp'],
      '2002': ['ss', 'ssr', 'ssp'],
      '2003': ['ss', 'ssr', 'ssp'],
      '2004': ['ss', 'ssr', 'ssp'],
      '2006': ['ss', 'ssr', 'ssp'],
      '2007': ['ss', 'ssr', 'ssp'],
      '2008': ['ss', 'ssr', 'ssp'],
      '2009': ['ss', 'ssr', 'ssp'],
      '2010': ['ss', 'ssr', 'ssp'],
      '2011': ['ss', 'ssr', 'ssp'],
      '2012': ['ss', 'ssr', 'ssp'],
      '2017': ['ss', 'ssp'],
      '2018': ['ss', 'ssp'],
      '2019': ['ss', 'ssp'],
    },
    '911 GT3 RS': {
      '1999': ['ss', 'ssr', 'ssp'],
      '2000': ['ss', 'ssr', 'ssp'],
      '2001': ['ss', 'ssr', 'ssp'],
      '2002': ['ss', 'ssr', 'ssp'],
      '2003': ['ss', 'ssr', 'ssp'],
      '2004': ['ss', 'ssr', 'ssp'],
      '2006': ['ss', 'ssr', 'ssp'],
      '2007': ['ss', 'ssr', 'ssp'],
      '2008': ['ss', 'ssr', 'ssp'],
      '2009': ['ss', 'ssr', 'ssp'],
      '2010': ['ss', 'ssr', 'ssp'],
      '2011': ['ss', 'ssr', 'ssp'],
      '2012': ['ss', 'ssr', 'ssp'],
      '2017': ['ss', 'ssp'],
      '2018': ['ss', 'ssp'],
      '2019': ['ss', 'ssp'],
    },
    '911 Turbo': {
      '1974': ['ss', 'ssr'],
      '1975': ['ss', 'ssr', 'asp'],
      '1976': ['ss', 'ssr', 'asp'],
      '1977': ['ss', 'ssr', 'asp'],
      '1978': ['ss', 'ssr', 'asp'],
      '1979': ['ss', 'ssr', 'asp'],
      '1980': ['ss', 'ssr', 'asp'],
      '1981': ['ss', 'ssr', 'asp'],
      '1982': ['ss', 'ssr', 'asp'],
      '1983': ['ss', 'ssr', 'asp'],
      '1984': ['ss', 'ssr', 'asp'],
      '1985': ['ss', 'ssr', 'asp'],
      '1986': ['ss', 'ssr', 'asp'],
      '1987': ['ss', 'ssr', 'asp'],
      '1988': ['ss', 'ssr', 'asp'],
      '1989': ['ss', 'ssr', 'asp'],
      '1990': ['ss', 'asp'],
      '1991': ['ss', 'asp'],
      '1992': ['ss', 'asp'],
      '1993': ['ss', 'asp'],
      '1994': ['ss', 'asp'],
      '1995': ['ss', 'asp'],
      '1996': ['ss', 'asp'],
      '1997': ['ss', 'asp'],
      '1998': ['ss'],
      '1999': ['ss'],
      '2001': ['ss', 'ssp'],
      '2002': ['ss', 'ssp'],
      '2003': ['ss', 'ssp'],
      '2004': ['ss', 'ssp'],
      '2005': ['ss', 'ssp'],
      '2006': ['ss', 'ssp'],
      '2007': ['ss', 'ssp'],
      '2008': ['ss', 'ssp'],
      '2009': ['ss', 'ssp'],
      '2010': ['ss', 'ssp'],
      '2011': ['ss', 'ssp'],
      '2012': ['ss', 'ssp'],
      '2013': ['ss', 'ssp'],
      '2014': ['ss', 'ssp'],
      '2015': ['ss', 'ssp'],
      '2016': ['ss', 'ssp'],
      '2017': ['ss', 'ssp'],
      '2018': ['ss'],
      '2019': ['ss'],
      '2020': ['ss'],
    },
    '911 Turbo S': {
      '2001': ['ss', 'ssp'],
      '2002': ['ss', 'ssp'],
      '2003': ['ss', 'ssp'],
      '2004': ['ss', 'ssp'],
      '2005': ['ss', 'ssp'],
      '2006': ['ssp'],
      '2007': ['ssp'],
      '2008': ['ssp'],
      '2009': ['ssp'],
      '2010': ['ssp'],
      '2011': ['ssp'],
      '2012': ['ssp'],
      '2013': ['ssp'],
      '2014': ['ssp'],
      '2015': ['ssp'],
      '2016': ['ssp'],
      '2017': ['ssp'],
    },
    '912 & 912E (1600 & 1971 cc)': {
      'all': ['dp'],
    },
    '912E': {
      'all': ['fsp'],
    },
    '914 (4-cyl)': {
      'all': ['sts', 'dsp', 'dp'],
    },
    '914 (all)': {
      'all': ['cs'],
    },
    '914-6 (2.0L, 2.5L, 2.7L, & 2.8L 6-cyl air-cooled)': {
      'all': ['fp'],
    },
    '914/6': {
      'all': ['bsp'],
    },
    '924 (1984 cc, non-turbo)': {
      'all': ['dp'],
    },
    '924 (Audi engine)': {
      'all': ['fsp'],
    },
    '924 (Audi engine, non-turbo)': {
      'all': ['hs'],
    },
    '924 (incl. Turbo)': {
      'all': ['bsp'],
    },
    '924 Turbo': {
      'all': ['fp'],
    },
    '924 Turbo (Audi engine)': {
      '1979': ['es'],
      '1980': ['es'],
      '1981': ['es'],
    },
    '924S': {
      '1986': ['es', 'fp'],
      '1987': ['es', 'fp'],
      '1988': ['es', 'fp'],
      'all': ['csp'],
    },
    '928 (all)': {
      'all': ['cs', 'bsp'],
    },
    '944 (8v)': {
      'all': ['es', 'csp'],
    },
    '944 (16v)': {
      'all': ['cs', 'bsp'],
    },
    '944 (non-turbo)': {
      '1982': ['fp'],
      '1983': ['fp'],
      '1984': ['fp'],
      '1985': ['fp'],
      '1986': ['fp'],
      '1987': ['fp'],
      '1988': ['fp'],
      '1989': ['fp'],
      '1990': ['fp'],
      '1991': ['fp'],
      'all': ['sts', 'csp'],
    },
    '944 Turbo (all)': {
      '1985': ['fp'],
      '1986': ['fp'],
      '1987': ['fp'],
      '1988': ['fp'],
      '1989': ['fp'],
      '1990': ['fp'],
      '1991': ['fp'],
      'all': ['cs', 'bsp'],
    },
    'Boxster (non-S)': {
      '1996': ['cs', 'str', 'bsp', 'fp'],
      '1997': ['cs', 'str', 'bsp', 'fp'],
      '1998': ['cs', 'str', 'ssr', 'bsp', 'fp'],
      '1999': ['cs', 'str', 'ssr', 'bsp', 'fp'],
      '2000': ['cs', 'str', 'ssr', 'bsp', 'fp'],
      '2001': ['cs', 'str', 'ssr', 'bsp', 'fp'],
      '2002': ['cs', 'str', 'ssr', 'bsp', 'fp'],
      '2003': ['cs', 'str', 'ssr', 'bsp', 'fp'],
      '2004': ['cs', 'str', 'ssr', 'bsp', 'fp'],
      '2005': ['bs', 'str', 'ssr', 'asp', 'fp'],
      '2006': ['bs', 'str', 'ssr', 'asp', 'fp'],
      '2007': ['bs', 'str', 'ssr', 'asp', 'fp'],
      '2008': ['bs', 'str', 'ssr', 'asp', 'fp'],
      '2009': ['bs', 'stu', 'ssr', 'asp', 'fp'],
      '2010': ['bs', 'stu', 'ssr', 'asp', 'fp'],
      '2011': ['bs', 'stu', 'ssr', 'asp', 'fp'],
      '2012': ['bs', 'stu', 'ssr', 'asp', 'fp'],
      '2013': ['bs', 'stu', 'ssr', 'asp'],
      '2014': ['bs', 'stu', 'ssr', 'asp'],
      '2015': ['bs', 'stu', 'ssr', 'asp'],
      '2016': ['bs', 'ssr', 'asp'],
      '2017': ['as', 'ssr'],
      '2018': ['as', 'ssr'],
      '2019': ['as', 'ssr'],
      '2020': ['as'],
      '2021': ['as'],
    },
    'Boxster GTS (981 chassis)': {
      '2015': ['as'],
      '2016': ['as'],
    },
    'Boxster S': {
      '2000': ['cs', 'str', 'ssr', 'bsp', 'fp'],
      '2001': ['cs', 'str', 'ssr', 'bsp', 'fp'],
      '2002': ['cs', 'str', 'ssr', 'bsp', 'fp'],
      '2003': ['cs', 'str', 'ssr', 'bsp', 'fp'],
      '2004': ['cs', 'str', 'ssr', 'bsp', 'fp'],
      '2005': ['bs', 'stu', 'ssr', 'asp', 'fp'],
      '2006': ['bs', 'stu', 'ssr', 'asp', 'fp'],
      '2007': ['bs', 'stu', 'ssr', 'asp', 'fp'],
      '2008': ['bs', 'stu', 'ssr', 'asp', 'fp'],
      '2009': ['as', 'stu', 'ssr', 'asp', 'fp'],
      '2010': ['as', 'stu', 'ssr', 'asp', 'fp'],
      '2011': ['as', 'stu', 'ssr', 'asp', 'fp'],
      '2012': ['as', 'stu', 'ssr', 'asp', 'fp'],
      '2013': ['as', 'ssr', 'asp'],
      '2014': ['as', 'ssr', 'asp'],
      '2015': ['as', 'ssr', 'asp'],
      '2016': ['as', 'ssr', 'asp'],
      '2017': ['ss', 'ssr'],
      '2018': ['ss', 'ssr'],
      '2019': ['ss', 'ssr'],
      '2020': ['ss'],
      '2021': ['ss'],
    },
    'Boxster Spyder': {
      '2011': ['ss', 'ssr'],
      '2012': ['ss', 'ssr'],
      '2013': ['ss', 'ssr'],
    },
    'Carrera 2 & Carrera 4 (964)': {
      '1989': ['cs'],
      '1990': ['cs'],
      '1991': ['cs'],
      '1992': ['cs'],
      '1993': ['cs'],
      '1994': ['cs'],
    },
    'Carrera (4-cyl)': {
      'all': ['csp'],
    },
    'Cayman (non-S)': {
      '2006': ['bs', 'ssr', 'str', 'asp', 'fp'],
      '2007': ['bs', 'ssr', 'str', 'asp', 'fp'],
      '2008': ['bs', 'ssr', 'str', 'asp', 'fp'],
      '2009': ['bs', 'ssr', 'stu', 'asp', 'fp'],
      '2010': ['bs', 'ssr', 'stu', 'asp', 'fp'],
      '2011': ['bs', 'ssr', 'stu', 'asp', 'fp'],
      '2012': ['bs', 'ssr', 'stu', 'asp', 'fp'],
      '2013': ['bs', 'ssr', 'stu', 'asp'],
      '2014': ['bs', 'ssr', 'stu', 'asp'],
      '2015': ['bs', 'ssr', 'stu', 'asp'],
      '2016': ['bs', 'ssr', 'asp'],
      '2017': ['as', 'ssr'],
      '2018': ['as', 'ssr'],
      '2019': ['as', 'ssr'],
      '2020': ['as'],
      '2021': ['as'],
    },
    'Cayman GT4': {
      '2016': ['ss', 'ssp', 'asp'],
      '2020': ['ss'],
    },
    'Cayman GTS & GTS 4.0': {
      '2015': ['as', 'asp'],
      '2016': ['as', 'asp'],
    },
    'Cayman R': {
      '2012': ['ss', 'asp', 'fp'],
    },
    'Cayman S': {
      '2006': ['bs', 'ssr', 'stu', 'asp', 'fp'],
      '2007': ['bs', 'ssr', 'stu', 'asp', 'fp'],
      '2008': ['bs', 'ssr', 'stu', 'asp', 'fp'],
      '2009': ['as', 'ssr', 'stu', 'asp', 'fp'],
      '2010': ['as', 'ssr', 'stu', 'asp', 'fp'],
      '2011': ['as', 'ssr', 'stu', 'asp', 'fp'],
      '2012': ['as', 'ssr', 'stu', 'asp', 'fp'],
      '2013': ['as', 'ssr', 'asp'],
      '2014': ['as', 'ssr', 'asp'],
      '2015': ['as', 'ssr', 'asp'],
      '2016': ['as', 'ssr', 'asp'],
      '2017': ['ss'],
      '2018': ['ss'],
      '2019': ['ss'],
      '2020': ['ss'],
      '2021': ['ss'],
    },
    'Macan (all)': {
      '2015': ['bs'],
      '2016': ['bs'],
      '2017': ['bs'],
      '2018': ['bs'],
      '2019': ['bs'],
      '2020': ['bs'],
    },
    'Panamera': {
      '2010': ['fs'],
      '2011': ['fs'],
      '2012': ['fs'],
      '2013': ['fs'],
      '2014': ['fs'],
      '2015': ['fs'],
      '2016': ['fs'],
      '2017': ['fs'],
      '2018': ['fs'],
      '2019': ['fs'],
      '2020': ['fs'],
    },
    'all': {
      'all': ['ssm'],
    },
  },
  'Renault': {
    '15': {
      'all': ['fsp'],
    },
    '16': {
      'all': ['fsp'],
    },
    '17': {
      'all': ['fsp'],
    },
    '17 Gordini': {
      'all': ['fsp'],
    },
    '18i': {
      'all': ['fsp'],
    },
    'Alliance, GTA & Encore': {
      'all': ['fsp'],
    },
    'Alliance/Encore': {
      '1984': ['ep'],
      '1985': ['ep'],
      '1986': ['ep'],
      '1987': ['ep'],
    },
    'Fuego (non-turbo)': {
      'all': ['fsp'],
    },
    'Fuego Turbo': {
      'all': ['dsp'],
    },
    'Not Otherwise Classified': {
      'all': ['hs'],
    },
    'R5 Turbo': {
      'all': ['dsp'],
    },
    'R9 & R11': {
      '1982': ['ep'],
      '1983': ['ep'],
      '1984': ['ep'],
      '1985': ['ep'],
      '1986': ['ep'],
      '1987': ['ep'],
      '1988': ['ep'],
      '1989': ['ep'],
    },
    'R17 Gordini': {
      '1971': ['ep'],
      '1972': ['ep'],
      '1973': ['ep'],
      '1974': ['ep'],
      '1975': ['ep'],
      '1976': ['ep'],
      '1977': ['ep'],
    },
    'R-5 (Not Otherwise Classified) & LeCar': {
      '1978': ['fsp', 'ep'],
      '1979': ['fsp', 'ep'],
      '1980': ['fsp', 'ep'],
      '1981': ['fsp', 'ep'],
      '1982': ['fsp', 'ep'],
      '1983': ['fsp', 'ep'],
      '1984': ['fsp', 'ep'],
      '1985': ['fsp', 'ep'],
      '1986': ['fsp', 'ep'],
      '1987': ['fsp', 'ep'],
      '1988': ['fsp', 'ep'],
      '1989': ['fsp', 'ep'],
      '1990': ['fsp', 'ep'],
      '1991': ['fsp', 'ep'],
      '1992': ['fsp', 'ep'],
      '1993': ['fsp', 'ep'],
      '1994': ['fsp', 'ep'],
      '1995': ['fsp', 'ep'],
      '1996': ['fsp', 'ep'],
    },
    'Sedan (FWD,Not Otherwise Classified)': {
      'all': ['ep'],
    },
  },
  'Saab': {
    '93': {
      'all': ['ep'],
    },
    '99': {
      '1968': ['fp', 'dsp'],
      '1969': ['fp', 'dsp'],
      '1970': ['fp', 'dsp'],
      '1971': ['fp', 'dsp'],
      '1972': ['fp', 'dsp'],
      '1973': ['fp', 'dsp'],
      '1974': ['fp', 'dsp'],
      '1975': ['fp', 'dsp'],
      '1976': ['fp', 'dsp'],
      '1977': ['fp', 'dsp'],
      '1978': ['fp', 'dsp'],
      '1979': ['fp', 'dsp'],
      '1980': ['fp', 'dsp'],
      '1981': ['fp', 'dsp'],
      '1982': ['fp', 'dsp'],
      '1983': ['fp', 'dsp'],
      '1984': ['fp', 'dsp'],
    },
    '900': {
      '1979': ['dsp'],
      '1980': ['dsp'],
      '1981': ['dsp'],
      '1982': ['dsp'],
      '1983': ['dsp'],
      '1984': ['dsp'],
      '1985': ['dsp'],
      '1986': ['dsp'],
      '1987': ['dsp'],
      '1988': ['dsp'],
      '1989': ['dsp'],
      '1990': ['dsp'],
      '1991': ['dsp'],
      '1992': ['dsp'],
      '1993': ['dsp'],
      '1994': ['dsp'],
      '1995': ['dsp'],
      '1996': ['dsp'],
      '1997': ['dsp'],
      '1998': ['dsp'],
    },
    '9-2X': {
      '2005': ['sth'],
      '2006': ['sth'],
    },
    '9-2X Aero (2.0L Turbo)': {
      '2005': ['ds'],
      '2006': ['ds'],
    },
    '9-2X Linear (2.5L)': {
      'all': ['gs'],
    },
    '9-3 (non-Viggen)': {
      '1998': ['stx'],
      '1999': ['stx'],
      '2000': ['stx'],
      '2001': ['stx'],
      '2002': ['stx'],
      '2003': ['stx'],
      '2004': ['stx'],
      '2005': ['stx'],
      '2006': ['stx'],
      '2007': ['stx'],
      '2008': ['stx'],
      '2009': ['stx'],
      '2010': ['stx'],
      '2011': ['stx'],
      '2012': ['stx'],
    },
    '96 (non-turbo, FWD)': {
      '1960': ['ep'],
      '1961': ['ep'],
      '1962': ['ep'],
      '1963': ['ep'],
      '1964': ['ep'],
      '1965': ['ep'],
      '1966': ['ep'],
      '1967': ['ep'],
      '1968': ['ep'],
      '1969': ['ep'],
      '1970': ['ep'],
      '1971': ['ep'],
      '1972': ['ep'],
      '1973': ['ep'],
      '1974': ['ep'],
      '1975': ['ep'],
      '1976': ['ep'],
      '1977': ['ep'],
      '1978': ['ep'],
      '1979': ['ep'],
      '1980': ['ep'],
    },
    '96 Sedan (843 cc, 2-stroke)': {
      'all': ['ep'],
    },
    '99 (non-turbo, FWD)': {
      '1969': ['ep'],
      '1970': ['ep'],
      '1971': ['ep'],
      '1972': ['ep'],
      '1973': ['ep'],
      '1974': ['ep'],
      '1975': ['ep'],
      '1976': ['ep'],
      '1977': ['ep'],
      '1978': ['ep'],
      '1979': ['ep'],
      '1980': ['ep'],
      '1981': ['ep'],
      '1982': ['ep'],
      '1983': ['ep'],
      '1984': ['ep'],
    },
    '99 EMS': {
      'all': ['dsp'],
    },
    '99 Turbo': {
      'all': ['dsp', 'gs'],
    },
    '900 (V6)': {
      '1994': ['hs'],
      '1995': ['hs'],
      '1996': ['hs'],
      '1997': ['hs'],
    },
    '900 (non-turbo, FWD)': {
      '1979': ['ep'],
      '1980': ['ep'],
      '1981': ['ep'],
      '1982': ['ep'],
      '1983': ['ep'],
      '1984': ['ep'],
      '1985': ['ep'],
      '1986': ['ep'],
      '1987': ['ep'],
      '1988': ['ep'],
      '1989': ['ep'],
      '1990': ['ep'],
      '1991': ['ep'],
      '1992': ['ep'],
      '1993': ['ep'],
      '1994': ['ep'],
    },
    '900 SPG Turbo 16v': {
      '1979': ['fp'],
      '1980': ['fp'],
      '1981': ['fp'],
      '1982': ['fp'],
      '1983': ['fp'],
      '1984': ['fp'],
      '1985': ['fp'],
      '1986': ['fp'],
      '1987': ['fp'],
      '1988': ['fp'],
    },
    '900 Turbo': {
      '1979': ['dsp', 'fp', 'gs'],
      '1980': ['dsp', 'fp', 'gs'],
      '1981': ['dsp', 'fp', 'gs'],
      '1982': ['dsp', 'fp', 'gs'],
      '1983': ['dsp', 'fp', 'gs'],
      '1984': ['dsp', 'fp', 'gs'],
      '1985': ['dsp', 'fp', 'gs'],
      '1986': ['dsp', 'fp', 'gs'],
      '1987': ['dsp', 'fp', 'gs'],
      '1988': ['dsp', 'fp', 'gs'],
      '1989': ['dsp', 'fp', 'gs'],
      '1990': ['dsp', 'fp', 'gs'],
      '1991': ['dsp', 'fp', 'gs'],
      '1992': ['dsp', 'fp', 'gs'],
      '1993': ['dsp', 'fp', 'gs'],
      '1994': ['dsp', 'fp', 'gs'],
      '1995': ['dsp', 'fp', 'gs'],
      '1996': ['dsp', 'fp', 'gs'],
      '1997': ['dsp', 'fp', 'gs'],
      '1998': ['dsp', 'fp', 'gs'],
    },
    'Not Otherwise Classified': {
      'all': ['hs'],
    },
    'SPG (16v & Turbo)': {
      'all': ['esp'],
    },
    'Sedan (non-turbo, FWD, Not Otherwise Classified)': {
      'all': ['ep'],
    },
    'Sonett (1498 & 1699 cc)': {
      'all': ['ep'],
    },
    'Sonnet': {
      '1968': ['fsp'],
      '1969': ['fsp'],
      '1970': ['fsp'],
      '1971': ['fsp'],
      '1972': ['fsp'],
      '1973': ['fsp'],
      '1974': ['fsp'],
    },
    'Turbo models (Not Otherwise Classified)': {
      'all': ['gs'],
    },
  },
  'Saleen': {
    'Mustang 302 & 351 (non-super-charged)': {
      '1984': ['esp', 'sm'],
      '1985': ['esp', 'sm'],
      '1986': ['esp', 'sm'],
      '1987': ['esp', 'sm'],
      '1988': ['esp', 'sm'],
      '1989': ['esp', 'sm'],
      '1990': ['esp', 'sm'],
      '1991': ['esp', 'sm'],
      '1992': ['esp', 'sm'],
      '1993': ['esp', 'sm'],
    },
    'Mustang (w/o IRS or forced induction)': {
      '1979': ['bs', 'cp', 'sm'],
      '1980': ['bs', 'cp', 'sm'],
      '1981': ['bs', 'cp', 'sm'],
      '1982': ['bs', 'cp', 'sm'],
      '1983': ['bs', 'cp', 'sm'],
      '1984': ['bs', 'cp', 'sm'],
      '1985': ['bs', 'cp', 'sm'],
      '1986': ['bs', 'cp', 'sm'],
      '1987': ['bs', 'cp', 'sm'],
      '1988': ['bs', 'cp', 'sm'],
      '1989': ['bs', 'cp', 'sm'],
      '1990': ['bs', 'cp', 'sm'],
      '1991': ['bs', 'cp', 'sm'],
      '1992': ['bs', 'cp', 'sm'],
      '1993': ['bs', 'cp', 'sm'],
    },
    'Mustang S281E & Mustang (Not Otherwise Classified)': {
      'all': ['bsp', 'sm'],
    },
  },
  'Saturn': {
    '8v engine': {
      'all': ['hs'],
    },
    'Astra': {
      '2008': ['hs', 'sts'],
      '2009': ['hs', 'sts'],
    },
    'DOHC model (Not Otherwise Classified)': {
      'all': ['hs'],
    },
    'ION (non-supercharged)': {
      'all': ['hs', 'dsp', 'ep', 'sts'],
    },
    'ION Redline (Supercharged)': {
      'all': ['gs', 'sts'],
    },
    'L series (all)': {
      'all': ['hs', 'ep'],
    },
    'SC': {
      'all': ['sts', 'fsp', 'ep'],
    },
    'SL': {
      'all': ['sts', 'fsp', 'ep'],
    },
    'SW': {
      'all': ['sts', 'fsp', 'ep'],
    },
    'Sky (non-turbo)': {
      '2007': ['cs', 'stx', 'csp', 'dp', 'cams'],
      '2008': ['cs', 'stx', 'csp', 'dp', 'cams'],
      '2009': ['cs', 'stx', 'csp', 'dp', 'cams'],
      '2010': ['cs', 'stx', 'csp', 'dp', 'cams'],
    },
    'Sky Redline (Turbo)': {
      '2007': ['as', 'asp', 'fp', 'cams'],
      '2008': ['as', 'asp', 'fp', 'cams'],
      '2009': ['as', 'asp', 'fp', 'cams'],
      '2010': ['as', 'asp', 'fp', 'cams'],
    },
  },
  'Scion': {
    'FR-S (with TRD suspension; incl. Release Series 1.0 and 2.0)': {
      '2013': ['cs', 'ssc', 'stx', 'csp'],
      '2014': ['cs', 'ssc', 'stx', 'csp'],
      '2015': ['cs', 'ssc', 'stx', 'csp'],
      '2016': ['cs', 'ssc', 'stx', 'csp'],
    },
    'FR-S (without TRD suspension components)': {
      '2013': ['ds', 'ssc', 'stx', 'csp'],
      '2014': ['ds', 'ssc', 'stx', 'csp'],
      '2015': ['ds', 'ssc', 'stx', 'csp'],
      '2016': ['ds', 'ssc', 'stx', 'csp'],
    },
    'iA': {
      '2016': ['hs', 'sts'],
    },
    'iM': {
      '2016': ['hs', 'sts'],
    },
    'iQ CVT': {
      'all': ['sts'],
    },
    'tC': {
      '2005': ['sts', 'fsp', 'hs'],
      '2006': ['sts', 'fsp', 'hs'],
      '2007': ['sts', 'fsp', 'hs'],
      '2008': ['sts', 'fsp', 'hs'],
      '2009': ['sts', 'fsp', 'hs'],
      '2010': ['sts', 'fsp', 'hs'],
      '2011': ['sts', 'fsp', 'hs'],
      '2012': ['sts', 'fsp', 'hs'],
      '2013': ['sts', 'fsp', 'hs'],
      '2014': ['sts', 'fsp', 'hs'],
      '2015': ['sts', 'fsp', 'hs'],
      '2016': ['sts', 'fsp', 'hs'],
    },
    'xA': {
      '2004': ['hs', 'sts'],
      '2005': ['hs', 'sts'],
      '2006': ['hs', 'sts'],
    },
    'xB': {
      '2008': ['hs', 'sts'],
      '2009': ['hs', 'sts'],
      '2010': ['hs', 'sts'],
      '2011': ['hs', 'sts'],
      '2012': ['hs', 'sts'],
      '2013': ['hs', 'sts'],
      '2014': ['hs', 'sts'],
      '2015': ['hs', 'sts'],
    },
    'xD': {
      '2008': ['sts'],
      '2009': ['sts'],
      '2010': ['sts'],
      '2011': ['sts'],
      '2012': ['sts'],
      '2013': ['sts'],
    },
  },
  'Shelby': {
    'Charger (non-turbo)': {
      'all': ['hs'],
    },
    'Charger turbo': {
      'all': ['dsp'],
    },
    'Cobra': {
      '1963': ['bs', 'xp', 'cams'],
      '1964': ['bs', 'xp', 'cams'],
      '1965': ['bs', 'xp', 'cams'],
      '1966': ['bs', 'xp', 'cams'],
      '1967': ['bs', 'xp', 'cams'],
    },
    'Cobra 289': {
      'all': ['asp', 'bs', 'xp', 'cams'],
    },
    'GT350': {
      '1965': ['fs', 'esp', 'cp', 'camt'],
      '1966': ['fs', 'esp', 'cp', 'camt'],
      '1967': ['fs', 'esp', 'cp', 'camt'],
      '1968': ['fs', 'esp', 'cp', 'camt'],
      '1969': ['fs', 'esp', 'cp', 'camt'],
      '1970': ['fs', 'esp', 'cp', 'camt'],
    },
    'GT500': {
      '1965': ['cp', 'camt'],
      '1966': ['cp', 'camt'],
      '1967': ['fs', 'esp', 'cp', 'camt'],
      '1968': ['fs', 'esp', 'cp', 'camt'],
      '1969': ['fs', 'esp', 'cp', 'camt'],
      '1970': ['fs', 'esp', 'cp', 'camt'],
    },
  },
  'Subaru': {
    'BRZ': {
      '2013': ['ds', 'stx', 'csp', 'dsp', 'ssc'],
      '2014': ['ds', 'stx', 'csp', 'dsp', 'ssc'],
      '2015': ['ds', 'ssc', 'stx', 'dsp'],
      '2016': ['ds', 'ssc', 'stx', 'dsp'],
      '2017': ['ds', 'stx', 'dsp'],
      '2018': ['ds', 'stx', 'dsp'],
      '2019': ['ds', 'stx'],
      '2020': ['ds', 'stx'],
    },
    'BRZ tS': {
      '2018': ['cs', 'stx', 'dsp'],
    },
    'Forester (non-turbo)': {
      'all': ['fsp'],
    },
    'Forester XT': {
      'all': ['sth'],
    },
    'GL Coupe (non-turbo, FWD)': {
      '1980': ['ep'],
      '1981': ['ep'],
      '1982': ['ep'],
      '1983': ['ep'],
      '1984': ['ep'],
      '1985': ['ep'],
      '1986': ['ep'],
      '1987': ['ep'],
      '1988': ['ep'],
      '1989': ['ep'],
    },
    'Impreza': {
      'all': ['dsp'],
    },
    'Impreza 2.0i': {
      '2012': ['hs', 'sts', 'fsp'],
      '2013': ['hs', 'sts', 'fsp'],
      '2014': ['hs', 'sts'],
      '2015': ['hs', 'sts'],
    },
    'Impreza 2.5 (non-turbo)': {
      'all': ['gs'],
    },
    'Impreza 2.5 RS': {
      '1998': ['sts'],
      '1999': ['sts'],
      '2000': ['sts'],
      '2001': ['sts'],
    },
    'Impreza (1.8L, FWD)': {
      '1993': ['sts'],
      '1994': ['sts'],
      '1995': ['sts'],
      '1996': ['sts'],
    },
    'Impreza (2.5L) (Not Otherwise Classified)': {
      'all': ['dsp'],
    },
    'Impreza (AWD)': {
      'all': ['fp'],
    },
    'Impreza (Not Otherwise Classified)': {
      'all': ['hs'],
    },
    'Impreza WRX (incl. STI)': {
      '2002': ['asp'],
      '2003': ['asp'],
      '2004': ['asp'],
      '2005': ['asp'],
      '2006': ['asp'],
      '2007': ['asp'],
      '2008': ['asp'],
      '2009': ['asp'],
      '2010': ['asp'],
      '2011': ['asp'],
      '2012': ['asp'],
      '2013': ['asp'],
      '2014': ['asp'],
    },
    'Impreza WRX (incl. STI; excl. Type RA & 2019 STI)': {
      '2015': ['asp'],
      '2016': ['asp'],
      '2017': ['asp'],
      '2018': ['asp'],
      '2019': ['asp'],
    },
    'Impreza WRX STI': {
      'all': ['stu'],
    },
    'Legacy': {
      '1990': ['sts', 'fsp'],
      '1991': ['sts', 'fsp'],
      '1992': ['sts', 'fsp'],
      '1993': ['sts', 'fsp'],
      '1994': ['sts', 'fsp'],
    },
    'Legacy 2.5GT': {
      '2005': ['gs', 'sth', 'asp', 'esp'],
      '2006': ['gs', 'sth', 'asp', 'esp'],
      '2007': ['gs', 'sth', 'asp', 'esp'],
      '2008': ['gs', 'sth', 'asp', 'esp'],
      '2009': ['gs', 'sth', 'asp', 'esp'],
      '2010': ['gs', 'sth', 'asp', 'esp'],
      '2011': ['gs', 'sth', 'asp', 'esp'],
      '2012': ['gs', 'sth', 'asp', 'esp'],
    },
    'Legacy (6-cyl, all)': {
      '1998': ['dsp'],
      '1999': ['dsp'],
      '2000': ['dsp'],
      '2001': ['dsp'],
      '2002': ['dsp'],
      '2003': ['dsp'],
      '2004': ['dsp'],
      '2005': ['dsp'],
      '2006': ['dsp'],
      '2007': ['dsp'],
      '2008': ['dsp'],
      '2009': ['dsp'],
      '2010': ['dsp'],
      '2011': ['dsp'],
      '2012': ['dsp'],
      '2013': ['dsp'],
    },
    'Legacy (Not Otherwise Classified)': {
      'all': ['hs'],
    },
    'Legacy GT': {
      '2005': ['sth', 'fsp'],
      '2006': ['sth', 'fsp'],
      '2007': ['sth', 'fsp'],
      '2008': ['sth', 'fsp'],
    },
    'Not Otherwise Classified': {
      'all': ['hs'],
    },
    'Outback (6-cyl, all)': {
      '1998': ['dsp'],
      '1999': ['dsp'],
      '2000': ['dsp'],
      '2001': ['dsp'],
      '2002': ['dsp'],
      '2003': ['dsp'],
      '2004': ['dsp'],
      '2005': ['dsp'],
      '2006': ['dsp'],
      '2007': ['dsp'],
      '2008': ['dsp'],
      '2009': ['dsp'],
      '2010': ['dsp'],
      '2011': ['dsp'],
      '2012': ['dsp'],
      '2013': ['dsp'],
    },
    'STI (excl. S209)': {
      '2019': ['ds'],
      '2020': ['ds'],
      '2021': ['ds'],
    },
    'STI Type RA': {
      '2018': ['bs'],
    },
    'SVX': {
      '1992': ['hs', 'fp'],
      '1993': ['hs', 'fp'],
      '1994': ['hs', 'fp'],
      '1995': ['hs', 'fp'],
      '1996': ['hs', 'fp'],
      '1997': ['hs', 'fp'],
    },
    'Sedan (N/A, FWD, Not Otherwise Classified)': {
      'all': ['ep'],
    },
    'Sedan Turbo (Not Otherwise Classified)': {
      'all': ['hs'],
    },
    'Sedan/Coupe (Turbo, Not Otherwise Classified)': {
      'all': ['fp'],
    },
    'Turbo 4WD (all, Not Otherwise Classified)': {
      'all': ['fsp'],
    },
    'WRX (non-STI)': {
      '2002': ['gs', 'sth', 'fp'],
      '2003': ['gs', 'sth', 'fp'],
      '2004': ['gs', 'sth', 'fp'],
      '2005': ['gs', 'sth', 'fp'],
      '2006': ['gs', 'sth', 'fp'],
      '2007': ['gs', 'sth', 'fp'],
      '2008': ['gs', 'sth', 'fp'],
      '2009': ['ds', 'sth', 'fp'],
      '2010': ['ds', 'sth', 'fp'],
      '2011': ['ds', 'sth', 'fp'],
      '2012': ['ds', 'sth', 'fp'],
      '2013': ['ds', 'sth', 'fp'],
      '2014': ['ds', 'sth', 'fp'],
      '2015': ['ds', 'sth', 'fp'],
      '2016': ['ds', 'sth', 'fp'],
      '2017': ['ds', 'sth', 'fp'],
      '2018': ['ds', 'sth', 'fp'],
      '2019': ['ds', 'sth', 'fp'],
      '2020': ['ds', 'sth', 'fp'],
    },
    'WRX STI (including Special Edition)': {
      '2004': ['ds'],
      '2005': ['ds'],
      '2006': ['ds'],
      '2007': ['ds'],
      '2008': ['ds'],
      '2009': ['ds'],
      '2010': ['ds'],
      '2011': ['ds'],
      '2012': ['ds'],
      '2013': ['ds'],
      '2014': ['ds'],
      '2015': ['ds'],
      '2016': ['ds'],
      '2017': ['ds'],
      '2018': ['ds'],
    },
  },
  'Sunbeam': {
    'Alpine': {
      'all': ['hs', 'fsp', 'dp'],
    },
    'Tiger': {
      'all': ['es', 'asp'],
    },
  },
  'Suzuki': {
    'Aerio': {
      'all': ['fsp'],
    },
    'Cappuccino': {
      'all': ['xsb', 'dm'],
    },
    'Esteem GL': {
      'all': ['hs'],
    },
    'Forenza': {
      'all': ['hs'],
    },
    'Kizashi': {
      '2010': ['hs'],
      '2011': ['hs'],
      '2012': ['hs'],
      '2013': ['hs'],
    },
    'SX4 sedan': {
      '2007': ['hs'],
      '2008': ['hs'],
      '2009': ['hs'],
      '2010': ['hs'],
      '2011': ['hs'],
      '2012': ['hs'],
      '2013': ['hs'],
    },
    'Swift': {
      '1985': ['hs', 'fsp', 'ep'],
      '1986': ['hs', 'fsp', 'ep'],
      '1987': ['hs', 'fsp', 'ep'],
      '1988': ['hs', 'fsp', 'ep'],
      '1989': ['hs', 'fsp', 'ep'],
      '1990': ['hs', 'fsp', 'ep'],
      '1991': ['hs', 'fsp', 'ep'],
      '1992': ['hs', 'fsp', 'ep'],
      '1993': ['hs', 'fsp', 'ep'],
      '1994': ['hs', 'sts', 'ep'],
      '1995': ['hs', 'ep'],
      '1996': ['hs', 'ep'],
      '1997': ['hs', 'ep'],
      '1998': ['hs', 'ep'],
      '1999': ['hs', 'ep'],
      '2000': ['hs', 'ep'],
      '2001': ['hs', 'ep'],
      '2002': ['hs'],
      '2003': ['hs'],
      '2004': ['hs'],
      '2005': ['hs'],
      '2006': ['hs'],
      '2007': ['hs'],
      '2008': ['hs'],
      '2009': ['hs'],
      '2010': ['hs'],
      '2011': ['hs'],
      '2012': ['hs'],
    },
    'Swift Turbo': {
      'all': ['fp'],
    },
  },
  'TVR': {
    '1800': {
      'all': ['es', 'ssp', 'dp'],
    },
    '4-cyl': {
      'all': ['es', 'ssp'],
    },
    '8-cyl': {
      'all': ['bs', 'ssp'],
    },
    'Griffith 200': {
      'all': ['bs', 'ssp', 'xp'],
    },
    'Griffith 400': {
      'all': ['bs', 'ssp', 'xp'],
    },
    'Inline-6': {
      'all': ['es', 'ssp', 'fp'],
    },
    'V6': {
      'all': ['bs', 'ssp', 'fp'],
    },
    'V12': {
      'all': ['bs'],
    },
    'Vixen S2 (1599 cc)': {
      'all': ['es', 'ssp', 'dp'],
    },
  },
  'Tesla': {
    'Model 3': {
      '2018': ['ss', 'asp'],
      '2019': ['ss', 'asp'],
      '2020': ['ss', 'asp'],
      '2021': ['ss', 'asp'],
    },
    'Model S': {
      '2012': ['fs'],
      '2013': ['fs'],
      '2014': ['fs'],
    },
    'Model S AWD': {
      '2014': ['ss'],
      '2015': ['ss'],
      '2016': ['ss'],
      '2017': ['ss'],
      '2018': ['ss'],
      '2019': ['ss'],
      '2020': ['ss'],
      '2021': ['ss'],
    },
    'Model Y': {
      '2020': ['ss'],
      '2021': ['ss'],
    },
    'Roadster': {
      '2008': ['ss', 'ssr', 'ssp'],
      '2009': ['ss', 'ssr', 'ssp'],
      '2010': ['ss', 'ssr', 'ssp'],
      '2011': ['ss', 'ssr', 'ssp'],
      '2012': ['ss', 'ssr', 'ssp'],
      '2013': ['ss', 'ssr'],
    },
  },
  'Toyota': {
    '86 (with TRD Lowering Springs, TRD Sway Bar Kit, and TRD 17-in. Forged Wheel': {
      '2017': ['cs', 'stx', 'dsp'],
      '2018': ['cs', 'stx', 'dsp'],
      '2019': ['cs', 'stx'],
      '2020': ['cs', 'stx'],
    },
    '86 (without TRD suspension and wheels': {
      '2017': ['ds', 'stx', 'dsp'],
      '2018': ['ds', 'stx', 'dsp'],
      '2019': ['ds', 'stx'],
      '2020': ['ds', 'stx'],
    },
    'Camry (4-cyl)': {
      'all': ['hs', 'fsp'],
    },
    'Camry V6': {
      'all': ['hs', 'dsp'],
    },
    'Celica (all, non-AWD)': {
      '1971': ['hs', 'fsp', 'dp'],
      '1972': ['hs', 'fsp', 'dp'],
      '1973': ['hs', 'fsp', 'dp'],
      '1974': ['hs', 'fsp', 'dp'],
      '1975': ['hs', 'fsp', 'dp'],
      '1976': ['hs', 'fsp', 'dp'],
      '1977': ['hs', 'fsp', 'dp'],
      '1978': ['hs', 'fsp', 'dp'],
      '1979': ['hs', 'fsp', 'dp'],
      '1981': ['hs', 'fsp', 'dp'],
      '1982': ['hs', 'fsp', 'dp'],
      '1983': ['hs', 'fsp', 'dp'],
      '1984': ['hs', 'fsp', 'dp'],
      '1985': ['hs', 'fsp', 'dp'],
      '1986': ['hs', 'sts', 'fsp', 'ep'],
      '1987': ['hs', 'sts', 'fsp', 'ep'],
      '1988': ['hs', 'sts', 'fsp', 'ep'],
      '1989': ['hs', 'sts', 'fsp', 'ep'],
      '1991': ['hs', 'sts', 'fsp', 'ep'],
      '1992': ['hs', 'sts', 'fsp', 'ep'],
      '1993': ['hs', 'sts', 'fsp', 'ep'],
      '1994': ['hs', 'sts', 'fsp', 'ep'],
      '1995': ['hs', 'sts', 'fsp', 'ep'],
      '1996': ['hs', 'sts', 'fsp', 'ep'],
      '1997': ['hs', 'sts', 'fsp', 'ep'],
      '1998': ['hs', 'sts', 'fsp', 'ep'],
      '1999': ['hs', 'sts', 'fsp', 'ep'],
      '2000': ['gs', 'sts', 'dsp', 'ep'],
      '2001': ['gs', 'sts', 'dsp', 'ep'],
      '2002': ['gs', 'sts', 'dsp', 'ep'],
      '2003': ['gs', 'sts', 'dsp', 'ep'],
      '2004': ['gs', 'sts', 'dsp', 'ep'],
      '2005': ['gs', 'sts', 'dsp', 'ep'],
    },
    'Celica All-Trac Turbo': {
      'all': ['gs', 'dsp', 'fp'],
    },
    'Corolla': {
      '1970': ['hs', 'fsp'],
      '1971': ['hs', 'fsp'],
      '1972': ['hs', 'fsp'],
      '1973': ['hs', 'fsp'],
      '1974': ['hs', 'fsp'],
      '1975': ['hs', 'fsp'],
      '1976': ['hs', 'fsp'],
      '1977': ['hs', 'fsp'],
      '1978': ['hs', 'fsp'],
      '1979': ['hs', 'fsp'],
      '1980': ['hs', 'fsp'],
      '1981': ['hs', 'fsp'],
      '1982': ['hs', 'fsp'],
      '1983': ['hs', 'fsp'],
      '1984': ['hs', 'sts', 'fsp'],
      '1985': ['hs', 'sts', 'fsp'],
      '1986': ['hs', 'sts', 'fsp'],
      '1987': ['hs', 'sts', 'fsp'],
      '1988': ['hs', 'sts', 'fsp'],
      '1989': ['hs', 'sts', 'fsp'],
      '1990': ['hs', 'sts', 'fsp'],
      '1991': ['hs', 'sts', 'fsp'],
      '1992': ['hs', 'sts'],
      '1993': ['hs', 'sts'],
      '1994': ['hs', 'sts'],
      '1995': ['hs', 'sts'],
      '1996': ['hs', 'sts'],
      '1997': ['hs', 'sts'],
      '1998': ['hs'],
      '1999': ['hs'],
      '2000': ['hs'],
      '2001': ['hs'],
      '2002': ['hs'],
      '2003': ['hs', 'sts', 'fsp'],
      '2004': ['hs', 'sts', 'fsp'],
      '2005': ['hs', 'sts', 'fsp'],
      '2006': ['hs', 'sts', 'fsp'],
      '2007': ['hs', 'sts', 'fsp'],
      '2008': ['hs', 'sts', 'fsp'],
      '2009': ['hs', 'sts'],
      '2010': ['hs', 'sts'],
      '2011': ['hs', 'sts'],
      '2012': ['hs', 'sts'],
      '2013': ['hs', 'sts'],
      '2014': ['hs', 'sts'],
      '2015': ['hs', 'sts'],
      '2016': ['hs', 'sts'],
      '2017': ['hs', 'sts'],
      '2018': ['hs', 'sts'],
      '2019': ['hs', 'sts'],
    },
    'Cressida': {
      'all': ['hs'],
    },
    'Echo': {
      '2001': ['sts', 'hs'],
      '2002': ['sts', 'hs'],
      '2003': ['sts', 'hs'],
      '2004': ['sts', 'hs'],
      '2005': ['sts', 'hs'],
    },
    'MR2 (non-turbo, non-supercharged)': {
      '1985': ['es', 'sts', 'csp'],
      '1986': ['es', 'sts', 'csp'],
      '1987': ['es', 'sts', 'csp'],
      '1988': ['es', 'sts', 'csp'],
      '1989': ['es', 'sts', 'csp'],
      '1990': ['es', 'sts', 'csp'],
      '1991': ['es', 'sts', 'asp'],
      '1992': ['es', 'sts', 'asp'],
      '1993': ['es', 'sts', 'asp'],
      '1994': ['es', 'sts', 'asp'],
      '1995': ['es', 'sts', 'asp'],
    },
    'MR2 Spyder': {
      '2000': ['es', 'str', 'csp', 'dp', 'xsb'],
      '2001': ['es', 'str', 'csp', 'dp', 'xsb'],
      '2002': ['es', 'str', 'csp', 'dp', 'xsb'],
      '2003': ['es', 'str', 'csp', 'dp', 'xsb'],
      '2004': ['es', 'str', 'csp', 'dp', 'xsb'],
      '2005': ['es', 'str', 'csp', 'dp', 'xsb'],
    },
    'MR2 Supercharged': {
      '1985': ['es', 'csp'],
      '1986': ['es', 'csp'],
      '1987': ['es', 'csp'],
      '1988': ['es', 'str', 'csp'],
      '1989': ['es', 'str', 'csp'],
    },
    'MR2 Turbo': {
      '1991': ['cs', 'asp', 'xsa'],
      '1992': ['cs', 'asp', 'xsa'],
      '1993': ['cs', 'asp', 'xsa'],
      '1994': ['cs', 'asp', 'xsa'],
      '1995': ['cs', 'asp', 'xsa'],
    },
    'Matrix': {
      '2003': ['sts', 'hs'],
      '2004': ['sts', 'hs'],
      '2005': ['sts', 'hs'],
      '2006': ['sts', 'hs'],
      '2007': ['sts', 'hs'],
      '2008': ['sts', 'hs'],
      '2009': ['sts', 'hs'],
      '2010': ['sts', 'hs'],
      '2011': ['sts', 'hs'],
      '2012': ['sts', 'hs'],
      '2013': ['sts', 'hs'],
    },
    'Paseo': {
      'all': ['hs'],
    },
    'Prius': {
      'all': ['hs'],
    },
    'Starlet': {
      'all': ['hs', 'fsp'],
    },
    'Supra (non-turbo)': {
      '1979': ['hs', 'fp'],
      '1980': ['hs', 'fp'],
      '1981': ['hs', 'fp'],
      '1982': ['hs', 'fp'],
      '1983': ['hs', 'fp'],
      '1984': ['hs', 'fp'],
      '1985': ['hs', 'fp'],
      '1986': ['hs', 'fp'],
      '1987': ['hs'],
      '1988': ['hs'],
      '1989': ['hs'],
      '1990': ['hs'],
      '1991': ['hs'],
      '1992': ['hs'],
      '1993': ['fs', 'stx', 'esp'],
      '1994': ['fs', 'stx', 'esp'],
      '1995': ['fs', 'stx', 'esp'],
      '1996': ['fs', 'stx', 'esp'],
      '1997': ['fs', 'stx'],
      '1998': ['fs', 'stx'],
    },
    'Supra Turbo': {
      '1987': ['fs'],
      '1988': ['fs'],
      '1989': ['fs'],
      '1990': ['fs'],
      '1991': ['fs'],
      '1992': ['fs'],
      '1993': ['bs', 'asp'],
      '1994': ['bs', 'asp'],
      '1995': ['bs', 'asp'],
      '1996': ['bs', 'asp'],
      '1997': ['bs', 'asp'],
      '1998': ['bs', 'asp'],
      '2020': ['bs', 'asp'],
    },
    'Tacoma': {
      '1995': ['hs', 'stx'],
      '1996': ['hs', 'stx'],
      '1997': ['hs', 'stx'],
      '1998': ['hs', 'stx'],
      '1999': ['hs', 'stx'],
      '2000': ['hs', 'stx'],
      '2001': ['hs', 'stx'],
      '2002': ['hs', 'stx'],
      '2003': ['hs', 'stx'],
      '2004': ['hs', 'stx'],
      '2005': ['hs', 'stx'],
      '2006': ['hs', 'stx'],
      '2007': ['hs', 'stx'],
      '2008': ['hs', 'stx'],
      '2009': ['hs', 'stx'],
      '2010': ['hs', 'stx'],
      '2011': ['hs', 'stx'],
      '2012': ['hs', 'stx'],
      '2013': ['hs', 'stx'],
      '2014': ['hs', 'stx'],
      '2015': ['hs', 'stx'],
      '2016': ['hs', 'stx'],
      '2017': ['hs', 'stx'],
      '2018': ['hs', 'stx'],
      '2019': ['hs', 'stx'],
      '2020': ['hs', 'stx'],
    },
    'Tercel': {
      'all': ['hs', 'fsp'],
    },
    'Yaris': {
      'all': ['hs', 'sts', 'fsp'],
    },
  },
  'Triumph': {
    'GT-6': {
      'all': ['hs', 'fsp', 'dp'],
    },
    'Herald (all) ': {
      'all': ['hs', 'fsp'],
    },
    'Spitfire': {
      'all': ['hs', 'fsp', 'dp'],
    },
    'Stag': {
      'all': ['fs'],
    },
    'TR-2 & TR-3 ': {
      'all': ['hs', 'fsp', 'dp'],
    },
    'TR-4 & TR-4A ': {
      'all': ['hs', 'fsp', 'dp'],
    },
    'TR-7': {
      'all': ['hs', 'fsp', 'dp'],
    },
    'TR-8': {
      'all': ['es', 'bsp'],
    },
    'TR-250 & TR-6 ': {
      'all': ['hs', 'fsp'],
    },
  },
  'Volkswagen': {
    'Beetle': {
      '1950': ['hs', 'sts', 'fsp'],
      '1951': ['hs', 'sts', 'fsp'],
      '1952': ['hs', 'sts', 'fsp'],
      '1953': ['hs', 'sts', 'fsp'],
      '1954': ['hs', 'sts', 'fsp'],
      '1955': ['hs', 'sts', 'fsp'],
      '1956': ['hs', 'sts', 'fsp'],
      '1957': ['hs', 'sts', 'fsp'],
      '1958': ['hs', 'sts', 'fsp'],
      '1959': ['hs', 'sts', 'fsp'],
      '1960': ['hs', 'sts', 'fsp'],
      '1961': ['hs', 'sts', 'fsp'],
      '1962': ['hs', 'sts', 'fsp'],
      '1963': ['hs', 'sts', 'fsp'],
      '1964': ['hs', 'sts', 'fsp'],
      '1965': ['hs', 'sts', 'fsp', 'dp'],
      '1966': ['hs', 'sts', 'fsp', 'dp'],
      '1967': ['hs', 'sts', 'fsp', 'dp'],
      '1968': ['hs', 'sts', 'fsp', 'dp'],
      '1969': ['hs', 'sts', 'fsp', 'dp'],
      '1970': ['hs', 'sts', 'fsp', 'dp'],
      '1971': ['hs', 'sts', 'fsp', 'dp'],
      '1972': ['hs', 'sts', 'fsp', 'dp'],
      '1973': ['hs', 'sts', 'fsp', 'dp'],
      '1974': ['hs', 'sts', 'fsp', 'dp'],
      '1975': ['hs', 'sts', 'fsp', 'dp'],
      '1976': ['hs', 'sts', 'fsp', 'dp'],
      '1977': ['hs', 'sts', 'fsp', 'dp'],
      '2011': ['hs'],
      '2012': ['hs'],
      '2013': ['hs'],
      '2014': ['hs'],
      '2015': ['hs'],
      '2016': ['hs'],
      '2017': ['hs'],
      '2018': ['hs'],
      '2019': ['hs'],
    },
    'Cabrio': {
      'all': ['hs', 'stx', 'fsp'],
    },
    'Corrado': {
      'all': ['hs', 'stx', 'fsp', 'ep'],
    },
    'Dasher': {
      'all': ['hs', 'fsp'],
    },
    'Eos (2.0T)': {
      '2007': ['hs'],
      '2008': ['hs'],
      '2009': ['hs'],
      '2010': ['hs'],
      '2011': ['hs'],
      '2012': ['hs'],
      '2013': ['hs'],
      '2014': ['hs'],
      '2015': ['hs'],
      '2016': ['hs'],
    },
    'Fox': {
      'all': ['hs', 'fsp'],
    },
    'GLI 2.0L Turbo': {
      '2006': ['gs'],
      '2007': ['gs'],
      '2008': ['gs'],
      '2009': ['gs'],
      '2010': ['gs'],
      '2011': ['gs'],
      '2012': ['gs'],
      '2013': ['gs'],
      '2014': ['gs'],
      '2015': ['gs'],
      '2016': ['gs'],
      '2017': ['gs'],
      '2018': ['gs'],
      '2019': ['gs'],
    },
    'Golf': {
      '1974': ['hs', 'sts', 'sm', 'ep'],
      '1975': ['hs', 'sts', 'sm', 'ep'],
      '1976': ['hs', 'sts', 'sm', 'ep'],
      '1977': ['hs', 'sts', 'sm', 'ep'],
      '1978': ['hs', 'sts', 'sm', 'ep'],
      '1979': ['hs', 'sts', 'sm', 'ep'],
      '1980': ['hs', 'sts', 'sm', 'ep'],
      '1981': ['hs', 'sts', 'sm', 'ep'],
      '1982': ['hs', 'sts', 'sm', 'ep'],
      '1983': ['hs', 'sts', 'sm', 'ep'],
      '1984': ['hs', 'sts', 'sm', 'ep'],
      '1985': ['hs', 'sts', 'fsp', 'sm', 'ep'],
      '1986': ['hs', 'sts', 'fsp', 'sm', 'ep'],
      '1987': ['hs', 'sts', 'fsp', 'sm', 'ep'],
      '1988': ['hs', 'sts', 'fsp', 'sm', 'ep'],
      '1989': ['hs', 'sts', 'fsp', 'sm', 'ep'],
      '1990': ['hs', 'sts', 'fsp', 'sm', 'ep'],
      '1991': ['hs', 'sts', 'fsp', 'sm', 'ep'],
      '1992': ['hs', 'sts', 'fsp', 'sm', 'ep'],
      '1993': ['hs', 'fsp', 'sm', 'ep'],
      '1994': ['hs', 'fsp', 'sm', 'ep'],
      '1995': ['hs', 'fsp', 'sm', 'ep'],
      '1996': ['hs', 'fsp', 'sm', 'ep'],
      '1997': ['hs', 'fsp', 'sm', 'ep'],
      '1998': ['hs', 'fsp', 'sm', 'ep'],
      '1999': ['hs', 'sm', 'ep'],
      '2000': ['hs', 'sm', 'ep'],
      '2001': ['hs', 'sm', 'ep'],
      '2002': ['hs', 'sm', 'ep'],
      '2003': ['hs', 'sm', 'ep'],
      '2004': ['hs', 'sm', 'ep'],
      '2005': ['hs', 'sm', 'ep'],
      '2006': ['hs', 'sm', 'ep'],
      '2007': ['hs', 'sm', 'ep'],
      '2008': ['hs', 'sm', 'ep'],
      '2009': ['hs', 'sm', 'ep'],
      '2010': ['hs', 'sm', 'ep'],
      '2011': ['hs', 'sm', 'ep'],
      '2012': ['hs', 'sm', 'ep'],
      '2013': ['hs', 'sm', 'ep'],
      '2014': ['hs', 'sm', 'ep'],
      '2015': ['hs', 'sm', 'ep'],
      '2016': ['hs', 'sm', 'ep'],
      '2017': ['hs', 'sm', 'ep'],
      '2018': ['hs', 'sm', 'ep'],
      '2019': ['hs', 'sm', 'ep'],
    },
    'Golf GTI': {
      '1975': ['hs', 'sts', 'dsp', 'sm', 'ep'],
      '1976': ['hs', 'sts', 'dsp', 'sm', 'ep'],
      '1977': ['hs', 'sts', 'dsp', 'sm', 'ep'],
      '1978': ['hs', 'sts', 'dsp', 'sm', 'ep'],
      '1979': ['hs', 'sts', 'dsp', 'sm', 'ep'],
      '1980': ['hs', 'sts', 'dsp', 'sm', 'ep'],
      '1981': ['hs', 'sts', 'dsp', 'sm', 'ep'],
      '1982': ['hs', 'sts', 'dsp', 'sm', 'ep'],
      '1983': ['hs', 'sts', 'dsp', 'sm', 'ep'],
      '1984': ['hs', 'sts', 'dsp', 'sm', 'ep'],
      '1985': ['hs', 'sts', 'dsp', 'sm', 'ep'],
      '1986': ['hs', 'sts', 'dsp', 'sm', 'ep'],
      '1987': ['hs', 'sts', 'dsp', 'sm', 'ep'],
      '1988': ['hs', 'sts', 'dsp', 'sm', 'ep'],
      '1989': ['hs', 'sts', 'dsp', 'sm', 'ep'],
      '1990': ['hs', 'sts', 'dsp', 'sm', 'ep'],
      '1991': ['hs', 'sts', 'dsp', 'sm', 'ep'],
      '1992': ['hs', 'sts', 'dsp', 'sm', 'ep'],
      '1993': ['hs', 'dsp', 'sm', 'ep'],
      '1994': ['hs', 'dsp', 'sm', 'ep'],
      '1995': ['hs', 'dsp', 'sm', 'ep'],
      '1996': ['hs', 'dsp', 'sm', 'ep'],
      '1997': ['hs', 'dsp', 'sm', 'ep'],
      '1998': ['hs', 'dsp', 'sm', 'ep'],
      '1999': ['hs', 'dsp', 'sm', 'ep'],
      '2000': ['hs', 'dsp', 'sm', 'ep'],
      '2001': ['hs', 'dsp', 'sm', 'ep'],
      '2002': ['hs', 'dsp', 'sm', 'ep'],
      '2003': ['hs', 'dsp', 'sm', 'ep'],
      '2004': ['hs', 'dsp', 'sm', 'ep'],
      '2005': ['hs', 'dsp', 'sm', 'ep'],
      '2006': ['gs', 'dsp', 'sm', 'ep'],
      '2007': ['gs', 'dsp', 'sm', 'ep'],
      '2008': ['gs', 'dsp', 'sm', 'ep'],
      '2009': ['gs', 'dsp', 'sm', 'ep'],
      '2010': ['gs', 'dsp', 'sm', 'ep'],
      '2011': ['gs', 'dsp', 'sm', 'ep'],
      '2012': ['gs', 'dsp', 'sm', 'ep'],
      '2013': ['gs', 'dsp', 'sm', 'ep'],
      '2014': ['gs', 'dsp', 'sm', 'ep'],
      '2015': ['gs', 'dsp', 'sm', 'ep'],
      '2016': ['gs', 'dsp', 'sm', 'ep'],
      '2017': ['gs', 'dsp', 'sm', 'ep'],
      '2018': ['gs', 'dsp', 'sm', 'ep'],
      '2019': ['gs', 'dsp', 'sm', 'ep'],
    },
    'Golf GTI 1.8L Turbo': {
      'all': ['hs', 'sm', 'ep'],
    },
    'Golf R': {
      '2012': ['ds', 'bsp', 'sm', 'ep'],
      '2013': ['ds', 'bsp', 'sm', 'ep'],
      '2015': ['ds', 'stu', 'asp', 'sm', 'ep'],
      '2016': ['ds', 'stu', 'asp', 'sm', 'ep'],
      '2017': ['ds', 'stu', 'asp', 'sm', 'ep'],
      '2018': ['ds', 'stu', 'asp', 'sm', 'ep'],
      '2019': ['ds', 'stu', 'asp', 'sm', 'ep'],
    },
    'Jetta 1.8L Turbo': {
      'all': ['hs', 'dsp', 'ep'],
    },
    'Jetta 2.0L Turbo': {
      '2006': ['gs', 'dsp', 'ep'],
      '2007': ['gs', 'dsp', 'ep'],
      '2008': ['gs', 'dsp', 'ep'],
      '2009': ['gs', 'dsp', 'ep'],
      '2010': ['gs', 'dsp', 'ep'],
      '2011': ['gs', 'dsp', 'ep'],
      '2012': ['gs', 'dsp', 'ep'],
      '2013': ['gs', 'dsp', 'ep'],
      '2014': ['gs', 'dsp', 'ep'],
      '2015': ['gs', 'dsp', 'ep'],
      '2016': ['gs', 'dsp', 'ep'],
      '2017': ['gs', 'dsp', 'ep'],
      '2018': ['gs', 'dsp', 'ep'],
      '2019': ['gs', 'dsp', 'ep'],
    },
    'Jetta TDI': {
      'all': ['hs', 'sts', 'fsp', 'ep'],
    },
    'Karmann Ghia': {
      'all': ['hs', 'sts', 'fsp'],
    },
    'New Beetle': {
      'all': ['hs', 'dsp', 'ep'],
    },
    'Passat (2.0L Turbo)': {
      'all': ['gs', 'sth', 'fsp'],
    },
    'Passat (3.6L VR6)': {
      'all': ['gs', 'stx', 'dsp', 'fsp'],
    },
    'Passat (Not Otherwise Classified)': {
      'all': ['hs', 'fsp'],
    },
    'Passat (W8)': {
      'all': ['hs', 'stx', 'esp'],
    },
    'Quantum': {
      'all': ['hs', 'fsp'],
    },
    'R32': {
      '2004': ['ds', 'stx', 'dsp', 'fp'],
      '2008': ['ds', 'stx', 'dsp'],
    },
    'Rabbit': {
      'all': ['hs', 'sts', 'fsp', 'ep'],
    },
    'Rabbit GTI': {
      'all': ['hs', 'sts', 'fsp', 'ep'],
    },
    'Scirocco': {
      'all': ['hs', 'fsp'],
    },
    'e-Golf': {
      '2015': ['hs'],
      '2016': ['hs'],
      '2017': ['hs'],
      '2018': ['hs'],
    },
  },
  'Volvo': {
    '122S': {
      '1956': ['dp'],
      '1957': ['dp'],
      '1958': ['dp'],
      '1959': ['dp'],
      '1960': ['dp'],
      '1961': ['dp'],
      '1962': ['dp'],
      '1963': ['dp'],
      '1964': ['dp'],
      '1965': ['dp'],
      '1966': ['dp'],
      '1967': ['dp'],
      '1968': ['dp'],
      '1969': ['dp'],
      '1970': ['dp'],
    },
    '142S & 142E': {
      '1967': ['dp'],
      '1968': ['dp'],
      '1969': ['dp'],
      '1970': ['dp'],
      '1971': ['dp'],
      '1972': ['dp'],
      '1973': ['dp'],
      '1974': ['dp'],
    },
    '240 Turbo': {
      '1981': ['gs', 'sts', 'dsp'],
      '1982': ['gs', 'sts', 'dsp'],
      '1983': ['gs', 'sts', 'dsp'],
      '1984': ['gs', 'sts', 'dsp'],
      '1985': ['gs', 'sts', 'dsp'],
    },
    '700 Series': {
      'all': ['esp'],
    },
    '800 Series': {
      'all': ['esp'],
    },
    'C30': {
      'all': ['sth'],
    },
    'NOC': {
      'all': ['hs'],
    },
    'P-1800 (1780 cc)': {
      'all': ['dp'],
    },
    'P-1800 (1982 cc)': {
      'all': ['dp'],
    },
    'S40': {
      '1995': ['dsp'],
      '1996': ['dsp'],
      '1997': ['dsp'],
      '1998': ['dsp'],
      '1999': ['dsp'],
      '2000': ['dsp'],
      '2001': ['dsp'],
      '2002': ['dsp'],
      '2003': ['dsp'],
      '2004': ['dsp'],
      '2005': ['dsp'],
      '2006': ['dsp'],
      '2007': ['dsp'],
      '2008': ['dsp'],
      '2009': ['dsp'],
      '2010': ['dsp'],
      '2011': ['dsp'],
    },
    'S40 (non-T5)': {
      'all': ['sts'],
    },
    'S60 & V70': {
      'all': ['esp'],
    },
    'S60 Polestar': {
      '2016': ['ds'],
      '2017': ['ds'],
      '2018': ['ds'],
      '2019': ['ds'],
      '2020': ['ds'],
    },
    'S60R': {
      '2004': ['asp', 'stu', 'gs'],
      '2005': ['asp', 'stu', 'gs'],
      '2006': ['asp', 'stu', 'gs'],
      '2007': ['asp', 'stu', 'gs'],
    },
    'Sedans (N/A, RWD, NOC)': {
      'all': ['dp'],
    },
    'Turbo models (NOC)': {
      'all': ['gs'],
    },
    'V40': {
      'all': ['sts'],
    },
    'V60 Polestar': {
      '2016': ['ds'],
      '2017': ['ds'],
      '2018': ['ds'],
      '2019': ['ds'],
      '2020': ['ds'],
    },
    'V70R': {
      '2004': ['asp', 'gs'],
      '2005': ['asp', 'gs'],
      '2006': ['asp', 'gs'],
      '2007': ['asp', 'gs'],
    },
  },
};

// Uncomment this to run sort.js in the project's home directory
// module.exports = {allSoloCars};

/**
 * handles navbar opening
 */
function openNav() { // eslint-disable-line no-unused-vars
  document.getElementById('mySidebar').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
}

/**
 * handles navbar closing
 */
function closeNav() { // eslint-disable-line no-unused-vars
  document.getElementById('mySidebar').style.width = '0';
  document.getElementById('main').style.marginLeft= '0';
}

/**
 * populates the subclass table
 */
function populateSubclasses() { // eslint-disable-line no-unused-vars
  for (const classAcronym in subclassMap) {
    if (Object.prototype.hasOwnProperty.call(subclassMap, classAcronym)) {
      const id = classAcronym.concat('-a');
      aSelect = document.getElementById(id);
      aSelect.text = subclassMap[classAcronym];
    }
  }
}

/**
 * populates the make, model, and year drop-down lists
 */
function lookupMakeModelYear() { // eslint-disable-line no-unused-vars
  const makeSelect = document.getElementById('make');
  const makeLength = makeSelect.options.length;
  for (i = makeLength-1; i >= 0; i--) {
    makeSelect.remove(i);
  }
  for (const make of Object.keys(allSoloCars)) {
    const newMake = document.createElement('option');
    newMake.text = make;
    makeSelect.add(newMake);
  }
  if (sessionStorage.getItem('make') in allSoloCars) {
    const providedMake = sessionStorage.getItem('make');
    makeSelect.value = providedMake;
  } else {
    sessionStorage.setItem('make', makeSelect.value);
  }

  const modelSelect = document.getElementById('model');
  const modelLength = modelSelect.options.length;
  for (i = modelLength-1; i >= 0; i--) {
    modelSelect.remove(i);
  }
  for (const model of Object.keys(allSoloCars[makeSelect.value])) {
    const newModel = document.createElement('option');
    newModel.text = model;
    modelSelect.add(newModel);
  }
  if (sessionStorage.getItem('model') in allSoloCars[makeSelect.value]) {
    const providedModel = sessionStorage.getItem('model');
    modelSelect.value = providedModel;
  } else {
    sessionStorage.setItem('model', modelSelect.value);
  }

  const yearSelect = document.getElementById('year');
  const yearLength = yearSelect.options.length;
  for (i = yearLength-1; i >= 0; i--) {
    yearSelect.remove(i);
  }
  for (var year of Object.keys(allSoloCars[makeSelect.value][modelSelect.value])) { // eslint-disable-line no-var
    const newYear = document.createElement('option');
    if (year == 0) {
      year = 'all';
    }
    newYear.text = year;
    yearSelect.add(newYear);
  }
  if (sessionStorage.getItem('year') in allSoloCars[makeSelect.value][modelSelect.value]) {
    const providedYear = sessionStorage.getItem('year');
    yearSelect.value = providedYear;
  } else {
    sessionStorage.setItem('year', yearSelect.value);
  }

  if (sessionStorage.getItem('make') && sessionStorage.getItem('model') && sessionStorage.getItem('year')) {
    const providedMake = sessionStorage.getItem('make');
    const providedModel = sessionStorage.getItem('model');
    const providedYear = sessionStorage.getItem('year');

    const table = document.getElementById('classesTable');
    for (let i = 0, row; row = table.rows[i]; i++) {
      for (let j = 0, col; col = row.cells[j]; j++) {
        col.classList.remove('highlighted');
      }
    }

    subClasses = allSoloCars[providedMake][providedModel][providedYear];
    for (let i = 0; i < subClasses.length; i++) {
      const tableElement = document.getElementById(subClasses[i]);
      tableElement.classList.add('highlighted');
    }
  }
}

/**
 * Informs a user which subclass they are eligible for
 * based on their make, model, and year selection on certain questions
 * It either highlights a subclass or it hides/shows certain information based on subclass
 * or model year
 * This function is specific to street pages
 */
function highlightAndFilterStreet() { // eslint-disable-line no-unused-vars
  if (sessionStorage.getItem('make') && sessionStorage.getItem('model') && sessionStorage.getItem('year')) {
    const providedMake = sessionStorage.getItem('make');
    const providedModel = sessionStorage.getItem('model');
    const providedYear = sessionStorage.getItem('year');

    const subClasses = allSoloCars[providedMake][providedModel][providedYear];
    let subClass = '';
    for (let i = 0; i < subClasses.length; i++) {
      if (subClasses[i] == 'ssr') {
        subClass = 'ssr';
        break;
      }
      if (subClasses[i] == 'ss') {
        subClass = 'ss';
        break;
      }
      if (subClasses[i] == 'as') {
        subClass = 'as';
        break;
      }
      if (subClasses[i] == 'bs') {
        subClass = 'bs';
        break;
      }
      if (subClasses[i] == 'cs') {
        subClass = 'cs';
        break;
      }
      if (subClasses[i] == 'ds') {
        subClass = 'ds';
        break;
      }
      if (subClasses[i] == 'es') {
        subClass = 'es';
        break;
      }
      if (subClasses[i] == 'fs') {
        subClass = 'fs';
        break;
      }
      if (subClasses[i] == 'gs') {
        subClass = 'gs';
        break;
      }
      if (subClasses[i] == 'hs') {
        subClass = 'hs';
        break;
      }
    }

    const streetOverviewSubclass = document.getElementById(subClass + 'StreetOverview');
    if (streetOverviewSubclass != null) {
      streetOverviewSubclass.classList.add('highlighted');
    }
  }
}

/**
 * Informs a user which subclass they are eligible for
 * based on their make, model, and year selection on certain questions
 * It either highlights a subclass or it hides/shows certain information based on subclass
 * or model year.
 * This function is specific to street touring pages
 */
function highlightAndFilterStreetTouring() { // eslint-disable-line no-unused-vars
  if (sessionStorage.getItem('make') && sessionStorage.getItem('model') && sessionStorage.getItem('year')) {
    const providedMake = sessionStorage.getItem('make');
    const providedModel = sessionStorage.getItem('model');
    const providedYear = sessionStorage.getItem('year');

    const subClasses = allSoloCars[providedMake][providedModel][providedYear];
    let subClass = '';
    for (let i = 0; i < subClasses.length; i++) {
      // Street Touring Subclasses
      if (subClasses[i] == 'sts') {
        subClass = 'sts';
        const lsdElement = document.getElementById('stsLSD');
        lsdElement.classList.add('highlighted');
        break;
      }
      if (subClasses[i] == 'str') {
        subClass = 'str';
        const lsdElement = document.getElementById('stustrstxLSD');
        lsdElement.classList.add('highlighted');
        break;
      }
      if (subClasses[i] == 'stx') {
        subClass = 'stx';
        const lsdElement = document.getElementById('stustrstxLSD');
        lsdElement.classList.add('highlighted');
        break;
      }
      if (subClasses[i] == 'stu') {
        subClass = 'stu';
        const engineElement = document.getElementById('stusthEngine');
        engineElement.style.display = 'block';
        const lsdElement = document.getElementById('stustrstxLSD');
        lsdElement.classList.add('highlighted');
        break;
      }
      if (subClasses[i] == 'sth') {
        subClass = 'sth';
        const engineElement = document.getElementById('stusthEngine');
        engineElement.style.display = 'block';
        const lsdElement = document.getElementById('sthLSD');
        lsdElement.classList.add('highlighted');
        break;
      }
    }
    const tireElement = document.getElementById(subClass + 'Tires');
    if (tireElement != null) {
      tireElement.classList.add('highlighted');
    }
    const wheelElement = document.getElementById(subClass + 'Wheels');
    if (wheelElement != null) {
      wheelElement.classList.add('highlighted');
    }
    const stOverviewSubclass = document.getElementById(subClass + 'Overview');
    if (stOverviewSubclass != null) {
      stOverviewSubclass.classList.add('highlighted');
    }

    if (Number(providedYear) < 2005) {
      const twoThousandFiveECUElement = document.getElementById('2005orOlderECU');
      if (twoThousandFiveECUElement != null) {
        twoThousandFiveECUElement.style.display = 'block';
      }
    }

    if (Number(providedYear) < 1995) {
      const nineteenNinetyFiveECUElement = document.getElementById('1995orOlderECU');
      if (nineteenNinetyFiveECUElement != null) {
        nineteenNinetyFiveECUElement.style.display = 'block';
      }
    }

    if (!document.getElementById('subClass')) {
      const newDiv = document.createElement('div');
      newDiv.setAttribute('id', 'subClass');
      const specificClass = document.getElementById('streetTouringSubclass');
      if (specificClass != null) {
        const newChild = document.createTextNode(subClass);
        newDiv.appendChild(newChild);
        specificClass.insertBefore(newDiv, null);
      }
    }
  }
}

/**
 * Informs a user which subclass they are eligible for
 * based on their make, model, and year selection on certain questions
 * It either highlights a subclass or it hides/shows certain information based on subclass
 * or model year
 * This function is specific to xtreme street pages
 */
function highlightAndFilterXtremeStreet() { // eslint-disable-line no-unused-vars
  if (sessionStorage.getItem('make') && sessionStorage.getItem('model') && sessionStorage.getItem('year')) {
    const providedMake = sessionStorage.getItem('make');
    const providedModel = sessionStorage.getItem('model');
    const providedYear = sessionStorage.getItem('year');

    const subClasses = allSoloCars[providedMake][providedModel][providedYear];
    let subClass = '';
    for (let i = 0; i < subClasses.length; i++) {
      if (subClasses[i] == 'xsa') {
        subClass = 'xsa';
        break;
      }
      if (subClasses[i] == 'xsb') {
        subClass = 'xsb';
        break;
      }
    }

    const xtremeStreetOverviewSubclass = document.getElementById(subClass + 'Overview');
    if (xtremeStreetOverviewSubclass != null) {
      xtremeStreetOverviewSubclass.classList.add('highlighted');
    }

    const xtremeStreetWeightSubclass = document.getElementById(subClass + 'Weight');
    if (xtremeStreetWeightSubclass != null) {
      xtremeStreetWeightSubclass.classList.add('highlighted');
    }
  }
}

/**
 * Informs a user which subclass they are eligible for
 * based on their make, model, and year selection on certain questions
 * It either highlights a subclass or it hides/shows certain information based on subclass
 * or model year
 * This function is specific to CAM pages
 */
function highlightAndFilterCAM() { // eslint-disable-line no-unused-vars
  if (sessionStorage.getItem('make') && sessionStorage.getItem('model') && sessionStorage.getItem('year')) {
    const providedMake = sessionStorage.getItem('make');
    const providedModel = sessionStorage.getItem('model');
    const providedYear = sessionStorage.getItem('year');

    const subClasses = allSoloCars[providedMake][providedModel][providedYear];
    let subClass = '';
    for (let i = 0; i < subClasses.length; i++) {
      if (subClasses[i] == 'cams') {
        subClass = 'cams';
        break;
      }
      if (subClasses[i] == 'camt') {
        subClass = 'camt';
        break;
      }
      if (subClasses[i] == 'camc') {
        subClass = 'camc';
        break;
      }
    }

    const camOverviewSubclass = document.getElementById(subClass + 'Overview');
    if (camOverviewSubclass != null) {
      camOverviewSubclass.classList.add('highlighted');
    }

    const camWeightSubclass = document.getElementById(subClass + 'Weight');
    if (camWeightSubclass != null) {
      camWeightSubclass.classList.add('highlighted');
    }
  }
}

/**
 * Informs a user which subclass they are eligible for
 * based on their make, model, and year selection on certain questions
 * It either highlights a subclass or it hides/shows certain information based on subclass
 * or model year
 * This function is specific to SM pages
 */
function highlightAndFilterSM() { // eslint-disable-line no-unused-vars
  if (sessionStorage.getItem('make') && sessionStorage.getItem('model') && sessionStorage.getItem('year')) {
    const providedMake = sessionStorage.getItem('make');
    const providedModel = sessionStorage.getItem('model');
    const providedYear = sessionStorage.getItem('year');

    const subClasses = allSoloCars[providedMake][providedModel][providedYear];
    let subClass = '';
    for (let i = 0; i < subClasses.length; i++) {
      if (subClasses[i] == 'ssm') {
        subClass = 'ssm';
        break;
      }
      if (subClasses[i] == 'sm') {
        subClass = 'sm';
        break;
      }
      if (subClasses[i] == 'smf') {
        subClass = 'smf';
        break;
      }
    }

    const smOverviewSubclass = document.getElementById(subClass + 'Overview');
    if (smOverviewSubclass != null) {
      smOverviewSubclass.classList.add('highlighted');
    }

    const smWeightSubclass = document.getElementById(subClass + 'Weight');
    if (smWeightSubclass != null) {
      smWeightSubclass.classList.add('highlighted');
    }

    if (!document.getElementById('subClass')) {
      const newDiv = document.createElement('div');
      newDiv.setAttribute('id', 'subClass');
      const specificClass = document.getElementById('smSubclass');
      if (specificClass != null) {
        const newChild = document.createTextNode(subClass);
        newDiv.appendChild(newChild);
        specificClass.insertBefore(newDiv, null);
      }
    }
  }
}

/**
 * Informs a user which subclass they are eligible for
 * based on their make, model, and year selection on certain questions
 * It either highlights a subclass or it hides/shows certain information based on subclass
 * or model year
 * This function is specific to SM pages
 */
function highlightAndFilterM() { // eslint-disable-line no-unused-vars
  if (sessionStorage.getItem('make') && sessionStorage.getItem('model') && sessionStorage.getItem('year')) {
    const providedMake = sessionStorage.getItem('make');
    const providedModel = sessionStorage.getItem('model');
    const providedYear = sessionStorage.getItem('year');

    const subClasses = allSoloCars[providedMake][providedModel][providedYear];
    let subClass = '';
    for (let i = 0; i < subClasses.length; i++) {
      if (subClasses[i] == 'am') {
        subClass = 'am';
        break;
      }
      if (subClasses[i] == 'bm') {
        subClass = 'bm';
        break;
      }
      if (subClasses[i] == 'cm') {
        subClass = 'cm';
        break;
      }
      if (subClasses[i] == 'dm') {
        subClass = 'dm';
        break;
      }
      if (subClasses[i] == 'em') {
        subClass = 'em';
        break;
      }
      if (subClasses[i] == 'fm') {
        subClass = 'fm';
        break;
      }
    }

    const smOverviewSubclass = document.getElementById(subClass + 'Overview');
    if (smOverviewSubclass != null) {
      smOverviewSubclass.classList.add('highlighted');
    }

    const smWeightSubclass = document.getElementById(subClass + 'Weight');
    if (smWeightSubclass != null) {
      smWeightSubclass.classList.add('highlighted');
    }

    if (!document.getElementById('subClass')) {
      const newDiv = document.createElement('div');
      newDiv.setAttribute('id', 'subClass');
      const specificClass = document.getElementById('smSubclass');
      if (specificClass != null) {
        const newChild = document.createTextNode(subClass);
        newDiv.appendChild(newChild);
        specificClass.insertBefore(newDiv, null);
      }
    }
  }
}

/**
 * Informs a user which subclass they are eligible for
 * based on their make, model, and year selection on certain questions
 * It either highlights a subclass or it hides/shows certain information based on subclass
 * or model year
 * This function is specific to SP pages
 */
function highlightAndFilterSP() { // eslint-disable-line no-unused-vars
  if (sessionStorage.getItem('make') && sessionStorage.getItem('model') && sessionStorage.getItem('year')) {
    const providedMake = sessionStorage.getItem('make');
    const providedModel = sessionStorage.getItem('model');
    const providedYear = sessionStorage.getItem('year');

    const subClasses = allSoloCars[providedMake][providedModel][providedYear];
    let subClass = '';
    for (let i = 0; i < subClasses.length; i++) {
      if (subClasses[i] == 'ssp') {
        subClass = 'ssp';
        break;
      }
      if (subClasses[i] == 'asp') {
        subClass = 'asp';
        break;
      }
      if (subClasses[i] == 'bsp') {
        subClass = 'bsp';
        break;
      }
      if (subClasses[i] == 'csp') {
        subClass = 'csp';
        break;
      }
      if (subClasses[i] == 'dsp') {
        subClass = 'dsp';
        break;
      }
      if (subClasses[i] == 'esp') {
        subClass = 'esp';
        break;
      }
      if (subClasses[i] == 'fsp') {
        subClass = 'fsp';
        break;
      }
    }

    const spOverviewSubclass = document.getElementById(subClass + 'Overview');
    if (spOverviewSubclass != null) {
      spOverviewSubclass.classList.add('highlighted');
    }

    const spWeightSubclass = document.getElementById(subClass + 'Weight');
    if (spWeightSubclass != null) {
      spWeightSubclass.classList.add('highlighted');
    }

    if (!document.getElementById('subClass')) {
      const newDiv = document.createElement('div');
      newDiv.setAttribute('id', 'subClass');
      const specificClass = document.getElementById('spSubclass');
      if (specificClass != null) {
        const newChild = document.createTextNode(subClass);
        newDiv.appendChild(newChild);
        specificClass.insertBefore(newDiv, null);
      }
    }
  }
}

/**
 * Informs a user which subclass they are eligible for
 * based on their make, model, and year selection on certain questions
 * It either highlights a subclass or it hides/shows certain information based on subclass
 * or model year
 * This function is specific to P pages
 */
function highlightAndFilterP() { // eslint-disable-line no-unused-vars
  if (sessionStorage.getItem('make') && sessionStorage.getItem('model') && sessionStorage.getItem('year')) {
    const providedMake = sessionStorage.getItem('make');
    const providedModel = sessionStorage.getItem('model');
    const providedYear = sessionStorage.getItem('year');

    const subClasses = allSoloCars[providedMake][providedModel][providedYear];
    let subClass = '';
    for (let i = 0; i < subClasses.length; i++) {
      if (subClasses[i] == 'xp') {
        subClass = 'xp';
        break;
      }
      if (subClasses[i] == 'cp') {
        subClass = 'cp';
        break;
      }
      if (subClasses[i] == 'dp') {
        subClass = 'dp';
        break;
      }
      if (subClasses[i] == 'ep') {
        subClass = 'ep';
        break;
      }
      if (subClasses[i] == 'fp') {
        subClass = 'fp';
        break;
      }
    }

    const pOverviewSubclass = document.getElementById(subClass + 'Overview');
    if (pOverviewSubclass != null) {
      pOverviewSubclass.classList.add('highlighted');
    }

    const pWeightSubclass = document.getElementById(subClass + 'Weight');
    if (pWeightSubclass != null) {
      pWeightSubclass.classList.add('highlighted');
    }

    const wheelElement = document.getElementById(subClass + 'Wheels');
    if (wheelElement != null) {
      wheelElement.classList.add('highlighted');
    }

    const restrictorElement = document.getElementById(subClass + 'Restrictor');
    if (restrictorElement != null) {
      restrictorElement.classList.add('highlighted');
    }

    if (!document.getElementById('subClass')) {
      const newDiv = document.createElement('div');
      newDiv.setAttribute('id', 'subClass');
      const specificClass = document.getElementById('pSubclass');
      if (specificClass != null) {
        const newChild = document.createTextNode(subClass);
        newDiv.appendChild(newChild);
        specificClass.insertBefore(newDiv, null);
      }
    }
  }
}

/**
 * Adds one or more session storage keys to store the answer to a question
 * The index of each array is used to match the key to the value
 * @param {Array} keyArray is an array of key names
 * @param {Array} valueArray is an array of values
 */
function setState(keyArray, valueArray) { // eslint-disable-line no-unused-vars
  for (let i = 0; i < keyArray.length; i++) {
    sessionStorage.setItem(keyArray[i], valueArray[i]);
  }
};

/**
 * Hides an item by setting its display to 'none'
 * @param {String} id is the id of the html element to hide
 */
function hideItem(id) {
  const e = document.getElementById(id);
  e.style.display = 'none';
}

/**
 * Removes the answer to a question from sessionStorage
 * @param {String} question is the sessionState key to remove
 */
function resetQuestion(question) { // eslint-disable-line no-unused-vars
  sessionStorage.removeItem(question);
  const eligibleElement = document.getElementById('eligible');
  eligibleElement.style.display = 'none';
  const notEligibleElement = document.getElementById('notEligible');
  notEligibleElement.style.display = 'none';
}

/**
 * clears session storage
 */
function resetState() { // eslint-disable-line no-unused-vars
  sessionStorage.clear();
}

/**
 * parses session storage to determine which questions
 * should be displayed
 * @param {string} className the name of the class being evaluated
 */
function evalSessionStorage(className) { // eslint-disable-line no-unused-vars
  let remainingQuestions = []; // eslint-disable-line prefer-const

  // This will be StreetTouringCarAnsweredIndex for street touring
  // and StreetCarAnsweredIndex for street
  const indexName = className + 'AnsweredIndex';
  for (let i = 0; i < carFlags[className].length; i++) {
    hideItem(carFlags[className][i]);
    if (!sessionStorage.getItem(carFlags[className][i])) {
      remainingQuestions.push(carFlags[className][i]);
    }
  }
  if (sessionStorage.getItem(indexName)) {
    const menuElement = document.getElementById(
        carFlags[className][sessionStorage.getItem(indexName)]
            .concat('Menu'));

    menuElement.style.color = '#000000';
    if (sessionStorage.getItem(carFlags[className][sessionStorage.getItem(indexName)]) == 'true') {
      menuElement.style.backgroundColor = '#4caf50';
    } else {
      menuElement.style.backgroundColor = '#f44336';
    }
  }
  if (remainingQuestions.length != 0) {
    const e = document.getElementById(remainingQuestions[0]);
    e.style.display = 'block';
    const menuElement = document.getElementById(remainingQuestions[0].concat('Menu'));
    menuElement.style.color = '#f1f1f1';
  } else {
    checkEligibility(className);
  }
};

/**
 * checks to see if a car is eligible for a class
 * based on the answers to the provided questions
 * @param {string} className the class the questions are being
 * checked against
 */
function checkEligibility(className) {
  let isEligible = true;
  let failedQuestions = []; // eslint-disable-line prefer-const
  for (let i=0; i<carFlags[className].length; i++) {
    if (sessionStorage.getItem(carFlags[className][i]) == 'false') {
      failedQuestions.push(carFlags[className][i]);
      isEligible = false;
    }
  }

  if (isEligible) {
    const notEligibleElement = document.getElementById('notEligible');
    notEligibleElement.style.display = 'none';
    const eligibleElement = document.getElementById('eligible');
    eligibleElement.style.display = 'block';
    if (!document.getElementById('possibleClassesList')) {
      const newDiv = document.createElement('div');
      newDiv.setAttribute('id', 'possibleClassesList');
      const specificClass = document.getElementById('specificClass');
      const possibleClasses = allSoloCars[sessionStorage.getItem('make')][sessionStorage.getItem('model')][sessionStorage.getItem('year')]; // eslint-disable-line max-len
      let possibleClassesString = '';
      for (let i=0; i<possibleClasses.length; i++) {
        if (i == 0) {
          possibleClassesString = possibleClassesString.concat('\n');
        }
        possibleClassesString = possibleClassesString.concat(subclassMap[possibleClasses[i]]);
        possibleClassesString = possibleClassesString.concat('\n');
      }
      const newChild = document.createTextNode(possibleClassesString);
      newDiv.appendChild(newChild);
      specificClass.insertBefore(newDiv, null);
    }
  } else {
    const notEligibleElement = document.getElementById('notEligible');
    notEligibleElement.style.display = 'block';
    const eligibleElement = document.getElementById('eligible');
    eligibleElement.style.display = 'none';
    let questionString = '';
    for (let i=0; i<failedQuestions.length; i++) {
      const question = document.getElementById(failedQuestions[i] + 'Question');
      questionString = questionString + question.innerHTML;
      questionString = questionString + '</br>';
    }
    document.getElementById('ineligibilityQuestions').innerHTML = questionString;
  }
}
