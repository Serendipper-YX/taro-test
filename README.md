# taro-test
首个 Taro 多端统一实例 - 自我实现（小程序 + H5 + React Native）。

本项目基于自我兴趣 主要熟悉和了解 Taro 框架，以taro-ui为基础，旨在探讨如何以正确的方式使用 Taro 进行多端开发和框架的使用。

# 本地运行
本项目数据全是自己写的json,自我探索Taro框架。

安装依赖，或 npm i
yarn

运行小程序，编译后的文件位于项目下的 dist 文件夹
（微信 dev:weapp，支付宝 dev:alipay）
npm run dev:weapp

运行 H5
npm run dev:h5

运行 React Native，请务必查阅文档：https://nervjs.github.io/taro/docs/react-native.html
npm run dev:rn
