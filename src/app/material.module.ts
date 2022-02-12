import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'



const modules =
  [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule,MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule]
@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})

export class MaterialModule { }
