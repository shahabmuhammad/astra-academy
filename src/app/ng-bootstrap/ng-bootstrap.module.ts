import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgbDropdownModule, NgbModalModule],
  exports: [NgbDropdownModule, NgbModalModule],
})
export class NgBootstrapModule {}
