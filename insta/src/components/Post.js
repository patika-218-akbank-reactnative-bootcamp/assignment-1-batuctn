/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const Post = ({
  postDescription,
  likes,
  postTitle,
  postPersonImage,
  postImage,
}) => {
  const postInfo = [
    {
      postTitle: postTitle,
      postPersonImage: postPersonImage,
      postImage: postImage,
      postPersonCommentImage: require('../images/1.jpg'),
      likes: likes,
      isLiked: false,
    },
  ];
  return (
    <View>
      {postInfo.map((data, index) => {
        const [like, setLike] = useState(data.isLiked);
        return (
          <View key={index} style={styles.fullBody}>
            <View style={styles.header}>
              <View style={styles.headerText}>
                <Image
                  source={data.postPersonImage}
                  style={styles.postPersonStyle}
                />
                <View style={styles.padding5}>
                  <Text style={styles.postTitle}>{data.postTitle}</Text>
                </View>
              </View>
              <Feather name="more-vertical" style={styles.feather} />
            </View>
            <View style={styles.postImageView}>
              <Image source={data.postImage} style={styles.postImage} />
            </View>
            <View style={styles.postImageBottom}>
              <View style={styles.likeView}>
                <TouchableOpacity onPress={() => setLike(!like)}>
                  <AntDesign
                    name={like ? 'heart' : 'hearto'}
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: like ? 'red' : 'black',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionic
                    name="ios-chatbubble-outline"
                    style={styles.iosChat}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather name="navigation" style={styles.feather} />
                </TouchableOpacity>
              </View>
              <Feather name="bookmark" style={styles.feather} />
            </View>
            <View style={styles.addlike}>
              <Text>
                Liked by {like ? 'you and' : ''}{' '}
                {like ? data.likes + 1 : data.likes} others
              </Text>
              <Text
                style={styles.postDescriptionText}>
                {postDescription}
              </Text>
              <Text style={styles.allCommentText}>
                View all comments
              </Text>
              <View
                style={styles.commentImageView}>
                <View style={styles.commentImageView2}>
                  <Image
                    source={data.postPersonCommentImage}
                    style={styles.postPersonCommentImage}
                  />
                  <TextInput
                    placeholder="Add a comment "
                  />
                </View>
                <View style={styles.emojiView}>
                  <Entypo
                    name="emoji-happy"
                    style={styles.emojiHappy}
                  />
                  <Entypo
                    name="emoji-neutral"
                    style={styles.emojiNaturel}
                  />
                  <Entypo
                    name="emoji-sad"
                    style={styles.emojiSad}
                  />
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Post;
const styles = StyleSheet.create({
  fullBody: {
    paddingBottom: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  headerText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  padding5: {
    paddingLeft: 5,
  },
  postPersonStyle: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  likeView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iosChat: {
    fontSize: 20,
    paddingRight: 10,
  },
  feather: {
    fontSize: 20,
  },
  addlike: {
    paddingHorizontal: 15,
  },
  postDescriptionText: {
    fontWeight:'700',
    fontSize: 14,
    paddingVertical: 2,
  },
  postImageView: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postImage: {
    width: '100%',
    height: 400,
  },
  postImageBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
  postPersonCommentImage: {
    width: 25,
    height: 25,
    borderRadius: 100,
    backgroundColor: 'orange',
    marginRight: 10,
  },
  allCommentText: {
    opacity: 0.4,
    paddingVertical: 2,
  },
  commentImageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commentImageView2: {
    flexDirection: 'row',
     alignItems: 'center',
  },
  emojiView: {
    flexDirection: 'row',
     alignItems: 'center',
  },
  emojiHappy: {
    fontSize: 15,
     color: 'lightgreen',
      marginRight: 10,
    },
  emojiNaturel: {
    fontSize: 15,
     color: 'pink',
      marginRight: 10,
    },
  emojiSad: {
    fontSize: 15,
     color: 'red',
    },
});
