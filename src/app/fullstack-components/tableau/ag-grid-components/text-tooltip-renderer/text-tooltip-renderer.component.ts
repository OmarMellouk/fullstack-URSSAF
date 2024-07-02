import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { TooltipsService } from '@app/fullstack-components/utils/tooltips/tooltips.service';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { TableauService } from '../../services/tableau.service';

@Component({
  selector: 'app-text-tooltip-renderer',
  templateUrl: './text-tooltip-renderer.component.html',
  styleUrls: ['./text-tooltip-renderer.component.scss']
})
export class TextTooltipRendererComponent implements ICellRendererAngularComp, OnDestroy {

  @ViewChild('textElement') textElement: ElementRef;

  text: string;
  enableTooltip = false;
  params: ICellRendererParams;
  checkTooltipDisplayFn;

  constructor(private tableauService: TableauService, private tooltipsService: TooltipsService) {}

  agInit(params: ICellRendererParams): void {
    this.text = params.valueFormatted || params.value;
    this.params = params;
    // Écoute le resize de la grille ou d'une colonne
    this.checkTooltipDisplayFn = this.tableauService.debounce(this.checkTooltipDisplay.bind(this), 300);
    this.params.api.addEventListener('gridOrColumnResized', this.checkTooltipDisplayFn);
  }

  /**
   * Affiche un tooltip si la valeur est trop longue pour la casse
   */
  checkTooltipDisplay(): void {
    this.enableTooltip = this.tooltipsService.shouldDisplayTooltips(this.textElement);
  }

  refresh(): boolean {
    return false;
  }

  ngOnDestroy(): void {
    this.params.api.removeEventListener('gridOrColumnResized', this.checkTooltipDisplayFn);
  }
}
