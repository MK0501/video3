import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrl: './thumbnail.component.css'
})
export class ThumbnailComponent {
  constructor(private router: Router) { }

 @ViewChild('v1') videoElement!: ElementRef;
  supposedCurrentTime: number = 0;

  video1:boolean = true;
  video2:boolean = true;
  video3:boolean = true;

  fn(str: string | null){
    console.log(str);
    if(str == "video1") {
      this.video1 = false;
      this.video2 = true;
      this.video3 = true;
    }
    if(str == "video2"){
      this.video2 = false;
      this.video1 = true;
      this.video3 = true;
    } 
    if(str == "video3"){
      this.video3 = false;
      this.video1 = true;
      this.video2 = true;
    }


    // Reset the player setup for the new video
    // this.router.navigateByUrl("player");
  }



 

  // ngAfterViewInit(v:HTMLVideoElement): void {
    
  //   this.setupVideoPlayer(v);
  // }

  setupVideoPlayer(v: HTMLVideoElement): void {

    // Listen for the timeupdate event, which is fired as the video plays
    v.addEventListener('timeupdate', () => {
      // Update the supposed current time only if the video is not currently seeking
      v.disablePictureInPicture = true;
      if (!v.seeking) {
        this.supposedCurrentTime = v.currentTime;
      }
    });

    // Listen for the seeking event, which is fired when the user tries to seek in the video
    v.addEventListener('seeking', () => {
      console.log("supposed time : "+ this.supposedCurrentTime);
      console.log("current time : "+ v.currentTime);
      // Calculate the difference between the current time and the supposed current time
      const delta = v.currentTime - this.supposedCurrentTime;

      // If the difference is greater than 0.01 seconds, prevent seeking
      if (delta > 0.01) {
        console.log("Seeking is disabled");
        // Set the video's current time back to the supposed current time
        v.currentTime = this.supposedCurrentTime;
      }
    });

    // Listen for the ended event, which is fired when the video playback ends
    // This is optional and only resets the state to allow for rewind
    v.addEventListener('ended', () => {
      console.log(v.id);
      this.supposedCurrentTime = 0; // Reset the supposed current time to allow for rewind
    });
  }


  selectNewVideo(v: HTMLVideoElement): void {
    // Reset the player setup for the new video
    // this.supposedCurrentTime = 0;
    this.setupVideoPlayer(v);
  }
}
  

