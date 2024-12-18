// blog.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogsSubject = new BehaviorSubject<any[]>([]);
  blogs$ = this.blogsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<any[]> {
    return this.http.get<any[]>(environment.apiBaseUrl);
  }

  deleteBlog(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiBaseUrl}/${id}`);
  }
  addBlog(blog: any): Observable<any> {
    return this.http.post<any>(environment.apiBaseUrl, blog);
  }

  refreshBlogs() {
    this.getBlogs().subscribe((blogs) => {
      this.blogsSubject.next(blogs);
    });
  }
}
