let buttons = Array.from(document.querySelectorAll('.btn'));

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let inpDisplay = document.querySelector('input');
    let string = e.target.innerHTML;

    if (string === '=') {
      // Perform the evaluation here
      let result = eval(inpDisplay.value);
      inpDisplay.value = result;
    } 
    else if(string == 'C'){
        inpDisplay.value = '';
    }
    else if(string == '←'){
        inpDisplay.value = inpDisplay.value.slice(0, -1);
    }
    else {
      inpDisplay.value += string;
    }
  });
});
