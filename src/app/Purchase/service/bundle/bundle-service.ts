import { Injectable } from '@angular/core';
import { Bundle } from '../../interface/bundle';

@Injectable({
  providedIn: 'root',
})
export class BundleService {
  private bundles: Bundle[] = [
    { id: 1, name: 'Akwa Kart - 55 MIX', subTitle: 'PPT Addon', description: 'Bundle addons' },
    { id: 2, name: 'Akwa Kart - 56 MIX', subTitle: 'PPT Addon', description: 'Bundle addons' },
    { id: 3, name: 'Akwa Kart - 55 MIX', subTitle: 'PPT Addon', description: 'Bundle addons' },
    { id: 4, name: 'Akwa Kart - 55 MIX', subTitle: 'PPT Addon', description: 'Bundle addons' },
    { id: 5, name: 'Akwa Kart - 55 MIX', subTitle: 'PPT Addon', description: 'Bundle addons' },
    { id: 6, name: 'Akwa Kart - 55 MIX', subTitle: 'PPT Addon', description: 'Bundle addons' }
  ];

  constructor() { }

 
  getBundles():Bundle[] {
  
    return this.bundles;
  }
  
}
