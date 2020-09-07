import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidateUtilService } from 'src/share/common/validate-util.service';
import { ExpenseService } from './expense.service';
import { AlertService } from 'src/share/common/alert.service';
import $ from 'jquery';

declare var XLSX: any;

export class ExpenseDetail {
  expenseId: string;
  expenseDate: string;
  description: string;
  amount: string;
}

export class ExpenseDetailList {
  expenseDetailList: ExpenseDetail[] = [];
  expenseType: string;
}

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html'
})
export class ExpenseComponent implements OnInit {

  txtHeader: string;
  formControl;
  expenseDetailList: ExpenseDetailList = new ExpenseDetailList();
  exepnseDetail: ExpenseDetail = new ExpenseDetail();

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private validateUtil: ValidateUtilService,
    private expenseService: ExpenseService,
    private alertService: AlertService
    ) { }

  ngOnInit() {
    this.formControl = this.formBuilder.group({
      description: [''],
      amount: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
    this.activatedRoute.data.subscribe(data => {
      this.txtHeader = data.page;
      this.expenseDetailList.expenseType = data.page;
      this.getExpenseList();
    });
  }

  openUploadFile() {
    $('#fileImport').trigger('click');
  }

  uploadFile(e) {
    console.log(e.target.files[0]);
    // Create A File Reader HTML5
    const oFile = e.target.files[0];
    const sFilename = oFile.name;
    const reader = new FileReader();

    // Ready The Event For When A File Gets Selected
    reader.onload = function () {
      const data = reader.result;
      const wb = XLSX.read(data, { type: 'binary' });

      wb.SheetNames.forEach(function (sheetName) {
        // Obtain The Current Row As CSV
        // const sCSV = XLSX.utils.make_csv(wb.Sheets[sheetName]);
        const oJS = XLSX.utils.sheet_to_row_object_array(wb.Sheets[sheetName]);

        // $('#my_file_output').html(sCSV);
        console.log(oJS);
      });
    };

    // Tell JS To Start Reading The File.. You could delay this if desired
    reader.readAsBinaryString(oFile);
  }

  addExpenseList() {
    const currentDate = new Date();
    this.exepnseDetail = {
      expenseId: '',
      expenseDate: new Date().getTime().toString(),
      description: this.formControl.controls.description.value,
      amount: this.formControl.controls.amount.value
    };

    this.expenseDetailList.expenseDetailList.push(this.exepnseDetail);
    this.formControl.reset();
  }

  save() {
    this.expenseService.save(this.expenseDetailList).subscribe(
      result => {
        if (result.status === 200) {
          this.alertService.alertSuccess();
        }
      });
  }

  getExpenseList() {
    const param = {
      expenseType: this.expenseDetailList.expenseType,
      expenseDate: new Date().getTime()
    };
    this.expenseService.getExpenseList(param).subscribe(
      result => {
        if (result.status === 200) {
          this.expenseDetailList.expenseDetailList = result.content;
        }
      }
    );
  }

}
