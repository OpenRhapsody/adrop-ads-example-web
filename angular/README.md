## Set up projects using Web

### Step 1: Create an Adrop project
Before you can add Adrop to your project, you need to [create an Adrop project](https://docs.adrop.io/) to connect to your app.

### Step 2: Register your app with Adrop
To use Adrop in your Web app, you need to register your app with your Adrop project. Registering your app is often called "adding" your app to your project.

<details>
<summary style='font-size: 16px;'>Using Web app builder</summary>

1. Go to the [Adrop console](https://adrop.io).

2. In the center of the project app page, click the **Web** icon button to launch the setup workflow.

3. Enter your app's domain name in the **App domain name** field.

    - Please note that the domain name value cannot be changed for this Adrop Web app once it has been registered with your Adrop project.

4. Enter other app information: **App nickname**.

    - **App nickname**: An internal, convenience identifier that is only visible to you in the Adrop console

5. Click **Register app** and then Android and Apple apps will be created respectively.

</details>

<img src="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FPmMSFFrQobOMLETv0N8m%2Fuploads%2FecdNeMLVx18PdhTuhZqv%2Fdocs_create_application.png?alt=media&token=3af334b8-1efe-4539-89bb-4fce3890d116">

### Step 3: Add an Adrop configuration file
You can obtain the required App Key from the Authorization header in the code snippet.

### Next Steps
You're all set! Please register an Ad unit to show ads to users.

Learn how to Create your Ad unit.


## Create your Ad unit > Display ads

### Web

#### Step 1: Initialize Adrop

Load Adrop SDK libraries from the CDN (content delivery network).
<br/>
Copy and paste these scripts into the bottom of your ```<head>``` tag

```html
<head>
    ...
    <script type='text/javascript' src='https://storage.adrop.io/js/adrop-0.1.2.min.js'></script>
    <script>adrop = window.adrop || {}</script>
</head>
```


#### Step 2: Initialize Adrop
```javascript
adrop.initialize('YOUR_APP_KEY')
```


### Display banner on Web

*.component.ts
```ts
export class AppComponent implements OnInit {
    ad: string = '';
    
    ngOnInit() {
        const unitId = 'YOUR_UNIT_ID'
        adrop.request('YOUR_UNIT_ID')
             .then((result: { ad: string, unit: string }) => ad = result.ad ?? '')
            .catch((error: any) => console.error("request error", error))
    }
}
```

*.component.html
```html
  <div class="wrapper" [innerHTML]="ad"></div>
```

### Typescript
Copy this code in your *.d.ts
```typescript
declare var adrop: {
    initialize: (appKey: string) => void;
    request: (unitId: string) => Promise<{ ad: string, unit: string}>;
    setProperty: (key: string, value: string) => Promise<void>;
    logEvent: (name: string, params?: Record<string, any>) => Promise<void>;
    onClick: (unitId: string, link: string) => void;
}
```

### ESLint
Add this code in your .eslintrc.json if you use eslint

```json
{
   "globals": {
      "adrop": true
   }
}
```

### (Optional) 
If you add `onClick` function, destination URL will not be opened, and you must handle it.

```javascript
adrop.onClick = (unitId, link) => {
    console.log(unitId, link);
}
```
