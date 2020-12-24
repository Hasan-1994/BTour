//General imports
import React, { useEffect, useState } from 'react';
import { View, Image, ActivityIndicator, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import Carousel from 'react-native-snap-carousel';


//Style Imports
var style = require('../../../style/style')

function imageViewer() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Hasan-1994/jsontest/master/info.json')
      .then((response) => response.json())
      .then((json) => setData(json.reichstag))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const _renderItem = ({ item, index }) => {
    return (
          <View style={style.carouselViewer}>
            <Image source={{ uri: item.image }} style={style.carouselViewerImage} />
          </View>
    );
  }
  return (
    <View style={style.carouselPlacemant}>
      <Carousel
        layout={"tinder"}
        //layoutCardOffset={`0`}
        loop={true}
        //ref={ref => carousel = ref}
        data={data}
        sliderWidth={5}
        itemWidth={300}
        renderItem={_renderItem}
        onSnapToItem={index => ({ setActiveIndex: index })} />
    </View>
  )
};
export default imageViewer;