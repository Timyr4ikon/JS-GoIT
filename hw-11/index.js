// const days = Math.floor(time / (1000 * 60 * 60 * 24));


class CountdownTimer{
    constructor(obj){
        this.selector = obj.selector;
        this.targetDate = obj.targetDate;
        this.fun = function(){
            const currentDate = new Date();
            const time = this.targetDate - currentDate;
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((time % (1000 * 60)) / 1000);
            const timerDays= document.querySelector('span[data-value="days"]');
            const timerHours= document.querySelector('span[data-value="hours"]');
            const timerMins= document.querySelector('span[data-value="mins"]');
            const timerSecs= document.querySelector('span[data-value="secs"]');
            if((days === 0 || days <0)  && (hours === 0|| hours < 0) && (mins === 0 || mins <0) && (secs === 0 || secs < 0)){
                timerSecs.textContent = '00';
                clearInterval(this.promise);
            }
            else{
                timerDays.textContent = days <10 ? `0${days}` : days ;
                timerHours.textContent = hours <10 ? `0${hours}` : hours;
                timerMins.textContent = mins <10 ? `0${mins}` : mins ;
                timerSecs.textContent = secs < 10 ? `0${secs}` : secs;
            }
            
            
        }
        this.fun();
        this.promise = setInterval(() => {
                this.fun();
            },1000);
    }
   
}

 new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('July 17 , 2020, 15:12:20'),
  });
  

