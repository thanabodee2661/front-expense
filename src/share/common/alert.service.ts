import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public alertCustom(type = null, title = '', text = '') {
    return Swal.fire({
      title: title,
      text: text,
      type: type,
      confirmButtonText: 'ตกลง'
    });
  }

  public alertSuccess() {
    return Swal.fire({
      title: 'ทำรายการสำเร็จ',
      text: '',
      type: 'success',
      confirmButtonText: 'ตกลง'
    });
  }

  public alertWarning() {
    return Swal.fire({
      title: 'เเจ้งเตือน',
      text: '',
      type: 'success',
      confirmButtonText: 'ตกลง'
    });
  }

  public alertErrorStatus500() {
    Swal.fire({
      title: 'พบข้อผิดพลาด!!!',
      text: 'ข้อผิดพลาดบางอย่างเกิดขึ้น',
      type: 'error',
      confirmButtonText: 'ตกลง'
    });
  }

  public alertErrorStatus401() {
    Swal.fire({
      title: 'พบข้อผิดพลาด!!!',
      text: 'คุณไม่ได้รับอนุญาตให้เข้าถึงข้อมูล',
      type: 'error',
      confirmButtonText: 'ตกลง'
    });
  }

  public alertErrorStatus403() {
    Swal.fire({
      title: 'พบข้อผิดพลาด!!!',
      text: 'คุณไม่มีสิทธิ์เข้าถึงข้อมูล',
      type: 'error',
      confirmButtonText: 'ตกลง'
    });
  }
}
