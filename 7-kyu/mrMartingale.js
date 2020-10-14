// https://www.codewars.com/kata/5eb34624fec7d10016de426e

function martingale(bank, outcomes) {
  
  let stake = 100;
  
  outcomes.forEach(outcome => {
    if(outcome === 0){
      bank -= stake;
      stake *= 2;
    }else{
      bank += stake;
      stake = 100;
    }
  });
  
  return bank;
}