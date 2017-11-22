import vue from 'vue'
export default {
    demoList: state => state.demo.demoList,
    isShowHUD : state => state.hud.hud_options.show, // 是否显示系统提示信息
    optionsHUD : state => state.hud.hud_options.options, // 系统提示信息的参数
}