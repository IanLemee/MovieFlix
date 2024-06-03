// banner.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  slides: any[] = new Array(5).fill({ id: -1, src: '', alt: '' });
  activeIndex = 0;
  autoChangeTimeout: any;
  showTrailerTimeout: any;

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/images/banners/avengers.svg',
      alt: 'Avengers banner'
    };
    this.slides[1] = {
      src: './assets/images/banners/tenet.svg',
      alt: 'Tenet banner'
    };
    this.slides[2] = {
      src: './assets/images/banners/spider-man.svg',
      alt: 'Spider-Man banner'
    };
    this.slides[3] = {
      src: './assets/images/banners/knives-out.svg',
      alt: 'Knives Out banner'
    };
    this.slides[4] = {
      src: './assets/images/banners/guardians-of-the-galaxy.svg',
      alt: 'Guardians of The Galaxy banner'
    };

    // Start the timeout to change the image every 5000 milliseconds (5 seconds)
    this.startAutoChange();
  }

  onItemChange(index: number): void {
    this.activeIndex = index;
    console.log('Active Index:', this.activeIndex);

    // Restart the auto change timeout when a button is clicked
    this.restartAutoChange();

    // Start a timeout to show the trailer after 5 seconds
    this.startShowTrailerTimeout();
  }

  private startShowTrailerTimeout(): void {
    // Clear the existing timeout (if any)
    clearTimeout(this.showTrailerTimeout);

    // Start a new timeout to show the trailer after 5 seconds
    this.showTrailerTimeout = setTimeout(() => {
      this.showTrailer();
    }, 5000);
  }

  private showTrailer(): void {
    // Pause the auto change timeout while showing the trailer
    clearTimeout(this.autoChangeTimeout);

    // Get the path of the corresponding video for the current activeIndex
    const videoPath = `assets/videos/${this.activeIndex + 1}.mp4`;

    // Example: Open a modal with the video
    this.openVideoModal(videoPath);

    // After showing the trailer, restart the auto change timeout
    this.restartAutoChange();
  }

  private openVideoModal(videoPath: string): void {
    // Example: Open a modal with the video
    console.log('Show Trailer - Active Index:', this.activeIndex, 'Video Path:', videoPath);

    // Implement your modal logic here (e.g., use a library like ngx-bootstrap modal)
    // For now, we'll just log the video path to the console.
  }

  private startAutoChange(): void {
    this.autoChangeTimeout = setTimeout(() => {
      // Increment the active index or reset to 0 if it reaches the end
      this.activeIndex = (this.activeIndex + 1) % this.slides.length;
      console.log('Auto Change - Active Index:', this.activeIndex);

      // Call the function recursively to keep changing the image
      this.startAutoChange();
    }, 5000); // Change image every 5000 milliseconds (5 seconds)
  }

  private restartAutoChange(): void {
    // Clear the existing timeout and start a new one
    clearTimeout(this.autoChangeTimeout);
    this.startAutoChange();
  }
}
