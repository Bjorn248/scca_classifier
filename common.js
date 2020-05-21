const carFlags = {
  'StreetCar': [
    'makeModelYear',
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
    'makeModelYear',
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

const allCars = {
  'Acura': {
    'NSX Alex Zanardi Signature Edition': {
      0: ['A Street (AS)'],
    },
    'NSX': {
      1990: ['B Street (BS)', 'A Street Prepared (ASP)', 'F Prepared (FP)'],
      1991: ['B Street (BS)', 'A Street Prepared (ASP)', 'F Prepared (FP)'],
      1992: ['B Street (BS)', 'A Street Prepared (ASP)', 'F Prepared (FP)'],
      1993: ['B Street (BS)', 'A Street Prepared (ASP)', 'F Prepared (FP)'],
      1994: ['B Street (BS)', 'A Street Prepared (ASP)', 'F Prepared (FP)'],
      1995: ['B Street (BS)', 'A Street Prepared (ASP)', 'F Prepared (FP)'],
      1996: ['B Street (BS)', 'A Street Prepared (ASP)', 'F Prepared (FP)'],
      1997: ['B Street (BS)', 'A Street Prepared (ASP)', 'F Prepared (FP)'],
      1998: ['B Street (BS)', 'A Street Prepared (ASP)', 'F Prepared (FP)'],
      1999: ['B Street (BS)', 'A Street Prepared (ASP)', 'F Prepared (FP)'],
      2000: ['B Street (BS)', 'A Street Prepared (ASP)', 'F Prepared (FP)'],
      2001: ['B Street (BS)', 'A Street Prepared (ASP)', 'F Prepared (FP)'],
      2002: ['B Street (BS)', 'A Street Prepared (ASP)', 'F Prepared (FP)'],
      2003: ['B Street (BS)', 'A Street Prepared (ASP)', 'F Prepared (FP)'],
      2004: ['B Street (BS)', 'A Street Prepared (ASP)', 'F Prepared (FP)'],
      2005: ['B Street (BS)', 'A Street Prepared (ASP)', 'F Prepared (FP)'],
      2016: ['Super Street (SS)', 'Super Street Prepared (SSP)'],
      2017: ['Super Street (SS)', 'Super Street Prepared (SSP)'],
      2018: ['Super Street (SS)', 'Super Street Prepared (SSP)'],
      2019: ['Super Street (SS)', 'Super Street Prepared (SSP)'],
      2020: ['Super Street (SS)', 'Super Street Prepared (SSP)'],
    },
    'Integra Type R': {
      0: ['D Street (DS)', 'Street Touring Xtreme (STX)', 'D Street Prepared (DSP)', 'E Prepared (EP)'],
    },
    'RLX': {
      0: ['G Street (GS)'],
    },
    'TLX': {
      0: ['G Street (GS)'],
    },
    'CL (all)': {
      0: ['H Street (HS)'],
    },
    'ILX': {
      2012: ['H Street (HS)'],
      2013: ['H Street (HS)', 'Street Touring Xtreme (STX)'],
      2014: ['H Street (HS)', 'Street Touring Xtreme (STX)'],
      2015: ['H Street (HS)', 'Street Touring Xtreme (STX)'],
      2016: ['H Street (HS)', 'Street Touring Xtreme (STX)'],
      2017: ['H Street (HS)', 'Street Touring Xtreme (STX)'],
      2018: ['H Street (HS)', 'Street Touring Xtreme (STX)'],
      2019: ['H Street (HS)', 'Street Touring Xtreme (STX)'],
      2020: ['H Street (HS)', 'Street Touring Xtreme (STX)'],
    },
    'Integra (all except Type R)': {
      1986: ['H Street (HS)', 'Street Touring Sport (STS)', 'F Street Prepared (FSP)', 'E Prepared (EP)'],
      1987: ['H Street (HS)', 'Street Touring Sport (STS)', 'F Street Prepared (FSP)', 'E Prepared (EP)'],
      1988: ['H Street (HS)', 'Street Touring Sport (STS)', 'F Street Prepared (FSP)', 'E Prepared (EP)'],
      1989: ['H Street (HS)', 'Street Touring Sport (STS)', 'F Street Prepared (FSP)', 'E Prepared (EP)'],
      1990: ['H Street (HS)', 'Street Touring Sport (STS)', 'D Street Prepared (DSP)', 'E Prepared (EP)'],
      1991: ['H Street (HS)', 'Street Touring Sport (STS)', 'D Street Prepared (DSP)', 'E Prepared (EP)'],
      1992: ['H Street (HS)', 'Street Touring Sport (STS)', 'D Street Prepared (DSP)', 'E Prepared (EP)'],
      1993: ['H Street (HS)', 'Street Touring Sport (STS)', 'D Street Prepared (DSP)', 'E Prepared (EP)'],
      1994: ['H Street (HS)', 'Street Touring Xtreme (STX)', 'D Street Prepared (DSP)', 'E Prepared (EP)'],
      1995: ['H Street (HS)', 'Street Touring Xtreme (STX)', 'D Street Prepared (DSP)', 'E Prepared (EP)'],
      1996: ['H Street (HS)', 'Street Touring Xtreme (STX)', 'D Street Prepared (DSP)', 'E Prepared (EP)'],
      1997: ['H Street (HS)', 'Street Touring Xtreme (STX)', 'D Street Prepared (DSP)', 'E Prepared (EP)'],
      1998: ['H Street (HS)', 'Street Touring Xtreme (STX)', 'D Street Prepared (DSP)', 'E Prepared (EP)'],
      1999: ['H Street (HS)', 'Street Touring Xtreme (STX)', 'D Street Prepared (DSP)', 'E Prepared (EP)'],
      2000: ['H Street (HS)', 'Street Touring Xtreme (STX)', 'D Street Prepared (DSP)', 'E Prepared (EP)'],
      2001: ['H Street (HS)', 'Street Touring Xtreme (STX)', 'D Street Prepared (DSP)', 'E Prepared (EP)'],
    },
    'Legend': {
      0: ['H Street (HS)', 'F Street Prepared (FSP)'],
    },
    'RSX': {
      0: ['H Street (HS)', 'Street Touring Xtreme (STX)', 'D Street Prepared (DSP)', 'E Prepared (EP)'],
    },
    'TL': {
      0: ['H Street (HS)'],
    },
    'TSX': {
      0: ['H Street (HS)', 'Street Touring Xtreme (STX)', 'D Street Prepared (DSP)'],
    },
    'Vigor': {
      0: ['H Street (HS)'],
    },
  },
  'Alfa Romeo': {
    '4C (incl. Spider)': {
      2015: ['Super Street (SS)', 'Super Street R (SSR)'],
      2016: ['Super Street (SS)', 'Super Street R (SSR)'],
      2017: ['Super Street (SS)', 'Super Street R (SSR)'],
      2018: ['Super Street (SS)', 'Super Street R (SSR)'],
      2019: ['Super Street (SS)', 'Super Street R (SSR)'],
      2020: ['Super Street (SS)', 'Super Street R (SSR)'],
    },
    'Giulia Quadrifoglio': {
      2017: ['A Street'],
      2018: ['A Street'],
      2019: ['A Street'],
      2020: ['A Street'],
    },
    'Giulia (incl. Ti)': {
      2016: ['D Street (DS)', 'Street Touring Ultra (STU)'],
      2017: ['D Street (DS)', 'Street Touring Ultra (STU)'],
      2018: ['D Street (DS)', 'Street Touring Ultra (STU)'],
      2019: ['D Street (DS)', 'Street Touring Ultra (STU)'],
      2020: ['D Street (DS)', 'Street Touring Ultra (STU)'],
    },
    '2000 GTV': {
      0: ['E Street', 'F Street Prepared (FSP)', 'D Prepared (DP)'],
    },
    '2000 Spider': {
      0: ['E Street', 'F Street Prepared (FSP)', 'D Prepared (DP)'],
    },
    '1300': {
      0: ['H Street', 'F Street Prepared (FSP)'],
    },
    '1600': {
      0: ['H Street', 'F Street Prepared (FSP)', 'D Prepared (DP)'],
    },
    '164 (non-S)': {
      1991: ['H Street'],
      1992: ['H Street'],
      1993: ['H Street'],
    },
    '1750 & 1750 GTV': {
      0: ['H Street', 'F Street Prepared (FSP)', 'D Prepared (DP)'],
    },
    '2000 (4-door sedan)': {
      0: ['H Street', 'F Street Prepared (FSP)'],
    },
    'GTV V6': {
      0: ['H Street', 'D Street Prepared (DSP)', 'F Prepared (FP)'],
    },
    'Milano': {
      0: ['H Street', 'D Street Prepared (DSP)'],
    },
    'Sedan (NOC)': {
      0: ['H Street'],
    },
    'Sport Sedan': {
      0: ['D Prepared (DP)'],
    },
    'Alfetta GT': {
      0: ['F Street Prepared', 'D Prepared (DP)'],
    },
    '1600 GTV': {
      0: ['D Prepared (DP)'],
    },
    'Giuletta Sprint & Spider (1570 cc)': {
      0: ['D Prepared (DP)'],
    },
    'Giulia 1300 & 1300 Ti': {
      1964: ['D Prepared (DP)'],
      1965: ['D Prepared (DP)'],
      1966: ['D Prepared (DP)'],
      1967: ['D Prepared (DP)'],
      1968: ['D Prepared (DP)'],
      1969: ['D Prepared (DP)'],
      1970: ['D Prepared (DP)'],
      1971: ['D Prepared (DP)'],
    },
    'GT 1300 Junior & GTA Junior': {
      1966: ['D Prepared (DP)'],
      1967: ['D Prepared (DP)'],
      1968: ['D Prepared (DP)'],
      1969: ['D Prepared (DP)'],
      1970: ['D Prepared (DP)'],
      1971: ['D Prepared (DP)'],
      1972: ['D Prepared (DP)'],
      1973: ['D Prepared (DP)'],
      1974: ['D Prepared (DP)'],
      1975: ['D Prepared (DP)'],
      1976: ['D Prepared (DP)'],
      1977: ['D Prepared (DP)'],
    },
    'GTA (bore & stroke: 78mm x 67.5mm)': {
      0: ['D Prepared (DP)'],
    },
    'Junior Z': {
      0: ['D Prepared (DP)'],
    },
    'Spider Duetto 1750 Spider Veloce (1779 cc)': {
      1969: ['D Prepared (DP)'],
      1970: ['D Prepared (DP)'],
    },
  },
};

/**
 * populates the make, model, and year drop-down lists
 */
function lookupMakeModelYear() { // eslint-disable-line no-unused-vars
  const url = new URL(window.location.href);

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
  if (url.searchParams.has('make') && url.searchParams.get('make') in allCars) {
    const providedMake = url.searchParams.get('make');
    makeSelect.value = providedMake;
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
  if (url.searchParams.has('model') && url.searchParams.get('model') in allCars[makeSelect.value]) {
    const providedModel = url.searchParams.get('model');
    modelSelect.value = providedModel;
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
  if (url.searchParams.has('year') && url.searchParams.get('year') in allCars[makeSelect.value][modelSelect.value]) {
    const providedYear = url.searchParams.get('year');
    yearSelect.value = providedYear;
  }

}

/**
 * saves make model and year in URL params
 */
function setMakeModelYear() {
  let keyArr = ['makeModelYear', 'make', 'model', 'year']
  let valueArr = [
    true,
    document.getElementById('make').value,
    document.getElementById('model').value,
    document.getElementById('year').value,
  ];
  setState(keyArr, valueArr);
}

/**
 * Adds one or more URL parameters to store the answer to a question
 * The index of each array is used to match the key to the value
 * @param {Array} keyArray is an array of url parameter names
 * @param {Array} valueArray is an array of url parameter values
 */
function setState(keyArray, valueArray) { // eslint-disable-line no-unused-vars
  let url = new URL(window.location.href); // eslint-disable-line prefer-const

  for (let i = 0; i < keyArray.length; i++) {
    url.searchParams.set(keyArray[i], valueArray[i]);
  }
  window.location.href = url;
  let e = document.getElementById(keyName); // eslint-disable-line prefer-const
  e.style.display = 'none';
};

/**
 * clears all URL parameters
 */
function resetState() { // eslint-disable-line no-unused-vars
  const url = window.location.href;
  window.location.href = url.split('?')[0];
}

/**
 * parses existing URL parameters to determine which questions
 * should be displayed
 * @param {string} className the name of the class being evaluated
 */
function evalQueryParams(className) { // eslint-disable-line no-unused-vars
  const url = new URL(window.location.href);
  /* There are no query strings in the URL so
  we want to display the first question */
  if (url.searchParams.keys().next().done) {
    const e = document.getElementById(carFlags[className][0]);
    e.style.display = 'block';
  } else {
    let remainingQuestions = []; // eslint-disable-line prefer-const
    for (let i = 0; i < carFlags[className].length; i++) {
      if (!url.searchParams.has(carFlags[className][i])) {
        remainingQuestions.push(carFlags[className][i]);
      }
    }
    if (remainingQuestions.length != 0) {
      const e = document.getElementById(remainingQuestions[0]);
      e.style.display = 'block';
    } else {
      checkEligibility(url, className);
    }
  }
};

/**
 * checks to see if a car is eligible for a class
 * based on the answers to the provided questions
 * @param {string} url the URL containing all the parameters
 * thus answers to the questions
 * @param {string} className the class the questions are being
 * checked against
 */
function checkEligibility(url, className) {
  let isEligible = true;
  let failedQuestions = []; // eslint-disable-line prefer-const
  for (let i=0; i<carFlags[className].length; i++) {
    if (url.searchParams.get(carFlags[className][i]) == 'false') {
      failedQuestions.push(carFlags[className][i]);
      isEligible = false;
    }
  }

  if (isEligible) {
    const e = document.getElementById('eligible');
    e.style.display = 'block';
    let specificClass = document.getElementById('specificClass');
    let possibleClasses = document.createTextNode(allCars[url.searchParams.get('make')][url.searchParams.get('model')][url.searchParams.get('year')]);
    specificClass.appendChild(possibleClasses);
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
