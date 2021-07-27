import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {
  string: string = Math.random().toString(36).substr(2, 5);
  source = interval(3000);
  class = 'default';
  zero = 'hidden';

  subscribe = this.source.subscribe(string => this.getString());

  getString(){
    this.string = Math.random().toString(36).substr(2, 5);
    this.zero = 'hidden';

    if (this.string.indexOf('0') > -1)
    {
      this.class = 'hidden';
      this.zero = '';
    } else if (this.isPalindrome(this.string)) {
      this.class = 'palindrome';
    } else if (! /^[a-zA-Z]+$/.test(this.string)) {
      this.class = 'blue';
    } else {
      this.class = 'default';
    }
  }

  isPalindrome(str: string) {
    var strReverse = str.split('').reverse().join('');
    return strReverse == str;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
