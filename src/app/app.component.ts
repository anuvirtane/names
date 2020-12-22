import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs-compat/operator/elementAt';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: 'Names';
  nameObjectsList: any = [];
  searchString: string = '';

  soughtName: string;
  soughtAmount: number;
  tableVisible: boolean = false;

  amount: number = 0;
  amountBtnClicked: boolean = false;

  constructor(private nameService: DataService) {}

  ngOnInit() {
    this.nameService.getAllObjects().subscribe(
      data => {
      this.nameObjectsList = data;
      console.log(this.nameObjectsList.names);
       /* this.nameObjectsList.concat(...data);
        console.log(`this is the namelist: ${this.nameObjectsList}`);*/
      }, error => {
      console.log('httperror:');
      console.log(error);
      }
    );
  }

  viewAmount() {
    this.amount= 0;
    this.nameObjectsList.names.forEach(element => {
      this.amount += parseInt(element.amount);

  });
this.tableVisible= false;
this.amountBtnClicked = true;
}



 sortByAmount() {
  this.nameObjectsList.names.sort(function(a, b) {
    return parseInt(b.amount) - parseInt(a.amount);
});
this.tableVisible = true;
this.amountBtnClicked = false;
}

sortByName() {

  this.nameObjectsList.names.sort(function(a, b) {
    if (a.name>b.name)
    return 1;
    else if (a.name<b.name)
    return -1;
    return 0;
});
this.tableVisible = true;
this.amountBtnClicked = false;
}



onSearch(event: any) {
  this.tableVisible= false;
  this.searchString = (<HTMLInputElement>event.target).value;
  this.nameObjectsList.names.forEach(element => {
    if(element.name===(this.searchString)) {


      this.soughtName = element.name;
      this.soughtAmount = element.amount;


    }

  });

    this.amountBtnClicked = false;
    }


  }





