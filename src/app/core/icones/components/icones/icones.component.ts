import { Component } from '@angular/core';

@Component({
  selector: 'app-icones',
  templateUrl: './icones.component.html',
  styleUrls: ['./icones.component.scss']
})
export class IconesComponent {

  icons = [
    {name: 'icon-b_account'},
    {name: 'icon-b_account_modif', paths: 2},
    {name: 'icon-b_add_compte', paths: 2},
    {name: 'icon-b_delete_compte', paths: 2},

    {name: 'icon-b_add_2_person', paths: 2},

    {name: 'icon-b_add_entreprise', paths: 2},
    {name: 'icon-b_modify_entreprise', paths: 2},

    {name: 'icon-b_document'},
    {name: 'icon-b_modify', paths: 2},
    {name: 'icon-b_add_document', paths: 2},
    {name: 'icon-b_del_document', paths: 2},
    {name: 'icon-b_double_documents'},
    {name: 'icon-b_double_modif', paths: 2},

    {name: 'icon-agent'},
    {name: 'icon-b_modify_agent', paths: 2},

    {name: 'icon-b_folder'},
    {name: 'icon-b_browse'},
    {name: 'icon-b_modify_fold', paths: 2},
    {name: 'icon-b_new_fold', paths: 2},

    {name: 'icon-b_search_doc'},
    {name: 'icon-b_detail'},
    {name: 'icon-b_import'},
    {name: 'icon-b_export'},
    {name: 'icon-b_export_csv'},
    {name: 'icon-b_export_doc'},
    {name: 'icon-b_export_excel'},
    {name: 'icon-b_export_html'},
    {name: 'icon-b_export_img'},
    {name: 'icon-b_export_pdf'},
    {name: 'icon-b_export_pjd'},
    {name: 'icon-b_export_ppt'},
    {name: 'icon-b_export_zip'},

    {name: 'icon-b_calendar'},
    {name: 'icon-b_modify_date', paths: 2},

    {name: 'icon-b_info'},
    {name: 'icon-b_previous'},
    {name: 'icon-b_next'},
    {name: 'icon-b_off'},
    {name: 'icon-b_on'},
    {name: 'icon-b_play'},
    {name: 'icon-b_pause'},

    {name: 'icon-b_valid'},
    {name: 'icon-b_valid_empty'},
    {name: 'icon-b_valid_1'},

    {name: 'icon-b_init'},
    {name: 'icon-b_suspension'},
    {name: 'icon-b_suspension_end'},
    {name: 'icon-b_historic'},

    {name: 'icon-b_cancel'},
    {name: 'icon-b_cancel_empty'},
    {name: 'icon-b_redo'},
    {name: 'icon-b_redo_empty'},

    {name: 'icon-b_star'},
    {name: 'icon-b_star_empty'},

    {name: 'icon-b_vertical_reverse'},
    {name: 'icon-b_horizontal_reverse'},

    {name: 'icon-b_download'},
    {name: 'icon-b_upload'},

    {name: 'icon-b_add_attachment'},
    {name: 'icon-b_archive'},
    {name: 'icon-b_compare'},
    {name: 'icon-b_print'},
    {name: 'icon-b_prohibite'},
    {name: 'icon-b_refresh'},
    {name: 'icon-b_save'},
    {name: 'icon-b_search'},
    {name: 'icon-b_stop'},
    {name: 'icon-b_tooltip_ad'},
    {name: 'icon-b_transmit'},

    {name: 'icon-b_delete'},
    {name: 'icon-b_close'},

    {name: 'icon-b_left_arrow'},
    {name: 'icon-b_right_arrow'},
    {name: 'icon-b_left_fleche'},
    {name: 'icon-b_right_fleche'},

    {name: 'icon-b_full_left'},
    {name: 'icon-b_fullleft'},
    {name: 'icon-b_left'},
    {name: 'icon-b_full_right'},
    {name: 'icon-b_fullright'},
    {name: 'icon-b_right'},

    {name: 'icon-b_top'},
    {name: 'icon-b_up'},
    {name: 'icon-b_bottom'},
    {name: 'icon-b_down'},

    {name: 'icon-error'},
    {name: 'icon-warning'},

    {name: 'icon-plus'},
    {name: 'icon-minus'},
    {name: 'icon-b_all_plus'},
    {name: 'icon-b_all_minus'},

    {name: 'icon-personne'},
    {name: 'icon-rendezvous'},
    {name: 'icon-sms'},
    {name: 'icon-telephone'},
    {name: 'icon-courrier_postal'},
    {name: 'icon-courriel'},
    {name: 'icon-contrainte_notifiee'},
    {name: 'icon-contrainte'}
  ];
}
