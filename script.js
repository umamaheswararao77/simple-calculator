function ac(){
    document.getElementById('res').value = "";
}

function show(input){
  document.getElementById('res').value += input;
}

function cal(){

  let output = eval(document.getElementById('res').value);

  document.getElementById('res').value=output;

}


