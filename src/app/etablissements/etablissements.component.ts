import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nom: string;
  lieu: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nom: "Scabandra Lbahria", lieu: "Directeur General"},
  {nom: "Sridina Wld Lhay", lieu: "Directeur"}
];

@Component({
  selector: 'app-etablissements',
  templateUrl: './etablissements.component.html',
  styleUrls: ['./etablissements.component.css']
})
export class EtablissementsComponent implements OnInit {

  displayedColumns: string[] = ['nom', 'lieu'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
