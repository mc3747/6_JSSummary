 
//✅ 1，随机rgb颜色:new Color().color
function Color(){
     this.r = Math.floor(Math.random()*255);
     this.g = Math.floor(Math.random()*255);
     this.b = Math.floor(Math.random()*255);
     this.color = 'rgba('+ this.r +','+ this.g +','+ this.b +',0.8)';
  };
  
//✅ 2，随机16进制颜色：RandomColor()
const RandomColor = () => "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
console.log(RandomColor());

//✅ 3，随机16进制颜色：getRandomColor2()
var getRandomColor2 = function(){    
    return  '#' + (function(color){    
         return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])    
         && (color.length == 6) ?  color : arguments.callee(color);    
    })('');    
 } ;


//✅ 4，RGB色值生成16进制色值：rgb2Hex('100, 50, 0')
const rgb2Hex = rgb => {
    let rgbList = rgb.toString().match(/\d+/g)
    let hex = '#'
    for (let i = 0, len = rgbList.length; i < len; ++i) {
      hex += ('0' + Number(rgbList[i]).toString(16)).slice(-2)
    }
    return hex
};

//✅ 5，颜色混合：colourBlend('#ff0000', '#3333ff', 0.5)
const colourBlend = (c1, c2, ratio) => {
  ratio = Math.max(Math.min(Number(ratio), 1), 0)
  let r1 = parseInt(c1.substring(1, 3), 16)
  let g1 = parseInt(c1.substring(3, 5), 16)
  let b1 = parseInt(c1.substring(5, 7), 16)
  let r2 = parseInt(c2.substring(1, 3), 16)
  let g2 = parseInt(c2.substring(3, 5), 16)
  let b2 = parseInt(c2.substring(5, 7), 16)
  let r = Math.round(r1 * (1 - ratio) + r2 * ratio)
  let g = Math.round(g1 * (1 - ratio) + g2 * ratio)
  let b = Math.round(b1 * (1 - ratio) + b2 * ratio)
  r = ('0' + (r || 0).toString(16)).slice(-2)
  g = ('0' + (g || 0).toString(16)).slice(-2)
  b = ('0' + (b || 0).toString(16)).slice(-2)
  return '#' + r + g + b
}

