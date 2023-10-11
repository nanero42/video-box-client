import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroyStream$ = new Subject<void>();

  showBackButton$ = new Subject<boolean>();

  constructor(
    private router: Router,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.watchIsMeAtHome();
  }

  ngOnDestroy(): void {
    this.destroyStream$.next();
    this.destroyStream$.complete();
  }

  private watchIsMeAtHome() {
    this.router.events.pipe(
      tap((navEnd) => {
        if (navEnd instanceof NavigationEnd) {
          this.showBackButton$.next(navEnd.url === '/' ? false : true);
        }
      }),
    ).subscribe();
  }

  goBack() {
    this.location.back();
  }
}
