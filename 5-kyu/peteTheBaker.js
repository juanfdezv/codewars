// https://www.codewars.com/kata/525c65e51bf619685c000059

function cakes(recipe, available) {
    const keys = Object.keys(recipe);
    let output = [];
    
    for(const key of keys){
      if(key in available && available[key] !== 0)
        output.push(Math.floor(available[key] / recipe[key]));
      else
        return 0;
    }
    
    return Math.min(...output);
}