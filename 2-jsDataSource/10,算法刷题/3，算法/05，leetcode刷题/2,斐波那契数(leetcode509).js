//for循环
var fib1 = function(N) {
	if(N == 0){
		return 0
	}else if(N == 1){
		return 1
	}else if(N == 2){
		return 1
	}else{
		let arr = [0,1,1]
		for(let i = 2 ; i <= N ; i++){
			arr[i] =  arr[i-1] + arr[i-2]
		}
		console.log(arr)
		return arr[N]
	}
};
//解构赋值
function fib2(N){
	let [a, b] = [0, 1]
		let i = 0
		while (i < N) {
			[a, b] = [b, b + a]
			i++
			console.log(a);
		}
		return a
}
console.time("global");
fib1(10);
fib2(10);
console.timeEnd("global");