import React, { Component } from 'react';
import { 
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class Login extends Component {

    constructor (props) {
        super(props);
        console.log('Login constructor')
    }

    static navigatorStyle = {
        navBarHidden: true,
        orientation: 'portrait',
        statusBarColor: 'rgba(62,63,143,0.8)',
        statusBarTextColorScheme: 'rgba(255,255,255,0.6)',
        disabledBackGesture: true
    };

    PressSignIn = () => {
        this.props.navigator.push({
            screen:'reactnativenavigationdemo.Home',
            animated: true,
            animationType: 'fade'
        })
    }

    PressRegister = () => {
        this.props.navigator.push({
            screen:'reactnativenavigationdemo.Register'
        })
    }

    componentWillMount() {
        console.log('Login componentWillMount')
        this.props.navigator.setDrawerEnabled({
            side: 'left', 
            enabled: false
          });
        this.props.navigator.setDrawerEnabled({
            side: 'right', 
            enabled: false
        });
    }

    componentDidMount() {
        console.log('Login componentDidMount')
    }

    componentDidCatch() {
        console.log('Login componentDidCatch')
    }

    componentDidUpdate() {
        console.log('Login componentDidUpdate')
    }

    componentWillReceiveProps(){
        console.log('Login componentWillReceiveProps')
    }

    componentWillUnmount(){
        console.log('Login componentWillUnmount')
    }

    componentWillUpdate(){
        console.log('Login componentWillUpdate')
    }

    componentDidCatch(){
        console.log('Login componentDidCatch')
    }
    
    render(){
        return(

            <View style={styles.container}>
                <View>
                    <Text style={{color: '#fff', fontSize: 22, marginBottom: 10, fontWeight:'900'}}>Login</Text>
                </View>
                <View style={styles.logincontainer}>
                    <View style={styles.inputbar}>
                        <View style={{backgroundColor:'black', height: 30, width: 30, marginTop: 4, alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#ebebeb'}}>
                            
                        </View>
                        <TextInput
                            style={{
                                backgroundColor: '#fff',
                                color: '#000',
                                width: 200,
                                height: 40,
                                paddingTop: 5,
                                paddingLeft: 10,
                                paddingBottom: 5,
                                paddingRight: 10
                            }}
                            placeholder='Your Email Address'
                        />
                    </View>
                    <View style={styles.seprator}></View>
                    <View style={styles.inputbar}>
                        <View style={{backgroundColor:'black', height: 30, width: 30, marginTop: 4, alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#ebebeb'}}>
                            
                        </View>    
                        <TextInput 
                            style={{
                                backgroundColor: '#fff',
                                color: '#000',
                                width: 200,
                                height: 40,
                                paddingTop: 5,
                                paddingLeft: 10,
                                paddingBottom: 5,
                                paddingRight: 10
                            }}
                            placeholder='Your Password'
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity onPress={this.PressRegister}>
                        <Text style={{
                            backgroundColor: '#12132b',
                            color: '#fff',
                            fontSize: 16,
                            padding: 5,
                            width: 110,
                            height: 35,
                            textAlign: 'center',
                            marginRight: 20
                        }}>
                            Register
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.PressSignIn}>
                        <Text style={{
                            backgroundColor: '#fff',
                            color: '#3e3f8f',
                            fontSize: 16,
                            padding: 5,
                            width: 110,
                            height: 35,
                            textAlign: 'center'
                        }}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3e3f8f'
    },
    logincontainer: {
        padding: 5,
        height: 90.8,
        backgroundColor: '#fff',
        marginBottom: 10
    },
    inputbar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    seprator: {
        borderBottomWidth: 0.8,
        borderBottomColor: '#ebebeb',
        marginBottom: 5,
        marginTop: 5
    }
});