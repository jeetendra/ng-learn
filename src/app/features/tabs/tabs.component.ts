import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

export interface UserMessage {
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
    name: "Anon",
    message: "Namaste"
  };

  private url = "http://localhost:4321/api/messages";
  constructor(private http: HttpClient) {}

  ngOnInit() {
    var response = this.http.get<UserMessage[]>(this.url);
    console.log(response);
    response.subscribe(data => {
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
