/***表单元素数据结构****/
/*** 表单元素的name为随机唯一_ID ********/
export var format = function(fmt) { 
     var o = { 
        "M+" : this.getMonth()+1,                 //月份 
        "d+" : this.getDate(),                    //日 
        "h+" : this.getHours(),                   //小时 
        "m+" : this.getMinutes(),                 //分 
        "s+" : this.getSeconds(),                 //秒 
        "q+" : Math.floor((this.getMonth()+3)/3), //季度 
        "S"  : this.getMilliseconds()             //毫秒 
    }; 
    if(/(y+)/.test(fmt)) {
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
    }
     for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
         }
     }
    return fmt; 
}
export var genID = function(text,randomLength) {
    randomLength = randomLength || 6;
    text = text?text+'-':'';
    let idStr = Date.now().toString(36)
    idStr += Math.random().toString(36).substr(3, randomLength)
    return text+idStr;
}
export var baseType = {
    'score':{
        itemName:genID('score'),
        description:'',
        isDisplayDescription: 0,
        displayName: "评分",
        fieldType: "score",
        rules:{
            required:false
        },
        attr:{
            scoreMax:5,
            icons:['star','heart','smile'],
            iconIndex:0
        },
        value:''
    },
    'text': {
    	itemName:genID('text'),
        description: '',
        isDisplayDescription: 0,
        displayName: "输入框",
        fieldType: "text",
        rules: {
            required: false,
            minLength: '',
            maxLength: '',
            minSize: '',
            maxSize: '',
            isNumber: false
        },
        attr: {
            isMultiline: false,
            isNumber: true,
            wordRestriction: false
        },
        itemValues:[],
        value: ''
    },
    'radio': {
    	itemName:genID('radio'),
        description: "",
        isDisplayDescription: 0,
        displayName: "单选",
        itemValues: [{
            option: "选项 1",
            value: genID(),
            isOther: false,
            isDefault:false
        }],
        rules: {
            required: false
        },
        attr: {

        },
        fieldType: "radio",
        value: ''
    },

    'checkbox': {
    	itemName:genID('checkbox'),
        description: "",
        isDisplayDescription: 0,
        displayName: "多选",
        fieldType: "checkbox",
        itemValues: [{
            option: "选项 1",
            value: genID(),
            isOther: false,
            isDefault:false
        }],
        rules: {
            required: false
        },
        attr: {

        },
        value: ''
    },

    'select': {
    	itemName:genID('select'),
        description: "",
        isDisplayDescription: 0,
        displayName: "下拉",
        fieldType: "select",
        itemValues: [{
            option: "选项 1",
            value: genID(),
            isOther: false,
            isDefault:false
        }],
        rules: {
            required: false
        },
        attr: {

        },
        value: ''
    },

    'date_picker': {
    	itemName:genID('date_picker'),
        description: "",
        isDisplayDescription: 0,
        displayName: "日期时间",
        rules: {
            required: false
        },
        attr: {
            haveTime: false
        },
        itemValues:[],
        fieldType: "date_picker",
        value: ''
    },

    'attachment': {
    	itemName:genID('attachment'),
        description: "",
        isDisplayDescription: 0,
        displayName: "附件",
        fieldType: "attachment",
        rules: {
            required: false
        },
        attr: {
            fileRestriction: false,
            custom:'',
            fileType:'',
            fileLength:'',
            fileSize:5
        },
        itemValues:[],
        value: ''
    },
    'image':{
        itemName: genID('image'),
        description: '',
        isDisplayDescription: 0,
        displayName: "个人照片",
        fieldType: "attachment",
        rules: {
            required: false 
        },
        attr: {
            custom:'.png,.jpg,.jpeg',
            fileType:'other',
            fileLength:1,
            fileSize:1

        },
        itemValues: ['collectItems'],
        value: ''
    },

    'name': {
    	itemName:genID(),
        description: '',
        isDisplayDescription: 0,
        displayName: "姓名",
        fieldType: "text",
        rules: {
            required: true,
            minLength: 2,
            maxLength: 8
        },
        attr: {

        },
        itemValues:[],
        value: ''
    },

    'email': {
    	itemName:genID(),
        description: '',
        isDisplayDescription: 0,
        displayName: "邮箱",
        fieldType: "text",
        rules: {
            required: false,
            isEmail: true
        },
        attr: {
        },
        itemValues:[],
        value: ''
    },

    'mobile': {
    	itemName:genID(),
        description: '',
        isDisplayDescription: 0,
        displayName: "手机",
        fieldType: "text",
        rules: {
            required: true,
            isMobile: true
        },
        attr: {

        },
        itemValues:[],
        value: ''
    },
    'city': {
    	itemName:genID('city'),
        description: '',
        isDisplayDescription: 0,
        displayName: "城市",
        fieldType: "city",
        rules: {
            required: false
        },
        attr: {

        },
        itemValues:[],
        value: ''
    }

}

