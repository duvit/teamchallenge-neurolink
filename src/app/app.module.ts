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
import { MainContentWrapperComponent } from './components/main-content-wrapper/main-content-wrapper.component';
import { RegistrationComponent } from './components/header/registration/registration.component';
import { LoginComponent } from './components/header/login/login.component';
import { UserAgreementComponent } from './components/technical-department/user-agreement/user-agreement.component';
import { PageNotFoundComponent } from './components/technical-department/page-not-found/page-not-found.component';
import { SpecialistPageComponent } from './components/shared/specialist-page/specialist-page.component';
import { CalendarComponent } from './components/shared/specialist-page//calendar/calendar.component';
import { ArticleComponent } from './components/shared/specialist-page/article/article.component';
import { ReviewComponent } from './components/shared/specialist-page/review/review.component';
import { NeedHelpComponent } from './components/main-content/need-help/need-help.component';
import { SpecialistCardComponent } from './components/shared/specialist-card/specialist-card.component';
import { UserPageComponent } from './components/shared/user-page/user-page.component';
import { ProfileComponent } from './components/shared/user-page/profile/profile.component';
import { SupportComponent } from './components/shared/user-page/support/support.component';
import { SettingsComponent } from './components/shared/user-page/settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    UserAgreementComponent,
    PageNotFoundComponent,
    SpecialistPageComponent,
    CalendarComponent,
    ArticleComponent,
    ReviewComponent,
    NeedHelpComponent,
    UserPageComponent,
    ProfileComponent,
    SupportComponent,
    // SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
