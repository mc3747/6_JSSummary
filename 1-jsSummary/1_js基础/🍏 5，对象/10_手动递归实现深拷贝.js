function deepClone(target) {
    // WeakMap作为记录对象Hash表（用于防止循环引用）
    const map = new WeakMap()

    // 判断是否为object类型的辅助函数，减少重复代码
    function isObject(target) {
        return (typeof target === 'object' && target ) || typeof target === 'function'
    }

    function clone(data) {

        // 基础类型直接返回值
        if (!isObject(data)) {
            return data
        }

        // 日期或者正则对象则直接构造一个新的对象返回
        if ([Date, RegExp].includes(data.constructor)) {
            return new data.constructor(data)
        }

        // 处理函数对象
        if (typeof data === 'function') {
            return new Function('return ' + data.toString())()
        }

        // 如果该对象已存在，则直接返回该对象
        const exist = map.get(data)
        if (exist) {
            return exist
        }

        // 处理Map对象
        if (data instanceof Map) {
            const result = new Map()
            map.set(data, result)
            data.forEach((val, key) => {
                // 注意：map中的值为object的话也得深拷贝
                if (isObject(val)) {
                    result.set(key, clone(val))
                } else {
                    result.set(key, val)
                }
            })
            return result
        }

        // 处理Set对象
        if (data instanceof Set) {
            const result = new Set()
            map.set(data, result)
            data.forEach(val => {
                // 注意：set中的值为object的话也得深拷贝
                if (isObject(val)) {
                    result.add(clone(val))
                } else {
                    result.add(val)
                }
            })
            return result
        }

        // 收集键名（考虑了以Symbol作为key以及不可枚举的属性）
        const keys = Reflect.ownKeys(data)
        // 利用 Object 的 getOwnPropertyDescriptors 方法可以获得对象的所有属性以及对应的属性描述
        const allDesc = Object.getOwnPropertyDescriptors(data)
        // 结合 Object 的 create 方法创建一个新对象，并继承传入原对象的原型链， 这里得到的result是对data的浅拷贝
        const result = Object.create(Object.getPrototypeOf(data), allDesc)

        // 新对象加入到map中，进行记录
        map.set(data, result)

        // Object.create()是浅拷贝，所以要判断并递归执行深拷贝
        keys.forEach(key => {
            const val = data[key]
            if (isObject(val)) {
                // 属性值为 对象类型 或 函数对象 的话也需要进行深拷贝
                result[key] = clone(val)
            } else {
                result[key] = val
            }
        })
        return result
    }

    return clone(target)
}


// 测试的obj对象
const obj = {
    // =========== 1.基础数据类型 ===========
    num: 0, // number
    str: '', // string
    bool: true, // boolean
    unf: undefined, // undefined
    nul: null, // null
    sym: Symbol('sym'), // symbol
    bign: BigInt(1n), // bigint

    // =========== 2.Object类型 ===========
    // 普通对象
    obj: {
        name: '我是一个对象',
        id: 1
    },
    // 数组
    arr: [0, 1, 2],
    // 函数
    func: function () {
        console.log('我是一个函数')
    },
    // 日期
    date: new Date(0),
    // 正则
    reg: new RegExp('/我是一个正则/ig'),
    // Map
    map: new Map().set('mapKey', 1),
    // Set
    set: new Set().add('set'),
    // =========== 3.其他 ===========
    [Symbol('1')]: 1  // Symbol作为key
};

// 4.添加不可枚举属性
Object.defineProperty(obj, 'innumerable', {
    enumerable: false,
    value: '不可枚举属性'
});

// 5.设置原型对象
Object.setPrototypeOf(obj, {
    proto: 'proto'
})

// 6.设置loop成循环引用的属性
obj.loop = obj



// 测试
const clonedObj = deepClone(obj)
console.log(clonedObj === obj)// false，返回的是一个新对象
  
console.log(clonedObj.arr === obj.arr)  // false，说明拷贝的不是引用
console.log(clonedObj.func === obj.func)  // false，说明function也复制了一份
console.log(clonedObj.proto)  // proto，可以取到原型的属性

