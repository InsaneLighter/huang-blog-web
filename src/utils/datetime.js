import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

let customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)
dayjs.locale('zh-cn')

function datetimeFormat(datetime = new Date(), pattern = 'YYYY-MM-DD HH:mm') {
  return dayjs(datetime).format(pattern)
}

function timeAgo(dateStr) {
  const currentTime = new Date().getTime()
  let millisecond = dayjs(dateStr,"YYYY-MM-DD HH:mm:ss").valueOf()
  const between = currentTime - millisecond
  const days = Math.floor(between / (24 * 3600 * 1000))
  if (days === 0) {
    const leave1 = between % (24 * 3600 * 1000)
    const hours = Math.floor(leave1 / (3600 * 1000))
    if (hours === 0) {
      const leave2 = leave1 % (3600 * 1000)
      const minutes = Math.floor(leave2 / (60 * 1000))
      if (minutes === 0) {
        const leave3 = leave2 % (60 * 1000)
        const seconds = Math.round(leave3 / 1000)
        return seconds + ' 秒前'
      }
      return minutes + ' 分钟前'
    }
    return hours + ' 小时前'
  }
  if (days < 0) return '刚刚'
  if (days < 5) {
    return days + ' 天前'
  } else {
    return dateStr
  }
}

export { datetimeFormat, timeAgo }
