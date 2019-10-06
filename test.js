const Ip2cc = require('./index.js');
const ip2cc = new Ip2cc('./IP2LOCATION-LITE-DB1.CSV');


console.log(ip2cc.lookup('8.8.8.8'));
console.log(ip2cc.lookup('84.144.170.81'));
console.log(ip2cc.lookup('12.11.136.193'));
console.log(ip2cc.lookup('200.11.136.193'));
console.log(ip2cc.lookup('220.11.136.193'));