import { Component, OnInit, ViewChild } from '@angular/core';
import { HidenavStretchheaderComponent } from 'ionic4-hidenav';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  @ViewChild(HidenavStretchheaderComponent, { static: false }) hidenav: HidenavStretchheaderComponent;

  constructor() { }

  ngOnInit() {
  }

  expand() {
    this.hidenav.toggle();
  }


}
