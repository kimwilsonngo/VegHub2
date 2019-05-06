import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, View, Text, FlatList, Dimensions } from 'react-native';
import {Alert, AppRegistry, Platform, TouchableOpacity} from 'react-native';
export class ProfileScreen extends Component {

    constructor(props){
        super(props);
        this.editUser = this.editUser.bind(this);
    }
    static navigationOptions = {
        title: 'Your Profile',
        headerTitleStyle:{
            color: 'black',
        },
        headerStyle:{
            backgroundColor: 'transparent',
            zIndex: 100,
        },
    };

    editUser(user){
        console.log(user.name);
        this.props.navigation.navigate('EditProfile', {user});
    }


    render() {
        const { navigation } = this.props;
        //User is here
        //const User = navigation.getParam('user', 'NO-ID');
        const user = {name: "HOLLYHOES"}


        return (
            <ScrollView style={{backgroundColor:'white'}}>
                <View style ={styles.col}>
                     <View style={{flex: 1}}>
                        <TouchableOpacity onPress={() => this.editUser(user)}>
                            <Text style={styles.editButton}> EDIT </Text>
                        </TouchableOpacity>
                     </View>
                     <View style={styles.pictureBox}>
                        <View style={styles.circleImageBox}>
                            <Image
                                source={require('./Images/plant-3.jpg')}
                                style={styles.picture}
                                />
                        </View>

                        <View style={styles.row}>
                            <View style={[styles.userDetailsBox, {borderLeftWidth: 0}, {borderLeftColor: 0}]}>
                                <Text style={{textAlign:'center', color: 'white', fontSize: 20}}>12</Text>
                                <Text style={{textAlign:'center', color: 'white', fontSize: 14}}>P L A N T S</Text>
                            </View>
                            <View style={styles.userDetailsBox}>
                                <Text style={{textAlign:'center', color: 'white', fontSize: 20}}>5</Text>
                                <Text style={{textAlign:'center', color: 'white', fontSize: 14}}>F A V O R I T E S</Text>
                            </View>
                            <View style={styles.userDetailsBox}>
                                <Text style={{textAlign:'center', color: 'white', fontSize: 20}}>5</Text>
                                <Text style={{textAlign:'center', color: 'white', fontSize: 14}}>D E A D</Text>
                                <Text style={{textAlign:'center', color: 'white', fontSize: 14}}>P L A N T S</Text>
                            </View>
                        </View>

                     </View>

                     <View style={styles.UserBox}>
                         <View style={styles.UserTitleBox}>
                            <Text style ={[styles.UserTitle,{textAlign: 'left'}, {marginLeft: 10}, {fontWeight: 'bold'}]}> {user.name} </Text>
                            <Text style ={[styles.UserTitle,{textAlign: 'left'}, {marginLeft: 15}, {color: 'gray'}, {fontSize: 20}]}> Expert Gardener </Text>
                         </View>
                         <View style={[styles.UserTitleBox, {height: 110}, {backgroundColor: '#ccb29d'}]}>
                             <Text style ={[styles.UserSubTitle,{textAlign: 'left'}, {marginLeft: 10}, {fontWeight: 'bold'}]}> About </Text>
                             <Text style ={styles.UserDescription}>
                                Lorem Ipsum suck a bitch motherfucker waht the fuck do you want I do gorilla warfare in the united states navy
                             </Text>
                         </View>
                     </View>

                 </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    editButton: {
        fontSize:20,
        marginRight: 10,
        textAlign: 'right',
    },
    circleImageBox: {
        height: 200,
        width: 200,
        overflow: 'hidden',
        borderRadius: 200/2
    },
    pictureBox: {
        height: 300,
        overflow: 'hidden',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#d3d3d3'
    },
    userDetailsBox: {
        alignItems:'center',
        justifyContent:'center',
        height: 50,
        width: 120,
        borderLeftWidth: 1,
        borderLeftColor: 'white'
    },
    UserBox: {
        height: 300,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderRadius: 8,
        backgroundColor: '#3f1d00'
    },
    UserTitleBox: {
            height: 85,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            borderRadius: 8,
            backgroundColor: 'white'
        },
    col:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    row:{
        flexDirection: 'row',
    },
    picture: {
            flex:1,
            resizeMode: 'cover',
            alignItems: 'center',
            height: undefined,
            width: undefined,
        },
    UserTitle: {
        fontFamily: 'Leixo',
        fontSize: 30,
        color: 'black',
        textAlign:'center',
        color: 'green',

    },
    UserSubTitle: {
        fontFamily: 'Roboto',
        fontSize: 25,
        color: 'black',
        textAlign:'left',

    },
    UserDescription: {
        fontFamily: 'Roboto',
        fontSize: 15,
        color: 'black',
        textAlign:'left',
        marginLeft: 10
    }
});