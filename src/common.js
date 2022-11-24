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
  'evCar': [
    'evLandingPage',
    'evBodywork',
    'evBrakes',
    'evTires',
    'evWheels',
    'evShocks',
    'evARB',
    'evSuspension',
    'evElectricalAndDrivetrain',
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
  'evx': 'Electric Vehicle Experimental (EVX)',
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
  'sst': 'Super Street Touring (SST)',
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
      '2021': ['hs', 'stx', 'sm', 'xp', 'xsa'],
      '2022': ['hs', 'stx', 'sm', 'xp', 'xsa'],
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
      '2015': ['ss', 'ssr', 'sst', 'ssm', 'xp', 'xsa'],
      '2016': ['ss', 'ssr', 'sst', 'ssm', 'xp', 'xsa'],
      '2017': ['ss', 'ssr', 'sst', 'ssm', 'xp', 'xsa'],
      '2018': ['ss', 'ssr', 'sst', 'ssm', 'xp', 'xsa'],
      '2019': ['ss', 'ssr', 'sst', 'ssm', 'xp', 'xsa'],
      '2020': ['ss', 'ssr', 'sst', 'ssm', 'xp', 'xsa'],
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
      '2021': ['ds', 'stu', 'sm', 'xp', 'xsa'],
      '2022': ['ds', 'stu', 'sm', 'xp', 'xsa'],
    },
    'Giulia Quadrifoglio': {
      '2017': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2018': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2019': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2020': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2021': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2022': ['bs', 'sst', 'sm', 'xp', 'xsa'],
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
      '2017': ['gs', 'sth', 'sm', 'xp', 'xsa', 'evx'],
      '2018': ['gs', 'sth', 'sm', 'xp', 'xsa', 'evx'],
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
      '2021': ['fs', 'sm', 'xp', 'xsa'],
      '2022': ['fs', 'sm', 'xp', 'xsa'],
    },
    'A8 & V8 quattro (AWD)': {
      'all': ['gs', 'esp', 'sm', 'xp', 'xsa'],
    },
    'Coupe quattro (non-turbo)': {
      'all': ['hs', 'dsp', 'sm', 'xp', 'xsa'],
    },
    'E-tron (incl Sportback)': {
      '2019': ['evx'],
      '2020': ['evx'],
      '2021': ['evx'],
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
      '2017': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2018': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2019': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2022': ['bs', 'sst', 'sm', 'xp', 'xsa'],
    },
    'RS 4': {
      '2007': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2008': ['bs', 'sst', 'sm', 'xp', 'xsa'],
    },
    'RS 5': {
      '2013': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2014': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2015': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2016': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2017': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2018': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2019': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2020': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2021': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2022': ['bs', 'sst', 'sm', 'xp', 'xsa'],
    },
    'RS 6 (C5 Chassis)': {
      '2003': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2004': ['bs', 'sst', 'sm', 'xp', 'xsa'],
    },
    'RS 7': {
      '2014': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2015': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2016': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2017': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2018': ['bs', 'sst', 'sm', 'xp', 'xsa'],
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
      '2010': ['ds', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2011': ['ds', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2012': ['ds', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2013': ['ds', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2014': ['ds', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2015': ['ds', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2016': ['ds', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2017': ['ds', 'stu', 'sm', 'xp', 'xsa'],
      '2018': ['ds', 'stu', 'sm', 'xp', 'xsa'],
      '2019': ['ds', 'stu', 'sm', 'xp', 'xsa'],
      '2020': ['ds', 'stu', 'sm', 'xp', 'xsa'],
      '2021': ['ds', 'stu', 'sm', 'xp', 'xsa'],
      '2022': ['ds', 'stu', 'sm', 'xp', 'xsa'],
    },
    'S4 (100 CS chassis)': {
      '1992': ['hs', 'stu', 'sm', 'xp', 'xsa'],
      '1993': ['hs', 'stu', 'sm', 'xp', 'xsa'],
      '1994': ['hs', 'stu', 'sm', 'xp', 'xsa'],
    },
    'S5': {
      '2008': ['bs', 'stu', 'sst', 'sm', 'xp', 'xsa'],
      '2009': ['bs', 'stu', 'sst', 'sm', 'xp', 'xsa'],
      '2010': ['bs', 'stu', 'sst', 'sm', 'xp', 'xsa'],
      '2011': ['bs', 'stu', 'sst', 'sm', 'xp', 'xsa'],
      '2012': ['bs', 'stu', 'sst', 'sm', 'xp', 'xsa'],
      '2013': ['bs', 'stu', 'sst', 'asp', 'sm', 'xp', 'xsa'],
      '2014': ['bs', 'stu', 'sst', 'asp', 'sm', 'xp', 'xsa'],
      '2015': ['bs', 'stu', 'sst', 'asp', 'sm', 'xp', 'xsa'],
      '2016': ['bs', 'stu', 'sst', 'asp', 'sm', 'xp', 'xsa'],
      '2017': ['bs', 'stu', 'sst', 'sm', 'xp', 'xsa'],
      '2018': ['bs', 'stu', 'sst', 'sm', 'xp', 'xsa'],
      '2019': ['bs', 'stu', 'sst', 'sm', 'xp', 'xsa'],
      '2020': ['bs', 'stu', 'sst', 'sm', 'xp', 'xsa'],
      '2021': ['bs', 'stu', 'sst', 'sm', 'xp', 'xsa'],
      '2022': ['bs', 'stu', 'sst', 'sm', 'xp', 'xsa'],
    },
    'S6': {
      '2013': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2014': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2015': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2016': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2017': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2018': ['bs', 'sst', 'sm', 'xp', 'xsa'],
    },
    'S7': {
      '2012': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2013': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2014': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2015': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2016': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2017': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2018': ['bs', 'sst', 'sm', 'xp', 'xsa'],
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
      '2012': ['ss', 'sst', 'ssr', 'ssp', 'ssm', 'xp', 'xsa'],
      '2013': ['ss', 'sst', 'ssr', 'ssp', 'ssm', 'xp', 'xsa'],
      '2018': ['ss', 'sst', 'asp', 'ssm', 'xsa', 'xp'],
      '2019': ['ss', 'sst', 'asp', 'ssm', 'xsa', 'xp'],
      '2020': ['ss', 'sst', 'ssm', 'xsa', 'xp'],
      '2021': ['ss', 'sst', 'ssm', 'xsa', 'xp'],
      '2022': ['ss', 'sst', 'ssm', 'xsa', 'xp'],
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
      '2016': ['bs', 'sst', 'asp', 'sm', 'xp', 'xsa'],
      '2017': ['bs', 'sst', 'asp', 'sm', 'xp', 'xsa'],
      '2018': ['bs', 'sst', 'asp', 'sm', 'xp', 'xsa'],
      '2019': ['bs', 'sst', 'asp', 'sm', 'xp', 'xsa'],
      '2020': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2021': ['bs', 'sst', 'sm', 'xp', 'xsa'],
      '2022': ['bs', 'sst', 'sm', 'xp', 'xsa'],
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
      '2014': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2015': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2016': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2017': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2018': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2019': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2020': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2021': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2022': ['fs', 'stu', 'sm', 'xp', 'xsa'],
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
      '2014': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2015': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2016': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2017': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2018': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2019': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2020': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2021': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2022': ['fs', 'stu', 'sm', 'xp', 'xsa'],
    },
    '5 Series (G30/G31/G38 chassis)': {
      '2017': ['fs', 'sm', 'xp', 'xsa'],
      '2018': ['fs', 'sm', 'xp', 'xsa'],
      '2019': ['fs', 'sm', 'xp', 'xsa'],
      '2020': ['fs', 'sm', 'xp', 'xsa'],
      '2021': ['fs', 'sm', 'xp', 'xsa'],
      '2022': ['fs', 'sm', 'xp', 'xsa'],
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
      '2021': ['fs', 'sm', 'xp', 'xsa'],
      '2022': ['fs', 'sm', 'xp', 'xsa'],
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
      '2016': ['bs', 'sst', 'asp', 'sm', 'xsa', 'xp'],
      '2017': ['bs', 'sst', 'asp', 'sm', 'xsa', 'xp'],
      '2018': ['bs', 'sst', 'asp', 'sm', 'xsa', 'xp'],
      '2019': ['bs', 'sst', 'asp', 'sm', 'xsa', 'xp'],
      '2020': ['bs', 'asp', 'sm', 'xsa', 'xp'],
    },
    'M2 CS': {
      '2020': ['as', 'sst', 'ssr', 'sm', 'xp', 'xsa'],
      '2021': ['as', 'sst', 'ssr', 'sm', 'xp', 'xsa'],
    },
    'M2 Competition': {
      '2019': ['bs', 'sst', 'ssr', 'sm', 'xp', 'xsa'],
      '2020': ['bs', 'sst', 'ssr', 'sm', 'xp', 'xsa'],
      '2021': ['bs', 'sst', 'ssr', 'sm', 'xp', 'xsa'],
      '2022': ['bs', 'ssr', 'sm', 'xp', 'xsa'],
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
      '2015': ['bs', 'sst', 'ssr', 'sm', 'xsa', 'xp'],
      '2016': ['bs', 'sst', 'ssr', 'sm', 'xsa', 'xp'],
      '2017': ['bs', 'sst', 'ssr', 'sm', 'xsa', 'xp'],
      '2018': ['bs', 'sst', 'sm', 'xsa', 'xp'],
      '2019': ['bs', 'sst', 'sm', 'xsa', 'xp'],
      '2020': ['as', 'sst', 'sm', 'xsa', 'xp'],
      '2021': ['as', 'sm', 'xsa', 'xp'],
      '2022': ['as', 'sm', 'xsa', 'xp'],
    },
    'M3 CS': {
      '2018': ['as', 'ssr', 'sm', 'xp', 'xsa'],
      '2019': ['as', 'ssr', 'sm', 'xp', 'xsa'],
      '2020': ['as', 'ssr', 'sm', 'xp', 'xsa'],
    },
    'M4': {
      '2015': ['bs', 'ssr', 'asp', 'sm', 'xp', 'xsa'],
      '2016': ['bs', 'ssr', 'asp', 'sm', 'xp', 'xsa'],
      '2017': ['bs', 'ssr', 'asp', 'sm', 'xp', 'xsa'],
      '2018': ['bs', 'ssr', 'asp', 'sm', 'xp', 'xsa'],
      '2019': ['bs', 'ssr', 'asp', 'sm', 'xp', 'xsa'],
      '2020': ['as', 'ssr', 'asp', 'sm', 'xp', 'xsa'],
      '2021': ['as', 'asp', 'sm', 'xp', 'xsa'],
      '2022': ['as', 'asp', 'sm', 'xp', 'xsa'],
    },
    'M4 CS': {
      '2018': ['as', 'ssr', 'sm', 'xp', 'xsa'],
      '2019': ['as', 'ssr', 'sm', 'xp', 'xsa'],
      '2020': ['as', 'ssr', 'sm', 'xp', 'xsa'],
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
      '2005': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2006': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2007': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2008': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2009': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2010': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2017': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2018': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2019': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2020': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2021': ['bs', 'stu', 'sm', 'xp', 'xsa'],
      '2022': ['bs', 'stu', 'sm', 'xp', 'xsa'],
    },
    'M6': {
      '2005': ['stu', 'sm', 'xp', 'xsa'],
      '2006': ['stu', 'sm', 'xp', 'xsa'],
      '2007': ['stu', 'sm', 'xp', 'xsa'],
      '2008': ['stu', 'sm', 'xp', 'xsa'],
      '2009': ['stu', 'sm', 'xp', 'xsa'],
      '2010': ['stu', 'sm', 'xp', 'xsa'],
    },
    'M235i': {
      '2014': ['fs', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2015': ['fs', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2016': ['fs', 'stu', 'asp', 'sm', 'xp', 'xsa'],
    },
    'M240i (incl. xDrive)': {
      '2017': ['fs', 'sst', 'sm', 'xp', 'xsa'],
      '2018': ['fs', 'sst', 'sm', 'xp', 'xsa'],
      '2019': ['fs', 'sst', 'sm', 'xp', 'xsa'],
      '2020': ['fs', 'sst', 'sm', 'xp', 'xsa'],
      '2021': ['fs', 'sst', 'sm', 'xp', 'xsa'],
      '2022': ['fs', 'sst', 'sm', 'xp', 'xsa'],
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
      '2020': ['as', 'str', 'bsp', 'sm', 'fp', 'xp', 'xsa'],
      '2021': ['as', 'str', 'bsp', 'sm', 'fp', 'xp', 'xsa'],
      '2022': ['as', 'str', 'bsp', 'sm', 'fp', 'xp', 'xsa'],
    },
    'Z4 M Coupe & Roadster': {
      '2006': ['bs', 'sst', 'bsp', 'sm', 'xp', 'xsa'],
      '2007': ['bs', 'sst', 'bsp', 'sm', 'xp', 'xsa'],
      '2008': ['bs', 'sst', 'bsp', 'sm', 'xp', 'xsa'],
    },
    'Z8': {
      'all': ['ss', 'asp', 'ssm', 'xp', 'xsa'],
    },
    'i3 (incl. i3s)': {
      'all': ['hs', 'sm', 'xp', 'xsa', 'evx'],
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
      '2016': ['bs', 'sst', 'camc', 'xp', 'xsa', 'sm'],
      '2017': ['bs', 'sst', 'camc', 'xp', 'xsa', 'sm'],
      '2018': ['bs', 'sst', 'camc', 'xp', 'xsa', 'sm'],
      '2019': ['bs', 'sst', 'camc', 'xp', 'xsa', 'sm'],
    },
    'CT4 (non-V, non-Blackwing)': {
      '2020': ['ds', 'camc', 'xp', 'xsa', 'sm'],
      '2021': ['ds', 'camc', 'xp', 'xsa', 'sm'],
      '2022': ['ds', 'camc', 'xp', 'xsa', 'sm'],
    },
    'CT4V (incl. Blackwing)': {
      '2020': ['bs', 'camc', 'xp', 'xsa', 'sm'],
      '2021': ['bs', 'camc', 'xp', 'xsa', 'sm'],
      '2022': ['bs', 'camc', 'xp', 'xsa', 'sm'],
    },
    'CT5V (incl. Blackwing)': {
      '2020': ['as', 'camc', 'xp', 'xsa', 'sm'],
      '2021': ['as', 'camc', 'xp', 'xsa', 'sm'],
      '2022': ['as', 'camc', 'xp', 'xsa', 'sm'],
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
      'all': ['hs', 'sth', 'xp', 'xsa', 'sm', 'evx'],
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
    'Camaro (V6 & V8; excl. SS 1LE, ZL1, Suspension Lowering Kit, and Brembo® 6-piston Front Brake Kit)': {
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
      '2016': ['ds', 'sst', 'esp', 'camc', 'xp', 'xsa', 'sm'],
      '2017': ['ds', 'sst', 'esp', 'camc', 'xp', 'xsa', 'sm'],
      '2018': ['ds', 'sst', 'esp', 'camc', 'xp', 'xsa', 'sm'],
      '2019': ['ds', 'sst', 'esp', 'camc', 'xp', 'xsa', 'sm'],
      '2020': ['ds', 'sst', 'esp', 'camc', 'xp', 'xsa', 'sm'],
      '2021': ['ds', 'sst', 'esp', 'camc', 'xp', 'xsa', 'sm'],
      '2022': ['ds', 'sst', 'esp', 'camc', 'xp', 'xsa', 'sm'],
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
      '2017': ['fs', 'ssr', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2018': ['fs', 'ssr', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2019': ['fs', 'ssr', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2020': ['fs', 'ssr', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2021': ['fs', 'ssr', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2022': ['fs', 'ssr', 'stu', 'camc', 'xp', 'xsa', 'sm'],
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
      '2014': ['as', 'sst', 'ssr', 'stu', 'camc', 'xp', 'xsa', 'sm'],
      '2015': ['as', 'sst', 'ssr', 'stu', 'camc', 'xp', 'xsa', 'sm'],
    },
    'Camaro ZL1 1LE': {
      '2018': ['ss', 'ssr', 'camc', 'xp', 'xsa', 'sm'],
      '2019': ['ss', 'ssr', 'camc', 'xp', 'xsa', 'sm'],
      '2020': ['ss', 'ssr', 'camc', 'xp', 'xsa', 'sm'],
      '2021': ['ss', 'ssr', 'camc', 'xp', 'xsa', 'sm'],
      '2022': ['ss', 'ssr', 'camc', 'xp', 'xsa', 'sm'],
    },
    'Camaro ZL1 (non-1LE)': {
      '2012': ['as', 'sst', 'ssr', 'asp', 'camc', 'xp', 'xsa', 'sm'],
      '2013': ['as', 'sst', 'ssr', 'asp', 'camc', 'xp', 'xsa', 'sm'],
      '2014': ['as', 'sst', 'ssr', 'camc', 'xp', 'xsa', 'sm'],
      '2015': ['as', 'sst', 'ssr', 'camc', 'xp', 'xsa', 'sm'],
      '2017': ['as', 'sst', 'ssr', 'asp', 'camc', 'xp', 'xsa', 'sm'],
      '2018': ['as', 'sst', 'ssr', 'asp', 'camc', 'xp', 'xsa', 'sm'],
      '2019': ['as', 'sst', 'ssr', 'asp', 'camc', 'xp', 'xsa', 'sm'],
      '2020': ['as', 'sst', 'ssr', 'camc', 'xp', 'xsa', 'sm'],
      '2021': ['as', 'sst', 'ssr', 'camc', 'xp', 'xsa', 'sm'],
      '2022': ['as', 'sst', 'ssr', 'camc', 'xp', 'xsa', 'sm'],
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
      '2005': ['bs', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2006': ['bs', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2007': ['bs', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2008': ['bs', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2009': ['bs', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2010': ['bs', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2011': ['bs', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2012': ['bs', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2013': ['bs', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
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
      '2020': ['ss', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2021': ['ss', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2022': ['ss', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
    },
    'Corvette Z06': {
      '2001': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2002': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2003': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
      '2004': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'xsa', 'ssm'],
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
      '2021': ['gs', 'xp', 'xsa', 'sm', 'smf'],
      '2022': ['gs', 'xp', 'xsa', 'sm', 'smf'],
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
      '2021': ['fs', 'camc', 'xp', 'xsa', 'sm'],
      '2022': ['fs', 'camc', 'xp', 'xsa', 'sm'],
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
      'all': ['ds', 'dsp', 'cams', 'xp', 'xsa', 'ssm'],
    },
    'Crossfire SRT6': {
      'all': ['fs', 'bsp', 'cams', 'xp', 'xsa', 'ssm'],
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
      '2019': ['fs', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2020': ['fs', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2021': ['fs', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2022': ['fs', 'esp', 'camc', 'sm', 'xp', 'xsa'],
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
  'Fisker': {
    'Karma': {
      '2011': ['evx'],
      '2012': ['evx'],
    },
  },
  'Ford': {
    'Aspire': {
      'all': ['hs', 'sm', 'smf', 'xp', 'xsa'],
    },
    'Contour': {
      'all': ['hs', 'sm', 'xp', 'xsa'],
    },
    'Cortina': {
      'all': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xsb'],
    },
    'Crown Victoria': {
      'all': ['hs', 'sm', 'xp', 'xsa'],
    },
    'EXP': {
      'all': ['hs', 'sm', 'xp', 'xsa'],
    },
    'Escort (non-ZX2 S/R)': {
      'all': ['hs', 'sts', 'fsp', 'sm', 'dp', 'xp', 'xsb'],
    },
    'Festiva': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xsb'],
    },
    'Fiesta': {
      '1976': ['hs', 'sts', 'sm', 'smf', 'xp', 'xsb'],
      '1977': ['hs', 'sts', 'sm', 'smf', 'xp', 'xsb'],
      '1978': ['hs', 'sts', 'sm', 'smf', 'xp', 'xsb'],
      '1979': ['hs', 'sts', 'sm', 'smf', 'xp', 'xsb'],
      '1980': ['hs', 'sts', 'sm', 'smf', 'xp', 'xsb'],
    },
    'Fiesta ST': {
      '2014': ['hs', 'sth', 'dsp', 'ep', 'sm', 'smf', 'xp', 'xsa'],
      '2015': ['hs', 'sth', 'dsp', 'ep', 'sm', 'smf', 'xp', 'xsa'],
      '2016': ['hs', 'sth', 'dsp', 'ep', 'sm', 'smf', 'xp', 'xsa'],
      '2017': ['hs', 'sth', 'dsp', 'ep', 'sm', 'smf', 'xp', 'xsa'],
      '2018': ['hs', 'sth', 'dsp', 'ep', 'sm', 'smf', 'xp', 'xsa'],
      '2019': ['hs', 'sth', 'ep', 'sm', 'smf', 'xp', 'xsa'],
    },
    'Five Hundred': {
      'all': ['hs', 'sm', 'smf', 'xp', 'xsa'],
    },
    'Focus': {
      '2012': ['hs', 'sts', 'sm', 'xp', 'xsa'],
      '2013': ['hs', 'sts', 'sm', 'xp', 'xsa'],
      '2014': ['hs', 'sts', 'sm', 'xp', 'xsa'],
      '2015': ['hs', 'sts', 'sm', 'xp', 'xsa'],
      '2016': ['hs', 'sts', 'sm', 'xp', 'xsa'],
      '2017': ['hs', 'sts', 'sm', 'xp', 'xsa'],
      '2018': ['hs', 'sts', 'sm', 'xp', 'xsa'],
    },
    'Focus RS': {
      '2016': ['ds', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2017': ['ds', 'stu', 'asp', 'sm', 'xp', 'xsa'],
      '2018': ['bs', 'sst', 'sm', 'xp', 'xsa'],
    },
    'Focus ST': {
      '2013': ['gs', 'sth', 'dsp', 'sm', 'xp', 'xsa'],
      '2014': ['gs', 'sth', 'dsp', 'sm', 'xp', 'xsa'],
      '2015': ['gs', 'sth', 'dsp', 'sm', 'xp', 'xsa'],
      '2016': ['gs', 'sth', 'dsp', 'sm', 'xp', 'xsa'],
      '2017': ['gs', 'sth', 'dsp', 'sm', 'xp', 'xsa'],
      '2018': ['gs', 'sth', 'dsp', 'sm', 'xp', 'xsa'],
    },
    'Fusion': {
      '2006': ['hs', 'fsp', 'sm', 'xp', 'xsa'],
      '2007': ['hs', 'fsp', 'sm', 'xp', 'xsa'],
      '2008': ['hs', 'fsp', 'sm', 'xp', 'xsa'],
      '2009': ['hs', 'fsp', 'sm', 'xp', 'xsa'],
      '2010': ['hs', 'fsp', 'sm', 'xp', 'xsa'],
      '2011': ['hs', 'fsp', 'sm', 'xp', 'xsa'],
      '2012': ['hs', 'fsp', 'sm', 'xp', 'xsa'],
    },
    'Fusion (6-cyl)': {
      'all': ['gs', 'dsp', 'sm', 'xp', 'xsa'],
    },
    'Fusion Sport': {
      '2017': ['gs', 'sth', 'sm', 'xp', 'xsa'],
      '2018': ['gs', 'sth', 'sm', 'xp', 'xsa'],
      '2019': ['gs', 'sth', 'sm', 'xp', 'xsa'],
    },
    'GT': {
      'all': ['ssp', 'ssm', 'xp', 'xsa'],
    },
    'Mustang (4-cyl Turbo except SVO)': {
      '1979': ['hs', 'stu', 'sm', 'camt', 'xp', 'xsa'],
      '1980': ['hs', 'stu', 'sm', 'camt', 'xp', 'xsa'],
      '1981': ['hs', 'stu', 'sm', 'camt', 'xp', 'xsa'],
      '1982': ['hs', 'stu', 'sm', 'camt', 'xp', 'xsa'],
      '1983': ['hs', 'stu', 'sm', 'camt', 'xp', 'xsa'],
      '1984': ['hs', 'stu', 'sm', 'camt', 'xp', 'xsa'],
      '1985': ['hs', 'stu', 'sm', 'camt', 'xp', 'xsa'],
      '1986': ['hs', 'stu', 'sm', 'camt', 'xp', 'xsa'],
      '1987': ['hs', 'stu', 'sm', 'camt', 'xp', 'xsa'],
      '1988': ['hs', 'stu', 'sm', 'camt', 'xp', 'xsa'],
      '1989': ['hs', 'stu', 'sm', 'camt', 'xp', 'xsa'],
      '1990': ['hs', 'stu', 'sm', 'camt', 'xp', 'xsa'],
      '1991': ['hs', 'stu', 'sm', 'camt', 'xp', 'xsa'],
      '1992': ['hs', 'stu', 'sm', 'camt', 'xp', 'xsa'],
      '1993': ['hs', 'stu', 'sm', 'camt', 'xp', 'xsa'],
    },
    'Mustang (4-cyl)': {
      '1973': ['hs', 'fsp', 'sm', 'camt', 'xp', 'xsa'],
      '1974': ['hs', 'fsp', 'sm', 'dp', 'camt', 'xp', 'xsa'],
      '1975': ['hs', 'fsp', 'sm', 'dp', 'camt', 'xp', 'xsa'],
      '1976': ['hs', 'fsp', 'sm', 'dp', 'camt', 'xp', 'xsa'],
      '1977': ['hs', 'fsp', 'sm', 'dp', 'camt', 'xp', 'xsa'],
      '1978': ['hs', 'fsp', 'sm', 'dp', 'camt', 'xp', 'xsa'],
      '1979': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt', 'xp', 'xsa'],
      '1980': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt', 'xp', 'xsa'],
      '1981': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt', 'xp', 'xsa'],
      '1982': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt', 'xp', 'xsa'],
      '1983': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt', 'xp', 'xsa'],
      '1984': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt', 'xp', 'xsa'],
      '1985': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt', 'xp', 'xsa'],
      '1986': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt', 'xp', 'xsa'],
      '1987': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt', 'xp', 'xsa'],
      '1988': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt', 'xp', 'xsa'],
      '1989': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt', 'xp', 'xsa'],
      '1990': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt', 'xp', 'xsa'],
      '1991': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt', 'xp', 'xsa'],
      '1992': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt', 'xp', 'xsa'],
      '1993': ['hs', 'stu', 'fsp', 'sm', 'dp', 'camt', 'xp', 'xsa'],
    },
    'Mustang (6-cyl)': {
      '1964': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1965': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1966': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1967': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1968': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1969': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1970': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1971': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1972': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1973': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1974': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1975': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1976': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1977': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1978': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1979': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1980': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1981': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1982': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1983': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1984': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1985': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1986': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1987': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1988': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1989': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1990': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1991': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1992': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1993': ['hs', 'stu', 'cp', 'camt', 'sm', 'xp', 'xsa'],
      '1994': ['hs', 'stu', 'camt', 'sm', 'xp', 'xsa'],
      '1995': ['hs', 'stu', 'camt', 'sm', 'xp', 'xsa'],
      '1996': ['hs', 'stu', 'camt', 'sm', 'xp', 'xsa'],
      '1997': ['hs', 'stu', 'camt', 'sm', 'xp', 'xsa'],
      '1998': ['hs', 'stu', 'camt', 'sm', 'xp', 'xsa'],
      '1999': ['hs', 'stu', 'camt', 'sm', 'xp', 'xsa'],
      '2000': ['hs', 'stu', 'camt', 'sm', 'xp', 'xsa'],
      '2001': ['hs', 'stu', 'camt', 'sm', 'xp', 'xsa'],
      '2002': ['hs', 'stu', 'camt', 'sm', 'xp', 'xsa'],
      '2003': ['hs', 'stu', 'camt', 'sm', 'xp', 'xsa'],
      '2004': ['hs', 'stu', 'camt', 'sm', 'xp', 'xsa'],
      '2005': ['gs', 'stu', 'camc', 'sm', 'xp', 'xsa'],
      '2006': ['gs', 'stu', 'camc', 'sm', 'xp', 'xsa'],
      '2007': ['gs', 'stu', 'camc', 'sm', 'xp', 'xsa'],
      '2008': ['gs', 'stu', 'camc', 'sm', 'xp', 'xsa'],
      '2009': ['gs', 'stu', 'camc', 'sm', 'xp', 'xsa'],
      '2010': ['gs', 'stu', 'camc', 'sm', 'xp', 'xsa'],
      '2011': ['ds', 'stu', 'camc', 'sm', 'xp', 'xsa'],
      '2012': ['ds', 'stu', 'camc', 'sm', 'xp', 'xsa'],
      '2013': ['ds', 'stu', 'camc', 'sm', 'xp', 'xsa'],
      '2014': ['ds', 'stu', 'camc', 'sm', 'xp', 'xsa'],
      '2015': ['ds', 'stu', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2016': ['ds', 'stu', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2017': ['ds', 'stu', 'esp', 'camc', 'sm', 'xp', 'xsa'],
    },
    'Mustang Boss 302 Laguna Seca': {
      '2012': ['ssr', 'sst', 'as', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2013': ['ssr', 'sst', 'as', 'esp', 'camc', 'sm', 'xp', 'xsa'],
    },
    'Mustang Boss 302 non-Laguna Seca': {
      '2012': ['fs', 'sst', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2013': ['fs', 'sst', 'esp', 'camc', 'sm', 'xp', 'xsa'],
    },
    'Mustang Bullitt': {
      '2019': ['fs', 'camc', 'sm', 'xp', 'xsa'],
      '2020': ['fs', 'camc', 'sm', 'xp', 'xsa'],
      '2021': ['fs', 'camc', 'sm', 'xp', 'xsa'],
    },
    'Mustang Cobra': {
      '2003': ['fs', 'esp', 'camt', 'camc', 'sm', 'xp', 'xsa'],
      '2004': ['fs', 'esp', 'camt', 'camc', 'sm', 'xp', 'xsa'],
    },
    'Mustang Cobra R': {
      '1993': ['ss', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '1995': ['ss', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '2000': ['ss', 'esp', 'camt', 'sm', 'xp', 'xsa'],
    },
    'Mustang EcoBoost': {
      '2015': ['ds', 'stu', 'esp', 'sm', 'camc', 'xp', 'xsa'],
      '2016': ['ds', 'stu', 'esp', 'sm', 'camc', 'xp', 'xsa'],
      '2017': ['ds', 'stu', 'esp', 'sm', 'camc', 'xp', 'xsa'],
      '2018': ['ds', 'stu', 'esp', 'sm', 'camc', 'xp', 'xsa'],
      '2019': ['ds', 'stu', 'esp', 'sm', 'camc', 'xp', 'xsa'],
      '2020': ['ds', 'stu', 'sm', 'camc', 'xp', 'xsa'],
      '2021': ['ds', 'stu', 'sm', 'camc', 'xp', 'xsa'],
    },
    'Mustang GT500': {
      '2020': ['ss', 'ssr', 'asp', 'sm', 'camc', 'xp', 'xsa'],
      '2021': ['ss', 'ssr', 'sm', 'camc', 'xp', 'xsa'],
      '2022': ['ss', 'ssr', 'sm', 'camc', 'xp', 'xsa'],
    },
    'Mustang GT (non-Performance Package)': {
      '2010': ['fs', 'camc', 'sm', 'xp', 'xsa'],
      '2011': ['fs', 'camc', 'sm', 'xp', 'xsa'],
      '2012': ['fs', 'camc', 'sm', 'xp', 'xsa'],
      '2013': ['fs', 'camc', 'sm', 'xp', 'xsa'],
      '2014': ['fs', 'camc', 'sm', 'xp', 'xsa'],
      '2015': ['fs', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2016': ['fs', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2017': ['fs', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2018': ['fs', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2019': ['fs', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2020': ['fs', 'camc', 'sm', 'xp', 'xsa'],
      '2021': ['fs', 'camc', 'sm', 'xp', 'xsa'],
      '2022': ['fs', 'camc', 'sm', 'xp', 'xsa'],
    },
    'Mustang GT (w/ Performance Package)': {
      '2018': ['fs', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2019': ['fs', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2020': ['fs', 'camc', 'sm', 'xp', 'xsa'],
      '2021': ['fs', 'camc', 'sm', 'xp', 'xsa'],
      '2022': ['fs', 'camc', 'sm', 'xp', 'xsa'],
    },
    'Mustang Mach 1': {
      '2003': ['fs', 'stu', 'camt', 'sm', 'xp', 'xsa'],
      '2004': ['fs', 'stu', 'camt', 'sm', 'xp', 'xsa'],
      '2021': ['fs', 'camc', 'sm', 'xp', 'xsa'],
      '2022': ['fs', 'camc', 'sm', 'xp', 'xsa'],
    },
    'Mustang Mach-E': {
      '2021': ['ss', 'evx'],
      '2022': ['ss', 'evx'],
    },
    'Mustang SVO': {
      'all': ['gs', 'stu', 'esp', 'sm', 'cp', 'camt', 'camc', 'xp', 'xsa'],
    },
    'Mustang SVT Cobra': {
      'all': ['fs', 'stu', 'sm', 'camt', 'xp', 'xsa'],
    },
    'Mustang Shelby GT350': {
      '2015': ['ssr', 'sst', 'fs', 'asp', 'camc', 'sm', 'xp', 'xsa'],
      '2016': ['ssr', 'sst', 'fs', 'asp', 'camc', 'sm', 'xp', 'xsa'],
      '2017': ['ssr', 'sst', 'fs', 'camc', 'sm', 'xp', 'xsa'],
      '2018': ['ssr', 'sst', 'fs', 'camc', 'sm', 'xp', 'xsa'],
      '2019': ['ssr', 'sst', 'fs', 'camc', 'sm', 'xp', 'xsa'],
      '2020': ['ssr', 'sst', 'fs', 'camc', 'sm', 'xp', 'xsa'],
    },
    'Mustang Shelby GT350R': {
      '2015': ['ssr', 'ss', 'asp', 'camc', 'sm', 'xp', 'xsa'],
      '2016': ['ssr', 'ss', 'asp', 'camc', 'sm', 'xp', 'xsa'],
      '2017': ['ssr', 'ss', 'camc', 'sm', 'xp', 'xsa'],
      '2018': ['ssr', 'ss', 'camc', 'sm', 'xp', 'xsa'],
      '2019': ['ssr', 'ss', 'camc', 'sm', 'xp', 'xsa'],
      '2020': ['ssr', 'ss', 'camc', 'sm', 'xp', 'xsa'],
    },
    'Mustang Shelby GT500': {
      '2007': ['as', 'ssr', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2008': ['as', 'ssr', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2009': ['as', 'ssr', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2010': ['as', 'ssr', 'esp', 'camc', 'sm', 'xp', 'xsa'],
      '2011': ['as', 'ssr', 'asp', 'camc', 'sm', 'xp', 'xsa'],
      '2012': ['as', 'ssr', 'asp', 'camc', 'sm', 'xp', 'xsa'],
      '2013': ['as', 'ssr', 'asp', 'camc', 'sm', 'xp', 'xsa'],
      '2014': ['as', 'ssr', 'asp', 'camc', 'sm', 'xp', 'xsa'],
      '2015': ['as', 'ssr', 'camc', 'sm', 'xp', 'xsa'],
    },
    'Mustang V8 (NOC)': {
      'all': ['fs', 'stu', 'esp', 'sm', 'cp', 'camt', 'xp', 'xsa'],
    },
    'Pinto': {
      'all': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xsb'],
    },
    'Probe (4-cyl non-turbo)': {
      'all': ['hs', 'fsp', 'ep', 'sm', 'xp', 'xsa'],
    },
    'Probe (Turbo & V6)': {
      'all': ['hs', 'dsp', 'sm', 'xp', 'xsa'],
    },
    'Ranger': {
      'all': ['stu', 'sm', 'xp', 'xsa'],
    },
    'Taurus': {
      'all': ['hs', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Taurus SHO': {
      '1989': ['hs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '1990': ['hs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '1991': ['hs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '1992': ['hs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '1993': ['hs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '1994': ['hs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '1995': ['hs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '1996': ['gs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '1997': ['gs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '1998': ['gs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '1999': ['gs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '2010': ['gs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '2011': ['gs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '2012': ['gs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '2013': ['gs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '2014': ['gs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '2015': ['gs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '2016': ['gs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '2017': ['gs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '2018': ['gs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '2019': ['gs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
    },
    'Tempo': {
      'all': ['hs', 'sm', 'xp', 'xsa'],
    },
    'Thunderbird (V6 Supercharged)': {
      '1989': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1990': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1991': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1992': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1993': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1994': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1995': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1996': ['gs', 'esp', 'sm', 'xp', 'xsa'],
      '1997': ['gs', 'esp', 'sm', 'xp', 'xsa'],
    },
    'Thunderbird (V6 non-Supercharged)': {
      '1989': ['hs', 'esp', 'cp', 'sm', 'xp', 'xsa'],
      '1990': ['hs', 'esp', 'cp', 'sm', 'xp', 'xsa'],
      '1991': ['hs', 'esp', 'cp', 'sm', 'xp', 'xsa'],
      '1992': ['hs', 'esp', 'cp', 'sm', 'xp', 'xsa'],
      '1993': ['hs', 'esp', 'cp', 'sm', 'xp', 'xsa'],
      '1994': ['hs', 'esp', 'cp', 'sm', 'xp', 'xsa'],
      '1995': ['hs', 'esp', 'cp', 'sm', 'xp', 'xsa'],
      '1996': ['hs', 'esp', 'cp', 'sm', 'xp', 'xsa'],
      '1997': ['hs', 'esp', 'cp', 'sm', 'xp', 'xsa'],
    },
    'Thunderbird (V8)': {
      '1955': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1956': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1957': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1958': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1959': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1960': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1961': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1962': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1963': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1964': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1965': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1966': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1967': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1968': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1969': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1970': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1971': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1972': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1973': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1974': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1975': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1976': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1977': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1978': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1979': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1980': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1981': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1982': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1983': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1984': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1985': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1986': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1987': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1988': ['fs', 'camt', 'sm', 'xp', 'xsa'],
      '1989': ['gs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '1990': ['gs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '1991': ['gs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '1992': ['gs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '1993': ['gs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '1994': ['gs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '1995': ['gs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '1996': ['gs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '1997': ['gs', 'esp', 'camt', 'sm', 'xp', 'xsa'],
      '2002': ['fs', 'camc', 'sm', 'xp', 'xsa'],
      '2003': ['fs', 'camc', 'sm', 'xp', 'xsa'],
      '2004': ['fs', 'camc', 'sm', 'xp', 'xsa'],
      '2005': ['fs', 'camc', 'sm', 'xp', 'xsa'],
    },
    'Thunderbird Turbo Coupe': {
      'all': ['hs', 'cp', 'sm', 'xp', 'xsa'],
    },
    'ZX2': {
      'all': ['hs', 'sts', 'fsp', 'ep', 'sm', 'xp', 'xsa'],
    },
    'ZX2 S/R': {
      '1999': ['gs', 'sm', 'xp', 'xsa'],
      '2000': ['gs', 'sm', 'xp', 'xsa'],
      '2001': ['gs', 'sm', 'xp', 'xsa'],
      '2002': ['gs', 'sm', 'xp', 'xsa'],
      '2003': ['gs', 'sm', 'xp', 'xsa'],
    },
  },
  'GMC': {
    'Sonoma (4-cyl & 6-cyl, N/A)': {
      'all': ['stx', 'sm', 'xp', 'xsa'],
    },
    'Sonoma (6-cyl)': {
      '1982': ['cp', 'sm', 'xp', 'xsa'],
      '1983': ['cp', 'sm', 'xp', 'xsa'],
      '1984': ['cp', 'sm', 'xp', 'xsa'],
      '1985': ['cp', 'sm', 'xp', 'xsa'],
      '1986': ['cp', 'sm', 'xp', 'xsa'],
      '1987': ['cp', 'sm', 'xp', 'xsa'],
      '1988': ['cp', 'sm', 'xp', 'xsa'],
      '1989': ['cp', 'sm', 'xp', 'xsa'],
      '1990': ['cp', 'sm', 'xp', 'xsa'],
      '1991': ['cp', 'sm', 'xp', 'xsa'],
      '1992': ['cp', 'sm', 'xp', 'xsa'],
      '1993': ['cp', 'sm', 'xp', 'xsa'],
      '1994': ['cp', 'sm', 'xp', 'xsa'],
      '1995': ['cp', 'sm', 'xp', 'xsa'],
      '1996': ['cp', 'sm', 'xp', 'xsa'],
      '1997': ['cp', 'sm', 'xp', 'xsa'],
      '1998': ['cp', 'sm', 'xp', 'xsa'],
      '1999': ['cp', 'sm', 'xp', 'xsa'],
      '2000': ['cp', 'sm', 'xp', 'xsa'],
      '2001': ['cp', 'sm', 'xp', 'xsa'],
      '2002': ['cp', 'sm', 'xp', 'xsa'],
      '2003': ['cp', 'sm', 'xp', 'xsa'],
      '2004': ['cp', 'sm', 'xp', 'xsa'],
    },
    'Syclone': {
      'all': ['fs', 'sm', 'xp', 'xsa'],
    },
    'Typhoon': {
      'all': ['fs', 'sm', 'xp', 'xsa'],
    },
  },
  'Geo': {
    'Metro': {
      'all': ['hs', 'sm', 'xp', 'xsb', 'smf'],
    },
    'Metro 13BA': {
      '1989': ['ep', 'sm', 'xp', 'xsb', 'smf'],
      '1990': ['ep', 'sm', 'xp', 'xsb', 'smf'],
      '1991': ['ep', 'sm', 'xp', 'xsb', 'smf'],
      '1992': ['ep', 'sm', 'xp', 'xsb', 'smf'],
      '1993': ['ep', 'sm', 'xp', 'xsb', 'smf'],
      '1994': ['ep', 'sm', 'xp', 'xsb', 'smf'],
    },
    'Prizm': {
      'all': ['hs', 'sm', 'xp', 'xsb', 'smf'],
    },
    'Spectrum': {
      'all': ['hs', 'sm', 'xp', 'xsb'],
    },
    'Spectrum Turbo': {
      '1985': ['dsp', 'sm', 'xp', 'xsb'],
      '1986': ['dsp', 'sm', 'xp', 'xsb'],
      '1987': ['dsp', 'sm', 'xp', 'xsb'],
      '1988': ['dsp', 'sm', 'xp', 'xsb'],
      '1989': ['dsp', 'sm', 'xp', 'xsb'],
    },
    'Storm': {
      '2005': ['dsp', 'sm', 'xp', 'xsb', 'smf'],
      '2006': ['dsp', 'sm', 'xp', 'xsb', 'smf'],
      '2007': ['dsp', 'sm', 'xp', 'xsb', 'smf'],
    },
    'Storm GSi': {
      '1985': ['dsp', 'sm', 'xp', 'xsb', 'smf'],
      '1986': ['dsp', 'sm', 'xp', 'xsb', 'smf'],
      '1987': ['dsp', 'sm', 'xp', 'xsb', 'smf'],
      '1988': ['dsp', 'sm', 'xp', 'xsb', 'smf'],
      '1989': ['dsp', 'sm', 'xp', 'xsb', 'smf'],
    },
  },
  'Honda': {
    '600': {
      '1964': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1965': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1966': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
    },
    '800': {
      '1967': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1968': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1969': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1970': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
    },
    'Accord': {
      '1976': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1977': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1978': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1979': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1980': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1981': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1982': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1983': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1984': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1985': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1986': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1987': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1988': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1989': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1990': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '1991': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '1992': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '1993': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '1994': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '1995': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '1996': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '1997': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '1998': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '1999': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2000': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2001': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2002': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2003': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2004': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2005': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2006': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2007': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2008': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2009': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2010': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2011': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2012': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2013': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2014': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2015': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2016': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2017': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2018': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2019': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2020': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2021': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
    },
    'Accord (V6)': {
      '2014': ['stx', 'smf', 'xsa'],
      '2015': ['stx', 'smf', 'xsa'],
      '2016': ['stx', 'smf', 'xsa'],
      '2017': ['stx', 'smf', 'xsa'],
    },
    'CR-Z': {
      '2010': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2011': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2012': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2013': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2014': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2015': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2016': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
    },
    'CRX': {
      '1984': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1985': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1986': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1987': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1988': ['hs', 'sts', 'csp', 'smf', 'ep', 'xsb'],
      '1989': ['hs', 'sts', 'csp', 'smf', 'ep', 'xsb'],
      '1990': ['hs', 'sts', 'csp', 'smf', 'ep', 'xsb'],
      '1991': ['hs', 'sts', 'csp', 'smf', 'ep', 'xsb'],
    },
    'Civic': {
      '1975': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1976': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1977': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1978': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1979': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1980': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1981': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1982': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1983': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1984': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1985': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1986': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1987': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1988': ['hs', 'sts', 'csp', 'smf', 'ep', 'xsb'],
      '1989': ['hs', 'sts', 'csp', 'smf', 'ep', 'xsb'],
      '1990': ['hs', 'sts', 'csp', 'smf', 'ep', 'xsb'],
      '1991': ['hs', 'sts', 'csp', 'smf', 'ep', 'xsb'],
      '1992': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1993': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1994': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1995': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1996': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '1997': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '1998': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '1999': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2000': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2001': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2002': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2003': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2004': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2005': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2006': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2007': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2008': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2009': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2010': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2011': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2012': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2013': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2014': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2015': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2016': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2017': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2018': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2019': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2020': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2021': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2022': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
    },
    'Civic Si': {
      '1984': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1985': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1986': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1987': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1988': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1989': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1990': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1991': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1992': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1993': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1994': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1995': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1996': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '1997': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '1998': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '1999': ['hs', 'sts', 'dsp', 'smf', 'ep', 'xsa'],
      '2000': ['hs', 'sts', 'dsp', 'smf', 'ep', 'xsa'],
      '2001': ['hs', 'sts', 'dsp', 'smf', 'ep', 'xsa'],
      '2002': ['hs', 'stx', 'dsp', 'smf', 'ep', 'xsa'],
      '2003': ['hs', 'stx', 'dsp', 'smf', 'ep', 'xsa'],
      '2004': ['hs', 'stx', 'dsp', 'smf', 'ep', 'xsa'],
      '2005': ['hs', 'stx', 'dsp', 'smf', 'ep', 'xsa'],
      '2006': ['hs', 'stx', 'dsp', 'smf', 'ep', 'xsa'],
      '2007': ['hs', 'stx', 'dsp', 'smf', 'ep', 'xsa'],
      '2008': ['hs', 'stx', 'dsp', 'smf', 'ep', 'xsa'],
      '2009': ['hs', 'stx', 'dsp', 'smf', 'ep', 'xsa'],
      '2010': ['hs', 'stx', 'dsp', 'smf', 'ep', 'xsa'],
      '2011': ['hs', 'stx', 'dsp', 'smf', 'ep', 'xsa'],
      '2012': ['hs', 'stx', 'dsp', 'smf', 'ep', 'xsa'],
      '2013': ['hs', 'stx', 'fsp', 'smf', 'ep', 'xsa'],
      '2014': ['hs', 'stx', 'fsp', 'smf', 'ep', 'xsa'],
      '2015': ['hs', 'stx', 'fsp', 'smf', 'ep', 'xsa'],
      '2016': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2017': ['gs', 'sth', 'fsp', 'smf', 'ep', 'xsa'],
      '2018': ['gs', 'sth', 'fsp', 'smf', 'ep', 'xsa'],
      '2019': ['gs', 'sth', 'fsp', 'smf', 'ep', 'xsa'],
      '2020': ['gs', 'sth', 'fsp', 'smf', 'ep', 'xsa'],
      '2021': ['gs', 'sth', 'fsp', 'smf', 'ep', 'xsa'],
      '2022': ['gs', 'sth', 'fsp', 'smf', 'ep', 'xsa'],
    },
    'Civic Si Mugen': {
      '2008': ['gs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
    },
    'Civic Type R': {
      '2017': ['ds', 'stu', 'dsp', 'smf', 'ep', 'xsa'],
      '2018': ['ds', 'stu', 'dsp', 'smf', 'ep', 'xsa'],
      '2019': ['ds', 'stu', 'dsp', 'smf', 'ep', 'xsa'],
      '2020': ['ds', 'dsp', 'smf', 'ep', 'xsa'],
      '2021': ['ds', 'dsp', 'smf', 'ep', 'xsa'],
    },
    'Fit': {
      '2007': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2008': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2009': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2010': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2011': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2012': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2013': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2014': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2015': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2016': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2017': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2018': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2019': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2020': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2021': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
    },
    'Insight': {
      '1999': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2000': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2001': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2002': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2003': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2004': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2005': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2006': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2009': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2010': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2011': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2012': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2013': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2014': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2018': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2019': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2020': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '2021': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
    },
    'Prelude': {
      '1978': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1979': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1980': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1981': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1982': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1983': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '1984': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '1985': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '1986': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '1987': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '1988': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '1989': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '1990': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '1991': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsa'],
      '1992': ['hs', 'sts', 'dsp', 'smf', 'ep', 'xsa'],
      '1993': ['hs', 'sts', 'dsp', 'smf', 'ep', 'xsa'],
      '1994': ['hs', 'sts', 'dsp', 'smf', 'ep', 'xsa'],
      '1995': ['hs', 'sts', 'dsp', 'smf', 'ep', 'xsa'],
      '1996': ['hs', 'sts', 'dsp', 'smf', 'ep', 'xsa'],
      '1997': ['hs', 'sts', 'dsp', 'smf', 'ep', 'xsa'],
      '1998': ['hs', 'sts', 'dsp', 'smf', 'ep', 'xsa'],
      '1999': ['hs', 'sts', 'dsp', 'smf', 'ep', 'xsa'],
      '2000': ['hs', 'sts', 'dsp', 'smf', 'ep', 'xsa'],
      '2001': ['hs', 'sts', 'dsp', 'smf', 'ep', 'xsa'],
    },
    'S2000 (non-CR)': {
      '1999': ['cs', 'sst', 'str', 'bsp', 'ssm', 'fp', 'xsa'],
      '2000': ['cs', 'sst', 'str', 'bsp', 'ssm', 'fp', 'xsa'],
      '2001': ['cs', 'sst', 'str', 'bsp', 'ssm', 'fp', 'xsa'],
      '2002': ['cs', 'sst', 'str', 'bsp', 'ssm', 'fp', 'xsa'],
      '2003': ['cs', 'sst', 'str', 'bsp', 'ssm', 'fp', 'xsa'],
      '2004': ['cs', 'sst', 'str', 'bsp', 'ssm', 'fp', 'xsa'],
      '2005': ['cs', 'sst', 'str', 'bsp', 'ssm', 'fp', 'xsa'],
      '2006': ['cs', 'sst', 'str', 'bsp', 'ssm', 'fp', 'xsa'],
      '2007': ['cs', 'sst', 'str', 'bsp', 'ssm', 'fp', 'xsa'],
      '2008': ['cs', 'sst', 'str', 'bsp', 'ssm', 'fp', 'xsa'],
      '2009': ['cs', 'sst', 'str', 'bsp', 'ssm', 'fp', 'xsa'],
    },
    'S2000 CR': {
      '2008': ['as', 'sst', 'str', 'bsp', 'ssm', 'fp', 'xsa'],
      '2009': ['as', 'sst', 'str', 'bsp', 'ssm', 'fp', 'xsa'],
    },
    'del Sol (DOHC)': {
      '1992': ['hs', 'sts', 'dsp', 'smf', 'ep', 'xsb'],
      '1993': ['hs', 'sts', 'dsp', 'smf', 'ep', 'xsb'],
      '1994': ['hs', 'sts', 'dsp', 'smf', 'ep', 'xsb'],
      '1995': ['hs', 'sts', 'dsp', 'smf', 'ep', 'xsb'],
      '1996': ['hs', 'sts', 'dsp', 'smf', 'ep', 'xsb'],
      '1997': ['hs', 'sts', 'dsp', 'smf', 'ep', 'xsb'],
      '1998': ['hs', 'sts', 'dsp', 'smf', 'ep', 'xsb'],
    },
    'del Sol (SOHC)': {
      '1992': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1993': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1994': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1995': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1996': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1997': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
      '1998': ['hs', 'sts', 'fsp', 'smf', 'ep', 'xsb'],
    },
  },
  'Hyundai': {
    'Accent': {
      '1995': ['hs', 'sm', 'xp', 'xsa', 'smf'],
      '1996': ['hs', 'sm', 'xp', 'xsa', 'smf'],
      '1997': ['hs', 'sm', 'xp', 'xsa', 'smf'],
      '1998': ['hs', 'sm', 'xp', 'xsa', 'smf'],
      '1999': ['hs', 'sm', 'xp', 'xsa', 'smf'],
      '2000': ['hs', 'sm', 'xp', 'xsa', 'smf'],
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
      '2011': ['hs', 'sm', 'xp', 'xsa', 'smf'],
      '2012': ['hs', 'sts', 'sm', 'xp', 'xsa', 'smf'],
      '2013': ['hs', 'sts', 'sm', 'xp', 'xsa', 'smf'],
      '2014': ['hs', 'sts', 'sm', 'xp', 'xsa', 'smf'],
      '2015': ['hs', 'sts', 'sm', 'xp', 'xsa', 'smf'],
      '2016': ['hs', 'sts', 'sm', 'xp', 'xsa', 'smf'],
      '2017': ['hs', 'sts', 'sm', 'xp', 'xsa', 'smf'],
      '2018': ['hs', 'sm', 'xp', 'xsa', 'smf'],
      '2019': ['hs', 'sm', 'xp', 'xsa', 'smf'],
      '2020': ['hs', 'sm', 'xp', 'xsa', 'smf'],
      '2021': ['hs', 'sm', 'xp', 'xsa', 'smf'],
      '2022': ['hs', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Elantra (incl. GT Turbo)': {
      '1990': ['hs', 'sm', 'xp', 'xsa', 'fsp', 'smf'],
      '1991': ['hs', 'sm', 'xp', 'xsa', 'fsp', 'smf'],
      '1992': ['hs', 'sm', 'xp', 'xsa', 'fsp', 'smf'],
      '1993': ['hs', 'sm', 'xp', 'xsa', 'fsp', 'smf'],
      '1994': ['hs', 'sm', 'xp', 'xsa', 'fsp', 'smf'],
      '1995': ['hs', 'sm', 'xp', 'xsa', 'fsp', 'smf'],
      '1996': ['hs', 'sm', 'xp', 'xsa', 'fsp', 'smf'],
      '1997': ['hs', 'sm', 'xp', 'xsa', 'fsp', 'smf'],
      '1998': ['hs', 'sm', 'xp', 'xsa', 'fsp', 'smf'],
      '1999': ['hs', 'sm', 'xp', 'xsa', 'fsp', 'smf'],
      '2000': ['hs', 'sm', 'xp', 'xsa', 'fsp', 'smf'],
      '2001': ['hs', 'sts', 'sm', 'xp', 'fsp', 'xsa', 'smf'],
      '2002': ['hs', 'sts', 'sm', 'xp', 'fsp', 'xsa', 'smf'],
      '2003': ['hs', 'sts', 'sm', 'xp', 'fsp', 'xsa', 'smf'],
      '2004': ['hs', 'sts', 'sm', 'xp', 'fsp', 'xsa', 'smf'],
      '2005': ['hs', 'sts', 'sm', 'xp', 'fsp', 'xsa', 'smf'],
      '2006': ['hs', 'sts', 'sm', 'xp', 'fsp', 'xsa', 'smf'],
      '2007': ['hs', 'sts', 'sm', 'xp', 'fsp', 'xsa', 'smf'],
      '2008': ['hs', 'sts', 'sm', 'xp', 'fsp', 'xsa', 'smf'],
      '2009': ['hs', 'sts', 'sm', 'xp', 'fsp', 'xsa', 'smf'],
      '2010': ['hs', 'sts', 'sm', 'xp', 'fsp', 'xsa', 'smf'],
      '2011': ['hs', 'sts', 'sm', 'xp', 'fsp', 'xsa', 'smf'],
      '2012': ['hs', 'sts', 'sm', 'xp', 'fsp', 'xsa', 'smf'],
      '2013': ['hs', 'sts', 'sm', 'xp', 'fsp', 'xsa', 'smf'],
      '2014': ['hs', 'sts', 'sm', 'xp', 'fsp', 'xsa', 'smf'],
      '2015': ['hs', 'sts', 'sm', 'xp', 'fsp', 'xsa', 'smf'],
      '2016': ['hs', 'sts', 'sm', 'xp', 'fsp', 'xsa', 'smf'],
      '2017': ['hs', 'sm', 'xp', 'xsa', 'fsp', 'smf'],
      '2018': ['hs', 'sm', 'xp', 'xsa', 'fsp', 'smf'],
      '2019': ['hs', 'sm', 'xp', 'xsa', 'fsp', 'smf'],
      '2020': ['hs', 'sm', 'xp', 'xsa', 'fsp', 'smf'],
      '2021': ['hs', 'sm', 'xp', 'xsa', 'fsp', 'smf'],
      '2022': ['hs', 'sm', 'xp', 'xsa', 'fsp', 'smf'],
    },
    'Elantra N': {
      '2022': ['ds', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Excel': {
      'all': ['fsp', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Genesis': {
      '2009': ['esp', 'sm', 'xp', 'xsa'],
      '2010': ['esp', 'sm', 'xp', 'xsa'],
      '2011': ['esp', 'sm', 'xp', 'xsa'],
      '2012': ['esp', 'sm', 'xp', 'xsa'],
    },
    'Genesis (V6)': {
      'all': ['stu', 'sm', 'xp', 'xsa'],
    },
    'Genesis Coupe (4-cyl Turbo)': {
      '2010': ['gs', 'sth', 'sm', 'xp', 'xsa'],
      '2011': ['gs', 'sth', 'sm', 'xp', 'xsa'],
      '2012': ['gs', 'sth', 'sm', 'xp', 'xsa'],
      '2013': ['ds', 'stu', 'sm', 'xp', 'xsa'],
      '2014': ['ds', 'stu', 'sm', 'xp', 'xsa'],
      '2015': ['ds', 'stu', 'sm', 'xp', 'xsa'],
      '2016': ['ds', 'stu', 'sm', 'xp', 'xsa'],
    },
    'Genesis Coupe (V6)': {
      '2010': ['ds', 'stu', 'sm', 'xp', 'xsa'],
      '2011': ['ds', 'stu', 'sm', 'xp', 'xsa'],
      '2012': ['ds', 'stu', 'sm', 'xp', 'xsa'],
      '2013': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2014': ['fs', 'stu', 'sm', 'xp', 'xsa'],
      '2015': ['fs', 'stu', 'sm', 'xp', 'xsa'],
    },
    'Genesis G70': {
      '2018': ['fs', 'sm', 'xp', 'xsa'],
      '2019': ['fs', 'sm', 'xp', 'xsa'],
      '2020': ['fs', 'sm', 'xp', 'xsa'],
      '2021': ['fs', 'sm', 'xp', 'xsa'],
      '2022': ['fs', 'sm', 'xp', 'xsa'],
    },
    'IONIQ EV': {
      '2020': ['evx'],
      '2021': ['evx'],
      '2022': ['evx'],
    },
    'Kona EV': {
      '2020': ['evx'],
      '2021': ['evx'],
      '2022': ['evx'],
    },
    'Kona N': {
      '2022': ['ds', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Not Otherwise Classified': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xsa'],
    },
    'Scoupe': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Sonata': {
      '1990': ['ep', 'sm', 'xp', 'xsa', 'smf'],
      '1991': ['ep', 'sm', 'xp', 'xsa', 'smf'],
      '1992': ['ep', 'sm', 'xp', 'xsa', 'smf'],
      '1993': ['ep', 'sm', 'xp', 'xsa', 'smf'],
      '1994': ['ep', 'sm', 'xp', 'xsa', 'smf'],
      '1995': ['ep', 'sm', 'xp', 'xsa', 'smf'],
      '1996': ['ep', 'sm', 'xp', 'xsa', 'smf'],
      '1997': ['ep', 'sm', 'xp', 'xsa', 'smf'],
      '1998': ['ep', 'sm', 'xp', 'xsa', 'smf'],
      '1999': ['ep', 'sm', 'xp', 'xsa', 'smf'],
      '2000': ['ep', 'sm', 'xp', 'xsa', 'smf'],
      '2001': ['ep', 'sm', 'xp', 'xsa', 'smf'],
      '2002': ['ep', 'sm', 'xp', 'xsa', 'smf'],
      '2003': ['ep', 'sm', 'xp', 'xsa', 'smf'],
      '2004': ['ep', 'sm', 'xp', 'xsa', 'smf'],
      '2005': ['ep', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Tiburon (4-cyl)': {
      'all': ['hs', 'dsp', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Tiburon (V6)': {
      '2003': ['hs', 'sts', 'dsp', 'sm', 'xp', 'xsa', 'smf'],
      '2004': ['hs', 'sts', 'dsp', 'sm', 'xp', 'xsa', 'smf'],
      '2005': ['hs', 'sts', 'dsp', 'sm', 'xp', 'xsa', 'smf'],
      '2006': ['hs', 'sts', 'dsp', 'sm', 'xp', 'xsa', 'smf'],
      '2007': ['hs', 'sts', 'dsp', 'sm', 'xp', 'xsa', 'smf'],
      '2008': ['hs', 'sts', 'dsp', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Veloster': {
      '2011': ['hs', 'sts', 'sm', 'xp', 'xsa', 'smf'],
      '2012': ['hs', 'sts', 'sm', 'xp', 'xsa', 'smf'],
      '2013': ['hs', 'sts', 'sm', 'xp', 'xsa', 'smf'],
      '2014': ['hs', 'sts', 'sm', 'xp', 'xsa', 'smf'],
      '2015': ['hs', 'sts', 'sm', 'xp', 'xsa', 'smf'],
      '2016': ['hs', 'sts', 'sm', 'xp', 'xsa', 'smf'],
      '2017': ['hs', 'sts', 'sm', 'xp', 'xsa', 'smf'],
      '2018': ['hs', 'sts', 'sm', 'xp', 'xsa', 'smf'],
      '2019': ['hs', 'sm', 'xp', 'xsa', 'smf'],
      '2020': ['hs', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Veloster N': {
      '2019': ['ds', 'stu', 'sm', 'xp', 'xsa', 'smf'],
      '2020': ['ds', 'stu', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Veloster Turbo': {
      '2012': ['hs', 'fsp', 'sm', 'xp', 'xsa', 'smf'],
      '2013': ['hs', 'sth', 'fsp', 'sm', 'xp', 'xsa', 'smf'],
      '2014': ['hs', 'sth', 'fsp', 'sm', 'xp', 'xsa', 'smf'],
      '2015': ['hs', 'sth', 'fsp', 'sm', 'xp', 'xsa', 'smf'],
      '2016': ['hs', 'sth', 'fsp', 'sm', 'xp', 'xsa', 'smf'],
      '2017': ['hs', 'fsp', 'sm', 'xp', 'xsa', 'smf'],
      '2019': ['gs', 'sth', 'dsp', 'sm', 'xp', 'xsa', 'smf'],
      '2020': ['gs', 'sth', 'sm', 'xp', 'xsa', 'smf'],
    },
    'Veloster Turbo Rally Edition': {
      '2016': ['gs', 'fsp', 'sm', 'xp', 'xsa', 'smf'],
      '2017': ['gs', 'fsp', 'sm', 'xp', 'xsa', 'smf'],
    },
  },
  'Infiniti': {
    'G20': {
      'all': ['hs', 'fsp', 'xp', 'xsa', 'sm'],
    },
    'G35 Coupe': {
      '2003': ['ds', 'stu', 'esp', 'xp', 'xsa', 'sm'],
      '2004': ['ds', 'stu', 'esp', 'xp', 'xsa', 'sm'],
      '2005': ['ds', 'stu', 'esp', 'xp', 'xsa', 'sm'],
      '2006': ['ds', 'stu', 'esp', 'xp', 'xsa', 'sm'],
      '2007': ['ds', 'stu', 'esp', 'xp', 'xsa', 'sm'],
    },
    'G35 Sedan': {
      '2003': ['ds', 'stx', 'esp', 'xp', 'xsa', 'sm'],
      '2004': ['ds', 'stx', 'esp', 'xp', 'xsa', 'sm'],
      '2005': ['ds', 'stx', 'esp', 'xp', 'xsa', 'sm'],
      '2006': ['ds', 'stx', 'esp', 'xp', 'xsa', 'sm'],
      '2007': ['ds', 'stx', 'esp', 'xp', 'xsa', 'sm'],
    },
    'G37': {
      'all': ['stu', 'esp', 'xp', 'xsa', 'sm'],
    },
    'G37 Coupe': {
      'all': ['fs', 'xp', 'xsa', 'sm'],
    },
    'G37 Sedan': {
      'all': ['fs', 'xp', 'xsa', 'sm'],
    },
    'I30': {
      '1996': ['ep', 'xp', 'xsa', 'sm'],
      '1997': ['ep', 'xp', 'xsa', 'sm'],
      '1998': ['ep', 'xp', 'xsa', 'sm'],
      '1999': ['ep', 'xp', 'xsa', 'sm'],
      '2000': ['ep', 'xp', 'xsa', 'sm'],
      '2001': ['ep', 'xp', 'xsa', 'sm'],
    },
    'I35': {
      '2002': ['ep', 'xp', 'xsa', 'sm'],
      '2003': ['ep', 'xp', 'xsa', 'sm'],
      '2004': ['ep', 'xp', 'xsa', 'sm'],
    },
    'M30': {
      'all': ['hs', 'esp', 'xp', 'xsa', 'sm'],
    },
    'Q45': {
      'all': ['fs', 'esp', 'xp', 'xsa', 'sm'],
    },
    'Q50 Sport': {
      '2014': ['fs', 'xp', 'xsa', 'sm'],
      '2015': ['fs', 'xp', 'xsa', 'sm'],
      '2016': ['fs', 'xp', 'xsa', 'sm'],
      '2017': ['fs', 'xp', 'xsa', 'sm'],
      '2018': ['fs', 'xp', 'xsa', 'sm'],
      '2019': ['fs', 'xp', 'xsa', 'sm'],
      '2020': ['fs', 'xp', 'xsa', 'sm'],
      '2021': ['fs', 'xp', 'xsa', 'sm'],
      '2022': ['fs', 'xp', 'xsa', 'sm'],
    },
    'Q60': {
      '2014': ['fs', 'xp', 'xsa', 'sm'],
      '2015': ['fs', 'xp', 'xsa', 'sm'],
      '2016': ['fs', 'xp', 'xsa', 'sm'],
      '2017': ['fs', 'xp', 'xsa', 'sm'],
      '2018': ['fs', 'xp', 'xsa', 'sm'],
      '2019': ['fs', 'xp', 'xsa', 'sm'],
      '2020': ['fs', 'xp', 'xsa', 'sm'],
      '2021': ['fs', 'xp', 'xsa', 'sm'],
      '2022': ['fs', 'xp', 'xsa', 'sm'],
    },
  },
  'Isuzu': {
    'FWD models': {
      '1985': ['fsp', 'xp', 'xsa', 'sm', 'smf'],
      '1986': ['fsp', 'xp', 'xsa', 'sm', 'smf'],
      '1987': ['fsp', 'xp', 'xsa', 'sm', 'smf'],
      '1988': ['fsp', 'xp', 'xsa', 'sm', 'smf'],
      '1989': ['fsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'I-Mark': {
      '1981': ['dp', 'hs', 'xp', 'xsa', 'sm'],
      '1982': ['dp', 'hs', 'xp', 'xsa', 'sm'],
      '1983': ['dp', 'hs', 'xp', 'xsa', 'sm'],
      '1984': ['dp', 'hs', 'xp', 'xsa', 'sm'],
      '1985': ['ep', 'xp', 'xsa', 'sm'],
      '1986': ['ep', 'xp', 'xsa', 'sm'],
      '1987': ['ep', 'xp', 'xsa', 'sm'],
      '1988': ['ep', 'xp', 'xsa', 'sm'],
      '1989': ['ep', 'xp', 'xsa', 'sm'],
    },
    'I-Mark (1.5L non-turbo)': {
      'all': ['fsp', 'xp', 'xsa', 'sm'],
    },
    'I-Mark (RWD)': {
      '1980': ['fsp', 'xp', 'xsa', 'sm'],
      '1981': ['fsp', 'xp', 'xsa', 'sm'],
      '1982': ['fsp', 'xp', 'xsa', 'sm'],
      '1983': ['fsp', 'xp', 'xsa', 'sm'],
      '1984': ['fsp', 'xp', 'xsa', 'sm'],
      '1985': ['fsp', 'xp', 'xsa', 'sm'],
    },
    'I-Mark LS (16v & Turbo, FWD)': {
      '1985': ['dsp', 'xp', 'xsa', 'sm'],
      '1986': ['dsp', 'xp', 'xsa', 'sm'],
      '1987': ['dsp', 'xp', 'xsa', 'sm'],
      '1988': ['dsp', 'xp', 'xsa', 'sm'],
      '1989': ['dsp', 'xp', 'xsa', 'sm'],
    },
    'I-Mark RS (16v & Turbo, FWD)': {
      'all': ['dsp', 'fp', 'hs', 'xp', 'xsa', 'sm'],
    },
    'I-Mark RS (16v)': {
      '1985': ['fsp', 'xp', 'xsa', 'sm'],
      '1986': ['fsp', 'xp', 'xsa', 'sm'],
      '1987': ['fsp', 'xp', 'xsa', 'sm'],
      '1988': ['fsp', 'xp', 'xsa', 'sm'],
      '1989': ['fsp', 'xp', 'xsa', 'sm'],
    },
    'Impulse (16v & Turbo)': {
      'all': ['dsp', 'xp', 'xsa', 'sm'],
    },
    'Impulse (non-turbo)': {
      '1980': ['hs', 'xp', 'xsa', 'sm', 'xp', 'xsa', 'sm'],
      '1981': ['hs', 'xp', 'xsa', 'sm'],
      '1982': ['hs', 'xp', 'xsa', 'sm'],
      '1983': ['dp', 'hs', 'fsp', 'xp', 'xsa', 'sm'],
      '1984': ['dp', 'hs', 'fsp', 'xp', 'xsa', 'sm'],
      '1985': ['dp', 'hs', 'fsp', 'xp', 'xsa', 'sm'],
      '1986': ['dp', 'hs', 'fsp', 'xp', 'xsa', 'sm'],
      '1987': ['dp', 'hs', 'fsp', 'xp', 'xsa', 'sm'],
      '1988': ['dp', 'hs', 'fsp', 'xp', 'xsa', 'sm'],
      '1989': ['dp', 'hs', 'fsp', 'xp', 'xsa', 'sm'],
      '1990': ['hs', 'ep', 'xp', 'xsa', 'sm'],
      '1991': ['hs', 'ep', 'xp', 'xsa', 'sm'],
      '1992': ['hs', 'ep', 'xp', 'xsa', 'sm'],
      '1993': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Impulse RS (RWD)': {
      '1983': ['dsp', 'xp', 'xsa', 'sm'],
      '1984': ['dsp', 'xp', 'xsa', 'sm'],
      '1985': ['dsp', 'xp', 'xsa', 'sm'],
      '1986': ['dsp', 'xp', 'xsa', 'sm'],
      '1987': ['dsp', 'xp', 'xsa', 'sm'],
      '1988': ['dsp', 'xp', 'xsa', 'sm'],
      '1989': ['dsp', 'xp', 'xsa', 'sm'],
    },
    'Impulse RS Turbo (AWD)': {
      '1990': ['dsp', 'xp', 'xsa', 'sm'],
      '1991': ['dsp', 'xp', 'xsa', 'sm'],
      '1992': ['dsp', 'xp', 'xsa', 'sm'],
      '1993': ['dsp', 'xp', 'xsa', 'sm'],
    },
    'Impulse Turbo & RS (RWD)': {
      '1980': ['gs', 'xp', 'xsa', 'sm'],
      '1981': ['gs', 'xp', 'xsa', 'sm'],
      '1982': ['gs', 'xp', 'xsa', 'sm'],
      '1983': ['dsp', 'xp', 'xsa', 'sm'],
      '1984': ['dsp', 'xp', 'xsa', 'sm'],
      '1985': ['dsp', 'xp', 'xsa', 'sm'],
      '1986': ['dsp', 'xp', 'xsa', 'sm'],
      '1987': ['dsp', 'xp', 'xsa', 'sm'],
      '1988': ['dsp', 'xp', 'xsa', 'sm'],
      '1989': ['dsp', 'xp', 'xsa', 'sm'],
      '1990': ['gs', 'xp', 'xsa', 'sm'],
      '1991': ['gs', 'xp', 'xsa', 'sm'],
      '1992': ['gs', 'xp', 'xsa', 'sm'],
      '1993': ['gs', 'xp', 'xsa', 'sm'],
    },
    'Impulse XS (16v non-turbo)': {
      '1990': ['dsp'],
      '1991': ['dsp'],
      '1992': ['dsp'],
      '1993': ['dsp'],
    },
    'Stylus': {
      '1990': ['hs', 'xp', 'xsa', 'sm'],
      '1991': ['hs', 'ep', 'xp', 'xsa', 'sm'],
      '1992': ['hs', 'ep', 'xp', 'xsa', 'sm'],
      '1993': ['hs', 'ep', 'xp', 'xsa', 'sm'],
    },
    'Stylus S (12v)': {
      '1990': ['fsp', 'xp', 'xsa', 'sm'],
      '1991': ['fsp', 'xp', 'xsa', 'sm'],
      '1992': ['fsp', 'xp', 'xsa', 'sm'],
      '1993': ['fsp', 'xp', 'xsa', 'sm'],
    },
    'Stylus XS & RS (16v) (1990-93) ': {
      '1990': ['dsp', 'xp', 'xsa', 'sm'],
      '1991': ['dsp', 'xp', 'xsa', 'sm'],
      '1992': ['dsp', 'xp', 'xsa', 'sm'],
      '1993': ['dsp', 'xp', 'xsa', 'sm'],
    },
  },
  'Jaguar': {
    '120': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    '140': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    '150': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'E-type (all)': {
      'all': ['asp', 'xp', 'xsa', 'sm'],
    },
    'F-Type (non-Project 7)': {
      '2014': ['bs', 'ssr', 'xp', 'xsa', 'sm'],
      '2015': ['bs', 'ssr', 'xp', 'xsa', 'sm'],
      '2016': ['bs', 'ssr', 'xp', 'xsa', 'sm'],
      '2017': ['bs', 'ssr', 'xp', 'xsa', 'sm'],
      '2018': ['bs', 'ssr', 'xp', 'xsa', 'sm'],
      '2019': ['bs', 'ssr', 'xp', 'xsa', 'sm'],
      '2020': ['bs', 'ssr', 'xp', 'xsa', 'sm'],
      '2021': ['bs', 'ssr', 'xp', 'xsa', 'sm'],
      '2022': ['bs', 'ssr', 'xp', 'xsa', 'sm'],
    },
    'F-Type R & SVR': {
      '2018': ['ss', 'xp', 'xsa', 'sm'],
      '2019': ['ss', 'xp', 'xsa', 'sm'],
      '2020': ['ss', 'xp', 'xsa', 'sm'],
      '2021': ['ss', 'xp', 'xsa', 'sm'],
      '2022': ['ss', 'xp', 'xsa', 'sm'],
    },
    'I-Pace': {
      '2019': ['evx'],
      '2020': ['evx'],
    },
    'S-Type (6-cyl)': {
      '2002': ['gs', 'xp', 'xsa', 'sm'],
      '2003': ['gs', 'xp', 'xsa', 'sm'],
      '2004': ['gs', 'xp', 'xsa', 'sm'],
      '2005': ['gs', 'xp', 'xsa', 'sm'],
      '2006': ['gs', 'xp', 'xsa', 'sm'],
      '2007': ['gs', 'xp', 'xsa', 'sm'],
      '2008': ['gs', 'xp', 'xsa', 'sm'],
    },
    'S-Type R': {
      'all': ['fs', 'xp', 'xsa', 'sm'],
    },
    'Sedan (6-cyl)': {
      'all': ['esp', 'xp', 'xsa', 'sm'],
    },
    'Sedan (12-cyl)': {
      'all': ['esp', 'fs', 'xp', 'xsa', 'sm'],
    },
    'X-Type (2.5L)': {
      '2002': ['hs', 'xp', 'xsa', 'sm'],
      '2003': ['hs', 'xp', 'xsa', 'sm'],
      '2004': ['hs', 'xp', 'xsa', 'sm'],
      '2005': ['hs', 'xp', 'xsa', 'sm'],
    },
    'X-Type (3.0L)': {
      '2002': ['gs', 'xp', 'xsa', 'sm'],
      '2003': ['gs', 'xp', 'xsa', 'sm'],
      '2004': ['gs', 'xp', 'xsa', 'sm'],
      '2005': ['gs', 'xp', 'xsa', 'sm'],
      '2006': ['gs', 'xp', 'xsa', 'sm'],
      '2007': ['gs', 'xp', 'xsa', 'sm'],
      '2008': ['gs', 'xp', 'xsa', 'sm'],
    },
    'XJ': {
      '1998': ['fs', 'xp', 'xsa', 'sm'],
      '1999': ['fs', 'xp', 'xsa', 'sm'],
      '2000': ['fs', 'xp', 'xsa', 'sm'],
      '2001': ['fs', 'xp', 'xsa', 'sm'],
      '2002': ['fs', 'xp', 'xsa', 'sm'],
      '2003': ['fs', 'xp', 'xsa', 'sm'],
      '2004': ['fs', 'xp', 'xsa', 'sm'],
      '2005': ['fs', 'xp', 'xsa', 'sm'],
      '2006': ['fs', 'xp', 'xsa', 'sm'],
      '2007': ['fs', 'xp', 'xsa', 'sm'],
      '2008': ['fs', 'xp', 'xsa', 'sm'],
      '2009': ['fs', 'xp', 'xsa', 'sm'],
      '2010': ['fs', 'xp', 'xsa', 'sm'],
      '2011': ['fs', 'xp', 'xsa', 'sm'],
      '2012': ['fs', 'xp', 'xsa', 'sm'],
      '2013': ['fs', 'xp', 'xsa', 'sm'],
      '2014': ['fs', 'xp', 'xsa', 'sm'],
      '2015': ['fs', 'xp', 'xsa', 'sm'],
      '2016': ['fs', 'xp', 'xsa', 'sm'],
      '2017': ['fs', 'xp', 'xsa', 'sm'],
      '2018': ['fs', 'xp', 'xsa', 'sm'],
      '2019': ['fs', 'xp', 'xsa', 'sm'],
    },
    'XJ-S': {
      '1976': ['esp', 'fs', 'xp', 'xsa', 'sm'],
      '1977': ['esp', 'fs', 'xp', 'xsa', 'sm'],
      '1978': ['esp', 'fs', 'xp', 'xsa', 'sm'],
      '1979': ['esp', 'fs', 'xp', 'xsa', 'sm'],
      '1980': ['esp', 'fs', 'xp', 'xsa', 'sm'],
      '1981': ['esp', 'fs', 'xp', 'xsa', 'sm'],
      '1982': ['esp', 'fs', 'xp', 'xsa', 'sm'],
      '1983': ['esp', 'fs', 'xp', 'xsa', 'sm'],
      '1984': ['esp', 'fs', 'xp', 'xsa', 'sm'],
      '1985': ['esp', 'fs', 'xp', 'xsa', 'sm'],
      '1986': ['esp', 'fs', 'xp', 'xsa', 'sm'],
      '1987': ['esp', 'fs', 'xp', 'xsa', 'sm'],
      '1988': ['esp', 'fs', 'xp', 'xsa', 'sm'],
      '1989': ['esp', 'fs', 'xp', 'xsa', 'sm'],
      '1990': ['esp', 'fs', 'xp', 'xsa', 'sm'],
      '1991': ['esp', 'fs', 'xp', 'xsa', 'sm'],
      '1992': ['esp', 'fs', 'xp', 'xsa', 'sm'],
      '1993': ['esp', 'fs', 'xp', 'xsa', 'sm'],
      '1994': ['esp', 'fs', 'xp', 'xsa', 'sm'],
      '1995': ['esp', 'fs', 'xp', 'xsa', 'sm'],
      '1996': ['esp', 'fs', 'xp', 'xsa', 'sm'],
    },
    'XK8': {
      '1997': ['fs', 'xp', 'xsa', 'sm'],
      '1998': ['fs', 'xp', 'xsa', 'sm'],
      '1999': ['fs', 'xp', 'xsa', 'sm'],
      '2000': ['fs', 'xp', 'xsa', 'sm'],
      '2001': ['fs', 'xp', 'xsa', 'sm'],
      '2002': ['fs', 'xp', 'xsa', 'sm'],
      '2003': ['fs', 'xp', 'xsa', 'sm'],
      '2004': ['fs', 'xp', 'xsa', 'sm'],
      '2005': ['fs', 'xp', 'xsa', 'sm'],
      '2006': ['fs', 'xp', 'xsa', 'sm'],
    },
    'XK 120, 140, 150, & 160': {
      'all': ['esp', 'xp', 'xsa', 'sm'],
    },
    'XKE': {
      'all': ['cs', 'xp', 'xsa', 'sm'],
    },
    'XKE (6-cyl)': {
      '1961': ['fp', 'xp', 'xsa', 'sm'],
      '1962': ['fp', 'xp', 'xsa', 'sm'],
      '1963': ['fp', 'xp', 'xsa', 'sm'],
      '1964': ['fp', 'xp', 'xsa', 'sm'],
      '1965': ['fp', 'xp', 'xsa', 'sm'],
      '1966': ['fp', 'xp', 'xsa', 'sm'],
      '1967': ['fp', 'xp', 'xsa', 'sm'],
      '1968': ['fp', 'xp', 'xsa', 'sm'],
      '1969': ['fp', 'xp', 'xsa', 'sm'],
      '1970': ['fp', 'xp', 'xsa', 'sm'],
      '1971': ['fp', 'xp', 'xsa', 'sm'],
      '1972': ['fp', 'xp', 'xsa', 'sm'],
      '1973': ['fp', 'xp', 'xsa', 'sm'],
      '1974': ['fp', 'xp', 'xsa', 'sm'],
    },
    'XKE (V12)': {
      '1961': ['fp', 'xp', 'xsa', 'sm'],
      '1962': ['fp', 'xp', 'xsa', 'sm'],
      '1963': ['fp', 'xp', 'xsa', 'sm'],
      '1964': ['fp', 'xp', 'xsa', 'sm'],
      '1965': ['fp', 'xp', 'xsa', 'sm'],
      '1966': ['fp', 'xp', 'xsa', 'sm'],
      '1967': ['fp', 'xp', 'xsa', 'sm'],
      '1968': ['fp', 'xp', 'xsa', 'sm'],
      '1969': ['fp', 'xp', 'xsa', 'sm'],
      '1970': ['fp', 'xp', 'xsa', 'sm'],
      '1971': ['fp', 'xp', 'xsa', 'sm'],
      '1972': ['fp', 'xp', 'xsa', 'sm'],
      '1973': ['fp', 'xp', 'xsa', 'sm'],
      '1974': ['fp', 'xp', 'xsa', 'sm'],
    },
    'XKR Coupe': {
      'all': ['bs', 'xp', 'xsa', 'sm'],
    },
  },
  'Jensen': {
    'Jensen-Healey': {
      'all': ['cs', 'fsp', 'dp', 'xp', 'xsa', 'sm'],
    },
  },
  'Kia': {
    'Forte5': {
      '2014': ['hs', 'xp', 'xsa', 'sm'],
      '2015': ['hs', 'xp', 'xsa', 'sm'],
      '2016': ['hs', 'xp', 'xsa', 'sm'],
      '2017': ['hs', 'xp', 'xsa', 'sm'],
      '2018': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Forte (non-turbo)': {
      'all': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm'],
    },
    'Forte Koup (non-turbo)': {
      'all': ['hs', 'sts', 'dsp', 'xp', 'xsa', 'sm'],
    },
    'Forte Koup Turbo': {
      'all': ['hs', 'sth', 'dsp', 'xp', 'xsa', 'sm'],
    },
    'Forte Turbo': {
      'all': ['hs', 'sth', 'fsp', 'xp', 'xsa', 'sm'],
    },
    'Niro EV': {
      '2019': ['hs', 'xp', 'xsa', 'sm'],
      '2020': ['hs', 'xp', 'xsa', 'sm', 'evx'],
      '2021': ['hs', 'xp', 'xsa', 'sm'],
      '2022': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Optima': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Rio': {
      '2012': ['hs', 'sts', 'xp', 'xsa', 'sm'],
      '2013': ['hs', 'sts', 'xp', 'xsa', 'sm'],
      '2014': ['hs', 'sts', 'xp', 'xsa', 'sm'],
      '2015': ['hs', 'sts', 'xp', 'xsa', 'sm'],
      '2016': ['hs', 'sts', 'xp', 'xsa', 'sm'],
      '2017': ['hs', 'sts', 'xp', 'xsa', 'sm'],
      '2018': ['hs', 'xp', 'xsa', 'sm'],
      '2019': ['hs', 'xp', 'xsa', 'sm'],
      '2020': ['hs', 'xp', 'xsa', 'sm'],
      '2021': ['hs', 'xp', 'xsa', 'sm'],
      '2022': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Sephia': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Spectra': {
      'all': ['hs', 'fsp', 'xp', 'xsa', 'sm'],
    },
    'Stinger (4-cyl Turbo)': {
      '2018': ['gs', 'xp', 'xsa', 'sm'],
      '2019': ['gs', 'xp', 'xsa', 'sm'],
      '2020': ['gs', 'xp', 'xsa', 'sm'],
      '2021': ['gs', 'xp', 'xsa', 'sm'],
      '2022': ['gs', 'xp', 'xsa', 'sm'],
    },
    'Stinger (V6 Turbo)': {
      '2018': ['fs', 'xp', 'xsa', 'sm'],
      '2019': ['fs', 'xp', 'xsa', 'sm'],
      '2020': ['fs', 'xp', 'xsa', 'sm'],
      '2021': ['fs', 'xp', 'xsa', 'sm'],
      '2022': ['fs', 'xp', 'xsa', 'sm'],
    },
  },
  'Lancia': {
    'Beta': {
      '1975': ['hs', 'ep', 'fsp', 'xp', 'xsa', 'sm'],
      '1976': ['hs', 'ep', 'fsp', 'xp', 'xsa', 'sm'],
      '1977': ['hs', 'ep', 'fsp', 'xp', 'xsa', 'sm'],
      '1978': ['hs', 'ep', 'fsp', 'xp', 'xsa', 'sm'],
      '1979': ['hs', 'ep', 'fsp', 'xp', 'xsa', 'sm'],
      '1980': ['hs', 'ep', 'fsp', 'xp', 'xsa', 'sm'],
      '1981': ['hs', 'ep', 'fsp', 'xp', 'xsa', 'sm'],
      '1982': ['hs', 'ep', 'fsp', 'xp', 'xsa', 'sm'],
      '1983': ['hs', 'fsp', 'xp', 'xsa', 'sm'],
    },
    'Scorpion': {
      'all': ['hs', 'csp', 'dp', 'xp', 'xsa', 'sm'],
    },
    'Zagato': {
      '1975': ['fsp', 'ep', 'xp', 'xsa', 'sm'],
      '1976': ['fsp', 'ep', 'xp', 'xsa', 'sm'],
      '1977': ['fsp', 'ep', 'xp', 'xsa', 'sm'],
      '1978': ['fsp', 'ep', 'xp', 'xsa', 'sm'],
      '1979': ['fsp', 'ep', 'xp', 'xsa', 'sm'],
      '1980': ['fsp', 'ep', 'xp', 'xsa', 'sm'],
      '1981': ['fsp', 'ep', 'xp', 'xsa', 'sm'],
      '1982': ['fsp', 'ep', 'xp', 'xsa', 'sm'],
      '1983': ['fsp', 'xp', 'xsa', 'sm'],
    },
  },
  'Lexus': {
    'CT 200h': {
      '2011': ['hs', 'sts', 'xp', 'xsa', 'sm'],
      '2012': ['hs', 'sts', 'xp', 'xsa', 'sm'],
      '2013': ['hs', 'sts', 'xp', 'xsa', 'sm'],
      '2014': ['hs', 'sts', 'xp', 'xsa', 'sm'],
      '2015': ['hs', 'sts', 'xp', 'xsa', 'sm'],
      '2016': ['hs', 'sts', 'xp', 'xsa', 'sm'],
      '2017': ['hs', 'xp', 'xsa', 'sm'],
    },
    'ES 250': {
      'all': ['hs', 'esp', 'xp', 'xsa', 'sm'],
    },
    'ES 300': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'GS 300': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'GS 350': {
      '2005': ['ds', 'xp', 'xsa', 'sm'],
      '2006': ['ds', 'xp', 'xsa', 'sm'],
      '2007': ['ds', 'xp', 'xsa', 'sm'],
      '2008': ['ds', 'xp', 'xsa', 'sm'],
      '2009': ['ds', 'xp', 'xsa', 'sm'],
      '2010': ['ds', 'xp', 'xsa', 'sm'],
      '2011': ['ds', 'xp', 'xsa', 'sm'],
      '2012': ['ds', 'xp', 'xsa', 'sm'],
      '2013': ['ds', 'xp', 'xsa', 'sm'],
      '2014': ['ds', 'xp', 'xsa', 'sm'],
      '2015': ['ds', 'xp', 'xsa', 'sm'],
      '2016': ['ds', 'xp', 'xsa', 'sm'],
      '2017': ['ds', 'xp', 'xsa', 'sm'],
      '2018': ['ds', 'xp', 'xsa', 'sm'],
    },
    'GS 400': {
      '1998': ['esp', 'fs', 'xp', 'xsa', 'sm'],
      '1999': ['esp', 'fs', 'xp', 'xsa', 'sm'],
      '2000': ['esp', 'fs', 'xp', 'xsa', 'sm'],
    },
    'GS-F': {
      '2016': ['fs', 'xp', 'xsa', 'sm'],
      '2017': ['fs', 'xp', 'xsa', 'sm'],
      '2018': ['fs', 'xp', 'xsa', 'sm'],
      '2019': ['fs', 'xp', 'xsa', 'sm'],
      '2020': ['fs', 'xp', 'xsa', 'sm'],
    },
    'IS 250': {
      'all': ['stx', 'xp', 'xsa', 'sm'],
    },
    'IS 300': {
      '2000': ['dsp', 'stx', 'xp', 'xsa', 'sm'],
      '2001': ['dsp', 'stx', 'gs', 'fp', 'xp', 'xsa', 'sm'],
      '2002': ['dsp', 'stx', 'gs', 'fp', 'xp', 'xsa', 'sm'],
      '2003': ['dsp', 'stx', 'gs', 'fp', 'xp', 'xsa', 'sm'],
      '2004': ['dsp', 'stx', 'gs', 'fp', 'xp', 'xsa', 'sm'],
      '2005': ['dsp', 'stx', 'gs', 'fp', 'xp', 'xsa', 'sm'],
      '2007': ['dsp', 'stx', 'xp', 'xsa', 'sm'],
      '2008': ['dsp', 'stx', 'xp', 'xsa', 'sm'],
      '2009': ['dsp', 'stx', 'xp', 'xsa', 'sm'],
      '2010': ['dsp', 'stx', 'xp', 'xsa', 'sm'],
      '2011': ['dsp', 'stx', 'xp', 'xsa', 'sm'],
      '2012': ['dsp', 'stx', 'xp', 'xsa', 'sm'],
      '2013': ['dsp', 'stx', 'xp', 'xsa', 'sm'],
      '2014': ['dsp', 'stx', 'xp', 'xsa', 'sm'],
      '2015': ['dsp', 'stx', 'xp', 'xsa', 'sm'],
      '2016': ['dsp', 'stx', 'xp', 'xsa', 'sm'],
      '2017': ['dsp', 'stx', 'xp', 'xsa', 'sm'],
      '2018': ['dsp', 'stx', 'xp', 'xsa', 'sm'],
      '2019': ['dsp', 'stx', 'xp', 'xsa', 'sm'],
      '2020': ['dsp', 'stx', 'xp', 'xsa', 'sm'],
    },
    'IS 350': {
      'all': ['stx', 'xp', 'xsa', 'sm'],
    },
    'IS (all excl. IS-F)': {
      '2006': ['ds', 'xp', 'xsa', 'sm'],
      '2007': ['ds', 'xp', 'xsa', 'sm'],
      '2008': ['ds', 'xp', 'xsa', 'sm'],
      '2009': ['ds', 'xp', 'xsa', 'sm'],
      '2010': ['ds', 'xp', 'xsa', 'sm'],
      '2011': ['ds', 'xp', 'xsa', 'sm'],
      '2012': ['ds', 'xp', 'xsa', 'sm'],
      '2013': ['ds', 'xp', 'xsa', 'sm'],
      '2014': ['ds', 'xp', 'xsa', 'sm'],
      '2015': ['ds', 'xp', 'xsa', 'sm'],
      '2016': ['ds', 'xp', 'xsa', 'sm'],
      '2017': ['ds', 'xp', 'xsa', 'sm'],
      '2018': ['ds', 'xp', 'xsa', 'sm'],
      '2019': ['ds', 'xp', 'xsa', 'sm'],
      '2020': ['ds', 'xp', 'xsa', 'sm'],
    },
    'IS F': {
      '2008': ['esp', 'fs', 'stu', 'xp', 'xsa', 'sm'],
      '2009': ['esp', 'fs', 'stu', 'xp', 'xsa', 'sm'],
      '2010': ['esp', 'fs', 'stu', 'xp', 'xsa', 'sm'],
      '2011': ['esp', 'fs', 'stu', 'xp', 'xsa', 'sm'],
      '2012': ['esp', 'fs', 'stu', 'xp', 'xsa', 'sm'],
      '2013': ['esp', 'fs', 'stu', 'xp', 'xsa', 'sm'],
      '2014': ['esp', 'fs', 'stu', 'xp', 'xsa', 'sm'],
    },
    'LS 400': {
      'all': ['esp', 'xp', 'xsa', 'sm'],
    },
    'RC (non-F)': {
      '2015': ['fs', 'xp', 'xsa', 'sm'],
      '2016': ['fs', 'xp', 'xsa', 'sm'],
      '2017': ['fs', 'xp', 'xsa', 'sm'],
      '2018': ['fs', 'xp', 'xsa', 'sm'],
      '2019': ['fs', 'xp', 'xsa', 'sm'],
      '2020': ['fs', 'xp', 'xsa', 'sm'],
      '2021': ['fs', 'xp', 'xsa', 'sm'],
      '2022': ['fs', 'xp', 'xsa', 'sm'],
    },
    'RC-F': {
      '2015': ['bs', 'xp', 'xsa', 'sm'],
      '2016': ['bs', 'xp', 'xsa', 'sm'],
      '2017': ['bs', 'xp', 'xsa', 'sm'],
      '2018': ['bs', 'xp', 'xsa', 'sm'],
      '2019': ['bs', 'xp', 'xsa', 'sm'],
      '2020': ['bs', 'xp', 'xsa', 'sm'],
      '2021': ['bs', 'xp', 'xsa', 'sm'],
      '2022': ['bs', 'xp', 'xsa', 'sm'],
    },
    'SC 300': {
      '1992': ['gs', 'stx', 'xp', 'xsa', 'sm'],
      '1993': ['gs', 'stx', 'xp', 'xsa', 'sm'],
      '1994': ['gs', 'stx', 'xp', 'xsa', 'sm'],
      '1995': ['gs', 'stx', 'xp', 'xsa', 'sm'],
      '1996': ['gs', 'stx', 'xp', 'xsa', 'sm'],
      '1997': ['gs', 'stx', 'xp', 'xsa', 'sm'],
      '1998': ['gs', 'stx', 'xp', 'xsa', 'sm'],
      '1999': ['gs', 'stx', 'xp', 'xsa', 'sm'],
      '2000': ['gs', 'stx', 'xp', 'xsa', 'sm'],
    },
    'SC 400': {
      '1992': ['ds', 'esp', 'xp', 'xsa', 'sm'],
      '1993': ['ds', 'esp', 'xp', 'xsa', 'sm'],
      '1994': ['ds', 'esp', 'xp', 'xsa', 'sm'],
      '1995': ['ds', 'esp', 'xp', 'xsa', 'sm'],
      '1996': ['ds', 'esp', 'xp', 'xsa', 'sm'],
      '1997': ['ds', 'esp', 'xp', 'xsa', 'sm'],
      '1998': ['ds', 'esp', 'xp', 'xsa', 'sm'],
      '1999': ['ds', 'esp', 'xp', 'xsa', 'sm'],
      '2000': ['ds', 'esp', 'xp', 'xsa', 'sm'],
    },
  },
  'Lincoln': {
    'LS (V6)': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'LS (V8)': {
      '2000': ['fs', 'xp', 'xsa', 'sm'],
      '2001': ['fs', 'camc', 'xp', 'xsa', 'sm'],
      '2002': ['fs', 'camc', 'xp', 'xsa', 'sm'],
      '2003': ['fs', 'camc', 'xp', 'xsa', 'sm'],
      '2004': ['fs', 'camc', 'xp', 'xsa', 'sm'],
      '2005': ['fs', 'camc', 'xp', 'xsa', 'sm'],
      '2006': ['fs', 'camc', 'xp', 'xsa', 'sm'],
    },
    'MKZ': {
      '2006': ['gs', 'xp', 'xsa', 'sm'],
      '2007': ['gs', 'xp', 'xsa', 'sm'],
      '2008': ['gs', 'xp', 'xsa', 'sm'],
      '2009': ['gs', 'xp', 'xsa', 'sm'],
      '2010': ['gs', 'xp', 'xsa', 'sm'],
      '2011': ['gs', 'xp', 'xsa', 'sm'],
      '2012': ['gs', 'xp', 'xsa', 'sm'],
    },
    'MKZ (AWD)': {
      '2013': ['ds', 'xp', 'xsa', 'sm'],
      '2014': ['ds', 'xp', 'xsa', 'sm'],
      '2015': ['ds', 'xp', 'xsa', 'sm'],
      '2016': ['ds', 'xp', 'xsa', 'sm'],
      '2017': ['ds', 'xp', 'xsa', 'sm'],
      '2018': ['ds', 'xp', 'xsa', 'sm'],
      '2019': ['ds', 'xp', 'xsa', 'sm'],
      '2020': ['ds', 'xp', 'xsa', 'sm'],
    },
    'MKZ (FWD)': {
      '2013': ['gs', 'xp', 'xsa', 'sm'],
      '2014': ['gs', 'xp', 'xsa', 'sm'],
      '2015': ['gs', 'xp', 'xsa', 'sm'],
      '2016': ['gs', 'xp', 'xsa', 'sm'],
      '2017': ['gs', 'xp', 'xsa', 'sm'],
      '2018': ['gs', 'xp', 'xsa', 'sm'],
      '2019': ['gs', 'xp', 'xsa', 'sm'],
      '2020': ['gs', 'xp', 'xsa', 'sm'],
    },
    'Mark VIII': {
      '1993': ['fs', 'camt', 'xp', 'xsa', 'sm'],
      '1994': ['fs', 'camt', 'xp', 'xsa', 'sm'],
      '1995': ['fs', 'camt', 'xp', 'xsa', 'sm'],
      '1996': ['fs', 'camt', 'xp', 'xsa', 'sm'],
      '1997': ['fs', 'camt', 'xp', 'xsa', 'sm'],
      '1998': ['fs', 'camt', 'xp', 'xsa', 'sm'],
    },
  },
  'Lotus': {
    '7 & 7A': {
      'all': ['cs', 'ssp', 'dp', 'xp', 'xsb', 'ssm'],
    },
    'Cortina': {
      'all': ['csp', 'hs', 'xp', 'xsb', 'sm'],
    },
    'Eclat': {
      'all': ['cs', 'ssp', 'xp', 'xsb', 'sm'],
    },
    'Elan': {
      'all': ['cs', 'dp', 'ssp', 'xp', 'xsb', 'ssm'],
    },
    'Elise': {
      '1996': ['fp', 'ssm', 'xp', 'xsb'],
      '1997': ['fp', 'ssm', 'xp', 'xsb'],
      '1998': ['fp', 'ssm', 'xp', 'xsb'],
      '1999': ['fp', 'ssm', 'xp', 'xsb'],
      '2000': ['fp', 'ssm', 'xp', 'xsb'],
      '2001': ['fp', 'ssm', 'xp', 'xsb'],
      '2002': ['fp', 'ssm', 'xp', 'xsb'],
      '2003': ['fp', 'ssm', 'xp', 'xsb'],
      '2004': ['fp', 'ssm', 'xp', 'xsb'],
      '2005': ['as', 'sst', 'fp', 'ssm', 'ssp', 'ssr', 'xp', 'xsb'],
      '2006': ['as', 'sst', 'fp', 'ssm', 'ssp', 'ssr', 'xp', 'xsb'],
      '2007': ['as', 'sst', 'fp', 'ssm', 'ssp', 'ssr', 'xp', 'xsb'],
      '2008': ['as', 'sst', 'fp', 'ssm', 'ssp', 'ssr', 'xp', 'xsb'],
      '2009': ['as', 'sst', 'fp', 'ssm', 'ssp', 'ssr', 'xp', 'xsb'],
      '2010': ['as', 'sst', 'fp', 'ssm', 'ssp', 'ssr', 'xp', 'xsb'],
      '2011': ['as', 'sst', 'ssm', 'ssp', 'ssr', 'xp', 'xsb'],
    },
    'Elise SC': {
      '2008': ['ss', 'xp', 'xsb', 'ssm'],
      '2009': ['ss', 'xp', 'xsb', 'ssm'],
      '2010': ['ss', 'xp', 'xsb', 'ssm'],
      '2011': ['ss', 'xp', 'xsb', 'ssm'],
    },
    'Elite': {
      'all': ['cs', 'xp', 'xsb', 'ssm'],
    },
    'Elite 2+2': {
      'all': ['ssp', 'xp', 'xsa', 'sm'],
    },
    'Elite (1216 cc)': {
      'all': ['csp', 'xp', 'xsa', 'ssm'],
    },
    'Esprit': {
      'all': ['cs', 'ssm', 'ssp', 'xp', 'xsa'],
    },
    'Esprit Turbo': {
      '1996': ['as', 'sst', 'ssp', 'xp', 'xsa', 'ssm'],
      '1997': ['as', 'sst', 'ssp', 'xp', 'xsa', 'ssm'],
      '1998': ['as', 'sst', 'ssp', 'xp', 'xsa', 'ssm'],
      '1999': ['as', 'sst', 'ssp', 'xp', 'xsa', 'ssm'],
      '2000': ['as', 'sst', 'ssp', 'xp', 'xsa', 'ssm'],
      '2001': ['as', 'sst', 'ssp', 'xp', 'xsa', 'ssm'],
      '2002': ['as', 'sst', 'ssp', 'xp', 'xsa', 'ssm'],
      '2003': ['as', 'sst', 'ssp', 'xp', 'xsa', 'ssm'],
      '2004': ['as', 'sst', 'ssp', 'xp', 'xsa', 'ssm'],
    },
    'Europa': {
      'all': ['cs', 'dp', 'ssp', 'xp', 'xsb', 'ssm'],
    },
    'Evora': {
      '2010': ['bs', 'stu', 'ssm', 'ssp', 'xp', 'xsa'],
      '2011': ['bs', 'stu', 'ssm', 'ssp', 'xp', 'xsa'],
      '2012': ['bs', 'stu', 'ssm', 'ssp', 'xp', 'xsa'],
      '2013': ['bs', 'stu', 'ssm', 'ssp', 'xp', 'xsa'],
      '2014': ['bs', 'stu', 'ssm', 'ssp', 'xp', 'xsa'],
      '2015': ['bs', 'ssm', 'xp', 'xsa'],
    },
    'Evora 400': {
      'all': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
    },
    'Evora 410 Sport': {
      '2018': ['ss', 'xp', 'xsa', 'ssm'],
    },
    'Evora GT': {
      '2020': ['as', 'sst', 'xp', 'xsa', 'ssm'],
      '2021': ['as', 'sst', 'xp', 'xsa', 'ssm'],
      '2022': ['as', 'sst', 'xp', 'xsa', 'ssm'],
    },
    'Evora S': {
      '2010': ['ssp', 'xp', 'xsa', 'ssm'],
      '2011': ['as', 'sst', 'ssp', 'ssr', 'xp', 'xsa', 'ssm'],
      '2012': ['as', 'sst', 'ssp', 'ssr', 'xp', 'xsa', 'ssm'],
      '2013': ['as', 'sst', 'ssp', 'ssr', 'xp', 'xsa', 'ssm'],
      '2014': ['as', 'sst', 'ssp', 'ssr', 'xp', 'xsa', 'ssm'],
      '2015': ['as', 'ssr', 'xp', 'xsa', 'ssm'],
    },
    'Exige': {
      '1996': ['fp', 'ssm', 'xp', 'xsb'],
      '1997': ['fp', 'ssm', 'xp', 'xsb'],
      '1998': ['fp', 'ssm', 'xp', 'xsb'],
      '1999': ['fp', 'ssm', 'xp', 'xsb'],
      '2000': ['fp', 'ssm', 'xp', 'xsb'],
      '2001': ['fp', 'ssm', 'xp', 'xsb'],
      '2002': ['fp', 'ssm', 'xp', 'xsb'],
      '2003': ['fp', 'ssm', 'xp', 'xsb'],
      '2004': ['fp', 'ssm', 'xp', 'xsb'],
      '2005': ['fp', 'ssm', 'ssp', 'xp', 'xsb'],
      '2006': ['as', 'sst', 'fp', 'ssm', 'ssp', 'ssr', 'xp', 'xsb'],
      '2007': ['fp', 'ssm', 'ssp', 'xp', 'xsb'],
      '2008': ['fp', 'ssm', 'ssp', 'xp', 'xsb'],
      '2009': ['fp', 'ssm', 'ssp', 'xp', 'xsb'],
      '2010': ['fp', 'ssm', 'ssp', 'xp', 'xsb'],
      '2011': ['ssm', 'ssp', 'xp', 'xsb'],
    },
    'Exige S': {
      '2005': ['ssp', 'xp', 'xsb', 'ssm'],
      '2006': ['ssp', 'xp', 'xsb', 'ssm'],
      '2007': ['ss', 'ssp', 'xp', 'xsb', 'ssm'],
      '2008': ['ss', 'ssp', 'xp', 'xsb', 'ssm'],
      '2009': ['ss', 'ssp', 'xp', 'xsb', 'ssm'],
      '2010': ['ss', 'ssp', 'xp', 'xsb', 'ssm'],
      '2011': ['ss', 'ssp', 'xp', 'xsb', 'ssm'],
    },
    'Super 7 (1340 cc & 1498 cc)': {
      'all': ['dp', 'xp', 'xsb', 'ssm'],
    },
  },
  'MG': {
    '1100, 1300 Sedan (all) ': {
      'all': ['hs', 'fsp', 'xp', 'xsb', 'sm'],
    },
    'A (all)': {
      'all': ['hs', 'fsp', 'xp', 'xsb', 'ssm'],
    },
    'B & B GT (all)': {
      'all': ['hs', 'fsp', 'xp', 'xsb', 'ssm'],
    },
    'C & C GT (all)': {
      'all': ['hs', 'fsp', 'xp', 'xsb', 'ssm'],
    },
  },
  'Maserati': {
    'BiTurbo': {
      'all': ['cs', 'dsp', 'xp', 'xsa', 'sm'],
    },
    'Coupe': {
      '2002': ['bs', 'xp', 'xsa', 'sm'],
      '2003': ['bs', 'xp', 'xsa', 'sm'],
      '2004': ['bs', 'xp', 'xsa', 'sm'],
      '2005': ['bs', 'xp', 'xsa', 'sm'],
      '2006': ['bs', 'xp', 'xsa', 'sm'],
      '2007': ['bs', 'xp', 'xsa', 'sm'],
    },
    'GranSport': {
      '2004': ['bs', 'xp', 'xsa', 'sm'],
      '2005': ['bs', 'xp', 'xsa', 'sm'],
      '2006': ['bs', 'xp', 'xsa', 'sm'],
      '2007': ['bs', 'xp', 'xsa', 'sm'],
    },
    'Spyder': {
      '2002': ['bs', 'xp', 'xsa', 'sm'],
      '2003': ['bs', 'xp', 'xsa', 'sm'],
      '2004': ['bs', 'xp', 'xsa', 'sm'],
      '2005': ['bs', 'xp', 'xsa', 'sm'],
      '2006': ['bs', 'xp', 'xsa', 'sm'],
      '2007': ['bs', 'xp', 'xsa', 'sm'],
    },
  },
  'Mazda': {
    '626': {
      'all': ['hs', 'fsp', 'dp', 'xp', 'xsa', 'sm'],
    },
    '808': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    '929': {
      'all': ['hs', 'esp', 'xp', 'xsa', 'sm'],
    },
    '323 (non-turbo)': {
      'all': ['hs', 'stx', 'fsp', 'ep', 'xp', 'xsa', 'sm'],
    },
    '323 GT Turbo': {
      'all': ['gs', 'sth', 'dsp', 'xp', 'xsa', 'sm'],
    },
    '323 GTX Turbo': {
      'all': ['gs', 'sth', 'dsp', 'xp', 'xsa', 'sm'],
    },
    'Cosmo': {
      'all': ['hs', 'fsp', 'dp', 'xp', 'xsa', 'sm'],
    },
    'MX-3': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
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
      '2006': ['cs', 'str', 'bsp', 'ssm', 'dp', 'xsb'],
      '2007': ['cs', 'str', 'bsp', 'ssm', 'dp', 'xsb'],
      '2008': ['cs', 'str', 'bsp', 'ssm', 'dp', 'xsb'],
      '2009': ['cs', 'str', 'bsp', 'ssm', 'dp', 'xsb'],
      '2010': ['cs', 'str', 'bsp', 'ssm', 'dp', 'xsb'],
      '2011': ['cs', 'str', 'bsp', 'ssm', 'dp', 'xsb'],
      '2012': ['cs', 'str', 'bsp', 'ssm', 'dp', 'xsb'],
      '2013': ['cs', 'str', 'bsp', 'ssm', 'dp', 'xsb'],
      '2014': ['cs', 'str', 'bsp', 'ssm', 'dp', 'xsb'],
      '2015': ['cs', 'str', 'bsp', 'ssm', 'dp', 'xsb'],
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
      '2007': ['bs', 'ssm', 'xsb', 'xp'],
    },
    'MX-6': {
      'all': ['hs', 'dsp', 'ep', 'xp', 'xsa', 'sm'],
    },
    'Mazda2': {
      '2011': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm'],
      '2012': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm'],
      '2013': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm'],
      '2014': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm'],
    },
    'Mazda3': {
      '2004': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2005': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2006': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2007': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2008': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2009': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2010': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2011': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2013': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2014': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2015': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2016': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2017': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2018': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2019': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2020': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2021': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2022': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Mazda6': {
      'all': ['hs', 'sts', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Mazdaspeed3': {
      'all': ['gs', 'sth', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Mazdaspeed6': {
      'all': ['ds', 'sth', 'esp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Mazdaspeed Miata': {
      '2004': ['es', 'stu', 'bsp', 'ssm', 'fp', 'xsb'],
      '2005': ['es', 'stu', 'bsp', 'ssm', 'fp', 'xsb'],
    },
    'Mazdaspeed Protégé': {
      'all': ['gs', 'sth', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Miata Club Sport': {
      '2003': ['bs', 'ssm', 'dp', 'xp', 'xsb', 'ssm'],
    },
    'Millenia': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Protégé': {
      'all': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'R100': {
      'all': ['hs', 'fsp', 'xp', 'xsa', 'sm'],
    },
    'RX-2': {
      'all': ['hs', 'csp', 'xp', 'xsa', 'sm'],
    },
    'RX-3': {
      'all': ['hs', 'csp', 'xp', 'xsa', 'sm'],
    },
    'RX-4': {
      'all': ['hs', 'fsp', 'xp', 'xsa', 'sm'],
    },
    'RX-7 Non-Turbo': {
      'all': ['es', 'sts', 'csp', 'xp', 'xsa', 'sm'],
    },
    'RX-7 Turbo': {
      '1987': ['cs', 'str', 'bsp', 'xp', 'xsa', 'ssm'],
      '1988': ['cs', 'str', 'bsp', 'xp', 'xsa', 'ssm'],
      '1989': ['cs', 'str', 'bsp', 'xp', 'xsa', 'ssm'],
      '1990': ['cs', 'str', 'bsp', 'xp', 'xsa', 'ssm'],
      '1991': ['cs', 'str', 'bsp', 'xp', 'xsa', 'ssm'],
      '1992': ['cs', 'str', 'bsp', 'xp', 'xsa', 'ssm'],
      '1993': ['as', 'str', 'asp', 'xp', 'xsa', 'ssm'],
      '1994': ['as', 'str', 'asp', 'xp', 'xsa', 'ssm'],
      '1995': ['as', 'str', 'asp', 'xp', 'xsa', 'ssm'],
    },
    'RX-8': {
      'all': ['cs', 'stx', 'dsp', 'xp', 'xsa', 'sm'],
    },
    'Spec Miata': {
      'all': ['dsp'],
    },
  },
  'McLaren': {
    '570GT': {
      'all': ['ss', 'xp', 'xsa', 'ssm'],
    },
    '570S': {
      'all': ['ss', 'xp', 'xsa', 'ssm'],
    },
    '600LT (limited prep)': {
      'all': ['ssp', 'xp', 'xsa', 'ssm'],
    },
    '620R (limited prep)': {
      'all': ['ssp', 'xp', 'xsa', 'ssm'],
    },
    '650S': {
      'all': ['ss', 'xp', 'xsa', 'ssm'],
    },
    '720S': {
      'all': ['ssp', 'xp', 'xsa', 'ssm'],
    },
    'MP4-12C': {
      'all': ['ss', 'ssm', 'ssp', 'xp', 'xsa', 'ssm'],
    },
  },
  'Mercedes': {
    '280': {
      '1995': ['hs', 'xp', 'xsa', 'sm'],
      '1996': ['hs', 'xp', 'xsa', 'sm'],
      '1997': ['hs', 'xp', 'xsa', 'sm'],
      '1998': ['hs', 'xp', 'xsa', 'sm'],
      '1999': ['hs', 'xp', 'xsa', 'sm'],
      '2000': ['hs', 'xp', 'xsa', 'sm'],
    },
    '190 (all, non-16v)': {
      '1984': ['gs', 'dsp', 'dp', 'xp', 'xsa', 'sm'],
      '1985': ['gs', 'dsp', 'dp', 'xp', 'xsa', 'sm'],
      '1986': ['gs', 'dsp', 'dp', 'xp', 'xsa', 'sm'],
      '1987': ['gs', 'dsp', 'dp', 'xp', 'xsa', 'sm'],
      '1988': ['gs', 'dsp', 'dp', 'xp', 'xsa', 'sm'],
      '1989': ['gs', 'dsp', 'dp', 'xp', 'xsa', 'sm'],
      '1990': ['gs', 'dsp', 'dp', 'xp', 'xsa', 'sm'],
      '1991': ['gs', 'dsp', 'dp', 'xp', 'xsa', 'sm'],
      '1992': ['gs', 'dsp', 'dp', 'xp', 'xsa', 'sm'],
      '1993': ['gs', 'dsp', 'dp', 'xp', 'xsa', 'sm'],
    },
    '190E (16v)': {
      '1983': ['gs', 'csp', 'dp', 'xp', 'xsa', 'sm'],
      '1984': ['gs', 'csp', 'dp', 'xp', 'xsa', 'sm'],
      '1985': ['gs', 'csp', 'dp', 'xp', 'xsa', 'sm'],
      '1986': ['gs', 'csp', 'dp', 'xp', 'xsa', 'sm'],
      '1987': ['gs', 'csp', 'dp', 'xp', 'xsa', 'sm'],
      '1988': ['gs', 'csp', 'dp', 'xp', 'xsa', 'sm'],
      '1989': ['gs', 'csp', 'dp', 'xp', 'xsa', 'sm'],
      '1990': ['gs', 'csp', 'dp', 'xp', 'xsa', 'sm'],
      '1991': ['gs', 'csp', 'dp', 'xp', 'xsa', 'sm'],
      '1992': ['gs', 'csp', 'dp', 'xp', 'xsa', 'sm'],
      '1993': ['gs', 'csp', 'dp', 'xp', 'xsa', 'sm'],
    },
    '220, 230, 250, & 280 Sedans (all)': {
      'all': ['esp', 'xp', 'xsa', 'sm'],
    },
    '230SL, 250SL, & 280SL (all)': {
      'all': ['esp', 'xp', 'xsa', 'sm'],
    },
    '280 (4.5L, all) & 300 (6.3, all)': {
      'all': ['esp', 'xp', 'xsa', 'sm'],
    },
    '350SL, 380SL, & 450SL (all)': {
      'all': ['esp', 'xp', 'xsa', 'sm'],
    },
    'AMG (Not Otherwise Classified)': {
      'all': ['ss', 'ssr', 'xp', 'xsa', 'sm'],
    },
    'AMG GT, GTC, GTR, GTS': {
      '2015': ['ss', 'xp', 'xsa', 'ssm'],
      '2016': ['ss', 'xp', 'xsa', 'ssm'],
      '2017': ['ss', 'xp', 'xsa', 'ssm'],
      '2018': ['ss', 'xp', 'xsa', 'ssm'],
      '2019': ['ss', 'xp', 'xsa', 'ssm'],
      '2020': ['ss', 'xp', 'xsa', 'ssm'],
    },
    'C32 AMG': {
      '2002': ['bs', 'xp', 'xsa', 'sm'],
      '2003': ['bs', 'xp', 'xsa', 'sm'],
      '2004': ['bs', 'xp', 'xsa', 'sm'],
    },
    'C36 AMG': {
      'all': ['fs', 'xp', 'xsa', 'sm'],
    },
    'C55 AMG': {
      '2005': ['fs', 'xp', 'xsa', 'sm'],
      '2006': ['fs', 'xp', 'xsa', 'sm'],
    },
    'C63 AMG (non-Black Series)': {
      '2008': ['fs', 'sst', 'xp', 'xsa', 'sm'],
      '2009': ['fs', 'sst', 'xp', 'xsa', 'sm'],
      '2010': ['fs', 'sst', 'xp', 'xsa', 'sm'],
      '2011': ['fs', 'sst', 'xp', 'xsa', 'sm'],
      '2012': ['fs', 'sst', 'xp', 'xsa', 'sm'],
      '2013': ['fs', 'sst', 'xp', 'xsa', 'sm'],
      '2014': ['fs', 'sst', 'xp', 'xsa', 'sm'],
      '2015': ['fs', 'sst', 'xp', 'xsa', 'sm'],
      '2016': ['fs', 'sst', 'xp', 'xsa', 'sm'],
      '2017': ['fs', 'sst', 'xp', 'xsa', 'sm'],
      '2018': ['fs', 'sst', 'xp', 'xsa', 'sm'],
      '2019': ['fs', 'sst', 'xp', 'xsa', 'sm'],
      '2020': ['fs', 'sst', 'xp', 'xsa', 'sm'],
      '2021': ['fs', 'sst', 'xp', 'xsa', 'sm'],
    },
    'C230': {
      '1999': ['gs', 'dsp', 'xp', 'xsa', 'sm'],
      '2000': ['gs', 'dsp', 'xp', 'xsa', 'sm'],
      '2001': ['gs', 'dsp', 'xp', 'xsa', 'sm'],
      '2002': ['gs', 'dsp', 'xp', 'xsa', 'sm'],
      '2003': ['gs', 'dsp', 'xp', 'xsa', 'sm'],
      '2004': ['gs', 'dsp', 'xp', 'xsa', 'sm'],
      '2005': ['gs', 'dsp', 'xp', 'xsa', 'sm'],
      '2006': ['gs', 'dsp', 'xp', 'xsa', 'sm'],
      '2007': ['gs', 'dsp', 'xp', 'xsa', 'sm'],
    },
    'C300': {
      '2007': ['fs', 'xp', 'xsa', 'sm'],
      '2008': ['fs', 'xp', 'xsa', 'sm'],
      '2009': ['fs', 'xp', 'xsa', 'sm'],
      '2010': ['fs', 'xp', 'xsa', 'sm'],
      '2011': ['fs', 'xp', 'xsa', 'sm'],
      '2012': ['fs', 'xp', 'xsa', 'sm'],
      '2013': ['fs', 'xp', 'xsa', 'sm'],
      '2014': ['fs', 'xp', 'xsa', 'sm'],
      '2015': ['fs', 'xp', 'xsa', 'sm'],
      '2016': ['fs', 'xp', 'xsa', 'sm'],
      '2017': ['fs', 'xp', 'xsa', 'sm'],
      '2018': ['fs', 'xp', 'xsa', 'sm'],
      '2019': ['fs', 'xp', 'xsa', 'sm'],
      '2020': ['fs', 'xp', 'xsa', 'sm'],
    },
    'C450 & C43 AMG': {
      '2015': ['fs', 'xp', 'xsa', 'sm'],
      '2016': ['fs', 'xp', 'xsa', 'sm'],
      '2017': ['fs', 'xp', 'xsa', 'sm'],
      '2018': ['fs', 'xp', 'xsa', 'sm'],
      '2019': ['fs', 'xp', 'xsa', 'sm'],
      '2020': ['fs', 'xp', 'xsa', 'sm'],
    },
    'C-Class (6-cyl, non-AMG)': {
      '2001': ['ds', 'xp', 'xsa', 'sm'],
      '2002': ['ds', 'xp', 'xsa', 'sm'],
      '2003': ['ds', 'xp', 'xsa', 'sm'],
      '2004': ['ds', 'xp', 'xsa', 'sm'],
      '2005': ['ds', 'xp', 'xsa', 'sm'],
      '2006': ['ds', 'xp', 'xsa', 'sm'],
      '2007': ['ds', 'xp', 'xsa', 'sm'],
      '2008': ['ds', 'xp', 'xsa', 'sm'],
      '2009': ['ds', 'xp', 'xsa', 'sm'],
      '2010': ['ds', 'xp', 'xsa', 'sm'],
      '2011': ['ds', 'xp', 'xsa', 'sm'],
      '2012': ['ds', 'xp', 'xsa', 'sm'],
      '2013': ['ds', 'xp', 'xsa', 'sm'],
      '2014': ['ds', 'xp', 'xsa', 'sm'],
      '2015': ['ds', 'xp', 'xsa', 'sm'],
      '2016': ['ds', 'xp', 'xsa', 'sm'],
    },
    'CLA45 AMG': {
      '2014': ['bs', 'xp', 'xsa', 'sm'],
      '2015': ['bs', 'xp', 'xsa', 'sm'],
      '2016': ['bs', 'xp', 'xsa', 'sm'],
      '2017': ['bs', 'xp', 'xsa', 'sm'],
      '2018': ['bs', 'xp', 'xsa', 'sm'],
      '2019': ['bs', 'xp', 'xsa', 'sm'],
      '2020': ['bs', 'xp', 'xsa', 'sm'],
    },
    'CLA250 4matic': {
      'all': ['ds', 'xp', 'xsa', 'sm'],
    },
    'CLA250 (FWD)': {
      'all': ['gs', 'xp', 'xsa', 'sm'],
    },
    'CLK55': {
      '2001': ['stu', 'xp', 'xsa', 'sm'],
      '2002': ['stu', 'xp', 'xsa', 'sm'],
      '2003': ['stu', 'xp', 'xsa', 'sm'],
      '2004': ['stu', 'xp', 'xsa', 'sm'],
      '2005': ['stu', 'xp', 'xsa', 'sm'],
      '2006': ['stu', 'xp', 'xsa', 'sm'],
    },
    'CLK55 AMG': {
      '2001': ['bs', 'xp', 'xsa', 'sm'],
      '2002': ['bs', 'xp', 'xsa', 'sm'],
      '2003': ['bs', 'xp', 'xsa', 'sm'],
      '2004': ['bs', 'xp', 'xsa', 'sm'],
      '2005': ['bs', 'xp', 'xsa', 'sm'],
      '2006': ['bs', 'xp', 'xsa', 'sm'],
    },
    'CLK430': {
      '1999': ['stu', 'xp', 'xsa', 'sm'],
      '2000': ['stu', 'xp', 'xsa', 'sm'],
      '2001': ['stu', 'xp', 'xsa', 'sm'],
      '2002': ['stu', 'xp', 'xsa', 'sm'],
      '2003': ['stu', 'xp', 'xsa', 'sm'],
    },
    'CLK 320 & CLK 32 AMG': {
      'all': ['asp', 'xp', 'xsa', 'sm'],
    },
    'CLK (V6)': {
      '1998': ['ds', 'xp', 'xsa', 'sm'],
      '1999': ['ds', 'xp', 'xsa', 'sm'],
      '2000': ['ds', 'xp', 'xsa', 'sm'],
      '2001': ['ds', 'xp', 'xsa', 'sm'],
      '2002': ['ds', 'xp', 'xsa', 'sm'],
      '2003': ['ds', 'xp', 'xsa', 'sm'],
      '2004': ['ds', 'xp', 'xsa', 'sm'],
      '2005': ['ds', 'xp', 'xsa', 'sm'],
      '2006': ['ds', 'xp', 'xsa', 'sm'],
      '2007': ['ds', 'xp', 'xsa', 'sm'],
      '2008': ['ds', 'xp', 'xsa', 'sm'],
      '2009': ['ds', 'xp', 'xsa', 'sm'],
    },
    'CLK (non-V6)': {
      'all': ['fs', 'xp', 'xsa', 'sm'],
    },
    'E55 AMG': {
      'all': ['fs', 'xp', 'xsa', 'sm'],
    },
    'E63 AMG': {
      '2010': ['bs', 'asp', 'xp', 'xsa', 'sm'],
      '2011': ['bs', 'asp', 'xp', 'xsa', 'sm'],
      '2012': ['bs', 'asp', 'xp', 'xsa', 'sm'],
      '2013': ['bs', 'asp', 'xp', 'xsa', 'sm'],
      '2014': ['bs', 'asp', 'xp', 'xsa', 'sm'],
      '2015': ['bs', 'asp', 'xp', 'xsa', 'sm'],
      '2016': ['bs', 'asp', 'xp', 'xsa', 'sm'],
      '2017': ['bs', 'asp', 'xp', 'xsa', 'sm'],
      '2018': ['bs', 'asp', 'xp', 'xsa', 'sm'],
      '2019': ['bs', 'asp', 'xp', 'xsa', 'sm'],
      '2020': ['bs', 'asp', 'xp', 'xsa', 'sm'],
      '2021': ['bs', 'asp', 'xp', 'xsa', 'sm'],
    },
    'E550 (non-AMG)': {
      '2014': ['stu', 'xp', 'xsa', 'sm'],
      '2015': ['stu', 'xp', 'xsa', 'sm'],
      '2016': ['stu', 'xp', 'xsa', 'sm'],
    },
    'E Class (W212 chassis; non-AMG)': {
      '2009': ['fs', 'xp', 'xsa', 'sm'],
      '2010': ['fs', 'xp', 'xsa', 'sm'],
      '2011': ['fs', 'xp', 'xsa', 'sm'],
      '2012': ['fs', 'xp', 'xsa', 'sm'],
      '2013': ['fs', 'xp', 'xsa', 'sm'],
      '2014': ['fs', 'xp', 'xsa', 'sm'],
      '2015': ['fs', 'xp', 'xsa', 'sm'],
      '2016': ['fs', 'xp', 'xsa', 'sm'],
      '2017': ['fs', 'xp', 'xsa', 'sm'],
      '2018': ['fs', 'xp', 'xsa', 'sm'],
      '2019': ['fs', 'xp', 'xsa', 'sm'],
      '2020': ['fs', 'xp', 'xsa', 'sm'],
    },
    'GLA45 AMG': {
      '2015': ['bs', 'xp', 'xsa', 'sm'],
      '2016': ['bs', 'xp', 'xsa', 'sm'],
      '2017': ['bs', 'xp', 'xsa', 'sm'],
      '2018': ['bs', 'xp', 'xsa', 'sm'],
      '2019': ['bs', 'xp', 'xsa', 'sm'],
    },
    'GLA250 4matic': {
      'all': ['ds', 'xp', 'xsa', 'sm'],
    },
    'GLA250 (FWD)': {
      'all': ['gs', 'xp', 'xsa', 'sm'],
    },
    'Not Otherwise Classified': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'SLK32 AMG': {
      '2002': ['bs', 'xp', 'xsa', 'sm'],
      '2003': ['bs', 'xp', 'xsa', 'sm'],
      '2004': ['bs', 'xp', 'xsa', 'sm'],
    },
    'SLK55 AMG': {
      '2005': ['bs', 'asp', 'xp', 'xsa', 'ssm'],
      '2006': ['bs', 'asp', 'xp', 'xsa', 'ssm'],
      '2007': ['bs', 'asp', 'xp', 'xsa', 'ssm'],
      '2008': ['bs', 'asp', 'xp', 'xsa', 'ssm'],
      '2009': ['bs', 'asp', 'xp', 'xsa', 'ssm'],
      '2010': ['bs', 'asp', 'xp', 'xsa', 'ssm'],
      '2012': ['bs', 'xp', 'xsa', 'ssm'],
      '2013': ['bs', 'xp', 'xsa', 'ssm'],
      '2014': ['bs', 'xp', 'xsa', 'ssm'],
      '2015': ['bs', 'xp', 'xsa', 'ssm'],
      '2016': ['bs', 'xp', 'xsa', 'ssm'],
    },
    'SLK350': {
      '2005': ['bs', 'xp', 'xsa', 'ssm'],
      '2006': ['bs', 'xp', 'xsa', 'ssm'],
      '2007': ['bs', 'xp', 'xsa', 'ssm'],
      '2008': ['bs', 'xp', 'xsa', 'ssm'],
      '2009': ['bs', 'xp', 'xsa', 'ssm'],
      '2010': ['bs', 'xp', 'xsa', 'ssm'],
      '2011': ['bs', 'xp', 'xsa', 'ssm'],
      '2012': ['bs', 'xp', 'xsa', 'ssm'],
      '2013': ['bs', 'xp', 'xsa', 'ssm'],
      '2014': ['bs', 'xp', 'xsa', 'ssm'],
      '2015': ['bs', 'xp', 'xsa', 'ssm'],
      '2016': ['bs', 'xp', 'xsa', 'ssm'],
    },
    'SLK 230 Kompressor': {
      '1996': ['cs', 'str', 'xp', 'xsa', 'ssm'],
      '1997': ['cs', 'str', 'xp', 'xsa', 'ssm'],
      '1998': ['cs', 'str', 'xp', 'xsa', 'ssm'],
      '1999': ['cs', 'str', 'xp', 'xsa', 'ssm'],
      '2000': ['cs', 'str', 'xp', 'xsa', 'ssm'],
      '2001': ['cs', 'str', 'xp', 'xsa', 'ssm'],
      '2002': ['cs', 'str', 'xp', 'xsa', 'ssm'],
      '2003': ['cs', 'str', 'xp', 'xsa', 'ssm'],
      '2004': ['cs', 'str', 'xp', 'xsa', 'ssm'],
    },
    'SLK (Not Otherwise Classified)': {
      'all': ['cs', 'xp', 'xsa', 'ssm'],
    },
    'Sedans': {
      'all': ['esp', 'xp', 'xsa', 'sm'],
    },
  },
  'Mercury': {
    'Bobcat': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Capri (6-cyl)': {
      '1979': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1980': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1981': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1982': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1983': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1984': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1985': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1986': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1987': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1988': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1989': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1990': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1991': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1992': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1993': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
    },
    'Capri (8-cyl)': {
      '1979': ['fs', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1980': ['fs', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1981': ['fs', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1982': ['fs', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1983': ['fs', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1984': ['fs', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1985': ['fs', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1986': ['fs', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1987': ['fs', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1988': ['fs', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1989': ['fs', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1990': ['fs', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1991': ['fs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1992': ['fs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1993': ['fs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
    },
    'Capri (non-US)': {
      '1969': ['hs', 'dp', 'xp', 'xsa', 'sm'],
      '1970': ['hs', 'dp', 'xp', 'xsa', 'sm'],
      '1971': ['hs', 'dp', 'xp', 'xsa', 'sm'],
      '1972': ['hs', 'dp', 'xp', 'xsa', 'sm'],
      '1973': ['hs', 'dp', 'xp', 'xsa', 'sm'],
      '1974': ['hs', 'dp', 'xp', 'xsa', 'sm'],
      '1975': ['hs', 'dp', 'xp', 'xsa', 'sm'],
      '1976': ['hs', 'dp', 'xp', 'xsa', 'sm'],
      '1977': ['hs', 'dp', 'xp', 'xsa', 'sm'],
    },
    'Capri II': {
      '1976': ['fsp', 'xp', 'xsa', 'sm'],
      '1977': ['fsp', 'xp', 'xsa', 'sm'],
    },
    'Capri Turbo (4-cyl)': {
      '1979': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1980': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1981': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1982': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1983': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1984': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1985': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1986': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1987': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1988': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1989': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1990': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1991': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1992': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1993': ['hs', 'dsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
    },
    'Comet (6-cyl & 8cyl)': {
      '1970': ['cp', 'camt', 'xp', 'xsa', 'sm'],
      '1971': ['cp', 'camt', 'xp', 'xsa', 'sm'],
      '1972': ['cp', 'camt', 'xp', 'xsa', 'sm'],
      '1973': ['cp', 'camt', 'xp', 'xsa', 'sm'],
      '1974': ['cp', 'camt', 'xp', 'xsa', 'sm'],
      '1975': ['cp', 'camt', 'xp', 'xsa', 'sm'],
      '1976': ['cp', 'camt', 'xp', 'xsa', 'sm'],
      '1977': ['cp', 'camt', 'xp', 'xsa', 'sm'],
    },
    'Cougar (4-cyl & V6 non-S/C)': {
      'all': ['hs', 'esp', 'xp', 'xsa', 'sm'],
    },
    'Cougar (V8 & V6 Supercharged)': {
      '1989': ['gs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1990': ['gs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1991': ['gs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1992': ['gs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1993': ['gs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1994': ['gs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1995': ['gs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1996': ['gs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1997': ['gs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
    },
    'Cougar (V8)': {
      '1967': ['fs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1968': ['fs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1969': ['fs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1970': ['fs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1971': ['fs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1972': ['fs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1973': ['fs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1974': ['fs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1975': ['fs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1976': ['fs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1977': ['fs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1978': ['fs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1979': ['fs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1980': ['fs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1981': ['fs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1982': ['fs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1983': ['fs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1984': ['fs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1985': ['fs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1986': ['fs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1987': ['fs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
      '1988': ['fs', 'esp', 'camt', 'xp', 'xsa', 'sm'],
    },
    'LN-7': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Lynx': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Milan': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Milan (6-cyl)': {
      '2006': ['dsp', 'xp', 'xsa', 'sm'],
      '2007': ['dsp', 'xp', 'xsa', 'sm'],
      '2008': ['dsp', 'xp', 'xsa', 'sm'],
      '2009': ['dsp', 'xp', 'xsa', 'sm'],
      '2010': ['dsp', 'xp', 'xsa', 'sm'],
      '2011': ['dsp', 'xp', 'xsa', 'sm'],
      '2012': ['dsp', 'xp', 'xsa', 'sm'],
      '2013': ['dsp', 'xp', 'xsa', 'sm'],
    },
    'Montego': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Mystique': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Sable': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Scorpio': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Topaz': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Tracer': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
  },
  'Mini': {
    'Clubman (non-S, non-JCW)': {
      '2008': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2009': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2010': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2011': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2013': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2014': ['hs', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Clubman John Cooper WorksAll4': {
      '2017': ['ds', 'xp', 'xsa', 'sm', 'smf'],
      '2018': ['ds', 'xp', 'xsa', 'sm', 'smf'],
      '2019': ['ds', 'xp', 'xsa', 'sm', 'smf'],
      '2020': ['ds', 'xp', 'xsa', 'sm', 'smf'],
      '2021': ['ds', 'xp', 'xsa', 'sm', 'smf'],
      '2022': ['ds', 'xp', 'xsa', 'sm', 'smf'],
      '2023': ['ds', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Cooper (non-S)': {
      '2000': ['sts', 'xp', 'xsb', 'sm', 'smf'],
      '2001': ['sts', 'xp', 'xsb', 'sm', 'smf'],
      '2002': ['sts', 'xp', 'xsb', 'sm', 'smf'],
      '2003': ['sts', 'xp', 'xsb', 'sm', 'smf'],
      '2004': ['sts', 'xp', 'xsb', 'sm', 'smf'],
      '2005': ['sts', 'xp', 'xsb', 'sm', 'smf'],
      '2006': ['sts', 'xp', 'xsb', 'sm', 'smf'],
      '2007': ['sts', 'xp', 'xsb', 'sm', 'smf'],
      '2008': ['sts', 'xp', 'xsb', 'sm', 'smf'],
      '2009': ['sts', 'xp', 'xsb', 'sm', 'smf'],
      '2010': ['sts', 'xp', 'xsb', 'sm', 'smf'],
      '2011': ['sts', 'xp', 'xsb', 'sm', 'smf'],
      '2012': ['sts', 'xp', 'xsb', 'sm', 'smf'],
      '2013': ['sts', 'xp', 'xsb', 'sm', 'smf'],
      '2014': ['stu', 'xp', 'xsb', 'sm', 'smf'],
      '2015': ['stu', 'xp', 'xsb', 'sm', 'smf'],
      '2016': ['stu', 'xp', 'xsb', 'sm', 'smf'],
      '2017': ['stu', 'xp', 'xsb', 'sm', 'smf'],
      '2018': ['stu', 'xp', 'xsb', 'sm', 'smf'],
      '2019': ['stu', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Cooper Clubman (non-S, non-JCW)': {
      '2016': ['gs', 'xp', 'xsa', 'sm', 'smf'],
      '2017': ['gs', 'xp', 'xsa', 'sm', 'smf'],
      '2018': ['gs', 'xp', 'xsa', 'sm', 'smf'],
      '2019': ['gs', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Cooper Clubman JCW': {
      '2009': ['ds', 'xp', 'xsa', 'sm', 'smf'],
      '2010': ['ds', 'xp', 'xsa', 'sm', 'smf'],
      '2011': ['ds', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['ds', 'xp', 'xsa', 'sm', 'smf'],
      '2013': ['ds', 'xp', 'xsa', 'sm', 'smf'],
      '2014': ['ds', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Cooper Clubman S': {
      '2008': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2009': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2010': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2011': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2012': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2013': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2014': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2016': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2017': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2018': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2019': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2020': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2021': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2022': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2023': ['ds', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Cooper Coupe (non-S, non-JCW)': {
      '2012': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2013': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2014': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2015': ['hs', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Cooper Coupe JCW': {
      '2013': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2014': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2015': ['ds', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Cooper Coupe S': {
      '2013': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2014': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2015': ['ds', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Cooper Hardtop (non-S, non-JCW)': {
      '2002': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2003': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2004': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2005': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2006': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2007': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2008': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2009': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2010': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2011': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2012': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2013': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2014': ['gs', 'xp', 'xsb', 'sm', 'smf'],
      '2015': ['gs', 'xp', 'xsb', 'sm', 'smf'],
      '2016': ['gs', 'xp', 'xsb', 'sm', 'smf'],
      '2017': ['gs', 'xp', 'xsb', 'sm', 'smf'],
      '2018': ['gs', 'xp', 'xsb', 'sm', 'smf'],
      '2019': ['gs', 'xp', 'xsb', 'sm', 'smf'],
      '2020': ['gs', 'xp', 'xsb', 'sm', 'smf'],
      '2021': ['gs', 'xp', 'xsb', 'sm', 'smf'],
      '2022': ['gs', 'xp', 'xsb', 'sm', 'smf'],
      '2023': ['gs', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Cooper Hardtop JCW': {
      '2006': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2007': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2008': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2009': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2010': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2011': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2012': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2013': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2014': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2015': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2016': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2017': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2018': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2019': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2020': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2021': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2022': ['ds', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Cooper Hardtop S': {
      '2002': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2003': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2004': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2005': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2006': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2007': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2008': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2009': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2010': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2011': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2012': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2013': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2014': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2015': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2016': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2017': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2018': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2019': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2020': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2021': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2022': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2023': ['ds', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Cooper Roadster (non-S, non-JCW)': {
      '2012': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2013': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2014': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2015': ['hs', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Cooper Roadster JCW': {
      '2012': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2013': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2014': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2015': ['ds', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Cooper Roadster S': {
      '2012': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2013': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2014': ['ds', 'xp', 'xsb', 'sm', 'smf'],
      '2015': ['ds', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Cooper S & Cooper S JCW': {
      '2001': ['stx', 'xp', 'xsb', 'sm', 'smf'],
      '2002': ['stx', 'xp', 'xsb', 'sm', 'smf'],
      '2003': ['stx', 'xp', 'xsb', 'sm', 'smf'],
      '2004': ['stx', 'xp', 'xsb', 'sm', 'smf'],
      '2005': ['stx', 'xp', 'xsb', 'sm', 'smf'],
      '2006': ['stx', 'xp', 'xsb', 'sm', 'smf'],
      '2007': ['stu', 'xp', 'xsb', 'sm', 'smf'],
      '2008': ['stu', 'xp', 'xsb', 'sm', 'smf'],
      '2009': ['stu', 'xp', 'xsb', 'sm', 'smf'],
      '2010': ['stu', 'xp', 'xsb', 'sm', 'smf'],
      '2011': ['stu', 'xp', 'xsb', 'sm', 'smf'],
      '2012': ['stu', 'xp', 'xsb', 'sm', 'smf'],
      '2013': ['stu', 'xp', 'xsb', 'sm', 'smf'],
      '2014': ['stu', 'xp', 'xsb', 'sm', 'smf'],
      '2015': ['stu', 'xp', 'xsb', 'sm', 'smf'],
      '2016': ['stu', 'xp', 'xsb', 'sm', 'smf'],
      '2017': ['stu', 'xp', 'xsb', 'sm', 'smf'],
      '2018': ['stu', 'xp', 'xsb', 'sm', 'smf'],
      '2019': ['stu', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Cooper S (including JCW & JCWGP except Countryman)': {
      'all': ['bs', 'dsp', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Cooper SE': {
      '2020': ['gs', 'xp', 'xsb', 'sm', 'smf', 'evx'],
      '2021': ['gs', 'xp', 'xsb', 'sm', 'smf', 'evx'],
      '2022': ['gs', 'xp', 'xsb', 'sm', 'smf', 'evx'],
    },
    'Countryman JCW All4': {
      '2018': ['ds', 'xp', 'xsa', 'sm', 'smf'],
      '2019': ['ds', 'xp', 'xsa', 'sm', 'smf'],
      '2020': ['ds', 'xp', 'xsa', 'sm', 'smf'],
      '2021': ['ds', 'xp', 'xsa', 'sm', 'smf'],
      '2022': ['ds', 'xp', 'xsa', 'sm', 'smf'],
    },
  },
  'Mitsubishi': {
    '3000 GT (non-turbo)': {
      'all': ['hs', 'esp', 'xp', 'xsa', 'sm'],
    },
    '3000 GT Turbo': {
      'all': ['fs', 'asp', 'xp', 'xsa', 'sm'],
    },
    'Cordia': {
      'all': ['hs', 'fsp', 'ep', 'xp', 'xsa', 'sm'],
    },
    'Eclipse Turbo (AWD)': {
      'all': ['ds', 'sth', 'dsp', 'fp', 'xp', 'xsa', 'sm'],
    },
    'Eclipse V6': {
      '1999': ['hs', 'stx', 'dsp', 'xp', 'xsa', 'sm'],
      '2000': ['hs', 'stx', 'dsp', 'xp', 'xsa', 'sm'],
      '2001': ['hs', 'stx', 'dsp', 'xp', 'xsa', 'sm'],
      '2002': ['hs', 'stx', 'dsp', 'xp', 'xsa', 'sm'],
      '2003': ['hs', 'stx', 'dsp', 'xp', 'xsa', 'sm'],
      '2004': ['hs', 'stx', 'dsp', 'xp', 'xsa', 'sm'],
      '2005': ['hs', 'stx', 'dsp', 'xp', 'xsa', 'sm'],
      '2006': ['hs', 'stx', 'dsp', 'xp', 'xsa', 'sm'],
      '2007': ['hs', 'stx', 'dsp', 'xp', 'xsa', 'sm'],
      '2008': ['hs', 'stx', 'dsp', 'xp', 'xsa', 'sm'],
      '2009': ['hs', 'stx', 'dsp', 'xp', 'xsa', 'sm'],
      '2010': ['hs', 'stx', 'dsp', 'xp', 'xsa', 'sm'],
      '2011': ['hs', 'stx', 'dsp', 'xp', 'xsa', 'sm'],
      '2012': ['hs', 'stx', 'dsp', 'xp', 'xsa', 'sm'],
    },
    'Eclipse all (FWD)': {
      '1989': ['hs', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
      '1990': ['hs', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
      '1991': ['hs', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
      '1992': ['hs', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
      '1993': ['hs', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
      '1994': ['hs', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
      '1995': ['hs', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
      '1996': ['hs', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
      '1997': ['hs', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
      '1998': ['hs', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
      '1999': ['hs', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
      '2000': ['hs', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
      '2001': ['hs', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
      '2002': ['hs', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
      '2003': ['hs', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
      '2004': ['hs', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
      '2005': ['hs', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
      '2006': ['hs', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
      '2007': ['hs', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
      '2008': ['hs', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
      '2009': ['hs', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
      '2010': ['hs', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
      '2011': ['hs', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['hs', 'dsp', 'fp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Galant (4-cyl non-turbo)': {
      'all': ['hs', 'dsp', 'ep', 'xp', 'xsa', 'sm'],
    },
    'Galant (V6 & 4-cyl Turbo)': {
      'all': ['gs', 'dsp', 'xp', 'xsa', 'sm'],
    },
    'Lancer (non-turbo)': {
      'all': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm'],
    },
    'Lancer Evolution': {
      '2003': ['ds', 'stu', 'asp', 'fp', 'xp', 'xsa', 'sm'],
      '2004': ['ds', 'stu', 'asp', 'fp', 'xp', 'xsa', 'sm'],
      '2005': ['ds', 'stu', 'asp', 'fp', 'xp', 'xsa', 'sm'],
      '2006': ['ds', 'stu', 'asp', 'fp', 'xp', 'xsa', 'sm'],
      '2007': ['ds', 'stu', 'asp', 'xp', 'xsa', 'sm'],
      '2008': ['ds', 'stu', 'asp', 'xp', 'xsa', 'sm'],
      '2009': ['ds', 'stu', 'asp', 'xp', 'xsa', 'sm'],
      '2010': ['ds', 'stu', 'asp', 'xp', 'xsa', 'sm'],
      '2011': ['ds', 'stu', 'asp', 'xp', 'xsa', 'sm'],
      '2012': ['ds', 'stu', 'asp', 'xp', 'xsa', 'sm'],
      '2013': ['ds', 'stu', 'asp', 'xp', 'xsa', 'sm'],
      '2014': ['ds', 'stu', 'xp', 'xsa', 'sm'],
      '2015': ['ds', 'stu', 'xp', 'xsa', 'sm'],
    },
    'Lancer Ralliart': {
      '2009': ['ds', 'sth', 'xp', 'xsa', 'sm'],
      '2010': ['ds', 'sth', 'xp', 'xsa', 'sm'],
      '2011': ['ds', 'xp', 'xsa', 'sm'],
      '2012': ['ds', 'xp', 'xsa', 'sm'],
      '2013': ['ds', 'xp', 'xsa', 'sm'],
      '2014': ['ds', 'xp', 'xsa', 'sm'],
      '2015': ['ds', 'xp', 'xsa', 'sm'],
    },
    'Mirage (non-turbo)': {
      '1978': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1979': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1980': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1981': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1982': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1983': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1984': ['hs', 'fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1985': ['hs', 'fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1986': ['hs', 'fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1987': ['hs', 'fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1988': ['hs', 'fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1989': ['hs', 'fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1990': ['hs', 'fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1991': ['hs', 'fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1992': ['hs', 'fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1993': ['hs', 'fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1994': ['hs', 'fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1995': ['hs', 'fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1996': ['hs', 'fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1997': ['hs', 'fsp', 'xp', 'xsb', 'sm', 'smf'],
      '1998': ['hs', 'fsp', 'xp', 'xsb', 'sm', 'smf'],
      '1999': ['hs', 'fsp', 'xp', 'xsb', 'sm', 'smf'],
      '2000': ['hs', 'fsp', 'xp', 'xsb', 'sm', 'smf'],
      '2001': ['hs', 'fsp', 'xp', 'xsb', 'sm', 'smf'],
      '2002': ['hs', 'fsp', 'xp', 'xsb', 'sm', 'smf'],
      '2003': ['hs', 'fsp', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Mirage Turbo': {
      '1978': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1979': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1980': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1981': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1982': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1983': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1984': ['hs', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1985': ['hs', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1986': ['hs', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1987': ['hs', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1988': ['hs', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1989': ['hs', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1990': ['hs', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1991': ['hs', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1992': ['hs', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1993': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1994': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1995': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1996': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1997': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1998': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1999': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '2000': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '2001': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '2002': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '2003': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Precis': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Premier': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Starion (non-turbo)': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Starion Turbo': {
      'all': ['gs', 'esp', 'fp', 'xp', 'xsa', 'sm'],
    },
    'Tredia (non-turbo)': {
      'all': ['hs', 'fsp', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Tredia Turbo': {
      'all': ['hs', 'dsp', 'xp', 'xsb', 'sm', 'smf'],
    },
  },
  'Morgan': {
    '4/4': {
      'all': ['es', 'csp', 'dp', 'xp', 'xsb', 'ssm'],
    },
    'Plus 4': {
      'all': ['es', 'fsp', 'xp', 'xsb', 'sm'],
    },
    'Plus 8': {
      'all': ['as', 'fp', 'xp', 'xsb', 'sm'],
    },
    'Roadster (V6)': {
      'all': ['as', 'xp', 'xsb', 'ssm'],
    },
    'V8 (all)': {
      'all': ['ssp', 'xp', 'xsa', 'sm'],
    },
  },
  'NOC (Not Otherwise Classified)': {
    '6-cyl (normally aspirated) or 4-cyl (mechanically forced induction) 2WD sedan under 3.0L': {
      'all': ['dsp'],
    },
    'All eligible unclassified cars not covered by another catch-all listing': {
      'all': ['ss'],
    },
    'American 6-cyl & V8 sedan or pick-up': {
      'all': ['esp'],
    },
    'Any (4-cyl N/A, FWD)': {
      'all': ['ep'],
    },
    'Any (4-cyl N/A, RWD)': {
      'all': ['dp'],
    },
    'Other sedan over 3.0L': {
      'all': ['esp'],
    },
    'RWD pickup trucks': {
      'all': ['hs'],
    },
    'Sedan (4-cyl forced induction or 6-cyl engine, NOC)': {
      'all': ['fp'],
    },
    'Sedan over 1.7L & under 3.0L': {
      'all': ['csp'],
    },
    'Sedan under 1.7L': {
      'all': ['fsp'],
    },
    'Sedans & Coupes (3.1L to 5.1L NA)': {
      'all': ['stx'],
    },
    'Sedans & Coupes (over 5.1L normally aspirated or 2.5L to 3.1L forced induction)': {
      'all': ['stu'],
    },
    'Sedans & Coupes NOC (non-sports-car-based; 4-seat mini-mum; less than 2.5L (2500cc) forced-induction)': {
      'all': ['sth'],
    },
    'Sedans & Coupes NOC (non-sports-car-based; 4-seat mini-mum; less than 3.1L (3100cc) normally-aspirated)': {
      'all': ['sts'],
    },
    'Sports car over 2.0L': {
      'all': ['ssp'],
    },
    'Sports car under 2.0L': {
      'all': ['csp'],
    },
    'US Sedan (6-cyl or 8-cyl)': {
      'all': ['cp'],
    },
    'V8 sedans, pick-ups, and sedan-derived convertibles (3.1L to 5.1L NA)': {
      'all': ['fs', 'stx'],
    },
    'V8 sedans, pick-ups, and sedan-derived convertibles (over 5.1L NA)': {
      'all': ['fs', 'stu'],
    },
  },
  'Nissan': {
    '200SX': {
      '1987': ['dsp', 'hs', 'dp', 'fsp', 'xp', 'xsa', 'sm'],
      '1988': ['dsp', 'hs', 'dp', 'fsp', 'xp', 'xsa', 'sm'],
      '1989': ['dsp', 'hs', 'xp', 'xsa', 'sm'],
      '1990': ['dsp', 'hs', 'xp', 'xsa', 'sm'],
      '1991': ['dsp', 'hs', 'xp', 'xsa', 'sm'],
      '1992': ['dsp', 'hs', 'xp', 'xsa', 'sm'],
      '1993': ['dsp', 'hs', 'xp', 'xsa', 'sm'],
      '1994': ['dsp', 'hs', 'xp', 'xsa', 'sm'],
      '1995': ['dsp', 'hs', 'ep', 'sts', 'xp', 'xsa', 'sm'],
      '1996': ['dsp', 'hs', 'ep', 'sts', 'xp', 'xsa', 'sm'],
      '1997': ['dsp', 'hs', 'ep', 'sts', 'xp', 'xsa', 'sm'],
      '1998': ['dsp', 'hs', 'ep', 'sts', 'xp', 'xsa', 'sm'],
      '1999': ['dsp', 'hs', 'ep', 'xp', 'xsa', 'sm'],
      '2000': ['dsp', 'hs', 'xp', 'xsa', 'sm'],
      '2001': ['dsp', 'hs', 'xp', 'xsa', 'sm'],
      '2002': ['dsp', 'hs', 'xp', 'xsa', 'sm'],
    },
    '240SX': {
      '1988': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '1989': ['hs', 'stx', 'dp', 'xp', 'xsa', 'sm'],
      '1990': ['hs', 'stx', 'dp', 'xp', 'xsa', 'sm'],
      '1991': ['hs', 'stx', 'dp', 'xp', 'xsa', 'sm'],
      '1992': ['hs', 'stx', 'dp', 'xp', 'xsa', 'sm'],
      '1993': ['hs', 'stx', 'dp', 'xp', 'xsa', 'sm'],
      '1994': ['hs', 'stx', 'dp', 'xp', 'xsa', 'sm'],
      '1995': ['hs', 'stx', 'dp', 'xp', 'xsa', 'sm'],
      '1996': ['hs', 'stx', 'dp', 'xp', 'xsa', 'sm'],
      '1997': ['hs', 'stx', 'dp', 'xp', 'xsa', 'sm'],
      '1998': ['hs', 'stx', 'dp', 'xp', 'xsa', 'sm'],
    },
    '280ZX': {
      'all': ['bsp', 'xp', 'xsa', 'sm'],
    },
    '280ZX Turbo': {
      'all': ['bsp', 'xp', 'xsa', 'sm'],
    },
    '300ZX (Z31 chassis) - Alternate part: headlight covers': {
      '1984': ['fp', 'xp', 'xsa', 'sm'],
      '1985': ['fp', 'xp', 'xsa', 'sm'],
      '1986': ['fp', 'xp', 'xsa', 'sm'],
      '1987': ['fp', 'xp', 'xsa', 'sm'],
      '1988': ['fp', 'xp', 'xsa', 'sm'],
      '1989': ['fp', 'xp', 'xsa', 'sm'],
    },
    '300ZX (Z32 chassis; non-turbo) - Alternate part: rear facing hood scoop (3.5" max height)': {
      '1990': ['fp', 'xp', 'xsa', 'sm'],
      '1991': ['fp', 'xp', 'xsa', 'sm'],
      '1992': ['fp', 'xp', 'xsa', 'sm'],
      '1993': ['fp', 'xp', 'xsa', 'sm'],
      '1994': ['fp', 'xp', 'xsa', 'sm'],
      '1995': ['fp', 'xp', 'xsa', 'sm'],
      '1996': ['fp', 'xp', 'xsa', 'sm'],
    },
    '300ZX (non-turbo)': {
      '1984': ['hs', 'stu', 'stx', 'esp', 'xp', 'xsa', 'sm'],
      '1985': ['hs', 'stu', 'stx', 'esp', 'xp', 'xsa', 'sm'],
      '1986': ['hs', 'stu', 'stx', 'esp', 'xp', 'xsa', 'sm'],
      '1987': ['hs', 'stu', 'stx', 'esp', 'xp', 'xsa', 'sm'],
      '1988': ['hs', 'stu', 'stx', 'esp', 'xp', 'xsa', 'sm'],
      '1989': ['hs', 'stu', 'stx', 'esp', 'xp', 'xsa', 'sm'],
      '1990': ['fs', 'esp', 'xp', 'xsa', 'sm'],
      '1991': ['fs', 'esp', 'xp', 'xsa', 'sm'],
      '1992': ['fs', 'esp', 'xp', 'xsa', 'sm'],
      '1993': ['fs', 'esp', 'xp', 'xsa', 'sm'],
      '1994': ['fs', 'esp', 'xp', 'xsa', 'sm'],
      '1995': ['fs', 'esp', 'xp', 'xsa', 'sm'],
      '1996': ['fs', 'esp', 'xp', 'xsa', 'sm'],
    },
    '300ZX Turbo': {
      '1984': ['fs', 'bsp', 'xp', 'xsa', 'sm'],
      '1985': ['fs', 'bsp', 'xp', 'xsa', 'sm'],
      '1986': ['fs', 'bsp', 'xp', 'xsa', 'sm'],
      '1987': ['fs', 'bsp', 'xp', 'xsa', 'sm'],
      '1988': ['fs', 'bsp', 'xp', 'xsa', 'sm'],
      '1989': ['fs', 'bsp', 'xp', 'xsa', 'sm'],
      '1990': ['cs', 'bsp', 'xp', 'xsa', 'sm'],
      '1991': ['cs', 'bsp', 'xp', 'xsa', 'sm'],
      '1992': ['cs', 'bsp', 'xp', 'xsa', 'sm'],
      '1993': ['cs', 'bsp', 'xp', 'xsa', 'sm'],
      '1994': ['cs', 'bsp', 'xp', 'xsa', 'sm'],
      '1995': ['cs', 'bsp', 'xp', 'xsa', 'sm'],
      '1996': ['cs', 'bsp', 'xp', 'xsa', 'sm'],
    },
    '350Z (non-NISMO)': {
      '2002': ['fs', 'bsp', 'stu', 'xp', 'xsa', 'sm'],
      '2003': ['fs', 'bsp', 'stu', 'fp', 'xp', 'xsa', 'sm'],
      '2004': ['fs', 'bsp', 'stu', 'fp', 'xp', 'xsa', 'sm'],
      '2005': ['fs', 'bsp', 'stu', 'fp', 'xp', 'xsa', 'sm'],
      '2006': ['fs', 'bsp', 'stu', 'fp', 'xp', 'xsa', 'sm'],
      '2007': ['fs', 'bsp', 'stu', 'fp', 'xp', 'xsa', 'sm'],
      '2008': ['fs', 'bsp', 'stu', 'fp', 'xp', 'xsa', 'sm'],
      '2009': ['fs', 'bsp', 'stu', 'fp', 'xp', 'xsa', 'sm'],
    },
    '350Z NISMO': {
      '2004': ['bs', 'xp', 'xsa', 'sm'],
      '2005': ['bs', 'xp', 'xsa', 'sm'],
      '2006': ['bs', 'xp', 'xsa', 'sm'],
      '2007': ['bs', 'xp', 'xsa', 'sm'],
      '2008': ['bs', 'xp', 'xsa', 'sm'],
    },
    '370Z (non-NISMO)': {
      '2009': ['stu', 'bsp', 'fp', 'fs', 'xp', 'xsa', 'sm'],
      '2010': ['stu', 'bsp', 'fp', 'fs', 'xp', 'xsa', 'sm'],
      '2011': ['stu', 'bsp', 'fp', 'fs', 'xp', 'xsa', 'sm'],
      '2012': ['stu', 'bsp', 'fp', 'fs', 'xp', 'xsa', 'sm'],
      '2013': ['stu', 'bsp', 'fp', 'fs', 'xp', 'xsa', 'sm'],
      '2014': ['stu', 'bsp', 'fp', 'fs', 'xp', 'xsa', 'sm'],
      '2015': ['stu', 'bsp', 'fp', 'fs', 'xp', 'xsa', 'sm'],
      '2016': ['stu', 'bsp', 'fp', 'fs', 'xp', 'xsa', 'sm'],
      '2017': ['stu', 'bsp', 'fp', 'fs', 'xp', 'xsa', 'sm'],
      '2018': ['stu', 'bsp', 'fs', 'xp', 'xsa', 'sm'],
      '2019': ['stu', 'fs', 'xp', 'xsa', 'sm'],
      '2020': ['stu', 'fs', 'xp', 'xsa', 'sm'],
    },
    '370Z NISMO': {
      '2009': ['bs', 'stu', 'xp', 'xsa', 'sm'],
      '2010': ['bs', 'stu', 'xp', 'xsa', 'sm'],
      '2011': ['bs', 'stu', 'xp', 'xsa', 'sm'],
      '2012': ['bs', 'stu', 'xp', 'xsa', 'sm'],
      '2013': ['bs', 'stu', 'xp', 'xsa', 'sm'],
      '2014': ['bs', 'stu', 'xp', 'xsa', 'sm'],
      '2015': ['bs', 'stu', 'xp', 'xsa', 'sm'],
      '2016': ['bs', 'stu', 'xp', 'xsa', 'sm'],
      '2017': ['bs', 'stu', 'xp', 'xsa', 'sm'],
      '2018': ['bs', 'stu', 'xp', 'xsa', 'sm'],
      '2019': ['bs', 'stu', 'xp', 'xsa', 'sm'],
      '2020': ['bs', 'stu', 'xp', 'xsa', 'sm'],
    },
    '720 (2WD)': {
      '1980': ['dp', 'xp', 'xsa', 'sm'],
      '1981': ['dp', 'xp', 'xsa', 'sm'],
      '1982': ['dp', 'xp', 'xsa', 'sm'],
      '1983': ['dp', 'xp', 'xsa', 'sm'],
      '1984': ['dp', 'xp', 'xsa', 'sm'],
      '1985': ['dp', 'xp', 'xsa', 'sm'],
      '1986': ['dp', 'xp', 'xsa', 'sm'],
    },
    'Altima': {
      'all': ['hs', 'sm', 'xp', 'xsa', 'sm'],
    },
    'GT-R (R35)': {
      'all': ['ssp', 'xp', 'xsa', 'sm'],
    },
    'GT-R (excluding NISMO & Track Edition)': {
      '2009': ['ss', 'sst', 'xp', 'xsa', 'sm'],
      '2010': ['ss', 'sst', 'xp', 'xsa', 'sm'],
      '2011': ['ss', 'sst', 'xp', 'xsa', 'sm'],
      '2012': ['ss', 'sst', 'xp', 'xsa', 'sm'],
      '2013': ['ss', 'sst', 'xp', 'xsa', 'sm'],
      '2014': ['ss', 'sst', 'xp', 'xsa', 'sm'],
      '2015': ['ss', 'sst', 'xp', 'xsa', 'sm'],
      '2016': ['ss', 'sst', 'xp', 'xsa', 'sm'],
      '2017': ['ss', 'sst', 'xp', 'xsa', 'sm'],
      '2018': ['ss', 'sst', 'xp', 'xsa', 'sm'],
      '2019': ['ss', 'sst', 'xp', 'xsa', 'sm'],
      '2020': ['ss', 'sst', 'xp', 'xsa', 'sm'],
      '2021': ['ss', 'sst', 'xp', 'xsa', 'sm'],
    },
    'Juke * All vehicles must meet the requirements of Section 3.1': {
      '2011': ['sth', 'xp', 'xsa', 'sm'],
      '2012': ['sth', 'xp', 'xsa', 'sm'],
      '2013': ['sth', 'xp', 'xsa', 'sm'],
      '2014': ['sth', 'xp', 'xsa', 'sm'],
      '2015': ['sth', 'xp', 'xsa', 'sm'],
      '2016': ['sth', 'xp', 'xsa', 'sm'],
    },
    'Leaf': {
      '2011': ['hs', 'xp', 'xsa', 'sm', 'evx'],
      '2012': ['hs', 'xp', 'xsa', 'sm', 'evx'],
      '2013': ['hs', 'xp', 'xsa', 'sm', 'evx'],
      '2014': ['hs', 'xp', 'xsa', 'sm', 'evx'],
      '2015': ['hs', 'xp', 'xsa', 'sm', 'evx'],
      '2016': ['hs', 'xp', 'xsa', 'sm', 'evx'],
      '2017': ['hs', 'xp', 'xsa', 'sm', 'evx'],
      '2018': ['hs', 'xp', 'xsa', 'sm', 'evx'],
      '2019': ['hs', 'xp', 'xsa', 'sm', 'evx'],
      '2020': ['hs', 'xp', 'xsa', 'sm', 'evx'],
      '2021': ['hs', 'xp', 'xsa', 'sm', 'evx'],
      '2022': ['hs', 'xp', 'xsa', 'sm', 'evx'],
    },
    'Maxima': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'NX1600': {
      'all': ['hs', 'fsp', 'xp', 'xsb', 'sm', 'smf'],
    },
    'NX2000': {
      '1991': ['fsp', 'hs', 'sts', 'xp', 'xsb', 'sm', 'smf'],
      '1992': ['fsp', 'hs', 'sts', 'xp', 'xsb', 'sm', 'smf'],
      '1993': ['fsp', 'hs', 'sts', 'xp', 'xsb', 'sm', 'smf'],
      '1994': ['fsp', 'sts', 'xp', 'xsb', 'sm', 'smf'],
    },
    'NX (B13 chassis)': {
      '1991': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1992': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1993': ['ep', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Pulsar': {
      'all': ['hs', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Pulsar & Pulsar NX (non-turbo)': {
      'all': ['fsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Pulsar (N13 chassis; 16v) - Alternate cylinder head: 11041-15M00 Alternate engine: A14': {
      '1987': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1988': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1989': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1990': ['ep', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Sedan (N/A, FWD, Not Otherwise Classified)': {
      'all': ['ep', 'xp', 'xsa', 'sm'],
    },
    'Sentra': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Sentra (1.6L)': {
      '1991': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '1992': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '1993': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '1994': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '1995': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '1996': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '1997': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '1998': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '1999': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2000': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2001': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2002': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2003': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2004': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2005': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2006': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2007': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2008': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2009': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2010': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2011': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['sts', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Sentra (1.8L)': {
      '1991': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '1992': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '1993': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '1994': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '1995': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '1996': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '1997': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '1998': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '1999': ['sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2000': ['sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2001': ['sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2002': ['sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2003': ['sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2004': ['sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2005': ['sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2006': ['sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2007': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2008': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2009': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2010': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2011': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['sts', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Sentra (2.0L)': {
      '1991': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '1992': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '1993': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '1994': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '1995': ['sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '1996': ['sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '1997': ['sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '1998': ['sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '1999': ['sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2000': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2001': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2002': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2003': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2004': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2005': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2006': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2007': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2008': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2009': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2010': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2011': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['sts', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Sentra (B12 chassis; 1.6 L) - Alternate cylinder head: 11041-15M00 Alternate engine: L16': {
      '1987': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1988': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1989': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1990': ['ep', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Sentra (B13 chassis; 2.0 L) - Alternate cylinder head: 11041-H5704': {
      '1991': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1992': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1993': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1994': ['ep', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Sentra (B14 chassis)': {
      '1995': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1996': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1997': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1998': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1999': ['ep', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Sentra SE-R': {
      '1991': ['fsp', 'xp', 'xsa', 'sm', 'smf'],
      '1992': ['fsp', 'xp', 'xsa', 'sm', 'smf'],
      '1993': ['fsp', 'xp', 'xsa', 'sm', 'smf'],
      '1994': ['fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2000': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2001': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2002': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2003': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2004': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2005': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2006': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2007': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2008': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2009': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2010': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2011': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['stx', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Sentra SE-R Spec V': {
      'all': ['stx', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Stanza': {
      'all': ['hs', 'fsp', 'xp', 'xsa', 'sm'],
    },
    'Versa': {
      '2007': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm'],
      '2008': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm'],
      '2009': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm'],
      '2010': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm'],
      '2011': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm'],
      '2012': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm'],
      '2013': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm'],
      '2014': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm'],
      '2015': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm'],
      '2016': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm'],
      '2017': ['hs', 'sts', 'xp', 'xsa', 'sm'],
      '2018': ['hs', 'sts', 'xp', 'xsa', 'sm'],
      '2019': ['hs', 'sts', 'xp', 'xsa', 'sm'],
      '2020': ['hs', 'xp', 'xsa', 'sm'],
      '2021': ['hs', 'xp', 'xsa', 'sm'],
      '2022': ['hs', 'xp', 'xsa', 'sm'],
    },
  },
  'Oldsmobile': {
    'Calais W41': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Cutlass': {
      '1968': ['cp', 'camt', 'xp', 'xsa', 'sm'],
      '1969': ['cp', 'camt', 'xp', 'xsa', 'sm'],
      '1970': ['cp', 'camt', 'xp', 'xsa', 'sm'],
      '1971': ['cp', 'camt', 'xp', 'xsa', 'sm'],
      '1972': ['cp', 'camt', 'xp', 'xsa', 'sm'],
      '1973': ['cp', 'camt', 'xp', 'xsa', 'sm'],
      '1974': ['cp', 'camt', 'xp', 'xsa', 'sm'],
      '1975': ['cp', 'camt', 'xp', 'xsa', 'sm'],
      '1976': ['cp', 'camt', 'xp', 'xsa', 'sm'],
      '1977': ['cp', 'camt', 'xp', 'xsa', 'sm'],
      '1978': ['cp', 'camt', 'xp', 'xsa', 'sm'],
      '1979': ['cp', 'camt', 'xp', 'xsa', 'sm'],
      '1980': ['cp', 'camt', 'xp', 'xsa', 'sm'],
      '1981': ['cp', 'camt', 'xp', 'xsa', 'sm'],
    },
    'Omega': {
      'all': ['fsp', 'xp', 'xsa', 'sm'],
    },
    'Starfire (V6)': {
      'all': ['esp', 'xp', 'xsa', 'sm'],
    },
  },
  'Opel': {
    '1900': {
      'all': ['hs', 'fsp', 'xp', 'xsa', 'sm'],
    },
    'Ascona': {
      '1971': ['hs', 'dp', 'xp', 'xsa', 'sm'],
      '1972': ['hs', 'dp', 'xp', 'xsa', 'sm'],
      '1973': ['hs', 'dp', 'xp', 'xsa', 'sm'],
      '1974': ['hs', 'dp', 'xp', 'xsa', 'sm'],
      '1975': ['hs', 'dp', 'xp', 'xsa', 'sm'],
    },
    'GT': {
      'all': ['hs', 'fsp', 'dp', 'xp', 'xsa', 'ssm'],
    },
    'Kadett': {
      'all': ['hs', 'fsp', 'dp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Manta': {
      'all': ['hs', 'fsp', 'dp', 'xp', 'xsa', 'sm'],
    },
    'Not Otherwise Classified': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
  },
  'Peugeot': {
    '405': {
      'all': ['hs', 'esp', 'xp', 'xsa', 'sm', 'smf'],
    },
    '505': {
      '1979': ['hs', 'dsp', 'xp', 'xsa', 'sm'],
      '1980': ['hs', 'dsp', 'xp', 'xsa', 'sm'],
      '1981': ['hs', 'dsp', 'xp', 'xsa', 'sm'],
      '1982': ['hs', 'dsp', 'xp', 'xsa', 'sm'],
      '1983': ['hs', 'dsp', 'xp', 'xsa', 'sm'],
      '1984': ['hs', 'dsp', 'xp', 'xsa', 'sm'],
      '1985': ['hs', 'dsp', 'xp', 'xsa', 'sm'],
      '1986': ['hs', 'dsp', 'xp', 'xsa', 'sm'],
      '1987': ['hs', 'dsp', 'xp', 'xsa', 'sm'],
      '1988': ['hs', 'dsp', 'xp', 'xsa', 'sm'],
      '1989': ['hs', 'dsp', 'xp', 'xsa', 'sm'],
      '1990': ['hs', 'dsp', 'xp', 'xsa', 'sm'],
      '1991': ['hs', 'dsp', 'xp', 'xsa', 'sm'],
    },
    '405 (non-turbo)': {
      '1987': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1988': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1989': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1990': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1991': ['ep', 'xp', 'xsa', 'sm', 'smf'],
    },
    '405 DL': {
      'all': ['fsp', 'xp', 'xsa', 'sm'],
    },
    '405 S': {
      'all': ['fsp', 'xp', 'xsa', 'sm'],
    },
  },
  'Plymouth': {
    'Acclaim': {
      'all': ['hs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Arrow': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Champ': {
      'all': ['hs', 'dp', 'xp', 'xsa', 'sm'],
    },
    'Colt': {
      'all': ['hs', 'dp', 'xp', 'xsa', 'sm'],
    },
    'Horizon': {
      'all': ['hs', 'fsp', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Laser (non-turbo) AWD': {
      'all': ['hs', 'dsp', 'ep', 'xp', 'xsa', 'sm'],
    },
    'Laser (non-turbo) FWD': {
      'all': ['hs', 'esp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Neon': {
      '1995': ['gs', 'sts', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1996': ['gs', 'sts', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1997': ['gs', 'sts', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1998': ['gs', 'sts', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1999': ['gs', 'sts', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2000': ['hs', 'sts', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2001': ['hs', 'sts', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2002': ['hs', 'sts', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2003': ['hs', 'sts', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2004': ['hs', 'sts', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2005': ['hs', 'sts', 'ep', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Prowler': {
      'all': ['cs', 'xp', 'xsa', 'sm'],
    },
    'Sapporo': {
      'all': ['hs', 'fsp', 'xp', 'xsa', 'sm'],
    },
    'Scamp': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Sundance': {
      'all': ['hs', 'dsp', 'ep', 'xp', 'sm', 'smf', 'xsa'],
    },
    'TC3': {
      'all': ['hs', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Turismo': {
      'all': ['hs', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Valiant': {
      '1963': ['hs', 'esp', 'cp', 'xp', 'xsa', 'sm'],
      '1964': ['hs', 'esp', 'cp', 'xp', 'xsa', 'sm'],
      '1965': ['hs', 'esp', 'cp', 'xp', 'xsa', 'sm'],
      '1966': ['hs', 'esp', 'cp', 'xp', 'xsa', 'sm'],
      '1967': ['hs', 'esp', 'cp', 'xp', 'xsa', 'sm'],
      '1968': ['hs', 'esp', 'cp', 'xp', 'xsa', 'sm'],
      '1969': ['hs', 'esp', 'cp', 'xp', 'xsa', 'sm'],
      '1970': ['hs', 'esp', 'cp', 'xp', 'xsa', 'sm'],
      '1971': ['hs', 'esp', 'cp', 'xp', 'xsa', 'sm'],
      '1972': ['hs', 'esp', 'cp', 'xp', 'xsa', 'sm'],
      '1973': ['hs', 'esp', 'cp', 'xp', 'xsa', 'sm'],
      '1974': ['hs', 'esp', 'cp', 'xp', 'xsa', 'sm'],
      '1975': ['hs', 'esp', 'cp', 'xp', 'xsa', 'sm'],
      '1976': ['hs', 'esp', 'cp', 'xp', 'xsa', 'sm'],
    },
  },
  'Polestar': {
    'Polestar 2': {
      '2021': ['ss', 'evx'],
      '2022': ['ss', 'evx'],
    },
  },
  'Pontiac': {
    'Fiero (4-cyl)': {
      'all': ['hs', 'sts', 'fsp', 'dp', 'xp', 'xsa', 'ssm'],
    },
    'Fiero (V6)': {
      'all': ['es', 'str', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
    },
    'Firebird (4-cyl & 6-cyl)': {
      'all': ['hs', 'stu', 'fsp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
    },
    'Firebird (V8, NOC)': {
      'all': ['fs', 'stu', 'cp', 'camt', 'xp', 'xsa', 'sm'],
    },
    'Firebird Trans Am & Formula (WS6, base car only, including GM-installed 1LE)': {
      '1998': ['fs', 'stu', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1999': ['fs', 'stu', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '2000': ['fs', 'stu', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '2001': ['fs', 'stu', 'cp', 'camc', 'xp', 'xsa', 'sm'],
      '2002': ['fs', 'stu', 'cp', 'camc', 'xp', 'xsa', 'sm'],
    },
    'G5 (2.0L Turbo)': {
      'all': ['hs', 'sth', 'xp', 'xsa', 'sm', 'smf'],
    },
    'G5 (2.2L)': {
      'all': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
    },
    'G8 (V6)': {
      '2008': ['hs', 'esp', 'camc', 'xp', 'xsa', 'sm'],
      '2009': ['hs', 'esp', 'camc', 'xp', 'xsa', 'sm'],
    },
    'G8 (V8 & NOC)': {
      '2008': ['fs', 'esp', 'camc', 'xp', 'xsa', 'sm'],
      '2009': ['fs', 'esp', 'camc', 'xp', 'xsa', 'sm'],
    },
    'GTO': {
      '2004': ['fs', 'stu', 'esp', 'cp', 'camc', 'xp', 'xsa', 'sm'],
      '2005': ['fs', 'stu', 'esp', 'cp', 'camc', 'xp', 'xsa', 'sm'],
      '2006': ['fs', 'stu', 'esp', 'cp', 'camc', 'xp', 'xsa', 'sm'],
    },
    'LeMans (FWD)': {
      '1988': ['hs', 'xp', 'xsa', 'sm'],
      '1989': ['hs', 'xp', 'xsa', 'sm'],
      '1990': ['hs', 'xp', 'xsa', 'sm'],
      '1991': ['hs', 'xp', 'xsa', 'sm'],
      '1992': ['hs', 'xp', 'xsa', 'sm'],
      '1993': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Solstice (non-turbo; non-ZOK)': {
      '2007': ['cs', 'str', 'csp', 'dp', 'cams', 'xp', 'xsa', 'ssm'],
      '2008': ['cs', 'str', 'csp', 'dp', 'cams', 'xp', 'xsa', 'ssm'],
      '2009': ['cs', 'str', 'csp', 'dp', 'cams', 'xp', 'xsa', 'ssm'],
      '2010': ['cs', 'str', 'csp', 'dp', 'cams', 'xp', 'xsa', 'ssm'],
    },
    'Solstice (non-turbo; w/ ZOK ClubSport package)': {
      '2007': ['bs', 'str', 'csp', 'cams', 'xp', 'xsa', 'ssm'],
      '2008': ['bs', 'str', 'csp', 'cams', 'xp', 'xsa', 'ssm'],
      '2009': ['bs', 'str', 'csp', 'cams', 'xp', 'xsa', 'ssm'],
      '2010': ['bs', 'str', 'csp', 'cams', 'xp', 'xsa', 'ssm'],
    },
    'Solstice GXP (Turbo)': {
      '2007': ['as', 'asp', 'fp', 'cams', 'xp', 'xsa', 'ssm'],
      '2008': ['as', 'asp', 'fp', 'cams', 'xp', 'xsa', 'ssm'],
      '2009': ['as', 'asp', 'fp', 'cams', 'xp', 'xsa', 'ssm'],
    },
    'Sunfire': {
      'all': ['hs', 'xp', 'xsa', 'sm', 'smf'],
    },
    'T-1000': {
      'all': ['hs', 'camt', 'xp', 'xsb', 'sm'],
    },
    'Trans Am Turbo (V6)': {
      '1989': ['fs', 'esp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
    },
    'Vibe': {
      'all': ['hs', 'sts', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
    },
  },
  'Porsche': {
    '356': {
      'all': ['csp', 'xp', 'xsa', 'ssm'],
    },
    '912': {
      'all': ['hs', 'fsp', 'xp', 'xsa', 'ssm'],
    },
    '924': {
      'all': ['str', 'xp', 'xsa', 'ssm'],
    },
    '968': {
      '1992': ['fp', 'xp', 'xsa', 'ssm'],
      '1993': ['fp', 'xp', 'xsa', 'ssm'],
      '1994': ['fp', 'xp', 'xsa', 'ssm'],
      '1995': ['fp', 'xp', 'xsa', 'ssm'],
      'all': ['bs', 'str', 'bsp', 'xp', 'xsa', 'ssm'],
    },
    '1300': {
      'all': ['dp', 'xp', 'xsa', 'ssm'],
    },
    '1600': {
      'all': ['csp', 'xp', 'xsa', 'ssm'],
    },
    '356 (non-Carrera)': {
      'all': ['hs', 'xp', 'xsa', 'ssm'],
    },
    '356 Carrera (4-cam)': {
      'all': ['cs', 'xp', 'xsa', 'ssm'],
    },
    '356, except Carrera and 1500, 1600': {
      'all': ['dp', 'xp', 'xsa', 'sm'],
    },
    '911 (non-Turbo)': {
      '1963': ['cs', 'bsp', 'fp', 'xp', 'xsb', 'ssm'],
      '1964': ['cs', 'bsp', 'fp', 'xp', 'xsb', 'ssm'],
      '1965': ['cs', 'bsp', 'fp', 'xp', 'xsb', 'ssm'],
      '1966': ['cs', 'bsp', 'fp', 'xp', 'xsb', 'ssm'],
      '1967': ['cs', 'bsp', 'fp', 'xp', 'xsb', 'ssm'],
      '1968': ['cs', 'bsp', 'fp', 'xp', 'xsb', 'ssm'],
      '1969': ['cs', 'bsp', 'fp', 'xp', 'xsb', 'ssm'],
      '1970': ['cs', 'bsp', 'fp', 'xp', 'xsb', 'ssm'],
      '1971': ['cs', 'bsp', 'fp', 'xp', 'xsb', 'ssm'],
      '1972': ['cs', 'bsp', 'fp', 'xp', 'xsb', 'ssm'],
      '1973': ['cs', 'bsp', 'fp', 'xp', 'xsb', 'ssm'],
      '1974': ['cs', 'bsp', 'fp', 'xp', 'xsb', 'ssm'],
      '1975': ['cs', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1976': ['cs', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1977': ['cs', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1978': ['cs', 'str', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1979': ['cs', 'str', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1980': ['cs', 'str', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1981': ['cs', 'str', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1982': ['cs', 'str', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1983': ['cs', 'str', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1984': ['cs', 'str', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1985': ['cs', 'str', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1986': ['cs', 'str', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1987': ['cs', 'str', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1988': ['cs', 'str', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1989': ['cs', 'str', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1990': ['cs', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1991': ['cs', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1992': ['cs', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1993': ['cs', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1994': ['cs', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1995': ['bs', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1996': ['bs', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1997': ['bs', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1998': ['bs', 'sst', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1999': ['bs', 'sst', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2000': ['bs', 'sst', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2001': ['bs', 'sst', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2002': ['bs', 'sst', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2003': ['bs', 'sst', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2004': ['bs', 'sst', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2005': ['as', 'sst', 'ssr', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2006': ['as', 'sst', 'ssr', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2007': ['as', 'sst', 'ssr', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2008': ['as', 'sst', 'ssr', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2009': ['as', 'sst', 'ssr', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2010': ['as', 'sst', 'ssr', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2011': ['as', 'sst', 'ssr', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2012': ['ss', 'sst', 'ssr', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2013': ['ss', 'ssr', 'bsp', 'xp', 'xsa', 'ssm'],
      '2014': ['ss', 'ssr', 'bsp', 'xp', 'xsa', 'ssm'],
      '2015': ['ss', 'ssr', 'bsp', 'xp', 'xsa', 'ssm'],
      '2016': ['ss', 'ssr', 'bsp', 'xp', 'xsa', 'ssm'],
      '2017': ['ss', 'ssr', 'bsp', 'xp', 'xsa', 'ssm'],
      '2018': ['ss', 'ssr', 'bsp', 'xp', 'xsa', 'ssm'],
      '2019': ['ss', 'ssr', 'bsp', 'xp', 'xsa', 'ssm'],
      '2020': ['ss', 'bsp', 'xp', 'xsa', 'ssm'],
      '2021': ['ss', 'bsp', 'xp', 'xsa', 'ssm'],
      '2022': ['ss', 'bsp', 'xp', 'xsa', 'ssm'],
    },
    '911 Carrera (992 Chassis excl. Turbo, Turbo S, GTS, & GT3)': {
      '2020': ['ss', 'xp', 'xsa', 'ssm'],
      '2021': ['ss', 'xp', 'xsa', 'ssm'],
      '2022': ['ss', 'xp', 'xsa', 'ssm'],
    },
    '911 Club Sport': {
      '1987': ['cs', 'xp', 'xsa', 'ssm'],
      '1988': ['cs', 'xp', 'xsa', 'ssm'],
      '1989': ['cs', 'xp', 'xsa', 'ssm'],
    },
    '911 GT2': {
      '1999': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2000': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2001': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2002': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2003': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2004': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2006': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2007': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2008': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2009': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2010': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2011': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
    },
    '911 GT2 RS': {
      '1999': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2000': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2001': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2002': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2003': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2004': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2006': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2007': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2008': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2009': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2010': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2011': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2012': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2017': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2018': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2019': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
    },
    '911 GT3': {
      '1999': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2000': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2001': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2002': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2003': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2004': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2006': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2007': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2008': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2009': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2010': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2011': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2012': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2017': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2018': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2019': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
    },
    '911 GT3 RS': {
      '1999': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2000': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2001': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2002': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2003': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2004': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2006': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2007': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2008': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2009': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2010': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2011': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2012': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'ssm'],
      '2017': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2018': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2019': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
    },
    '911 Turbo': {
      '1974': ['ss', 'ssr', 'xp', 'xsa', 'ssm'],
      '1975': ['ss', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '1976': ['ss', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '1977': ['ss', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '1978': ['ss', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '1979': ['ss', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '1980': ['ss', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '1981': ['ss', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '1982': ['ss', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '1983': ['ss', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '1984': ['ss', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '1985': ['ss', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '1986': ['ss', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '1987': ['ss', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '1988': ['ss', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '1989': ['ss', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '1990': ['ss', 'asp', 'xp', 'xsa', 'ssm'],
      '1991': ['ss', 'asp', 'xp', 'xsa', 'ssm'],
      '1992': ['ss', 'asp', 'xp', 'xsa', 'ssm'],
      '1993': ['ss', 'asp', 'xp', 'xsa', 'ssm'],
      '1994': ['ss', 'asp', 'xp', 'xsa', 'ssm'],
      '1995': ['ss', 'asp', 'xp', 'xsa', 'ssm'],
      '1996': ['ss', 'asp', 'xp', 'xsa', 'ssm'],
      '1997': ['ss', 'asp', 'xp', 'xsa', 'ssm'],
      '1998': ['ss', 'xp', 'xsa', 'ssm'],
      '1999': ['ss', 'xp', 'xsa', 'ssm'],
      '2001': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2002': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2003': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2004': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2005': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2006': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2007': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2008': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2009': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2010': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2011': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2012': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2013': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2014': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2015': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2016': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2017': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2018': ['ss', 'xp', 'xsa', 'ssm'],
      '2019': ['ss', 'xp', 'xsa', 'ssm'],
      '2020': ['ss', 'xp', 'xsa', 'ssm'],
    },
    '911 Turbo S': {
      '2001': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2002': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2003': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2004': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2005': ['ss', 'ssp', 'xp', 'xsa', 'ssm'],
      '2006': ['ssp', 'xp', 'xsa', 'ssm'],
      '2007': ['ssp', 'xp', 'xsa', 'ssm'],
      '2008': ['ssp', 'xp', 'xsa', 'ssm'],
      '2009': ['ssp', 'xp', 'xsa', 'ssm'],
      '2010': ['ssp', 'xp', 'xsa', 'ssm'],
      '2011': ['ssp', 'xp', 'xsa', 'ssm'],
      '2012': ['ssp', 'xp', 'xsa', 'ssm'],
      '2013': ['ssp', 'xp', 'xsa', 'ssm'],
      '2014': ['ssp', 'xp', 'xsa', 'ssm'],
      '2015': ['ssp', 'xp', 'xsa', 'ssm'],
      '2016': ['ssp', 'xp', 'xsa', 'ssm'],
      '2017': ['ssp', 'xp', 'xsa', 'ssm'],
    },
    '912 & 912E (1600 & 1971 cc)': {
      'all': ['dp', 'xp', 'xsb', 'ssm'],
    },
    '912E': {
      'all': ['fsp', 'xp', 'xsb', 'ssm'],
    },
    '914 (4-cyl)': {
      'all': ['sts', 'dsp', 'dp', 'xp', 'xsb', 'ssm'],
    },
    '914 (all)': {
      'all': ['cs', 'xp', 'xsb', 'ssm'],
    },
    '914-6 (2.0L, 2.5L, 2.7L, & 2.8L 6-cyl air-cooled)': {
      'all': ['fp', 'xp', 'xsb', 'ssm'],
    },
    '914/6': {
      'all': ['bsp', 'xp', 'xsb', 'ssm'],
    },
    '924 (1984 cc, non-turbo)': {
      'all': ['dp', 'xp', 'xsb', 'sm'],
    },
    '924 (Audi engine)': {
      'all': ['fsp', 'xp', 'xsb', 'sm'],
    },
    '924 (Audi engine, non-turbo)': {
      'all': ['hs', 'xp', 'xsb', 'sm'],
    },
    '924 (incl. Turbo)': {
      'all': ['bsp', 'xp', 'xsb', 'sm'],
    },
    '924 Turbo': {
      'all': ['fp', 'xp', 'xsb', 'sm'],
    },
    '924 Turbo (Audi engine)': {
      '1979': ['es', 'xp', 'xsb', 'sm'],
      '1980': ['es', 'xp', 'xsb', 'sm'],
      '1981': ['es', 'xp', 'xsb', 'sm'],
    },
    '924S': {
      '1986': ['es', 'csp', 'fp', 'xp', 'xsb', 'sm'],
      '1987': ['es', 'csp', 'fp', 'xp', 'xsb', 'sm'],
      '1988': ['es', 'csp', 'fp', 'xp', 'xsb', 'sm'],
    },
    '928 (all)': {
      'all': ['cs', 'bsp', 'xp', 'xsa', 'sm'],
    },
    '944 (8v)': {
      'all': ['es', 'csp', 'xp', 'xsa', 'sm'],
    },
    '944 (16v)': {
      'all': ['cs', 'bsp', 'xp', 'xsa', 'sm'],
    },
    '944 (non-turbo)': {
      '1982': ['sts', 'csp', 'fp', 'xp', 'xsa', 'sm'],
      '1983': ['sts', 'csp', 'fp', 'xp', 'xsa', 'sm'],
      '1984': ['sts', 'csp', 'fp', 'xp', 'xsa', 'sm'],
      '1985': ['sts', 'csp', 'fp', 'xp', 'xsa', 'sm'],
      '1986': ['sts', 'csp', 'fp', 'xp', 'xsa', 'sm'],
      '1987': ['sts', 'csp', 'fp', 'xp', 'xsa', 'sm'],
      '1988': ['sts', 'csp', 'fp', 'xp', 'xsa', 'sm'],
      '1989': ['sts', 'csp', 'fp', 'xp', 'xsa', 'sm'],
      '1990': ['sts', 'csp', 'fp', 'xp', 'xsa', 'sm'],
      '1991': ['sts', 'csp', 'fp', 'xp', 'xsa', 'sm'],
    },
    '944 Turbo (all)': {
      '1986': ['cs', 'bsp', 'fp', 'xp', 'xsa', 'sm'],
      '1987': ['cs', 'bsp', 'fp', 'xp', 'xsa', 'sm'],
      '1988': ['cs', 'bsp', 'fp', 'xp', 'xsa', 'sm'],
      '1989': ['cs', 'bsp', 'fp', 'xp', 'xsa', 'sm'],
      '1990': ['cs', 'bsp', 'fp', 'xp', 'xsa', 'sm'],
      '1991': ['cs', 'bsp', 'fp', 'xp', 'xsa', 'sm'],
    },
    'Boxster (non-S)': {
      '1996': ['cs', 'str', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1997': ['cs', 'str', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1998': ['cs', 'str', 'ssr', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '1999': ['cs', 'str', 'ssr', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '2000': ['cs', 'str', 'ssr', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '2001': ['cs', 'str', 'ssr', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '2002': ['cs', 'str', 'ssr', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '2003': ['cs', 'str', 'ssr', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '2004': ['cs', 'str', 'ssr', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '2005': ['bs', 'str', 'ssr', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2006': ['bs', 'str', 'ssr', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2007': ['bs', 'str', 'ssr', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2008': ['bs', 'str', 'ssr', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2009': ['bs', 'stu', 'ssr', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2010': ['bs', 'stu', 'ssr', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2011': ['bs', 'stu', 'ssr', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2012': ['bs', 'stu', 'ssr', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2013': ['bs', 'stu', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '2014': ['bs', 'stu', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '2015': ['bs', 'stu', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '2016': ['bs', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '2017': ['as', 'sst', 'ssr', 'xp', 'xsa', 'ssm'],
      '2018': ['as', 'sst', 'ssr', 'xp', 'xsa', 'ssm'],
      '2019': ['as', 'sst', 'ssr', 'xp', 'xsa', 'ssm'],
      '2020': ['as', 'sst', 'xp', 'xsa', 'ssm'],
      '2021': ['as', 'sst', 'xp', 'xsa', 'ssm'],
      '2022': ['as', 'sst', 'xp', 'xsa', 'ssm'],
    },
    'Boxster GTS': {
      '2015': ['as', 'sst', 'xp', 'xsa', 'ssm'],
      '2016': ['as', 'sst', 'xp', 'xsa', 'ssm'],
      '2017': ['ss', 'xp', 'xsa', 'ssm'],
      '2018': ['ss', 'xp', 'xsa', 'ssm'],
      '2019': ['ss', 'xp', 'xsa', 'ssm'],
      '2020': ['ss', 'xp', 'xsa', 'ssm'],
      '2021': ['ss', 'xp', 'xsa', 'ssm'],
      '2022': ['ss', 'xp', 'xsa', 'ssm'],
    },
    'Boxster S': {
      '2000': ['cs', 'str', 'ssr', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '2001': ['cs', 'str', 'ssr', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '2002': ['cs', 'str', 'ssr', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '2003': ['cs', 'str', 'ssr', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '2004': ['cs', 'str', 'ssr', 'bsp', 'fp', 'xp', 'xsa', 'ssm'],
      '2005': ['bs', 'stu', 'ssr', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2006': ['bs', 'stu', 'ssr', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2007': ['bs', 'stu', 'ssr', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2008': ['bs', 'stu', 'ssr', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2009': ['as', 'stu', 'ssr', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2010': ['as', 'stu', 'ssr', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2011': ['as', 'stu', 'ssr', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2012': ['as', 'stu', 'ssr', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2013': ['as', 'sst', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '2014': ['as', 'sst', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '2015': ['as', 'sst', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '2016': ['as', 'sst', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '2017': ['ss', 'ssr', 'xp', 'xsa', 'ssm'],
      '2018': ['ss', 'ssr', 'xp', 'xsa', 'ssm'],
      '2019': ['ss', 'ssr', 'xp', 'xsa', 'ssm'],
      '2020': ['ss', 'xp', 'xsa', 'ssm'],
      '2021': ['ss', 'xp', 'xsa', 'ssm'],
      '2022': ['ss', 'xp', 'xsa', 'ssm'],
    },
    'Boxster Spyder': {
      '2011': ['ss', 'ssr', 'xp', 'xsa', 'ssm'],
      '2012': ['ss', 'ssr', 'xp', 'xsa', 'ssm'],
      '2013': ['ss', 'ssr', 'xp', 'xsa', 'ssm'],
      '2016': ['ss', 'ssr', 'xp', 'xsa', 'ssm'],
    },
    'Carrera 2 & Carrera 4 (964)': {
      '1989': ['cs', 'xp', 'xsa', 'ssm'],
      '1990': ['cs', 'xp', 'xsa', 'ssm'],
      '1991': ['cs', 'xp', 'xsa', 'ssm'],
      '1992': ['cs', 'xp', 'xsa', 'ssm'],
      '1993': ['cs', 'xp', 'xsa', 'ssm'],
      '1994': ['cs', 'xp', 'xsa', 'ssm'],
    },
    'Carrera (4-cyl)': {
      'all': ['csp', 'xp', 'xsa', 'ssm'],
    },
    'Cayman (non-S)': {
      '2006': ['bs', 'ssr', 'str', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2007': ['bs', 'ssr', 'str', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2008': ['bs', 'ssr', 'str', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2009': ['bs', 'ssr', 'stu', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2010': ['bs', 'ssr', 'stu', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2011': ['bs', 'ssr', 'stu', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2012': ['bs', 'ssr', 'stu', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2013': ['bs', 'ssr', 'stu', 'asp', 'xp', 'xsa', 'ssm'],
      '2014': ['bs', 'ssr', 'stu', 'asp', 'xp', 'xsa', 'ssm'],
      '2015': ['bs', 'ssr', 'stu', 'asp', 'xp', 'xsa', 'ssm'],
      '2016': ['bs', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '2017': ['as', 'sst', 'ssr', 'xp', 'xsa', 'ssm'],
      '2018': ['as', 'sst', 'ssr', 'xp', 'xsa', 'ssm'],
      '2019': ['as', 'sst', 'ssr', 'xp', 'xsa', 'ssm'],
      '2020': ['as', 'sst', 'xp', 'xsa', 'ssm'],
      '2021': ['as', 'sst', 'xp', 'xsa', 'ssm'],
      '2022': ['as', 'sst', 'xp', 'xsa', 'ssm'],
    },
    'Cayman GT4 (Excluding RS & Clubsport)': {
      '2016': ['ss', 'ssp', 'asp', 'xp', 'xsa', 'ssm'],
      '2020': ['ss', 'xp', 'xsa', 'ssm'],
      '2021': ['ss', 'xp', 'xsa', 'ssm'],
      '2022': ['ss', 'xp', 'xsa', 'ssm'],
    },
    'Cayman GTS & GTS 4.0 & Spyder': {
      '2015': ['as', 'sst', 'asp', 'xp', 'xsa', 'ssm'],
      '2016': ['as', 'sst', 'asp', 'xp', 'xsa', 'ssm'],
      '2017': ['ss', 'asp', 'xp', 'xsa', 'ssm'],
      '2018': ['ss', 'asp', 'xp', 'xsa', 'ssm'],
      '2019': ['ss', 'asp', 'xp', 'xsa', 'ssm'],
      '2020': ['ss', 'asp', 'xp', 'xsa', 'ssm'],
      '2021': ['ss', 'asp', 'xp', 'xsa', 'ssm'],
      '2022': ['ss', 'asp', 'xp', 'xsa', 'ssm'],
    },
    'Cayman R': {
      '2012': ['ss', 'asp', 'fp', 'xp', 'xsa', 'sm'],
    },
    'Cayman S': {
      '2006': ['bs', 'ssr', 'stu', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2007': ['bs', 'ssr', 'stu', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2008': ['bs', 'ssr', 'stu', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2009': ['as', 'ssr', 'stu', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2010': ['as', 'ssr', 'stu', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2011': ['as', 'ssr', 'stu', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2012': ['as', 'ssr', 'stu', 'asp', 'fp', 'xp', 'xsa', 'ssm'],
      '2013': ['as', 'sst', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '2014': ['as', 'sst', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '2015': ['as', 'sst', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '2016': ['as', 'sst', 'ssr', 'asp', 'xp', 'xsa', 'ssm'],
      '2017': ['ss', 'xp', 'xsa', 'ssm'],
      '2018': ['ss', 'xp', 'xsa', 'ssm'],
      '2019': ['ss', 'xp', 'xsa', 'ssm'],
      '2020': ['ss', 'xp', 'xsa', 'ssm'],
      '2021': ['ss', 'xp', 'xsa', 'ssm'],
    },
    'Macan (all)': {
      '2015': ['bs', 'xp', 'xsa', 'sm'],
      '2016': ['bs', 'xp', 'xsa', 'sm'],
      '2017': ['bs', 'xp', 'xsa', 'sm'],
      '2018': ['bs', 'xp', 'xsa', 'sm'],
      '2019': ['bs', 'xp', 'xsa', 'sm'],
      '2020': ['bs', 'xp', 'xsa', 'sm'],
    },
    'Panamera': {
      '2010': ['fs', 'xp', 'xsa', 'sm'],
      '2011': ['fs', 'xp', 'xsa', 'sm'],
      '2012': ['fs', 'xp', 'xsa', 'sm'],
      '2013': ['fs', 'xp', 'xsa', 'sm'],
      '2014': ['fs', 'xp', 'xsa', 'sm'],
      '2015': ['fs', 'xp', 'xsa', 'sm'],
      '2016': ['fs', 'xp', 'xsa', 'sm'],
      '2017': ['fs', 'xp', 'xsa', 'sm'],
      '2018': ['fs', 'xp', 'xsa', 'sm'],
      '2019': ['fs', 'xp', 'xsa', 'sm'],
      '2020': ['fs', 'xp', 'xsa', 'sm'],
      '2021': ['fs', 'xp', 'xsa', 'sm'],
      '2022': ['fs', 'xp', 'xsa', 'sm'],
    },
    'Taycan': {
      '2020': ['ss', 'evx'],
      '2021': ['ss', 'evx'],
      '2022': ['ss', 'evx'],
    },
    'all': {
      'all': ['ssm', 'xp', 'xsa', 'sm'],
    },
  },
  'Renault': {
    '15': {
      'all': ['fsp', 'xp', 'xsb', 'sm', 'smf'],
    },
    '16': {
      'all': ['fsp', 'xp', 'xsb', 'sm', 'smf'],
    },
    '17': {
      'all': ['fsp', 'xp', 'xsb', 'sm', 'smf'],
    },
    '17 Gordini': {
      'all': ['fsp', 'xp', 'xsb', 'sm', 'smf'],
    },
    '18i': {
      'all': ['fsp', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Alliance, GTA & Encore': {
      'all': ['fsp', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Alliance/Encore': {
      '1984': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1985': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1986': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1987': ['ep', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Fuego (non-turbo)': {
      'all': ['fsp', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Fuego Turbo': {
      'all': ['dsp', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Not Otherwise Classified': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'R5 Turbo': {
      'all': ['dsp', 'xp', 'xsb', 'sm', 'smf'],
    },
    'R9 & R11': {
      '1982': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1983': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1984': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1985': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1986': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1987': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1988': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1989': ['ep', 'xp', 'xsb', 'sm', 'smf'],
    },
    'R17 Gordini': {
      '1971': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1972': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1973': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1974': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1975': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1976': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1977': ['ep', 'xp', 'xsb', 'sm', 'smf'],
    },
    'R-5 (Not Otherwise Classified) & LeCar': {
      '1978': ['fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1979': ['fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1980': ['fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1981': ['fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1982': ['fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1983': ['fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1984': ['fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1985': ['fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1986': ['fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1987': ['fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1988': ['fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1989': ['fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1990': ['fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1991': ['fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1992': ['fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1993': ['fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1994': ['fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1995': ['fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1996': ['fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Sedan (FWD,Not Otherwise Classified)': {
      'all': ['ep', 'xp', 'xsa', 'sm'],
    },
  },
  'Saab': {
    '93': {
      'all': ['ep', 'xp', 'xsa', 'sm', 'smf'],
    },
    '99': {
      '1968': ['fp', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1969': ['fp', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1970': ['fp', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1971': ['fp', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1972': ['fp', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1973': ['fp', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1974': ['fp', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1975': ['fp', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1976': ['fp', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1977': ['fp', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1978': ['fp', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1979': ['fp', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1980': ['fp', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1981': ['fp', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1982': ['fp', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1983': ['fp', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1984': ['fp', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    '900': {
      '1979': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1980': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1981': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1982': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1983': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1984': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1985': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1986': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1987': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1988': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1989': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1990': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1991': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1992': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1993': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1994': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1995': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1996': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1997': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1998': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    '9-2X': {
      '2005': ['sth', 'xp', 'xsa', 'sm', 'smf'],
      '2006': ['sth', 'xp', 'xsa', 'sm', 'smf'],
    },
    '9-2X Aero (2.0L Turbo)': {
      '2005': ['ds', 'xp', 'xsa', 'sm', 'smf'],
      '2006': ['ds', 'xp', 'xsa', 'sm', 'smf'],
    },
    '9-2X Linear (2.5L)': {
      'all': ['gs', 'xp', 'xsa', 'sm', 'smf'],
    },
    '9-3 (non-Viggen)': {
      '1998': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '1999': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2000': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2001': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2002': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2003': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2004': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2005': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2006': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2007': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2008': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2009': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2010': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2011': ['stx', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['stx', 'xp', 'xsa', 'sm', 'smf'],
    },
    '96 (non-turbo, FWD)': {
      '1960': ['ep', 'xp', 'xsb', 'sm'],
      '1961': ['ep', 'xp', 'xsb', 'sm'],
      '1962': ['ep', 'xp', 'xsb', 'sm'],
      '1963': ['ep', 'xp', 'xsb', 'sm'],
      '1964': ['ep', 'xp', 'xsb', 'sm'],
      '1965': ['ep', 'xp', 'xsb', 'sm'],
      '1966': ['ep', 'xp', 'xsb', 'sm'],
      '1967': ['ep', 'xp', 'xsb', 'sm'],
      '1968': ['ep', 'xp', 'xsb', 'sm'],
      '1969': ['ep', 'xp', 'xsb', 'sm'],
      '1970': ['ep', 'xp', 'xsb', 'sm'],
      '1971': ['ep', 'xp', 'xsb', 'sm'],
      '1972': ['ep', 'xp', 'xsb', 'sm'],
      '1973': ['ep', 'xp', 'xsb', 'sm'],
      '1974': ['ep', 'xp', 'xsb', 'sm'],
      '1975': ['ep', 'xp', 'xsb', 'sm'],
      '1976': ['ep', 'xp', 'xsb', 'sm'],
      '1977': ['ep', 'xp', 'xsb', 'sm'],
      '1978': ['ep', 'xp', 'xsb', 'sm'],
      '1979': ['ep', 'xp', 'xsb', 'sm'],
      '1980': ['ep', 'xp', 'xsb', 'sm'],
    },
    '96 Sedan (843 cc, 2-stroke)': {
      'all': ['ep', 'xp', 'xsb', 'sm', 'smf'],
    },
    '99 (non-turbo, FWD)': {
      '1969': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1970': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1971': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1972': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1973': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1974': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1975': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1976': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1977': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1978': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1979': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1980': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1981': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1982': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1983': ['ep', 'xp', 'xsb', 'sm', 'smf'],
      '1984': ['ep', 'xp', 'xsb', 'sm', 'smf'],
    },
    '99 EMS': {
      'all': ['dsp', 'xp', 'xsb', 'sm', 'smf'],
    },
    '99 Turbo': {
      'all': ['dsp', 'gs', 'xp', 'xsa', 'sm', 'smf'],
    },
    '900 (V6)': {
      '1994': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '1995': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '1996': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '1997': ['hs', 'xp', 'xsa', 'sm', 'smf'],
    },
    '900 (non-turbo, FWD)': {
      '1979': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1980': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1981': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1982': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1983': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1984': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1985': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1986': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1987': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1988': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1989': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1990': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1991': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1992': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1993': ['ep', 'xp', 'xsa', 'sm', 'smf'],
      '1994': ['ep', 'xp', 'xsa', 'sm', 'smf'],
    },
    '900 SPG Turbo 16v': {
      '1979': ['fp', 'xp', 'xsa', 'sm', 'smf'],
      '1980': ['fp', 'xp', 'xsa', 'sm', 'smf'],
      '1981': ['fp', 'xp', 'xsa', 'sm', 'smf'],
      '1982': ['fp', 'xp', 'xsa', 'sm', 'smf'],
      '1983': ['fp', 'xp', 'xsa', 'sm', 'smf'],
      '1984': ['fp', 'xp', 'xsa', 'sm', 'smf'],
      '1985': ['fp', 'xp', 'xsa', 'sm', 'smf'],
      '1986': ['fp', 'xp', 'xsa', 'sm', 'smf'],
      '1987': ['fp', 'xp', 'xsa', 'sm', 'smf'],
      '1988': ['fp', 'xp', 'xsa', 'sm', 'smf'],
    },
    '900 Turbo': {
      '1979': ['dsp', 'fp', 'gs', 'xp', 'xsa', 'sm', 'smf'],
      '1980': ['dsp', 'fp', 'gs', 'xp', 'xsa', 'sm', 'smf'],
      '1981': ['dsp', 'fp', 'gs', 'xp', 'xsa', 'sm', 'smf'],
      '1982': ['dsp', 'fp', 'gs', 'xp', 'xsa', 'sm', 'smf'],
      '1983': ['dsp', 'fp', 'gs', 'xp', 'xsa', 'sm', 'smf'],
      '1984': ['dsp', 'fp', 'gs', 'xp', 'xsa', 'sm', 'smf'],
      '1985': ['dsp', 'fp', 'gs', 'xp', 'xsa', 'sm', 'smf'],
      '1986': ['dsp', 'fp', 'gs', 'xp', 'xsa', 'sm', 'smf'],
      '1987': ['dsp', 'fp', 'gs', 'xp', 'xsa', 'sm', 'smf'],
      '1988': ['dsp', 'fp', 'gs', 'xp', 'xsa', 'sm', 'smf'],
      '1989': ['dsp', 'fp', 'gs', 'xp', 'xsa', 'sm', 'smf'],
      '1990': ['dsp', 'fp', 'gs', 'xp', 'xsa', 'sm', 'smf'],
      '1991': ['dsp', 'fp', 'gs', 'xp', 'xsa', 'sm', 'smf'],
      '1992': ['dsp', 'fp', 'gs', 'xp', 'xsa', 'sm', 'smf'],
      '1993': ['dsp', 'fp', 'gs', 'xp', 'xsa', 'sm', 'smf'],
      '1994': ['dsp', 'fp', 'gs', 'xp', 'xsa', 'sm', 'smf'],
      '1995': ['dsp', 'fp', 'gs', 'xp', 'xsa', 'sm', 'smf'],
      '1996': ['dsp', 'fp', 'gs', 'xp', 'xsa', 'sm', 'smf'],
      '1997': ['dsp', 'fp', 'gs', 'xp', 'xsa', 'sm', 'smf'],
      '1998': ['dsp', 'fp', 'gs', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Not Otherwise Classified': {
      'all': ['hs', 'xp', 'xsa', 'sm', 'smf'],
    },
    'SPG (16v & Turbo)': {
      'all': ['esp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Sedan (non-turbo, FWD, Not Otherwise Classified)': {
      'all': ['ep', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Sonett (1498 & 1699 cc)': {
      'all': ['ep', 'xp', 'xsb', 'ssm', 'smf'],
    },
    'Sonnet': {
      '1968': ['fsp', 'xp', 'xsa', 'sm', 'smf'],
      '1969': ['fsp', 'xp', 'xsa', 'sm', 'smf'],
      '1970': ['fsp', 'xp', 'xsa', 'sm', 'smf'],
      '1971': ['fsp', 'xp', 'xsa', 'sm', 'smf'],
      '1972': ['fsp', 'xp', 'xsa', 'sm', 'smf'],
      '1973': ['fsp', 'xp', 'xsa', 'sm', 'smf'],
      '1974': ['fsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Turbo models (Not Otherwise Classified)': {
      'all': ['gs', 'xp', 'xsa', 'sm', 'smf'],
    },
  },
  'Saleen': {
    'Mustang 302 & 351 (non-super-charged)': {
      '1984': ['esp', 'camt', 'sm', 'xp', 'xsa'],
      '1985': ['esp', 'camt', 'sm', 'xp', 'xsa'],
      '1986': ['esp', 'camt', 'sm', 'xp', 'xsa'],
      '1987': ['esp', 'camt', 'sm', 'xp', 'xsa'],
      '1988': ['esp', 'camt', 'sm', 'xp', 'xsa'],
      '1989': ['esp', 'camt', 'sm', 'xp', 'xsa'],
      '1990': ['esp', 'camt', 'sm', 'xp', 'xsa'],
      '1991': ['esp', 'camt', 'sm', 'xp', 'xsa'],
      '1992': ['esp', 'camt', 'sm', 'xp', 'xsa'],
      '1993': ['esp', 'camt', 'sm', 'xp', 'xsa'],
    },
    'Mustang (w/o IRS or forced induction)': {
      '1979': ['bs', 'cp', 'sm', 'camt', 'xp', 'xsa'],
      '1980': ['bs', 'cp', 'sm', 'camt', 'xp', 'xsa'],
      '1981': ['bs', 'cp', 'sm', 'camt', 'xp', 'xsa'],
      '1982': ['bs', 'cp', 'sm', 'camt', 'xp', 'xsa'],
      '1983': ['bs', 'cp', 'sm', 'camt', 'xp', 'xsa'],
      '1984': ['bs', 'cp', 'sm', 'camt', 'xp', 'xsa'],
      '1985': ['bs', 'cp', 'sm', 'camt', 'xp', 'xsa'],
      '1986': ['bs', 'cp', 'sm', 'camt', 'xp', 'xsa'],
      '1987': ['bs', 'cp', 'sm', 'camt', 'xp', 'xsa'],
      '1988': ['bs', 'cp', 'sm', 'camt', 'xp', 'xsa'],
      '1989': ['bs', 'cp', 'sm', 'camt', 'xp', 'xsa'],
      '1990': ['bs', 'cp', 'sm', 'camt', 'xp', 'xsa'],
      '1991': ['bs', 'cp', 'sm', 'camt', 'xp', 'xsa'],
      '1992': ['bs', 'cp', 'sm', 'camt', 'xp', 'xsa'],
      '1993': ['bs', 'cp', 'sm', 'camt', 'xp', 'xsa'],
    },
    'Mustang S281E & Mustang (Not Otherwise Classified)': {
      'all': ['bsp', 'sm', 'xp', 'xsa', 'camt'],
    },
  },
  'Saturn': {
    '8v engine': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Astra': {
      '2008': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2009': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
    },
    'DOHC model (Not Otherwise Classified)': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'ION (non-supercharged)': {
      'all': ['hs', 'dsp', 'ep', 'sts', 'xp', 'xsa', 'sm', 'smf'],
    },
    'ION Redline (Supercharged)': {
      'all': ['gs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
    },
    'L series (all)': {
      'all': ['hs', 'ep', 'xp', 'xsa', 'sm'],
    },
    'SC': {
      'all': ['sts', 'fsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
    },
    'SL': {
      'all': ['sts', 'fsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
    },
    'SW': {
      'all': ['sts', 'fsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Sky (non-turbo)': {
      '2007': ['cs', 'stx', 'csp', 'dp', 'cams', 'xp', 'xsa', 'ssm'],
      '2008': ['cs', 'stx', 'csp', 'dp', 'cams', 'xp', 'xsa', 'ssm'],
      '2009': ['cs', 'stx', 'csp', 'dp', 'cams', 'xp', 'xsa', 'ssm'],
      '2010': ['cs', 'stx', 'csp', 'dp', 'cams', 'xp', 'xsa', 'ssm'],
    },
    'Sky Redline (Turbo)': {
      '2007': ['as', 'asp', 'fp', 'cams', 'xp', 'xsa', 'ssm'],
      '2008': ['as', 'asp', 'fp', 'cams', 'xp', 'xsa', 'ssm'],
      '2009': ['as', 'asp', 'fp', 'cams', 'xp', 'xsa', 'ssm'],
      '2010': ['as', 'asp', 'fp', 'cams', 'xp', 'xsa', 'ssm'],
    },
  },
  'Scion': {
    'FR-S (with TRD suspension; incl. Release Series 1.0 and 2.0)': {
      '2013': ['cs', 'ssc', 'stx', 'csp', 'dp', 'xsa', 'sm'],
      '2014': ['cs', 'ssc', 'stx', 'csp', 'dp', 'xsa', 'sm'],
      '2015': ['cs', 'ssc', 'stx', 'csp', 'dp', 'xsa', 'sm'],
      '2016': ['cs', 'ssc', 'stx', 'csp', 'dp', 'xsa', 'sm'],
    },
    'FR-S (without TRD suspension components)': {
      '2013': ['ds', 'ssc', 'stx', 'csp', 'dp', 'xsa', 'sm'],
      '2014': ['ds', 'ssc', 'stx', 'csp', 'dp', 'xsa', 'sm'],
      '2015': ['ds', 'ssc', 'stx', 'csp', 'dp', 'xsa', 'sm'],
      '2016': ['ds', 'ssc', 'stx', 'csp', 'dp', 'xsa', 'sm'],
    },
    'iA': {
      '2016': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
    },
    'iM': {
      '2016': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
    },
    'iQ CVT': {
      'all': ['sts', 'xp', 'xsa', 'sm', 'smf'],
    },
    'tC': {
      '2005': ['sts', 'fsp', 'hs', 'xp', 'xsa', 'sm', 'smf'],
      '2006': ['sts', 'fsp', 'hs', 'xp', 'xsa', 'sm', 'smf'],
      '2007': ['sts', 'fsp', 'hs', 'xp', 'xsa', 'sm', 'smf'],
      '2008': ['sts', 'fsp', 'hs', 'xp', 'xsa', 'sm', 'smf'],
      '2009': ['sts', 'fsp', 'hs', 'xp', 'xsa', 'sm', 'smf'],
      '2010': ['sts', 'fsp', 'hs', 'xp', 'xsa', 'sm', 'smf'],
      '2011': ['sts', 'fsp', 'hs', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['sts', 'fsp', 'hs', 'xp', 'xsa', 'sm', 'smf'],
      '2013': ['sts', 'fsp', 'hs', 'xp', 'xsa', 'sm', 'smf'],
      '2014': ['sts', 'fsp', 'hs', 'xp', 'xsa', 'sm', 'smf'],
      '2015': ['sts', 'fsp', 'hs', 'xp', 'xsa', 'sm', 'smf'],
      '2016': ['sts', 'fsp', 'hs', 'xp', 'xsa', 'sm', 'smf'],
    },
    'xA': {
      '2004': ['hs', 'sts', 'xp', 'xsb', 'sm', 'smf'],
      '2005': ['hs', 'sts', 'xp', 'xsb', 'sm', 'smf'],
      '2006': ['hs', 'sts', 'xp', 'xsb', 'sm', 'smf'],
    },
    'xB': {
      '2008': ['hs', 'sts', 'xp', 'xsb', 'sm', 'smf'],
      '2009': ['hs', 'sts', 'xp', 'xsb', 'sm', 'smf'],
      '2010': ['hs', 'sts', 'xp', 'xsb', 'sm', 'smf'],
      '2011': ['hs', 'sts', 'xp', 'xsb', 'sm', 'smf'],
      '2012': ['hs', 'sts', 'xp', 'xsb', 'sm', 'smf'],
      '2013': ['hs', 'sts', 'xp', 'xsb', 'sm', 'smf'],
      '2014': ['hs', 'sts', 'xp', 'xsb', 'sm', 'smf'],
      '2015': ['hs', 'sts', 'xp', 'xsb', 'sm', 'smf'],
    },
    'xD': {
      '2008': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2009': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2010': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2011': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['sts', 'xp', 'xsa', 'sm', 'smf'],
      '2013': ['sts', 'xp', 'xsa', 'sm', 'smf'],
    },
  },
  'Shelby': {
    'Charger (non-turbo)': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Charger turbo': {
      'all': ['dsp', 'xp', 'xsa', 'sm'],
    },
    'Cobra': {
      '1963': ['bs', 'xp', 'cams', 'xsb', 'ssm'],
      '1964': ['bs', 'xp', 'cams', 'xsb', 'ssm'],
      '1965': ['bs', 'xp', 'cams', 'xsb', 'ssm'],
      '1966': ['bs', 'xp', 'cams', 'xsb', 'ssm'],
      '1967': ['bs', 'xp', 'cams', 'xsb', 'ssm'],
    },
    'Cobra 289': {
      'all': ['asp', 'bs', 'xp', 'cams', 'xsb', 'ssm'],
    },
    'GT350': {
      '1965': ['fs', 'esp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1966': ['fs', 'esp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1967': ['fs', 'esp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1968': ['fs', 'esp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1969': ['fs', 'esp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1970': ['fs', 'esp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
    },
    'GT500': {
      '1965': ['cp', 'camt', 'xp', 'xsa', 'sm'],
      '1966': ['cp', 'camt', 'xp', 'xsa', 'sm'],
      '1967': ['fs', 'esp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1968': ['fs', 'esp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1969': ['fs', 'esp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
      '1970': ['fs', 'esp', 'cp', 'camt', 'xp', 'xsa', 'sm'],
    },
  },
  'Subaru': {
    'BRZ': {
      '2013': ['ds', 'stx', 'csp', 'dsp', 'ssc', 'dp', 'xsa', 'sm'],
      '2014': ['ds', 'stx', 'csp', 'dsp', 'ssc', 'dp', 'xsa', 'sm'],
      '2015': ['ds', 'ssc', 'stx', 'dsp', 'dp', 'xsa', 'sm'],
      '2016': ['ds', 'ssc', 'stx', 'dsp', 'dp', 'xsa', 'sm'],
      '2017': ['ds', 'stx', 'dsp', 'dp', 'xsa', 'sm'],
      '2018': ['ds', 'stx', 'dsp', 'dp', 'xsa', 'sm'],
      '2019': ['ds', 'stx', 'dp', 'xsa', 'sm'],
      '2020': ['ds', 'stx', 'dp', 'xsa', 'sm'],
      '2022': ['ds', 'stx', 'dp', 'xsa', 'sm'],
    },
    'BRZ tS': {
      '2018': ['cs', 'stx', 'dsp', 'dp', 'xsa', 'sm'],
    },
    'Forester (non-turbo)': {
      'all': ['fsp', 'xp', 'xsa', 'sm'],
    },
    'Forester XT': {
      'all': ['sth', 'xp', 'xsa', 'sm'],
    },
    'GL Coupe (non-turbo, FWD)': {
      '1980': ['ep', 'xp', 'xsb', 'sm'],
      '1981': ['ep', 'xp', 'xsb', 'sm'],
      '1982': ['ep', 'xp', 'xsb', 'sm'],
      '1983': ['ep', 'xp', 'xsb', 'sm'],
      '1984': ['ep', 'xp', 'xsb', 'sm'],
      '1985': ['ep', 'xp', 'xsb', 'sm'],
      '1986': ['ep', 'xp', 'xsb', 'sm'],
      '1987': ['ep', 'xp', 'xsb', 'sm'],
      '1988': ['ep', 'xp', 'xsb', 'sm'],
      '1989': ['ep', 'xp', 'xsb', 'sm'],
    },
    'Impreza': {
      'all': ['dsp', 'xp', 'xsa', 'sm'],
    },
    'Impreza 2.0i': {
      '2012': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm'],
      '2013': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm'],
      '2014': ['hs', 'sts', 'xp', 'xsa', 'sm'],
      '2015': ['hs', 'sts', 'xp', 'xsa', 'sm'],
      '2016': ['hs', 'sts', 'xp', 'xsa', 'sm'],
    },
    'Impreza 2.5 (non-turbo)': {
      'all': ['gs', 'xp', 'xsa', 'sm'],
    },
    'Impreza 2.5 RS': {
      '1998': ['sts', 'xp', 'xsa', 'sm'],
      '1999': ['sts', 'xp', 'xsa', 'sm'],
      '2000': ['sts', 'xp', 'xsa', 'sm'],
      '2001': ['sts', 'xp', 'xsa', 'sm'],
    },
    'Impreza (1.8L, FWD)': {
      '1993': ['sts', 'xp', 'xsa', 'sm'],
      '1994': ['sts', 'xp', 'xsa', 'sm'],
      '1995': ['sts', 'xp', 'xsa', 'sm'],
      '1996': ['sts', 'xp', 'xsa', 'sm'],
    },
    'Impreza (2.5L) (Not Otherwise Classified)': {
      'all': ['dsp', 'xp', 'xsa', 'sm'],
    },
    'Impreza (AWD)': {
      'all': ['fp', 'xp', 'xsa', 'sm'],
    },
    'Impreza (Not Otherwise Classified)': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Impreza WRX (incl. STI)': {
      '2002': ['asp', 'xp', 'xsa', 'sm'],
      '2003': ['asp', 'xp', 'xsa', 'sm'],
      '2004': ['asp', 'xp', 'xsa', 'sm'],
      '2005': ['asp', 'xp', 'xsa', 'sm'],
      '2006': ['asp', 'xp', 'xsa', 'sm'],
      '2007': ['asp', 'xp', 'xsa', 'sm'],
      '2008': ['asp', 'xp', 'xsa', 'sm'],
      '2009': ['asp', 'xp', 'xsa', 'sm'],
      '2010': ['asp', 'xp', 'xsa', 'sm'],
      '2011': ['asp', 'xp', 'xsa', 'sm'],
      '2012': ['asp', 'xp', 'xsa', 'sm'],
      '2013': ['asp', 'xp', 'xsa', 'sm'],
      '2014': ['asp', 'xp', 'xsa', 'sm'],
    },
    'Impreza WRX (incl. STI; excl. Type RA & 2019 STI)': {
      '2015': ['asp', 'xp', 'xsa', 'sm'],
      '2016': ['asp', 'xp', 'xsa', 'sm'],
      '2017': ['asp', 'xp', 'xsa', 'sm'],
      '2018': ['asp', 'xp', 'xsa', 'sm'],
      '2019': ['asp', 'xp', 'xsa', 'sm'],
    },
    'Impreza WRX STI': {
      'all': ['stu', 'asp', 'xp', 'xsa', 'sm'],
    },
    'Legacy': {
      '1990': ['sts', 'fsp', 'xp', 'xsa', 'sm'],
      '1991': ['sts', 'fsp', 'xp', 'xsa', 'sm'],
      '1992': ['sts', 'fsp', 'xp', 'xsa', 'sm'],
      '1993': ['sts', 'fsp', 'xp', 'xsa', 'sm'],
      '1994': ['sts', 'fsp', 'xp', 'xsa', 'sm'],
    },
    'Legacy 2.5GT': {
      '2005': ['gs', 'sth', 'asp', 'esp', 'xp', 'xsa', 'sm'],
      '2006': ['gs', 'sth', 'asp', 'esp', 'xp', 'xsa', 'sm'],
      '2007': ['gs', 'sth', 'asp', 'esp', 'xp', 'xsa', 'sm'],
      '2008': ['gs', 'sth', 'asp', 'esp', 'xp', 'xsa', 'sm'],
      '2009': ['gs', 'sth', 'asp', 'esp', 'xp', 'xsa', 'sm'],
      '2010': ['gs', 'sth', 'asp', 'esp', 'xp', 'xsa', 'sm'],
      '2011': ['gs', 'sth', 'asp', 'esp', 'xp', 'xsa', 'sm'],
      '2012': ['gs', 'sth', 'asp', 'esp', 'xp', 'xsa', 'sm'],
    },
    'Legacy (6-cyl, all)': {
      '1998': ['dsp', 'xp', 'xsa', 'sm'],
      '1999': ['dsp', 'xp', 'xsa', 'sm'],
      '2000': ['dsp', 'xp', 'xsa', 'sm'],
      '2001': ['dsp', 'xp', 'xsa', 'sm'],
      '2002': ['dsp', 'xp', 'xsa', 'sm'],
      '2003': ['dsp', 'xp', 'xsa', 'sm'],
      '2004': ['dsp', 'xp', 'xsa', 'sm'],
      '2005': ['dsp', 'xp', 'xsa', 'sm'],
      '2006': ['dsp', 'xp', 'xsa', 'sm'],
      '2007': ['dsp', 'xp', 'xsa', 'sm'],
      '2008': ['dsp', 'xp', 'xsa', 'sm'],
      '2009': ['dsp', 'xp', 'xsa', 'sm'],
      '2010': ['dsp', 'xp', 'xsa', 'sm'],
      '2011': ['dsp', 'xp', 'xsa', 'sm'],
      '2012': ['dsp', 'xp', 'xsa', 'sm'],
      '2013': ['dsp', 'xp', 'xsa', 'sm'],
    },
    'Legacy (Not Otherwise Classified)': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Legacy GT': {
      '2005': ['sth', 'fsp', 'xp', 'xsa', 'sm'],
      '2006': ['sth', 'fsp', 'xp', 'xsa', 'sm'],
      '2007': ['sth', 'fsp', 'xp', 'xsa', 'sm'],
      '2008': ['sth', 'fsp', 'xp', 'xsa', 'sm'],
    },
    'Not Otherwise Classified': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Outback (6-cyl, all)': {
      '1998': ['dsp', 'xp', 'xsa', 'sm'],
      '1999': ['dsp', 'xp', 'xsa', 'sm'],
      '2000': ['dsp', 'xp', 'xsa', 'sm'],
      '2001': ['dsp', 'xp', 'xsa', 'sm'],
      '2002': ['dsp', 'xp', 'xsa', 'sm'],
      '2003': ['dsp', 'xp', 'xsa', 'sm'],
      '2004': ['dsp', 'xp', 'xsa', 'sm'],
      '2005': ['dsp', 'xp', 'xsa', 'sm'],
      '2006': ['dsp', 'xp', 'xsa', 'sm'],
      '2007': ['dsp', 'xp', 'xsa', 'sm'],
      '2008': ['dsp', 'xp', 'xsa', 'sm'],
      '2009': ['dsp', 'xp', 'xsa', 'sm'],
      '2010': ['dsp', 'xp', 'xsa', 'sm'],
      '2011': ['dsp', 'xp', 'xsa', 'sm'],
      '2012': ['dsp', 'xp', 'xsa', 'sm'],
      '2013': ['dsp', 'xp', 'xsa', 'sm'],
    },
    'STI (excl. S209)': {
      '2019': ['ds', 'xp', 'xsa', 'sm'],
      '2020': ['ds', 'xp', 'xsa', 'sm'],
      '2021': ['ds', 'xp', 'xsa', 'sm'],
    },
    'STI Type RA': {
      '2018': ['bs', 'xp', 'xsa', 'sm'],
    },
    'SVX': {
      '1992': ['hs', 'fp', 'xp', 'xsa', 'sm'],
      '1993': ['hs', 'fp', 'xp', 'xsa', 'sm'],
      '1994': ['hs', 'fp', 'xp', 'xsa', 'sm'],
      '1995': ['hs', 'fp', 'xp', 'xsa', 'sm'],
      '1996': ['hs', 'fp', 'xp', 'xsa', 'sm'],
      '1997': ['hs', 'fp', 'xp', 'xsa', 'sm'],
    },
    'Sedan (N/A, FWD, Not Otherwise Classified)': {
      'all': ['ep', 'xp', 'xsa', 'sm'],
    },
    'Sedan Turbo (Not Otherwise Classified)': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Sedan/Coupe (Turbo, Not Otherwise Classified)': {
      'all': ['fp', 'xp', 'xsa', 'sm'],
    },
    'Turbo 4WD (all, Not Otherwise Classified)': {
      'all': ['fsp', 'xp', 'xsa', 'sm'],
    },
    'WRX (non-STI)': {
      '2002': ['gs', 'sth', 'fp', 'xp', 'xsa', 'sm'],
      '2003': ['gs', 'sth', 'fp', 'xp', 'xsa', 'sm'],
      '2004': ['gs', 'sth', 'fp', 'xp', 'xsa', 'sm'],
      '2005': ['gs', 'sth', 'fp', 'xp', 'xsa', 'sm'],
      '2006': ['gs', 'sth', 'fp', 'xp', 'xsa', 'sm'],
      '2007': ['gs', 'sth', 'fp', 'xp', 'xsa', 'sm'],
      '2008': ['gs', 'sth', 'fp', 'xp', 'xsa', 'sm'],
      '2009': ['ds', 'sth', 'fp', 'xp', 'xsa', 'sm'],
      '2010': ['ds', 'sth', 'fp', 'xp', 'xsa', 'sm'],
      '2011': ['ds', 'sth', 'fp', 'xp', 'xsa', 'sm'],
      '2012': ['ds', 'sth', 'fp', 'xp', 'xsa', 'sm'],
      '2013': ['ds', 'sth', 'fp', 'xp', 'xsa', 'sm'],
      '2014': ['ds', 'sth', 'fp', 'xp', 'xsa', 'sm'],
      '2015': ['ds', 'sth', 'fp', 'xp', 'xsa', 'sm'],
      '2016': ['ds', 'sth', 'fp', 'xp', 'xsa', 'sm'],
      '2017': ['ds', 'sth', 'fp', 'xp', 'xsa', 'sm'],
      '2018': ['ds', 'sth', 'fp', 'xp', 'xsa', 'sm'],
      '2019': ['ds', 'sth', 'fp', 'xp', 'xsa', 'sm'],
      '2020': ['ds', 'sth', 'fp', 'xp', 'xsa', 'sm'],
      '2021': ['ds', 'sth', 'fp', 'xp', 'xsa', 'sm'],
      '2022': ['ds', 'sth', 'fp', 'xp', 'xsa', 'sm'],
    },
    'WRX STI (including Special Edition)': {
      '2004': ['ds', 'xp', 'xsa', 'sm'],
      '2005': ['ds', 'xp', 'xsa', 'sm'],
      '2006': ['ds', 'xp', 'xsa', 'sm'],
      '2007': ['ds', 'xp', 'xsa', 'sm'],
      '2008': ['ds', 'xp', 'xsa', 'sm'],
      '2009': ['ds', 'xp', 'xsa', 'sm'],
      '2010': ['ds', 'xp', 'xsa', 'sm'],
      '2011': ['ds', 'xp', 'xsa', 'sm'],
      '2012': ['ds', 'xp', 'xsa', 'sm'],
      '2013': ['ds', 'xp', 'xsa', 'sm'],
      '2014': ['ds', 'xp', 'xsa', 'sm'],
      '2015': ['ds', 'xp', 'xsa', 'sm'],
      '2016': ['ds', 'xp', 'xsa', 'sm'],
      '2017': ['ds', 'xp', 'xsa', 'sm'],
      '2018': ['ds', 'xp', 'xsa', 'sm'],
    },
  },
  'Sunbeam': {
    'Alpine': {
      'all': ['hs', 'fsp', 'dp', 'xp', 'xsa', 'ssm'],
    },
    'Tiger': {
      'all': ['es', 'asp', 'xp', 'xsa', 'ssm'],
    },
  },
  'Suzuki': {
    'Aerio': {
      'all': ['fsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Cappuccino': {
      'all': ['xsb', 'dm', 'xp', 'ssm'],
    },
    'Esteem GL': {
      'all': ['hs', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Forenza': {
      'all': ['hs', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Kizashi': {
      '2010': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2011': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2013': ['hs', 'xp', 'xsa', 'sm', 'smf'],
    },
    'SX4 sedan': {
      '2007': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2008': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2009': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2010': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2011': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2013': ['hs', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Swift': {
      '1985': ['hs', 'fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1986': ['hs', 'fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1987': ['hs', 'fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1988': ['hs', 'fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1989': ['hs', 'fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1990': ['hs', 'fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1991': ['hs', 'fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1992': ['hs', 'fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1993': ['hs', 'fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1994': ['hs', 'sts', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1995': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1996': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1997': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1998': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1999': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '2000': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '2001': ['hs', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '2002': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2003': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2004': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2005': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2006': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2007': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2008': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2009': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2010': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2011': ['hs', 'xp', 'xsb', 'sm', 'smf'],
      '2012': ['hs', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Swift Turbo': {
      'all': ['fp', 'xp', 'xsb', 'sm', 'smf'],
    },
  },
  'TVR': {
    '1800': {
      'all': ['es', 'ssp', 'dp', 'xp', 'xsb', 'ssm'],
    },
    '4-cyl': {
      'all': ['es', 'ssp', 'xp', 'xsb', 'ssm'],
    },
    '8-cyl': {
      'all': ['bs', 'ssp', 'xp', 'xsb', 'ssm'],
    },
    'Griffith 200': {
      'all': ['bs', 'ssp', 'xp', 'xsa', 'ssm'],
    },
    'Griffith 400': {
      'all': ['bs', 'ssp', 'xp', 'xsa', 'ssm'],
    },
    'Inline-6': {
      'all': ['es', 'ssp', 'fp', 'xp', 'xsa', 'ssm'],
    },
    'V6': {
      'all': ['bs', 'ssp', 'fp', 'xp', 'xsa', 'ssm'],
    },
    'V12': {
      'all': ['bs', 'xp', 'xsa', 'ssm'],
    },
    'Vixen S2 (1599 cc)': {
      'all': ['es', 'ssp', 'dp', 'xp', 'xsa', 'ssm'],
    },
  },
  'Tesla': {
    'Model 3': {
      '2018': ['ss', 'asp', 'xp', 'xsa', 'sm', 'evx'],
      '2019': ['ss', 'asp', 'xp', 'xsa', 'sm', 'evx'],
      '2020': ['ss', 'asp', 'xp', 'xsa', 'sm', 'evx'],
      '2021': ['ss', 'asp', 'xp', 'xsa', 'sm', 'evx'],
    },
    'Model S': {
      '2012': ['fs', 'xp', 'xsa', 'sm', 'evx'],
      '2013': ['fs', 'xp', 'xsa', 'sm', 'evx'],
      '2014': ['fs', 'xp', 'xsa', 'sm', 'evx'],
    },
    'Model S AWD': {
      '2014': ['ss', 'xp', 'xsa', 'sm', 'evx'],
      '2015': ['ss', 'xp', 'xsa', 'sm', 'evx'],
      '2016': ['ss', 'xp', 'xsa', 'sm', 'evx'],
      '2017': ['ss', 'xp', 'xsa', 'sm', 'evx'],
      '2018': ['ss', 'xp', 'xsa', 'sm', 'evx'],
      '2019': ['ss', 'xp', 'xsa', 'sm', 'evx'],
      '2020': ['ss', 'xp', 'xsa', 'sm', 'evx'],
      '2021': ['ss', 'xp', 'xsa', 'sm', 'evx'],
      '2022': ['ss', 'xp', 'xsa', 'sm', 'evx'],
    },
    'Model X': {
      '2016': ['evx'],
      '2017': ['evx'],
      '2018': ['evx'],
      '2019': ['evx'],
      '2020': ['evx'],
      '2021': ['evx'],
      '2022': ['evx'],
    },
    'Model Y': {
      '2020': ['ss', 'xp', 'xsa', 'sm', 'evx'],
      '2021': ['ss', 'xp', 'xsa', 'sm', 'evx'],
      '2022': ['ss', 'xp', 'xsa', 'sm', 'evx'],
    },
    'Roadster': {
      '2008': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'sm', 'evx'],
      '2009': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'sm', 'evx'],
      '2010': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'sm', 'evx'],
      '2011': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'sm', 'evx'],
      '2012': ['ss', 'ssr', 'ssp', 'xp', 'xsa', 'sm', 'evx'],
      '2013': ['ss', 'ssr', 'xp', 'xsa', 'sm', 'evx'],
    },
  },
  'Toyota': {
    '86 (with TRD Lowering Springs, TRD Sway Bar Kit, and TRD 17-in. Forged Wheel': {
      '2017': ['cs', 'stx', 'dsp', 'dp', 'xsa', 'sm'],
      '2018': ['cs', 'stx', 'dsp', 'dp', 'xsa', 'sm'],
      '2019': ['cs', 'stx', 'dp', 'xsa', 'sm'],
      '2020': ['cs', 'stx', 'dp', 'xsa', 'sm'],
      '2021': ['cs', 'stx', 'dp', 'xsa', 'sm'],
    },
    '86 (without TRD suspension and wheels)': {
      '2017': ['ds', 'stx', 'dsp', 'dp', 'xsa', 'sm'],
      '2018': ['ds', 'stx', 'dsp', 'dp', 'xsa', 'sm'],
      '2019': ['ds', 'stx', 'dp', 'xsa', 'sm'],
      '2020': ['ds', 'stx', 'dp', 'xsa', 'sm'],
    },
    'Camry (4-cyl)': {
      'all': ['hs', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Camry V6': {
      'all': ['hs', 'dsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Celica (all, non-AWD)': {
      '1971': ['hs', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1972': ['hs', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1973': ['hs', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1974': ['hs', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1975': ['hs', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1976': ['hs', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1977': ['hs', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1978': ['hs', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1979': ['hs', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1981': ['hs', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1982': ['hs', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1983': ['hs', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1984': ['hs', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1985': ['hs', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1986': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1987': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1988': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1989': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1991': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1992': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1993': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1994': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1995': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1996': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1997': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1998': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1999': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2000': ['gs', 'sts', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2001': ['gs', 'sts', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2002': ['gs', 'sts', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2003': ['gs', 'sts', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2004': ['gs', 'sts', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2005': ['gs', 'sts', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Celica All-Trac Turbo': {
      'all': ['gs', 'dsp', 'fp', 'xp', 'xsa', 'sm'],
    },
    'Corolla': {
      '1970': ['hs', 'fsp', 'xp', 'xsb', 'sm'],
      '1971': ['hs', 'fsp', 'xp', 'xsb', 'sm'],
      '1972': ['hs', 'fsp', 'xp', 'xsb', 'sm'],
      '1973': ['hs', 'fsp', 'xp', 'xsb', 'sm'],
      '1974': ['hs', 'fsp', 'xp', 'xsb', 'sm'],
      '1975': ['hs', 'fsp', 'xp', 'xsb', 'sm'],
      '1976': ['hs', 'fsp', 'xp', 'xsb', 'sm'],
      '1977': ['hs', 'fsp', 'xp', 'xsb', 'sm'],
      '1978': ['hs', 'fsp', 'xp', 'xsb', 'sm'],
      '1979': ['hs', 'fsp', 'xp', 'xsb', 'sm'],
      '1980': ['hs', 'fsp', 'xp', 'xsb', 'sm'],
      '1981': ['hs', 'fsp', 'xp', 'xsb', 'sm'],
      '1982': ['hs', 'fsp', 'xp', 'xsb', 'sm'],
      '1983': ['hs', 'fsp', 'xp', 'xsb', 'sm'],
      '1984': ['hs', 'sts', 'fsp', 'xp', 'xsb', 'sm'],
      '1985': ['hs', 'sts', 'fsp', 'xp', 'xsb', 'sm'],
      '1986': ['hs', 'sts', 'fsp', 'xp', 'xsb', 'sm'],
      '1987': ['hs', 'sts', 'fsp', 'xp', 'xsb', 'sm'],
      '1988': ['hs', 'sts', 'fsp', 'xp', 'xsb', 'sm'],
      '1989': ['hs', 'sts', 'fsp', 'xp', 'xsb', 'sm'],
      '1990': ['hs', 'sts', 'fsp', 'xp', 'xsb', 'sm'],
      '1991': ['hs', 'sts', 'fsp', 'xp', 'xsb', 'sm'],
      '1992': ['hs', 'sts', 'xp', 'xsb', 'sm', 'smf'],
      '1993': ['hs', 'sts', 'xp', 'xsb', 'sm', 'smf'],
      '1994': ['hs', 'sts', 'xp', 'xsb', 'sm', 'smf'],
      '1995': ['hs', 'sts', 'xp', 'xsb', 'sm', 'smf'],
      '1996': ['hs', 'sts', 'xp', 'xsb', 'sm', 'smf'],
      '1997': ['hs', 'sts', 'xp', 'xsb', 'sm', 'smf'],
      '1998': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '1999': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2000': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2001': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2002': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2003': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2004': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2005': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2006': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2007': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2008': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
      '2009': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2010': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2011': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2013': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2014': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2015': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2016': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2017': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2018': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2019': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2020': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2021': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2022': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Cressida': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'Echo': {
      '2001': ['sts', 'hs', 'xp', 'xsb', 'sm', 'smf'],
      '2002': ['sts', 'hs', 'xp', 'xsb', 'sm', 'smf'],
      '2003': ['sts', 'hs', 'xp', 'xsb', 'sm', 'smf'],
      '2004': ['sts', 'hs', 'xp', 'xsb', 'sm', 'smf'],
      '2005': ['sts', 'hs', 'xp', 'xsb', 'sm', 'smf'],
    },
    'GR86 (without TRD equipment)': {
      '2022': ['ds', 'str', 'xp', 'xsa', 'sm'],
    },
    'MR2 (non-turbo, non-supercharged)': {
      '1985': ['es', 'sts', 'csp', 'xp', 'xsb', 'ssm'],
      '1986': ['es', 'sts', 'csp', 'xp', 'xsb', 'ssm'],
      '1987': ['es', 'sts', 'csp', 'xp', 'xsb', 'ssm'],
      '1988': ['es', 'sts', 'csp', 'xp', 'xsb', 'ssm'],
      '1989': ['es', 'sts', 'csp', 'xp', 'xsb', 'ssm'],
      '1990': ['es', 'sts', 'asp', 'xp', 'xsa', 'ssm'],
      '1991': ['es', 'sts', 'asp', 'xp', 'xsa', 'ssm'],
      '1992': ['es', 'sts', 'asp', 'xp', 'xsa', 'ssm'],
      '1993': ['es', 'sts', 'asp', 'xp', 'xsa', 'ssm'],
      '1994': ['es', 'sts', 'asp', 'xp', 'xsa', 'ssm'],
      '1995': ['es', 'sts', 'asp', 'xp', 'xsa', 'ssm'],
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
      '1985': ['es', 'csp', 'xp', 'xsb', 'ssm'],
      '1986': ['es', 'csp', 'xp', 'xsb', 'ssm'],
      '1987': ['es', 'csp', 'xp', 'xsb', 'ssm'],
      '1988': ['es', 'str', 'csp', 'xp', 'xsb', 'ssm'],
      '1989': ['es', 'str', 'csp', 'xp', 'xsb', 'ssm'],
    },
    'MR2 Turbo': {
      '1991': ['cs', 'asp', 'xsa', 'xp', 'ssm'],
      '1992': ['cs', 'asp', 'xsa', 'xp', 'ssm'],
      '1993': ['cs', 'asp', 'xsa', 'xp', 'ssm'],
      '1994': ['cs', 'asp', 'xsa', 'xp', 'ssm'],
      '1995': ['cs', 'asp', 'xsa', 'xp', 'ssm'],
    },
    'Matrix': {
      '2003': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2004': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2005': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2006': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2007': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2008': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2009': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2010': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2011': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
      '2013': ['hs', 'sts', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Paseo': {
      'all': ['hs', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Prius': {
      'all': ['hs', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Starlet': {
      'all': ['hs', 'fsp', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Supra (non-turbo)': {
      '1979': ['hs', 'fp', 'xp', 'xsa', 'sm'],
      '1980': ['hs', 'fp', 'xp', 'xsa', 'sm'],
      '1981': ['hs', 'fp', 'xp', 'xsa', 'sm'],
      '1982': ['hs', 'fp', 'xp', 'xsa', 'sm'],
      '1983': ['hs', 'fp', 'xp', 'xsa', 'sm'],
      '1984': ['hs', 'fp', 'xp', 'xsa', 'sm'],
      '1985': ['hs', 'fp', 'xp', 'xsa', 'sm'],
      '1986': ['hs', 'fp', 'xp', 'xsa', 'sm'],
      '1987': ['hs', 'xp', 'xsa', 'sm'],
      '1988': ['hs', 'xp', 'xsa', 'sm'],
      '1989': ['hs', 'xp', 'xsa', 'sm'],
      '1990': ['hs', 'xp', 'xsa', 'sm'],
      '1991': ['hs', 'xp', 'xsa', 'sm'],
      '1992': ['hs', 'xp', 'xsa', 'sm'],
      '1993': ['fs', 'stx', 'esp', 'xp', 'xsa', 'sm'],
      '1994': ['fs', 'stx', 'esp', 'xp', 'xsa', 'sm'],
      '1995': ['fs', 'stx', 'esp', 'xp', 'xsa', 'sm'],
      '1996': ['fs', 'stx', 'esp', 'xp', 'xsa', 'sm'],
      '1997': ['fs', 'stx', 'xp', 'xsa', 'sm'],
      '1998': ['fs', 'stx', 'xp', 'xsa', 'sm'],
    },
    'Supra Turbo': {
      '1987': ['fs', 'xp', 'xsa', 'sm'],
      '1988': ['fs', 'xp', 'xsa', 'sm'],
      '1989': ['fs', 'xp', 'xsa', 'sm'],
      '1990': ['fs', 'xp', 'xsa', 'sm'],
      '1991': ['fs', 'xp', 'xsa', 'sm'],
      '1992': ['fs', 'xp', 'xsa', 'sm'],
      '1993': ['bs', 'sst', 'asp', 'xp', 'xsa', 'sm'],
      '1994': ['bs', 'sst', 'asp', 'xp', 'xsa', 'sm'],
      '1995': ['bs', 'sst', 'asp', 'xp', 'xsa', 'sm'],
      '1996': ['bs', 'sst', 'asp', 'xp', 'xsa', 'sm'],
      '1997': ['bs', 'sst', 'asp', 'xp', 'xsa', 'sm'],
      '1998': ['bs', 'sst', 'asp', 'xp', 'xsa', 'sm'],
      '2020': ['bs', 'sst', 'asp', 'xp', 'xsa', 'sm'],
      '2021': ['bs', 'sst', 'asp', 'xp', 'xsa', 'sm'],
      '2022': ['bs', 'sst', 'asp', 'xp', 'xsa', 'sm'],
    },
    'Tacoma': {
      '1995': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '1996': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '1997': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '1998': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '1999': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '2000': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '2001': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '2002': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '2003': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '2004': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '2005': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '2006': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '2007': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '2008': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '2009': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '2010': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '2011': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '2012': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '2013': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '2014': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '2015': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '2016': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '2017': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '2018': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '2019': ['hs', 'stx', 'xp', 'xsa', 'sm'],
      '2020': ['hs', 'stx', 'xp', 'xsa', 'sm'],
    },
    'Tercel': {
      'all': ['hs', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Yaris': {
      'all': ['hs', 'sts', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
    },
  },
  'Triumph': {
    'GT-6': {
      'all': ['hs', 'fsp', 'dp', 'xp', 'xsb', 'ssm'],
    },
    'Herald (all) ': {
      'all': ['hs', 'fsp', 'xp', 'xsb', 'sm'],
    },
    'Spitfire': {
      'all': ['hs', 'fsp', 'dp', 'xp', 'xsb', 'ssm'],
    },
    'Stag': {
      'all': ['fs', 'xp', 'xsa', 'sm'],
    },
    'TR-2 & TR-3 ': {
      'all': ['hs', 'fsp', 'dp', 'xp', 'xsb', 'ssm'],
    },
    'TR-4 & TR-4A ': {
      'all': ['hs', 'fsp', 'dp', 'xp', 'xsb', 'ssm'],
    },
    'TR-7': {
      'all': ['hs', 'fsp', 'dp', 'xp', 'xsb', 'ssm'],
    },
    'TR-8': {
      'all': ['es', 'bsp', 'xp', 'xsa', 'ssm'],
    },
    'TR-250 & TR-6 ': {
      'all': ['hs', 'fsp', 'xp', 'xsa', 'ssm'],
    },
  },
  'Volkswagen': {
    'Beetle': {
      '1950': ['hs', 'sts', 'fsp', 'xp', 'xsb', 'sm'],
      '1951': ['hs', 'sts', 'fsp', 'xp', 'xsb', 'sm'],
      '1952': ['hs', 'sts', 'fsp', 'xp', 'xsb', 'sm'],
      '1953': ['hs', 'sts', 'fsp', 'xp', 'xsb', 'sm'],
      '1954': ['hs', 'sts', 'fsp', 'xp', 'xsb', 'sm'],
      '1955': ['hs', 'sts', 'fsp', 'xp', 'xsb', 'sm'],
      '1956': ['hs', 'sts', 'fsp', 'xp', 'xsb', 'sm'],
      '1957': ['hs', 'sts', 'fsp', 'xp', 'xsb', 'sm'],
      '1958': ['hs', 'sts', 'fsp', 'xp', 'xsb', 'sm'],
      '1959': ['hs', 'sts', 'fsp', 'xp', 'xsb', 'sm'],
      '1960': ['hs', 'sts', 'fsp', 'xp', 'xsb', 'sm'],
      '1961': ['hs', 'sts', 'fsp', 'xp', 'xsb', 'sm'],
      '1962': ['hs', 'sts', 'fsp', 'xp', 'xsb', 'sm'],
      '1963': ['hs', 'sts', 'fsp', 'xp', 'xsb', 'sm'],
      '1964': ['hs', 'sts', 'fsp', 'xp', 'xsb', 'sm'],
      '1965': ['hs', 'sts', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1966': ['hs', 'sts', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1967': ['hs', 'sts', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1968': ['hs', 'sts', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1969': ['hs', 'sts', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1970': ['hs', 'sts', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1971': ['hs', 'sts', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1972': ['hs', 'sts', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1973': ['hs', 'sts', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1974': ['hs', 'sts', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1975': ['hs', 'sts', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1976': ['hs', 'sts', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '1977': ['hs', 'sts', 'fsp', 'dp', 'xp', 'xsb', 'sm'],
      '2011': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2013': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2014': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2015': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2016': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2017': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2018': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2019': ['hs', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Cabrio': {
      'all': ['hs', 'stx', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Corrado': {
      'all': ['hs', 'stx', 'fsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Dasher': {
      'all': ['hs', 'fsp', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Eos (2.0T)': {
      '2007': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2008': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2009': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2010': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2011': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2013': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2014': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2015': ['hs', 'xp', 'xsa', 'sm', 'smf'],
      '2016': ['hs', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Fox': {
      'all': ['hs', 'fsp', 'xp', 'xsa', 'sm'],
    },
    'GLI 2.0L Turbo': {
      '2006': ['gs', 'xp', 'xsa', 'sm', 'smf'],
      '2007': ['gs', 'xp', 'xsa', 'sm', 'smf'],
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
    },
    'Golf': {
      '1974': ['hs', 'sts', 'sm', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1975': ['hs', 'sts', 'sm', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1976': ['hs', 'sts', 'sm', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1977': ['hs', 'sts', 'sm', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1978': ['hs', 'sts', 'sm', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1979': ['hs', 'sts', 'sm', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1980': ['hs', 'sts', 'sm', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1981': ['hs', 'sts', 'sm', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1982': ['hs', 'sts', 'sm', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1983': ['hs', 'sts', 'sm', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1984': ['hs', 'sts', 'sm', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1985': ['hs', 'sts', 'fsp', 'sm', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1986': ['hs', 'sts', 'fsp', 'sm', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1987': ['hs', 'sts', 'fsp', 'sm', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1988': ['hs', 'sts', 'fsp', 'sm', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1989': ['hs', 'sts', 'fsp', 'sm', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1990': ['hs', 'sts', 'fsp', 'sm', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1991': ['hs', 'sts', 'fsp', 'sm', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1992': ['hs', 'sts', 'fsp', 'sm', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1993': ['hs', 'fsp', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1994': ['hs', 'fsp', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1995': ['hs', 'fsp', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1996': ['hs', 'fsp', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1997': ['hs', 'fsp', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1998': ['hs', 'fsp', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1999': ['hs', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2000': ['hs', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2001': ['hs', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2002': ['hs', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2003': ['hs', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2004': ['hs', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2005': ['hs', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2006': ['hs', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2007': ['hs', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2008': ['hs', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2009': ['hs', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2010': ['hs', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2011': ['hs', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['hs', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2013': ['hs', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2014': ['hs', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2015': ['hs', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2016': ['hs', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2017': ['hs', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2018': ['hs', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2019': ['hs', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Golf GTI': {
      '1975': ['hs', 'sts', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1976': ['hs', 'sts', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1977': ['hs', 'sts', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1978': ['hs', 'sts', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1979': ['hs', 'sts', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1980': ['hs', 'sts', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1981': ['hs', 'sts', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1982': ['hs', 'sts', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1983': ['hs', 'sts', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1984': ['hs', 'sts', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1985': ['hs', 'sts', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1986': ['hs', 'sts', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1987': ['hs', 'sts', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1988': ['hs', 'sts', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1989': ['hs', 'sts', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1990': ['hs', 'sts', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1991': ['hs', 'sts', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1992': ['hs', 'sts', 'dsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
      '1993': ['hs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1994': ['hs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1995': ['hs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1996': ['hs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1997': ['hs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1998': ['hs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '1999': ['hs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2000': ['hs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2001': ['hs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2002': ['hs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2003': ['hs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2004': ['hs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2005': ['hs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2006': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2007': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2008': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2009': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2010': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2011': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2013': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2014': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2015': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2016': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2017': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2018': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2019': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2020': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2021': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2022': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Golf GTI 1.8L Turbo': {
      'all': ['hs', 'sm', 'ep', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Golf R': {
      '2012': ['ds', 'bsp', 'sm', 'ep', 'xp', 'xsa', 'sm'],
      '2013': ['ds', 'bsp', 'sm', 'ep', 'xp', 'xsa', 'sm'],
      '2015': ['ds', 'stu', 'asp', 'sm', 'ep', 'xp', 'xsa', 'sm'],
      '2016': ['ds', 'stu', 'asp', 'sm', 'ep', 'xp', 'xsa', 'sm'],
      '2017': ['ds', 'stu', 'asp', 'sm', 'ep', 'xp', 'xsa', 'sm'],
      '2018': ['ds', 'stu', 'asp', 'sm', 'ep', 'xp', 'xsa', 'sm'],
      '2019': ['ds', 'stu', 'asp', 'sm', 'ep', 'xp', 'xsa', 'sm'],
      '2022': ['ds', 'stu', 'asp', 'sm', 'ep', 'xp', 'xsa', 'sm'],
    },
    'ID.4': {
      '2021': ['evx'],
    },
    'Jetta 1.8L Turbo': {
      'all': ['hs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Jetta 2.0L Turbo': {
      '2006': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2007': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2008': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2009': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2010': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2011': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2012': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2013': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2014': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2015': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2016': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2017': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2018': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
      '2019': ['gs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Jetta TDI': {
      'all': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Karmann Ghia': {
      'all': ['hs', 'sts', 'fsp', 'xp', 'xsb', 'sm'],
    },
    'New Beetle': {
      'all': ['hs', 'dsp', 'ep', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Passat (2.0L Turbo)': {
      'all': ['hs', 'sth', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Passat (3.6L VR6)': {
      'all': ['hs', 'stx', 'dsp', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Passat (Not Otherwise Classified)': {
      'all': ['hs', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Passat (W8)': {
      'all': ['hs', 'stx', 'esp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Quantum': {
      'all': ['hs', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'R32': {
      '2004': ['ds', 'stx', 'dsp', 'fp', 'xp', 'xsa', 'sm'],
      '2008': ['ds', 'stx', 'dsp', 'xp', 'xsa', 'sm'],
    },
    'Rabbit': {
      'all': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Rabbit GTI': {
      'all': ['hs', 'sts', 'fsp', 'ep', 'xp', 'xsb', 'sm', 'smf'],
    },
    'Scirocco': {
      'all': ['hs', 'fsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'e-Golf': {
      '2015': ['hs', 'xp', 'xsa', 'sm', 'smf', 'evx'],
      '2016': ['hs', 'xp', 'xsa', 'sm', 'smf', 'evx'],
      '2017': ['hs', 'xp', 'xsa', 'sm', 'smf', 'evx'],
      '2018': ['hs', 'xp', 'xsa', 'sm', 'smf', 'evx'],
    },
  },
  'Volvo': {
    '122S': {
      '1956': ['dp', 'xp', 'xsb', 'sm'],
      '1957': ['dp', 'xp', 'xsb', 'sm'],
      '1958': ['dp', 'xp', 'xsb', 'sm'],
      '1959': ['dp', 'xp', 'xsb', 'sm'],
      '1960': ['dp', 'xp', 'xsb', 'sm'],
      '1961': ['dp', 'xp', 'xsb', 'sm'],
      '1962': ['dp', 'xp', 'xsb', 'sm'],
      '1963': ['dp', 'xp', 'xsb', 'sm'],
      '1964': ['dp', 'xp', 'xsb', 'sm'],
      '1965': ['dp', 'xp', 'xsb', 'sm'],
      '1966': ['dp', 'xp', 'xsb', 'sm'],
      '1967': ['dp', 'xp', 'xsb', 'sm'],
      '1968': ['dp', 'xp', 'xsb', 'sm'],
      '1969': ['dp', 'xp', 'xsb', 'sm'],
      '1970': ['dp', 'xp', 'xsb', 'sm'],
    },
    '142S & 142E': {
      '1967': ['dp', 'xp', 'xsa', 'sm'],
      '1968': ['dp', 'xp', 'xsa', 'sm'],
      '1969': ['dp', 'xp', 'xsa', 'sm'],
      '1970': ['dp', 'xp', 'xsa', 'sm'],
      '1971': ['dp', 'xp', 'xsa', 'sm'],
      '1972': ['dp', 'xp', 'xsa', 'sm'],
      '1973': ['dp', 'xp', 'xsa', 'sm'],
      '1974': ['dp', 'xp', 'xsa', 'sm'],
    },
    '240 Turbo': {
      '1981': ['gs', 'sts', 'dsp', 'xp', 'xsa', 'sm'],
      '1982': ['gs', 'sts', 'dsp', 'xp', 'xsa', 'sm'],
      '1983': ['gs', 'sts', 'dsp', 'xp', 'xsa', 'sm'],
      '1984': ['gs', 'sts', 'dsp', 'xp', 'xsa', 'sm'],
      '1985': ['gs', 'sts', 'dsp', 'xp', 'xsa', 'sm'],
    },
    '700 Series': {
      'all': ['esp', 'xp', 'xsa', 'sm'],
    },
    '800 Series': {
      'all': ['esp', 'xp', 'xsa', 'sm'],
    },
    'C30': {
      'all': ['hs', 'sth', 'xp', 'xsa', 'sm'],
    },
    'NOC': {
      'all': ['hs', 'xp', 'xsa', 'sm'],
    },
    'P-1800 (1780 cc)': {
      'all': ['dp', 'xp', 'xsa', 'sm'],
    },
    'P-1800 (1982 cc)': {
      'all': ['dp', 'xp', 'xsa', 'sm'],
    },
    'S40': {
      '1995': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1996': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1997': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1998': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '1999': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '2000': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '2001': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '2002': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '2003': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '2004': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '2005': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '2006': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '2007': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '2008': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '2009': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '2010': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
      '2011': ['dsp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'S40 (non-T5)': {
      'all': ['sts', 'xp', 'xsa', 'sm', 'smf'],
    },
    'S60 & V70': {
      'all': ['esp', 'xp', 'xsa', 'sm', 'smf'],
    },
    'S60 Polestar': {
      '2016': ['ds', 'xp', 'xsa', 'sm', 'smf'],
      '2017': ['ds', 'xp', 'xsa', 'sm', 'smf'],
      '2018': ['ds', 'xp', 'xsa', 'sm', 'smf'],
      '2019': ['ds', 'xp', 'xsa', 'sm', 'smf'],
      '2020': ['ds', 'xp', 'xsa', 'sm', 'smf'],
    },
    'S60R': {
      '2004': ['asp', 'stu', 'gs', 'xp', 'xsa', 'sm', 'smf'],
      '2005': ['asp', 'stu', 'gs', 'xp', 'xsa', 'sm', 'smf'],
      '2006': ['asp', 'stu', 'gs', 'xp', 'xsa', 'sm', 'smf'],
      '2007': ['asp', 'stu', 'gs', 'xp', 'xsa', 'sm', 'smf'],
    },
    'Sedans (N/A, RWD, NOC)': {
      'all': ['dp', 'xp', 'xsa', 'sm'],
    },
    'Turbo models (NOC)': {
      'all': ['gs', 'xp', 'xsa', 'sm'],
    },
    'V40': {
      'all': ['sts', 'xp', 'xsa', 'sm'],
    },
    'V60 Polestar': {
      '2016': ['ds', 'xp', 'xsa', 'sm'],
      '2017': ['ds', 'xp', 'xsa', 'sm'],
      '2018': ['ds', 'xp', 'xsa', 'sm'],
      '2019': ['ds', 'xp', 'xsa', 'sm'],
      '2020': ['ds', 'xp', 'xsa', 'sm'],
      '2021': ['ds', 'xp', 'xsa', 'sm'],
      '2022': ['ds', 'xp', 'xsa', 'sm'],
    },
    'V70R': {
      '2004': ['asp', 'gs', 'xp', 'xsa', 'sm'],
      '2005': ['asp', 'gs', 'xp', 'xsa', 'sm'],
      '2006': ['asp', 'gs', 'xp', 'xsa', 'sm'],
      '2007': ['asp', 'gs', 'xp', 'xsa', 'sm'],
    },
    'XC40 Recharge': {
      '2021': ['evx'],
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
        const lsdElement = document.getElementById('sststustrstxLSD');
        lsdElement.classList.add('highlighted');
        break;
      }
      if (subClasses[i] == 'stx') {
        subClass = 'stx';
        const lsdElement = document.getElementById('sststustrstxLSD');
        lsdElement.classList.add('highlighted');
        break;
      }
      if (subClasses[i] == 'stu') {
        subClass = 'stu';
        const engineElement = document.getElementById('sststusthEngine');
        engineElement.style.display = 'block';
        const lsdElement = document.getElementById('sststustrstxLSD');
        lsdElement.classList.add('highlighted');
        break;
      }
      if (subClasses[i] == 'sth') {
        subClass = 'sth';
        const engineElement = document.getElementById('sststusthEngine');
        engineElement.style.display = 'block';
        const lsdElement = document.getElementById('sthLSD');
        lsdElement.classList.add('highlighted');
        break;
      }
      if (subClasses[i] == 'sst') {
        subClass = 'sst';
        const engineElement = document.getElementById('sststusthEngine');
        engineElement.style.display = 'block';
        const lsdElement = document.getElementById('sststustrstxLSD');
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
