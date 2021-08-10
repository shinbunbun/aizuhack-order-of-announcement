const { SHA3 } = require('sha3');

const teamsArr = ['チーム1 Ahoy', 'チーム2 Team2', 'チーム3 S-DAT', 'チーム4', 'チーム5 ✨MON💙MON✨', 'チーム6', 'チーム7', 'チーム8', 'チーム9 team9', 'チーム10', 'チーム11 草原', 'チーム13', 'チーム14', 'チーム16', 'チーム17', 'チーム18'];
const hashArr = [];
const teamObj = {};
const hash = new SHA3(512);

for (let i = 0; i < teamsArr.length; i += 1) {
  hash.update(teamsArr[i]);
  hashArr.push(hash.digest('hex').toString());
  teamObj[hash.digest('hex')] = teamsArr[i];
  hash.reset();
}

hashArr.sort();

for (let i = 0; i < hashArr.length; i += 1) {
  if (i === 9) {
    console.log('----------休憩----------');
  }
  console.log(`発表順${i + 1}: ${teamObj[hashArr[i]]}`);
}
