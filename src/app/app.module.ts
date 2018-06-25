import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SwapService } from './swap.service';
import {SuiModule} from 'ng2-semantic-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SuiModule
  ],
  providers: [SwapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
