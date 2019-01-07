import { Component, OnInit } from '@angular/core';

// import { Message } from 'src/app/message';
// import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 // messages: message[];
  // error = '';
  // success = '';

  // message = new message('','','');

  constructor() {
  }

  ngOnInit() {
    // this.getMessage();
  }

  // getMessage(): void {
    // this.messageService.getAll().subscribe(
      // (res: message[]) => {
        // this.messages = res;
      // },
      // (err) => {
        // this.error = err;
      // }
    // );
  // }

  // addMessage(f) {
    // this.resetErrors();

    // this.messageService.store(this.message)
      // .subscribe(
        // (res: message[]) => {
          // Update the list of messages
          // this.messages = res;

          // Inform the user
          // this.success = 'Created successfully';

          // Reset the form
          // f.reset();
        // },
        // (err) => this.error = err
      // );
  // }

  // private resetErrors(){
    // this.success = '';
    // this.error   = '';
  // }

}

