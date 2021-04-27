import React from "react";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import { AtTimeline } from "taro-ui";
import "./index.scss";
import sanxia from "../../assest/sanxia.webp";
import flower from "../../assest/flower.webp";
import modern from "../../assest/modern.webp";
import percussion from "../../assest/percussion.webp";

const index = () => {
  const imgArr = [sanxia, flower, modern, percussion];
  return (
    <View className="index_modal">
      <Swiper
        className="index_swiper"
        indicatorColor="#999"
        indicatorActiveColor="#333"
        circular
        indicatorDots
        autoplay
      >
        {imgArr.map((item, index) => {
          return (
            <SwiperItem key={index}>
              <View>
                <Image src={item} />
              </View>
            </SwiperItem>
          );
        })}
      </Swiper>
      <AtTimeline
        pending
        items={[
          {
            title: "刷牙洗脸起床锻炼",
            content: ["大概7:40"],
            icon: "check-circle",
          },
          {
            title: "记得吃早餐",
            content: [
              "法棍🥖",
              "津市牛肉粉",
              "蟹黄小笼包",
              "胡辣汤",
              "山东煎饼",
            ],
            icon: "clock",
          },
          {
            title: "公司",
            content: ["查看邮件", "产品定位", "产品盈利", "指定方案"],
            icon: "clock",
          },
          { title: "家", content: ["不超过23:00"] },
        ]}
      />
    </View>
  );
};

export default index;
