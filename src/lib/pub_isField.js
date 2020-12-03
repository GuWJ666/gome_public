export const isField = (typeCode,formDataSubmit,t) => {
  let isField = true
  let arr = []
  switch (typeCode) {
    // case 'flow_internaltransfer_1500' :
    //   arr = ['empintLoanreserve','empintAdvancerevert','empintTraincost','empintRevert']
    //   isField = arr.every((val, index, array) => {
    //     return formDataSubmit[val] === '1'
    //   })
    //   if (!isField) {
    //     setTimeout(() => {
    //       t.$Modal.warning({
    //         title: '提示',
    //         content: '当前所有交接内容只有已完成才能提交'
    //       });
    //     },300)
    //   }
    //   break
    case 'flow_dimission_1700' :
      arr = ['empdimFileret','empdimExtrelate','empdimWorkfocus']
      isField = arr.every((val, index, array) => {
        return formDataSubmit[val] === '1'
      })
      if (!isField) {
        setTimeout(() => {
          t.$Modal.warning({
            title: '提示',
            content: '当前所有交接内容只有已完成才能提交'
          });
        },300)
      }
      break
    case 'flow_dimission_1800' :
      arr = ['empdimLoanreserve','empdimAdvancerevert','empdimTrainrevert','empdimRevert']
      isField = arr.every((val, index, array) => {
        return formDataSubmit[val] === '1'
      })
      if (!isField) {
        setTimeout(() => {
          t.$Modal.warning({
            title: '提示',
            content: '当前所有交接内容只有已完成才能提交'
          });
        },300)
      }
      break
    case 'flow_dimission_1900' :
      arr = ['empdimOfficeret','empdimComputeret','empdimDaskchairet']
      isField = arr.every((val, index, array) => {
        return formDataSubmit[val] === '1'
      })
      if (!isField) {
        setTimeout(() => {
          t.$Modal.warning({
            title: '提示',
            content: '当前所有交接内容只有已完成才能提交'
          });
        },300)
      }
      break
  }
  return isField
}


