import bilibili from '../views/bilibili'
import animation from '../views/bilibili/animation'
import homepage from '../views/bilibili/homePage'

export default {
  path: '/bilibili',
  name: 'bilibili',
  component: bilibili,
  children: [{
    path: 'animation',
    name: 'bilibiliAnimation',
    component: animation,
    children: [{
      path: ''
    }]
  }, {
    path: 'homepage',
    name: 'bilibilihomePage',
    component: homepage
  }]
}
