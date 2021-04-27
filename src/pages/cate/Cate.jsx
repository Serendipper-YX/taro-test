import React, { useState } from "react";
import { View } from "@tarojs/components";
import VirtualList from "@tarojs/components/virtual-list";
import { AtCard } from "taro-ui";
import Taro from "@tarojs/taro";

const Cate = () => {
  const Row = React.memo(({ id, index, style, data }) => {
    return (
      <View
        className={index % 2 ? "ListItemOdd" : "ListItemEven"}
        style={style}
        key={index}
      >
        <AtCard
          note="Tips"
          title="标题撒"
          thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
        >
          内容
        </AtCard>
      </View>
    );
  });

  const buildData = (offset = 0) => {
    return Array(100)
      .fill(0)
      .map((_, i) => i + offset);
  };
  const [data, setData] = useState(buildData(0));
  const [loading, setLoading] = useState(false);
  const [itemSize] = useState(100);
  const dataLen = data.length;

  const listReachBottom = () => {
    Taro.showLoading();
    // 如果 loading 与视图相关，那它就应该放在 `this.state` 里
    // 我们这里使用的是一个同步的 API 调用 loading，所以不需要
    setLoading(true);
    setTimeout(() => {
      setData(data.concat(buildData(data.length)));
      setLoading(false);
      Taro.hideLoading();
    }, 1000);
  };

  return (
    <View className="cate_modal">
      <VirtualList
        className="List"
        height={1000}
        itemData={data}
        itemCount={dataLen}
        itemSize={itemSize}
        width="100%"
        onScroll={({ scrollDirection, scrollOffset }) => {
          if (
            // 避免重复加载数据
            loading &&
            // 只有往前滚动我们才触发
            scrollDirection === "forward" &&
            // 5 = (列表高度 / 单项列表高度)
            // 100 = 滚动提前加载量，可根据样式情况调整
            scrollOffset > (dataLen - 5) * itemSize + 100
          ) {
            listReachBottom();
          }
        }}
      >
        {Row}
      </VirtualList>
    </View>
  );
};

export default Cate;
