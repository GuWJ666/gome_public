/*
 * @Author: guwenjiang
 * @Date: 2020-12-02 16:46:03
 * @LastEditors: guwenjiang
 * @LastEditTime: 2020-12-02 16:46:27
 */
export default {
    bind: function (el) { },
    inserted: (el, binding) => {
        let dom = "";
        if (binding.value && binding.value !== "") {
            dom = document.getElementById(binding.value);
        } else {
            dom = el;
        }
        el.style.cursor = "move";

        el.onmousedown = function (e) {
            var disx = e.pageX - dom.offsetLeft;
            var disy = e.pageY - dom.offsetTop;
            let selectDom = document.getElementsByClassName('ivu-select-visible');
            let datePickerDom = document.getElementsByClassName('ivu-date-picker-focused');
            if (selectDom.length > 0 || datePickerDom.length > 0) {
                let modal = document.getElementsByClassName("cover")[0];
                modal.click();
            }
            document.onmousemove = function (e) {
                dom.style.left = e.pageX - disx + "px";
                dom.style.top = e.pageY - disy + "px";

            };
            document.onmouseup = function () {
                document.onmousemove = document.onmouseup = null;
            };
        };
    },
    update: (el, binding, vnode) => {

    }
};
