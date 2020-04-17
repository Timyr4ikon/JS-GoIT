const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

 const startButton = document.querySelector('button[data-action="start"]');
 const stopButton = document.querySelector('button[data-action="stop"]');
  let isActive = false;
  let timerId = null;
  const startChangeBodyBackground = function(){
        if(isActive){
            return;
        }      
        isActive = true;
        timerId = setInterval(() => {
        document.body.style.background=colors[randomIntegerFromInterval(0,colors.length)];
        },1000) 
  }
  
  const stopChangeBodyBackground = function(){
      clearInterval(timerId);
      isActive = false;
  }
 startButton.addEventListener('click',startChangeBodyBackground);
 stopButton.addEventListener('click',stopChangeBodyBackground);


 
