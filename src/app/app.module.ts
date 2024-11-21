import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatDrawer, MatDrawerContainer, MatSidenavContainer} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton, MatFabButton, MatIconButton, MatMiniFabButton} from '@angular/material/button';
import {HomeComponent} from './home/home.component';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {CourseCardListComponent} from './course-card-list/course-card-list.component';
import {CourseDialogComponent} from './course-dialog/course-dialog.component';
import {MatDialogActions, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseCardListComponent,
    CourseDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavContainer,
    MatNavList,
    MatListItem,
    MatIcon,
    MatToolbar,
    MatIconButton,
    MatDrawerContainer,
    MatDrawer,
    MatTabGroup,
    MatTab,
    MatButton,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCardTitle,
    MatDialogContent,
    MatFormField,
    MatInput,
    MatDialogTitle,
    FormsModule,
    MatSelect,
    MatOption,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatDialogActions,
    MatFabButton,
    MatMiniFabButton
  ],
  providers: [
    provideAnimationsAsync(),
    provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
