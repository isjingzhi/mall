import {
  UPDATE
} from './mutation-types'
export default {
  // actions 中的默认参数是 context
  oupdate(context, payload) {
    // 方法 一:
    // setTimeout(() => {
    //   // 异步修改提交给 mutation
    //   console.log(payload.msg);
    //   context.commit(UPDATE)
    //   payload.success("12345678message")
    //   // console.log("完事了");
    // }, 1000)

    // 方法 二:
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit(UPDATE)
        resolve("完成后传递的参数")
      }, 1000)
    })
  }
}
