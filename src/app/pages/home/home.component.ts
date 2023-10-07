import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil, tap } from 'rxjs';
import { Video } from 'src/app/providers/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroyStream$ = new Subject<void>();

  videos$ = new Subject<Video[]>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.setVideos();
  }

  ngOnDestroy(): void {
    this.destroyStream$.next();
    this.destroyStream$.complete();
  }

  setVideos(): void {
    this.http.get<Video[]>('http://localhost:3000/api/videos').pipe(
      takeUntil(this.destroyStream$),
      tap((videos) => this.videos$.next(videos)),
    ).subscribe();
  }
}
