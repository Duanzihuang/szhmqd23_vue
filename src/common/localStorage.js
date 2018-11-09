/**
 * 给 store/index.js 调用的，这个里面有 新增、修改、删除等方法
 */

const KEY = 'GOODS'

/**
 * 获取本地保存的商品数量信息，取出来张成这样
 *     {88:2,89:3}   id作为key，数量作为值
 */
const getLocalGoods = () => {
  return JSON.parse(localStorage.getItem(KEY) || '{}')
}

/**
 * 获取总数量
 *
 * {88:2,89:3}   id作为key，数量作为值
 */
const getTotalCount = () => {
  const localGoods = getLocalGoods()

  let totalCount = 0

  for (var key in localGoods) {
    totalCount += localGoods[key]
  }

  return totalCount
}

/**
 * 把商品信息存储在本地
 * @param {*} goods
 *     {goodsId:93,count:3}
 *     {goodsId:88,count:3}
 */
const addLocalGoods = goods => {
  // 1.获取本地的localStorage中的值，并且转成对象 {87:5,88:2}
  const localGoods = getLocalGoods()

  // 2.对传递过来的goods.goodsId进行判断，如果已经在localStorage对象中了
  // 只是把数量累加，如果不存在，新增一对键值对
  if (localGoods[goods.goodsId]) {
    localGoods[goods.goodsId] += goods.count
  } else {
    localGoods[goods.goodsId] = goods.count
  }

  // 3.把对象转成字符串，覆盖保存回去
  localStorage.setItem(KEY, JSON.stringify(localGoods))

  // 4.重新统计一下localStorage中最新的数量，返回
  return getTotalCount()
}

/**
 * 修改本地商品信息
 * @param {*} goods
 *     {goodsId:88,count:3}
 */
const updateLocalGoods = goods => {
  // 1.获取本地的localStorage中的值，并且转成对象 {87:5,88:2}
  const localGoods = getLocalGoods()

  // 2.更改本地商品的信息
  localGoods[goods.goodsId] = goods.count

  // 3.把对象转成字符串，覆盖保存回去
  localStorage.setItem(KEY, JSON.stringify(localGoods))

  // 4.重新统计一下localStorage中最新的数量，返回
  return getTotalCount()
}

/**
 * 删除商品信息
 * @param {s} goodsId 商品id
 */
const deleteLocalGoods = goodsId => {
  // 1.获取本地的localStorage中的值，并且转成对象 {87:5,88:2}
  const localGoods = getLocalGoods()

  // 2.删除对应id的商品
  delete localGoods[goodsId]

  // 3.把对象转成字符串，覆盖保存回去
  localStorage.setItem(KEY, JSON.stringify(localGoods))

  // 4.重新统计一下localStorage中最新的数量，返回
  return getTotalCount()
}

// 不加default 就是按需导出
export {
  addLocalGoods,
  getTotalCount,
  getLocalGoods,
  updateLocalGoods,
  deleteLocalGoods
}
