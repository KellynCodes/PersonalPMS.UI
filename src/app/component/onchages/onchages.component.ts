import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'NgDocs-onchages',
  templateUrl: './onchages.component.html',
  styleUrls: ['./onchages.component.css'],
})
export class OnchagesComponent implements OnChanges {
  changeLog: string[] = [];
  @Input() hero: string[] = ['kelly', 'kelechi amos', 'kellyncodes'];
  @Input() power = '';
  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(
        `${propName}: currentValue = ${cur}, previousValue = ${prev}`
      );
    }
  }
}
