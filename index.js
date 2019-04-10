var FIBOS = require('fibos.js')
var fs = require('fs')
var path = require('path');

var fibos = FIBOS({
  chainId: '68cee14f598d88d340b50940b6ddfba28c444b46cd5f33201ace82c78896793a',
  keyProvider: ['5KGnDqYco2ukDMw6uMX13DSJMsBAFS81M58CGSjK36Sxbo6gZDm','5JHAye4qVMDpvryrS2uqhD3Y9VK6zu3ywMzpebcgMUvXS49TESf'],
  httpEndpoint: 'http://127.0.0.1:8801',
  logger: {
    log: null,
    error: null
  },
  broadcast: true,
});

const chunk = fs.readFile(path.resolve(__dirname, `test.tmp`));

let account = 'testnetbppa1'
let contract = 'hello'


// ctx = fibos.contractSync('eosio');
// let r = ctx.buyrambytesSync('fibos', account, 1 * 1024 * 1024 *1024, {
//   authorization: 'fibos'
// });
// r = fibos.getAccountSync(account);
// console.log("used: ", parseInt(r.ram_usage)/1024/1024);
// console.log("unused: ", parseInt(r.total_resources.ram_bytes)/1024/1024);


const wasm = fs.readFile(path.resolve(__dirname, `${contract}.js`));
const abi = fs.readFile(path.resolve(__dirname, `${contract}.abi`));

fibos.setcodeSync(account, 0, 0, fibos.compileCode(wasm), {
    authorization: account
});
fibos.setabiSync(account, JSON.parse(abi), {
    authorization: account
});

let ctx = fibos.contractSync(account);

for(var i = 0; i <= 1000000; i++) {
  let r = ctx.hiSync(i, chunk, {
    authorization: account
  });

  r = fibos.getAccountSync(account);
  console.log("used: ", parseInt(r.ram_usage)/1024/1024);
  console.log("unused: ", parseInt(r.total_resources.ram_bytes)/1024/1024);
}




