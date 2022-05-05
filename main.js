const splitting = () => {
    let total = parseInt(document.querySelector('#totalBill').value);
    let people = parseInt(document.querySelector('#totalPeople').value);
    let tipPercent = document.querySelector('#tipAmt');
    
    if (tipPercent.value !== "") {  
      let calcPercent = parseInt(tipPercent.value)
      const totalWithTip = total + calcPercent;
      document.querySelector('#perPerson').innerHTML = '₹' + totalWithTip / people ;
 
    } 
    else {
      const result = total / people;
      document.querySelector('#perPerson').innerHTML = '₹' + result.toFixed(2);
    }
   }
  
  document.querySelector('#addTip').addEventListener('click', (e) => {
    e.preventDefault();
    showTipInput();
  })
  
  const showTipInput = () => {
    const tipBtns = document.querySelector('#tipInput')
    if (tipBtns.style.display === "block") {
      tipBtns.style.display = "none"
    } else {
      tipBtns.style.display = "block"
    }
  }
  
  
  const splitBtn = document.querySelector('#splitBtn')
    splitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      splitting();
  })
  
  document.querySelector('#resetBtn').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('form').reset();
    document.querySelector('#perPerson').innerHTML = "0"
  })