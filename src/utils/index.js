// 截取地址
export function getShowAddress (address, sign = 3) {
  const firstAddress = address.substring(0, sign),
    AddressLength = address.length,
    lastAddress = address.substring(AddressLength - sign, AddressLength);

  return `${firstAddress}***${lastAddress}`;
}
// 截取币种精度
export function getDecimalsCoin (number, decimals) {
  if (typeof number === 'number') {
    number = String(number);
  }
  if (number.indexOf('.') === -1) {
    return number;
  }
  return number.substring(0, number.indexOf('.') + decimals);
}
// 时间转化
export function formatTime (dateTime, sign = '/') {
  const date = new Date(dateTime * 1000),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate();

  function s (t) {
    return t < 10 ? `0${t}` : t;
  }
  return `${year}${sign}${s(month)}${sign}${s(day)}`;
}
// 限制两位小数的输入
export function setNumberDecimal (self, number) {
  var n = parseFloat(self.value);

  self.value = n.toFixed(number);
  return self;
}
// 时间转化 时分秒
export function formatDate (data) {
  var date = new Date(data),
    YY = date.getFullYear() + '-',
    MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-',
    DD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
    hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':',
    mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':',
    ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

  return YY + MM + DD + ' ' + hh + mm + ss;
}