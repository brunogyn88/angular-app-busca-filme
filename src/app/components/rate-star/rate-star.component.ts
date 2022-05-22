import { Component, Input, OnInit } from '@angular/core';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-rate-star',
  templateUrl: './rate-star.component.html',
  styleUrls: ['./rate-star.component.scss'],
})
export class RateStarComponent implements OnInit {
  @Input() public score: number = 0;
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;
  faStartRegular = faStarRegular;

  constructor() {}

  ngOnInit(): void {}
}
