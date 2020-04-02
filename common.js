// I think I want to store this information in HTML5 sessionStorage
var StreetCar = {
  steeringWheelUnchanged: false,
  fendersUnmodified: false,
  tires200Treadwear: false,
  wheelsStockWidth: false,
  wheelOffsetPlusMinus7Inches: false,
  wheelDiameterPlusMinus1Inch: false,
  stockNumberOfWheelBoltsOrStuds: false,
  shocksAtMost2Way: false,
  suspensionGeometryAltered: false,
  hasStandardBrakeLinesUnless1992OrOlder: false,
  hasSingleAntiRollBar: false,
};

function setState(keyName, isTrue) {
  sessionStorage.setItem(keyName, isTrue);
  let url = new URL(window.location.href);
  url.searchParams.set(keyName, isTrue);
  window.location.href = url;
  let e = document.getElementById(keyName);
  e.style.display = 'none';
};

function getState(keyName) {
  alert(sessionStorage.getItem(keyName));
};

function evalQueryParams() {
  const url = new URL(window.location.href);
  /* There are no query strings in the URL so
  we want to display the first question */
  if (url.searchParams.keys().next().done) {
    const e = document.getElementById(Object.keys(StreetCar)[0]);
    e.style.display = 'block';
  } else {
    let remainingQuestions = [];
    for (question in StreetCar) {
      if (!url.searchParams.has(question)) {
        remainingQuestions.push(question);
      }
    }
    if (remainingQuestions.length != 0) {
      const e = document.getElementById(remainingQuestions[0]);
      e.style.display = 'block';
    } else {
      checkEligibility();
    }
  }
};

function checkEligibility() {
  console.log('we got here');
}
