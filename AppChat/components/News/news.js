import React, { Component } from 'react';
import {
    View, Text, Image ,TextInput ,TouchableOpacity ,Button
 } from 'react-native';
import newsStyle from '../styles/newsStyle';
import EmojiSelector, { Categories } from 'react-native-emoji-selector';

var ImagePicker = require('react-native-image-picker');

var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Lấy Ảnh từ FaceBook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  },
    cancelButtonTitle: 'Cancel',
    takePhotoButtonTitle: 'Chụp Hình', // specify null or empty string to remove this button
    chooseFromLibraryButtonTitle: 'Lấy Ảnh từ Library', // specify null or empty string to remove this button
    mediaType: 'photo', // 'photo' or 'video'
    maxWidth: 50, // photos only
    maxHeight: 50, // photos only
    quality: 0.9, // 0 to 1, photos only
    allowsEditing: false,
};

export default class News extends Component {

    constructor(props){
        super(props);
        imageUSer = require("../images/imageUser.jpg");
        imageIcons = require("../images/icons/icons-image.png");
        happyIcons = require("../images/icons/icons-happy.png");
        Like = require("../images/icons/like.png");
        noneLike = require("../images/icons/none-like.png"); 
        Cmt = require("../images/icons/cmt.png");
        noneCmt = require("../images/icons/none-cmt.png"); 
        this.state ={
            status:false,
            inputTextIcons: '',
            show: true , 
            avatarSource: null,
        }
    }

    render(){
        const img = this.state.avatarSource == null ? null: <Image source={this.state.avatarSource} style={{height:200 , width:200}} />
        const { inputTextIcons } = this.state;
        const imgSource = this.state.show ? noneLike : Like;
        return(
            <View style={newsStyle.container}>
                <View style={newsStyle.topScreen}>
                    {/* Top Screen 1 */}
                    <View style={newsStyle.topScreen1}>
                        <View style={newsStyle.imageName}>
                            <Image source={imageUSer} style={newsStyle.imageUSer}/>
                        </View>
                        <View style={newsStyle.nameUser}>
                            <TextInput placeholder={'Bạn đang nghĩ gì . Phi ?'} style={newsStyle.nameText} 
                                        underlineColorAndroid={'transparent'} multiline={true} value={inputTextIcons}
                                        onChangeText={text => this.setState({ inputTextIcons: text })} > 
                            </TextInput>                                
                        </View>
                    </View>
                    {/* kết thúc */}
                    <View style={newsStyle.status}>
                        {img}
                        <View style={newsStyle.functionStatus}>
                            <TouchableOpacity onPress={this.show.bind(this)}>
                            <View style={newsStyle.ImageandText}>
                                <Image source={imageIcons} style={newsStyle.imageIcons} />
                                <Text style={newsStyle.TextStatus}>image</Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.ShowHideTextComponentView}>
                            <View style={newsStyle.ImageandText1}>
                                <Image source={happyIcons} style={newsStyle.imageIcons} />
                                <Text style={newsStyle.textfunctionStatus}>icon</Text>
                            </View>
                            </TouchableOpacity>
                        </View>
                        {
                            this.state.status ? <EmojiSelector showSearchbar={false} category={Categories.symbols} onEmojiSelected={emoji => this.setState({ inputTextIcons: inputTextIcons + emoji })} /> : null
                        }
                    </View>
                </View>
                <View style={newsStyle.mediumScreen}>
                    <View style={newsStyle.topScreen2}>
                        <View style={newsStyle.imageName}>
                            <Image source={imageUSer} style={newsStyle.imageUSer1}/>
                        </View>
                        <View style={newsStyle.nameUser}>
                            <Text>Phi Tup</Text>                                
                        </View>
                    </View>
                    <View style={newsStyle.mediumScreen2}>
                        <View style={newsStyle.contentPost}>
                            <Text>chúc mọi người buổi tối vv ? 
                                tiện cho mình hỏi khi chạy nó bị lỗi như thế này ? làm sao để khắc phục ạ:) thank trước !
                            </Text>
                        </View>
                        <View style={newsStyle.imagePost}>
                            <Image source={imageUSer} />
                        </View>
                        <View style={newsStyle.LikeandCmt}>
                            <TouchableOpacity activeOpacity = { .5 } onPress={() => this.changeLogo() }>
                                <View style={newsStyle.ImageandText}>  
                                    <Image source={imgSource} style={newsStyle.imageLike} />
                                    <Text style={newsStyle.TextStatus}>Like</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={newsStyle.ImageandText}>   
                                    <Image source={noneCmt} style={newsStyle.imageLike} />
                                    <Text style={newsStyle.TextStatus}>Comment</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
    show(){
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                avatarSource: source
                });
            }
        });
    }    

    ShowHideTextComponentView = () =>{

        if(this.state.status == true)
        {
            this.setState({status: false})
        }
        else
        {
            this.setState({status: true})
        }
    }

    changeLogo() {
        const imgSource = !this.state.show;
        this.setState({
            show: imgSource
        });
        const b = this.state.show ? noneLike : Like;
    }
}