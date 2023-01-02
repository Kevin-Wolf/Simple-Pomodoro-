const pomodoro = {
  started: false,
  minutes: 25,
  seconds: 0,
  interval: null,
  
  start() {
    this.interval = setInterval(() => {
      this.seconds--;
      if (this.seconds < 0) {
        this.minutes--;
        this.seconds = 59;
      }
      
      if (this.minutes < 0) {
        this.reset();
      }
      
      this.displayTime();
    }, 1000);
    
    this.started = true;
  },
  
  pause() {
    clearInterval(this.interval);
    this.started = false;
  },
  
  reset() {
    this.minutes = 25;
    this.seconds = 0;
    this.displayTime();
    this.pause();
  },
  
  displayTime() {
    const minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
    const seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;
    console.log(minutes + ":" + seconds);
  }
}

//This Pomodoro timer has a start() function that begins the countdown, a pause() function that pauses the timer, a reset() function that resets the timer back to 25 minutes, and a displayTime() function that displays the current time in the console.

//You can use this Pomodoro timer by calling the various functions. For example, you can start the timer by calling pomodoro.start(), pause the timer by calling pomodoro.pause(), and reset the timer by calling pomodoro.reset().