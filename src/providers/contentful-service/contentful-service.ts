import {Injectable} from '@angular/core';
import {createClient, Entry} from 'contentful';

@Injectable()
export class ContentFulService {
  private client = createClient({
    space: 'vv5sloeghaow',
    accessToken: '9f91b407ade60a9df054a191c7ca0513efb1055becf2434e3db142fd0afe61bb'
   });
// tslint:disable-next-line:one-line
constructor(){
}

getCourses(query?: object): Promise<Entry<any>[]> {
return this.client.getEntries(Object.assign({
  content_type: 'tutorial'
}, query)).then(res => res.items);
}
async getCourse(courseId): Promise<Entry<any>> {
  return await this.client.getEntries(Object.assign({
    content_type: 'tutorial'
  }, {'sys.id': courseId})).then(res => res.items[0] );
}
}
