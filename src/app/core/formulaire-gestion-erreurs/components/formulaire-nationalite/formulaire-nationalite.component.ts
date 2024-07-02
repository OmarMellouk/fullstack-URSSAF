import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DateUtilsService } from '../../services/date-utils.service';

@Component({
  selector: 'app-formulaire-nationalite',
  templateUrl: './formulaire-nationalite.component.html'
})
export class FormulaireNationaliteComponent implements OnInit, OnDestroy {

  @Input() isEditing: boolean;
  @Input() form: FormGroup;
  
  dateToDisplay: string;
  labelWidth: number = 230;
  subscription: Subscription;

  constructor(private dateUtilsService: DateUtilsService) {}

  ngOnInit(): void {
    this.dateToDisplay = this.dateUtilsService.getDateToDisplay(this.form.getRawValue().dateDeFinValiditeDuTitreDeSejour);

    this.subscription = this.form.valueChanges.pipe(debounceTime(300)).subscribe((change) => {
      this.dateToDisplay = this.dateUtilsService.getDateToDisplay(change.dateDeFinValiditeDuTitreDeSejour);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
