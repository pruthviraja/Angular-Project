import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
//import { APP_BASE_HERE, H}
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatLoginComponent } from './chat-login/chat-login.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: ChatLoginComponent},
  {path: 'chatBox', component: ChatBoxComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload', enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


