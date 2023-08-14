import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
