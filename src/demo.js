console.log('demo');
// 动态加载 @babel/plugin-syntax-dynamic-import[webpack4?]
// import(/*webpackChunkName: 'jquery' */ 'jquery').then(({ default: $ }) => {
//     console.log($.length);
// })
import jquery from 'jquery';
console.log(jquery('div'));
