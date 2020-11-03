import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs/operators';
import { ContactsDetailsService } from '../contacts-details.service';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.css'],
})
export class ContactsDetailsComponent {
  constructor(
    private readonly contactsDetailsService: ContactsDetailsService,
    private readonly router: ActivatedRoute,
  ) {}

  contact$ = this.router.params.pipe(map((params: Params) => this.contactsDetailsService.getContact(params.id)));
}
