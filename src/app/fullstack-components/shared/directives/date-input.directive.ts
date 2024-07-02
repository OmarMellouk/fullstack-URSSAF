import { Directive, HostListener } from '@angular/core';
import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Directive({
  selector: '[appDateInput]'
})
export class DateInputDirective {

  // Allow decimal numbers and negative values
  private regex: RegExp = new RegExp(/^-?\d+(\.\d*)?$/g);
  // Allow key codes for special events. Reflect :
  // Backspace, tab, end, home
  private specialKeys: Array<string> = [ 'Backspace', 'Tab', 'End', 'Home', '-', 'ArrowLeft', 'ArrowRight', '/', 'Enter' ];

  constructor(
    private datepicker: NgbInputDatepicker,
  ) {
    const previousToggle = this.datepicker.toggle;
    this.datepicker.toggle = () => {
      previousToggle.bind(this.datepicker)();
      if (this.datepicker.isOpen()) {
        this.swapTitles();
      }
    };
  }

  @HostListener('keydown', [ '$event' ])
  onKeyDown(event: KeyboardEvent) {
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }

    if (!String(event.key).match(this.regex) && event.key !== '/') {
      event.preventDefault();
    }
  }

  /**
   * Modifie les attributs du datepicker pour passer les valeurs en français
   * https://github.com/ng-bootstrap/ng-bootstrap/issues/2977
   */
  swapTitles(): void {
    const selectMonth = this.datepicker['_cRef'].location.nativeElement.querySelector('select[title="Select month"]');
    selectMonth.setAttribute('title', 'Sélectionnez un mois');
    selectMonth.setAttribute('aria-label', 'Sélectionnez un mois');

    const selectYear = this.datepicker['_cRef'].location.nativeElement.querySelector('select[title="Select year"]');
    selectYear.setAttribute('title', 'Sélectionnez une année');
    selectYear.setAttribute('aria-label', 'Sélectionnez une année');
  }

}
