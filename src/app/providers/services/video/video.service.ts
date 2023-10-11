import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, tap } from 'rxjs';
import { Reaction, Video } from '../../interfaces';
import { takeScreenshot } from '../../utils';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  item$ = new Subject<Video>();

  constructor(private http: HttpClient) {}

  loadVideo$(route: ActivatedRoute) {
    const id = route.snapshot.params['id'];

    return this.http.get<Video>(`http://localhost:3000/api/videos/${id}`).pipe(
      tap((item) => this.item$.next(item)),
    );
  }
}
