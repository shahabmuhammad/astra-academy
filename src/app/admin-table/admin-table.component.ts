import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css'],
})
export class AdminTableComponent implements OnInit {
  @Input('users') users$: any;
  @Input('usersType') usersType!: string;
  constructor() {}

  ngOnInit(): void {}
}
