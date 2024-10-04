import { Component, OnInit } from '@angular/core';

interface Banner {
  unitId: string
    ad: string
}

interface NativeAd extends Banner {
  headline?: string
  body?: string
  profile?: { displayName: string, displayLogo: string, link: string }
  extra?: { id: string, text: string }[]
}

declare let adrop: {
  initialize: (appKey: string) => void;
  request: (
    unitId: string,
  ) => Promise<{ ad: string, unit: string }>;
  setProperty: (key: string, value: any) => Promise<void>;
  logEvent: (name: string, params?: Record<string, any>) => Promise<void>;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ad: string = '';
  banner: Banner | null = null;
  nativeAd: NativeAd | null = null;
  appKey: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjAxSEQ1UTNaOEdYTk5XRjQ2NENOV0NNQlM0OjAxSEZCTU1HRkZXUU5OMk5aVkpCNU5GUFZaIiwia2V5VHlwZSI6MSwiaWF0IjoxNzAwMTI0MDQ5LCJleHAiOjI1MzQwMjEyODAwMH0.J877rLr4xvUWqcEzsesEp_KNzO8XnHaJeESPXdABubQ';
  sendProperty() {
    adrop.setProperty('property_key', 'property_value');
  }
  
  sendEvent() {
    adrop.logEvent('event_name', { key1: 1, key2: 2.3, key3: true, key4: 'value text' });
  }

  ngOnInit() {
    adrop.initialize(this.appKey);
    // // Assuming adrop is imported and available
    adrop
      .request('PUBLIC_TEST_UNIT_ID_375_80')
      .then((res: any) => {
        this.banner = res
      })
      .catch((err: any) => {
        console.error('Error fetching ad:', err);
      });
    
    adrop
        .request('PUBLIC_TEST_UNIT_ID_NATIVE')
        .then((res: any) => {
          this.nativeAd = res
        })
        .catch((err: any) => {
          console.error('Error fetching ad:', err);
        });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
