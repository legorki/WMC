import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-xmas',
  templateUrl: './xmas.component.html',
  styleUrls: ['./xmas.component.css'],
})
export class XmasComponent implements OnInit {
  time: Observable<number> = new Observable<number>((observer: Observer<number>) => {
    setInterval(() => observer.next(this.timeToXmas()), 1000);
  });

  constructor() {}

  ngOnInit(): void {}

  private timeToXmas(): number {
    const now = new Date();
    const christmasEve = new Date(now.getFullYear(), 11, 24); // 11 represents December
    const timeDiff = christmasEve.getTime() - now.getTime();
    return Math.floor(timeDiff / 1000); // Convert milliseconds to seconds
  }
}
