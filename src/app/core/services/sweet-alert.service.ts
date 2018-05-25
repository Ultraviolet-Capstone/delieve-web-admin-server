import { Injectable, Inject } from '@angular/core';

// import { TranslateService } from 'app/translate';

import { SweetAlertType } from 'sweetalert2';
import swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable()
export class SweetAlertService {
  
  showSweetAlert(title: string, text: string, type: SweetAlertType) {
    return swal(title, text, type);
  }

  showLoading(title: string) {
    return swal({
      title: title,
      showCancelButton: false,
      showLoaderOnConfirm: false,
      onOpen: () => {
        swal.showLoading();
      },
      allowOutsideClick: false
    });
  }

  showWarningAlert(title: string, content: string) {
    this.showSweetAlert(title, content, 'warning');
  }

  showErrorAlert(title: string, content: string) {
    this.showSweetAlert(title, content, 'error');
  }

  showConfirmAlert(title: string, content: string, confirmText: string) {
    return swal({
      title: title,
      text: content,
      type: 'question',
      showCancelButton: true,
      confirmButtonText: confirmText,
      cancelButtonText: '취소'
    })
  }

  hideLoading() {
    setTimeout(()=> {
      swal.close();
    }, 100);
  }
}