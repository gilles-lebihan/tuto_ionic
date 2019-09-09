import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import {Router, NavigationExtras} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-withId',
  templateUrl: './withId.component.html',
  styleUrls: ['./withId.component.scss'],
})
export class WithIdComponent implements OnInit {
  public id: string;
  public title: string;
  constructor(private route: ActivatedRoute,
              public loadingController: LoadingController,
              public http: HttpClient,
              public router: Router)
  {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log('GLB constructor withId name:' + this.id);
    from(this.presentLoading())
    .subscribe(() => {
      this.http.get("https://jsonplaceholder.typicode.com/todos/"+this.id) 
      .subscribe(
        (data) => {
          console.log(data);
          this.title = data.title;
          console.log('GLB TITLE:' + this.title);
        },
        (error) => {
          console.log('GLB ERROR')
          console.log(error);
        }
      )
//      .add(() => this.loading.dismiss());
      .add(() => this.dismissLoading());
    });
  }

  private async presentLoading(): Promise<any> {
    const loading = await this.loadingController.create({
      message: 'Please wait ...',
    });
    return await loading.present();
  }

  private async dismissLoading(): Promise<any> {
    // this.isLoading = false;
    return await this.loadingController.dismiss().then(() => 
    {
      let navigationExtras: NavigationExtras = {
        queryParams: {
            'title': this.title,
        }
      };
      console.log('dismissed');
      this.router.navigate(['aboutus'], navigationExtras);
    });
  }
}
