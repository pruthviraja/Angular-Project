import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {
  title = 'doorDash-chatApp';
  constructor(private route: ActivatedRoute) {}


  ngOnInit() {
    this.route.paramMap.subscribe( (params) => {
      console.log(`params : ${JSON.stringify(params)}`);
      this.title = params.get('title');
    });
  }

}
