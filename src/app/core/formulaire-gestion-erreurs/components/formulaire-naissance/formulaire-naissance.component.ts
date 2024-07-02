import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DateUtilsService } from '../../services/date-utils.service';

@Component({
  selector: 'app-formulaire-naissance',
  templateUrl: './formulaire-naissance.component.html'
})
export class FormulaireNaissanceComponent implements OnInit, OnDestroy {

  @Input() isEditing: boolean;
  @Input() form: FormGroup;

  dateDeNaissanceToDisplay: string;
  labelWidth: number = 226;
  subscription: Subscription;

  constructor(private dateUtilsService: DateUtilsService) {}

  ngOnInit(): void {
    this.dateDeNaissanceToDisplay = this.dateUtilsService.getDateToDisplay(this.form.getRawValue().dateDeNaissance);

    this.subscription = this.form.valueChanges.pipe(debounceTime(300)).subscribe((change) => {
      this.dateDeNaissanceToDisplay = this.dateUtilsService.getDateToDisplay(change.dateDeNaissance);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
