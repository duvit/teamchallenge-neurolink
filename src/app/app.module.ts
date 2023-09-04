import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SearchBlockComponent } from './components/search-block/search-block.component';
import { BannerComponent } from './components/main-content/banner/banner.component';
import { AboutUsComponent } from './components/main-content/about-us/about-us.component';
import { CategoriesComponent } from './components/main-content/categories/categories.component';
import { HowItWorksComponent } from './components/main-content/how-it-works/how-it-works.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBarComponent } from './components/search-block/search-bar/search-bar.component';
import { SpecialistCardComponent } from './components/search-block/specialist-card/specialist-card.component';
import { MainContentWrapperComponent } from './components/main-content-wrapper/main-content-wrapper.component';
import { RegistrationComponent } from './components/header/registration/registration.component';
import { LoginComponent } from './components/header/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    SearchBlockComponent,
    BannerComponent,
    AboutUsComponent,
    CategoriesComponent,
    HowItWorksComponent,
    FooterComponent,
    SearchBarComponent,
    SpecialistCardComponent,
    MainContentWrapperComponent,
    RegistrationComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
