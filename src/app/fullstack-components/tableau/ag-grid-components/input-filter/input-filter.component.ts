import { OnDestroy, OnInit, Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFloatingFilterAngularComp } from 'ag-grid-angular';
import { IFloatingFilterParams } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.scss']
})
export class InputFilterComponent implements OnInit, OnDestroy, IFloatingFilterAngularComp {

  params: IFloatingFilterParams;
  form: FormGroup;
  subscription: Subscription;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const initialeValue = this.params.currentParentModel() ? this.params.currentParentModel().filter : '';

    // Formulaire pour l'input
    this.form = this.fb.group({
      input: [initialeValue, null]
    });

    // Lorsque la valeur change
    this.subscription = this.form.valueChanges.pipe(debounceTime(300)).subscribe(() => {
      const value: string = this.form.getRawValue().input;

      if (!value) {
        // Vide le filtre si il n'y a pas de valeur
        this.params.parentFilterInstance((instance) => {
          instance.onFloatingFilterChanged(null, null);
        });
        return;
      }

      // Met à jour le filtre
      this.params.parentFilterInstance((instance) => {
        instance.onFloatingFilterChanged('contains', value);
      });
    });
  }

  agInit(params: IFloatingFilterParams): void {
    this.params = params;
  }

  /**
   * Met à jour le formulaire avec la nouvelle valeur
   */
  onParentModelChanged(parentModel: any): void {
    this.form.get('input').setValue(parentModel ? parentModel.filter : '');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
