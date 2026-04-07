import { Component } from '@angular/core';
import { SummaryService } from '../../service/summary Service/summary-service';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-summary',
  imports: [NgIf ],
  templateUrl: './summary.html',
  styleUrl: './summary.scss',
})
export class Summary {

constructor(public summaryService:SummaryService) {}
}
