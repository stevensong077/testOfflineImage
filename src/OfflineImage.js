import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {OfflineImage, OfflineImageStore} from 'react-native-image-offline';

const OffImage = (url, style) => {
  useEffect(() => {
    OfflineImageStore.restore(
      {
        name: 'https://homepages.cae.wisc.edu/~ece533/images/sails.png',
        // imageRemoveTimeout: 120, // expire image after 120 seconds, default is 3 days
      },
      () => {
        OfflineImageStore.preLoad([
          'https://homepages.cae.wisc.edu/~ece533/images/sails.png',
        ]);
      },
    );
  }, []);

  return (
    <View>
      {/* <Image
        style={style}
        source={require('./src/assets/images/fallbackSource.png')}
      /> */}
      <Text>React native offline image</Text>
      <OfflineImage
        key={'https://homepages.cae.wisc.edu/~ece533/images/sails.png'}
        // style={style}
        onLoadEnd={(sourceUri) => {
          console.log(sourceUri);
        }}
        reloadImage={true}
        resizeMode={'center'}
        fallbackSource={require('../src/assets/images/fallbackSource.png')}
        source={{
          uri: 'https://homepages.cae.wisc.edu/~ece533/images/sails.png',
        }}
      />
    </View>
  );
};

export default OffImage;
