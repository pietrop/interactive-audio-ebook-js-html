const htmlWrapper = (data) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Interactive Podcast</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Interactive Podcast">
  <meta name="Test" content="Test">
  <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" 
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css" 
    integrity="sha256-piqEf7Ap7CMps8krDQsSOTZgF+MU/0MPyPW2enj5I40=" 
    crossorigin="anonymous" />
  <script src="js/loadFont.js"></script>
</head>
${data}
<script type="text/javascript">
const articleEl = document.querySelector('article');
const audioEl = document.querySelector('audio');
const wordsEl = document.querySelectorAll('.words');

audioEl.ontimeupdate = function(e){
  document.querySelectorAll('.words').forEach((word)=>{
    if(word.dataset.start < e.target.currentTime){
      word.classList.add('before')
      word.classList.remove('after')
    }
    else{
      word.classList.remove('before')
      word.classList.add('after')
    }
   })
}
articleEl.onclick = function(e){
  if(e.target.classList.contains('words')){
    audioEl.currentTime = e.target.dataset.start;
    audioEl.play();
  }
}    
</script>
<body>
</body>
</html>`;

module.exports = htmlWrapper;