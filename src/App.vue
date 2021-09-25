<template>
  <div class="app">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="header-left">
              <img
                  :src="logo"
                  style="width: 120px; height: 40px; background-color: #42b983"
                  @click="onRefresh"
              >
            </div>
          </el-col>
          <el-col :span="12">
            <div class="header-middle">
              <el-button>系统1</el-button>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="header-right">
              <el-menu
                  :default-active="menuActive"
                  mode="horizontal"
                  :router="true"
              >
                <el-menu-item index="/dashboard">仪表盘</el-menu-item>
                <el-menu-item index="/navigation">导航</el-menu-item>
                <el-menu-item index="/admin">管理后台</el-menu-item>
                <el-sub-menu index="5">
                  <template #title>
                    <el-avatar
                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    ></el-avatar>
                    陈孝顺
                  </template>
                  <el-menu-item index="2-1">个人空间</el-menu-item>
                  <el-menu-item index="2-1">修改密码</el-menu-item>
                  <el-menu-item index="2-2">注销</el-menu-item>
                </el-sub-menu>
              </el-menu>
            </div>
          </el-col>
        </el-row>

      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import {computed, ref} from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import logo from '@/assets/logo.png';
import {useRoute} from 'vue-router';
import {getLogger} from '@/libs/logger';

let logger = getLogger('App');
export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {
    const route = useRoute();
    const onRefresh = () => {
      window.location.href = '/';
    };
    const menuActive = computed(() => {
      const path = route.path;
      return path === '/' ? '/dashboard' : path;
    });
    return {
      onRefresh,
      menuActive,
      logo,
    };
  },
};
</script>
<style lang="less">

.app {
  height: 100%;

  .header-right {
    text-align: right;

    .el-menu {
      justify-content: flex-end;
      height: 60px;
    }
  }

  .el-container {
    height: 100%;
  }

  .el-header, .el-main {
    margin-bottom: 10px;
  }

  .el-footer {
  }

  .el-header {
    padding-bottom: 1px;
    border-bottom: 1px solid #DCDFE6;
  }

  .el-main {
  }

  .el-row {
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
