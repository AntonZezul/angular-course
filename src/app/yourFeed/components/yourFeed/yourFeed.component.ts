import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'ac-your-feed',
  templateUrl: './yourFeed.component.html',
  styleUrls: ['./yourFeed.component.scss'],
})
export class YourFeedComponent implements OnInit {
  apiUrl: string = '/articles/feed'
  constructor() {}

  ngOnInit(): void {}
}
