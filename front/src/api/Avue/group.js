// 设置比赛编号的验证规则
const checkNb = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入比赛编号'))
  } else {
    // const reg = /^(20)d{12}$/;
    const reg = /^glxy[0-9]\d{5}$/;
    if (reg.test(value)) {
      callback()
    } else {
      return callback(new Error('请输入正确的比赛编号'))
    }
  }
}

// 设置比赛名字的验证规则
const checkNe = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入比赛名称'))
  } else {
    // const reg = /^(20)d{12}$/;
    const reg = /^[\u4e00-\u9fa50-9]{4,12}$/;
    if (reg.test(value)) {
      callback()
    } else {
      return callback(new Error('请输入正确的比赛名称'))
    }
  }
}

// 设置参赛人数的验证规则
const checkPe = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入参赛人数'))
  } else {
    // const reg = /^(20)d{12}$/;
    const reg = /^40$|^([1-3]\d)$|^\d?$/;
    if (reg.test(value)) {
      callback()
    } else {
      return callback(new Error('请输入正确的参赛人数'))
    }
  }
}


export const groupAvue = {
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  calcHeight: 30,
  searchMenuSpan: 4,
  searchSpan: 5,
  searchShowBtn: false,
  addBtnText: '新增分组人员',
  page: false,
  addBtn: false,
  align: 'center',
  menuAlign: 'center',
  formslot: true,
  column: [
    {
      label: '比赛名称',
      prop: 'competitionName',
      rules: [{
        required: true,
        message: '比赛名称不能为空',
        trigger: 'blur'
      }]
    },
    {
      label: '姓名',
      prop: 'name'
    },
    {
      label: '性别',
      prop: 'usersSex',
    },
    {
      label: '学院',
      prop: 'college'
    },
    {
      label: '分组',
      prop: 'groupLabel'
    },
    {
      label: '组内序号',
      prop: 'groupIndex'
    }
  ]
}
