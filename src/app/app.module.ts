import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipesModule } from './recipes/recipes.module';
import { ShopingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';
import { shoppingListReducer } from './shopping-list/store/shopping-list.reducer';
import { authReducer } from './auth/store/auth.reducer';
import * as fromApp from './store/app.reducer';
import { AuthEffects } from './auth/store/auth.effcts';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    StoreModule.forRoot({
      shoppingList: shoppingListReducer,
      auth: authReducer,
    }),
    AuthModule,
    RecipesModule,
    ShopingListModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    }),
    StoreRouterConnectingModule.forRoot(),
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent],
  // providers: [LoggingService]
})
export class AppModule {}
