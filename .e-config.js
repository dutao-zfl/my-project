var packageConfig=require('./package.json');
module.exports = function (configs) {
    configs = Object.assign({}, configs, {
        name: packageConfig.name,
        defaultPort: 8002,
        devServer: Object.assign({},
            configs.devServer,
            {
                proxy: [{
                    context: ['/**', '!/app/**', '!/webpack/**', '!/webpack-dev-server/**', '!/sockjs-node/**', '!/index.html'],
                    target: 'http://tstq1.360kad.com',
                    changeOrigin: true
                }]
            }),
        apps: ['home'],
        entries: ['src/home/index']
    });
    return configs;
};
/*const path = require('path');
module.exports = function (configs) {
    configs = Object.assign({}, configs, {
        name: 'default',
        open: false,
        defaultPort: 8002,
        devServer: Object.assign({},
            configs.devServer,
            {
                proxy:undefined

            }),
        apps: ['home'],

    });
    return configs;
};*/
