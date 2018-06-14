import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  currentTab = "Active";

  projects = [
    {
      id: 1,
      name: "Project 1",
      desc: "Ovo je opis prvog projekta.",
      status: "Active"
    },
    {
      id: 2,
      name: "Project 2",
      desc: "Ovo je opis drugo projekta. Lorem ipsum, lorem ipsum, lorem ipsum",
      status: "Archive"
    };
  ]

  constructor() { }

  ngOnInit() {
  }

  createProject() {
    let newID = this.projects.length + 1;
    this.projects.push({id: newID, name: "Project " + newID, desc: "", status: "Active"});

  }

}
