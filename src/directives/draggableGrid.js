/*
 * @Author: guwenjiang
 * @Date: 2020-12-04 09:41:44
 * @LastEditors: guwenjiang
 * @LastEditTime: 2020-12-04 09:44:01
 */
export default {
    bind: function (el) { },
    inserted: (el, binding) => {
        let dom = "";
        if (binding.value && binding.value !== "") {
            dom = document.getElementsByClassName(binding.value);
        } else {
            dom = el;
        }
        el.style.cursor = "move";

        el.onmousedown = function (e) {
            console.log(binding.value, "binding.value")
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