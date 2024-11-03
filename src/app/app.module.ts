import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {HeaderComponent} from './header/header.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MainGridComponent} from './main-grid/main-grid.component';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle, MatCardTitle, MatCardTitleGroup
} from "@angular/material/card";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainGridComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatToolbar,
        MatIcon,
        MatIconButton,
        MatGridList,
        MatGridTile,
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardImage,
        MatCardContent,
        MatCardActions,
        MatCardSubtitle,
        MatButton,
        MatCardTitleGroup,
    ],
    providers: [
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
