import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// import { Observable } from "rxjs";

// // let promiseIdCounter = 0;

// // const p = new Promise((resolve, reject) => {

// //   const promiseId = promiseIdCounter++;

// //   console.log("called fn passed to promise constructor");

// //   setTimeout(() => {
// //     resolve(promiseId + ", " + 0);
// //   }, 2000)

// // });

// // p.then(result => {
// //   console.log('a p: ' + result);
// // });

// // p.then(result => {
// //   console.log('b p: ' + result);
// // });

// // let observableIdCounter = 0;

// const o = new Observable(subscriber => {

//   // const observableId = observableIdCounter++;

//   // console.log("called fn passed to observable constructor");


//   let counter = 0;

//   const handle = setInterval(() => {
//     // subscriber.next(observableId + "," + counter++);

//     if (subscriber.closed) {
//       window.clearInterval(handle);
//       return;
//     }

//     console.log('next: ' + counter);
//     subscriber.next(counter++);
//   },1000);

//   // setTimeout(() => {
//   //   window.clearInterval(handle);
//   //   subscriber.complete();
//   // }, 5000);

// });

// const subscription = o.subscribe({
//   next: (result) => {
//     console.log("a o: " + result);
//   },
//   complete: () => {
//     console.log("all done");
//   }
// });

// setTimeout(() => {
//   subscription.unsubscribe();
// }, 3000);

// // o.subscribe({
// //   next: (result) => {
// //     console.log("b o: " + result);
// //   },
// // });