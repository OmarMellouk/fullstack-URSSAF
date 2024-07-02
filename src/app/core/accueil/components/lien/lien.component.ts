import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '@app/app-config/app-config.service';

@Component({
  selector: 'app-lien',
  templateUrl: './lien.component.html',
  styleUrls: ['./lien.component.scss']

})
export class LienComponent implements OnInit {

  blocks = [];

  constructor(private config: AppConfigService) {}

  ngOnInit(): void {
    this.blocks = this.config.settings.liens.blocs;
  }
}
