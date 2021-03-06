import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  currentTab = "Active";
  searchText = '';

  projects = [
    {
      id: 1,
      name: "Project 1",
      desc: "Desc1",
      status: "Active",
      image: "https://www.google.ba",
      author: "Author name",
      dateCreated: "-/-/----",
      dateUpdated: "-/-/----"
    },
    {
      id: 2,
      name: "Project 2",
      desc: "Desc2",
      status: "Archive",
      image: "https://www.google.ba",
      author: "Author name",
      dateCreated: "-/-/----",
      dateUpdated: "-/-/----"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  createProject() {
    let newID = this.projects.length + 1;
    this.projects.push({
      id: newID, 
      name: "Project " + newID, 
      desc: "", 
      status: "Active", 
      image: "https://www.google.ba",
      author: "Author name",
      dateCreated: "-/-/----",
      dateUpdated: "-/-/----"}); // Ovdje dodajemo vrijednosti na niz.
  }

  onSelected(value) {
    console.log(value);
  }

}
