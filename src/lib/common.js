/*
 * 格式化日期时间
 * */
Date.prototype.format = function(fmt) {
  let o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};
/*
 * 数组是否包含元素
 * */
Array.prototype.contains = function(needle) {
  for (let i in this) {
    if (this[i] == needle) return true;
  }
  return false;
};
/*
 * 数组是否包含对象（通过id判断）
 * */
Array.prototype.containsObj = function(needle) {
  if (needle) {
    for (let i in this) {
      if (this[i].id == needle.id) return true;
    }
  }
  return false;
};
