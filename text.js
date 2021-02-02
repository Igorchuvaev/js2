function regExpText() {
  let text = document.querySelector('#regExpIn').value;
  let regExpText = new RegExp("'", 'gm');
  let regExpChange = /\b\"\b/gm;
  let textNew = text.replace(regExpText, '"');
  textNew = textNew.replace(regExpChange, "'");
  document.querySelector('#regExpOut').value = textNew;
}
document.querySelector('#regExpIn').addEventListener('keyup', regExpText);
