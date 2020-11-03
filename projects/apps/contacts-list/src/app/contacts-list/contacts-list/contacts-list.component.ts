import { Component } from '@angular/core';
import { ContactsListService } from '../contacts-list.service';

@Component({
  selector: 'nd-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})
export class ContactsListComponent {
  constructor(private readonly contactsService: ContactsListService) {}
  readonly contacts = this.contactsService.contacts;
}
