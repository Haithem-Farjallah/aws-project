import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  blogs: {
    title: string;
    author: string;
    thumbnail: string;
    short_description: string;
    description: string;
  }[] = [];
  search = '';

  constructor(private blogsService: BlogService) {}

  ngOnInit() {
    this.blogsService.blogs$.subscribe((data) => {
      this.blogs = data;
    });
    this.blogsService.refreshBlogs();
  }
}
