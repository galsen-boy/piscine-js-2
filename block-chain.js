function blockChain(data,prev = { index: 0, hash: '0' }){
    let obj  = {
        data,
        prev,
    }
    obj.index = obj.prev.index + 1
    obj.hash = hashCode(obj.index+prev.hash+JSON.stringify(data))
    obj.chain = (data) => blockChain(data,obj)
  return obj
}