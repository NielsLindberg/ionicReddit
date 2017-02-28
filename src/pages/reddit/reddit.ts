import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'reddit',
  templateUrl: 'reddit.html'
})
export class RedditPage {
  items: any;
  constructor(public navCtrl: NavController, private redditService: RedditService) {

  }

  ngOnInit() {
    this.getPosts('sports', 10);
  }

  getPosts(category, limit) {
    this.redditService.getPosts(category, limit).subscribe(response => {
      this.items = response.data.children;
    });
  }

  viewItem(item){
    this.navCtrl.push(DetailsPage, {
      item:item
    });
  }
}
