import { Injectable } from '@angular/core';

export interface Contact {
  id: string;
  fullName: string;
  avatarUrl?: string;
  company: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactsDetailsService {
  private readonly contacts: Contact[] = [
    {
      id: '1',
      fullName: 'James Holden',
      avatarUrl:
        'https://www.syfy.com/sites/syfy/files/styles/syfy_full_episode_thumbs/public/2015/11/cast_expanse_jim_holden_s1.jpg',
      company: 'Rocinante',
    },
    {
      id: '2',
      fullName: 'Naomi Nagata',
      avatarUrl: 'https://fastly.syfy.com/sites/syfy/files/2015/11/cast_expanse_naomi_nagata_s1.jpg',
      company: 'Rocinante',
    },
    {
      id: '3',
      fullName: 'Amos Burton',
      avatarUrl: 'https://i.pinimg.com/originals/bd/85/58/bd8558e4befd40fc901da68745ea7006.jpg',
      company: 'Rocinante',
    },
    {
      id: '4',
      fullName: 'Alex Kamal',
      avatarUrl: 'https://i.pinimg.com/originals/7c/2b/31/7c2b310d99ca8f5b3fdc8b9246b363d5.jpg',
      company: 'Rocinante',
    },
    {
      id: '5',
      fullName: 'Chrisjen Avasarala',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbfNypA5vlgczZAvKOoOWpGg2dU18v_KZK0w&usqp=CAU',
      company: 'United Nations',
    },
    {
      id: '6',
      fullName: 'Josephus Miller',
      avatarUrl: 'https://www.indiewire.com/wp-content/uploads/2015/12/the-expanse.jpg',
      company: 'Ceres',
    },
  ];

  getContact(id: string): Contact | undefined {
    return this.contacts.find((c) => c.id === id);
  }
}
