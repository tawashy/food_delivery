import React, { useContext } from 'react'
import { View, Text, ImageBackground, ScrollView } from 'react-native'
import { Images } from '../../theme'
import ProductItem from '../../components/product_item'
import { ProductsContext } from '../../conexts/products'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ScreenContainer = ({ name }) => {
    const [state, dispatch] = useContext(ProductsContext) 

    const popular = state.products.filter(product => product.section === 'popular')
    const near = state.products.filter(product => product.section === 'near')

    return (
        <View style={{ flex: 1}}>
            {/* Screen Title */}
            <View style={{ marginLeft: 32, maxHeight: 280 , marginTop: 24}}>
                <Text style={{ fontSize: 24, marginBottom: 15, fontWeight:'400' }}>{name}</Text>
            </View>

            {/* Category Scroll  */}
            <View style={{ flex: 1,   marginLeft: 32, maxHeight: 40 , marginTop: 24}}>
                <ScrollView horizontal={true}>
                <ImageBackground source={Images.btn_bg} style={{
                    flex: 1,
                    width: 88,
                    resizeMode: "cover",
                    alignItems: 'center',
                    justifyContent: "center"
                    }}>
                    <Text>Aisan</Text>
                </ImageBackground>
                <ImageBackground source={null} style={{
                    flex: 1,
                    width: 88,
                    resizeMode: "cover",
                    alignItems: 'center',
                    justifyContent: "center"
                    }}>
                    <Text>American</Text>
                </ImageBackground>
                <ImageBackground source={null} style={{
                    flex: 1,
                    width: 88,
                    resizeMode: "cover",
                    alignItems: 'center',
                    justifyContent: "center"
                    }}>
                    <Text>French</Text>
                </ImageBackground>
                <ImageBackground source={null} style={{
                    flex: 1,
                    width: 88,
                    resizeMode: "cover",
                    alignItems: 'center',
                    justifyContent: "center"
                    }}>
                    <Text>Maxican</Text>
                </ImageBackground>
                <ImageBackground source={null} style={{
                    flex: 1,
                    width: 88,
                    resizeMode: "cover",
                    alignItems: 'center',
                    justifyContent: "center"
                    }}>
                    <Text>Meditarian</Text>
                </ImageBackground>
                <ImageBackground source={null} style={{
                    flex: 1,
                    width: 88,
                    resizeMode: "cover",
                    alignItems: 'center',
                    justifyContent: "center"
                    }}>
                    <Text>Italian</Text>
                </ImageBackground>
                </ScrollView>
            </View>

            {/* Near you Scroll */}
            <View style={{ flex: 1,   marginLeft: 32, maxHeight: 280 , marginTop: 24}}>
                <Text style={{ fontSize: 16, marginBottom: 15 }}> Near you</Text>
                <ScrollView horizontal={true}>
                    {near.map(product => <ProductItem key={product.id} product={product} isLiked={state.liked.filter(id => id === product.id).length > 0}/> )}
                </ScrollView>
            </View>

            {/* Popular Scroll */}
            <View style={{ flex: 1,   marginLeft: 32, maxHeight: 280 , marginTop: 24}}>
                <Text style={{ fontSize: 16, marginBottom: 15 }}> Popular</Text>
                <ScrollView horizontal={true}>
                    {popular.map(product => <ProductItem key={product.id} product={product} isLiked={state.liked.filter(id => id === product.id).length > 0}/> )}
                </ScrollView>
            </View>
            <View style={{  marginLeft: 32, maxHeight: 140 , marginRight: 27.5, marginTop: 24, alignItems: 'flex-end'}}>
                    <ImageBackground source={Images.btn_blue} style={{
                    width: 139,
                    height: 48,
                    resizeMode: "cover",
                    alignItems: 'center',
                    justifyContent: "center"
                    }}>
                        <TouchableOpacity containerStyle={{ width: 139, height: 48, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{ fontSize: 18, fontWeight:'bold', color:'white'}}>View all</Text>
                        </TouchableOpacity>
                    </ImageBackground>
            </View>
        </View>
          
    )
}


export default ScreenContainer