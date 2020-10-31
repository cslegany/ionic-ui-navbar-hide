import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';
import { SuperTabsModule } from 'ionic4-hidenav/node_modules/@ionic-super-tabs/angular';
//import { SuperTabsModule } from '@ionic-super-tabs/angular'; //use supertabs shipped with the plugin to avoid null reference errors
import { HidenavModule } from 'ionic4-hidenav';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    SuperTabsModule,
    HidenavModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
