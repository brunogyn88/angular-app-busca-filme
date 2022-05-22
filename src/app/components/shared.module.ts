import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RateStarComponent } from './rate-star/rate-star.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, RateStarComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [HeaderComponent, FooterComponent, RateStarComponent],
})
export class SharedModule {}
