import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'ac-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss'],
})
export class GlobalFeedComponent implements OnInit {
  apiUrl = '/articles'
  constructor() {}

  ngOnInit(): void {}
}
