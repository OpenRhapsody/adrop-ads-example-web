import { Component, OnInit } from '@angular/core';

declare let adrop: {
  initialize: (appKey: string) => void;
  request: (
    unitId: string,
  ) => Promise<{ ad: string, unit: string }>;
  setProperty: (key: string, value: string) => Promise<void>;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ad: string = '';
  appKey: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjAxSEQ1UTNaOEdYTk5XRjQ2NENOV0NNQlM0OjAxSEZCTU1HRkZXUU5OMk5aVkpCNU5GUFZaIiwia2V5VHlwZSI6MSwiaWF0IjoxNzAwMTI0MDQ5LCJleHAiOjI1MzQwMjEyODAwMH0.J877rLr4xvUWqcEzsesEp_KNzO8XnHaJeESPXdABubQ';

  ngOnInit() {
    adrop.initialize(this.appKey);
    // // Assuming adrop is imported and available
    adrop
      .request('PUBLIC_TEST_UNIT_ID_320_50')
      .then((res: any) => {
        this.ad = res.ad ?? '<div/>'; // Set ad content or default if not available
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
