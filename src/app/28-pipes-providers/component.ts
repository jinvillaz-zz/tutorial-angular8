import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FileSizePipe } from './filesize.pipe';

interface File {
  name: string;
  size: number;
  type: string;
}
interface CustomFile {
  name: string;
  size: string;
  type: string;
}

@Component({
  selector: 'app-27',
  template: `
    <div class="main-container">
      <div *ngFor="let file of mappedFiles">
        <p>{{ file.name }}</p>
        <p>{{ file.size }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [FileSizePipe]
})
export class AppComponent implements OnInit {
  files: File[];
  mappedFiles: CustomFile[];

  constructor(private fileSizePipe: FileSizePipe) {
  }
  ngOnInit(): void {
    this.files = [
      { name: 'logo.svg', size: 2120109, type: 'image/svg' },
      { name: 'banner.jpg', size: 18029, type: 'image/jpg' },
      { name: 'background.png', size: 1784562, type: 'image/png' }
    ];
    this.mappedFiles = this.files.map(file => {
      return {
        name: file.name,
        type: file.type,
        size: this.fileSizePipe.transform(file.size, 'mb')
      }
    });
  }
}
