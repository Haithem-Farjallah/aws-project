import { Component, Input } from '@angular/core';
import { BlogService } from '../blogs.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css'],
})
export class BlogCardComponent {
  @Input() blog: any;
  constructor(private blogService: BlogService) {
    console.log(this.blog);
  }

  removeBlog(blog: any) {
    this.blogService.deleteBlog(this.blog.id).subscribe({
      next: () => {
        console.log('Blog removed');
        this.blogService.refreshBlogs();
      },
    });
  }
}
