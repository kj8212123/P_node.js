const rolldate = require("rolldate");

var rd = new rolldate({
    el: '.end-date',
    format: 'YYYY-MM-DD',
    beginYear: 2000,
    endYear: 2100,
    minStep:1,
    lang:{title:'自定义标题'},
    trigger:'tap',
    init: function() {
      console.log('插件开始触发');
    },
    moveEnd: function(scroll) {
      console.log('滚动结束');
    },
    confirm: function(date) {
      console.log('确定按钮触发');
    },
    cancel: function() {
      console.log('插件运行取消');
    }
})
// rd.show();
rd.hide();