import request from '@/utils/requestAxios'

const logList = '/admin/log/list'

/**
 * 日志列表
 * @param {*} params
 */
export const $logList = params => {
  return request.request({
    url: logList,
    method: 'GET',
    params: params
  })
}

