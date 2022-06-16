import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisementsComponent } from './pages/advertisements/advertisements.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingComponent } from './pages/setting/setting.component';
import { WalletComponent } from './pages/wallet/wallet.component';

const routes: Routes = [
  {path:'',component:ProfileComponent,children:[
    {path:'setting',component:SettingComponent},
    {path:'advertisements',component:AdvertisementsComponent},
    {path:'notifications',component:NotificationComponent},
    {path:'orders',component:OrdersComponent},
    {path:'wallet',component:WalletComponent},
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
