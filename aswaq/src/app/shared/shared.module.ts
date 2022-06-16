import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { PrimengModule } from './primeng/primeng.module';
import { FullComponent } from './components/layout/full/full.component';
import { BlankComponent } from './components/layout/blank/blank.component';
import { HttpClientModule } from '@angular/common/http';
import { SkeltonComponent } from './components/skelton/skelton.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ModalComponent,
    ErrorPageComponent,
    NotFoundPageComponent,
    FullComponent,
    BlankComponent,
    SkeltonComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ShareButtonsModule,FontAwesomeModule,
    ShareIconsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SkeltonComponent,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    ShareButtonsModule,FontAwesomeModule,
    ShareIconsModule
  ]
})
export class SharedModule { }
