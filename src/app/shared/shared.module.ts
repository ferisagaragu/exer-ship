import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InlineSVGModule } from 'ng-inline-svg';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { ToastrModule } from 'ngx-toastr';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { DialogNotificationComponent } from './dialog-notification/dialog-notification.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BellNotificationComponent } from './bell-notification/bell-notification.component';
import { MatTreeModule } from '@angular/material/tree';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    BurgerMenuComponent,
    MenuUserComponent,
    DialogNotificationComponent,
    BellNotificationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    MatCheckboxModule,
    MatTreeModule,
    InlineSVGModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    RouterModule
  ],
  exports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    InlineSVGModule,
    MatIconModule,
    HeaderComponent,
    BurgerMenuComponent,
    MatMenuModule,
    MatBadgeModule,
    ToastrModule,
    MatTooltipModule,
    MatDialogModule,
    MenuUserComponent,
    MatCardModule,
    MatCheckboxModule,
    BellNotificationComponent,
    MatTreeModule
  ]
})
export class SharedModule { }
