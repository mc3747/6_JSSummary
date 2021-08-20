//✅ 1，数字取整
//方法1：floor地板值；ceil天花板值，2者结合
function ToInteger(x) {
	x = Number(x);
	return x < 0 ? Math.ceil(x) : Math.floor(x);
}
//方法2：
const num1 = ~~ 1.69;
//方法3：
const num2 = 1.69 | 0;
//方法4：
const num3 = 1.69 >> 0;
//方法5：
const num4 = 1.69 ^ 0;

const num5 = ~~ -1.69;
const num6 = -1.69 | 0;
const num7 = -1.69 >> 0;
const num8 = -1.69 ^ 0;
console.log(num1,num2,num3,num4,num5,num6,num7,num8)

//✅ 2，补零操作
const FillZero = (num, len) => num.toString().padStart(len, "0");
const num = FillZero(169, 8);
console.log(num);

//✅ 3，特殊值转数值
const num11 = +null;
const num12 = +"";
const num13 = +false;
const num14 = +"169";
console.log(num11,num12,num13,num14)

//✅ 4，四舍五入小数
const RoundNum = (num, decimal) => Math.round(num * 10 ** decimal) / 10 ** decimal;
const num15 = RoundNum(1.644, 2);
console.log(num15);

//✅ 5，判断奇数和偶数：odd奇数，even偶数(自动小数转整数)
const OddEven = num => !!(num & 1) ? "odd" : "even";
const num16 = OddEven(3);
console.log(num16);

//✅ 6，取最小最大值
const arr = [0, 1, 2,-33];
const min = Math.min(...arr);
const max = Math.max(...arr);
console.log(min,max);

//✅ 7，生成范围随机数
const RandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const num17 = RandomNum(1, 20);
console.log(num17);