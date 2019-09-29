function insert(num) {
  document.form.textView.value = document.form.textView.value + num;
}

function igual() {
  var result = document.form.textView.value;
  if (result) {
    document.form.textView.value = eval(document.form.textView.value);
  }
}

function limpar(){
    document.form.textView.value = "";
}

function back(){
    var valor = document.form.textView.value;
    document.form.textView.value = valor.substring(0,valor.length-1);
}