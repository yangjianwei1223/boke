module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'assets',
    lintOnSave: true,
    devServer: {
        open: true,
        host: 'localhost',
        port: '8090',
        https: false,
        hotOnly: true,
        proxy: null
    }
}