export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/demo/index',
    'pages/index/index',
    'pages/redirect/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  // subpackages: [
  //   {
  //     'root': 'packageA',
  //     'pages': ['pages/pageOne', 'pages/pageTwo']
  //   },
  //   {
  //     'root': 'packageB',
  //     'name': 'pack2',
  //     'pages': ['pages/pageThree', 'pages/pageFour']
  //   }
  // ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/home/index',
        iconPath: 'assets/icon/home-o.png',
        selectedIconPath: 'assets/icon/home.png',
        text: '首页'
      },
      {
        pagePath: 'pages/demo/index',
        iconPath: 'assets/icon/mine-o.png',
        selectedIconPath: 'assets/icon/mine.png',
        text: '日志'
      }
    ]
  },
});
