
const getGuid = (num=7) => {
  return Math.random().toString(36).substring(num)
}

export default {
  getGuid
}