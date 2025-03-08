const carFlags = {
  'streetCar': [
    'streetLandingPage',
    'streetAuthorized',
    'streetBodywork',
    'streetTires',
    'streetWheels',
    'streetShock',
    'streetBrakes',
    'streetAntiRoll',
    'streetSuspension',
    'streetElectrical',
    'streetEngine',
  ],
  'streettouringCar': [
    'streettouringLandingPage',
    'streettouringAuthorized',
    'streettouringBodywork',
    'streettouringTires',
    'streettouringWheels',
    'streettouringShock',
    'streettouringBrakes',
    'streettouringAntiRoll',
    'streettouringSuspension',
    'streettouringElectrical',
    'streettouringEngine',
    'streettouringOutofProduction',
  ],
  'sscCar': [
    'sscLandingPage',
    'solospeccoupeEligible',
    'solospeccoupeMandatory',
    'solospeccoupeAuthorized',
    'solospeccoupeBodywork',
    'solospeccoupeBrakes',
    'solospeccoupeSuspension',
    'solospeccoupeElectrical',
  ],
  'xsCar': [
    'xsLandingPage',
    'xsBodywork',
    'xsSuspension',
    'xsBrakes',
    'xsWheels',
    'xsTires',
    'xsMinWeight',
    'xsEngineAndDrivetrain',
    'xsAero',
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
    'streetmodifiedAllowed',
    'streetmodifiedMinimum',
  ],
  'spCar': [
    'spLandingPage',
    'streetpreparedAuthorized',
    'streetpreparedBodywork',
    'streetpreparedTires',
    'streetpreparedWheels',
    'streetpreparedShock',
    'streetpreparedBrakes',
    'streetpreparedAntiRoll',
    'streetpreparedSuspension',
    'streetpreparedElectrical',
    'streetpreparedEngine',
    'streetpreparedOutofProduction',
  ],
  'pCar': [
    'pLandingPage',
    'preparedAuthorized',
    'preparedBodywork',
    'preparedTires',
    'preparedWheels',
    'preparedShock',
    'preparedBrakes',
    'preparedAntiRoll',
    'preparedSuspension',
    'preparedElectrical',
    'preparedEngine',
    'preparedOther',
    'preparedSafety',
  ],
  'mCar': [
    'mLandingPage',
    'modifiedSound',
    'modifiedEngine',
    'modifiedAerodynamics',
    'modifiedTires',
    'modifiedSafety',
    'modifiedModified',
    'modifiedSports',
    'modifiedFormula',
    'modifiedSpecials',
    'modifiedFormula',
    'modifiedLegends',
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
  'ast': 'A Street Touring (AST)',
  'bst': 'B Street Touring (BST)',
  'cst': 'C Street Touring (CST)',
  'dst': 'D Street Touring (DST)',
  'est': 'E Street Touring (EST)',
  'gst': 'G Street Touring (GST)',
  'evx': 'Electric Vehicle Experimental (EVX)',
  'camc': 'Classic American Muscle Contemporary (CAM C)',
  'camt': 'Classic American Muscle Traditional (CAM T)',
  'cams': 'Classic American Muscle Sports (CAM S)',
  'xa': 'Xtreme Street A (XA)',
  'xb': 'Xtreme Street B (XB)',
  'xu': 'Xtreme Street Unlimited (XU)',
  'ssp': 'Super Street Prepared (SSP)',
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
      'all': ['fs', 'esp', 'sm', 'cams', 'xp'],
    },
    'Gremlin (4-cyl)': {
      'all': ['hs', 'fsp', 'sm', 'cams', 'xp'],
    },
    'Gremlin (6-cyl)': {
      'all': ['hs', 'sm', 'cams', 'xp'],
    },
    'Javelin (V8)': {
      'all': ['fs', 'esp', 'sm', 'camt', 'xp'],
    },
    'Spirit (4-cyl)': {
      'all': ['hs', 'fsp', 'sm', 'camt', 'xp'],
    },
    'Spirit (6-cyl)': {
      'all': ['hs', 'sm', 'camt', 'xp'],
    },
  },
  'Acura': {
    'CL (all)': {
      'all': ['hs', 'sm', 'xp', 'xa'],
    },
    'ILX': {
      '2012': ['hs', 'sm', 'xp', 'xa'],
      '2013': ['hs', 'dst', 'sm', 'xp', 'xa'],
      '2014': ['hs', 'dst', 'sm', 'xp', 'xa'],
      '2015': ['hs', 'dst', 'sm', 'xp', 'xa'],
      '2016': ['hs', 'dst', 'sm', 'xp', 'xa'],
      '2017': ['hs', 'dst', 'sm', 'xp', 'xa'],
      '2018': ['hs', 'dst', 'sm', 'xp', 'xa'],
      '2019': ['hs', 'dst', 'sm', 'xp', 'xa'],
      '2020': ['hs', 'dst', 'sm', 'xp', 'xa'],
      '2021': ['hs', 'dst', 'sm', 'xp', 'xa'],
      '2022': ['hs', 'dst', 'sm', 'xp', 'xa'],
    },
    'Integra (all except Type R)': {
      '1986': ['hs', 'est', 'fsp', 'sm', 'smf', 'ep', 'xp', 'xa'],
      '1987': ['hs', 'est', 'fsp', 'sm', 'smf', 'ep', 'xp', 'xa'],
      '1988': ['hs', 'est', 'fsp', 'sm', 'smf', 'ep', 'xp', 'xa'],
      '1989': ['hs', 'est', 'fsp', 'sm', 'smf', 'ep', 'xp', 'xa'],
      '1990': ['hs', 'est', 'esp', 'sm', 'smf', 'ep', 'xp', 'xa'],
      '1991': ['hs', 'est', 'esp', 'sm', 'smf', 'ep', 'xp', 'xa'],
      '1992': ['hs', 'est', 'esp', 'sm', 'smf', 'ep', 'xp', 'xa'],
      '1993': ['hs', 'est', 'esp', 'sm', 'smf', 'ep', 'xp', 'xa'],
      '1994': ['hs', 'dst', 'esp', 'sm', 'smf', 'ep', 'xp', 'xa'],
      '1995': ['hs', 'dst', 'esp', 'sm', 'smf', 'ep', 'xp', 'xa'],
      '1996': ['hs', 'dst', 'esp', 'sm', 'smf', 'ep', 'xp', 'xa'],
      '1997': ['hs', 'dst', 'esp', 'sm', 'smf', 'ep', 'xp', 'xa'],
      '1998': ['hs', 'dst', 'esp', 'sm', 'smf', 'ep', 'xp', 'xa'],
      '1999': ['hs', 'dst', 'esp', 'sm', 'smf', 'ep', 'xp', 'xa'],
      '2000': ['hs', 'dst', 'esp', 'sm', 'smf', 'ep', 'xp', 'xa'],
      '2001': ['hs', 'dst', 'esp', 'sm', 'smf', 'ep', 'xp', 'xa'],
      '2022': ['gs', 'gst', 'sm', 'smf', 'xa', 'xp'],
      '2023': ['gs', 'gst', 'sm', 'smf', 'xa', 'xp'],
      '2024': ['gs', 'gst', 'sm', 'smf', 'xa', 'xp'],
    },
    'Integra Type R': {
      'all': ['ds', 'dst', 'esp', 'sm', 'smf', 'ep', 'xa'],
    },
    'Integra Type S': {
      '2024': ['bs', 'sm', 'smf', 'ep', 'xa'],
    },
    'Legend': {
      'all': ['hs', 'fsp', 'sm', 'smf', 'xp', 'xa'],
    },
    'NSX': {
      '1990': ['bs', 'ssp', 'ssm', 'sm', 'fp', 'xa'],
      '1991': ['bs', 'ssp', 'ssm', 'sm', 'fp', 'xa'],
      '1992': ['bs', 'ssp', 'ssm', 'sm', 'fp', 'xa'],
      '1993': ['bs', 'ssp', 'ssm', 'sm', 'fp', 'xa'],
      '1994': ['bs', 'ssp', 'ssm', 'sm', 'fp', 'xa'],
      '1995': ['bs', 'ssp', 'ssm', 'sm', 'fp', 'xa'],
      '1996': ['bs', 'ssp', 'ssm', 'sm', 'fp', 'xa'],
      '1997': ['bs', 'ssp', 'ssm', 'sm', 'fp', 'xa'],
      '1998': ['bs', 'ssp', 'ssm', 'sm', 'fp', 'xa'],
      '1999': ['bs', 'ssp', 'ssm', 'sm', 'fp', 'xa'],
      '2000': ['bs', 'ssp', 'ssm', 'sm', 'fp', 'xa'],
      '2001': ['bs', 'ssp', 'ssm', 'sm', 'fp', 'xa'],
      '2002': ['bs', 'ssp', 'ssm', 'sm', 'fp', 'xa'],
      '2003': ['bs', 'ssp', 'ssm', 'sm', 'fp', 'xa'],
      '2004': ['bs', 'ssp', 'ssm', 'sm', 'fp', 'xa'],
      '2005': ['bs', 'ssp', 'ssm', 'sm', 'fp', 'xa'],
      '2016': ['ss', 'ssp', 'ssm', 'xp', 'xu'],
      '2017': ['ss', 'ssp', 'ssm', 'xp', 'xu'],
      '2018': ['ss', 'ssp', 'ssm', 'xp', 'xu'],
      '2019': ['ss', 'ssp', 'ssm', 'xp', 'xu'],
      '2020': ['ss', 'ssp', 'ssm', 'xp', 'xu'],
      '2021': ['ss', 'ssp', 'ssm', 'xp', 'xu'],
    },
    'NSX Alex Zanardi Signature Edition': {
      'all': ['as', 'ssm', 'xp', 'xa'],
    },
    'RLX': {
      'all': ['gs', 'sm', 'xp', 'xa'],
    },
    'RSX': {
      'all': ['hs', 'dst', 'esp', 'ep', 'sm', 'smf', 'xp', 'xa'],
    },
    'TL': {
      'all': ['hs', 'sm', 'smf', 'xp', 'xa'],
    },
    'TLX': {
      'all': ['gs', 'sm', 'xp', 'xa'],
    },
    'TSX': {
      'all': ['hs', 'dst', 'esp', 'sm', 'smf', 'xp', 'xa'],
    },
    'Vigor': {
      'all': ['hs', 'sm', 'smf', 'xp', 'xa'],
    },
  },
  'Alfa Romeo': {
    '1300': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xb'],
    },
    '1600': {
      'all': ['hs', 'fsp', 'sm', 'dp', 'xp', 'xb'],
    },
    '4C (incl. Spider)': {
      '2015': ['as', 'ssr', 'sst', 'ssm', 'xp', 'xu'],
      '2016': ['as', 'ssr', 'sst', 'ssm', 'xp', 'xu'],
      '2017': ['as', 'ssr', 'sst', 'ssm', 'xp', 'xu'],
      '2018': ['as', 'ssr', 'sst', 'ssm', 'xp', 'xu'],
      '2019': ['as', 'ssr', 'sst', 'ssm', 'xp', 'xu'],
      '2020': ['as', 'ssr', 'sst', 'ssm', 'xp', 'xu'],
    },
    '164 (non-S)': {
      '1991': ['hs', 'sm', 'xp', 'xa'],
      '1992': ['hs', 'sm', 'xp', 'xa'],
      '1993': ['hs', 'sm', 'xp', 'xa'],
    },
    '1600 GTV': {
      'all': ['dp', 'sm', 'xp', 'xb'],
    },
    '1750 & 1750 GTV': {
      'all': ['hs', 'fsp', 'sm', 'dp', 'xp', 'xb'],
    },
    '2000 (4-door sedan)': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xa'],
    },
    '2000 GTV': {
      'all': ['es', 'fsp', 'sm', 'dp', 'xp', 'xa'],
    },
    '2000 Spider': {
      'all': ['es', 'fsp', 'sm', 'dp', 'xp', 'xa'],
    },
    'Alfetta GT': {
      'all': ['fsp', 'sm', 'dp', 'xp', 'xa'],
    },
    'GT 1300 Junior & GTA Junior': {
      '1966': ['dp', 'sm', 'xp', 'xb'],
      '1967': ['dp', 'sm', 'xp', 'xb'],
      '1968': ['dp', 'sm', 'xp', 'xb'],
      '1969': ['dp', 'sm', 'xp', 'xb'],
      '1970': ['dp', 'sm', 'xp', 'xb'],
      '1971': ['dp', 'sm', 'xp', 'xb'],
      '1972': ['dp', 'sm', 'xp', 'xb'],
      '1973': ['dp', 'sm', 'xp', 'xb'],
      '1974': ['dp', 'sm', 'xp', 'xb'],
      '1975': ['dp', 'sm', 'xp', 'xb'],
      '1976': ['dp', 'sm', 'xp', 'xb'],
      '1977': ['dp', 'sm', 'xp', 'xb'],
    },
    'GTA (bore & stroke: 78mm x 67.5mm)': {
      'all': ['dp', 'sm', 'xp', 'xb'],
    },
    'GTV V6': {
      'all': ['hs', 'esp', 'sm', 'fp', 'xp', 'xa'],
    },
    'Giuletta Sprint & Spider (1570 cc)': {
      'all': ['dp', 'sm', 'xp', 'xa'],
    },
    'Giulia 1300 & 1300 Ti': {
      '1964': ['dp', 'sm', 'xp', 'xb'],
      '1965': ['dp', 'sm', 'xp', 'xb'],
      '1966': ['dp', 'sm', 'xp', 'xb'],
      '1967': ['dp', 'sm', 'xp', 'xb'],
      '1968': ['dp', 'sm', 'xp', 'xb'],
      '1969': ['dp', 'sm', 'xp', 'xb'],
      '1970': ['dp', 'sm', 'xp', 'xb'],
      '1971': ['dp', 'sm', 'xp', 'xb'],
    },
    'Giulia (incl. Ti)': {
      '2016': ['ds', 'bst', 'sm', 'xp', 'xa'],
      '2017': ['ds', 'bst', 'sm', 'xp', 'xa'],
      '2018': ['ds', 'bst', 'sm', 'xp', 'xa'],
      '2019': ['ds', 'bst', 'sm', 'xp', 'xa'],
      '2020': ['ds', 'bst', 'sm', 'xp', 'xa'],
      '2021': ['ds', 'bst', 'sm', 'xp', 'xa'],
      '2022': ['ds', 'bst', 'sm', 'xp', 'xa'],
      '2023': ['ds', 'bst', 'sm', 'xp', 'xa'],
      '2024': ['ds', 'bst', 'sm', 'xp', 'xa'],
    },
    'Giulia Quadrifoglio': {
      '2017': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2018': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2019': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2020': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2021': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2022': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2023': ['bs', 'sst', 'sm', 'xp', 'xa'],
    },
    'Junior Z': {
      'all': ['dp', 'sm', 'xp', 'xb'],
    },
    'Milano': {
      'all': ['hs', 'esp', 'sm', 'xp', 'xa'],
    },
    'Sedan (Not Otherwise Classified)': {
      'all': ['hs', 'sm', 'xp', 'xa'],
    },
    'Spider Duetto 1750 Spider Veloce (1779 cc)': {
      '1969': ['dp', 'sm', 'xp', 'xb'],
      '1970': ['dp', 'sm', 'xp', 'xb'],
    },
    'Sport Sedan': {
      'all': ['dp', 'sm', 'xp', 'xa'],
    },
  },
  'Aston Martin': {
    'V8 Vantage': {
      '2005': ['bs', 'bst', 'sm', 'xp', 'xa'],
      '2006': ['bs', 'bst', 'sm', 'xp', 'xa'],
      '2007': ['bs', 'bst', 'sm', 'xp', 'xa'],
      '2008': ['bs', 'bst', 'sm', 'xp', 'xa'],
      '2009': ['bs', 'bst', 'sm', 'xp', 'xa'],
      '2010': ['bs', 'bst', 'sm', 'xp', 'xa'],
      '2011': ['bs', 'bst', 'sm', 'xp', 'xa'],
      '2012': ['bs', 'bst', 'sm', 'xp', 'xa'],
      '2013': ['bs', 'bst', 'sm', 'xp', 'xa'],
      '2014': ['bs', 'bst', 'sm', 'xp', 'xa'],
      '2015': ['bs', 'bst', 'sm', 'xp', 'xa'],
      '2016': ['bs', 'bst', 'sm', 'xp', 'xa'],
      '2017': ['bs', 'bst', 'sm', 'xp', 'xa'],
      '2018': ['ss', 'sst', 'sm', 'xp', 'xu'],
      '2019': ['ss', 'sst', 'sm', 'xp', 'xu'],
      '2020': ['ss', 'sst', 'sm', 'xp', 'xu'],
      '2021': ['ss', 'sst', 'sm', 'xp', 'xu'],
      '2022': ['ss', 'sst', 'sm', 'xp', 'xu'],
      '2023': ['ss', 'sst', 'sm', 'xp', 'xu'],
    },
  },
  'Audi': {
    '80': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xb'],
    },
    '90': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xa'],
    },
    '4000': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xa'],
    },
    '5000': {
      'all': ['hs', 'esp', 'sm', 'xp', 'xa'],
    },
    '100 (non-S4)': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xa'],
    },
    '200 Turbo quattro': {
      'all': ['hs', 'esp', 'sm', 'xp', 'xa'],
    },
    '5000 Turbo': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xa'],
    },
    'A3 (1.8T, FWD)': {
      '2015': ['gs', 'gst', 'sm', 'esp', 'smf', 'xp', 'xa'],
      '2016': ['gs', 'gst', 'sm', 'esp', 'smf', 'xp', 'xa'],
    },
    'A3 (AWD)': {
      '2006': ['ds', 'gst', 'sm', 'esp', 'xp', 'xa'],
      '2007': ['ds', 'gst', 'sm', 'esp', 'xp', 'xa'],
      '2008': ['ds', 'gst', 'sm', 'esp', 'xp', 'xa'],
      '2009': ['ds', 'gst', 'sm', 'esp', 'xp', 'xa'],
      '2010': ['ds', 'gst', 'sm', 'esp', 'xp', 'xa'],
      '2011': ['ds', 'gst', 'sm', 'esp', 'xp', 'xa'],
      '2012': ['ds', 'gst', 'sm', 'esp', 'xp', 'xa'],
      '2013': ['ds', 'gst', 'sm', 'esp', 'xp', 'xa'],
      '2014': ['ds', 'gst', 'sm', 'xp', 'xa'],
      '2015': ['ds', 'gst', 'sm', 'xp', 'xa'],
      '2016': ['ds', 'gst', 'sm', 'xp', 'xa'],
      '2017': ['ds', 'gst', 'sm', 'xp', 'xa'],
      '2018': ['ds', 'gst', 'sm', 'xp', 'xa'],
      '2019': ['ds', 'gst', 'sm', 'xp', 'xa'],
      '2020': ['ds', 'gst', 'sm', 'xp', 'xa'],
      '2021': ['ds', 'gst', 'sm', 'xp', 'xa'],
    },
    'A3 (FWD)': {
      '2006': ['hs', 'gst', 'esp', 'sm', 'smf', 'xp', 'xa'],
      '2007': ['hs', 'gst', 'esp', 'sm', 'smf', 'xp', 'xa'],
      '2008': ['hs', 'gst', 'esp', 'sm', 'smf', 'xp', 'xa'],
      '2009': ['hs', 'gst', 'esp', 'sm', 'smf', 'xp', 'xa'],
      '2010': ['hs', 'gst', 'esp', 'sm', 'smf', 'xp', 'xa'],
      '2011': ['hs', 'gst', 'esp', 'sm', 'smf', 'xp', 'xa'],
      '2012': ['hs', 'gst', 'esp', 'sm', 'smf', 'xp', 'xa'],
      '2013': ['hs', 'gst', 'esp', 'sm', 'smf', 'xp', 'xa'],
      '2015': ['gs', 'gst', 'esp', 'sm', 'smf', 'xp', 'xa'],
      '2016': ['gs', 'gst', 'esp', 'sm', 'smf', 'xp', 'xa'],
      '2017': ['gs', 'gst', 'esp', 'sm', 'smf', 'xp', 'xa'],
      '2018': ['gs', 'gst', 'esp', 'sm', 'smf', 'xp', 'xa'],
      '2019': ['gs', 'gst', 'esp', 'sm', 'smf', 'xp', 'xa'],
      '2020': ['gs', 'gst', 'esp', 'sm', 'smf', 'xp', 'xa'],
      '2021': ['gs', 'gst', 'esp', 'sm', 'smf', 'xp', 'xa'],
      '2022': ['gs', 'gst', 'esp', 'sm', 'smf', 'xp', 'xa'],
      '2023': ['gs', 'gst', 'esp', 'sm', 'smf', 'xp', 'xa'],
      '2024': ['gs', 'gst', 'esp', 'sm', 'smf', 'xp', 'xa'],
    },
    'A3 Sportback e-tron': {
      '2016': ['gs', 'gst', 'sm', 'xp', 'xa', 'evx'],
      '2017': ['gs', 'gst', 'sm', 'xp', 'xa', 'evx'],
      '2018': ['gs', 'gst', 'sm', 'xp', 'xa', 'evx'],
    },
    'A4': {
      '1994': ['gs', 'gst', 'sm', 'xp', 'xa'],
      '1995': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '1996': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '1997': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '1998': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '1999': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '2000': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '2001': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '2002': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '2003': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '2004': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '2005': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '2006': ['gs', 'gst', 'sm', 'xp', 'xa'],
      '2007': ['gs', 'gst', 'sm', 'xp', 'xa'],
      '2008': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '2009': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '2010': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '2011': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '2012': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '2013': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '2014': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '2015': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '2016': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '2017': ['gs', 'gst', 'sm', 'xp', 'xa'],
      '2018': ['gs', 'gst', 'sm', 'xp', 'xa'],
      '2019': ['gs', 'gst', 'sm', 'xp', 'xa'],
      '2020': ['gs', 'gst', 'sm', 'xp', 'xa'],
    },
    'A5': {
      '2008': ['ds', 'sm', 'xp', 'xa'],
      '2009': ['ds', 'sm', 'xp', 'xa'],
      '2010': ['ds', 'sm', 'xp', 'xa'],
      '2011': ['ds', 'sm', 'xp', 'xa'],
      '2012': ['ds', 'sm', 'xp', 'xa'],
      '2013': ['ds', 'sm', 'xp', 'xa'],
      '2014': ['ds', 'sm', 'xp', 'xa'],
      '2015': ['ds', 'sm', 'xp', 'xa'],
      '2016': ['ds', 'sm', 'xp', 'xa'],
      '2017': ['ds', 'sm', 'xp', 'xa'],
    },
    'A6 (V6 Not Otherwise Classified & 4-cyl)': {
      'all': ['gs', 'sm', 'xp', 'xa'],
    },
    'A6 (V6 Supercharged)': {
      '2008': ['fs', 'sm', 'xp', 'xa'],
      '2009': ['fs', 'sm', 'xp', 'xa'],
      '2010': ['fs', 'sm', 'xp', 'xa'],
      '2011': ['fs', 'sm', 'xp', 'xa'],
      '2012': ['fs', 'sm', 'xp', 'xa'],
      '2013': ['fs', 'sm', 'xp', 'xa'],
      '2014': ['fs', 'sm', 'xp', 'xa'],
      '2015': ['fs', 'sm', 'xp', 'xa'],
      '2016': ['fs', 'sm', 'xp', 'xa'],
      '2017': ['fs', 'sm', 'xp', 'xa'],
    },
    'A6 (V8)': {
      '1997': ['fs', 'sm', 'xp', 'xa'],
      '1998': ['fs', 'sm', 'xp', 'xa'],
      '1999': ['fs', 'sm', 'xp', 'xa'],
      '2000': ['fs', 'sm', 'xp', 'xa'],
      '2001': ['fs', 'sm', 'xp', 'xa'],
      '2002': ['fs', 'sm', 'xp', 'xa'],
      '2003': ['fs', 'sm', 'xp', 'xa'],
      '2004': ['fs', 'sm', 'xp', 'xa'],
      '2005': ['fs', 'sm', 'xp', 'xa'],
      '2006': ['fs', 'sm', 'xp', 'xa'],
      '2007': ['fs', 'sm', 'xp', 'xa'],
      '2008': ['fs', 'sm', 'xp', 'xa'],
      '2009': ['fs', 'sm', 'xp', 'xa'],
      '2010': ['fs', 'sm', 'xp', 'xa'],
      '2011': ['fs', 'sm', 'xp', 'xa'],
    },
    'A7 (all)': {
      '2010': ['fs', 'sm', 'xp', 'xa'],
      '2011': ['fs', 'sm', 'xp', 'xa'],
      '2012': ['fs', 'sm', 'xp', 'xa'],
      '2013': ['fs', 'sm', 'xp', 'xa'],
      '2014': ['fs', 'sm', 'xp', 'xa'],
      '2015': ['fs', 'sm', 'xp', 'xa'],
      '2016': ['fs', 'sm', 'xp', 'xa'],
      '2017': ['fs', 'sm', 'xp', 'xa'],
      '2018': ['fs', 'sm', 'xp', 'xa'],
      '2019': ['fs', 'sm', 'xp', 'xa'],
      '2020': ['fs', 'sm', 'xp', 'xa'],
      '2021': ['fs', 'sm', 'xp', 'xa'],
      '2022': ['fs', 'sm', 'xp', 'xa'],
      '2023': ['fs', 'sm', 'xp', 'xa'],
      '2024': ['fs', 'sm', 'xp', 'xa'],
    },
    'A8 & V8 quattro (AWD)': {
      'all': ['gs', 'esp', 'sm', 'xp', 'xa'],
    },
    'Coupe quattro (non-turbo)': {
      'all': ['hs', 'esp', 'sm', 'xp', 'xa'],
    },
    'e-tron SUV (incl Sportback)': {
      '2019': ['evx'],
      '2020': ['evx'],
      '2021': ['evx'],
      '2022': ['evx'],
      '2023': ['evx'],
    },
    'e-tron GT (incl RS)': {
      '2022': ['evx'],
      '2023': ['evx'],
      '2024': ['evx'],
    },
    'e-tron S (incl Sportback)': {
      '2022': ['evx'],
      '2023': ['evx'],
      '2024': ['evx'],
    },
    'Quattro (Coupe Turbo)': {
      'all': ['gs', 'esp', 'sm', 'xp', 'xa'],
    },
    'R8 (non-GT)': {
      '2008': ['ss', 'ssp', 'ssm', 'xp', 'xu'],
      '2009': ['ss', 'ssp', 'ssm', 'xp', 'xu'],
      '2010': ['ss', 'ssp', 'ssm', 'xp', 'xu'],
      '2011': ['ss', 'ssp', 'ssm', 'xp', 'xu'],
      '2012': ['ss', 'ssp', 'ssm', 'xp', 'xu'],
      '2013': ['ss', 'ssp', 'ssm', 'xp', 'xu'],
      '2014': ['ss', 'ssp', 'ssm', 'xp', 'xu'],
      '2015': ['ss', 'ssp', 'ssm', 'xp', 'xu'],
      '2016': ['ssp', 'ssm', 'xp', 'xa'],
      '2017': ['ssp', 'ssm', 'xp', 'xa'],
      '2018': ['ssp', 'ssm', 'xp', 'xa'],
      '2019': ['ssp', 'ssm', 'xp', 'xa'],
    },
    'R8 (non-Plus)': {
      '2016': ['ss', 'ssm', 'xp', 'xu'],
      '2017': ['ss', 'ssm', 'xp', 'xu'],
      '2018': ['ss', 'ssm', 'xp', 'xu'],
      '2019': ['ss', 'ssm', 'xp', 'xu'],
      '2020': ['ss', 'ssm', 'xp', 'xu'],
      '2021': ['ss', 'ssm', 'xp', 'xu'],
    },
    'RS 3': {
      '2017': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2018': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2019': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2020': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2021': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2022': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2023': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2024': ['bs', 'sst', 'sm', 'xp', 'xa'],
    },
    'RS 4': {
      '2007': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2008': ['bs', 'sst', 'sm', 'xp', 'xa'],
    },
    'RS 5': {
      '2013': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2014': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2015': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2016': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2017': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2018': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2019': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2020': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2021': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2022': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2023': ['bs', 'sst', 'sm', 'xp', 'xa'],
    },
    'RS 6 (C5 Chassis)': {
      '2003': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2004': ['bs', 'sst', 'sm', 'xp', 'xa'],
    },
    'RS 7': {
      '2014': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2015': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2016': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2017': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2018': ['bs', 'sst', 'sm', 'xp', 'xa'],
    },
    'S3 (2.0T)': {
      '2015': ['ds', 'bst', 'ssp', 'sm', 'xp', 'xa'],
      '2016': ['ds', 'bst', 'ssp', 'sm', 'xp', 'xa'],
      '2017': ['ds', 'bst', 'ssp', 'sm', 'xp', 'xa'],
      '2018': ['ds', 'bst', 'ssp', 'sm', 'xp', 'xa'],
      '2019': ['ds', 'bst', 'ssp', 'sm', 'xp', 'xa'],
      '2020': ['ds', 'bst', 'ssp', 'sm', 'xp', 'xa'],
    },
    'S4': {
      '2000': ['ds', 'bst', 'esp', 'sm', 'xp', 'xa'],
      '2001': ['ds', 'bst', 'esp', 'sm', 'xp', 'xa'],
      '2002': ['ds', 'bst', 'esp', 'sm', 'xp', 'xa'],
      '2003': ['ds', 'bst', 'esp', 'sm', 'xp', 'xa'],
      '2004': ['fs', 'bst', 'esp', 'sm', 'xp', 'xa'],
      '2005': ['fs', 'bst', 'esp', 'sm', 'xp', 'xa'],
      '2006': ['fs', 'bst', 'esp', 'sm', 'xp', 'xa'],
      '2007': ['fs', 'bst', 'esp', 'sm', 'xp', 'xa'],
      '2008': ['fs', 'bst', 'esp', 'sm', 'xp', 'xa'],
      '2009': ['fs', 'bst', 'esp', 'sm', 'xp', 'xa'],
      '2010': ['ds', 'bst', 'esp', 'sm', 'xp', 'xa'],
      '2011': ['ds', 'bst', 'esp', 'sm', 'xp', 'xa'],
      '2012': ['ds', 'bst', 'esp', 'sm', 'xp', 'xa'],
      '2013': ['ds', 'bst', 'esp', 'sm', 'xp', 'xa'],
      '2014': ['ds', 'bst', 'esp', 'sm', 'xp', 'xa'],
      '2015': ['ds', 'bst', 'esp', 'sm', 'xp', 'xa'],
      '2016': ['ds', 'bst', 'esp', 'sm', 'xp', 'xa'],
      '2017': ['ds', 'bst', 'sm', 'xp', 'xa'],
      '2018': ['ds', 'bst', 'sm', 'xp', 'xa'],
      '2019': ['ds', 'bst', 'sm', 'xp', 'xa'],
      '2020': ['ds', 'bst', 'sm', 'xp', 'xa'],
      '2021': ['ds', 'bst', 'sm', 'xp', 'xa'],
      '2022': ['ds', 'bst', 'sm', 'xp', 'xa'],
      '2023': ['ds', 'bst', 'sm', 'xp', 'xa'],
      '2024': ['ds', 'bst', 'sm', 'xp', 'xa'],
    },
    'S4 (100 CS chassis)': {
      '1992': ['hs', 'bst', 'sm', 'xp', 'xa'],
      '1993': ['hs', 'bst', 'sm', 'xp', 'xa'],
      '1994': ['hs', 'bst', 'sm', 'xp', 'xa'],
    },
    'S5': {
      '2008': ['bs', 'bst', 'sst', 'sm', 'xp', 'xa'],
      '2009': ['bs', 'bst', 'sst', 'sm', 'xp', 'xa'],
      '2010': ['bs', 'bst', 'sst', 'sm', 'xp', 'xa'],
      '2011': ['bs', 'bst', 'sst', 'sm', 'xp', 'xa'],
      '2012': ['bs', 'bst', 'sst', 'sm', 'xp', 'xa'],
      '2013': ['bs', 'bst', 'sst', 'sm', 'xp', 'xa'],
      '2014': ['bs', 'bst', 'sst', 'sm', 'xp', 'xa'],
      '2015': ['bs', 'bst', 'sst', 'sm', 'xp', 'xa'],
      '2016': ['bs', 'bst', 'sst', 'sm', 'xp', 'xa'],
      '2017': ['bs', 'bst', 'sst', 'sm', 'xp', 'xa'],
      '2018': ['bs', 'bst', 'sst', 'sm', 'xp', 'xa'],
      '2019': ['bs', 'bst', 'sst', 'sm', 'xp', 'xa'],
      '2020': ['bs', 'bst', 'sst', 'sm', 'xp', 'xa'],
      '2021': ['bs', 'bst', 'sst', 'sm', 'xp', 'xa'],
      '2022': ['bs', 'bst', 'sst', 'sm', 'xp', 'xa'],
      '2023': ['bs', 'bst', 'sst', 'sm', 'xp', 'xa'],
      '2024': ['bs', 'bst', 'sst', 'sm', 'xp', 'xa'],
    },
    'S6': {
      '2013': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2014': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2015': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2016': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2017': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2018': ['bs', 'sst', 'sm', 'xp', 'xa'],
    },
    'S7': {
      '2012': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2013': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2014': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2015': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2016': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2017': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2018': ['bs', 'sst', 'sm', 'xp', 'xa'],
    },
    'TT (1.8T, non-quattro/FWD)': {
      '2000': ['ds', 'gst', 'dsp', 'sm', 'smf', 'xp', 'xa'],
      '2001': ['ds', 'gst', 'dsp', 'sm', 'smf', 'xp', 'xa'],
      '2002': ['ds', 'gst', 'dsp', 'sm', 'smf', 'xp', 'xa'],
      '2003': ['ds', 'gst', 'dsp', 'sm', 'smf', 'xp', 'xa'],
      '2004': ['ds', 'gst', 'dsp', 'sm', 'smf', 'xp', 'xa'],
      '2005': ['ds', 'gst', 'dsp', 'sm', 'smf', 'xp', 'xa'],
      '2006': ['ds', 'gst', 'dsp', 'sm', 'smf', 'xp', 'xa'],
    },
    'TT (2.0T, non-quattro/FWD)': {
      '2008': ['ds', 'gst', 'sm', 'smf', 'xp', 'xa'],
      '2009': ['ds', 'gst', 'sm', 'smf', 'xp', 'xa'],
    },
    'TT RS': {
      '2012': ['as', 'sst', 'ssr', 'ssp', 'ssm', 'xp', 'xu'],
      '2013': ['as', 'sst', 'ssr', 'ssp', 'ssm', 'xp', 'xu'],
      '2018': ['as', 'sst', 'ssp', 'ssm', 'xu', 'xp'],
      '2019': ['as', 'sst', 'ssp', 'ssm', 'xu', 'xp'],
      '2020': ['as', 'sst', 'ssm', 'xu', 'xp'],
      '2021': ['ss', 'sst', 'ssm', 'xu', 'xp'],
      '2022': ['ss', 'sst', 'ssm', 'xu', 'xp'],
    },
    'TT quattro (AWD)': {
      '2000': ['ds', 'gst', 'dsp', 'sm', 'xp', 'xa'],
      '2001': ['ds', 'gst', 'dsp', 'sm', 'xp', 'xa'],
      '2002': ['ds', 'gst', 'dsp', 'sm', 'xp', 'xa'],
      '2003': ['ds', 'gst', 'dsp', 'sm', 'xp', 'xa'],
      '2004': ['ds', 'gst', 'dsp', 'sm', 'xp', 'xa'],
      '2005': ['ds', 'gst', 'dsp', 'sm', 'xp', 'xa'],
      '2006': ['ds', 'gst', 'dsp', 'sm', 'xp', 'xa'],
      '2008': ['ds', 'gst', 'dsp', 'sm', 'xp', 'xa'],
      '2009': ['ds', 'gst', 'dsp', 'sm', 'xp', 'xa'],
      '2010': ['ds', 'gst', 'dsp', 'sm', 'xp', 'xa'],
      '2011': ['ds', 'gst', 'dsp', 'sm', 'xp', 'xa'],
      '2012': ['ds', 'gst', 'dsp', 'sm', 'xp', 'xa'],
      '2013': ['ds', 'gst', 'dsp', 'sm', 'xp', 'xa'],
      '2014': ['ds', 'gst', 'dsp', 'sm', 'xp', 'xa'],
      '2015': ['ds', 'gst', 'dsp', 'sm', 'xp', 'xa'],
      '2016': ['ds', 'gst', 'dsp', 'sm', 'xp', 'xa'],
      '2017': ['ds', 'gst', 'dsp', 'sm', 'xp', 'xa'],
      '2018': ['ds', 'gst', 'dsp', 'sm', 'xp', 'xa'],
      '2019': ['ds', 'gst', 'dsp', 'sm', 'xp', 'xa'],
      '2020': ['ds', 'gst', 'dsp', 'sm', 'xp', 'xa'],
    },
    'TTS': {
      '2008': ['ds', 'bst', 'sm', 'xp', 'xa'],
      '2009': ['ds', 'bst', 'dsp', 'sm', 'xp', 'xa'],
      '2010': ['ds', 'bst', 'dsp', 'sm', 'xp', 'xa'],
      '2011': ['ds', 'bst', 'dsp', 'sm', 'xp', 'xa'],
      '2012': ['ds', 'bst', 'dsp', 'sm', 'xp', 'xa'],
      '2013': ['ds', 'bst', 'dsp', 'sm', 'xp', 'xa'],
      '2014': ['ds', 'bst', 'ssp', 'sm', 'xp', 'xa'],
      '2015': ['ds', 'bst', 'ssp', 'sm', 'xp', 'xa'],
      '2016': ['bs', 'sst', 'ssp', 'sm', 'xp', 'xa'],
      '2017': ['bs', 'sst', 'ssp', 'sm', 'xp', 'xa'],
      '2018': ['bs', 'sst', 'ssp', 'sm', 'xp', 'xa'],
      '2019': ['bs', 'sst', 'ssp', 'sm', 'xp', 'xa'],
      '2020': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2021': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2022': ['bs', 'sst', 'sm', 'xp', 'xa'],
      '2023': ['bs', 'sst', 'sm', 'xp', 'xa'],
    },
    'Q4 e-tron (incl. Sportback)': {
      '2022': ['evx'],
      '2023': ['evx'],
      '2024': ['evx'],
    },
  },
  'BMW': {
    '315': {
      '1981': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1982': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1983': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
    },
    '316': {
      '1975': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1976': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1977': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1978': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1979': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1980': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1981': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
    },
    '318': {
      '1975': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1976': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1977': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1978': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1979': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1980': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
    },
    '320': {
      '1975': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1976': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1977': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
    },
    '1600': {
      'all': ['hs', 'fsp', 'sm', 'dp', 'xp', 'xb'],
    },
    '1602': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xb'],
    },
    '1800': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xb'],
    },
    '2002': {
      'all': ['hs', 'fsp', 'sm', 'dp', 'xp', 'xb'],
    },
    '2500': {
      'all': ['esp', 'sm', 'xp', 'xa'],
    },
    '2800': {
      'all': ['esp', 'sm', 'xp', 'xa'],
    },
    '1M Coupe': {
      '2011': ['bs', 'ssp', 'sm', 'xp', 'xa'],
      '2012': ['bs', 'ssp', 'sm', 'xp', 'xa'],
    },
    '3 Series (E9x chassis, turbo)': {
      '2006': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2007': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2008': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2009': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2010': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2011': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2012': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2013': ['fs', 'bst', 'sm', 'xp', 'xa'],
    },
    '3 Series (F30/F31 chassis; 6-cyl Turbo, non-M3)': {
      '2012': ['fs', 'sm', 'xp', 'xa'],
      '2013': ['fs', 'sm', 'xp', 'xa'],
      '2014': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2015': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2016': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2017': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2018': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2019': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2020': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2021': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2022': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2023': ['fs', 'bst', 'sm', 'xp', 'xa'],
    },
    '3 Series (non-M3, non-turbo)': {
      '1975': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xa'],
      '1976': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xa'],
      '1977': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xa'],
      '1978': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xa'],
      '1979': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xa'],
      '1980': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xa'],
      '1981': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xa'],
      '1982': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xa'],
      '1983': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xa'],
      '1984': ['gs', 'dst', 'esp', 'sm', 'dp', 'xp', 'xa'],
      '1985': ['gs', 'dst', 'esp', 'sm', 'dp', 'xp', 'xa'],
      '1986': ['gs', 'dst', 'esp', 'sm', 'dp', 'xp', 'xa'],
      '1987': ['gs', 'dst', 'esp', 'sm', 'dp', 'xp', 'xa'],
      '1988': ['gs', 'dst', 'esp', 'sm', 'dp', 'xp', 'xa'],
      '1989': ['gs', 'dst', 'esp', 'sm', 'dp', 'xp', 'xa'],
      '1990': ['gs', 'dst', 'esp', 'sm', 'dp', 'xp', 'xa'],
      '1991': ['gs', 'dst', 'esp', 'sm', 'dp', 'xp', 'xa'],
      '1992': ['gs', 'dst', 'esp', 'sm', 'dp', 'xp', 'xa'],
      '1993': ['gs', 'dst', 'esp', 'sm', 'dp', 'xp', 'xa'],
      '1994': ['gs', 'dst', 'esp', 'sm', 'xp', 'xa'],
      '1995': ['gs', 'dst', 'esp', 'sm', 'xp', 'xa'],
      '1996': ['gs', 'dst', 'esp', 'sm', 'xp', 'xa'],
      '1997': ['gs', 'dst', 'esp', 'sm', 'xp', 'xa'],
      '1998': ['gs', 'dst', 'esp', 'sm', 'xp', 'xa'],
      '1999': ['gs', 'dst', 'esp', 'sm', 'xp', 'xa'],
      '2000': ['gs', 'dst', 'esp', 'sm', 'xp', 'xa'],
      '2001': ['gs', 'dst', 'esp', 'sm', 'xp', 'xa'],
      '2002': ['gs', 'dst', 'esp', 'sm', 'xp', 'xa'],
      '2003': ['gs', 'dst', 'esp', 'sm', 'xp', 'xa'],
      '2004': ['gs', 'dst', 'esp', 'sm', 'xp', 'xa'],
      '2005': ['gs', 'dst', 'esp', 'sm', 'xp', 'xa'],
      '2006': ['gs', 'dst', 'esp', 'sm', 'xp', 'xa'],
      '2007': ['gs', 'dst', 'sm', 'xp', 'xa'],
      '2008': ['gs', 'dst', 'sm', 'xp', 'xa'],
      '2009': ['gs', 'dst', 'sm', 'xp', 'xa'],
      '2010': ['gs', 'dst', 'sm', 'xp', 'xa'],
      '2011': ['gs', 'dst', 'sm', 'xp', 'xa'],
      '2012': ['gs', 'dst', 'sm', 'xp', 'xa'],
      '2013': ['gs', 'dst', 'sm', 'xp', 'xa'],
    },
    '3.0S & CS': {
      'all': ['esp', 'sm', 'xp', 'xa'],
    },
    '4 Series (F32/F33/F36 chassis; 6-cyl Turbo)': {
      '2014': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2015': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2016': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2017': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2018': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2019': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2020': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2021': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2022': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2023': ['fs', 'bst', 'sm', 'xp', 'xa'],
    },
    '5 Series (G30/G31/G38 chassis)': {
      '2017': ['fs', 'sm', 'xp', 'xa'],
      '2018': ['fs', 'sm', 'xp', 'xa'],
      '2019': ['fs', 'sm', 'xp', 'xa'],
      '2020': ['fs', 'sm', 'xp', 'xa'],
      '2021': ['fs', 'sm', 'xp', 'xa'],
      '2022': ['fs', 'sm', 'xp', 'xa'],
      '2023': ['fs', 'sm', 'xp', 'xa'],
    },
    '5 Series (V8)': {
      'all': ['fs', 'sm', 'xp', 'xa'],
    },
    '5 Series; 6-cyl, non-M5)': {
      '1975': ['gs', 'esp', 'sm', 'dp', 'xp', 'xa'],
      '1976': ['gs', 'esp', 'sm', 'dp', 'xp', 'xa'],
      '1977': ['gs', 'esp', 'sm', 'dp', 'xp', 'xa'],
      '1978': ['gs', 'esp', 'sm', 'dp', 'xp', 'xa'],
      '1985': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1986': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1987': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1988': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1989': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1990': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1991': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1992': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1993': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1994': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1995': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1996': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1997': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1998': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1999': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '2000': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '2001': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '2002': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '2003': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '2004': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '2005': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '2006': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '2007': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '2008': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '2009': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '2010': ['gs', 'esp', 'sm', 'xp', 'xa'],
    },
    '6 Series; 6-cyl, non-M6)': {
      '1984': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1985': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1986': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1987': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1988': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1989': ['gs', 'esp', 'sm', 'xp', 'xa'],
    },
    '6 series (E63/E64, F12/F13, & G32 chassis)': {
      '2003': ['fs', 'sm', 'xp', 'xa'],
      '2004': ['fs', 'sm', 'xp', 'xa'],
      '2005': ['fs', 'sm', 'xp', 'xa'],
      '2006': ['fs', 'sm', 'xp', 'xa'],
      '2007': ['fs', 'sm', 'xp', 'xa'],
      '2008': ['fs', 'sm', 'xp', 'xa'],
      '2009': ['fs', 'sm', 'xp', 'xa'],
      '2010': ['fs', 'sm', 'xp', 'xa'],
      '2011': ['fs', 'sm', 'xp', 'xa'],
      '2012': ['fs', 'sm', 'xp', 'xa'],
      '2013': ['fs', 'sm', 'xp', 'xa'],
      '2014': ['fs', 'sm', 'xp', 'xa'],
      '2015': ['fs', 'sm', 'xp', 'xa'],
      '2016': ['fs', 'sm', 'xp', 'xa'],
      '2017': ['fs', 'sm', 'xp', 'xa'],
      '2018': ['fs', 'sm', 'xp', 'xa'],
      '2019': ['fs', 'sm', 'xp', 'xa'],
      '2020': ['fs', 'sm', 'xp', 'xa'],
      '2021': ['fs', 'sm', 'xp', 'xa'],
      '2022': ['fs', 'sm', 'xp', 'xa'],
      '2023': ['fs', 'sm', 'xp', 'xa'],
    },
    '7 Series (6-cyl)': {
      'all': ['hs', 'esp', 'sm', 'xp', 'xa'],
    },
    '8 series coupe': {
      'all': ['fs', 'sm', 'xp', 'xa'],
    },
    '128i': {
      '2008': ['ds', 'dst', 'dsp', 'sm', 'fp', 'xp', 'xa'],
      '2009': ['ds', 'dst', 'dsp', 'sm', 'fp', 'xp', 'xa'],
      '2010': ['ds', 'dst', 'dsp', 'sm', 'fp', 'xp', 'xa'],
      '2011': ['ds', 'dst', 'dsp', 'sm', 'xp', 'xa'],
      '2012': ['ds', 'dst', 'dsp', 'sm', 'xp', 'xa'],
      '2013': ['ds', 'dst', 'dsp', 'sm', 'xp', 'xa'],
    },
    '135i': {
      '2008': ['fs', 'bst', 'ssp', 'ssp', 'sm', 'fp', 'xp', 'xa'],
      '2009': ['fs', 'bst', 'ssp', 'ssp', 'sm', 'fp', 'xp', 'xa'],
      '2010': ['fs', 'bst', 'ssp', 'ssp', 'sm', 'fp', 'xp', 'xa'],
      '2011': ['fs', 'bst', 'ssp', 'ssp', 'sm', 'xp', 'xa'],
      '2012': ['fs', 'bst', 'ssp', 'ssp', 'sm', 'xp', 'xa'],
      '2013': ['fs', 'bst', 'ssp', 'ssp', 'sm', 'xp', 'xa'],
    },
    '135is': {
      '2008': ['fs', 'ssp', 'sm', 'fp', 'xp', 'xa'],
      '2009': ['fs', 'ssp', 'sm', 'fp', 'xp', 'xa'],
      '2010': ['fs', 'ssp', 'sm', 'fp', 'xp', 'xa'],
      '2011': ['fs', 'ssp', 'sm', 'xp', 'xa'],
      '2012': ['fs', 'ssp', 'sm', 'xp', 'xa'],
      '2013': ['fs', 'ssp', 'sm', 'xp', 'xa'],
    },
    '228i': {
      '2014': ['ds', 'bst', 'sm', 'xp', 'xa'],
      '2015': ['ds', 'bst', 'sm', 'xp', 'xa'],
      '2016': ['ds', 'sm', 'xp', 'xa'],
      '2017': ['ds', 'sm', 'xp', 'xa'],
      '2018': ['ds', 'sm', 'xp', 'xa'],
      '2019': ['ds', 'sm', 'xp', 'xa'],
      '2020': ['ds', 'sm', 'xp', 'xa'],
      '2021': ['ds', 'sm', 'xp', 'xa'],
      '2022': ['ds', 'sm', 'xp', 'xa'],
      '2023': ['ds', 'sm', 'xp', 'xa'],
      '2024': ['ds', 'sm', 'xp', 'xa'],
    },
    '228i Gran Coupe (FWD)': {
      '2020': ['gs', 'sm', 'smf', 'xp', 'xa'],
      '2021': ['gs', 'sm', 'smf', 'xp', 'xa'],
      '2022': ['gs', 'sm', 'smf', 'xp', 'xa'],
      '2023': ['gs', 'sm', 'smf', 'xp', 'xa'],
      '2024': ['gs', 'sm', 'smf', 'xp', 'xa'],
    },
    '230i': {
      '2014': ['ds', 'sm', 'xp', 'xa'],
      '2015': ['ds', 'sm', 'xp', 'xa'],
      '2016': ['ds', 'sm', 'xp', 'xa'],
      '2017': ['ds', 'sm', 'xp', 'xa'],
      '2018': ['ds', 'sm', 'xp', 'xa'],
      '2019': ['ds', 'sm', 'xp', 'xa'],
      '2020': ['ds', 'sm', 'xp', 'xa'],
    },
    '318 (8v)': {
      'all': ['hs', 'fsp', 'sm', 'dp', 'xp', 'xb'],
    },
    '318 (16v)': {
      'all': ['hs', 'esp', 'sm', 'dp', 'xp', 'xb'],
    },
    '318i': {
      '1975': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1976': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1977': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1978': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1979': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1980': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
    },
    '318i & 318is (E36 Chassis)': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xa'],
    },
    '320 (Not Otherwise Classified)': {
      'all': ['hs', 'sm', 'xp', 'xa'],
    },
    '320/6': {
      '1977': ['gs', 'dst', 'fsp', 'sm', 'xp', 'xb'],
      '1978': ['gs', 'dst', 'fsp', 'sm', 'xp', 'xb'],
      '1979': ['gs', 'dst', 'fsp', 'sm', 'xp', 'xb'],
      '1980': ['gs', 'dst', 'fsp', 'sm', 'xp', 'xb'],
      '1981': ['gs', 'dst', 'fsp', 'sm', 'xp', 'xb'],
      '1982': ['gs', 'dst', 'fsp', 'sm', 'xp', 'xb'],
    },
    '320i': {
      '1975': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1976': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1977': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1978': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1979': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1980': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1981': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1982': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1983': ['gs', 'dst', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '2012': ['gs', 'dsp', 'sm', 'xp', 'xa'],
      '2013': ['gs', 'dsp', 'sm', 'xp', 'xa'],
      '2014': ['gs', 'dsp', 'sm', 'xp', 'xa'],
      '2015': ['gs', 'dsp', 'sm', 'xp', 'xa'],
      '2016': ['gs', 'dsp', 'sm', 'xp', 'xa'],
      '2017': ['gs', 'sm', 'xp', 'xa'],
      '2018': ['gs', 'sm', 'xp', 'xa'],
      '2019': ['gs', 'sm', 'xp', 'xa'],
    },
    '323i Convertible': {
      '1998': ['gs', 'sm', 'xp', 'xa'],
      '1999': ['gs', 'sm', 'xp', 'xa'],
    },
    '323is': {
      '1998': ['gs', 'sm', 'xp', 'xa'],
      '1999': ['gs', 'sm', 'xp', 'xa'],
    },
    '328d': {
      '2012': ['ds', 'sm', 'xp', 'xa'],
      '2013': ['ds', 'sm', 'xp', 'xa'],
      '2014': ['ds', 'sm', 'xp', 'xa'],
      '2015': ['ds', 'sm', 'xp', 'xa'],
      '2016': ['ds', 'sm', 'xp', 'xa'],
      '2017': ['ds', 'sm', 'xp', 'xa'],
      '2018': ['ds', 'sm', 'xp', 'xa'],
      '2019': ['ds', 'sm', 'xp', 'xa'],
      '2020': ['ds', 'sm', 'xp', 'xa'],
    },
    '328i': {
      '2012': ['ds', 'sm', 'xp', 'xa'],
      '2013': ['ds', 'sm', 'xp', 'xa'],
      '2014': ['ds', 'sm', 'xp', 'xa'],
      '2015': ['ds', 'sm', 'xp', 'xa'],
      '2016': ['ds', 'sm', 'xp', 'xa'],
      '2017': ['ds', 'sm', 'xp', 'xa'],
      '2018': ['ds', 'sm', 'xp', 'xa'],
      '2019': ['ds', 'sm', 'xp', 'xa'],
      '2020': ['ds', 'sm', 'xp', 'xa'],
    },
    '328i Convertible': {
      '1996': ['gs', 'sm', 'xp', 'xa'],
      '1997': ['gs', 'sm', 'xp', 'xa'],
      '1998': ['gs', 'sm', 'xp', 'xa'],
      '1999': ['gs', 'sm', 'xp', 'xa'],
    },
    '328is (E36)': {
      '1996': ['gs', 'sm', 'xp', 'xa'],
      '1997': ['gs', 'sm', 'xp', 'xa'],
      '1998': ['gs', 'sm', 'xp', 'xa'],
      '1999': ['gs', 'sm', 'xp', 'xa'],
    },
    '330i': {
      '2012': ['ds', 'sm', 'xp', 'xa'],
      '2013': ['ds', 'sm', 'xp', 'xa'],
      '2014': ['ds', 'sm', 'xp', 'xa'],
      '2015': ['ds', 'sm', 'xp', 'xa'],
      '2016': ['ds', 'sm', 'xp', 'xa'],
      '2017': ['ds', 'sm', 'xp', 'xa'],
      '2018': ['ds', 'sm', 'xp', 'xa'],
      '2019': ['ds', 'sm', 'xp', 'xa'],
      '2020': ['ds', 'sm', 'xp', 'xa'],
    },
    '335d': {
      '2009': ['fs', 'dsp', 'sm', 'xp', 'xa'],
      '2010': ['fs', 'dsp', 'sm', 'xp', 'xa'],
      '2011': ['fs', 'dsp', 'sm', 'xp', 'xa'],
    },
    '335i': {
      '2006': ['dsp', 'sm', 'xp', 'xa'],
      '2007': ['fs', 'dsp', 'sm', 'xp', 'xa'],
      '2008': ['fs', 'dsp', 'sm', 'xp', 'xa'],
      '2009': ['fs', 'dsp', 'sm', 'xp', 'xa'],
      '2010': ['fs', 'dsp', 'sm', 'xp', 'xa'],
      '2011': ['fs', 'dsp', 'sm', 'xp', 'xa'],
      '2012': ['fs', 'dsp', 'sm', 'xp', 'xa'],
      '2013': ['fs', 'dsp', 'sm', 'xp', 'xa'],
    },
    '335is': {
      '2007': ['fs', 'dsp', 'sm', 'xp', 'xa'],
      '2008': ['fs', 'dsp', 'sm', 'xp', 'xa'],
      '2009': ['fs', 'dsp', 'sm', 'xp', 'xa'],
      '2010': ['fs', 'dsp', 'sm', 'xp', 'xa'],
      '2011': ['fs', 'dsp', 'sm', 'xp', 'xa'],
      '2012': ['fs', 'dsp', 'sm', 'xp', 'xa'],
      '2013': ['fs', 'dsp', 'sm', 'xp', 'xa'],
    },
    '428i': {
      '2014': ['ds', 'sm', 'xp', 'xa'],
      '2015': ['ds', 'sm', 'xp', 'xa'],
      '2016': ['ds', 'sm', 'xp', 'xa'],
      '2017': ['ds', 'sm', 'xp', 'xa'],
      '2018': ['ds', 'sm', 'xp', 'xa'],
      '2019': ['ds', 'sm', 'xp', 'xa'],
      '2020': ['ds', 'sm', 'xp', 'xa'],
    },
    '430i': {
      '2014': ['ds', 'sm', 'xp', 'xa'],
      '2015': ['ds', 'sm', 'xp', 'xa'],
      '2016': ['ds', 'sm', 'xp', 'xa'],
      '2017': ['ds', 'sm', 'xp', 'xa'],
      '2018': ['ds', 'sm', 'xp', 'xa'],
      '2019': ['ds', 'sm', 'xp', 'xa'],
      '2020': ['ds', 'sm', 'xp', 'xa'],
    },
    '2000 CS Coupe': {
      'all': ['hs', 'sm', 'xp', 'xb'],
    },
    '2000ti': {
      'all': ['hs', 'sm', 'dp', 'xp', 'xb'],
    },
    'Bavaria': {
      'all': ['dsp', 'sm', 'xp', 'xa'],
    },
    'i4': {
      '2022': ['as', 'sm', 'xp', 'xa', 'evx'],
      '2023': ['as', 'sm', 'xp', 'xa', 'evx'],
      '2024': ['as', 'sm', 'xp', 'xa', 'evx'],
    },
    'i5': {
      '2024': ['evx'],
    },
    'i7': {
      '2023': ['evx'],
      '2024': ['evx'],
    },
    'M2 (with MP Sports Suspension)': {
      '2023': ['as', 'ssm', 'xp', 'xu'],
      '2024': ['as', 'ssm', 'xp', 'xu'],
    },
    'M2 (except Performance Edition ZL9)': {
      '2016': ['bs', 'sst', 'ssp', 'ssp', 'sm', 'xa', 'xp'],
      '2017': ['bs', 'sst', 'ssp', 'ssp', 'sm', 'xa', 'xp'],
      '2018': ['bs', 'sst', 'ssp', 'ssp', 'sm', 'xa', 'xp'],
      '2019': ['bs', 'sst', 'ssp', 'ssp', 'sm', 'xa', 'xp'],
      '2020': ['bs', 'sst', 'ssp', 'sm', 'xa', 'xp'],
      '2023': ['bs', 'ssp', 'sm', 'xa', 'xp'],
      '2024': ['bs', 'ssp', 'sm', 'xa', 'xp'],
    },
    'M2 CS': {
      '2020': ['as', 'sst', 'ssr', 'sm', 'xp', 'xa'],
      '2021': ['as', 'sst', 'ssr', 'sm', 'xp', 'xa'],
    },
    'M2 Competition': {
      '2019': ['bs', 'sst', 'ssr', 'esp', 'sm', 'xp', 'xa'],
      '2020': ['bs', 'sst', 'ssr', 'esp', 'sm', 'xp', 'xa'],
      '2021': ['bs', 'sst', 'ssr', 'esp', 'sm', 'xp', 'xa'],
      '2022': ['bs', 'ssr', 'sm', 'esp', 'xp', 'xa'],
      '2023': ['bs', 'ssr', 'sm', 'esp', 'xp', 'xa'],
    },
    'M2 Performance Edition (ZL9)': {
      'all': ['as', 'sm', 'xp', 'xa'],
    },
    'M3': {
      '1988': ['cs', 'dsp', 'sm', 'dp', 'xa', 'xp'],
      '1989': ['cs', 'dsp', 'sm', 'dp', 'xa', 'xp'],
      '1990': ['cs', 'dsp', 'sm', 'dp', 'xa', 'xp'],
      '1991': ['cs', 'dsp', 'sm', 'dp', 'xa', 'xp'],
      '1995': ['ds', 'cst', 'dsp', 'sm', 'xa', 'xp'],
      '1996': ['ds', 'cst', 'dsp', 'sm', 'xa', 'xp'],
      '1997': ['ds', 'cst', 'dsp', 'sm', 'xa', 'xp'],
      '1998': ['ds', 'cst', 'dsp', 'sm', 'xa', 'xp'],
      '1999': ['ds', 'cst', 'dsp', 'sm', 'xa', 'xp'],
      '2000': ['fs', 'bst', 'dsp', 'sm', 'xa', 'xp'],
      '2001': ['fs', 'bst', 'dsp', 'sm', 'xa', 'xp'],
      '2002': ['fs', 'bst', 'dsp', 'sm', 'xa', 'xp'],
      '2003': ['fs', 'bst', 'dsp', 'sm', 'xa', 'xp'],
      '2004': ['fs', 'bst', 'dsp', 'sm', 'xa', 'xp'],
      '2005': ['fs', 'bst', 'dsp', 'sm', 'xa', 'xp'],
      '2006': ['fs', 'bst', 'dsp', 'sm', 'xa', 'xp'],
      '2007': ['fs', 'bst', 'esp', 'ssp', 'sm', 'xa', 'xp'],
      '2008': ['fs', 'bst', 'esp', 'ssp', 'sm', 'xa', 'xp'],
      '2009': ['fs', 'bst', 'esp', 'ssp', 'sm', 'xa', 'xp'],
      '2010': ['fs', 'bst', 'esp', 'ssp', 'sm', 'xa', 'xp'],
      '2011': ['fs', 'bst', 'esp', 'ssp', 'sm', 'xa', 'xp'],
      '2012': ['fs', 'bst', 'esp', 'ssp', 'sm', 'xa', 'xp'],
      '2013': ['fs', 'bst', 'esp', 'ssp', 'sm', 'xa', 'xp'],
      '2015': ['bs', 'sst', 'esp', 'ssr', 'sm', 'xa', 'xp'],
      '2016': ['bs', 'sst', 'esp', 'ssr', 'sm', 'xa', 'xp'],
      '2017': ['bs', 'sst', 'esp', 'ssr', 'sm', 'xa', 'xp'],
      '2018': ['bs', 'sst', 'esp', 'sm', 'xa', 'xp'],
      '2019': ['bs', 'sst', 'sm', 'xa', 'xp'],
      '2020': ['bs', 'sst', 'sm', 'xa', 'xp'],
      '2021': ['as', 'sm', 'xa', 'xp'],
      '2022': ['as', 'sm', 'xa', 'xp'],
      '2023': ['as', 'sm', 'xa', 'xp'],
    },
    'M3 (with MP Sports Suspension) (G80)': {
      '2023': ['ss', 'ssm', 'xp', 'xu'],
      '2024': ['ss', 'ssm', 'xp', 'xu'],
    },
    'M3 CS': {
      '2018': ['as', 'ssr', 'sm', 'xp', 'xa'],
      '2019': ['as', 'ssr', 'sm', 'xp', 'xa'],
      '2020': ['as', 'ssr', 'sm', 'xp', 'xa'],
    },
    'M4': {
      '2015': ['bs', 'ssr', 'sst', 'ssp', 'sm', 'xp', 'xa'],
      '2016': ['bs', 'ssr', 'sst', 'ssp', 'sm', 'xp', 'xa'],
      '2017': ['bs', 'ssr', 'sst', 'ssp', 'sm', 'xp', 'xa'],
      '2018': ['bs', 'ssr', 'sst', 'ssp', 'sm', 'xp', 'xa'],
      '2019': ['bs', 'ssr', 'sst', 'ssp', 'sm', 'xp', 'xa'],
      '2020': ['bs', 'ssr', 'sst', 'ssp', 'sm', 'xp', 'xa'],
      '2021': ['as', 'ssp', 'sm', 'xp', 'xa'],
      '2022': ['as', 'ssp', 'sm', 'xp', 'xa'],
      '2023': ['as', 'ssp', 'sm', 'xp', 'xa'],
    },
    'M4 (with MP Sports Suspension) (G82)': {
      '2023': ['ss', 'ssm', 'xp', 'xu'],
      '2024': ['ss', 'ssm', 'xp', 'xu'],
    },
    'M4 CS': {
      '2018': ['as', 'ssr', 'sm', 'xp', 'xa'],
      '2019': ['as', 'ssr', 'sm', 'xp', 'xa'],
      '2020': ['as', 'ssr', 'sm', 'xp', 'xa'],
    },
    'M4 GTS': {
      'all': ['ss', 'ssm', 'xp', 'xu'],
    },
    'M5': {
      '1988': ['fs', 'sm', 'xp', 'xa'],
      '1989': ['fs', 'sm', 'xp', 'xa'],
      '1990': ['fs', 'sm', 'xp', 'xa'],
      '1991': ['fs', 'sm', 'xp', 'xa'],
      '1992': ['fs', 'sm', 'xp', 'xa'],
      '1993': ['fs', 'sm', 'xp', 'xa'],
      '1998': ['fs', 'dst', 'sm', 'xp', 'xa'],
      '1999': ['fs', 'dst', 'sm', 'xp', 'xa'],
      '2000': ['fs', 'dst', 'sm', 'xp', 'xa'],
      '2001': ['fs', 'dst', 'sm', 'xp', 'xa'],
      '2002': ['fs', 'dst', 'sm', 'xp', 'xa'],
      '2003': ['fs', 'dst', 'sm', 'xp', 'xa'],
      '2004': ['fs', 'sm', 'xp', 'xa'],
      '2005': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2006': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2007': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2008': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2009': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2010': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2017': ['bs', 'bst', 'sm', 'xp', 'xa'],
      '2018': ['bs', 'bst', 'sm', 'xp', 'xa'],
      '2019': ['bs', 'bst', 'sm', 'xp', 'xa'],
      '2020': ['bs', 'bst', 'sm', 'xp', 'xa'],
      '2021': ['bs', 'bst', 'sm', 'xp', 'xa'],
      '2022': ['bs', 'bst', 'sm', 'xp', 'xa'],
      '2023': ['bs', 'bst', 'sm', 'xp', 'xa'],
    },
    'M5 CS': {
      '2022': ['ss', 'sst', 'sm', 'xp', 'xu'],
    },
    'M6': {
      '2005': ['bst', 'sm', 'xp', 'xa'],
      '2006': ['bst', 'sm', 'xp', 'xa'],
      '2007': ['bst', 'sm', 'xp', 'xa'],
      '2008': ['bst', 'sm', 'xp', 'xa'],
      '2009': ['bst', 'sm', 'xp', 'xa'],
      '2010': ['bst', 'sm', 'xp', 'xa'],
    },
    'M235i': {
      '2014': ['fs', 'bst', 'ssp', 'sm', 'xp', 'xa'],
      '2015': ['fs', 'bst', 'ssp', 'sm', 'xp', 'xa'],
      '2016': ['fs', 'bst', 'ssp', 'sm', 'xp', 'xa'],
      '2020': ['ds', 'bst', 'ssp', 'sm', 'xp', 'xa'],
      '2021': ['ds', 'bst', 'ssp', 'sm', 'xp', 'xa'],
      '2022': ['ds', 'bst', 'ssp', 'sm', 'xp', 'xa'],
      '2023': ['ds', 'bst', 'ssp', 'sm', 'xp', 'xa'],
      '2024': ['ds', 'bst', 'ssp', 'sm', 'xp', 'xa'],
    },
    'M240i (incl. xDrive)': {
      '2017': ['fs', 'sst', 'sm', 'xp', 'xa'],
      '2018': ['fs', 'sst', 'sm', 'xp', 'xa'],
      '2019': ['fs', 'sst', 'sm', 'xp', 'xa'],
      '2020': ['fs', 'sst', 'sm', 'xp', 'xa'],
      '2021': ['fs', 'sst', 'sm', 'xp', 'xa'],
      '2022': ['fs', 'sst', 'sm', 'xp', 'xa'],
      '2023': ['fs', 'sst', 'sm', 'xp', 'xa'],
      '2024': ['fs', 'sst', 'sm', 'xp', 'xa'],
    },
    'M Coupe': {
      '1996': ['cs', 'csp', 'sm', 'xp', 'xa'],
      '1997': ['cs', 'csp', 'sm', 'xp', 'xa'],
      '1998': ['cs', 'cst', 'csp', 'sm', 'xp', 'xa'],
      '1999': ['cs', 'cst', 'csp', 'sm', 'xp', 'xa'],
      '2000': ['cs', 'cst', 'csp', 'sm', 'xp', 'xa'],
      '2001': ['cs', 'cst', 'csp', 'sm', 'xp', 'xa'],
      '2002': ['cs', 'cst', 'csp', 'sm', 'xp', 'xa'],
    },
    'M Roadster': {
      '1996': ['cs', 'csp', 'sm', 'xp', 'xa'],
      '1997': ['cs', 'csp', 'sm', 'xp', 'xa'],
      '1998': ['cs', 'cst', 'csp', 'sm', 'xp', 'xa'],
      '1999': ['cs', 'cst', 'csp', 'sm', 'xp', 'xa'],
      '2000': ['cs', 'cst', 'csp', 'sm', 'xp', 'xa'],
      '2001': ['cs', 'cst', 'csp', 'sm', 'xp', 'xa'],
      '2002': ['cs', 'cst', 'csp', 'sm', 'xp', 'xa'],
    },
    'X1': {
      '2013': ['bst', 'sm', 'xp', 'xa'],
      '2014': ['bst', 'sm', 'xp', 'xa'],
      '2015': ['bst', 'sm', 'xp', 'xa'],
    },
    'Z3 (4-cyl)': {
      '1995': ['est', 'csp', 'sm', 'dp', 'xp', 'xa'],
      '1996': ['es', 'est', 'csp', 'sm', 'dp', 'xp', 'xa'],
      '1997': ['es', 'est', 'csp', 'sm', 'dp', 'xp', 'xa'],
      '1998': ['es', 'est', 'csp', 'sm', 'dp', 'xp', 'xa'],
      '1999': ['est', 'csp', 'sm', 'dp', 'xp', 'xa'],
      '2000': ['est', 'csp', 'sm', 'dp', 'xp', 'xa'],
      '2001': ['est', 'csp', 'sm', 'dp', 'xp', 'xa'],
      '2002': ['est', 'csp', 'sm', 'dp', 'xp', 'xa'],
    },
    'Z3 (6-cyl, non M)': {
      '1997': ['cs', 'cst', 'csp', 'sm', 'fp', 'xp', 'xa'],
      '1998': ['cs', 'cst', 'csp', 'sm', 'fp', 'xp', 'xa'],
      '1999': ['cs', 'cst', 'csp', 'sm', 'fp', 'xp', 'xa'],
      '2000': ['cs', 'cst', 'csp', 'sm', 'fp', 'xp', 'xa'],
      '2001': ['cs', 'cst', 'csp', 'sm', 'fp', 'xp', 'xa'],
      '2002': ['cs', 'cst', 'csp', 'sm', 'fp', 'xp', 'xa'],
    },
    'Z4 28i & 30i': {
      '2009': ['cs', 'sm', 'xp', 'xa'],
      '2010': ['cs', 'sm', 'xp', 'xa'],
      '2011': ['cs', 'sm', 'xp', 'xa'],
      '2012': ['cs', 'sm', 'xp', 'xa'],
      '2013': ['cs', 'sm', 'xp', 'xa'],
      '2014': ['cs', 'sm', 'xp', 'xa'],
      '2015': ['cs', 'sm', 'xp', 'xa'],
      '2016': ['cs', 'sm', 'xp', 'xa'],
    },
    'Z4 35i & 35is': {
      '2009': ['cs', 'sm', 'xp', 'xa'],
      '2010': ['cs', 'sm', 'xp', 'xa'],
      '2011': ['cs', 'sm', 'xp', 'xa'],
      '2012': ['cs', 'ssp', 'sm', 'xp', 'xa'],
      '2013': ['cs', 'ssp', 'sm', 'xp', 'xa'],
      '2014': ['cs', 'sm', 'xp', 'xa'],
      '2015': ['cs', 'sm', 'xp', 'xa'],
      '2016': ['cs', 'sm', 'xp', 'xa'],
    },
    'Z4 Coupe & Roadster (non-M)': {
      '2003': ['cs', 'cst', 'csp', 'sm', 'fp', 'xp', 'xa'],
      '2004': ['cs', 'cst', 'csp', 'sm', 'fp', 'xp', 'xa'],
      '2005': ['cs', 'cst', 'csp', 'sm', 'fp', 'xp', 'xa'],
      '2006': ['cs', 'cst', 'csp', 'sm', 'fp', 'xp', 'xa'],
      '2007': ['cs', 'cst', 'csp', 'sm', 'fp', 'xp', 'xa'],
      '2008': ['cs', 'cst', 'csp', 'sm', 'fp', 'xp', 'xa'],
      '2020': ['cs', 'cst', 'csp', 'sm', 'fp', 'xp', 'xa'],
      '2021': ['cs', 'csp', 'sm', 'fp', 'xp', 'xa'],
      '2022': ['cs', 'csp', 'sm', 'fp', 'xp', 'xa'],
      '2023': ['cs', 'csp', 'sm', 'fp', 'xp', 'xa'],
      '2024': ['cs', 'csp', 'sm', 'fp', 'xp', 'xa'],
    },
    'Z4 M Coupe & Roadster': {
      '2006': ['cs', 'sst', 'csp', 'sm', 'xp', 'xa'],
      '2007': ['cs', 'sst', 'csp', 'sm', 'xp', 'xa'],
      '2008': ['cs', 'sst', 'csp', 'sm', 'xp', 'xa'],
    },
    'Z8': {
      'all': ['ss', 'ssp', 'ssm', 'xp', 'xu'],
    },
    'i3 (incl. i3s)': {
      'all': ['hs', 'gst', 'sm', 'xp', 'xa', 'evx'],
    },
    'i8': {
      '2014': ['ss', 'ssm', 'xp', 'xu'],
      '2015': ['ss', 'ssm', 'xp', 'xu'],
      '2016': ['ss', 'ssm', 'xp', 'xu'],
      '2017': ['ss', 'ssm', 'xp', 'xu'],
      '2018': ['ss', 'ssm', 'xp', 'xu'],
      '2019': ['ss', 'ssm', 'xp', 'xu'],
      '2020': ['ss', 'ssm', 'xp', 'xu'],
    },
  },
  'Buick': {
    'Grand National': {
      'all': ['fs', 'xp', 'xa', 'sm'],
    },
    'Reatta': {
      'all': ['hs', 'esp', 'xp', 'xa', 'sm'],
    },
    'Regal (V6 & V8, RWD)': {
      '1980': ['esp', 'xp', 'xa', 'sm'],
      '1981': ['esp', 'xp', 'xa', 'sm'],
      '1982': ['esp', 'cp', 'xp', 'xa', 'sm'],
      '1983': ['esp', 'cp', 'xp', 'xa', 'sm'],
      '1984': ['esp', 'cp', 'xp', 'xa', 'sm'],
      '1985': ['esp', 'cp', 'xp', 'xa', 'sm'],
      '1986': ['esp', 'cp', 'xp', 'xa', 'sm'],
      '1987': ['esp', 'cp', 'xp', 'xa', 'sm'],
      '1988': ['esp', 'cp', 'xp', 'xa', 'sm'],
    },
    'Regal (V6Turbo)': {
      'all': ['fs', 'xp', 'xa', 'sm'],
    },
    'Regal (all)': {
      '2014': ['gs', 'xp', 'xa', 'sm'],
      '2015': ['gs', 'xp', 'xa', 'sm'],
      '2016': ['gs', 'xp', 'xa', 'sm'],
      '2017': ['gs', 'xp', 'xa', 'sm'],
      '2018': ['gs', 'xp', 'xa', 'sm'],
      '2019': ['gs', 'xp', 'xa', 'sm'],
      '2020': ['gs', 'xp', 'xa', 'sm'],
    },
    'Verano (non-turbo)': {
      '2013': ['hs', 'xp', 'xa', 'sm'],
      '2014': ['hs', 'xp', 'xa', 'sm'],
      '2015': ['hs', 'xp', 'xa', 'sm'],
      '2016': ['hs', 'xp', 'xa', 'sm'],
      '2017': ['hs', 'xp', 'xa', 'sm'],
    },
    'Verano Turbo': {
      '2013': ['gs', 'xp', 'xa', 'sm'],
      '2014': ['gs', 'xp', 'xa', 'sm'],
      '2015': ['gs', 'xp', 'xa', 'sm'],
      '2016': ['gs', 'xp', 'xa', 'sm'],
      '2017': ['gs', 'xp', 'xa', 'sm'],
    },
  },
  'Cadillac': {
    'ATS (2.0L Turbo)': {
      '2012': ['ds', 'bst', 'camc', 'xp', 'sm'],
      '2013': ['ds', 'bst', 'camc', 'xp', 'sm'],
      '2014': ['ds', 'bst', 'camc', 'xp', 'sm'],
      '2015': ['ds', 'bst', 'camc', 'xp', 'sm'],
      '2016': ['ds', 'bst', 'camc', 'xp', 'sm'],
      '2017': ['ds', 'bst', 'camc', 'xp', 'sm'],
      '2018': ['ds', 'bst', 'camc', 'xp', 'sm'],
      '2019': ['ds', 'bst', 'camc', 'xp', 'sm'],
    },
    'ATS (2.5L 4-cyl non-turbo)': {
      '2013': ['gs', 'camc', 'xp', 'sm'],
      '2014': ['gs', 'camc', 'xp', 'sm'],
      '2015': ['gs', 'camc', 'xp', 'sm'],
      '2016': ['gs', 'camc', 'xp', 'sm'],
    },
    'ATS (3.6L V6)': {
      'all': ['fs', 'camc', 'xp', 'sm'],
    },
    'ATS-V': {
      '2016': ['bs', 'sst', 'camc', 'xp', 'sm'],
      '2017': ['bs', 'sst', 'camc', 'xp', 'sm'],
      '2018': ['bs', 'sst', 'camc', 'xp', 'sm'],
      '2019': ['bs', 'sst', 'camc', 'xp', 'sm'],
    },
    'CT4 (non-V, non-Blackwing)': {
      '2020': ['ds', 'camc', 'xp', 'sm'],
      '2021': ['ds', 'camc', 'xp', 'sm'],
      '2022': ['ds', 'camc', 'xp', 'sm'],
      '2023': ['ds', 'camc', 'xp', 'sm'],
      '2024': ['ds', 'camc', 'xp', 'sm'],
    },
    'CT4V (incl. Blackwing)': {
      '2020': ['bs', 'camc', 'xp', 'sm'],
      '2021': ['bs', 'camc', 'xp', 'sm'],
      '2022': ['bs', 'camc', 'xp', 'sm'],
      '2023': ['bs', 'camc', 'xp', 'sm'],
      '2024': ['bs', 'camc', 'xp', 'sm'],
    },
    'CT5V (incl. Blackwing)': {
      '2020': ['as', 'camc', 'xp', 'sm'],
      '2021': ['as', 'camc', 'xp', 'sm'],
      '2022': ['as', 'camc', 'xp', 'sm'],
      '2023': ['as', 'camc', 'xp', 'sm'],
    },
    'CTS (non-V, non-Vsport)': {
      '2003': ['ds', 'cp', 'camc', 'xp', 'sm'],
      '2004': ['ds', 'cp', 'camc', 'xp', 'sm'],
      '2005': ['ds', 'cp', 'camc', 'xp', 'sm'],
      '2006': ['ds', 'cp', 'camc', 'xp', 'sm'],
      '2007': ['ds', 'cp', 'camc', 'xp', 'sm'],
      '2008': ['ds', 'camc', 'xp', 'sm'],
      '2009': ['ds', 'camc', 'xp', 'sm'],
      '2010': ['ds', 'camc', 'xp', 'sm'],
      '2011': ['ds', 'camc', 'xp', 'sm'],
      '2012': ['ds', 'camc', 'xp', 'sm'],
      '2013': ['ds', 'camc', 'xp', 'sm'],
      '2014': ['ds', 'camc', 'xp', 'sm'],
      '2015': ['ds', 'camc', 'xp', 'sm'],
      '2016': ['ds', 'camc', 'xp', 'sm'],
      '2017': ['ds', 'camc', 'xp', 'sm'],
      '2018': ['ds', 'camc', 'xp', 'sm'],
      '2019': ['ds', 'camc', 'xp', 'sm'],
    },
    'CTS-V & CTS-Vsport': {
      '2004': ['fs', 'esp', 'cp', 'camc', 'xp', 'sm'],
      '2005': ['fs', 'esp', 'cp', 'camc', 'xp', 'sm'],
      '2006': ['fs', 'esp', 'cp', 'camc', 'xp', 'sm'],
      '2007': ['fs', 'esp', 'cp', 'camc', 'xp', 'sm'],
      '2008': ['fs', 'camc', 'xp', 'sm'],
      '2009': ['fs', 'camc', 'xp', 'sm'],
      '2010': ['fs', 'camc', 'xp', 'sm'],
      '2011': ['fs', 'camc', 'xp', 'sm'],
      '2012': ['fs', 'camc', 'xp', 'sm'],
      '2013': ['fs', 'camc', 'xp', 'sm'],
      '2014': ['fs', 'camc', 'xp', 'sm'],
      '2015': ['fs', 'camc', 'xp', 'sm'],
      '2016': ['fs', 'camc', 'xp', 'sm'],
      '2017': ['fs', 'camc', 'xp', 'sm'],
      '2018': ['fs', 'camc', 'xp', 'sm'],
      '2019': ['fs', 'camc', 'xp', 'sm'],
    },
    'Catera': {
      'all': ['hs', 'camt', 'xp', 'sm'],
    },
    'ELR': {
      '2014': ['gs', 'xp', 'xa', 'sm'],
      '2015': ['gs', 'xp', 'xa', 'sm'],
      '2016': ['gs', 'xp', 'xa', 'sm'],
    },
    'LYRIQ (incl. AWD)': {
      '2023': ['evx'],
      '2024': ['evx'],
    },
    'XLR': {
      'all': ['as', 'ssr', 'camc', 'xp', 'sm'],
    },
  },
  'Chevrolet': {
    'Aveo': {
      'all': ['hs', 'xp', 'xa', 'sm', 'smf'],
    },
    'Beretta (Not Otherwise Classified)': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Blazer EV': {
      '2024': ['evx'],
    },
    'Bolt': {
      'all': ['hs', 'gst', 'xp', 'xa', 'sm', 'evx'],
    },
    'Camaro (4-cyl & 6-cyl)': {
      '1967': ['hs', 'bst', 'esp', 'camt', 'xp', 'sm'],
      '1968': ['hs', 'bst', 'esp', 'camt', 'xp', 'sm'],
      '1969': ['hs', 'bst', 'esp', 'camt', 'xp', 'sm'],
      '1970': ['hs', 'bst', 'esp', 'camt', 'xp', 'sm'],
      '1971': ['hs', 'bst', 'esp', 'camt', 'xp', 'sm'],
      '1972': ['hs', 'bst', 'esp', 'camt', 'xp', 'sm'],
      '1973': ['hs', 'bst', 'esp', 'camt', 'xp', 'sm'],
      '1974': ['hs', 'bst', 'esp', 'camt', 'xp', 'sm'],
      '1975': ['hs', 'bst', 'esp', 'camt', 'xp', 'sm'],
      '1976': ['hs', 'bst', 'esp', 'camt', 'xp', 'sm'],
      '1977': ['hs', 'bst', 'esp', 'camt', 'xp', 'sm'],
      '1978': ['hs', 'bst', 'esp', 'camt', 'xp', 'sm'],
      '1979': ['hs', 'bst', 'esp', 'camt', 'xp', 'sm'],
      '1980': ['hs', 'bst', 'esp', 'camt', 'xp', 'sm'],
      '1981': ['hs', 'bst', 'esp', 'camt', 'xp', 'sm'],
      '1982': ['hs', 'bst', 'fsp', 'camt', 'xp', 'sm'],
      '1983': ['hs', 'bst', 'fsp', 'camt', 'xp', 'sm'],
      '1984': ['hs', 'bst', 'fsp', 'camt', 'xp', 'sm'],
      '1985': ['hs', 'bst', 'fsp', 'camt', 'xp', 'sm'],
      '1986': ['hs', 'bst', 'fsp', 'camt', 'xp', 'sm'],
      '1987': ['hs', 'bst', 'camt', 'xp', 'sm'],
      '1988': ['hs', 'bst', 'camt', 'xp', 'sm'],
      '1989': ['hs', 'bst', 'camt', 'xp', 'sm'],
      '1990': ['hs', 'bst', 'camt', 'xp', 'sm'],
      '1991': ['hs', 'bst', 'camt', 'xp', 'sm'],
      '1992': ['hs', 'bst', 'camt', 'xp', 'sm'],
      '1993': ['hs', 'bst', 'camt', 'xp', 'sm'],
      '1994': ['hs', 'bst', 'camt', 'xp', 'sm'],
      '1995': ['hs', 'bst', 'camt', 'xp', 'sm'],
      '1996': ['hs', 'bst', 'camt', 'xp', 'sm'],
      '1997': ['hs', 'bst', 'camt', 'xp', 'sm'],
      '1998': ['hs', 'bst', 'camt', 'xp', 'sm'],
      '1999': ['hs', 'bst', 'camt', 'xp', 'sm'],
      '2000': ['hs', 'bst', 'camt', 'xp', 'sm'],
      '2001': ['hs', 'bst', 'camc', 'xp', 'sm'],
      '2002': ['hs', 'bst', 'camc', 'xp', 'sm'],
    },
    'Camaro (V6 & V8; excl. SS 1LE, ZL1, Suspension Lowering Kit, and Brembo® 6-piston Front Brake Kit)': {
      '2016': ['fs', 'bst', 'camc', 'xp', 'sm'],
      '2017': ['fs', 'bst', 'camc', 'xp', 'sm'],
      '2018': ['fs', 'bst', 'camc', 'xp', 'sm'],
      '2019': ['fs', 'bst', 'camc', 'xp', 'sm'],
      '2020': ['fs', 'bst', 'camc', 'xp', 'sm'],
    },
    'Camaro (V6)': {
      '2010': ['ds', 'bst', 'camc', 'xp', 'sm'],
      '2011': ['ds', 'bst', 'camc', 'xp', 'sm'],
      '2012': ['ds', 'bst', 'camc', 'xp', 'sm'],
      '2013': ['ds', 'bst', 'camc', 'xp', 'sm'],
      '2014': ['ds', 'bst', 'camc', 'xp', 'sm'],
      '2015': ['ds', 'bst', 'camc', 'xp', 'sm'],
    },
    'Camaro (V8 non-supercharged, not otherwise classified)': {
      'all': ['fs', 'bst', 'camc', 'xp', 'sm'],
    },
    'Camaro LS & LT (2.0L Turbo; incl. 1LE)': {
      '2016': ['ds', 'sst', 'esp', 'camc', 'xp', 'sm'],
      '2017': ['ds', 'sst', 'esp', 'camc', 'xp', 'sm'],
      '2018': ['ds', 'sst', 'esp', 'camc', 'xp', 'sm'],
      '2019': ['ds', 'sst', 'esp', 'camc', 'xp', 'sm'],
      '2020': ['ds', 'sst', 'esp', 'camc', 'xp', 'sm'],
      '2021': ['ds', 'sst', 'esp', 'camc', 'xp', 'sm'],
      '2022': ['ds', 'sst', 'esp', 'camc', 'xp', 'sm'],
      '2023': ['ds', 'sst', 'esp', 'camc', 'xp', 'sm'],
    },
    'Camaro SS 1LE': {
      '1998': ['fs', 'bst', 'camt', 'xp', 'sm'],
      '1999': ['fs', 'bst', 'camt', 'xp', 'sm'],
      '2000': ['fs', 'bst', 'camt', 'xp', 'sm'],
      '2001': ['fs', 'bst', 'camc', 'xp', 'sm'],
      '2002': ['fs', 'bst', 'camc', 'xp', 'sm'],
      '2010': ['fs', 'bst', 'esp', 'camc', 'xp', 'sm'],
      '2011': ['fs', 'bst', 'esp', 'camc', 'xp', 'sm'],
      '2012': ['fs', 'bst', 'esp', 'camc', 'xp', 'sm'],
      '2013': ['fs', 'bst', 'esp', 'camc', 'xp', 'sm'],
      '2014': ['fs', 'bst', 'esp', 'camc', 'xp', 'sm'],
      '2015': ['fs', 'bst', 'esp', 'camc', 'xp', 'sm'],
      '2017': ['fs', 'ssr', 'bst', 'camc', 'xp', 'sm'],
      '2018': ['fs', 'ssr', 'bst', 'camc', 'xp', 'sm'],
      '2019': ['fs', 'ssr', 'bst', 'camc', 'xp', 'sm'],
      '2020': ['fs', 'ssr', 'bst', 'camc', 'xp', 'sm'],
      '2021': ['fs', 'ssr', 'bst', 'camc', 'xp', 'sm'],
      '2022': ['fs', 'ssr', 'bst', 'camc', 'xp', 'sm'],
      '2023': ['fs', 'ssr', 'bst', 'camc', 'xp', 'sm'],
    },
    'Camaro SS (non-1LE)': {
      '2016': ['fs', 'bst', 'camc', 'xp', 'sm'],
      '2017': ['fs', 'bst', 'camc', 'xp', 'sm'],
      '2018': ['fs', 'bst', 'camc', 'xp', 'sm'],
      '2019': ['fs', 'bst', 'camc', 'xp', 'sm'],
      '2020': ['fs', 'bst', 'camc', 'xp', 'sm'],
      '2021': ['fs', 'bst', 'camc', 'xp', 'sm'],
      '2022': ['fs', 'bst', 'camc', 'xp', 'sm'],
      '2023': ['fs', 'bst', 'camc', 'xp', 'sm'],
    },
    'Camaro V6 1LE': {
      '2017': ['fs', 'bst', 'camc', 'xp', 'sm'],
      '2018': ['fs', 'bst', 'camc', 'xp', 'sm'],
      '2019': ['fs', 'bst', 'camc', 'xp', 'sm'],
      '2020': ['fs', 'bst', 'camc', 'xp', 'sm'],
    },
    'Camaro Z28': {
      '2014': ['as', 'sst', 'ssr', 'bst', 'camc', 'xp', 'sm'],
      '2015': ['as', 'sst', 'ssr', 'bst', 'camc', 'xp', 'sm'],
    },
    'Camaro ZL1 1LE': {
      '2018': ['ss', 'ssr', 'camc', 'xp', 'sm'],
      '2019': ['ss', 'ssr', 'camc', 'xp', 'sm'],
      '2020': ['ss', 'ssr', 'camc', 'xp', 'sm'],
      '2021': ['ss', 'ssr', 'camc', 'xp', 'sm'],
      '2022': ['ss', 'ssr', 'camc', 'xp', 'sm'],
      '2023': ['ss', 'ssr', 'camc', 'xp', 'sm'],
      '2024': ['ss', 'ssr', 'camc', 'xp', 'sm'],
    },
    'Camaro ZL1 (non-1LE)': {
      '2012': ['bs', 'sst', 'ssr', 'ssp', 'camc', 'xp', 'sm'],
      '2013': ['bs', 'sst', 'ssr', 'ssp', 'camc', 'xp', 'sm'],
      '2014': ['bs', 'sst', 'ssr', 'camc', 'xp', 'sm'],
      '2015': ['bs', 'sst', 'ssr', 'camc', 'xp', 'sm'],
      '2017': ['as', 'sst', 'ssr', 'ssp', 'camc', 'xp', 'sm'],
      '2018': ['as', 'sst', 'ssr', 'ssp', 'camc', 'xp', 'sm'],
      '2019': ['as', 'sst', 'ssr', 'ssp', 'camc', 'xp', 'sm'],
      '2020': ['as', 'sst', 'ssr', 'camc', 'xp', 'sm'],
      '2021': ['as', 'sst', 'ssr', 'camc', 'xp', 'sm'],
      '2022': ['as', 'sst', 'ssr', 'camc', 'xp', 'sm'],
      '2023': ['as', 'sst', 'ssr', 'camc', 'xp', 'sm'],
    },
    'Chevelle': {
      '1964': ['esp', 'camt', 'xp', 'sm'],
      '1965': ['esp', 'camt', 'xp', 'sm'],
      '1966': ['esp', 'camt', 'xp', 'sm'],
      '1967': ['esp', 'camt', 'xp', 'sm'],
      '1968': ['esp', 'camt', 'xp', 'sm'],
      '1969': ['esp', 'camt', 'xp', 'sm'],
      '1970': ['esp', 'camt', 'xp', 'sm'],
      '1971': ['esp', 'camt', 'xp', 'sm'],
      '1972': ['esp', 'camt', 'xp', 'sm'],
      '1973': ['esp', 'camt', 'xp', 'sm'],
      '1974': ['esp', 'camt', 'xp', 'sm'],
      '1975': ['esp', 'camt', 'xp', 'sm'],
      '1976': ['esp', 'camt', 'xp', 'sm'],
    },
    'Chevette': {
      'all': ['hs', 'fsp', 'camt', 'xp', 'sm'],
    },
    'Cobalt (all, non-turbo, est: 2.2L)': {
      '2005': ['hs', 'dst', 'est', 'dsp', 'xp', 'xa', 'sm'],
      '2006': ['hs', 'dst', 'est', 'dsp', 'xp', 'xa', 'sm'],
      '2007': ['hs', 'dst', 'est', 'dsp', 'xp', 'xa', 'sm'],
      '2008': ['hs', 'dst', 'est', 'dsp', 'xp', 'xa', 'sm'],
      '2009': ['hs', 'dst', 'est', 'dsp', 'xp', 'xa', 'sm'],
      '2010': ['hs', 'dst', 'est', 'dsp', 'xp', 'xa', 'sm'],
    },
    'Cobalt SS (2.0L SC)': {
      '2005': ['gs', 'dst', 'esp', 'xp', 'xa', 'sm', 'smf'],
      '2006': ['gs', 'dst', 'esp', 'xp', 'xa', 'sm', 'smf'],
      '2007': ['gs', 'dst', 'esp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Cobalt SS (2.0L Turbo)': {
      '2008': ['ds', 'gst', 'esp', 'xp', 'xa', 'sm', 'smf'],
      '2009': ['ds', 'gst', 'esp', 'xp', 'xa', 'sm', 'smf'],
      '2010': ['ds', 'gst', 'esp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Corvair (all non-yenko)': {
      'all': ['hs', 'fsp', 'camt', 'xp', 'sm'],
    },
    'Corvair (all yenko)': {
      'all': ['hs', 'esp', 'camt', 'xp', 'sm'],
    },
    'Corvette': {
      '1953': ['fs', 'csp', 'cams', 'ssm', 'xp'],
      '1954': ['fs', 'csp', 'cams', 'ssm', 'xp'],
      '1955': ['fs', 'csp', 'cams', 'ssm', 'xp'],
      '1956': ['fs', 'csp', 'cams', 'ssm', 'xp'],
      '1957': ['fs', 'csp', 'cams', 'ssm', 'xp'],
      '1958': ['fs', 'csp', 'cams', 'ssm', 'xp'],
      '1959': ['fs', 'csp', 'cams', 'ssm', 'xp'],
      '1960': ['fs', 'csp', 'cams', 'ssm', 'xp'],
      '1961': ['fs', 'csp', 'cams', 'ssm', 'xp'],
      '1962': ['fs', 'csp', 'cams', 'ssm', 'xp'],
      '1963': ['cs', 'csp', 'cams', 'ssm', 'xp'],
      '1964': ['cs', 'csp', 'cams', 'ssm', 'xp'],
      '1965': ['cs', 'csp', 'cams', 'ssm', 'xp'],
      '1966': ['cs', 'csp', 'cams', 'ssm', 'xp'],
      '1967': ['cs', 'csp', 'cams', 'ssm', 'xp'],
      '1968': ['cs', 'csp', 'cams', 'ssm', 'xp'],
      '1969': ['cs', 'csp', 'cams', 'ssm', 'xp'],
      '1970': ['cs', 'csp', 'cams', 'ssm', 'xp'],
      '1971': ['cs', 'csp', 'cams', 'ssm', 'xp'],
      '1972': ['cs', 'csp', 'cams', 'ssm', 'xp'],
      '1973': ['cs', 'csp', 'cams', 'ssm', 'xp'],
      '1974': ['cs', 'csp', 'cams', 'ssm', 'xp'],
      '1975': ['cs', 'csp', 'cams', 'ssm', 'xp'],
      '1976': ['cs', 'csp', 'cams', 'ssm', 'xp'],
      '1977': ['cs', 'csp', 'cams', 'ssm', 'xp'],
      '1978': ['cs', 'csp', 'cams', 'ssm', 'xp'],
      '1979': ['cs', 'csp', 'cams', 'ssm', 'xp'],
      '1980': ['cs', 'csp', 'cams', 'ssm', 'xp'],
      '1981': ['cs', 'csp', 'cams', 'ssm', 'xp'],
      '1982': ['cs', 'csp', 'cams', 'ssm', 'xp'],
    },
    'Corvette (C4, all, bst excl. LT4 engine & ZR1)': {
      '1984': ['cs', 'bst', 'csp', 'cams', 'xp', 'ssm'],
      '1985': ['cs', 'bst', 'csp', 'cams', 'xp', 'ssm'],
      '1986': ['cs', 'bst', 'csp', 'cams', 'xp', 'ssm'],
      '1987': ['cs', 'bst', 'csp', 'cams', 'xp', 'ssm'],
      '1988': ['cs', 'bst', 'csp', 'cams', 'xp', 'ssm'],
      '1989': ['cs', 'bst', 'csp', 'cams', 'xp', 'ssm'],
      '1990': ['cs', 'bst', 'csp', 'cams', 'xp', 'ssm'],
      '1991': ['cs', 'bst', 'csp', 'cams', 'xp', 'ssm'],
      '1992': ['cs', 'bst', 'csp', 'cams', 'xp', 'ssm'],
      '1993': ['cs', 'bst', 'csp', 'cams', 'xp', 'ssm'],
      '1994': ['cs', 'bst', 'csp', 'cams', 'xp', 'ssm'],
      '1995': ['cs', 'bst', 'csp', 'cams', 'xp', 'ssm'],
      '1996': ['cs', 'bst', 'csp', 'cams', 'xp', 'ssm'],
    },
    'Corvette (C5, non-Z06)': {
      '1997': ['bs', 'bst', 'ssp', 'cams', 'xp', 'ssm'],
      '1998': ['bs', 'bst', 'ssp', 'cams', 'xp', 'ssm'],
      '1999': ['bs', 'bst', 'ssp', 'cams', 'xp', 'ssm'],
      '2000': ['bs', 'bst', 'ssp', 'cams', 'xp', 'ssm'],
      '2001': ['bs', 'bst', 'ssp', 'cams', 'xp', 'ssm'],
      '2002': ['bs', 'bst', 'ssp', 'cams', 'xp', 'ssm'],
      '2003': ['bs', 'bst', 'ssp', 'cams', 'xp', 'ssm'],
      '2004': ['bs', 'bst', 'ssp', 'cams', 'xp', 'ssm'],
    },
    'Corvette (C6, non-ZR1)': {
      '2005': ['bs', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2006': ['bs', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2007': ['bs', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2008': ['bs', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2009': ['bs', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2010': ['bs', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2011': ['bs', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2012': ['bs', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2013': ['bs', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
    },
    'Corvette E-Ray': {
      '2024': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
    },
    'Corvette Grand Sport': {
      '2005': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2006': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2007': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2008': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2009': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2010': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2011': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2012': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2013': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2017': ['as', 'ssr', 'ssp', 'cams', 'xp', 'xu', 'ssm'],
      '2018': ['as', 'ssr', 'ssp', 'cams', 'xp', 'xu', 'ssm'],
      '2019': ['as', 'ssr', 'ssp', 'cams', 'xp', 'xu', 'ssm'],
    },
    'Corvette Stingray': {
      '2014': ['bs', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2015': ['bs', 'ssp', 'cams', 'xp', 'ssm'],
      '2016': ['bs', 'ssp', 'cams', 'xp', 'ssm'],
      '2017': ['bs', 'ssp', 'cams', 'xp', 'ssm'],
      '2018': ['bs', 'ssp', 'cams', 'xp', 'ssm'],
      '2019': ['bs', 'ssp', 'cams', 'xp', 'ssm'],
      '2020': ['ss', 'ssr', 'ssp', 'xp', 'ssm'],
      '2021': ['ss', 'ssr', 'ssp', 'xp', 'ssm'],
      '2022': ['ss', 'ssr', 'ssp', 'xp', 'ssm'],
      '2023': ['ss', 'ssr', 'ssp', 'xp', 'ssm'],
      '2024': ['ss', 'ssr', 'ssp', 'xp', 'ssm'],
    },
    'Corvette Z06': {
      '2001': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2002': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2003': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2004': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2005': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2006': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2007': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2008': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2009': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2010': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2011': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2012': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2013': ['as', 'sst', 'ssr', 'ssp', 'cams', 'xp', 'ssm'],
      '2015': ['ss', 'ssp', 'cams', 'xp', 'ssm'],
      '2016': ['ss', 'ssp', 'cams', 'xp', 'ssm'],
      '2017': ['ss', 'ssp', 'cams', 'xp', 'ssm'],
      '2018': ['ss', 'ssp', 'cams', 'xp', 'ssm'],
      '2019': ['ss', 'ssp', 'cams', 'xp', 'ssm'],
      '2023': ['ss', 'ssp', 'xp', 'ssm'],
      '2024': ['ss', 'ssp', 'xp', 'ssm'],
    },
    'Corvette ZR1': {
      '2009': ['ss', 'ssp', 'cams', 'xp', 'ssm'],
      '2010': ['ss', 'ssp', 'cams', 'xp', 'ssm'],
      '2011': ['ss', 'ssp', 'cams', 'xp', 'ssm'],
      '2012': ['ss', 'ssp', 'cams', 'xp', 'ssm'],
      '2013': ['ss', 'ssp', 'cams', 'xp', 'ssm'],
    },
    'Cruze': {
      'all': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
    },
    'HHR': {
      '2008': ['gst', 'esp', 'xp', 'xa', 'sm', 'smf'],
      '2009': ['gst', 'esp', 'xp', 'xa', 'sm', 'smf'],
      '2010': ['gst', 'esp', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['gst', 'esp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Malibu (all)': {
      '2008': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2009': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2010': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2011': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2013': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2014': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2015': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2016': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2017': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2018': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2019': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2020': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2021': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2022': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2023': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2024': ['gs', 'xp', 'xa', 'sm', 'smf'],
    },
    'Nova (FWD)': {
      '1986': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '1987': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '1988': ['hs', 'xp', 'xa', 'sm', 'smf'],
    },
    'Nova (RWD 4-cyl & 6-cyl)': {
      '1962': ['hs', 'camt', 'xp', 'sm'],
      '1963': ['hs', 'camt', 'xp', 'sm'],
      '1964': ['hs', 'camt', 'xp', 'sm'],
      '1965': ['hs', 'camt', 'xp', 'sm'],
      '1966': ['hs', 'camt', 'xp', 'sm'],
      '1967': ['hs', 'camt', 'xp', 'sm'],
      '1968': ['hs', 'camt', 'xp', 'sm'],
      '1969': ['hs', 'camt', 'xp', 'sm'],
      '1970': ['hs', 'camt', 'xp', 'sm'],
      '1971': ['hs', 'camt', 'xp', 'sm'],
      '1972': ['hs', 'camt', 'xp', 'sm'],
      '1973': ['hs', 'camt', 'xp', 'sm'],
      '1974': ['hs', 'camt', 'xp', 'sm'],
      '1975': ['hs', 'camt', 'xp', 'sm'],
      '1976': ['hs', 'camt', 'xp', 'sm'],
      '1977': ['hs', 'camt', 'xp', 'sm'],
      '1978': ['hs', 'camt', 'xp', 'sm'],
      '1979': ['hs', 'camt', 'xp', 'sm'],
    },
    'S10 (4-cyl & 6-cyl), N/A': {
      '2001-any': ['dst', 'fsp', 'camc', 'xp', 'sm'],
      'any-2000': ['dst', 'fsp', 'camt', 'xp', 'sm'],
    },
    'SS Sedan': {
      '2013': ['fs', 'esp', 'camc', 'xp', 'sm'],
      '2014': ['fs', 'esp', 'camc', 'xp', 'sm'],
      '2015': ['fs', 'esp', 'camc', 'xp', 'sm'],
      '2016': ['fs', 'esp', 'camc', 'xp', 'sm'],
      '2017': ['fs', 'esp', 'camc', 'xp', 'sm'],
    },
    'Sonic (all, non-turbo)': {
      '2012': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2013': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2014': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2015': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2016': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2017': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2018': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2019': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2020': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Sonic (all, turbo)': {
      '2012': ['hs', 'gst', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2013': ['hs', 'gst', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2014': ['hs', 'gst', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2015': ['hs', 'gst', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2016': ['hs', 'gst', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2017': ['hs', 'gst', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2018': ['hs', 'gst', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2019': ['hs', 'gst', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2020': ['hs', 'gst', 'fsp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Spark': {
      'all': ['est', 'xp', 'xa', 'sm', 'smf'],
    },
    'Spectrum': {
      'all': ['hs', 'camt', 'xp', 'sm'],
    },
    'Sprint': {
      'all': ['hs', 'est', 'xp', 'xa', 'sm'],
    },
    'Vega & Cosworth Vega': {
      'all': ['hs', 'dp', 'camt', 'xp', 'sm'],
    },
    'Volt': {
      '2011': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2013': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2014': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2015': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2016': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2017': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2018': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2019': ['hs', 'xp', 'xa', 'sm', 'smf'],
    },
  },
  'Chrysler': {
    '200 (4-cyl)': {
      '2010': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2011': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2013': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2014': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2015': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2016': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2017': ['hs', 'xp', 'xa', 'sm', 'smf'],
    },
    '200 (V6)': {
      '2010': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2011': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2013': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2014': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2015': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2016': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2017': ['gs', 'xp', 'xa', 'sm', 'smf'],
    },
    '300 (V6)': {
      '2004': ['gs', 'camc', 'xp', 'sm'],
      '2005': ['gs', 'camc', 'xp', 'sm'],
      '2006': ['cp', 'gs', 'camc', 'xp', 'sm'],
      '2007': ['cp', 'gs', 'camc', 'xp', 'sm'],
      '2008': ['cp', 'gs', 'camc', 'xp', 'sm'],
      '2009': ['cp', 'gs', 'camc', 'xp', 'sm'],
      '2010': ['cp', 'gs', 'camc', 'xp', 'sm'],
      '2011': ['cp', 'ds', 'camc', 'xp', 'sm'],
      '2012': ['cp', 'ds', 'camc', 'xp', 'sm'],
      '2013': ['cp', 'ds', 'camc', 'xp', 'sm'],
      '2014': ['cp', 'ds', 'camc', 'xp', 'sm'],
      '2015': ['cp', 'ds', 'camc', 'xp', 'sm'],
      '2016': ['cp', 'ds', 'camc', 'xp', 'sm'],
      '2017': ['cp', 'ds', 'camc', 'xp', 'sm'],
      '2018': ['ds', 'camc', 'xp', 'sm'],
      '2019': ['ds', 'camc', 'xp', 'sm'],
      '2020': ['ds', 'camc', 'xp', 'sm'],
      '2021': ['ds', 'camc', 'xp', 'sm'],
      '2022': ['ds', 'camc', 'xp', 'sm'],
      '2023': ['ds', 'camc', 'xp', 'sm'],
      '2024': ['ds', 'camc', 'xp', 'sm'],
    },
    '300 (V8, all)': {
      '2004': ['fs', 'camc', 'xp', 'sm'],
      '2005': ['fs', 'camc', 'xp', 'sm'],
      '2006': ['cp', 'fs', 'camc', 'xp', 'sm'],
      '2007': ['cp', 'fs', 'camc', 'xp', 'sm'],
      '2008': ['cp', 'fs', 'camc', 'xp', 'sm'],
      '2009': ['cp', 'fs', 'camc', 'xp', 'sm'],
      '2010': ['cp', 'fs', 'camc', 'xp', 'sm'],
      '2011': ['cp', 'fs', 'camc', 'xp', 'sm'],
      '2012': ['cp', 'fs', 'camc', 'xp', 'sm'],
      '2013': ['cp', 'fs', 'camc', 'xp', 'sm'],
      '2014': ['cp', 'fs', 'camc', 'xp', 'sm'],
      '2015': ['cp', 'fs', 'camc', 'xp', 'sm'],
      '2016': ['cp', 'fs', 'camc', 'xp', 'sm'],
      '2017': ['cp', 'fs', 'camc', 'xp', 'sm'],
      '2018': ['fs', 'camc', 'xp', 'sm'],
      '2019': ['fs', 'camc', 'xp', 'sm'],
      '2020': ['fs', 'camc', 'xp', 'sm'],
      '2021': ['fs', 'camc', 'xp', 'sm'],
      '2022': ['fs', 'camc', 'xp', 'sm'],
      '2023': ['fs', 'camc', 'xp', 'sm'],
      '2024': ['fs', 'camc', 'xp', 'sm'],
    },
    '300M': {
      '1999': ['hs', 'camt', 'xp', 'sm'],
      '2000': ['hs', 'camt', 'xp', 'sm'],
      '2001': ['hs', 'camc', 'xp', 'sm'],
      '2002': ['hs', 'camc', 'xp', 'sm'],
      '2003': ['hs', 'camc', 'xp', 'sm'],
      '2004': ['hs', 'camc', 'xp', 'sm'],
    },
    'Acclaim (V6 & Turbo)': {
      'all': ['dsp', 'camc', 'xp', 'sm'],
    },
    'Arrow 1600, 2000, & 2600': {
      'all': ['fsp', 'camc', 'xp', 'sm'],
    },
    'Cirrus (V6)': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Conquest Turbo': {
      'all': ['gs', 'esp', 'xp', 'xa', 'sm'],
    },
    'Crossfire (non-SRT-6)': {
      'all': ['ds', 'ast', 'esp', 'cams', 'xp', 'ssm'],
    },
    'Crossfire SRT6': {
      'all': ['fs', 'ast', 'csp', 'esp', 'cams', 'xp', 'ssm'],
    },
    'Laser': {
      '1982': ['hs', 'ep', 'xp', 'esp', 'xa', 'sm', 'smf'],
      '1983': ['hs', 'ep', 'xp', 'esp', 'xa', 'sm', 'smf'],
      '1984': ['hs', 'ep', 'xp', 'esp', 'xa', 'sm', 'smf'],
      '1985': ['hs', 'ep', 'xp', 'esp', 'xa', 'sm', 'smf'],
      '1986': ['hs', 'ep', 'xp', 'esp', 'xa', 'sm', 'smf'],
      '1987': ['hs', 'ep', 'xp', 'esp', 'xa', 'sm', 'smf'],
      '1988': ['hs', 'ep', 'xp', 'esp', 'xa', 'sm', 'smf'],
      '1989': ['hs', 'ep', 'xp', 'esp', 'xa', 'sm', 'smf'],
      '1990': ['hs', 'ep', 'xp', 'esp', 'xa', 'sm', 'smf'],
    },
    'Neon (all)': {
      '1995': ['gs', 'fsp', 'est', 'xp', 'xa', 'sm', 'smf'],
      '1996': ['gs', 'fsp', 'est', 'xp', 'xa', 'sm', 'smf'],
      '1997': ['gs', 'fsp', 'est', 'xp', 'xa', 'sm', 'smf'],
      '1998': ['gs', 'fsp', 'est', 'xp', 'xa', 'sm', 'smf'],
      '1999': ['gs', 'fsp', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2000': ['hs', 'fsp', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2001': ['hs', 'fsp', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2002': ['hs', 'fsp', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2003': ['hs', 'fsp', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2004': ['hs', 'fsp', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2005': ['hs', 'fsp', 'est', 'xp', 'xa', 'sm', 'smf'],
    },
    'Neon (non-turbo and SRT4)': {
      '1995': ['gs', 'ep', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '1996': ['gs', 'ep', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '1997': ['gs', 'ep', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '1998': ['gs', 'ep', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '1999': ['gs', 'ep', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2000': ['hs', 'ep', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2001': ['hs', 'ep', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2002': ['hs', 'ep', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2003': ['hs', 'ep', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2004': ['hs', 'ep', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2005': ['hs', 'ep', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
    },
    'PT Cruiser (Turbo)': {
      '2003': ['gs', 'sm', 'xp', 'xa', 'smf'],
      '2004': ['gs', 'sm', 'xp', 'xa', 'smf'],
      '2005': ['gs', 'sm', 'xp', 'xa', 'smf'],
      '2006': ['gs', 'sm', 'xp', 'xa', 'smf'],
      '2007': ['gs', 'sm', 'xp', 'xa', 'smf'],
      '2008': ['gs', 'sm', 'xp', 'xa', 'smf'],
      '2009': ['gs', 'sm', 'xp', 'xa', 'smf'],
    },
    'PT Cruiser (non-turbo)': {
      '2001': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2002': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2003': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2004': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2005': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2006': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2007': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2008': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2009': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2010': ['hs', 'sm', 'xp', 'xa', 'smf'],
    },
    'Sebring': {
      'all': ['hs', 'sm', 'xp', 'xa', 'smf'],
    },
    'Sedans (N/A, FWD, Not Otherwise Classified)': {
      'all': ['ep', 'sm', 'xp', 'xa'],
    },
  },
  'Daewoo': {
    'all': {
      'all': ['hs', 'sm', 'xp', 'xa'],
    },
  },
  'Datsun': {
    '210': {
      'all': ['fsp', 'sm', 'xp', 'xb'],
    },
    '310': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xa'],
    },
    '510': {
      '1968': ['hs', 'fsp', 'sm', 'xp', 'xb'],
      '1969': ['hs', 'fsp', 'sm', 'xp', 'xb'],
      '1970': ['hs', 'fsp', 'sm', 'xp', 'xb'],
      '1971': ['hs', 'fsp', 'sm', 'xp', 'xb'],
      '1972': ['hs', 'fsp', 'sm', 'xp', 'xb'],
      '1973': ['hs', 'fsp', 'sm', 'xp', 'xb'],
      '1978': ['hs', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1979': ['hs', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1980': ['hs', 'fsp', 'sm', 'dp', 'xp', 'xb'],
      '1981': ['hs', 'fsp', 'sm', 'dp', 'xp', 'xb'],
    },
    '610': {
      'all': ['fsp', 'hs', 'sm', 'dp', 'xp', 'xb'],
    },
    '710': {
      '1974': ['dp', 'fsp', 'hs', 'sm', 'xp', 'xb'],
      '1975': ['dp', 'fsp', 'hs', 'sm', 'xp', 'xb'],
      '1976': ['dp', 'fsp', 'hs', 'sm', 'xp', 'xb'],
      '1977': ['dp', 'fsp', 'hs', 'sm', 'xp', 'xb'],
    },
    '810': {
      '1976': ['dp', 'hs', 'sm', 'xp', 'xa'],
      '1977': ['dp', 'hs', 'sm', 'xp', 'xa'],
      '1978': ['dp', 'hs', 'sm', 'xp', 'xa'],
      '1979': ['dp', 'hs', 'sm', 'xp', 'xa'],
      '1980': ['dp', 'hs', 'sm', 'xp', 'xa'],
    },
    '1200': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xa'],
    },
    '2000': {
      'all': ['es', 'sm', 'xp', 'xa'],
    },
    '200SX': {
      '1976': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xb'],
      '1977': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xb'],
      '1978': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xb'],
      '1979': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xb'],
      '1980': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xb'],
      '1981': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xb'],
      '1982': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xb'],
      '1983': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xb'],
      '1984': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xb'],
      '1985': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xb'],
      '1986': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xb'],
      '1987': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xb'],
      '1988': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xb'],
    },
    '200SX (V6)': {
      'all': ['esp', 'sm', 'xp', 'xa'],
    },
    '200SX SE-R': {
      'all': ['fsp', 'sm', 'xp', 'xa'],
    },
    '200SX Turbo': {
      'all': ['dsp', 'gs', 'sm', 'xp', 'xa'],
    },
    '210 & B-210': {
      'all': ['hs', 'sm', 'xp', 'xa'],
    },
    '210 (1397 & 1488 cc)': {
      '1979': ['dp', 'sm', 'xp', 'xa'],
      '1980': ['dp', 'sm', 'xp', 'xa'],
      '1981': ['dp', 'sm', 'xp', 'xa'],
      '1982': ['dp', 'sm', 'xp', 'xa'],
    },
    '210 (B310 chassis; 1.4 L)': {
      '1978': ['dp', 'sm', 'xp', 'xa'],
      '1979': ['dp', 'sm', 'xp', 'xa'],
      '1980': ['dp', 'sm', 'xp', 'xa'],
      '1981': ['dp', 'sm', 'xp', 'xa'],
      '1982': ['dp', 'sm', 'xp', 'xa'],
    },
    '260Z': {
      'all': ['es', 'cst', 'dsp', 'fp', 'sm', 'xp', 'xa'],
    },
    '280Z': {
      'all': ['es', 'cst', 'dsp', 'fp', 'sm', 'xp', 'xa'],
    },
    '280ZX (non-turbo)': {
      'all': ['es', 'cst', 'dsp', 'fp', 'sm', 'xp', 'xa'],
    },
    '280ZX Turbo': {
      'all': ['fs', 'cst', 'dsp', 'fp', 'sm', 'xp', 'xa'],
    },
    '720 (2WD)': {
      '1980': ['dp', 'sm', 'xp', 'xa'],
      '1981': ['dp', 'sm', 'xp', 'xa'],
      '1982': ['dp', 'sm', 'xp', 'xa'],
      '1983': ['dp', 'sm', 'xp', 'xa'],
      '1984': ['dp', 'sm', 'xp', 'xa'],
      '1985': ['dp', 'sm', 'xp', 'xa'],
      '1986': ['dp', 'sm', 'xp', 'xa'],
    },
    '810 Maxima': {
      '1981': ['dp', 'sm', 'xp', 'xa'],
      '1982': ['dp', 'sm', 'xp', 'xa'],
      '1983': ['dp', 'sm', 'xp', 'xa'],
    },
    '1500 & 1600 Roadster': {
      'all': ['hs', 'csp', 'dp', 'sm', 'xp', 'xa'],
    },
    'B110 (1171, 1237, 1288, 1397, & 1488 cc)': {
      '1970': ['dp', 'sm', 'xp', 'xa'],
      '1971': ['dp', 'sm', 'xp', 'xa'],
      '1972': ['dp', 'sm', 'xp', 'xa'],
      '1973': ['dp', 'sm', 'xp', 'xa'],
    },
    'B210': {
      'all': ['fsp', 'dp', 'sm', 'xp', 'xa'],
    },
    'F-10': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xa'],
    },
    'Pulsar (N12 chassis)': {
      '1983': ['ep', 'sm', 'xp', 'xa'],
      '1984': ['ep', 'sm', 'xp', 'xa'],
      '1985': ['ep', 'sm', 'xp', 'xa'],
      '1986': ['ep', 'sm', 'xp', 'xa'],
    },
    'Sedan (N/A, FWD, Not Otherwise Classified)': {
      'all': ['ep', 'sm', 'xp', 'xa'],
    },
    'Sentra (B11 chassis)': {
      '1983': ['ep', 'sm', 'xp', 'xa'],
      '1984': ['ep', 'sm', 'xp', 'xa'],
      '1985': ['ep', 'sm', 'xp', 'xa'],
      '1986': ['ep', 'sm', 'xp', 'xa'],
    },
    'd40Z': {
      'all': ['es', 'cst', 'dsp', 'fp', 'sm', 'xp', 'xb'],
    },
  },
  'DeTomaso': {
    'Mangusta': {
      'all': ['bs', 'dsp', 'ssm', 'xp', 'xa'],
    },
    'Pantera': {
      'all': ['bs', 'dsp', 'ssm', 'xp', 'xa'],
    },
  },
  'Dodge': {
    '024': {
      'all': ['hs', 'sm', 'xp', 'xa', 'smf'],
    },
    'Avenger': {
      'all': ['hs', 'sm', 'xp', 'xa', 'smf'],
    },
    'Caliber SRT4': {
      'all': ['gs', 'sm', 'xp', 'xa', 'smf'],
    },
    'Challenger': {
      '1978': ['hs', 'esp', 'sm', 'xp', 'xa'],
      '1979': ['hs', 'esp', 'sm', 'xp', 'xa'],
      '1980': ['hs', 'esp', 'sm', 'xp', 'xa'],
      '1981': ['hs', 'esp', 'sm', 'xp', 'xa'],
      '1982': ['hs', 'esp', 'sm', 'xp', 'xa'],
      '1983': ['hs', 'esp', 'sm', 'xp', 'xa'],
    },
    'Challenger (V6)': {
      '2008': ['gs', 'dst', 'esp', 'camc', 'sm', 'xp'],
      '2009': ['gs', 'dst', 'esp', 'camc', 'sm', 'xp'],
      '2010': ['gs', 'dst', 'esp', 'camc', 'sm', 'xp'],
      '2011': ['gs', 'dst', 'esp', 'camc', 'sm', 'xp'],
      '2012': ['gs', 'dst', 'esp', 'camc', 'sm', 'xp'],
      '2013': ['gs', 'dst', 'esp', 'camc', 'sm', 'xp'],
      '2014': ['gs', 'dst', 'esp', 'camc', 'sm', 'xp'],
      '2015': ['gs', 'dst', 'esp', 'camc', 'sm', 'xp'],
      '2016': ['gs', 'dst', 'esp', 'camc', 'sm', 'xp'],
      '2017': ['gs', 'dst', 'esp', 'camc', 'sm', 'xp'],
      '2018': ['gs', 'dst', 'esp', 'camc', 'sm', 'xp'],
      '2019': ['gs', 'dst', 'esp', 'camc', 'sm', 'xp'],
      '2020': ['gs', 'dst', 'esp', 'camc', 'sm', 'xp'],
      '2021': ['gs', 'dst', 'esp', 'camc', 'sm', 'xp'],
      '2022': ['gs', 'dst', 'esp', 'camc', 'sm', 'xp'],
      '2023': ['gs', 'dst', 'esp', 'camc', 'sm', 'xp'],
    },
    'Challenger (V8, all)': {
      '2008': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2009': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2010': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2011': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2012': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2013': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2014': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2015': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2016': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2017': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2018': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2019': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2020': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2021': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2022': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2023': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2024': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
    },
    'Challenger R/T Scat Pack Widebody': {
      '2019': ['fs', 'esp', 'camc', 'sm', 'xp'],
      '2020': ['fs', 'esp', 'camc', 'sm', 'xp'],
      '2021': ['fs', 'esp', 'camc', 'sm', 'xp'],
      '2022': ['fs', 'esp', 'camc', 'sm', 'xp'],
      '2023': ['fs', 'esp', 'camc', 'sm', 'xp'],
      '2024': ['fs', 'esp', 'camc', 'sm', 'xp'],
    },
    'Charger (V6)': {
      '2006': ['gs', 'dst', 'esp', 'camc', 'sm', 'xp'],
      '2007': ['gs', 'dst', 'esp', 'camc', 'sm', 'xp'],
      '2008': ['gs', 'dst', 'esp', 'camc', 'sm', 'xp'],
      '2009': ['gs', 'dst', 'esp', 'camc', 'sm', 'xp'],
      '2010': ['gs', 'dst', 'esp', 'camc', 'sm', 'xp'],
      '2011': ['gs', 'dst', 'esp', 'camc', 'sm', 'xp'],
      '2012': ['gs', 'dst', 'esp', 'camc', 'sm', 'xp'],
      '2013': ['gs', 'dst', 'esp', 'camc', 'sm', 'xp'],
      '2014': ['gs', 'dst', 'camc', 'sm', 'xp'],
      '2015': ['gs', 'dst', 'camc', 'sm', 'xp'],
      '2016': ['gs', 'dst', 'camc', 'sm', 'xp'],
      '2017': ['gs', 'dst', 'camc', 'sm', 'xp'],
      '2018': ['gs', 'dst', 'camc', 'sm', 'xp'],
      '2019': ['gs', 'dst', 'camc', 'sm', 'xp'],
      '2020': ['gs', 'dst', 'camc', 'sm', 'xp'],
    },
    'Charger (V8, all)': {
      '2006': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2007': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2008': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2009': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2010': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2011': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2012': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2013': ['fs', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2014': ['fs', 'bst', 'camc', 'sm', 'xp'],
      '2015': ['fs', 'bst', 'camc', 'sm', 'xp'],
      '2016': ['fs', 'bst', 'camc', 'sm', 'xp'],
      '2017': ['fs', 'bst', 'camc', 'sm', 'xp'],
      '2018': ['fs', 'bst', 'camc', 'sm', 'xp'],
      '2019': ['fs', 'bst', 'camc', 'sm', 'xp'],
      '2020': ['fs', 'bst', 'camc', 'sm', 'xp'],
      '2021': ['fs', 'bst', 'camc', 'sm', 'xp'],
      '2022': ['fs', 'bst', 'camc', 'sm', 'xp'],
      '2023': ['fs', 'bst', 'camc', 'sm', 'xp'],
      '2024': ['fs', 'bst', 'camc', 'sm', 'xp'],
    },
    'Charger (non-turbo, FWD)': {
      '1981': ['hs', 'sm', 'xp', 'xa'],
      '1982': ['hs', 'sm', 'xp', 'xa'],
      '1983': ['hs', 'sm', 'xp', 'xa'],
      '1984': ['hs', 'sm', 'xp', 'xa'],
      '1985': ['hs', 'sm', 'xp', 'xa'],
      '1986': ['hs', 'sm', 'xp', 'xa'],
      '1987': ['hs', 'sm', 'xp', 'xa'],
    },
    'Charger Turbo': {
      'all': ['es', 'sm', 'xp', 'xa'],
    },
    'Colt': {
      'all': ['hs', 'dsp', 'dp', 'sm', 'xp', 'xa'],
    },
    'Conquest Turbo': {
      'all': ['gs', 'esp', 'sm', 'xp', 'xa'],
    },
    'Dart (1.4L)': {
      '2013': ['hs', 'gst', 'sm', 'xp', 'xa', 'smf'],
      '2014': ['hs', 'gst', 'sm', 'xp', 'xa', 'smf'],
      '2015': ['hs', 'gst', 'sm', 'xp', 'xa', 'smf'],
      '2016': ['hs', 'gst', 'sm', 'xp', 'xa', 'smf'],
      '2017': ['hs', 'gst', 'sm', 'xp', 'xa', 'smf'],
    },
    'Dart (2.0L)': {
      '2013': ['hs', 'est', 'smf'],
      '2014': ['hs', 'est', 'smf'],
      '2015': ['hs', 'est', 'smf'],
      '2016': ['hs', 'est', 'smf'],
      '2017': ['hs', 'est', 'smf'],
    },
    'Dart (2.4L)': {
      '2013': ['hs', 'dst', 'sm', 'xp', 'xa', 'smf'],
      '2014': ['hs', 'dst', 'sm', 'xp', 'xa', 'smf'],
      '2015': ['hs', 'dst', 'sm', 'xp', 'xa', 'smf'],
      '2016': ['hs', 'dst', 'sm', 'xp', 'xa', 'smf'],
      '2017': ['hs', 'dst', 'sm', 'xp', 'xa', 'smf'],
    },
    'Daytona (V6)': {
      'all': ['hs', 'esp', 'sm', 'xp', 'xa', 'smf'],
    },
    'Daytona (non-turbo)': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xa', 'smf'],
    },
    'Daytona Turbo': {
      'all': ['hs', 'esp', 'sm', 'xp', 'xa', 'smf'],
    },
    'GLH (non-turbo)': {
      'all': ['hs', 'sm', 'xp', 'xa', 'smf'],
    },
    'GLH Turbo': {
      'all': ['es', 'esp', 'sm', 'xp', 'xa', 'smf'],
    },
    'Intrepid': {
      'all': ['hs', 'sm', 'xp', 'xa', 'smf'],
    },
    'Lancer Turbo': {
      'all': ['hs', 'sm', 'xp', 'xa', 'smf'],
    },
    'Magnum (V6)': {
      '2005': ['gs', 'camc', 'sm', 'xp'],
      '2006': ['gs', 'camc', 'sm', 'xp'],
      '2007': ['gs', 'camc', 'sm', 'xp'],
      '2008': ['gs', 'camc', 'sm', 'xp'],
    },
    'Magnum (V8)': {
      '2005': ['fs', 'camc', 'sm', 'xp'],
      '2006': ['fs', 'camc', 'sm', 'xp'],
      '2007': ['fs', 'camc', 'sm', 'xp'],
      '2008': ['fs', 'camc', 'sm', 'xp'],
    },
    'Neon': {
      '1995': ['hs', 'est', 'fsp', 'ep', 'sm', 'xp', 'xa', 'smf'],
      '1996': ['hs', 'est', 'fsp', 'ep', 'sm', 'xp', 'xa', 'smf'],
      '1997': ['hs', 'est', 'fsp', 'ep', 'sm', 'xp', 'xa', 'smf'],
      '1998': ['hs', 'est', 'fsp', 'ep', 'sm', 'xp', 'xa', 'smf'],
      '1999': ['hs', 'est', 'fsp', 'ep', 'sm', 'xp', 'xa', 'smf'],
      '2000': ['hs', 'est', 'fsp', 'ep', 'sm', 'xp', 'xa', 'smf'],
      '2001': ['hs', 'est', 'fsp', 'ep', 'sm', 'xp', 'xa', 'smf'],
      '2002': ['hs', 'est', 'fsp', 'ep', 'sm', 'xp', 'xa', 'smf'],
      '2003': ['hs', 'est', 'fsp', 'ep', 'sm', 'xp', 'xa', 'smf'],
      '2004': ['hs', 'est', 'fsp', 'ep', 'sm', 'xp', 'xa', 'smf'],
      '2005': ['hs', 'est', 'fsp', 'ep', 'sm', 'xp', 'xa', 'smf'],
    },
    'Omni': {
      'all': ['hs', 'fsp', 'fp', 'ep', 'sm', 'smf', 'xp', 'xb'],
    },
    'Ram SRT10': {
      '2004': ['fs', 'camc', 'sm', 'xp'],
      '2005': ['fs', 'camc', 'sm', 'xp'],
      '2006': ['fs', 'camc', 'sm', 'xp'],
    },
    'Rampage': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xa'],
    },
    'SRT-4 (Neon chassis)': {
      'all': ['gs', 'gst', 'ep', 'sm', 'esp', 'xp', 'xa', 'smf'],
    },
    'Shadow': {
      'all': ['hs', 'esp', 'ep', 'xp', 'sm', 'smf', 'xa'],
    },
    'Spirit': {
      'all': ['hs', 'sm', 'esp', 'xp', 'xa'],
    },
    'Stealth (non-turbo)': {
      'all': ['hs', 'esp', 'sm', 'xp', 'xa'],
    },
    'Stealth Turbo': {
      'all': ['fs', 'dsp', 'sm', 'xp', 'xa'],
    },
    'Stratus': {
      'all': ['hs', 'sm', 'xp', 'xa'],
    },
    'Viper': {
      '1992': ['as', 'ssp', 'cams', 'ssm', 'xp'],
      '1993': ['as', 'ssp', 'cams', 'ssm', 'xp'],
      '1994': ['as', 'ssp', 'cams', 'ssm', 'xp'],
      '1995': ['as', 'ssp', 'cams', 'ssm', 'xp'],
      '1996': ['as', 'ssp', 'cams', 'ssm', 'xp'],
      '1997': ['as', 'ssp', 'cams', 'ssm', 'xp'],
      '1998': ['as', 'ssp', 'cams', 'ssm', 'xp'],
      '1999': ['as', 'ssp', 'cams', 'ssm', 'xp'],
      '2000': ['as', 'ssp', 'cams', 'ssm', 'xp'],
      '2001': ['as', 'ssp', 'cams', 'ssm', 'xp'],
      '2002': ['as', 'ssp', 'cams', 'ssm', 'xp'],
      '2003': ['as', 'ssp', 'cams', 'ssm', 'xp'],
      '2004': ['as', 'ssp', 'cams', 'ssm', 'xp'],
      '2005': ['as', 'ssp', 'cams', 'ssm', 'xp'],
      '2006': ['as', 'ssp', 'cams', 'ssm', 'xp'],
      '2007': ['as', 'ssp', 'cams', 'ssm', 'xp'],
      '2008': ['as', 'ssr', 'cams', 'ssp', 'camc', 'ssm', 'xp'],
      '2009': ['as', 'ssr', 'cams', 'ssp', 'camc', 'ssm', 'xp'],
      '2010': ['as', 'ssr', 'cams', 'ssp', 'camc', 'ssm', 'xp'],
      '2013': ['as', 'ssr', 'ssp', 'ssm', 'xp', 'xu'],
      '2014': ['as', 'ssr', 'ssp', 'ssm', 'xp', 'xu'],
      '2015': ['as', 'ssr', 'ssp', 'ssm', 'xp', 'xu'],
      '2016': ['as', 'ssr', 'ssp', 'ssm', 'xp', 'xu'],
      '2017': ['as', 'ssr', 'ssp', 'ssm', 'xp', 'xu'],
    },
    'Viper ACR': {
      'all': ['ss', 'ssp', 'cams', 'ssm', 'xp'],
    },
    'Viper GTS': {
      '1996': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '1997': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '1998': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '1999': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '2000': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '2001': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '2002': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '2003': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '2004': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '2005': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '2013': ['ss', 'ssr', 'ssp', 'ssm', 'xp', 'xu'],
      '2014': ['ss', 'ssr', 'ssp', 'ssm', 'xp', 'xu'],
      '2015': ['ss', 'ssr', 'ssp', 'ssm', 'xp', 'xu'],
      '2016': ['ss', 'ssr', 'ssp', 'ssm', 'xp', 'xu'],
      '2017': ['ss', 'ssr', 'ssp', 'ssm', 'xp', 'xu'],
    },
    'Viper R/T': {
      '1992': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '1993': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '1994': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '1995': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '1996': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '1997': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '1998': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '1999': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '2000': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '2001': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '2002': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '2003': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
    },
    'Viper SRT-10': {
      '2003': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '2004': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '2005': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '2006': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
      '2007': ['as', 'ssr', 'ssp', 'cams', 'ssm', 'xp'],
    },
    'Viper TA': {
      'all': ['ss', 'ssp', 'cams', 'ssm', 'xp'],
    },
  },
  'Eagle': {
    'Summit': {
      'all': ['hs', 'sm', 'xp', 'xa', 'smf'],
    },
    'Summit Turbo (16v)': {
      '1989': ['esp', 'sm', 'xp', 'xa', 'smf'],
      '1990': ['esp', 'sm', 'xp', 'xa', 'smf'],
    },
    'Talon (FWD)': {
      'all': ['hs', 'sm', 'xp', 'xa', 'smf'],
    },
    'Talon (non-turbo)': {
      '1989': ['fsp', 'sm', 'xp', 'xa'],
      '1990': ['fsp', 'sm', 'xp', 'xa'],
      '1991': ['fsp', 'sm', 'xp', 'xa'],
      '1992': ['fsp', 'sm', 'xp', 'xa'],
      '1993': ['fsp', 'sm', 'xp', 'xa'],
      '1994': ['fsp', 'sm', 'xp', 'xa'],
      '1995': ['fsp', 'sm', 'xp', 'xa'],
      '1996': ['fsp', 'sm', 'xp', 'xa'],
      '1997': ['fsp', 'sm', 'xp', 'xa'],
      '1998': ['fsp', 'sm', 'xp', 'xa'],
      '1999': ['fsp', 'sm', 'xp', 'xa'],
    },
    'Talon Turbo (AWD)': {
      'all': ['ds', 'gst', 'sm', 'xp', 'xa'],
    },
  },
  'Ferrari': {
    '275': {
      'all': ['dsp', 'ssm', 'xp', 'xb'],
    },
    '308': {
      'all': ['cs', 'fp', 'ssm', 'xp', 'xb'],
    },
    '328': {
      'all': ['cs', 'ssm', 'xp', 'xa'],
    },
    '330': {
      'all': ['dsp', 'ssm', 'xp', 'xa'],
    },
    '348': {
      'all': ['dsp', 'ssm', 'xp', 'xa'],
    },
    '355': {
      'all': ['ss', 'ssp', 'ssm', 'xp', 'xu'],
    },
    '360': {
      'all': ['ss', 'ssp', 'ssm', 'xp', 'xu'],
    },
    '458': {
      'all': ['ss', 'ssp', 'ssm', 'xp', 'xu'],
    },
    '488': {
      'all': ['ss', 'ssp', 'ssm', 'xp', 'xu'],
    },
    '250 (non-LM)': {
      'all': ['dsp', 'ssm', 'xp', 'xa'],
    },
    '308 Coupe & Spider': {
      'all': ['dsp', 'ssm', 'xp', 'xa'],
    },
    '360 Modena & Spider (non-Challenge Stradale)': {
      '1999': ['ss', 'ssm', 'xp', 'xu'],
      '2000': ['ss', 'ssm', 'xp', 'xu'],
      '2001': ['ss', 'ssm', 'xp', 'xu'],
      '2002': ['ss', 'ssm', 'xp', 'xu'],
      '2003': ['ss', 'ssm', 'xp', 'xu'],
      '2004': ['ss', 'ssm', 'xp', 'xu'],
      '2005': ['ss', 'ssm', 'xp', 'xu'],
    },
    '365 Daytona GTB, GTC': {
      'all': ['dsp', 'ssm', 'xp', 'xa'],
    },
    '400 America (all)': {
      'all': ['esp', 'ssm', 'xp', 'xa'],
    },
    '500 Superfast (all)': {
      'all': ['esp', 'ssm', 'xp', 'xa'],
    },
    'Dino 206 & 246 (all)': {
      'all': ['ssp', 'ssm', 'xp', 'xa'],
    },
    'Dino 246': {
      'all': ['fp', 'ssm', 'xp', 'xa'],
    },
    'Dino 246 GT': {
      'all': ['fp', 'ssm', 'xp', 'xa'],
    },
    'F8': {
      'all': ['ss', 'ssp', 'ssm', 'xp', 'xu'],
    },
    'F430 (all)': {
      'all': ['ss', 'ssp', 'ssm', 'xp', 'xu'],
    },
  },
  'Fiat': {
    '128': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xb'],
    },
    '124, 124 Spider (incl. Abarth)': {
      '1966': ['hs', 'fsp', 'dp', 'ssm', 'xp', 'xb'],
      '1967': ['hs', 'fsp', 'dp', 'ssm', 'xp', 'xb'],
      '1968': ['hs', 'fsp', 'dp', 'ssm', 'xp', 'xb'],
      '1969': ['hs', 'fsp', 'dp', 'ssm', 'xp', 'xb'],
      '1970': ['hs', 'fsp', 'dp', 'ssm', 'xp', 'xb'],
      '1971': ['hs', 'fsp', 'dp', 'ssm', 'xp', 'xb'],
      '1972': ['hs', 'fsp', 'dp', 'ssm', 'xp', 'xb'],
      '1973': ['hs', 'fsp', 'dp', 'ssm', 'xp', 'xb'],
      '1974': ['hs', 'fsp', 'dp', 'ssm', 'xp', 'xb'],
      '1975': ['hs', 'csp', 'dp', 'ssm', 'xp', 'xb'],
      '1976': ['hs', 'csp', 'dp', 'ssm', 'xp', 'xb'],
      '1977': ['hs', 'csp', 'dp', 'ssm', 'xp', 'xb'],
      '1978': ['hs', 'csp', 'dp', 'ssm', 'xp', 'xb'],
      '2016': ['cs', 'ast', 'csp', 'fp', 'ssm', 'xp', 'xb'],
      '2017': ['cs', 'ast', 'csp', 'fp', 'ssm', 'xp', 'xb'],
      '2018': ['cs', 'ast', 'csp', 'fp', 'ssm', 'xp', 'xb'],
      '2019': ['cs', 'ast', 'csp', 'fp', 'ssm', 'xp', 'xb'],
      '2020': ['cs', 'ast', 'csp', 'fp', 'ssm', 'xp', 'xb'],
      '2021': ['cs', 'bst', 'csp', 'fp', 'ssm', 'xp', 'xb'],
    },
    '500 Abarth': {
      '2012': ['hs', 'gst', 'esp', 'sm', 'smf', 'xp', 'xa'],
      '2013': ['hs', 'gst', 'esp', 'sm', 'smf', 'xp', 'xa'],
      '2014': ['hs', 'gst', 'sm', 'smf', 'xp', 'xa'],
      '2015': ['hs', 'gst', 'sm', 'smf', 'xp', 'xa'],
      '2016': ['hs', 'gst', 'sm', 'smf', 'xp', 'xa'],
      '2017': ['hs', 'gst', 'sm', 'smf', 'xp', 'xa'],
      '2018': ['hs', 'gst', 'sm', 'smf', 'xp', 'xa'],
      '2019': ['hs', 'gst', 'sm', 'smf', 'xp', 'xa'],
    },
    '2000 Spider': {
      'all': ['hs', 'csp', 'ssm', 'xp', 'xb'],
    },
    'NOC': {
      'all': ['hs'],
    },
    'X1/9': {
      'all': ['es', 'fsp', 'dp', 'ssm', 'xp', 'xb'],
    },
  },
  'Fisker': {
    'Karma': {
      '2011': ['evx'],
      '2012': ['evx'],
    },
    'Ocean': {
      '2023': ['evx'],
      '2024': ['evx'],
    },
  },
  'Ford': {
    'Aspire': {
      'all': ['hs', 'sm', 'smf', 'xp', 'xa'],
    },
    'Contour': {
      'all': ['hs', 'sm', 'esp', 'xp', 'xa'],
    },
    'Cortina': {
      'all': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xb'],
    },
    'Crown Victoria': {
      'all': ['hs', 'sm', 'xp', 'xa'],
    },
    'EXP': {
      'all': ['hs', 'sm', 'xp', 'xa'],
    },
    'Escort (incl. ZX2 S/R)': {
      'all': ['hs', 'est', 'fsp', 'sm', 'dp', 'xp', 'xb'],
    },
    'Festiva': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xb'],
    },
    'Fiesta': {
      '1976': ['hs', 'est', 'sm', 'smf', 'xp', 'xb'],
      '1977': ['hs', 'est', 'sm', 'smf', 'xp', 'xb'],
      '1978': ['hs', 'est', 'sm', 'smf', 'xp', 'xb'],
      '1979': ['hs', 'est', 'sm', 'smf', 'xp', 'xb'],
      '1980': ['hs', 'est', 'sm', 'smf', 'xp', 'xb'],
    },
    'Fiesta ST': {
      '2014': ['hs', 'gst', 'esp', 'ep', 'sm', 'smf', 'xp', 'xa'],
      '2015': ['hs', 'gst', 'esp', 'ep', 'sm', 'smf', 'xp', 'xa'],
      '2016': ['hs', 'gst', 'esp', 'ep', 'sm', 'smf', 'xp', 'xa'],
      '2017': ['hs', 'gst', 'esp', 'ep', 'sm', 'smf', 'xp', 'xa'],
      '2018': ['hs', 'gst', 'esp', 'ep', 'sm', 'smf', 'xp', 'xa'],
      '2019': ['hs', 'gst', 'ep', 'sm', 'smf', 'xp', 'xa'],
    },
    'Five Hundred': {
      'all': ['hs', 'sm', 'smf', 'xp', 'xa'],
    },
    'Focus': {
      '2012': ['hs', 'est', 'sm', 'xp', 'xa'],
      '2013': ['hs', 'est', 'sm', 'xp', 'xa'],
      '2014': ['hs', 'est', 'sm', 'xp', 'xa'],
      '2015': ['hs', 'est', 'sm', 'xp', 'xa'],
      '2016': ['hs', 'est', 'sm', 'xp', 'xa'],
      '2017': ['hs', 'est', 'sm', 'xp', 'xa'],
      '2018': ['hs', 'est', 'sm', 'xp', 'xa'],
    },
    'Focus EV': {
      '2012': ['evx'],
      '2013': ['evx'],
      '2014': ['evx'],
      '2015': ['evx'],
      '2016': ['evx'],
      '2017': ['evx'],
      '2018': ['evx'],
    },
    'Focus RS': {
      '2016': ['ds', 'bst', 'dsp', 'sm', 'xp', 'xa'],
      '2017': ['ds', 'bst', 'dsp', 'sm', 'xp', 'xa'],
      '2018': ['bs', 'sst', 'sm', 'xp', 'xa'],
    },
    'Focus ST': {
      '2013': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '2014': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '2015': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '2016': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '2017': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
      '2018': ['gs', 'gst', 'esp', 'sm', 'xp', 'xa'],
    },
    'Fusion': {
      '2006': ['hs', 'fsp', 'sm', 'xp', 'xa'],
      '2007': ['hs', 'fsp', 'sm', 'xp', 'xa'],
      '2008': ['hs', 'fsp', 'sm', 'xp', 'xa'],
      '2009': ['hs', 'fsp', 'sm', 'xp', 'xa'],
      '2010': ['hs', 'fsp', 'sm', 'xp', 'xa'],
      '2011': ['hs', 'fsp', 'sm', 'xp', 'xa'],
      '2012': ['hs', 'fsp', 'sm', 'xp', 'xa'],
      '2013': ['hs', 'fsp', 'sm', 'xp', 'xa'],
      '2014': ['hs', 'fsp', 'sm', 'xp', 'xa'],
      '2015': ['hs', 'fsp', 'sm', 'xp', 'xa'],
      '2016': ['hs', 'fsp', 'sm', 'xp', 'xa'],
      '2017': ['hs', 'fsp', 'sm', 'xp', 'xa'],
      '2018': ['hs', 'fsp', 'sm', 'xp', 'xa'],
      '2019': ['hs', 'fsp', 'sm', 'xp', 'xa'],
    },
    'Fusion (6-cyl)': {
      'all': ['gs', 'esp', 'sm', 'xp', 'xa'],
    },
    'Fusion Sport': {
      '2017': ['gs', 'gst', 'sm', 'xp', 'xa'],
      '2018': ['gs', 'gst', 'sm', 'xp', 'xa'],
      '2019': ['gs', 'gst', 'sm', 'xp', 'xa'],
    },
    'GT': {
      'all': ['ssp', 'ssm', 'xp', 'xa'],
    },
    'Mustang (4-cyl Turbo except SVO)': {
      '1979': ['hs', 'bst', 'sm', 'camt', 'xp'],
      '1980': ['hs', 'bst', 'sm', 'camt', 'xp'],
      '1981': ['hs', 'bst', 'sm', 'camt', 'xp'],
      '1982': ['hs', 'bst', 'sm', 'camt', 'xp'],
      '1983': ['hs', 'bst', 'sm', 'camt', 'xp'],
      '1984': ['hs', 'bst', 'sm', 'camt', 'xp'],
      '1985': ['hs', 'bst', 'sm', 'camt', 'xp'],
      '1986': ['hs', 'bst', 'sm', 'camt', 'xp'],
      '1987': ['hs', 'bst', 'sm', 'camt', 'xp'],
      '1988': ['hs', 'bst', 'sm', 'camt', 'xp'],
      '1989': ['hs', 'bst', 'sm', 'camt', 'xp'],
      '1990': ['hs', 'bst', 'sm', 'camt', 'xp'],
      '1991': ['hs', 'bst', 'sm', 'camt', 'xp'],
      '1992': ['hs', 'bst', 'sm', 'camt', 'xp'],
      '1993': ['hs', 'bst', 'sm', 'camt', 'xp'],
    },
    'Mustang (4-cyl)': {
      '1973': ['hs', 'fsp', 'sm', 'camt', 'xp'],
      '1974': ['hs', 'fsp', 'sm', 'dp', 'camt', 'xp'],
      '1975': ['hs', 'fsp', 'sm', 'dp', 'camt', 'xp'],
      '1976': ['hs', 'fsp', 'sm', 'dp', 'camt', 'xp'],
      '1977': ['hs', 'fsp', 'sm', 'dp', 'camt', 'xp'],
      '1978': ['hs', 'fsp', 'sm', 'dp', 'camt', 'xp'],
      '1979': ['hs', 'bst', 'fsp', 'sm', 'dp', 'camt', 'xp'],
      '1980': ['hs', 'bst', 'fsp', 'sm', 'dp', 'camt', 'xp'],
      '1981': ['hs', 'bst', 'fsp', 'sm', 'dp', 'camt', 'xp'],
      '1982': ['hs', 'bst', 'fsp', 'sm', 'dp', 'camt', 'xp'],
      '1983': ['hs', 'bst', 'fsp', 'sm', 'dp', 'camt', 'xp'],
      '1984': ['hs', 'bst', 'fsp', 'sm', 'dp', 'camt', 'xp'],
      '1985': ['hs', 'bst', 'fsp', 'sm', 'dp', 'camt', 'xp'],
      '1986': ['hs', 'bst', 'fsp', 'sm', 'dp', 'camt', 'xp'],
      '1987': ['hs', 'bst', 'fsp', 'sm', 'dp', 'camt', 'xp'],
      '1988': ['hs', 'bst', 'fsp', 'sm', 'dp', 'camt', 'xp'],
      '1989': ['hs', 'bst', 'fsp', 'sm', 'dp', 'camt', 'xp'],
      '1990': ['hs', 'bst', 'fsp', 'sm', 'dp', 'camt', 'xp'],
      '1991': ['hs', 'bst', 'fsp', 'sm', 'dp', 'camt', 'xp'],
      '1992': ['hs', 'bst', 'fsp', 'sm', 'dp', 'camt', 'xp'],
      '1993': ['hs', 'bst', 'fsp', 'sm', 'dp', 'camt', 'xp'],
    },
    'Mustang (6-cyl)': {
      '1964': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1965': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1966': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1967': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1968': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1969': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1970': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1971': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1972': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1973': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1974': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1975': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1976': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1977': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1978': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1979': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1980': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1981': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1982': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1983': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1984': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1985': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1986': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1987': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1988': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1989': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1990': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1991': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1992': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1993': ['hs', 'bst', 'cp', 'camt', 'sm', 'xp'],
      '1994': ['hs', 'bst', 'camt', 'sm', 'xp'],
      '1995': ['hs', 'bst', 'camt', 'sm', 'xp'],
      '1996': ['hs', 'bst', 'camt', 'sm', 'xp'],
      '1997': ['hs', 'bst', 'camt', 'sm', 'xp'],
      '1998': ['hs', 'bst', 'camt', 'sm', 'xp'],
      '1999': ['hs', 'bst', 'camt', 'sm', 'xp'],
      '2000': ['hs', 'bst', 'camt', 'sm', 'xp'],
      '2001': ['hs', 'bst', 'camt', 'sm', 'xp'],
      '2002': ['hs', 'bst', 'camt', 'sm', 'xp'],
      '2003': ['hs', 'bst', 'camt', 'sm', 'xp'],
      '2004': ['hs', 'bst', 'camt', 'sm', 'xp'],
      '2005': ['gs', 'bst', 'camc', 'sm', 'xp'],
      '2006': ['gs', 'bst', 'camc', 'sm', 'xp'],
      '2007': ['gs', 'bst', 'camc', 'sm', 'xp'],
      '2008': ['gs', 'bst', 'camc', 'sm', 'xp'],
      '2009': ['gs', 'bst', 'camc', 'sm', 'xp'],
      '2010': ['gs', 'bst', 'camc', 'sm', 'xp'],
      '2011': ['ds', 'bst', 'camc', 'sm', 'xp'],
      '2012': ['ds', 'bst', 'camc', 'sm', 'xp'],
      '2013': ['ds', 'bst', 'camc', 'sm', 'xp'],
      '2014': ['ds', 'bst', 'camc', 'sm', 'xp'],
      '2015': ['ds', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2016': ['ds', 'bst', 'esp', 'camc', 'sm', 'xp'],
      '2017': ['ds', 'bst', 'esp', 'camc', 'sm', 'xp'],
    },
    'Mustang Boss 302 Laguna Seca': {
      '2012': ['as', 'ssr', 'sst', 'esp', 'camc', 'sm', 'xp'],
      '2013': ['as', 'ssr', 'sst', 'esp', 'camc', 'sm', 'xp'],
    },
    'Mustang Boss 302 non-Laguna Seca': {
      '2012': ['fs', 'sst', 'esp', 'camc', 'sm', 'xp'],
      '2013': ['fs', 'sst', 'esp', 'camc', 'sm', 'xp'],
    },
    'Mustang Bullitt': {
      '2019': ['fs', 'camc', 'sm', 'xp'],
      '2020': ['fs', 'camc', 'sm', 'xp'],
      '2021': ['fs', 'camc', 'sm', 'xp'],
    },
    'Mustang Cobra': {
      '2003': ['fs', 'esp', 'camt', 'camc', 'sm', 'xp'],
      '2004': ['fs', 'esp', 'camt', 'camc', 'sm', 'xp'],
    },
    'Mustang Cobra R': {
      '1993': ['ss', 'esp', 'camt', 'sm', 'xp'],
      '1995': ['ss', 'esp', 'camt', 'sm', 'xp'],
      '2000': ['ss', 'esp', 'camt', 'sm', 'xp'],
    },
    'Mustang EcoBoost': {
      '2015': ['ds', 'bst', 'esp', 'sm', 'camc', 'xp'],
      '2016': ['ds', 'bst', 'esp', 'sm', 'camc', 'xp'],
      '2017': ['ds', 'bst', 'esp', 'sm', 'camc', 'xp'],
      '2018': ['ds', 'bst', 'esp', 'sm', 'camc', 'xp'],
      '2019': ['ds', 'bst', 'esp', 'sm', 'camc', 'xp'],
      '2020': ['ds', 'bst', 'sm', 'camc', 'xp'],
      '2021': ['ds', 'bst', 'sm', 'camc', 'xp'],
      '2022': ['ds', 'bst', 'sm', 'camc', 'xp'],
      '2023': ['ds', 'bst', 'sm', 'camc', 'xp'],
      '2024': ['ds', 'bst', 'sm', 'camc', 'xp'],
    },
    'Mustang GT500': {
      '2020': ['as', 'ssr', 'dsp', 'sm', 'camc', 'xp'],
      '2021': ['as', 'ssr', 'sm', 'camc', 'xp'],
      '2022': ['as', 'ssr', 'sm', 'camc', 'xp'],
    },
    'Mustang GT (non-Performance Package)': {
      '2010': ['fs', 'camc', 'sm', 'xp'],
      '2011': ['fs', 'camc', 'sm', 'xp'],
      '2012': ['fs', 'camc', 'sm', 'xp'],
      '2013': ['fs', 'camc', 'sm', 'xp'],
      '2014': ['fs', 'camc', 'sm', 'xp'],
      '2015': ['fs', 'esp', 'camc', 'sm', 'xp'],
      '2016': ['fs', 'esp', 'camc', 'sm', 'xp'],
      '2017': ['fs', 'esp', 'camc', 'sm', 'xp'],
      '2018': ['fs', 'esp', 'camc', 'sm', 'xp'],
      '2019': ['fs', 'esp', 'camc', 'sm', 'xp'],
      '2020': ['fs', 'camc', 'sm', 'xp'],
      '2021': ['fs', 'camc', 'sm', 'xp'],
      '2022': ['fs', 'camc', 'sm', 'xp'],
    },
    'Mustang GT (w/ Performance Package)': {
      '2018': ['fs', 'esp', 'camc', 'sm', 'xp'],
      '2019': ['fs', 'esp', 'camc', 'sm', 'xp'],
      '2020': ['fs', 'camc', 'sm', 'xp'],
      '2021': ['fs', 'camc', 'sm', 'xp'],
      '2022': ['fs', 'camc', 'sm', 'xp'],
    },
    'Mustang Mach 1': {
      '2003': ['fs', 'bst', 'camt', 'sm', 'xp'],
      '2004': ['fs', 'bst', 'camt', 'sm', 'xp'],
      '2021': ['fs', 'camc', 'sm', 'xp'],
      '2022': ['fs', 'camc', 'sm', 'xp'],
      '2023': ['fs', 'camc', 'sm', 'xp'],
    },
    'Mustang Mach-E GT': {
      '2021': ['bs', 'evx'],
      '2022': ['bs', 'evx'],
      '2023': ['bs', 'evx'],
      '2024': ['bs', 'evx'],
    },
    'Mustang SVO': {
      'all': ['gs', 'bst', 'esp', 'sm', 'cp', 'camt', 'camc', 'xp'],
    },
    'Mustang SVT Cobra': {
      'all': ['fs', 'bst', 'sm', 'camt', 'xp'],
    },
    'Mustang Shelby GT350': {
      '2015': ['fs', 'ssr', 'sst', 'esp', 'camc', 'sm', 'xp'],
      '2016': ['fs', 'ssr', 'sst', 'esp', 'camc', 'sm', 'xp'],
      '2017': ['fs', 'ssr', 'sst', 'camc', 'sm', 'xp'],
      '2018': ['fs', 'ssr', 'sst', 'camc', 'sm', 'xp'],
      '2019': ['fs', 'ssr', 'sst', 'camc', 'sm', 'xp'],
      '2020': ['fs', 'ssr', 'sst', 'camc', 'sm', 'xp'],
    },
    'Mustang Shelby GT350R': {
      '2015': ['ssr', 'ss', 'esp', 'camc', 'sm', 'xp'],
      '2016': ['ssr', 'ss', 'esp', 'camc', 'sm', 'xp'],
      '2017': ['ssr', 'ss', 'camc', 'sm', 'xp'],
      '2018': ['ssr', 'ss', 'camc', 'sm', 'xp'],
      '2019': ['ssr', 'ss', 'camc', 'sm', 'xp'],
      '2020': ['ssr', 'ss', 'camc', 'sm', 'xp'],
    },
    'Mustang Shelby GT500': {
      '2007': ['bs', 'ssr', 'esp', 'camc', 'sm', 'xp'],
      '2008': ['bs', 'ssr', 'esp', 'camc', 'sm', 'xp'],
      '2009': ['bs', 'ssr', 'esp', 'camc', 'sm', 'xp'],
      '2010': ['bs', 'ssr', 'esp', 'camc', 'sm', 'xp'],
      '2011': ['bs', 'ssr', 'dsp', 'camc', 'sm', 'xp'],
      '2012': ['bs', 'ssr', 'dsp', 'camc', 'sm', 'xp'],
      '2013': ['bs', 'ssr', 'dsp', 'camc', 'sm', 'xp'],
      '2014': ['bs', 'ssr', 'dsp', 'camc', 'sm', 'xp'],
      '2015': ['bs', 'ssr', 'camc', 'sm', 'xp'],
    },
    'Mustang V8 (NOC)': {
      'all': ['fs', 'bst', 'esp', 'sm', 'cp', 'camt', 'xp'],
    },
    'Pinto': {
      'all': ['hs', 'fsp', 'dp', 'sm', 'xp', 'xb'],
    },
    'Probe (4-cyl non-turbo)': {
      'all': ['hs', 'fsp', 'ep', 'sm', 'xp', 'xa'],
    },
    'Probe (Turbo & V6)': {
      'all': ['hs', 'dsp', 'sm', 'xp', 'xa'],
    },
    'Ranger': {
      'all': ['bst', 'sm', 'xp', 'xa'],
    },
    'Taurus': {
      'all': ['hs', 'sm', 'xp', 'xa', 'smf'],
    },
    'Taurus SHO': {
      '1989': ['hs', 'esp', 'sm', 'xp', 'xa'],
      '1990': ['hs', 'esp', 'sm', 'xp', 'xa'],
      '1991': ['hs', 'esp', 'sm', 'xp', 'xa'],
      '1992': ['hs', 'esp', 'sm', 'xp', 'xa'],
      '1993': ['hs', 'esp', 'sm', 'xp', 'xa'],
      '1994': ['hs', 'esp', 'sm', 'xp', 'xa'],
      '1995': ['hs', 'esp', 'sm', 'xp', 'xa'],
      '1996': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1997': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1998': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1999': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '2010': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '2011': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '2012': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '2013': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '2014': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '2015': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '2016': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '2017': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '2018': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '2019': ['gs', 'esp', 'sm', 'xp', 'xa'],
    },
    'Tempo': {
      'all': ['hs', 'sm', 'xp', 'xa'],
    },
    'Thunderbird (V6 Supercharged)': {
      '1989': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1990': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1991': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1992': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1993': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1994': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1995': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1996': ['gs', 'esp', 'sm', 'xp', 'xa'],
      '1997': ['gs', 'esp', 'sm', 'xp', 'xa'],
    },
    'Thunderbird (V6 non-Supercharged)': {
      '1989': ['hs', 'esp', 'cp', 'sm', 'xp', 'xa'],
      '1990': ['hs', 'esp', 'cp', 'sm', 'xp', 'xa'],
      '1991': ['hs', 'esp', 'cp', 'sm', 'xp', 'xa'],
      '1992': ['hs', 'esp', 'cp', 'sm', 'xp', 'xa'],
      '1993': ['hs', 'esp', 'cp', 'sm', 'xp', 'xa'],
      '1994': ['hs', 'esp', 'cp', 'sm', 'xp', 'xa'],
      '1995': ['hs', 'esp', 'cp', 'sm', 'xp', 'xa'],
      '1996': ['hs', 'esp', 'cp', 'sm', 'xp', 'xa'],
      '1997': ['hs', 'esp', 'cp', 'sm', 'xp', 'xa'],
    },
    'Thunderbird (V8)': {
      '1955': ['fs', 'camt', 'sm', 'xp'],
      '1956': ['fs', 'camt', 'sm', 'xp'],
      '1957': ['fs', 'camt', 'sm', 'xp'],
      '1958': ['fs', 'camt', 'sm', 'xp'],
      '1959': ['fs', 'camt', 'sm', 'xp'],
      '1960': ['fs', 'camt', 'sm', 'xp'],
      '1961': ['fs', 'camt', 'sm', 'xp'],
      '1962': ['fs', 'camt', 'sm', 'xp'],
      '1963': ['fs', 'camt', 'sm', 'xp'],
      '1964': ['fs', 'camt', 'sm', 'xp'],
      '1965': ['fs', 'camt', 'sm', 'xp'],
      '1966': ['fs', 'camt', 'sm', 'xp'],
      '1967': ['fs', 'camt', 'sm', 'xp'],
      '1968': ['fs', 'camt', 'sm', 'xp'],
      '1969': ['fs', 'camt', 'sm', 'xp'],
      '1970': ['fs', 'camt', 'sm', 'xp'],
      '1971': ['fs', 'camt', 'sm', 'xp'],
      '1972': ['fs', 'camt', 'sm', 'xp'],
      '1973': ['fs', 'camt', 'sm', 'xp'],
      '1974': ['fs', 'camt', 'sm', 'xp'],
      '1975': ['fs', 'camt', 'sm', 'xp'],
      '1976': ['fs', 'camt', 'sm', 'xp'],
      '1977': ['fs', 'camt', 'sm', 'xp'],
      '1978': ['fs', 'camt', 'sm', 'xp'],
      '1979': ['fs', 'camt', 'sm', 'xp'],
      '1980': ['fs', 'camt', 'sm', 'xp'],
      '1981': ['fs', 'camt', 'sm', 'xp'],
      '1982': ['fs', 'camt', 'sm', 'xp'],
      '1983': ['fs', 'camt', 'sm', 'xp'],
      '1984': ['fs', 'camt', 'sm', 'xp'],
      '1985': ['fs', 'camt', 'sm', 'xp'],
      '1986': ['fs', 'camt', 'sm', 'xp'],
      '1987': ['fs', 'camt', 'sm', 'xp'],
      '1988': ['fs', 'camt', 'sm', 'xp'],
      '1989': ['gs', 'esp', 'camt', 'sm', 'xp'],
      '1990': ['gs', 'esp', 'camt', 'sm', 'xp'],
      '1991': ['gs', 'esp', 'camt', 'sm', 'xp'],
      '1992': ['gs', 'esp', 'camt', 'sm', 'xp'],
      '1993': ['gs', 'esp', 'camt', 'sm', 'xp'],
      '1994': ['gs', 'esp', 'camt', 'sm', 'xp'],
      '1995': ['gs', 'esp', 'camt', 'sm', 'xp'],
      '1996': ['gs', 'esp', 'camt', 'sm', 'xp'],
      '1997': ['gs', 'esp', 'camt', 'sm', 'xp'],
      '2002': ['fs', 'camc', 'sm', 'xp'],
      '2003': ['fs', 'camc', 'sm', 'xp'],
      '2004': ['fs', 'camc', 'sm', 'xp'],
      '2005': ['fs', 'camc', 'sm', 'xp'],
    },
    'Thunderbird Turbo Coupe': {
      'all': ['hs', 'cp', 'sm', 'xp', 'xa'],
    },
    'ZX2': {
      'all': ['hs', 'est', 'fsp', 'ep', 'sm', 'xp', 'xa'],
    },
    'ZX2 S/R': {
      '1999': ['gs', 'sm', 'xp', 'xa'],
      '2000': ['gs', 'sm', 'xp', 'xa'],
      '2001': ['gs', 'sm', 'xp', 'xa'],
      '2002': ['gs', 'sm', 'xp', 'xa'],
      '2003': ['gs', 'sm', 'xp', 'xa'],
    },
  },
  'Genesis': {
    'Genesis Electrified GV60': {
      '2023': ['evx'],
      '2024': ['evx'],
    },
    'Genesis Electrified GV70': {
      '2023': ['evx'],
      '2024': ['evx'],
    },
    'Genesis Electrified G80': {
      '2023': ['evx'],
      '2024': ['evx'],
    },
  },
  'Geo': {
    'Metro': {
      'all': ['hs', 'sm', 'xp', 'xb', 'smf'],
    },
    'Metro 13BA': {
      '1989': ['ep', 'sm', 'xp', 'xb', 'smf'],
      '1990': ['ep', 'sm', 'xp', 'xb', 'smf'],
      '1991': ['ep', 'sm', 'xp', 'xb', 'smf'],
      '1992': ['ep', 'sm', 'xp', 'xb', 'smf'],
      '1993': ['ep', 'sm', 'xp', 'xb', 'smf'],
      '1994': ['ep', 'sm', 'xp', 'xb', 'smf'],
    },
    'Prizm': {
      'all': ['hs', 'sm', 'xp', 'xb', 'smf'],
    },
    'Spectrum': {
      'all': ['hs', 'sm', 'xp', 'xb'],
    },
    'Spectrum Turbo': {
      '1985': ['esp', 'sm', 'xp', 'xb'],
      '1986': ['esp', 'sm', 'xp', 'xb'],
      '1987': ['esp', 'sm', 'xp', 'xb'],
      '1988': ['esp', 'sm', 'xp', 'xb'],
      '1989': ['esp', 'sm', 'xp', 'xb'],
    },
    'Storm': {
      '2005': ['esp', 'sm', 'xp', 'xb', 'smf'],
      '2006': ['esp', 'sm', 'xp', 'xb', 'smf'],
      '2007': ['esp', 'sm', 'xp', 'xb', 'smf'],
    },
    'Storm GSi': {
      '1985': ['esp', 'sm', 'xp', 'xb', 'smf'],
      '1986': ['esp', 'sm', 'xp', 'xb', 'smf'],
      '1987': ['esp', 'sm', 'xp', 'xb', 'smf'],
      '1988': ['esp', 'sm', 'xp', 'xb', 'smf'],
      '1989': ['esp', 'sm', 'xp', 'xb', 'smf'],
    },
  },
  'GMC': {
    'Sonoma (4-cyl & 6-cyl, N/A)': {
      'all': ['dst', 'sm', 'xp', 'xa'],
    },
    'Sonoma (6-cyl)': {
      '1982': ['cp', 'sm', 'xp', 'xa'],
      '1983': ['cp', 'sm', 'xp', 'xa'],
      '1984': ['cp', 'sm', 'xp', 'xa'],
      '1985': ['cp', 'sm', 'xp', 'xa'],
      '1986': ['cp', 'sm', 'xp', 'xa'],
      '1987': ['cp', 'sm', 'xp', 'xa'],
      '1988': ['cp', 'sm', 'xp', 'xa'],
      '1989': ['cp', 'sm', 'xp', 'xa'],
      '1990': ['cp', 'sm', 'xp', 'xa'],
      '1991': ['cp', 'sm', 'xp', 'xa'],
      '1992': ['cp', 'sm', 'xp', 'xa'],
      '1993': ['cp', 'sm', 'xp', 'xa'],
      '1994': ['cp', 'sm', 'xp', 'xa'],
      '1995': ['cp', 'sm', 'xp', 'xa'],
      '1996': ['cp', 'sm', 'xp', 'xa'],
      '1997': ['cp', 'sm', 'xp', 'xa'],
      '1998': ['cp', 'sm', 'xp', 'xa'],
      '1999': ['cp', 'sm', 'xp', 'xa'],
      '2000': ['cp', 'sm', 'xp', 'xa'],
      '2001': ['cp', 'sm', 'xp', 'xa'],
      '2002': ['cp', 'sm', 'xp', 'xa'],
      '2003': ['cp', 'sm', 'xp', 'xa'],
      '2004': ['cp', 'sm', 'xp', 'xa'],
    },
    'Syclone': {
      'all': ['fs', 'sm', 'xp', 'xa'],
    },
    'Typhoon': {
      'all': ['fs', 'sm', 'xp', 'xa'],
    },
  },
  'Honda': {
    '600': {
      '1964': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1965': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1966': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
    },
    '800': {
      '1967': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1968': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1969': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1970': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
    },
    'Accord': {
      '1976': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1977': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1978': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1979': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1980': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1981': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1982': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1983': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1984': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1985': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1986': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1987': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1988': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1989': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1990': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '1991': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '1992': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '1993': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '1994': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '1995': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '1996': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '1997': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '1998': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '1999': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2000': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2001': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2002': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2003': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2004': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2005': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2006': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2007': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2008': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2009': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2010': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2011': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2012': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2013': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2014': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2015': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2016': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2017': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2018': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2019': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2020': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2021': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
    },
    'Accord (V6)': {
      '1998': ['hs', 'dst', 'smf', 'xa'],
      '1999': ['hs', 'dst', 'smf', 'xa'],
      '2000': ['hs', 'dst', 'smf', 'xa'],
      '2001': ['hs', 'dst', 'smf', 'xa'],
      '2002': ['hs', 'dst', 'smf', 'xa'],
      '2003': ['hs', 'dst', 'smf', 'xa'],
      '2004': ['hs', 'dst', 'smf', 'xa'],
      '2005': ['hs', 'dst', 'smf', 'xa'],
      '2006': ['hs', 'dst', 'smf', 'xa'],
      '2007': ['hs', 'dst', 'smf', 'xa'],
      '2008': ['hs', 'dst', 'smf', 'xa'],
      '2009': ['hs', 'dst', 'smf', 'xa'],
      '2010': ['hs', 'dst', 'smf', 'xa'],
      '2011': ['hs', 'dst', 'smf', 'xa'],
      '2012': ['hs', 'dst', 'smf', 'xa'],
      '2013': ['hs', 'dst', 'smf', 'xa'],
      '2014': ['hs', 'dst', 'smf', 'xa'],
      '2015': ['hs', 'dst', 'smf', 'xa'],
      '2016': ['hs', 'dst', 'smf', 'xa'],
      '2017': ['hs', 'dst', 'smf', 'xa'],
    },
    'CR-Z': {
      '2010': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2011': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2012': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2013': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2014': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2015': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2016': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
    },
    'CRX': {
      '1984': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1985': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1986': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1987': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1988': ['hs', 'est', 'csp', 'smf', 'ep', 'xb'],
      '1989': ['hs', 'est', 'csp', 'smf', 'ep', 'xb'],
      '1990': ['hs', 'est', 'csp', 'smf', 'ep', 'xb'],
      '1991': ['hs', 'est', 'csp', 'smf', 'ep', 'xb'],
    },
    'Civic': {
      '1975': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1976': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1977': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1978': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1979': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1980': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1981': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1982': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1983': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1984': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1985': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1986': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1987': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1988': ['hs', 'est', 'csp', 'smf', 'ep', 'xb'],
      '1989': ['hs', 'est', 'csp', 'smf', 'ep', 'xb'],
      '1990': ['hs', 'est', 'csp', 'smf', 'ep', 'xb'],
      '1991': ['hs', 'est', 'csp', 'smf', 'ep', 'xb'],
      '1992': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1993': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1994': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1995': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1996': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '1997': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '1998': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '1999': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2000': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2001': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2002': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2003': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2004': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2005': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2006': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2007': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2008': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2009': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2010': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2011': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2012': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2013': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2014': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2015': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2016': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2017': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2018': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2019': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2020': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2021': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2022': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2023': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
    },
    'Civic Hybrid': {
      '2025': ['gs'],
    },
    'Civic Si': {
      '1984': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1985': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1986': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1987': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1988': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1989': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1990': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1991': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1992': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1993': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1994': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1995': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1996': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '1997': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '1998': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '1999': ['hs', 'est', 'esp', 'smf', 'ep', 'xa'],
      '2000': ['hs', 'est', 'esp', 'smf', 'ep', 'xa'],
      '2001': ['hs', 'est', 'esp', 'smf', 'ep', 'xa'],
      '2002': ['hs', 'dst', 'esp', 'smf', 'ep', 'xa'],
      '2003': ['hs', 'dst', 'esp', 'smf', 'ep', 'xa'],
      '2004': ['hs', 'dst', 'esp', 'smf', 'ep', 'xa'],
      '2005': ['hs', 'dst', 'esp', 'smf', 'ep', 'xa'],
      '2006': ['hs', 'dst', 'esp', 'smf', 'ep', 'xa'],
      '2007': ['hs', 'dst', 'esp', 'smf', 'ep', 'xa'],
      '2008': ['hs', 'dst', 'esp', 'smf', 'ep', 'xa'],
      '2009': ['hs', 'dst', 'esp', 'smf', 'ep', 'xa'],
      '2010': ['hs', 'dst', 'esp', 'smf', 'ep', 'xa'],
      '2011': ['hs', 'dst', 'esp', 'smf', 'ep', 'xa'],
      '2012': ['hs', 'dst', 'esp', 'smf', 'ep', 'xa'],
      '2013': ['hs', 'dst', 'fsp', 'smf', 'ep', 'xa'],
      '2014': ['hs', 'dst', 'fsp', 'smf', 'ep', 'xa'],
      '2015': ['hs', 'dst', 'fsp', 'smf', 'ep', 'xa'],
      '2017': ['gs', 'gst', 'fsp', 'smf', 'ep', 'xa'],
      '2018': ['gs', 'gst', 'fsp', 'smf', 'ep', 'xa'],
      '2019': ['gs', 'gst', 'fsp', 'smf', 'ep', 'xa'],
      '2020': ['gs', 'gst', 'fsp', 'smf', 'ep', 'xa'],
      '2021': ['gs', 'gst', 'fsp', 'smf', 'ep', 'xa'],
      '2022': ['gs', 'gst', 'fsp', 'smf', 'ep', 'xa'],
      '2023': ['gs', 'gst', 'fsp', 'smf', 'ep', 'xa'],
      '2024': ['gs', 'gst', 'fsp', 'smf', 'ep', 'xa'],
    },
    'Civic Si Mugen': {
      '2008': ['gs', 'dst', 'fsp', 'smf', 'ep', 'xa'],
    },
    'Civic Sport': {
      '2017': ['hs', 'gst', 'fsp', 'smf', 'ep', 'xa'],
      '2018': ['hs', 'gst', 'fsp', 'smf', 'ep', 'xa'],
      '2019': ['hs', 'gst', 'fsp', 'smf', 'ep', 'xa'],
      '2020': ['hs', 'gst', 'fsp', 'smf', 'ep', 'xa'],
      '2021': ['hs', 'gst', 'fsp', 'smf', 'ep', 'xa'],
      '2022': ['hs', 'gst', 'fsp', 'smf', 'ep', 'xa'],
      '2023': ['hs', 'gst', 'fsp', 'smf', 'ep', 'xa'],
    },
    'Civic Type R': {
      '2017': ['ds', 'bst', 'esp', 'smf', 'ep', 'xa'],
      '2018': ['ds', 'bst', 'esp', 'smf', 'ep', 'xa'],
      '2019': ['ds', 'bst', 'esp', 'smf', 'ep', 'xa'],
      '2020': ['ds', 'bst', 'esp', 'smf', 'ep', 'xa'],
      '2021': ['ds', 'bst', 'dsp', 'smf', 'ep', 'xa'],
      '2022': ['ds', 'bst', 'dsp', 'smf', 'ep', 'xa'],
      '2023': ['bs', 'bst', 'dsp', 'smf', 'ep', 'xa'],
      '2024': ['bs', 'bst', 'dsp', 'smf', 'ep', 'xa'],
    },
    'Fit': {
      '2007': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2008': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2009': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2010': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2011': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2012': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2013': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2014': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2015': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2016': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2017': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2018': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2019': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2020': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2021': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
    },
    'Insight': {
      '1999': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2000': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2001': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2002': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2003': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2004': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2005': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2006': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2009': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2010': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2011': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2012': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2013': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2014': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2018': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2019': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2020': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '2021': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
    },
    'Prelude': {
      '1978': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1979': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1980': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1981': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1982': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1983': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '1984': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '1985': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '1986': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '1987': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '1988': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '1989': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '1990': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '1991': ['hs', 'est', 'fsp', 'smf', 'ep', 'xa'],
      '1992': ['hs', 'est', 'esp', 'smf', 'ep', 'xa'],
      '1993': ['hs', 'est', 'esp', 'smf', 'ep', 'xa'],
      '1994': ['hs', 'est', 'esp', 'smf', 'ep', 'xa'],
      '1995': ['hs', 'est', 'esp', 'smf', 'ep', 'xa'],
      '1996': ['hs', 'est', 'esp', 'smf', 'ep', 'xa'],
      '1997': ['hs', 'est', 'esp', 'smf', 'ep', 'xa'],
      '1998': ['hs', 'est', 'esp', 'smf', 'ep', 'xa'],
      '1999': ['hs', 'est', 'esp', 'smf', 'ep', 'xa'],
      '2000': ['hs', 'est', 'esp', 'smf', 'ep', 'xa'],
      '2001': ['hs', 'est', 'esp', 'smf', 'ep', 'xa'],
    },
    'S2000 (non-CR)': {
      '1999': ['cs', 'cst', 'csp', 'ssm', 'fp', 'xa'],
      '2000': ['cs', 'cst', 'csp', 'ssm', 'fp', 'xa'],
      '2001': ['cs', 'cst', 'csp', 'ssm', 'fp', 'xa'],
      '2002': ['cs', 'cst', 'csp', 'ssm', 'fp', 'xa'],
      '2003': ['cs', 'cst', 'csp', 'ssm', 'fp', 'xa'],
      '2004': ['cs', 'cst', 'csp', 'ssm', 'fp', 'xa'],
      '2005': ['cs', 'cst', 'csp', 'ssm', 'fp', 'xa'],
      '2006': ['cs', 'cst', 'csp', 'ssm', 'fp', 'xa'],
      '2007': ['cs', 'cst', 'csp', 'ssm', 'fp', 'xa'],
      '2008': ['cs', 'cst', 'csp', 'ssm', 'fp', 'xa'],
      '2009': ['cs', 'cst', 'csp', 'ssm', 'fp', 'xa'],
    },
    'S2000 CR': {
      '2008': ['as', 'ast', 'csp', 'ssm', 'fp', 'xa'],
      '2009': ['as', 'ast', 'csp', 'ssm', 'fp', 'xa'],
    },
    'del Sol (DOHC)': {
      '1992': ['hs', 'est', 'esp', 'smf', 'ep', 'xb'],
      '1993': ['hs', 'est', 'esp', 'smf', 'ep', 'xb'],
      '1994': ['hs', 'est', 'esp', 'smf', 'ep', 'xb'],
      '1995': ['hs', 'est', 'esp', 'smf', 'ep', 'xb'],
      '1996': ['hs', 'est', 'esp', 'smf', 'ep', 'xb'],
      '1997': ['hs', 'est', 'esp', 'smf', 'ep', 'xb'],
      '1998': ['hs', 'est', 'esp', 'smf', 'ep', 'xb'],
    },
    'del Sol (SOHC)': {
      '1992': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1993': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1994': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1995': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1996': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1997': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
      '1998': ['hs', 'est', 'fsp', 'smf', 'ep', 'xb'],
    },
  },
  'Hyundai': {
    'Accent': {
      '1995': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '1996': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '1997': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '1998': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '1999': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2000': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2001': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2002': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2003': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2004': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2005': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2006': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2007': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2008': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2009': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2010': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2011': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2012': ['hs', 'est', 'sm', 'xp', 'xa', 'smf'],
      '2013': ['hs', 'est', 'sm', 'xp', 'xa', 'smf'],
      '2014': ['hs', 'est', 'sm', 'xp', 'xa', 'smf'],
      '2015': ['hs', 'est', 'sm', 'xp', 'xa', 'smf'],
      '2016': ['hs', 'est', 'sm', 'xp', 'xa', 'smf'],
      '2017': ['hs', 'est', 'sm', 'xp', 'xa', 'smf'],
      '2018': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2019': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2020': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2021': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2022': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2023': ['hs', 'sm', 'xp', 'xa', 'smf'],
    },
    'Elantra (incl. GT Turbo)': {
      '1990': ['hs', 'sm', 'xp', 'xa', 'fsp', 'smf'],
      '1991': ['hs', 'sm', 'xp', 'xa', 'fsp', 'smf'],
      '1992': ['hs', 'sm', 'xp', 'xa', 'fsp', 'smf'],
      '1993': ['hs', 'sm', 'xp', 'xa', 'fsp', 'smf'],
      '1994': ['hs', 'sm', 'xp', 'xa', 'fsp', 'smf'],
      '1995': ['hs', 'sm', 'xp', 'xa', 'fsp', 'smf'],
      '1996': ['hs', 'sm', 'xp', 'xa', 'fsp', 'smf'],
      '1997': ['hs', 'sm', 'xp', 'xa', 'fsp', 'smf'],
      '1998': ['hs', 'sm', 'xp', 'xa', 'fsp', 'smf'],
      '1999': ['hs', 'sm', 'xp', 'xa', 'fsp', 'smf'],
      '2000': ['hs', 'sm', 'xp', 'xa', 'fsp', 'smf'],
      '2001': ['hs', 'est', 'sm', 'xp', 'fsp', 'xa', 'smf'],
      '2002': ['hs', 'est', 'sm', 'xp', 'fsp', 'xa', 'smf'],
      '2003': ['hs', 'est', 'sm', 'xp', 'fsp', 'xa', 'smf'],
      '2004': ['hs', 'est', 'sm', 'xp', 'fsp', 'xa', 'smf'],
      '2005': ['hs', 'est', 'sm', 'xp', 'fsp', 'xa', 'smf'],
      '2006': ['hs', 'est', 'sm', 'xp', 'fsp', 'xa', 'smf'],
      '2007': ['hs', 'est', 'sm', 'xp', 'fsp', 'xa', 'smf'],
      '2008': ['hs', 'est', 'sm', 'xp', 'fsp', 'xa', 'smf'],
      '2009': ['hs', 'est', 'sm', 'xp', 'fsp', 'xa', 'smf'],
      '2010': ['hs', 'est', 'sm', 'xp', 'fsp', 'xa', 'smf'],
      '2011': ['hs', 'est', 'sm', 'xp', 'fsp', 'xa', 'smf'],
      '2012': ['hs', 'est', 'sm', 'xp', 'fsp', 'xa', 'smf'],
      '2013': ['hs', 'est', 'sm', 'xp', 'fsp', 'xa', 'smf'],
      '2014': ['hs', 'est', 'sm', 'xp', 'fsp', 'xa', 'smf'],
      '2015': ['hs', 'est', 'sm', 'xp', 'fsp', 'xa', 'smf'],
      '2016': ['hs', 'est', 'sm', 'xp', 'fsp', 'xa', 'smf'],
      '2017': ['hs', 'sm', 'xp', 'xa', 'fsp', 'smf'],
      '2018': ['hs', 'sm', 'xp', 'xa', 'fsp', 'smf'],
      '2019': ['hs', 'sm', 'xp', 'xa', 'fsp', 'smf'],
      '2020': ['hs', 'sm', 'xp', 'xa', 'fsp', 'smf'],
      '2021': ['hs', 'sm', 'xp', 'xa', 'fsp', 'smf'],
      '2022': ['hs', 'sm', 'xp', 'xa', 'fsp', 'smf'],
      '2023': ['hs', 'sm', 'xp', 'xa', 'fsp', 'smf'],
    },
    'Elantra N': {
      '2021': ['ds', 'sm', 'xp', 'xa', 'smf'],
      '2022': ['ds', 'sm', 'xp', 'xa', 'smf'],
      '2023': ['ds', 'sm', 'xp', 'xa', 'smf'],
    },
    'Excel': {
      'all': ['fsp', 'sm', 'xp', 'xa', 'smf'],
    },
    'Genesis': {
      '2009': ['esp', 'sm', 'xp', 'xa'],
      '2010': ['esp', 'sm', 'xp', 'xa'],
      '2011': ['esp', 'sm', 'xp', 'xa'],
      '2012': ['esp', 'sm', 'xp', 'xa'],
    },
    'Genesis (V6)': {
      'all': ['bst', 'sm', 'xp', 'xa'],
    },
    'Genesis Coupe (4-cyl Turbo)': {
      '2010': ['gs', 'gst', 'sm', 'xp', 'xa'],
      '2011': ['gs', 'gst', 'sm', 'xp', 'xa'],
      '2012': ['gs', 'gst', 'sm', 'xp', 'xa'],
      '2013': ['ds', 'bst', 'sm', 'xp', 'xa'],
      '2014': ['ds', 'bst', 'sm', 'xp', 'xa'],
      '2015': ['ds', 'bst', 'sm', 'xp', 'xa'],
      '2016': ['ds', 'bst', 'sm', 'xp', 'xa'],
    },
    'Genesis Coupe (V6)': {
      '2010': ['ds', 'bst', 'sm', 'xp', 'xa'],
      '2011': ['ds', 'bst', 'sm', 'xp', 'xa'],
      '2012': ['ds', 'bst', 'sm', 'xp', 'xa'],
      '2013': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2014': ['fs', 'bst', 'sm', 'xp', 'xa'],
      '2015': ['fs', 'bst', 'sm', 'xp', 'xa'],
    },
    'Genesis G70 (4-cyl Turbo)': {
      '2019': ['gs', 'sm', 'xp', 'xa'],
      '2020': ['gs', 'sm', 'xp', 'xa'],
      '2021': ['gs', 'sm', 'xp', 'xa'],
      '2022': ['gs', 'sm', 'xp', 'xa'],
    },
    'Genesis G70 (V6 Turbo)': {
      '2019': ['fs', 'sm', 'xp', 'xa'],
      '2020': ['fs', 'sm', 'xp', 'xa'],
      '2021': ['fs', 'sm', 'xp', 'xa'],
      '2022': ['fs', 'sm', 'xp', 'xa'],
    },
    'IONIQ Electric': {
      '2017': ['evx'],
      '2018': ['evx'],
      '2019': ['evx'],
      '2020': ['evx'],
      '2021': ['evx'],
    },
    'IONIQ 5': {
      '2020': ['ds', 'xp', 'xa', 'sm'],
      '2021': ['ds', 'xp', 'xa', 'sm'],
      '2022': ['ds', 'xp', 'xa', 'sm', 'evx'],
      '2023': ['ds', 'xp', 'xa', 'sm', 'evx'],
      '2024': ['ds', 'xp', 'xa', 'sm', 'evx'],
    },
    'IONIQ 5 N': {
      '2025': ['ss', 'xp', 'xa', 'sm', 'evx'],
    },
    'IONIQ 6': {
      '2023': ['evx'],
      '2024': ['evx'],
    },
    'Kona EV': {
      '2018': ['hs', 'evx'],
      '2019': ['hs', 'evx'],
      '2020': ['hs', 'evx'],
      '2021': ['hs', 'evx'],
      '2022': ['hs', 'evx'],
      '2023': ['hs', 'evx'],
      '2024': ['hs', 'evx'],
    },
    'Kona N': {
      '2022': ['ds', 'sm', 'xp', 'xa', 'smf'],
    },
    'Not Otherwise Classified': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xa'],
    },
    'Scoupe': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xa', 'smf'],
    },
    'Sonata': {
      '1990': ['ep', 'sm', 'xp', 'xa', 'smf'],
      '1991': ['ep', 'sm', 'xp', 'xa', 'smf'],
      '1992': ['ep', 'sm', 'xp', 'xa', 'smf'],
      '1993': ['ep', 'sm', 'xp', 'xa', 'smf'],
      '1994': ['ep', 'sm', 'xp', 'xa', 'smf'],
      '1995': ['ep', 'sm', 'xp', 'xa', 'smf'],
      '1996': ['ep', 'sm', 'xp', 'xa', 'smf'],
      '1997': ['ep', 'sm', 'xp', 'xa', 'smf'],
      '1998': ['ep', 'sm', 'xp', 'xa', 'smf'],
      '1999': ['ep', 'sm', 'xp', 'xa', 'smf'],
      '2000': ['ep', 'sm', 'xp', 'xa', 'smf'],
      '2001': ['ep', 'sm', 'xp', 'xa', 'smf'],
      '2002': ['ep', 'sm', 'xp', 'xa', 'smf'],
      '2003': ['ep', 'sm', 'xp', 'xa', 'smf'],
      '2004': ['ep', 'sm', 'xp', 'xa', 'smf'],
      '2005': ['ep', 'sm', 'xp', 'xa', 'smf'],
    },
    'Tiburon (4-cyl)': {
      'all': ['hs', 'esp', 'sm', 'xp', 'xa', 'smf'],
    },
    'Tiburon (V6)': {
      '2003': ['hs', 'est', 'esp', 'sm', 'xp', 'xa', 'smf'],
      '2004': ['hs', 'est', 'esp', 'sm', 'xp', 'xa', 'smf'],
      '2005': ['hs', 'est', 'esp', 'sm', 'xp', 'xa', 'smf'],
      '2006': ['hs', 'est', 'esp', 'sm', 'xp', 'xa', 'smf'],
      '2007': ['hs', 'est', 'esp', 'sm', 'xp', 'xa', 'smf'],
      '2008': ['hs', 'est', 'esp', 'sm', 'xp', 'xa', 'smf'],
    },
    'Veloster': {
      '2011': ['hs', 'est', 'sm', 'xp', 'xa', 'smf'],
      '2012': ['hs', 'est', 'sm', 'xp', 'xa', 'smf'],
      '2013': ['hs', 'est', 'sm', 'xp', 'xa', 'smf'],
      '2014': ['hs', 'est', 'sm', 'xp', 'xa', 'smf'],
      '2015': ['hs', 'est', 'sm', 'xp', 'xa', 'smf'],
      '2016': ['hs', 'est', 'sm', 'xp', 'xa', 'smf'],
      '2017': ['hs', 'est', 'sm', 'xp', 'xa', 'smf'],
      '2018': ['hs', 'est', 'sm', 'xp', 'xa', 'smf'],
      '2019': ['hs', 'sm', 'xp', 'xa', 'smf'],
      '2020': ['hs', 'sm', 'xp', 'xa', 'smf'],
    },
    'Veloster N': {
      '2019': ['ds', 'bst', 'sm', 'xp', 'xa', 'smf'],
      '2020': ['ds', 'bst', 'sm', 'xp', 'xa', 'smf'],
      '2021': ['ds', 'bst', 'sm', 'xp', 'xa', 'smf'],
      '2022': ['ds', 'bst', 'sm', 'xp', 'xa', 'smf'],
      '2023': ['ds', 'bst', 'sm', 'xp', 'xa', 'smf'],
    },
    'Veloster Turbo': {
      '2012': ['hs', 'fsp', 'sm', 'xp', 'xa', 'smf'],
      '2013': ['hs', 'gst', 'fsp', 'sm', 'xp', 'xa', 'smf'],
      '2014': ['hs', 'gst', 'fsp', 'sm', 'xp', 'xa', 'smf'],
      '2015': ['hs', 'gst', 'fsp', 'sm', 'xp', 'xa', 'smf'],
      '2016': ['hs', 'gst', 'fsp', 'sm', 'xp', 'xa', 'smf'],
      '2017': ['hs', 'fsp', 'sm', 'xp', 'xa', 'smf'],
      '2019': ['hs', 'gst', 'dsp', 'sm', 'xp', 'xa', 'smf'],
      '2020': ['hs', 'gst', 'sm', 'xp', 'xa', 'smf'],
      '2021': ['hs', 'gst', 'sm', 'xp', 'xa', 'smf'],
    },
    'Veloster Turbo Rally Edition': {
      '2016': ['gs', 'fsp', 'sm', 'xp', 'xa', 'smf'],
      '2017': ['gs', 'fsp', 'sm', 'xp', 'xa', 'smf'],
    },
  },
  'Infiniti': {
    'G20': {
      'all': ['hs', 'fsp', 'xp', 'xa', 'sm'],
    },
    'G35 Coupe': {
      '2003': ['ds', 'bst', 'esp', 'xp', 'xa', 'sm'],
      '2004': ['ds', 'bst', 'esp', 'xp', 'xa', 'sm'],
      '2005': ['ds', 'bst', 'esp', 'xp', 'xa', 'sm'],
      '2006': ['ds', 'bst', 'esp', 'xp', 'xa', 'sm'],
      '2007': ['ds', 'bst', 'esp', 'xp', 'xa', 'sm'],
    },
    'G35 Sedan': {
      '2003': ['ds', 'dst', 'esp', 'xp', 'xa', 'sm'],
      '2004': ['ds', 'dst', 'esp', 'xp', 'xa', 'sm'],
      '2005': ['ds', 'dst', 'esp', 'xp', 'xa', 'sm'],
      '2006': ['ds', 'dst', 'esp', 'xp', 'xa', 'sm'],
      '2007': ['ds', 'dst', 'esp', 'xp', 'xa', 'sm'],
    },
    'G37': {
      'all': ['bst', 'esp', 'xp', 'xa', 'sm'],
    },
    'G37 Coupe': {
      'all': ['fs', 'xp', 'xa', 'sm'],
    },
    'G37 Sedan': {
      'all': ['fs', 'xp', 'xa', 'sm'],
    },
    'I30': {
      '1996': ['ep', 'xp', 'xa', 'sm'],
      '1997': ['ep', 'xp', 'xa', 'sm'],
      '1998': ['ep', 'xp', 'xa', 'sm'],
      '1999': ['ep', 'xp', 'xa', 'sm'],
      '2000': ['ep', 'xp', 'xa', 'sm'],
      '2001': ['ep', 'xp', 'xa', 'sm'],
    },
    'I35': {
      '2002': ['ep', 'xp', 'xa', 'sm'],
      '2003': ['ep', 'xp', 'xa', 'sm'],
      '2004': ['ep', 'xp', 'xa', 'sm'],
    },
    'M30': {
      'all': ['hs', 'esp', 'xp', 'xa', 'sm'],
    },
    'Q45': {
      'all': ['fs', 'esp', 'xp', 'xa', 'sm'],
    },
    'Q50 Sport': {
      '2014': ['fs', 'xp', 'xa', 'sm'],
      '2015': ['fs', 'xp', 'xa', 'sm'],
      '2016': ['fs', 'xp', 'xa', 'sm'],
      '2017': ['fs', 'xp', 'xa', 'sm'],
      '2018': ['fs', 'xp', 'xa', 'sm'],
      '2019': ['fs', 'xp', 'xa', 'sm'],
      '2020': ['fs', 'xp', 'xa', 'sm'],
      '2021': ['fs', 'xp', 'xa', 'sm'],
      '2022': ['fs', 'xp', 'xa', 'sm'],
      '2023': ['fs', 'xp', 'xa', 'sm'],
      '2024': ['fs', 'xp', 'xa', 'sm'],
    },
    'Q60': {
      '2014': ['fs', 'xp', 'xa', 'sm'],
      '2015': ['fs', 'xp', 'xa', 'sm'],
      '2016': ['fs', 'xp', 'xa', 'sm'],
      '2017': ['fs', 'xp', 'xa', 'sm'],
      '2018': ['fs', 'xp', 'xa', 'sm'],
      '2019': ['fs', 'xp', 'xa', 'sm'],
      '2020': ['fs', 'xp', 'xa', 'sm'],
      '2021': ['fs', 'xp', 'xa', 'sm'],
      '2022': ['fs', 'xp', 'xa', 'sm'],
    },
  },
  'Isuzu': {
    'FWD models': {
      '1985': ['fsp', 'xp', 'xa', 'sm', 'smf'],
      '1986': ['fsp', 'xp', 'xa', 'sm', 'smf'],
      '1987': ['fsp', 'xp', 'xa', 'sm', 'smf'],
      '1988': ['fsp', 'xp', 'xa', 'sm', 'smf'],
      '1989': ['fsp', 'xp', 'xa', 'sm', 'smf'],
    },
    'I-Mark': {
      '1981': ['dp', 'hs', 'xp', 'xa', 'sm'],
      '1982': ['dp', 'hs', 'xp', 'xa', 'sm'],
      '1983': ['dp', 'hs', 'xp', 'xa', 'sm'],
      '1984': ['dp', 'hs', 'xp', 'xa', 'sm'],
      '1985': ['ep', 'xp', 'xa', 'sm'],
      '1986': ['ep', 'xp', 'xa', 'sm'],
      '1987': ['ep', 'xp', 'xa', 'sm'],
      '1988': ['ep', 'xp', 'xa', 'sm'],
      '1989': ['ep', 'xp', 'xa', 'sm'],
    },
    'I-Mark (1.5L non-turbo)': {
      'all': ['fsp', 'xp', 'xa', 'sm'],
    },
    'I-Mark (RWD)': {
      '1980': ['fsp', 'xp', 'xa', 'sm'],
      '1981': ['fsp', 'xp', 'xa', 'sm'],
      '1982': ['fsp', 'xp', 'xa', 'sm'],
      '1983': ['fsp', 'xp', 'xa', 'sm'],
      '1984': ['fsp', 'xp', 'xa', 'sm'],
      '1985': ['fsp', 'xp', 'xa', 'sm'],
    },
    'I-Mark LS (16v & Turbo, FWD)': {
      '1985': ['dsp', 'xp', 'xa', 'sm'],
      '1986': ['dsp', 'xp', 'xa', 'sm'],
      '1987': ['dsp', 'xp', 'xa', 'sm'],
      '1988': ['dsp', 'xp', 'xa', 'sm'],
      '1989': ['dsp', 'xp', 'xa', 'sm'],
    },
    'I-Mark RS (16v & Turbo, FWD)': {
      'all': ['dsp', 'fp', 'hs', 'xp', 'xa', 'sm'],
    },
    'I-Mark RS (16v)': {
      '1985': ['fsp', 'xp', 'xa', 'sm'],
      '1986': ['fsp', 'xp', 'xa', 'sm'],
      '1987': ['fsp', 'xp', 'xa', 'sm'],
      '1988': ['fsp', 'xp', 'xa', 'sm'],
      '1989': ['fsp', 'xp', 'xa', 'sm'],
    },
    'Impulse (16v & Turbo)': {
      'all': ['dsp', 'xp', 'xa', 'sm'],
    },
    'Impulse (non-turbo)': {
      '1980': ['hs', 'xp', 'xa', 'sm', 'xp', 'xa', 'sm'],
      '1981': ['hs', 'xp', 'xa', 'sm'],
      '1982': ['hs', 'xp', 'xa', 'sm'],
      '1983': ['dp', 'hs', 'fsp', 'xp', 'xa', 'sm'],
      '1984': ['dp', 'hs', 'fsp', 'xp', 'xa', 'sm'],
      '1985': ['dp', 'hs', 'fsp', 'xp', 'xa', 'sm'],
      '1986': ['dp', 'hs', 'fsp', 'xp', 'xa', 'sm'],
      '1987': ['dp', 'hs', 'fsp', 'xp', 'xa', 'sm'],
      '1988': ['dp', 'hs', 'fsp', 'xp', 'xa', 'sm'],
      '1989': ['dp', 'hs', 'fsp', 'xp', 'xa', 'sm'],
      '1990': ['hs', 'ep', 'xp', 'xa', 'sm'],
      '1991': ['hs', 'ep', 'xp', 'xa', 'sm'],
      '1992': ['hs', 'ep', 'xp', 'xa', 'sm'],
      '1993': ['hs', 'xp', 'xa', 'sm'],
    },
    'Impulse RS (RWD)': {
      '1983': ['dsp', 'xp', 'xa', 'sm'],
      '1984': ['dsp', 'xp', 'xa', 'sm'],
      '1985': ['dsp', 'xp', 'xa', 'sm'],
      '1986': ['dsp', 'xp', 'xa', 'sm'],
      '1987': ['dsp', 'xp', 'xa', 'sm'],
      '1988': ['dsp', 'xp', 'xa', 'sm'],
      '1989': ['dsp', 'xp', 'xa', 'sm'],
    },
    'Impulse RS Turbo (AWD)': {
      '1990': ['dsp', 'xp', 'xa', 'sm'],
      '1991': ['dsp', 'xp', 'xa', 'sm'],
      '1992': ['dsp', 'xp', 'xa', 'sm'],
      '1993': ['dsp', 'xp', 'xa', 'sm'],
    },
    'Impulse Turbo & RS (RWD)': {
      '1980': ['gs', 'xp', 'xa', 'sm'],
      '1981': ['gs', 'xp', 'xa', 'sm'],
      '1982': ['gs', 'xp', 'xa', 'sm'],
      '1983': ['dsp', 'xp', 'xa', 'sm'],
      '1984': ['dsp', 'xp', 'xa', 'sm'],
      '1985': ['dsp', 'xp', 'xa', 'sm'],
      '1986': ['dsp', 'xp', 'xa', 'sm'],
      '1987': ['dsp', 'xp', 'xa', 'sm'],
      '1988': ['dsp', 'xp', 'xa', 'sm'],
      '1989': ['dsp', 'xp', 'xa', 'sm'],
      '1990': ['gs', 'xp', 'xa', 'sm'],
      '1991': ['gs', 'xp', 'xa', 'sm'],
      '1992': ['gs', 'xp', 'xa', 'sm'],
      '1993': ['gs', 'xp', 'xa', 'sm'],
    },
    'Impulse XS (16v non-turbo)': {
      '1990': ['esp'],
      '1991': ['esp'],
      '1992': ['esp'],
      '1993': ['esp'],
    },
    'Stylus': {
      '1990': ['hs', 'xp', 'xa', 'sm'],
      '1991': ['hs', 'ep', 'xp', 'xa', 'sm'],
      '1992': ['hs', 'ep', 'xp', 'xa', 'sm'],
      '1993': ['hs', 'ep', 'xp', 'xa', 'sm'],
    },
    'Stylus S (12v)': {
      '1990': ['fsp', 'xp', 'xa', 'sm'],
      '1991': ['fsp', 'xp', 'xa', 'sm'],
      '1992': ['fsp', 'xp', 'xa', 'sm'],
      '1993': ['fsp', 'xp', 'xa', 'sm'],
    },
    'Stylus XS & RS (16v) (1990-93) ': {
      '1990': ['dsp', 'xp', 'xa', 'sm'],
      '1991': ['dsp', 'xp', 'xa', 'sm'],
      '1992': ['dsp', 'xp', 'xa', 'sm'],
      '1993': ['dsp', 'xp', 'xa', 'sm'],
    },
  },
  'Jaguar': {
    '120': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    '140': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    '150': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'E-type (all)': {
      'all': ['esp', 'xp', 'xa', 'sm'],
    },
    'F-Type (non-Project 7)': {
      '2014': ['bs', 'ssr', 'xp', 'xa', 'sm'],
      '2015': ['bs', 'ssr', 'xp', 'xa', 'sm'],
      '2016': ['bs', 'ssr', 'xp', 'xa', 'sm'],
      '2017': ['bs', 'ssr', 'xp', 'xa', 'sm'],
      '2018': ['bs', 'ssr', 'xp', 'xa', 'sm'],
      '2019': ['bs', 'ssr', 'xp', 'xa', 'sm'],
      '2020': ['bs', 'ssr', 'xp', 'xa', 'sm'],
      '2021': ['bs', 'ssr', 'xp', 'xa', 'sm'],
      '2022': ['bs', 'ssr', 'xp', 'xa', 'sm'],
      '2023': ['bs', 'ssr', 'xp', 'xa', 'sm'],
    },
    'F-Type R & SVR': {
      '2018': ['as', 'xp', 'xu', 'sm'],
      '2019': ['as', 'xp', 'xu', 'sm'],
      '2020': ['as', 'xp', 'xu', 'sm'],
      '2021': ['as', 'xp', 'xu', 'sm'],
      '2022': ['as', 'xp', 'xu', 'sm'],
      '2023': ['as', 'xp', 'xu', 'sm'],
      '2024': ['as', 'xp', 'xu', 'sm'],
    },
    'I-Pace': {
      '2019': ['evx'],
      '2020': ['evx'],
      '2021': ['evx'],
      '2022': ['evx'],
      '2023': ['evx'],
      '2024': ['evx'],
    },
    'S-Type (6-cyl)': {
      '2002': ['gs', 'xp', 'xa', 'sm'],
      '2003': ['gs', 'xp', 'xa', 'sm'],
      '2004': ['gs', 'xp', 'xa', 'sm'],
      '2005': ['gs', 'xp', 'xa', 'sm'],
      '2006': ['gs', 'xp', 'xa', 'sm'],
      '2007': ['gs', 'xp', 'xa', 'sm'],
      '2008': ['gs', 'xp', 'xa', 'sm'],
    },
    'S-Type R': {
      'all': ['fs', 'xp', 'xa', 'sm'],
    },
    'Sedan (6-cyl)': {
      'all': ['esp', 'xp', 'xa', 'sm'],
    },
    'Sedan (12-cyl)': {
      'all': ['esp', 'fs', 'xp', 'xa', 'sm'],
    },
    'X-Type (2.5L)': {
      '2002': ['hs', 'xp', 'xa', 'sm'],
      '2003': ['hs', 'xp', 'xa', 'sm'],
      '2004': ['hs', 'xp', 'xa', 'sm'],
      '2005': ['hs', 'xp', 'xa', 'sm'],
    },
    'X-Type (3.0L)': {
      '2002': ['gs', 'xp', 'xa', 'sm'],
      '2003': ['gs', 'xp', 'xa', 'sm'],
      '2004': ['gs', 'xp', 'xa', 'sm'],
      '2005': ['gs', 'xp', 'xa', 'sm'],
      '2006': ['gs', 'xp', 'xa', 'sm'],
      '2007': ['gs', 'xp', 'xa', 'sm'],
      '2008': ['gs', 'xp', 'xa', 'sm'],
    },
    'XE': {
      'all': ['fs', 'xp', 'xa', 'sm'],
    },
    'XJ': {
      '1998': ['fs', 'xp', 'xa', 'sm'],
      '1999': ['fs', 'xp', 'xa', 'sm'],
      '2000': ['fs', 'xp', 'xa', 'sm'],
      '2001': ['fs', 'xp', 'xa', 'sm'],
      '2002': ['fs', 'xp', 'xa', 'sm'],
      '2003': ['fs', 'xp', 'xa', 'sm'],
      '2004': ['fs', 'xp', 'xa', 'sm'],
      '2005': ['fs', 'xp', 'xa', 'sm'],
      '2006': ['fs', 'xp', 'xa', 'sm'],
      '2007': ['fs', 'xp', 'xa', 'sm'],
      '2008': ['fs', 'xp', 'xa', 'sm'],
      '2009': ['fs', 'xp', 'xa', 'sm'],
      '2010': ['fs', 'xp', 'xa', 'sm'],
      '2011': ['fs', 'xp', 'xa', 'sm'],
      '2012': ['fs', 'xp', 'xa', 'sm'],
      '2013': ['fs', 'xp', 'xa', 'sm'],
      '2014': ['fs', 'xp', 'xa', 'sm'],
      '2015': ['fs', 'xp', 'xa', 'sm'],
      '2016': ['fs', 'xp', 'xa', 'sm'],
      '2017': ['fs', 'xp', 'xa', 'sm'],
      '2018': ['fs', 'xp', 'xa', 'sm'],
      '2019': ['fs', 'xp', 'xa', 'sm'],
    },
    'XJ-S': {
      '1976': ['esp', 'fs', 'xp', 'xa', 'sm'],
      '1977': ['esp', 'fs', 'xp', 'xa', 'sm'],
      '1978': ['esp', 'fs', 'xp', 'xa', 'sm'],
      '1979': ['esp', 'fs', 'xp', 'xa', 'sm'],
      '1980': ['esp', 'fs', 'xp', 'xa', 'sm'],
      '1981': ['esp', 'fs', 'xp', 'xa', 'sm'],
      '1982': ['esp', 'fs', 'xp', 'xa', 'sm'],
      '1983': ['esp', 'fs', 'xp', 'xa', 'sm'],
      '1984': ['esp', 'fs', 'xp', 'xa', 'sm'],
      '1985': ['esp', 'fs', 'xp', 'xa', 'sm'],
      '1986': ['esp', 'fs', 'xp', 'xa', 'sm'],
      '1987': ['esp', 'fs', 'xp', 'xa', 'sm'],
      '1988': ['esp', 'fs', 'xp', 'xa', 'sm'],
      '1989': ['esp', 'fs', 'xp', 'xa', 'sm'],
      '1990': ['esp', 'fs', 'xp', 'xa', 'sm'],
      '1991': ['esp', 'fs', 'xp', 'xa', 'sm'],
      '1992': ['esp', 'fs', 'xp', 'xa', 'sm'],
      '1993': ['esp', 'fs', 'xp', 'xa', 'sm'],
      '1994': ['esp', 'fs', 'xp', 'xa', 'sm'],
      '1995': ['esp', 'fs', 'xp', 'xa', 'sm'],
      '1996': ['esp', 'fs', 'xp', 'xa', 'sm'],
    },
    'XK8': {
      '1997': ['fs', 'xp', 'xa', 'sm'],
      '1998': ['fs', 'xp', 'xa', 'sm'],
      '1999': ['fs', 'xp', 'xa', 'sm'],
      '2000': ['fs', 'xp', 'xa', 'sm'],
      '2001': ['fs', 'xp', 'xa', 'sm'],
      '2002': ['fs', 'xp', 'xa', 'sm'],
      '2003': ['fs', 'xp', 'xa', 'sm'],
      '2004': ['fs', 'xp', 'xa', 'sm'],
      '2005': ['fs', 'xp', 'xa', 'sm'],
      '2006': ['fs', 'xp', 'xa', 'sm'],
    },
    'XK 120, 140, 150, & 160': {
      'all': ['esp', 'xp', 'xa', 'sm'],
    },
    'XKE': {
      'all': ['cs', 'xp', 'xa', 'sm'],
    },
    'XKE (6-cyl)': {
      '1961': ['fp', 'xp', 'xa', 'sm'],
      '1962': ['fp', 'xp', 'xa', 'sm'],
      '1963': ['fp', 'xp', 'xa', 'sm'],
      '1964': ['fp', 'xp', 'xa', 'sm'],
      '1965': ['fp', 'xp', 'xa', 'sm'],
      '1966': ['fp', 'xp', 'xa', 'sm'],
      '1967': ['fp', 'xp', 'xa', 'sm'],
      '1968': ['fp', 'xp', 'xa', 'sm'],
      '1969': ['fp', 'xp', 'xa', 'sm'],
      '1970': ['fp', 'xp', 'xa', 'sm'],
      '1971': ['fp', 'xp', 'xa', 'sm'],
      '1972': ['fp', 'xp', 'xa', 'sm'],
      '1973': ['fp', 'xp', 'xa', 'sm'],
      '1974': ['fp', 'xp', 'xa', 'sm'],
    },
    'XKE (V12)': {
      '1961': ['fp', 'xp', 'xa', 'sm'],
      '1962': ['fp', 'xp', 'xa', 'sm'],
      '1963': ['fp', 'xp', 'xa', 'sm'],
      '1964': ['fp', 'xp', 'xa', 'sm'],
      '1965': ['fp', 'xp', 'xa', 'sm'],
      '1966': ['fp', 'xp', 'xa', 'sm'],
      '1967': ['fp', 'xp', 'xa', 'sm'],
      '1968': ['fp', 'xp', 'xa', 'sm'],
      '1969': ['fp', 'xp', 'xa', 'sm'],
      '1970': ['fp', 'xp', 'xa', 'sm'],
      '1971': ['fp', 'xp', 'xa', 'sm'],
      '1972': ['fp', 'xp', 'xa', 'sm'],
      '1973': ['fp', 'xp', 'xa', 'sm'],
      '1974': ['fp', 'xp', 'xa', 'sm'],
    },
    'XKR Coupe': {
      'all': ['bs', 'xp', 'xa', 'sm'],
    },
  },
  'Jensen': {
    'Jensen-Healey': {
      'all': ['cs', 'fsp', 'dp', 'xp', 'xa', 'sm'],
    },
  },
  'Kia': {
    'EV6 (non-GT)': {
      '2022': ['ds', 'xp', 'xa', 'sm', 'evx'],
      '2023': ['ds', 'xp', 'xa', 'sm', 'evx'],
      '2024': ['ds', 'xp', 'xa', 'sm', 'evx'],
    },
    'EV6 GT': {
      '2022': ['ss', 'xp', 'xa', 'sm', 'evx'],
      '2023': ['ss', 'xp', 'xa', 'sm', 'evx'],
      '2024': ['ss', 'xp', 'xa', 'sm', 'evx'],
    },
    'Forte5': {
      '2014': ['hs', 'xp', 'xa', 'sm'],
      '2015': ['hs', 'xp', 'xa', 'sm'],
      '2016': ['hs', 'xp', 'xa', 'sm'],
      '2017': ['hs', 'xp', 'xa', 'sm'],
      '2018': ['hs', 'xp', 'xa', 'sm'],
    },
    'Forte (non-turbo)': {
      'all': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm'],
    },
    'Forte GT': {
      '2020': ['hs', 'xp', 'xa', 'sm'],
      '2021': ['hs', 'xp', 'xa', 'sm'],
      '2022': ['hs', 'xp', 'xa', 'sm'],
      '2023': ['hs', 'xp', 'xa', 'sm'],
      '2024': ['hs', 'xp', 'xa', 'sm'],
    },
    'Forte Koup (non-turbo)': {
      'all': ['hs', 'est', 'dsp', 'xp', 'xa', 'sm'],
    },
    'Forte Koup Turbo': {
      'all': ['hs', 'gst', 'dsp', 'xp', 'xa', 'sm'],
    },
    'Forte Turbo': {
      'all': ['hs', 'gst', 'fsp', 'xp', 'xa', 'sm'],
    },
    'Niro EV': {
      '2019': ['hs', 'xp', 'xa', 'sm', 'evx'],
      '2020': ['hs', 'xp', 'xa', 'sm', 'evx'],
      '2021': ['hs', 'xp', 'xa', 'sm', 'evx'],
      '2022': ['hs', 'xp', 'xa', 'sm', 'evx'],
      '2023': ['hs', 'xp', 'xa', 'sm', 'evx'],
      '2024': ['hs', 'xp', 'xa', 'sm', 'evx'],
    },
    'Optima': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Rio': {
      '2012': ['hs', 'est', 'xp', 'xa', 'sm'],
      '2013': ['hs', 'est', 'xp', 'xa', 'sm'],
      '2014': ['hs', 'est', 'xp', 'xa', 'sm'],
      '2015': ['hs', 'est', 'xp', 'xa', 'sm'],
      '2016': ['hs', 'est', 'xp', 'xa', 'sm'],
      '2017': ['hs', 'est', 'xp', 'xa', 'sm'],
      '2018': ['hs', 'xp', 'xa', 'sm'],
      '2019': ['hs', 'xp', 'xa', 'sm'],
      '2020': ['hs', 'xp', 'xa', 'sm'],
      '2021': ['hs', 'xp', 'xa', 'sm'],
      '2022': ['hs', 'xp', 'xa', 'sm'],
      '2023': ['hs', 'xp', 'xa', 'sm'],
    },
    'Sephia': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Spectra': {
      'all': ['hs', 'fsp', 'xp', 'xa', 'sm'],
    },
    'Stinger (4-cyl Turbo)': {
      '2018': ['gs', 'xp', 'xa', 'sm'],
      '2019': ['gs', 'xp', 'xa', 'sm'],
      '2020': ['gs', 'xp', 'xa', 'sm'],
      '2021': ['gs', 'xp', 'xa', 'sm'],
      '2022': ['gs', 'xp', 'xa', 'sm'],
      '2023': ['gs', 'xp', 'xa', 'sm'],
    },
    'Stinger (V6 Turbo)': {
      '2018': ['fs', 'xp', 'xa', 'sm'],
      '2019': ['fs', 'xp', 'xa', 'sm'],
      '2020': ['fs', 'xp', 'xa', 'sm'],
      '2021': ['fs', 'xp', 'xa', 'sm'],
      '2022': ['fs', 'xp', 'xa', 'sm'],
    },
  },
  'Lamborghini': {
    'Gallardo': {
      'all': ['ss', 'ssp', 'ssm', 'xp', 'xu'],
    },
    'Huracan': {
      'all': ['ssp', 'ssm', 'xp', 'xa'],
    },
  },
  'Lancia': {
    'Beta': {
      '1975': ['hs', 'ep', 'fsp', 'xp', 'xa', 'sm'],
      '1976': ['hs', 'ep', 'fsp', 'xp', 'xa', 'sm'],
      '1977': ['hs', 'ep', 'fsp', 'xp', 'xa', 'sm'],
      '1978': ['hs', 'ep', 'fsp', 'xp', 'xa', 'sm'],
      '1979': ['hs', 'ep', 'fsp', 'xp', 'xa', 'sm'],
      '1980': ['hs', 'ep', 'fsp', 'xp', 'xa', 'sm'],
      '1981': ['hs', 'ep', 'fsp', 'xp', 'xa', 'sm'],
      '1982': ['hs', 'ep', 'fsp', 'xp', 'xa', 'sm'],
      '1983': ['hs', 'fsp', 'xp', 'xa', 'sm'],
    },
    'Scorpion': {
      'all': ['hs', 'csp', 'dp', 'xp', 'xa', 'sm'],
    },
    'Zagato': {
      '1975': ['fsp', 'ep', 'xp', 'xa', 'sm'],
      '1976': ['fsp', 'ep', 'xp', 'xa', 'sm'],
      '1977': ['fsp', 'ep', 'xp', 'xa', 'sm'],
      '1978': ['fsp', 'ep', 'xp', 'xa', 'sm'],
      '1979': ['fsp', 'ep', 'xp', 'xa', 'sm'],
      '1980': ['fsp', 'ep', 'xp', 'xa', 'sm'],
      '1981': ['fsp', 'ep', 'xp', 'xa', 'sm'],
      '1982': ['fsp', 'ep', 'xp', 'xa', 'sm'],
      '1983': ['fsp', 'xp', 'xa', 'sm'],
    },
  },
  'Lexus': {
    'CT 200h': {
      '2011': ['hs', 'est', 'xp', 'xa', 'sm'],
      '2012': ['hs', 'est', 'xp', 'xa', 'sm'],
      '2013': ['hs', 'est', 'xp', 'xa', 'sm'],
      '2014': ['hs', 'est', 'xp', 'xa', 'sm'],
      '2015': ['hs', 'est', 'xp', 'xa', 'sm'],
      '2016': ['hs', 'est', 'xp', 'xa', 'sm'],
      '2017': ['hs', 'xp', 'xa', 'sm'],
    },
    'ES 250': {
      'all': ['hs', 'esp', 'xp', 'xa', 'sm'],
    },
    'ES 300': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'GS 300': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'GS 350': {
      '2005': ['ds', 'xp', 'xa', 'sm'],
      '2006': ['ds', 'xp', 'xa', 'sm'],
      '2007': ['ds', 'xp', 'xa', 'sm'],
      '2008': ['ds', 'xp', 'xa', 'sm'],
      '2009': ['ds', 'xp', 'xa', 'sm'],
      '2010': ['ds', 'xp', 'xa', 'sm'],
      '2011': ['ds', 'xp', 'xa', 'sm'],
      '2012': ['ds', 'xp', 'xa', 'sm'],
      '2013': ['ds', 'xp', 'xa', 'sm'],
      '2014': ['ds', 'xp', 'xa', 'sm'],
      '2015': ['ds', 'xp', 'xa', 'sm'],
      '2016': ['ds', 'xp', 'xa', 'sm'],
      '2017': ['ds', 'xp', 'xa', 'sm'],
      '2018': ['ds', 'xp', 'xa', 'sm'],
    },
    'GS 400': {
      '1998': ['esp', 'fs', 'xp', 'xa', 'sm'],
      '1999': ['esp', 'fs', 'xp', 'xa', 'sm'],
      '2000': ['esp', 'fs', 'xp', 'xa', 'sm'],
    },
    'GS-F': {
      '2016': ['fs', 'xp', 'xa', 'sm'],
      '2017': ['fs', 'xp', 'xa', 'sm'],
      '2018': ['fs', 'xp', 'xa', 'sm'],
      '2019': ['fs', 'xp', 'xa', 'sm'],
      '2020': ['fs', 'xp', 'xa', 'sm'],
    },
    'IS 250': {
      'all': ['dst', 'xp', 'xa', 'sm'],
    },
    'IS 300': {
      '2000': ['esp', 'dst', 'xp', 'xa', 'sm'],
      '2001': ['esp', 'dst', 'gs', 'fp', 'xp', 'xa', 'sm'],
      '2002': ['esp', 'dst', 'gs', 'fp', 'xp', 'xa', 'sm'],
      '2003': ['esp', 'dst', 'gs', 'fp', 'xp', 'xa', 'sm'],
      '2004': ['esp', 'dst', 'gs', 'fp', 'xp', 'xa', 'sm'],
      '2005': ['esp', 'dst', 'gs', 'fp', 'xp', 'xa', 'sm'],
      '2007': ['esp', 'dst', 'xp', 'xa', 'sm'],
      '2008': ['esp', 'dst', 'xp', 'xa', 'sm'],
      '2009': ['esp', 'dst', 'xp', 'xa', 'sm'],
      '2010': ['esp', 'dst', 'xp', 'xa', 'sm'],
      '2011': ['esp', 'dst', 'xp', 'xa', 'sm'],
      '2012': ['esp', 'dst', 'xp', 'xa', 'sm'],
      '2013': ['esp', 'dst', 'xp', 'xa', 'sm'],
      '2014': ['esp', 'dst', 'xp', 'xa', 'sm'],
      '2015': ['esp', 'dst', 'xp', 'xa', 'sm'],
      '2016': ['esp', 'dst', 'xp', 'xa', 'sm'],
      '2017': ['esp', 'dst', 'xp', 'xa', 'sm'],
      '2018': ['esp', 'dst', 'xp', 'xa', 'sm'],
      '2019': ['esp', 'dst', 'xp', 'xa', 'sm'],
      '2020': ['esp', 'dst', 'xp', 'xa', 'sm'],
    },
    'IS 350': {
      'all': ['dst', 'xp', 'xa', 'sm'],
    },
    'IS (all excl. IS-F)': {
      '2006': ['ds', 'xp', 'xa', 'sm'],
      '2007': ['ds', 'xp', 'xa', 'sm'],
      '2008': ['ds', 'xp', 'xa', 'sm'],
      '2009': ['ds', 'xp', 'xa', 'sm'],
      '2010': ['ds', 'xp', 'xa', 'sm'],
      '2011': ['ds', 'xp', 'xa', 'sm'],
      '2012': ['ds', 'xp', 'xa', 'sm'],
      '2013': ['ds', 'xp', 'xa', 'sm'],
      '2014': ['ds', 'xp', 'xa', 'sm'],
      '2015': ['ds', 'xp', 'xa', 'sm'],
      '2016': ['ds', 'xp', 'xa', 'sm'],
      '2017': ['ds', 'xp', 'xa', 'sm'],
      '2018': ['ds', 'xp', 'xa', 'sm'],
      '2019': ['ds', 'xp', 'xa', 'sm'],
      '2020': ['ds', 'xp', 'xa', 'sm'],
    },
    'IS 500 F': {
      '2022': ['fs', 'xp', 'xa', 'sm'],
      '2023': ['fs', 'xp', 'xa', 'sm'],
      '2024': ['fs', 'xp', 'xa', 'sm'],
      '2025': ['fs', 'xp', 'xa', 'sm'],
    },
    'IS F': {
      '2008': ['esp', 'fs', 'bst', 'xp', 'xa', 'sm'],
      '2009': ['esp', 'fs', 'bst', 'xp', 'xa', 'sm'],
      '2010': ['esp', 'fs', 'bst', 'xp', 'xa', 'sm'],
      '2011': ['esp', 'fs', 'bst', 'xp', 'xa', 'sm'],
      '2012': ['esp', 'fs', 'bst', 'xp', 'xa', 'sm'],
      '2013': ['esp', 'fs', 'bst', 'xp', 'xa', 'sm'],
      '2014': ['esp', 'fs', 'bst', 'xp', 'xa', 'sm'],
    },
    'LS 400': {
      'all': ['esp', 'xp', 'xa', 'sm'],
    },
    'RC (non-F)': {
      '2015': ['fs', 'xp', 'xa', 'sm'],
      '2016': ['fs', 'xp', 'xa', 'sm'],
      '2017': ['fs', 'xp', 'xa', 'sm'],
      '2018': ['fs', 'xp', 'xa', 'sm'],
      '2019': ['fs', 'xp', 'xa', 'sm'],
      '2020': ['fs', 'xp', 'xa', 'sm'],
      '2021': ['fs', 'xp', 'xa', 'sm'],
      '2022': ['fs', 'xp', 'xa', 'sm'],
      '2023': ['fs', 'xp', 'xa', 'sm'],
      '2024': ['fs', 'xp', 'xa', 'sm'],
    },
    'RC-F': {
      '2015': ['bs', 'xp', 'xa', 'sm'],
      '2016': ['bs', 'xp', 'xa', 'sm'],
      '2017': ['bs', 'xp', 'xa', 'sm'],
      '2018': ['bs', 'xp', 'xa', 'sm'],
      '2019': ['bs', 'xp', 'xa', 'sm'],
      '2020': ['bs', 'xp', 'xa', 'sm'],
      '2021': ['bs', 'xp', 'xa', 'sm'],
      '2022': ['bs', 'xp', 'xa', 'sm'],
      '2023': ['bs', 'xp', 'xa', 'sm'],
      '2024': ['bs', 'xp', 'xa', 'sm'],
    },
    'SC 300': {
      '1992': ['gs', 'dst', 'xp', 'xa', 'sm'],
      '1993': ['gs', 'dst', 'xp', 'xa', 'sm'],
      '1994': ['gs', 'dst', 'xp', 'xa', 'sm'],
      '1995': ['gs', 'dst', 'xp', 'xa', 'sm'],
      '1996': ['gs', 'dst', 'xp', 'xa', 'sm'],
      '1997': ['gs', 'dst', 'xp', 'xa', 'sm'],
      '1998': ['gs', 'dst', 'xp', 'xa', 'sm'],
      '1999': ['gs', 'dst', 'xp', 'xa', 'sm'],
      '2000': ['gs', 'dst', 'xp', 'xa', 'sm'],
    },
    'SC 400': {
      '1992': ['ds', 'esp', 'xp', 'xa', 'sm'],
      '1993': ['ds', 'esp', 'xp', 'xa', 'sm'],
      '1994': ['ds', 'esp', 'xp', 'xa', 'sm'],
      '1995': ['ds', 'esp', 'xp', 'xa', 'sm'],
      '1996': ['ds', 'esp', 'xp', 'xa', 'sm'],
      '1997': ['ds', 'esp', 'xp', 'xa', 'sm'],
      '1998': ['ds', 'esp', 'xp', 'xa', 'sm'],
      '1999': ['ds', 'esp', 'xp', 'xa', 'sm'],
      '2000': ['ds', 'esp', 'xp', 'xa', 'sm'],
    },
  },
  'Lincoln': {
    'LS (V6)': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'LS (V8)': {
      '2000': ['fs', 'xp', 'xa', 'sm'],
      '2001': ['fs', 'camc', 'xp', 'sm'],
      '2002': ['fs', 'camc', 'xp', 'sm'],
      '2003': ['fs', 'camc', 'xp', 'sm'],
      '2004': ['fs', 'camc', 'xp', 'sm'],
      '2005': ['fs', 'camc', 'xp', 'sm'],
      '2006': ['fs', 'camc', 'xp', 'sm'],
    },
    'MKZ': {
      '2006': ['gs', 'xp', 'xa', 'sm'],
      '2007': ['gs', 'xp', 'xa', 'sm'],
      '2008': ['gs', 'xp', 'xa', 'sm'],
      '2009': ['gs', 'xp', 'xa', 'sm'],
      '2010': ['gs', 'xp', 'xa', 'sm'],
      '2011': ['gs', 'xp', 'xa', 'sm'],
      '2012': ['gs', 'xp', 'xa', 'sm'],
    },
    'MKZ (AWD)': {
      '2013': ['ds', 'xp', 'xa', 'sm'],
      '2014': ['ds', 'xp', 'xa', 'sm'],
      '2015': ['ds', 'xp', 'xa', 'sm'],
      '2016': ['ds', 'xp', 'xa', 'sm'],
      '2017': ['ds', 'xp', 'xa', 'sm'],
      '2018': ['ds', 'xp', 'xa', 'sm'],
      '2019': ['ds', 'xp', 'xa', 'sm'],
      '2020': ['ds', 'xp', 'xa', 'sm'],
    },
    'MKZ (FWD)': {
      '2013': ['gs', 'xp', 'xa', 'sm'],
      '2014': ['gs', 'xp', 'xa', 'sm'],
      '2015': ['gs', 'xp', 'xa', 'sm'],
      '2016': ['gs', 'xp', 'xa', 'sm'],
      '2017': ['gs', 'xp', 'xa', 'sm'],
      '2018': ['gs', 'xp', 'xa', 'sm'],
      '2019': ['gs', 'xp', 'xa', 'sm'],
      '2020': ['gs', 'xp', 'xa', 'sm'],
    },
    'Mark VIII': {
      '1993': ['fs', 'camt', 'xp', 'sm'],
      '1994': ['fs', 'camt', 'xp', 'sm'],
      '1995': ['fs', 'camt', 'xp', 'sm'],
      '1996': ['fs', 'camt', 'xp', 'sm'],
      '1997': ['fs', 'camt', 'xp', 'sm'],
      '1998': ['fs', 'camt', 'xp', 'sm'],
    },
  },
  'Lotus': {
    '7 & 7A': {
      'all': ['cs', 'ssp', 'dp', 'xp', 'xb', 'ssm'],
    },
    'Cortina': {
      'all': ['csp', 'hs', 'xp', 'xb', 'sm'],
    },
    'Eclat': {
      'all': ['cs', 'ssp', 'xp', 'xb', 'sm'],
    },
    'Elan': {
      'all': ['cs', 'dp', 'ssp', 'xp', 'xb', 'ssm'],
    },
    'Elise': {
      '1996': ['fp', 'ssm', 'xp', 'xb'],
      '1997': ['fp', 'ssm', 'xp', 'xb'],
      '1998': ['fp', 'ssm', 'xp', 'xb'],
      '1999': ['fp', 'ssm', 'xp', 'xb'],
      '2000': ['fp', 'ssm', 'xp', 'xb'],
      '2001': ['fp', 'ssm', 'xp', 'xb'],
      '2002': ['fp', 'ssm', 'xp', 'xb'],
      '2003': ['fp', 'ssm', 'xp', 'xb'],
      '2004': ['fp', 'ssm', 'xp', 'xb'],
      '2005': ['as', 'sst', 'fp', 'ssm', 'ssp', 'ssr', 'xp', 'xb'],
      '2006': ['as', 'sst', 'fp', 'ssm', 'ssp', 'ssr', 'xp', 'xb'],
      '2007': ['as', 'sst', 'fp', 'ssm', 'ssp', 'ssr', 'xp', 'xb'],
      '2008': ['as', 'sst', 'fp', 'ssm', 'ssp', 'ssr', 'xp', 'xb'],
      '2009': ['as', 'sst', 'fp', 'ssm', 'ssp', 'ssr', 'xp', 'xb'],
      '2010': ['as', 'sst', 'fp', 'ssm', 'ssp', 'ssr', 'xp', 'xb'],
      '2011': ['as', 'sst', 'ssm', 'ssp', 'ssr', 'xp', 'xb'],
    },
    'Elise SC': {
      '2008': ['ss', 'xp', 'xb', 'ssm'],
      '2009': ['ss', 'xp', 'xb', 'ssm'],
      '2010': ['ss', 'xp', 'xb', 'ssm'],
      '2011': ['ss', 'xp', 'xb', 'ssm'],
    },
    'Elite': {
      'all': ['cs', 'xp', 'xb', 'ssm'],
    },
    'Elite 2+2': {
      'all': ['ssp', 'xp', 'xa', 'sm'],
    },
    'Elite (1216 cc)': {
      'all': ['csp', 'xp', 'xa', 'ssm'],
    },
    'Emira': {
      'all': ['ss', 'sst', 'xp', 'xa', 'ssm'],
    },
    'Esprit': {
      'all': ['cs', 'ssm', 'ssp', 'xp', 'xa'],
    },
    'Esprit Turbo': {
      '1996': ['as', 'sst', 'ssp', 'xp', 'xa', 'ssm'],
      '1997': ['as', 'sst', 'ssp', 'xp', 'xa', 'ssm'],
      '1998': ['as', 'sst', 'ssp', 'xp', 'xa', 'ssm'],
      '1999': ['as', 'sst', 'ssp', 'xp', 'xa', 'ssm'],
      '2000': ['as', 'sst', 'ssp', 'xp', 'xa', 'ssm'],
      '2001': ['as', 'sst', 'ssp', 'xp', 'xa', 'ssm'],
      '2002': ['as', 'sst', 'ssp', 'xp', 'xa', 'ssm'],
      '2003': ['as', 'sst', 'ssp', 'xp', 'xa', 'ssm'],
      '2004': ['as', 'sst', 'ssp', 'xp', 'xa', 'ssm'],
    },
    'Europa': {
      'all': ['cs', 'dp', 'ssp', 'xp', 'xb', 'ssm'],
    },
    'Evora': {
      '2010': ['bs', 'bst', 'ssm', 'ssp', 'xp', 'xa'],
      '2011': ['bs', 'bst', 'ssm', 'ssp', 'xp', 'xa'],
      '2012': ['bs', 'bst', 'ssm', 'ssp', 'xp', 'xa'],
      '2013': ['bs', 'bst', 'ssm', 'ssp', 'xp', 'xa'],
      '2014': ['bs', 'bst', 'ssm', 'ssp', 'xp', 'xa'],
      '2015': ['bs', 'ssm', 'xp', 'xa'],
    },
    'Evora 400': {
      'all': ['as', 'ssp', 'xp', 'xu', 'ssm'],
    },
    'Evora 410 Sport': {
      '2018': ['ss', 'xp', 'xu', 'ssm'],
    },
    'Evora GT': {
      '2020': ['ss', 'sst', 'xp', 'xa', 'ssm'],
      '2021': ['ss', 'sst', 'xp', 'xa', 'ssm'],
      '2022': ['ss', 'sst', 'xp', 'xa', 'ssm'],
    },
    'Evora S': {
      '2010': ['ssp', 'xp', 'xa', 'ssm'],
      '2011': ['as', 'sst', 'ssp', 'ssr', 'xp', 'xa', 'ssm'],
      '2012': ['as', 'sst', 'ssp', 'ssr', 'xp', 'xa', 'ssm'],
      '2013': ['as', 'sst', 'ssp', 'ssr', 'xp', 'xa', 'ssm'],
      '2014': ['as', 'sst', 'ssp', 'ssr', 'xp', 'xa', 'ssm'],
      '2015': ['as', 'ssr', 'xp', 'xa', 'ssm'],
    },
    'Exige': {
      '1996': ['fp', 'ssm', 'xp', 'xb'],
      '1997': ['fp', 'ssm', 'xp', 'xb'],
      '1998': ['fp', 'ssm', 'xp', 'xb'],
      '1999': ['fp', 'ssm', 'xp', 'xb'],
      '2000': ['fp', 'ssm', 'xp', 'xb'],
      '2001': ['fp', 'ssm', 'xp', 'xb'],
      '2002': ['fp', 'ssm', 'xp', 'xb'],
      '2003': ['fp', 'ssm', 'xp', 'xb'],
      '2004': ['fp', 'ssm', 'xp', 'xb'],
      '2005': ['fp', 'ssm', 'ssp', 'xp', 'xb'],
      '2006': ['as', 'sst', 'fp', 'ssm', 'ssp', 'ssr', 'xp', 'xb'],
      '2007': ['fp', 'ssm', 'ssp', 'xp', 'xb'],
      '2008': ['fp', 'ssm', 'ssp', 'xp', 'xb'],
      '2009': ['fp', 'ssm', 'ssp', 'xp', 'xb'],
      '2010': ['fp', 'ssm', 'ssp', 'xp', 'xb'],
      '2011': ['ssm', 'ssp', 'xp', 'xb'],
    },
    'Exige S': {
      '2005': ['ssp', 'xp', 'xb', 'ssm'],
      '2006': ['ssp', 'xp', 'xb', 'ssm'],
      '2007': ['ss', 'ssp', 'xp', 'xb', 'ssm'],
      '2008': ['ss', 'ssp', 'xp', 'xb', 'ssm'],
      '2009': ['ss', 'ssp', 'xp', 'xb', 'ssm'],
      '2010': ['ss', 'ssp', 'xp', 'xb', 'ssm'],
      '2011': ['ss', 'ssp', 'xp', 'xb', 'ssm'],
    },
    'Super 7 (1340 cc & 1498 cc)': {
      'all': ['dp', 'xp', 'xb', 'ssm'],
    },
  },
  'Lucid': {
    'Air (incl. Performance, excl. Sapphire)': {
      '2022': ['evx'],
      '2023': ['evx'],
      '2024': ['evx'],
    },
  },
  'Maserati': {
    'BiTurbo': {
      'all': ['cs', 'dsp', 'xp', 'xa', 'sm'],
    },
    'Coupe': {
      '2002': ['bs', 'xp', 'xa', 'sm'],
      '2003': ['bs', 'xp', 'xa', 'sm'],
      '2004': ['bs', 'xp', 'xa', 'sm'],
      '2005': ['bs', 'xp', 'xa', 'sm'],
      '2006': ['bs', 'xp', 'xa', 'sm'],
      '2007': ['bs', 'xp', 'xa', 'sm'],
    },
    'GranSport': {
      '2004': ['bs', 'xp', 'xa', 'sm'],
      '2005': ['bs', 'xp', 'xa', 'sm'],
      '2006': ['bs', 'xp', 'xa', 'sm'],
      '2007': ['bs', 'xp', 'xa', 'sm'],
    },
    'Spyder': {
      '2002': ['bs', 'xp', 'xa', 'sm'],
      '2003': ['bs', 'xp', 'xa', 'sm'],
      '2004': ['bs', 'xp', 'xa', 'sm'],
      '2005': ['bs', 'xp', 'xa', 'sm'],
      '2006': ['bs', 'xp', 'xa', 'sm'],
      '2007': ['bs', 'xp', 'xa', 'sm'],
    },
  },
  'Mazda': {
    '626': {
      'all': ['hs', 'fsp', 'dp', 'xp', 'xa', 'sm'],
    },
    '808': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    '929': {
      'all': ['hs', 'esp', 'xp', 'xa', 'sm'],
    },
    '323 (non-turbo)': {
      'all': ['hs', 'dst', 'fsp', 'ep', 'xp', 'xa', 'sm'],
    },
    '323 GT Turbo': {
      'all': ['gs', 'gst', 'dsp', 'xp', 'xa', 'sm'],
    },
    '323 GTX Turbo': {
      'all': ['gs', 'gst', 'dsp', 'xp', 'xa', 'sm'],
    },
    'Cosmo': {
      'all': ['hs', 'fsp', 'dp', 'xp', 'xa', 'sm'],
    },
    'MX-3': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'MX-5 Miata': {
      '1990': ['es', 'est', 'csp', 'ssm', 'dp', 'xb'],
      '1991': ['es', 'est', 'csp', 'ssm', 'dp', 'xb'],
      '1992': ['es', 'est', 'csp', 'ssm', 'dp', 'xb'],
      '1993': ['es', 'est', 'csp', 'ssm', 'dp', 'xb'],
      '1994': ['es', 'cst', 'csp', 'ssm', 'dp', 'xb'],
      '1995': ['es', 'cst', 'csp', 'ssm', 'dp', 'xb'],
      '1996': ['es', 'cst', 'csp', 'ssm', 'dp', 'xb'],
      '1997': ['es', 'cst', 'csp', 'ssm', 'dp', 'xb'],
      '1998': ['es', 'cst', 'csp', 'ssm', 'dp', 'xb'],
      '1999': ['es', 'cst', 'csp', 'ssm', 'dp', 'xb'],
      '2000': ['es', 'cst', 'csp', 'ssm', 'dp', 'xb'],
      '2001': ['es', 'cst', 'csp', 'ssm', 'dp', 'xb'],
      '2002': ['es', 'cst', 'csp', 'ssm', 'dp', 'xb'],
      '2003': ['es', 'cst', 'csp', 'ssm', 'dp', 'xb'],
      '2004': ['es', 'cst', 'csp', 'ssm', 'dp', 'xb'],
      '2005': ['es', 'cst', 'csp', 'ssm', 'dp', 'xb'],
      '2006': ['cs', 'cst', 'csp', 'ssm', 'dp', 'xb'],
      '2007': ['cs', 'cst', 'csp', 'ssm', 'dp', 'xb'],
      '2008': ['cs', 'cst', 'csp', 'ssm', 'dp', 'xb'],
      '2009': ['cs', 'cst', 'csp', 'ssm', 'dp', 'xb'],
      '2010': ['cs', 'cst', 'csp', 'ssm', 'dp', 'xb'],
      '2011': ['cs', 'cst', 'csp', 'ssm', 'dp', 'xb'],
      '2012': ['cs', 'cst', 'csp', 'ssm', 'dp', 'xb'],
      '2013': ['cs', 'cst', 'csp', 'ssm', 'dp', 'xb'],
      '2014': ['cs', 'cst', 'csp', 'ssm', 'dp', 'xb'],
      '2015': ['cs', 'cst', 'csp', 'ssm', 'dp', 'xb'],
      '2016': ['cs', 'ast', 'csp', 'ssm', 'dp', 'xb'],
      '2017': ['cs', 'ast', 'csp', 'ssm', 'dp', 'xb'],
      '2018': ['cs', 'ast', 'csp', 'ssm', 'dp', 'xb'],
      '2019': ['cs', 'ast', 'csp', 'ssm', 'dp', 'xb'],
      '2020': ['cs', 'ast', 'csp', 'dp', 'ssm', 'xb'],
      '2021': ['cs', 'ast', 'csp', 'dp', 'ssm', 'xb'],
      '2022': ['cs', 'ast', 'csp', 'dp', 'ssm', 'xb'],
      '2023': ['cs', 'ast', 'csp', 'dp', 'ssm', 'xb'],
      '2024': ['cs', 'ast', 'csp', 'dp', 'ssm', 'xb'],
    },
    'MX-5 Miata First Generation (NA) non-Torsen differential': {
      '1990': ['es', 'est', 'csp', 'ssm', 'dp', 'xb'],
      '1991': ['es', 'est', 'csp', 'ssm', 'dp', 'xb'],
      '1992': ['es', 'est', 'csp', 'ssm', 'dp', 'xb'],
      '1993': ['es', 'est', 'csp', 'ssm', 'dp', 'xb'],
      '1994': ['es', 'est', 'csp', 'ssm', 'dp', 'xb'],
      '1995': ['es', 'est', 'csp', 'ssm', 'dp', 'xb'],
      '1996': ['es', 'est', 'csp', 'ssm', 'dp', 'xb'],
      '1997': ['es', 'est', 'csp', 'ssm', 'dp', 'xb'],
    },
    'MX-5 Miata MS-R': {
      '2007': ['bs', 'ssm', 'xb', 'xp'],
    },
    'MX-6': {
      'all': ['hs', 'dsp', 'ep', 'xp', 'xa', 'sm'],
    },
    'Mazda2': {
      '2011': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm'],
      '2012': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm'],
      '2013': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm'],
      '2014': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm'],
    },
    'Mazda3': {
      '2004': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2005': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2006': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2007': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2008': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2009': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2010': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2011': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2013': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2014': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2015': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2016': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2017': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2018': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2019': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2020': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2021': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2022': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2023': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2024': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Mazda3 Turbo': {
      '2021': ['ds', 'gst', 'xp', 'xa', 'sm'],
      '2022': ['ds', 'gst', 'xp', 'xa', 'sm'],
      '2023': ['ds', 'gst', 'xp', 'xa', 'sm'],
      '2024': ['ds', 'gst', 'xp', 'xa', 'sm'],
      '2025': ['ds', 'gst', 'xp', 'xa', 'sm'],
    },
    'Mazda6': {
      'all': ['hs', 'est', 'dsp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Mazdaspeed3': {
      'all': ['gs', 'gst', 'dsp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Mazdaspeed6': {
      'all': ['ds', 'gst', 'esp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Mazdaspeed Miata': {
      '2004': ['es', 'ast', 'csp', 'ssm', 'fp', 'xb'],
      '2005': ['es', 'ast', 'csp', 'ssm', 'fp', 'xb'],
    },
    'Mazdaspeed Protégé': {
      'all': ['gs', 'gst', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Miata Club Sport': {
      '2003': ['bs', 'ssm', 'dp', 'xp', 'xb', 'ssm'],
    },
    'Millenia': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Protégé': {
      'all': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
    },
    'R100': {
      'all': ['hs', 'fsp', 'xp', 'xa', 'sm'],
    },
    'RX-2': {
      'all': ['hs', 'csp', 'xp', 'xa', 'sm'],
    },
    'RX-3': {
      'all': ['hs', 'csp', 'xp', 'xa', 'sm'],
    },
    'RX-4': {
      'all': ['hs', 'fsp', 'xp', 'xa', 'sm'],
    },
    'RX-7 Non-Turbo': {
      'all': ['es', 'est', 'csp', 'xp', 'xa', 'sm'],
    },
    'RX-7 Turbo': {
      '1986': ['cs', 'cst', 'csp', 'xp', 'xa', 'ssm'],
      '1987': ['cs', 'cst', 'csp', 'xp', 'xa', 'ssm'],
      '1988': ['cs', 'cst', 'csp', 'xp', 'xa', 'ssm'],
      '1989': ['cs', 'cst', 'csp', 'xp', 'xa', 'ssm'],
      '1990': ['cs', 'cst', 'csp', 'xp', 'xa', 'ssm'],
      '1991': ['cs', 'cst', 'csp', 'xp', 'xa', 'ssm'],
      '1992': ['cs', 'cst', 'csp', 'xp', 'xa', 'ssm'],
      '1993': ['as', 'cst', 'ssp', 'xp', 'xa', 'ssm'],
      '1994': ['as', 'cst', 'ssp', 'xp', 'xa', 'ssm'],
      '1995': ['as', 'cst', 'ssp', 'xp', 'xa', 'ssm'],
    },
    'RX-8': {
      'all': ['cs', 'dst', 'dsp', 'xp', 'xa', 'sm'],
    },
    'Spec Miata': {
      'all': ['esp'],
    },
  },
  'McLaren': {
    '570GT': {
      'all': ['ss', 'xp', 'xu', 'ssm'],
    },
    '570S': {
      'all': ['ss', 'xp', 'xu', 'ssm'],
    },
    '600LT (limited prep)': {
      'all': ['ssp', 'xp', 'xa', 'ssm'],
    },
    '620R (limited prep)': {
      'all': ['ssp', 'xp', 'xa', 'ssm'],
    },
    '650S': {
      'all': ['ss', 'xp', 'xu', 'ssm'],
    },
    '720S': {
      'all': ['ssp', 'xp', 'xa', 'ssm'],
    },
    'MP4-12C': {
      'all': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
    },
  },
  'Mercedes': {
    '280': {
      '1995': ['hs', 'xp', 'xa', 'sm'],
      '1996': ['hs', 'xp', 'xa', 'sm'],
      '1997': ['hs', 'xp', 'xa', 'sm'],
      '1998': ['hs', 'xp', 'xa', 'sm'],
      '1999': ['hs', 'xp', 'xa', 'sm'],
      '2000': ['hs', 'xp', 'xa', 'sm'],
    },
    '190 (all, non-16v)': {
      '1984': ['gs', 'esp', 'dp', 'xp', 'xa', 'sm'],
      '1985': ['gs', 'esp', 'dp', 'xp', 'xa', 'sm'],
      '1986': ['gs', 'esp', 'dp', 'xp', 'xa', 'sm'],
      '1987': ['gs', 'esp', 'dp', 'xp', 'xa', 'sm'],
      '1988': ['gs', 'esp', 'dp', 'xp', 'xa', 'sm'],
      '1989': ['gs', 'esp', 'dp', 'xp', 'xa', 'sm'],
      '1990': ['gs', 'esp', 'dp', 'xp', 'xa', 'sm'],
      '1991': ['gs', 'esp', 'dp', 'xp', 'xa', 'sm'],
      '1992': ['gs', 'esp', 'dp', 'xp', 'xa', 'sm'],
      '1993': ['gs', 'esp', 'dp', 'xp', 'xa', 'sm'],
    },
    '190E (16v)': {
      '1983': ['gs', 'csp', 'dp', 'xp', 'xa', 'sm'],
      '1984': ['gs', 'csp', 'dp', 'xp', 'xa', 'sm'],
      '1985': ['gs', 'csp', 'dp', 'xp', 'xa', 'sm'],
      '1986': ['gs', 'csp', 'dp', 'xp', 'xa', 'sm'],
      '1987': ['gs', 'csp', 'dp', 'xp', 'xa', 'sm'],
      '1988': ['gs', 'csp', 'dp', 'xp', 'xa', 'sm'],
      '1989': ['gs', 'csp', 'dp', 'xp', 'xa', 'sm'],
      '1990': ['gs', 'csp', 'dp', 'xp', 'xa', 'sm'],
      '1991': ['gs', 'csp', 'dp', 'xp', 'xa', 'sm'],
      '1992': ['gs', 'csp', 'dp', 'xp', 'xa', 'sm'],
      '1993': ['gs', 'csp', 'dp', 'xp', 'xa', 'sm'],
    },
    '220, 230, 250, & 280 Sedans (all)': {
      'all': ['esp', 'xp', 'xa', 'sm'],
    },
    '230SL, 250SL, & 280SL (all)': {
      'all': ['esp', 'xp', 'xa', 'sm'],
    },
    '280 (4.5L, all) & 300 (6.3, all)': {
      'all': ['esp', 'xp', 'xa', 'sm'],
    },
    '350SL, 380SL, & 450SL (all)': {
      'all': ['esp', 'xp', 'xa', 'sm'],
    },
    'AMG (Not Otherwise Classified)': {
      'all': ['ss', 'ssr', 'xp', 'xu', 'sm'],
    },
    'AMG GT, GTC, GTR, GTS': {
      '2015': ['ss', 'xp', 'xu', 'ssm'],
      '2016': ['ss', 'xp', 'xu', 'ssm'],
      '2017': ['ss', 'xp', 'xu', 'ssm'],
      '2018': ['ss', 'xp', 'xu', 'ssm'],
      '2019': ['ss', 'xp', 'xu', 'ssm'],
      '2020': ['ss', 'xp', 'xu', 'ssm'],
      '2021': ['ss', 'xp', 'xu', 'ssm'],
    },
    'C32 AMG': {
      '2002': ['bs', 'xp', 'xa', 'sm'],
      '2003': ['bs', 'xp', 'xa', 'sm'],
      '2004': ['bs', 'xp', 'xa', 'sm'],
    },
    'C36 AMG': {
      'all': ['fs', 'xp', 'xa', 'sm'],
    },
    'C55 AMG': {
      '2005': ['fs', 'xp', 'xa', 'sm'],
      '2006': ['fs', 'xp', 'xa', 'sm'],
    },
    'C63 AMG (non-Black Series)': {
      '2008': ['fs', 'sst', 'xp', 'xa', 'sm'],
      '2009': ['fs', 'sst', 'xp', 'xa', 'sm'],
      '2010': ['fs', 'sst', 'xp', 'xa', 'sm'],
      '2011': ['fs', 'sst', 'xp', 'xa', 'sm'],
      '2012': ['fs', 'sst', 'xp', 'xa', 'sm'],
      '2013': ['fs', 'sst', 'xp', 'xa', 'sm'],
      '2014': ['fs', 'sst', 'xp', 'xa', 'sm'],
      '2015': ['fs', 'sst', 'xp', 'xa', 'sm'],
      '2016': ['fs', 'sst', 'xp', 'xa', 'sm'],
      '2017': ['fs', 'sst', 'xp', 'xa', 'sm'],
      '2018': ['fs', 'sst', 'xp', 'xa', 'sm'],
      '2019': ['fs', 'sst', 'xp', 'xa', 'sm'],
      '2020': ['fs', 'sst', 'xp', 'xa', 'sm'],
      '2021': ['fs', 'sst', 'xp', 'xa', 'sm'],
    },
    'C230': {
      '1999': ['gs', 'dsp', 'xp', 'xa', 'sm'],
      '2000': ['gs', 'dsp', 'xp', 'xa', 'sm'],
      '2001': ['gs', 'dsp', 'xp', 'xa', 'sm'],
      '2002': ['gs', 'dsp', 'xp', 'xa', 'sm'],
      '2003': ['gs', 'dsp', 'xp', 'xa', 'sm'],
      '2004': ['gs', 'dsp', 'xp', 'xa', 'sm'],
      '2005': ['gs', 'dsp', 'xp', 'xa', 'sm'],
      '2006': ['gs', 'dsp', 'xp', 'xa', 'sm'],
      '2007': ['gs', 'dsp', 'xp', 'xa', 'sm'],
    },
    'C250': {
      '2012': ['gs', 'dsp', 'xp', 'xa', 'sm'],
      '2013': ['gs', 'dsp', 'xp', 'xa', 'sm'],
      '2014': ['gs', 'dsp', 'xp', 'xa', 'sm'],
      '2015': ['gs', 'dsp', 'xp', 'xa', 'sm'],
    },
    'C300': {
      '2007': ['fs', 'xp', 'xa', 'sm'],
      '2008': ['fs', 'xp', 'xa', 'sm'],
      '2009': ['fs', 'xp', 'xa', 'sm'],
      '2010': ['fs', 'xp', 'xa', 'sm'],
      '2011': ['fs', 'xp', 'xa', 'sm'],
      '2012': ['fs', 'xp', 'xa', 'sm'],
      '2013': ['fs', 'xp', 'xa', 'sm'],
      '2014': ['fs', 'xp', 'xa', 'sm'],
      '2015': ['fs', 'xp', 'xa', 'sm'],
      '2016': ['fs', 'xp', 'xa', 'sm'],
      '2017': ['fs', 'xp', 'xa', 'sm'],
      '2018': ['fs', 'xp', 'xa', 'sm'],
      '2019': ['fs', 'xp', 'xa', 'sm'],
      '2020': ['fs', 'xp', 'xa', 'sm'],
    },
    'C450 & C43 AMG': {
      '2015': ['fs', 'xp', 'xa', 'sm'],
      '2016': ['fs', 'xp', 'xa', 'sm'],
      '2017': ['fs', 'xp', 'xa', 'sm'],
      '2018': ['fs', 'xp', 'xa', 'sm'],
      '2019': ['fs', 'xp', 'xa', 'sm'],
      '2020': ['fs', 'xp', 'xa', 'sm'],
    },
    'C-Class (6-cyl, non-AMG)': {
      '2001': ['ds', 'xp', 'xa', 'sm'],
      '2002': ['ds', 'xp', 'xa', 'sm'],
      '2003': ['ds', 'xp', 'xa', 'sm'],
      '2004': ['ds', 'xp', 'xa', 'sm'],
      '2005': ['ds', 'xp', 'xa', 'sm'],
      '2006': ['ds', 'xp', 'xa', 'sm'],
      '2007': ['ds', 'xp', 'xa', 'sm'],
      '2008': ['ds', 'xp', 'xa', 'sm'],
      '2009': ['ds', 'xp', 'xa', 'sm'],
      '2010': ['ds', 'xp', 'xa', 'sm'],
      '2011': ['ds', 'xp', 'xa', 'sm'],
      '2012': ['ds', 'xp', 'xa', 'sm'],
      '2013': ['ds', 'xp', 'xa', 'sm'],
      '2014': ['ds', 'xp', 'xa', 'sm'],
      '2015': ['ds', 'xp', 'xa', 'sm'],
      '2016': ['ds', 'xp', 'xa', 'sm'],
    },
    'CLA45 AMG': {
      '2014': ['bs', 'xp', 'xa', 'sm'],
      '2015': ['bs', 'xp', 'xa', 'sm'],
      '2016': ['bs', 'xp', 'xa', 'sm'],
      '2017': ['bs', 'xp', 'xa', 'sm'],
      '2018': ['bs', 'xp', 'xa', 'sm'],
      '2019': ['bs', 'xp', 'xa', 'sm'],
      '2020': ['bs', 'xp', 'xa', 'sm'],
    },
    'CLA250 4matic': {
      'all': ['ds', 'xp', 'xa', 'sm'],
    },
    'CLA250 (FWD)': {
      'all': ['gs', 'xp', 'xa', 'sm'],
    },
    'CLK55': {
      '2001': ['bst', 'xp', 'xa', 'sm'],
      '2002': ['bst', 'xp', 'xa', 'sm'],
      '2003': ['bst', 'xp', 'xa', 'sm'],
      '2004': ['bst', 'xp', 'xa', 'sm'],
      '2005': ['bst', 'xp', 'xa', 'sm'],
      '2006': ['bst', 'xp', 'xa', 'sm'],
    },
    'CLK55 AMG': {
      '2001': ['bs', 'xp', 'xa', 'sm'],
      '2002': ['bs', 'xp', 'xa', 'sm'],
      '2003': ['bs', 'xp', 'xa', 'sm'],
      '2004': ['bs', 'xp', 'xa', 'sm'],
      '2005': ['bs', 'xp', 'xa', 'sm'],
      '2006': ['bs', 'xp', 'xa', 'sm'],
    },
    'CLK430': {
      '1999': ['bst', 'xp', 'xa', 'sm'],
      '2000': ['bst', 'xp', 'xa', 'sm'],
      '2001': ['bst', 'xp', 'xa', 'sm'],
      '2002': ['bst', 'xp', 'xa', 'sm'],
      '2003': ['bst', 'xp', 'xa', 'sm'],
    },
    'CLK 320 & CLK 32 AMG': {
      'all': ['dsp', 'xp', 'xa', 'sm'],
    },
    'CLK (V6)': {
      '1998': ['ds', 'xp', 'xa', 'sm'],
      '1999': ['ds', 'xp', 'xa', 'sm'],
      '2000': ['ds', 'xp', 'xa', 'sm'],
      '2001': ['ds', 'xp', 'xa', 'sm'],
      '2002': ['ds', 'xp', 'xa', 'sm'],
      '2003': ['ds', 'xp', 'xa', 'sm'],
      '2004': ['ds', 'xp', 'xa', 'sm'],
      '2005': ['ds', 'xp', 'xa', 'sm'],
      '2006': ['ds', 'xp', 'xa', 'sm'],
      '2007': ['ds', 'xp', 'xa', 'sm'],
      '2008': ['ds', 'xp', 'xa', 'sm'],
      '2009': ['ds', 'xp', 'xa', 'sm'],
    },
    'CLK (non-V6)': {
      'all': ['fs', 'xp', 'xa', 'sm'],
    },
    'E55 AMG': {
      'all': ['fs', 'xp', 'xa', 'sm'],
    },
    'E63 AMG': {
      '2010': ['bs', 'dsp', 'xp', 'xa', 'sm'],
      '2011': ['bs', 'dsp', 'xp', 'xa', 'sm'],
      '2012': ['bs', 'dsp', 'xp', 'xa', 'sm'],
      '2013': ['bs', 'dsp', 'xp', 'xa', 'sm'],
      '2014': ['bs', 'dsp', 'xp', 'xa', 'sm'],
      '2015': ['bs', 'dsp', 'xp', 'xa', 'sm'],
      '2016': ['bs', 'dsp', 'xp', 'xa', 'sm'],
      '2017': ['bs', 'xp', 'xa', 'sm'],
      '2018': ['bs', 'xp', 'xa', 'sm'],
      '2019': ['bs', 'xp', 'xa', 'sm'],
      '2020': ['bs', 'xp', 'xa', 'sm'],
      '2021': ['bs', 'xp', 'xa', 'sm'],
    },
    'E550 (non-AMG)': {
      '2014': ['bst', 'xp', 'xa', 'sm'],
      '2015': ['bst', 'xp', 'xa', 'sm'],
      '2016': ['bst', 'xp', 'xa', 'sm'],
    },
    'E Class (W212 chassis; non-AMG)': {
      '2009': ['fs', 'xp', 'xa', 'sm'],
      '2010': ['fs', 'xp', 'xa', 'sm'],
      '2011': ['fs', 'xp', 'xa', 'sm'],
      '2012': ['fs', 'xp', 'xa', 'sm'],
      '2013': ['fs', 'xp', 'xa', 'sm'],
      '2014': ['fs', 'xp', 'xa', 'sm'],
      '2015': ['fs', 'xp', 'xa', 'sm'],
      '2016': ['fs', 'xp', 'xa', 'sm'],
      '2017': ['fs', 'xp', 'xa', 'sm'],
      '2018': ['fs', 'xp', 'xa', 'sm'],
      '2019': ['fs', 'xp', 'xa', 'sm'],
      '2020': ['fs', 'xp', 'xa', 'sm'],
    },
    'EQE Sedan (incl. AMG)': {
      '2023': ['evx'],
      '2024': ['evx'],
    },
    'EQS (incl. AMG)': {
      '2022': ['evx'],
      '2023': ['evx'],
      '2024': ['evx'],
    },
    'GLA45 AMG': {
      '2015': ['bs', 'xp', 'xa', 'sm'],
      '2016': ['bs', 'xp', 'xa', 'sm'],
      '2017': ['bs', 'xp', 'xa', 'sm'],
      '2018': ['bs', 'xp', 'xa', 'sm'],
      '2019': ['bs', 'xp', 'xa', 'sm'],
    },
    'GLA250 4matic': {
      'all': ['ds', 'xp', 'xa', 'sm'],
    },
    'GLA250 (FWD)': {
      'all': ['gs', 'xp', 'xa', 'sm'],
    },
    'GLC63 (incl. S)': {
      'all': ['ss', 'xp', 'xa', 'sm'],
    },
    'Not Otherwise Classified': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'SLK32 AMG': {
      '2002': ['cs', 'xp', 'xa', 'sm'],
      '2003': ['cs', 'xp', 'xa', 'sm'],
      '2004': ['cs', 'xp', 'xa', 'sm'],
    },
    'SLK55 AMG': {
      '2004': ['cs', 'dsp', 'xp', 'xa', 'ssm'],
      '2005': ['cs', 'dsp', 'xp', 'xa', 'ssm'],
      '2006': ['cs', 'dsp', 'xp', 'xa', 'ssm'],
      '2007': ['cs', 'dsp', 'xp', 'xa', 'ssm'],
      '2008': ['cs', 'dsp', 'xp', 'xa', 'ssm'],
      '2009': ['cs', 'dsp', 'xp', 'xa', 'ssm'],
      '2010': ['cs', 'dsp', 'xp', 'xa', 'ssm'],
      '2011': ['cs', 'dsp', 'xp', 'xa', 'ssm'],
      '2012': ['cs', 'xp', 'xa', 'ssm'],
      '2013': ['cs', 'xp', 'xa', 'ssm'],
      '2014': ['cs', 'xp', 'xa', 'ssm'],
      '2015': ['cs', 'xp', 'xa', 'ssm'],
      '2016': ['cs', 'xp', 'xa', 'ssm'],
    },
    'SLK350': {
      '2005': ['cs', 'xp', 'xa', 'ssm'],
      '2006': ['cs', 'xp', 'xa', 'ssm'],
      '2007': ['cs', 'xp', 'xa', 'ssm'],
      '2008': ['cs', 'xp', 'xa', 'ssm'],
      '2009': ['cs', 'xp', 'xa', 'ssm'],
      '2010': ['cs', 'xp', 'xa', 'ssm'],
      '2011': ['cs', 'xp', 'xa', 'ssm'],
      '2012': ['cs', 'xp', 'xa', 'ssm'],
      '2013': ['cs', 'xp', 'xa', 'ssm'],
      '2014': ['cs', 'xp', 'xa', 'ssm'],
      '2015': ['cs', 'xp', 'xa', 'ssm'],
      '2016': ['cs', 'xp', 'xa', 'ssm'],
    },
    'SLK 230 Kompressor': {
      '1996': ['cs', 'cst', 'xp', 'xa', 'ssm'],
      '1997': ['cs', 'cst', 'xp', 'xa', 'ssm'],
      '1998': ['cs', 'cst', 'xp', 'xa', 'ssm'],
      '1999': ['cs', 'cst', 'xp', 'xa', 'ssm'],
      '2000': ['cs', 'cst', 'xp', 'xa', 'ssm'],
      '2001': ['cs', 'cst', 'xp', 'xa', 'ssm'],
      '2002': ['cs', 'cst', 'xp', 'xa', 'ssm'],
      '2003': ['cs', 'cst', 'xp', 'xa', 'ssm'],
      '2004': ['cs', 'cst', 'xp', 'xa', 'ssm'],
    },
    'SLK (Not Otherwise Classified)': {
      'all': ['cs', 'xp', 'xa', 'ssm'],
    },
    'Sedans': {
      'all': ['esp', 'xp', 'xa', 'sm'],
    },
  },
  'Mercury': {
    'Bobcat': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Capri (6-cyl)': {
      '1979': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1980': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1981': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1982': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1983': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1984': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1985': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1986': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1987': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1988': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1989': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1990': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1991': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1992': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1993': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
    },
    'Capri (8-cyl)': {
      '1979': ['fs', 'cp', 'camt', 'xp', 'sm'],
      '1980': ['fs', 'cp', 'camt', 'xp', 'sm'],
      '1981': ['fs', 'cp', 'camt', 'xp', 'sm'],
      '1982': ['fs', 'cp', 'camt', 'xp', 'sm'],
      '1983': ['fs', 'cp', 'camt', 'xp', 'sm'],
      '1984': ['fs', 'cp', 'camt', 'xp', 'sm'],
      '1985': ['fs', 'cp', 'camt', 'xp', 'sm'],
      '1986': ['fs', 'cp', 'camt', 'xp', 'sm'],
      '1987': ['fs', 'cp', 'camt', 'xp', 'sm'],
      '1988': ['fs', 'cp', 'camt', 'xp', 'sm'],
      '1989': ['fs', 'cp', 'camt', 'xp', 'sm'],
      '1990': ['fs', 'cp', 'camt', 'xp', 'sm'],
      '1991': ['fs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1992': ['fs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1993': ['fs', 'esp', 'cp', 'camt', 'xp', 'sm'],
    },
    'Capri (non-US)': {
      '1969': ['hs', 'dp', 'xp', 'xa', 'sm'],
      '1970': ['hs', 'dp', 'xp', 'xa', 'sm'],
      '1971': ['hs', 'dp', 'xp', 'xa', 'sm'],
      '1972': ['hs', 'dp', 'xp', 'xa', 'sm'],
      '1973': ['hs', 'dp', 'xp', 'xa', 'sm'],
      '1974': ['hs', 'dp', 'xp', 'xa', 'sm'],
      '1975': ['hs', 'dp', 'xp', 'xa', 'sm'],
      '1976': ['hs', 'dp', 'xp', 'xa', 'sm'],
      '1977': ['hs', 'dp', 'xp', 'xa', 'sm'],
    },
    'Capri II': {
      '1976': ['fsp', 'xp', 'xa', 'sm'],
      '1977': ['fsp', 'xp', 'xa', 'sm'],
    },
    'Capri Turbo (4-cyl)': {
      '1979': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1980': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1981': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1982': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1983': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1984': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1985': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1986': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1987': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1988': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1989': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1990': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1991': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1992': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1993': ['hs', 'esp', 'cp', 'camt', 'xp', 'sm'],
    },
    'Comet (6-cyl & 8cyl)': {
      '1970': ['cp', 'camt', 'xp', 'sm'],
      '1971': ['cp', 'camt', 'xp', 'sm'],
      '1972': ['cp', 'camt', 'xp', 'sm'],
      '1973': ['cp', 'camt', 'xp', 'sm'],
      '1974': ['cp', 'camt', 'xp', 'sm'],
      '1975': ['cp', 'camt', 'xp', 'sm'],
      '1976': ['cp', 'camt', 'xp', 'sm'],
      '1977': ['cp', 'camt', 'xp', 'sm'],
    },
    'Cougar (4-cyl & V6 non-S/C)': {
      'all': ['hs', 'esp', 'xp', 'xa', 'sm'],
    },
    'Cougar (V8 & V6 Supercharged)': {
      '1989': ['gs', 'esp', 'camt', 'xp', 'sm'],
      '1990': ['gs', 'esp', 'camt', 'xp', 'sm'],
      '1991': ['gs', 'esp', 'camt', 'xp', 'sm'],
      '1992': ['gs', 'esp', 'camt', 'xp', 'sm'],
      '1993': ['gs', 'esp', 'camt', 'xp', 'sm'],
      '1994': ['gs', 'esp', 'camt', 'xp', 'sm'],
      '1995': ['gs', 'esp', 'camt', 'xp', 'sm'],
      '1996': ['gs', 'esp', 'camt', 'xp', 'sm'],
      '1997': ['gs', 'esp', 'camt', 'xp', 'sm'],
    },
    'Cougar (V8)': {
      '1967': ['fs', 'esp', 'camt', 'xp', 'sm'],
      '1968': ['fs', 'esp', 'camt', 'xp', 'sm'],
      '1969': ['fs', 'esp', 'camt', 'xp', 'sm'],
      '1970': ['fs', 'esp', 'camt', 'xp', 'sm'],
      '1971': ['fs', 'esp', 'camt', 'xp', 'sm'],
      '1972': ['fs', 'esp', 'camt', 'xp', 'sm'],
      '1973': ['fs', 'esp', 'camt', 'xp', 'sm'],
      '1974': ['fs', 'esp', 'camt', 'xp', 'sm'],
      '1975': ['fs', 'esp', 'camt', 'xp', 'sm'],
      '1976': ['fs', 'esp', 'camt', 'xp', 'sm'],
      '1977': ['fs', 'esp', 'camt', 'xp', 'sm'],
      '1978': ['fs', 'esp', 'camt', 'xp', 'sm'],
      '1979': ['fs', 'esp', 'camt', 'xp', 'sm'],
      '1980': ['fs', 'esp', 'camt', 'xp', 'sm'],
      '1981': ['fs', 'esp', 'camt', 'xp', 'sm'],
      '1982': ['fs', 'esp', 'camt', 'xp', 'sm'],
      '1983': ['fs', 'esp', 'camt', 'xp', 'sm'],
      '1984': ['fs', 'esp', 'camt', 'xp', 'sm'],
      '1985': ['fs', 'esp', 'camt', 'xp', 'sm'],
      '1986': ['fs', 'esp', 'camt', 'xp', 'sm'],
      '1987': ['fs', 'esp', 'camt', 'xp', 'sm'],
      '1988': ['fs', 'esp', 'camt', 'xp', 'sm'],
    },
    'LN-7': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Lynx': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Milan': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Milan (6-cyl)': {
      '2006': ['dsp', 'xp', 'xa', 'sm'],
      '2007': ['dsp', 'xp', 'xa', 'sm'],
      '2008': ['dsp', 'xp', 'xa', 'sm'],
      '2009': ['dsp', 'xp', 'xa', 'sm'],
      '2010': ['dsp', 'xp', 'xa', 'sm'],
      '2011': ['dsp', 'xp', 'xa', 'sm'],
      '2012': ['dsp', 'xp', 'xa', 'sm'],
      '2013': ['dsp', 'xp', 'xa', 'sm'],
    },
    'Montego': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Mystique': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Sable': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Scorpio': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Topaz': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Tracer': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
  },
  'Mini': {
    'Clubman (non-S, non-JCW)': {
      '2008': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2009': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2010': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2011': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2013': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2014': ['hs', 'xp', 'xa', 'sm', 'smf'],
    },
    'Clubman John Cooper WorksAll4': {
      '2017': ['ds', 'xp', 'xa', 'sm', 'smf'],
      '2018': ['ds', 'xp', 'xa', 'sm', 'smf'],
      '2019': ['ds', 'xp', 'xa', 'sm', 'smf'],
      '2020': ['ds', 'xp', 'xa', 'sm', 'smf'],
      '2021': ['ds', 'xp', 'xa', 'sm', 'smf'],
      '2022': ['ds', 'xp', 'xa', 'sm', 'smf'],
      '2023': ['ds', 'xp', 'xa', 'sm', 'smf'],
    },
    'Cooper (non-S)': {
      '2000': ['est', 'xp', 'xb', 'sm', 'smf'],
      '2001': ['est', 'xp', 'xb', 'sm', 'smf'],
      '2002': ['est', 'xp', 'xb', 'sm', 'smf'],
      '2003': ['est', 'xp', 'xb', 'sm', 'smf'],
      '2004': ['est', 'xp', 'xb', 'sm', 'smf'],
      '2005': ['est', 'xp', 'xb', 'sm', 'smf'],
      '2006': ['est', 'xp', 'xb', 'sm', 'smf'],
      '2007': ['est', 'xp', 'xb', 'sm', 'smf'],
      '2008': ['est', 'xp', 'xb', 'sm', 'smf'],
      '2009': ['est', 'xp', 'xb', 'sm', 'smf'],
      '2010': ['est', 'xp', 'xb', 'sm', 'smf'],
      '2011': ['est', 'xp', 'xb', 'sm', 'smf'],
      '2012': ['est', 'xp', 'xb', 'sm', 'smf'],
      '2013': ['est', 'xp', 'xb', 'sm', 'smf'],
      '2014': ['bst', 'xp', 'xb', 'sm', 'smf'],
      '2015': ['bst', 'xp', 'xb', 'sm', 'smf'],
      '2016': ['bst', 'xp', 'xb', 'sm', 'smf'],
      '2017': ['bst', 'xp', 'xb', 'sm', 'smf'],
      '2018': ['bst', 'xp', 'xb', 'sm', 'smf'],
      '2019': ['bst', 'xp', 'xb', 'sm', 'smf'],
    },
    'Cooper Clubman (non-S, non-JCW)': {
      '2016': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2017': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2018': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2019': ['hs', 'xp', 'xa', 'sm', 'smf'],
    },
    'Cooper Clubman JCW': {
      '2009': ['ds', 'xp', 'xa', 'sm', 'smf'],
      '2010': ['ds', 'xp', 'xa', 'sm', 'smf'],
      '2011': ['ds', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['ds', 'xp', 'xa', 'sm', 'smf'],
      '2013': ['ds', 'xp', 'xa', 'sm', 'smf'],
      '2014': ['ds', 'xp', 'xa', 'sm', 'smf'],
    },
    'Cooper Clubman S': {
      '2008': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2009': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2010': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2011': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2012': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2013': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2014': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2016': ['gs', 'xp', 'xb', 'sm', 'smf'],
      '2017': ['gs', 'xp', 'xb', 'sm', 'smf'],
      '2018': ['gs', 'xp', 'xb', 'sm', 'smf'],
      '2019': ['gs', 'xp', 'xb', 'sm', 'smf'],
      '2020': ['gs', 'xp', 'xb', 'sm', 'smf'],
      '2021': ['gs', 'xp', 'xb', 'sm', 'smf'],
      '2022': ['gs', 'xp', 'xb', 'sm', 'smf'],
      '2023': ['gs', 'xp', 'xb', 'sm', 'smf'],
    },
    'Cooper Coupe (non-S, non-JCW)': {
      '2012': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2013': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2014': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2015': ['hs', 'xp', 'xb', 'sm', 'smf'],
    },
    'Cooper Coupe JCW': {
      '2013': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2014': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2015': ['ds', 'xp', 'xb', 'sm', 'smf'],
    },
    'Cooper Coupe S': {
      '2013': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2014': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2015': ['ds', 'xp', 'xb', 'sm', 'smf'],
    },
    'Cooper Hardtop (non-S, non-JCW)': {
      '2002': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2003': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2004': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2005': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2006': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2007': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2008': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2009': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2010': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2011': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2012': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2013': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2014': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2015': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2016': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2017': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2018': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2019': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2020': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2021': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2022': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2023': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2024': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2025': ['hs', 'xp', 'xb', 'sm', 'smf'],
    },
    'Cooper Hardtop JCW': {
      '2006': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2007': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2008': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2009': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2010': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2011': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2012': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2013': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2014': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2015': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2016': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2017': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2018': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2019': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2020': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2021': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2022': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2023': ['ds', 'xp', 'xb', 'sm', 'smf'],
    },
    'Cooper Hardtop S': {
      '2002': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2003': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2004': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2005': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2006': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2007': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2008': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2009': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2010': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2011': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2012': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2013': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2014': ['gs', 'xp', 'xb', 'sm', 'smf'],
      '2015': ['gs', 'xp', 'xb', 'sm', 'smf'],
      '2016': ['gs', 'xp', 'xb', 'sm', 'smf'],
      '2017': ['gs', 'xp', 'xb', 'sm', 'smf'],
      '2018': ['gs', 'xp', 'xb', 'sm', 'smf'],
      '2019': ['gs', 'xp', 'xb', 'sm', 'smf'],
      '2020': ['gs', 'xp', 'xb', 'sm', 'smf'],
      '2021': ['gs', 'xp', 'xb', 'sm', 'smf'],
      '2022': ['gs', 'xp', 'xb', 'sm', 'smf'],
      '2023': ['gs', 'xp', 'xb', 'sm', 'smf'],
      '2024': ['gs', 'xp', 'xb', 'sm', 'smf'],
      '2025': ['gs', 'xp', 'xb', 'sm', 'smf'],
    },
    'Cooper Roadster (non-S, non-JCW)': {
      '2012': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2013': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2014': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2015': ['hs', 'xp', 'xb', 'sm', 'smf'],
    },
    'Cooper Roadster JCW': {
      '2012': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2013': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2014': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2015': ['ds', 'xp', 'xb', 'sm', 'smf'],
    },
    'Cooper Roadster S': {
      '2012': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2013': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2014': ['ds', 'xp', 'xb', 'sm', 'smf'],
      '2015': ['ds', 'xp', 'xb', 'sm', 'smf'],
    },
    'Cooper S & Cooper S JCW': {
      '2001': ['dst', 'xp', 'xb', 'sm', 'smf'],
      '2002': ['dst', 'xp', 'xb', 'sm', 'smf'],
      '2003': ['dst', 'xp', 'xb', 'sm', 'smf'],
      '2004': ['dst', 'xp', 'xb', 'sm', 'smf'],
      '2005': ['dst', 'xp', 'xb', 'sm', 'smf'],
      '2006': ['dst', 'xp', 'xb', 'sm', 'smf'],
      '2007': ['bst', 'xp', 'xb', 'sm', 'smf'],
      '2008': ['bst', 'xp', 'xb', 'sm', 'smf'],
      '2009': ['bst', 'xp', 'xb', 'sm', 'smf'],
      '2010': ['bst', 'xp', 'xb', 'sm', 'smf'],
      '2011': ['bst', 'xp', 'xb', 'sm', 'smf'],
      '2012': ['bst', 'xp', 'xb', 'sm', 'smf'],
      '2013': ['bst', 'xp', 'xb', 'sm', 'smf'],
      '2014': ['bst', 'xp', 'xb', 'sm', 'smf'],
      '2015': ['bst', 'xp', 'xb', 'sm', 'smf'],
      '2016': ['bst', 'xp', 'xb', 'sm', 'smf'],
      '2017': ['bst', 'xp', 'xb', 'sm', 'smf'],
      '2018': ['bst', 'xp', 'xb', 'sm', 'smf'],
      '2019': ['bst', 'xp', 'xb', 'sm', 'smf'],
    },
    'Cooper S (including JCW & JCWGP except Countryman)': {
      'all': ['bs', 'dsp', 'xp', 'xb', 'sm', 'smf'],
    },
    'Cooper SE': {
      '2020': ['gs', 'xp', 'xb', 'sm', 'smf', 'evx'],
      '2021': ['gs', 'xp', 'xb', 'sm', 'smf', 'evx'],
      '2022': ['gs', 'xp', 'xb', 'sm', 'smf', 'evx'],
      '2023': ['gs', 'xp', 'xb', 'sm', 'smf', 'evx'],
      '2024': ['gs', 'xp', 'xb', 'sm', 'smf', 'evx'],
    },
    'Countryman JCW All4': {
      '2018': ['ds', 'xp', 'xa', 'sm', 'smf'],
      '2019': ['ds', 'xp', 'xa', 'sm', 'smf'],
      '2020': ['ds', 'xp', 'xa', 'sm', 'smf'],
      '2021': ['ds', 'xp', 'xa', 'sm', 'smf'],
      '2022': ['ds', 'xp', 'xa', 'sm', 'smf'],
      '2023': ['ds', 'xp', 'xa', 'sm', 'smf'],
    },
  },
  'Mitsubishi': {
    '3000 GT (non-turbo)': {
      'all': ['hs', 'esp', 'xp', 'xa', 'sm'],
    },
    '3000 GT Turbo': {
      'all': ['fs', 'dsp', 'xp', 'xa', 'sm'],
    },
    'Cordia': {
      'all': ['hs', 'fsp', 'ep', 'xp', 'xa', 'sm'],
    },
    'Eclipse Turbo (AWD)': {
      'all': ['ds', 'gst', 'dsp', 'fp', 'xp', 'xa', 'sm'],
    },
    'Eclipse V6': {
      '1999': ['hs', 'dst', 'dsp', 'xp', 'xa', 'sm'],
      '2000': ['hs', 'dst', 'dsp', 'xp', 'xa', 'sm'],
      '2001': ['hs', 'dst', 'dsp', 'xp', 'xa', 'sm'],
      '2002': ['hs', 'dst', 'dsp', 'xp', 'xa', 'sm'],
      '2003': ['hs', 'dst', 'dsp', 'xp', 'xa', 'sm'],
      '2004': ['hs', 'dst', 'dsp', 'xp', 'xa', 'sm'],
      '2005': ['hs', 'dst', 'dsp', 'xp', 'xa', 'sm'],
      '2006': ['hs', 'dst', 'dsp', 'xp', 'xa', 'sm'],
      '2007': ['hs', 'dst', 'dsp', 'xp', 'xa', 'sm'],
      '2008': ['hs', 'dst', 'dsp', 'xp', 'xa', 'sm'],
      '2009': ['hs', 'dst', 'dsp', 'xp', 'xa', 'sm'],
      '2010': ['hs', 'dst', 'dsp', 'xp', 'xa', 'sm'],
      '2011': ['hs', 'dst', 'dsp', 'xp', 'xa', 'sm'],
      '2012': ['hs', 'dst', 'dsp', 'xp', 'xa', 'sm'],
    },
    'Eclipse all (FWD)': {
      '1989': ['hs', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
      '1990': ['hs', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
      '1991': ['hs', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
      '1992': ['hs', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
      '1993': ['hs', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
      '1994': ['hs', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
      '1995': ['hs', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
      '1996': ['hs', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
      '1997': ['hs', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
      '1998': ['hs', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
      '1999': ['hs', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
      '2000': ['hs', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
      '2001': ['hs', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
      '2002': ['hs', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
      '2003': ['hs', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
      '2004': ['hs', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
      '2005': ['hs', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
      '2006': ['hs', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
      '2007': ['hs', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
      '2008': ['hs', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
      '2009': ['hs', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
      '2010': ['hs', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
      '2011': ['hs', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['hs', 'dsp', 'fp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Galant (4-cyl non-turbo)': {
      'all': ['hs', 'dsp', 'ep', 'xp', 'xa', 'sm'],
    },
    'Galant (V6 & 4-cyl Turbo)': {
      'all': ['gs', 'dsp', 'xp', 'xa', 'sm'],
    },
    'Lancer (non-turbo)': {
      'all': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm'],
    },
    'Lancer Evolution': {
      '2003': ['ds', 'bst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2004': ['ds', 'bst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2005': ['ds', 'bst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2006': ['ds', 'bst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2007': ['ds', 'bst', 'ssp', 'xp', 'xa', 'sm'],
      '2008': ['ds', 'bst', 'ssp', 'xp', 'xa', 'sm'],
      '2009': ['ds', 'bst', 'ssp', 'xp', 'xa', 'sm'],
      '2010': ['ds', 'bst', 'ssp', 'xp', 'xa', 'sm'],
      '2011': ['ds', 'bst', 'ssp', 'xp', 'xa', 'sm'],
      '2012': ['ds', 'bst', 'ssp', 'xp', 'xa', 'sm'],
      '2013': ['ds', 'bst', 'ssp', 'xp', 'xa', 'sm'],
      '2014': ['ds', 'bst', 'xp', 'xa', 'sm'],
      '2015': ['ds', 'bst', 'xp', 'xa', 'sm'],
    },
    'Lancer Ralliart': {
      '2009': ['ds', 'gst', 'xp', 'xa', 'sm'],
      '2010': ['ds', 'gst', 'xp', 'xa', 'sm'],
      '2011': ['ds', 'xp', 'xa', 'sm'],
      '2012': ['ds', 'xp', 'xa', 'sm'],
      '2013': ['ds', 'xp', 'xa', 'sm'],
      '2014': ['ds', 'xp', 'xa', 'sm'],
      '2015': ['ds', 'xp', 'xa', 'sm'],
    },
    'Mirage (non-turbo)': {
      '1978': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1979': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1980': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1981': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1982': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1983': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1984': ['hs', 'fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1985': ['hs', 'fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1986': ['hs', 'fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1987': ['hs', 'fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1988': ['hs', 'fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1989': ['hs', 'fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1990': ['hs', 'fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1991': ['hs', 'fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1992': ['hs', 'fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1993': ['hs', 'fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1994': ['hs', 'fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1995': ['hs', 'fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1996': ['hs', 'fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1997': ['hs', 'fsp', 'xp', 'xb', 'sm', 'smf'],
      '1998': ['hs', 'fsp', 'xp', 'xb', 'sm', 'smf'],
      '1999': ['hs', 'fsp', 'xp', 'xb', 'sm', 'smf'],
      '2000': ['hs', 'fsp', 'xp', 'xb', 'sm', 'smf'],
      '2001': ['hs', 'fsp', 'xp', 'xb', 'sm', 'smf'],
      '2002': ['hs', 'fsp', 'xp', 'xb', 'sm', 'smf'],
      '2003': ['hs', 'fsp', 'xp', 'xb', 'sm', 'smf'],
    },
    'Mirage Turbo': {
      '1978': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1979': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1980': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1981': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1982': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1983': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1984': ['hs', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1985': ['hs', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1986': ['hs', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1987': ['hs', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1988': ['hs', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1989': ['hs', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1990': ['hs', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1991': ['hs', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1992': ['hs', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1993': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1994': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1995': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1996': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1997': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1998': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1999': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '2000': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '2001': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '2002': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '2003': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
    },
    'Precis': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Premier': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Starion (non-turbo)': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Starion Turbo': {
      'all': ['gs', 'esp', 'fp', 'xp', 'xa', 'sm'],
    },
    'Tredia (non-turbo)': {
      'all': ['hs', 'fsp', 'xp', 'xb', 'sm', 'smf'],
    },
    'Tredia Turbo': {
      'all': ['hs', 'dsp', 'xp', 'xb', 'sm', 'smf'],
    },
  },
  'Morgan': {
    '4/4': {
      'all': ['es', 'csp', 'dp', 'xp', 'xb', 'ssm'],
    },
    'Plus 4': {
      'all': ['es', 'fsp', 'xp', 'xb', 'sm'],
    },
    'Plus 8': {
      'all': ['as', 'fp', 'xp', 'xb', 'sm'],
    },
    'Roadster (V6)': {
      'all': ['as', 'xp', 'xb', 'ssm'],
    },
    'V8 (all)': {
      'all': ['ssp', 'xp', 'xa', 'sm'],
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
      'all': ['dst'],
    },
    'Sedans & Coupes (over 5.1L normally aspirated or 2.5L to 3.1L forced induction)': {
      'all': ['bst'],
    },
    'Sedans & Coupes NOC (non-sports-car-based; 4-seat mini-mum; less than 2.5L (2500cc) forced-induction)': {
      'all': ['gst'],
    },
    'Sedans & Coupes NOC (non-sports-car-based; 4-seat mini-mum; less than 3.1L (3100cc) normally-aspirated)': {
      'all': ['est'],
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
      'all': ['fs', 'dst'],
    },
    'V8 sedans, pick-ups, and sedan-derived convertibles (over 5.1L NA)': {
      'all': ['fs', 'bst'],
    },
  },
  'Nissan': {
    '200SX': {
      '1987': ['esp', 'hs', 'dp', 'fsp', 'xp', 'xa', 'sm'],
      '1988': ['esp', 'hs', 'dp', 'fsp', 'xp', 'xa', 'sm'],
      '1989': ['esp', 'hs', 'xp', 'xa', 'sm'],
      '1990': ['esp', 'hs', 'xp', 'xa', 'sm'],
      '1991': ['esp', 'hs', 'xp', 'xa', 'sm'],
      '1992': ['esp', 'hs', 'xp', 'xa', 'sm'],
      '1993': ['esp', 'hs', 'xp', 'xa', 'sm'],
      '1994': ['esp', 'hs', 'xp', 'xa', 'sm'],
      '1995': ['esp', 'hs', 'ep', 'est', 'xp', 'xa', 'sm'],
      '1996': ['esp', 'hs', 'ep', 'est', 'xp', 'xa', 'sm'],
      '1997': ['esp', 'hs', 'ep', 'est', 'xp', 'xa', 'sm'],
      '1998': ['esp', 'hs', 'ep', 'est', 'xp', 'xa', 'sm'],
      '1999': ['esp', 'hs', 'ep', 'xp', 'xa', 'sm'],
      '2000': ['esp', 'hs', 'xp', 'xa', 'sm'],
      '2001': ['esp', 'hs', 'xp', 'xa', 'sm'],
      '2002': ['esp', 'hs', 'xp', 'xa', 'sm'],
    },
    '240SX': {
      '1988': ['hs', 'dst', 'esp', 'xp', 'xa', 'sm'],
      '1989': ['hs', 'dst', 'esp', 'dp', 'xp', 'xa', 'sm'],
      '1990': ['hs', 'dst', 'esp', 'dp', 'xp', 'xa', 'sm'],
      '1991': ['hs', 'dst', 'esp', 'dp', 'xp', 'xa', 'sm'],
      '1992': ['hs', 'dst', 'esp', 'dp', 'xp', 'xa', 'sm'],
      '1993': ['hs', 'dst', 'esp', 'dp', 'xp', 'xa', 'sm'],
      '1994': ['hs', 'dst', 'esp', 'dp', 'xp', 'xa', 'sm'],
      '1995': ['hs', 'dst', 'esp', 'dp', 'xp', 'xa', 'sm'],
      '1996': ['hs', 'dst', 'esp', 'dp', 'xp', 'xa', 'sm'],
      '1997': ['hs', 'dst', 'esp', 'dp', 'xp', 'xa', 'sm'],
      '1998': ['hs', 'dst', 'esp', 'dp', 'xp', 'xa', 'sm'],
    },
    '280ZX': {
      'all': ['dsp', 'xp', 'xa', 'sm'],
    },
    '280ZX Turbo': {
      'all': ['dsp', 'xp', 'xa', 'sm'],
    },
    '300ZX (Z31 chassis) - Alternate part: headlight covers': {
      '1984': ['fp', 'xp', 'xa', 'sm'],
      '1985': ['fp', 'xp', 'xa', 'sm'],
      '1986': ['fp', 'xp', 'xa', 'sm'],
      '1987': ['fp', 'xp', 'xa', 'sm'],
      '1988': ['fp', 'xp', 'xa', 'sm'],
      '1989': ['fp', 'xp', 'xa', 'sm'],
    },
    '300ZX (Z32 chassis; non-turbo) - Alternate part: rear facing hood scoop (3.5\' max height)': {
      '1990': ['fp', 'xp', 'xa', 'sm'],
      '1991': ['fp', 'xp', 'xa', 'sm'],
      '1992': ['fp', 'xp', 'xa', 'sm'],
      '1993': ['fp', 'xp', 'xa', 'sm'],
      '1994': ['fp', 'xp', 'xa', 'sm'],
      '1995': ['fp', 'xp', 'xa', 'sm'],
      '1996': ['fp', 'xp', 'xa', 'sm'],
    },
    '300ZX (non-turbo)': {
      '1984': ['hs', 'bst', 'dst', 'esp', 'xp', 'xa', 'sm'],
      '1985': ['hs', 'bst', 'dst', 'esp', 'xp', 'xa', 'sm'],
      '1986': ['hs', 'bst', 'dst', 'esp', 'xp', 'xa', 'sm'],
      '1987': ['hs', 'bst', 'dst', 'esp', 'xp', 'xa', 'sm'],
      '1988': ['hs', 'bst', 'dst', 'esp', 'xp', 'xa', 'sm'],
      '1989': ['hs', 'bst', 'dst', 'esp', 'xp', 'xa', 'sm'],
      '1990': ['fs', 'esp', 'xp', 'xa', 'sm'],
      '1991': ['fs', 'esp', 'xp', 'xa', 'sm'],
      '1992': ['fs', 'esp', 'xp', 'xa', 'sm'],
      '1993': ['fs', 'esp', 'xp', 'xa', 'sm'],
      '1994': ['fs', 'esp', 'xp', 'xa', 'sm'],
      '1995': ['fs', 'esp', 'xp', 'xa', 'sm'],
      '1996': ['fs', 'esp', 'xp', 'xa', 'sm'],
    },
    '300ZX Turbo': {
      '1984': ['fs', 'dsp', 'xp', 'xa', 'sm'],
      '1985': ['fs', 'dsp', 'xp', 'xa', 'sm'],
      '1986': ['fs', 'dsp', 'xp', 'xa', 'sm'],
      '1987': ['fs', 'dsp', 'xp', 'xa', 'sm'],
      '1988': ['fs', 'dsp', 'xp', 'xa', 'sm'],
      '1989': ['fs', 'dsp', 'xp', 'xa', 'sm'],
      '1990': ['cs', 'dsp', 'xp', 'xa', 'sm'],
      '1991': ['cs', 'dsp', 'xp', 'xa', 'sm'],
      '1992': ['cs', 'dsp', 'xp', 'xa', 'sm'],
      '1993': ['cs', 'dsp', 'xp', 'xa', 'sm'],
      '1994': ['cs', 'dsp', 'xp', 'xa', 'sm'],
      '1995': ['cs', 'dsp', 'xp', 'xa', 'sm'],
      '1996': ['cs', 'dsp', 'xp', 'xa', 'sm'],
    },
    '350Z (non-NISMO)': {
      '2002': ['fs', 'dsp', 'bst', 'xp', 'xa', 'sm'],
      '2003': ['fs', 'dsp', 'bst', 'fp', 'xp', 'xa', 'sm'],
      '2004': ['fs', 'dsp', 'bst', 'fp', 'xp', 'xa', 'sm'],
      '2005': ['fs', 'dsp', 'bst', 'fp', 'xp', 'xa', 'sm'],
      '2006': ['fs', 'dsp', 'bst', 'fp', 'xp', 'xa', 'sm'],
      '2007': ['fs', 'dsp', 'bst', 'fp', 'xp', 'xa', 'sm'],
      '2008': ['fs', 'dsp', 'bst', 'fp', 'xp', 'xa', 'sm'],
      '2009': ['fs', 'dsp', 'bst', 'fp', 'xp', 'xa', 'sm'],
    },
    '350Z NISMO': {
      '2004': ['cs', 'xp', 'xa', 'sm'],
      '2005': ['cs', 'xp', 'xa', 'sm'],
      '2006': ['cs', 'xp', 'xa', 'sm'],
      '2007': ['cs', 'xp', 'xa', 'sm'],
      '2008': ['cs', 'xp', 'xa', 'sm'],
    },
    '370Z (non-NISMO)': {
      '2009': ['bst', 'dsp', 'fp', 'fs', 'xp', 'xa', 'sm'],
      '2010': ['bst', 'dsp', 'fp', 'fs', 'xp', 'xa', 'sm'],
      '2011': ['bst', 'dsp', 'fp', 'fs', 'xp', 'xa', 'sm'],
      '2012': ['bst', 'dsp', 'fp', 'fs', 'xp', 'xa', 'sm'],
      '2013': ['bst', 'dsp', 'fp', 'fs', 'xp', 'xa', 'sm'],
      '2014': ['bst', 'dsp', 'fp', 'fs', 'xp', 'xa', 'sm'],
      '2015': ['bst', 'dsp', 'fp', 'fs', 'xp', 'xa', 'sm'],
      '2016': ['bst', 'dsp', 'fp', 'fs', 'xp', 'xa', 'sm'],
      '2017': ['bst', 'dsp', 'fp', 'fs', 'xp', 'xa', 'sm'],
      '2018': ['bst', 'dsp', 'fs', 'xp', 'xa', 'sm'],
      '2019': ['bst', 'fs', 'xp', 'xa', 'sm'],
      '2020': ['bst', 'fs', 'xp', 'xa', 'sm'],
    },
    '370Z NISMO': {
      '2009': ['cs', 'bst', 'xp', 'xa', 'sm'],
      '2010': ['cs', 'bst', 'xp', 'xa', 'sm'],
      '2011': ['cs', 'bst', 'xp', 'xa', 'sm'],
      '2012': ['cs', 'bst', 'xp', 'xa', 'sm'],
      '2013': ['cs', 'bst', 'xp', 'xa', 'sm'],
      '2014': ['cs', 'bst', 'xp', 'xa', 'sm'],
      '2015': ['cs', 'bst', 'xp', 'xa', 'sm'],
      '2016': ['cs', 'bst', 'xp', 'xa', 'sm'],
      '2017': ['cs', 'bst', 'xp', 'xa', 'sm'],
      '2018': ['cs', 'bst', 'xp', 'xa', 'sm'],
      '2019': ['cs', 'bst', 'xp', 'xa', 'sm'],
      '2020': ['cs', 'bst', 'xp', 'xa', 'sm'],
    },
    '720 (2WD)': {
      '1980': ['dp', 'xp', 'xa', 'sm'],
      '1981': ['dp', 'xp', 'xa', 'sm'],
      '1982': ['dp', 'xp', 'xa', 'sm'],
      '1983': ['dp', 'xp', 'xa', 'sm'],
      '1984': ['dp', 'xp', 'xa', 'sm'],
      '1985': ['dp', 'xp', 'xa', 'sm'],
      '1986': ['dp', 'xp', 'xa', 'sm'],
    },
    'Altima': {
      'all': ['hs', 'sm', 'xp', 'xa', 'sm'],
    },
    'Ariya': {
      '2023': ['evx'],
      '2024': ['evx'],
    },
    'GT-R (R35)': {
      'all': ['ssp', 'xp', 'xa', 'sm'],
    },
    'GT-R (excluding NISMO & Track Edition)': {
      '2009': ['as', 'sst', 'xp', 'xu', 'sm'],
      '2010': ['as', 'sst', 'xp', 'xu', 'sm'],
      '2011': ['as', 'sst', 'xp', 'xu', 'sm'],
      '2012': ['as', 'sst', 'xp', 'xu', 'sm'],
      '2013': ['as', 'sst', 'xp', 'xu', 'sm'],
      '2014': ['as', 'sst', 'xp', 'xu', 'sm'],
      '2015': ['as', 'sst', 'xp', 'xu', 'sm'],
      '2016': ['as', 'sst', 'xp', 'xu', 'sm'],
      '2017': ['as', 'sst', 'xp', 'xu', 'sm'],
      '2018': ['as', 'sst', 'xp', 'xu', 'sm'],
      '2019': ['as', 'sst', 'xp', 'xu', 'sm'],
      '2020': ['as', 'sst', 'xp', 'xu', 'sm'],
      '2021': ['as', 'sst', 'xp', 'xu', 'sm'],
      '2022': ['as', 'sst', 'xp', 'xu', 'sm'],
      '2023': ['as', 'sst', 'xp', 'xu', 'sm'],
      '2024': ['as', 'sst', 'xp', 'xu', 'sm'],
    },
    'Juke': {
      '2011': ['gst', 'xp', 'xa', 'sm'],
      '2012': ['gst', 'xp', 'xa', 'sm'],
      '2013': ['gst', 'xp', 'xa', 'sm'],
      '2014': ['gst', 'xp', 'xa', 'sm'],
      '2015': ['gst', 'xp', 'xa', 'sm'],
      '2016': ['gst', 'xp', 'xa', 'sm'],
    },
    'Leaf': {
      '2011': ['hs', 'xp', 'xa', 'sm', 'evx'],
      '2012': ['hs', 'xp', 'xa', 'sm', 'evx'],
      '2013': ['hs', 'xp', 'xa', 'sm', 'evx'],
      '2014': ['hs', 'xp', 'xa', 'sm', 'evx'],
      '2015': ['hs', 'xp', 'xa', 'sm', 'evx'],
      '2016': ['hs', 'xp', 'xa', 'sm', 'evx'],
      '2017': ['hs', 'xp', 'xa', 'sm', 'evx'],
      '2018': ['hs', 'xp', 'xa', 'sm', 'evx'],
      '2019': ['hs', 'xp', 'xa', 'sm', 'evx'],
      '2020': ['hs', 'xp', 'xa', 'sm', 'evx'],
      '2021': ['hs', 'xp', 'xa', 'sm', 'evx'],
      '2022': ['hs', 'xp', 'xa', 'sm', 'evx'],
      '2023': ['hs', 'xp', 'xa', 'sm', 'evx'],
      '2024': ['hs', 'xp', 'xa', 'sm', 'evx'],
    },
    'Maxima': {
      'all': ['hs', 'xp', 'xa', 'esp', 'sm'],
    },
    'NX1600': {
      'all': ['hs', 'fsp', 'xp', 'xb', 'sm', 'smf'],
    },
    'NX2000': {
      '1991': ['fsp', 'hs', 'est', 'xp', 'xb', 'sm', 'smf'],
      '1992': ['fsp', 'hs', 'est', 'xp', 'xb', 'sm', 'smf'],
      '1993': ['fsp', 'hs', 'est', 'xp', 'xb', 'sm', 'smf'],
      '1994': ['fsp', 'est', 'xp', 'xb', 'sm', 'smf'],
    },
    'NX (B13 chassis)': {
      '1991': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1992': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1993': ['ep', 'xp', 'xb', 'sm', 'smf'],
    },
    'Pulsar': {
      'all': ['hs', 'fsp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Pulsar & Pulsar NX (non-turbo)': {
      'all': ['fsp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Pulsar (N13 chassis; 16v) - Alternate cylinder head: 11041-15M00 Alternate engine: A14': {
      '1987': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1988': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1989': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1990': ['ep', 'xp', 'xa', 'sm', 'smf'],
    },
    'Sedan (N/A, FWD, Not Otherwise Classified)': {
      'all': ['ep', 'xp', 'xa', 'sm'],
    },
    'Sentra': {
      'all': ['hs', 'fsp', 'sm', 'xp', 'xa', 'sm', 'smf'],
    },
    'Sentra (1.6L)': {
      '1991': ['est', 'xp', 'xa', 'sm', 'smf'],
      '1992': ['est', 'xp', 'xa', 'sm', 'smf'],
      '1993': ['est', 'xp', 'xa', 'sm', 'smf'],
      '1994': ['est', 'xp', 'xa', 'sm', 'smf'],
      '1995': ['est', 'xp', 'xa', 'sm', 'smf'],
      '1996': ['est', 'xp', 'xa', 'sm', 'smf'],
      '1997': ['est', 'xp', 'xa', 'sm', 'smf'],
      '1998': ['est', 'xp', 'xa', 'sm', 'smf'],
      '1999': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2000': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2001': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2002': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2003': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2004': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2005': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2006': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2007': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2008': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2009': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2010': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2011': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['est', 'xp', 'xa', 'sm', 'smf'],
    },
    'Sentra (1.8L)': {
      '1991': ['est', 'xp', 'xa', 'sm', 'smf'],
      '1992': ['est', 'xp', 'xa', 'sm', 'smf'],
      '1993': ['est', 'xp', 'xa', 'sm', 'smf'],
      '1994': ['est', 'xp', 'xa', 'sm', 'smf'],
      '1995': ['est', 'xp', 'xa', 'sm', 'smf'],
      '1996': ['est', 'xp', 'xa', 'sm', 'smf'],
      '1997': ['est', 'xp', 'xa', 'sm', 'smf'],
      '1998': ['est', 'xp', 'xa', 'sm', 'smf'],
      '1999': ['est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2000': ['est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2001': ['est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2002': ['est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2003': ['est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2004': ['est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2005': ['est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2006': ['est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2007': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2008': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2009': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2010': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2011': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['est', 'xp', 'xa', 'sm', 'smf'],
    },
    'Sentra (2.0L)': {
      '1991': ['est', 'xp', 'xa', 'sm', 'smf'],
      '1992': ['est', 'xp', 'xa', 'sm', 'smf'],
      '1993': ['est', 'xp', 'xa', 'sm', 'smf'],
      '1994': ['est', 'xp', 'xa', 'sm', 'smf'],
      '1995': ['est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '1996': ['est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '1997': ['est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '1998': ['est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '1999': ['est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2000': ['est', 'esp', 'xp', 'xa', 'sm', 'smf'],
      '2001': ['est', 'esp', 'xp', 'xa', 'sm', 'smf'],
      '2002': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2003': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2004': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2005': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2006': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2007': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2008': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2009': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2010': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2011': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['est', 'xp', 'xa', 'sm', 'smf'],
    },
    'Sentra (B12 chassis; 1.6 L) - Alternate cylinder head: 11041-15M00 Alternate engine: L16': {
      '1987': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1988': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1989': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1990': ['ep', 'xp', 'xa', 'sm', 'smf'],
    },
    'Sentra (B13 chassis; 2.0 L) - Alternate cylinder head: 11041-H5704': {
      '1991': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1992': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1993': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1994': ['ep', 'xp', 'xa', 'sm', 'smf'],
    },
    'Sentra (B14 chassis)': {
      '1995': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1996': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1997': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1998': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1999': ['ep', 'xp', 'xa', 'sm', 'smf'],
    },
    'Sentra SE-R': {
      '1991': ['fsp', 'xp', 'xa', 'sm', 'smf'],
      '1992': ['fsp', 'xp', 'xa', 'sm', 'smf'],
      '1993': ['fsp', 'xp', 'xa', 'sm', 'smf'],
      '1994': ['fsp', 'xp', 'xa', 'sm', 'smf'],
      '2000': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2001': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2002': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2003': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2004': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2005': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2006': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2007': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2008': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2009': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2010': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2011': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['dst', 'xp', 'xa', 'sm', 'smf'],
    },
    'Sentra SE-R Spec V': {
      'all': ['dst', 'xp', 'xa', 'sm', 'smf'],
    },
    'Stanza': {
      'all': ['hs', 'fsp', 'xp', 'xa', 'sm'],
    },
    'Versa': {
      '2007': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm'],
      '2008': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm'],
      '2009': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm'],
      '2010': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm'],
      '2011': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm'],
      '2012': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm'],
      '2013': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm'],
      '2014': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm'],
      '2015': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm'],
      '2016': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm'],
      '2017': ['hs', 'est', 'xp', 'xa', 'sm'],
      '2018': ['hs', 'est', 'xp', 'xa', 'sm'],
      '2019': ['hs', 'est', 'xp', 'xa', 'sm'],
      '2020': ['hs', 'xp', 'xa', 'sm'],
      '2021': ['hs', 'xp', 'xa', 'sm'],
      '2022': ['hs', 'xp', 'xa', 'sm'],
      '2023': ['hs', 'xp', 'xa', 'sm'],
      '2024': ['hs', 'xp', 'xa', 'sm'],
    },
    'Z (incl. Nismo)': {
      '2023': ['sst', 'xp', 'xa', 'sm'],
      '2024': ['sst', 'xp', 'xa', 'sm'],
    },
  },
  'Oldsmobile': {
    'Calais W41': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Cutlass': {
      '1968': ['cp', 'camt', 'xp', 'sm'],
      '1969': ['cp', 'camt', 'xp', 'sm'],
      '1970': ['cp', 'camt', 'xp', 'sm'],
      '1971': ['cp', 'camt', 'xp', 'sm'],
      '1972': ['cp', 'camt', 'xp', 'sm'],
      '1973': ['cp', 'camt', 'xp', 'sm'],
      '1974': ['cp', 'camt', 'xp', 'sm'],
      '1975': ['cp', 'camt', 'xp', 'sm'],
      '1976': ['cp', 'camt', 'xp', 'sm'],
      '1977': ['cp', 'camt', 'xp', 'sm'],
      '1978': ['cp', 'camt', 'xp', 'sm'],
      '1979': ['cp', 'camt', 'xp', 'sm'],
      '1980': ['cp', 'camt', 'xp', 'sm'],
      '1981': ['cp', 'camt', 'xp', 'sm'],
    },
    'Omega': {
      'all': ['fsp', 'xp', 'xa', 'sm'],
    },
    'Starfire (V6)': {
      'all': ['esp', 'xp', 'xa', 'sm'],
    },
  },
  'Opel': {
    '1900': {
      'all': ['hs', 'fsp', 'xp', 'xa', 'sm'],
    },
    'Ascona': {
      '1971': ['hs', 'dp', 'xp', 'xa', 'sm'],
      '1972': ['hs', 'dp', 'xp', 'xa', 'sm'],
      '1973': ['hs', 'dp', 'xp', 'xa', 'sm'],
      '1974': ['hs', 'dp', 'xp', 'xa', 'sm'],
      '1975': ['hs', 'dp', 'xp', 'xa', 'sm'],
    },
    'GT': {
      'all': ['hs', 'fsp', 'dp', 'xp', 'xa', 'ssm'],
    },
    'Kadett': {
      'all': ['hs', 'fsp', 'dp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Manta': {
      'all': ['hs', 'fsp', 'dp', 'xp', 'xa', 'sm'],
    },
    'Not Otherwise Classified': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
  },
  'Peugeot': {
    '405': {
      'all': ['hs', 'esp', 'xp', 'xa', 'sm', 'smf'],
    },
    '505': {
      '1979': ['hs', 'esp', 'xp', 'xa', 'sm'],
      '1980': ['hs', 'esp', 'xp', 'xa', 'sm'],
      '1981': ['hs', 'esp', 'xp', 'xa', 'sm'],
      '1982': ['hs', 'esp', 'xp', 'xa', 'sm'],
      '1983': ['hs', 'esp', 'xp', 'xa', 'sm'],
      '1984': ['hs', 'esp', 'xp', 'xa', 'sm'],
      '1985': ['hs', 'esp', 'xp', 'xa', 'sm'],
      '1986': ['hs', 'esp', 'xp', 'xa', 'sm'],
      '1987': ['hs', 'esp', 'xp', 'xa', 'sm'],
      '1988': ['hs', 'esp', 'xp', 'xa', 'sm'],
      '1989': ['hs', 'esp', 'xp', 'xa', 'sm'],
      '1990': ['hs', 'esp', 'xp', 'xa', 'sm'],
      '1991': ['hs', 'esp', 'xp', 'xa', 'sm'],
    },
    '405 (non-turbo)': {
      '1987': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1988': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1989': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1990': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1991': ['ep', 'xp', 'xa', 'sm', 'smf'],
    },
    '405 DL': {
      'all': ['fsp', 'xp', 'xa', 'sm'],
    },
    '405 S': {
      'all': ['fsp', 'xp', 'xa', 'sm'],
    },
  },
  'Plymouth': {
    'Acclaim': {
      'all': ['hs', 'esp', 'ep', 'xp', 'xa', 'sm', 'smf'],
    },
    'Arrow': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Champ': {
      'all': ['hs', 'dp', 'xp', 'xa', 'sm'],
    },
    'Colt': {
      'all': ['hs', 'dp', 'xp', 'xa', 'sm'],
    },
    'Horizon': {
      'all': ['hs', 'fsp', 'xp', 'xb', 'sm', 'smf'],
    },
    'Laser (non-turbo) AWD': {
      'all': ['hs', 'esp', 'ep', 'xp', 'xa', 'sm'],
    },
    'Laser (non-turbo) FWD': {
      'all': ['hs', 'esp', 'ep', 'xp', 'xa', 'sm', 'smf'],
    },
    'Neon': {
      '1995': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1996': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1997': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1998': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1999': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2000': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2001': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2002': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2003': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2004': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2005': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
    },
    'Prowler': {
      'all': ['cs', 'xp', 'xa', 'sm'],
    },
    'Sapporo': {
      'all': ['hs', 'fsp', 'xp', 'xa', 'sm'],
    },
    'Scamp': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Sundance': {
      'all': ['hs', 'esp', 'ep', 'xp', 'sm', 'smf', 'xa'],
    },
    'TC3': {
      'all': ['hs', 'fsp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Turismo': {
      'all': ['hs', 'fsp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Valiant': {
      '1963': ['hs', 'esp', 'cp', 'xp', 'xa', 'sm'],
      '1964': ['hs', 'esp', 'cp', 'xp', 'xa', 'sm'],
      '1965': ['hs', 'esp', 'cp', 'xp', 'xa', 'sm'],
      '1966': ['hs', 'esp', 'cp', 'xp', 'xa', 'sm'],
      '1967': ['hs', 'esp', 'cp', 'xp', 'xa', 'sm'],
      '1968': ['hs', 'esp', 'cp', 'xp', 'xa', 'sm'],
      '1969': ['hs', 'esp', 'cp', 'xp', 'xa', 'sm'],
      '1970': ['hs', 'esp', 'cp', 'xp', 'xa', 'sm'],
      '1971': ['hs', 'esp', 'cp', 'xp', 'xa', 'sm'],
      '1972': ['hs', 'esp', 'cp', 'xp', 'xa', 'sm'],
      '1973': ['hs', 'esp', 'cp', 'xp', 'xa', 'sm'],
      '1974': ['hs', 'esp', 'cp', 'xp', 'xa', 'sm'],
      '1975': ['hs', 'esp', 'cp', 'xp', 'xa', 'sm'],
      '1976': ['hs', 'esp', 'cp', 'xp', 'xa', 'sm'],
    },
  },
  'Polestar': {
    'Polestar 2': {
      '2021': ['bs', 'evx'],
      '2022': ['bs', 'evx'],
      '2023': ['bs', 'evx'],
      '2024': ['bs', 'evx'],
    },
  },
  'Pontiac': {
    'Fiero (4-cyl)': {
      'all': ['hs', 'est', 'fsp', 'dp', 'xp', 'xa', 'ssm'],
    },
    'Fiero (V6)': {
      'all': ['es', 'cst', 'dsp', 'fp', 'xp', 'xa', 'ssm'],
    },
    'Firebird (4-cyl & 6-cyl)': {
      'all': ['hs', 'bst', 'fsp', 'cp', 'camt', 'xp', 'sm'],
    },
    'Firebird (V8, NOC)': {
      'all': ['fs', 'bst', 'cp', 'camt', 'xp', 'sm'],
    },
    'Firebird Trans Am & Formula (WS6, base car only, including GM-installed 1LE)': {
      '1998': ['fs', 'bst', 'cp', 'camt', 'xp', 'sm'],
      '1999': ['fs', 'bst', 'cp', 'camt', 'xp', 'sm'],
      '2000': ['fs', 'bst', 'cp', 'camt', 'xp', 'sm'],
      '2001': ['fs', 'bst', 'cp', 'camc', 'xp', 'sm'],
      '2002': ['fs', 'bst', 'cp', 'camc', 'xp', 'sm'],
    },
    'G5 (2.0L Turbo)': {
      'all': ['hs', 'gst', 'xp', 'xa', 'sm', 'smf'],
    },
    'G5 (2.2L)': {
      'all': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
    },
    'G8 (V6)': {
      '2008': ['hs', 'esp', 'camc', 'xp', 'sm'],
      '2009': ['hs', 'esp', 'camc', 'xp', 'sm'],
    },
    'G8 (V8 & NOC)': {
      '2008': ['fs', 'esp', 'camc', 'xp', 'sm'],
      '2009': ['fs', 'esp', 'camc', 'xp', 'sm'],
    },
    'GTO': {
      '2004': ['fs', 'bst', 'esp', 'cp', 'camc', 'xp', 'sm'],
      '2005': ['fs', 'bst', 'esp', 'cp', 'camc', 'xp', 'sm'],
      '2006': ['fs', 'bst', 'esp', 'cp', 'camc', 'xp', 'sm'],
    },
    'LeMans (FWD)': {
      '1988': ['hs', 'xp', 'xa', 'sm'],
      '1989': ['hs', 'xp', 'xa', 'sm'],
      '1990': ['hs', 'xp', 'xa', 'sm'],
      '1991': ['hs', 'xp', 'xa', 'sm'],
      '1992': ['hs', 'xp', 'xa', 'sm'],
      '1993': ['hs', 'xp', 'xa', 'sm'],
    },
    'Solstice (non-turbo; non-ZOK)': {
      '2007': ['cs', 'cst', 'csp', 'dp', 'cams', 'xp', 'ssm'],
      '2008': ['cs', 'cst', 'csp', 'dp', 'cams', 'xp', 'ssm'],
      '2009': ['cs', 'cst', 'csp', 'dp', 'cams', 'xp', 'ssm'],
      '2010': ['cs', 'cst', 'csp', 'dp', 'cams', 'xp', 'ssm'],
    },
    'Solstice (non-turbo; w/ ZOK ClubSport package)': {
      '2007': ['bs', 'cst', 'csp', 'cams', 'xp', 'ssm'],
      '2008': ['bs', 'cst', 'csp', 'cams', 'xp', 'ssm'],
      '2009': ['bs', 'cst', 'csp', 'cams', 'xp', 'ssm'],
      '2010': ['bs', 'cst', 'csp', 'cams', 'xp', 'ssm'],
    },
    'Solstice GXP': {
      '2007': ['bs', 'ast', 'csp', 'fp', 'cams', 'xp', 'ssm'],
      '2008': ['bs', 'ast', 'csp', 'fp', 'cams', 'xp', 'ssm'],
      '2009': ['bs', 'ast', 'csp', 'fp', 'cams', 'xp', 'ssm'],
    },
    'Sunfire': {
      'all': ['hs', 'xp', 'xa', 'sm', 'smf'],
    },
    'T-1000': {
      'all': ['hs', 'camt', 'xp', 'sm'],
    },
    'Trans Am Turbo (V6)': {
      '1989': ['fs', 'esp', 'cp', 'camt', 'xp', 'sm'],
    },
    'Vibe': {
      'all': ['hs', 'est', 'dsp', 'xp', 'xa', 'sm', 'smf'],
    },
  },
  'Porsche': {
    '356': {
      'all': ['csp', 'xp', 'xa', 'ssm'],
    },
    '912': {
      'all': ['hs', 'fsp', 'xp', 'xa', 'ssm'],
    },
    '924': {
      'all': ['cst', 'xp', 'xa', 'ssm'],
    },
    '968': {
      '1992': ['cst', 'fp', 'xp', 'xa', 'ssm'],
      '1993': ['cst', 'fp', 'xp', 'xa', 'ssm'],
      '1994': ['cst', 'fp', 'xp', 'xa', 'ssm'],
      '1995': ['cst', 'fp', 'xp', 'xa', 'ssm'],
      'all': ['bs', 'cst', 'dsp', 'xp', 'xa', 'ssm'],
    },
    '1300': {
      'all': ['dp', 'xp', 'xa', 'ssm'],
    },
    '1600': {
      'all': ['csp', 'xp', 'xa', 'ssm'],
    },
    '356 (non-Carrera)': {
      'all': ['hs', 'xp', 'xa', 'ssm'],
    },
    '356 Carrera (4-cam)': {
      'all': ['cs', 'xp', 'xa', 'ssm'],
    },
    '356, except Carrera and 1500, 1600': {
      'all': ['dp', 'xp', 'xa', 'sm'],
    },
    '911 (non-Turbo)': {
      '1963': ['cs', 'dsp', 'fp', 'xp', 'xb', 'ssm'],
      '1964': ['cs', 'dsp', 'fp', 'xp', 'xb', 'ssm'],
      '1965': ['cs', 'dsp', 'fp', 'xp', 'xb', 'ssm'],
      '1966': ['cs', 'dsp', 'fp', 'xp', 'xb', 'ssm'],
      '1967': ['cs', 'dsp', 'fp', 'xp', 'xb', 'ssm'],
      '1968': ['cs', 'dsp', 'fp', 'xp', 'xb', 'ssm'],
      '1969': ['cs', 'dsp', 'fp', 'xp', 'xb', 'ssm'],
      '1970': ['cs', 'dsp', 'fp', 'xp', 'xb', 'ssm'],
      '1971': ['cs', 'dsp', 'fp', 'xp', 'xb', 'ssm'],
      '1972': ['cs', 'dsp', 'fp', 'xp', 'xb', 'ssm'],
      '1973': ['cs', 'dsp', 'fp', 'xp', 'xb', 'ssm'],
      '1974': ['cs', 'dsp', 'fp', 'xp', 'xb', 'ssm'],
      '1975': ['cs', 'dsp', 'fp', 'xp', 'xa', 'ssm'],
      '1976': ['cs', 'dsp', 'fp', 'ssp', 'xp', 'xa', 'ssm'],
      '1977': ['cs', 'dsp', 'fp', 'ssp', 'xp', 'xa', 'ssm'],
      '1978': ['cs', 'cst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '1979': ['cs', 'cst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '1980': ['cs', 'cst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '1981': ['cs', 'cst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '1982': ['cs', 'cst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '1983': ['cs', 'cst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '1984': ['cs', 'cst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '1985': ['cs', 'cst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '1986': ['cs', 'cst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '1987': ['cs', 'cst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '1988': ['cs', 'cst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '1989': ['cs', 'sst', 'cst', 'ssp', 'dsp', 'fp', 'xp', 'xa', 'ssm'],
      '1990': ['cs', 'sst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '1991': ['cs', 'sst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '1992': ['cs', 'sst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '1993': ['cs', 'sst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '1994': ['cs', 'sst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '1995': ['bs', 'sst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '1996': ['bs', 'sst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '1997': ['bs', 'sst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '1998': ['bs', 'sst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '1999': ['bs', 'sst', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2000': ['bs', 'sst', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2001': ['bs', 'sst', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2002': ['bs', 'sst', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2003': ['bs', 'sst', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2004': ['bs', 'sst', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2005': ['as', 'sst', 'ssr', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2006': ['as', 'sst', 'ssr', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2007': ['as', 'sst', 'ssr', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2008': ['as', 'sst', 'ssr', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2009': ['as', 'sst', 'ssr', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2010': ['as', 'sst', 'ssr', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2011': ['as', 'sst', 'ssr', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2012': ['ss', 'sst', 'ssr', 'ssp', 'fp', 'xp', 'xu', 'ssm'],
      '2013': ['ss', 'ssr', 'dsp', 'ssp', 'xp', 'xu', 'ssm'],
      '2014': ['ss', 'ssr', 'dsp', 'ssp', 'xp', 'xu', 'ssm'],
      '2015': ['ss', 'ssr', 'dsp', 'ssp', 'xp', 'xu', 'ssm'],
      '2016': ['ss', 'ssr', 'dsp', 'ssp', 'xp', 'xu', 'ssm'],
      '2017': ['ss', 'ssr', 'dsp', 'ssp', 'xp', 'xu', 'ssm'],
      '2018': ['ss', 'ssr', 'dsp', 'xp', 'xu', 'ssm'],
      '2019': ['ss', 'ssr', 'dsp', 'xp', 'xu', 'ssm'],
      '2020': ['ss', 'dsp', 'xp', 'xu', 'ssm'],
      '2021': ['ss', 'dsp', 'xp', 'xu', 'ssm'],
      '2022': ['ss', 'dsp', 'xp', 'xu', 'ssm'],
    },
    '911 Carrera (992 Chassis excl. Turbo, Turbo S, GTS, & GT3)': {
      '2020': ['ss', 'xp', 'xu', 'ssm'],
      '2021': ['ss', 'xp', 'xu', 'ssm'],
      '2022': ['ss', 'xp', 'xu', 'ssm'],
    },
    '911 Carrera (incl. 4, S, 4S, GTS)': {
      '2005': ['as', 'xp', 'xa', 'ssm'],
      '2006': ['as', 'xp', 'xa', 'ssm'],
      '2007': ['as', 'xp', 'xa', 'ssm'],
      '2008': ['as', 'xp', 'xa', 'ssm'],
      '2009': ['as', 'xp', 'xa', 'ssm'],
      '2010': ['as', 'xp', 'xa', 'ssm'],
      '2011': ['as', 'xp', 'xa', 'ssm'],
      '2012': ['as', 'xp', 'xa', 'ssm'],
      '2013': ['as', 'xp', 'xa', 'ssm'],
      '2014': ['as', 'xp', 'xa', 'ssm'],
      '2015': ['as', 'xp', 'xa', 'ssm'],
      '2016': ['as', 'xp', 'xa', 'ssm'],
    },
    '911 Club Sport': {
      '1987': ['cs', 'xp', 'xa', 'ssm'],
      '1988': ['cs', 'xp', 'xa', 'ssm'],
      '1989': ['cs', 'xp', 'xa', 'ssm'],
    },
    '911 GT2': {
      '1999': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2000': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2001': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2002': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2003': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2004': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2006': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2007': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2008': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2009': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2010': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2011': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
    },
    '911 GT2 RS': {
      '1999': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2000': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2001': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2002': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2003': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2004': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2006': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2007': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2008': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2009': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2010': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2011': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2012': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2017': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '2018': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '2019': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '2020': ['ssp', 'xp', 'xu', 'ssm'],
      '2021': ['ssp', 'xp', 'xu', 'ssm'],
      '2022': ['ssp', 'xp', 'xu', 'ssm'],
      '2023': ['ssp', 'xp', 'xu', 'ssm'],
      '2024': ['ssp', 'xp', 'xu', 'ssm'],
    },
    '911 GT3': {
      '1999': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2000': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2001': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2002': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2003': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2004': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2006': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2007': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2008': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2009': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2010': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2011': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2012': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2017': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2018': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2019': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
    },
    '911 GT3 RS': {
      '1999': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2000': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2001': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2002': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2003': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2004': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2006': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2007': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2008': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2009': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2010': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2011': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2012': ['ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '2017': ['ssp', 'xp', 'xu', 'ssm'],
      '2018': ['ssp', 'xp', 'xu', 'ssm'],
      '2019': ['ssp', 'xp', 'xu', 'ssm'],
      '2020': ['ssp', 'xp', 'xu', 'ssm'],
      '2021': ['ssp', 'xp', 'xu', 'ssm'],
      '2022': ['ssp', 'xp', 'xu', 'ssm'],
      '2023': ['ssp', 'xp', 'xu', 'ssm'],
      '2024': ['ssp', 'xp', 'xu', 'ssm'],
    },
    '911 Turbo': {
      '1974': ['ss', 'ssr', 'xp', 'xu', 'ssm'],
      '1975': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '1976': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '1977': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '1978': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '1979': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '1980': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '1981': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '1982': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '1983': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '1984': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '1985': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '1986': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '1987': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '1988': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '1989': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'ssm'],
      '1990': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '1991': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '1992': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '1993': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '1994': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '1995': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '1996': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '1997': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '1998': ['ss', 'xp', 'xu', 'ssm'],
      '1999': ['ss', 'xp', 'xu', 'ssm'],
      '2001': ['as', 'ssp', 'xp', 'xu', 'ssm'],
      '2002': ['as', 'ssp', 'xp', 'xu', 'ssm'],
      '2003': ['as', 'ssp', 'xp', 'xu', 'ssm'],
      '2004': ['as', 'ssp', 'xp', 'xu', 'ssm'],
      '2005': ['as', 'ssp', 'xp', 'xu', 'ssm'],
      '2006': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '2007': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '2008': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '2009': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '2010': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '2011': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '2012': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '2013': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '2014': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '2015': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '2016': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '2017': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '2018': ['ss', 'xp', 'xu', 'ssm'],
      '2019': ['ss', 'xp', 'xu', 'ssm'],
      '2020': ['ss', 'xp', 'xu', 'ssm'],
    },
    '911 Turbo S': {
      '2001': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '2002': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '2003': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '2004': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '2005': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '2006': ['ssp', 'xp', 'xa', 'ssm'],
      '2007': ['ssp', 'xp', 'xa', 'ssm'],
      '2008': ['ssp', 'xp', 'xa', 'ssm'],
      '2009': ['ssp', 'xp', 'xa', 'ssm'],
      '2010': ['ssp', 'xp', 'xa', 'ssm'],
      '2011': ['ssp', 'xp', 'xa', 'ssm'],
      '2012': ['ssp', 'xp', 'xa', 'ssm'],
      '2013': ['ssp', 'xp', 'xa', 'ssm'],
      '2014': ['ssp', 'xp', 'xa', 'ssm'],
      '2015': ['ssp', 'xp', 'xa', 'ssm'],
      '2016': ['ssp', 'xp', 'xa', 'ssm'],
      '2017': ['ssp', 'xp', 'xa', 'ssm'],
    },
    '912 & 912E (1600 & 1971 cc)': {
      'all': ['dp', 'xp', 'xb', 'ssm'],
    },
    '912E': {
      'all': ['fsp', 'xp', 'xb', 'ssm'],
    },
    '914 (4-cyl)': {
      'all': ['est', 'dsp', 'dp', 'xp', 'xb', 'ssm'],
    },
    '914 (all)': {
      'all': ['cs', 'xp', 'xb', 'ssm'],
    },
    '914-6 (2.0L, 2.5L, 2.7L, & 2.8L 6-cyl air-cooled)': {
      'all': ['fp', 'xp', 'xb', 'ssm'],
    },
    '914/6': {
      'all': ['esp', 'xp', 'xb', 'ssm'],
    },
    '924 (1984 cc, non-turbo)': {
      'all': ['dp', 'xp', 'xb', 'sm'],
    },
    '924 (Audi engine)': {
      'all': ['fsp', 'xp', 'xb', 'sm'],
    },
    '924 (Audi engine, non-turbo)': {
      'all': ['hs', 'xp', 'xb', 'sm'],
    },
    '924 (incl. Turbo)': {
      'all': ['esp', 'xp', 'xb', 'sm'],
    },
    '924 Turbo': {
      'all': ['fp', 'xp', 'xb', 'sm'],
    },
    '924 Turbo (Audi engine)': {
      '1979': ['es', 'xp', 'xb', 'sm'],
      '1980': ['es', 'xp', 'xb', 'sm'],
      '1981': ['es', 'xp', 'xb', 'sm'],
    },
    '924S': {
      '1986': ['es', 'csp', 'fp', 'xp', 'xb', 'sm'],
      '1987': ['es', 'csp', 'fp', 'xp', 'xb', 'sm'],
      '1988': ['es', 'csp', 'fp', 'xp', 'xb', 'sm'],
    },
    '928 (all)': {
      'all': ['cs', 'dsp', 'esp', 'xp', 'xa', 'sm'],
    },
    '944 (8v)': {
      'all': ['es', 'csp', 'xp', 'xa', 'sm'],
    },
    '944 (16v)': {
      'all': ['cs', 'dsp', 'esp', 'xp', 'xa', 'sm'],
    },
    '944 (non-turbo)': {
      '1982': ['est', 'csp', 'fp', 'xp', 'xa', 'sm'],
      '1983': ['est', 'csp', 'fp', 'xp', 'xa', 'sm'],
      '1984': ['est', 'csp', 'fp', 'xp', 'xa', 'sm'],
      '1985': ['est', 'csp', 'fp', 'xp', 'xa', 'sm'],
      '1986': ['est', 'csp', 'fp', 'xp', 'xa', 'sm'],
      '1987': ['est', 'csp', 'fp', 'xp', 'xa', 'sm'],
      '1988': ['est', 'csp', 'fp', 'xp', 'xa', 'sm'],
      '1989': ['est', 'csp', 'fp', 'xp', 'xa', 'sm'],
      '1990': ['est', 'csp', 'fp', 'xp', 'xa', 'sm'],
      '1991': ['est', 'csp', 'fp', 'xp', 'xa', 'sm'],
    },
    '944 Turbo (all)': {
      '1986': ['cs', 'dsp', 'esp', 'fp', 'xp', 'xa', 'sm'],
      '1987': ['cs', 'dsp', 'esp', 'fp', 'xp', 'xa', 'sm'],
      '1988': ['cs', 'dsp', 'esp', 'fp', 'xp', 'xa', 'sm'],
      '1989': ['cs', 'dsp', 'esp', 'fp', 'xp', 'xa', 'sm'],
      '1990': ['cs', 'dsp', 'esp', 'fp', 'xp', 'xa', 'sm'],
      '1991': ['cs', 'dsp', 'esp', 'fp', 'xp', 'xa', 'sm'],
    },
    'Boxster (non-S)': {
      '1996': ['cs', 'bst', 'dsp', 'fp', 'xp', 'xa', 'ssm'],
      '1997': ['cs', 'bst', 'dsp', 'fp', 'xp', 'xa', 'ssm'],
      '1998': ['cs', 'bst', 'ssr', 'dsp', 'fp', 'xp', 'xa', 'ssm'],
      '1999': ['cs', 'bst', 'ssr', 'dsp', 'fp', 'xp', 'xa', 'ssm'],
      '2000': ['cs', 'bst', 'ssr', 'dsp', 'fp', 'xp', 'xa', 'ssm'],
      '2001': ['cs', 'bst', 'ssr', 'dsp', 'fp', 'xp', 'xa', 'ssm'],
      '2002': ['cs', 'bst', 'ssr', 'dsp', 'fp', 'xp', 'xa', 'ssm'],
      '2003': ['cs', 'bst', 'ssr', 'dsp', 'fp', 'xp', 'xa', 'ssm'],
      '2004': ['cs', 'bst', 'ssr', 'dsp', 'fp', 'xp', 'xa', 'ssm'],
      '2005': ['cs', 'bst', 'ssr', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2006': ['cs', 'bst', 'ssr', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2007': ['cs', 'bst', 'ssr', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2008': ['cs', 'bst', 'ssr', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2009': ['bs', 'bst', 'ssr', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2010': ['bs', 'bst', 'ssr', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2011': ['bs', 'bst', 'ssr', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2012': ['bs', 'bst', 'ssr', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2013': ['bs', 'bst', 'ssr', 'dsp', 'ssp', 'xp', 'xa', 'ssm'],
      '2014': ['bs', 'bst', 'ssr', 'dsp', 'ssp', 'xp', 'xa', 'ssm'],
      '2015': ['bs', 'bst', 'ssr', 'dsp', 'ssp', 'xp', 'xa', 'ssm'],
      '2016': ['bs', 'bst', 'ssr', 'ssp', 'dsp', 'xp', 'xa', 'ssm'],
      '2017': ['as', 'sst', 'ssr', 'xp', 'xa', 'ssm'],
      '2018': ['as', 'sst', 'ssr', 'xp', 'xa', 'ssm'],
      '2019': ['as', 'sst', 'ssr', 'xp', 'xa', 'ssm'],
      '2020': ['as', 'sst', 'xp', 'xa', 'ssm'],
      '2021': ['as', 'sst', 'xp', 'xa', 'ssm'],
      '2022': ['as', 'sst', 'xp', 'xa', 'ssm'],
      '2023': ['as', 'sst', 'xp', 'xa', 'ssm'],
      '2024': ['as', 'sst', 'xp', 'xa', 'ssm'],
    },
    'Boxster GTS': {
      '2015': ['as', 'sst', 'xp', 'xa', 'ssm'],
      '2016': ['as', 'sst', 'xp', 'xa', 'ssm'],
      '2017': ['as', 'xp', 'xu', 'ssm'],
      '2018': ['as', 'xp', 'xu', 'ssm'],
      '2019': ['as', 'xp', 'xu', 'ssm'],
      '2020': ['as', 'xp', 'xu', 'ssm'],
      '2021': ['as', 'xp', 'xu', 'ssm'],
      '2022': ['as', 'xp', 'xu', 'ssm'],
      '2023': ['as', 'xp', 'xu', 'ssm'],
      '2024': ['as', 'xp', 'xu', 'ssm'],
    },
    'Boxster S': {
      '2000': ['cs', 'cst', 'ssr', 'dsp', 'fp', 'xp', 'xa', 'ssm'],
      '2001': ['cs', 'cst', 'ssr', 'dsp', 'fp', 'xp', 'xa', 'ssm'],
      '2002': ['cs', 'cst', 'ssr', 'dsp', 'fp', 'xp', 'xa', 'ssm'],
      '2003': ['cs', 'cst', 'ssr', 'dsp', 'fp', 'xp', 'xa', 'ssm'],
      '2004': ['cs', 'cst', 'ssr', 'dsp', 'fp', 'xp', 'xa', 'ssm'],
      '2005': ['bs', 'bst', 'ssr', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2006': ['bs', 'bst', 'ssr', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2007': ['bs', 'bst', 'ssr', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2008': ['bs', 'bst', 'ssr', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2009': ['as', 'bst', 'ssr', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2010': ['as', 'bst', 'ssr', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2011': ['as', 'bst', 'ssr', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2012': ['as', 'bst', 'ssr', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2013': ['as', 'sst', 'ssr', 'ssp', 'xp', 'xa', 'ssm'],
      '2014': ['as', 'sst', 'ssr', 'ssp', 'xp', 'xa', 'ssm'],
      '2015': ['as', 'sst', 'ssr', 'ssp', 'xp', 'xa', 'ssm'],
      '2016': ['as', 'sst', 'ssr', 'ssp', 'xp', 'xa', 'ssm'],
      '2017': ['as', 'ssr', 'xp', 'xu', 'ssm'],
      '2018': ['as', 'ssr', 'xp', 'xu', 'ssm'],
      '2019': ['as', 'ssr', 'xp', 'xu', 'ssm'],
      '2020': ['as', 'xp', 'xu', 'ssm'],
      '2021': ['as', 'xp', 'xu', 'ssm'],
      '2022': ['as', 'xp', 'xu', 'ssm'],
    },
    'Boxster Spyder': {
      '2011': ['as', 'sst', 'ssr', 'xp', 'xu', 'ssm'],
      '2012': ['as', 'sst', 'ssr', 'xp', 'xu', 'ssm'],
      '2013': ['as', 'ssr', 'xp', 'xu', 'ssm'],
      '2016': ['ss', 'ssr', 'xp', 'xu', 'ssm'],
    },
    'Carrera 2 & Carrera 4 (964)': {
      '1989': ['cs', 'xp', 'xa', 'ssm'],
      '1990': ['cs', 'xp', 'xa', 'ssm'],
      '1991': ['cs', 'xp', 'xa', 'ssm'],
      '1992': ['cs', 'xp', 'xa', 'ssm'],
      '1993': ['cs', 'xp', 'xa', 'ssm'],
      '1994': ['cs', 'xp', 'xa', 'ssm'],
    },
    'Carrera (4-cyl)': {
      'all': ['csp', 'xp', 'xa', 'ssm'],
    },
    'Cayman (non-S)': {
      '2006': ['cs', 'ssr', 'bst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2007': ['cs', 'ssr', 'bst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2008': ['cs', 'ssr', 'bst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2009': ['bs', 'ssr', 'bst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2010': ['bs', 'ssr', 'bst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2011': ['bs', 'ssr', 'bst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2012': ['bs', 'ssr', 'bst', 'dsp', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2013': ['bs', 'ssr', 'bst', 'dsp', 'ssp', 'xp', 'xa', 'ssm'],
      '2014': ['bs', 'ssr', 'bst', 'dsp', 'ssp', 'xp', 'xa', 'ssm'],
      '2015': ['bs', 'ssr', 'bst', 'dsp', 'ssp', 'xp', 'xa', 'ssm'],
      '2016': ['bs', 'ssr', 'bst', 'ssp', 'xp', 'xa', 'ssm'],
      '2017': ['as', 'sst', 'ssr', 'xp', 'xa', 'ssm'],
      '2018': ['as', 'sst', 'ssr', 'xp', 'xa', 'ssm'],
      '2019': ['as', 'sst', 'ssr', 'xp', 'xa', 'ssm'],
      '2020': ['as', 'sst', 'xp', 'xa', 'ssm'],
      '2021': ['as', 'sst', 'xp', 'xa', 'ssm'],
      '2022': ['as', 'sst', 'xp', 'xa', 'ssm'],
      '2023': ['as', 'sst', 'xp', 'xa', 'ssm'],
    },
    'Cayman GT4 (Excluding RS & Clubsport)': {
      '2016': ['ss', 'ssp', 'ssp', 'xp', 'xu', 'ssm'],
      '2020': ['ss', 'xp', 'xu', 'ssm'],
      '2021': ['ss', 'xp', 'xu', 'ssm'],
      '2022': ['ss', 'xp', 'xu', 'ssm'],
      '2023': ['ss', 'xp', 'xu', 'ssm'],
      '2024': ['ss', 'xp', 'xu', 'ssm'],
    },
    'Cayman GT4 RS': {
      '2020': ['ss', 'xp', 'xu', 'ssm'],
      '2021': ['ss', 'xp', 'xu', 'ssm'],
      '2022': ['ss', 'xp', 'xu', 'ssm'],
      '2023': ['ss', 'xp', 'xu', 'ssm'],
      '2024': ['ss', 'xp', 'xu', 'ssm'],
    },
    'Cayman GTS': {
      '2015': ['as', 'sst', 'ssp', 'xp', 'xa', 'ssm'],
      '2016': ['as', 'sst', 'ssp', 'xp', 'xa', 'ssm'],
      '2017': ['as', 'ssp', 'xp', 'xu', 'ssm'],
      '2018': ['as', 'ssp', 'xp', 'xu', 'ssm'],
      '2019': ['as', 'ssp', 'xp', 'xu', 'ssm'],
      '2020': ['as', 'ssp', 'xp', 'xu', 'ssm'],
      '2021': ['as', 'ssp', 'xp', 'xu', 'ssm'],
      '2022': ['as', 'ssp', 'xp', 'xu', 'ssm'],
      '2023': ['as', 'ssp', 'xp', 'xu', 'ssm'],
      '2024': ['as', 'ssp', 'xp', 'xu', 'ssm'],
    },
    'Cayman GTS 4.0': {
      '2020': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '2021': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '2022': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '2023': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
      '2024': ['ss', 'ssp', 'xp', 'xu', 'ssm'],
    },
    'Cayman R': {
      '2012': ['as', 'ssp', 'fp', 'xp', 'xu', 'sm'],
    },
    'Cayman S': {
      '2006': ['bs', 'ssr', 'bst', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2007': ['bs', 'ssr', 'bst', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2008': ['bs', 'ssr', 'bst', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2009': ['as', 'ssr', 'bst', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2010': ['as', 'ssr', 'bst', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2011': ['as', 'ssr', 'bst', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2012': ['as', 'ssr', 'bst', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
      '2013': ['as', 'sst', 'ssr', 'ssp', 'xp', 'xa', 'ssm'],
      '2014': ['as', 'sst', 'ssr', 'ssp', 'xp', 'xa', 'ssm'],
      '2015': ['as', 'sst', 'ssr', 'ssp', 'xp', 'xa', 'ssm'],
      '2016': ['as', 'sst', 'ssr', 'ssp', 'xp', 'xa', 'ssm'],
      '2017': ['as', 'xp', 'xu', 'ssm'],
      '2018': ['as', 'xp', 'xu', 'ssm'],
      '2019': ['as', 'xp', 'xu', 'ssm'],
      '2020': ['as', 'xp', 'xu', 'ssm'],
      '2021': ['as', 'xp', 'xu', 'ssm'],
    },
    'Cayman Spyder/Spyder RS': {
      '2020': ['ss', 'xp', 'xu', 'ssm'],
      '2021': ['ss', 'xp', 'xu', 'ssm'],
      '2022': ['ss', 'xp', 'xu', 'ssm'],
      '2023': ['ss', 'xp', 'xu', 'ssm'],
      '2024': ['ss', 'xp', 'xu', 'ssm'],
    },
    'Macan': {
      '2015': ['bs', 'xp', 'xa', 'sm'],
      '2016': ['bs', 'xp', 'xa', 'sm'],
      '2017': ['bs', 'xp', 'xa', 'sm'],
      '2018': ['bs', 'xp', 'xa', 'sm'],
      '2019': ['bs', 'xp', 'xa', 'sm'],
      '2020': ['bs', 'xp', 'xa', 'sm'],
    },
    'Macan 4 Electric (incl. Turbo)': {
      '2024': ['bs', 'xp', 'xa', 'sm'],
    },
    'Panamera': {
      '2010': ['fs', 'xp', 'xa', 'sm'],
      '2011': ['fs', 'xp', 'xa', 'sm'],
      '2012': ['fs', 'xp', 'xa', 'sm'],
      '2013': ['fs', 'xp', 'xa', 'sm'],
      '2014': ['fs', 'xp', 'xa', 'sm'],
      '2015': ['fs', 'xp', 'xa', 'sm'],
      '2016': ['fs', 'xp', 'xa', 'sm'],
      '2017': ['fs', 'xp', 'xa', 'sm'],
      '2018': ['fs', 'xp', 'xa', 'sm'],
      '2019': ['fs', 'xp', 'xa', 'sm'],
      '2020': ['fs', 'xp', 'xa', 'sm'],
      '2021': ['fs', 'xp', 'xa', 'sm'],
      '2022': ['fs', 'xp', 'xa', 'sm'],
      '2023': ['fs', 'xp', 'xa', 'sm'],
    },
    'Taycan': {
      '2020': ['ss', 'evx'],
      '2021': ['ss', 'evx'],
      '2022': ['ss', 'evx'],
      '2023': ['ss', 'evx'],
    },
    'all': {
      'all': ['ssm', 'xp', 'xa', 'sm'],
    },
  },
  'Renault': {
    '15': {
      'all': ['fsp', 'xp', 'xb', 'sm', 'smf'],
    },
    '16': {
      'all': ['fsp', 'xp', 'xb', 'sm', 'smf'],
    },
    '17': {
      'all': ['fsp', 'xp', 'xb', 'sm', 'smf'],
    },
    '17 Gordini': {
      'all': ['fsp', 'xp', 'xb', 'sm', 'smf'],
    },
    '18i': {
      'all': ['fsp', 'xp', 'xb', 'sm', 'smf'],
    },
    'Alliance, GTA & Encore': {
      'all': ['fsp', 'xp', 'xb', 'sm', 'smf'],
    },
    'Alliance/Encore': {
      '1984': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1985': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1986': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1987': ['ep', 'xp', 'xb', 'sm', 'smf'],
    },
    'Fuego (non-turbo)': {
      'all': ['fsp', 'xp', 'xb', 'sm', 'smf'],
    },
    'Fuego Turbo': {
      'all': ['dsp', 'xp', 'xb', 'sm', 'smf'],
    },
    'Not Otherwise Classified': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'R5 Turbo': {
      'all': ['dsp', 'xp', 'xb', 'sm', 'smf'],
    },
    'R9 & R11': {
      '1982': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1983': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1984': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1985': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1986': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1987': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1988': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1989': ['ep', 'xp', 'xb', 'sm', 'smf'],
    },
    'R17 Gordini': {
      '1971': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1972': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1973': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1974': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1975': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1976': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1977': ['ep', 'xp', 'xb', 'sm', 'smf'],
    },
    'R-5 (Not Otherwise Classified) & LeCar': {
      '1978': ['fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1979': ['fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1980': ['fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1981': ['fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1982': ['fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1983': ['fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1984': ['fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1985': ['fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1986': ['fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1987': ['fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1988': ['fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1989': ['fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1990': ['fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1991': ['fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1992': ['fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1993': ['fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1994': ['fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1995': ['fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1996': ['fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
    },
    'Sedan (FWD,Not Otherwise Classified)': {
      'all': ['ep', 'xp', 'xa', 'sm'],
    },
  },
  'Saab': {
    '93': {
      'all': ['ep', 'xp', 'xa', 'sm', 'smf'],
    },
    '99': {
      '1968': ['fp', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '1969': ['fp', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '1970': ['fp', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '1971': ['fp', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '1972': ['fp', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '1973': ['fp', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '1974': ['fp', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '1975': ['fp', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '1976': ['fp', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '1977': ['fp', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '1978': ['fp', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '1979': ['fp', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '1980': ['fp', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '1981': ['fp', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '1982': ['fp', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '1983': ['fp', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '1984': ['fp', 'dsp', 'xp', 'xa', 'sm', 'smf'],
    },
    '900': {
      '1979': ['dsp', 'xp', 'xa', 'sm', 'smf'],
      '1980': ['dsp', 'xp', 'xa', 'sm', 'smf'],
      '1981': ['dsp', 'xp', 'xa', 'sm', 'smf'],
      '1982': ['dsp', 'xp', 'xa', 'sm', 'smf'],
      '1983': ['dsp', 'xp', 'xa', 'sm', 'smf'],
      '1984': ['dsp', 'xp', 'xa', 'sm', 'smf'],
      '1985': ['dsp', 'xp', 'xa', 'sm', 'smf'],
      '1986': ['dsp', 'xp', 'xa', 'sm', 'smf'],
      '1987': ['dsp', 'xp', 'xa', 'sm', 'smf'],
      '1988': ['dsp', 'xp', 'xa', 'sm', 'smf'],
      '1989': ['dsp', 'xp', 'xa', 'sm', 'smf'],
      '1990': ['dsp', 'xp', 'xa', 'sm', 'smf'],
      '1991': ['dsp', 'xp', 'xa', 'sm', 'smf'],
      '1992': ['dsp', 'xp', 'xa', 'sm', 'smf'],
      '1993': ['dsp', 'xp', 'xa', 'sm', 'smf'],
      '1994': ['dsp', 'xp', 'xa', 'sm', 'smf'],
      '1995': ['dsp', 'xp', 'xa', 'sm', 'smf'],
      '1996': ['dsp', 'xp', 'xa', 'sm', 'smf'],
      '1997': ['dsp', 'xp', 'xa', 'sm', 'smf'],
      '1998': ['dsp', 'xp', 'xa', 'sm', 'smf'],
    },
    '9-2X': {
      '2005': ['gst', 'xp', 'xa', 'sm', 'smf'],
      '2006': ['gst', 'xp', 'xa', 'sm', 'smf'],
    },
    '9-2X Aero (2.0L Turbo)': {
      '2005': ['ds', 'xp', 'xa', 'sm', 'smf'],
      '2006': ['ds', 'xp', 'xa', 'sm', 'smf'],
    },
    '9-2X Linear (2.5L)': {
      'all': ['gs', 'xp', 'xa', 'sm', 'smf'],
    },
    '9-3 (non-Viggen)': {
      '1998': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '1999': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2000': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2001': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2002': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2003': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2004': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2005': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2006': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2007': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2008': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2009': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2010': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2011': ['dst', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['dst', 'xp', 'xa', 'sm', 'smf'],
    },
    '96 (non-turbo, FWD)': {
      '1960': ['ep', 'xp', 'xb', 'sm'],
      '1961': ['ep', 'xp', 'xb', 'sm'],
      '1962': ['ep', 'xp', 'xb', 'sm'],
      '1963': ['ep', 'xp', 'xb', 'sm'],
      '1964': ['ep', 'xp', 'xb', 'sm'],
      '1965': ['ep', 'xp', 'xb', 'sm'],
      '1966': ['ep', 'xp', 'xb', 'sm'],
      '1967': ['ep', 'xp', 'xb', 'sm'],
      '1968': ['ep', 'xp', 'xb', 'sm'],
      '1969': ['ep', 'xp', 'xb', 'sm'],
      '1970': ['ep', 'xp', 'xb', 'sm'],
      '1971': ['ep', 'xp', 'xb', 'sm'],
      '1972': ['ep', 'xp', 'xb', 'sm'],
      '1973': ['ep', 'xp', 'xb', 'sm'],
      '1974': ['ep', 'xp', 'xb', 'sm'],
      '1975': ['ep', 'xp', 'xb', 'sm'],
      '1976': ['ep', 'xp', 'xb', 'sm'],
      '1977': ['ep', 'xp', 'xb', 'sm'],
      '1978': ['ep', 'xp', 'xb', 'sm'],
      '1979': ['ep', 'xp', 'xb', 'sm'],
      '1980': ['ep', 'xp', 'xb', 'sm'],
    },
    '96 Sedan (843 cc, 2-stroke)': {
      'all': ['ep', 'xp', 'xb', 'sm', 'smf'],
    },
    '99 (non-turbo, FWD)': {
      '1969': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1970': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1971': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1972': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1973': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1974': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1975': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1976': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1977': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1978': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1979': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1980': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1981': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1982': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1983': ['ep', 'xp', 'xb', 'sm', 'smf'],
      '1984': ['ep', 'xp', 'xb', 'sm', 'smf'],
    },
    '99 EMS': {
      'all': ['dsp', 'xp', 'xb', 'sm', 'smf'],
    },
    '99 Turbo': {
      'all': ['dsp', 'gs', 'xp', 'xa', 'sm', 'smf'],
    },
    '900 (V6)': {
      '1994': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '1995': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '1996': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '1997': ['hs', 'xp', 'xa', 'sm', 'smf'],
    },
    '900 (non-turbo, FWD)': {
      '1979': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1980': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1981': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1982': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1983': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1984': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1985': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1986': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1987': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1988': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1989': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1990': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1991': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1992': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1993': ['ep', 'xp', 'xa', 'sm', 'smf'],
      '1994': ['ep', 'xp', 'xa', 'sm', 'smf'],
    },
    '900 SPG Turbo 16v': {
      '1979': ['fp', 'xp', 'xa', 'sm', 'smf'],
      '1980': ['fp', 'xp', 'xa', 'sm', 'smf'],
      '1981': ['fp', 'xp', 'xa', 'sm', 'smf'],
      '1982': ['fp', 'xp', 'xa', 'sm', 'smf'],
      '1983': ['fp', 'xp', 'xa', 'sm', 'smf'],
      '1984': ['fp', 'xp', 'xa', 'sm', 'smf'],
      '1985': ['fp', 'xp', 'xa', 'sm', 'smf'],
      '1986': ['fp', 'xp', 'xa', 'sm', 'smf'],
      '1987': ['fp', 'xp', 'xa', 'sm', 'smf'],
      '1988': ['fp', 'xp', 'xa', 'sm', 'smf'],
    },
    '900 Turbo': {
      '1979': ['dsp', 'fp', 'gs', 'xp', 'xa', 'sm', 'smf'],
      '1980': ['dsp', 'fp', 'gs', 'xp', 'xa', 'sm', 'smf'],
      '1981': ['dsp', 'fp', 'gs', 'xp', 'xa', 'sm', 'smf'],
      '1982': ['dsp', 'fp', 'gs', 'xp', 'xa', 'sm', 'smf'],
      '1983': ['dsp', 'fp', 'gs', 'xp', 'xa', 'sm', 'smf'],
      '1984': ['dsp', 'fp', 'gs', 'xp', 'xa', 'sm', 'smf'],
      '1985': ['dsp', 'fp', 'gs', 'xp', 'xa', 'sm', 'smf'],
      '1986': ['dsp', 'fp', 'gs', 'xp', 'xa', 'sm', 'smf'],
      '1987': ['dsp', 'fp', 'gs', 'xp', 'xa', 'sm', 'smf'],
      '1988': ['dsp', 'fp', 'gs', 'xp', 'xa', 'sm', 'smf'],
      '1989': ['dsp', 'fp', 'gs', 'xp', 'xa', 'sm', 'smf'],
      '1990': ['dsp', 'fp', 'gs', 'xp', 'xa', 'sm', 'smf'],
      '1991': ['dsp', 'fp', 'gs', 'xp', 'xa', 'sm', 'smf'],
      '1992': ['dsp', 'fp', 'gs', 'xp', 'xa', 'sm', 'smf'],
      '1993': ['dsp', 'fp', 'gs', 'xp', 'xa', 'sm', 'smf'],
      '1994': ['dsp', 'fp', 'gs', 'xp', 'xa', 'sm', 'smf'],
      '1995': ['dsp', 'fp', 'gs', 'xp', 'xa', 'sm', 'smf'],
      '1996': ['dsp', 'fp', 'gs', 'xp', 'xa', 'sm', 'smf'],
      '1997': ['dsp', 'fp', 'gs', 'xp', 'xa', 'sm', 'smf'],
      '1998': ['dsp', 'fp', 'gs', 'xp', 'xa', 'sm', 'smf'],
    },
    'Not Otherwise Classified': {
      'all': ['hs', 'xp', 'xa', 'sm', 'smf'],
    },
    'SPG (16v & Turbo)': {
      'all': ['esp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Sedan (non-turbo, FWD, Not Otherwise Classified)': {
      'all': ['ep', 'xp', 'xa', 'sm', 'smf'],
    },
    'Sonett (1498 & 1699 cc)': {
      'all': ['ep', 'xp', 'xb', 'ssm', 'smf'],
    },
    'Sonnet': {
      '1968': ['fsp', 'xp', 'xa', 'sm', 'smf'],
      '1969': ['fsp', 'xp', 'xa', 'sm', 'smf'],
      '1970': ['fsp', 'xp', 'xa', 'sm', 'smf'],
      '1971': ['fsp', 'xp', 'xa', 'sm', 'smf'],
      '1972': ['fsp', 'xp', 'xa', 'sm', 'smf'],
      '1973': ['fsp', 'xp', 'xa', 'sm', 'smf'],
      '1974': ['fsp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Turbo models (Not Otherwise Classified)': {
      'all': ['gs', 'xp', 'xa', 'sm', 'smf'],
    },
  },
  'Saleen': {
    'Mustang 302 & 351 (non-super-charged)': {
      '1984': ['esp', 'camt', 'sm', 'xp'],
      '1985': ['esp', 'camt', 'sm', 'xp'],
      '1986': ['esp', 'camt', 'sm', 'xp'],
      '1987': ['esp', 'camt', 'sm', 'xp'],
      '1988': ['esp', 'camt', 'sm', 'xp'],
      '1989': ['esp', 'camt', 'sm', 'xp'],
      '1990': ['esp', 'camt', 'sm', 'xp'],
      '1991': ['esp', 'camt', 'sm', 'xp'],
      '1992': ['esp', 'camt', 'sm', 'xp'],
      '1993': ['esp', 'camt', 'sm', 'xp'],
    },
    'Mustang (w/o IRS or forced induction)': {
      '1979': ['bs', 'cp', 'sm', 'camt', 'xp'],
      '1980': ['bs', 'cp', 'sm', 'camt', 'xp'],
      '1981': ['bs', 'cp', 'sm', 'camt', 'xp'],
      '1982': ['bs', 'cp', 'sm', 'camt', 'xp'],
      '1983': ['bs', 'cp', 'sm', 'camt', 'xp'],
      '1984': ['bs', 'cp', 'sm', 'camt', 'xp'],
      '1985': ['bs', 'cp', 'sm', 'camt', 'xp'],
      '1986': ['bs', 'cp', 'sm', 'camt', 'xp'],
      '1987': ['bs', 'cp', 'sm', 'camt', 'xp'],
      '1988': ['bs', 'cp', 'sm', 'camt', 'xp'],
      '1989': ['bs', 'cp', 'sm', 'camt', 'xp'],
      '1990': ['bs', 'cp', 'sm', 'camt', 'xp'],
      '1991': ['bs', 'cp', 'sm', 'camt', 'xp'],
      '1992': ['bs', 'cp', 'sm', 'camt', 'xp'],
      '1993': ['bs', 'cp', 'sm', 'camt', 'xp'],
    },
    'Mustang S281E & Mustang (Not Otherwise Classified)': {
      'all': ['esp', 'sm', 'xp', 'xa', 'camt'],
    },
  },
  'Saturn': {
    '8v engine': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Astra': {
      '2008': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2009': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
    },
    'DOHC model (Not Otherwise Classified)': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'ION (non-supercharged)': {
      'all': ['hs', 'dsp', 'ep', 'est', 'xp', 'xa', 'sm', 'smf'],
    },
    'ION Redline (Supercharged)': {
      'all': ['gs', 'est', 'xp', 'xa', 'sm', 'smf'],
    },
    'L series (all)': {
      'all': ['hs', 'ep', 'xp', 'xa', 'sm'],
    },
    'SC': {
      'all': ['est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
    },
    'SL': {
      'all': ['est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
    },
    'SW': {
      'all': ['est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
    },
    'Sky (non-turbo)': {
      '2007': ['cs', 'dst', 'csp', 'dp', 'cams', 'xp', 'ssm'],
      '2008': ['cs', 'dst', 'csp', 'dp', 'cams', 'xp', 'ssm'],
      '2009': ['cs', 'dst', 'csp', 'dp', 'cams', 'xp', 'ssm'],
      '2010': ['cs', 'dst', 'csp', 'dp', 'cams', 'xp', 'ssm'],
    },
    'Sky Redline (Turbo)': {
      '2007': ['bs', 'ast', 'csp', 'fp', 'cams', 'xp', 'ssm'],
      '2008': ['bs', 'ast', 'csp', 'fp', 'cams', 'xp', 'ssm'],
      '2009': ['bs', 'ast', 'csp', 'fp', 'cams', 'xp', 'ssm'],
      '2010': ['bs', 'ast', 'csp', 'fp', 'cams', 'xp', 'ssm'],
    },
  },
  'Scion': {
    'FR-S (with TRD suspension; incl. Release Series 1.0 and 2.0)': {
      '2013': ['cs', 'ssc', 'dst', 'dsp', 'dp', 'xa', 'sm'],
      '2014': ['cs', 'ssc', 'dst', 'dsp', 'dp', 'xa', 'sm'],
      '2015': ['cs', 'ssc', 'dst', 'dsp', 'dp', 'xa', 'sm'],
      '2016': ['cs', 'ssc', 'dst', 'dsp', 'dp', 'xa', 'sm'],
    },
    'FR-S (without TRD suspension components)': {
      '2013': ['ds', 'ssc', 'dst', 'dsp', 'dp', 'xa', 'sm'],
      '2014': ['ds', 'ssc', 'dst', 'dsp', 'dp', 'xa', 'sm'],
      '2015': ['ds', 'ssc', 'dst', 'dsp', 'dp', 'xa', 'sm'],
      '2016': ['ds', 'ssc', 'dst', 'dsp', 'dp', 'xa', 'sm'],
    },
    'iA': {
      '2016': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
    },
    'iM': {
      '2016': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
    },
    'iQ CVT': {
      'all': ['est', 'xp', 'xa', 'sm', 'smf'],
    },
    'tC': {
      '2005': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2006': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2007': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2008': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2009': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2010': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2011': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2013': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2014': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2015': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2016': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
    },
    'xA': {
      '2004': ['hs', 'est', 'xp', 'xb', 'sm', 'smf'],
      '2005': ['hs', 'est', 'xp', 'xb', 'sm', 'smf'],
      '2006': ['hs', 'est', 'xp', 'xb', 'sm', 'smf'],
    },
    'xB': {
      '2008': ['hs', 'est', 'xp', 'xb', 'sm', 'smf'],
      '2009': ['hs', 'est', 'xp', 'xb', 'sm', 'smf'],
      '2010': ['hs', 'est', 'xp', 'xb', 'sm', 'smf'],
      '2011': ['hs', 'est', 'xp', 'xb', 'sm', 'smf'],
      '2012': ['hs', 'est', 'xp', 'xb', 'sm', 'smf'],
      '2013': ['hs', 'est', 'xp', 'xb', 'sm', 'smf'],
      '2014': ['hs', 'est', 'xp', 'xb', 'sm', 'smf'],
      '2015': ['hs', 'est', 'xp', 'xb', 'sm', 'smf'],
    },
    'xD': {
      '2008': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2009': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2010': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2011': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['est', 'xp', 'xa', 'sm', 'smf'],
      '2013': ['est', 'xp', 'xa', 'sm', 'smf'],
    },
  },
  'Shelby': {
    'Charger (non-turbo)': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Charger turbo': {
      'all': ['esp', 'xp', 'xa', 'sm'],
    },
    'Cobra': {
      '1963': ['bs', 'xp', 'cams', 'ssm'],
      '1964': ['bs', 'xp', 'cams', 'ssm'],
      '1965': ['bs', 'xp', 'cams', 'ssm'],
      '1966': ['bs', 'xp', 'cams', 'ssm'],
      '1967': ['bs', 'xp', 'cams', 'ssm'],
    },
    'Cobra 289': {
      'all': ['ssp', 'bs', 'xp', 'cams', 'ssm'],
    },
    'GT350': {
      '1965': ['fs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1966': ['fs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1967': ['fs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1968': ['fs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1969': ['fs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1970': ['fs', 'esp', 'cp', 'camt', 'xp', 'sm'],
    },
    'GT500': {
      '1965': ['cp', 'camt', 'xp', 'sm'],
      '1966': ['cp', 'camt', 'xp', 'sm'],
      '1967': ['fs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1968': ['fs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1969': ['fs', 'esp', 'cp', 'camt', 'xp', 'sm'],
      '1970': ['fs', 'esp', 'cp', 'camt', 'xp', 'sm'],
    },
  },
  'Subaru': {
    'BRZ': {
      '2013': ['ds', 'dst', 'csp', 'dsp', 'ssc', 'dp', 'xa', 'sm'],
      '2014': ['ds', 'dst', 'csp', 'dsp', 'ssc', 'dp', 'xa', 'sm'],
      '2015': ['ds', 'ssc', 'dst', 'dsp', 'dp', 'xa', 'sm'],
      '2016': ['ds', 'ssc', 'dst', 'dsp', 'dp', 'xa', 'sm'],
      '2017': ['ds', 'dst', 'dsp', 'dp', 'xa', 'sm'],
      '2018': ['ds', 'dst', 'dsp', 'dp', 'xa', 'sm'],
      '2019': ['ds', 'dst', 'dp', 'xa', 'sm'],
      '2020': ['ds', 'dst', 'dp', 'xa', 'sm'],
      '2022': ['ds', 'cst', 'dp', 'xa', 'sm'],
      '2023': ['ds', 'cst', 'dp', 'xa', 'sm'],
      '2024': ['ds', 'cst', 'dp', 'xa', 'sm'],
    },
    'BRZ tS': {
      '2018': ['cs', 'dst', 'dsp', 'dp', 'xa', 'sm'],
      '2020': ['bs', 'dst', 'dsp', 'dp', 'xa', 'sm'],
    },
    'Forester (non-turbo)': {
      'all': ['fsp', 'xp', 'xa', 'sm'],
    },
    'Forester XT': {
      'all': ['gst', 'xp', 'xa', 'sm'],
    },
    'GL Coupe (non-turbo, FWD)': {
      '1980': ['ep', 'xp', 'xb', 'sm'],
      '1981': ['ep', 'xp', 'xb', 'sm'],
      '1982': ['ep', 'xp', 'xb', 'sm'],
      '1983': ['ep', 'xp', 'xb', 'sm'],
      '1984': ['ep', 'xp', 'xb', 'sm'],
      '1985': ['ep', 'xp', 'xb', 'sm'],
      '1986': ['ep', 'xp', 'xb', 'sm'],
      '1987': ['ep', 'xp', 'xb', 'sm'],
      '1988': ['ep', 'xp', 'xb', 'sm'],
      '1989': ['ep', 'xp', 'xb', 'sm'],
    },
    'Impreza': {
      'all': ['dsp', 'xp', 'xa', 'sm'],
    },
    'Impreza 2.0i': {
      '2012': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm'],
      '2013': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm'],
      '2014': ['hs', 'est', 'xp', 'xa', 'sm'],
      '2015': ['hs', 'est', 'xp', 'xa', 'sm'],
      '2016': ['hs', 'est', 'xp', 'xa', 'sm'],
    },
    'Impreza 2.5 (non-turbo)': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Impreza 2.5 RS': {
      '1998': ['dst', 'xp', 'xa', 'sm'],
      '1999': ['dst', 'xp', 'xa', 'sm'],
      '2000': ['dst', 'xp', 'xa', 'sm'],
      '2001': ['dst', 'xp', 'xa', 'sm'],
    },
    'Impreza (1.8L, FWD)': {
      '1993': ['est', 'xp', 'xa', 'sm'],
      '1994': ['est', 'xp', 'xa', 'sm'],
      '1995': ['est', 'xp', 'xa', 'sm'],
      '1996': ['est', 'xp', 'xa', 'sm'],
    },
    'Impreza (2.5L) (Not Otherwise Classified)': {
      'all': ['dsp', 'xp', 'xa', 'sm'],
    },
    'Impreza (AWD)': {
      'all': ['fp', 'xp', 'xa', 'sm'],
    },
    'Impreza (Not Otherwise Classified)': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Legacy': {
      '1990': ['est', 'fsp', 'xp', 'xa', 'sm'],
      '1991': ['est', 'fsp', 'xp', 'xa', 'sm'],
      '1992': ['est', 'fsp', 'xp', 'xa', 'sm'],
      '1993': ['est', 'fsp', 'xp', 'xa', 'sm'],
      '1994': ['est', 'fsp', 'xp', 'xa', 'sm'],
    },
    'Legacy 2.5GT': {
      '2005': ['gs', 'gst', 'ssp', 'esp', 'xp', 'xa', 'sm'],
      '2006': ['gs', 'gst', 'ssp', 'esp', 'xp', 'xa', 'sm'],
      '2007': ['gs', 'gst', 'ssp', 'esp', 'xp', 'xa', 'sm'],
      '2008': ['gs', 'gst', 'ssp', 'esp', 'xp', 'xa', 'sm'],
      '2009': ['gs', 'gst', 'ssp', 'esp', 'xp', 'xa', 'sm'],
      '2010': ['gs', 'gst', 'ssp', 'esp', 'xp', 'xa', 'sm'],
      '2011': ['gs', 'gst', 'ssp', 'esp', 'xp', 'xa', 'sm'],
      '2012': ['gs', 'gst', 'ssp', 'esp', 'xp', 'xa', 'sm'],
    },
    'Legacy (6-cyl, all)': {
      '1998': ['dsp', 'xp', 'xa', 'sm'],
      '1999': ['dsp', 'xp', 'xa', 'sm'],
      '2000': ['dsp', 'xp', 'xa', 'sm'],
      '2001': ['dsp', 'xp', 'xa', 'sm'],
      '2002': ['dsp', 'xp', 'xa', 'sm'],
      '2003': ['dsp', 'xp', 'xa', 'sm'],
      '2004': ['dsp', 'xp', 'xa', 'sm'],
      '2005': ['dsp', 'xp', 'xa', 'sm'],
      '2006': ['dsp', 'xp', 'xa', 'sm'],
      '2007': ['dsp', 'xp', 'xa', 'sm'],
      '2008': ['dsp', 'xp', 'xa', 'sm'],
      '2009': ['dsp', 'xp', 'xa', 'sm'],
      '2010': ['dsp', 'xp', 'xa', 'sm'],
      '2011': ['dsp', 'xp', 'xa', 'sm'],
      '2012': ['dsp', 'xp', 'xa', 'sm'],
      '2013': ['dsp', 'xp', 'xa', 'sm'],
    },
    'Legacy (Not Otherwise Classified)': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Legacy GT': {
      '2005': ['gst', 'fsp', 'xp', 'xa', 'sm'],
      '2006': ['gst', 'fsp', 'xp', 'xa', 'sm'],
      '2007': ['gst', 'fsp', 'xp', 'xa', 'sm'],
      '2008': ['gst', 'fsp', 'xp', 'xa', 'sm'],
    },
    'Not Otherwise Classified': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Outback (6-cyl, all)': {
      '1998': ['dsp', 'xp', 'xa', 'sm'],
      '1999': ['dsp', 'xp', 'xa', 'sm'],
      '2000': ['dsp', 'xp', 'xa', 'sm'],
      '2001': ['dsp', 'xp', 'xa', 'sm'],
      '2002': ['dsp', 'xp', 'xa', 'sm'],
      '2003': ['dsp', 'xp', 'xa', 'sm'],
      '2004': ['dsp', 'xp', 'xa', 'sm'],
      '2005': ['dsp', 'xp', 'xa', 'sm'],
      '2006': ['dsp', 'xp', 'xa', 'sm'],
      '2007': ['dsp', 'xp', 'xa', 'sm'],
      '2008': ['dsp', 'xp', 'xa', 'sm'],
      '2009': ['dsp', 'xp', 'xa', 'sm'],
      '2010': ['dsp', 'xp', 'xa', 'sm'],
      '2011': ['dsp', 'xp', 'xa', 'sm'],
      '2012': ['dsp', 'xp', 'xa', 'sm'],
      '2013': ['dsp', 'xp', 'xa', 'sm'],
    },
    'STI (excl. S209)': {
      '2019': ['ds', 'xp', 'xa', 'sm'],
      '2020': ['ds', 'xp', 'xa', 'sm'],
      '2021': ['ds', 'xp', 'xa', 'sm'],
    },
    'STI Type RA': {
      '2018': ['bs', 'xp', 'xa', 'sm'],
    },
    'SVX': {
      '1992': ['hs', 'fp', 'xp', 'xa', 'sm'],
      '1993': ['hs', 'fp', 'xp', 'xa', 'sm'],
      '1994': ['hs', 'fp', 'xp', 'xa', 'sm'],
      '1995': ['hs', 'fp', 'xp', 'xa', 'sm'],
      '1996': ['hs', 'fp', 'xp', 'xa', 'sm'],
      '1997': ['hs', 'fp', 'xp', 'xa', 'sm'],
    },
    'Sedan (N/A, FWD, Not Otherwise Classified)': {
      'all': ['ep', 'xp', 'xa', 'sm'],
    },
    'Sedan Turbo (Not Otherwise Classified)': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Sedan/Coupe (Turbo, Not Otherwise Classified)': {
      'all': ['fp', 'xp', 'xa', 'sm'],
    },
    'Solterra': {
      '2023': ['evx'],
      '2024': ['evx'],
    },
    'Turbo 4WD (all, Not Otherwise Classified)': {
      'all': ['fsp', 'xp', 'xa', 'sm'],
    },
    'WRX (non-STI)': {
      '2002': ['gs', 'gst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2003': ['gs', 'gst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2004': ['gs', 'gst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2005': ['gs', 'gst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2006': ['gs', 'gst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2007': ['gs', 'gst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2008': ['gs', 'gst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2009': ['ds', 'gst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2010': ['ds', 'gst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2011': ['ds', 'gst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2012': ['ds', 'gst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2013': ['ds', 'gst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2014': ['ds', 'gst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2015': ['ds', 'gst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2016': ['ds', 'gst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2017': ['ds', 'gst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2018': ['ds', 'gst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2019': ['ds', 'gst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2020': ['ds', 'gst', 'fp', 'xp', 'xa', 'sm'],
      '2021': ['ds', 'gst', 'fp', 'xp', 'xa', 'sm'],
      '2022': ['ds', 'gst', 'fp', 'xp', 'xa', 'sm'],
      '2023': ['ds', 'gst', 'fp', 'xp', 'xa', 'sm'],
      '2024': ['ds', 'gst', 'fp', 'xp', 'xa', 'sm'],
    },
    'WRX STI (including Special Edition)': {
      '2004': ['ds', 'bst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2005': ['ds', 'bst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2006': ['ds', 'bst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2007': ['ds', 'bst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2008': ['ds', 'bst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2009': ['ds', 'bst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2010': ['ds', 'bst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2011': ['ds', 'bst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2012': ['ds', 'bst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2013': ['ds', 'bst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2014': ['ds', 'bst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2015': ['ds', 'bst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2016': ['ds', 'bst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2017': ['ds', 'bst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2018': ['ds', 'bst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2019': ['ds', 'bst', 'ssp', 'fp', 'xp', 'xa', 'sm'],
      '2020': ['ds', 'bst', 'xp', 'fp', 'xa', 'sm'],
      '2021': ['ds', 'bst', 'xp', 'fp', 'xa', 'sm'],
    },
    'WRX TR': {
      '2024': ['ds', 'gst', 'xp', 'fp', 'xa', 'sm'],
    },
    'WRX tS': {
      '2025': ['ds', 'gst', 'xp', 'fp', 'xa', 'sm'],
    },
  },
  'Sunbeam': {
    'Alpine': {
      'all': ['hs', 'fsp', 'dp', 'xp', 'xa', 'ssm'],
    },
    'Tiger': {
      'all': ['es', 'ssp', 'xp', 'xa', 'ssm'],
    },
  },
  'Suzuki': {
    'Aerio': {
      'all': ['fsp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Cappuccino': {
      'all': ['xb', 'dm', 'xp', 'ssm'],
    },
    'Esteem GL': {
      'all': ['hs', 'xp', 'xa', 'sm', 'smf'],
    },
    'Forenza': {
      'all': ['hs', 'xp', 'xa', 'sm', 'smf'],
    },
    'Kizashi': {
      '2010': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2011': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2013': ['hs', 'xp', 'xa', 'sm', 'smf'],
    },
    'SX4 sedan': {
      '2007': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2008': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2009': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2010': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2011': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2013': ['hs', 'xp', 'xa', 'sm', 'smf'],
    },
    'Swift': {
      '1985': ['hs', 'fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1986': ['hs', 'fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1987': ['hs', 'fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1988': ['hs', 'fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1989': ['hs', 'fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1990': ['hs', 'fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1991': ['hs', 'fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1992': ['hs', 'fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1993': ['hs', 'fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1994': ['hs', 'est', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1995': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1996': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1997': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1998': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1999': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '2000': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '2001': ['hs', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '2002': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2003': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2004': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2005': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2006': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2007': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2008': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2009': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2010': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2011': ['hs', 'xp', 'xb', 'sm', 'smf'],
      '2012': ['hs', 'xp', 'xb', 'sm', 'smf'],
    },
    'Swift Turbo': {
      'all': ['fp', 'xp', 'xb', 'sm', 'smf'],
    },
  },
  'TVR': {
    '1800': {
      'all': ['es', 'ssp', 'dp', 'xp', 'xb', 'ssm'],
    },
    '4-cyl': {
      'all': ['es', 'ssp', 'xp', 'xb', 'ssm'],
    },
    '8-cyl': {
      'all': ['bs', 'ssp', 'xp', 'xb', 'ssm'],
    },
    'Griffith 200': {
      'all': ['bs', 'ssp', 'xp', 'xa', 'ssm'],
    },
    'Griffith 400': {
      'all': ['bs', 'ssp', 'xp', 'xa', 'ssm'],
    },
    'Inline-6': {
      'all': ['es', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
    },
    'V6': {
      'all': ['bs', 'ssp', 'fp', 'xp', 'xa', 'ssm'],
    },
    'V12': {
      'all': ['bs', 'xp', 'xa', 'ssm'],
    },
    'Vixen S2 (1599 cc)': {
      'all': ['es', 'ssp', 'dp', 'xp', 'xa', 'ssm'],
    },
  },
  'Tesla': {
    'Model 3 (AWD/Performance)': {
      '2018': ['as', 'ssp', 'xp', 'xu', 'sm', 'evx'],
      '2019': ['as', 'ssp', 'xp', 'xu', 'sm', 'evx'],
      '2020': ['as', 'ssp', 'xp', 'xu', 'sm', 'evx'],
      '2021': ['as', 'ssp', 'xp', 'xu', 'sm', 'evx'],
      '2022': ['as', 'ssp', 'xp', 'xu', 'sm', 'evx'],
      '2023': ['as', 'ssp', 'xp', 'xu', 'sm', 'evx'],
      '2024': ['ss', 'ssp', 'xp', 'xu', 'sm', 'evx'],
      '2025': ['ss', 'ssp', 'xp', 'xu', 'sm', 'evx'],
    },
    'Model 3 (RWD)': {
      '2018': ['ds', 'ssp', 'xp', 'xu', 'sm', 'evx'],
      '2019': ['ds', 'ssp', 'xp', 'xu', 'sm', 'evx'],
      '2020': ['ds', 'ssp', 'xp', 'xu', 'sm', 'evx'],
      '2021': ['ds', 'ssp', 'xp', 'xu', 'sm', 'evx'],
      '2022': ['ds', 'ssp', 'xp', 'xu', 'sm', 'evx'],
      '2023': ['ds', 'ssp', 'xp', 'xu', 'sm', 'evx'],
      '2024': ['ds', 'ssp', 'xp', 'xu', 'sm', 'evx'],
    },
    'Model S': {
      '2012': ['fs', 'xp', 'xa', 'sm', 'evx'],
      '2013': ['fs', 'xp', 'xa', 'sm', 'evx'],
      '2014': ['fs', 'xp', 'xa', 'sm', 'evx'],
      '2015': ['ss', 'xp', 'xa', 'sm', 'evx'],
      '2016': ['ss', 'xp', 'xa', 'sm', 'evx'],
      '2017': ['ss', 'xp', 'xa', 'sm', 'evx'],
      '2018': ['ss', 'xp', 'xa', 'sm', 'evx'],
      '2019': ['ss', 'xp', 'xa', 'sm', 'evx'],
      '2020': ['ss', 'xp', 'xa', 'sm', 'evx'],
      '2021': ['ss', 'xp', 'xa', 'sm', 'evx'],
      '2022': ['ss', 'xp', 'xa', 'sm', 'evx'],
      '2023': ['ss', 'xp', 'xa', 'sm', 'evx'],
      '2024': ['ss', 'xp', 'xa', 'sm', 'evx'],
      '2025': ['ss', 'xp', 'xa', 'sm', 'evx'],
    },
    'Model X': {
      '2016': ['evx'],
      '2017': ['evx'],
      '2018': ['evx'],
      '2019': ['evx'],
      '2020': ['evx'],
      '2021': ['evx'],
      '2022': ['evx'],
      '2023': ['evx'],
      '2024': ['evx'],
    },
    'Model Y (AWD/Performance)': {
      '2020': ['as', 'xp', 'xu', 'sm', 'evx'],
      '2021': ['as', 'xp', 'xu', 'sm', 'evx'],
      '2022': ['as', 'xp', 'xu', 'sm', 'evx'],
      '2023': ['as', 'xp', 'xu', 'sm', 'evx'],
      '2024': ['as', 'xp', 'xu', 'sm', 'evx'],
    },
    'Roadster': {
      '2008': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'sm', 'evx'],
      '2009': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'sm', 'evx'],
      '2010': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'sm', 'evx'],
      '2011': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'sm', 'evx'],
      '2012': ['ss', 'ssr', 'ssp', 'xp', 'xu', 'sm', 'evx'],
      '2013': ['ss', 'ssr', 'xp', 'xu', 'sm', 'evx'],
    },
    'Model S AWD': {
      '2014': ['ss', 'xp', 'xu', 'sm', 'evx'],
      '2015': ['ss', 'xp', 'xu', 'sm', 'evx'],
      '2016': ['ss', 'xp', 'xu', 'sm', 'evx'],
      '2017': ['ss', 'xp', 'xu', 'sm', 'evx'],
      '2018': ['ss', 'xp', 'xu', 'sm', 'evx'],
      '2019': ['ss', 'xp', 'xu', 'sm', 'evx'],
      '2020': ['ss', 'xp', 'xu', 'sm', 'evx'],
      '2021': ['ss', 'xp', 'xu', 'sm', 'evx'],
      '2022': ['ss', 'xp', 'xu', 'sm', 'evx'],
      '2023': ['ss', 'xp', 'xu', 'sm', 'evx'],
      '2024': ['ss', 'xp', 'xu', 'sm', 'evx'],
      '2025': ['ss', 'xp', 'xu', 'sm', 'evx'],
    },
  },
  'Toyota': {
    '86 (with TRD Lowering Springs, TRD Sway Bar Kit, and TRD 17-in. Forged Wheels)': {
      '2017': ['cs', 'dst', 'dsp', 'dp', 'xa', 'sm'],
      '2018': ['cs', 'dst', 'dsp', 'dp', 'xa', 'sm'],
      '2019': ['cs', 'dst', 'dp', 'xa', 'sm'],
      '2020': ['cs', 'dst', 'dp', 'xa', 'sm'],
      '2021': ['cs', 'dst', 'dp', 'xa', 'sm'],
    },
    '86 (without TRD suspension and wheels)': {
      '2017': ['ds', 'dst', 'dsp', 'dp', 'xa', 'sm'],
      '2018': ['ds', 'dst', 'dsp', 'dp', 'xa', 'sm'],
      '2019': ['ds', 'dst', 'dp', 'xa', 'sm'],
      '2020': ['ds', 'dst', 'dp', 'xa', 'sm'],
    },
    'Avalon': {
      '2016': ['hs', 'xa', 'sm'],
      '2017': ['hs', 'xa', 'sm'],
      '2018': ['hs', 'xa', 'sm'],
      '2019': ['hs', 'xa', 'sm'],
      '2020': ['hs', 'xa', 'sm'],
      '2021': ['hs', 'xa', 'sm'],
      '2022': ['hs', 'xa', 'sm'],
    },
    'bZ4X': {
      '2023': ['evx'],
      '2024': ['evx'],
    },
    'Camry (4-cyl)': {
      'all': ['hs', 'fsp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Camry V6': {
      'all': ['hs', 'dsp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Celica (all, non-AWD)': {
      '1971': ['hs', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1972': ['hs', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1973': ['hs', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1974': ['hs', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1975': ['hs', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1976': ['hs', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1977': ['hs', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1978': ['hs', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1979': ['hs', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1981': ['hs', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1982': ['hs', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1983': ['hs', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1984': ['hs', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1985': ['hs', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1986': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1987': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1988': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1989': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1991': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1992': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1993': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1994': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1995': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1996': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1997': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1998': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1999': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2000': ['hs', 'est', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2001': ['hs', 'est', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2002': ['hs', 'est', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2003': ['hs', 'est', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2004': ['hs', 'est', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2005': ['hs', 'est', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
    },
    'Celica All-Trac Turbo': {
      'all': ['gs', 'dsp', 'fp', 'xp', 'xa', 'sm'],
    },
    'Corolla': {
      '1970': ['hs', 'fsp', 'xp', 'xb', 'sm'],
      '1971': ['hs', 'fsp', 'xp', 'xb', 'sm'],
      '1972': ['hs', 'fsp', 'xp', 'xb', 'sm'],
      '1973': ['hs', 'fsp', 'xp', 'xb', 'sm'],
      '1974': ['hs', 'fsp', 'xp', 'xb', 'sm'],
      '1975': ['hs', 'fsp', 'xp', 'xb', 'sm'],
      '1976': ['hs', 'fsp', 'xp', 'xb', 'sm'],
      '1977': ['hs', 'fsp', 'xp', 'xb', 'sm'],
      '1978': ['hs', 'fsp', 'xp', 'xb', 'sm'],
      '1979': ['hs', 'fsp', 'xp', 'xb', 'sm'],
      '1980': ['hs', 'fsp', 'xp', 'xb', 'sm'],
      '1981': ['hs', 'fsp', 'xp', 'xb', 'sm'],
      '1982': ['hs', 'fsp', 'xp', 'xb', 'sm'],
      '1983': ['hs', 'fsp', 'xp', 'xb', 'sm'],
      '1984': ['hs', 'est', 'fsp', 'xp', 'xb', 'sm'],
      '1985': ['hs', 'est', 'fsp', 'xp', 'xb', 'sm'],
      '1986': ['hs', 'est', 'fsp', 'xp', 'xb', 'sm'],
      '1987': ['hs', 'est', 'fsp', 'xp', 'xb', 'sm'],
      '1988': ['hs', 'est', 'fsp', 'xp', 'xb', 'sm'],
      '1989': ['hs', 'est', 'fsp', 'xp', 'xb', 'sm'],
      '1990': ['hs', 'est', 'fsp', 'xp', 'xb', 'sm'],
      '1991': ['hs', 'est', 'fsp', 'xp', 'xb', 'sm'],
      '1992': ['hs', 'est', 'xp', 'xb', 'sm', 'smf'],
      '1993': ['hs', 'est', 'xp', 'xb', 'sm', 'smf'],
      '1994': ['hs', 'est', 'xp', 'xb', 'sm', 'smf'],
      '1995': ['hs', 'est', 'xp', 'xb', 'sm', 'smf'],
      '1996': ['hs', 'est', 'xp', 'xb', 'sm', 'smf'],
      '1997': ['hs', 'est', 'xp', 'xb', 'sm', 'smf'],
      '1998': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '1999': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2000': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2001': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2002': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2003': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2004': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2005': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2006': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2007': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2008': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
      '2009': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2010': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2011': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2013': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2014': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2015': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2016': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2017': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2018': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2019': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2020': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2021': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2022': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2023': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
    },
    'Cressida': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'Echo': {
      '2001': ['est', 'hs', 'xp', 'xb', 'sm', 'smf'],
      '2002': ['est', 'hs', 'xp', 'xb', 'sm', 'smf'],
      '2003': ['est', 'hs', 'xp', 'xb', 'sm', 'smf'],
      '2004': ['est', 'hs', 'xp', 'xb', 'sm', 'smf'],
      '2005': ['est', 'hs', 'xp', 'xb', 'sm', 'smf'],
    },
    'GR86 (10th Anniversary Edition)': {
      '2023': ['bs', 'cst', 'xp', 'xa', 'sm'],
    },
    'GR86 (without TRD equipment, excl. 10th Anniv. Edition)': {
      '2022': ['ds', 'cst', 'xp', 'xa', 'sm'],
      '2023': ['ds', 'cst', 'xp', 'xa', 'sm'],
      '2024': ['ds', 'cst', 'xp', 'xa', 'sm'],
    },
    'GR Corolla (Morizo Edition)': {
      '2023': ['as', 'bst', 'xp', 'xa', 'csp', 'dsp', 'sm'],
      '2024': ['as', 'bst', 'xp', 'xa', 'csp', 'dsp', 'sm'],
    },
    'GR Corolla (excl. MORIZO Edition, excl. Performance Shocks and Springs Package)': {
      '2022': ['bs', 'bst', 'xp', 'xa', 'csp', 'dsp', 'sm'],
      '2023': ['bs', 'bst', 'xp', 'xa', 'csp', 'dsp', 'sm'],
    },
    'GR Corolla (with Performance Shocks and Springs Package)': {
      '2024': ['as', 'bst', 'xp', 'xa', 'csp', 'dsp', 'sm'],
    },
    'MR2 (non-turbo, non-supercharged)': {
      '1985': ['es', 'est', 'csp', 'xp', 'xb', 'ssm'],
      '1986': ['es', 'est', 'csp', 'xp', 'xb', 'ssm'],
      '1987': ['es', 'est', 'csp', 'xp', 'xb', 'ssm'],
      '1988': ['es', 'est', 'csp', 'xp', 'xb', 'ssm'],
      '1989': ['es', 'est', 'csp', 'xp', 'xb', 'ssm'],
      '1990': ['es', 'est', 'csp', 'xp', 'xa', 'ssm'],
      '1991': ['es', 'est', 'csp', 'xp', 'xa', 'ssm'],
      '1992': ['es', 'est', 'csp', 'xp', 'xa', 'ssm'],
      '1993': ['es', 'est', 'csp', 'xp', 'xa', 'ssm'],
      '1994': ['es', 'est', 'csp', 'xp', 'xa', 'ssm'],
      '1995': ['es', 'est', 'csp', 'xp', 'xa', 'ssm'],
    },
    'MR2 Spyder': {
      '2000': ['es', 'cst', 'csp', 'dp', 'xb'],
      '2001': ['es', 'cst', 'csp', 'dp', 'xb'],
      '2002': ['es', 'cst', 'csp', 'dp', 'xb'],
      '2003': ['es', 'cst', 'csp', 'dp', 'xb'],
      '2004': ['es', 'cst', 'csp', 'dp', 'xb'],
      '2005': ['es', 'cst', 'csp', 'dp', 'xb'],
    },
    'MR2 Supercharged': {
      '1985': ['es', 'csp', 'xp', 'xb', 'ssm'],
      '1986': ['es', 'csp', 'xp', 'xb', 'ssm'],
      '1987': ['es', 'csp', 'xp', 'xb', 'ssm'],
      '1988': ['es', 'cst', 'csp', 'xp', 'xb', 'ssm'],
      '1989': ['es', 'cst', 'csp', 'xp', 'xb', 'ssm'],
    },
    'MR2 Turbo': {
      '1991': ['cs', 'csp', 'xa', 'xp', 'ssm'],
      '1992': ['cs', 'csp', 'xa', 'xp', 'ssm'],
      '1993': ['cs', 'csp', 'xa', 'xp', 'ssm'],
      '1994': ['cs', 'csp', 'xa', 'xp', 'ssm'],
      '1995': ['cs', 'csp', 'xa', 'xp', 'ssm'],
    },
    'Matrix': {
      '2003': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2004': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2005': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2006': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2007': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2008': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2009': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2010': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2011': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
      '2013': ['hs', 'est', 'xp', 'xa', 'sm', 'smf'],
    },
    'Paseo': {
      'all': ['hs', 'xp', 'xb', 'sm', 'smf'],
    },
    'Prius': {
      'all': ['hs', 'xp', 'xa', 'sm', 'smf'],
    },
    'Starlet': {
      'all': ['hs', 'fsp', 'xp', 'xb', 'sm', 'smf'],
    },
    'Supra (non-turbo)': {
      '1979': ['hs', 'fp', 'xp', 'xa', 'sm'],
      '1980': ['hs', 'fp', 'xp', 'xa', 'sm'],
      '1981': ['hs', 'fp', 'xp', 'xa', 'sm'],
      '1982': ['hs', 'fp', 'xp', 'xa', 'sm'],
      '1983': ['hs', 'fp', 'xp', 'xa', 'sm'],
      '1984': ['hs', 'fp', 'xp', 'xa', 'sm'],
      '1985': ['hs', 'fp', 'xp', 'xa', 'sm'],
      '1986': ['hs', 'fp', 'xp', 'xa', 'sm'],
      '1987': ['hs', 'xp', 'xa', 'sm'],
      '1988': ['hs', 'xp', 'xa', 'sm'],
      '1989': ['hs', 'xp', 'xa', 'sm'],
      '1990': ['hs', 'xp', 'xa', 'sm'],
      '1991': ['hs', 'xp', 'xa', 'sm'],
      '1992': ['hs', 'xp', 'xa', 'sm'],
      '1993': ['fs', 'dst', 'esp', 'xp', 'xa', 'sm'],
      '1994': ['fs', 'dst', 'esp', 'xp', 'xa', 'sm'],
      '1995': ['fs', 'dst', 'esp', 'xp', 'xa', 'sm'],
      '1996': ['fs', 'dst', 'esp', 'xp', 'xa', 'sm'],
      '1997': ['fs', 'dst', 'xp', 'xa', 'sm'],
      '1998': ['fs', 'dst', 'xp', 'xa', 'sm'],
    },
    'Supra Turbo': {
      '1987': ['fs', 'xp', 'esp', 'xa', 'sm'],
      '1988': ['fs', 'xp', 'esp', 'xa', 'sm'],
      '1989': ['fs', 'xp', 'esp', 'xa', 'sm'],
      '1990': ['fs', 'xp', 'esp', 'xa', 'sm'],
      '1991': ['fs', 'xp', 'esp', 'xa', 'sm'],
      '1992': ['fs', 'xp', 'esp', 'xa', 'sm'],
      '1993': ['bs', 'sst', 'esp', 'xp', 'xa', 'sm'],
      '1994': ['bs', 'sst', 'esp', 'xp', 'xa', 'sm'],
      '1995': ['bs', 'sst', 'esp', 'xp', 'xa', 'sm'],
      '1996': ['bs', 'sst', 'esp', 'xp', 'xa', 'sm'],
      '1997': ['bs', 'sst', 'esp', 'xp', 'xa', 'sm'],
      '1998': ['bs', 'sst', 'esp', 'xp', 'xa', 'sm'],
    },
    'GR Supra (4-cyl)': {
      '2020': ['cs', 'sst', 'xp', 'xa', 'ssm'],
      '2021': ['cs', 'sst', 'xp', 'xa', 'ssm'],
      '2022': ['cs', 'sst', 'xp', 'xa', 'ssm'],
      '2023': ['cs', 'sst', 'xp', 'xa', 'ssm'],
      '2024': ['cs', 'sst', 'xp', 'xa', 'ssm'],
      '2025': ['cs', 'sst', 'xp', 'xa', 'ssm'],
    },
    'GR Supra (6-cyl)': {
      '2020': ['bs', 'sst', 'xp', 'xa', 'ssm'],
      '2021': ['bs', 'sst', 'xp', 'xa', 'ssm'],
      '2022': ['bs', 'sst', 'xp', 'xa', 'ssm'],
      '2023': ['bs', 'sst', 'xp', 'xa', 'ssm'],
      '2024': ['bs', 'sst', 'xp', 'xa', 'ssm'],
      '2025': ['bs', 'sst', 'xp', 'xa', 'ssm'],
    },
    'Tacoma': {
      '1995': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '1996': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '1997': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '1998': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '1999': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '2000': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '2001': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '2002': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '2003': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '2004': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '2005': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '2006': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '2007': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '2008': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '2009': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '2010': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '2011': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '2012': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '2013': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '2014': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '2015': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '2016': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '2017': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '2018': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '2019': ['hs', 'dst', 'xp', 'xa', 'sm'],
      '2020': ['hs', 'dst', 'xp', 'xa', 'sm'],
    },
    'Tercel': {
      'all': ['hs', 'fsp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Yaris': {
      'all': ['hs', 'est', 'fsp', 'xp', 'xa', 'sm', 'smf'],
    },
  },
  'Triumph': {
    'GT-6': {
      'all': ['hs', 'fsp', 'dp', 'xp', 'xb', 'ssm'],
    },
    'Herald (all) ': {
      'all': ['hs', 'fsp', 'xp', 'xb', 'sm'],
    },
    'Spitfire': {
      'all': ['hs', 'fsp', 'dp', 'xp', 'xb', 'ssm'],
    },
    'Stag': {
      'all': ['fs', 'xp', 'xa', 'sm'],
    },
    'TR-2 & TR-3 ': {
      'all': ['hs', 'fsp', 'dp', 'xp', 'xb', 'ssm'],
    },
    'TR-4 & TR-4A ': {
      'all': ['hs', 'fsp', 'dp', 'xp', 'xb', 'ssm'],
    },
    'TR-7': {
      'all': ['hs', 'fsp', 'dp', 'xp', 'xb', 'ssm'],
    },
    'TR-8': {
      'all': ['es', 'csp', 'xp', 'xa', 'ssm'],
    },
    'TR-250 & TR-6 ': {
      'all': ['hs', 'fsp', 'xp', 'xa', 'ssm'],
    },
  },
  'Volkswagen': {
    'Beetle': {
      '1950': ['hs', 'est', 'fsp', 'xp', 'xb', 'sm'],
      '1951': ['hs', 'est', 'fsp', 'xp', 'xb', 'sm'],
      '1952': ['hs', 'est', 'fsp', 'xp', 'xb', 'sm'],
      '1953': ['hs', 'est', 'fsp', 'xp', 'xb', 'sm'],
      '1954': ['hs', 'est', 'fsp', 'xp', 'xb', 'sm'],
      '1955': ['hs', 'est', 'fsp', 'xp', 'xb', 'sm'],
      '1956': ['hs', 'est', 'fsp', 'xp', 'xb', 'sm'],
      '1957': ['hs', 'est', 'fsp', 'xp', 'xb', 'sm'],
      '1958': ['hs', 'est', 'fsp', 'xp', 'xb', 'sm'],
      '1959': ['hs', 'est', 'fsp', 'xp', 'xb', 'sm'],
      '1960': ['hs', 'est', 'fsp', 'xp', 'xb', 'sm'],
      '1961': ['hs', 'est', 'fsp', 'xp', 'xb', 'sm'],
      '1962': ['hs', 'est', 'fsp', 'xp', 'xb', 'sm'],
      '1963': ['hs', 'est', 'fsp', 'xp', 'xb', 'sm'],
      '1964': ['hs', 'est', 'fsp', 'xp', 'xb', 'sm'],
      '1965': ['hs', 'est', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1966': ['hs', 'est', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1967': ['hs', 'est', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1968': ['hs', 'est', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1969': ['hs', 'est', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1970': ['hs', 'est', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1971': ['hs', 'est', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1972': ['hs', 'est', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1973': ['hs', 'est', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1974': ['hs', 'est', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1975': ['hs', 'est', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1976': ['hs', 'est', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '1977': ['hs', 'est', 'fsp', 'dp', 'xp', 'xb', 'sm'],
      '2011': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2013': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2014': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2015': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2016': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2017': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2018': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2019': ['hs', 'xp', 'xa', 'sm', 'smf'],
    },
    'Cabrio': {
      'all': ['hs', 'dst', 'fsp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Corrado': {
      'all': ['hs', 'dst', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
    },
    'Dasher': {
      'all': ['hs', 'fsp', 'xp', 'xb', 'sm', 'smf'],
    },
    'Eos (2.0T)': {
      '2007': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2008': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2009': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2010': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2011': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2013': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2014': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2015': ['hs', 'xp', 'xa', 'sm', 'smf'],
      '2016': ['hs', 'xp', 'xa', 'sm', 'smf'],
    },
    'Fox': {
      'all': ['hs', 'fsp', 'xp', 'xa', 'sm'],
    },
    'GLI 2.0L Turbo': {
      '2006': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2007': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2008': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2009': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2010': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2011': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2013': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2014': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2015': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2016': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2017': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2018': ['gs', 'xp', 'xa', 'sm', 'smf'],
      '2019': ['gs', 'xp', 'xa', 'sm', 'smf'],
    },
    'GTI (40th Anniv. Edition)': {
      '2023': ['ds', 'gst', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
    },
    'Golf': {
      '1974': ['hs', 'est', 'sm', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1975': ['hs', 'est', 'sm', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1976': ['hs', 'est', 'sm', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1977': ['hs', 'est', 'sm', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1978': ['hs', 'est', 'sm', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1979': ['hs', 'est', 'sm', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1980': ['hs', 'est', 'sm', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1981': ['hs', 'est', 'sm', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1982': ['hs', 'est', 'sm', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1983': ['hs', 'est', 'sm', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1984': ['hs', 'est', 'sm', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1985': ['hs', 'est', 'fsp', 'sm', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1986': ['hs', 'est', 'fsp', 'sm', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1987': ['hs', 'est', 'fsp', 'sm', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1988': ['hs', 'est', 'fsp', 'sm', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1989': ['hs', 'est', 'fsp', 'sm', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1990': ['hs', 'est', 'fsp', 'sm', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1991': ['hs', 'est', 'fsp', 'sm', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1992': ['hs', 'est', 'fsp', 'sm', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1993': ['hs', 'fsp', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1994': ['hs', 'fsp', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1995': ['hs', 'fsp', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1996': ['hs', 'fsp', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1997': ['hs', 'fsp', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1998': ['hs', 'fsp', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1999': ['hs', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2000': ['hs', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2001': ['hs', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2002': ['hs', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2003': ['hs', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2004': ['hs', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2005': ['hs', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2006': ['hs', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2007': ['hs', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2008': ['hs', 'gst', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2009': ['hs', 'gst', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2010': ['hs', 'gst', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2011': ['hs', 'gst', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['hs', 'gst', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2013': ['hs', 'gst', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2014': ['hs', 'gst', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2015': ['hs', 'gst', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2016': ['hs', 'gst', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2017': ['hs', 'gst', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2018': ['hs', 'gst', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2019': ['hs', 'gst', 'sm', 'ep', 'xp', 'xa', 'sm', 'smf'],
    },
    'Golf GTI': {
      '1975': ['hs', 'est', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1976': ['hs', 'est', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1977': ['hs', 'est', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1978': ['hs', 'est', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1979': ['hs', 'est', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1980': ['hs', 'est', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1981': ['hs', 'est', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1982': ['hs', 'est', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1983': ['hs', 'est', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1984': ['hs', 'est', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1985': ['hs', 'est', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1986': ['hs', 'est', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1987': ['hs', 'est', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1988': ['hs', 'est', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1989': ['hs', 'est', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1990': ['hs', 'est', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1991': ['hs', 'est', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1992': ['hs', 'est', 'dsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
      '1993': ['hs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1994': ['hs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1995': ['hs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1996': ['hs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1997': ['hs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1998': ['hs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '1999': ['hs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2000': ['hs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2001': ['hs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2002': ['hs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2003': ['hs', 'gst', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2004': ['hs', 'gst', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2005': ['hs', 'gst', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2006': ['hs', 'gst', 'esp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2007': ['hs', 'gst', 'esp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2008': ['hs', 'gst', 'esp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2009': ['hs', 'gst', 'esp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2010': ['hs', 'gst', 'esp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2011': ['hs', 'gst', 'esp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['hs', 'gst', 'esp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2013': ['hs', 'gst', 'esp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2014': ['hs', 'gst', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2015': ['gs', 'gst', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2016': ['gs', 'gst', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2017': ['gs', 'gst', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2018': ['gs', 'gst', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2019': ['gs', 'gst', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2020': ['gs', 'gst', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2021': ['gs', 'gst', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2022': ['gs', 'gst', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2023': ['gs', 'gst', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2024': ['gs', 'gst', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
    },
    'Golf R': {
      '2012': ['ds', 'dsp', 'sm', 'ep', 'xp', 'xa', 'sm'],
      '2013': ['ds', 'dsp', 'sm', 'ep', 'xp', 'xa', 'sm'],
      '2015': ['ds', 'bst', 'ssp', 'sm', 'ep', 'xp', 'xa', 'sm'],
      '2016': ['ds', 'bst', 'ssp', 'sm', 'ep', 'xp', 'xa', 'sm'],
      '2017': ['ds', 'bst', 'ssp', 'sm', 'ep', 'xp', 'xa', 'sm'],
      '2018': ['ds', 'bst', 'ssp', 'sm', 'ep', 'xp', 'xa', 'sm'],
      '2019': ['ds', 'bst', 'ssp', 'sm', 'ep', 'xp', 'xa', 'sm'],
      '2022': ['ds', 'bst', 'ssp', 'sm', 'ep', 'xp', 'xa', 'sm'],
      '2023': ['ds', 'bst', 'ssp', 'sm', 'ep', 'xp', 'xa', 'sm'],
      '2024': ['ds', 'bst', 'ssp', 'sm', 'ep', 'xp', 'xa', 'sm'],
    },
    'ID.4': {
      '2021': ['ds', 'evx'],
      '2022': ['ds', 'evx'],
      '2023': ['ds', 'evx'],
      '2024': ['ds', 'evx'],
    },
    'Jetta 1.8L Turbo': {
      'all': ['hs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
    },
    'Jetta 2.0L Turbo': {
      '2006': ['hs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2007': ['hs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2008': ['hs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2009': ['hs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2010': ['hs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2011': ['hs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2012': ['hs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2013': ['gs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2014': ['gs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2015': ['gs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2016': ['gs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2017': ['gs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2018': ['gs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
      '2019': ['gs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
    },
    'Jetta TDI': {
      'all': ['hs', 'est', 'fsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
    },
    'Karmann Ghia': {
      'all': ['hs', 'est', 'fsp', 'xp', 'xb', 'sm'],
    },
    'New Beetle': {
      'all': ['hs', 'dsp', 'ep', 'xp', 'xa', 'sm', 'smf'],
    },
    'Passat (2.0L Turbo)': {
      'all': ['hs', 'gst', 'fsp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Passat (3.6L VR6)': {
      'all': ['hs', 'dst', 'esp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Passat (Not Otherwise Classified)': {
      'all': ['hs', 'fsp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Passat (W8)': {
      'all': ['hs', 'dst', 'esp', 'xp', 'xa', 'sm', 'smf'],
    },
    'Quantum': {
      'all': ['hs', 'fsp', 'xp', 'xa', 'sm', 'smf'],
    },
    'R32': {
      '2004': ['ds', 'dst', 'esp', 'fp', 'xp', 'xa', 'sm'],
      '2008': ['ds', 'dst', 'esp', 'xp', 'xa', 'sm'],
    },
    'Rabbit': {
      'all': ['hs', 'est', 'fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
    },
    'Rabbit GTI': {
      'all': ['hs', 'est', 'fsp', 'ep', 'xp', 'xb', 'sm', 'smf'],
    },
    'Scirocco': {
      'all': ['hs', 'fsp', 'xp', 'xa', 'sm', 'smf'],
    },
    'e-Golf': {
      '2015': ['hs', 'xp', 'xa', 'sm', 'smf', 'evx'],
      '2016': ['hs', 'xp', 'xa', 'sm', 'smf', 'evx'],
      '2017': ['hs', 'xp', 'xa', 'sm', 'smf', 'evx'],
      '2018': ['hs', 'xp', 'xa', 'sm', 'smf', 'evx'],
      '2019': ['hs', 'xp', 'xa', 'sm', 'smf', 'evx'],
    },
  },
  'Volvo': {
    '122S': {
      '1956': ['dp', 'xp', 'xb', 'sm'],
      '1957': ['dp', 'xp', 'xb', 'sm'],
      '1958': ['dp', 'xp', 'xb', 'sm'],
      '1959': ['dp', 'xp', 'xb', 'sm'],
      '1960': ['dp', 'xp', 'xb', 'sm'],
      '1961': ['dp', 'xp', 'xb', 'sm'],
      '1962': ['dp', 'xp', 'xb', 'sm'],
      '1963': ['dp', 'xp', 'xb', 'sm'],
      '1964': ['dp', 'xp', 'xb', 'sm'],
      '1965': ['dp', 'xp', 'xb', 'sm'],
      '1966': ['dp', 'xp', 'xb', 'sm'],
      '1967': ['dp', 'xp', 'xb', 'sm'],
      '1968': ['dp', 'xp', 'xb', 'sm'],
      '1969': ['dp', 'xp', 'xb', 'sm'],
      '1970': ['dp', 'xp', 'xb', 'sm'],
    },
    '142S & 142E': {
      '1967': ['dp', 'xp', 'xa', 'sm'],
      '1968': ['dp', 'xp', 'xa', 'sm'],
      '1969': ['dp', 'xp', 'xa', 'sm'],
      '1970': ['dp', 'xp', 'xa', 'sm'],
      '1971': ['dp', 'xp', 'xa', 'sm'],
      '1972': ['dp', 'xp', 'xa', 'sm'],
      '1973': ['dp', 'xp', 'xa', 'sm'],
      '1974': ['dp', 'xp', 'xa', 'sm'],
    },
    '240 Turbo': {
      '1981': ['gs', 'est', 'gst', 'dsp', 'xp', 'xa', 'sm'],
      '1982': ['gs', 'est', 'gst', 'dsp', 'xp', 'xa', 'sm'],
      '1983': ['gs', 'est', 'gst', 'dsp', 'xp', 'xa', 'sm'],
      '1984': ['gs', 'est', 'gst', 'dsp', 'xp', 'xa', 'sm'],
      '1985': ['gs', 'est', 'gst', 'dsp', 'xp', 'xa', 'sm'],
    },
    '700 Series': {
      'all': ['esp', 'xp', 'xa', 'sm'],
    },
    '800 Series': {
      'all': ['esp', 'xp', 'xa', 'sm'],
    },
    'C30': {
      'all': ['hs', 'gst', 'xp', 'xa', 'sm'],
    },
    'NOC': {
      'all': ['hs', 'xp', 'xa', 'sm'],
    },
    'P-1800 (1780 cc)': {
      'all': ['dp', 'xp', 'xa', 'sm'],
    },
    'P-1800 (1982 cc)': {
      'all': ['dp', 'xp', 'xa', 'sm'],
    },
    'S40': {
      '1995': ['gst', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '1996': ['gst', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '1997': ['gst', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '1998': ['gst', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '1999': ['gst', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '2000': ['gst', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '2001': ['gst', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '2002': ['gst', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '2003': ['gst', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '2004': ['gst', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '2005': ['gst', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '2006': ['gst', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '2007': ['gst', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '2008': ['gst', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '2009': ['gst', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '2010': ['gst', 'dsp', 'xp', 'xa', 'sm', 'smf'],
      '2011': ['gst', 'dsp', 'xp', 'xa', 'sm', 'smf'],
    },
    'S40 (non-T5)': {
      'all': ['est', 'xp', 'xa', 'sm', 'smf'],
    },
    'S60 & V70': {
      'all': ['esp', 'xp', 'xa', 'sm', 'smf'],
    },
    'S60 Polestar': {
      '2016': ['ds', 'xp', 'xa', 'sm', 'smf'],
      '2017': ['ds', 'xp', 'xa', 'sm', 'smf'],
      '2018': ['ds', 'xp', 'xa', 'sm', 'smf'],
      '2019': ['ds', 'xp', 'xa', 'sm', 'smf'],
      '2020': ['ds', 'xp', 'xa', 'sm', 'smf'],
    },
    'S60R': {
      '2004': ['dsp', 'bst', 'gs', 'xp', 'xa', 'sm', 'smf'],
      '2005': ['dsp', 'bst', 'gs', 'xp', 'xa', 'sm', 'smf'],
      '2006': ['dsp', 'bst', 'gs', 'xp', 'xa', 'sm', 'smf'],
      '2007': ['dsp', 'bst', 'gs', 'xp', 'xa', 'sm', 'smf'],
    },
    'Sedans (N/A, RWD, NOC)': {
      'all': ['dp', 'xp', 'xa', 'sm'],
    },
    'Turbo models (NOC)': {
      'all': ['gs', 'xp', 'xa', 'sm'],
    },
    'V40': {
      'all': ['est', 'xp', 'xa', 'sm'],
    },
    'V50': {
      'all': ['gst', 'xp', 'xa', 'sm'],
    },
    'V60 Polestar': {
      '2016': ['ds', 'xp', 'xa', 'sm'],
      '2017': ['ds', 'xp', 'xa', 'sm'],
      '2018': ['ds', 'xp', 'xa', 'sm'],
      '2019': ['ds', 'xp', 'xa', 'sm'],
      '2020': ['ds', 'xp', 'xa', 'sm'],
      '2021': ['ds', 'xp', 'xa', 'sm'],
      '2022': ['ds', 'xp', 'xa', 'sm'],
    },
    'V70R': {
      '2004': ['dsp', 'gs', 'xp', 'xa', 'sm'],
      '2005': ['dsp', 'gs', 'xp', 'xa', 'sm'],
      '2006': ['dsp', 'gs', 'xp', 'xa', 'sm'],
      '2007': ['dsp', 'gs', 'xp', 'xa', 'sm'],
    },
    'C40 Recharge': {
      '2022': ['evx'],
      '2023': ['evx'],
      '2024': ['evx'],
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

    if (!document.getElementById('subClass')) {
      const newDiv = document.createElement('div');
      newDiv.setAttribute('id', 'subClass');
      const specificClass = document.getElementById('streetSubclass');
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
      if (subClasses[i] == 'est') {
        subClass = 'est';
        break;
      }
      if (subClasses[i] == 'cst') {
        subClass = 'cst';
        break;
      }
      if (subClasses[i] == 'dst') {
        subClass = 'dst';
        break;
      }
      if (subClasses[i] == 'bst') {
        subClass = 'bst';
        break;
      }
      if (subClasses[i] == 'gst') {
        subClass = 'gst';
        break;
      }
      if (subClasses[i] == 'sst') {
        subClass = 'sst';
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
      const specificClass = document.getElementById('streettouringSubclass');
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
 * This function is specific to xtreme pages
 */
function highlightAndFilterXtremeStreet() { // eslint-disable-line no-unused-vars
  if (sessionStorage.getItem('make') && sessionStorage.getItem('model') && sessionStorage.getItem('year')) {
    const providedMake = sessionStorage.getItem('make');
    const providedModel = sessionStorage.getItem('model');
    const providedYear = sessionStorage.getItem('year');

    const subClasses = allSoloCars[providedMake][providedModel][providedYear];
    let subClass = '';
    for (let i = 0; i < subClasses.length; i++) {
      if (subClasses[i] == 'xa') {
        subClass = 'xa';
        break;
      }
      if (subClasses[i] == 'xb') {
        subClass = 'xb';
        break;
      }
      if (subClasses[i] == 'xu') {
        subClass = 'xu';
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

    if (!document.getElementById('subClass')) {
      const newDiv = document.createElement('div');
      newDiv.setAttribute('id', 'subClass');
      const specificClass = document.getElementById('mSubclass');
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
