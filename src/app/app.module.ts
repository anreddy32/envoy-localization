import { NgModule, LOCALE_ID  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule  } from '@angular/material/core';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderBannerComponent } from './components/header_banner/header_banner.component';
import {LocalcurrencyPipe} from './pipes/localizeCurrency';

import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';

import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';

import localeEnIN from '@angular/common/locales/en-IN';
import localeEnINExtra from '@angular/common/locales/extra/en-IN';

import localezhHans from '@angular/common/locales/zh-Hans';
import localezhHansExtra from '@angular/common/locales/extra/zh-Hans';


import { registerLocaleData } from '@angular/common';

//registerLocaleData(localeFr, 'fr', localeFrExtra);
registerLocaleData(localeFr, 'fr-FR', localeFrExtra);
registerLocaleData(localeDe, 'de-DE', localeDeExtra);
registerLocaleData(localeEnIN, 'en-IN', localeEnINExtra);
registerLocaleData(localezhHans, 'zh_HK', localezhHansExtra);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CreateaccountComponent,
    HeaderBannerComponent,
    LocalcurrencyPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule 
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
