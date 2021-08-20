// export暴露的必须是接口，不能是值,或者单独的变量
    /**
     * 
        export 1; // 报错
        let a = 1;
        export a; // 报错
     */

    // 1. 变量(完整)
    export let a1 = 'leo';

    // 2_变量(接口)
    let a2 = 100;
    export { a2};

    // 3_变量(别名)
    let a3 = 1;
    export { A3 as a3}; // 正确

    // 4. 方法(完整)
    export function f1(a,b){
        return a*b;
    }

    // 5. 方法(接口)
    let f2 = function f1(a,b){
        return a*b;
    }
    export {f2};

    // 6. 方法(as方法)
    function f3 (){ console.log('引用') }
    export {
        F3 as f3
    }

    // 7.export default
    export default  M = 1;
    export let  N = 2;