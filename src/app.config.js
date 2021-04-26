export default {
  pages: [
    "pages/index/index",
    "pages/home/home",
    "pages/cate/cate",
    "pages/system/system",
  ],
  tabBar: {
    list: [
      {
        // iconPath: "resource/latest.png",
        // selectedIconPath: "resource/lastest_on.png",
        pagePath: "pages/home/home",
        text: "首页",
      },
      {
        // iconPath: "resource/latest.png",
        // selectedIconPath: "resource/lastest_on.png",
        pagePath: "pages/index/index",
        text: "随心",
      },
      {
        // iconPath: "resource/latest.png",
        // selectedIconPath: "resource/lastest_on.png",
        pagePath: "pages/cate/cate",
        text: "分类",
      },
      {
        // iconPath: "resource/hotest.png",
        // selectedIconPath: "resource/hotest_on.png",
        pagePath: "pages/system/system",
        text: "我的",
      },
    ],
    color: "#000",
    selectedColor: "#56abe4",
    backgroundColor: "#fff",
    borderStyle: "white",
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "V2EX",
    navigationBarTextStyle: "black",
  },
};
