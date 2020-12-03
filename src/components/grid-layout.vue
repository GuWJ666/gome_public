<!--
 * @Author: guwenjiang
 * @Date: 2020-12-02 11:20:55
 * @LastEditors: guwenjiang
 * @LastEditTime: 2020-12-02 16:49:11
-->
<template>
    <div class="gridLayout">
        <div class="gridItem" 
            v-drag
            v-for="(item, index) in layoutData" 
            :key="index">
            {{item}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'gridLayout',
    data() {
        return {
            layoutData: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        };
    },
};
</script>

<style scoped lang="scss">
@import "../sass/test"
</style>