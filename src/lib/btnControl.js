import { getDataLevelUserLoginData } from '../axios/axios'
import { isSuccess } from './util'
const btnControl = function (tt) {
    const t = tt
    const data = {
        _mt: this.$global.mt + 'AuthRolePower.getFunBtnByRole',
        AProleType: t.$store.state.user.roleType,
        APlogType: '权限按钮的控制',
    }
    for (const dat in data) {
        if (data[dat] === '') {
            delete data[dat]
        }
    }
    return getDataLevelUserLoginData(data)
}
export default btnControl
