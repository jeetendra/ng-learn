import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { filter, switchMap, map } from "rxjs/operators";

export interface UserMessage {
  id: number;
  name: string;
  message: string;
}

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.css"]
})
export class TabsComponent implements OnInit {
  tabs: Set<UserMessage>;
  message: UserMessage = {
    id: 0,
    name: "Anon",
    message: "Namaste"
  };

  private url = "http://localhost:4321/api/messages";
  constructor(private http: HttpClient, private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {

    this._activatedRoute.params.pipe(
      map( data => !!data.id ? '/' + data.id : '' ),
      switchMap(url => {
        return this.http.get<UserMessage[]>(this.url+url)
      })
    ).subscribe(data => {
      console.log(data);
      this.tabs = new Set(data);
    });    
  }

  addTab() {
    if (!(this.message.name && this.message.message)) return;
    
    this.http.post(this.url, this.message).subscribe();
    this.message.name = "";
    this.message.message = '';
  }

  removeTab(tab: UserMessage) {
    this.tabs.delete(tab);
  }
}
