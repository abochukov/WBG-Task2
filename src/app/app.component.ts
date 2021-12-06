import { Component } from '@angular/core';
import { faChartLine, faSatellite, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wbg';
  faSearch = faSearch;
  faChartLine = faChartLine;
  faSatellite = faSatellite;

  public isCollapsed = true;
}
