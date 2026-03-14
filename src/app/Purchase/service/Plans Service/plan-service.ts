import { Injectable } from '@angular/core';
import { Plans } from '../../interface/plans';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  private plans: Plans[] = [
    {
      id: 1,
      name: 'Akwa Kart',
      logo: 'images/akwa.png',
      features: ['ADSL Bundle Promos', 'Conquer Promo Bundle', '1000 GB 200 MBPS'],
      hasExploreMore: true
    },
    {
      id: 2,
      name: 'Demagh Tanya',
      logo: 'images/demagh.png',
      features: ['ADSL Bundle Promos', 'Conquer Promo Bundle', '1000 GB 200 MBPS']
    },
    {
      id: 3,
      name: 'Emerald',
      logo: 'images/emerald.png',
      features: ['ADSL Bundle Promos', 'Conquer Promo Bundle']
    },
    {
      id: 4,
      name: 'Plan Name Goes Here',
      logo: 'images/e&.png',
      features: ['ADSL Bundle Promos', 'Conquer Promo Bundle']
    },
    {
      id: 4,
      name: 'Plan Name Goes Here',
      logo: 'images/e&.png',
      features: ['ADSL Bundle Promos', 'Conquer Promo Bundle']
    },
    {
      id: 4,
      name: 'Plan Name Goes Here',
      logo: 'images/e&.png',
      features: ['ADSL Bundle Promos', 'Conquer Promo Bundle']
    },
    {
      id: 4,
      name: 'Plan Name Goes Here',
      logo: 'images/e&.png',
      features: ['ADSL Bundle Promos', 'Conquer Promo Bundle']
    },
    {
      id: 4,
      name: 'Plan Name Goes Here',
      logo: 'images/e&.png',
      features: ['ADSL Bundle Promos', 'Conquer Promo Bundle']
    }
  ];

  constructor() { }

 
  getPlans(): Plans[] {
    return this.plans;
  }
  
}
