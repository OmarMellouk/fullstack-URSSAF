import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListeDeroulanteService } from '../../../services/liste-deroulante.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-liste-deroulante-hierarchisee-form',
  templateUrl: './liste-deroulante-hierarchisee-form.component.html'
})
export class ListeDeroulanteHierarchiseeFormComponent implements OnInit, OnDestroy {

  @Input() form: FormGroup;
  @Input() key: string;
  @Input() parentIndex: number;

  groupForm: FormGroup;
  subscriptions: Subscription[] = [];
  isCollapsed = false;

  constructor(private fb: FormBuilder, private listeDeroulanteService: ListeDeroulanteService) { }

  ngOnInit(): void {
    // Formulaire du groupe
    this.groupForm = this.fb.group({
      selectAll: [false, null]
    });

    // Met à jour les valeurs lorsque 'Tout sélectionner / Tout désélectionner' est coché
    this.subscriptions.push(this.groupForm.valueChanges.subscribe(() => {
      this.listeDeroulanteService.selectAll(this.groupForm, this.form, false);
    }));

    // Met à jour la checkbox selectAll du formulaire groupForm lorsque des valeurs sont sélectionnées
    this.subscriptions.push(this.form.valueChanges.subscribe(() => {
      this.listeDeroulanteService.shouldSelectAll(this.groupForm, this.form);
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
