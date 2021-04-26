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
        iconPath: "./assest/rollerskate_start.png",
        selectedIconPath: "./assest/rollerskate.png",
        pagePath: "pages/home/home",
        text: "首页",
      },
      {
        iconPath: "./assest/gift_start.png",
        selectedIconPath: "./assest/gift.png",
        pagePath: "pages/index/index",
        text: "随心",
      },
      {
        iconPath: "./assest/motorbike_start.png",
        selectedIconPath: "./assest/motorbike.png",
        pagePath: "pages/cate/cate",
        text: "分类",
      },
      {
        iconPath: "./assest/skateboard_start.png",
        selectedIconPath: "./assest/skateboard.png",
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
