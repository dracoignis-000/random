function randomize() {
    var input = document.getElementById('input').value;
    var options = input.split(',').map(function(item) {
      return item.trim();
    });
  
    var randomIndex = Math.floor(Math.random() * options.length);
    var randomOption = options[randomIndex];
  
    document.getElementById('output').textContent = 'Random Option: ' + randomOption;
  }
  