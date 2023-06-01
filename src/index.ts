import { Observable, of } from "rxjs";


of(5).subscribe(value => {
  console.log(value);
})