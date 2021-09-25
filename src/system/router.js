import {createRouter, createWebHistory} from 'vue-router';
import {getLogger} from '@/libs/logger';
import {forEach} from 'lodash';

let logger = getLogger('system.router');

const routerHistory = createWebHistory();

let ROUTER_LIST = [];


const modules = import.meta.globEager('/src/views/*/router.js');
forEach(modules, (ins) => {
    ROUTER_LIST = ROUTER_LIST.concat(ins.default);
});

// 初始化 菜单排序
ROUTER_LIST.forEach(function (item) {
    if (item.meta && item.meta.sort === undefined) {
        item.meta.sort = 0;
    }
});

// 根据 meta.sort 的值对菜单进行排序
ROUTER_LIST.sort(function (l, r) {
    if (l.meta && r.meta){
        let lSort = l.meta.sort;
        let rSort = r.meta.sort;
        return lSort - rSort;
    }
});


const router = createRouter({
    history: routerHistory,
    routes: ROUTER_LIST,
});

export default router;
