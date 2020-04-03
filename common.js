const StreetCar = [
  'steeringWheelUnchanged',
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
];

function setState(keyName, isTrue) {
  let url = new URL(window.location.href);
  url.searchParams.set(keyName, isTrue);
  window.location.href = url;
  let e = document.getElementById(keyName);
  e.style.display = 'none';
};

function resetState() {
  const url = window.location.href;
  window.location.href = url.split('?')[0];
}

function evalQueryParams() {
  const url = new URL(window.location.href);
  /* There are no query strings in the URL so
  we want to display the first question */
  if (url.searchParams.keys().next().done) {
    const e = document.getElementById(StreetCar[0]);
    e.style.display = 'block';
  } else {
    let remainingQuestions = [];
    for (let i = 0; i < StreetCar.length; i++) {
      if (!url.searchParams.has(StreetCar[i])) {
        remainingQuestions.push(StreetCar[i]);
      }
    }
    if (remainingQuestions.length != 0) {
      const e = document.getElementById(remainingQuestions[0]);
      e.style.display = 'block';
    } else {
      checkEligibility(url);
    }
  }
};

function checkEligibility(url) {
  let isEligible = true;
  let failedQuestions = [];
  for (let i=0; i<StreetCar.length; i++) {
    if (url.searchParams.get(StreetCar[i]) == 'false') {
      failedQuestions.push(StreetCar[i]);
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
