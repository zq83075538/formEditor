/****side bar map***/
/**一期规划功能**/
// 单选
// 多选
// 下拉
// 输入框
// －－－－
// 日期
// 附件
// 姓名 （默认）
// 邮件 （默认）
// 手机
// 城市 （省市）
// 地址
export var pages = {
    // 创建活动
    'create':['text','radio','checkbox','select','date_picker','attachment','city','image']
    // 投票
    ,'vote':['radio','checkbox','select','score']
    // 问卷
    ,'question':['text','radio','checkbox','select']
};
export var formElments = [{
    label: "输入框",
    type: "text",
    icon: 'edit'
}, {
    label: "评分",
    type: "score",
    icon: 'star'
}, {
    label: "单选框",
    type: "radio",
    icon: 'radio'
}, {
    label: "多选框",
    type: "checkbox",
    icon: 'checkmark box'
}, {
    label: "下拉框",
    type: "select",
    icon: 'chevron down'
}, {
    label: "日期",
    type: "date_picker",
    icon: 'wait'
}, {
    label: "附件",
    type: "attachment",
    icon: 'file'
}, {
    // 	label: "邮箱",
    // 	type: "email",
    // 	icon:'mail'
    // }, {
    label: "城市",
    type: "city",
    icon: 'marker',
    size: '1.2em'
}, {
    label: "个人照片",
    type: "image",
    icon: 'image'
}]