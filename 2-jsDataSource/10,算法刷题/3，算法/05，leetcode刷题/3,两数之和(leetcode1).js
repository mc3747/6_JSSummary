/*
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
示例:
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/
//方法1：双for循环:复杂度O（n2），不推荐
var twoSum1 = function(nums, target){
	for (let i = 0; i < nums.length; i++) { 
		for (let j = i + 1; j < nums.length; j++) { 
			if (nums[i] + nums[j] === target) { 
				return [i, j] 
				} 
			} 
		}
}
console.log(twoSum1([2, 7, 11, 15,7,2],4));

//方法2：nums的值作为key，数组序号作为value
var twoSum2 = function(nums, target) {
	   const map = {}
	   for (let i = 0; i < nums.length; i++){
	       if(map[target - nums[i] ] >= 0){
			console.log(map);
	           return [ map[target - nums[i] ], i]
	       }
	       map[nums[i]] = i;            
	    }
    
	}
console.log(twoSum2([-2, 7, 11, 15,7,2],0));

//方法3：将方法2，进行尾递归优化
var twoSum3 = function(nums, target, i = 0, maps = {}) {
	    const map = maps
	        if(map[target - nums[i] ] >= 0 ) {
	            return [ map[target - nums[i] ], i]
	        } else {
	            map[ nums[i] ] = i;
	            i++;
	            if(i < nums.length){
	                return twoSum3(nums, target, i, map)
	            }else {
	                throw 'error: twoSum is not find'
	            }
	            
	        }
	}


console.log(twoSum3([-2, 7, 11, 15,7,2],0));