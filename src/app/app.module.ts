import { OrderService } from './services/order.service';

import { AuthService } from './services/auth.service';
import { RetrostarterService } from './services/retrostarter.service';
import { RetrodealService } from './services/retrodeal.service';
import { KybostarterService } from './services/kybostarter.service';
import { OrderComponent } from './order/order.component';
import { Routes, RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MenuComponent } from './menu/menu.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import {ThumbnailServiceService} from './services/thumbnail-service.service';
import { KyboComponent } from './kybo/kybo.component';
import { KyboMenuComponent } from './kybo-menu/kybo-menu.component'
import { KybodealService } from './services/kybodeal.service';
import { RetroComponent } from './retro/retro.component';
import { RetroMenuComponent } from './retro-menu/retro-menu.component';



const appRoutes: Routes=[
  {path:'', component:HomeComponent},
  {path:'rest', component:RestaurantComponent},
  {path:'order', component:OrderComponent},
  {path:'signin', component:SigninComponent},
  {path:'kybo', component:KyboComponent},
  {path:'retro', component:RetroComponent}
  
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThumbnailComponent,
    FooterComponent,
    HomeComponent,
    RestaurantComponent,
    MenuComponent,
    CheckoutComponent,
    OrderComponent,
    RegisterComponent,
    SigninComponent,
    LoginComponent,
    KyboComponent,
    KyboMenuComponent,
    RetroComponent,
    RetroMenuComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'hello-world'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features 
    AppRoutingModule,  
    FormsModule,
    
    
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ThumbnailServiceService,
    KybodealService,
    KybostarterService,
    RetrodealService,
    RetrostarterService,
    AuthService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
