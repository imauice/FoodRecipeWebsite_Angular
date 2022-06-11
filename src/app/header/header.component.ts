import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = false;

  constructor(
    private dataStroageService: DataStorageService,
    private authService: AuthService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.userSub = this.store
      .select('auth')
      .pipe(
        map((authState) => {
          return authState.user;
        })
      )
      .subscribe((user) => {
        this.isAuthenticated = !!user;
        //this.isAuthenticated = !user ? false : true;
      });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onSaveData() {
    this.dataStroageService.storeRecipes();
  }

  onFetchdata() {
    this.dataStroageService.fetchRecipes().subscribe();
  }
}
