const path = require('path');  // Подключаем модуль path
const HtmlWebpackPlugin = require('html-webpack-plugin');  // Плагин для HTML

module.exports = {
    entry: './src/index.js',  // Точка входа для React приложения
    output: {
        path: path.resolve(__dirname, 'dist'),  // Папка для финальной сборки
        filename: 'bundle.js',  // Имя файла с бандлом
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',  // Настройки для Babel
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],  // Поддержка .js и .jsx файлов
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',  // Шаблон HTML
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),  // Папка для статических файлов
        compress: true,  // Сжатие
        port: 3000,  // Порт для сервера
        hot: true,  // Горячая замена
    },
};
