import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Category } from '@t4d-wnow-fullstack-angular11/category-lib';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public displayedColumns: string[] = ['categoryName', 'description'];

  public categories: Category[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categories = this.route.snapshot.data.categories as Category[];
  }

}
