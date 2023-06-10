import { Component, OnDestroy, OnInit} from '@angular/core';
import { DataStorageService } from 'src/app/Shared/data-storage.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: `app-header`,
    templateUrl: `./Header.component.html`
})

export class HeaderComponent implements OnInit,OnDestroy{

  isAuthenticated: boolean = false;
  private userSubscription!: Subscription;

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user//!user ? false : true;
    });
  }

  onSaveData() {
    this.dataService.storeRecipes();
  }

  onFeachData() {
    this.dataService.fetchRecipes().subscribe({
        error: err => { alert(err.error.error); }
      });
  }

  OnLogOut() {
    this.authService.LogOut();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  constructor(private dataService: DataStorageService, private authService: AuthService) { }
}
