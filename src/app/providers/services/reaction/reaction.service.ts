import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { Reaction } from '../../interfaces';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReactionService {
  item$ = new Subject<Reaction[]>();

  constructor(private http: HttpClient) {}

  loadReactions$(route: ActivatedRoute) {
    const id = route.snapshot.params['id'];

    return this.http.get<Reaction[]>(`http://localhost:3000/api/videos/${id}/reactions`).pipe(
      tap((item) => this.item$.next(item)),
    );
  }

  saveReaction$(item: Reaction) {
    return this.http.post<Reaction[]>(`http://localhost:3000/api/videos/${item.videoId}/reactions`, item).pipe(
      tap((item) => this.item$.next(item)),
    )
  }
}
