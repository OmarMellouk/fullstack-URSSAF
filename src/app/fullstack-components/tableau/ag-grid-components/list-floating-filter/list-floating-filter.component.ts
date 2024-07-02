import { Component } from '@angular/core';
import { IFloatingFilterParams, IFloatingFilter, TextFilterModel } from 'ag-grid-community';
import { AgFrameworkComponent } from 'ag-grid-angular';
import { FormGroup, FormControl } from '@angular/forms';

export interface ListFloatingFilterChange {
  model: TextFilterModel;
}

export interface ListFloatingFilterParams extends IFloatingFilterParams {
  possibleValues: string[];
}

@Component({
  selector: 'app-list-floating-filter',
  templateUrl: './list-floating-filter.component.html',
  styleUrls: ['./list-floating-filter.component.scss']
})
export class ListFloatingFilterComponent implements IFloatingFilter,
  AgFrameworkComponent<ListFloatingFilterParams> {

  private params: ListFloatingFilterParams;
  public possibleValues: string[];

  listFilterForm: FormGroup;

  agInit(params: ListFloatingFilterParams): void {
    this.params = params;
    this.possibleValues = this.params.possibleValues;
    const initialeValue = this.params.currentParentModel() ? this.params.currentParentModel().filter : '';

    this.listFilterForm = new FormGroup({
      selectedValueFormControl: new FormControl(initialeValue)
    });
  }

  valueSelected() {
    const value = this.listFilterForm.value.selectedValueFormControl;
    this.params.parentFilterInstance((instance) => {
      instance.onFloatingFilterChanged('equals', value);
    });
  }

  /**
   * Met à jour le formulaire avec la nouvelle valeur
   */
  onParentModelChanged(parentModel: any): void {
    this.listFilterForm.get('selectedValueFormControl').setValue(parentModel ? parentModel.filter : '');
  }

}
