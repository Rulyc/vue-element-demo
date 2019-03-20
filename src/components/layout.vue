<template>
  <div class="contain">
    <el-container>
      <el-aside width="200px">
        <div class="contain-left" style="height: 100%;">
          <!--自定义颜色-->
          <el-menu
            :default-active="menuPath"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleselect"
            router
            style="height: 100%;"
          >
            <template v-for="item in $router.options.routes">
              <!-- index 为number类型, 而index需要string类型 -->
              <!-- <el-submenu :index="index+''"> -->
              <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path"  class="menuItem">
                <div class="itemContain">
                  <!--<i class="iconfont" :class="child.class"></i>-->
                  <!--路由的名称-->
                  <span>{{child.name}}</span>
                  <!--<el-badge class="mark listbadge" :value="value" />-->
                </div>
              </el-menu-item>
            </template>
          </el-menu>
        </div>
      </el-aside>
      <el-main style="padding:0">
        <div class="contain-right">
          <!--跳转到相应的界面-->
          <router-view :key="activeDate"></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      selectMenuPath: '',
      menuPath: '',
      value: '',
      activeDate: ''
    }
  },
  mounted () {
    var arr = this.$route.path.split('/')
    var path = '/' + arr[1]
    this.menuPath = path
    this.selectMenuPath = path
  },
  watch: {
    menuPath () {
      var arr = this.$route.path.split('/')
      var path = '/' + arr[1]
      return path
    }
  },
  computed: {
  },
  methods: {
    handleselect (val) {
      console.log(val, '33')
      if (this.selectMenuPath === val) {
        //    location.reload();
        this.activeDate = new Date() + 1
      }
      this.selectMenuPath = val
    }
  }
}
</script>

<style lang="scss">
  .contain {
    /*margin:0 20px 0 20px;*/
    .contain-right {
      overflow: hidden;
      //  background: #F5FAFF;
      /*background: #F1F3F8;*/
      //  position: absolute;
      //  right: 0;
      //  width: calc(100% - 270px);
      /*height: calc(100% - 70px);*/
      /*border-top-right-radius: 10px;*/
      padding: 0;
      margin: 0;
    }
  }
</style>
