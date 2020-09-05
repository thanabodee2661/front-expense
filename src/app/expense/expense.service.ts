import { Injectable } from '@angular/core';
import { service } from '../../app/service-center';
import { CommonService } from 'src/share/common/common.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private urlSaveExpense = service.expensePath + service.saveExpenseService;

  constructor(private commonService: CommonService) { }

  save(param) {
    return this.commonService.post(this.urlSaveExpense, param);
  }
}
