import demo from './demo/demo.vue' // demo
import icon from './icon/icon.vue' // icon
import hud from './hud/hud.vue' // 提示
import wrapper from './wrapper/wrapper.vue' // 网页内容区
import layout from './layout/layout.vue' // 网页外层布局
import header from './header/header.vue' // 综合管理页页头、导航
import ycHeader from './ycHeader/ycHeader.vue' // 懿城导航
import footer from './footer/footer.vue' // 页尾
import toolbar from './toolbar/toolbar.vue' // 右侧工具栏
import customer from './customer/customer.vue' // 在线客服
import breadcrumb from './breadcrumb/breadcrumd.vue' // 面包屑
import breadcrumdItem from './breadcrumb/breadcrumd-item.vue' // 面包屑
import step from './step/step.vue' // 步骤条
import steps from './step/steps.vue' // 步骤条
import page from './page/page.vue' // 分页
import img from './img/img.vue' // 请求过来的图片处理
import inputNumber from './inputNumber/inputNumber.vue' // 数量加减
import navbar from './navbar/index.vue' // 商城右侧导航
import yichengtoolbar from './yichengtoolbar/index.vue' // 懿城右侧导航

const install = function (Vue) {
    Vue.component(demo.name, demo)
    Vue.component(icon.name, icon)
    Vue.component(hud.name, hud)
    Vue.component(wrapper.name, wrapper)
    Vue.component(layout.name, layout)
    Vue.component(header.name, header)
    Vue.component(ycHeader.name, ycHeader)
    Vue.component(footer.name, footer)
    Vue.component(toolbar.name, toolbar)
    Vue.component(customer.name, customer)
    Vue.component(breadcrumb.name, breadcrumb)
    Vue.component(breadcrumdItem.name, breadcrumdItem)
    Vue.component(step.name, step)
    Vue.component(steps.name, steps)
    Vue.component(page.name, page)
    Vue.component(img.name, img)
    Vue.component(inputNumber.name, inputNumber)
    Vue.component(navbar.name, navbar)
    Vue.component(yichengtoolbar.name, yichengtoolbar)
}

export default install