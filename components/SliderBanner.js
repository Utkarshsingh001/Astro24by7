/*eslint-disable*/
import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');


function SliderBanner(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);



  const handleScroll = event => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slide);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled={props.size !== 1 ? false : true}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentOffset={{ x: width * activeIndex }}
      >
        {props.images.map((image, index) => (
          <Image key={index} source={image} style={styles.image(props.size)} />
        ))}
      </ScrollView>
      {props.pagination && <View style={styles.pagination}>
        {props.images.map((image, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              activeIndex === index && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: (size) => {
    return {
      width: (width / size) - (60 / size),
      height: 150 / size,
      marginHorizontal: 30 / size,
      marginLeft: 30,
      borderRadius: 8,
    }
  },
  pagination: {
    flexDirection: 'row',
    marginTop: 10
  },
  paginationDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 5,
    backgroundColor: '#8E8E93',
  },
  paginationDotActive: {
    backgroundColor: "#000000",
  },
});
SliderBanner.defaultProps = {
  size: 1,
  pagination: true,
}
export default SliderBanner;
