// require.context(directory, useSubdirectories, regExp)有三个参数：

// directory：说明需要检索的目录
// useSubdirectories：是否检索子目录
// regExp: 匹配文件的正则表达式

//这些router.js必须返回的对象，不然循环得去一层
const routes = require.context('@/view', true, /\.router\.js$/);

export default routes.keys().map(key => (routes(key).default || routes(key)))
