<img src="http://images2015.cnblogs.com/blog/459756/201611/459756-20161113194248577-1540305634.png" alt="">
这张图足以说明MVVM的核心功能，在这三者里面，ViewModel无疑起着重要的桥梁作用。

一方面，通过ViewModel将Model的数据绑定到View的Dom元素上面，当Model里面的数据发生变化的时候，通过ViewModel里面数据绑定的机制，触发View里面Dom元素的变化；

另一方面，又通过ViewModel来监听View里面的Dom元素的数据变化，当页面上面的Dom元素发生变化的时候，ViewModel通过Dom树的监听机制，触发对应的Model的数据变化。
当然在Vue.js里面ViewModel也是核心部件，它就是一个Vue实例。这个实例作用于单个或者多个html元素，从而实现Dom树监听和数据绑定的双向更新操作。
