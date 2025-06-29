import { Component, OnInit } from '@angular/core';
import settlements from '../../assets/settlements.json';

@Component({
  selector: 'app-eligible-settlements',
  templateUrl: './eligible-settlements.component.html',
  styleUrls: ['./eligible-settlements.component.css'],
})
export class EligibleSettlementsComponent implements OnInit {
  public settlementList: string[] = [];
  public searchInput: string = '';
  public isEligible: boolean | null = null;

  ngOnInit(): void {
    // JSON beolvasása
    this.settlementList = settlements.map((s) => s['Település'].toLowerCase());
  }

  checkEligibility(): void {
    const search = this.searchInput.trim().toLowerCase();
    this.isEligible = this.settlementList.includes(search);
  }
}
