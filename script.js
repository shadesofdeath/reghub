function typeWriter() {
  var text = document.getElementById('animated-text');
  var words = text.innerText.split(' '); // metni kelimelere böler
  var index = 0;

  text.innerText = '';

  function animate() {
    text.innerText += words[index] + ' '; // kelimeyi yazdıktan sonra bir boşluk ekle
    index++;

    if (index === words.length) {
      return;
    }

    setTimeout(animate, 150);
  }

  animate();
}

typeWriter();
