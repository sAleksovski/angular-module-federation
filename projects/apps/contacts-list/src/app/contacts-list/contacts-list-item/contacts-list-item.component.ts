import { Component, Input } from '@angular/core';
import { Contact } from '../contacts-list.service';

@Component({
  selector: 'nd-contacts-list-item',
  templateUrl: './contacts-list-item.component.html',
  styleUrls: ['./contacts-list-item.component.css'],
})
export class ContactsListItemComponent {
  @Input() contact: Contact;
}
