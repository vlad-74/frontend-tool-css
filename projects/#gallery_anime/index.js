let gl_hr = '==============================================================================================='
const NODE_P = __dirname + '/public/styles/index.css';

var fs = require('fs');
var stream = new fs.ReadStream(NODE_P, {encoding: 'utf-8'});
console.log('\n' + gl_hr + '\n' + "START" + '\n');
stream.on('readable', function() {
  var data = stream.read();
  if(data != null){console.log('ФАЙЛ ' + NODE_P + ': ' + '\n' +  data.toString());}
});

stream.on('end', function() {
  console.log('\n' + "THE END" + '\n' + gl_hr);
});
