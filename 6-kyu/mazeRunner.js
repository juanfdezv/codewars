// https://www.codewars.com/kata/58663693b359c4a6560001d6

function mazeRunner(maze, directions) {
  const n = maze.length;
  let pos = findStartingPoint(maze);
  
  for(let i = 0; i < directions.length; i++){
    pos = step(directions[i], pos);
    if(pos[0] < 0 || pos[0] >= n || pos[1] < 0 || pos[1] >= n)
      return "Dead";
    
    let posValue = maze[pos[0]][pos[1]];
    if(posValue === 1) return "Dead";
    if(posValue === 3) return "Finish";
  }
  
  return "Lost";
}

function step(dir, pos) {
  
  if(dir === "N") pos[0]--;
  if(dir === "E") pos[1]++;
  if(dir === "S") pos[0]++;
  if(dir === "W") pos[1]--;
  
  return pos;
}

function findStartingPoint(maze) {
  
  for(let i = 0; i < maze.length; i++)
    for(let j = 0; j < maze[i].length; j++)
      if(maze[i][j] === 2) return [i, j];
}