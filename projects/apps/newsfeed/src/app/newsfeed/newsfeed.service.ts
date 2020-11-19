import { Injectable } from '@angular/core';

export interface NewsfeedItem {
  id: string;
  fullName: string;
  avatarUrl?: string;
  company: string;
  postContent: string;
}

@Injectable({
  providedIn: 'root',
})
export class NewsfeedService {
  readonly newsfeedItems: NewsfeedItem[] = [
    {
      id: '1',
      fullName: 'James Holden',
      avatarUrl:
        'https://www.syfy.com/sites/syfy/files/styles/syfy_full_episode_thumbs/public/2015/11/cast_expanse_jim_holden_s1.jpg',
      company: 'Rocinante',
      postContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis nunc, ultricies id ipsum in, tempus egestas sapien. Nam lacinia ex sit amet dolor luctus, eu pharetra magna pretium. Fusce ut feugiat nibh. Integer finibus urna quis cursus lobortis. Duis enim tellus, cursus ac dui in, pellentesque lobortis libero. Sed quis nisl tellus. Cras pretium eu nunc nec viverra. Mauris maximus, justo sit amet porta posuere, risus felis cursus libero, at facilisis ligula libero nec nibh. Suspendisse semper tempor orci vitae egestas. Donec in eros gravida, semper neque sit amet, rutrum felis. Duis at orci leo. Ut iaculis maximus commodo. Quisque a ipsum ut erat rhoncus finibus. Donec ac urna et mauris finibus efficitur et a purus. Proin purus massa, rutrum vel neque ut, facilisis dictum dui. Aenean tortor elit, dictum in efficitur quis, finibus id nibh.',
    },
    {
      id: '2',
      fullName: 'Naomi Nagata',
      avatarUrl: 'https://fastly.syfy.com/sites/syfy/files/2015/11/cast_expanse_naomi_nagata_s1.jpg',
      company: 'Rocinante',
      postContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis nunc, ultricies id ipsum in, tempus egestas sapien. Nam lacinia ex sit amet dolor luctus, eu pharetra magna pretium. Fusce ut feugiat nibh. Integer finibus urna quis cursus lobortis. Duis enim tellus, cursus ac dui in, pellentesque lobortis libero. Sed quis nisl tellus. Cras pretium eu nunc nec viverra. Mauris maximus, justo sit amet porta posuere, risus felis cursus libero, at facilisis ligula libero nec nibh. Suspendisse semper tempor orci vitae egestas. Donec in eros gravida, semper neque sit amet, rutrum felis. Duis at orci leo. Ut iaculis maximus commodo. Quisque a ipsum ut erat rhoncus finibus. Donec ac urna et mauris finibus efficitur et a purus. Proin purus massa, rutrum vel neque ut, facilisis dictum dui. Aenean tortor elit, dictum in efficitur quis, finibus id nibh.',
    },
    {
      id: '3',
      fullName: 'Amos Burton',
      avatarUrl: 'https://i.pinimg.com/originals/bd/85/58/bd8558e4befd40fc901da68745ea7006.jpg',
      company: 'Rocinante',
      postContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis nunc, ultricies id ipsum in, tempus egestas sapien. Nam lacinia ex sit amet dolor luctus, eu pharetra magna pretium. Fusce ut feugiat nibh. Integer finibus urna quis cursus lobortis. Duis enim tellus, cursus ac dui in, pellentesque lobortis libero. Sed quis nisl tellus. Cras pretium eu nunc nec viverra. Mauris maximus, justo sit amet porta posuere, risus felis cursus libero, at facilisis ligula libero nec nibh. Suspendisse semper tempor orci vitae egestas. Donec in eros gravida, semper neque sit amet, rutrum felis. Duis at orci leo. Ut iaculis maximus commodo. Quisque a ipsum ut erat rhoncus finibus. Donec ac urna et mauris finibus efficitur et a purus. Proin purus massa, rutrum vel neque ut, facilisis dictum dui. Aenean tortor elit, dictum in efficitur quis, finibus id nibh.',
    },
  ];

  getNewsfeedItem(id: string): NewsfeedItem | undefined {
    return this.newsfeedItems.find((item) => item.id === id);
  }
}
