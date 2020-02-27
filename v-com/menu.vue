<template>
   <zf-menu>
      <!-- 1).先循环一次 -->
    <template v-for="menu in data">
      <!-- <zf-submenu v-if="menu.children" :key="menu.id">
        <template slot="title">{{menu.name}}</template>
      </zf-submenu> -->
      <!-- 2.将有可能重复的项 再次循环 -->
      <Resub v-if="menu.children" :key="menu.id" :data="menu"></Resub>
      <zf-menu-item  v-else :key="menu.id">{{menu.name}}</zf-menu-item>
    </template>
  </zf-menu>
</template>
<script>
import zfMenu from "./components/zf-menu";
import zfMenuItem from "./components/zf-menu-item";
import zfSubmenu from "./components/zf-submenu";
import Resub from './Resub'
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  components: {
    zfMenu,
    zfMenuItem,
    zfSubmenu,
    Resub
  }
};
</script>