import { NgModule } from '@angular/core';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    declarations: [LightboxComponent, GalleryComponent],
    imports: [CommonModule, MatGridListModule],
    exports: [LightboxComponent, GalleryComponent],
})
export class NgxPhotoswipeModule {}
