import React from "react";
import { View, Button,Text } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { styles } from "./styles";

export function VideoCastis() {
  const video = React.useRef(null);
  const [videoStatus, setVideoStatus] = React.useState({});

  return (
    <View style={styles.viewVideoCastis}>
      <View style={styles.container}>
        <View style={styles.videoStyles}>
        <Video 
          ref={video}
          style={styles.video}
          source={{
            uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={status => setVideoStatus(status)}
        />
        </View >
        
      </View>
    </View>
  );
}
