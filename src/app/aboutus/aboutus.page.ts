import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

  public title: string;

  public constructor(private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
          this.title = params["title"];
      });
  }

  ngOnInit() {
  }

}
