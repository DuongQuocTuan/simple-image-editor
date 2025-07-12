import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-get-device-info',
  imports: [],
  template: `<p>Viewport size: {{ width }}px x {{ height }}px</p>
    <p>Device Pixel Ratio: {{ devicePixelRatio }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetDeviceInfoComponent implements OnInit {
  width!: number;
  height!: number;
  devicePixelRatio!: number;

  ngOnInit(): void {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.devicePixelRatio = window.devicePixelRatio;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.width = (event.target as Window).innerWidth;
    this.height = (event.target as Window).innerHeight;
  }
}
