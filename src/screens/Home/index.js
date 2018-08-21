import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { singleScreenApplication } from '../../styles/navigatorStyles';


export default class Home extends Component {

    onNavigatorEvent(event)
    {
        if (event.type == 'DeepLink') {
            if(event.link == 'sidemenu') {
                this.props.navigator.toggleDrawer({
                    side:'left',
                    to:'closed'
                })
                this.props.navigator.toggleDrawer({
                    side:'right',
                    to:'closed'
                })
                this.props.navigator.resetTo({
                    screen:event.payload.screen,
                    title:event.payload.title,
                    animationType:"slide-horizontal"
                })
            }
        }
    }

    static navigatorStyle = singleScreenApplication;

    constructor(props){
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    componentWillMount() {
        this.props.navigator.setDrawerEnabled({
            side: 'left', 
            enabled: true
          });

        this.props.navigator.setDrawerEnabled({
            side: 'right', 
            enabled: true
        });
        let title = '';
    }

    OpenModel = () => {
        this.props.navigator.showModal({
            screen: "reactnativenavigationdemo.ModelScreen",
            title: "Modal Screen",
            animationType: 'slide-up'
          });
    }

    OpenMenuLeft = () => {
        this.props.navigator.toggleDrawer({
            side:'left',
            to:'open'
        })
    }

    OpenMenuRight = () => {
        this.props.navigator.toggleDrawer({
            side:'right',
            to:'open'
        })
    }

    Back = () => {
        this.props.navigator.push({
            screen: 'reactnativenavigationdemo.Login',
            title: 'Login Screen',
            animated: true,
            animationType: 'fade'
          });
    }

    render() {

        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'black', fontWeight:'900', fontSize:35}}>Home Screen</Text>
                <TouchableOpacity onPress={this.OpenMenuLeft}>
                    <Text style={{color:'blue', fontWeight:'700', fontSize:17}}>Menu Left</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.OpenMenuRight}>
                    <Text style={{color:'blue', fontWeight:'700', fontSize:17}}>Menu Right</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.OpenModel}>
                    <Text style={{color:'blue', fontWeight:'700', fontSize:17}}>Model Screen</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.Back}>
                    <Text style={{color:'blue', fontWeight:'700', fontSize:17}}>Back To Login</Text>
                </TouchableOpacity>
            </View>
        );

    }

}