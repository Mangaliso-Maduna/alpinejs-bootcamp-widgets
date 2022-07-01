function findItemsOver20(itemList){
  let results=[]
  for(let i=0;i<itemList.length;i++){
    let list=itemList[i];
    let quantity=list.qty
    if( quantity> 20)
      results.push(list)
  }
  return results
}

function findItemsOver(itemList,x){
  let results=[]
  for(let i=0;i<itemList.length;i++){
    let list=itemList[i];
    let quantity=list.qty
    if( quantity> x)
      results.push(list)
  }
  return results
}