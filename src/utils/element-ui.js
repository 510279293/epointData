import Vue from 'vue'
import '../assets/theme/index.css'
// import 'element-ui/lib/theme-chalk/index.css';
//  过渡动画
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
// 组件
import { Button, Breadcrumb, BreadcrumbItem, Select, Menu, Upload, Submenu, MenuItem, MenuItemGroup, Input, InputNumber, Message, Form, FormItem, Option, Radio, RadioGroup, RadioButton, Checkbox, CheckboxGroup, Slider, ColorPicker, Pagination, Table, TableColumn, Popover, Steps, Step, Tabs, TabPane, Dropdown, DropdownMenu, DropdownItem, DatePicker, TimePicker, MessageBox, Icon, Tooltip, Tag, Dialog, Autocomplete, OptionGroup, Cascader, Collapse, CollapseItem, Switch, Notification, Loading, ButtonGroup, Tree, Progress, Carousel, CarouselItem, Row, Rate, Col, Badge, Transfer, Card } from 'element-ui'

Vue.component(CollapseTransition.name, CollapseTransition)

Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(ButtonGroup)
Vue.use(Select)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Upload)
Vue.use(Tooltip)

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Option)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)

Vue.use(Pagination)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Popover)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Icon)
Vue.use(Tag)
Vue.use(Dialog)
Vue.use(Autocomplete)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(OptionGroup)
Vue.use(Switch)
Vue.use(Progress)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Transfer)

Vue.use(Tree)
// Vue.use(Alert)
Vue.use(Slider)
// Vue.use(Icon)
// Vue.use(Row)
// Vue.use(Col)
// Vue.use(Upload)
// Vue.use(Progress)
// Vue.use(Spinner)
Vue.use(Badge)
Vue.use(Card)
Vue.use(Rate)
// Vue.use(Steps)
// Vue.use(Step)
// Vue.use(Scrollbar)
// Vue.use(Collapse)
// Vue.use(CollapseItem)
Vue.use(Cascader)
Vue.use(ColorPicker)
Vue.use(Loading)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
