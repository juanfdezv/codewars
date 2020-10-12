// https://www.codewars.com/kata/58356a94f8358058f30004b5

function flyBy(lamps, drone){
  if(lamps.length <= drone.length) return "o".repeat(lamps.length);
  return "o".repeat(drone.length) + "x".repeat(lamps.length - drone.length);
}