
const path = require('path');
// 使用配置 指定入口和出口;
module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: "index.js"
    },
}
