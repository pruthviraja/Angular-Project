import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
//import { APP_BASE_HERE, H}
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'chatBox', component: ChatBoxComponent},
  //{path: '', redirectTo: '', pathMatch: 'full'},
]
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: 'reload', enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


