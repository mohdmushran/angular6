import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CalendarModule} from 'primeng/calendar';
import {EditorModule} from 'primeng/editor';
import {FileUploadModule} from 'primeng/fileupload';
import {SlideMenuModule} from 'primeng/slidemenu';


import { AboutComponent } from './about/about.component';
import { ListAboutComponent } from './list-about/list-about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BusinessComponent } from './business/business.component';
import { ListBusinessComponent } from './list-business/list-business.component';
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { EditAboutComponent } from './edit-about/edit-about.component';
import { JobComponent } from './job/job.component';
import { ListJobComponent } from './list-job/list-job.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ListVehicleComponent } from './list-vehicle/list-vehicle.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LoginComponent } from './login/login.component';
import { ListInfoComponent } from './list-info/list-info.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list-detail', component: ListDetailComponent },
  { path: 'edit-detail/:detailId', component: EditDetailComponent },

  { path: 'about', component: AboutComponent },
  { path: 'list-about', component: ListAboutComponent },
  { path: 'edit-about/:detailId', component: EditAboutComponent },

  { path: 'gallery', component: GalleryComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'list-business', component: ListBusinessComponent },

  { path: 'job', component: JobComponent },
  { path: 'list-job', component: ListJobComponent },
  { path: 'edit-job/:detailId', component: EditJobComponent },

  { path: 'vehicle', component: VehicleComponent },
  { path: 'list-vehicle', component: ListVehicleComponent },
  { path: 'edit-vehicle/:detailId', component: EditVehicleComponent },

  { path: 'side-menu', component: SideMenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list-info', component: ListInfoComponent },
  


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}