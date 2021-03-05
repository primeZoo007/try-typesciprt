const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
// const {cleanWebpackPlugin} = require('clean-webpack-plugin')
// webpack的配置
module.exports={
    mode:'development',
    entry:'./src/index.ts',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        environment:{
            arrowFunction:false,
            const:false,
        }
    },
    module:{
        rules:[{
            test:/\.ts$/,
            use:[{
                loader:'babel-loader',
                // 设置babel
                options:{
                    // 设置预定义的环境
                    presets:[
                        [
                            '@babel/preset-env',
                            // {
                            //     target:{
                            //         "chrome":"81"
                            //     },
                            //     "corejs":"3",
                            //     // 使用corejs的方式的方式按需加载
                            //     "useBuiltIns":"usage"
                            // }
                        ]
                    ]
                }
            },'ts-loader'],
            // 要排除的文件
            exclude:/node_modules/
        },{
            test:/\.less$/,
            use:['style-loader','css-loader','less-loader'],
            // 要排除的文件
            exclude:/node_modules/
        }]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        }), //自动生成html
    ],
    // 用来设置引用模块
    resolve:{
        extensions:['.ts','.js']
    }
}