import React from 'react'

import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Images } from '../../theme'


const CustomNavbar = () => {
    return(
        <React.Fragment>
                    <Image source={Images.tabbar_bg} style={{
                        position: 'absolute',
                        resizeMode: 'contain',
                        flex: 1,
                        width: 63,
                        // left: -11
                    }}/>
                    <View style={{ zIndex: 10, flex: 1, flexGrow: 1, marginTop: 50, marginBottom: 100, justifyContent:'space-evenly', alignItems: 'center' }}>
                        {/* <Text style={{  transform: [{ rotate: '270deg'}]}}>Box</Text>
                        <Text style={{  transform: [{ rotate: '270deg'}]}}>Search</Text> */}
                        {/* Top View */}
                        <View style={{ flex:1,  justifyContent: 'space-between', maxHeight: 120}}>
                            <TouchableOpacity containerStyle={{ width: 40, height: 40, alignItems:'center', justifyContent:'center', }}>
                                <Image source={Images.box}  style={{
                                    // marginVertical: 26,
                                    height: 22.97,
                                    width: 17
                                }}/>
                            </TouchableOpacity>
                            <TouchableOpacity containerStyle={{ width: 40, height: 40, alignItems:'center', justifyContent:'center',}}>
                                <Image source={Images.search}  style={{
                                    // marginVertical: 26,
                                    height: 22.97,
                                    width: 17
                                }}/>

                            </TouchableOpacity>
                        </View>
                        {/* Middle View */}
                        <View style={{ flexGrow: 1, justifyContent:'space-between', maxWidth: 65, marginVertical: 20}}>
                            <TouchableOpacity containerStyle={{ minHeight: 80, alignItems:'center', justifyContent:'center', }}>
                                <Text style={{ fontSize: 13, maxHeight: 16, transform: [{ rotate: '270deg'}]}}>My Profile</Text>
                            </TouchableOpacity>
                            <TouchableOpacity containerStyle={{ minHeight: 80, minWidth: 40, alignItems:'center', justifyContent:'center',}}>
                                <Text style={{ fontSize: 13, maxHeight: 16, minWidth: 70,  transform: [{ rotate: '270deg'}]}}>Notification</Text>
                            </TouchableOpacity>
                            <TouchableOpacity containerStyle={{ minHeight: 68, alignItems:'center', justifyContent:'center', }}>
                                <Text style={{ fontSize: 13,  maxHeight: 16, transform: [{ rotate: '270deg'}]}}>Invoices</Text>
                            </TouchableOpacity>
                            <TouchableOpacity containerStyle={{ minHeight: 80, alignItems:'center', justifyContent:'center', }}>
                                <Text style={{ fontSize: 13, color: '#365EFF',  maxHeight: 16, transform: [{ rotate: '270deg'}]}}>Home</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Bottm View */}
                        <View style={{ flex: 1, maxHeight: 40, justifyContent: 'flex-end',}}>
                            <TouchableOpacity containerStyle={{ width: 40, height: 40, alignItems:'center', justifyContent:'center', position: 'relative'}}>
                                <Image source={Images.cart}  style={{
                                    height: 22.97,
                                    width: 16
                                }}/>
                                {/* Circle with numbers */}
                                {/* <View style={{ position: 'absolute', top: -8, right: -8, backgroundColor: 'white', borderRadius: 50, borderColor: '#365EFF', borderWidth: 1, padding: 2}}>
                                    <Text style={{ fontSize: 11, color: '#365EFF',}}>13</Text>
                                </View> */}

                            </TouchableOpacity>

                        </View>
                    </View>
        </React.Fragment>
              
    )
}


export default CustomNavbar