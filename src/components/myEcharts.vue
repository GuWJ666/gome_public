<template>
  <div>
    <div id="echart1"></div>
    <div id="echart2"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this._initEcharts1();
    this._initEcharts2();
  },
  methods: {
    _initEcharts1() {
      //入门
      let echart = this.$echarts.init(document.getElementById("echart1"));
      let option = {
        title: {
          text: "在vue中使用echarts"
        },
        tooltip: {},
        xAxis: {
          data: ["一", "二", "三", "四", "五", "六"]
        },
        yAxis: {},
        series: [
          { name: "数字", type: "line", data: [60, 50, 40, 30, 20, 10] },
          { name: "星期", type: "bar", data: [60, 50, 40, 30, 20, 10] }
        ]
      };
      echart.setOption(option);
    },
    _initEcharts2() {
      //echarts组件
      let echart = this.$echarts.init(document.getElementById("echart2"));
      let dataAll = [
        [
          [10.0, 8.04],
          [8.0, 6.95],
          [13.0, 7.58],
          [9.0, 8.81],
          [11.0, 8.33],
          [14.0, 9.96],
          [6.0, 7.24],
          [4.0, 4.26],
          [12.0, 10.84],
          [7.0, 4.82],
          [5.0, 5.68]
        ],
        [
          [10.0, 9.14],
          [8.0, 8.14],
          [13.0, 8.74],
          [9.0, 8.77],
          [11.0, 9.26],
          [14.0, 8.1],
          [6.0, 6.13],
          [4.0, 3.1],
          [12.0, 9.13],
          [7.0, 7.26],
          [5.0, 4.74]
        ],
        [
          [10.0, 7.46],
          [8.0, 6.77],
          [13.0, 12.74],
          [9.0, 7.11],
          [11.0, 7.81],
          [14.0, 8.84],
          [6.0, 6.08],
          [4.0, 5.39],
          [12.0, 8.15],
          [7.0, 6.42],
          [5.0, 5.73]
        ],
        [
          [8.0, 6.58],
          [8.0, 5.76],
          [8.0, 7.71],
          [8.0, 8.84],
          [8.0, 8.47],
          [8.0, 7.04],
          [8.0, 5.25],
          [19.0, 12.5],
          [8.0, 5.56],
          [8.0, 7.91],
          [8.0, 6.89]
        ]
      ];
      let mark = {
        slident: true, //图形是否不响应鼠标事件
        animation: true, //是否开启动画
        label: {
          //标线的文本内容及文本位置
          formater: "1+1=2",
          align: "center"
        },
        lineStyle: {
          //标线的样式
          type: "dotted"
        },
        tooltip: {
          //提示
          formatter: "1+1=3"
        },
        data: [
          [
            {
              coord: [0, 3], //标线起点位置
              symbol: "arrow" //标线起点标记的图形
            },
            {
              coord: [20, 13], //标线终点位置
              symbol: "pin" //标线终点标记的图形
            }
          ]
        ]
      };
      let option = {
        title: {
          //图表内容及位置
          text: "Anscombe's quartet",
          left: "center",
          top: 0
        },
        // legend: {},
        grid: [
          //图表位置
          { x: "7%", y: "7%", width: "38%", height: "38%" },
          { x2: "7%", y: "7%", width: "38%", height: "38%" },
          { x: "7%", y2: "7%", width: "38%", height: "38%" },
          { x2: "7%", y2: "7%", width: "38%", height: "38%" }
        ],
        tooltip: {
          trigger: "axis" //辅助线
        },
        toolbox: {
          //工具栏组件
          show: true,
          feature: {
            //各工具配置项
            dataZoom: {
              //缩放
              show: true //是否显示
              // title:'缩放还原'//标题
            },
            dataView: {
              //数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新
              show: true,
              // title:'数据视图',
              readOnly: true //是否只读
            },
            magicType: {
              //切换图表类型
              show: true,
              type: ["line", "bar", "pie", "stack", "tiled"] //图表类型
            },
            restore: {
              //配置项还原
              show: true
              // title:'还原'
            },
            saveAsImage: {
              //保存为图片
              type: "png", //图片类型
              name: "数据分析报告", //文件名称
              backgroundColor: "rgb(142, 223, 208)", //图片背景色
              connectedBackgroundColor: "#fff" //如果有多个图表，那么就会产生间隙
            },
            brush: {
              //选框组件的控制按钮
              type: "keep",
              title: "选框组件的控制按钮"
            }
          }
        },
        dataZoom: [
          //区域缩放组件，dataZoom 主要是对 数轴（axis） 进行操作，控制数轴的显示范围
          //dataZoom 组件可 同时存在多个，起到共同控制的作用。如果多个 dataZoom 组件共同控制同一个数轴，他们会自动联动。
          {
            id: "dataZoomX",
            type: "slider",
            xAxisIndex: 0,
            filterModel: "filter"
          },
          {
            id: "dataZoomY",
            type: "slider",
            yAxisIndex: 0,
            filterModel: "empty"
          },
          {
            // id: "dataZoomX",
            id:"zoomX",
            type: "slider",
            xAxisIndex: 1,
            filterModel: "filter"
          },
          {
            // id: "dataZoomY",
            id:"zoomY",
            type: "slider",
            yAxisIndex: 1,
            filterModel: "empty"
          }
        ],
        visualMap: {
            min:0,
            max:300,
            // splitNumber:5,
            color:['#d94e5d','#eac376','#50a3ba'],
            textStyle:{
                color:'#fff'
            }
        },
        xAxis: [
          //每个图表的x轴配置
          { gridIndex: 0, min: 0, max: 20 },
          { gridIndex: 1, min: 0, max: 20 },
          { gridIndex: 2, min: 0, max: 20 },
          { gridIndex: 3, min: 0, max: 20 }
        ],
        yAxis: [
          //每个图表的y轴配置
          { gridIndex: 0, min: 0, max: 30 },
          { gridIndex: 1, min: 0, max: 30 },
          { gridIndex: 2, min: 0, max: 30 },
          { gridIndex: 3, min: 0, max: 30 }
        ],
        series: [
          {
            name: "Ⅰ", //图表名称
            type: "scatter", //图表类型
            yAxisIndex: 0, //在xaxis数组中的x轴配置
            xAxisIndex: 0, //在yaxis数组中的y轴配置
            data: dataAll[0], //在dataall数组中的data配置
            markLine: mark //图表网格
          },
          {
            name: "Ⅱ",
            type: "scatter",
            yAxisIndex: 1,
            xAxisIndex: 1,
            data: dataAll[1],
            markLine: mark
          },
          {
            name: "叁",
            type: "scatter",
            yAxisIndex: 2,
            xAxisIndex: 2,
            data: dataAll[2],
            markLine: mark
          },
          {
            name: "Ⅳ",
            type: "scatter",
            yAxisIndex: 3,
            xAxisIndex: 3,
            data: dataAll[3],
            markLine: mark
          }
        ]
      };
      echart.setOption(option);
    }
  }
};
</script>

<style scoped>
#echart1 {
  width: 300px;
  height: 300px;
}
#echart2 {
  width: 800px;
  height: 500px;
}
</style>