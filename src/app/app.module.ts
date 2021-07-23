import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StocksComponent } from './stocks/stocks.component';
import { StockListComponent } from './stocks/stock-list/stock-list.component';
import { StockInfoComponent } from './stocks/stock-info/stock-info.component';
import { WelcomePageComponent } from './stocks/welcome-page/welcome-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptorService } from './stocks/api-interceptor.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ScripNamePipe } from './stocks/scripName.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StocksComponent,
    StockListComponent,
    StockInfoComponent,
    WelcomePageComponent,
    ScripNamePipe
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    HttpClientModule,
    MatListModule,
  ],
  // providers: [{provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
