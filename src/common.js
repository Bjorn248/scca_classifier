// carFlags maps class identifiers to arrays of question IDs in display order.
// All entries are auto-generated from main.go configuration.
const carFlags = {
  'streetCar': [
    'streetLandingPage',
    'streetAuthorized',
    'streetBodywork',
    'streetTires',
    'streetWheels',
    'streetShocks',
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
    'streettouringShocks',
    'streettouringBrakes',
    'streettouringAntiRoll',
    'streettouringSuspension',
    'streettouringElectrical',
    'streettouringEngine',
    'streettouringOutofProduction',
  ],
  'spCar': [
    'spLandingPage',
    'streetpreparedAuthorized',
    'streetpreparedBodywork',
    'streetpreparedTires',
    'streetpreparedWheels',
    'streetpreparedShocks',
    'streetpreparedBrakes',
    'streetpreparedAntiRoll',
    'streetpreparedSuspension',
    'streetpreparedElectrical',
    'streetpreparedOutofProduction',
  ],
  'smCar': [
    'smLandingPage',
    'streetmodifiedAllowed',
    'streetmodifiedMinimum',
  ],
  'pCar': [
    'pLandingPage',
    'preparedAuthorized',
    'preparedBodywork',
    'preparedTires',
    'preparedWheels',
    'preparedShocks',
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
    'modifiedSpecials',
    'modifiedFormula',
    'modifiedLegends',
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
  'csmCar': [
    'csmLandingPage',
    'csmBodywork',
    'csmSafety',
    'csmSuspension',
    'csmElectrical',
    'csmBrakes',
    'csmEngineAndDrivetrain',
  ],
  'csxCar': [
    'csxLandingPage',
    'csxBodywork',
    'csxSafety',
    'csxSuspension',
    'csxElectrical',
    'csxBrakes',
    'csxEngineAndDrivetrain',
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
  'csm': 'Club Spec Mustang',
  'csx': 'Club Spec MX-5',
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

// Class to URL mapping for eligible classes
const classUrlMap = {
  'ss': '/a/s.html',
  'as': '/a/s.html',
  'bs': '/a/s.html',
  'cs': '/a/s.html',
  'ds': '/a/s.html',
  'es': '/a/s.html',
  'fs': '/a/s.html',
  'gs': '/a/s.html',
  'hs': '/a/s.html',
  'ssr': '/a/s.html',
  'ssc': '/a/ssc.html',
  'csm': '/a/csm.html',
  'csx': '/a/csx.html',
  'ast': '/a/st.html',
  'bst': '/a/st.html',
  'cst': '/a/st.html',
  'dst': '/a/st.html',
  'est': '/a/st.html',
  'gst': '/a/st.html',
  'sst': '/a/st.html',
  'camc': '/a/cam.html',
  'camt': '/a/cam.html',
  'cams': '/a/cam.html',
  'evx': '/a/ev.html',
  'xa': '/a/x.html',
  'xb': '/a/x.html',
  'xu': '/a/x.html',
  'ssp': '/a/sp.html',
  'csp': '/a/sp.html',
  'dsp': '/a/sp.html',
  'esp': '/a/sp.html',
  'fsp': '/a/sp.html',
  'ssm': '/a/sm.html',
  'sm': '/a/sm.html',
  'smf': '/a/sm.html',
  'xp': '/a/p.html',
  'cp': '/a/p.html',
  'dp': '/a/p.html',
  'ep': '/a/p.html',
  'fp': '/a/p.html',
  'am': '/a/m.html',
  'bm': '/a/m.html',
  'cm': '/a/m.html',
  'dm': '/a/m.html',
  'em': '/a/m.html',
  'fm': '/a/m.html',
};

// Global variable to track current view state
let showingEligibleOnly = false;

/**
 * Toggle between showing the full table and showing only eligible classes
 */
function toggleTableView() { // eslint-disable-line no-unused-vars
  const tableContainer = document.getElementById('classesTableContainer');
  const eligibleList = document.getElementById('eligibleClassesList');
  const toggleBtn = document.getElementById('toggleTableBtn');

  if (showingEligibleOnly) {
    // Show table, hide eligible list
    tableContainer.style.display = 'block';
    eligibleList.style.display = 'none';
    toggleBtn.textContent = 'Show Eligible Classes Only';
    showingEligibleOnly = false;
  } else {
    // Hide table, show eligible list
    tableContainer.style.display = 'none';
    eligibleList.style.display = 'block';
    toggleBtn.textContent = 'Show Full Class Table';
    showingEligibleOnly = true;
    updateEligibleClassesList();
  }
}

// Mobile media query handler
const mobileQuery = window.matchMedia('(max-width: 768px)');

/**
 * Handle mobile media query changes
 * @param {MediaQueryListEvent} e - The media query event
 */
function handleMobileChange(e) {
  const tableContainer = document.getElementById('classesTableContainer');
  const eligibleList = document.getElementById('eligibleClassesList');
  const toggleBtn = document.getElementById('toggleTableBtn');

  if (!tableContainer || !eligibleList || !toggleBtn) return;

  if (e.matches) {
    // Mobile: Show eligible classes, hide table and toggle button
    tableContainer.style.display = 'none';
    eligibleList.style.display = 'block';
    toggleBtn.style.display = 'none';
    showingEligibleOnly = true;
    updateEligibleClassesList();
  } else {
    // Desktop: Show table, hide eligible classes, show toggle button
    tableContainer.style.display = 'block';
    eligibleList.style.display = 'none';
    toggleBtn.style.display = 'inline-block';
    toggleBtn.textContent = 'Show Eligible Classes Only';
    showingEligibleOnly = false;
  }
}

// Initialize when DOM is ready and listen for media query changes
document.addEventListener('DOMContentLoaded', function() {
  handleMobileChange(mobileQuery);
});
mobileQuery.addListener(handleMobileChange);

/**
 * Update the eligible classes list based on current car selection
 * @return {void}
 */
function updateEligibleClassesList() {
  const grid = document.getElementById('eligibleClassesGrid');
  const eligibleClasses = getCurrentEligibleClasses();

  if (eligibleClasses.length === 0) {
    grid.innerHTML = '<div class="no-eligible-classes">Please select your car\'s make, model, and year to see eligible classes.</div>'; // eslint-disable-line max-len
    return;
  }

  // Create eligible class items
  let html = '';
  eligibleClasses.forEach((classId) => {
    const className = subclassMap[classId] || classId.toUpperCase();
    const url = classUrlMap[classId] || '/a/';
    const acronym = classId.toUpperCase();

    html += `
      <a href="${url}" class="eligible-class-item">
        <div class="eligible-class-acronym">${acronym}</div>
        <div class="eligible-class-name">${className}</div>
      </a>
    `;
  });

  grid.innerHTML = html;
}

/**
 * Get currently eligible classes based on selected car
 * @return {Array} Array of eligible class IDs
 */
function getCurrentEligibleClasses() {
  const make = document.getElementById('make').value;
  const model = document.getElementById('model').value;
  const year = document.getElementById('year').value;

  if (!make || !model || !year || make === 'Make' || model === 'Model' || year === 'Year') {
    return [];
  }

  // Get classes for the selected car
  if (allSoloCars[make] && allSoloCars[make][model]) {
    const modelData = allSoloCars[make][model];
    if (modelData[year]) {
      return modelData[year];
    } else if (modelData['all']) {
      return modelData['all'];
    }
  }

  return [];
}

const allSoloCars = {
  'AMC': {
    'AMX': {
      'all': ['es'],
      '1968': ['cp'],
      '1969': ['cp'],
      '1970': ['cp'],
    },
    'AMX & Javelin': {
      'all': ['esp'],
    },
    'Gremlin': {
      'all': ['hs'],
    },
    'Gremlin (8-cyl)': {
      '1970': ['cp'],
      '1971': ['cp'],
      '1972': ['cp'],
      '1973': ['cp'],
      '1974': ['cp'],
      '1975': ['cp'],
      '1976': ['cp'],
      '1977': ['cp'],
      '1978': ['cp'],
    },
    'Javelin': {
      'all': ['es'],
      '1968': ['cp'],
      '1969': ['cp'],
      '1970': ['cp'],
      '1971': ['cp'],
      '1972': ['cp'],
      '1973': ['cp'],
      '1974': ['cp'],
    },
    'Spirit': {
      'all': ['hs'],
    },
    'Spirit (8-cyl)': {
      '1979': ['cp'],
      '1980': ['cp'],
      '1981': ['cp'],
      '1982': ['cp'],
      '1983': ['cp'],
    },
  },
  'Acura': {
    'CL': {
      'all': ['hs'],
    },
    'ILX': {
      'all': ['cst', 'hs'],
    },
    'Integra': {
      '1986': ['ep', 'est', 'fsp'],
      '1987': ['ep', 'est', 'fsp'],
      '1988': ['ep', 'est', 'fsp'],
      '1989': ['ep', 'est', 'fsp'],
      '1990': ['ep', 'esp', 'est'],
      '1991': ['ep', 'esp', 'est'],
      '1992': ['ep', 'esp', 'est'],
      '1993': ['ep', 'esp', 'est'],
      '1994': ['ep'],
      '1995': ['ep'],
      '1996': ['ep'],
      '1997': ['ep'],
      '1998': ['ep'],
      '1999': ['ep'],
      '2000': ['ep'],
      '2001': ['ep'],
    },
    'Integra (Base)': {
      '2023': ['hs'],
      '2024': ['hs'],
      '2025': ['hs'],
    },
    'Integra (Non Type S)': {
      '2022': ['gst'],
      '2023': ['gst'],
      '2024': ['gst'],
      '2025': ['gst'],
    },
    'Integra (all except Type R)': {
      '1986': ['hs'],
      '1987': ['hs'],
      '1988': ['hs'],
      '1989': ['hs'],
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
      '2001': ['hs'],
    },
    'Integra (incl. Type R)': {
      '1994': ['cst', 'esp'],
      '1995': ['cst', 'esp'],
      '1996': ['cst', 'esp'],
      '1997': ['cst', 'esp'],
      '1998': ['cst', 'esp'],
      '1999': ['cst', 'esp'],
      '2000': ['cst', 'esp'],
      '2001': ['cst', 'esp'],
    },
    'Integra Type R': {
      'all': ['ds'],
    },
    'Integra Type S': {
      '2024': ['bs'],
      '2025': ['bs'],
    },
    'Integra Type-S': {
      '2024': ['bst'],
      '2025': ['bst'],
    },
    'Legend': {
      'all': ['fsp', 'hs'],
    },
    'NSX': {
      'all': ['bs'],
      '1990': ['fp', 'ssp'],
      '1991': ['fp', 'ssp'],
      '1992': ['fp', 'ssp'],
      '1993': ['fp', 'ssp'],
      '1994': ['fp', 'ssp'],
      '1995': ['fp', 'ssp'],
      '1996': ['fp', 'ssp'],
      '1997': ['fp', 'ssp'],
      '1998': ['fp', 'ssp'],
      '1999': ['fp', 'ssp'],
      '2000': ['fp', 'ssp'],
      '2001': ['fp', 'ssp'],
      '2002': ['fp', 'ssp'],
      '2003': ['fp', 'ssp'],
      '2004': ['fp', 'ssp'],
      '2005': ['fp', 'ssp'],
      '2016': ['ssp'],
      '2017': ['ss', 'ssp'],
      '2018': ['ss', 'ssp'],
      '2019': ['ss', 'ssp'],
      '2020': ['ss', 'ssp'],
      '2021': ['ss', 'ssp'],
    },
    'NSX Alex Zanardi Signature Edition': {
      'all': ['as'],
    },
    'RLX': {
      'all': ['gs'],
    },
    'RSX': {
      'all': ['cst', 'esp'],
      '2002': ['ep'],
      '2003': ['ep'],
      '2004': ['ep'],
      '2005': ['ep'],
      '2006': ['ep'],
    },
    'RSX (non-S) *Limited Prep*': {
      'all': ['fsp'],
    },
    'Sedans': {
      'all': ['ep'],
    },
    'TL': {
      'all': ['hs'],
    },
    'TLX': {
      'all': ['gs'],
    },
    'TSX': {
      'all': ['cst', 'esp', 'hs'],
    },
    'Vigor': {
      'all': ['hs'],
    },
  },
  'Alfa Romeo': {
    '100-4': {
      'all': ['dp'],
    },
    '1300': {
      'all': ['fsp'],
    },
    '1600': {
      'all': ['fsp'],
    },
    '1600 GTV': {
      '1974': ['dp'],
    },
    '164 (non-S)': {
      '1991': ['hs'],
      '1992': ['hs'],
      '1993': ['hs'],
    },
    '1750': {
      'all': ['fsp'],
    },
    '1750 & 1750 GTV': {
      'all': ['hs'],
    },
    '2000': {
      'all': ['fsp', 'hs'],
    },
    '2000 GTV': {
      'all': ['es'],
    },
    '2000 Spider': {
      'all': ['es'],
    },
    '4C (incl. Spider)': {
      '2015': ['as', 'sst'],
      '2016': ['as', 'sst'],
      '2017': ['as', 'sst'],
      '2018': ['as', 'sst'],
      '2019': ['as', 'sst'],
      '2020': ['as', 'sst'],
    },
    '4C *Limited Prep*': {
      'all': ['dsp'],
    },
    'A108': {
      'all': ['dp'],
    },
    'A110 1100': {
      'all': ['dp'],
    },
    'Alfetta GT': {
      'all': ['fsp'],
      '1976': ['dp'],
      '1977': ['dp'],
      '1978': ['dp'],
      '1979': ['dp'],
    },
    'Alpine': {
      'all': ['dp'],
    },
    'Alternate body part: Niki Lauda Edition Spoiler': {
      'all': ['dp'],
    },
    'Alternate body part: Niki Lauda Edition spoiler': {
      'all': ['dp'],
    },
    'Alternate cylinder head: 19510.01053.04': {
      'all': ['dp'],
    },
    'Alternate part: louvered hood': {
      'all': ['dp'],
    },
    'Austin-Healey & MG': {
      'all': ['dp'],
    },
    'D Prepared': {
      'all': ['dp'],
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
    'GTA': {
      'all': ['dp'],
    },
    'GTV 1750 & 2000': {
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
    'GTV V6': {
      'all': ['esp', 'hs'],
      '1981': ['fp'],
      '1982': ['fp'],
      '1983': ['fp'],
      '1984': ['fp'],
      '1985': ['fp'],
      '1986': ['fp'],
    },
    'Giuletta Sprint & Spider': {
      'all': ['dp'],
    },
    'Giulia (incl. Ti)': {
      '2017': ['bst', 'ds'],
      '2018': ['bst', 'ds'],
      '2019': ['bst', 'ds'],
      '2020': ['bst', 'ds'],
      '2021': ['bst', 'ds'],
      '2022': ['bst', 'ds'],
      '2023': ['bst', 'ds'],
      '2024': ['bst', 'ds'],
      '2025': ['bst', 'ds'],
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
    'Giulia Quadrifoglio': {
      '2017': ['bs', 'sst'],
      '2018': ['bs', 'sst'],
      '2019': ['bs', 'sst'],
      '2020': ['bs', 'sst'],
      '2021': ['bs', 'sst'],
      '2022': ['bs', 'sst'],
      '2023': ['bs', 'sst'],
      '2024': ['bs', 'sst'],
      '2025': ['sst'],
    },
    'Junior Z': {
      'all': ['dp'],
    },
    'MGA': {
      'all': ['dp'],
    },
    'MGA Twin Cam': {
      'all': ['dp'],
    },
    'MGB & MGB-GT': {
      'all': ['dp'],
    },
    'Midget & Sprite': {
      'all': ['dp'],
    },
    'Milano': {
      'all': ['esp', 'hs'],
    },
    'Replace wood floorboards with metal.': {
      'all': ['dp'],
    },
    'Sedan': {
      'all': ['hs'],
    },
    'Sedan or sports car': {
      'all': ['dp'],
    },
    'Spider 2000 & Spider 2000 Veloce (1962 cc)': {
      '1971': ['dp'],
      '1972': ['dp'],
      '1973': ['dp'],
      '1974': ['dp'],
      '1975': ['dp'],
      '1976': ['dp'],
    },
    'Spider Duetto 1750 Spider Veloce (1779 cc)': {
      '1969': ['dp'],
      '1970': ['dp'],
    },
    'Sport Sedan': {
      'all': ['dp'],
    },
  },
  'Aston Martin': {
    'V8 Vantage': {
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
      '2017': ['bs'],
      '2018': ['as'],
      '2019': ['as'],
      '2020': ['as'],
      '2021': ['as'],
      '2022': ['as'],
      '2023': ['as'],
    },
  },
  'Audi': {
    '100': {
      'all': ['hs'],
    },
    '100-6': {
      'all': ['fp'],
    },
    '100LS': {
      'all': ['fsp'],
    },
    '200 Turbo quattro': {
      'all': ['hs'],
    },
    '200, & 200 quattro': {
      'all': ['esp'],
    },
    '3000': {
      'all': ['fp'],
    },
    '4000': {
      'all': ['fsp'],
    },
    '4000, 4000 Quattro, Coupe Quattro, Coupe': {
      '1981': ['fp'],
      '1982': ['fp'],
      '1983': ['fp'],
      '1984': ['fp'],
      '1985': ['fp'],
      '1986': ['fp'],
      '1987': ['fp'],
    },
    '4000S (non-turbo, FWD)': {
      '1980': ['ep'],
      '1981': ['ep'],
      '1982': ['ep'],
      '1983': ['ep'],
      '1984': ['ep'],
      '1985': ['ep'],
      '1986': ['ep'],
      '1987': ['ep'],
    },
    '80': {
      'all': ['fsp'],
    },
    '90': {
      'all': ['fsp'],
    },
    '90 Coupe, 90 Quattro Coupe & Sedan': {
      '1990': ['fp'],
      '1991': ['fp'],
    },
    '997, 998, 1071, & 1275, all)': {
      'all': ['fsp'],
    },
    'A3': {
      'all': ['gst'],
      '2005': ['esp'],
      '2006': ['esp'],
      '2007': ['esp'],
      '2008': ['esp'],
      '2009': ['esp'],
      '2010': ['esp'],
      '2011': ['esp'],
      '2012': ['esp'],
      '2013': ['esp'],
    },
    'A3 (AWD)': {
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
      '2021': ['ds'],
    },
    'A3 (FWD)': {
      '2006': ['hs'],
      '2007': ['hs'],
      '2008': ['hs'],
      '2009': ['hs'],
      '2010': ['hs'],
      '2011': ['hs'],
      '2012': ['hs'],
      '2013': ['hs'],
      '2015': ['gs'],
      '2016': ['gs'],
      '2017': ['gs'],
      '2018': ['gs'],
      '2019': ['gs'],
      '2020': ['gs'],
      '2021': ['gs'],
      '2022': ['gs'],
      '2023': ['gs'],
      '2024': ['gs'],
      '2025': ['gs'],
    },
    'A3 Sportback e-tron': {
      '2017': ['gs'],
      '2018': ['gs'],
    },
    'A4': {
      'all': ['gs', 'gst'],
      '2008': ['esp'],
      '2009': ['esp'],
      '2010': ['esp'],
      '2011': ['esp'],
      '2012': ['esp'],
      '2013': ['esp'],
      '2014': ['esp'],
      '2015': ['esp'],
      '2016': ['esp'],
    },
    'A4 (1.8T, FWD & quattro)': {
      '1995': ['esp'],
      '1996': ['esp'],
      '1997': ['esp'],
      '1998': ['esp'],
      '1999': ['esp'],
      '2000': ['esp'],
      '2001': ['esp'],
      '2002': ['esp'],
      '2003': ['esp'],
      '2004': ['esp'],
      '2005': ['esp'],
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
    'A6': {
      'all': ['gs'],
    },
    'A6 (V6 Supercharged)': {
      '2008': ['es'],
      '2009': ['es'],
      '2010': ['es'],
      '2011': ['es'],
      '2012': ['es'],
      '2013': ['es'],
      '2014': ['es'],
      '2015': ['es'],
      '2016': ['es'],
      '2017': ['es'],
    },
    'A6 (V8)': {
      '1997': ['es'],
      '1998': ['es'],
      '1999': ['es'],
      '2000': ['es'],
      '2001': ['es'],
      '2002': ['es'],
      '2003': ['es'],
      '2004': ['es'],
      '2005': ['es'],
      '2006': ['es'],
      '2007': ['es'],
      '2008': ['es'],
      '2009': ['es'],
      '2010': ['es'],
      '2011': ['es'],
    },
    'A7 (all)': {
      '2010': ['es'],
      '2011': ['es'],
      '2012': ['es'],
      '2013': ['es'],
      '2014': ['es'],
      '2015': ['es'],
      '2016': ['es'],
      '2017': ['es'],
      '2018': ['es'],
      '2019': ['es'],
      '2020': ['es'],
      '2021': ['es'],
      '2022': ['es'],
      '2023': ['es'],
      '2024': ['es'],
      '2025': ['es'],
    },
    'A8 & A8 quattro': {
      'all': ['esp'],
    },
    'A8 & V8 quattro': {
      'all': ['gs'],
    },
    'America': {
      'all': ['fsp'],
      '1968': ['ep'],
      '1969': ['ep'],
      '1970': ['ep'],
      '1971': ['ep'],
    },
    'Austin': {
      'all': ['fsp', 'hs'],
    },
    'Austin & Morris': {
      'all': ['ep'],
    },
    'Austin-Healey': {
      'all': ['fp', 'fsp'],
    },
    'Beretta (4-cyl & V6)': {
      '1987': ['ep'],
      '1988': ['ep'],
      '1989': ['ep'],
      '1990': ['ep'],
      '1991': ['ep'],
      '1992': ['ep'],
      '1993': ['ep'],
      '1994': ['ep'],
      '1995': ['ep'],
      '1996': ['ep'],
    },
    'Chevrolet, Pontiac, Buick, Oldsmobile, & Cadillac Equivalents': {
      'all': ['ep'],
    },
    'Chrysler, Plymouth, Dodge, Eagle, & Mitsubishi': {
      'all': ['ep'],
    },
    'Citation': {
      '1980': ['ep'],
      '1981': ['ep'],
      '1982': ['ep'],
      '1983': ['ep'],
      '1984': ['ep'],
      '1985': ['ep'],
    },
    'Colt & Champ (non-turbo)': {
      '1979': ['ep'],
      '1980': ['ep'],
      '1981': ['ep'],
      '1982': ['ep'],
      '1983': ['ep'],
    },
    'Colt & Mirage (non-turbo)': {
      '1984': ['ep'],
      '1985': ['ep'],
      '1986': ['ep'],
      '1987': ['ep'],
      '1988': ['ep'],
      '1993': ['ep'],
      '1994': ['ep'],
      '1995': ['ep'],
      '1996': ['ep'],
    },
    'Colt, Mirage, & Summit (non-turbo)': {
      '1989': ['ep'],
      '1990': ['ep'],
      '1991': ['ep'],
      '1992': ['ep'],
    },
    'Coupe GT & Quattro': {
      '1980': ['esp'],
      '1981': ['esp'],
      '1982': ['esp'],
      '1983': ['esp'],
      '1984': ['esp'],
      '1985': ['esp'],
      '1986': ['esp'],
      '1987': ['esp'],
      '1988': ['esp'],
    },
    'Coupe quattro': {
      'all': ['hs'],
    },
    'Daytona & Laser (2.2 L non-turbo)': {
      '1984': ['ep'],
      '1985': ['ep'],
      '1986': ['ep'],
      '1987': ['ep'],
      '1988': ['ep'],
      '1989': ['ep'],
      '1990': ['ep'],
    },
    'Eclipse, Laser, & Talon (16v & 8v non-turbo, FWD)': {
      '1982': ['ep'],
      '1983': ['ep'],
      '1984': ['ep'],
      '1985': ['ep'],
      '1986': ['ep'],
      '1987': ['ep'],
      '1988': ['ep'],
      '1989': ['ep'],
      '1990': ['ep'],
    },
    'F Prepared': {
      'all': ['fp'],
    },
    'Firewall modification for adjustable front track rod, front lower': {
      'all': ['ep'],
    },
    'Mini Cooper S': {
      'all': ['ep'],
    },
    'Neon (non-turbo)': {
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
    'Neon SRT-4': {
      '2003': ['ep'],
      '2004': ['ep'],
      '2005': ['ep'],
    },
    'Nova (FWD)': {
      '1985': ['ep'],
      '1986': ['ep'],
      '1987': ['ep'],
      '1988': ['ep'],
    },
    'Omni, Horizon, 024, & TC3': {
      '1978': ['ep'],
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
    },
    'Quattro': {
      'all': ['gs'],
    },
    'Quattro Turbo Coupe': {
      'all': ['esp'],
    },
    'R8 (except GT)': {
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
      '2018': ['ssp'],
      '2019': ['ssp'],
      '2020': ['ssp'],
      '2021': ['ssp'],
      '2022': ['ssp'],
      '2023': ['ssp'],
    },
    'R8 (non-GT)': {
      '2008': ['ss'],
      '2009': ['ss'],
      '2010': ['ss'],
      '2011': ['ss'],
      '2012': ['ss'],
      '2013': ['ss'],
      '2014': ['ss'],
      '2015': ['ss'],
    },
    'R8 (non-Plus)': {
      '2016': ['ss'],
      '2017': ['ss'],
      '2018': ['ss'],
      '2019': ['ss'],
      '2020': ['ss'],
      '2021': ['ss'],
    },
    'RS 3': {
      '2017': ['bs', 'sst'],
      '2018': ['bs', 'sst'],
      '2019': ['bs', 'sst'],
      '2020': ['sst'],
      '2022': ['bs', 'sst'],
      '2023': ['bs', 'sst'],
      '2024': ['bs', 'sst'],
      '2025': ['bs', 'sst'],
    },
    'RS 4': {
      '2007': ['bs', 'sst'],
      '2008': ['bs', 'sst'],
    },
    'RS 5': {
      '2013': ['bs', 'sst'],
      '2014': ['bs', 'sst'],
      '2015': ['bs', 'sst'],
      '2016': ['bs', 'sst'],
      '2017': ['bs', 'sst'],
      '2018': ['bs', 'sst'],
      '2019': ['bs', 'sst'],
      '2020': ['bs', 'sst'],
      '2021': ['bs', 'sst'],
      '2022': ['bs', 'sst'],
      '2023': ['bs', 'sst'],
      '2024': ['bs'],
      '2025': ['bs'],
    },
    'RS 6 (C5 chassis)': {
      '2003': ['bs', 'sst'],
      '2004': ['bs', 'sst'],
    },
    'RS7': {
      '2014': ['bs', 'sst'],
      '2015': ['bs', 'sst'],
      '2016': ['bs', 'sst'],
      '2017': ['bs', 'sst'],
      '2018': ['bs', 'sst'],
    },
    'S3': {
      '2015': ['bst', 'ssp'],
      '2016': ['bst', 'ssp'],
      '2017': ['bst', 'ssp'],
      '2018': ['bst', 'ssp'],
      '2019': ['bst', 'ssp'],
      '2020': ['bst', 'ssp'],
    },
    'S3 (2.0T)': {
      '2015': ['ds'],
      '2016': ['ds'],
      '2017': ['ds'],
      '2018': ['ds'],
      '2019': ['ds'],
      '2020': ['ds'],
      '2021': ['ds'],
    },
    'S4': {
      'all': ['bst'],
      '2000': ['ds', 'esp'],
      '2001': ['ds', 'esp'],
      '2002': ['ds', 'esp'],
      '2003': ['ds', 'esp'],
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
      '2021': ['ds'],
      '2022': ['ds'],
      '2023': ['ds'],
      '2024': ['ds'],
      '2025': ['ds'],
    },
    'S4 & RS4': {
      '2004': ['esp'],
      '2005': ['esp'],
      '2006': ['esp'],
      '2007': ['esp'],
      '2008': ['esp'],
      '2009': ['esp'],
    },
    'S4 (100 CS chassis)': {
      '1992': ['hs'],
      '1993': ['hs'],
      '1994': ['hs'],
    },
    'S4 (2010-16) & S5': {
      '2013': ['esp'],
      '2014': ['esp'],
      '2015': ['esp'],
      '2016': ['esp'],
    },
    'S4 (V8)': {
      '2004': ['es'],
      '2005': ['es'],
      '2006': ['es'],
      '2007': ['es'],
      '2008': ['es'],
      '2009': ['es'],
    },
    'S5': {
      'all': ['bst'],
      '2008': ['bs', 'sst'],
      '2009': ['bs', 'sst'],
      '2010': ['bs', 'sst'],
      '2011': ['bs', 'sst'],
      '2012': ['bs', 'sst'],
      '2013': ['bs', 'sst'],
      '2014': ['bs', 'sst'],
      '2015': ['bs', 'sst'],
      '2016': ['bs', 'sst'],
      '2017': ['bs', 'sst'],
      '2018': ['bs', 'sst'],
      '2019': ['bs', 'sst'],
      '2020': ['bs', 'sst'],
      '2021': ['bs', 'sst'],
      '2022': ['bs', 'sst'],
      '2023': ['bs', 'sst'],
      '2024': ['bs'],
      '2025': ['bs'],
    },
    'S6': {
      '2013': ['bs', 'sst'],
      '2014': ['bs', 'sst'],
      '2015': ['bs', 'sst'],
      '2016': ['bs', 'sst'],
      '2017': ['bs', 'sst'],
      '2018': ['bs', 'sst'],
    },
    'S7': {
      '2012': ['bs', 'sst'],
      '2013': ['bs', 'sst'],
      '2014': ['bs', 'sst'],
      '2015': ['bs', 'sst'],
      '2016': ['bs', 'sst'],
      '2017': ['bs', 'sst'],
      '2018': ['bs', 'sst'],
    },
    'Sedans': {
      'all': ['ep'],
    },
    'Shadow & Sundance (2.2 L)': {
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
    'Shelby Charger': {
      '1979': ['ep'],
      '1983': ['ep'],
      '1984': ['ep'],
      '1985': ['ep'],
      '1986': ['ep'],
      '1987': ['ep'],
    },
    'Sonic (Turbo)': {
      '2012': ['ep'],
      '2013': ['ep'],
      '2014': ['ep'],
      '2015': ['ep'],
      '2016': ['ep'],
      '2017': ['ep'],
      '2018': ['ep'],
      '2019': ['ep'],
      '2020': ['ep'],
    },
    'Sonic (non-turbo)': {
      '2012': ['ep'],
      '2013': ['ep'],
      '2014': ['ep'],
      '2015': ['ep'],
      '2016': ['ep'],
      '2017': ['ep'],
    },
    'Spectrum': {
      '1985': ['ep'],
      '1986': ['ep'],
      '1987': ['ep'],
      '1988': ['ep'],
    },
    'Spirit & Acclaim (4-cyl)': {
      '1989': ['ep'],
      '1990': ['ep'],
      '1991': ['ep'],
      '1992': ['ep'],
      '1993': ['ep'],
      '1994': ['ep'],
      '1995': ['ep'],
    },
    'Sprint (non-turbo)': {
      '1985': ['ep'],
      '1986': ['ep'],
      '1987': ['ep'],
      '1988': ['ep'],
      '1989': ['ep'],
      '1990': ['ep'],
      '1991': ['ep'],
    },
    'Sprite': {
      'all': ['fsp'],
    },
    'TT': {
      'all': ['esp', 'fp'],
      '2014': ['esp'],
      '2015': ['esp'],
      '2016': ['esp'],
      '2017': ['esp'],
      '2018': ['esp'],
      '2019': ['esp'],
    },
    'TT (1.8T, non-quattro/FWD)': {
      '2000': ['ds'],
      '2001': ['ds'],
      '2002': ['ds'],
      '2003': ['ds'],
      '2004': ['ds'],
      '2005': ['ds'],
      '2006': ['ds'],
    },
    'TT (2.0T, non-quattro/FWD)': {
      '2008': ['ds'],
      '2009': ['ds'],
    },
    'TT Coupe & Roadster': {
      'all': ['gst'],
    },
    'TT RS': {
      '2012': ['as', 'ssp', 'sst'],
      '2013': ['as', 'ssp', 'sst'],
      '2018': ['as', 'sst'],
      '2019': ['as', 'sst'],
      '2020': ['as', 'sst'],
      '2021': ['sst'],
      '2022': ['sst'],
    },
    'TT RS (2018-22) *Limited Prep*': {
      'all': ['ssp'],
    },
    'TT quattro': {
      'all': ['gst'],
    },
    'TT quattro (AWD)': {
      '2000': ['ds'],
      '2001': ['ds'],
      '2002': ['ds'],
      '2003': ['ds'],
      '2004': ['ds'],
      '2005': ['ds'],
      '2006': ['ds'],
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
    'TTS': {
      '2009': ['ds', 'esp'],
      '2010': ['ds', 'esp'],
      '2011': ['ds', 'esp'],
      '2012': ['ds', 'esp'],
      '2013': ['ds', 'esp'],
      '2014': ['ds', 'ssp'],
      '2015': ['ds', 'ssp'],
      '2016': ['bs', 'ssp', 'sst'],
      '2017': ['bs', 'ssp', 'sst'],
      '2018': ['bs', 'ssp', 'sst'],
      '2019': ['bs', 'ssp', 'sst'],
      '2020': ['bs', 'ssp', 'sst'],
      '2021': ['ssp', 'sst'],
      '2022': ['ssp', 'sst'],
      '2023': ['sst'],
    },
    'TTS quattro': {
      '2008': ['bst'],
      '2009': ['bst'],
      '2010': ['bst'],
      '2011': ['bst'],
      '2012': ['bst'],
      '2013': ['bst'],
      '2014': ['bst'],
      '2015': ['bst'],
    },
    'V8 quattro': {
      'all': ['esp'],
    },
  },
  'BMW': {
    '(G80)': {
      '2023': ['ss'],
      '2024': ['ss'],
      '2025': ['ss'],
    },
    '(G80) (exclc. CS)': {
      '2020': ['as'],
      '2021': ['as'],
      '2022': ['as'],
      '2023': ['as'],
      '2024': ['as'],
      '2025': ['as'],
    },
    '(G82) (excl. CSL)': {
      '2020': ['as'],
      '2021': ['as'],
      '2022': ['as'],
      '2023': ['as'],
      '2024': ['as'],
      '2025': ['as'],
    },
    '(G82) (excl. CSL,CS) (2023- M5 CS': {
      '2022': ['ss'],
    },
    '1 Series (6-cyl non-turbo, E82/E88 chassis)': {
      '2008': ['fp'],
      '2009': ['fp'],
      '2010': ['fp'],
    },
    '1 Series M Coupe': {
      '2011': ['bs'],
      '2012': ['bs'],
    },
    '128i': {
      'all': ['esp'],
      '2008': ['cst', 'ds'],
      '2009': ['cst', 'ds'],
      '2010': ['cst', 'ds'],
      '2011': ['cst', 'ds'],
      '2012': ['cst', 'ds'],
      '2013': ['cst', 'ds'],
    },
    '128i *Limited Prep*': {
      'all': ['esp'],
    },
    '135 & 1 Series M': {
      '2008': ['ssp'],
      '2009': ['ssp'],
      '2010': ['ssp'],
      '2011': ['ssp'],
      '2012': ['ssp'],
      '2013': ['ssp'],
    },
    '135i & 135is': {
      'all': ['bst'],
      '2008': ['es'],
      '2009': ['es'],
      '2010': ['es'],
      '2011': ['es'],
      '2012': ['es'],
      '2013': ['es'],
    },
    '1600': {
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
    '1600-2, 1602, & 2002': {
      'all': ['fsp'],
    },
    '1800ti & 1800 TiSA': {
      'all': ['fsp'],
    },
    '2 Series (228i, 230i) (4-cyl Turbo;': {
      'all': ['ds'],
    },
    '2 Series (230i incl. xDrive)': {
      'all': ['ds'],
    },
    '2 series Gran Coupe (228i X- Drive and M235i)': {
      '2020': ['ds'],
      '2021': ['ds'],
      '2022': ['ds'],
      '2023': ['ds'],
    },
    '2000 CS coupe': {
      'all': ['hs'],
    },
    '2000ti': {
      '1966': ['dp'],
      '1967': ['dp'],
      '1968': ['dp'],
      '1969': ['dp'],
      '1970': ['dp'],
      '1971': ['dp'],
      '1972': ['dp'],
    },
    '2002, 2002ti, & 2002tii': {
      '1968': ['dp'],
      '1969': ['dp'],
      '1970': ['dp'],
      '1971': ['dp'],
      '1972': ['dp'],
      '1973': ['dp'],
      '1974': ['dp'],
      '1975': ['dp'],
      '1976': ['dp'],
    },
    '228i': {
      '2014': ['bst'],
      '2015': ['bst'],
    },
    '228i Gran Coupe': {
      'all': ['bst'],
    },
    '228i Gran Coupe (FWD) (2020- 2 series Gran Coupe': {
      'all': ['gs'],
    },
    '2500 & 2800': {
      'all': ['esp'],
    },
    '3 Series': {
      'all': ['cst', 'esp'],
    },
    '3 Series & M3': {
      'all': ['dp'],
    },
    '3 Series (328i, 328d, 330i) (4-cyl': {
      'all': ['ds'],
    },
    '3 Series (6-cyl 12v, E30 chassis)': {
      '1984': ['fp'],
      '1985': ['fp'],
      '1986': ['fp'],
      '1987': ['fp'],
      '1988': ['fp'],
      '1989': ['fp'],
      '1990': ['fp'],
    },
    '3 Series (6-cyl 24v, E36 chassis)': {
      '1992': ['fp'],
      '1993': ['fp'],
      '1994': ['fp'],
      '1995': ['fp'],
      '1996': ['fp'],
      '1997': ['fp'],
      '1998': ['fp'],
    },
    '3 Series (6-cyl all, E46 chassis)': {
      '1999': ['fp'],
      '2000': ['fp'],
      '2001': ['fp'],
      '2002': ['fp'],
      '2003': ['fp'],
      '2004': ['fp'],
      '2005': ['fp'],
    },
    '3 Series (6-cyl non-turbo, E90/E91/E92/E93 chassis)': {
      '2006': ['fp'],
      '2007': ['fp'],
      '2008': ['fp'],
      '2009': ['fp'],
      '2010': ['fp'],
      '2011': ['fp'],
      '2012': ['fp'],
      '2013': ['fp'],
    },
    '3 Series (F30/F31 chassis; 6-cyl': {
      'all': ['es'],
    },
    '3 Series E21 (4-cyl)': {
      '1975': ['dp'],
      '1976': ['dp'],
      '1977': ['dp'],
      '1978': ['dp'],
      '1979': ['dp'],
      '1980': ['dp'],
      '1981': ['dp'],
      '1982': ['dp'],
      '1983': ['dp'],
    },
    '3 Series E30 (4-cyl)': {
      '1984': ['dp'],
      '1985': ['dp'],
      '1986': ['dp'],
      '1987': ['dp'],
      '1988': ['dp'],
      '1989': ['dp'],
      '1990': ['dp'],
      '1991': ['dp'],
      '1992': ['dp'],
      '1993': ['dp'],
    },
    '3 Series Turbo (Non-M)': {
      '2007': ['bst'],
      '2008': ['bst'],
      '2009': ['bst'],
      '2010': ['bst'],
      '2011': ['bst'],
      '2012': ['bst'],
      '2013': ['bst'],
      '2014': ['bst'],
      '2015': ['bst'],
      '2016': ['bst'],
      '2017': ['bst'],
      '2018': ['bst'],
      '2019': ['bst'],
      '2020': ['bst'],
      '2021': ['bst'],
      '2022': ['bst'],
      '2023': ['bst'],
      '2024': ['bst'],
      '2025': ['bst'],
    },
    '3 series (G20/21 Chassis 330i': {
      'all': ['es'],
    },
    '3-rib/4-rib': {
      'all': ['fsp'],
    },
    '3.0S & CS': {
      'all': ['esp'],
    },
    '318 (16v) & 325': {
      'all': ['esp'],
    },
    '318i': {
      'all': ['fsp'],
    },
    '318i & 318is': {
      'all': ['fsp'],
    },
    '318ti': {
      'all': ['fsp'],
    },
    '320': {
      'all': ['hs'],
    },
    '320i': {
      'all': ['dp'],
    },
    '320i (E21 chassis)': {
      '1975': ['fsp'],
      '1976': ['fsp'],
      '1977': ['fsp'],
      '1978': ['fsp'],
      '1979': ['fsp'],
      '1980': ['fsp'],
      '1981': ['fsp'],
      '1982': ['fsp'],
      '1983': ['fsp'],
    },
    '320i (F30 chassis)': {
      '2012': ['esp'],
      '2013': ['esp'],
      '2014': ['esp'],
      '2015': ['esp'],
      '2016': ['esp'],
    },
    '320i (F30/F31/F34)': {
      '2014': ['gs'],
      '2015': ['gs'],
      '2016': ['gs'],
      '2017': ['gs'],
      '2018': ['gs'],
      '2019': ['gs'],
    },
    '323, 325, & 328': {
      'all': ['esp'],
    },
    '323i Convertible, 323is, 328i Con- ': {
      '1985': ['gs'],
      '1986': ['gs'],
      '1987': ['gs'],
      '1988': ['gs'],
      '1989': ['gs'],
      '1990': ['gs'],
      '1991': ['gs'],
      '1992': ['gs'],
      '1993': ['gs'],
      '1994': ['gs'],
      '1995': ['gs'],
      '1996': ['gs'],
      '1997': ['gs'],
      '1998': ['gs'],
      '1999': ['gs'],
      '2000': ['gs'],
      '2001': ['gs'],
      '2002': ['gs'],
      '2003': ['gs'],
    },
    '328': {
      '2006': ['esp'],
      '2007': ['esp'],
      '2008': ['esp'],
      '2009': ['esp'],
      '2010': ['esp'],
      '2011': ['esp'],
      '2012': ['esp'],
      '2013': ['esp'],
    },
    '335': {
      '2006': ['esp'],
      '2007': ['esp'],
      '2008': ['esp'],
      '2009': ['esp'],
      '2010': ['esp'],
      '2011': ['esp'],
      '2012': ['esp'],
      '2013': ['esp'],
    },
    '335d': {
      '2009': ['es'],
      '2010': ['es'],
      '2011': ['es'],
    },
    '335i & 335is': {
      'all': ['es'],
    },
    '4 Series (428i, 430i) (4-cyl Tur- M3 (E36 chassis)': {
      '1995': ['ds'],
      '1996': ['ds'],
      '1997': ['ds'],
      '1998': ['ds'],
      '1999': ['ds'],
    },
    '4 Series (F32/F33/F36 chassis;': {
      'all': ['es'],
    },
    '4 Series (Non-M)': {
      '2014': ['bst'],
      '2015': ['bst'],
      '2016': ['bst'],
      '2017': ['bst'],
      '2018': ['bst'],
      '2019': ['bst'],
      '2020': ['bst'],
      '2021': ['bst'],
      '2022': ['bst'],
      '2023': ['bst'],
      '2024': ['bst'],
      '2025': ['bst'],
    },
    '5 Series (E28, E34, E39, &E60/61': {
      'all': ['gs'],
    },
    '5 series': {
      'all': ['es'],
    },
    '5 series (G30/G31/G38 chassis)': {
      '2017': ['es'],
      '2018': ['es'],
      '2019': ['es'],
      '2020': ['es'],
      '2021': ['es'],
      '2022': ['es'],
    },
    '528, 530, & 533': {
      'all': ['esp'],
    },
    '530i': {
      '1975': ['dp'],
      '1976': ['dp'],
      '1977': ['dp'],
      '1978': ['dp'],
    },
    '6 Series (E24 chassis; 6-cyl, non- M6)': {
      '1984': ['gs'],
      '1985': ['gs'],
      '1986': ['gs'],
      '1987': ['gs'],
      '1988': ['gs'],
      '1989': ['gs'],
    },
    '6 series (E63/E64, F12/F13, &': {
      'all': ['es'],
    },
    '6-cyl Turbo)': {
      '2014': ['es'],
      '2015': ['es'],
      '2016': ['es'],
      '2017': ['es'],
      '2018': ['es'],
      '2019': ['es'],
      '2020': ['es'],
    },
    '633i & 733i': {
      'all': ['esp'],
    },
    '7 Series': {
      'all': ['hs'],
    },
    '8 series coupe': {
      'all': ['es'],
    },
    'Bavaria': {
      'all': ['esp'],
    },
    'Bricklin': {
      'all': ['esp'],
    },
    'Camaro ZL1 (2012-13) *Limited': {
      'all': ['esp'],
    },
    'Camaro ZL1 (2017-24) *Limited': {
      'all': ['esp'],
    },
    'Corvette': {
      'all': ['esp'],
      '1963': ['esp'],
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
      '1977': ['esp'],
      '1978': ['esp'],
      '1979': ['esp'],
      '1980': ['esp'],
      '1981': ['esp'],
      '1982': ['esp'],
    },
    'Corvette (1984-96)': {
      'all': ['esp'],
    },
    'D.O.T. Radial': {
      'all': ['fsp'],
    },
    'DeLorean': {
      'all': ['esp'],
    },
    'Direzza ZIII': {
      'all': ['fsp'],
    },
    'Eagle F1': {
      'all': ['fsp'],
    },
    'Ecsta V730': {
      'all': ['fsp'],
    },
    'Engine Classifications': {
      'all': ['fsp'],
    },
    'ExtremeContact': {
      'all': ['fsp'],
    },
    'F22 chassis)': {
      '2014': ['ds'],
      '2015': ['ds'],
      '2016': ['ds'],
      '2017': ['ds'],
      '2018': ['ds'],
      '2019': ['ds'],
      '2020': ['ds'],
      '2021': ['ds'],
    },
    'Force': {
      'all': ['fsp'],
    },
    'G32 chassis)': {
      '2003': ['es'],
      '2004': ['es'],
      '2005': ['es'],
      '2006': ['es'],
      '2007': ['es'],
      '2008': ['es'],
      '2009': ['es'],
      '2010': ['es'],
      '2011': ['es'],
      '2012': ['es'],
      '2013': ['es'],
      '2014': ['es'],
      '2015': ['es'],
      '2016': ['es'],
      '2017': ['es'],
      '2018': ['es'],
      '2019': ['es'],
      '2020': ['es'],
      '2021': ['es'],
      '2022': ['es'],
    },
    'M Coupe': {
      '1998': ['cst'],
      '1999': ['cst'],
      '2000': ['cst'],
      '2001': ['cst'],
      '2002': ['cst'],
    },
    'M Coupe & M Roadster (1996- M Coupe & Roadster': {
      '2001': ['cs'],
      '2002': ['cs'],
    },
    'M Coupe, M Roadster, & Z3 (6- Z4': {
      'all': ['dsp'],
    },
    'M Roadster': {
      '1998': ['cst'],
      '1999': ['cst'],
      '2000': ['cst'],
      '2001': ['cst'],
      '2002': ['cst'],
    },
    'M2': {
      'all': ['as', 'bs', 'ssp', 'sst'],
    },
    'M2 (non-ZL9) *Limited Prep*': {
      'all': ['esp'],
    },
    'M2 CS': {
      '2020': ['as'],
      '2021': ['as'],
    },
    'M2 Competition': {
      '2019': ['bs', 'sst'],
      '2020': ['bs', 'sst'],
      '2021': ['bs', 'sst'],
    },
    'M2 Competition *Limited Prep*': {
      'all': ['esp'],
    },
    'M2 Performance Edition': {
      'all': ['as'],
    },
    'M235i': {
      '2014': ['bst', 'ssp'],
      '2015': ['bst', 'ssp'],
      '2016': ['bst', 'ssp'],
    },
    'M235i (F22)': {
      '2014': ['es'],
      '2015': ['es'],
      '2016': ['es'],
    },
    'M235i Gran Coupe': {
      '2020': ['bst'],
      '2021': ['bst'],
      '2022': ['bst'],
      '2023': ['bst'],
      '2024': ['bst'],
    },
    'M240i (inc. xDrive)': {
      '2017': ['sst'],
      '2018': ['sst'],
      '2019': ['sst'],
      '2020': ['sst'],
      '2021': ['sst'],
      '2022': ['sst'],
      '2023': ['sst'],
    },
    'M240i (incl. xDrive)': {
      '2017': ['es'],
      '2018': ['es'],
      '2019': ['es'],
      '2020': ['es'],
      '2021': ['es'],
      '2022': ['es'],
      '2023': ['es'],
      '2024': ['es'],
      '2025': ['es'],
    },
    'M3': {
      'all': ['as', 'esp', 'ss'],
      '2008': ['bst'],
      '2009': ['bst'],
      '2010': ['bst'],
      '2011': ['bst'],
      '2012': ['bst'],
      '2013': ['bst'],
    },
    'M3 & M4': {
      'all': ['bs'],
    },
    'M3 (E30)': {
      '1988': ['cs'],
      '1989': ['cs'],
      '1990': ['cs'],
      '1991': ['cs'],
    },
    'M3 (E36 chassis) *Limited Prep*': {
      'all': ['esp'],
    },
    'M3 (E36, non-LTW)': {
      '1995': ['cst'],
      '1996': ['cst'],
      '1997': ['cst'],
      '1998': ['cst'],
      '1999': ['cst'],
    },
    'M3 (E46 & E90/E92/E93 chassis)': {
      '2000': ['es'],
      '2001': ['es'],
      '2002': ['es'],
      '2003': ['es'],
      '2004': ['es'],
      '2005': ['es'],
      '2006': ['es'],
      '2007': ['es'],
      '2008': ['es'],
      '2009': ['es'],
      '2010': ['es'],
      '2011': ['es'],
      '2012': ['es'],
      '2013': ['es'],
    },
    'M3 (E46)': {
      '2000': ['bst'],
      '2001': ['bst'],
      '2002': ['bst'],
      '2003': ['bst'],
      '2004': ['bst'],
      '2005': ['bst'],
    },
    'M3 (E46) *Limited Prep*': {
      'all': ['esp'],
    },
    'M3 (E90, E92, E93)': {
      '2007': ['esp', 'ssp'],
      '2008': ['esp', 'ssp'],
      '2009': ['esp', 'ssp'],
      '2010': ['esp', 'ssp'],
      '2011': ['esp', 'ssp'],
      '2012': ['esp', 'ssp'],
      '2013': ['esp', 'ssp'],
    },
    'M3 (F80 chassis) *Limted Prep*': {
      'all': ['esp'],
    },
    'M3 CS & M4 CS': {
      '2018': ['as'],
      '2019': ['as'],
      '2020': ['as'],
    },
    'M340i)': {
      'all': ['es'],
    },
    'M4': {
      'all': ['as', 'ss', 'ssp'],
    },
    'M4 (F82/F83 chassis) *Limted Prep*': {
      'all': ['esp'],
    },
    'M4 GTS': {
      'all': ['ss'],
    },
    'M440i)': {
      '2021': ['es'],
      '2022': ['es'],
      '2023': ['es'],
    },
    'M5': {
      '1988': ['es'],
      '1989': ['es'],
      '1990': ['es'],
      '1991': ['es'],
      '1992': ['es'],
      '1993': ['es'],
      '2000': ['es'],
      '2001': ['es'],
      '2002': ['es'],
      '2003': ['es'],
      '2004': ['es'],
      '2005': ['bst', 'es'],
      '2006': ['bst', 'es'],
      '2007': ['bst', 'es'],
      '2008': ['bst', 'es'],
      '2009': ['bst', 'es'],
      '2010': ['bst', 'es'],
      '2017': ['bs'],
      '2018': ['bs'],
      '2019': ['bs'],
      '2020': ['bs'],
      '2021': ['bs'],
      '2022': ['bs'],
      '2023': ['bs'],
    },
    'M5 (E39)': {
      '1998': ['cst'],
      '1999': ['cst'],
      '2000': ['cst'],
      '2001': ['cst'],
      '2002': ['cst'],
      '2003': ['cst'],
    },
    'M6': {
      '2005': ['bst'],
      '2006': ['bst'],
      '2007': ['bst'],
      '2008': ['bst'],
      '2009': ['bst'],
      '2010': ['bst'],
    },
    'NEOVA AD09': {
      'all': ['fsp'],
    },
    'Oldsmobile, & Geo': {
      'all': ['esp'],
    },
    'Pilot Sport Cup 2 ': {
      'all': ['fsp'],
    },
    'Potenza RE-71RS': {
      'all': ['fsp'],
    },
    'Potenza Race': {
      'all': ['fsp'],
    },
    'Prep*': {
      'all': ['esp'],
    },
    'Proxes R': {
      'all': ['fsp'],
    },
    'Proxes R1R': {
      'all': ['fsp'],
    },
    'Proxes RR': {
      'all': ['fsp'],
    },
    'R-COMPOUND TIRES': {
      'all': ['fsp'],
    },
    'RT615K+': {
      'all': ['fsp'],
    },
    'RT660': {
      'all': ['fsp'],
    },
    'Sedan': {
      'all': ['dp'],
    },
    'Sportnex': {
      'all': ['fsp'],
    },
    'Street Modified - Appendix A': {
      'all': ['fsp'],
    },
    'Street Prepared (ESP) - Appendix A': {
      'all': ['esp'],
    },
    'Supercar 3': {
      'all': ['fsp'],
    },
    'Tire Rack 888-380-8473': {
      'all': ['fsp'],
    },
    'Tire Shaving and Heat Cycling are Available': {
      'all': ['fsp'],
    },
    'Turbo, non-M3)': {
      '2012': ['es'],
      '2013': ['es'],
      '2014': ['es'],
      '2015': ['es'],
      '2016': ['es'],
      '2017': ['es'],
      '2018': ['es'],
      '2019': ['es'],
      '2020': ['es'],
    },
    'Ventus R-S4': {
      'all': ['fsp'],
    },
    'Wet H2O / W2': {
      'all': ['fsp'],
    },
    'X1 (2013-15)*': {
      'all': ['bst'],
    },
    'Z3': {
      'all': ['cst', 'dp', 'dsp', 'est'],
    },
    'Z3 (4-cyl)': {
      '1996': ['es'],
      '1997': ['es'],
      '1998': ['es'],
    },
    'Z3 (6-cyl)': {
      '1999': ['fp'],
      '2000': ['fp'],
      '2001': ['fp'],
      '2002': ['fp'],
    },
    'Z3 (6-cyl, non-M)': {
      '1997': ['cs'],
      '1998': ['cs'],
      '1999': ['cs'],
      '2000': ['cs'],
      '2001': ['cs'],
      '2002': ['cs'],
    },
    'Z4': {
      'all': ['cst'],
    },
    'Z4 (6-cyl)': {
      '2003': ['fp'],
      '2004': ['fp'],
      '2005': ['fp'],
      '2006': ['fp'],
      '2007': ['fp'],
      '2008': ['fp'],
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
    'Z4 35i &35is': {
      '2009': ['cs'],
      '2010': ['cs'],
      '2011': ['cs'],
      '2012': ['cs'],
      '2013': ['cs'],
      '2014': ['cs'],
      '2015': ['cs'],
      '2016': ['cs'],
    },
    'Z4 4 cyl': {
      '2020': ['cs'],
      '2021': ['cs'],
      '2022': ['cs'],
      '2023': ['cs'],
      '2024': ['cs'],
      '2025': ['cs'],
    },
    'Z4 6 cyl': {
      '2020': ['bs'],
      '2021': ['bs'],
      '2022': ['bs'],
      '2023': ['bs'],
      '2024': ['bs'],
      '2025': ['bs'],
    },
    'Z4 Coupe & Roadster': {
      'all': ['cs'],
    },
    'Z4 M Coupe/Roadster': {
      '2006': ['cs', 'sst'],
      '2007': ['cs', 'sst'],
      '2008': ['cs', 'sst'],
    },
    'Z8': {
      'all': ['ss', 'ssp'],
    },
  },
  'Buick': {
    'Grand National & Regal (V6': {
      'all': ['es'],
    },
    'Reatta': {
      'all': ['hs'],
    },
    'Regal (all)': {
      '2014': ['gs'],
      '2015': ['gs'],
      '2016': ['gs'],
      '2017': ['gs'],
      '2018': ['gs'],
      '2019': ['gs'],
      '2020': ['gs'],
    },
    'Turbo)': {
      'all': ['es'],
    },
    'Verano (non-turbo)': {
      '2013': ['hs'],
      '2014': ['hs'],
      '2015': ['hs'],
      '2016': ['hs'],
      '2017': ['hs'],
    },
    'Verano Turbo': {
      '2013': ['gs'],
      '2014': ['gs'],
      '2015': ['gs'],
      '2016': ['gs'],
      '2017': ['gs'],
    },
  },
  'Cadillac': {
    'ATS': {
      'all': ['es'],
    },
    'ATS (2.0L Turbo)': {
      '2013': ['ds'],
      '2014': ['ds'],
      '2015': ['ds'],
      '2016': ['ds'],
      '2017': ['ds'],
      '2018': ['ds'],
      '2019': ['ds'],
    },
    'ATS (2.0L)': {
      '2012': ['bst'],
      '2013': ['bst'],
      '2014': ['bst'],
      '2015': ['bst'],
      '2016': ['bst'],
      '2017': ['bst'],
      '2018': ['bst'],
      '2019': ['bst'],
    },
    'ATS (2.5L 4-cyl non-turbo)': {
      '2013': ['gs'],
      '2014': ['gs'],
      '2015': ['gs'],
      '2016': ['gs'],
    },
    'ATS-V': {
      '2016': ['es', 'sst'],
      '2017': ['es', 'sst'],
      '2018': ['es', 'sst'],
      '2019': ['es', 'sst'],
    },
    'ATS-V (2016-2019) *Limited Prep*': {
      'all': ['esp'],
    },
    'CT4 (non-V, non-Blackwing ': {
      '2020': ['ds'],
      '2021': ['ds'],
      '2022': ['ds'],
      '2023': ['ds'],
      '2024': ['ds'],
      '2025': ['ds'],
    },
    'CT4V (inc Blackwing)': {
      '2020': ['bs'],
      '2021': ['bs'],
      '2022': ['bs'],
      '2023': ['bs'],
      '2024': ['bs'],
      '2025': ['bs'],
    },
    'CT5V (inc Blackwing)': {
      '2020': ['as'],
      '2021': ['as'],
      '2022': ['as'],
      '2023': ['as'],
      '2024': ['as'],
      '2025': ['as'],
    },
    'CTS & CTS-V': {
      '2004': ['esp'],
      '2005': ['esp'],
      '2006': ['esp'],
      '2007': ['esp'],
    },
    'CTS (non-V)': {
      '2003': ['cst'],
      '2004': ['cst'],
      '2005': ['cst'],
      '2006': ['cst'],
      '2007': ['cst'],
    },
    'CTS (non-V, non-Vsport)': {
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
    },
    'CTS-V & CTS-Vsport': {
      'all': ['es'],
    },
    'Catera': {
      'all': ['hs'],
    },
    'Chevrolet, Pontiac, Buick, &': {
      'all': ['esp'],
    },
    'ELR': {
      '2014': ['gs'],
      '2015': ['gs'],
      '2016': ['gs'],
    },
    'XLR': {
      'all': ['as'],
    },
  },
  'Chevrolet': {
    '300 (all)': {
      '2006': ['cp'],
      '2007': ['cp'],
      '2008': ['cp'],
      '2009': ['cp'],
      '2010': ['cp'],
      '2011': ['cp'],
      '2012': ['cp'],
      '2013': ['cp'],
      '2014': ['cp'],
      '2015': ['cp'],
      '2016': ['cp'],
      '2017': ['cp'],
    },
    'Aveo': {
      'all': ['hs'],
    },
    'Beretta': {
      'all': ['hs'],
    },
    'Bolt': {
      'all': ['gst', 'hs'],
    },
    'CP': {
      'all': ['cp'],
    },
    'CTS & CTS-V': {
      '2003': ['cp'],
      '2004': ['cp'],
      '2005': ['cp'],
      '2006': ['cp'],
      '2007': ['cp'],
    },
    'Camaro': {
      'all': ['bst'],
      '1967': ['cp'],
      '1968': ['cp'],
      '1969': ['cp'],
      '1970': ['cp'],
      '1971': ['cp'],
      '1972': ['cp'],
      '1973': ['cp'],
      '1974': ['cp'],
      '1975': ['cp'],
      '1976': ['cp'],
      '1977': ['cp'],
      '1978': ['cp'],
      '1979': ['cp'],
      '1980': ['cp'],
      '1981': ['cp'],
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
    },
    'Camaro (4-cyl & 6-cyl)': {
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
      '1993': ['hs'],
      '1994': ['hs'],
      '1995': ['hs'],
      '1996': ['hs'],
      '1997': ['hs'],
      '1998': ['hs'],
      '1999': ['hs'],
      '2000': ['hs'],
      '2001': ['hs'],
      '2002': ['hs'],
    },
    'Camaro (V6)': {
      '2010': ['ds'],
      '2011': ['ds'],
      '2012': ['ds'],
      '2013': ['ds'],
      '2014': ['ds'],
      '2015': ['ds'],
    },
    'Camaro LS & LT (2.0L Turbo;': {
      'all': ['ds', 'sst'],
    },
    'Camaro V6 & V8': {
      'all': ['es'],
    },
    'Camaro Z28': {
      '2014': ['as', 'sst'],
      '2015': ['as', 'sst'],
    },
    'Camaro ZL1': {
      'all': ['sst'],
      '2012': ['ssp'],
      '2013': ['ssp'],
      '2017': ['ssp'],
      '2018': ['ssp'],
      '2019': ['ssp'],
      '2020': ['ssp'],
      '2021': ['ssp'],
      '2022': ['ssp'],
      '2023': ['ssp'],
      '2024': ['ssp'],
    },
    'Camaro ZL1 (non-1LE)': {
      '2012': ['bs'],
      '2013': ['bs'],
      '2014': ['bs'],
      '2015': ['bs'],
      '2017': ['as'],
      '2018': ['as'],
      '2019': ['as'],
      '2020': ['as'],
    },
    'Camaro ZL1 1LE': {
      '2018': ['ss'],
      '2019': ['ss'],
      '2020': ['ss'],
      '2021': ['ss'],
      '2022': ['ss'],
      '2023': ['ss'],
      '2024': ['ss'],
    },
    'Challenger (non-supercharged)': {
      '2008': ['cp'],
      '2009': ['cp'],
      '2010': ['cp'],
      '2011': ['cp'],
      '2012': ['cp'],
      '2013': ['cp'],
      '2014': ['cp'],
      '2015': ['cp'],
      '2016': ['cp'],
      '2017': ['cp'],
    },
    'Charger (non-supercharged)': {
      '2006': ['cp'],
      '2007': ['cp'],
      '2008': ['cp'],
      '2009': ['cp'],
      '2010': ['cp'],
      '2011': ['cp'],
      '2012': ['cp'],
      '2013': ['cp'],
      '2014': ['cp'],
      '2015': ['cp'],
      '2016': ['cp'],
      '2017': ['cp'],
    },
    'Chevelle, Cutlass, El Camino, GTO, etc. (A-body)': {
      '1968': ['cp'],
      '1969': ['cp'],
      '1970': ['cp'],
      '1971': ['cp'],
      '1972': ['cp'],
    },
    'Chevelle, El Camino, Tempest, etc. (A-body)': {
      '1964': ['cp'],
      '1965': ['cp'],
      '1966': ['cp'],
      '1967': ['cp'],
    },
    'Chevette': {
      'all': ['hs'],
    },
    'Chrysler, Dodge & Plymouth': {
      'all': ['cp'],
    },
    'Chrysler, Plymouth, Dodge, Eagle, & Mitsubishi': {
      'all': ['fp'],
    },
    'Chrysler/Plymouth/Dodge': {
      'all': ['est'],
    },
    'Cobalt': {
      'all': ['cst', 'est', 'gst'],
    },
    'Cobalt (all, non-turbo)': {
      '2005': ['hs'],
      '2006': ['hs'],
      '2007': ['hs'],
      '2008': ['hs'],
      '2009': ['hs'],
      '2010': ['hs'],
    },
    'Cobalt SS (2.0L Turbo)': {
      '2008': ['gs'],
      '2009': ['gs'],
      '2010': ['gs'],
    },
    'Colt Turbo': {
      'all': ['fp'],
    },
    'Conquest & Starion Turbo': {
      'all': ['fp'],
    },
    'Corvair': {
      'all': ['hs'],
    },
    'Corvette': {
      'all': ['as', 'ssp', 'sst'],
      '1963': ['cs'],
      '1964': ['cs'],
      '1965': ['cs'],
      '1966': ['cs'],
      '1967': ['cs'],
      '1968': ['cs'],
      '1969': ['cs'],
      '1970': ['cs'],
      '1971': ['cs'],
      '1972': ['cs'],
      '1973': ['cs'],
      '1974': ['cs'],
      '1975': ['cs'],
      '1976': ['cs'],
      '1977': ['cs'],
      '1978': ['cs'],
      '1979': ['cs'],
      '1980': ['cs'],
      '1981': ['cs'],
      '1982': ['cs'],
    },
    'Corvette (C4, all)': {
      '1984': ['cs'],
      '1985': ['cs'],
      '1986': ['cs'],
      '1987': ['cs'],
      '1988': ['cs'],
      '1989': ['cs'],
      '1990': ['cs'],
      '1991': ['cs'],
      '1992': ['cs'],
      '1993': ['cs'],
      '1994': ['cs'],
      '1995': ['cs'],
      '1996': ['cs'],
    },
    'Corvette (C4, excl. LT4 engine &': {
      'all': ['bst'],
    },
    'Corvette (C5 chassis)': {
      '1997': ['ssp'],
      '1998': ['ssp'],
      '1999': ['ssp'],
      '2000': ['ssp'],
      '2001': ['ssp'],
      '2002': ['ssp'],
      '2003': ['ssp'],
      '2004': ['ssp'],
    },
    'Corvette (C5, non-Z06)': {
      '1997': ['bs', 'bst'],
      '1998': ['bs', 'bst'],
      '1999': ['bs', 'bst'],
      '2000': ['bs', 'bst'],
      '2001': ['bs', 'bst'],
      '2002': ['bs', 'bst'],
      '2003': ['bs', 'bst'],
      '2004': ['bs', 'bst'],
    },
    'Corvette (C6 chassis)': {
      '2005': ['ssp'],
      '2006': ['ssp'],
      '2007': ['ssp'],
      '2008': ['ssp'],
      '2009': ['ssp'],
      '2010': ['ssp'],
      '2011': ['ssp'],
      '2012': ['ssp'],
      '2013': ['ssp'],
    },
    'Corvette (C6, base and Z51)': {
      '2005': ['bs'],
      '2006': ['bs'],
      '2007': ['bs'],
      '2008': ['bs'],
      '2009': ['bs'],
      '2010': ['bs'],
      '2011': ['bs'],
      '2012': ['bs'],
      '2013': ['bs'],
    },
    'Corvette E-Ray': {
      '2024': ['ss'],
      '2025': ['ss'],
    },
    'Corvette Grand Sport': {
      '2017': ['as'],
      '2018': ['as'],
      '2019': ['as'],
    },
    'Corvette Stingray (C7)': {
      '2014': ['bs'],
      '2015': ['bs'],
      '2016': ['bs'],
      '2017': ['bs'],
      '2018': ['bs'],
      '2019': ['bs'],
    },
    'Corvette Stingray (C8)': {
      '2020': ['ss'],
      '2021': ['ss'],
      '2022': ['ss'],
      '2023': ['ss'],
      '2024': ['ss'],
      '2025': ['ss'],
    },
    'Corvette Z06 (C5)': {
      '2001': ['as', 'sst'],
      '2002': ['as', 'sst'],
      '2003': ['as', 'sst'],
      '2004': ['as', 'sst'],
    },
    'Corvette ZR1': {
      '2009': ['ss'],
      '2010': ['ss'],
      '2011': ['ss'],
      '2012': ['ss'],
      '2013': ['ss'],
    },
    'Cruze': {
      'all': ['hs'],
      '2011': ['est'],
      '2012': ['est'],
      '2013': ['est'],
      '2014': ['est'],
      '2015': ['est'],
      '2016': ['est'],
      '2017': ['est'],
      '2018': ['est'],
      '2019': ['est'],
    },
    'Dakota 2WD': {
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
    'Daytona & Laser (Turbo)': {
      '1984': ['fp'],
      '1985': ['fp'],
      '1986': ['fp'],
      '1987': ['fp'],
      '1988': ['fp'],
      '1989': ['fp'],
    },
    'E Street class': {
      'all': ['es'],
    },
    'Ford & Mercury': {
      'all': ['cp'],
    },
    'General Motors': {
      'all': ['cp'],
    },
    'HHR': {
      '2008': ['gst'],
      '2009': ['gst'],
      '2010': ['gst'],
      '2011': ['gst'],
    },
    'LeMans, Cutlass, Chevelle, El Camino, etc. (A-Body)': {
      '1973': ['cp'],
      '1974': ['cp'],
      '1975': ['cp'],
      '1976': ['cp'],
      '1977': ['cp'],
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
      '2021': ['gs'],
      '2022': ['gs'],
      '2023': ['gs'],
      '2024': ['gs'],
      '2025': ['gs'],
    },
    'Malibu, Cutlass, El Camino, etc. (A-body)': {
      '1978': ['cp'],
      '1979': ['cp'],
      '1980': ['cp'],
      '1981': ['cp'],
    },
    'Maverick & Comet (6-cyl & 8cyl)': {
      '1970': ['cp'],
      '1971': ['cp'],
      '1972': ['cp'],
      '1973': ['cp'],
      '1974': ['cp'],
      '1975': ['cp'],
      '1976': ['cp'],
      '1977': ['cp'],
    },
    'Monte Carlo, Grand Prix, Regal, El Camino, etc. (A-body)': {
      '1982': ['cp'],
      '1983': ['cp'],
      '1984': ['cp'],
      '1985': ['cp'],
      '1986': ['cp'],
      '1987': ['cp'],
      '1988': ['cp'],
    },
    'Monza': {
      '1975': ['cp'],
      '1976': ['cp'],
      '1977': ['cp'],
      '1978': ['cp'],
      '1979': ['cp'],
      '1980': ['cp'],
    },
    'Mustang (6-cyl & 8-cyl)': {
      '1964': ['cp'],
      '1965': ['cp'],
      '1966': ['cp'],
      '1967': ['cp'],
      '1968': ['cp'],
      '1969': ['cp'],
      '1970': ['cp'],
      '1971': ['cp'],
      '1972': ['cp'],
      '1973': ['cp'],
      '1979': ['cp'],
      '1980': ['cp'],
      '1981': ['cp'],
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
    },
    'Mustang (S197 chassis, non-supercharged)': {
      '2005': ['cp'],
      '2006': ['cp'],
      '2007': ['cp'],
      '2008': ['cp'],
      '2009': ['cp'],
      '2010': ['cp'],
      '2011': ['cp'],
      '2012': ['cp'],
      '2013': ['cp'],
      '2014': ['cp'],
    },
    'Mustang (w/o IRS)': {
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
    'Mustang II (6-cyl & 8-cyl)': {
      '1974': ['cp'],
      '1975': ['cp'],
      '1976': ['cp'],
      '1977': ['cp'],
      '1978': ['cp'],
    },
    'Mustang Turbo & SVO (4-cyl)': {
      '1979': ['cp'],
      '1980': ['cp'],
      '1981': ['cp'],
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
    },
    'Neon (NOC)': {
      '2000': ['est'],
      '2001': ['est'],
      '2002': ['est'],
      '2003': ['est'],
      '2004': ['est'],
      '2005': ['est'],
    },
    'Neon (all)': {
      '1995': ['est'],
      '1996': ['est'],
      '1997': ['est'],
      '1998': ['est'],
      '1999': ['est'],
    },
    'Neon R/T & ACR': {
      '2001': ['est'],
      '2002': ['est'],
      '2003': ['est'],
      '2004': ['est'],
    },
    'Nova (FWD)': {
      '1986': ['hs'],
      '1987': ['hs'],
      '1988': ['hs'],
    },
    'Nova (RWD, 4-cyl & 6-cyl)': {
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
    'Omni Turbo': {
      'all': ['fp'],
    },
    'Prepared (CP) - Appendix A': {
      'all': ['cp'],
    },
    'S10 & Sonoma (6-cyl)': {
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
    'S10 (4-cyl & 6-cyl, N/A)*': {
      'all': ['cst'],
    },
    'S10, S15, & Sonoma (6-cyl)': {
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
    },
    'Shadow & Sundance (Turbo)': {
      '1987': ['fp'],
      '1988': ['fp'],
      '1989': ['fp'],
      '1990': ['fp'],
      '1991': ['fp'],
      '1992': ['fp'],
      '1993': ['fp'],
      '1994': ['fp'],
    },
    'Sonic (Turbo)': {
      '2012': ['gst'],
      '2013': ['gst'],
      '2014': ['gst'],
      '2015': ['gst'],
    },
    'Sonic (all)': {
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
    'Sonic (non-turbo)': {
      '2012': ['est'],
      '2013': ['est'],
      '2014': ['est'],
      '2015': ['est'],
      '2016': ['est'],
      '2017': ['est'],
      '2018': ['est'],
      '2019': ['est'],
      '2020': ['est'],
    },
    'Spark': {
      'all': ['est'],
    },
    'Spectrum': {
      'all': ['hs'],
    },
    'Sprint': {
      'all': ['hs'],
      '1985': ['est'],
      '1986': ['est'],
      '1987': ['est'],
      '1988': ['est'],
    },
    'Sprint Turbo': {
      'all': ['fp'],
    },
    'Suspension Lowering Kit, 1LE': {
      'all': ['es'],
    },
    'Talon & Laser (Turbo, FWD & AWD)': {
      '1989': ['fp'],
      '1990': ['fp'],
      '1991': ['fp'],
      '1992': ['fp'],
      '1993': ['fp'],
      '1994': ['fp'],
    },
    'Thunderbird (V6 & SuperCoupe)': {
      '1989': ['cp'],
      '1990': ['cp'],
      '1991': ['cp'],
      '1992': ['cp'],
      '1993': ['cp'],
      '1994': ['cp'],
      '1995': ['cp'],
      '1996': ['cp'],
      '1997': ['cp'],
    },
    'Thunderbird (V6 & TurboCoupe)': {
      '1983': ['cp'],
      '1984': ['cp'],
      '1985': ['cp'],
      '1986': ['cp'],
      '1987': ['cp'],
      '1988': ['cp'],
    },
    'Vega & Cosworth Vega': {
      'all': ['hs'],
      '1971': ['dp'],
      '1972': ['dp'],
      '1973': ['dp'],
      '1974': ['dp'],
      '1975': ['dp'],
      '1976': ['dp'],
      '1977': ['dp'],
    },
    'Volt': {
      '2011': ['est', 'hs'],
      '2012': ['est', 'hs'],
      '2013': ['est', 'hs'],
      '2014': ['est', 'hs'],
      '2015': ['est', 'hs'],
      '2016': ['hs'],
      '2017': ['hs'],
      '2018': ['hs'],
      '2019': ['hs'],
    },
    'ZR1)': {
      '1984': ['bst'],
      '1985': ['bst'],
      '1986': ['bst'],
      '1987': ['bst'],
      '1988': ['bst'],
      '1989': ['bst'],
      '1990': ['bst'],
      '1991': ['bst'],
      '1992': ['bst'],
      '1993': ['bst'],
      '1994': ['bst'],
      '1995': ['bst'],
      '1996': ['bst'],
    },
  },
  'Chrysler': {
    '200 (all)': {
      '2010': ['hs'],
      '2011': ['hs'],
      '2012': ['hs'],
      '2013': ['hs'],
      '2014': ['hs'],
      '2015': ['hs'],
      '2016': ['hs'],
      '2017': ['hs'],
    },
    '300 (V6)': {
      '2004': ['hs'],
      '2005': ['hs'],
      '2006': ['hs'],
      '2007': ['hs'],
      '2008': ['hs'],
      '2009': ['hs'],
      '2010': ['hs'],
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
      '2021': ['ds'],
      '2022': ['ds'],
      '2023': ['ds'],
    },
    '300 (V8, all)': {
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
      '2021': ['fs'],
      '2022': ['fs'],
      '2023': ['fs'],
      '2024': ['fs'],
    },
    '300M': {
      '1999': ['hs'],
      '2000': ['hs'],
      '2001': ['hs'],
      '2002': ['hs'],
      '2003': ['hs'],
      '2004': ['hs'],
    },
    'Cirrus': {
      'all': ['hs'],
    },
    'Conquest Turbo': {
      'all': ['gs'],
    },
    'Crossfire': {
      'all': ['bst', 'ds'],
    },
    'Crossfire SRT-6': {
      '2005': ['fs'],
      '2006': ['fs'],
    },
    'Crossfire SRT6': {
      'all': ['dsp'],
    },
    'Daewoo ': {
      'all': ['hs'],
    },
    'Laser': {
      'all': ['hs'],
    },
    'PT Cruiser (all)': {
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
    },
    'Sebring': {
      'all': ['hs'],
    },
  },
  'Chrysler & Plymouth': {
    'Prowler': {
      'all': ['cs'],
    },
  },
  'Datsun': {
    '124 Coupe & Sedan': {
      '1966': ['dp'],
      '1967': ['dp'],
      '1968': ['dp'],
      '1969': ['dp'],
      '1970': ['dp'],
      '1971': ['dp'],
      '1972': ['dp'],
      '1973': ['dp'],
      '1974': ['dp'],
    },
    '124 Spider (1600, 2000) & 124 Spider Abarth': {
      '1995': ['dp'],
    },
    '124 Sport Coupe': {
      'all': ['dp'],
    },
    '131 & Brava': {
      '1974': ['dp'],
      '1975': ['dp'],
      '1976': ['dp'],
      '1977': ['dp'],
      '1978': ['dp'],
      '1979': ['dp'],
      '1980': ['dp'],
      '1981': ['dp'],
      '1982': ['dp'],
      '1983': ['dp'],
      '1984': ['dp'],
    },
    '1500 & 1600 Roadster': {
      'all': ['hs'],
    },
    '1500 (SPL 310), 1600 (SPL 311/311U), & 2000 (SRL 311) Roadster': {
      'all': ['dp'],
    },
    '210 & B-210': {
      'all': ['hs'],
    },
    '240Z': {
      'all': ['cst', 'es'],
    },
    '260Z': {
      'all': ['cst', 'es'],
    },
    '280Z': {
      'all': ['cst', 'es'],
    },
    '280ZX': {
      'all': ['cst', 'es'],
    },
    '280ZX Turbo': {
      'all': ['fs'],
    },
    'ATB 7224 MGA axle housing assembly': {
      'all': ['dp'],
    },
    'Alternate 2.3L cylinder head: SVO M-6049-A230': {
      'all': ['dp'],
    },
    'Alternate body parts: spoiler D9FZ6440555-A; end piece': {
      'all': ['dp'],
    },
    'Anglia Super': {
      '1962': ['dp'],
      '1963': ['dp'],
      '1964': ['dp'],
      '1965': ['dp'],
      '1966': ['dp'],
      '1967': ['dp'],
    },
    'Capri (non-US)': {
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
    'Colt & Champ': {
      '1971': ['dp'],
      '1972': ['dp'],
      '1973': ['dp'],
      '1974': ['dp'],
      '1975': ['dp'],
      '1976': ['dp'],
      '1977': ['dp'],
      '1978': ['dp'],
    },
    'Cortina': {
      '1964': ['dp'],
      '1965': ['dp'],
      '1966': ['dp'],
      '1967': ['dp'],
      '1968': ['dp'],
    },
    'Courier': {
      'all': ['dp'],
    },
    'D9FZ6428010-A or D9FZ6428011-A': {
      'all': ['dp'],
    },
    'Dodge & Plymouth': {
      'all': ['dp'],
    },
    'Elva': {
      'all': ['dp'],
    },
    'Escort Mexico': {
      'all': ['dp'],
    },
    'Escort Super & 1300 GT': {
      'all': ['dp'],
    },
    'F-10': {
      'all': ['hs'],
    },
    'Fiat & Bertone': {
      'all': ['dp'],
    },
    'Ford & Mercury': {
      'all': ['dp'],
    },
    'Mustang & Capri (4-cyl non-turbo)': {
      '1979': ['dp'],
      '1980': ['dp'],
      '1981': ['dp'],
      '1982': ['dp'],
      '1983': ['dp'],
      '1984': ['dp'],
      '1985': ['dp'],
      '1986': ['dp'],
    },
    'Mustang II (2.3L)': {
      '1974': ['dp'],
      '1975': ['dp'],
      '1976': ['dp'],
      '1977': ['dp'],
      '1978': ['dp'],
    },
    'Pinto': {
      '1971': ['dp'],
      '1972': ['dp'],
      '1973': ['dp'],
      '1974': ['dp'],
      '1975': ['dp'],
      '1976': ['dp'],
      '1977': ['dp'],
      '1978': ['dp'],
      '1979': ['dp'],
      '1980': ['dp'],
    },
    'Prepared (DP) - Appendix A': {
      'all': ['dp'],
    },
    'Roadster': {
      '2000': ['dsp'],
    },
    'X1/9': {
      'all': ['dp'],
    },
  },
  'DeTomaso': {
    'Mangusta': {
      'all': ['bs', 'esp'],
    },
    'Pantera': {
      'all': ['bs', 'esp'],
    },
  },
  'Dodge': {
    'Avenger': {
      'all': ['hs'],
    },
    'Caliber SRT4': {
      '2008': ['hs'],
      '2009': ['hs'],
    },
    'Challenger': {
      '1978': ['hs'],
      '1979': ['hs'],
      '1980': ['hs'],
      '1981': ['hs'],
      '1982': ['hs'],
      '1983': ['hs'],
    },
    'Challenger (V6)': {
      '2008': ['cst', 'gs'],
      '2009': ['cst', 'gs'],
      '2010': ['cst', 'gs'],
      '2011': ['cst', 'gs'],
      '2012': ['cst', 'gs'],
      '2013': ['cst', 'gs'],
      '2014': ['cst', 'gs'],
      '2015': ['cst', 'gs'],
      '2016': ['cst', 'gs'],
      '2017': ['cst', 'gs'],
      '2018': ['cst', 'gs'],
      '2019': ['cst', 'gs'],
      '2020': ['cst', 'gs'],
      '2021': ['cst', 'gs'],
      '2022': ['cst', 'gs'],
      '2023': ['cst'],
    },
    'Challenger (V8, N/A)': {
      '2008': ['bst'],
      '2009': ['bst'],
      '2010': ['bst'],
      '2011': ['bst'],
      '2012': ['bst'],
      '2013': ['bst'],
      '2014': ['bst'],
      '2015': ['bst'],
      '2016': ['bst'],
      '2017': ['bst'],
      '2018': ['bst'],
      '2019': ['bst'],
      '2020': ['bst'],
      '2021': ['bst'],
      '2022': ['bst'],
      '2023': ['bst'],
    },
    'Challenger (V8, all)': {
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
      '2021': ['fs'],
      '2022': ['fs'],
      '2023': ['fs'],
      '2024': ['fs'],
    },
    'Challenger R/T Scat Pack Widebody ': {
      '2019': ['fs'],
      '2020': ['fs'],
      '2021': ['fs'],
      '2022': ['fs'],
      '2023': ['fs'],
      '2024': ['fs'],
    },
    'Charger (V6)': {
      '2006': ['cst', 'gs'],
      '2007': ['cst', 'gs'],
      '2008': ['cst', 'gs'],
      '2009': ['cst', 'gs'],
      '2010': ['cst', 'gs'],
      '2011': ['cst', 'gs'],
      '2012': ['cst', 'gs'],
      '2013': ['cst', 'gs'],
      '2014': ['cst', 'gs'],
      '2015': ['cst', 'gs'],
      '2016': ['cst', 'gs'],
      '2017': ['cst', 'gs'],
      '2018': ['cst', 'gs'],
      '2019': ['cst', 'gs'],
      '2020': ['cst'],
      '2021': ['cst'],
      '2022': ['cst'],
      '2023': ['cst'],
    },
    'Charger (V8, N/A)': {
      '2006': ['bst'],
      '2007': ['bst'],
      '2008': ['bst'],
      '2009': ['bst'],
      '2010': ['bst'],
      '2011': ['bst'],
      '2012': ['bst'],
      '2013': ['bst'],
      '2014': ['bst'],
      '2015': ['bst'],
      '2016': ['bst'],
      '2017': ['bst'],
      '2018': ['bst'],
      '2019': ['bst'],
      '2020': ['bst'],
      '2021': ['bst'],
      '2022': ['bst'],
      '2023': ['bst'],
    },
    'Charger (V8, all)': {
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
      '2021': ['fs'],
      '2022': ['fs'],
      '2023': ['fs'],
      '2024': ['fs'],
    },
    'Charger (non-turbo, FWD)': {
      '1981': ['hs'],
      '1982': ['hs'],
      '1983': ['hs'],
      '1984': ['hs'],
      '1985': ['hs'],
      '1986': ['hs'],
      '1987': ['hs'],
    },
    'Charger Turbo': {
      'all': ['es'],
    },
    'Colt': {
      'all': ['hs'],
    },
    'Conquest Turbo': {
      'all': ['gs'],
    },
    'Courier': {
      'all': ['ssp'],
    },
    'Dakota (4-cyl & 6-cyl, N/A)*': {
      'all': ['cst'],
    },
    'Dart': {
      'all': ['gst'],
    },
    'Dart (2.0L N/A)': {
      '2013': ['est'],
      '2014': ['est'],
      '2015': ['est'],
      '2016': ['est'],
    },
    'Dart (2.4L N/A)': {
      '2013': ['cst'],
      '2014': ['cst'],
      '2015': ['cst'],
      '2016': ['cst'],
    },
    'Dart (FWD)': {
      '2013': ['hs'],
      '2014': ['hs'],
      '2015': ['hs'],
      '2016': ['hs'],
      '2017': ['hs'],
    },
    'Daytona': {
      'all': ['hs'],
    },
    'Elva': {
      'all': ['ssp'],
    },
    'Fiat & Bertone': {
      'all': ['es'],
    },
    'GLH': {
      'all': ['hs'],
    },
    'GLH Turbo': {
      'all': ['es'],
    },
    'H Street class': {
      'all': ['hs'],
    },
    'Intrepid': {
      'all': ['hs'],
    },
    'Lancer Turbo': {
      'all': ['hs'],
    },
    'Magnum (V6)': {
      '2005': ['gs'],
      '2006': ['gs'],
      '2007': ['gs'],
      '2008': ['gs'],
    },
    'Magnum (V8)': {
      '2005': ['fs'],
      '2006': ['fs'],
      '2007': ['fs'],
      '2008': ['fs'],
    },
    'Neon': {
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
    },
    'Omni': {
      'all': ['hs'],
    },
    'Ram SRT10': {
      '2004': ['fs'],
      '2005': ['fs'],
      '2006': ['fs'],
    },
    'Rampage': {
      'all': ['hs'],
    },
    'SRT-4': {
      'all': ['gs'],
      '2003': ['gst'],
      '2004': ['gst'],
      '2005': ['gst'],
    },
    'Shadow': {
      'all': ['hs'],
    },
    'Spirit': {
      'all': ['hs'],
    },
    'Stealth': {
      'all': ['hs'],
    },
    'Stealth Turbo': {
      'all': ['esp', 'fs'],
    },
    'Stratus': {
      'all': ['hs'],
    },
    'Viper': {
      'all': ['ssp'],
      '2013': ['as'],
      '2014': ['as'],
      '2015': ['as'],
      '2016': ['as'],
      '2017': ['as'],
    },
    'Viper (non-ACR)': {
      '1992': ['as'],
      '1993': ['as'],
      '1994': ['as'],
      '1995': ['as'],
      '1996': ['as'],
      '1997': ['as'],
      '1998': ['as'],
      '1999': ['as'],
      '2000': ['as'],
      '2001': ['as'],
      '2002': ['as'],
      '2003': ['as'],
      '2004': ['as'],
      '2005': ['as'],
      '2006': ['as'],
      '2007': ['as'],
      '2008': ['as'],
      '2009': ['as'],
      '2010': ['as'],
    },
    'Viper GTS': {
      '1996': ['as'],
      '1997': ['as'],
      '1998': ['as'],
      '1999': ['as'],
      '2000': ['as'],
      '2001': ['as'],
      '2002': ['as'],
      '2003': ['as'],
      '2004': ['as'],
      '2005': ['as'],
    },
    'Viper R/T': {
      '1992': ['as'],
      '1993': ['as'],
      '1994': ['as'],
      '1995': ['as'],
      '1996': ['as'],
      '1997': ['as'],
      '1998': ['as'],
      '1999': ['as'],
      '2000': ['as'],
      '2001': ['as'],
      '2002': ['as'],
      '2003': ['as'],
    },
    'Viper SRT-10': {
      '2003': ['as'],
      '2004': ['as'],
      '2005': ['as'],
      '2006': ['as'],
      '2007': ['as'],
    },
    'X1/9': {
      'all': ['es'],
    },
  },
  'Dodge & SRT': {
    'Viper': {
      'all': ['ss'],
    },
  },
  'Eagle': {
    'Summit': {
      'all': ['hs'],
    },
    'Summit Turbo (16v)': {
      '1989': ['fsp'],
      '1990': ['fsp'],
    },
    'Talon': {
      'all': ['hs'],
    },
    'Talon Turbo': {
      'all': ['ds', 'gst'],
    },
  },
  'Ferrari': {
    '250': {
      'all': ['esp'],
    },
    '308': {
      'all': ['fp'],
    },
    '308 Coupe & Spider': {
      'all': ['esp'],
    },
    '360': {
      '1999': ['ss'],
      '2000': ['ss'],
      '2001': ['ss'],
      '2002': ['ss'],
      '2003': ['ss'],
      '2004': ['ss'],
      '2005': ['ss'],
    },
    '360 Modena & Spider (non-Chal- 355': {
      '1995': ['ss'],
      '1996': ['ss'],
      '1997': ['ss'],
      '1998': ['ss'],
      '1999': ['ss'],
    },
    '365 Daytona GTB, GTC': {
      'all': ['esp'],
    },
    '400 America': {
      'all': ['fsp'],
    },
    '458 *Limited Prep*': {
      'all': ['ssp'],
    },
    '488 *Limited Prep*': {
      'all': ['ssp'],
    },
    '500 Superfast': {
      'all': ['fsp'],
    },
    'Dino 206 & 246': {
      'all': ['ssp'],
    },
    'Dino 246': {
      'all': ['fp'],
    },
    'Dino 246 GT': {
      'all': ['fp'],
    },
    'F430': {
      'all': ['ssp'],
      '2004': ['ss'],
      '2005': ['ss'],
      '2006': ['ss'],
      '2007': ['ss'],
      '2008': ['ss'],
      '2009': ['ss'],
    },
    'F8 *Limited Prep*': {
      'all': ['ssp'],
    },
  },
  'Fiat': {
    '(S550) (2015-2020) *Limited Prep*': {
      'all': ['fsp'],
    },
    '124 Spider': {
      '2017': ['fp'],
      '2018': ['fp'],
      '2019': ['fp'],
    },
    '124 Spider (1975-78) & 2000 Spi- 124 Spider': {
      '2016': ['dsp'],
      '2017': ['dsp'],
      '2018': ['dsp'],
      '2019': ['dsp'],
      '2020': ['dsp'],
    },
    '128 Coupe SL & 3P (1290 cc)': {
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
    },
    '2000 Spider Turbo': {
      'all': ['dsp'],
    },
    '2007-10)': {
      '2005': ['fsp'],
      '2006': ['fsp'],
      '2007': ['fsp'],
      '2008': ['fsp'],
      '2009': ['fsp'],
      '2010': ['fsp'],
      '2011': ['fsp'],
      '2012': ['fsp'],
      '2013': ['fsp'],
    },
    '302 Leguna Seca, & Shelby GT500': {
      'all': ['fsp'],
    },
    '500 (Turbo)': {
      '2013': ['ep'],
      '2014': ['ep'],
      '2015': ['ep'],
      '2016': ['ep'],
      '2017': ['ep'],
      '2018': ['ep'],
      '2019': ['ep'],
    },
    '500 (non-turbo)': {
      '2011': ['ep'],
      '2012': ['ep'],
      '2013': ['ep'],
      '2014': ['ep'],
      '2015': ['ep'],
    },
    '500 (non-turbo) (2012-19)*': {
      'all': ['est'],
    },
    '500 Abarth': {
      'all': ['gst'],
      '2012': ['fsp', 'hs'],
      '2013': ['fsp', 'hs'],
      '2014': ['hs'],
      '2015': ['hs'],
      '2016': ['hs'],
      '2017': ['hs'],
      '2018': ['hs'],
      '2019': ['hs'],
    },
    '500 Turbo (2013-16)*': {
      'all': ['gst'],
    },
    'Abarth': {
      'all': ['dsp'],
    },
    'Capri': {
      '1991': ['fsp'],
      '1992': ['fsp'],
      '1993': ['fsp'],
      '1994': ['fsp'],
      '1995': ['fsp'],
    },
    'Capri (FWD, 4-cyl non-turbo)': {
      '1991': ['ep'],
      '1992': ['ep'],
      '1993': ['ep'],
      '1994': ['ep'],
    },
    'Contour SVT': {
      'all': ['fsp'],
    },
    'Cougar': {
      '1965': ['fsp'],
      '1966': ['fsp'],
      '1967': ['fsp'],
      '1968': ['fsp'],
      '1969': ['fsp'],
      '1970': ['fsp'],
      '1971': ['fsp'],
      '1972': ['fsp'],
      '1973': ['fsp'],
      '1974': ['fsp'],
      '1999': ['fsp'],
      '2000': ['fsp'],
      '2001': ['fsp'],
      '2002': ['fsp'],
    },
    'Escort': {
      '1997': ['ep'],
      '1998': ['ep'],
      '1999': ['ep'],
      '2000': ['ep'],
      '2001': ['ep'],
      '2002': ['ep'],
    },
    'Escort GT': {
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
    },
    'Escort GT & ZX-2': {
      '1991': ['ep'],
      '1992': ['ep'],
      '1993': ['ep'],
      '1994': ['ep'],
      '1995': ['ep'],
      '1996': ['ep'],
    },
    'Escort, EXP, Lynx, & LN7': {
      '1982': ['ep'],
      '1983': ['ep'],
      '1984': ['ep'],
      '1985': ['ep'],
      '1986': ['ep'],
      '1987': ['ep'],
      '1988': ['ep'],
    },
    'Festiva': {
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
      '1995': ['ep'],
      '1996': ['ep'],
      '1997': ['ep'],
    },
    'Fiesta': {
      '1976': ['ep'],
      '1977': ['ep'],
      '1978': ['ep'],
      '1979': ['ep'],
      '1980': ['ep'],
      '1981': ['ep'],
      '1982': ['ep'],
      '1983': ['ep'],
    },
    'Fiesta ST': {
      '2014': ['ep', 'fsp'],
      '2015': ['ep', 'fsp'],
      '2016': ['ep', 'fsp'],
      '2017': ['ep', 'fsp'],
      '2018': ['ep', 'fsp'],
      '2019': ['ep'],
    },
    'Focus': {
      '1998': ['ep'],
      '1999': ['ep'],
      '2000': ['ep'],
      '2001': ['ep'],
      '2002': ['ep'],
      '2003': ['ep'],
      '2004': ['ep'],
      '2005': ['ep'],
      '2006': ['ep'],
      '2007': ['ep'],
      '2008': ['ep'],
      '2009': ['ep'],
      '2010': ['ep'],
    },
    'Focus ST': {
      '2013': ['fsp'],
      '2014': ['fsp'],
      '2015': ['fsp'],
      '2016': ['fsp'],
      '2017': ['fsp'],
      '2018': ['fsp'],
    },
    'Ford & Mercury': {
      'all': ['ep', 'fsp'],
    },
    'Fusion & Milan (6-cyl)': {
      '2006': ['fsp'],
      '2007': ['fsp'],
      '2008': ['fsp'],
      '2009': ['fsp'],
      '2010': ['fsp'],
      '2011': ['fsp'],
      '2012': ['fsp'],
      '2013': ['fsp'],
    },
    'Mach 1': {
      '2021': ['fsp'],
      '2022': ['fsp'],
      '2023': ['fsp'],
    },
    'Mustang': {
      '1964': ['fsp'],
      '1965': ['fsp'],
      '1966': ['fsp'],
    },
    'Mustang & Cougar': {
      '1967': ['fsp'],
      '1968': ['fsp'],
      '1969': ['fsp'],
      '1970': ['fsp'],
      '1971': ['fsp'],
      '1972': ['fsp'],
      '1973': ['fsp'],
    },
    'Mustang (S197 incl. Boss 302, Boss': {
      'all': ['fsp'],
    },
    'Mustang (non-GT350, non- GT500)': {
      '2015': ['fsp'],
      '2016': ['fsp'],
      '2017': ['fsp'],
      '2018': ['fsp'],
      '2019': ['fsp'],
      '2020': ['fsp'],
      '2021': ['fsp'],
      '2022': ['fsp'],
      '2023': ['fsp'],
    },
    'Mustang SVO, Cobra, Cobra R (1979- Mustang II': {
      '1974': ['fsp'],
      '1975': ['fsp'],
      '1976': ['fsp'],
      '1977': ['fsp'],
      '1978': ['fsp'],
    },
    'Mustang Shelby GT350/GT350R': {
      'all': ['fsp'],
    },
    'Prepared (EP) - Appendix A': {
      'all': ['ep'],
    },
    'Probe': {
      'all': ['fsp'],
    },
    'Probe (non-turbo)': {
      '1989': ['ep'],
      '1990': ['ep'],
      '1991': ['ep'],
      '1992': ['ep'],
      '1993': ['ep'],
      '1994': ['ep'],
      '1995': ['ep'],
      '1996': ['ep'],
      '1997': ['ep'],
    },
    'Spider': {
      '2016': ['bst'],
      '2017': ['bst'],
      '2018': ['bst'],
      '2019': ['bst'],
      '2020': ['bst'],
    },
    'Taurus SHO': {
      'all': ['fsp'],
    },
    'Thunderbird & Cougar': {
      '1983': ['fsp'],
      '1984': ['fsp'],
      '1985': ['fsp'],
      '1986': ['fsp'],
      '1987': ['fsp'],
      '1988': ['fsp'],
      '1989': ['fsp'],
      '1990': ['fsp'],
      '1991': ['fsp'],
      '1992': ['fsp'],
      '1993': ['fsp'],
      '1994': ['fsp'],
      '1995': ['fsp'],
      '1996': ['fsp'],
      '1997': ['fsp'],
    },
    'V6, & V8)': {
      'all': ['fsp'],
    },
  },
  'Ford': {
    '(2011-14) *Limited Prep*': {
      'all': ['esp'],
    },
    '22) *Limited Prep*': {
      'all': ['esp'],
    },
    'Aspire': {
      'all': ['hs'],
    },
    'CS (Continued) D Street class': {
      'all': ['ds'],
    },
    'Compression ratio (max.): 10.5:1; valve lift (max.): 0.450”': {
      'all': ['ep'],
    },
    'Compression ratio (max.): 11.0:1; valve lift (max.): 0.450”': {
      'all': ['ep'],
    },
    'Contour': {
      'all': ['hs'],
    },
    'Cortina': {
      'all': ['hs'],
    },
    'Crown Victoria': {
      'all': ['hs'],
    },
    'EXP': {
      'all': ['hs'],
    },
    'Escort': {
      'all': ['hs'],
    },
    'Escort GT': {
      '1991': ['est'],
      '1992': ['est'],
      '1993': ['est'],
      '1994': ['est'],
      '1995': ['est'],
      '1996': ['est'],
    },
    'FS (continued) G Street class': {
      'all': ['gs'],
    },
    'FWD models': {
      'all': ['hs'],
    },
    'Festiva': {
      'all': ['hs'],
    },
    'Fiesta': {
      '1976': ['hs'],
      '1977': ['hs'],
      '1978': ['hs'],
      '1979': ['hs'],
      '1980': ['hs'],
    },
    'Fiesta (1.0T EcoBoost)*': {
      'all': ['est'],
    },
    'Fiesta (non-turbo) (2011-19)*': {
      'all': ['est'],
    },
    'Fiesta ST': {
      'all': ['gst'],
      '2014': ['hs'],
      '2015': ['hs'],
      '2016': ['hs'],
      '2017': ['hs'],
      '2018': ['hs'],
      '2019': ['hs'],
    },
    'Five Hundred': {
      'all': ['hs'],
    },
    'Focus': {
      'all': ['est'],
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
    },
    'Focus (non-ST, non-RS)': {
      '2012': ['hs'],
      '2013': ['hs'],
      '2014': ['hs'],
      '2015': ['hs'],
      '2016': ['hs'],
      '2017': ['hs'],
      '2018': ['hs'],
    },
    'Focus RS': {
      '2016': ['bst', 'ds', 'esp'],
      '2017': ['bst', 'ds', 'esp'],
      '2018': ['bs', 'bst', 'esp'],
    },
    'Focus ST': {
      'all': ['gst'],
      '2013': ['hs'],
      '2014': ['hs'],
      '2015': ['hs'],
      '2016': ['hs'],
      '2017': ['hs'],
      '2018': ['hs'],
    },
    'Fusion (all excl. Sport)': {
      '2006': ['hs'],
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
      '2017': ['hs'],
      '2018': ['hs'],
      '2019': ['hs'],
    },
    'Fusion Sport': {
      '2017': ['gs', 'gst'],
      '2018': ['gs', 'gst'],
      '2019': ['gs', 'gst'],
    },
    'GT': {
      'all': ['ssp'],
    },
    'GT500KR)': {
      '2020': ['as'],
      '2021': ['as'],
      '2022': ['as'],
    },
    'General Motors': {
      'all': ['gs', 'hs'],
    },
    'Griffith ': {
      'all': ['ssp'],
    },
    'Handling Package)': {
      '2019': ['sst'],
      '2020': ['sst'],
    },
    'Mustang': {
      'all': ['bst', 'fs'],
    },
    'Mustang (4-cyl, 6-cyl, & 4-cyl': {
      'all': ['hs'],
    },
    'Mustang (V6)': {
      '1994': ['hs'],
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
      '2005': ['gs'],
      '2006': ['gs'],
      '2007': ['gs'],
      '2008': ['gs'],
      '2009': ['gs'],
      '2010': ['gs'],
    },
    'Mustang (all excl. Cobra & Cobra': {
      'all': ['bst'],
    },
    'Mustang Boss 302': {
      'all': ['fs'],
    },
    'Mustang Boss 302 (2012-13': {
      'all': ['sst'],
    },
    'Mustang Boss 302 Laguna Seca ': {
      '2012': ['as'],
      '2013': ['as'],
    },
    'Mustang Bullitt': {
      '2019': ['fs'],
      '2020': ['fs'],
      '2021': ['fs'],
    },
    'Mustang Cobra': {
      '2003': ['fs'],
      '2004': ['fs'],
    },
    'Mustang Cobra R': {
      '1993': ['ss'],
      '1995': ['ss'],
      '2000': ['ss'],
    },
    'Mustang Dark Horse': {
      '2024': ['fs'],
      '2025': ['fs'],
    },
    'Mustang EcoBoost': {
      '2015': ['bst', 'ds'],
      '2016': ['bst', 'ds'],
      '2017': ['bst', 'ds'],
      '2018': ['bst', 'ds'],
      '2019': ['bst', 'ds'],
      '2020': ['bst', 'ds'],
      '2021': ['bst', 'ds'],
      '2022': ['bst', 'ds'],
      '2023': ['bst', 'ds'],
      '2024': ['ds'],
      '2025': ['ds'],
    },
    'Mustang GT (excl. Shelby ver- Mustang V6': {
      'all': ['bst'],
    },
    'Mustang GT (incl. Performance': {
      'all': ['fs'],
    },
    'Mustang GT w/ Performance': {
      'all': ['fs'],
    },
    'Mustang GT500 (excluding': {
      'all': ['as'],
    },
    'Mustang Mach 1': {
      '2003': ['fs'],
      '2004': ['fs'],
    },
    'Mustang Mach 1 (all)': {
      '2021': ['fs'],
      '2022': ['fs'],
      '2023': ['fs'],
    },
    'Mustang SVO': {
      'all': ['gs'],
    },
    'Mustang SVT Cobra': {
      'all': ['fs'],
    },
    'Mustang Shelby GT (T82 & 54U fac- Thunderbird (V8)': {
      '2002': ['fs'],
      '2003': ['fs'],
      '2004': ['fs'],
      '2005': ['fs'],
    },
    'Mustang Shelby GT350': {
      '2015': ['sst'],
      '2016': ['sst'],
      '2017': ['sst'],
      '2018': ['sst'],
    },
    'Mustang Shelby GT350 (incl.': {
      'all': ['sst'],
    },
    'Mustang Shelby GT350/GT350R ': {
      'all': ['ssp'],
    },
    'Mustang Shelby GT350R': {
      '2015': ['ss'],
      '2016': ['ss'],
      '2017': ['ss'],
      '2018': ['ss'],
      '2019': ['ss'],
      '2020': ['ss'],
    },
    'Mustang Shelby GT500': {
      'all': ['esp'],
    },
    'Mustang Shelby GT500 (2007- Mustang Mach-E': {
      'all': ['bs'],
    },
    'Mustang V6': {
      '2011': ['ds'],
      '2012': ['ds'],
      '2013': ['ds'],
      '2014': ['ds'],
      '2015': ['ds'],
      '2016': ['ds'],
      '2017': ['ds'],
    },
    'Package - Level 1 and Level 2) ': {
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
      '2021': ['fs'],
      '2022': ['fs'],
      '2023': ['fs'],
      '2024': ['fs'],
      '2025': ['fs'],
    },
    'Package - Level 2': {
      '2018': ['fs'],
      '2019': ['fs'],
      '2020': ['fs'],
      '2021': ['fs'],
      '2022': ['fs'],
      '2023': ['fs'],
      '2024': ['fs'],
    },
    'Pinto': {
      'all': ['hs'],
    },
    'Probe': {
      'all': ['hs'],
    },
    'R)': {
      '1979': ['bst'],
      '1980': ['bst'],
      '1981': ['bst'],
      '1982': ['bst'],
      '1983': ['bst'],
      '1984': ['bst'],
      '1985': ['bst'],
      '1986': ['bst'],
      '1987': ['bst'],
      '1988': ['bst'],
      '1989': ['bst'],
      '1990': ['bst'],
      '1991': ['bst'],
      '1992': ['bst'],
      '1993': ['bst'],
      '1994': ['bst'],
      '1995': ['bst'],
      '1996': ['bst'],
      '1997': ['bst'],
      '1998': ['bst'],
      '1999': ['bst'],
      '2000': ['bst'],
      '2001': ['bst'],
      '2002': ['bst'],
      '2003': ['bst'],
      '2004': ['bst'],
    },
    'RWD V6 models': {
      'all': ['hs'],
    },
    'Ranger (4-cyl & 6-cyl, N/A)*': {
      'all': ['cst'],
    },
    'Taurus': {
      'all': ['hs'],
    },
    'Taurus SHO': {
      '1989': ['hs'],
      '1990': ['hs'],
      '1991': ['hs'],
      '1992': ['hs'],
      '1993': ['hs'],
      '1994': ['hs'],
      '1995': ['hs'],
      '1996': ['gs'],
      '1997': ['gs'],
      '1998': ['gs'],
      '1999': ['gs'],
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
    'Tempo': {
      'all': ['hs'],
    },
    'Thunderbird (V6, non-S/C)': {
      '1989': ['hs'],
      '1990': ['hs'],
      '1991': ['hs'],
      '1992': ['hs'],
      '1993': ['hs'],
      '1994': ['hs'],
      '1995': ['hs'],
      '1996': ['hs'],
      '1997': ['hs'],
    },
    'Thunderbird Turbo Coupe': {
      'all': ['hs'],
    },
    'Turbo except SVO)': {
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
      '1993': ['hs'],
    },
    'ZX2 & Excort ZX2': {
      '1998': ['est'],
      '1999': ['est'],
      '2000': ['est'],
      '2001': ['est'],
      '2002': ['est'],
      '2003': ['est'],
    },
  },
  'GMC': {
    'Sonoma (4-cyl & 6-cyl, N/A)*': {
      'all': ['cst'],
    },
    'Syclone': {
      'all': ['fs'],
    },
    'Typhoon': {
      'all': ['fs'],
    },
  },
  'Geo': {
    'Compression ratio (max.): 11.0:1; valve lift (max.): 0.450”': {
      'all': ['ep'],
    },
    'Metro': {
      'all': ['hs'],
    },
    'Prizm': {
      'all': ['hs'],
    },
    'Spectrum': {
      'all': ['hs'],
    },
    'Storm': {
      'all': ['hs'],
    },
  },
  'Honda': {
    '000, or 12100-PE3-000; 1488 cc - 12100-PE3-010 or 121-XA1- Civic & CRX': {
      '1988': ['ep'],
      '1989': ['ep'],
      '1990': ['ep'],
      '1991': ['ep'],
    },
    '000, or 12100-PE3-000; 1488 cc - 12100-PE3-010 or 12100-XA1- DelSol': {
      '1993': ['ep'],
      '1994': ['ep'],
      '1995': ['ep'],
      '1996': ['ep'],
    },
    'Accord': {
      'all': ['ep', 'hs'],
      '1994': ['est'],
      '1995': ['est'],
      '1996': ['est'],
      '1997': ['est'],
    },
    'Accord (4-cyl)': {
      '1998': ['est'],
      '1999': ['est'],
      '2000': ['est'],
      '2001': ['est'],
      '2002': ['est'],
      '2003': ['est'],
      '2004': ['est'],
      '2005': ['est'],
      '2006': ['est'],
      '2007': ['est'],
      '2008': ['est'],
      '2009': ['est'],
      '2010': ['est'],
      '2011': ['est'],
      '2012': ['est'],
      '2013': ['est'],
      '2014': ['est'],
      '2015': ['est'],
    },
    'Accord (6-cyl)': {
      '1998': ['cst'],
      '1999': ['cst'],
      '2000': ['cst'],
      '2001': ['cst'],
      '2002': ['cst'],
      '2003': ['cst'],
      '2004': ['cst'],
      '2005': ['cst'],
      '2006': ['cst'],
      '2007': ['cst'],
      '2008': ['cst'],
      '2009': ['cst'],
      '2010': ['cst'],
      '2011': ['cst'],
      '2012': ['cst'],
      '2013': ['cst'],
    },
    'Accord (V6)': {
      '2014': ['cst'],
      '2015': ['cst'],
      '2016': ['cst'],
      '2017': ['cst'],
    },
    'Alternate cylinder head: 12100-664-010': {
      'all': ['ep'],
    },
    'Alternate cylinder head: 12100-P05-010 or 12100-P05-020': {
      'all': ['ep'],
    },
    'CRX': {
      'all': ['est', 'hs'],
      '1984': ['ep'],
      '1985': ['ep'],
      '1986': ['ep'],
      '1987': ['ep'],
    },
    'Civic': {
      'all': ['ep'],
      '1984': ['ep', 'est'],
      '1985': ['ep', 'est'],
      '1986': ['ep', 'est'],
      '1987': ['ep', 'est'],
      '1988': ['est'],
      '1989': ['est'],
      '1990': ['est'],
      '1991': ['est'],
      '1992': ['ep', 'est'],
      '1993': ['ep', 'est'],
      '1994': ['ep', 'est'],
      '1995': ['ep', 'est'],
      '1996': ['est'],
      '1997': ['est'],
      '1998': ['est'],
      '1999': ['est'],
      '2000': ['est'],
      '2001': ['ep'],
      '2002': ['ep'],
      '2003': ['ep'],
      '2004': ['ep'],
      '2005': ['ep'],
      '2006': ['ep'],
      '2007': ['ep'],
      '2008': ['ep'],
      '2009': ['ep'],
      '2010': ['ep'],
    },
    'Civic & CRX': {
      '1988': ['dsp'],
      '1989': ['dsp'],
      '1990': ['dsp'],
      '1991': ['dsp'],
    },
    'Civic (1488 cc)': {
      '1980': ['ep'],
      '1981': ['ep'],
      '1982': ['ep'],
      '1983': ['ep'],
    },
    'Civic (all, excluding Mugen 2008)': {
      '1975': ['hs'],
      '1976': ['hs'],
      '1977': ['hs'],
      '1978': ['hs'],
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
      '1993': ['hs'],
      '1994': ['hs'],
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
      '2012': ['hs'],
      '2013': ['hs'],
      '2014': ['hs'],
      '2015': ['hs'],
    },
    'Civic (non-Si)': {
      '1996': ['ep'],
      '1997': ['ep'],
      '1998': ['ep'],
      '1999': ['ep'],
      '2000': ['ep'],
      '2001': ['est'],
      '2002': ['est'],
      '2003': ['est'],
      '2004': ['est'],
      '2005': ['est'],
      '2006': ['est'],
      '2007': ['est'],
      '2008': ['est'],
      '2009': ['est'],
      '2010': ['est'],
      '2011': ['est'],
      '2012': ['est'],
      '2013': ['est'],
      '2014': ['est'],
      '2015': ['est'],
    },
    'Civic (non-Si, non-type R)': {
      '2016': ['hs'],
      '2017': ['hs'],
      '2018': ['hs'],
      '2019': ['hs'],
      '2020': ['hs'],
      '2021': ['hs'],
      '2022': ['hs'],
      '2023': ['hs'],
      '2024': ['hs'],
    },
    'Civic Hybrid': {
      '2025': ['hs'],
    },
    'Civic Si': {
      '2002': ['cst', 'fsp'],
      '2003': ['cst', 'fsp'],
      '2004': ['cst', 'fsp'],
      '2005': ['cst', 'fsp'],
      '2006': ['cst', 'fsp'],
      '2007': ['cst', 'fsp'],
      '2008': ['cst', 'fsp'],
      '2009': ['cst', 'fsp'],
      '2010': ['cst', 'fsp'],
      '2011': ['cst', 'fsp'],
      '2012': ['cst', 'fsp'],
      '2013': ['cst'],
      '2014': ['cst'],
      '2015': ['cst'],
      '2017': ['fsp', 'gs', 'gst'],
      '2018': ['fsp', 'gs', 'gst'],
      '2019': ['fsp', 'gs', 'gst'],
      '2020': ['fsp', 'gs', 'gst'],
      '2021': ['fsp', 'gst'],
      '2022': ['gs', 'gst'],
      '2023': ['gs', 'gst'],
      '2024': ['gs', 'gst'],
      '2025': ['gs', 'gst'],
    },
    'Civic Si (1.6L DOHC VTEC)': {
      '1999': ['ep'],
      '2000': ['ep'],
    },
    'Civic Si Mugen': {
      '2008': ['gs'],
    },
    'Civic Sport': {
      '2017': ['gst'],
      '2018': ['gst'],
      '2019': ['gst'],
      '2020': ['gst'],
      '2021': ['gst'],
      '2022': ['gst'],
      '2023': ['gst'],
      '2024': ['gst'],
      '2025': ['gst'],
    },
    'Civic Type R': {
      '2017': ['bst', 'ds', 'fsp'],
      '2018': ['bst', 'ds', 'fsp'],
      '2019': ['bst', 'ds', 'fsp'],
      '2020': ['bst', 'ds', 'fsp'],
      '2021': ['bst', 'ds', 'fsp'],
      '2022': ['bst'],
      '2023': ['bst'],
    },
    'Civic Type-R': {
      '2023': ['bs'],
      '2024': ['bs'],
      '2025': ['bs'],
    },
    'Civic Type-R Limited Edition': {
      '2021': ['bs'],
    },
    'Civis Si': {
      '1999': ['fsp'],
      '2000': ['fsp'],
    },
    'Compression ratio (max.): 11.0:1; valve lift (max.): 0.390”': {
      'all': ['ep'],
    },
    'Del Sol': {
      'all': ['fsp'],
    },
    'Fit': {
      'all': ['est', 'hs'],
      '2007': ['ep'],
      '2008': ['ep'],
      '2009': ['ep'],
      '2010': ['ep'],
      '2011': ['ep'],
      '2012': ['ep'],
      '2013': ['ep'],
      '2014': ['ep'],
      '2015': ['ep'],
      '2016': ['ep'],
      '2017': ['ep'],
      '2018': ['ep'],
    },
    'G35 Sedan': {
      'all': ['cst'],
    },
    'INFINITI': {
      'all': ['cst'],
    },
    'Insight': {
      'all': ['est', 'hs'],
    },
    'PC7-020': {
      'all': ['ep'],
    },
    'Prelude': {
      'all': ['hs'],
      '1978': ['ep'],
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
      '1995': ['ep'],
      '1996': ['ep'],
      '1997': ['ep'],
      '1998': ['ep'],
      '1999': ['ep'],
      '2000': ['ep'],
      '2001': ['ep'],
    },
    'Prelude (1992-2001)': {
      'all': ['fsp'],
    },
    'Prelude 4WS': {
      'all': ['fsp'],
    },
    'S2000': {
      'all': ['cs', 'cst', 'dsp'],
      '2000': ['fp'],
      '2001': ['fp'],
      '2002': ['fp'],
      '2003': ['fp'],
      '2004': ['fp'],
      '2005': ['fp'],
      '2006': ['fp'],
      '2007': ['fp'],
      '2008': ['fp'],
      '2009': ['fp'],
    },
    'S2000 CR': {
      'all': ['as'],
    },
    'S2000-CR': {
      'all': ['bst'],
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
      '2012': ['est', 'hs'],
      '2013': ['est', 'hs'],
      '2014': ['est', 'hs'],
      '2015': ['est', 'hs'],
      '2016': ['est', 'hs'],
      '2017': ['est', 'hs'],
      '2018': ['hs'],
      '2019': ['hs'],
      '2020': ['hs'],
      '2021': ['hs'],
      '2022': ['hs'],
    },
    'B Street Touring®': {
      'all': ['bst'],
    },
    'Edition)': {
      'all': ['fsp'],
    },
    'Elantra': {
      'all': ['hs'],
      '2001': ['est'],
      '2002': ['est'],
      '2003': ['est'],
      '2004': ['est'],
      '2005': ['est'],
      '2006': ['est'],
      '2007': ['est'],
      '2008': ['est'],
      '2009': ['est'],
      '2010': ['est'],
      '2011': ['est'],
      '2012': ['est'],
      '2013': ['est'],
      '2014': ['est'],
      '2015': ['est'],
      '2016': ['est'],
    },
    'Elantra N': {
      '2022': ['bst', 'gs'],
      '2023': ['bst', 'gs'],
      '2024': ['bst', 'gs'],
      '2025': ['bst', 'gs'],
    },
    'Elantra N (2022-25) (excl. TCR': {
      'all': ['fsp'],
    },
    'Genesis': {
      'all': ['bst'],
      '2009': ['fsp'],
      '2010': ['fsp'],
      '2011': ['fsp'],
      '2012': ['fsp'],
    },
    'Genesis (2.0L Turbo)': {
      '2010': ['gst'],
      '2011': ['gst'],
      '2012': ['gst'],
    },
    'Genesis Coupe (4-cyl Turbo)': {
      '2010': ['hs'],
      '2011': ['hs'],
      '2012': ['hs'],
      '2013': ['ds'],
      '2014': ['ds'],
      '2015': ['ds'],
      '2016': ['ds'],
    },
    'Genesis Coupe (V6)': {
      '2010': ['ds'],
      '2011': ['ds'],
      '2012': ['ds'],
      '2013': ['fs'],
      '2014': ['fs'],
      '2015': ['fs'],
    },
    'Genesis G70 (4-cyl Turbo) (2019- Veloster Turbo Rally Edition': {
      '2016': ['hs'],
      '2017': ['hs'],
    },
    'IONIQ EV': {
      '2016': ['hs'],
      '2017': ['hs'],
      '2018': ['hs'],
      '2019': ['hs'],
      '2020': ['hs'],
      '2021': ['hs'],
      '2022': ['hs'],
    },
    'Ionic 5 (all)': {
      '2022': ['ds'],
      '2023': ['ds'],
      '2024': ['ds'],
      '2025': ['ds'],
    },
    'Ioniq 5 N': {
      '2025': ['ss'],
    },
    'Kona EV': {
      '2018': ['hs'],
      '2019': ['hs'],
      '2020': ['hs'],
      '2021': ['hs'],
      '2022': ['hs'],
      '2023': ['hs'],
    },
    'Kona N': {
      '2022': ['gs'],
      '2023': ['gs'],
    },
    'Package)': {
      '2019': ['gs'],
      '2020': ['gs'],
      '2021': ['gs'],
      '2022': ['gs'],
    },
    'Scoupe': {
      'all': ['hs'],
    },
    'Sonata': {
      'all': ['hs'],
      '1989': ['ep'],
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
    'Tiburon': {
      'all': ['fsp', 'hs'],
    },
    'Tiburon (V6)': {
      '2003': ['est'],
      '2004': ['est'],
      '2005': ['est'],
      '2006': ['est'],
      '2007': ['est'],
      '2008': ['est'],
    },
    'Veloster (non-turbo)': {
      '2011': ['est'],
      '2012': ['est'],
      '2013': ['est'],
      '2014': ['est'],
      '2015': ['est'],
      '2016': ['est'],
      '2017': ['est'],
      '2018': ['est'],
    },
    'Veloster Turbo': {
      '2013': ['gst'],
      '2014': ['gst'],
      '2015': ['gst'],
      '2016': ['gst'],
      '2019': ['fsp', 'gst'],
      '2020': ['fsp', 'gst'],
      '2021': ['fsp'],
      '2022': ['fsp'],
    },
  },
  'Infiniti': {
    'G20': {
      'all': ['hs'],
    },
    'G35': {
      'all': ['fsp'],
    },
    'G35 Coupe': {
      'all': ['ast'],
      '2003': ['ds'],
      '2004': ['ds'],
      '2005': ['ds'],
      '2006': ['ds'],
      '2007': ['ds'],
    },
    'G35 Sedan': {
      '2003': ['ds'],
      '2004': ['ds'],
      '2005': ['ds'],
      '2006': ['ds'],
      '2007': ['ds'],
      '2008': ['ds'],
      '2009': ['ds'],
    },
    'G37': {
      'all': ['ast', 'fsp'],
    },
    'G37 Coupe & Sedan': {
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
      'all': ['fsp', 'hs'],
    },
    'Q45': {
      'all': ['fs', 'fsp'],
    },
    'Q50 Sport': {
      '2014': ['fs'],
      '2015': ['fs'],
      '2016': ['fs'],
      '2017': ['fs'],
      '2018': ['fs'],
      '2019': ['fs'],
      '2020': ['fs'],
      '2021': ['fs'],
      '2022': ['fs'],
      '2023': ['fs'],
      '2024': ['fs'],
      '2025': ['fs'],
    },
    'Q60': {
      '2014': ['fs'],
      '2015': ['fs'],
      '2016': ['fs'],
      '2017': ['fs'],
      '2018': ['fs'],
      '2019': ['fs'],
      '2020': ['fs'],
      '2021': ['fs'],
      '2022': ['fs'],
    },
  },
  'Isuzu': {
    'F Street Prepared': {
      'all': ['fsp'],
    },
    'I-Mark': {
      'all': ['hs'],
      '1981': ['dp'],
      '1982': ['dp'],
      '1983': ['dp'],
      '1984': ['dp'],
      '1985': ['ep'],
      '1986': ['ep'],
      '1987': ['ep'],
      '1988': ['ep'],
      '1989': ['ep'],
    },
    'I-Mark LS': {
      'all': ['fsp'],
    },
    'I-Mark RS': {
      'all': ['fp', 'fsp'],
    },
    'Impulse': {
      'all': ['hs'],
    },
    'Impulse (non-turbo)': {
      '1983': ['dp'],
      '1984': ['dp'],
      '1985': ['dp'],
      '1986': ['dp'],
      '1987': ['dp'],
      '1988': ['dp'],
      '1989': ['dp'],
      '1990': ['ep'],
      '1991': ['ep'],
      '1992': ['ep'],
    },
    'Impulse CS': {
      'all': ['fsp'],
    },
    'Impulse RS Turbo': {
      'all': ['fsp'],
    },
    'Impulse Turbo': {
      'all': ['gs'],
    },
    'Impulse Turbo & RS': {
      'all': ['fsp'],
    },
    'Impulse XS': {
      'all': ['fsp'],
    },
    'Street Prepared (FSP) - Appendix A': {
      'all': ['fsp'],
    },
    'Stylus': {
      'all': ['hs'],
      '1991': ['ep'],
      '1992': ['ep'],
      '1993': ['ep'],
    },
  },
  'Jaguar': {
    'E-Type': {
      'all': ['esp'],
    },
    'F-Type (NOC non-Project 7)': {
      '2014': ['bs'],
      '2015': ['bs'],
      '2016': ['bs'],
      '2017': ['bs'],
      '2018': ['bs'],
      '2019': ['bs'],
      '2020': ['bs'],
      '2021': ['bs'],
      '2022': ['bs'],
      '2023': ['bs'],
      '2024': ['bs'],
    },
    'F-type R & SVR': {
      '2018': ['as'],
      '2019': ['as'],
      '2020': ['as'],
      '2021': ['as'],
      '2022': ['as'],
      '2023': ['as'],
      '2024': ['as'],
    },
    'S-Type (6-cyl)': {
      '2002': ['hs'],
      '2003': ['hs'],
      '2004': ['hs'],
      '2005': ['hs'],
      '2006': ['hs'],
      '2007': ['hs'],
      '2008': ['hs'],
    },
    'S-Type R': {
      'all': ['fs'],
    },
    'Sedan': {
      'all': ['fs'],
    },
    'Sedans': {
      'all': ['fsp'],
    },
    'Street (HS) - Appendix A': {
      'all': ['hs'],
    },
    'X-Type (All)': {
      '2002': ['hs'],
      '2003': ['hs'],
      '2004': ['hs'],
      '2005': ['hs'],
      '2006': ['hs'],
      '2007': ['hs'],
      '2008': ['hs'],
    },
    'XE (all)': {
      '2017': ['fs'],
      '2018': ['fs'],
      '2019': ['fs'],
      '2020': ['fs'],
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
      '1976': ['fs'],
      '1977': ['fs'],
      '1978': ['fs'],
      '1979': ['fs'],
      '1980': ['fs'],
      '1981': ['fs'],
      '1982': ['fs'],
      '1983': ['fs'],
      '1984': ['fs'],
      '1985': ['fs'],
      '1986': ['fs'],
      '1987': ['fs'],
      '1988': ['fs'],
      '1989': ['fs'],
      '1990': ['fs'],
      '1991': ['fs'],
      '1992': ['fs'],
      '1993': ['fs'],
      '1994': ['fs'],
      '1995': ['fs'],
      '1996': ['fs'],
    },
    'XJS': {
      'all': ['fsp'],
    },
    'XK 120, 140, 150, & 160': {
      'all': ['fsp'],
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
    'XKE': {
      'all': ['cs'],
    },
    'XKE (1961-74)': {
      'all': ['fp'],
    },
    'XKR Coupe': {
      'all': ['bs'],
    },
  },
  'Jensen': {
    'Alternate Parts: cast iron sleeves': {
      'all': ['dp'],
    },
    'Jensen-Healey': {
      'all': ['cs'],
      '1973': ['dp'],
    },
  },
  'Kia': {
    'EV6 (GT)': {
      '2022': ['ss'],
      '2023': ['ss'],
      '2024': ['ss'],
      '2025': ['ss'],
    },
    'EV6 (non-GT)': {
      '2022': ['ds'],
      '2023': ['ds'],
      '2024': ['ds'],
      '2025': ['ds'],
    },
    'Forte & Forte Koup': {
      'all': ['est', 'gst', 'hs'],
    },
    'Forte GT': {
      '2020': ['hs'],
      '2021': ['hs'],
      '2022': ['hs'],
      '2023': ['hs'],
      '2024': ['hs'],
    },
    'Forte5': {
      '2014': ['hs'],
      '2015': ['hs'],
      '2016': ['hs'],
      '2017': ['hs'],
      '2018': ['hs'],
    },
    'K5': {
      '2021': ['hs'],
      '2022': ['hs'],
      '2023': ['hs'],
      '2024': ['hs'],
      '2025': ['hs'],
    },
    'K5 GT': {
      '2021': ['gs'],
      '2022': ['gs'],
      '2023': ['gs'],
      '2024': ['gs'],
      '2025': ['gs'],
    },
    'Niro EV': {
      '2019': ['hs'],
      '2020': ['hs'],
      '2021': ['hs'],
      '2022': ['hs'],
      '2023': ['hs'],
      '2024': ['hs'],
      '2025': ['hs'],
    },
    'Optima': {
      'all': ['hs'],
    },
    'Rio': {
      '2012': ['est', 'hs'],
      '2013': ['est', 'hs'],
      '2014': ['est', 'hs'],
      '2015': ['est', 'hs'],
      '2016': ['est', 'hs'],
      '2017': ['est', 'hs'],
      '2018': ['hs'],
      '2019': ['hs'],
      '2020': ['hs'],
      '2021': ['hs'],
      '2022': ['hs'],
      '2023': ['hs'],
    },
    'Sephia': {
      'all': ['hs'],
    },
    'Spectra5': {
      'all': ['hs'],
    },
    'Stinger (4-cyl Turbo)': {
      '2018': ['gs'],
      '2019': ['gs'],
      '2020': ['gs'],
      '2021': ['gs'],
      '2022': ['gs'],
      '2023': ['gs'],
    },
    'Stinger (V6 Turbo)': {
      '2018': ['ast', 'fs'],
      '2019': ['ast', 'fs'],
      '2020': ['ast', 'fs'],
      '2021': ['ast', 'fs'],
      '2022': ['ast', 'fs'],
      '2023': ['ast'],
    },
  },
  'Lamborghini': {
    'EGallardo': {
      '2003': ['ss'],
      '2004': ['ss'],
      '2005': ['ss'],
      '2006': ['ss'],
      '2007': ['ss'],
      '2008': ['ss'],
    },
    'Gallardo (all excluding Super Tro- Huracan (excl. STO)': {
      '2014': ['ssp'],
      '2015': ['ssp'],
      '2016': ['ssp'],
      '2017': ['ssp'],
      '2018': ['ssp'],
      '2019': ['ssp'],
      '2020': ['ssp'],
      '2021': ['ssp'],
      '2022': ['ssp'],
      '2023': ['ssp'],
      '2024': ['ssp'],
    },
  },
  'Lancia': {
    'Beta': {
      'all': ['hs'],
      '1975': ['ep'],
      '1976': ['ep'],
      '1977': ['ep'],
      '1978': ['ep'],
      '1979': ['ep'],
      '1980': ['ep'],
      '1981': ['ep'],
      '1982': ['ep'],
    },
    'Scorpion': {
      'all': ['dsp', 'hs'],
    },
    'Scorpion (1756 cc)': {
      '1976': ['dp'],
    },
    'Zagato': {
      '1975': ['ep'],
      '1976': ['ep'],
      '1977': ['ep'],
      '1978': ['ep'],
      '1979': ['ep'],
      '1980': ['ep'],
      '1981': ['ep'],
      '1982': ['ep'],
    },
  },
  'Lexus': {
    'CT 200h': {
      '2011': ['est', 'hs'],
      '2012': ['est', 'hs'],
      '2013': ['est', 'hs'],
      '2014': ['est', 'hs'],
      '2015': ['est', 'hs'],
      '2016': ['est', 'hs'],
      '2017': ['est', 'hs'],
    },
    'ES 250': {
      'all': ['fsp', 'hs'],
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
      '1998': ['fs'],
      '1999': ['fs'],
      '2000': ['fs'],
    },
    'GS 400, LS 400, & SC 400': {
      'all': ['fsp'],
    },
    'GS-F': {
      '2016': ['fs'],
      '2017': ['fs'],
      '2018': ['fs'],
      '2019': ['fs'],
      '2020': ['fs'],
      '2021': ['fs'],
    },
    'IS 250': {
      'all': ['cst'],
    },
    'IS 300': {
      'all': ['cst'],
      '2001': ['hs'],
      '2002': ['hs'],
      '2003': ['hs'],
      '2004': ['hs'],
      '2005': ['hs'],
    },
    'IS 350': {
      'all': ['cst'],
    },
    'IS 500 F Sport Performance ': {
      '2022': ['fs'],
      '2023': ['fs'],
      '2024': ['fs'],
      '2025': ['fs'],
    },
    'IS F': {
      'all': ['ast', 'fsp'],
      '2008': ['fs'],
      '2009': ['fs'],
      '2010': ['fs'],
      '2011': ['fs'],
      '2012': ['fs'],
      '2013': ['fs'],
      '2014': ['fs'],
    },
    'IS300': {
      'all': ['fsp'],
      '2001': ['fp'],
      '2002': ['fp'],
      '2003': ['fp'],
      '2004': ['fp'],
      '2005': ['fp'],
    },
    'RC (non-F)': {
      '2015': ['fs'],
      '2016': ['fs'],
      '2017': ['fs'],
      '2018': ['fs'],
      '2019': ['fs'],
      '2020': ['fs'],
      '2021': ['fs'],
      '2022': ['fs'],
      '2023': ['fs'],
      '2024': ['fs'],
      '2025': ['fs'],
    },
    'RC-F (non-Track Edition)': {
      '2015': ['bs'],
      '2016': ['bs'],
      '2017': ['bs'],
      '2018': ['bs'],
      '2019': ['bs'],
      '2020': ['bs'],
      '2021': ['bs'],
      '2022': ['bs'],
      '2023': ['bs'],
      '2024': ['bs'],
    },
    'SC 300': {
      '1992': ['gs'],
      '1993': ['gs'],
      '1994': ['gs'],
      '1995': ['gs'],
      '1996': ['gs'],
      '1997': ['gs'],
      '1998': ['gs'],
      '1999': ['gs'],
      '2000': ['gs'],
    },
    'SC 400': {
      '1992': ['ds'],
      '1993': ['ds'],
      '1994': ['ds'],
      '1995': ['ds'],
      '1996': ['ds'],
      '1997': ['ds'],
      '1998': ['ds'],
      '1999': ['ds'],
      '2000': ['ds'],
    },
    'SC300': {
      'all': ['cst'],
    },
  },
  'Lincoln': {
    'LS': {
      'all': ['hs'],
    },
    'LS (V8)': {
      '2000': ['fs'],
      '2001': ['fs'],
      '2002': ['fs'],
      '2003': ['fs'],
      '2004': ['fs'],
      '2005': ['fs'],
      '2006': ['fs'],
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
      '2013': ['hs'],
      '2014': ['hs'],
      '2015': ['hs'],
      '2016': ['hs'],
      '2017': ['hs'],
      '2018': ['hs'],
      '2019': ['hs'],
      '2020': ['hs'],
    },
    'Mark VIII': {
      '1993': ['fs'],
      '1994': ['fs'],
      '1995': ['fs'],
      '1996': ['fs'],
      '1997': ['fs'],
      '1998': ['fs'],
    },
  },
  'Lotus': {
    '(2005-11) *Limited Prep*': {
      'all': ['dsp'],
    },
    '7 & 7A': {
      'all': ['cs', 'dp', 'ssp'],
    },
    'Alternate cylinder head (Renault): casting R-16 Renault': {
      'all': ['dp'],
    },
    'Alternate cylinder head (Twin cam): 26RD0703': {
      'all': ['dp'],
    },
    'Alternate cylinder head: 26RD0703': {
      'all': ['dp'],
    },
    'Cortina': {
      'all': ['dsp', 'hs'],
    },
    'Eclat': {
      'all': ['cs'],
    },
    'Elan': {
      'all': ['cs', 'dp', 'ssp'],
    },
    'Elan M100': {
      'all': ['ssp'],
    },
    'Elise & Exige (normally-aspirated)': {
      '1996': ['fp'],
      '1997': ['fp'],
      '1998': ['fp'],
      '1999': ['fp'],
      '2000': ['fp'],
      '2001': ['fp'],
      '2002': ['fp'],
      '2003': ['fp'],
      '2004': ['fp'],
      '2005': ['fp'],
      '2006': ['fp'],
      '2007': ['fp'],
      '2008': ['fp'],
      '2009': ['fp'],
      '2010': ['fp'],
    },
    'Elise (non-SC)': {
      '2005': ['as', 'sst'],
      '2006': ['as', 'sst'],
      '2007': ['as', 'sst'],
      '2008': ['as', 'sst'],
      '2009': ['as', 'sst'],
      '2010': ['as', 'sst'],
      '2011': ['as', 'sst'],
    },
    'Elise SC': {
      '2008': ['ss'],
      '2009': ['ss'],
      '2010': ['ss'],
      '2011': ['ss'],
    },
    'Elise, Exige': {
      'all': ['dsp'],
    },
    'Elise, Exige, & Exige S': {
      '2005': ['ssp'],
      '2006': ['ssp'],
      '2007': ['ssp'],
      '2008': ['ssp'],
      '2009': ['ssp'],
      '2010': ['ssp'],
      '2011': ['ssp'],
    },
    'Elite': {
      'all': ['cs', 'dsp'],
    },
    'Elite 2+2 & Elcat': {
      'all': ['ssp'],
    },
    'Emira (V6)': {
      '2017': ['sst'],
      '2018': ['sst'],
      '2019': ['sst'],
      '2020': ['sst'],
    },
    'Emira (all)': {
      '2024': ['ss'],
      '2025': ['ss'],
    },
    'Esprit': {
      'all': ['cs', 'ssp'],
    },
    'Esprit Turbo': {
      '1996': ['as', 'sst'],
      '1997': ['as', 'sst'],
      '1998': ['as', 'sst'],
      '1999': ['as', 'sst'],
      '2000': ['as', 'sst'],
      '2001': ['as', 'sst'],
      '2002': ['as', 'sst'],
      '2003': ['as', 'sst'],
      '2004': ['as', 'sst'],
    },
    'Europa': {
      'all': ['cs', 'dp', 'ssp'],
    },
    'Evora': {
      '2010': ['ast'],
      '2011': ['ast'],
      '2012': ['ast'],
      '2013': ['ast'],
      '2014': ['ast'],
    },
    'Evora & Evora S': {
      '2010': ['ssp'],
      '2011': ['ssp'],
      '2012': ['ssp'],
      '2013': ['ssp'],
      '2014': ['ssp'],
    },
    'Evora (non-supercharged)': {
      '2010': ['bs'],
      '2011': ['bs'],
      '2012': ['bs'],
      '2013': ['bs'],
      '2014': ['bs'],
      '2015': ['bs'],
    },
    'Evora 400': {
      'all': ['ssp', 'sst'],
      '2016': ['as'],
      '2017': ['as'],
      '2018': ['as'],
    },
    'Evora 410': {
      'all': ['ssp'],
    },
    'Evora 410 Sport': {
      '2017': ['ss'],
      '2018': ['ss'],
    },
    'Evora GT': {
      'all': ['ssp'],
      '2020': ['as', 'sst'],
      '2021': ['as', 'sst'],
      '2022': ['as'],
    },
    'Evora S': {
      '2011': ['as', 'sst'],
      '2012': ['as', 'sst'],
      '2013': ['as', 'sst'],
      '2014': ['as', 'sst'],
    },
    'Exige (non-S)': {
      '2006': ['as', 'sst'],
    },
    'Exige S (non-S260, non-Club': {
      'all': ['ss'],
    },
    'Racer)': {
      '2007': ['ss'],
      '2008': ['ss'],
      '2009': ['ss'],
      '2010': ['ss'],
      '2011': ['ss'],
    },
    'Street (SS) - Appendix A': {
      'all': ['ss'],
    },
    'Super 7': {
      'all': ['dp'],
    },
  },
  'MG': {
    '2-door and 4-door F65/F66': {
      'all': ['hs'],
    },
    'Cooper Clubman (Base 3-cyl incl.': {
      'all': ['hs'],
    },
    'Cooper Hardtop (Base 3-cyl incl.': {
      'all': ['hs'],
    },
    'Cooper SE': {
      '2020': ['hs'],
      '2021': ['hs'],
      '2022': ['hs'],
      '2023': ['hs'],
      '2024': ['hs'],
    },
    'MINI': {
      'all': ['hs'],
    },
    'S, non-JCW)': {
      'all': ['hs'],
      '2014': ['hs'],
      '2015': ['hs'],
      '2016': ['hs'],
      '2017': ['hs'],
      '2018': ['hs'],
      '2019': ['hs'],
      '2020': ['hs'],
      '2021': ['hs'],
      '2022': ['hs'],
      '2023': ['hs'],
      '2024': ['hs'],
    },
  },
  'Maserati': {
    'BiTurbo': {
      'all': ['cs', 'fsp'],
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
    '190E': {
      'all': ['hs'],
      '1983': ['dp'],
      '1984': ['dp'],
      '1985': ['dp'],
      '1986': ['dp'],
      '1987': ['dp'],
      '1988': ['dp'],
      '1989': ['dp'],
      '1990': ['dp'],
      '1991': ['dp'],
      '1992': ['dp'],
      '1993': ['dp'],
    },
    '280': {
      '1995': ['hs'],
      '1996': ['hs'],
      '1997': ['hs'],
      '1998': ['hs'],
      '1999': ['hs'],
      '2000': ['hs'],
    },
    '323': {
      'all': ['hs'],
    },
    '323 & GLC (non-turbo, FWD)': {
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
      '1995': ['ep'],
    },
    '323 GT & 323 GTX': {
      'all': ['gst'],
    },
    '323 GT & GTX': {
      'all': ['fsp'],
    },
    '323 GT Turbo': {
      'all': ['hs'],
    },
    '323 GTX Turbo': {
      'all': ['hs'],
    },
    '626': {
      'all': ['dp'],
    },
    '626 (non-turbo, 2WD)': {
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
      '1995': ['ep'],
      '1996': ['ep'],
      '1997': ['ep'],
      '1998': ['ep'],
      '1999': ['ep'],
      '2000': ['ep'],
      '2001': ['ep'],
      '2002': ['ep'],
    },
    'Alternate cylinder head: E515-10-100B': {
      'all': ['dp'],
    },
    'Bridge or peripheral porting allowed.': {
      'all': ['fp'],
    },
    'C230': {
      '1999': ['hs'],
      '2000': ['hs'],
      '2001': ['hs'],
      '2002': ['hs'],
      '2003': ['hs'],
      '2004': ['hs'],
      '2005': ['hs'],
      '2006': ['hs'],
      '2007': ['hs'],
    },
    'C250': {
      '2012': ['gs'],
      '2013': ['gs'],
      '2014': ['gs'],
      '2015': ['gs'],
    },
    'CLA250': {
      'all': ['gs'],
    },
    'CLK 320 & CLK 32 AMG': {
      'all': ['esp'],
    },
    'Cooper (non-S)': {
      '2000': ['est'],
      '2001': ['est'],
      '2002': ['ep', 'est'],
      '2003': ['ep', 'est'],
      '2004': ['ep', 'est'],
      '2005': ['ep', 'est'],
      '2006': ['ep', 'est'],
      '2007': ['ep', 'est'],
      '2008': ['ep', 'est'],
      '2009': ['ep', 'est'],
      '2010': ['ep', 'est'],
      '2011': ['est'],
      '2012': ['est'],
      '2013': ['est'],
    },
    'Cooper S': {
      '2002': ['ep'],
      '2003': ['ep'],
      '2004': ['ep'],
      '2005': ['ep'],
      '2006': ['ep'],
      '2007': ['ep'],
      '2008': ['ep'],
      '2009': ['ep'],
      '2010': ['ep'],
      '2011': ['ep'],
      '2012': ['ep'],
    },
    'Cosmo': {
      'all': ['hs'],
      '1976': ['dp'],
      '1977': ['dp'],
      '1978': ['dp'],
    },
    'D Street Prepared': {
      'all': ['dsp'],
    },
    'E36 AMG': {
      '2010': ['esp'],
      '2011': ['esp'],
      '2012': ['esp'],
      '2013': ['esp'],
      '2014': ['esp'],
      '2015': ['esp'],
      '2016': ['esp'],
    },
    'GLA250': {
      'all': ['gs'],
    },
    'GLC': {
      'all': ['hs'],
    },
    'GLC (RWD)': {
      '1977': ['dp'],
      '1978': ['dp'],
      '1979': ['dp'],
      '1980': ['dp'],
      '1981': ['dp'],
      '1982': ['dp'],
      '1983': ['dp'],
    },
    'MINI': {
      'all': ['cst', 'ep', 'est'],
    },
    'MX-3': {
      'all': ['hs'],
    },
    'MX-5': {
      '2006': ['dsp'],
      '2007': ['dsp'],
      '2008': ['dsp'],
      '2009': ['dsp'],
      '2010': ['dsp'],
      '2011': ['dsp'],
      '2012': ['dsp'],
      '2013': ['dsp'],
      '2014': ['dsp'],
      '2015': ['dsp'],
    },
    'MX-5 (2006-2015) “Limited Prep”': {
      'all': ['esp'],
    },
    'MX-5 Miata': {
      '1990': ['dsp'],
      '1991': ['dsp'],
      '1992': ['dsp'],
      '1993': ['dsp'],
      '1994': ['dsp'],
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
      '2006': ['cst', 'dp'],
      '2007': ['cst', 'dp'],
      '2008': ['cst', 'dp'],
      '2009': ['cst', 'dp'],
      '2010': ['cst', 'dp'],
      '2011': ['cst', 'dp'],
      '2012': ['cst', 'dp'],
      '2013': ['cst', 'dp'],
      '2014': ['cst', 'dp'],
      '2015': ['cst', 'dp'],
      '2016': ['bst', 'dp'],
      '2017': ['bst', 'dp'],
      '2018': ['bst', 'dp'],
      '2019': ['bst', 'dp'],
      '2020': ['bst', 'dp'],
      '2021': ['bst'],
      '2022': ['bst'],
      '2023': ['bst'],
      '2024': ['bst'],
      '2025': ['bst'],
    },
    'MX-5 Miata (1.6L & 1.8L, non-turbo)': {
      '1990': ['dp'],
      '1991': ['dp'],
      '1992': ['dp'],
      '1993': ['dp'],
      '1994': ['dp'],
      '1995': ['dp'],
      '1996': ['dp'],
      '1997': ['dp'],
      '1998': ['dp'],
      '1999': ['dp'],
      '2000': ['dp'],
      '2001': ['dp'],
      '2002': ['dp'],
      '2003': ['dp'],
      '2004': ['dp'],
      '2005': ['dp'],
    },
    'MX-5 Miata (NC chassis; non- MS-R 2007)': {
      '2006': ['cs'],
      '2007': ['cs'],
      '2008': ['cs'],
      '2009': ['cs'],
      '2010': ['cs'],
      '2011': ['cs'],
      '2012': ['cs'],
      '2013': ['cs'],
      '2014': ['cs'],
      '2015': ['cs'],
    },
    'MX-5 Miata (ND1/ND2 chassis;': {
      'all': ['cs'],
    },
    'MX-5 Miata MS-R': {
      '2007': ['bs'],
    },
    'MX-6': {
      'all': ['fsp', 'hs'],
    },
    'MX-6 (12A Rotary; no peripheral port allowed)': {
      '1988': ['fp'],
      '1989': ['fp'],
      '1990': ['fp'],
      '1991': ['fp'],
      '1992': ['fp'],
      '1993': ['fp'],
      '1994': ['fp'],
      '1995': ['fp'],
      '1996': ['fp'],
      '1997': ['fp'],
    },
    'MX-6 (non-turbo, 2WD)': {
      '1988': ['ep'],
      '1989': ['ep'],
      '1990': ['ep'],
      '1991': ['ep'],
      '1992': ['ep'],
      '1993': ['ep'],
      '1994': ['ep'],
      '1995': ['ep'],
      '1996': ['ep'],
      '1997': ['ep'],
    },
    'MX-6 GT Turbo': {
      'all': ['fp'],
    },
    'Mazda2': {
      'all': ['est'],
      '2011': ['ep', 'hs'],
      '2012': ['ep', 'hs'],
      '2013': ['ep', 'hs'],
      '2014': ['ep', 'hs'],
      '2015': ['ep'],
    },
    'Mazda3': {
      'all': ['est'],
    },
    'Mazda3 (non-turbo)': {
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
      '2014': ['hs'],
      '2015': ['hs'],
      '2016': ['hs'],
      '2017': ['hs'],
      '2018': ['hs'],
      '2019': ['hs'],
      '2020': ['hs'],
      '2021': ['hs'],
      '2022': ['hs'],
      '2023': ['hs'],
      '2024': ['hs'],
      '2025': ['hs'],
    },
    'Mazda3 Turbo': {
      '2021': ['gs', 'gst'],
      '2022': ['gs', 'gst'],
      '2023': ['gs', 'gst'],
      '2024': ['gs', 'gst'],
      '2025': ['gs', 'gst'],
    },
    'Mazda6': {
      'all': ['est', 'fsp', 'hs'],
    },
    'MazdaSpeed MX-5 Miata': {
      '2004': ['fp'],
      '2005': ['fp'],
    },
    'MazdaSpeed Miata': {
      'all': ['dsp'],
    },
    'MazdaSpeed Protégé': {
      'all': ['fsp'],
      '2003': ['fp'],
    },
    'MazdaSpeed3': {
      'all': ['fsp'],
    },
    'MazdaSpeed6': {
      'all': ['fsp'],
    },
    'Mazdaspeed Miata': {
      '2004': ['bst', 'es'],
      '2005': ['bst', 'es'],
    },
    'Mazdaspeed Protégé': {
      'all': ['gst', 'hs'],
    },
    'Mazdaspeed3': {
      'all': ['gst', 'hs'],
    },
    'Mazdaspeed6': {
      'all': ['ds', 'gst'],
    },
    'Mercedes': {
      'all': ['dp', 'esp', 'gs', 'hs'],
    },
    'Merkur': {
      'all': ['fp'],
    },
    'Miata': {
      'all': ['est'],
    },
    'Miata (non-Club Sport 2003)': {
      '1990': ['es'],
      '1991': ['es'],
      '1992': ['es'],
      '1993': ['es'],
      '1994': ['es'],
      '1995': ['es'],
      '1996': ['es'],
      '1997': ['es'],
      '1998': ['es'],
      '1999': ['es'],
      '2000': ['es'],
      '2001': ['es'],
      '2002': ['es'],
      '2003': ['es'],
      '2004': ['es'],
      '2005': ['es'],
    },
    'Miata (non-turbo)': {
      '1994': ['cst'],
      '1995': ['cst'],
      '1996': ['cst'],
      '1997': ['cst'],
      '1998': ['cst'],
      '1999': ['cst'],
      '2000': ['cst'],
      '2001': ['cst'],
      '2002': ['cst'],
      '2003': ['cst'],
      '2004': ['cst'],
      '2005': ['cst'],
    },
    'Miata Club Sport': {
      '2003': ['bs'],
    },
    'Millenia': {
      'all': ['hs'],
    },
    'Mx-5 Miata': {
      'all': ['dsp'],
    },
    'No peripheral port allowed.': {
      'all': ['fp'],
    },
    'Prepared (FP) - Appendix A': {
      'all': ['fp'],
    },
    'Protégé': {
      'all': ['hs'],
    },
    'Protégé (NOC)': {
      '1999': ['est'],
      '2000': ['est'],
      '2001': ['est'],
      '2002': ['est'],
      '2003': ['est'],
    },
    'Protégé MP3': {
      'all': ['est'],
    },
    'R100': {
      'all': ['hs'],
    },
    'RX-2': {
      'all': ['hs'],
      '1971': ['fp'],
      '1972': ['fp'],
      '1973': ['fp'],
      '1974': ['fp'],
    },
    'RX-2 & 616': {
      'all': ['dsp'],
    },
    'RX-3': {
      'all': ['hs'],
      '1971': ['fp'],
      '1972': ['fp'],
      '1973': ['fp'],
      '1974': ['fp'],
      '1975': ['fp'],
      '1976': ['fp'],
      '1977': ['fp'],
      '1978': ['fp'],
    },
    'RX-3, RX-3SP, & 808 Mizer': {
      'all': ['dsp'],
    },
    'RX-4': {
      'all': ['hs'],
      '1974': ['fp'],
      '1975': ['fp'],
      '1976': ['fp'],
      '1977': ['fp'],
      '1978': ['fp'],
    },
    'RX-7': {
      'all': ['es', 'est'],
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
      '1989': ['fp'],
      '1990': ['fp'],
      '1991': ['fp'],
      '1993': ['as', 'ssp'],
      '1994': ['as', 'ssp'],
      '1995': ['as', 'ssp'],
    },
    'RX-7 (non-turbo)': {
      '1978': ['dsp'],
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
    },
    'RX-7 GSL': {
      'all': ['cst'],
    },
    'RX-7 GSL-SE': {
      'all': ['cst'],
    },
    'RX-7 GTU': {
      '1988': ['cst'],
    },
    'RX-7 GXL': {
      'all': ['cst'],
    },
    'RX-7 Turbo': {
      '1986': ['dsp'],
      '1987': ['cs', 'dsp'],
      '1988': ['cs', 'dsp'],
      '1989': ['cs', 'dsp'],
      '1990': ['cs', 'dsp'],
      '1991': ['cs', 'dsp'],
      '1992': ['dsp'],
    },
    'RX-8': {
      'all': ['cs', 'cst', 'esp', 'fp'],
    },
    'SLK55 AMG (R171)': {
      '2004': ['esp'],
      '2005': ['esp'],
      '2006': ['esp'],
      '2007': ['esp'],
      '2008': ['esp'],
      '2009': ['esp'],
      '2010': ['esp'],
      '2011': ['esp'],
    },
    'Sedan': {
      'all': ['ep'],
    },
    'Spec Miata': {
      'all': ['fsp'],
    },
    'Street Prepared (DSP) - Appendix A': {
      'all': ['dsp'],
    },
    'Super Street Prepared': {
      'all': ['ssp'],
    },
    'XR4Ti': {
      '1985': ['fp'],
      '1986': ['fp'],
      '1987': ['fp'],
      '1988': ['fp'],
    },
  },
  'McLaren': {
    '570 *Limited Prep*': {
      'all': ['ssp'],
    },
    '570GT': {
      'all': ['ss'],
    },
    '570S': {
      'all': ['ss'],
    },
    '600LT *Limited Prep*': {
      'all': ['ssp'],
    },
    '620R *Limited Prep*': {
      'all': ['ssp'],
    },
    '650S': {
      'all': ['ss'],
    },
    '720S': {
      'all': ['ssp'],
    },
    'MP4-12C': {
      'all': ['ssp'],
      '2012': ['ss'],
      '2013': ['ss'],
      '2014': ['ss'],
    },
  },
  'Mercedes-Benz': {
    '190 (all)': {
      '1984': ['fsp'],
      '1985': ['fsp'],
      '1986': ['fsp'],
      '1987': ['fsp'],
      '1988': ['fsp'],
      '1989': ['fsp'],
      '1990': ['fsp'],
      '1991': ['fsp'],
      '1992': ['fsp'],
      '1993': ['fsp'],
    },
    '190E': {
      'all': ['dsp'],
    },
    '220, 230, 250, & 280 Sedans ': {
      'all': ['fsp'],
    },
    '230SL, 250SL, & 280SL': {
      'all': ['fsp'],
    },
    '350SL, 380SL, & 450SL': {
      'all': ['fsp'],
    },
    'AMG': {
      'all': ['ss'],
    },
    'AMG A 35 4Matic': {
      '2021': ['ds'],
    },
    'AMG CLA 35 Coupe': {
      '2021': ['ds'],
    },
    'AMG GT, GTC, GTR, GTS': {
      '2015': ['ss'],
      '2016': ['ss'],
      '2017': ['ss'],
      '2018': ['ss'],
      '2019': ['ss'],
      '2020': ['ss'],
      '2021': ['ss'],
    },
    'All4': {
      '2017': ['ds'],
      '2018': ['ds'],
      '2019': ['ds'],
      '2020': ['ds'],
      '2021': ['ds'],
      '2022': ['ds'],
      '2023': ['ds'],
      '2024': ['ds'],
    },
    'C Street class': {
      'all': ['cs'],
    },
    'C-Class (6-cyl, non-AMG) (2001- CLK (V6)': {
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
    'C230': {
      'all': ['fsp'],
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
      '2021': ['fs'],
    },
    'C32 AMG': {
      '2002': ['bs'],
      '2003': ['bs'],
      '2004': ['bs'],
    },
    'C36 AMG': {
      'all': ['fs'],
    },
    'C450 & C43 AMG': {
      '2015': ['fs'],
      '2016': ['fs'],
      '2017': ['fs'],
      '2018': ['fs'],
      '2019': ['fs'],
      '2020': ['fs'],
      '2021': ['fs'],
    },
    'C55 AMG': {
      '2005': ['fs'],
      '2006': ['fs'],
    },
    'C63 AMG': {
      'all': ['sst'],
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
      '2021': ['fs'],
    },
    'CLA 45 AMG': {
      'all': ['sst'],
    },
    'CLA250 4matic': {
      'all': ['ds'],
    },
    'CLA45 AMG': {
      '2014': ['bs'],
      '2015': ['bs'],
      '2016': ['bs'],
      '2017': ['bs'],
      '2018': ['bs'],
      '2019': ['bs'],
      '2020': ['bs'],
      '2021': ['bs'],
    },
    'CLK': {
      'all': ['fs'],
    },
    'CLK430': {
      '1999': ['ast'],
      '2000': ['ast'],
      '2001': ['ast'],
      '2002': ['ast'],
      '2003': ['ast'],
    },
    'CLK55': {
      '2001': ['ast'],
      '2002': ['ast'],
      '2003': ['ast'],
      '2004': ['ast'],
      '2005': ['ast'],
      '2006': ['ast'],
    },
    'CLK55 AMG': {
      '2001': ['bs'],
      '2002': ['bs'],
      '2003': ['bs'],
      '2004': ['bs'],
      '2005': ['bs'],
      '2006': ['bs'],
    },
    'Clubman John Cooper Works': {
      'all': ['ds'],
    },
    'Cooper (non-S)': {
      '2014': ['ast'],
      '2015': ['ast'],
      '2016': ['ast'],
      '2017': ['ast'],
      '2018': ['ast'],
      '2019': ['ast'],
      '2020': ['ast'],
      '2021': ['ast'],
      '2022': ['ast'],
      '2023': ['ast'],
      '2024': ['ast'],
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
      '2021': ['ds'],
      '2022': ['ds'],
      '2023': ['ds'],
      '2024': ['ds'],
    },
    'Cooper S & Cooper S JCW': {
      '2007': ['ast'],
      '2008': ['ast'],
      '2009': ['ast'],
      '2010': ['ast'],
      '2011': ['ast'],
      '2012': ['ast'],
      '2013': ['ast'],
      '2014': ['ast'],
      '2015': ['ast'],
      '2016': ['ast'],
      '2017': ['ast'],
      '2018': ['ast'],
      '2019': ['ast'],
      '2020': ['ast'],
      '2021': ['ast'],
      '2022': ['ast'],
      '2023': ['ast'],
      '2024': ['ast'],
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
    },
    'E55 AMG': {
      'all': ['fs'],
    },
    'E550 (non-AMG)': {
      '2014': ['ast'],
      '2015': ['ast'],
      '2016': ['ast'],
    },
    'E63 AMG': {
      '2010': ['bs'],
      '2011': ['bs'],
      '2012': ['bs'],
      '2013': ['bs'],
      '2014': ['bs'],
      '2015': ['bs'],
      '2016': ['bs'],
      '2017': ['bs'],
      '2018': ['bs'],
      '2019': ['bs'],
      '2020': ['bs'],
      '2021': ['bs'],
    },
    'GLA 45 AMG': {
      'all': ['sst'],
    },
    'GLA250 4matic': {
      'all': ['ds'],
    },
    'GLA45 AMG': {
      '2015': ['bs'],
      '2016': ['bs'],
      '2017': ['bs'],
      '2018': ['bs'],
      '2019': ['bs'],
    },
    'GLC63': {
      'all': ['ss'],
    },
    'MINI': {
      'all': ['ast', 'ds'],
    },
    'Merkur': {
      'all': ['fsp'],
    },
    'SLK': {
      'all': ['cs'],
    },
    'SLK 230 Kompressor': {
      '1996': ['cst'],
      '1997': ['cst'],
      '1998': ['cst'],
      '1999': ['cst'],
      '2000': ['cst'],
      '2001': ['cst'],
      '2002': ['cst'],
      '2003': ['cst'],
      '2004': ['cst'],
    },
    'XR4Ti': {
      'all': ['fsp'],
    },
  },
  'Mercury': {
    'Bobcat': {
      'all': ['hs'],
    },
    'Capri': {
      'all': ['fs', 'hs'],
    },
    'Capri (6-cyl & 8-cyl)': {
      '1979': ['cp'],
      '1980': ['cp'],
      '1981': ['cp'],
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
    },
    'Capri Turbo (4-cyl)': {
      '1979': ['cp'],
      '1980': ['cp'],
      '1981': ['cp'],
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
    },
    'Clubman All4 (incl. JCW) (2014- Cooper Clubman': {
      'all': ['gs'],
    },
    'Comet (6-cyl & 8-cyl)': {
      '1971': ['cp'],
      '1972': ['cp'],
      '1973': ['cp'],
      '1974': ['cp'],
      '1975': ['cp'],
      '1976': ['cp'],
      '1977': ['cp'],
    },
    'Cougar': {
      'all': ['hs'],
    },
    'Cougar (V8 & V6 Supercharged)': {
      '1989': ['gs'],
      '1990': ['gs'],
      '1991': ['gs'],
      '1992': ['gs'],
      '1993': ['gs'],
      '1994': ['gs'],
      '1995': ['gs'],
      '1996': ['gs'],
      '1997': ['gs'],
    },
    'Cougar (V8)': {
      '1967': ['fs'],
      '1968': ['fs'],
      '1969': ['fs'],
      '1970': ['fs'],
      '1971': ['fs'],
      '1972': ['fs'],
      '1973': ['fs'],
      '1974': ['fs'],
      '1975': ['fs'],
      '1976': ['fs'],
      '1977': ['fs'],
      '1978': ['fs'],
      '1979': ['fs'],
      '1980': ['fs'],
      '1981': ['fs'],
      '1982': ['fs'],
      '1983': ['fs'],
      '1984': ['fs'],
      '1985': ['fs'],
      '1986': ['fs'],
      '1987': ['fs'],
      '1988': ['fs'],
    },
    'Countryman JCW All4': {
      '2018': ['gs'],
      '2019': ['gs'],
      '2020': ['gs'],
      '2021': ['gs'],
      '2022': ['gs'],
      '2023': ['gs'],
    },
    'JCW)': {
      '2002': ['gs'],
      '2003': ['gs'],
      '2004': ['gs'],
      '2005': ['gs'],
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
    },
    'LN-7': {
      'all': ['hs'],
    },
    'Lynx': {
      'all': ['hs'],
    },
    'MINI': {
      'all': ['gs'],
    },
    'Merkur': {
      'all': ['gs'],
    },
    'Milan': {
      'all': ['hs'],
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
    'XR4Ti': {
      'all': ['gs'],
    },
  },
  'Mini': {
    'Austin-Healey ': {
      'all': ['hs'],
    },
    'John Cooper Works GP': {
      '2021': ['bs'],
    },
  },
  'Mitsubishi': {
    '200SX': {
      'all': ['hs'],
    },
    '240SX': {
      'all': ['hs'],
    },
    '240Z, 260Z, & 280Z': {
      'all': ['esp'],
    },
    '280ZX * 280ZX Turbo': {
      'all': ['esp'],
    },
    '3000 GT': {
      'all': ['fsp', 'hs'],
    },
    '3000 GT Turbo': {
      'all': ['fs'],
    },
    '3000GT Turbo': {
      'all': ['dsp', 'esp'],
    },
    '300ZX (non-turbo)': {
      '1984': ['hs'],
      '1985': ['hs'],
      '1986': ['hs'],
      '1987': ['hs'],
      '1988': ['hs'],
      '1989': ['hs'],
    },
    '300ZX Turbo': {
      '1984': ['esp'],
      '1985': ['esp'],
      '1986': ['esp'],
      '1987': ['esp'],
      '1988': ['esp'],
      '1989': ['esp'],
      '1990': ['esp'],
      '1991': ['esp'],
      '1992': ['esp'],
      '1993': ['esp'],
      '1994': ['esp'],
      '1995': ['esp'],
      '1996': ['esp'],
    },
    '350Z': {
      'all': ['esp'],
    },
    '370Z (all)': {
      '2009': ['esp'],
      '2010': ['esp'],
      '2011': ['esp'],
      '2012': ['esp'],
      '2013': ['esp'],
      '2014': ['esp'],
      '2015': ['esp'],
      '2016': ['esp'],
      '2017': ['esp'],
      '2018': ['esp'],
    },
    'Alternate Specification: No split shift': {
      'all': ['ep'],
    },
    'Alternate cylinder head: 11041-15M00': {
      'all': ['ep'],
    },
    'Alternate cylinder head: 11041-H5704': {
      'all': ['ep'],
    },
    'Altima': {
      'all': ['hs'],
    },
    'Cordia': {
      'all': ['hs'],
    },
    'Cordia (non-turbo, FWD)': {
      '1982': ['ep'],
      '1983': ['ep'],
      '1984': ['ep'],
      '1985': ['ep'],
      '1986': ['ep'],
      '1987': ['ep'],
      '1988': ['ep'],
      '1989': ['ep'],
      '1990': ['ep'],
    },
    'Cordia Turbo': {
      'all': ['fsp'],
    },
    'E Street Prepared': {
      'all': ['esp'],
    },
    'Eclipse': {
      '2000': ['fsp'],
      '2001': ['fsp'],
      '2002': ['fsp'],
      '2003': ['fsp'],
      '2004': ['fsp'],
      '2005': ['fsp'],
      '2006': ['fsp'],
      '2007': ['fsp'],
      '2008': ['fsp'],
      '2009': ['fsp'],
      '2010': ['fsp'],
      '2011': ['fsp'],
      '2012': ['fsp'],
    },
    'Eclipse (V6)': {
      '2006': ['cst'],
      '2007': ['cst'],
      '2008': ['cst'],
      '2009': ['cst'],
      '2010': ['cst'],
      '2011': ['cst'],
      '2012': ['cst'],
    },
    'Eclipse (all, FWD)': {
      '1989': ['hs'],
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
      '2012': ['hs'],
    },
    'Eclipse Turbo': {
      'all': ['ds', 'gst'],
    },
    'Eclipse Turbo & Talon Turbo ': {
      '1989': ['fsp'],
    },
    'Eclipse Turbo (FWD & AWD)': {
      '1990': ['fp'],
      '1991': ['fp'],
      '1992': ['fp'],
      '1993': ['fp'],
      '1994': ['fp'],
      '1995': ['fp'],
      '1996': ['fp'],
      '1997': ['fp'],
      '1998': ['fp'],
    },
    'Eclipse – see Chrysler': {
      'all': ['ep'],
    },
    'Galant': {
      'all': ['fsp', 'gs', 'hs'],
    },
    'Galant (non-turbo)': {
      '1998': ['ep'],
      '1999': ['ep'],
      '2000': ['ep'],
      '2001': ['ep'],
      '2002': ['ep'],
    },
    'Lancer': {
      'all': ['est', 'hs'],
    },
    'Lancer Evolution': {
      'all': ['ast'],
      '2003': ['ds', 'fp'],
      '2004': ['ds', 'fp'],
      '2005': ['ds', 'fp'],
      '2006': ['ds', 'fp'],
      '2007': ['ds'],
      '2008': ['ds'],
      '2009': ['ds'],
      '2010': ['ds'],
      '2011': ['ds'],
      '2012': ['ds'],
      '2013': ['ds'],
      '2014': ['ds'],
      '2015': ['ds'],
    },
    'Lancer Evolution (X) & Ralliart ': {
      '2008': ['ssp'],
      '2009': ['ssp'],
      '2010': ['ssp'],
      '2011': ['ssp'],
      '2012': ['ssp'],
      '2013': ['ssp'],
    },
    'Lancer Ralliart': {
      '2008': ['gst'],
      '2009': ['gs', 'gst'],
      '2010': ['gs', 'gst'],
      '2011': ['gs'],
      '2012': ['gs'],
      '2013': ['gs'],
      '2014': ['gs'],
      '2015': ['gs'],
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
      '2021': ['hs'],
      '2022': ['hs'],
      '2023': ['hs'],
      '2024': ['hs'],
      '2025': ['hs'],
    },
    'Maxima': {
      'all': ['hs'],
    },
    'Mirage': {
      '1978': ['hs'],
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
      '1993': ['hs'],
      '1994': ['hs'],
      '1995': ['hs'],
      '1996': ['hs'],
      '1997': ['hs'],
      '1998': ['hs'],
      '1999': ['hs'],
      '2000': ['hs'],
      '2001': ['hs'],
      '2002': ['hs'],
      '2003': ['hs'],
    },
    'Mirage – see Chrysler': {
      'all': ['ep'],
    },
    'NX (B13 chassis)': {
      '1991': ['ep'],
      '1992': ['ep'],
      '1993': ['ep'],
    },
    'NX1600': {
      'all': ['hs'],
    },
    'NX2000': {
      '1991': ['hs'],
      '1992': ['hs'],
      '1993': ['hs'],
    },
    'Nissan & Datsun': {
      'all': ['esp'],
    },
    'Nissan/Datsun': {
      'all': ['ep', 'hs'],
    },
    'Precis': {
      'all': ['hs'],
    },
    'Premier': {
      'all': ['hs'],
    },
    'Pulsar': {
      'all': ['hs'],
    },
    'Pulsar (N12 chassis)': {
      '1983': ['ep'],
      '1984': ['ep'],
      '1985': ['ep'],
      '1986': ['ep'],
    },
    'Pulsar (N13 chassis; 16v)': {
      '1987': ['ep'],
      '1988': ['ep'],
      '1989': ['ep'],
      '1990': ['ep'],
    },
    'Sedan': {
      'all': ['ep'],
    },
    'Sentra': {
      'all': ['hs'],
    },
    'Sentra & 200SX (B14 chassis)': {
      '1995': ['ep'],
      '1996': ['ep'],
      '1997': ['ep'],
      '1998': ['ep'],
      '1999': ['ep'],
    },
    'Sentra (B11 chassis)': {
      '1983': ['ep'],
      '1984': ['ep'],
      '1985': ['ep'],
      '1986': ['ep'],
    },
    'Sentra (B12 chassis; 1.6 L)': {
      '1987': ['ep'],
      '1988': ['ep'],
      '1989': ['ep'],
      '1990': ['ep'],
    },
    'Sentra (B13 chassis; 2.0 L)': {
      '1991': ['ep'],
      '1992': ['ep'],
      '1993': ['ep'],
      '1994': ['ep'],
    },
    'Stanza': {
      'all': ['hs'],
    },
    'Starion': {
      'all': ['hs'],
    },
    'Starion Turbo': {
      'all': ['fsp', 'gs'],
    },
    'Street Prepared (ESP) - Appendix A': {
      'all': ['esp'],
    },
    'Tredia': {
      'all': ['hs'],
    },
    'Tredia Turbo': {
      'all': ['fsp'],
    },
    'Versa': {
      '2007': ['hs'],
      '2008': ['hs'],
      '2009': ['hs'],
      '2010': ['ep', 'hs'],
      '2011': ['ep', 'hs'],
      '2012': ['ep', 'hs'],
      '2013': ['ep', 'hs'],
      '2014': ['ep', 'hs'],
      '2015': ['ep', 'hs'],
      '2016': ['hs'],
      '2017': ['hs'],
      '2018': ['hs'],
      '2019': ['hs'],
      '2020': ['hs'],
      '2021': ['hs'],
      '2022': ['hs'],
      '2023': ['hs'],
      '2024': ['hs'],
      '2025': ['hs'],
    },
  },
  'Morgan': {
    '11041-18001, 11041-H2303, 11041-H5704, or 11041-H9204': {
      'all': ['dp'],
    },
    '11041-U0602-SV, 1041-21901, or 11041-N7120': {
      'all': ['dp'],
    },
    '11041-U0602-SV, 11041-21901, or 11041-N7120': {
      'all': ['dp'],
    },
    '11041-V9182/U0600A': {
      'all': ['dp'],
    },
    '200SX (S10 chassis)': {
      '1977': ['dp'],
      '1978': ['dp'],
      '1979': ['dp'],
    },
    '200SX (S110 chassis)': {
      '1980': ['dp'],
      '1981': ['dp'],
      '1982': ['dp'],
      '1983': ['dp'],
    },
    '200SX (S12 chassis)': {
      '1984': ['dp'],
      '1985': ['dp'],
      '1986': ['dp'],
      '1987': ['dp'],
      '1988': ['dp'],
    },
    '210 (1397 & 1488 cc)': {
      '1979': ['dp'],
      '1980': ['dp'],
      '1981': ['dp'],
      '1982': ['dp'],
    },
    '210 (B310 chassis; 1.4 L)': {
      '1978': ['dp'],
      '1979': ['dp'],
      '1980': ['dp'],
      '1981': ['dp'],
      '1982': ['dp'],
    },
    '240SX': {
      '1989': ['dp'],
      '1990': ['dp'],
      '1991': ['dp'],
      '1992': ['dp'],
      '1993': ['dp'],
      '1994': ['dp'],
      '1995': ['dp'],
      '1996': ['dp'],
      '1997': ['dp'],
      '1998': ['dp'],
    },
    '240Z, 260Z, & 280Z (incl. 2+2)': {
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
    '280ZX (incl. 2+2)': {
      '1979': ['fp'],
      '1980': ['fp'],
      '1981': ['fp'],
      '1982': ['fp'],
      '1983': ['fp'],
    },
    '300ZX (Z31 chassis)': {
      '1984': ['fp'],
      '1985': ['fp'],
      '1986': ['fp'],
      '1987': ['fp'],
      '1988': ['fp'],
      '1989': ['fp'],
    },
    '300ZX (Z32 chassis; non-turbo)': {
      '1990': ['fp'],
      '1991': ['fp'],
      '1992': ['fp'],
      '1993': ['fp'],
      '1994': ['fp'],
      '1995': ['fp'],
      '1996': ['fp'],
    },
    '350Z & 370Z': {
      '2003': ['fp'],
      '2004': ['fp'],
      '2005': ['fp'],
      '2006': ['fp'],
      '2007': ['fp'],
      '2008': ['fp'],
      '2009': ['fp'],
      '2010': ['fp'],
      '2011': ['fp'],
      '2012': ['fp'],
      '2013': ['fp'],
      '2014': ['fp'],
      '2015': ['fp'],
      '2016': ['fp'],
      '2017': ['fp'],
    },
    '4/4 & Plus 4': {
      'all': ['es'],
    },
    '4/4 MkIV': {
      'all': ['dp'],
    },
    '4/4 MkV': {
      'all': ['dp'],
    },
    '510 (A10 chassis)': {
      '1979': ['dp'],
      '1980': ['dp'],
      '1981': ['dp'],
    },
    '510 (PL510 chassis; 1.6 L, 1.8 L, & 2.0 L)': {
      '1968': ['dp'],
      '1969': ['dp'],
      '1970': ['dp'],
      '1971': ['dp'],
      '1972': ['dp'],
      '1973': ['dp'],
    },
    '510 (PL510)': {
      'all': ['dp'],
    },
    '610': {
      '1973': ['dp'],
      '1974': ['dp'],
      '1975': ['dp'],
      '1976': ['dp'],
    },
    '710': {
      '1974': ['dp'],
      '1975': ['dp'],
      '1976': ['dp'],
      '1977': ['dp'],
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
    '810': {
      '1976': ['dp'],
      '1977': ['dp'],
      '1978': ['dp'],
      '1979': ['dp'],
      '1980': ['dp'],
    },
    '810 Maxima': {
      '1981': ['dp'],
      '1982': ['dp'],
      '1983': ['dp'],
    },
    'Alternate cylinder head: 11041-H2303 or 11041-H5704': {
      'all': ['dp'],
    },
    'Alternate cylinder head: 11041-N7120.': {
      'all': ['dp'],
    },
    'Alternate part: headlight covers': {
      'all': ['fp'],
    },
    'Alternate part: rear facing hood scoop': {
      'all': ['fp'],
    },
    'B110 (1171, 1237, 1288, 1397, & 1488 cc)': {
      '1970': ['dp'],
      '1971': ['dp'],
      '1972': ['dp'],
      '1973': ['dp'],
    },
    'B210 (1171, 1237, 1288, 1397, & 1488 cc)': {
      '1974': ['dp'],
      '1975': ['dp'],
      '1976': ['dp'],
      '1977': ['dp'],
      '1978': ['dp'],
    },
    'Engine: L20B or NAPS-Z': {
      'all': ['dp'],
    },
    'Nissan & Datsun': {
      'all': ['dp', 'fp'],
    },
    'Pininfarina': {
      'all': ['dsp'],
    },
    'Plus 8': {
      'all': ['as', 'fp'],
    },
    'Pontiac & Saturn': {
      'all': ['dsp'],
    },
    'Replace wood floorboards with metal': {
      'all': ['dp'],
    },
    'Roadster': {
      'all': ['as'],
    },
    'Solstice & Sky': {
      'all': ['dsp'],
    },
    'Solstice GXP & Sky Redline': {
      'all': ['dsp'],
    },
    'V8': {
      'all': ['ssp'],
    },
  },
  'Nissan': {
    '200SX': {
      'all': ['fsp'],
    },
    '200SX SE-R': {
      '1995': ['est'],
      '1996': ['est'],
      '1997': ['est'],
      '1998': ['est'],
    },
    '200SX Turbo': {
      'all': ['fsp'],
    },
    '240SX': {
      'all': ['cst', 'fsp'],
    },
    '300ZX (non-turbo)': {
      '1984': ['fsp'],
      '1985': ['fsp'],
      '1986': ['fsp'],
      '1987': ['fsp'],
      '1988': ['fsp'],
      '1989': ['fsp'],
      '1990': ['fs', 'fsp'],
      '1991': ['fs', 'fsp'],
      '1992': ['fs', 'fsp'],
      '1993': ['fs', 'fsp'],
      '1994': ['fs', 'fsp'],
      '1995': ['fs', 'fsp'],
      '1996': ['fs', 'fsp'],
    },
    '300ZX Turbo': {
      '1984': ['ast', 'fs'],
      '1985': ['ast', 'fs'],
      '1986': ['ast', 'fs'],
      '1987': ['ast', 'fs'],
      '1988': ['ast', 'fs'],
      '1989': ['ast', 'fs'],
      '1990': ['ds'],
      '1991': ['ds'],
      '1992': ['ds'],
      '1993': ['ds'],
      '1994': ['ds'],
      '1995': ['ds'],
      '1996': ['ds'],
    },
    '350Z': {
      'all': ['ast'],
    },
    '350Z (non-NISMO)': {
      '2003': ['fs'],
      '2004': ['fs'],
      '2005': ['fs'],
      '2006': ['fs'],
      '2007': ['fs'],
      '2008': ['fs'],
      '2009': ['fs'],
    },
    '350Z NISMO': {
      '2004': ['ds'],
      '2005': ['ds'],
      '2006': ['ds'],
      '2007': ['ds'],
      '2008': ['ds'],
    },
    '370Z': {
      'all': ['ast'],
    },
    '370Z (non-NISMO)': {
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
    '370Z NISMO': {
      '2009': ['ast', 'ds'],
      '2010': ['ast', 'ds'],
      '2011': ['ast', 'ds'],
      '2012': ['ast', 'ds'],
      '2013': ['ast', 'ds'],
      '2014': ['ast', 'ds'],
      '2015': ['ast', 'ds'],
      '2016': ['ast', 'ds'],
      '2017': ['ast', 'ds'],
      '2018': ['ast', 'ds'],
      '2019': ['ast', 'ds'],
      '2020': ['ast', 'ds'],
    },
    'Altima': {
      '2007': ['fsp'],
      '2008': ['fsp'],
      '2009': ['fsp'],
      '2010': ['fsp'],
      '2011': ['fsp'],
      '2012': ['fsp'],
      '2013': ['fsp'],
    },
    'C Street Touring®': {
      'all': ['cst'],
    },
    'Edition & GT-R50)': {
      '2009': ['sst'],
      '2010': ['sst'],
      '2011': ['sst'],
      '2012': ['sst'],
      '2013': ['sst'],
      '2014': ['sst'],
      '2015': ['sst'],
      '2016': ['sst'],
      '2017': ['sst'],
      '2018': ['sst'],
      '2019': ['sst'],
      '2020': ['sst'],
      '2021': ['sst'],
    },
    'GT-R': {
      'all': ['ssp'],
    },
    'GT-R (excluding NISMO & Track': {
      'all': ['sst'],
    },
    'GTR50)': {
      '2009': ['as'],
      '2010': ['as'],
      '2011': ['as'],
      '2012': ['as'],
      '2013': ['as'],
      '2014': ['as'],
      '2015': ['as'],
      '2016': ['as'],
      '2017': ['as'],
      '2018': ['as'],
      '2019': ['as'],
      '2020': ['as'],
      '2021': ['as'],
      '2022': ['as'],
      '2023': ['as'],
      '2024': ['as'],
      '2025': ['as'],
    },
    'Juke (2011-16)*': {
      'all': ['gst'],
    },
    'Maxima': {
      'all': ['fsp'],
    },
    'NX2000': {
      '1991': ['est'],
      '1992': ['est'],
      '1993': ['est'],
      '1994': ['est'],
    },
    'Nissan GT-R (excluding NISMO &': {
      'all': ['as'],
    },
    'Pulsar': {
      'all': ['fsp'],
    },
    'Pulsar NX Turbo': {
      'all': ['fsp'],
    },
    'Sentra (1.6L, 1.8L, 2.0L)': {
      '1991': ['est'],
      '1992': ['est'],
      '1993': ['est'],
      '1994': ['est'],
      '1995': ['est'],
      '1996': ['est'],
      '1997': ['est'],
      '1998': ['est'],
      '1999': ['est'],
      '2000': ['est'],
      '2001': ['est'],
      '2002': ['est'],
      '2003': ['est'],
      '2004': ['est'],
      '2005': ['est'],
      '2006': ['est'],
      '2007': ['est'],
      '2008': ['est'],
      '2009': ['est'],
      '2010': ['est'],
      '2011': ['est'],
      '2012': ['est'],
    },
    'Sentra (2.0L)': {
      '2000': ['fsp'],
      '2001': ['fsp'],
    },
    'Sentra (B15 chassis)': {
      '2002': ['fsp'],
      '2003': ['fsp'],
      '2004': ['fsp'],
      '2005': ['fsp'],
      '2006': ['fsp'],
    },
    'Sentra (B16 chassis)': {
      '2007': ['fsp'],
      '2008': ['fsp'],
      '2009': ['fsp'],
      '2010': ['fsp'],
      '2011': ['fsp'],
      '2012': ['fsp'],
    },
    'Track Edition, Special Edition &': {
      'all': ['as'],
    },
    'Versa': {
      '2007': ['est'],
      '2008': ['est'],
      '2009': ['est'],
      '2010': ['est'],
      '2011': ['est'],
      '2012': ['est'],
      '2013': ['est'],
      '2014': ['est'],
      '2015': ['est'],
      '2016': ['est'],
      '2017': ['est'],
      '2018': ['est'],
      '2019': ['est'],
    },
    'Z (incl. NISMO)': {
      '2023': ['bs'],
      '2024': ['bs'],
      '2025': ['bs'],
    },
    'Z (incl. Nismo)': {
      '2023': ['sst'],
      '2024': ['sst'],
      '2025': ['sst'],
    },
  },
  'Oldsmobile': {
    '& Valiant (1963-76)': {
      'all': ['esp'],
    },
    'Acclaim': {
      'all': ['esp'],
    },
    'Barracuda & Challenger (E-body)': {
      '1970': ['esp'],
    },
    'Calais W41': {
      'all': ['hs'],
    },
    'Camaro & Firebird': {
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
      '1977': ['esp'],
      '1978': ['esp'],
      '1979': ['esp'],
      '1980': ['esp'],
      '1981': ['esp'],
    },
    'Camaro (2.0L Turbo)': {
      '2016': ['esp'],
      '2017': ['esp'],
      '2018': ['esp'],
      '2019': ['esp'],
      '2020': ['esp'],
      '2021': ['esp'],
      '2022': ['esp'],
      '2023': ['esp'],
      '2024': ['esp'],
    },
    'Camaro (3.6L V6)': {
      '2016': ['esp'],
      '2017': ['esp'],
      '2018': ['esp'],
      '2019': ['esp'],
      '2020': ['esp'],
      '2021': ['esp'],
      '2022': ['esp'],
      '2023': ['esp'],
      '2024': ['esp'],
    },
    'Camaro (6.2L V8, NA)': {
      '2016': ['esp'],
      '2017': ['esp'],
      '2018': ['esp'],
      '2019': ['esp'],
      '2020': ['esp'],
      '2021': ['esp'],
      '2022': ['esp'],
      '2023': ['esp'],
      '2024': ['esp'],
    },
    'Camaro (non-ZL1)': {
      '2010': ['esp'],
      '2011': ['esp'],
      '2012': ['esp'],
      '2013': ['esp'],
      '2014': ['esp'],
      '2015': ['esp'],
    },
    'Camaro, Firebird, & Firehawk (1982-92)': {
      'all': ['esp'],
    },
    'Camaro, Firebird, SS, Firehawk, &': {
      'all': ['esp'],
    },
    'Challenger': {
      'all': ['esp'],
      '2008': ['esp'],
      '2009': ['esp'],
      '2010': ['esp'],
      '2011': ['esp'],
      '2012': ['esp'],
      '2013': ['esp'],
    },
    'Charger': {
      '2006': ['esp'],
      '2007': ['esp'],
      '2008': ['esp'],
      '2009': ['esp'],
      '2010': ['esp'],
      '2011': ['esp'],
      '2012': ['esp'],
      '2013': ['esp'],
    },
    'Charger GLH-S': {
      'all': ['esp'],
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
    },
    'Chrysler, Plymouth, & Dodge': {
      'all': ['esp'],
    },
    'Cobalt SS (N/A)': {
      '2005': ['esp'],
      '2006': ['esp'],
      '2007': ['esp'],
    },
    'Cobalt SS Supercharged': {
      '2005': ['esp'],
      '2006': ['esp'],
      '2007': ['esp'],
    },
    'Cobalt SS Turbo': {
      '2008': ['esp'],
      '2009': ['esp'],
      '2010': ['esp'],
    },
    'Conquest & Starion': {
      'all': ['esp'],
    },
    'Conquest Turbo': {
      'all': ['esp'],
    },
    'Corvair Yenko Stage I, II, & III': {
      'all': ['esp'],
    },
    'Crossfire': {
      'all': ['esp'],
    },
    'DOHC, & V6)': {
      'all': ['esp'],
    },
    'Daytona': {
      'all': ['esp'],
    },
    'Daytona Turbo': {
      'all': ['esp'],
    },
    'G8': {
      '2008': ['esp'],
      '2009': ['esp'],
    },
    'GLH-S & GLH Turbo': {
      'all': ['esp'],
    },
    'GTO': {
      '2004': ['esp'],
      '2005': ['esp'],
      '2006': ['esp'],
    },
    'HHR SS Turbo': {
      'all': ['esp'],
    },
    'J Body (4-cyl Turbo, Quad 4': {
      'all': ['esp'],
    },
    'L Body': {
      'all': ['esp'],
    },
    'Laser': {
      'all': ['esp'],
    },
    'Laser Turbo (NOC) & K-car Turbo': {
      'all': ['esp'],
    },
    'Lumina': {
      'all': ['esp'],
    },
    'Monza (V8) & Skyhawk': {
      'all': ['esp'],
    },
    'N Body (4-cyl Turbo, Quad 4, &': {
      'all': ['esp'],
    },
    'Reatta': {
      'all': ['esp'],
    },
    'Regal(1980-88)': {
      'all': ['esp'],
    },
    'SRT-4': {
      'all': ['esp'],
    },
    'SS sedan': {
      '2013': ['esp'],
      '2014': ['esp'],
      '2015': ['esp'],
      '2016': ['esp'],
      '2017': ['esp'],
    },
    'Shadow': {
      'all': ['esp'],
    },
    'Shelby Charger Turbo': {
      'all': ['esp'],
    },
    'Spectrum Turbo (1985-89': {
      'all': ['esp'],
    },
    'Spirit': {
      'all': ['esp'],
    },
    'Starfire & Sunbird': {
      'all': ['esp'],
    },
    'Storm GSi': {
      '1985': ['esp'],
      '1986': ['esp'],
      '1987': ['esp'],
      '1988': ['esp'],
      '1989': ['esp'],
    },
    'Sundance Turbo': {
      'all': ['esp'],
    },
    'Trans Am Turbo': {
      '1982': ['esp'],
      '1983': ['esp'],
      '1984': ['esp'],
      '1985': ['esp'],
      '1986': ['esp'],
      '1987': ['esp'],
      '1988': ['esp'],
      '1989': ['esp'],
      '1990': ['esp'],
      '1991': ['esp'],
      '1992': ['esp'],
    },
    'V6)': {
      'all': ['esp'],
    },
    'WS6 (4th gen)': {
      '1993': ['esp'],
      '1994': ['esp'],
      '1995': ['esp'],
      '1996': ['esp'],
      '1997': ['esp'],
      '1998': ['esp'],
      '1999': ['esp'],
      '2000': ['esp'],
      '2001': ['esp'],
      '2002': ['esp'],
    },
    'X Body': {
      'all': ['esp'],
    },
  },
  'Opel': {
    'Ascona & Ascona SportWagon (1900 cc)': {
      '1971': ['dp'],
      '1972': ['dp'],
      '1973': ['dp'],
      '1974': ['dp'],
      '1975': ['dp'],
    },
    'GT 1100': {
      'all': ['dp'],
    },
    'GT 1900': {
      'all': ['dp'],
    },
    'Kadett (1100 & 1900 cc)': {
      '1964': ['dp'],
      '1965': ['dp'],
      '1966': ['dp'],
      '1967': ['dp'],
      '1968': ['dp'],
      '1969': ['dp'],
      '1970': ['dp'],
      '1971': ['dp'],
      '1972': ['dp'],
    },
    'Manta Sport Coupe & Manta Rallye (1900 cc)': {
      '1971': ['dp'],
      '1972': ['dp'],
      '1973': ['dp'],
      '1974': ['dp'],
      '1975': ['dp'],
    },
    'Prepared (DP) - Appendix A': {
      'all': ['dp'],
    },
  },
  'Peugeot': {
    '405 (non-turbo)': {
      '1987': ['ep'],
      '1988': ['ep'],
      '1989': ['ep'],
      '1990': ['ep'],
      '1991': ['ep'],
    },
    '505': {
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
    },
    '505 (all)': {
      '1971': ['fsp'],
      '1972': ['fsp'],
      '1973': ['fsp'],
      '1974': ['fsp'],
      '1975': ['fsp'],
      '1976': ['fsp'],
      '1977': ['fsp'],
      '1978': ['fsp'],
      '1979': ['fsp'],
      '1980': ['fsp'],
      '1981': ['fsp'],
      '1982': ['fsp'],
      '1983': ['fsp'],
      '1984': ['fsp'],
      '1985': ['fsp'],
      '1986': ['fsp'],
      '1987': ['fsp'],
      '1988': ['fsp'],
      '1989': ['fsp'],
      '1990': ['fsp'],
      '1991': ['fsp'],
    },
    'Pininfarina': {
      'all': ['hs'],
    },
    'Prepared (EP) - Appendix A': {
      'all': ['ep'],
    },
  },
  'Plymouth': {
    'Acclaim': {
      'all': ['hs'],
    },
    'Arrow': {
      'all': ['hs'],
    },
    'Champ': {
      'all': ['hs'],
    },
    'Colt': {
      'all': ['hs'],
    },
    'Horizon': {
      'all': ['hs'],
    },
    'Laser': {
      'all': ['fsp', 'hs'],
    },
    'Neon': {
      '1995': ['hs'],
      '1996': ['hs'],
      '1997': ['hs'],
      '1998': ['hs'],
      '1999': ['hs'],
      '2000': ['hs'],
      '2001': ['hs'],
    },
    'Sapporo': {
      'all': ['hs'],
    },
    'Scamp': {
      'all': ['hs'],
    },
    'Sundance': {
      'all': ['hs'],
    },
    'TC3': {
      'all': ['hs'],
    },
    'Turismo': {
      'all': ['hs'],
    },
  },
  'Polestar': {
    'Polestar 2': {
      '2021': ['bs'],
      '2022': ['bs'],
    },
  },
  'Pontiac': {
    '383cid)': {
      '1990': ['fsp'],
      '1991': ['fsp'],
      '1992': ['fsp'],
      '1993': ['fsp'],
      '1994': ['fsp'],
      '1995': ['fsp'],
      '1996': ['fsp'],
      '1997': ['fsp'],
      '1998': ['fsp'],
      '1999': ['fsp'],
      '2000': ['fsp'],
      '2001': ['fsp'],
      '2002': ['fsp'],
    },
    'Alternate suspension: rear double A-arm': {
      'all': ['dp', 'fp'],
    },
    'Corolla XRS (2005-06), Matrix': {
      'all': ['fsp'],
    },
    'Fiero': {
      'all': ['cst', 'dp', 'es', 'esp', 'est', 'fp', 'hs'],
    },
    'Firebird': {
      'all': ['ast', 'fs', 'hs'],
    },
    'Firebird & TransAm': {
      '1967': ['cp'],
      '1968': ['cp'],
      '1969': ['cp'],
      '1970': ['cp'],
      '1971': ['cp'],
      '1972': ['cp'],
      '1973': ['cp'],
      '1974': ['cp'],
      '1975': ['cp'],
      '1976': ['cp'],
      '1977': ['cp'],
      '1978': ['cp'],
      '1979': ['cp'],
      '1980': ['cp'],
      '1981': ['cp'],
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
    },
    'G5': {
      'all': ['est', 'gst', 'hs'],
    },
    'G8 (V6)': {
      '2008': ['hs'],
      '2009': ['hs'],
    },
    'GTO': {
      '2004': ['ast', 'cp'],
      '2005': ['ast', 'cp'],
      '2006': ['ast', 'cp'],
    },
    'LeMans (FWD)': {
      '1988': ['hs'],
      '1989': ['hs'],
      '1990': ['hs'],
      '1991': ['hs'],
      '1992': ['hs'],
      '1993': ['hs'],
    },
    'Matrix & Vibe (AWD)': {
      '2003': ['fsp'],
      '2004': ['fsp'],
      '2005': ['fsp'],
      '2006': ['fsp'],
      '2007': ['fsp'],
      '2008': ['fsp'],
    },
    'Pontiac & Toyota': {
      'all': ['fsp'],
    },
    'Solstice': {
      'all': ['cst', 'dp', 'ds'],
    },
    'Solstice (non-turbo; w/ ZOK Club': {
      'all': ['bs'],
    },
    'Solstice GXP': {
      'all': ['bst', 'fp'],
    },
    'Solstice GXP (Turbo)': {
      '2007': ['bs'],
      '2008': ['bs'],
      '2009': ['bs'],
    },
    'Sport package)': {
      '2007': ['bs'],
      '2008': ['bs'],
      '2009': ['bs'],
      '2010': ['bs'],
    },
    'Sunfire': {
      'all': ['hs'],
    },
    'T-1000': {
      'all': ['hs'],
    },
    'Trans-Am Turbo': {
      '1989': ['cp'],
    },
    'Vibe': {
      'all': ['hs'],
      '2003': ['est'],
      '2004': ['est'],
      '2005': ['est'],
      '2006': ['est'],
      '2007': ['est'],
      '2008': ['est'],
      '2009': ['est'],
      '2010': ['est'],
    },
    'XRS (2003-06), & Vibe GT ': {
      '2003': ['fsp'],
      '2004': ['fsp'],
      '2005': ['fsp'],
      '2006': ['fsp'],
    },
  },
  'Porsche': {
    '(991.1 chassis)': {
      '2012': ['sst'],
      '2013': ['sst'],
      '2014': ['sst'],
      '2015': ['sst'],
      '2016': ['sst'],
    },
    '(991.1 chassis, excl. GT3, Turbo;': {
      'all': ['as'],
    },
    '(997 chassis)': {
      '2005': ['sst'],
      '2006': ['sst'],
      '2007': ['sst'],
      '2008': ['sst'],
      '2009': ['sst'],
      '2010': ['sst'],
      '2011': ['sst'],
      '2012': ['sst'],
    },
    '356': {
      'all': ['hs'],
    },
    '356 Carrera': {
      'all': ['ds'],
    },
    '356, except Carrera and 1500, 1600': {
      'all': ['dp'],
    },
    '718 Boxster & Cayman (982) (base and S models only)': {
      '2017': ['fp'],
      '2018': ['fp'],
      '2019': ['fp'],
      '2020': ['fp'],
      '2021': ['fp'],
      '2022': ['fp'],
      '2023': ['fp'],
    },
    '718 Boxster (S & GTS)': {
      'all': ['sst'],
    },
    '718 Boxster (base & T)': {
      '2017': ['as', 'sst'],
      '2018': ['as', 'sst'],
      '2019': ['as', 'sst'],
      '2020': ['as', 'sst'],
      '2021': ['as', 'sst'],
      '2022': ['as', 'sst'],
      '2023': ['as'],
      '2024': ['as'],
      '2025': ['as'],
    },
    '718 Boxster GTS': {
      '2017': ['as'],
      '2018': ['as'],
      '2019': ['as'],
      '2020': ['as'],
    },
    '718 Boxster GTS 4.0 & Spyder ': {
      '2017': ['ss'],
      '2018': ['ss'],
      '2019': ['ss'],
      '2020': ['ss'],
      '2021': ['ss'],
      '2022': ['ss'],
      '2023': ['ss'],
      '2024': ['ss'],
      '2025': ['ss'],
    },
    '718 Boxster S': {
      '2017': ['as'],
      '2018': ['as'],
      '2019': ['as'],
      '2020': ['as'],
      '2021': ['as'],
      '2022': ['as'],
      '2023': ['as'],
      '2024': ['as'],
      '2025': ['as'],
    },
    '718 Cayman (S & GTS)': {
      'all': ['sst'],
    },
    '718 Cayman (base & T)': {
      '2017': ['as', 'sst'],
      '2018': ['as', 'sst'],
      '2019': ['as', 'sst'],
      '2020': ['as', 'sst'],
      '2021': ['as', 'sst'],
      '2022': ['as', 'sst'],
      '2023': ['as'],
      '2024': ['as'],
      '2025': ['as'],
    },
    '718 Cayman GT4': {
      '2020': ['ss'],
      '2021': ['ss'],
      '2022': ['ss'],
      '2023': ['ss'],
    },
    '718 Cayman GT4 RS': {
      '2022': ['ss'],
      '2023': ['ss'],
      '2024': ['ss'],
      '2025': ['ss'],
    },
    '718 Cayman GTS': {
      '2017': ['as'],
      '2018': ['as'],
      '2019': ['as'],
      '2020': ['as'],
    },
    '718 Cayman GTS 4.0': {
      '2017': ['ss'],
      '2018': ['ss'],
      '2019': ['ss'],
      '2020': ['ss'],
      '2021': ['ss'],
      '2022': ['ss'],
      '2023': ['ss'],
      '2024': ['ss'],
      '2025': ['ss'],
    },
    '718 Cayman S': {
      '2017': ['as'],
      '2018': ['as'],
      '2019': ['as'],
      '2020': ['as'],
      '2021': ['as'],
      '2022': ['as'],
      '2023': ['as'],
      '2024': ['as'],
    },
    '718 GT4': {
      'all': ['ssp'],
    },
    '718 Spyder': {
      'all': ['ssp'],
    },
    '911': {
      'all': ['ds', 'esp'],
    },
    '911 (964 & 993) *Limited Prep*': {
      'all': ['fsp'],
    },
    '911 (964, 993 non-turbo)': {
      '1989': ['sst'],
      '1990': ['sst'],
      '1991': ['sst'],
      '1992': ['sst'],
      '1993': ['sst'],
      '1994': ['sst'],
      '1995': ['sst'],
      '1996': ['sst'],
      '1997': ['sst'],
      '1998': ['sst'],
    },
    '911 (992.2 Carrera)': {
      '2025': ['ss'],
    },
    '911 (993, non-turbo)': {
      '1995': ['bs'],
      '1996': ['bs'],
      '1997': ['bs'],
      '1998': ['bs'],
    },
    '911 (996 & 997 chassis)': {
      '1999': ['esp'],
      '2000': ['esp'],
      '2001': ['esp'],
      '2002': ['esp'],
      '2003': ['esp'],
      '2004': ['esp'],
      '2005': ['esp'],
      '2006': ['esp'],
      '2007': ['esp'],
      '2008': ['esp'],
      '2009': ['esp'],
      '2010': ['esp'],
      '2011': ['esp'],
      '2012': ['esp'],
    },
    '911 (996, non-turbo)': {
      '1998': ['bs', 'sst'],
      '1999': ['bs', 'sst'],
      '2000': ['bs', 'sst'],
      '2001': ['bs', 'sst'],
      '2002': ['bs', 'sst'],
      '2003': ['bs', 'sst'],
      '2004': ['bs', 'sst'],
      '2005': ['bs', 'sst'],
    },
    '911 (GT3, Turbo; excl. GT2, GT3': {
      'all': ['ss'],
    },
    '911 (non-turbo)': {
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
      '1977': ['esp'],
      '1978': ['esp'],
      '1979': ['esp'],
      '1980': ['esp'],
      '1981': ['esp'],
      '1982': ['esp'],
      '1983': ['esp'],
      '1984': ['esp'],
      '1985': ['esp'],
      '1986': ['esp'],
      '1987': ['esp'],
      '1988': ['esp'],
      '1989': ['esp'],
    },
    '911 (non-turbo) (1965-89) *Lim- 914': {
      'all': ['fsp'],
    },
    '911 (non-turbo) Alternate cylinder heads: twin spark plug': {
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
      '1975': ['fp'],
      '1976': ['fp'],
      '1977': ['fp'],
      '1978': ['fp'],
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
      '1989': ['fp'],
    },
    '911 (non-turbo, NOC) *Limited': {
      'all': ['fsp'],
    },
    '911 Carrera': {
      'all': ['sst'],
    },
    '911 Carrera (3.2L)': {
      '1984': ['cst'],
      '1985': ['cst'],
      '1986': ['cst'],
      '1987': ['cst'],
      '1988': ['cst'],
      '1989': ['cst'],
    },
    '911 Carrera (992 Chassis excl.': {
      'all': ['ss'],
    },
    '911 Carrera (incl. 4, S, 4S, GTS) (997': {
      'all': ['as'],
    },
    '911 Carrera, Carrera S, and GTS': {
      'all': ['as'],
    },
    '911 Club Sport': {
      'all': ['ds'],
    },
    '911 GT2': {
      'all': ['ssp'],
    },
    '911 GT2 RS (991 chassis) *Limited': {
      'all': ['ssp'],
    },
    '911 GT2RS (992 chassis) *Limited': {
      'all': ['ssp'],
    },
    '911 GT3': {
      'all': ['ssp'],
    },
    '911 GT3 (992 chassis) *Limited': {
      'all': ['ssp'],
    },
    '911 GT3/GT3 RS (996 & 997': {
      'all': ['ss'],
    },
    '911 GT3RS (992 chassis) *Limited': {
      'all': ['ssp'],
    },
    '911 SC (3.0L)': {
      '1978': ['cst'],
      '1979': ['cst'],
      '1980': ['cst'],
      '1981': ['cst'],
      '1982': ['cst'],
      '1983': ['cst'],
    },
    '911 Turbo': {
      'all': ['ss'],
      '1976': ['ssp'],
      '1977': ['ssp'],
      '1978': ['ssp'],
      '1979': ['ssp'],
      '1980': ['ssp'],
      '1981': ['ssp'],
      '1982': ['ssp'],
      '1983': ['ssp'],
      '1984': ['ssp'],
      '1985': ['ssp'],
      '1986': ['ssp'],
      '1987': ['ssp'],
      '1988': ['ssp'],
      '1989': ['ssp'],
    },
    '911 Turbo & 911 Turbo S (996 chas- Boxster Spyder': {
      '2011': ['as'],
      '2012': ['as'],
      '2013': ['as'],
    },
    '911 Turbo & Turbo S': {
      'all': ['ssp'],
    },
    '911 Turbo & Turbo S (996 & 997': {
      'all': ['ssp'],
    },
    '911 Turbo (1976-89) *Limited Prep*': {
      'all': ['esp'],
    },
    '911 Turbo (930 chassis)': {
      '1974': ['ss'],
      '1975': ['ss'],
      '1976': ['ss'],
      '1977': ['ss'],
      '1978': ['ss'],
      '1979': ['ss'],
      '1980': ['ss'],
      '1981': ['ss'],
      '1982': ['ss'],
      '1983': ['ss'],
      '1984': ['ss'],
      '1985': ['ss'],
      '1986': ['ss'],
      '1987': ['ss'],
      '1988': ['ss'],
      '1989': ['ss'],
    },
    '911 Turbo (964 chassis)': {
      '1990': ['esp', 'ssp'],
      '1991': ['esp', 'ssp'],
      '1992': ['esp', 'ssp'],
      '1993': ['esp', 'ssp'],
      '1994': ['esp', 'ssp'],
    },
    '911 Turbo (993 chassis)': {
      '1995': ['ss'],
      '1996': ['ss'],
      '1997': ['ss'],
      '1998': ['ss'],
      '1999': ['ss'],
    },
    '911 Turbo (993)': {
      '1996': ['ssp'],
      '1997': ['ssp'],
    },
    '912 & 912E': {
      'all': ['dp'],
    },
    '914': {
      'all': ['dp', 'ds', 'est'],
    },
    '914-6': {
      'all': ['fp'],
    },
    '914/6': {
      'all': ['esp'],
    },
    '914/6 (all) *Limited Prep*': {
      'all': ['fsp'],
    },
    '924': {
      'all': ['hs'],
      '1984': ['dp'],
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
      '1986': ['es'],
      '1987': ['es'],
      '1988': ['es'],
    },
    '924S & 944': {
      'all': ['dsp'],
    },
    '924S (1986-88) & 944 (non-turbo, all) (1982-91) Alt. cyl. head (2.5L': {
      'all': ['fp'],
    },
    '928': {
      'all': ['ds'],
    },
    '928 *Limited Prep*': {
      'all': ['fsp'],
    },
    '944': {
      'all': ['cst', 'ds', 'es', 'esp'],
    },
    '944 Turbo': {
      'all': ['ds'],
      '1985': ['fp'],
      '1986': ['fp'],
      '1987': ['fp'],
      '1988': ['fp'],
      '1989': ['fp'],
      '1990': ['fp'],
      '1991': ['fp'],
    },
    '964 (non-turbo)': {
      '1989': ['fp'],
      '1990': ['fp'],
      '1991': ['fp'],
      '1992': ['fp'],
      '1993': ['fp'],
      '1994': ['fp'],
    },
    '968': {
      '1992': ['fp'],
      '1993': ['fp'],
      '1994': ['fp'],
      '1995': ['fp'],
    },
    '968 *Limited Prep*': {
      'all': ['fsp'],
    },
    '991': {
      'all': ['esp'],
    },
    '991.1 (base, and S models only)': {
      '2012': ['fp'],
      '2013': ['fp'],
      '2014': ['fp'],
      '2015': ['fp'],
    },
    '993 (non-turbo, non GT variants)': {
      '1995': ['fp'],
      '1996': ['fp'],
      '1997': ['fp'],
      '1998': ['fp'],
    },
    '996 (non-turbo, non GT variants)': {
      '1999': ['fp'],
      '2000': ['fp'],
      '2001': ['fp'],
      '2002': ['fp'],
      '2003': ['fp'],
      '2004': ['fp'],
    },
    '997 (non-turbo, non GT variants)': {
      '2005': ['fp'],
      '2006': ['fp'],
      '2007': ['fp'],
      '2008': ['fp'],
      '2009': ['fp'],
      '2010': ['fp'],
      '2011': ['fp'],
      '2012': ['fp'],
    },
    'Alternate cylinder: 933.104.302.50': {
      'all': ['dp'],
    },
    'Boxster': {
      'all': ['bs'],
    },
    'Boxster & Cayman': {
      'all': ['esp', 'ssp'],
    },
    'Boxster & Cayman (981)': {
      '2013': ['fp'],
      '2014': ['fp'],
      '2015': ['fp'],
      '2016': ['fp'],
    },
    'Boxster & Cayman (987)': {
      '2005': ['fp'],
      '2006': ['fp'],
      '2007': ['fp'],
      '2008': ['fp'],
      '2009': ['fp'],
      '2010': ['fp'],
      '2011': ['fp'],
      '2012': ['fp'],
    },
    'Boxster (986 )': {
      '1996': ['fp'],
      '1997': ['fp'],
      '1998': ['fp'],
      '1999': ['fp'],
      '2000': ['fp'],
      '2001': ['fp'],
      '2002': ['fp'],
      '2003': ['fp'],
      '2004': ['fp'],
    },
    'Boxster (986 chassis, all) (1997- Boxster': {
      'all': ['ds'],
    },
    'Boxster (987.2 & 981.1) (2009- Boxster S (986)': {
      '2000': ['ast'],
      '2001': ['ast'],
      '2002': ['ast'],
      '2003': ['ast'],
      '2004': ['ast'],
    },
    'Boxster (non-S)': {
      '2009': ['bs'],
      '2010': ['bs'],
      '2011': ['bs'],
      '2012': ['bs'],
    },
    'Boxster GTS (981 chassis)': {
      '2015': ['as', 'sst'],
      '2016': ['as', 'sst'],
    },
    'Boxster S': {
      '2005': ['bs'],
      '2006': ['bs'],
      '2007': ['bs'],
      '2008': ['bs'],
    },
    'Boxster S (981 chassis)': {
      '2013': ['as', 'sst'],
      '2014': ['as', 'sst'],
      '2015': ['as', 'sst'],
      '2016': ['as', 'sst'],
    },
    'Boxster S (987 chassis)': {
      '2009': ['as'],
      '2010': ['as'],
      '2011': ['as'],
      '2012': ['as'],
    },
    'Boxster S (987)': {
      '2005': ['ast'],
      '2006': ['ast'],
      '2007': ['ast'],
      '2008': ['ast'],
      '2009': ['ast'],
      '2010': ['ast'],
      '2011': ['ast'],
      '2012': ['ast'],
    },
    'Boxster Spyder': {
      'all': ['sst'],
      '2016': ['ss'],
    },
    'Boxter (986 & and 987.1; base': {
      'all': ['ast'],
    },
    'Carrera': {
      'all': ['dsp'],
    },
    'Carrera 2 & Carrera 4': {
      'all': ['ds'],
    },
    'Cayman': {
      'all': ['ast', 'ds'],
    },
    'Cayman (987.2 & 981.1) (2009- Cayman S (987)': {
      '2006': ['ast'],
      '2007': ['ast'],
      '2008': ['ast'],
      '2009': ['ast'],
      '2010': ['ast'],
      '2011': ['ast'],
      '2012': ['ast'],
    },
    'Cayman (non-S)': {
      '2009': ['bs'],
      '2010': ['bs'],
      '2011': ['bs'],
      '2012': ['bs'],
    },
    'Cayman GT4': {
      '2016': ['ssp'],
    },
    'Cayman GT4 (718 chassis) *Limited': {
      'all': ['ssp'],
    },
    'Cayman GT4 (non-Clubsport)': {
      '2016': ['ss'],
    },
    'Cayman GT4RS (718 chassis) *Lim- 911 (996 & 997 chassis)': {
      '1999': ['ssp'],
      '2000': ['ssp'],
      '2001': ['ssp'],
      '2002': ['ssp'],
      '2003': ['ssp'],
      '2004': ['ssp'],
      '2005': ['ssp'],
      '2006': ['ssp'],
      '2007': ['ssp'],
      '2008': ['ssp'],
      '2009': ['ssp'],
      '2010': ['ssp'],
      '2011': ['ssp'],
      '2012': ['ssp'],
    },
    'Cayman GTS (981 chassis)': {
      '2015': ['as', 'sst'],
      '2016': ['as', 'sst'],
    },
    'Cayman R': {
      '2012': ['as'],
    },
    'Cayman S': {
      '2006': ['bs'],
      '2007': ['bs'],
      '2008': ['bs'],
    },
    'Cayman S (981 chassis)': {
      '2013': ['as', 'sst'],
      '2014': ['as', 'sst'],
      '2015': ['as', 'sst'],
      '2016': ['as', 'sst'],
    },
    'Cayman S (987 chassis)': {
      '2009': ['as'],
      '2010': ['as'],
      '2011': ['as'],
      '2012': ['as'],
    },
    'Cylinder barrels of alternate material allowed': {
      'all': ['dp'],
    },
    'Dakar, & Sport Classic) (2020- 911 GT3': {
      'all': ['ss'],
    },
    'Macan (all)': {
      '2015': ['bs'],
      '2016': ['bs'],
      '2017': ['bs'],
      '2018': ['bs'],
      '2019': ['bs'],
      '2020': ['bs'],
      '2021': ['bs'],
    },
    'Model 3': {
      'all': ['as'],
    },
    'Model Y': {
      'all': ['as'],
    },
    'Panamera': {
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
      '2021': ['gs'],
      '2022': ['gs'],
      '2023': ['gs'],
    },
    'Prep*': {
      'all': ['fsp', 'ssp'],
    },
    'RS, & Turbo S)': {
      '2012': ['ss'],
      '2013': ['ss'],
      '2014': ['ss'],
      '2015': ['ss'],
      '2016': ['ss'],
      '2017': ['ss'],
      '2018': ['ss'],
      '2019': ['ss'],
    },
    'Spyder (718 chassis) *Limited Prep*': {
      'all': ['ssp'],
    },
    'Taycan': {
      'all': ['ss'],
    },
    'Tesla': {
      'all': ['as'],
    },
    'Turbo S)': {
      '2017': ['ss'],
      '2018': ['ss'],
      '2019': ['ss'],
    },
    'Turbo; excl. GT2, GT3 RS, &': {
      'all': ['ss'],
    },
  },
  'Renault': {
    'Alliance, Encore, R-9, & R-11': {
      '1982': ['ep'],
      '1983': ['ep'],
      '1984': ['ep'],
      '1985': ['ep'],
      '1986': ['ep'],
      '1987': ['ep'],
      '1988': ['ep'],
      '1989': ['ep'],
    },
    'Alternate cylinder head: 77005972627': {
      'all': ['ep'],
    },
    'Alternate cylinder head: 7700597627 (firewall/bulkhead modifica- R17 Gordini': {
      '1971': ['ep'],
      '1972': ['ep'],
      '1973': ['ep'],
      '1974': ['ep'],
      '1975': ['ep'],
      '1976': ['ep'],
      '1977': ['ep'],
    },
    'Compression ratio (max.): 10.5:1; valve lift (max.): 0.450”': {
      'all': ['ep'],
    },
    'Fuego Turbo': {
      'all': ['fsp'],
    },
    'LeCar & R-5 (non-turbo, FWD)': {
      '1978': ['ep'],
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
      '1995': ['ep'],
      '1996': ['ep'],
    },
    'R5 Turbo': {
      'all': ['fsp'],
    },
    'Sedan': {
      'all': ['ep'],
    },
  },
  'Saab': {
    '9-2X': {
      '2005': ['gst'],
      '2006': ['gst'],
    },
    '9-2X Aero (2.0L Turbo) (2005- Turbo models': {
      'all': ['hs'],
    },
    '9-2X Linear': {
      'all': ['hs'],
    },
    '9-3 (non-Viggen)': {
      '1998': ['est'],
      '1999': ['est'],
      '2000': ['est'],
      '2001': ['est'],
      '2002': ['est'],
      '2003': ['est'],
      '2004': ['est'],
      '2005': ['est'],
      '2006': ['est'],
      '2007': ['est'],
      '2008': ['est'],
      '2009': ['est'],
      '2010': ['est'],
      '2011': ['est'],
      '2012': ['est'],
    },
    '900 & 900 Turbo': {
      '1979': ['fsp'],
      '1980': ['fsp'],
      '1981': ['fsp'],
      '1982': ['fsp'],
      '1983': ['fsp'],
      '1984': ['fsp'],
      '1985': ['fsp'],
      '1986': ['fsp'],
      '1987': ['fsp'],
      '1988': ['fsp'],
      '1989': ['fsp'],
      '1990': ['fsp'],
      '1991': ['fsp'],
      '1992': ['fsp'],
      '1993': ['fsp'],
      '1994': ['fsp'],
      '1995': ['fsp'],
      '1996': ['fsp'],
      '1997': ['fsp'],
      '1998': ['fsp'],
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
    '900 Turbo & 900 SPG Turbo 16v': {
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
    '93 & 96 Sedan': {
      'all': ['ep'],
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
    '99': {
      '1968': ['fp'],
      '1969': ['fp'],
      '1970': ['fp'],
      '1971': ['fp'],
      '1972': ['fp'],
      '1973': ['fp'],
      '1974': ['fp'],
      '1975': ['fp'],
      '1976': ['fp'],
      '1977': ['fp'],
      '1978': ['fp'],
      '1979': ['fp'],
      '1980': ['fp'],
      '1981': ['fp'],
      '1982': ['fp'],
      '1983': ['fp'],
      '1984': ['fp'],
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
    '99, 99 EMS, & 99 Turbo': {
      'all': ['fsp'],
    },
    'SPG': {
      'all': ['fsp'],
    },
    'Sedan': {
      'all': ['ep'],
    },
    'Sonett': {
      'all': ['ep'],
    },
  },
  'Saleen': {
    'B Street class': {
      'all': ['bs'],
    },
    'Mustang': {
      'all': ['bs'],
    },
    'Mustang (w/o IRS or forced induction)': {
      '1979': ['cp'],
      '1980': ['cp'],
      '1981': ['cp'],
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
    },
    'Mustang 302 & 351 (non-super- Mustang S281E & Mustang': {
      'all': ['fsp'],
    },
  },
  'Saturn': {
    'Astra': {
      'all': ['est'],
      '2008': ['hs'],
      '2009': ['hs'],
    },
    'DOHC model': {
      'all': ['hs'],
    },
    'ION': {
      'all': ['hs'],
    },
    'ION (non-supercharged)': {
      '2003': ['ep'],
      '2004': ['ep'],
      '2005': ['ep'],
      '2006': ['ep'],
      '2007': ['ep'],
    },
    'ION Redline': {
      'all': ['gs'],
    },
    'Ion': {
      'all': ['est'],
    },
    'Ion (all) & NOC': {
      'all': ['fsp'],
    },
    'L series': {
      'all': ['hs'],
    },
    'S & L series': {
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
    'SC': {
      'all': ['est'],
    },
    'SL': {
      'all': ['est'],
    },
    'SW': {
      'all': ['est'],
    },
    'Sky': {
      'all': ['cst', 'dp'],
    },
    'Sky (non-turbo)': {
      '2007': ['ds'],
      '2008': ['ds'],
      '2009': ['ds'],
      '2010': ['ds'],
    },
    'Sky Red Line': {
      'all': ['fp'],
    },
    'Sky Redline': {
      'all': ['bst'],
    },
    'Sky Redline (Turbo)': {
      '2007': ['cs'],
      '2008': ['cs'],
      '2009': ['cs'],
      '2010': ['cs'],
    },
  },
  'Scion': {
    'FR-S': {
      'all': ['dp'],
      '2013': ['esp'],
      '2014': ['esp'],
      '2015': ['esp'],
      '2016': ['esp'],
    },
    'FR-S (2013-16) *Limited Prep*': {
      'all': ['fsp'],
    },
    'FR-S (with TRD suspension;': {
      'all': ['ds'],
    },
    'FR-S (without TRD suspension': {
      'all': ['ds'],
    },
  },
  'Shelby': {
    'Charger': {
      'all': ['hs'],
    },
    'Charger GLH-S': {
      '1987': ['es'],
    },
    'Cobra': {
      'all': ['cs'],
      '1963': ['xp'],
      '1964': ['xp'],
      '1965': ['xp'],
      '1966': ['xp'],
      '1967': ['xp'],
    },
    'Cobra 289': {
      'all': ['ssp'],
    },
    'GT350': {
      '1965': ['fsp', 'gs'],
      '1966': ['fsp', 'gs'],
      '1967': ['gs'],
      '1968': ['gs'],
      '1969': ['gs'],
      '1970': ['gs'],
    },
    'GT350 & GT500': {
      '1965': ['cp'],
      '1966': ['cp'],
      '1967': ['cp', 'fsp'],
      '1968': ['cp', 'fsp'],
      '1969': ['cp', 'fsp'],
      '1970': ['cp', 'fsp'],
    },
    'GT40 MKII': {
      'all': ['xp'],
    },
    'GT500': {
      '1967': ['gs'],
      '1968': ['gs'],
      '1969': ['gs'],
      '1970': ['gs'],
    },
    'MKIII': {
      'all': ['xp'],
    },
    'Shelby Cobra Daytona Coupe': {
      'all': ['xp'],
    },
    'Superformance': {
      'all': ['xp'],
    },
    'US Sedan': {
      'all': ['cp'],
    },
    'Yenko': {
      'all': ['cp'],
    },
  },
  'Subaru': {
    'BRZ': {
      '2012': ['dp'],
      '2013': ['dp', 'ds', 'esp'],
      '2014': ['dp', 'ds', 'esp'],
      '2015': ['dp', 'ds', 'esp'],
      '2016': ['dp', 'ds', 'esp'],
      '2017': ['dp', 'ds', 'esp'],
      '2018': ['dp', 'ds', 'esp'],
      '2019': ['dp', 'ds', 'esp'],
      '2020': ['dp', 'ds', 'esp'],
      '2021': ['dp'],
      '2022': ['cst', 'dsp'],
      '2023': ['cst', 'dsp'],
      '2024': ['cst', 'dsp'],
      '2025': ['cst', 'dsp'],
    },
    'BRZ (2013-16) *Limited Prep*': {
      'all': ['fsp'],
    },
    'BRZ (2017-20) *Limited Prep*': {
      'all': ['fsp'],
    },
    'BRZ (2022-25) *Limited Prep*': {
      'all': ['esp'],
    },
    'BRZ excl. tS': {
      '2013': ['est'],
      '2014': ['est'],
      '2015': ['est'],
      '2016': ['est'],
      '2017': ['est'],
      '2018': ['est'],
      '2019': ['est'],
      '2020': ['est'],
      '2021': ['est'],
    },
    'BRZ tS': {
      '2018': ['ds'],
      '2020': ['cs'],
    },
    'Forester XT': {
      'all': ['gst'],
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
      'all': ['hs'],
    },
    'Impreza (1.8L, FWD)': {
      '1993': ['est'],
      '1994': ['est'],
      '1995': ['est'],
      '1996': ['est'],
    },
    'Impreza (2.5L)': {
      'all': ['fsp'],
    },
    'Impreza (AWD) & WRX': {
      'all': ['fp'],
    },
    'Impreza (all)': {
      '1993': ['fsp'],
      '1994': ['fsp'],
      '1995': ['fsp'],
      '1996': ['fsp'],
      '1997': ['fsp'],
      '1998': ['fsp'],
      '1999': ['fsp'],
      '2000': ['fsp'],
      '2001': ['fsp'],
    },
    'Impreza (non-turbo)': {
      '2002': ['est'],
      '2003': ['est'],
      '2004': ['est'],
      '2005': ['est'],
      '2006': ['est'],
      '2007': ['est'],
      '2008': ['est'],
      '2009': ['est'],
      '2010': ['est'],
      '2011': ['est'],
    },
    'Impreza 2.0i': {
      'all': ['hs'],
      '2012': ['est'],
      '2013': ['est'],
      '2014': ['est'],
      '2015': ['est'],
      '2016': ['est'],
    },
    'Impreza 2.5': {
      'all': ['hs'],
    },
    'Impreza 2.5 RS': {
      '1998': ['est'],
      '1999': ['est'],
      '2000': ['est'],
      '2001': ['est'],
    },
    'Impreza WRX (incl. STI; excl. Type': {
      'all': ['ssp'],
    },
    'Impreza WRX STI': {
      'all': ['ast'],
    },
    'Legacy': {
      'all': ['hs'],
      '1990': ['est'],
      '1991': ['est'],
      '1992': ['est'],
      '1993': ['est'],
      '1994': ['est'],
    },
    'Legacy & Outback': {
      'all': ['fsp'],
    },
    'Legacy (Turbo) (2004-14), & For- RA & 2019 STI)': {
      '2015': ['ssp'],
      '2016': ['ssp'],
      '2017': ['ssp'],
      '2018': ['ssp'],
      '2019': ['ssp'],
    },
    'Legacy 2.5GT': {
      '2005': ['fsp', 'gs'],
      '2006': ['fsp', 'gs'],
      '2007': ['fsp', 'gs'],
      '2008': ['fsp', 'gs'],
      '2009': ['fsp', 'gs'],
      '2010': ['fsp', 'gs'],
      '2011': ['fsp', 'gs'],
      '2012': ['fsp', 'gs'],
    },
    'Legacy GT': {
      '2005': ['gst'],
      '2006': ['gst'],
      '2007': ['gst'],
      '2008': ['gst'],
    },
    'Model 3 (RWD)': {
      '2018': ['ds'],
      '2019': ['ds'],
      '2020': ['ds'],
      '2021': ['ds'],
      '2022': ['ds'],
      '2023': ['ds'],
      '2024': ['ds'],
    },
    'STI (excl. S209)': {
      '2019': ['ds'],
      '2020': ['ds'],
      '2021': ['ds'],
    },
    'STI Type RA': {
      '2018': ['cs'],
    },
    'SVX': {
      'all': ['hs'],
      '1992': ['fp'],
      '1993': ['fp'],
      '1994': ['fp'],
      '1995': ['fp'],
      '1996': ['fp'],
      '1997': ['fp'],
    },
    'Sedan': {
      'all': ['ep'],
    },
    'Sedan Turbo': {
      'all': ['hs'],
    },
    'Sedan/Coupe': {
      'all': ['fp'],
    },
    'Tesla': {
      'all': ['ds'],
    },
    'WRX': {
      'all': ['gs'],
    },
    'WRX (non-STI)': {
      '2002': ['gst'],
      '2003': ['gst'],
      '2004': ['gst'],
      '2005': ['gst'],
      '2006': ['gst'],
      '2007': ['gst'],
      '2008': ['gst'],
      '2009': ['gst'],
      '2010': ['gst'],
      '2011': ['gst'],
      '2012': ['gst'],
      '2013': ['gst'],
      '2014': ['gst'],
      '2015': ['gst'],
      '2016': ['gst'],
      '2017': ['gst'],
      '2018': ['gst'],
      '2019': ['gst'],
      '2020': ['gst'],
      '2021': ['gst'],
      '2022': ['gst'],
      '2023': ['gst'],
      '2024': ['gst'],
      '2025': ['gst'],
    },
    'WRX TR': {
      '2024': ['ds'],
    },
    'WRX tS': {
      '2025': ['ds'],
    },
  },
  'Sunbeam': {
    'Alpine': {
      'all': ['dp', 'hs'],
    },
    'Model 3 *Limited Prep*': {
      'all': ['ssp'],
    },
    'Model S Plaid *Limited Prep*': {
      'all': ['ssp'],
    },
    'Roadster': {
      '2008': ['ssp'],
      '2009': ['ssp'],
      '2010': ['ssp'],
      '2011': ['ssp'],
      '2012': ['ssp'],
    },
    'Tesla': {
      'all': ['ssp'],
    },
    'Tiger': {
      'all': ['es', 'ssp'],
    },
  },
  'Suzuki': {
    'Compression ratio (max.): 11.0:1; valve lift (max.): 0.450”': {
      'all': ['ep'],
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
      'all': ['hs'],
    },
    'Swift (N/A)': {
      '1994': ['est'],
    },
    'Swift GA, GL, GTi, & GT': {
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
      '1995': ['ep'],
      '1996': ['ep'],
      '1997': ['ep'],
      '1998': ['ep'],
      '1999': ['ep'],
      '2000': ['ep'],
      '2001': ['ep'],
    },
    'Swift Turbo': {
      'all': ['fp'],
    },
  },
  'TVR': {
    '4-cyl': {
      'all': ['es'],
    },
    '4-cyl & 6-cyl': {
      'all': ['ssp'],
    },
    '6-cyl': {
      'all': ['fp'],
    },
    '8-cyl': {
      'all': ['cs'],
    },
    'Alternate cylinder head: Pierce aluminum casting': {
      'all': ['dp'],
    },
    'Griffith Series 200 & Series 400': {
      'all': ['xp'],
    },
    'V12': {
      'all': ['cs'],
    },
    'V6': {
      'all': ['cs'],
    },
    'Vixen S2': {
      'all': ['dp'],
    },
  },
  'Tesla Motors': {
    'Model 3 (all)': {
      '2024': ['ss'],
      '2025': ['ss'],
    },
    'Model S': {
      '2012': ['gs'],
      '2013': ['gs'],
      '2014': ['gs'],
    },
    'Model S, all-wheel drive incl Plaid ': {
      '2014': ['ss'],
      '2015': ['ss'],
      '2016': ['ss'],
      '2017': ['ss'],
      '2018': ['ss'],
      '2019': ['ss'],
      '2020': ['ss'],
      '2021': ['ss'],
      '2022': ['ss'],
      '2023': ['ss'],
      '2024': ['ss'],
      '2025': ['ss'],
    },
    'Roadster (all)': {
      '2008': ['ss'],
      '2009': ['ss'],
      '2010': ['ss'],
      '2011': ['ss'],
      '2012': ['ss'],
      '2013': ['ss'],
    },
  },
  'Toyota': {
    '86': {
      '2017': ['dp', 'esp'],
      '2018': ['dp', 'esp'],
      '2019': ['dp', 'esp'],
      '2020': ['dp', 'esp', 'est'],
      '2021': ['dp', 'est'],
    },
    '86 (2017-20) *Limited Prep*': {
      'all': ['fsp'],
    },
    '86 (without TRD suspension and': {
      'all': ['ds'],
    },
    'A Street class': {
      'all': ['as'],
    },
    'Alternate chassis: 1985-89': {
      'all': ['fp'],
    },
    'Avalon (all)': {
      '2016': ['hs'],
      '2017': ['hs'],
      '2018': ['hs'],
      '2019': ['hs'],
      '2020': ['hs'],
      '2021': ['hs'],
      '2022': ['hs'],
    },
    'Camry': {
      'all': ['hs'],
    },
    'Camry V6': {
      'all': ['fsp'],
    },
    'Celica': {
      '2000': ['fsp'],
      '2001': ['fsp'],
      '2002': ['fsp'],
      '2003': ['fsp'],
      '2004': ['fsp'],
      '2005': ['fsp'],
    },
    'Celica (GT, GTS)': {
      '2000': ['hs'],
      '2001': ['hs'],
      '2002': ['hs'],
      '2003': ['hs'],
      '2004': ['hs'],
      '2005': ['hs'],
    },
    'Celica (non-AWD)': {
      '1971': ['hs'],
      '1972': ['hs'],
      '1973': ['hs'],
      '1974': ['hs'],
      '1975': ['hs'],
      '1976': ['hs'],
      '1977': ['hs'],
      '1978': ['hs'],
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
      '1993': ['hs'],
      '1994': ['hs'],
      '1995': ['hs'],
      '1996': ['hs'],
      '1997': ['hs'],
      '1998': ['hs'],
      '1999': ['hs'],
    },
    'Celica (non-turbo)': {
      '1970': ['dp'],
      '1971': ['dp'],
      '1972': ['dp'],
      '1973': ['dp'],
      '1974': ['dp'],
      '1975': ['dp'],
      '1976': ['dp'],
      '1977': ['dp'],
      '1978': ['dp'],
      '1979': ['dp'],
      '1980': ['dp'],
      '1981': ['dp'],
      '1982': ['dp'],
      '1983': ['dp'],
      '1984': ['dp'],
      '1985': ['dp'],
      '1986': ['est'],
      '1987': ['est'],
      '1988': ['est'],
      '1989': ['est'],
      '1990': ['est'],
      '1991': ['est'],
      '1992': ['est'],
      '1993': ['est'],
      '1994': ['est'],
      '1995': ['est'],
      '1996': ['est'],
      '1997': ['est'],
      '1998': ['est'],
      '1999': ['est'],
      '2000': ['ep', 'est'],
      '2001': ['ep', 'est'],
      '2002': ['ep', 'est'],
      '2003': ['ep', 'est'],
      '2004': ['ep', 'est'],
      '2005': ['ep', 'est'],
    },
    'Celica (non-turbo, FWD)': {
      '1986': ['ep'],
      '1987': ['ep'],
      '1988': ['ep'],
      '1989': ['ep'],
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
    },
    'Celica All-Trac': {
      'all': ['fsp'],
      '1988': ['fp'],
      '1989': ['fp'],
      '1990': ['fp'],
      '1991': ['fp'],
      '1992': ['fp'],
      '1993': ['fp'],
      '1994': ['fp'],
      '1995': ['fp'],
      '1996': ['fp'],
      '1997': ['fp'],
      '1998': ['fp'],
      '1999': ['fp'],
    },
    'Celica All-Trac Turbo': {
      'all': ['gs'],
    },
    'Celica Supra': {
      '1979': ['fp'],
      '1980': ['fp'],
      '1981': ['fp'],
      '1982': ['fp'],
      '1983': ['fp'],
      '1984': ['fp'],
      '1985': ['fp'],
      '1986': ['fp'],
    },
    'Corolla': {
      'all': ['hs'],
    },
    'Corolla (1588 cc)': {
      '1971': ['dp'],
      '1972': ['dp'],
      '1973': ['dp'],
      '1974': ['dp'],
    },
    'Corolla (non-GR)': {
      '1984': ['est'],
      '1985': ['est'],
      '1986': ['est'],
      '1987': ['est'],
      '1988': ['est'],
      '1989': ['est'],
      '1990': ['est'],
      '1991': ['est'],
      '1992': ['est'],
      '1993': ['est'],
      '1994': ['est'],
      '1995': ['est'],
      '1996': ['est'],
      '1997': ['est'],
      '1998': ['est'],
      '1999': ['est'],
      '2000': ['est'],
      '2001': ['est'],
      '2002': ['est'],
      '2003': ['est'],
      '2004': ['est'],
      '2005': ['est'],
      '2006': ['est'],
      '2007': ['est'],
      '2008': ['est'],
      '2009': ['est'],
      '2010': ['est'],
      '2011': ['est'],
      '2012': ['est'],
      '2013': ['est'],
      '2014': ['est'],
      '2015': ['est'],
      '2016': ['est'],
      '2017': ['est'],
      '2018': ['est'],
      '2019': ['est'],
      '2020': ['est'],
      '2021': ['est'],
      '2022': ['est'],
      '2023': ['est'],
      '2024': ['est'],
      '2025': ['est'],
    },
    'Corolla (non-turbo)': {
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
      '1978': ['dp'],
      '1979': ['dp'],
      '1980': ['dp'],
      '1981': ['dp'],
      '1982': ['dp'],
      '1983': ['dp'],
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
      '2006': ['ep'],
      '2007': ['ep'],
      '2008': ['ep'],
    },
    'Corolla (non-turbo, FWD)': {
      '1984': ['ep'],
      '1985': ['ep'],
      '1986': ['ep'],
      '1987': ['ep'],
      '1988': ['ep'],
      '1989': ['ep'],
      '1990': ['ep'],
      '1991': ['ep'],
      '1992': ['ep'],
    },
    'Corolla (non-turbo, RWD)': {
      '1984': ['dp'],
      '1985': ['dp'],
      '1986': ['dp'],
      '1987': ['dp'],
    },
    'Cressida': {
      'all': ['hs'],
    },
    'Echo': {
      'all': ['hs'],
      '2000': ['est'],
      '2001': ['est'],
      '2002': ['est'],
      '2003': ['est'],
      '2004': ['est'],
      '2005': ['est'],
    },
    'GR 86': {
      '2022': ['dsp'],
      '2023': ['dsp'],
      '2024': ['dsp'],
      '2025': ['dsp'],
    },
    'GR 86 (2022-25) *Limited Prep*': {
      'all': ['esp'],
    },
    'GR Corolla': {
      '2023': ['ast', 'dsp'],
      '2024': ['ast', 'dsp'],
      '2025': ['dsp'],
    },
    'GR Corolla (2023-25) *Limited': {
      'all': ['esp'],
    },
    'GR Corolla (with Performance': {
      'all': ['as'],
    },
    'GR86': {
      'all': ['cs'],
      '2022': ['cst'],
      '2023': ['cst'],
      '2024': ['cst'],
      '2025': ['cst'],
    },
    'MR-2 & MR-2 Supercharged (1st': {
      'all': ['dsp'],
    },
    'MR2 (1587 cc, non-supercharged)': {
      '1985': ['dp'],
      '1986': ['dp'],
      '1987': ['dp'],
      '1988': ['dp'],
      '1989': ['dp'],
    },
    'MR2 (2164 cc, non-turbo)': {
      '1991': ['dp'],
      '1992': ['dp'],
      '1993': ['dp'],
      '1994': ['dp'],
      '1995': ['dp'],
    },
    'MR2 (all incl. Turbo)': {
      '1991': ['dsp'],
      '1992': ['dsp'],
      '1993': ['dsp'],
      '1994': ['dsp'],
      '1995': ['dsp'],
    },
    'MR2 (non-supercharged)': {
      '1985': ['est'],
      '1986': ['est'],
      '1987': ['est'],
      '1988': ['est'],
      '1989': ['est'],
    },
    'MR2 (non-turbo)': {
      '1985': ['es'],
      '1986': ['es'],
      '1987': ['es'],
      '1988': ['es'],
      '1989': ['es'],
      '1990': ['es'],
      '1991': ['es', 'est'],
      '1992': ['es', 'est'],
      '1993': ['es', 'est'],
      '1994': ['es', 'est'],
      '1995': ['es', 'est'],
    },
    'MR2 Spyder': {
      'all': ['cst'],
      '2000': ['dsp', 'es'],
      '2001': ['dsp', 'es'],
      '2002': ['dsp', 'es'],
      '2003': ['dsp', 'es'],
      '2004': ['dsp', 'es'],
      '2005': ['dsp', 'es'],
    },
    'MR2 Spyder (1794 cc)': {
      '2000': ['dp'],
      '2001': ['dp'],
      '2002': ['dp'],
      '2003': ['dp'],
      '2004': ['dp'],
      '2005': ['dp'],
    },
    'MR2 Supercharged': {
      'all': ['es'],
      '1988': ['cst'],
      '1989': ['cst'],
    },
    'MR2 Supercharged (Mk1 chassis)': {
      '1988': ['fp'],
      '1989': ['fp'],
    },
    'MR2 Turbo': {
      'all': ['ds'],
      '1991': ['fp'],
      '1992': ['fp'],
      '1993': ['fp'],
      '1994': ['fp'],
      '1995': ['fp'],
    },
    'Matrix': {
      'all': ['hs'],
      '2003': ['est'],
      '2004': ['est'],
      '2005': ['est'],
      '2006': ['est'],
      '2007': ['est'],
      '2008': ['est'],
      '2009': ['est'],
      '2010': ['est'],
      '2011': ['est'],
      '2012': ['est'],
      '2013': ['est'],
    },
    'Paseo': {
      'all': ['hs'],
    },
    'Paseo (non-turbo)': {
      '1991': ['ep'],
      '1992': ['ep'],
      '1993': ['ep'],
      '1994': ['ep'],
      '1995': ['ep'],
      '1996': ['ep'],
      '1997': ['ep'],
    },
    'Prep*': {
      'all': ['esp'],
    },
    'Prius': {
      'all': ['hs'],
    },
    'Sedans': {
      'all': ['ep'],
    },
    'Shocks and Springs Package) ': {
      '2024': ['as'],
      '2025': ['as'],
    },
    'Starlet': {
      'all': ['hs'],
    },
    'Starlet (non-turbo, 2WD)': {
      '1981': ['dp'],
      '1982': ['dp'],
      '1983': ['dp'],
      '1984': ['dp'],
    },
    'Street (HS) - Appendix A': {
      'all': ['hs'],
    },
    'Super Street Touring®': {
      'all': ['sst'],
    },
    'Supra': {
      '1979': ['fsp'],
      '1980': ['fsp'],
      '1981': ['fsp'],
      '1982': ['fsp'],
      '1983': ['fsp'],
      '1984': ['fsp'],
      '1985': ['fsp'],
      '1986': ['fsp'],
      '1993': ['ssp'],
      '2020': ['ssp'],
      '2021': ['ssp'],
      '2022': ['ssp'],
      '2023': ['ssp'],
      '2024': ['ssp'],
    },
    'Supra (6 cyl, non MkV Final Edi- Supra Turbo': {
      '1993': ['cs'],
      '1994': ['cs'],
      '1995': ['cs'],
      '1996': ['cs'],
      '1997': ['cs'],
      '1998': ['cs'],
    },
    'Supra (all)': {
      '1986': ['fsp'],
      '1987': ['fsp'],
      '1988': ['fsp'],
      '1989': ['fsp'],
      '1990': ['fsp'],
      '1991': ['fsp'],
      '1992': ['fsp'],
    },
    'Supra (non-turbo)': {
      '1979': ['hs'],
      '1980': ['hs'],
      '1981': ['hs'],
      '1982': ['hs'],
      '1983': ['hs'],
      '1984': ['hs'],
      '1985': ['hs'],
      '1986': ['fp', 'hs'],
      '1987': ['fp', 'hs'],
      '1988': ['fp', 'hs'],
      '1989': ['fp', 'hs'],
      '1990': ['fp', 'hs'],
      '1991': ['fp', 'hs'],
      '1992': ['fp', 'hs'],
      '1993': ['est', 'fp', 'fsp', 'gs'],
      '1994': ['est', 'fp', 'fsp', 'gs'],
      '1995': ['est', 'fp', 'fsp', 'gs'],
      '1996': ['est', 'fp', 'fsp', 'gs'],
      '1997': ['est', 'fp', 'gs'],
      '1998': ['est', 'fp', 'gs'],
    },
    'Supra Turbo': {
      '1987': ['gs'],
      '1988': ['gs'],
      '1989': ['gs'],
      '1990': ['gs'],
      '1991': ['gs'],
      '1992': ['gs'],
      '1993': ['sst'],
      '1994': ['sst'],
      '1995': ['sst'],
      '1996': ['sst'],
      '1997': ['sst'],
      '1998': ['sst'],
    },
    'Supra, 4cyl': {
      '2021': ['sst'],
      '2022': ['sst'],
      '2023': ['sst'],
      '2024': ['sst'],
      '2025': ['sst'],
    },
    'Supra, 6cyl': {
      '2020': ['sst'],
      '2021': ['sst'],
      '2022': ['sst'],
      '2023': ['sst'],
      '2024': ['sst'],
      '2025': ['sst'],
    },
    'TRD Sway Bar Kit, and TRD 17- Supra (4 cyl)': {
      '2020': ['ds'],
      '2021': ['ds'],
      '2022': ['ds'],
      '2023': ['ds'],
      '2024': ['ds'],
    },
    'Tacoma': {
      '1995': ['est'],
      '1996': ['est'],
      '1997': ['est'],
      '1998': ['est'],
      '1999': ['est'],
      '2000': ['est'],
      '2001': ['est'],
      '2002': ['est'],
      '2003': ['est'],
      '2004': ['est'],
      '2005': ['est'],
      '2006': ['est'],
      '2007': ['est'],
      '2008': ['est'],
      '2009': ['est'],
      '2010': ['est'],
      '2011': ['est'],
      '2012': ['est'],
      '2013': ['est'],
      '2014': ['est'],
      '2015': ['est'],
      '2016': ['est'],
      '2017': ['est'],
      '2018': ['est'],
      '2019': ['est'],
      '2020': ['est'],
    },
    'Tercel': {
      'all': ['hs'],
    },
    'Tercel (non-turbo)': {
      '1980': ['ep'],
      '1981': ['ep'],
      '1982': ['ep'],
      '1987': ['ep'],
      '1988': ['ep'],
      '1989': ['ep'],
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
    },
    'Tercel (non-turbo, FWD)': {
      '1983': ['ep'],
      '1984': ['ep'],
      '1985': ['ep'],
      '1986': ['ep'],
    },
    'Yaris': {
      'all': ['est', 'hs'],
      '2007': ['ep'],
      '2008': ['ep'],
      '2009': ['ep'],
      '2010': ['ep'],
      '2011': ['ep'],
      '2012': ['ep'],
      '2013': ['ep'],
      '2014': ['ep'],
      '2015': ['ep'],
      '2016': ['ep'],
      '2017': ['ep'],
    },
  },
  'Triumph': {
    '(See Section 15.1.C for update/': {
      'all': ['dsp'],
    },
    '950S': {
      'all': ['dp'],
    },
    'Alternate crankshaft: 125 E': {
      'all': ['dp'],
    },
    'Alternate rear spoiler: V-775': {
      'all': ['dp'],
    },
    'GT6': {
      '1998': ['dp'],
    },
    'Sedan over 1.7L & under 3.0L not': {
      'all': ['dsp'],
    },
    'Spitfire 1147': {
      'all': ['dp'],
    },
    'Spitfire 1296 MkIII': {
      'all': ['dp'],
    },
    'Spitfire 1296 MkIV': {
      'all': ['dp'],
    },
    'Spitfire 1493': {
      'all': ['dp'],
    },
    'Stag': {
      'all': ['gs'],
    },
    'TR-2 & TR-3': {
      'all': ['dp'],
    },
    'TR-4 & TR-4A': {
      'all': ['dp'],
    },
    'TR-4A': {
      'all': ['dp'],
    },
    'TR-7': {
      '1998': ['dp'],
    },
    'TR-8': {
      'all': ['dsp', 'es'],
    },
    'TR250': {
      '1967': ['fp'],
      '1968': ['fp'],
    },
    'TR6': {
      '1969': ['fp'],
      '1970': ['fp'],
      '1971': ['fp'],
      '1972': ['fp'],
      '1973': ['fp'],
      '1974': ['fp'],
      '1975': ['fp'],
      '1976': ['fp'],
    },
    'TR8': {
      'all': ['fp'],
    },
    'Turner': {
      'all': ['dp'],
    },
  },
  'Volkswagen': {
    '(185.42 cm) wheelbase may compete even though the driver’s feet': {
      'all': ['fp'],
    },
    '(See Section 15.1.C for update/': {
      'all': ['fsp'],
    },
    '(This is not to be interpreted as requiring a floor pan beneath the': {
      'all': ['fp'],
    },
    '(bodywork), and the distance from the tires to the sidepods as speci- Examples: Camaro (-2002), Mustang (-2004), Firebird': {
      '2002': ['fp'],
    },
    '). Area calculation is of a rectangle fully': {
      'all': ['fp'],
    },
    '1. Engine Choices': {
      'all': ['fp'],
    },
    '1.8L Turbo models': {
      'all': ['hs'],
    },
    '10.All prohibited cost control items in P2 per GCR Section 9.1.8.D.A ap- F. Aerodynamic restrictions for Formula Atlantic': {
      'all': ['fp'],
    },
    '2-stroke up to 1300 cc or Mazda 12A rotary with any porting and': {
      'all': ['fp'],
    },
    '2. Engine Components': {
      'all': ['fp'],
    },
    '2. Formula First': {
      'all': ['fp'],
    },
    '20-40% MORE': {
      'all': ['fp'],
    },
    '3. Transaxle': {
      'all': ['fp'],
    },
    '4. Bodywork': {
      'all': ['fp'],
    },
    '45% of the wheelbase; the lower surface (surface licked by the air': {
      'all': ['fp'],
    },
    '5. Front Suspension': {
      'all': ['fp'],
    },
    '6. Wheels': {
      'all': ['fp'],
    },
    '7. Rear Suspension': {
      'all': ['fp'],
    },
    '9. Weight': {
      'all': ['fp'],
    },
    '9.1.1.D.3.C.': {
      'all': ['fp'],
    },
    'A. Spec tires are not required.': {
      'all': ['fp'],
    },
    'A. Weber 32DGV, 32DGAV, or 32DGEV': {
      'all': ['ep'],
    },
    'Additional specifications': {
      'all': ['ep'],
    },
    'All listed weights are with driver except where noted otherwise. Weights': {
      'all': ['fp'],
    },
    'American 6-cyl & V8 sedan or': {
      'all': ['fsp'],
    },
    'Any single carburetor (regardless of the number of venturis) is': {
      'all': ['fp'],
    },
    'B. Dwarf Cars®, 600 Racing Inc Legends Cars®, Baby Grand Cars®, and': {
      'all': ['fp'],
    },
    'B. Minimum wheelbase of 80” (203.2 cm).': {
      'all': ['fp'],
    },
    'B. Other Club Racing GCR-compliant Formula Cars': {
      'all': ['fp'],
    },
    'B. Performance Adjustments (lb.):': {
      'all': ['fp'],
    },
    'B. Weber 32/36DGV, 32/36DGAV, or 32/36DGEV': {
      'all': ['ep'],
    },
    'BETTER.': {
      'all': ['fp'],
    },
    'Baby Grand®, or PASCAR® Rules and the Solo® Rules, the Solo®': {
      'all': ['fp'],
    },
    'Beetle': {
      'all': ['est', 'gst', 'hs'],
    },
    'Beetle (1300)': {
      '1965': ['dp'],
      '1966': ['dp'],
    },
    'Beetle (1300, 1500, & 1600)': {
      '1967': ['dp'],
      '1968': ['dp'],
      '1969': ['dp'],
    },
    'Beetle (1600)': {
      '1970': ['dp'],
      '1971': ['dp'],
      '1972': ['dp'],
      '1973': ['dp'],
      '1974': ['dp'],
      '1975': ['dp'],
      '1976': ['dp'],
      '1977': ['dp'],
    },
    'Beetle (2.0L 8v)': {
      '1998': ['est'],
      '1999': ['est'],
      '2000': ['est'],
      '2001': ['est'],
      '2002': ['est'],
      '2003': ['est'],
      '2004': ['est'],
      '2005': ['est'],
      '2006': ['est'],
    },
    'C. Performance Adjustments (lbs.):': {
      'all': ['fp'],
    },
    'C. Weber 32/36DFV, 32/36DFAV, or 32/36DFEV': {
      'all': ['ep'],
    },
    'C.7, C.8, C.9, C.10, C.11 and C.12 except as amended in these rules. No': {
      'all': ['fp'],
    },
    'CAM-C minimum weight. These cars may use the CAM-C Aero rules': {
      'all': ['fp'],
    },
    'Classic American Muscle/ Extreme Street': {
      'all': ['fp'],
    },
    'Classic American Muscle/Xtreme Street (CAM/XS) - Appendix A': {
      'all': ['fp'],
    },
    'Club Racing GCR-compliant cars: Spec Racer Ford (SRF), Formula': {
      'all': ['fp'],
    },
    'Club Spec - Appendix B': {
      'all': ['fp'],
    },
    'Competition Rules) reference. “Car” is defined in Section 12. In the Solo®': {
      'all': ['fp'],
    },
    'Compression ratio (max.): 11.0:1; valve lift (max.): 0.450”': {
      'all': ['ep'],
    },
    'Compression ratio (max.): 11.0; valve lift (max.): 0.450”': {
      'all': ['ep'],
    },
    'Compression ratio (max.): 11.5:1; valve lift (max.): 0.420”': {
      'all': ['ep'],
    },
    'Compression ratio (max.): 12.0:1; valve lift (max.): 0.420”': {
      'all': ['ep'],
    },
    'Compression ratio limited (max.): 12.0:1; valve lift (max.): 0.420”': {
      'all': ['ep'],
    },
    'Corrado': {
      'all': ['est', 'hs'],
    },
    'Corrado (1.8L Supercharged)': {
      '1990': ['ep'],
      '1991': ['ep'],
      '1992': ['ep'],
      '1993': ['ep'],
      '1994': ['ep'],
      '1995': ['ep'],
    },
    'Corrado (16v, non-supercharged)': {
      '1988': ['ep'],
      '1989': ['ep'],
      '1990': ['ep'],
      '1991': ['ep'],
      '1992': ['ep'],
      '1993': ['ep'],
      '1994': ['ep'],
      '1995': ['ep'],
    },
    'Corrado VR6': {
      '1992': ['ep'],
      '1993': ['ep'],
      '1994': ['ep'],
      '1995': ['ep'],
    },
    'D. Formula 2000 and Formula Continental per GCR/FCS:': {
      'all': ['fp'],
    },
    'D. Weber 34DAT, 34DATR, 34DATRA, or 34DMTR': {
      'all': ['ep'],
    },
    'DIFFERENT.': {
      'all': ['fp'],
    },
    'Dasher': {
      'all': ['hs'],
    },
    'E. Aerodynamic restrictions for Sports Racers:': {
      'all': ['fp'],
    },
    'E. Holley-Weber 5200': {
      'all': ['ep'],
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
    'Exceptions to the Club Racing GCR for all cars in this class:': {
      'all': ['fp'],
    },
    'Exluded from all X Classes': {
      'all': ['fp'],
    },
    'FF in this class: ADF, Alexis, Anson, Caldwell, Citation, Crossle, Du- 1. Formula Vee': {
      'all': ['fp'],
    },
    'Fox': {
      'all': ['hs'],
    },
    'GCR construction requirements or limitations except for those safety': {
      'all': ['fp'],
    },
    'GCR of ±1” (±25.4 mm). It is the intent of this allowance to maintain': {
      'all': ['fp'],
    },
    'GTI VR6': {
      '1995': ['est'],
      '1996': ['est'],
      '1997': ['est'],
      '1998': ['est'],
      '1999': ['est'],
      '2000': ['est'],
      '2001': ['est'],
      '2002': ['est'],
      '2003': ['est'],
      '2004': ['est'],
      '2005': ['est'],
    },
    'Golf': {
      'all': ['hs'],
    },
    'Golf & Cabrio (2.0L 8v) (1998- Golf & Jetta (TDI)': {
      '1999': ['est'],
      '2000': ['est'],
      '2001': ['est'],
      '2002': ['est'],
      '2003': ['est'],
      '2004': ['est'],
      '2005': ['est'],
      '2006': ['est'],
    },
    'Golf & GTI': {
      'all': ['gst'],
    },
    'Golf & Jetta (A2 chassis)': {
      '1985': ['ep'],
      '1986': ['ep'],
      '1987': ['ep'],
      '1988': ['ep'],
      '1989': ['ep'],
      '1990': ['ep'],
      '1991': ['ep'],
      '1992': ['ep'],
      '1993': ['ep'],
    },
    'Golf & Jetta (TDI)': {
      '2007': ['gst'],
      '2008': ['gst'],
      '2009': ['gst'],
      '2010': ['gst'],
      '2011': ['gst'],
      '2012': ['gst'],
      '2013': ['gst'],
      '2014': ['gst'],
      '2015': ['gst'],
    },
    'Golf GTI': {
      'all': ['gs'],
      '2006': ['hs'],
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
      '2017': ['hs'],
      '2018': ['hs'],
      '2019': ['hs'],
      '2020': ['hs'],
      '2021': ['hs'],
    },
    'Golf R': {
      '2012': ['ds', 'esp', 'gst'],
      '2013': ['ds', 'esp', 'gst'],
      '2014': ['gst'],
      '2015': ['ds', 'ssp'],
      '2016': ['ds', 'ssp'],
      '2017': ['ds', 'ssp'],
      '2018': ['ds', 'ssp'],
      '2019': ['ds'],
      '2022': ['ds'],
      '2023': ['ds'],
      '2024': ['ds'],
    },
    'Golf R (MK8)': {
      '2022': ['ast'],
      '2023': ['ast'],
      '2024': ['ast'],
    },
    'Golf R (Mk7)': {
      '2015': ['ast'],
      '2016': ['ast'],
      '2017': ['ast'],
      '2018': ['ast'],
      '2019': ['ast'],
    },
    'Golf, GTI & Jetta (excl. GTI 337': {
      'all': ['hs'],
    },
    'Golf, GTI, & Jetta (A3 chassis; 1.8 L & 2.0 L non-turbo)': {
      '1993': ['ep'],
      '1994': ['ep'],
      '1995': ['ep'],
      '1996': ['ep'],
      '1997': ['ep'],
      '1998': ['ep'],
    },
    'Golf, GTI, & Jetta (A3 chassis; TDI or VR6)': {
      '1993': ['ep'],
      '1994': ['ep'],
      '1995': ['ep'],
      '1996': ['ep'],
      '1997': ['ep'],
      '1998': ['ep'],
    },
    'Golf, GTI, & Jetta (A4 chassis; 1.8T, TDI, or VR6)': {
      '1999': ['ep'],
      '2000': ['ep'],
      '2001': ['ep'],
      '2002': ['ep'],
      '2003': ['ep'],
      '2004': ['ep'],
      '2005': ['ep'],
    },
    'Golf, GTI, & Jetta (A4 chassis; 2.0 L non-turbo)': {
      '1999': ['ep'],
      '2000': ['ep'],
      '2001': ['ep'],
      '2002': ['ep'],
      '2003': ['ep'],
      '2004': ['ep'],
      '2005': ['ep'],
    },
    'Golf, GTI, & Jetta (A5 chassis; 2.0T or TDI)': {
      '2006': ['ep'],
      '2007': ['ep'],
      '2008': ['ep'],
      '2009': ['ep'],
      '2010': ['ep'],
    },
    'Golf, GTI, & Jetta (A5 chassis; 2.5 L 5-cyl)': {
      '2006': ['ep'],
      '2007': ['ep'],
      '2008': ['ep'],
      '2009': ['ep'],
    },
    'Golf, GTI, GLI, & Jetta': {
      'all': ['fsp'],
    },
    'Golf/Rabbit & Jetta': {
      'all': ['est'],
    },
    'ID.4 (all)': {
      '2021': ['ds'],
      '2022': ['ds'],
      '2023': ['ds'],
      '2024': ['ds'],
      '2025': ['ds'],
    },
    'Jetta': {
      'all': ['gst'],
    },
    'Jetta & GLI (2.0L Turbo) (2006- Passat': {
      'all': ['hs'],
    },
    'Jetta (2.0L 8v)': {
      '2000': ['est'],
      '2001': ['est'],
      '2002': ['est'],
      '2003': ['est'],
      '2004': ['est'],
    },
    'LEGENDARY.': {
      'all': ['fp'],
    },
    'Level 2 (Limited Preparation) Vehicles': {
      'all': ['ep'],
    },
    'MMRA® Baby Grand®, or PASCAR® Pro Challenge specifications are': {
      'all': ['fp'],
    },
    'Make': {
      'all': ['ep'],
    },
    'Mk4 chassis)': {
      '1999': ['fsp'],
      '2000': ['fsp'],
      '2001': ['fsp'],
      '2002': ['fsp'],
      '2003': ['fsp'],
      '2004': ['fsp'],
      '2005': ['fsp'],
    },
    'Modified (BM) - Appendix A': {
      'all': ['fp'],
    },
    'Modified (CM) - Appendix A': {
      'all': ['fp'],
    },
    'Modified (EM, FM) - Appendix A': {
      'all': ['fp'],
    },
    'Modified (FM) - Appendix A': {
      'all': ['fp'],
    },
    'Modified Production and GT cars as follows:': {
      'all': ['fp'],
    },
    'Modified class A': {
      'all': ['fp'],
    },
    'Modified class B': {
      'all': ['fp'],
    },
    'Modified class C': {
      'all': ['fp'],
    },
    'Modified class E': {
      'all': ['fp'],
    },
    'Modified class F': {
      'all': ['fp'],
    },
    'National Classes as used at SCCA® National Solo® events:': {
      'all': ['fp'],
    },
    'New Beetle (1.8T or TDI)': {
      '1998': ['ep'],
      '1999': ['ep'],
      '2000': ['ep'],
      '2001': ['ep'],
      '2002': ['ep'],
      '2003': ['ep'],
      '2004': ['ep'],
      '2005': ['ep'],
      '2006': ['ep'],
      '2007': ['ep'],
      '2008': ['ep'],
      '2009': ['ep'],
      '2010': ['ep'],
    },
    'New Beetle (2.0 L non-turbo & 2.5 L 5-cyl)': {
      '1998': ['ep'],
      '1999': ['ep'],
      '2000': ['ep'],
      '2001': ['ep'],
      '2002': ['ep'],
      '2003': ['ep'],
      '2004': ['ep'],
      '2005': ['ep'],
      '2006': ['ep'],
      '2007': ['ep'],
      '2008': ['ep'],
      '2009': ['ep'],
      '2010': ['ep'],
    },
    'New Beetle Turbo': {
      'all': ['fsp'],
    },
    'OR': {
      'all': ['fp'],
    },
    'Oil filters and oil coolers are unrestricted provided that they are': {
      'all': ['fp'],
    },
    'PASCAR® Pro Challenge Vehicles built and prepared to Western States': {
      'all': ['fp'],
    },
    'POWER FEELS': {
      'all': ['fp'],
    },
    'Passat': {
      'all': ['est', 'gst'],
    },
    'Passat VR6': {
      'all': ['fsp'],
    },
    'Passat W8 4Motion': {
      'all': ['fsp'],
    },
    'Permitted optional carburetors, for single carburetor cars, are:': {
      'all': ['ep'],
    },
    'Prepared (EP) - Appendix A': {
      'all': ['ep'],
    },
    'Prepared (FP) - Appendix A': {
      'all': ['fp'],
    },
    'Quantum': {
      'all': ['hs'],
    },
    'R32': {
      'all': ['est', 'fsp'],
    },
    'R32 (3.2L V6, AWD)': {
      '2004': ['fp'],
    },
    'R32 (Golf chassis)': {
      '2004': ['ds'],
      '2008': ['ds'],
    },
    'Rabbit & Rabbit GTI': {
      'all': ['hs'],
    },
    'Rabbit, Jetta, Scirocco, Cabriolet, & Pickup (A1 chassis)': {
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
      '1985': ['ep'],
      '1986': ['ep'],
      '1987': ['ep'],
      '1988': ['ep'],
      '1989': ['ep'],
      '1990': ['ep'],
      '1991': ['ep'],
      '1992': ['ep'],
    },
    'Rules Sections where preparation allowances are specified and if there are': {
      'all': ['fp'],
    },
    'Rules shall take precedence.': {
      'all': ['fp'],
    },
    'SEB may add to this list at any time, effective upon notification of the': {
      'all': ['fp'],
    },
    'SSP': {
      'all': ['ssp'],
    },
    'STOPPING': {
      'all': ['fp'],
    },
    'Scirocco': {
      'all': ['hs'],
    },
    'Sedan': {
      'all': ['ep', 'fp'],
    },
    'Solo® Rules.': {
      'all': ['fp'],
    },
    'Stohr, Swift, Tiga, Titan, Van Diemen, Winkleman, and Zink. The': {
      'all': ['fp'],
    },
    'That’s what Race Proven, Street Legal technology is all': {
      'all': ['fp'],
    },
    'VW oil pump is permitted. Dry sump systems are permitted. Re- Modified class D': {
      'all': ['fp'],
    },
    'Valve guide centers shall remain OE standard. OE standard': {
      'all': ['fp'],
    },
    'Valve seat angles are unrestricted.': {
      'all': ['fp'],
    },
    'XTREME STREET': {
      'all': ['fp'],
    },
    'Xtreme Street A': {
      'all': ['fp'],
    },
    'Xtreme Street B': {
      'all': ['fp'],
    },
    'Yugo': {
      '1986': ['ep'],
      '1987': ['ep'],
      '1988': ['ep'],
      '1989': ['ep'],
      '1990': ['ep'],
      '1991': ['ep'],
      '1992': ['ep'],
    },
    '½” (0.500”, 50.8 mm) ID pipe. Any intake manifold not having': {
      'all': ['fp'],
    },
    '– AWD: 2480': {
      'all': ['fp'],
    },
    '– AWD: 3180': {
      'all': ['fp'],
    },
    '– Aero components': {
      'all': ['fp'],
    },
    '– FWD 2180': {
      'all': ['fp'],
    },
    '– FWD: 2680': {
      'all': ['fp'],
    },
    '– Interior modifications': {
      'all': ['fp'],
    },
    '– RWD: 2330': {
      'all': ['fp'],
    },
    '– RWD: 2930': {
      'all': ['fp'],
    },
    '– Weight': {
      'all': ['fp'],
    },
  },
  'Volvo': {
    '122S': {
      'all': ['dp'],
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
    '2.5L to 3.1L forced induction)': {
      'all': ['ast'],
    },
    '240 Series Turbo': {
      'all': ['fsp'],
    },
    '240 Turbo': {
      '1981': ['est', 'gst'],
      '1982': ['est', 'gst'],
      '1983': ['est', 'gst'],
      '1984': ['est', 'gst'],
      '1985': ['est', 'gst'],
    },
    '6-cyl (normally aspirated) or 4-cyl ': {
      'all': ['esp'],
    },
    '700 Series': {
      'all': ['fsp'],
    },
    '800 Series': {
      'all': ['fsp'],
    },
    'Alternate part: front axle cross member': {
      'all': ['dp'],
    },
    'C30': {
      'all': ['gst', 'hs'],
      '2006': ['fsp'],
      '2007': ['fsp'],
      '2008': ['fsp'],
      '2009': ['fsp'],
    },
    'DS': {
      'all': ['ds'],
    },
    'FAST FREE SHIPPING On orders over $50': {
      'all': ['hs'],
    },
    'P-1800': {
      'all': ['dp'],
      '1982': ['dp'],
    },
    'RWD pickup trucks': {
      'all': ['hs'],
    },
    'S40': {
      'all': ['est', 'gst'],
      '1995': ['fsp'],
      '1996': ['fsp'],
      '1997': ['fsp'],
      '1998': ['fsp'],
      '1999': ['fsp'],
      '2000': ['fsp'],
      '2001': ['fsp'],
      '2002': ['fsp'],
      '2003': ['fsp'],
      '2004': ['fsp'],
      '2005': ['fsp'],
      '2006': ['fsp'],
      '2007': ['fsp'],
      '2008': ['fsp'],
      '2009': ['fsp'],
      '2010': ['fsp'],
      '2011': ['fsp'],
    },
    'S60 & V60 Polestar': {
      '2016': ['ds'],
      '2017': ['ds'],
      '2018': ['ds'],
      '2019': ['ds'],
      '2020': ['ds'],
      '2021': ['ds'],
      '2022': ['ds'],
    },
    'S60 & V70': {
      'all': ['fsp'],
    },
    'S60R': {
      'all': ['ast', 'gs'],
    },
    'S60R & V70R (R171)': {
      '2004': ['esp'],
      '2005': ['esp'],
      '2006': ['esp'],
      '2007': ['esp'],
      '2008': ['esp'],
      '2009': ['esp'],
      '2010': ['esp'],
      '2011': ['esp'],
    },
    'Sedans': {
      'all': ['dp'],
    },
    'Sedans & Coupes NOC (non- G Street Touring®': {
      'all': ['gst'],
    },
    'Street Prepared (FSP) - Appendix A': {
      'all': ['fsp'],
    },
    'The Complete Line of Competition Pads': {
      'all': ['hs'],
    },
    'Tire Rack 888-380-8473': {
      'all': ['hs'],
    },
    'Turbo models': {
      'all': ['gs'],
    },
    'V40': {
      '2000': ['est'],
      '2001': ['est'],
      '2002': ['est'],
      '2003': ['est'],
      '2004': ['est'],
      '2005': ['est'],
      '2006': ['est'],
      '2007': ['est'],
      '2008': ['est'],
      '2009': ['est'],
      '2010': ['est'],
      '2011': ['est'],
    },
    'V50': {
      'all': ['gst'],
    },
    'V70R': {
      'all': ['gs'],
    },
    'Yugo': {
      'all': ['hs'],
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
  document.getElementById('main').style.marginLeft = '0';
}

/**
 * populates the subclass table
 */
function populateSubclasses() { // eslint-disable-line no-unused-vars
  for (const classAcronym in subclassMap) {
    if (Object.prototype.hasOwnProperty.call(subclassMap, classAcronym)) {
      const id = classAcronym.concat('-a');
      const aSelect = document.getElementById(id);
      if (aSelect) {
        // Show only the acronym in uppercase
        aSelect.textContent = classAcronym.toUpperCase();
        // Remove any existing title attribute to avoid browser default tooltips
        aSelect.removeAttribute('title');
        // Add data attribute for our custom tooltip
        aSelect.setAttribute('data-tooltip', subclassMap[classAcronym]);
        aSelect.setAttribute('data-acronym', classAcronym.toUpperCase());

        // Add event listeners for custom tooltip
        aSelect.addEventListener('mouseenter', showCustomTooltip);
        aSelect.addEventListener('mouseleave', hideCustomTooltip);
      }
    }
  }
}

/**
 * Show custom tooltip on hover
 * @param {Event} event - The mouse event
 */
function showCustomTooltip(event) {
  const element = event.target;
  const tooltipText = element.getAttribute('data-tooltip');

  if (!tooltipText) return;

  // Remove any existing tooltip
  hideCustomTooltip();

  // Create tooltip element
  const tooltip = document.createElement('div');
  tooltip.className = 'custom-tooltip';
  tooltip.textContent = tooltipText;
  tooltip.id = 'active-tooltip';

  // Add to body
  document.body.appendChild(tooltip);

  // Position tooltip
  const rect = element.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();

  // Position above the element, centered
  let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
  let top = rect.top - tooltipRect.height - 10;

  // Adjust if tooltip goes off screen
  if (left < 10) left = 10;
  if (left + tooltipRect.width > window.innerWidth - 10) {
    left = window.innerWidth - tooltipRect.width - 10;
  }
  if (top < 10) {
    top = rect.bottom + 10; // Show below if no room above
  }

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
  tooltip.style.opacity = '1';
}

/**
 * Hide custom tooltip
 */
function hideCustomTooltip() {
  const existingTooltip = document.getElementById('active-tooltip');
  if (existingTooltip) {
    existingTooltip.remove();
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

    // Update eligible classes list if it exists currently showing
    if (showingEligibleOnly) {
      updateEligibleClassesList();
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
        const newChild = document.createTextNode(subClass.toUpperCase());
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
        const newChild = document.createTextNode(subClass.toUpperCase());
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
        const newChild = document.createTextNode(subClass.toUpperCase());
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
        const newChild = document.createTextNode(subClass.toUpperCase());
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
        const newChild = document.createTextNode(subClass.toUpperCase());
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
        const newChild = document.createTextNode(subClass.toUpperCase());
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
