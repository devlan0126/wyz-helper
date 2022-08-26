const dayjs = require('dayjs')

// 获取时间戳
exports.getDateTime = function () {
  return new Date().getTime()
}

// 获取上个月的当天
exports.getLastMonthDay = function (format) {
  return dayjs()
    .subtract(1, 'month')
    .format(format || 'YYYY-MM-DD')
}

// 获取上个月
exports.getLastMonth = function (format) {
  return dayjs()
    .subtract(1, 'month')
    .format(format || 'YYYY-MM')
}

// 获取去年的当月
exports.getLastYearMonth = function (format) {
  return dayjs().subtract(1, 'year').format('YYYY-MM')
}

// 获取去年
exports.getLastYear = function () {
  return dayjs().subtract(1, 'year').format('YYYY')
}
