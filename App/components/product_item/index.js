import React from 'react'
import { View, Image, Text} from 'react-native'
import { Images } from '../../theme'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ProductItem = ({ isLiked, product }) => {
    const navigation = useNavigation();


    return (
        // {/* Product Component */}
        <TouchableOpacity onPress={()=> navigation.navigate('Details', { product })} style={{ 
            height: 190, 
            width: 168,
            maxWidth: 168,
            maxHeight: 190,
            backgroundColor: 'white', 
            borderRadius: 24, 
            shadowColor: '#000000',
            shadowOpacity: 0.05,
            shadowOffset: { width: 8, height: 16 },
            position: 'relative',
            margin: 24,
            }}>
            
            {/* Image View */}
            <Image source={product.image} style={{ 
                width: 105, 
                height: 105, 
                position: 'absolute', 
                backgroundColor: 'gray', 
                top: -20, 
                left: -20, 
                borderRadius: 105/2,
                zIndex: 20,
                }}/>
            {/* Product Component Content */}
            <View style={{ flex: 1, margin: 8, flexDirection: 'column', justifyContent: 'space-between'}}>
                {/* Button View */}
                <View style={{ alignItems: 'flex-end'}}>
                <Image source={isLiked? Images.liked: Images.like} style={{ width: 40,  height: 32, }}/>
                    {/* <Text style={{ backgroundColor: '#99ADFF', width: 40, height: 32, textAlign: 'center', justifyContent: 'center'}}>H</Text> */}
                </View>
                <View style={{ margin: 11,  }}>
                    <Text style={{ marginBottom: 2, fontSize: 14, fontWeight: 'bold', color: '#365EFF'}}>{product.price}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 4}}>{product.name}</Text>
                    <Text style={{ fontSize: 10, color: '#656565'  }}>{product.description}</Text>
                </View>
            </View>
            
            
        </TouchableOpacity>
    )
}


export default ProductItem