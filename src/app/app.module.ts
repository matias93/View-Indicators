import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DolarIntercambioComponent } from './module-indicators/view-indicators/dolar-intercambio/dolar-intercambio.component';
import { ViewUfComponent } from './module-indicators/view-indicators/view-uf/view-uf.component';
import { EuroComponent } from './module-indicators/view-indicators/euro/euro.component';
import { ImacecComponent } from './module-indicators/view-indicators/imacec/imacec.component';
import { IpcComponent } from './module-indicators/view-indicators/ipc/ipc.component';
import { UtmComponent } from './module-indicators/view-indicators/utm/utm.component';
import { ViewDolarComponent } from './module-indicators/view-indicators/view-dolar/view-dolar.component';
import { ViewIpComponent } from './module-indicators/view-indicators/view-ipv/view-ipv.component';
//import { ViewAdminComponent } from './view-indicators/view-admin/view-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    DolarIntercambioComponent,
    ViewUfComponent,
    EuroComponent,
    ImacecComponent,
    IpcComponent,
    UtmComponent,
    ViewDolarComponent,
    ViewIpComponent,
   //ViewAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
