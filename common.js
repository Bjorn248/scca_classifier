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

const allCars = {
  'Acura': {
    'NSX Alex Zanardi Signature Edition': {
      'all': ['as'],
    },
    'NSX': {
      '1990': ['bs', 'asp', 'fp'],
      '1991': ['bs', 'asp', 'fp'],
      '1992': ['bs', 'asp', 'fp'],
      '1993': ['bs', 'asp', 'fp'],
      '1994': ['bs', 'asp', 'fp'],
      '1995': ['bs', 'asp', 'fp'],
      '1996': ['bs', 'asp', 'fp'],
      '1997': ['bs', 'asp', 'fp'],
      '1998': ['bs', 'asp', 'fp'],
      '1999': ['bs', 'asp', 'fp'],
      '2000': ['bs', 'asp', 'fp'],
      '2001': ['bs', 'asp', 'fp'],
      '2002': ['bs', 'asp', 'fp'],
      '2003': ['bs', 'asp', 'fp'],
      '2004': ['bs', 'asp', 'fp'],
      '2005': ['bs', 'asp', 'fp'],
      '2016': ['ss', 'ssp'],
      '2017': ['ss', 'ssp'],
      '2018': ['ss', 'ssp'],
      '2019': ['ss', 'ssp'],
      '2020': ['ss', 'ssp'],
    },
    'Integra Type R': {
      'all': ['ds', 'stx', 'dsp', 'ep'],
    },
    'RLX': {
      'all': ['gs'],
    },
    'TLX': {
      'all': ['gs'],
    },
    'CL (all)': {
      'all': ['hs'],
    },
    'ILX': {
      '2012': ['hs'],
      '2013': ['hs', 'stx'],
      '2014': ['hs', 'stx'],
      '2015': ['hs', 'stx'],
      '2016': ['hs', 'stx'],
      '2017': ['hs', 'stx'],
      '2018': ['hs', 'stx'],
      '2019': ['hs', 'stx'],
      '2020': ['hs', 'stx'],
    },
    'Integra (all except Type R)': {
      '1986': ['hs', 'sts', 'fsp', 'ep'],
      '1987': ['hs', 'sts', 'fsp', 'ep'],
      '1988': ['hs', 'sts', 'fsp', 'ep'],
      '1989': ['hs', 'sts', 'fsp', 'ep'],
      '1990': ['hs', 'sts', 'dsp', 'ep'],
      '1991': ['hs', 'sts', 'dsp', 'ep'],
      '1992': ['hs', 'sts', 'dsp', 'ep'],
      '1993': ['hs', 'sts', 'dsp', 'ep'],
      '1994': ['hs', 'stx', 'dsp', 'ep'],
      '1995': ['hs', 'stx', 'dsp', 'ep'],
      '1996': ['hs', 'stx', 'dsp', 'ep'],
      '1997': ['hs', 'stx', 'dsp', 'ep'],
      '1998': ['hs', 'stx', 'dsp', 'ep'],
      '1999': ['hs', 'stx', 'dsp', 'ep'],
      '2000': ['hs', 'stx', 'dsp', 'ep'],
      '2001': ['hs', 'stx', 'dsp', 'ep'],
    },
    'Legend': {
      'all': ['hs', 'fsp'],
    },
    'RSX': {
      'all': ['hs', 'stx', 'dsp', 'ep'],
    },
    'TL': {
      'all': ['hs'],
    },
    'TSX': {
      'all': ['hs', 'stx', 'dsp'],
    },
    'Vigor': {
      'all': ['hs'],
    },
  },
  'Alfa Romeo': {
    '4C (incl. Spider)': {
      '2015': ['ss', 'ssr'],
      '2016': ['ss', 'ssr'],
      '2017': ['ss', 'ssr'],
      '2018': ['ss', 'ssr'],
      '2019': ['ss', 'ssr'],
      '2020': ['ss', 'ssr'],
    },
    'Giulia Quadrifoglio': {
      '2017': ['as'],
      '2018': ['as'],
      '2019': ['as'],
      '2020': ['as'],
    },
    'Giulia (incl. Ti)': {
      '2016': ['ds', 'stu'],
      '2017': ['ds', 'stu'],
      '2018': ['ds', 'stu'],
      '2019': ['ds', 'stu'],
      '2020': ['ds', 'stu'],
    },
    '2000 GTV': {
      'all': ['es', 'fsp', 'dp'],
    },
    '2000 Spider': {
      'all': ['es', 'fsp', 'dp'],
    },
    '1300': {
      'all': ['hs', 'fsp'],
    },
    '1600': {
      'all': ['hs', 'fsp', 'dp'],
    },
    '164 (non-S)': {
      '1991': ['hs'],
      '1992': ['hs'],
      '1993': ['hs'],
    },
    '1750 & 1750 GTV': {
      'all': ['hs', 'fsp', 'dp'],
    },
    '2000 (4-door sedan)': {
      'all': ['hs', 'fsp'],
    },
    'GTV V6': {
      'all': ['hs', 'dsp', 'fp'],
    },
    'Milano': {
      'all': ['hs', 'dsp'],
    },
    'Sedan (NOC)': {
      'all': ['hs'],
    },
    'Sport Sedan': {
      'all': ['dp'],
    },
    'Alfetta GT': {
      'all': ['fsp', 'dp'],
    },
    '1600 GTV': {
      'all': ['dp'],
    },
    'Giuletta Sprint & Spider (1570 cc)': {
      'all': ['dp'],
    },
    'Giulia 1300 & 1300 Ti': {
      '1964': ['dp'],
      '1965': ['dp'],
      '1966': ['dp'],
      '1967': ['dp'],
      '1968': ['dp'],
      '1969': ['dp'],
      '1970': ['dp'],
      '1971': ['dp'],
    },
    'GT 1300 Junior & GTA Junior': {
      '1966': ['dp'],
      '1967': ['dp'],
      '1968': ['dp'],
      '1969': ['dp'],
      '1970': ['dp'],
      '1971': ['dp'],
      '1972': ['dp'],
      '1973': ['dp'],
      '1974': ['dp'],
      '1975': ['dp'],
      '1976': ['dp'],
      '1977': ['dp'],
    },
    'GTA (bore & stroke: 78mm x 67.5mm)': {
      'all': ['dp'],
    },
    'Junior Z': {
      'all': ['dp'],
    },
    'Spider Duetto 1750 Spider Veloce (1779 cc)': {
      '1969': ['dp'],
      '1970': ['dp'],
    },
  },
  'Audi': {
    'R8 (non-GT)': {
      '2008': ['ss', 'ssp'],
      '2009': ['ss', 'ssp'],
      '2010': ['ss', 'ssp'],
      '2011': ['ss', 'ssp'],
      '2012': ['ss', 'ssp'],
      '2013': ['ss', 'ssp'],
      '2014': ['ss', 'ssp'],
      '2015': ['ss', 'ssp'],
      '2016': ['ssp'],
      '2017': ['ssp'],
      '2018': ['ssp'],
      '2019': ['ssp'],
    },
    'R8 (non-Plus)': {
      '2016': ['ss'],
      '2017': ['ss'],
      '2018': ['ss'],
      '2019': ['ss'],
      '2020': ['ss'],
    },
    'TT RS': {
      '2012': ['ss', 'ssr', 'ssp'],
      '2013': ['ss', 'ssr', 'ssp'],
      '2018': ['ss', 'asp'],
      '2019': ['ss', 'asp'],
      '2020': ['ss'],
    },
    'RS 3': {
      '2017': ['bs'],
      '2018': ['bs'],
      '2019': ['bs'],
    },
    'RS 4': {
      '2007': ['bs'],
      '2008': ['bs'],
    },
    'RS 5': {
      '2013': ['bs'],
      '2014': ['bs'],
      '2015': ['bs'],
    },
    'RS 6 (C5 Chassis)': {
      '2003': ['bs'],
      '2004': ['bs'],
    },
    'S4': {
      '2000': ['ds', 'stu', 'asp'],
      '2001': ['ds', 'stu', 'asp'],
      '2002': ['ds', 'stu', 'asp'],
      '2003': ['ds', 'stu', 'asp'],
      '2004': ['fs', 'stu', 'esp'],
      '2005': ['fs', 'stu', 'esp'],
      '2006': ['fs', 'stu', 'esp'],
      '2007': ['fs', 'stu', 'esp'],
      '2008': ['fs', 'stu', 'esp'],
      '2009': ['fs', 'stu', 'esp'],
      '2010': ['bs', 'stu', 'asp'],
      '2011': ['bs', 'stu', 'asp'],
      '2012': ['bs', 'stu', 'asp'],
      '2013': ['bs', 'stu', 'asp'],
      '2014': ['bs', 'stu', 'asp'],
      '2015': ['bs', 'stu', 'asp'],
      '2016': ['bs', 'stu', 'asp'],
      '2017': ['bs', 'stu'],
      '2018': ['bs', 'stu'],
      '2019': ['bs', 'stu'],
      '2020': ['bs', 'stu'],
    },
    'S5': {
      '2008': ['bs', 'stu'],
      '2009': ['bs', 'stu'],
      '2010': ['bs', 'stu'],
      '2011': ['bs', 'stu'],
      '2012': ['bs', 'stu'],
      '2013': ['bs', 'stu', 'asp'],
      '2014': ['bs', 'stu', 'asp'],
      '2015': ['bs', 'stu', 'asp'],
      '2016': ['bs', 'stu', 'asp'],
      '2017': ['bs', 'stu'],
      '2018': ['bs', 'stu'],
      '2019': ['bs', 'stu'],
    },
    'S6': {
      '2013': ['bs'],
      '2014': ['bs'],
      '2015': ['bs'],
      '2016': ['bs'],
      '2017': ['bs'],
      '2018': ['bs'],
    },
    'S7': {
      '2012': ['bs'],
      '2013': ['bs'],
      '2014': ['bs'],
      '2015': ['bs'],
      '2016': ['bs'],
      '2017': ['bs'],
      '2018': ['bs'],
    },
    'TTS': {
      '2008': ['ds', 'stu'],
      '2009': ['ds', 'stu', 'bsp'],
      '2010': ['ds', 'stu', 'bsp'],
      '2011': ['ds', 'stu', 'bsp'],
      '2012': ['ds', 'stu', 'bsp'],
      '2013': ['ds', 'stu', 'bsp'],
      '2014': ['ds', 'stu', 'asp'],
      '2015': ['ds', 'stu', 'asp'],
      '2016': ['bs', 'asp'],
      '2016': ['bs', 'asp'],
      '2017': ['bs', 'asp'],
      '2018': ['bs', 'asp'],
      '2019': ['bs', 'asp'],
      '2020': ['bs'],
    },
    'A3 (2.0T, all)': {
      '2015': ['ds', 'sth'],
      '2016': ['ds', 'sth'],
      '2017': ['ds', 'sth'],
      '2018': ['ds', 'sth'],
      '2019': ['ds', 'sth'],
      '2020': ['ds', 'sth'],
    },
    'A3 quattro (3.2L V6, AWD)': {
      '2006': ['ds', 'sth'],
      '2007': ['ds', 'sth'],
      '2008': ['ds', 'sth'],
      '2009': ['ds', 'sth'],
    },
    'A5': {
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
    },
    'S3 (2.0T)': {
      '2015': ['ds', 'stu'],
      '2016': ['ds', 'stu'],
      '2017': ['ds', 'stu'],
      '2018': ['ds', 'stu'],
      '2019': ['ds', 'stu'],
      '2020': ['ds'],
    },
    'TT (1.8T, non-quattro/FWD)': {
      '2000': ['ds', 'sth', 'bsp'],
      '2001': ['ds', 'sth', 'bsp'],
      '2002': ['ds', 'sth', 'bsp'],
      '2003': ['ds', 'sth', 'bsp'],
      '2004': ['ds', 'sth', 'bsp'],
      '2005': ['ds', 'sth', 'bsp'],
      '2006': ['ds', 'sth', 'bsp'],
    },
    'TT (2.0T, non-quattro/FWD)': {
      '2008': ['ds', 'sth'],
      '2009': ['ds', 'sth'],
    },
    'TT quattro (AWD)': {
      '2000': ['ds', 'sth', 'bsp'],
      '2001': ['ds', 'sth', 'bsp'],
      '2002': ['ds', 'sth', 'bsp'],
      '2003': ['ds', 'sth', 'bsp'],
      '2004': ['ds', 'sth', 'bsp'],
      '2005': ['ds', 'sth', 'bsp'],
      '2006': ['ds', 'sth', 'bsp'],
      '2008': ['ds', 'sth', 'bsp'],
      '2009': ['ds', 'sth', 'bsp'],
      '2010': ['ds', 'sth', 'bsp'],
      '2011': ['ds', 'sth', 'bsp'],
      '2012': ['ds', 'sth', 'bsp'],
      '2013': ['ds', 'sth', 'bsp'],
      '2014': ['ds', 'sth', 'bsp'],
      '2015': ['ds', 'sth', 'bsp'],
      '2016': ['ds', 'sth', 'bsp'],
      '2017': ['ds', 'sth', 'bsp'],
      '2018': ['ds', 'sth', 'bsp'],
      '2019': ['ds', 'sth', 'bsp'],
      '2020': ['ds', 'sth', 'bsp'],
    },
    'A6 (V6 Supercharged)': {
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
    },
    'A6 (V8)': {
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
      '2007': ['fs'],
      '2008': ['fs'],
      '2009': ['fs'],
      '2010': ['fs'],
      '2011': ['fs'],
    },
    'A7 (all)': {
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
    'A3 (1.8T, FWD)': {
      '2015': ['gs', 'sth'],
      '2016': ['gs', 'sth'],
    },
    'A3 Sportback e-tron': {
      '2017': ['gs', 'sth'],
      '2018': ['gs', 'sth'],
    },
    'A4': {
      '1994': ['gs', 'sth'],
      '1995': ['gs', 'sth', 'dsp'],
      '1996': ['gs', 'sth', 'dsp'],
      '1997': ['gs', 'sth', 'dsp'],
      '1998': ['gs', 'sth', 'dsp'],
      '1999': ['gs', 'sth', 'dsp'],
      '2000': ['gs', 'sth', 'dsp'],
      '2001': ['gs', 'sth', 'dsp'],
      '2002': ['gs', 'sth', 'dsp'],
      '2003': ['gs', 'sth', 'dsp'],
      '2004': ['gs', 'sth', 'dsp'],
      '2005': ['gs', 'sth', 'dsp'],
      '2006': ['gs', 'sth'],
      '2007': ['gs', 'sth'],
      '2008': ['gs', 'sth', 'asp'],
      '2009': ['gs', 'sth', 'asp'],
      '2010': ['gs', 'sth', 'asp'],
      '2011': ['gs', 'sth', 'asp'],
      '2012': ['gs', 'sth', 'asp'],
      '2013': ['gs', 'sth', 'asp'],
      '2014': ['gs', 'sth', 'asp'],
      '2015': ['gs', 'sth', 'asp'],
      '2016': ['gs', 'sth', 'asp'],
      '2017': ['gs', 'sth'],
      '2018': ['gs', 'sth'],
      '2019': ['gs', 'sth'],
      '2020': ['gs', 'sth'],
    },
    'A6 (V6 NOC & 4-cyl)': {
      'all': ['gs'],
    },
    'A8 & V8 quattro (AWD)': {
      'all': ['gs', 'esp'],
    },
    'Quattro (Coupe Turbo)': {
      'all': ['gs', 'bsp'],
    },
    '80': {
      'all': ['hs', 'fsp'],
    },
    '90': {
      'all': ['hs', 'fsp'],
    },
    '100 (non-S4)': {
      'all': ['hs', 'fsp'],
    },
    '200 Turbo quattro': {
      'all': ['hs', 'esp'],
    },
    '4000': {
      'all': ['hs', 'fsp'],
    },
    '5000': {
      'all': ['hs', 'esp'],
    },
    '5000 Turbo': {
      'all': ['hs', 'fsp'],
    },
    'A3 (FWD)': {
      '2006': ['hs', 'sth', 'dsp'],
      '2007': ['hs', 'sth', 'dsp'],
      '2008': ['hs', 'sth', 'dsp'],
      '2009': ['hs', 'sth', 'dsp'],
      '2010': ['hs', 'sth', 'dsp'],
      '2011': ['hs', 'sth', 'dsp'],
      '2012': ['hs', 'sth', 'dsp'],
      '2013': ['hs', 'sth', 'dsp'],
    },
    'Coupe quattro (non-turbo)': {
      'all': ['hs', 'dsp'],
    },
    'S4 (100 CS chassis)': {
      '1992': ['hs', 'stu'],
      '1993': ['hs', 'stu'],
      '1994': ['hs', 'stu'],
    },
  },
  'AMC': {
    'AMX': {
      'all': ['fs', 'esp'],
    },
    'Javelin (V8)': {
      'all': ['fs', 'esp'],
    },
    'Gremlin (4-cyl)': {
      'all': ['hs', 'fsp'],
    },
    'Gremlin (6-cyl)': {
      'all': ['hs'],
    },
    'Spirit (4-cyl)': {
      'all': ['hs', 'fsp'],
    },
    'Spirit (6-cyl)': {
      'all': ['hs'],
    },
  },
  'BMW': {
    '1600': {
      'all': ['hs', 'fsp'],
    },
    '1800': {
      'all': ['hs', 'fsp'],
    },
    '2000 CS Coupe': {
      'all': ['hs'],
    },
    '2002': {
      'all': ['hs', 'fsp'],
    },
    '2500': {
      'all': ['esp'],
    },
    '2800': {
      'all': ['esp'],
    },
    '3.0S & CS': {
      'all': ['esp'],
    },
    '318': {
      'all': ['hs', 'dsp'],
    },
    '320 (NOC)': {
      'all': ['hs'],
    },
    '7 Series (6-cyl)': {
      'all': ['hs', 'esp'],
    },
    'i3': {
      'all': ['hs'],
    },
    'i8': {
      '2014': ['ss'],
      '2015': ['ss'],
      '2016': ['ss'],
      '2017': ['ss'],
      '2018': ['ss'],
      '2019': ['ss'],
      '2020': ['ss'],
    },
    'M4 GTS': {
      'all': ['ss'],
    },
    'Z8': {
      'all': ['ss', 'asp'],
    },
    'Bavaria': {
      'all': ['dsp'],
    },
    'M2 Performance Edition (ZL9)': {
      'all': ['as'],
    },
    'M3 CS': {
      '2018': ['as'],
      '2019': ['as'],
      '2020': ['as'],
    },
    'M4 CS': {
      '2018': ['as'],
      '2019': ['as'],
      '2020': ['as'],
    },
    '1M Coupe': {
      '2011': ['bs', 'asp'],
      '2012': ['bs', 'asp'],
    },
    'M Coupe': {
      '1996': ['cs', 'bsp'],
      '1997': ['cs', 'bsp'],
      '1998': ['cs', 'str', 'bsp'],
      '1999': ['cs', 'str', 'bsp'],
      '2000': ['cs', 'str', 'bsp'],
      '2001': ['bs', 'str', 'bsp'],
      '2002': ['bs', 'str', 'bsp'],
    },
    'M Roadster': {
      '1996': ['cs', 'bsp'],
      '1997': ['cs', 'bsp'],
      '1998': ['cs', 'str', 'bsp'],
      '1999': ['cs', 'str', 'bsp'],
      '2000': ['cs', 'str', 'bsp'],
      '2001': ['bs', 'str', 'bsp'],
      '2002': ['bs', 'str', 'bsp'],
    },
    'M2 (except Performance Edition ZL9)': {
      '2016': ['bs', 'asp'],
      '2017': ['bs', 'asp'],
      '2018': ['bs', 'asp'],
      '2019': ['bs', 'asp'],
      '2020': ['bs', 'asp'],
    },
    'M2 Competition': {
      '2019': ['bs'],
      '2020': ['bs'],
    },
    'M3': {
      '1988': ['cs', 'csp'],
      '1989': ['cs', 'csp'],
      '1990': ['cs', 'csp'],
      '1991': ['cs', 'csp'],
      '1995': ['ds', 'str', 'bsp'],
      '1996': ['ds', 'str', 'bsp'],
      '1997': ['ds', 'str', 'bsp'],
      '1998': ['ds', 'str', 'bsp'],
      '1999': ['ds', 'str', 'bsp'],
      '2000': ['fs', 'stu', 'bsp'],
      '2001': ['fs', 'stu', 'bsp'],
      '2002': ['fs', 'stu', 'bsp'],
      '2003': ['fs', 'stu', 'bsp'],
      '2004': ['fs', 'stu', 'bsp'],
      '2005': ['fs', 'stu', 'bsp'],
      '2006': ['fs', 'stu', 'bsp'],
      '2007': ['fs', 'esp'],
      '2008': ['fs', 'esp'],
      '2009': ['fs', 'esp'],
      '2010': ['fs', 'esp'],
      '2011': ['fs', 'esp'],
      '2012': ['fs', 'esp'],
      '2013': ['fs', 'esp'],
      '2015': ['bs', 'ssr'],
      '2016': ['bs', 'ssr'],
      '2017': ['bs', 'ssr'],
      '2018': ['bs'],
      '2019': ['bs'],
      '2020': ['bs'],
    },
    'M4': {
      '2015': ['bs', 'ssr', 'asp'],
      '2016': ['bs', 'ssr', 'asp'],
      '2017': ['bs', 'ssr', 'asp'],
      '2018': ['bs', 'asp'],
      '2019': ['bs', 'asp'],
      '2020': ['bs', 'asp'],
    },
    'M5': {
      '1988': ['fs'],
      '1989': ['fs'],
      '1990': ['fs'],
      '1991': ['fs'],
      '1992': ['fs'],
      '1993': ['fs'],
      '1998': ['fs', 'stx'],
      '1999': ['fs', 'stx'],
      '2000': ['fs', 'stx'],
      '2001': ['fs', 'stx'],
      '2002': ['fs', 'stx'],
      '2003': ['fs', 'stx'],
      '2004': ['fs'],
      '2005': ['fs'],
      '2006': ['fs'],
      '2007': ['fs'],
      '2008': ['fs'],
      '2009': ['fs'],
      '2010': ['fs'],
    },
    'X1': {
      '2013': ['stu'],
      '2014': ['stu'],
      '2015': ['stu'],
    },
    'Z3 (4-cyl)': {
      '1995': ['sts', 'csp'],
      '1996': ['es', 'sts', 'csp'],
      '1997': ['es', 'sts', 'csp'],
      '1998': ['es', 'sts', 'csp'],
      '1999': ['sts', 'csp'],
      '2000': ['sts', 'csp'],
      '2001': ['sts', 'csp'],
      '2002': ['sts', 'csp'],
    },
    'Z3 (6-cyl, non M)': {
      '1997': ['cs', 'str', 'bsp'],
      '1998': ['cs', 'str', 'bsp'],
      '1999': ['cs', 'str', 'bsp'],
      '2000': ['cs', 'str', 'bsp'],
      '2001': ['cs', 'str', 'bsp'],
      '2002': ['cs', 'str', 'bsp'],
    },
    'Z4 28i & 30i': {
      '2009': ['cs'],
      '2010': ['cs'],
      '2011': ['cs'],
      '2012': ['cs'],
      '2013': ['cs'],
      '2014': ['cs'],
      '2015': ['cs'],
      '2016': ['cs'],
    },
    'Z4 35i & 35is': {
      '2009': ['bs'],
      '2010': ['bs'],
      '2011': ['bs'],
      '2012': ['bs', 'asp'],
      '2013': ['bs', 'asp'],
      '2014': ['bs'],
      '2015': ['bs'],
      '2016': ['bs'],
    },
    'Z4 Coupe & Roadster (non-M)': {
      '2003': ['cs', 'str', 'bsp'],
      '2004': ['cs', 'str', 'bsp'],
      '2005': ['cs', 'str', 'bsp'],
      '2006': ['cs', 'str', 'bsp'],
      '2007': ['cs', 'str', 'bsp'],
      '2008': ['cs', 'str', 'bsp'],
    },
    'Z4 M Coupe & Roadster': {
      '2006': ['bs', 'bsp'],
      '2007': ['bs', 'bsp'],
      '2008': ['bs', 'bsp'],
    },
    '128i': {
      '2008': ['ds', 'stx', 'bsp'],
      '2009': ['ds', 'stx', 'bsp'],
      '2010': ['ds', 'stx', 'bsp'],
      '2011': ['ds', 'stx', 'bsp'],
      '2012': ['ds', 'stx', 'bsp'],
      '2013': ['ds', 'stx', 'bsp'],
    },
    '135i': {
      '2008': ['fs', 'stu', 'asp'],
      '2009': ['fs', 'stu', 'asp'],
      '2010': ['fs', 'stu', 'asp'],
      '2011': ['fs', 'stu', 'asp'],
      '2012': ['fs', 'stu', 'asp'],
      '2013': ['fs', 'stu', 'asp'],
    },
    '135is': {
      '2008': ['fs', 'asp'],
      '2009': ['fs', 'asp'],
      '2010': ['fs', 'asp'],
      '2011': ['fs', 'asp'],
      '2012': ['fs', 'asp'],
      '2013': ['fs', 'asp'],
    },
    '228i': {
      '2014': ['ds', 'stu'],
      '2015': ['ds', 'stu'],
      '2016': ['ds'],
      '2017': ['ds'],
      '2018': ['ds'],
      '2019': ['ds'],
      '2020': ['ds'],
    },
    '230i': {
      '2014': ['ds'],
      '2015': ['ds'],
      '2016': ['ds'],
      '2017': ['ds'],
      '2018': ['ds'],
      '2019': ['ds'],
      '2020': ['ds'],
    },
    '320i': {
      '2012': ['gs', 'bsp'],
      '2013': ['gs', 'bsp'],
      '2014': ['gs', 'bsp'],
      '2015': ['gs', 'bsp'],
      '2016': ['gs', 'bsp'],
      '2017': ['gs'],
      '2018': ['gs'],
      '2019': ['gs'],
    },
    '323i Convertible': {
      '1998': ['gs'],
      '1999': ['gs'],
    },
    '323is': {
      '1998': ['gs'],
      '1999': ['gs'],
    },
    '328i Convertible': {
      '1996': ['gs'],
      '1997': ['gs'],
      '1998': ['gs'],
      '1999': ['gs'],
    },
    '328is (E36)': {
      '1996': ['gs'],
      '1997': ['gs'],
      '1998': ['gs'],
      '1999': ['gs'],
    },
    '328i': {
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
    '328d': {
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
    '330i': {
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
    '335d': {
      '2009': ['fs', 'asp'],
      '2010': ['fs', 'asp'],
      '2011': ['fs', 'asp'],
    },
    '335i': {
      '2006': ['asp'],
      '2007': ['fs', 'asp'],
      '2008': ['fs', 'asp'],
      '2009': ['fs', 'asp'],
      '2010': ['fs', 'asp'],
      '2011': ['fs', 'asp'],
      '2012': ['fs', 'asp'],
      '2013': ['fs', 'asp'],
    },
    '335is': {
      '2007': ['fs', 'asp'],
      '2008': ['fs', 'asp'],
      '2009': ['fs', 'asp'],
      '2010': ['fs', 'asp'],
      '2011': ['fs', 'asp'],
      '2012': ['fs', 'asp'],
      '2013': ['fs', 'asp'],
    },
    '3 Series (F30/F31 chassis; 6-cyl Turbo, non-M3)': {
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
    '3 Series (E9x chassis, turbo)': {
      '2006': ['fs', 'stu'],
      '2007': ['fs', 'stu'],
      '2008': ['fs', 'stu'],
      '2009': ['fs', 'stu'],
      '2010': ['fs', 'stu'],
      '2011': ['fs', 'stu'],
      '2012': ['fs', 'stu'],
      '2013': ['fs', 'stu'],
    },
    '3 Series (non-M3, non-turbo)': {
      '1975': ['gs', 'stx', 'fsp'],
      '1976': ['gs', 'stx', 'fsp'],
      '1977': ['gs', 'stx', 'fsp'],
      '1978': ['gs', 'stx', 'fsp'],
      '1979': ['gs', 'stx', 'fsp'],
      '1980': ['gs', 'stx', 'fsp'],
      '1981': ['gs', 'stx', 'fsp'],
      '1982': ['gs', 'stx', 'fsp'],
      '1983': ['gs', 'stx', 'fsp'],
      '1984': ['gs', 'stx', 'dsp'],
      '1985': ['gs', 'stx', 'dsp'],
      '1986': ['gs', 'stx', 'dsp'],
      '1987': ['gs', 'stx', 'dsp'],
      '1988': ['gs', 'stx', 'dsp'],
      '1989': ['gs', 'stx', 'dsp'],
      '1990': ['gs', 'stx', 'dsp'],
      '1991': ['gs', 'stx', 'dsp'],
      '1992': ['gs', 'stx', 'dsp'],
      '1993': ['gs', 'stx', 'dsp'],
      '1994': ['gs', 'stx', 'dsp'],
      '1995': ['gs', 'stx', 'dsp'],
      '1996': ['gs', 'stx', 'dsp'],
      '1997': ['gs', 'stx', 'dsp'],
      '1998': ['gs', 'stx', 'dsp'],
      '1999': ['gs', 'stx', 'dsp'],
      '2000': ['gs', 'stx', 'dsp'],
      '2001': ['gs', 'stx', 'dsp'],
      '2002': ['gs', 'stx', 'dsp'],
      '2003': ['gs', 'stx', 'dsp'],
      '2004': ['gs', 'stx', 'dsp'],
      '2005': ['gs', 'stx', 'dsp'],
      '2006': ['gs', 'stx', 'dsp'],
      '2007': ['gs', 'stx'],
      '2008': ['gs', 'stx'],
      '2009': ['gs', 'stx'],
      '2010': ['gs', 'stx'],
      '2011': ['gs', 'stx'],
      '2012': ['gs', 'stx'],
      '2013': ['gs', 'stx'],
    },
    '4 Series (F32/F33/F36 chassis; 6-cyl Turbo)': {
      '2014': ['fs'],
      '2015': ['fs'],
      '2016': ['fs'],
      '2017': ['fs'],
      '2018': ['fs'],
      '2019': ['fs'],
      '2020': ['fs'],
    },
    '5 Series (G30/G31/G38 chassis)': {
      '2017': ['fs'],
      '2018': ['fs'],
      '2019': ['fs'],
      '2020': ['fs'],
    },
    '5 Series (V8)': {
      'all': ['fs'],
    },
    '5 Series; 6-cyl, non-M5)': {
      '1985': ['gs', 'esp'],
      '1986': ['gs', 'esp'],
      '1987': ['gs', 'esp'],
      '1988': ['gs', 'esp'],
      '1989': ['gs', 'esp'],
      '1990': ['gs', 'esp'],
      '1991': ['gs', 'esp'],
      '1992': ['gs', 'esp'],
      '1993': ['gs', 'esp'],
      '1994': ['gs', 'esp'],
      '1995': ['gs', 'esp'],
      '1996': ['gs', 'esp'],
      '1997': ['gs', 'esp'],
      '1998': ['gs', 'esp'],
      '1999': ['gs', 'esp'],
      '2000': ['gs', 'esp'],
      '2001': ['gs', 'esp'],
      '2002': ['gs', 'esp'],
      '2003': ['gs', 'esp'],
    },
    '6 Series; 6-cyl, non-M6)': {
      '1984': ['gs', 'esp'],
      '1985': ['gs', 'esp'],
      '1986': ['gs', 'esp'],
      '1987': ['gs', 'esp'],
      '1988': ['gs', 'esp'],
      '1989': ['gs', 'esp'],
    },
    '6 series (E63/E64, F12/F13, & G32 chassis)': {
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
      '2020': ['fs'],
    },
    '8 series coupe': {
      'all': ['fs'],
    },
    'M235i': {
      '2014': ['fs', 'stu', 'asp'],
      '2015': ['fs', 'stu', 'asp'],
      '2016': ['fs', 'stu', 'asp'],
    },
    'M240i (incl. xDrive)': {
      '2017': ['fs'],
      '2018': ['fs'],
      '2019': ['fs'],
      '2020': ['fs'],
    },
    '428i': {
      '2014': ['ds'],
      '2015': ['ds'],
      '2016': ['ds'],
      '2017': ['ds'],
      '2018': ['ds'],
      '2019': ['ds'],
      '2020': ['ds'],
    },
    '430i': {
      '2014': ['ds'],
      '2015': ['ds'],
      '2016': ['ds'],
      '2017': ['ds'],
      '2018': ['ds'],
      '2019': ['ds'],
      '2020': ['ds'],
    },
  },
};

/**
 * populates the subclass table
 */
function populateSubclasses() {
  for (let classAcronym in subclassMap) {
    let id = classAcronym.concat("-a");
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
  for (const make of Object.keys(allCars)) {
    const newMake = document.createElement('option');
    newMake.text = make;
    makeSelect.add(newMake);
  }
  if (sessionStorage.getItem('make') in allCars) {
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
  for (const model of Object.keys(allCars[makeSelect.value])) {
    const newModel = document.createElement('option');
    newModel.text = model;
    modelSelect.add(newModel);
  }
  if (sessionStorage.getItem('model') in allCars[makeSelect.value]) {
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
  for (var year of Object.keys(allCars[makeSelect.value][modelSelect.value])) { // eslint-disable-line no-var
    const newYear = document.createElement('option');
    if (year == 0) {
      year = 'all';
    }
    newYear.text = year;
    yearSelect.add(newYear);
  }
  if (sessionStorage.getItem('year') in allCars[makeSelect.value][modelSelect.value]) {
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
        col.classList.remove("highlighted");
      }
    }

    subClasses = allCars[providedMake][providedModel][providedYear];
    for (let i = 0; i < subClasses.length; i++) {
      let tableElement = document.getElementById(subClasses[i]);
      tableElement.classList.add("highlighted");
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
    if (keyArray[i] != 'make' && keyArray[i] != 'model' && keyArray[i] != 'year') {
      let e = document.getElementById(keyArray[i]); // eslint-disable-line prefer-const
      e.style.display = 'none';
    }
  }
};

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
    if (!sessionStorage.getItem(carFlags[className][i])) {
      remainingQuestions.push(carFlags[className][i]);
    }
  }
  if (remainingQuestions.length != 0) {
    const e = document.getElementById(remainingQuestions[0]);
    e.style.display = 'block';
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
    const e = document.getElementById('eligible');
    e.style.display = 'block';
    let specificClass = document.getElementById('specificClass');
    let possibleClasses = allCars[sessionStorage.getItem('make')][sessionStorage.getItem('model')][sessionStorage.getItem('year')];
    let possibleClassesString = "";
    for (let i=0; i<possibleClasses.length; i++) {
      possibleClassesString = possibleClassesString.concat(subclassMap[possibleClasses[i]]);
      possibleClassesString = possibleClassesString.concat('\n');
    }
    console.log(possibleClassesString);
    let newChild = document.createTextNode(possibleClassesString);
    specificClass.appendChild(newChild);
  } else {
    const e = document.getElementById('notEligible');
    e.style.display = 'block';
    let questionString = '';
    for (let i=0; i<failedQuestions.length; i++) {
      const question = document.getElementById(failedQuestions[i] + 'Question');
      questionString = questionString + question.innerHTML;
      questionString = questionString + '</br>';
    }
    document.getElementById('ineligibilityQuestions').innerHTML = questionString;
  }
}
