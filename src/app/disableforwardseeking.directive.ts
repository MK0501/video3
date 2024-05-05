import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableforwardseeking]'
})
export class DisableforwardseekingDirective {

  private previousTime = 0;

  constructor() { }

  // @HostListener('timeUpdate',['$event'])
  // onPlaying(event: Event){
  //   console.log("on playing")
  //   const video = event.target as HTMLVideoElement;
  //   console.log('Previous Time:', this.previousTime);
  //   console.log('Current Time:', video.currentTime);
  //   if (!video.seeking) {
  //     this.previousTime = video.currentTime;
  //   } 
  // }

  // @HostListener('seeking', ['$event'])
  // onSeeking(event: Event) {
  //   const video = event.target as HTMLVideoElement;
  //   console.log('Previous Time:', this.previousTime);
  //   console.log('Current Time:', video.currentTime);
    
  //   if (video.currentTime > this.previousTime) {
  //     video.currentTime = this.previousTime;
  //   } 
  //   else {
  //     this.previousTime = video.currentTime;
  //   }
  // }


  

}
