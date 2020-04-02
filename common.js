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
];

function setState(keyName, isTrue) {
  let url = new URL(window.location.href);
  url.searchParams.set(keyName, isTrue);
  window.location.href = url;
  let e = document.getElementById(keyName);
  e.style.display = 'none';
};

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
  for (let i = 0; i < StreetCar.length; i++) {
    console.log(url.searchParams.get(StreetCar[i]));
    if (url.searchParams.get(StreetCar[i]) == 'false') {
      console.log('failed one');
      failedQuestions.push(StreetCar[i]);
      isEligible = false;
    }
  }

  if (isEligible) {
    console.log('Your car is eligible for street class!');
    const e = document.getElementById('eligible');
    e.style.display = 'block';
  } else {
    console.log('Your car is NOT eligible for street class');
    console.log(failedQuestions);
    const e = document.getElementById('notEligible');
    e.style.display = 'block';
  }
}
