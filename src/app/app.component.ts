import { Component } from '@angular/core';
import { UtilsService } from 'projects/ottimizza/utils/src/public-api';
import { DateUtils } from 'projects/ottimizza/utils/src/lib/date.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ottimizza';

  constructor(private dateUtil: DateUtils) {
    console.log(this.dateUtil.dateToString())
  }
}
