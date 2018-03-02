import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface User {
  name: string,
  age: number
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  tabs: Set<User>;
  name:string = 'Hello';
  age:number = 18;
  private url:string = "http://localhost:4321";
  constructor(private http: HttpClient) { }




  ngOnInit() {

    const options = {
      observe: "response", // to display the full response
      responseType: "json"
    };

    this.http.get<User[]>(this.url,   )
    .subscribe((data) => {
      console.log(data);
      this.tabs = new Set(data);
    })
  }

  addTab() {
    if(!(this.name && this.age)) return;
    this.tabs.add({name: this.name, age:this.age});
    this.name = "";
    this.age = 0;
  }

  removeTab(tab:User) {
    this.tabs.delete(tab);
  }

}
