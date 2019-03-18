<template>
  <div class="biz-CooecLiveSubsidyStandard ">
   <el-table
     :data="tableData"
     height="250"
     border
     style="width: 100%"
   >
     <el-table-column
       prop="title"
       label="标题"
       min-width="50px"
     >
     </el-table-column>

     <el-table-column
       prop="img"
       label="图片"
       min-width="180px"
     >
     </el-table-column>
     <el-table-column
       prop="content"
       label="内容"
       min-width="300px"
     >
     </el-table-column>
   </el-table>
  </div>
</template>
<script>
export default {
  name: 'CooecLiveSubsidyStandard',
  data () {
    return {
      tableData: [],
      tableData1: []
    }
  },
  computed: {},
  watch: {},
  create () {},
  mounted () {
    this.axios.get('http://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php').then((res) => {
      console.log(res)
      this.tableData = res.data.banner
      console.log(res.data.banner)
    })
  },
  methods: {
  }
}
</script>
<style lang="scss">
  .biz-CooecLiveSubsidyStandard {
    padding:0 10%;
    th{
      background: antiquewhite;
    }
    /*滚动条  begin*/
    * {
      scrollbar-face-color: #cccccc;
      /*面子*/
      scrollbar-arrow-color: #fff;
      /*箭头*/
      scrollbar-3dlight-color: #ccc;
      /*最外左*/
      scrollbar-highlight-color: #ccc;
      /*左二*/
      scrollbar-shadow-color: #ccc;
      /*右二*/
      scrollbar-darkshadow-color: #ccc;
      /*右一*/
      scrollbar-track-color: #eeeeee;
      /*滑道*/
    }
    ::-webkit-scrollbar {
      width: 6px;
      height: 10px;
    }
    /*滚动条宽度*/
    /*滚动条按钮*/
    /*滑道全部*/
    ::-webkit-scrollbar-track-piece {
      background-color: #fff0 ;
      /*滑道*/
      -webkit-border-radius: 0;
      /*滑道圆角宽度*/
    }
    ::-webkit-scrollbar-thumb {
      background-color: #ccc;
      /*滑动条表面*/
      border: solid 2px #ccc;
      /*滑动条边框*/
      border-radius: 7px;
      /*滑动条圆角宽度*/
    }
    /*横竖滚动条交角*/
    ::-webkit-scrollbar-corner {
      background-color: none;
    }
    /*横竖滚动条交角图案*/
    ::-webkit-resizer {
      background-repeat: no-repeat;
      background-position: bottom right;
    }
    /*鼠标滑过滑动条*/
    ::-webkit-scrollbar-thumb:hover {
      background-color: #bbb;
      border: solid 2px #bbb;
      /*滑动条边框*/
    }
    /*滚动条 end*/
  }
</style>
<style lang="scss" scoped>
  .biz-CooecStayStandard {
    /*display: flex;*/
  }
</style>
