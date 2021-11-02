/* 
1-浅拷贝方式1：赋值拷贝，
    改变任何元素都会同步改变
*/
function shallowCopy1(){
    let arr1 = [1, 2, 3, 4];
    let arr2 = arr1; 
    arr1[0] = 6; 
    console.log(arr1); 
    console.log(arr2);
}

/* 
2-浅拷贝方式2：for循环元素
    改变基本类型元素，是深拷贝，不会同步
    改变引用类型元素，是浅拷贝，会同步

*/
function shallowCopy2(){
    let arr1 = [1, {x: 5}];
    let arr2 = [];
    for(var key in arr1) {
        arr2[key] = arr1[key];
    }
    arr1[0] = 6;
    arr1[1].x = 6;
    console.log(arr1); 
    console.log(arr2);
}

/* 
3-浅拷贝方式3：使用 slice 和 concat 方法
    作用跟for循环元素一样

*/
function shallowCopy3(){
    let arr1 = [1, {x: 5}];
    let arr2 = arr1.slice();
    arr1[0] = 6;
    arr1[1].x = 6;
    console.log(arr1); 
    console.log(arr2);
}

/* 
4-浅拷贝方式4：使用 扩展运算符...
    作用跟for循环元素一样
    注意扩展运算符用数组来接[...arr1]

*/
function shallowCopy4(){
    let arr1 = [1, {x: 5}];
    let arr2 = [...arr1];
    arr1[0] = 6;
    arr1[1].x = 6;
    console.log(arr1); 
    console.log(arr2);
}


/* 
5-浅拷贝方式5：使用 Object.assign
    作用跟for循环元素一样
    注意用数组来接[]:Object.assign([], arr1)

*/
function shallowCopy5(){
    let arr1 = [1, {x: 5}];
    let arr2 = Object.assign([], arr1);
    arr1[0] = 6;
    arr1[1].x = 6;
    console.log(arr1); 
    console.log(arr2);
}