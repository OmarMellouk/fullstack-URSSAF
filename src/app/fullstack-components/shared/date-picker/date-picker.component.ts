import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, FormControl } from '@angular/forms';
import { NgbDate, NgbDateStruct, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html'
})
export class DatePickerComponent implements OnInit {

  @Input() currentDate: FormControl;
  @Input() minDate : NgbDateStruct;
  @Input() maxDate: NgbDateStruct;
  @Input() disabled = false;
  @Input() readOnly = false;

  /**
   * general error message for additional validation
   */
  @Input() isError = false;

  /**
   * custom error message when start date is bigger than end date
   */
  @Input() isStartDateBiggerThanFromDate = false;

  /**
   * Prévoit un espace pour afficher l'icône d'erreur en cas d'erreur
   */
  @Input() spaceForControl = false;

  /**
   * Message affiché en cas d'isError à true
   */
  @Input() customErrorMessage: string | {message: string}[];

  /**
   * L'input prend la largeur maximal du parent si définit sur true
   * Champ optionnel, false par défaut
   */
  @Input() fullWidth = false;

  @Output()
  dateSelect: EventEmitter<NgbDate> = new EventEmitter<NgbDate>();

  @ViewChild('d') datePicker: NgbInputDatepicker;

  dateFormGroup: FormGroup;
  isValid = true;
  isOpened = false;
  subscription: Subscription;
  array = Array;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.dateFormGroup = this.fb.group({
      currentDate: [this.currentDate.value || '', this.validateDateFormat]
    });
    this.disableDate();
    this.formatDate();
  }

  disableDate() {
    if (this.disabled) {
      this.dateFormGroup.get('currentDate').disable();
    } else {
      this.dateFormGroup.get('currentDate').enable();
    }
  }

  dateSelected($event) {
    this.currentDate.setValue($event);
    this.currentDate.markAllAsTouched();
    this.dateSelect.emit($event);
  }

  toggleCalendar(event: PointerEvent | KeyboardEvent | any) {
    if (!this.readOnly) {
      setTimeout(() => {
        event.target.focus();
      }, 10);

      this.datePicker.toggle();
    }
  }

  change(date?) {
    this.currentDate.setValue(date);
    this.currentDate.markAllAsTouched();
    this.dateSelect.emit(date);
  }

  formatDate() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.dateFormGroup.get('currentDate').valueChanges.pipe(debounceTime(300)).subscribe(val => {
      if (this.dateFormGroup.get('currentDate').invalid) {
        this.isValid = false;
        return;
      }
      this.isValid = true;
      let enteredDate = val;
      if (typeof enteredDate === 'object') {
        this.change(enteredDate);
        return;
      }
      if (enteredDate.length === 2
        || enteredDate.length === 5
      ) {
        enteredDate = enteredDate + '/';
      }
      if (enteredDate.length === 10) {
        enteredDate = enteredDate.split('/');
        const formattedDate = {
          day: enteredDate[0],
          month: enteredDate[1],
          year: enteredDate[2]
        };
        this.dateFormGroup.get('currentDate')
          .setValue(formattedDate,
            { emitEvent: false });

        this.change(formattedDate);
      }

    });
  }

  confirmDate() {
    this.formatDate();
  }

  validateDateFormat(control: AbstractControl) {
    if ((control.value === '' || !control.value) || typeof control.value !== 'string') {
      return null;
    }
    if (control.value.includes('/')) {
      const splitted = control.value.split('/');
      if (splitted && splitted.length === 3 && !isNaN(+splitted[0]) && splitted[0].length === 2
        && !isNaN(+splitted[1]) && splitted[1].length === 2
        && !isNaN(+splitted[2]) && splitted[2].length === 4
      ) {
        return null;
      }
    }
    return {error: 'entry not valid'};
  }

  getErrorMessage(): string {
    if (!this.isValid) {
      return 'Champ Invalide';
    } else if (this.isError && this.customErrorMessage) {
      return this.customErrorMessage as string;
    } else if (this.isError) {
      return 'Champ Invalide';
    } else if (this.isStartDateBiggerThanFromDate) {
      return 'La date de fin ne peut être antérieure à la date de début';
    }
  }
}
