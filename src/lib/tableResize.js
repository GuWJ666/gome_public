// 防抖
export const debounce = function (func, wait = 150) {
    let timer = 0;
    let self = this;
    return function (...args) {
        if (timer) {
            // 如果在指定时间间隔内又再次触发，则继续延时
            clearTimeout(timer);
        }
        // 重点：使用$nextTick函数
        self.$nextTick(() => {
            timer = setTimeout(() => {
                func.apply(self, args);
            }, wait);
        });
    };
};

export const resize = function () {
    return debounce.call(this, function () {
        if (this.tableheight !== undefined) {
            if (this.isBtn) {
                this.tableheight =
                    document.getElementsByClassName("table")[0].offsetHeight - 97;
            } else {
                let height = 0;
                this.isTbtn ? height = 120 : height = 107
                this.tableheight =
                    document.getElementsByClassName("table")[0].offsetHeight -
                    height -
                    document.getElementsByClassName("btnHeight")[0].offsetHeight;
            }
        }
        if (this.funStyle && (this.funStyle == "03main" || this.funStyle == '01main')) {
            this.tableheight = this.tableheight + 10;
        }
        this.treeheight =
            document.getElementsByClassName("table")[0].offsetHeight - 97;
        if (this.childTableHeight !== undefined) {
            if (this.isBtn) {
                this.childTableHeight =
                    document.getElementsByClassName(this.pageHeight)[0].offsetHeight - 57;
            } else {
                if (document.getElementsByClassName(this.pageHeight).length > 0) {
                    this.childTableHeight =
                        document.getElementsByClassName(this.pageHeight)[0].offsetHeight -
                        document.getElementsByClassName(this.pageHeight)[0].childNodes[0].offsetHeight - 57;
                }

            }
        }
    });
};
