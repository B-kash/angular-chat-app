import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MessagesComponent} from "./messages/messages.component";

// @NgModule({
// 	imports: [
// 		RouterModule.forRoot([
//
// 			{path:'', redirectTo:'login', pathMatch:'full'},
//             { path: 'login', loadChildren: './login/login.module#LoginModule', data: { preload: true }},
//             { path: 'messages', loadChildren: './message/message.module#MessageModule', data: { preload: true }},
// 		])
// 	],
// 	exports: [RouterModule]
// })
@NgModule({
	imports: [
		RouterModule.forRoot([

			{path:'', redirectTo:'login', pathMatch:'full' },
            { path: 'login', component: LoginComponent },
            { path: 'messages', component: MessagesComponent },
		])
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
