const carFlags = {
  'StreetCar': [
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
    'stockExhaust',
  ],
  'StreetTouringCar': [
    'streetTouringBodywork',
    'stTiresLegal',
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
    'stockExhaust',
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
  'Acura': {
    'NSX Alex Zanardi Signature Edition': {
      'all': ['as', 'ssm'],
    },
    'NSX': {
      '1990': ['bs', 'asp', 'ssm', 'sm', 'fp'],
      '1991': ['bs', 'asp', 'ssm', 'sm', 'fp'],
      '1992': ['bs', 'asp', 'ssm', 'sm', 'fp'],
      '1993': ['bs', 'asp', 'ssm', 'sm', 'fp'],
      '1994': ['bs', 'asp', 'ssm', 'sm', 'fp'],
      '1995': ['bs', 'asp', 'ssm', 'sm', 'fp'],
      '1996': ['bs', 'asp', 'ssm', 'sm', 'fp'],
      '1997': ['bs', 'asp', 'ssm', 'sm', 'fp'],
      '1998': ['bs', 'asp', 'ssm', 'sm', 'fp'],
      '1999': ['bs', 'asp', 'ssm', 'sm', 'fp'],
      '2000': ['bs', 'asp', 'ssm', 'sm', 'fp'],
      '2001': ['bs', 'asp', 'ssm', 'sm', 'fp'],
      '2002': ['bs', 'asp', 'ssm', 'sm', 'fp'],
      '2003': ['bs', 'asp', 'ssm', 'sm', 'fp'],
      '2004': ['bs', 'asp', 'ssm', 'sm', 'fp'],
      '2005': ['bs', 'asp', 'ssm', 'sm', 'fp'],
      '2016': ['ss', 'ssp', 'ssm'],
      '2017': ['ss', 'ssp', 'ssm'],
      '2018': ['ss', 'ssp', 'ssm'],
      '2019': ['ss', 'ssp', 'ssm'],
      '2020': ['ss', 'ssp', 'ssm'],
    },
    'Integra Type R': {
      'all': ['ds', 'stx', 'dsp', 'sm', 'smf', 'ep'],
    },
    'RLX': {
      'all': ['gs', 'sm'],
    },
    'TLX': {
      'all': ['gs', 'sm'],
    },
    'CL (all)': {
      'all': ['hs', 'sm'],
    },
    'ILX': {
      '2012': ['hs', 'sm'],
      '2013': ['hs', 'stx', 'sm'],
      '2014': ['hs', 'stx', 'sm'],
      '2015': ['hs', 'stx', 'sm'],
      '2016': ['hs', 'stx', 'sm'],
      '2017': ['hs', 'stx', 'sm'],
      '2018': ['hs', 'stx', 'sm'],
      '2019': ['hs', 'stx', 'sm'],
      '2020': ['hs', 'stx', 'sm'],
    },
    'Integra (all except Type R)': {
      '1986': ['hs', 'sts', 'fsp', 'sm', 'smf', 'ep'],
      '1987': ['hs', 'sts', 'fsp', 'sm', 'smf', 'ep'],
      '1988': ['hs', 'sts', 'fsp', 'sm', 'smf', 'ep'],
      '1989': ['hs', 'sts', 'fsp', 'sm', 'smf', 'ep'],
      '1990': ['hs', 'sts', 'dsp', 'sm', 'smf', 'ep'],
      '1991': ['hs', 'sts', 'dsp', 'sm', 'smf', 'ep'],
      '1992': ['hs', 'sts', 'dsp', 'sm', 'smf', 'ep'],
      '1993': ['hs', 'sts', 'dsp', 'sm', 'smf', 'ep'],
      '1994': ['hs', 'stx', 'dsp', 'sm', 'smf', 'ep'],
      '1995': ['hs', 'stx', 'dsp', 'sm', 'smf', 'ep'],
      '1996': ['hs', 'stx', 'dsp', 'sm', 'smf', 'ep'],
      '1997': ['hs', 'stx', 'dsp', 'sm', 'smf', 'ep'],
      '1998': ['hs', 'stx', 'dsp', 'sm', 'smf', 'ep'],
      '1999': ['hs', 'stx', 'dsp', 'sm', 'smf', 'ep'],
      '2000': ['hs', 'stx', 'dsp', 'sm', 'smf', 'ep'],
      '2001': ['hs', 'stx', 'dsp', 'sm', 'smf', 'ep'],
    },
    'Legend': {
      'all': ['hs', 'fsp', 'sm', 'smf'],
    },
    'RSX': {
      'all': ['hs', 'stx', 'dsp', 'ep', 'sm', 'smf'],
    },
    'TL': {
      'all': ['hs', 'sm', 'smf'],
    },
    'TSX': {
      'all': ['hs', 'stx', 'dsp', 'sm', 'smf'],
    },
    'Vigor': {
      'all': ['hs', 'sm', 'smf'],
    },
  },
  'Alfa Romeo': {
    '4C (incl. Spider)': {
      '2015': ['ss', 'ssr', 'ssm'],
      '2016': ['ss', 'ssr', 'ssm'],
      '2017': ['ss', 'ssr', 'ssm'],
      '2018': ['ss', 'ssr', 'ssm'],
      '2019': ['ss', 'ssr', 'ssm'],
      '2020': ['ss', 'ssr', 'ssm'],
    },
    'Giulia Quadrifoglio': {
      '2017': ['as', 'sm'],
      '2018': ['as', 'sm'],
      '2019': ['as', 'sm'],
      '2020': ['as', 'sm'],
    },
    'Giulia (incl. Ti)': {
      '2016': ['ds', 'stu', 'sm'],
      '2017': ['ds', 'stu', 'sm'],
      '2018': ['ds', 'stu', 'sm'],
      '2019': ['ds', 'stu', 'sm'],
      '2020': ['ds', 'stu', 'sm'],
    },
    '2000 GTV': {
      'all': ['es', 'fsp', 'sm', 'dp'],
    },
    '2000 Spider': {
      'all': ['es', 'fsp', 'sm', 'dp'],
    },
    '1300': {
      'all': ['hs', 'fsp', 'sm'],
    },
    '1600': {
      'all': ['hs', 'fsp', 'sm', 'dp'],
    },
    '164 (non-S)': {
      '1991': ['hs', 'sm'],
      '1992': ['hs', 'sm'],
      '1993': ['hs', 'sm'],
    },
    '1750 & 1750 GTV': {
      'all': ['hs', 'fsp', 'sm', 'dp'],
    },
    '2000 (4-door sedan)': {
      'all': ['hs', 'fsp', 'sm'],
    },
    'GTV V6': {
      'all': ['hs', 'dsp', 'sm', 'fp'],
    },
    'Milano': {
      'all': ['hs', 'dsp', 'sm'],
    },
    'Sedan (NOC)': {
      'all': ['hs', 'sm'],
    },
    'Sport Sedan': {
      'all': ['dp', 'sm'],
    },
    'Alfetta GT': {
      'all': ['fsp', 'sm', 'dp'],
    },
    '1600 GTV': {
      'all': ['dp', 'sm'],
    },
    'Giuletta Sprint & Spider (1570 cc)': {
      'all': ['dp', 'sm'],
    },
    'Giulia 1300 & 1300 Ti': {
      '1964': ['dp', 'sm'],
      '1965': ['dp', 'sm'],
      '1966': ['dp', 'sm'],
      '1967': ['dp', 'sm'],
      '1968': ['dp', 'sm'],
      '1969': ['dp', 'sm'],
      '1970': ['dp', 'sm'],
      '1971': ['dp', 'sm'],
    },
    'GT 1300 Junior & GTA Junior': {
      '1966': ['dp', 'sm'],
      '1967': ['dp', 'sm'],
      '1968': ['dp', 'sm'],
      '1969': ['dp', 'sm'],
      '1970': ['dp', 'sm'],
      '1971': ['dp', 'sm'],
      '1972': ['dp', 'sm'],
      '1973': ['dp', 'sm'],
      '1974': ['dp', 'sm'],
      '1975': ['dp', 'sm'],
      '1976': ['dp', 'sm'],
      '1977': ['dp', 'sm'],
    },
    'GTA (bore & stroke: 78mm x 67.5mm)': {
      'all': ['dp', 'sm'],
    },
    'Junior Z': {
      'all': ['dp', 'sm'],
    },
    'Spider Duetto 1750 Spider Veloce (1779 cc)': {
      '1969': ['dp', 'sm'],
      '1970': ['dp', 'sm'],
    },
  },
  'Audi': {
    'R8 (non-GT)': {
      '2008': ['ss', 'ssp', 'ssm'],
      '2009': ['ss', 'ssp', 'ssm'],
      '2010': ['ss', 'ssp', 'ssm'],
      '2011': ['ss', 'ssp', 'ssm'],
      '2012': ['ss', 'ssp', 'ssm'],
      '2013': ['ss', 'ssp', 'ssm'],
      '2014': ['ss', 'ssp', 'ssm'],
      '2015': ['ss', 'ssp', 'ssm'],
      '2016': ['ssp', 'ssm'],
      '2017': ['ssp', 'ssm'],
      '2018': ['ssp', 'ssm'],
      '2019': ['ssp', 'ssm'],
    },
    'R8 (non-Plus)': {
      '2016': ['ss', 'ssm'],
      '2017': ['ss', 'ssm'],
      '2018': ['ss', 'ssm'],
      '2019': ['ss', 'ssm'],
      '2020': ['ss', 'ssm'],
    },
    'TT RS': {
      '2012': ['ss', 'ssr', 'ssp', 'ssm'],
      '2013': ['ss', 'ssr', 'ssp', 'ssm'],
      '2018': ['ss', 'asp', 'ssm'],
      '2019': ['ss', 'asp', 'ssm'],
      '2020': ['ss', 'ssm'],
    },
    'RS 3': {
      '2017': ['bs', 'sm'],
      '2018': ['bs', 'sm'],
      '2019': ['bs', 'sm'],
    },
    'RS 4': {
      '2007': ['bs', 'sm'],
      '2008': ['bs', 'sm'],
    },
    'RS 5': {
      '2013': ['bs', 'sm'],
      '2014': ['bs', 'sm'],
      '2015': ['bs', 'sm'],
    },
    'RS 6 (C5 Chassis)': {
      '2003': ['bs', 'sm'],
      '2004': ['bs', 'sm'],
    },
    'S4': {
      '2000': ['ds', 'stu', 'asp', 'sm'],
      '2001': ['ds', 'stu', 'asp', 'sm'],
      '2002': ['ds', 'stu', 'asp', 'sm'],
      '2003': ['ds', 'stu', 'asp', 'sm'],
      '2004': ['fs', 'stu', 'esp', 'sm'],
      '2005': ['fs', 'stu', 'esp', 'sm'],
      '2006': ['fs', 'stu', 'esp', 'sm'],
      '2007': ['fs', 'stu', 'esp', 'sm'],
      '2008': ['fs', 'stu', 'esp', 'sm'],
      '2009': ['fs', 'stu', 'esp', 'sm'],
      '2010': ['bs', 'stu', 'asp', 'sm'],
      '2011': ['bs', 'stu', 'asp', 'sm'],
      '2012': ['bs', 'stu', 'asp', 'sm'],
      '2013': ['bs', 'stu', 'asp', 'sm'],
      '2014': ['bs', 'stu', 'asp', 'sm'],
      '2015': ['bs', 'stu', 'asp', 'sm'],
      '2016': ['bs', 'stu', 'asp', 'sm'],
      '2017': ['bs', 'stu', 'sm'],
      '2018': ['bs', 'stu', 'sm'],
      '2019': ['bs', 'stu', 'sm'],
      '2020': ['bs', 'stu', 'sm'],
    },
    'S5': {
      '2008': ['bs', 'stu', 'sm'],
      '2009': ['bs', 'stu', 'sm'],
      '2010': ['bs', 'stu', 'sm'],
      '2011': ['bs', 'stu', 'sm'],
      '2012': ['bs', 'stu', 'sm'],
      '2013': ['bs', 'stu', 'asp', 'sm'],
      '2014': ['bs', 'stu', 'asp', 'sm'],
      '2015': ['bs', 'stu', 'asp', 'sm'],
      '2016': ['bs', 'stu', 'asp', 'sm'],
      '2017': ['bs', 'stu', 'sm'],
      '2018': ['bs', 'stu', 'sm'],
      '2019': ['bs', 'stu', 'sm'],
    },
    'S6': {
      '2013': ['bs', 'sm'],
      '2014': ['bs', 'sm'],
      '2015': ['bs', 'sm'],
      '2016': ['bs', 'sm'],
      '2017': ['bs', 'sm'],
      '2018': ['bs', 'sm'],
    },
    'S7': {
      '2012': ['bs', 'sm'],
      '2013': ['bs', 'sm'],
      '2014': ['bs', 'sm'],
      '2015': ['bs', 'sm'],
      '2016': ['bs', 'sm'],
      '2017': ['bs', 'sm'],
      '2018': ['bs', 'sm'],
    },
    'TTS': {
      '2008': ['ds', 'stu', 'sm'],
      '2009': ['ds', 'stu', 'bsp', 'sm'],
      '2010': ['ds', 'stu', 'bsp', 'sm'],
      '2011': ['ds', 'stu', 'bsp', 'sm'],
      '2012': ['ds', 'stu', 'bsp', 'sm'],
      '2013': ['ds', 'stu', 'bsp', 'sm'],
      '2014': ['ds', 'stu', 'asp', 'sm'],
      '2015': ['ds', 'stu', 'asp', 'sm'],
      '2016': ['bs', 'asp', 'sm'],
      '2016': ['bs', 'asp', 'sm'],
      '2017': ['bs', 'asp', 'sm'],
      '2018': ['bs', 'asp', 'sm'],
      '2019': ['bs', 'asp', 'sm'],
      '2020': ['bs', 'sm'],
    },
    'A3 (2.0T, all)': {
      '2015': ['ds', 'sth', 'sm'],
      '2016': ['ds', 'sth', 'sm'],
      '2017': ['ds', 'sth', 'sm'],
      '2018': ['ds', 'sth', 'sm'],
      '2019': ['ds', 'sth', 'sm'],
      '2020': ['ds', 'sth', 'sm'],
    },
    'A3 quattro (3.2L V6, AWD)': {
      '2006': ['ds', 'sth', 'sm'],
      '2007': ['ds', 'sth', 'sm'],
      '2008': ['ds', 'sth', 'sm'],
      '2009': ['ds', 'sth', 'sm'],
    },
    'A5': {
      '2008': ['ds', 'sm'],
      '2009': ['ds', 'sm'],
      '2010': ['ds', 'sm'],
      '2011': ['ds', 'sm'],
      '2012': ['ds', 'sm'],
      '2013': ['ds', 'sm'],
      '2014': ['ds', 'sm'],
      '2015': ['ds', 'sm'],
      '2016': ['ds', 'sm'],
      '2017': ['ds', 'sm'],
    },
    'S3 (2.0T)': {
      '2015': ['ds', 'stu', 'sm'],
      '2016': ['ds', 'stu', 'sm'],
      '2017': ['ds', 'stu', 'sm'],
      '2018': ['ds', 'stu', 'sm'],
      '2019': ['ds', 'stu', 'sm'],
      '2020': ['ds', 'sm'],
    },
    'TT (1.8T, non-quattro/FWD)': {
      '2000': ['ds', 'sth', 'bsp', 'sm', 'smf'],
      '2001': ['ds', 'sth', 'bsp', 'sm', 'smf'],
      '2002': ['ds', 'sth', 'bsp', 'sm', 'smf'],
      '2003': ['ds', 'sth', 'bsp', 'sm', 'smf'],
      '2004': ['ds', 'sth', 'bsp', 'sm', 'smf'],
      '2005': ['ds', 'sth', 'bsp', 'sm', 'smf'],
      '2006': ['ds', 'sth', 'bsp', 'sm', 'smf'],
    },
    'TT (2.0T, non-quattro/FWD)': {
      '2008': ['ds', 'sth', 'sm', 'smf'],
      '2009': ['ds', 'sth', 'sm', 'smf'],
    },
    'TT quattro (AWD)': {
      '2000': ['ds', 'sth', 'bsp', 'sm'],
      '2001': ['ds', 'sth', 'bsp', 'sm'],
      '2002': ['ds', 'sth', 'bsp', 'sm'],
      '2003': ['ds', 'sth', 'bsp', 'sm'],
      '2004': ['ds', 'sth', 'bsp', 'sm'],
      '2005': ['ds', 'sth', 'bsp', 'sm'],
      '2006': ['ds', 'sth', 'bsp', 'sm'],
      '2008': ['ds', 'sth', 'bsp', 'sm'],
      '2009': ['ds', 'sth', 'bsp', 'sm'],
      '2010': ['ds', 'sth', 'bsp', 'sm'],
      '2011': ['ds', 'sth', 'bsp', 'sm'],
      '2012': ['ds', 'sth', 'bsp', 'sm'],
      '2013': ['ds', 'sth', 'bsp', 'sm'],
      '2014': ['ds', 'sth', 'bsp', 'sm'],
      '2015': ['ds', 'sth', 'bsp', 'sm'],
      '2016': ['ds', 'sth', 'bsp', 'sm'],
      '2017': ['ds', 'sth', 'bsp', 'sm'],
      '2018': ['ds', 'sth', 'bsp', 'sm'],
      '2019': ['ds', 'sth', 'bsp', 'sm'],
      '2020': ['ds', 'sth', 'bsp', 'sm'],
    },
    'A6 (V6 Supercharged)': {
      '2008': ['fs', 'sm'],
      '2009': ['fs', 'sm'],
      '2010': ['fs', 'sm'],
      '2011': ['fs', 'sm'],
      '2012': ['fs', 'sm'],
      '2013': ['fs', 'sm'],
      '2014': ['fs', 'sm'],
      '2015': ['fs', 'sm'],
      '2016': ['fs', 'sm'],
      '2017': ['fs', 'sm'],
    },
    'A6 (V8)': {
      '1997': ['fs', 'sm'],
      '1998': ['fs', 'sm'],
      '1999': ['fs', 'sm'],
      '2000': ['fs', 'sm'],
      '2001': ['fs', 'sm'],
      '2002': ['fs', 'sm'],
      '2003': ['fs', 'sm'],
      '2004': ['fs', 'sm'],
      '2005': ['fs', 'sm'],
      '2006': ['fs', 'sm'],
      '2007': ['fs', 'sm'],
      '2008': ['fs', 'sm'],
      '2009': ['fs', 'sm'],
      '2010': ['fs', 'sm'],
      '2011': ['fs', 'sm'],
    },
    'A7 (all)': {
      '2010': ['fs', 'sm'],
      '2011': ['fs', 'sm'],
      '2012': ['fs', 'sm'],
      '2013': ['fs', 'sm'],
      '2014': ['fs', 'sm'],
      '2015': ['fs', 'sm'],
      '2016': ['fs', 'sm'],
      '2017': ['fs', 'sm'],
      '2018': ['fs', 'sm'],
      '2019': ['fs', 'sm'],
      '2020': ['fs', 'sm'],
    },
    'A3 (1.8T, FWD)': {
      '2015': ['gs', 'sth', 'sm', 'smf'],
      '2016': ['gs', 'sth', 'sm', 'smf'],
    },
    'A3 Sportback e-tron': {
      '2017': ['gs', 'sth', 'sm'],
      '2018': ['gs', 'sth', 'sm'],
    },
    'A4': {
      '1994': ['gs', 'sth', 'sm'],
      '1995': ['gs', 'sth', 'dsp', 'sm'],
      '1996': ['gs', 'sth', 'dsp', 'sm'],
      '1997': ['gs', 'sth', 'dsp', 'sm'],
      '1998': ['gs', 'sth', 'dsp', 'sm'],
      '1999': ['gs', 'sth', 'dsp', 'sm'],
      '2000': ['gs', 'sth', 'dsp', 'sm'],
      '2001': ['gs', 'sth', 'dsp', 'sm'],
      '2002': ['gs', 'sth', 'dsp', 'sm'],
      '2003': ['gs', 'sth', 'dsp', 'sm'],
      '2004': ['gs', 'sth', 'dsp', 'sm'],
      '2005': ['gs', 'sth', 'dsp', 'sm'],
      '2006': ['gs', 'sth', 'sm'],
      '2007': ['gs', 'sth', 'sm'],
      '2008': ['gs', 'sth', 'asp', 'sm'],
      '2009': ['gs', 'sth', 'asp', 'sm'],
      '2010': ['gs', 'sth', 'asp', 'sm'],
      '2011': ['gs', 'sth', 'asp', 'sm'],
      '2012': ['gs', 'sth', 'asp', 'sm'],
      '2013': ['gs', 'sth', 'asp', 'sm'],
      '2014': ['gs', 'sth', 'asp', 'sm'],
      '2015': ['gs', 'sth', 'asp', 'sm'],
      '2016': ['gs', 'sth', 'asp', 'sm'],
      '2017': ['gs', 'sth', 'sm'],
      '2018': ['gs', 'sth', 'sm'],
      '2019': ['gs', 'sth', 'sm'],
      '2020': ['gs', 'sth', 'sm'],
    },
    'A6 (V6 NOC & 4-cyl)': {
      'all': ['gs', 'sm'],
    },
    'A8 & V8 quattro (AWD)': {
      'all': ['gs', 'esp', 'sm'],
    },
    'Quattro (Coupe Turbo)': {
      'all': ['gs', 'bsp', 'sm'],
    },
    '80': {
      'all': ['hs', 'fsp', 'sm'],
    },
    '90': {
      'all': ['hs', 'fsp', 'sm'],
    },
    '100 (non-S4)': {
      'all': ['hs', 'fsp', 'sm'],
    },
    '200 Turbo quattro': {
      'all': ['hs', 'esp', 'sm'],
    },
    '4000': {
      'all': ['hs', 'fsp', 'sm'],
    },
    '5000': {
      'all': ['hs', 'esp', 'sm'],
    },
    '5000 Turbo': {
      'all': ['hs', 'fsp', 'sm'],
    },
    'A3 (FWD)': {
      '2006': ['hs', 'sth', 'dsp', 'sm', 'smf'],
      '2007': ['hs', 'sth', 'dsp', 'sm', 'smf'],
      '2008': ['hs', 'sth', 'dsp', 'sm', 'smf'],
      '2009': ['hs', 'sth', 'dsp', 'sm', 'smf'],
      '2010': ['hs', 'sth', 'dsp', 'sm', 'smf'],
      '2011': ['hs', 'sth', 'dsp', 'sm', 'smf'],
      '2012': ['hs', 'sth', 'dsp', 'sm', 'smf'],
      '2013': ['hs', 'sth', 'dsp', 'sm', 'smf'],
    },
    'Coupe quattro (non-turbo)': {
      'all': ['hs', 'dsp', 'sm'],
    },
    'S4 (100 CS chassis)': {
      '1992': ['hs', 'stu', 'sm'],
      '1993': ['hs', 'stu', 'sm'],
      '1994': ['hs', 'stu', 'sm'],
    },
  },
  'AMC': {
    'AMX': {
      'all': ['fs', 'esp', 'sm'],
    },
    'Javelin (V8)': {
      'all': ['fs', 'esp', 'sm'],
    },
    'Gremlin (4-cyl)': {
      'all': ['hs', 'fsp', 'sm'],
    },
    'Gremlin (6-cyl)': {
      'all': ['hs', 'sm'],
    },
    'Spirit (4-cyl)': {
      'all': ['hs', 'fsp', 'sm'],
    },
    'Spirit (6-cyl)': {
      'all': ['hs', 'sm'],
    },
  },
  'BMW': {
    '1600': {
      'all': ['hs', 'fsp', 'sm', 'dp'],
    },
    '1602': {
      'all': ['hs', 'fsp', 'sm'],
    },
    '1800': {
      'all': ['hs', 'fsp', 'sm'],
    },
    '2000ti': {
      'all': ['hs', 'sm', 'dp'],
    },
    '2000 CS Coupe': {
      'all': ['hs', 'sm'],
    },
    '2002': {
      'all': ['hs', 'fsp', 'sm', 'dp'],
    },
    '2500': {
      'all': ['esp', 'sm'],
    },
    '2800': {
      'all': ['esp', 'sm'],
    },
    '3.0S & CS': {
      'all': ['esp', 'sm'],
    },
    '320 (NOC)': {
      'all': ['hs', 'sm'],
    },
    '7 Series (6-cyl)': {
      'all': ['hs', 'esp', 'sm'],
    },
    'i3': {
      'all': ['hs', 'sm'],
    },
    'i8': {
      '2014': ['ss', 'ssm'],
      '2015': ['ss', 'ssm'],
      '2016': ['ss', 'ssm'],
      '2017': ['ss', 'ssm'],
      '2018': ['ss', 'ssm'],
      '2019': ['ss', 'ssm'],
      '2020': ['ss', 'ssm'],
    },
    'M4 GTS': {
      'all': ['ss', 'ssm'],
    },
    'Z8': {
      'all': ['ss', 'asp', 'ssm'],
    },
    'Bavaria': {
      'all': ['dsp', 'sm'],
    },
    'M2 Performance Edition (ZL9)': {
      'all': ['as', 'sm'],
    },
    'M3 CS': {
      '2018': ['as', 'sm'],
      '2019': ['as', 'sm'],
      '2020': ['as', 'sm'],
    },
    'M4 CS': {
      '2018': ['as', 'sm'],
      '2019': ['as', 'sm'],
      '2020': ['as', 'sm'],
    },
    '1M Coupe': {
      '2011': ['bs', 'asp', 'sm'],
      '2012': ['bs', 'asp', 'sm'],
    },
    'M Coupe': {
      '1996': ['cs', 'bsp', 'sm'],
      '1997': ['cs', 'bsp', 'sm'],
      '1998': ['cs', 'str', 'bsp', 'sm'],
      '1999': ['cs', 'str', 'bsp', 'sm'],
      '2000': ['cs', 'str', 'bsp', 'sm'],
      '2001': ['bs', 'str', 'bsp', 'sm'],
      '2002': ['bs', 'str', 'bsp', 'sm'],
    },
    'M Roadster': {
      '1996': ['cs', 'bsp', 'sm'],
      '1997': ['cs', 'bsp', 'sm'],
      '1998': ['cs', 'str', 'bsp', 'sm'],
      '1999': ['cs', 'str', 'bsp', 'sm'],
      '2000': ['cs', 'str', 'bsp', 'sm'],
      '2001': ['bs', 'str', 'bsp', 'sm'],
      '2002': ['bs', 'str', 'bsp', 'sm'],
    },
    'M2 (except Performance Edition ZL9)': {
      '2016': ['bs', 'asp', 'sm'],
      '2017': ['bs', 'asp', 'sm'],
      '2018': ['bs', 'asp', 'sm'],
      '2019': ['bs', 'asp', 'sm'],
      '2020': ['bs', 'asp', 'sm'],
    },
    'M2 Competition': {
      '2019': ['bs', 'sm'],
      '2020': ['bs', 'sm'],
    },
    'M3': {
      '1988': ['cs', 'csp', 'sm', 'dp'],
      '1989': ['cs', 'csp', 'sm', 'dp'],
      '1990': ['cs', 'csp', 'sm', 'dp'],
      '1991': ['cs', 'csp', 'sm', 'dp'],
      '1995': ['ds', 'str', 'bsp', 'sm'],
      '1996': ['ds', 'str', 'bsp', 'sm'],
      '1997': ['ds', 'str', 'bsp', 'sm'],
      '1998': ['ds', 'str', 'bsp', 'sm'],
      '1999': ['ds', 'str', 'bsp', 'sm'],
      '2000': ['fs', 'stu', 'bsp', 'sm'],
      '2001': ['fs', 'stu', 'bsp', 'sm'],
      '2002': ['fs', 'stu', 'bsp', 'sm'],
      '2003': ['fs', 'stu', 'bsp', 'sm'],
      '2004': ['fs', 'stu', 'bsp', 'sm'],
      '2005': ['fs', 'stu', 'bsp', 'sm'],
      '2006': ['fs', 'stu', 'bsp', 'sm'],
      '2007': ['fs', 'esp', 'sm'],
      '2008': ['fs', 'esp', 'sm'],
      '2009': ['fs', 'esp', 'sm'],
      '2010': ['fs', 'esp', 'sm'],
      '2011': ['fs', 'esp', 'sm'],
      '2012': ['fs', 'esp', 'sm'],
      '2013': ['fs', 'esp', 'sm'],
      '2015': ['bs', 'ssr', 'sm'],
      '2016': ['bs', 'ssr', 'sm'],
      '2017': ['bs', 'ssr', 'sm'],
      '2018': ['bs', 'sm'],
      '2019': ['bs', 'sm'],
      '2020': ['bs', 'sm'],
    },
    'M4': {
      '2015': ['bs', 'ssr', 'asp', 'sm'],
      '2016': ['bs', 'ssr', 'asp', 'sm'],
      '2017': ['bs', 'ssr', 'asp', 'sm'],
      '2018': ['bs', 'asp', 'sm'],
      '2019': ['bs', 'asp', 'sm'],
      '2020': ['bs', 'asp', 'sm'],
    },
    'M5': {
      '1988': ['fs', 'sm'],
      '1989': ['fs', 'sm'],
      '1990': ['fs', 'sm'],
      '1991': ['fs', 'sm'],
      '1992': ['fs', 'sm'],
      '1993': ['fs', 'sm'],
      '1998': ['fs', 'stx', 'sm'],
      '1999': ['fs', 'stx', 'sm'],
      '2000': ['fs', 'stx', 'sm'],
      '2001': ['fs', 'stx', 'sm'],
      '2002': ['fs', 'stx', 'sm'],
      '2003': ['fs', 'stx', 'sm'],
      '2004': ['fs', 'sm'],
      '2005': ['fs', 'sm'],
      '2006': ['fs', 'sm'],
      '2007': ['fs', 'sm'],
      '2008': ['fs', 'sm'],
      '2009': ['fs', 'sm'],
      '2010': ['fs', 'sm'],
    },
    'X1': {
      '2013': ['stu', 'sm'],
      '2014': ['stu', 'sm'],
      '2015': ['stu', 'sm'],
    },
    'Z3 (4-cyl)': {
      '1995': ['sts', 'csp', 'sm', 'dp'],
      '1996': ['es', 'sts', 'csp', 'sm', 'dp'],
      '1997': ['es', 'sts', 'csp', 'sm', 'dp'],
      '1998': ['es', 'sts', 'csp', 'sm', 'dp'],
      '1999': ['sts', 'csp', 'sm', 'dp'],
      '2000': ['sts', 'csp', 'sm', 'dp'],
      '2001': ['sts', 'csp', 'sm', 'dp'],
      '2002': ['sts', 'csp', 'sm', 'dp'],
    },
    'Z3 (6-cyl, non M)': {
      '1997': ['cs', 'str', 'bsp', 'sm', 'fp'],
      '1998': ['cs', 'str', 'bsp', 'sm', 'fp'],
      '1999': ['cs', 'str', 'bsp', 'sm', 'fp'],
      '2000': ['cs', 'str', 'bsp', 'sm', 'fp'],
      '2001': ['cs', 'str', 'bsp', 'sm', 'fp'],
      '2002': ['cs', 'str', 'bsp', 'sm', 'fp'],
    },
    'Z4 28i & 30i': {
      '2009': ['cs', 'sm'],
      '2010': ['cs', 'sm'],
      '2011': ['cs', 'sm'],
      '2012': ['cs', 'sm'],
      '2013': ['cs', 'sm'],
      '2014': ['cs', 'sm'],
      '2015': ['cs', 'sm'],
      '2016': ['cs', 'sm'],
    },
    'Z4 35i & 35is': {
      '2009': ['bs', 'sm'],
      '2010': ['bs', 'sm'],
      '2011': ['bs', 'sm'],
      '2012': ['bs', 'asp', 'sm'],
      '2013': ['bs', 'asp', 'sm'],
      '2014': ['bs', 'sm'],
      '2015': ['bs', 'sm'],
      '2016': ['bs', 'sm'],
    },
    'Z4 Coupe & Roadster (non-M)': {
      '2003': ['cs', 'str', 'bsp', 'sm', 'fp'],
      '2004': ['cs', 'str', 'bsp', 'sm', 'fp'],
      '2005': ['cs', 'str', 'bsp', 'sm', 'fp'],
      '2006': ['cs', 'str', 'bsp', 'sm', 'fp'],
      '2007': ['cs', 'str', 'bsp', 'sm', 'fp'],
      '2008': ['cs', 'str', 'bsp', 'sm', 'fp'],
    },
    'Z4 M Coupe & Roadster': {
      '2006': ['bs', 'bsp', 'sm'],
      '2007': ['bs', 'bsp', 'sm'],
      '2008': ['bs', 'bsp', 'sm'],
    },
    '128i': {
      '2008': ['ds', 'stx', 'bsp', 'sm', 'fp'],
      '2009': ['ds', 'stx', 'bsp', 'sm', 'fp'],
      '2010': ['ds', 'stx', 'bsp', 'sm', 'fp'],
      '2011': ['ds', 'stx', 'bsp', 'sm'],
      '2012': ['ds', 'stx', 'bsp', 'sm'],
      '2013': ['ds', 'stx', 'bsp', 'sm'],
    },
    '135i': {
      '2008': ['fs', 'stu', 'asp', 'sm', 'fp'],
      '2009': ['fs', 'stu', 'asp', 'sm', 'fp'],
      '2010': ['fs', 'stu', 'asp', 'sm', 'fp'],
      '2011': ['fs', 'stu', 'asp', 'sm'],
      '2012': ['fs', 'stu', 'asp', 'sm'],
      '2013': ['fs', 'stu', 'asp', 'sm'],
    },
    '135is': {
      '2008': ['fs', 'asp', 'sm', 'fp'],
      '2009': ['fs', 'asp', 'sm', 'fp'],
      '2010': ['fs', 'asp', 'sm', 'fp'],
      '2011': ['fs', 'asp', 'sm'],
      '2012': ['fs', 'asp', 'sm'],
      '2013': ['fs', 'asp', 'sm'],
    },
    '228i': {
      '2014': ['ds', 'stu', 'sm'],
      '2015': ['ds', 'stu', 'sm'],
      '2016': ['ds', 'sm'],
      '2017': ['ds', 'sm'],
      '2018': ['ds', 'sm'],
      '2019': ['ds', 'sm'],
      '2020': ['ds', 'sm'],
    },
    '230i': {
      '2014': ['ds', 'sm'],
      '2015': ['ds', 'sm'],
      '2016': ['ds', 'sm'],
      '2017': ['ds', 'sm'],
      '2018': ['ds', 'sm'],
      '2019': ['ds', 'sm'],
      '2020': ['ds', 'sm'],
    },
    '315': {
      '1981': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1982': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1983': ['gs', 'stx', 'fsp', 'sm', 'dp'],
    },
    '316': {
      '1975': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1976': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1977': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1978': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1979': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1980': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1981': ['gs', 'stx', 'fsp', 'sm', 'dp'],
    },
    '318': {
      '1975': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1976': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1977': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1978': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1979': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1980': ['gs', 'stx', 'fsp', 'sm', 'dp'],
    },
    '318 (16v)': {
      'all': ['hs', 'dsp', 'sm', 'dp'],
    },
    '318 (8v)': {
      'all': ['hs', 'fsp', 'sm', 'dp'],
    },
    '318i & 318is (E36 Chassis)': {
      'all': ['hs', 'fsp', 'sm'],
    },
    '318i': {
      '1975': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1976': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1977': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1978': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1979': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1980': ['gs', 'stx', 'fsp', 'sm', 'dp'],
    },
    '320': {
      '1975': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1976': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1977': ['gs', 'stx', 'fsp', 'sm', 'dp'],
    },
    '320/6': {
      '1977': ['gs', 'stx', 'fsp', 'sm'],
      '1978': ['gs', 'stx', 'fsp', 'sm'],
      '1979': ['gs', 'stx', 'fsp', 'sm'],
      '1980': ['gs', 'stx', 'fsp', 'sm'],
      '1981': ['gs', 'stx', 'fsp', 'sm'],
      '1982': ['gs', 'stx', 'fsp', 'sm'],
    },
    '320i': {
      '1975': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1976': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1977': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1978': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1979': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1980': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1981': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1982': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1983': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '2012': ['gs', 'bsp', 'sm'],
      '2013': ['gs', 'bsp', 'sm'],
      '2014': ['gs', 'bsp', 'sm'],
      '2015': ['gs', 'bsp', 'sm'],
      '2016': ['gs', 'bsp', 'sm'],
      '2017': ['gs', 'sm'],
      '2018': ['gs', 'sm'],
      '2019': ['gs', 'sm'],
    },
    '323i Convertible': {
      '1998': ['gs', 'sm'],
      '1999': ['gs', 'sm'],
    },
    '323is': {
      '1998': ['gs', 'sm'],
      '1999': ['gs', 'sm'],
    },
    '328i Convertible': {
      '1996': ['gs', 'sm'],
      '1997': ['gs', 'sm'],
      '1998': ['gs', 'sm'],
      '1999': ['gs', 'sm'],
    },
    '328is (E36)': {
      '1996': ['gs', 'sm'],
      '1997': ['gs', 'sm'],
      '1998': ['gs', 'sm'],
      '1999': ['gs', 'sm'],
    },
    '328i': {
      '2012': ['ds', 'sm'],
      '2013': ['ds', 'sm'],
      '2014': ['ds', 'sm'],
      '2015': ['ds', 'sm'],
      '2016': ['ds', 'sm'],
      '2017': ['ds', 'sm'],
      '2018': ['ds', 'sm'],
      '2019': ['ds', 'sm'],
      '2020': ['ds', 'sm'],
    },
    '328d': {
      '2012': ['ds', 'sm'],
      '2013': ['ds', 'sm'],
      '2014': ['ds', 'sm'],
      '2015': ['ds', 'sm'],
      '2016': ['ds', 'sm'],
      '2017': ['ds', 'sm'],
      '2018': ['ds', 'sm'],
      '2019': ['ds', 'sm'],
      '2020': ['ds', 'sm'],
    },
    '330i': {
      '2012': ['ds', 'sm'],
      '2013': ['ds', 'sm'],
      '2014': ['ds', 'sm'],
      '2015': ['ds', 'sm'],
      '2016': ['ds', 'sm'],
      '2017': ['ds', 'sm'],
      '2018': ['ds', 'sm'],
      '2019': ['ds', 'sm'],
      '2020': ['ds', 'sm'],
    },
    '335d': {
      '2009': ['fs', 'asp', 'sm'],
      '2010': ['fs', 'asp', 'sm'],
      '2011': ['fs', 'asp', 'sm'],
    },
    '335i': {
      '2006': ['asp', 'sm'],
      '2007': ['fs', 'asp', 'sm'],
      '2008': ['fs', 'asp', 'sm'],
      '2009': ['fs', 'asp', 'sm'],
      '2010': ['fs', 'asp', 'sm'],
      '2011': ['fs', 'asp', 'sm'],
      '2012': ['fs', 'asp', 'sm'],
      '2013': ['fs', 'asp', 'sm'],
    },
    '335is': {
      '2007': ['fs', 'asp', 'sm'],
      '2008': ['fs', 'asp', 'sm'],
      '2009': ['fs', 'asp', 'sm'],
      '2010': ['fs', 'asp', 'sm'],
      '2011': ['fs', 'asp', 'sm'],
      '2012': ['fs', 'asp', 'sm'],
      '2013': ['fs', 'asp', 'sm'],
    },
    '3 Series (F30/F31 chassis; 6-cyl Turbo, non-M3)': {
      '2012': ['fs', 'sm'],
      '2013': ['fs', 'sm'],
      '2014': ['fs', 'sm'],
      '2015': ['fs', 'sm'],
      '2016': ['fs', 'sm'],
      '2017': ['fs', 'sm'],
      '2018': ['fs', 'sm'],
      '2019': ['fs', 'sm'],
      '2020': ['fs', 'sm'],
    },
    '3 Series (E9x chassis, turbo)': {
      '2006': ['fs', 'stu', 'sm'],
      '2007': ['fs', 'stu', 'sm'],
      '2008': ['fs', 'stu', 'sm'],
      '2009': ['fs', 'stu', 'sm'],
      '2010': ['fs', 'stu', 'sm'],
      '2011': ['fs', 'stu', 'sm'],
      '2012': ['fs', 'stu', 'sm'],
      '2013': ['fs', 'stu', 'sm'],
    },
    '3 Series (non-M3, non-turbo)': {
      '1975': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1976': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1977': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1978': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1979': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1980': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1981': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1982': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1983': ['gs', 'stx', 'fsp', 'sm', 'dp'],
      '1984': ['gs', 'stx', 'dsp', 'sm', 'dp'],
      '1985': ['gs', 'stx', 'dsp', 'sm', 'dp'],
      '1986': ['gs', 'stx', 'dsp', 'sm', 'dp'],
      '1987': ['gs', 'stx', 'dsp', 'sm', 'dp'],
      '1988': ['gs', 'stx', 'dsp', 'sm', 'dp'],
      '1989': ['gs', 'stx', 'dsp', 'sm', 'dp'],
      '1990': ['gs', 'stx', 'dsp', 'sm', 'dp'],
      '1991': ['gs', 'stx', 'dsp', 'sm', 'dp'],
      '1992': ['gs', 'stx', 'dsp', 'sm', 'dp'],
      '1993': ['gs', 'stx', 'dsp', 'sm', 'dp'],
      '1994': ['gs', 'stx', 'dsp', 'sm'],
      '1995': ['gs', 'stx', 'dsp', 'sm'],
      '1996': ['gs', 'stx', 'dsp', 'sm'],
      '1997': ['gs', 'stx', 'dsp', 'sm'],
      '1998': ['gs', 'stx', 'dsp', 'sm'],
      '1999': ['gs', 'stx', 'dsp', 'sm'],
      '2000': ['gs', 'stx', 'dsp', 'sm'],
      '2001': ['gs', 'stx', 'dsp', 'sm'],
      '2002': ['gs', 'stx', 'dsp', 'sm'],
      '2003': ['gs', 'stx', 'dsp', 'sm'],
      '2004': ['gs', 'stx', 'dsp', 'sm'],
      '2005': ['gs', 'stx', 'dsp', 'sm'],
      '2006': ['gs', 'stx', 'dsp', 'sm'],
      '2007': ['gs', 'stx', 'sm'],
      '2008': ['gs', 'stx', 'sm'],
      '2009': ['gs', 'stx', 'sm'],
      '2010': ['gs', 'stx', 'sm'],
      '2011': ['gs', 'stx', 'sm'],
      '2012': ['gs', 'stx', 'sm'],
      '2013': ['gs', 'stx', 'sm'],
    },
    '4 Series (F32/F33/F36 chassis; 6-cyl Turbo)': {
      '2014': ['fs', 'sm'],
      '2015': ['fs', 'sm'],
      '2016': ['fs', 'sm'],
      '2017': ['fs', 'sm'],
      '2018': ['fs', 'sm'],
      '2019': ['fs', 'sm'],
      '2020': ['fs', 'sm'],
    },
    '5 Series (G30/G31/G38 chassis)': {
      '2017': ['fs', 'sm'],
      '2018': ['fs', 'sm'],
      '2019': ['fs', 'sm'],
      '2020': ['fs', 'sm'],
    },
    '5 Series (V8)': {
      'all': ['fs', 'sm'],
    },
    '5 Series; 6-cyl, non-M5)': {
      '1975': ['gs', 'esp', 'sm', 'dp'],
      '1976': ['gs', 'esp', 'sm', 'dp'],
      '1977': ['gs', 'esp', 'sm', 'dp'],
      '1978': ['gs', 'esp', 'sm', 'dp'],
      '1985': ['gs', 'esp', 'sm'],
      '1986': ['gs', 'esp', 'sm'],
      '1987': ['gs', 'esp', 'sm'],
      '1988': ['gs', 'esp', 'sm'],
      '1989': ['gs', 'esp', 'sm'],
      '1990': ['gs', 'esp', 'sm'],
      '1991': ['gs', 'esp', 'sm'],
      '1992': ['gs', 'esp', 'sm'],
      '1993': ['gs', 'esp', 'sm'],
      '1994': ['gs', 'esp', 'sm'],
      '1995': ['gs', 'esp', 'sm'],
      '1996': ['gs', 'esp', 'sm'],
      '1997': ['gs', 'esp', 'sm'],
      '1998': ['gs', 'esp', 'sm'],
      '1999': ['gs', 'esp', 'sm'],
      '2000': ['gs', 'esp', 'sm'],
      '2001': ['gs', 'esp', 'sm'],
      '2002': ['gs', 'esp', 'sm'],
      '2003': ['gs', 'esp', 'sm'],
    },
    '6 Series; 6-cyl, non-M6)': {
      '1984': ['gs', 'esp', 'sm'],
      '1985': ['gs', 'esp', 'sm'],
      '1986': ['gs', 'esp', 'sm'],
      '1987': ['gs', 'esp', 'sm'],
      '1988': ['gs', 'esp', 'sm'],
      '1989': ['gs', 'esp', 'sm'],
    },
    '6 series (E63/E64, F12/F13, & G32 chassis)': {
      '2003': ['fs', 'sm'],
      '2004': ['fs', 'sm'],
      '2005': ['fs', 'sm'],
      '2006': ['fs', 'sm'],
      '2007': ['fs', 'sm'],
      '2008': ['fs', 'sm'],
      '2009': ['fs', 'sm'],
      '2010': ['fs', 'sm'],
      '2011': ['fs', 'sm'],
      '2012': ['fs', 'sm'],
      '2013': ['fs', 'sm'],
      '2014': ['fs', 'sm'],
      '2015': ['fs', 'sm'],
      '2016': ['fs', 'sm'],
      '2017': ['fs', 'sm'],
      '2018': ['fs', 'sm'],
      '2019': ['fs', 'sm'],
      '2020': ['fs', 'sm'],
    },
    '8 series coupe': {
      'all': ['fs', 'sm'],
    },
    'M235i': {
      '2014': ['fs', 'stu', 'asp', 'sm'],
      '2015': ['fs', 'stu', 'asp', 'sm'],
      '2016': ['fs', 'stu', 'asp', 'sm'],
    },
    'M240i (incl. xDrive)': {
      '2017': ['fs', 'sm'],
      '2018': ['fs', 'sm'],
      '2019': ['fs', 'sm'],
      '2020': ['fs', 'sm'],
    },
    '428i': {
      '2014': ['ds', 'sm'],
      '2015': ['ds', 'sm'],
      '2016': ['ds', 'sm'],
      '2017': ['ds', 'sm'],
      '2018': ['ds', 'sm'],
      '2019': ['ds', 'sm'],
      '2020': ['ds', 'sm'],
    },
    '430i': {
      '2014': ['ds', 'sm'],
      '2015': ['ds', 'sm'],
      '2016': ['ds', 'sm'],
      '2017': ['ds', 'sm'],
      '2018': ['ds', 'sm'],
      '2019': ['ds', 'sm'],
      '2020': ['ds', 'sm'],
    },
  },
  'Cadillac': {
    'XLR': {
      'all': ['ssr', 'as'],
    },
    'ATS-V': {
      '2016': ['bs'],
      '2017': ['bs'],
      '2018': ['bs'],
      '2019': ['bs'],
    },
    'ATS (2.0L Turbo)': {
      '2012': ['ds', 'stu'],
      '2013': ['ds', 'stu'],
      '2014': ['ds', 'stu'],
      '2015': ['ds', 'stu'],
      '2016': ['ds', 'stu'],
      '2017': ['ds', 'stu'],
      '2018': ['ds', 'stu'],
      '2019': ['ds', 'stu'],
    },
    'ATS (3.6L V6)': {
      'all': ['fs'],
    },
    'ATS (2.5L 4-cyl non-turbo)': {
      '2013': ['gs'],
      '2014': ['gs'],
      '2015': ['gs'],
      '2016': ['gs'],
    },
    'CTS (non-V, non-Vsport)': {
      '2003': ['ds', 'cp'],
      '2004': ['ds', 'cp'],
      '2005': ['ds', 'cp'],
      '2006': ['ds', 'cp'],
      '2007': ['ds', 'cp'],
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
    },
    'CTS-V & CTS-Vsport': {
      '2004': ['fs', 'esp', 'cp'],
      '2005': ['fs', 'esp', 'cp'],
      '2006': ['fs', 'esp', 'cp'],
      '2007': ['fs', 'esp', 'cp'],
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
    'ELR': {
      '2014': ['gs'],
      '2015': ['gs'],
      '2016': ['gs'],
    },
    'Catera': {
      'all': ['hs'],
    },
  },
  'Chevrolet': {
    'Camaro ZL1 1LE': {
      '2018': ['ss'],
      '2019': ['ss'],
      '2020': ['ss'],
    },
    'Corvette Grand Sport': {
      '2017': ['ss', 'ssr', 'ssp'],
      '2018': ['ss', 'ssr', 'ssp'],
      '2019': ['ss', 'ssr', 'ssp'],
    },
    'Corvette Stingray': {
      '2014': ['as', 'ssr', 'ssp'],
      '2015': ['as', 'ssp'],
      '2016': ['as', 'ssp'],
      '2017': ['as', 'ssp'],
      '2018': ['as', 'ssp'],
      '2019': ['as', 'ssp'],
      '2020': ['ss', 'ssp'],
    },
    'Corvette Z06': {
      '2001': ['as', 'ssr', 'ssp'],
      '2002': ['as', 'ssr', 'ssp'],
      '2003': ['as', 'ssr', 'ssp'],
      '2004': ['as', 'ssr', 'ssp'],
      '2015': ['ss', 'ssp'],
      '2016': ['ss', 'ssp'],
      '2017': ['ss', 'ssp'],
      '2018': ['ss', 'ssp'],
      '2019': ['ss', 'ssp'],
    },
    'Corvette ZR1': {
      '2009': ['ss', 'ssp'],
      '2010': ['ss', 'ssp'],
      '2011': ['ss', 'ssp'],
      '2012': ['ss', 'ssp'],
      '2013': ['ss', 'ssp'],
    },
    'Camaro Z28': {
      '2014': ['as', 'ssr', 'stu'],
      '2015': ['as', 'ssr', 'stu'],
    },
    'Camaro ZL1 (non-1LE)': {
      '2012': ['as', 'ssr', 'asp'],
      '2013': ['as', 'ssr', 'asp'],
      '2014': ['as', 'ssr'],
      '2015': ['as', 'ssr'],
      '2017': ['as', 'ssr', 'asp'],
      '2018': ['as', 'ssr', 'asp'],
      '2019': ['as', 'ssr', 'asp'],
      '2020': ['as', 'ssr'],
    },
    'Corvette (C6, non-ZR1)': {
      '2005': ['as', 'ssr', 'ssp'],
      '2006': ['as', 'ssr', 'ssp'],
      '2007': ['as', 'ssr', 'ssp'],
      '2008': ['as', 'ssr', 'ssp'],
      '2009': ['as', 'ssr', 'ssp'],
      '2010': ['as', 'ssr', 'ssp'],
      '2011': ['as', 'ssr', 'ssp'],
      '2012': ['as', 'ssr', 'ssp'],
      '2013': ['as', 'ssr', 'ssp'],
    },
    'Camaro SS 1LE': {
      '1998': ['fs', 'stu'],
      '1999': ['fs', 'stu'],
      '2000': ['fs', 'stu'],
      '2001': ['fs', 'stu'],
      '2002': ['fs', 'stu'],
      '2010': ['fs', 'stu', 'esp'],
      '2011': ['fs', 'stu', 'esp'],
      '2012': ['fs', 'stu', 'esp'],
      '2013': ['fs', 'stu', 'esp'],
      '2014': ['fs', 'stu', 'esp'],
      '2015': ['fs', 'stu', 'esp'],
      '2017': ['bs', 'ssr', 'stu'],
      '2018': ['bs', 'ssr', 'stu'],
      '2019': ['bs', 'ssr', 'stu'],
      '2020': ['bs', 'ssr', 'stu'],
    },
    'Camaro SS (non-1LE)': {
      '2016': ['fs', 'stu'],
      '2017': ['fs', 'stu'],
      '2018': ['fs', 'stu'],
      '2019': ['fs', 'stu'],
      '2020': ['fs', 'stu'],
    },
    'Corvette (C5, non-Z06)': {
      '1997': ['bs', 'stu', 'ssp'],
      '1998': ['bs', 'stu', 'ssp'],
      '1999': ['bs', 'stu', 'ssp'],
      '2000': ['bs', 'stu', 'ssp'],
      '2001': ['bs', 'stu', 'ssp'],
      '2002': ['bs', 'stu', 'ssp'],
      '2003': ['bs', 'stu', 'ssp'],
      '2004': ['bs', 'stu', 'ssp'],
    },
    'Corvette (C4, all, STU excl. LT4 engine & ZR1)': {
      '1984': ['bs', 'stu', 'bsp'],
      '1985': ['bs', 'stu', 'bsp'],
      '1986': ['bs', 'stu', 'bsp'],
      '1987': ['bs', 'stu', 'bsp'],
      '1988': ['bs', 'stu', 'bsp'],
      '1989': ['bs', 'stu', 'bsp'],
      '1990': ['bs', 'stu', 'bsp'],
      '1991': ['bs', 'stu', 'bsp'],
      '1992': ['bs', 'stu', 'bsp'],
      '1993': ['bs', 'stu', 'bsp'],
      '1994': ['bs', 'stu', 'bsp'],
      '1995': ['bs', 'stu', 'bsp'],
      '1996': ['bs', 'stu', 'bsp'],
    },
    'Corvette': {
      '1953': ['fs', 'bsp'],
      '1954': ['fs', 'bsp'],
      '1955': ['fs', 'bsp'],
      '1956': ['fs', 'bsp'],
      '1957': ['fs', 'bsp'],
      '1958': ['fs', 'bsp'],
      '1959': ['fs', 'bsp'],
      '1960': ['fs', 'bsp'],
      '1961': ['fs', 'bsp'],
      '1962': ['fs', 'bsp'],
      '1963': ['cs', 'bsp'],
      '1964': ['cs', 'bsp'],
      '1965': ['cs', 'bsp'],
      '1966': ['cs', 'bsp'],
      '1967': ['cs', 'bsp'],
      '1968': ['cs', 'bsp'],
      '1969': ['cs', 'bsp'],
      '1970': ['cs', 'bsp'],
      '1971': ['cs', 'bsp'],
      '1972': ['cs', 'bsp'],
      '1973': ['cs', 'bsp'],
      '1974': ['cs', 'bsp'],
      '1975': ['cs', 'bsp'],
      '1976': ['cs', 'bsp'],
      '1977': ['cs', 'bsp'],
      '1978': ['cs', 'bsp'],
      '1979': ['cs', 'bsp'],
      '1980': ['cs', 'bsp'],
      '1981': ['cs', 'bsp'],
      '1982': ['cs', 'bsp'],
    },
    'Camaro LS & LT (2.0L Turbo; incl. 1LE)': {
      '2016': ['ds', 'esp'],
      '2017': ['ds', 'esp'],
      '2018': ['ds', 'esp'],
      '2019': ['ds', 'esp'],
      '2020': ['ds', 'esp'],
    },
    'Camaro (V6)': {
      '2010': ['ds', 'stu'],
      '2011': ['ds', 'stu'],
      '2012': ['ds', 'stu'],
      '2013': ['ds', 'stu'],
      '2014': ['ds', 'stu'],
      '2015': ['ds', 'stu'],
    },
    'Cobalt SS (2.0L Turbo)': {
      '2008': ['ds', 'sth', 'dsp'],
      '2009': ['ds', 'sth', 'dsp'],
      '2010': ['ds', 'sth', 'dsp'],
    },
    'Camaro (V8 non-supercharged, not otherwise classified)': {
      'all': ['fs', 'stu'],
    },
    'Camaro V6 1LE': {
      '2017': ['fs', 'stu'],
      '2018': ['fs', 'stu'],
      '2019': ['fs', 'stu'],
      '2020': ['fs', 'stu'],
    },
    'Camaro (V6 & V8; excl. SS 1LE, ZL1, Suspension Lowering Kit, and Brembo® 6-piston Front Brake Kit)': {
      '2016': ['fs', 'stu'],
      '2017': ['fs', 'stu'],
      '2018': ['fs', 'stu'],
      '2019': ['fs', 'stu'],
      '2020': ['fs', 'stu'],
    },
    'SS Sedan': {
      '2013': ['fs', 'esp'],
      '2014': ['fs', 'esp'],
      '2015': ['fs', 'esp'],
      '2016': ['fs', 'esp'],
      '2017': ['fs', 'esp'],
    },
    'Cobalt SS (2.0L SC)': {
      '2005': ['gs', 'stx', 'dsp'],
      '2006': ['gs', 'stx', 'dsp'],
      '2007': ['gs', 'stx', 'dsp'],
    },
    'HHR': {
      '2008': ['sth', 'dsp'],
      '2009': ['sth', 'dsp'],
      '2010': ['sth', 'dsp'],
      '2012': ['sth', 'dsp'],
    },
    'Malibu (all)': {
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
      '2020': ['gs'],
    },
    'Aveo': {
      'all': ['hs'],
    },
    'Beretta (NOC)': {
      'all': ['hs'],
    },
    'Bolt': {
      'all': ['hs', 'sth'],
    },
    'Camaro (4-cyl & 6-cyl)': {
      '1967': ['hs', 'stu', 'esp'],
      '1968': ['hs', 'stu', 'esp'],
      '1969': ['hs', 'stu', 'esp'],
      '1970': ['hs', 'stu', 'esp'],
      '1971': ['hs', 'stu', 'esp'],
      '1972': ['hs', 'stu', 'esp'],
      '1973': ['hs', 'stu', 'esp'],
      '1974': ['hs', 'stu', 'esp'],
      '1975': ['hs', 'stu', 'esp'],
      '1976': ['hs', 'stu', 'esp'],
      '1977': ['hs', 'stu', 'esp'],
      '1978': ['hs', 'stu', 'esp'],
      '1979': ['hs', 'stu', 'esp'],
      '1980': ['hs', 'stu', 'esp'],
      '1981': ['hs', 'stu', 'esp'],
      '1982': ['hs', 'stu', 'fsp'],
      '1983': ['hs', 'stu', 'fsp'],
      '1984': ['hs', 'stu', 'fsp'],
      '1985': ['hs', 'stu', 'fsp'],
      '1986': ['hs', 'stu', 'fsp'],
      '1987': ['hs', 'stu'],
      '1988': ['hs', 'stu'],
      '1989': ['hs', 'stu'],
      '1990': ['hs', 'stu'],
      '1991': ['hs', 'stu'],
      '1992': ['hs', 'stu'],
      '1993': ['hs', 'stu'],
      '1994': ['hs', 'stu'],
      '1995': ['hs', 'stu'],
      '1996': ['hs', 'stu'],
      '1997': ['hs', 'stu'],
      '1998': ['hs', 'stu'],
      '1999': ['hs', 'stu'],
      '2000': ['hs', 'stu'],
      '2001': ['hs', 'stu'],
      '2002': ['hs', 'stu'],
    },
    'Chevelle': {
      '1964': ['esp'],
      '1965': ['esp'],
      '1966': ['esp'],
      '1967': ['esp'],
      '1968': ['esp'],
      '1969': ['esp'],
      '1970': ['esp'],
      '1971': ['esp'],
      '1972': ['esp'],
      '1973': ['esp'],
      '1974': ['esp'],
      '1975': ['esp'],
      '1976': ['esp'],
    },
    'Chevette': {
      'all': ['hs', 'fsp'],
    },
    'Cobalt (all, non-turbo, STS: 2.2L)': {
      '2005': ['hs', 'stx', 'sts', 'dsp'],
      '2006': ['hs', 'stx', 'sts', 'dsp'],
      '2007': ['hs', 'stx', 'sts', 'dsp'],
      '2008': ['hs', 'stx', 'sts', 'dsp'],
      '2009': ['hs', 'stx', 'sts', 'dsp'],
      '2010': ['hs', 'stx', 'sts', 'dsp'],
    },
    'Corvair (all yenko)': {
      'all': ['hs', 'esp'],
    },
    'Corvair (all non-yenko)': {
      'all': ['hs', 'fsp'],
    },
    'Cruze': {
      'all': ['hs', 'sts'],
    },
    'Nova (FWD)': {
      '1986': ['hs'],
      '1987': ['hs'],
      '1988': ['hs'],
    },
    'Nova (RWD 4-cyl & 6-cyl)': {
      '1962': ['hs'],
      '1963': ['hs'],
      '1964': ['hs'],
      '1965': ['hs'],
      '1966': ['hs'],
      '1967': ['hs'],
      '1968': ['hs'],
      '1969': ['hs'],
      '1970': ['hs'],
      '1971': ['hs'],
      '1972': ['hs'],
      '1973': ['hs'],
      '1974': ['hs'],
      '1975': ['hs'],
      '1976': ['hs'],
      '1977': ['hs'],
      '1978': ['hs'],
      '1979': ['hs'],
    },
    'Sonic (all, turbo)': {
      '2012': ['hs', 'sth', 'fsp'],
      '2013': ['hs', 'sth', 'fsp'],
      '2014': ['hs', 'sth', 'fsp'],
      '2015': ['hs', 'sth', 'fsp'],
      '2016': ['hs', 'sth', 'fsp'],
      '2017': ['hs', 'sth', 'fsp'],
      '2018': ['hs', 'sth', 'fsp'],
      '2019': ['hs', 'sth', 'fsp'],
      '2020': ['hs', 'sth', 'fsp'],
    },
    'Sonic (all, non-turbo)': {
      '2012': ['hs', 'sts', 'fsp', 'ep'],
      '2013': ['hs', 'sts', 'fsp', 'ep'],
      '2014': ['hs', 'sts', 'fsp', 'ep'],
      '2015': ['hs', 'sts', 'fsp', 'ep'],
      '2016': ['hs', 'sts', 'fsp', 'ep'],
      '2017': ['hs', 'sts', 'fsp', 'ep'],
      '2018': ['hs', 'sts', 'fsp'],
      '2019': ['hs', 'sts', 'fsp'],
      '2020': ['hs', 'sts', 'fsp'],
    },
    'Spark': {
      'all': ['sts'],
    },
    'Spectrum': {
      'all': ['hs'],
    },
    'Sprint': {
      'all': ['hs', 'sts'],
    },
    'Vega & Cosworth Vega': {
      'all': ['hs', 'dp'],
    },
    'Volt': {
      '2011': ['hs', 'sts'],
      '2012': ['hs', 'sts'],
      '2013': ['hs', 'sts'],
      '2014': ['hs', 'sts'],
      '2015': ['hs', 'sts'],
      '2016': ['hs'],
      '2017': ['hs'],
      '2018': ['hs'],
      '2019': ['hs'],
    },
    'S10 (4-cyl & 6-cyl), N/A': {
      'all': ['stx', 'fsp'],
    },
  },
  'Toyota': {
    '86 (with TRD Lowering Springs, TRD Sway Bar Kit, and TRD 17-in. Forged Wheel': {
      '2017': ['cs','dsp'],
      '2018': ['cs','dsp'],
      '2019': ['cs'],
      '2020': ['cs','stx'],

    },
    '86 (with TRD suspension and wheels': {
      '2017': ['ds','dsp'],
      '2018': ['ds','dsp'],
      '2019': ['ds'],
      '2020': ['ds','stx'],
    },
    'Camry': {
      'all': ['hs'],
    },
    'Camry V6': {
      'all': ['dsp'],
    },
    'Camry (4-cyl)': {
      'all': ['fsp'],
    },
    'Celica FWD; NOC': {
      'all': ['gs'],
      '1986': ['gs','fsp'],
      '1987': ['gs','fsp'],
      '1988': ['gs','fsp'],
      '1989': ['gs','fsp'],
      '1991': ['gs','fsp'],
      '1992': ['gs','fsp'],
      '1993': ['gs','fsp'],
    },
    'Celica All-Trac Turbo': {
      'all': ['gs','dsp'],
    },
    'Celica (all, non-AWD)': {
      '1970': ['fsp'],
      '1971': ['hs','fsp'],
      '1972': ['hs','fsp'],
      '1973': ['hs','fsp'],
      '1974': ['hs','fsp'],
      '1975': ['hs','fsp'],
      '1976': ['hs','fsp'],
      '1977': ['hs','fsp'],
      '1978': ['hs','fsp'],
      '1979': ['hs','fsp'],
      '1981': ['hs','fsp'],
      '1982': ['hs','fsp'],
      '1983': ['hs','fsp'],
      '1984': ['hs','fsp'],
      '1985': ['hs','fsp'],
      '1986': ['hs','fsp'],
      '1987': ['hs','fsp'],
      '1988': ['hs','fsp'],
      '1989': ['hs','fsp'],
      '1991': ['hs','fsp'],
      '1992': ['hs','fsp'],
      '1993': ['hs','fsp'],
      '1994': ['hs','fsp'],
      '1995': ['hs','fsp'],
      '1996': ['hs','fsp'],
      '1997': ['hs','fsp'],
      '1998': ['hs','fsp'],
      '1999': ['hs','fsp'],
      '2000': ['dsp','fsp'],
      '2001': ['dsp','fsp'],
      '2002': ['dsp','fsp'],
      '2003': ['dsp','fsp'],
      '2004': ['dsp'],
      '2005': ['dsp'],
    },
    'Celica (non-turbo)': {
      '1986': ['sts'],
      '1987': ['sts'],
      '1988': ['sts'],
      '1989': ['sts'],
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
  
    },
    'Celica GT': {
      '2000': ['gs'],
      '2001': ['gs'],
      '2002': ['gs'],
      '2003': ['gs'],
      '2004': ['gs'],
      '2005': ['gs'],
    },
    'Celica GTS': {
      '2000': ['gs'],
      '2001': ['gs'],
      '2002': ['gs'],
      '2003': ['gs'],
    },
    'Corolla': {
      'all': ['hs'],
      '1986': ['sts','hs'],
      '1987': ['sts','hs'],
      '1988': ['sts','hs'],
      '1989': ['sts','hs'],
      '1991': ['sts','hs'],
      '1992': ['sts','hs'],
      '1993': ['sts','hs'],
      '1994': ['sts','hs'],
      '1995': ['sts','hs'],
      '1996': ['sts','hs'],
      '1997': ['sts','hs'],
      '2003': ['sts','hs'],
      '2004': ['sts','hs'],
      '2005': ['sts','hs'],
      '2006': ['sts','hs'],
      '2007': ['sts','hs'],
      '2008': ['sts','hs'],
      '2009': ['sts','hs'],
      '2010': ['sts','hs'],
      '2011': ['sts','hs'],
      '2012': ['sts','hs'],
      '2013': ['sts','hs'],
      '2014': ['sts','hs'],
      '2015': ['sts','hs'],
      '2016': ['sts','hs'],
      '2017': ['sts','hs'],
      '2018': ['sts','hs'],
      '2019': ['sts','hs'],
    },
    'Corolla 1200': {
      'all': ['fsp'],
    },
    'Corolla (1600 & SR-5)': {
      '1970': ['fsp'],
      '1971': ['fsp'],
      '1972': ['fsp'],
      '1973': ['fsp'],
      '1974': ['fsp'],
      '1975': ['fsp'],
      '1976': ['fsp'],
      '1977': ['fsp'],
      '1978': ['fsp'],
      '1979': ['fsp'],
    },
    'Corolla (1600 & 1800,RWD)': {
      '1980': ['fsp'],
      '1981': ['fsp'],
      '1982': ['fsp'],
      '1983': ['fsp'],
    },
    'Corolla (AE86 chassis, all)': {
      '1984': ['fsp'],
      '1985': ['fsp'],
      '1986': ['fsp'],
      '1987': ['fsp'],
    },
    'Corolla FX16': {
      'all': ['fsp'],
    },
    'Corolla GTS (AE92 chassis, FWD)': {
      '1990': ['fsp'],
      '1990': ['fsp'],
    },
    'Cressida': {
      'all': ['hs'],
    },
    'Echo': {
      'all': ['hs'],
      '2001': ['sts','hs'],
      '2002': ['sts','hs'],
      '2003': ['sts','hs'],
      '2004': ['sts','hs'],
      '2005': ['sts','hs'],
    },
    'Matrix': {
      'all': ['hs'],
      '2003': ['sts','hs'],
      '2004': ['sts','hs'],
      '2005': ['sts','hs'],
      '2006': ['sts','hs'],
      '2007': ['sts','hs'],
      '2008': ['sts','hs'],
      '2009': ['sts','hs'],
      '2010': ['sts','hs'],
      '2011': ['sts','hs'],
      '2012': ['sts','hs'],
      '2013': ['sts','hs'],
    },
    'MR2 Turbo': {
      'all': ['cs'],
      '1991': ['cs','asp'],
      '1992': ['cs','asp'],
      '1993': ['cs','asp'],
      '1994': ['cs','asp'],
      '1995': ['cs','asp'],
    },
    'MR2 (non-turbo)': {
      '1985': ['es'],
      '1986': ['es'],
      '1987': ['es'],
      '1988': ['es'],
      '1989': ['es'],
      '1990': ['es'],
      '1991': ['es','sts','asp'],
      '1992': ['es','sts','asp'],
      '1993': ['es','sts','asp'],
      '1994': ['es','sts','asp'],
      '1995': ['es','sts','asp'],
    },
    'MR2 Spyder': {
      'all': ['stu'],
      '1991': ['asp'],
      '1992': ['asp'],
      '1993': ['asp'],
      '1994': ['asp'],
      '1995': ['asp'],
      '2000': ['es','stu','csp'],
      '2001': ['es','stu','csp'],
      '2002': ['es','stu','csp'],
      '2003': ['es','stu','csp'],
      '2004': ['es','stu','csp'],
      '2005': ['es','stu','csp'],
    },
    'MR2 Supercharged': {
      'all': ['es'],
      '1985': ['csp'],
      '1986': ['csp'],
      '1987': ['csp'],
      '1988': ['es','stu','csp','str'],
      '1989': ['es','stu','csp','str'],
    },
    'MR2 non-supercharged': {
      'all': ['es'],
      '1985': ['es','sts','csp'],
      '1986': ['es','sts','csp'],
      '1987': ['es','sts','csp'],
      '1988': ['es','sts','csp'],
      '1989': ['es','sts','csp'],
      '1991': ['asp'],
      '1992': ['asp'],
      '1993': ['asp'],
      '1994': ['asp'],
      '1995': ['asp'],
    },
    'Supra': {
      '1979': ['dsp'],
      '1980': ['dsp'],
      '1981': ['dsp'],
      '1982': ['dsp'],
      '1983': ['dsp'],
      '1984': ['dsp'],
      '1985': ['dsp'],
      '1986': ['dsp','esp'],
      '1987': ['esp'],
      '1988': ['esp'],
      '1989': ['esp'],
      '1990': ['esp'],
      '1991': ['esp'],
      '1992': ['esp'],
      '2020': ['bs','asp'],
    },
    'Supra Turbo': {
      '1987': ['fs'],
      '1988': ['fs'],
      '1989': ['fs'],
      '1990': ['fs'],
      '1991': ['fs'],
      '1992': ['fs'],
      '1993': ['bs','asp'],
      '1994': ['bs','asp'],
      '1995': ['bs','asp'],
      '1996': ['bs','asp'],
      '1997': ['bs','asp'],
      '1998': ['bs','asp'],
    },
    'Supra (non-turbo)': {
      '1979': ['hs'],
      '1980': ['hs'],
      '1981': ['hs'],
      '1982': ['hs'],
      '1983': ['hs'],
      '1984': ['hs'],
      '1985': ['hs'],
      '1986': ['hs'],
      '1987': ['hs'],
      '1988': ['hs'],
      '1989': ['hs'],
      '1990': ['hs'],
      '1991': ['hs'],
      '1992': ['hs'],
      '1993': ['fs','stx','esp'],
      '1994': ['fs','stx','esp'],
      '1995': ['fs','stx','esp'],
      '1996': ['fs','stx','esp'],
      '1997': ['fs','stx'],
      '1998': ['fs','stx'],
    'Paseo': {
      'all': ['hs'],
    },
    'Prius': {
      'all': ['hs'],
    },
    'Starlet': {
      'all': ['hs','fsp'],
    },
    'Tacoma': {
      'all': ['hs'],
      '1995': ['hs','stx'],
      '1996': ['hs','stx'],
      '1997': ['hs','stx'],
      '1998': ['hs','stx'],
      '1999': ['hs','stx'],
      '2000': ['hs','stx'],
      '2001': ['hs','stx'],
      '2002': ['hs','stx'],
      '2003': ['hs','stx'],
      '2004': ['hs','stx'],
      '2005': ['hs','stx'],
      '2006': ['hs','stx'],
      '2007': ['hs','stx'],
      '2008': ['hs','stx'],
      '2009': ['hs','stx'],
      '2010': ['hs','stx'],
      '2011': ['hs','stx'],
      '2012': ['hs','stx'],
      '2013': ['hs','stx'],
      '2014': ['hs','stx'],
      '2015': ['hs','stx'],
      '2016': ['hs','stx'],
      '2017': ['hs','stx'],
      '2018': ['hs','stx'],
      '2019': ['hs','stx'],
      '2020': ['hs','stx'],
      
    },
     'Tercel': {
      'all': ['hs','fsp'],
    },
    'Yaris': {
      'all': ['hs','sts','fsp'],
    },
  },
};

/**
 * handles navbar opening
 */
function openNav() {
  document.getElementById('mySidebar').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
}

/**
 * handles navbar closing
 */
function closeNav() {
  document.getElementById('mySidebar').style.width = '0';
  document.getElementById('main').style.marginLeft= '0';
}

/**
 * populates the subclass table
 */
function populateSubclasses() {
  for (let classAcronym in subclassMap) {
    let id = classAcronym.concat('-a');
    aSelect = document.getElementById(id);
    aSelect.text = subclassMap[classAcronym];
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
    let providedMake = sessionStorage.getItem('make');
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
    let providedModel = sessionStorage.getItem('model');
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
    let providedYear = sessionStorage.getItem('year');
    yearSelect.value = providedYear;
  } else {
    sessionStorage.setItem('year', yearSelect.value);
  }

  if (sessionStorage.getItem('make') && sessionStorage.getItem('model') && sessionStorage.getItem('year')) {
    let providedMake = sessionStorage.getItem('make');
    let providedModel = sessionStorage.getItem('model');
    let providedYear = sessionStorage.getItem('year');

    let table = document.getElementById('classesTable');
    for (var i = 0, row; row = table.rows[i]; i++) {
      for (var j = 0, col; col = row.cells[j]; j++) {
        col.classList.remove('highlighted');
      }
    }

    subClasses = allSoloCars[providedMake][providedModel][providedYear];
    for (let i = 0; i < subClasses.length; i++) {
      let tableElement = document.getElementById(subClasses[i]);
      tableElement.classList.add('highlighted');
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
  let e = document.getElementById(id);
  e.style.display = 'none';
}

/**
 * Removes the answer to a question from sessionStorage
 * @param {String} question is the sessionState key to remove
 */
function resetQuestion(question) {
  sessionStorage.removeItem(question);
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
  for (let i = 0; i < carFlags[className].length; i++) {
    hideItem(carFlags[className][i]);
    if (!sessionStorage.getItem(carFlags[className][i])) {
      remainingQuestions.push(carFlags[className][i]);
    }
  }
  if (sessionStorage.getItem('answeredIndex')) {
    const menuElement = document.getElementById(carFlags[className][sessionStorage.getItem('answeredIndex')].concat('Menu'));
    menuElement.style.color = '#000000';
    if (sessionStorage.getItem(carFlags[className][sessionStorage.getItem('answeredIndex')]) == 'true') {
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
      let newDiv = document.createElement('div');
      newDiv.setAttribute('id', 'possibleClassesList');
      let specificClass = document.getElementById('specificClass');
      let possibleClasses = allSoloCars[sessionStorage.getItem('make')][sessionStorage.getItem('model')][sessionStorage.getItem('year')];
      let possibleClassesString = '';
      for (let i=0; i<possibleClasses.length; i++) {
        if (i == 0) {
          possibleClassesString = possibleClassesString.concat('\n');
        }
        possibleClassesString = possibleClassesString.concat(subclassMap[possibleClasses[i]]);
        possibleClassesString = possibleClassesString.concat('\n');
      }
      let newChild = document.createTextNode(possibleClassesString);
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
