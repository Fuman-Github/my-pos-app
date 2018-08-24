import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router) {

  }
  ngOnInit() {
    this.printpath('', this.router.config);
  }
  printpath(parent: String, config: Route[]) {
    for (let i = 0; i < config.length; i++) {
      const r = config[i];
      console.log(parent + '/' + r.path);
      if (r.children && r.path) {
        this.printpath(parent + '/' + r.path, r.children);
      }
    }
  }

}
