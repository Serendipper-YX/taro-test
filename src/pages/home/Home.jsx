import React, { useState } from "react";
import { View, Image } from "@tarojs/components";
import { AtCountdown, AtCurtain, AtNoticebar } from "taro-ui";
import jdc from "../../assest/jdc.jd.jpg";
import curtainPng from "../../assest/curtain.png";
import "./style.scss";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onTimeUp = () => {
    setIsOpen(true);
  };
  return (
    <View className="at-article">
      <View className="at-article__h1">一个偶然的机遇</View>
      <AtNoticebar marquee>这是通告栏，这是通告栏，这是通告栏</AtNoticebar>
      <View className="at-article__info">
        2021-05-01&nbsp;&nbsp;&nbsp;Author
      </View>
      <View className="at-article__content">
        <View className="at-article__section">
          <View className="at-article__h2">欢迎来到欢迎来到</View>
          <View className="at-article__h3">
            一起看看惊喜来到
            <AtCountdown
              isCard
              format={{ hours: ":", minutes: ":", seconds: "" }}
              seconds={3}
              onTimeUp={onTimeUp}
            />
          </View>
          <View className="at-article__p">
            这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </View>
          <Image className="at-article__img" src={jdc} mode="widthFix" />
        </View>
      </View>
      <AtCurtain isOpened={isOpen} onClose={() => setIsOpen(false)}>
        <Image style="width:100%;height:250px" src={curtainPng} />
      </AtCurtain>
    </View>
  );
};

export default Home;
