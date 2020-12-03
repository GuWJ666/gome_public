import {getDataLevelUserLoginNew, getDataLevelUserLogin} from "../axios/axios"
//获取多语言
export const getSysLananges = (lanType, lanCodes) => {
  let param = {
    _mt:  this.$global.mt+"BaseLang.getSysLans",
    lanType: lanType,
    lanCodes: lanCodes,
    isProp: true,
  }
  return getDataLevelUserLogin(param)
}
