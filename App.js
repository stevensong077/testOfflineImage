/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {OfflineImage, OfflineImageStore} from 'react-native-image-offline';

const OffImnage = (props) => {
  const {url, style} = props;
  useEffect(() => {
    OfflineImageStore.restore(
      {
        name: url,
        // imageRemoveTimeout: 120, // expire image after 120 seconds, default is 3 days if you don't provide this property.
        // debugMode: false,
      },
      () => {
        OfflineImageStore.preLoad([url]);
      },
    );
  }, [url]);

  return (
    <View style={styles.container}>
      <Image
        style={style}
        source={require('./src/assets/images/fallbackSource.png')}
      />
      <Text>React native offline images</Text>
      <OfflineImage
        key={url}
        style={styles.image}
        onLoadEnd={(sourceUri) => {
          console.log(sourceUri);
        }}
        reloadImage={true}
        resizeMode={'center'}
        fallbackSource={require('./src/assets/images/fallbackSource.png')}
        source={{
          uri: url,
        }}
      />
    </View>
  );
};

const App = () => {
  return (
    <>
      <OffImnage
        url={'https://homepages.cae.wisc.edu/~ece533/images/goldhill.png'}
        style={styles.image}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '99%',
    height: 110,
    margin: 5,
  },
});

export default App;
