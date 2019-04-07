import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-chat-login',
  templateUrl: './chat-login.component.html',
  styleUrls: ['./chat-login.component.scss']
})
export class ChatLoginComponent implements OnInit {
  title = 'doorDash-chatApp';
  constructor(private route: ActivatedRoute) {}


  ngOnInit() {
    this.route.paramMap.subscribe( (params) => {
      console.log(`params : ${JSON.stringify(params)}`);
      this.title = params.get('title');
    });
  }

}
