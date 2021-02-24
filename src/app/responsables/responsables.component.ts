import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nomComplet: string;
  role: string;
  numero: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nomComplet: "Scabandra Lbahria", role: "Directeur General", numero: "+125649763665", email: "scabandra@mail.com"},
  {nomComplet: "Sridina Wld Lhay", role: "Directeur", numero: "+135485663557", email: "sridina@mail.com"}
];

@Component({
  selector: 'app-responsables',
  templateUrl: './responsables.component.html',
  styleUrls: ['./responsables.component.css']
})
export class ResponsablesComponent implements OnInit {

  displayedColumns: string[] = ['nomComplet', 'role', 'numero', 'email'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
