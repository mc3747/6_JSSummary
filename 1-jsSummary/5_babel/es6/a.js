// 1_整体import
import { a1, a2,A3,f1,f2,F3 } from './b';

// 2_别名import
import {a1 as A1} from './b';

console.log(a1);
console.log(a2);
console.log(A3);
console.log(f1(1,2));
console.log(f2(1,3));
console.log(F3(1,4));

// 3_export导出的加{},export default导出的不用{}
import  M from './b';
import { N} from './b';
console.log(M);
console.log(N);

console.log('adfa');