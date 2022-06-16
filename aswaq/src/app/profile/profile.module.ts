import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { NotificationComponent } from './pages/notification/notification.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { SettingComponent } from './pages/setting/setting.component';
import { AdvertisementsComponent } from './pages/advertisements/advertisements.component';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({
  declarations: [
    NotificationComponent,
    OrdersComponent,
    WalletComponent,
    SettingComponent,
    AdvertisementsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
