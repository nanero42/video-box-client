import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, finalize, takeUntil, tap } from 'rxjs';
import { Video } from '../../interfaces';
import { ActivatedRoute } from '@angular/router';

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
