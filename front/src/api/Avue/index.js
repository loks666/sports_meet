// import request from "./request";
// import {Uselect} from '@/request/api';

// 设置手机号的验证规则
const checkPhone = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入联系方式'))
  } else {
    const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
    if (reg.test(value)) {
      callback()
    } else {
      return callback(new Error('请输入正确的电话'))
    }
  }
}

// 设置密码校验规则
const checkPassword = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入6到12位字母或数字密码'))
  } else {
    // const reg = /^(20)d{12}$/;
    const reg = /^(\w){6,12}$/;
    if (reg.test(value)) {
      callback()
    } else {
      return callback(new Error('请输入正确的密码'))
    }
  }
}

//验证姓名（只能输入中文名）
const checkName = (rule, value, callback) => {
  const reg = /^(?=.{2,5}$)(((?![\u3000-\u303F])[\u2E80-\uFE4F]|\·)*(?![\u3000-\u303F])[\u2E80-\uFE4F](\·)*)$/;
  if (!reg.test(value)) {
    callback(new Error('请输入2-5个汉字'))
  } else {
    callback()
  }
}

// 设置学号号的验证规则
const checkStnumber = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入学号'))
  } else {
    // const reg = /^(20)d{12}$/;
    const reg = /^20[0-9]\d{9}$/;
    if (reg.test(value)) {
      callback()
    } else {
      return callback(new Error('请输入正确的学号'))
    }
  }
}

// let baseUrl = 'http://localhost:9090/college/selectCollegeName'

export const indexAvue = {


  border: true,                   //显示递增id
  index: true,
  indexLabel: '序号',
  stripe: true,
  calcHeight: 30,
  searchMenuSpan: 4,
  // menuAlign: 'center',
  searchSpan: 5,

  //表格小搜索按钮
  searchBtn: false,

  //操作栏查看
  viewBtn: false,

  dialogDrag: true, //表单拖拽


  // addBtn:false,

  // title:'表格的标题',
  page: false,
  addBtn: false,
  align: 'center',
  // excelBtn: true,
  menuAlign: 'center',
  formslot: true,
  columnSort: true, //列拖拽
  selection: true, //开启多选
  column: [

    {
      label: '姓名',
      prop: 'usersName',
      // search: true,
      rules: [{
        required: true,
        message: '姓名不能为空',
        trigger: 'blur'
      }, {
        validator: checkName,
        trigger: 'blur'
      }]
    },
    {
      label: '学号',
      prop: 'usersStnumber',
      editDisabled: true,   //编辑的时候不能修改
      rules: [{
        required: true,
        message: '学号不能为空',
        trigger: 'blur'
      }, {
        validator: checkStnumber,
        trigger: 'blur'
      }]
    },
    {
      label: '密码',
      prop: 'usersPwd',
      // display:true,	//是否可见
      // editDisplay:true,
      hide: true,   //表单查询是否显示
      rules: [{
        required: true,
        message: '密码不能为空',
        trigger: 'blur'
      }, {
        validator: checkPassword,
        trigger: 'blur'
      }]
    },

    {
      label: '性别',
      prop: 'usersSex',
      // type:'input',
      type: 'radio',
      // slot: true,
      border: true,

      rules: [{
        required: true,
        message: '请选择性别',
        trigger: 'blur'
      }],
      dicData: [{
        label: '男',
        value: 0
      }, {
        label: '女',
        value: 1
      }]
    },
    {
      label: '电话',
      prop: 'usersPhone',
      value: '',
      span: 12,
      rules: [{
        required: true,
        message: '电话号码不能为空',
        trigger: 'blur'
      }, {
        validator: checkPhone,
        trigger: 'blur'
      }]
    },
    {
      label: '邮箱',
      prop: 'usersEmail',
      hide: true,   //表单查询是否显示
    },
    // {
    //   label: '参与项目',
    //   prop: 'competitionNb',
    //   hide: true,   //表单查询是否显示
    // },

    {
      label: '院系',
      prop: 'collegeName',
      type: 'select',
      // dicUrl:Uselect(),
      // props: {
      //   label: "college_name",
      //   value: "college_name"
      // },
      rules: [{
        required: true,
        message: '请选择院系',
        trigger: 'blur'
      }],

      dicData: [{
        label: '理工学院',
        value: '理工学院'
      }, {
        label: '体育与健康学院',
        value: '体育与健康学院'
      },
        {
          label: '语言文学学院',
          value: '语言文学学院'
        },
        {
          label: '马克思学院',
          value: '马克思学院'
        },
        {
          label: '经济与管理学院',
          value: '经济与管理学院'
        },
        {
          label: '教育与音乐学院',
          value: '教育与音乐学院'
        },
        {
          label: '艺术与设计学院',
          value: '艺术与设计学院'
        },
        {
          label: '商贸与法律学院',
          value: '商贸与法律学院'
        },
        {
          label: '传媒学院',
          value: '传媒学院'
        },

      ]
    },
    // {
    //   label: "日期",
    //   prop: "date",
    //   type: "date",
    //   format: "yyyy-MM-dd hh:mm:ss",
    //   valueFormat: "yyyy-MM-dd hh:mm:ss",
    // }
  ]
}
