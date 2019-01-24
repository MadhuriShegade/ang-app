import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { delay, take,mergeMap } from 'rxjs/operators';
import { forkJoin, of, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingServiceService {
  private subject = new Subject<any>();
 
  sendMessage(message: boolean) {
    this.subject.next({ message });
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    console.log("ongetmsg");
    return this.subject.asObservable();
  }

  public example = forkJoin(
    of(['Hello', "aa"]),
    of('World').pipe(delay(1000)),
    of([1, 2, 3], [4, 5, 6], [7, 8, 9]).pipe(take(2)),
    interval(1000).pipe(take(3)),
  )

  public subscribe = this.example.subscribe(val => console.log(val));

 /*
  you can also supply a second argument which receives the source value and emitted
  value of inner observable or promise
*/
//emit 'Hello'
public source = of('Hello');

//mergeMap also emits result of promise
public myPromise = val =>
  new Promise(resolve => resolve(`${val} World From Promise!`));

public example1 = this.source.pipe(
  mergeMap(
    val => this.myPromise(val),
    (valueFromSource, valueFromPromise) => {
      return `Source: ${valueFromSource}, Promise: ${valueFromPromise}`;
    }
  )
);
//output: "Source: Hello, Promise: Hello World From Promise!"
public subscribe1 = this.example1.subscribe(val => console.log(val));


}
