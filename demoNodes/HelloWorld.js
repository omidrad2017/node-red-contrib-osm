




module.exports = function(RED) {
    function BuildingFootprint(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            const { spawn } = require('child_process');
            const bat = spawn('cmd.exe', ['/c', "E:\\Thesis Indoor Mapping\\node-red-0.16.0\\node-red-0.16.0\\my.bat"]);
            bat.stdout.on('data', (data) => {
            console.log(data.toString());
            });

           bat.stderr.on('data', (data) => {
           console.log(data.toString());
           });

           bat.on('exit', (code) => {
           console.log(`Child exited with code ${code}`);
          });
          node.send(null);
           });
    }
    RED.nodes.registerType("ID Lon Lat Extractor from OSM",BuildingFootprint);
}