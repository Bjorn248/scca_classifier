const carFlags = {
  "StreetCar": [
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
    'stockExhaust'
  ],
  "StreetTouringCar": [
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
    'stockExhaust'
  ]
};

function setState(keyName, isTrue) { // eslint-disable-line no-unused-vars
  let url = new URL(window.location.href); // eslint-disable-line prefer-const
  url.searchParams.set(keyName, isTrue);
  window.location.href = url;
  let e = document.getElementById(keyName); // eslint-disable-line prefer-const
  e.style.display = 'none';
};

function resetState() { // eslint-disable-line no-unused-vars
  const url = window.location.href;
  window.location.href = url.split('?')[0];
}

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
