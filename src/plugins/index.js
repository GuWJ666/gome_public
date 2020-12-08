/*
 * @Author: guwenjiang
 * @Date: 2020-12-02 16:41:18
 * @LastEditors: guwenjiang
 * @LastEditTime: 2020-12-04 09:42:44
 */
import directives from "../directives"
export default {
    install (Vue, options) {
        Vue.directive("drag", directives["draggable"])
        Vue.directive("dragGrid", directives["draggableGrid"])
    }
}