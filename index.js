const selectPlan = (planNumber) => {
  const planElm = document.getElementById(`plan${planNumber}`);
  const plan1Elm = document.getElementById('plan1');
  const plan2Elm = document.getElementById('plan2');
  const plan3Elm = document.getElementById('plan3');

  if (planNumber === 1) {
    return (
      planElm.classList.add('plan--selected'),
      plan2Elm.classList.remove('plan--selected'),
      plan3Elm.classList.remove('plan--selected')
    );
  } else if (planNumber === 2) {
    return (
      planElm.classList.add('plan--selected'),
      plan1Elm.classList.remove('plan--selected'),
      plan3Elm.classList.remove('plan--selected')
    );
  } else if (planNumber === 3) {
    return (
      planElm.classList.add('plan--selected'),
      plan1Elm.classList.remove('plan--selected'),
      plan2Elm.classList.remove('plan--selected')
    );
  }
};

selectPlan(3);
