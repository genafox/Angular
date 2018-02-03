import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { MessageFormComponent } from './message-form/message-form.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    MessageFormComponent
  ],
  declarations: [MessageFormComponent]
})
export class MessagesModule { }
