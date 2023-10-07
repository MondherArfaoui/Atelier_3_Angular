import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../Models/invoice';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {

  id!: number;
  active!: boolean;

  invoice?: Invoice;
  isActive!: boolean;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const pathId = this.route.snapshot.paramMap.get('id');
    const pathActive = this.route.snapshot.paramMap.get('active');

    if (pathId) {
        this.id = Number(pathId);
        this.active = pathActive === 'true';
    } else {
        this.id = Number(this.route.snapshot.queryParamMap.get('id'));
        this.active = this.route.snapshot.queryParamMap.get('active') === 'true';
    }

    const mockInvoices: Invoice[] = [
      {idFacture: 1, montantFacture: 120, montantRemise: 10, dateFacture: "12/12/2021", active: true},
      {idFacture: 2, montantFacture: 1020, montantRemise: 90, dateFacture: "22/11/2020", active: true},
      {idFacture: 3, montantFacture: 260, montantRemise: 30, dateFacture: "18/10/2020", active: false},
      {idFacture: 4, montantFacture: 450, montantRemise: 40, dateFacture: "14/12/2020", active: true},
    ];
    
    this.invoice = mockInvoices.find(invoice => invoice.idFacture === this.id);
    this.isActive = this.invoice?.active || false;
  }

}
