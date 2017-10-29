document.addEventListener('DOMContentLoaded', function(event) {
  
  var button = document.getElementById('btnGetCode');
  var buttonCopyCode = document.getElementById('btnCopyCode');
  
  
  var clipboard = new Clipboard(buttonCopyCode);
  clipboard.on('success', e => {
    new Noty({
      type: 'success',
      layout: 'topRight',
      text: 'Copied to clipboard!'
    }).show();
  });
  clipboard.on('error', function(e) {
    console.log(e);
  });
  
  button.addEventListener('click', function () {
    buttonCopyCode.style.display = 'block';
    
    var message = document.getElementById('message').value;
    var numbers = message.split('').map(c => c.charCodeAt(0));
  
    // var numbers = numbers.map(function (b) { return String.fromCharCode(b); });
    
    
    var numbersStringified = JSON.stringify(numbers);
    
    let code = `var word = ${numbersStringified}.map(b => String.fromCharCode(b)).join('');
  
    for(var i = 0; i<5; i++) setTimeout(() => alert(word));`;
    
    
    document.getElementById('code').textContent = code;
  
  });
});

