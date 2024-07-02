import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipsService } from '@app/fullstack-components/utils/tooltips/tooltips.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-champ-de-saisie-seul',
  templateUrl: './champ-de-saisie-seul.component.html'
})
export class ChampDeSaisieSeulComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('inputElement') inputElement: ElementRef;

 /**
   * Control du formulaire réactif pour la valeur voulue
   */
  @Input() form: FormControl;
  /**
   * Index pour éviter des duplications d'id/for
   */
  @Input() index: number;
  /**
   * En cas d'erreur sur le formulaire réactif, affiche une erreur plutôt qu'un warning
   * Champ optionnel, peut être laissé à vide pour afficher un warning
   */
  @Input() isError: boolean;
  /**
   * Placeholder du champs
   * Champ optionnel
   */
  @Input() placeholder = '';

  @Input() unit: string;

  enableTooltip = false;
  subscription: Subscription;

  constructor(private tooltipsService: TooltipsService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.subscription = this.form.valueChanges.subscribe(() => {
      // Affiche un tooltips si le texte est trop long
      this.enableTooltip = this.tooltipsService.shouldDisplayTooltips(this.inputElement);
    });
  }

  ngAfterViewInit(): void {
    // Affiche un tooltips si le texte est trop long
    this.enableTooltip = this.tooltipsService.shouldDisplayTooltips(this.inputElement);

    if (this.enableTooltip) {
      // Force la détection de changement pour éviter l'erreur : ExpressionChangedAfterItHasBeenCheckedError
      this.cd.detectChanges();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
