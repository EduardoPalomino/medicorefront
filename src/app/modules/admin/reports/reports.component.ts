import { 
  Component 
} from '@angular/core';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'admin-reports',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './reports.component.html',
})
export class ReportsComponent {

}
