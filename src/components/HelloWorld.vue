<template>
  <div class="biz-CooecLiveSubsidyStandard ">
    <div style="margin-bottom:10px;">
      <el-button icon="icon iconfont icon-add" type="primary" plain ></el-button>
    </div>
    <el-table
      :height="600"
      :data="tableData"
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
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="" width="30%">
        </template>
      </el-table-column>
      <!--利用插槽，在表格中插入input框-->
      <el-table-column
        prop="content"
        label="内容"
        min-width="300px"
      >
        <template slot-scope="scope">
          <el-input type="text" min-width="300px" v-model="scope.row.content" @change="change(scope.row.content)"/>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      // 表格的数据
      tableData: []
    }
  },
  computed: {},
  watch: {},
  create () {},
  mounted () {
    // 获取表格的数据
    this.axios.get('http://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php').then((res) => {
      // 表格数据进行赋值
      this.tableData = res.data.banner
    })
  },
  methods: {
    // 当input的值发生变化时，触发的事件
    change (row) {
      console.log(row)
    }
  }
}
</script>
<style lang="scss" scoped>
  *{
    margin:0;
    padding:0;
  }
</style>
