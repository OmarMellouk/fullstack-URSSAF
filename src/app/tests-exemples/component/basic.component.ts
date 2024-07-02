import { Component } from '@angular/core';
import { BasicService } from '../services/basic.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: []
})
export class BasicComponent {

  private aValue: string;

  constructor(private basicService: BasicService) {}

}
