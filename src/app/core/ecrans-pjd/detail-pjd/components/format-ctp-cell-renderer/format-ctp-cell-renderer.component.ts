import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-format-ctp-cell-renderer',
  templateUrl: './format-ctp-cell-renderer.component.html',
  styleUrls: ['./format-ctp-cell-renderer.component.scss']
})
export class FormatCtpCellRendererComponent implements ICellRendererAngularComp {

  value: string;

  agInit(params: ICellRendererParams): void {
    this.value = params.value;
  }

  refresh(): boolean {
    return false;
  }

}
