import { Component, OnInit, Input } from '@angular/core';
import $ from 'jquery';
import { ActivatedRoute } from '@angular/router';

declare var XLSX: any;

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html'
})
export class ExpenseComponent implements OnInit {

  txtHeader;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.txtHeader = data.page;
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

}
