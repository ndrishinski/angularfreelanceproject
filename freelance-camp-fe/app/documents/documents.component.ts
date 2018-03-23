import { Component } from '@angular/core';
import { Document } from './document'

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"

  documents: Document[] = [
    {
      title: "My First Doc",
      description: "asdfasdf asdfasdf",
      file_url: "http://google.com",
      updated_at: '11/11/16',
      image_url: 'https://careerlancer.net/wp-content/uploads/2015/12/challenges-freelancer.jpg',
    },
    {
      title: "My Second Doc",
      description: "asdfasdf asdfasdf",
      file_url: "http://google.com",
      updated_at: '11/11/16',
      image_url: 'https://pakwired.com/wp-content/uploads/2017/10/Freelancer-No-credit.jpg',
    },
    {
      title: "My Third Doc",
      description: "asdfasdf asdfasdf",
      file_url: "http://google.com",
      updated_at: '11/11/16',
      image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUBJDSOTymv6AtVRUbBDuHfd7D7PdN72G3D57YQ2ebI8jNrIXt',
    }
  ]
}