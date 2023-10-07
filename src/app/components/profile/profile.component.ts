import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/providers';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit, OnDestroy {
  @Input() avatarWidth = '32px';
  @Input() avatarHeight = '32px';

  private destroyStream$ = new Subject<void>();

  user$ = this.userSerice.user$;

  constructor(private userSerice: UserService) {}

  ngOnInit(): void {
    this.userSerice.initUser$().pipe(
      takeUntil(this.destroyStream$),
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroyStream$.next();
    this.destroyStream$.complete();
  }
}
