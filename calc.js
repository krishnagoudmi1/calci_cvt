let input = document.getElementById('input');
let string = '';
let buttons = document.querySelectorAll(
  '.button,.button-operator,.button-operator1,.button-operator2',
);
Array.from(buttons).forEach(button => {
  button.addEventListener('click', e => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'RESET') {
      string = '';
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'DEL') {
      string = string.substring(0, string.length - 1);
      document.querySelector('input').value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});
