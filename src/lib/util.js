/**
 * Created by Aaron on 2017/12/18.
 */
// import pubsource from './pub_source';
import CryptoJS from "crypto-js";

const HRSSCMTPARAMS = "UserVericode,UserJobQueue,UserInfo,PubDbrecd,BaseSmsrecord"
export const setCookie = (name, value) => {
    let Days = 30;
    let exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie =
        name + "=" + escape(value) + ";expires=" + exp.toGMTString() + "; path=/";
};
export const getCookie = name => {
    let arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if ((arr = document.cookie.match(reg))) {
        return decodeURIComponent(arr[2]);
    } else {
        return null;
    }
};
//aes加密
export const aesEncrypt = str => {
    let rtn = str;
    let key = CryptoJS.enc.Utf8.parse(pubsource.aesKey);
    let iv = CryptoJS.enc.Utf8.parse(pubsource.aesIv);
    let srcs = CryptoJS.enc.Utf8.parse(rtn);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    rtn = encrypted.toString();
    return rtn;
};
//aes解密
export const aesDecrypt = str => {
    let rtn = str;
    let key = CryptoJS.enc.Utf8.parse(pubsource.aesKey);
    let iv = CryptoJS.enc.Utf8.parse(pubsource.aesIv);
    let encrypt = CryptoJS.AES.decrypt(rtn, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    rtn = CryptoJS.enc.Utf8.stringify(encrypt).toString();
    return rtn;
};
export const checkoutFile = (filetype, exte) => {
    var uplType = filetype || "doc",
        alwInfo = false;
    switch (uplType) {
        case "doc":
            if (
                [
                    "doc",
                    "docx",
                    "rtf",
                    "pdf",
                    "rar",
                    "zip",
                    "7z",
                    "xls",
                    "xlsx",
                    "csv",
                    "txt"
                ].includes(exte)
            )
                alwInfo = true;
            break;
        case "img":
            if (["jpg", "jpeg", "gif", "png"].includes(exte)) alwInfo = true;
            break;
        case "pdf":
            if (["pdf"].includes(exte)) alwInfo = true;
            break;
        case "pdf,img":
            if (["pdf", "jpg", "jpeg", "gif", "png"].includes(exte)) alwInfo = true;
            break;
        case "pdf,word":
            if (["pdf", "doc", "docx"].includes(exte)) alwInfo = true;
            break;
        case "img,zip,word,msg":
            if (
                [
                    "jpg",
                    "jpeg",
                    "gif",
                    "png",
                    "rar",
                    "zip",
                    "7z",
                    "doc",
                    "docx",
                    "msg"
                ].includes(exte)
            )
                alwInfo = true;
            break;
        case "excel":
            if (["xls", "xlsx"].includes(exte)) alwInfo = true;
            break;
        case "msg,pdf,img":
            if (["msg", "pdf", "jpg", "jpeg", "gif", "png"].includes(exte))
                alwInfo = true;
            break;
        case "pdf,word,xls,zip":
            if (
                ["pdf", "doc", "docx", "xls", "xlsx", "rar", "zip", "7z"].includes(exte)
            )
                alwInfo = true;
            break;
        default:
            break;
    }
    return alwInfo;
};
export const encrypt = (level, params) => {
    delete params._sig;
    params._aid = pubsource.applicationId;
    const MT = HRSSCMTPARAMS.split(",");
    params._mt = params._mt
    for (let v of MT) {
        if (params._mt.indexOf(v) !== -1) {
            params._mt = params._mt.replace(pubsource.param_mt, 'hrssc');
        }
    }
    let s = "";
    //增加对data的trim处理  2018-10-17 darren
    for (let n in params) {
        if (params[n] !== undefined && typeof params[n] === "string") {
            params[n] = params[n].toString().trim();
        }
    }
    let keys = [];
    for (let k in params) {
        keys.push(k);
    }
    keys.sort();
    for (let i = 0; i < keys.length; i++) {
        s = s + keys[i] + "=" + params[keys[i]];
    }
    s += getHash(level);
    params._sig = md5(s);
    return params;
};
export const encryptNew = (level, params) => {
    /* 删除jqgrid中下一页的时候默认参数中包含上一次的_sig参数 */
    delete params._sig;
    delete params.data;
    params._aid = pubsource.applicationId;
    let param = {};
    param._mt = params._mt;
    delete params._mt;
    // 分页使用的条件数据
    if (params.rows != undefined) {
        param.rows = params.rows;
        delete params.rows;
    }
    if (params.page != undefined) {
        param.page = params.page;
        delete params.page;
    }
    if (params.sort != undefined) {
        param.sort = params.sort;
        delete params.sort;
    }
    if (params.order != undefined) {
        param.order = params.order;
        delete params.order;
    }
    if (params.funId != undefined) {
        param.funId = params.funId;
        delete params.funId;
    }
    if (params.logType != undefined) {
        param.logType = params.logType;
        delete params.logType;
    }
    if (params.funId != undefined) {
        param.funId = params.funId;
        delete params.funId;
    }
    if (params.clmMap != undefined) {
        param.clmMap = params.clmMap;
        delete params.clmMap;
    }
    if (params.tbName != undefined) {
        param.tbName = params.tbName;
        delete params.tbName;
    }
    if (params.roleType != undefined) {
        param.roleType = params.roleType;
        delete params.roleType;
    }
    if (params.stepId != undefined) {
        param.stepId = params.stepId;
        delete params.stepId;
    }
    if (params.pkValue != undefined) {
        param.pkValue = params.pkValue;
        delete params.pkValue;
    }
    if (params.empId != undefined) {
        param.empId = params.empId;
        delete params.empId;
    }
    if (params.subFromId != undefined) {
        param.subFromId = params.subFromId;
        delete params.subFromId;
    }
    if (params.filter != undefined) {
        param.filter = params.filter;
        delete params.filter;
    }
    if (params.flowDataId != undefined) {
        param.flowDataId = params.flowDataId;
        delete params.flowDataId;
    }
    if (params.subFormType != undefined) {
        param.subFormType = params.subFormType;
        delete params.subFormType;
    }
    if (params.flowId != undefined) {
        param.flowId = params.flowId;
        delete params.flowId;
    }
    if (params.ids != undefined) {
        param.ids = params.ids;
        delete params.ids;
    }
    if (params.date != undefined) {
        param.date = params.date;
        delete params.date;
    }
    if (params.type != undefined) {
        param.type = params.type;
        delete params.type;
    }
    if (params.saveType != undefined) {
        param.saveType = params.saveType;
        delete params.saveType;
    }
    if (params.aprvId != undefined) {
        param.aprvId = params.aprvId;
        delete params.aprvId;
    }
    if (params.isDis != undefined) {
        param.isDis = params.isDis;
        delete params.isDis;
    }
    param.companyId = params.companyId;
    delete params.companyId;
    param._aid = params._aid;
    delete params._aid;

    //增加对data的trim处理  2018-10-17 darren
    // console.info(params);
    // console.info('encryptNew')
    for (let n in params) {
        // console.info(typeof params[n])
        // console.info(params[n])
        if (params[n] !== undefined && typeof params[n] === "string") {
            params[n] = params[n].toString().trim();
        }
    }
    // console.info(params);

    param.data = JSON.stringify(params);
    let s = "",
        keys = [];
    for (let k in param) {
        keys.push(k);
    }
    keys.sort();
    for (let i = 0; i < keys.length; i++) {
        s = s + keys[i] + "=" + param[keys[i]];
    }
    s += getHash(level);
    param._sig = md5(s);
    return param;
};
export const encryptNew2 = (level, params) => {
    /* 删除jqgrid中下一页的时候默认参数中包含上一次的_sig参数 */
    delete params._sig;
    delete params.data;
    params._aid = pubsource.applicationId;
    let param = {};
    param._mt = params._mt;
    delete params._mt;
    // 分页使用的条件数据
    if (params.rows != undefined) {
        param.rows = params.rows;
        delete params.rows;
    }
    if (params.page != undefined) {
        param.page = params.page;
        delete params.page;
    }

    if (params.sort != undefined) {
        param.sort = params.sort;
        delete params.sort;
    }
    if (params.order != undefined) {
        param.order = params.order;
        delete params.order;
    }
    if (params.funId != undefined) {
        param.funId = params.funId;
        delete params.funId;
    }
    if (params.logType != undefined) {
        param.logType = params.logType;
        delete params.logType;
    }
    if (params.funId != undefined) {
        param.funId = params.funId;
        delete params.funId;
    }
    if (params.clmMap != undefined) {
        param.clmMap = params.clmMap;
        delete params.clmMap;
    }
    if (params.tbName != undefined) {
        param.tbName = params.tbName;
        delete params.tbName;
    }
    if (params.roleType != undefined) {
        param.roleType = params.roleType;
        delete params.roleType;
    }
    if (params.stepId != undefined) {
        param.stepId = params.stepId;
        delete params.stepId;
    }
    if (params.pkValue != undefined) {
        param.pkValue = params.pkValue;
        delete params.pkValue;
    }
    if (params.flowId != undefined) {
        param.flowId = params.flowId;
        delete params.flowId;
    }
    if (params.cmutType != undefined) {
        param.cmutType = params.cmutType;
        delete params.cmutType;
    }
    if (params.funCode != undefined) {
        param.funCode = params.funCode;
        delete params.funCode;
    }
    param.companyId = params.companyId;
    delete params.companyId;
    param._aid = params._aid;
    delete params._aid;

    //增加对data的trim处理  2018-10-17 darren
    // console.info(params);
    // console.info('encryptNew2')
    for (let n in params) {
        // console.info(typeof params[n])
        // console.info(params[n])
        if (params[n] !== undefined && typeof params[n] === "string") {
            params[n] = params[n].toString().trim();
        }
    }
    // console.info(params);

    param.data = JSON.stringify(params);
    let s = "",
        keys = [];
    for (let k in param) {
        keys.push(k);
    }
    keys.sort();
    for (let i = 0; i < keys.length; i++) {
        s = s + keys[i] + "=" + param[keys[i]];
    }
    s += getHash(level);
    param._sig = md5(s);
    return param;
};
//  李琪专用
export const encryptNew3 = (level, params) => {
    /* 删除jqgrid中下一页的时候默认参数中包含上一次的_sig参数 */
    delete params._sig;

    params._aid = pubsource.applicationId;
    let param = {};
    param._mt = params._mt;
    delete params._mt;
    // 分页使用的条件数据
    if (params.rows != undefined) {
        param.rows = params.rows;
        delete params.rows;
    }
    if (params.page != undefined) {
        param.page = params.page;
        delete params.page;
    }
    if (params.sort != undefined) {
        param.sort = params.sort;
        delete params.sort;
    }
    if (params.order != undefined) {
        param.order = params.order;
        delete params.order;
    }
    if (params.funId != undefined) {
        param.funId = params.funId;
        delete params.funId;
    }
    if (params.logType != undefined) {
        param.logType = params.logType;
        delete params.logType;
    }
    if (params.funId != undefined) {
        param.funId = params.funId;
        delete params.funId;
    }
    if (params.clmMap != undefined) {
        param.clmMap = params.clmMap;
        delete params.clmMap;
    }
    if (params.tbName != undefined) {
        param.tbName = params.tbName;
        delete params.tbName;
    }
    if (params.roleType != undefined) {
        param.roleType = params.roleType;
        delete params.roleType;
    }
    if (params.stepId != undefined) {
        param.stepId = params.stepId;
        delete params.stepId;
    }
    if (params.pkValue != undefined) {
        param.pkValue = params.pkValue;
        delete params.pkValue;
    }
    if (params.flowId != undefined) {
        param.flowId = params.flowId;
        delete params.flowId;
    }
    param.companyId = params.companyId;
    delete params.companyId;
    param._aid = params._aid;
    delete params._aid;

    //增加对data的trim处理  2018-10-17 darren
    // console.info(params);
    // console.info('encryptNew3')
    for (let n in params) {
        // console.info(typeof params[n])
        // console.info(params[n])
        if (params[n] !== undefined && typeof params[n] === "string") {
            params[n] = params[n].toString().trim();
        }
    }
    // console.info(params);

    param.data = params.data;
    let s = "",
        keys = [];
    for (let k in param) {
        keys.push(k);
    }
    keys.sort();
    for (let i = 0; i < keys.length; i++) {
        s = s + keys[i] + "=" + param[keys[i]];
    }
    s += getHash(level);
    param._sig = md5(s);
    return param;
};

export const encryptSenior = (level, params, arr, arr2) => {
    /* 删除jqgrid中下一页的时候默认参数中包含上一次的_sig参数 */
    delete params._sig;
    delete params.data;
    param._aid = pubsource.applicationId;
    let param = {};
    //独立的参数（仅仅需要一次）
    for (const k in arr) {
        if (typeof arr[k] !== "function") param[arr[k]] = params[arr[k]];
        delete params[arr[k]];
    }
    //独立的参数（data中也需要的参数）
    if (arr2 != null && arr2 != undefined) {
        for (let k in arr2) {
            param[arr2[k]] = params[arr2[k]];
        }
    }
    //增加对data的trim处理  2018-10-17 darren
    // console.info(params);
    // console.info('encryptSenior')
    for (let n in params) {
        // console.info(typeof params[n])
        // console.info(params[n])
        if (params[n] !== undefined && typeof params[n] === "string") {
            params[n] = params[n].toString().trim();
        }
    }
    // console.info(params);

    param.data = JSON.stringify(params);
    let s = "",
        keys = [];
    for (const k in param) {
        keys.push(k);
    }
    keys.sort();
    for (let i = 0; i < keys.length; i++) {
        s = s + keys[i] + "=" + param[keys[i]];
    }
    s += getHash(level);
    param._sig = md5(s);
    return param;
};
//自动布局
export const encryptAutoData = (level, params) => {
    let param = {};
    param._aid = pubsource.applicationId;
    const MT = HRSSCMTPARAMS.split(",");
    param._mt = params._mt
    for (let v of MT) {
        if (params._mt.indexOf(v) !== -1) {
            param._mt = params._mt.replace(pubsource.param_mt, 'hrssc');
        }
    }
    delete params._mt;
    // 分页使用的条件数据
    for (let v in params) {
        if (v.indexOf("AP") !== -1 && v !== 'APdata') {
            param[v] = params[v];
            delete params[v];
        }
    }
    //增加对data的trim处理
    for (let n in params) {
        if (params[n] !== undefined && typeof params[n] === "string") {
            params[n] = params[n].toString().trim();
        }
    }

    if (params.APdata != undefined) {
        param.APdata = params.APdata;
        delete params.APdata;
    } else {
        param.APdata = JSON.stringify(params);
    }

    let s = "",
        keys = [];
    for (let k in param) {
        keys.push(k);
        if (typeOfObject(param[k]) === 'Object') {
            param[k] = JSON.stringify(param[k]);
        }
    }
    keys.sort();
    for (let i = 0; i < keys.length; i++) {
        s = s + keys[i] + "=" + param[keys[i]];
    }
    s += getHash(level);
    param._sig = md5(s);
    return param;
};
export const getHash = level => {
    let ut = getCookie("wtk");
    if (level === "None") {
        return "www.hrocloud.com";
    } else if (ut) {
        return ut;
    } else {
        return window.localStorage.getItem("CF_TOKEN");
    }
};

export const isSuccess = (data, t) => {
    let apicode = data.data.stat.code;
    if (apicode === 0) {
        let buscode = data.data.stat.stateList[0].code;

        if (buscode === 0) {
            return true;
        } else if (buscode !== 0) {
            setTimeout(function () {
                t.$Modal.warning({
                    title: "错误",
                    content: data.data.stat.stateList[0].desc
                });
            }, 300);
            return false;
        }
    } else if (apicode !== 0) {
        setTimeout(function () {
            t.$Modal.warning({
                title: "错误",
                content: data.data.stat.desc
            });
        }, 300);

        if (
            apicode === -300 ||
            apicode === -320 ||
            apicode === -340 ||
            apicode === -360 ||
            apicode === -380 ||
            apicode === -370 ||
            apicode === -163 ||
            apicode === -160
        ) {
            layer.closeAll(); //关闭即时通讯
            t.$router.push("/loginmain/login");
        }
        return false;
    }
};
export const httpString = s => {
    var reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
    var reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
    s = s.match(reg);
    return s;
};
export const nameString = str => {
    let reg = /[\u4e00-\u9fa5]/g;
    let names = str.match(reg);
    let name = names.join("").replace("请点击查看", "");
    return name;
};
export const rlqtObject = str => {
    let pos = str.indexOf("[rlqt]");
    let name = str
        .substr(pos)
        .replace("[rlqt]", "")
        .replace("[/rlqt]", "");
    return JSON.parse(name);
};
export const rlqtContent = str => {
    let pos = str.indexOf("[rlqt]");
    let content = str.substring(0, pos);
    return content;
};
/*
 * 数组去重
 *
 * */
export const uniqArr = array => {
    var temp = []; //一个新的临时数组
    for (var i = 0; i < array.length; i++) {
        if (temp.indexOf(array[i]) == -1) {
            temp.push(array[i]);
        }
    }
    return temp;
};
/**
 * 数组对象去重
 * params obj中必须要有id来区分
 */
export const uniqObj = arr => {
    let result = [];
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i].id]) {
            result.push(arr[i]);
            obj[arr[i].id] = true;
        }
    }
    return result;
};
export const deepCopy = obj => {
    let gettype = Object.prototype.toString;
    if (typeof obj != "object" || gettype.call(obj) === "[object Date]") {
        return obj;
    }
    if (Object.prototype.toString.call(obj) === "[object Array]") {
        return obj;
    }
    let newobj = {};
    for (let attr in obj) {
        newobj[attr] = deepCopy(obj[attr]);
    }
    return newobj;
};
export const deepCopyNew = obj => {
    var result = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === "object" && obj[key] !== null) {
                result[key] = deepCopy(obj[key]); //递归复制
            } else {
                result[key] = obj[key];
            }
        }
    }
    return result;
};
export const getUrlKey = name => {
    return (
        decodeURIComponent(
            (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(
                location.href
            ) || [, ""])[1].replace(/\+/g, "%20")
        ) || null
    );
};
export const GetQueryString = name => {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    } else {
        return null;
    }
};
/*
 * expend Object
 * params: obj1,obj2
 * just like jQuery $expend()
 * */
export const extendObject = (obj1, obj2) => {
    for (let key in obj2) {
        if (obj2.hasOwnProperty(key) === true) {
            obj1[key] = obj2[key];
        }
    }
};
// Find components upward
export const findComponentUpward = (context, componentName, componentNames) => {
    if (typeof componentName === "string") {
        componentNames = [componentName];
    } else {
        componentNames = componentName;
    }

    let parent = context.$parent;
    let name = parent.$options.name;
    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
};
export const random = (lower, upper) => {
    return Math.floor(Math.random() * (upper - lower)) + lower;
};
export const bigDecimal = (decimalRule, d) => {
    if (typeof d === "number") {
        d = d.toString();
    }
    if ("01sswrtoyuan".includes(decimalRule)) {
        //			01sswrtoyuan	四舍五入到元	四舍五入到元	保留0位小数
        let bg = new BigDecimal(d);
        let f1 =
            bg.setScale(0, MathContext.prototype.ROUND_HALF_UP).toString() + ".00";
        return f1;
    } else if ("02sswrtojiao".includes(decimalRule)) {
        //			02sswrtojiao	四舍五入到角	四舍五入到角	保留1位小数
        let bg = new BigDecimal(d);
        let f1 =
            bg.setScale(1, MathContext.prototype.ROUND_HALF_UP).toString() + "0";
        return f1;
    } else if ("03sswrtofen".includes(decimalRule)) {
        //			03sswrtofen	四舍五入到分	四舍五入到分	保留2位小数
        let bg = new BigDecimal(d);
        let f1 = bg.setScale(2, MathContext.prototype.ROUND_HALF_UP).toString();
        return f1;
    } else if ("04sswrtoli".includes(decimalRule)) {
        //			04sswrtoli	四舍五入到厘	四舍五入到厘	保留3位小数
        let bg = new BigDecimal(d);
        let f1 = bg.setScale(3, MathContext.prototype.ROUND_HALF_UP).toString();
        return f1;
    } else if ("05jjjy".includes(decimalRule)) {
        //			05jjjy	见角进元	见角进元	保留0位小数
        let bg = new BigDecimal(d);
        let f1 = 0;
        let isSum = "1";
        if (d.split(".")[1]) {
            isSum = d.split(".")[1].substring(0, 1);
        } else {
            isSum = "1";
        }
        if ("0".includes(isSum)) {
            f1 =
                bg.setScale(0, MathContext.prototype.ROUND_HALF_UP).toString() + ".00";
        } else {
            f1 = bg.setScale(0, MathContext.prototype.ROUND_UP).toString() + ".00";
        }
        return f1;
    } else if ("06jfjj".includes(decimalRule)) {
        //			06jfjj	见分进角	见分进角	保留1位小数
        let bg = new BigDecimal(d);
        let f1 = 0;
        let isSum = "1";
        if (d.split(".")[1]) {
            isSum = d.split(".")[1].substring(1, 2);
        } else {
            isSum = "1";
        }
        if ("0".includes(isSum)) {
            f1 = bg.setScale(1, MathContext.prototype.ROUND_DOWN).toString() + "0";
        } else {
            f1 = bg.setScale(1, MathContext.prototype.ROUND_UP).toString() + "0";
        }
        return f1;
    } else if ("07jljf".includes(decimalRule)) {
        //			07jljf	见厘进分	见厘进分	保留2位小数
        let bg = new BigDecimal(d);
        let f1 = 0;
        let isSum = "1";
        if (d.split(".")[1]) {
            isSum = d.split(".")[1].substring(2, 3);
        } else {
            isSum = "1";
        }
        // console.log(d)
        // console.log(typeof d)
        // console.log(d.split('.')[1])
        // console.log(d.split('.')[1].substring(2, 3))
        // console.log(isSum)
        // console.log(typeof isSum)
        if ("0".includes(isSum)) {
            // console.log('if')
            f1 = bg.setScale(2, MathContext.prototype.ROUND_DOWN).toString();
        } else {
            // console.log('else')
            f1 = bg.setScale(2, MathContext.prototype.ROUND_UP).toString();
        }
        return f1;
    } else if ("08jhjl".includes(decimalRule)) {
        //			08jhjl	见毫进厘	见毫进厘	保留3位小数
        let bg = new BigDecimal(d);
        let f1 = 0;
        let isSum = "1";
        if (d.split(".")[1]) {
            isSum = d.split(".")[1].substring(3, 4);
        } else {
            isSum = "1";
        }
        if ("0".includes(isSum)) {
            f1 = bg.setScale(3, MathContext.prototype.ROUND_DOWN).toString();
        } else {
            f1 = bg.setScale(3, MathContext.prototype.ROUND_UP).toString();
        }
        return f1;
    } else if ("09qstoyuan".includes(decimalRule)) {
        //			09qstoyuan	全舍到元	全舍到元	保留0位小数.
        let bg = new BigDecimal(d);
        let f1 =
            bg.setScale(0, MathContext.prototype.ROUND_DOWN).toString() + ".00";
        return f1;
    } else if ("10qstojiao".includes(decimalRule)) {
        //			10qstojiao	全舍到角	全舍到角	保留1位小数
        let bg = new BigDecimal(d);
        let f1 = bg.setScale(1, MathContext.prototype.ROUND_DOWN).toString() + "0";
        return f1;
    } else if ("11qstofen".includes(decimalRule)) {
        //			11qstofen	全舍到分	全舍到分	保留2位小数
        let bg = new BigDecimal(d);
        let f1 = bg.setScale(2, MathContext.prototype.ROUND_DOWN).toString();
        return f1;
    } else if ("12qstoli".includes(decimalRule)) {
        //			12qstoli	全舍到厘	全舍到厘	保留3位小数
        let bg = new BigDecimal(d);
        let f1 = bg.setScale(3, MathContext.prototype.ROUND_DOWN).toString();
        return f1;
    }
}
/**
 * @description
 * @param {*} obj
 * @returns
 */
export const typeOfObject = (obj) => {
    var type = Object.prototype.toString.call(obj);
    if (type == '[object Array]') {
        return 'Array';
    } else if (type == '[object Object]') {
        return 'Object';
    } else {
        return false
    }
};
export const isSuccessNew = (data, t) => {
    let apicode = data.data.stat.code;
    if (apicode === 0) {
        let buscode = data.data.stat.stateList[0].code;

        if (buscode === 0) {
            return true;
        } else if (buscode !== 0) {
            setTimeout(function () {
                t.$Modal.warning({
                    title: "错误",
                    content: data.data.stat.stateList[0].desc
                });
            }, 300);
            return false;
        }
    } else if (apicode !== 0) {
        setTimeout(function () {
            t.$Modal.warning({
                title: "错误",
                content: data.data.stat.desc
            });
        }, 300);

        if (
            apicode === -300 ||
            apicode === -320 ||
            apicode === -340 ||
            apicode === -360 ||
            apicode === -380 ||
            apicode === -370 ||
            apicode === -163 ||
            apicode === -160
        ) {
            layer.closeAll(); //关闭即时通讯
            t.$router.push(localStorage.entryLoginUrl);
        }
        return false;
    }
};