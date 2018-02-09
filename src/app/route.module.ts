import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image/image-detail.component';


export const routes: Routes = [
	{ path: 'gallery', component: GalleryComponent },
	{ path: 'image/:id', component: ImageDetailComponent },
	{ path: '', redirectTo: '/gallery', pathMatch: 'full' },
	{ path: '**', redirectTo: '/gallery', pathMatch: 'full' }
];


