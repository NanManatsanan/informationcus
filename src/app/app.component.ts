// import { Component, OnDestroy } from '@angular/core';
import { Component } from '@angular/core';
//mqtt
// import {ConnectionStatus, MqttService, SubscriptionGrant} from 'ngx-mqtt-client';
// import {IClientOptions} from 'mqtt';

// export interface Foo {
//   bar: string;
// }
//endmqtt
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent implements OnDestroy {
    export class AppComponent  {
  title = 'informationcus';


//   messages: Array<Foo> = [];

//   status: Array<string> = [];

//   constructor(private _mqttService: MqttService) {

     
//       this._mqttService.status().subscribe((s: ConnectionStatus) => {
//           const status = s === ConnectionStatus.CONNECTED ? 'CONNECTED' : 'DISCONNECTED';
//           this.status.push(`Mqtt client connection status: ${status}`);
//       });
//   }

  
//     @param {IClientOptions} config
   
//   connect(config: IClientOptions): void {
//       this._mqttService.connect(config);
//   }


//   subscribe(): void {
//       this._mqttService.subscribeTo<Foo>('fooBar')
//           .subscribe({
//               next: (msg: SubscriptionGrant | Foo) => {
//                   if (msg instanceof SubscriptionGrant) {
//                       this.status.push('Subscribed to fooBar topic!');
//                   } else {
//                       this.messages.push(msg);
//                   }
//               },
//               error: (error: Error) => {
//                   this.status.push(`Something went wrong: ${error.message}`);
//               }
//           });
//   }


 
//   sendMsg(): void {
//       this._mqttService.publishTo<Foo>('fooBar', {bar: 'foo'}).subscribe({
//           next: () => {
//               this.status.push('Message sent to fooBar topic');
//           },
//           error: (error: Error) => {
//               this.status.push(`Something went wrong: ${error.message}`);
//           }
//       });
//   }

 
//   unsubscribe(): void {
//       this._mqttService.unsubscribeFrom('fooBar').subscribe({
//           next: () => {
//               this.status.push('Unsubscribe from fooBar topic');
//           },
//           error: (error: Error) => {
//               this.status.push(`Something went wrong: ${error.message}`);
//           }
//       });
//   }

  
//   ngOnDestroy(): void {
//       this._mqttService.end();
//   }


}
