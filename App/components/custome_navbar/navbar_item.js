
import React from 'react'

import { View, Image, Text, TouchableOpacity} from 'react-native'
import { Images } from '../../theme'


const NavbarItem = ({ active }) => {

    return (
    <View style={{ justifyContent: 'center'}}>
        <TouchableOpacity containerStyle={{ zIndex: 40, minHeight: 80, alignItems:'center', justifyContent:'center', backgroundColor:'yellow',}}>
            <Text style={{ zIndex: 20, backgroundColor:'red', maxHeight: 16, fontSize: 13, color: '#365EFF',  transform: [{ rotate: '270deg'}]}}>My Profile</Text>
        </TouchableOpacity>
        { active && <Image source={Images.active_navbar} style={{ position: 'absolute',}} />}
    </View>
)}

export default NavbarItem