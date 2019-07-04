  let progressBar = document.querySelectorAll('.progress-bar');
  
  const time = 1500;
  
  function calculateTime(time, dataCount) {
    return time / dataCount;
  }
  
function fillSkillBars(){

  progressBar.forEach(i => {

    let count = 0;
      
    let label = i.children[0];
    let line = i.children[1];
    
    let dataCount = parseInt(label.getAttribute('data-count'));
    
    let lineCount = line.children[0];
    
    // 2 ways to get the width of class .line
    // Solution 1: return a string '600px'
    // let value = window.getComputedStyle(line).width.substr(0, window.getComputedStyle(line).width.length - 2);
    // Solution 2: return the value of width 600
    // let value = line.offsetWidth;
    if($(i).visible()){
    
    let runTime = calculateTime(time, dataCount); 

    if(lineCount.style.width == 0){
    
      let animationLineCount = setInterval(_ => {
        if (count < dataCount) {
          count++;
          
          // label.innerHTML = count + '%';
          lineCount.style.width = count + '%';
          
          if (count < 15) {
            lineCount.style.boxShadow = '0 0 10px 10px #f00';
            lineCount.style.background = '#f00';          
          } else if (count < 30) {
            lineCount.style.boxShadow = '0 0 10px 10px #f07100';
            lineCount.style.background = '#f07100';
          } else if (count > 70) {
            lineCount.style.boxShadow = '0 0 10px 10px #0f0';
            lineCount.style.background = '#0f0';
          } else {
            lineCount.style.boxShadow = '0 0 10px 10px #00a3f3';
            lineCount.style.background = '#00a3fe';
          }
        }
      }, runTime);
    }
  }
  });
}

$(document).ready(function() {
   setInterval(fillSkillBars,500);
}); 