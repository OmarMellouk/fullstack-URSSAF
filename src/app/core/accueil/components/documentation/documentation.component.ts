import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppConfigService } from '@app/app-config/app-config.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  projets = [];

  form: FormGroup;
  labelWidth = 138;

  constructor(private config: AppConfigService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.projets = this.config.settings.documentations.projets;

    this.form = this.fb.group({
      fullstack: [''],
      integrationContinue: [''],
      kafka: [''],
    });
  }

  rechercheDoc(sujet: string, name: string) {
    this.projets.forEach((value) => {
      if (value.name === name) {
        window.open(value.urlsearch + sujet);
      }
    });
  }


}
