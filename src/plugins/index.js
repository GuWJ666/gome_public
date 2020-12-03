/*
 * @Author: guwenjiang
 * @Date: 2020-12-02 16:41:18
 * @LastEditors: guwenjiang
 * @LastEditTime: 2020-12-02 16:48:53
 */
import directives from "../directives"
export default {
    install (Vue, options) {
        Vue.directive("drag", directives["draggable"])
    }
}