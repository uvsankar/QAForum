
const genUID  = (prefix) =>{
    return prefix + Math.random().toString(36).substr(2,5)
}

arrayFilter = (array, name, context) =>{
  if(context == undefined)
    throw 'context venum da....'
  return (row)=>{
    return context.r.expr(array).setIntersection(row(name)).count().ne(0)
  }
}

module.exports  ={
  genUID,
  arrayFilter
}
