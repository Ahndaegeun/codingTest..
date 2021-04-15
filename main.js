const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

function solution(array, commands) {
  const value = [...array];
  const result = [];
  let now;
  for(i in commands) {
    now = value.slice(commands[i][0]-1, commands[i][1]);
    result.push(now.sort()[commands[i][2]])
  }
  return result;
}

const result = solution(array, commands);

console.log(result)