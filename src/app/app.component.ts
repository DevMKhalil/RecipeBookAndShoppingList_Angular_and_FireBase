import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.authService.autoLogin();
  }

  title = 'RecipeBookAndShoppingList';

  constructor(private authService: AuthService) { }
}
