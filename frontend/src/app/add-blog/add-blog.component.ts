import { Component } from '@angular/core';
import { BlogService } from '../blogs.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent {
  constructor(private blogsService: BlogService) {}
  newBlog = {
    title: '',
    author: '',
    thumbnail: '',
    short_description: '',
    description: '',
  };

  addBlog() {
    this.blogsService.addBlog(this.newBlog).subscribe({
      next: () => {
        this.blogsService.refreshBlogs();
      },
    });
  }
}
