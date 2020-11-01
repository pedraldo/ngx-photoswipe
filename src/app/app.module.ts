import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxPhotoswipeModule } from '../../projects/ngx-photoswipe/src/public-api';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NgxPhotoswipeModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
