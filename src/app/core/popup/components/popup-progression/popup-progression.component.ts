import { Component, OnDestroy } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-popup-progression',
  templateUrl: './popup-progression.component.html'
})
export class PopupProgressionComponent implements OnDestroy {

  modalRef: NgbModalRef;
  progressPercentage = 0;

  timerProgress: Observable<number>;
  progressSubscription: Subscription;

  constructor(private modalService: NgbModal) { }

  /**
   * Ouvre la popup
   */
  open(popup): void {
    this.modalRef = this.modalService.open(popup);

    // Progression simulée
    this.timerProgress = interval(100);
    this.progressSubscription = this.timerProgress.subscribe(value => {
      if (value > 100) {
        setTimeout(() => {
          this.modalRef.dismiss();
        }, 500);
      } else {
        this.progressPercentage = value;
      }
    });

    // Lors de la fermeture de la popup
    this.modalRef.dismissed.pipe(take(1)).subscribe(() => {
      this.progressSubscription.unsubscribe();
      this.progressPercentage = 0;
    });
  }

  ngOnDestroy(): void {
    this.progressSubscription?.unsubscribe();
  }
}
