var Stack = function(){
    var items = []   //私有

    // push 栈顶添加元素
    this.push = function(element){
        items.push(element)
    }
    // pop 移除栈顶元素
    this.pop = function(){
        return items.pop()
    }
    // peek 检查栈顶
    this.peek = function(){
        return items[items.length - 1]
    }

    // 检查栈 是否为空
    this.isEmpty = function(){
        return items.length == 0
    }

    // 清除栈
    this.clear = function(){
        items = []
    }

    // 获取栈的大小
    this.size = function(){
        return items.length
    }

    // 检查items
    this.getItems = function(){
        return items
    }
}
var Queue = function(){
    var items = []

    //入队
    this.enqueue = function(element){
        items.push(element)
    }
    // 出队
    this.dequeue = function(){
        return items.shift()
    }
    //查看队列头
    this.front = function(){
        return items[0]
    }

    //检查队列是否为空
    this.isEmpty = function(){
        return items.length === 0
    }

    //队列大小
    this.size = function(){
        return items.length
    }
}

var Graph = function(){
    // 存储顶点 
    var vertices = []
    //边 
    var adjList = {}

    // 1.添加顶点
    this.addVertex = function(v){
        vertices.push(v)
        adjList[v] = []
    }
    // 2.添加边
    this.addEdge = function(a,b){
        adjList[a].push(b)
        adjList[b].push(a)
    }
    this.print = function(){
        var s = '\n'
        for(var i = 0 ; i < vertices.length ; i++){
            // 
            var dingdian = vertices[i]
            s += dingdian + ' => '
            var bian = adjList[dingdian]
            for(var j = 0; j < bian.length ; j++){
                s += bian[j]
            }
            s += '\n'
        }
        console.log(s)
    }

    // white 未发现
    // grey 已发现未探索
    // black 已探索
    var initColor = function(){
        var color = {}
        for(var i = 0 ; i < vertices.length ; i++){
            color[vertices[i]] = 'white'
        }
        return color
    }
    // v = 'A'
    this.bfs = function(v,callback){
        var color = initColor()
        /**
         * color = {
         *  A:'white',
         *  B:'white',
         *  ...
         * }
         */
        var queue = new Queue
        queue.enqueue(v)

        while(!queue.isEmpty()){
            var now = queue.dequeue()
            var bian = adjList[now]
            for(var i = 0 ; i < bian.length ; i++){
                var w = bian[i]
                if(color[w] === 'white'){
                    // 未发现的全部入列，并且标识为已发现
                    color[w] = 'grey'
                    queue.enqueue(w)
                }
            }
            color[now] = 'black'
            if(callback){
                callback(now)
            }
        }
    }
    //广度优先算法
    // d 距离
    // pred 回溯点
    this.BFS = function(v,callback){
        var color = initColor()
        /**
         * color = {
         *  A:'white',
         *  B:'white',
         *  ...
         * }
         */
        var queue = new Queue
        queue.enqueue(v)
        

        var d = {}
        var pred = {}

        for(var i = 0 ; i < vertices.length ; i++){
            d[vertices[i]] = 0
            pred[vertices[i]] = null
        }

        while(!queue.isEmpty()){
            var now = queue.dequeue()
            var bian = adjList[now]
            for(var i = 0 ; i < bian.length ; i++){
                var w = bian[i]
                if(color[w] === 'white'){
                    // 未发现的全部入列，并且标识为已发现
                    color[w] = 'grey'

                    //设置回溯点
                    pred[w] = now
                    d[w] = d[now] + 1

                    queue.enqueue(w)
                }
            }
            color[now] = 'black'
            if(callback){
                callback(now)
            }
        }
        return {
            pred : pred,
            d : d
        }
    }

    var dfsVisite = function(u,color,callback){
        color[u] = 'grey'
        var n = adjList[u]
        for(var i = 0 ; i < n.length ; i++){
            var w = n[i]
            if(color[w] == 'white'){
                dfsVisite(w , color,callback)
            }
        }

        color[u] = 'black'

        if(callback){
            callback(u)
        }
        
    }
    this.dfs = function(v,callback){
        var color = initColor()
        dfsVisite(v,color,callback)
    }

}

var g = new Graph
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A','B')
g.addEdge('A','C')
g.addEdge('A','D')
g.addEdge('C','D')
g.addEdge('B','E')
g.addEdge('F','B')

//添加新的路径
// g.addEdge('D','F')


//广度优先算法 能解决 保证每个点的回溯点是 最近的
var s = g.BFS('A')
console.log(s)
var zuiduan = function(from,to){
    var v = to //设置当前点
    var path = new Stack()
    while(v !== from){
        path.push(v)
        v = s.pred[v]
    }
    path.push(v)
    
    var str = ''
    while(!path.isEmpty()){
        str += path.pop() + '-'
    }

    str = str.slice(0,str.length-1)

    console.log(str)
    
}


zuiduan('A','F')