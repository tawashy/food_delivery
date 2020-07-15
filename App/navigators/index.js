
import * as React from 'react';
import { Text, Image, View, Dimensions,SafeAreaView,  Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import NavbarItem from '../components/custome_navbar/navbar_item'
import { TouchableOpacity } from 'react-native-gesture-handler';

import HomeContainer from '../containers/home'

// Images 
import { Images } from '../theme'
import { ProductsContextProvider, ProductsContext } from '../conexts/products';

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height //- 75
}

const NavbarItem = ({ active, name, onPress }) => {
    return (
        <View style={{ justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => onPress(name)} containerStyle={{ zIndex: 40, minHeight: 80, alignItems:'center', justifyContent:'center', }}>
                <Text style={{ zIndex: 20, maxHeight: 16, width: 70, fontSize: 13, color: active? '#365EFF': 'black', textAlign: 'center', transform: [{ rotate: '270deg'}]}}>{name}</Text>
            </TouchableOpacity>
            { active && <View style={{ borderRadius: 2, width: 4, height: 4, right: 10, zIndex: 20, position:'absolute', backgroundColor: '#365EFF'}}></View>}
            { active && <Image source={Images.active_navbar} style={{ position: 'absolute',}} />}
        </View>
    )
}

const HomeScreen = () =>  {
    const [activeNavbar, setActiveNavbar] = React.useState("Home")
    const [state, dispatch] = React.useContext(ProductsContext)
    
  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
          <View style={{ flex: 1, flexDirection: 'row'}}>
              {/* Navigation View */}
                <View style={{ width: 63, position:'relative'}}>
                    <Image source={Images.tabbar_bg} style={{
                        position: 'absolute',
                        resizeMode: 'contain',
                        flex: 1,
                        width: 63,
                        // left: -11
                    }}/>
                    <View style={{ zIndex: 10, flex: 1, flexGrow: 1, marginTop: 50, marginBottom: 70, justifyContent:'space-evenly', alignItems: 'center' }}>
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
                        <View style={{ flexGrow: 1, maxWidth: 200.84, justifyContent:'space-between', marginVertical: 20,}}>
                            <NavbarItem name="My Profile" active={activeNavbar === "My Profile"} onPress={(name) => setActiveNavbar(name)}/>
                            <NavbarItem name="Notifications" active={activeNavbar === "Notifications"} onPress={(name) => setActiveNavbar(name)}/>
                            <NavbarItem name="Invoices" active={activeNavbar === "Invoices"} onPress={(name) => setActiveNavbar(name)}/>
                            <NavbarItem name="Home" active={activeNavbar === "Home"} onPress={(name) => setActiveNavbar(name)}/>
                        </View>

                        {/* Bottm View */}
                        <View style={{ flex: 1, maxHeight: 40, justifyContent: 'flex-end',}}>
                            <TouchableOpacity containerStyle={{ width: 40, height: 40, alignItems:'center', justifyContent:'center', position: 'relative'}}>
                                <Image source={Images.cart}  style={{
                                    height: 22.97,
                                    width: 16
                                }}/>
                                {/* Circle with numbers */}
                                {state.cart.length > 0 && 
                                <View style={{ width: 20, height:20, alignItems:'center', position: 'absolute', top: -8, right: -8, backgroundColor: 'white', borderRadius: 50, borderColor: '#365EFF', borderWidth: 1, padding: 2}}>
                                    <Text style={{ fontSize: 11, color: '#365EFF',}}>
                                       {state.cart.reduce((a, b) => ({quantity: a.quantity + b.quantity})).quantity}
                                    </Text>
                                </View>                                
                                }

                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
              {/* Content View */}
                <View style={{  width: Screen.width - 65 }}>
                    <HomeContainer name={'Food & Delivery'} />
                </View>
          </View>

        
      </SafeAreaView>
  );
}

  
  function ModalScreen({route, navigation }) {
    const [quantity, setQuantity] = React.useState(1)
    const [state, dispatch] = React.useContext(ProductsContext)
    const { product } = route.params


    const add_to_cart = () => {
        dispatch({ type: 'ADD_TO_CART' , payload: { product, quantity }})
        navigation.goBack()
    }


    return (
      <View style={{ flex: 1, backgroundColor: '#365EFF'}}>
          <View style={{ flex: 1, backgroundColor: "#EDF0FF", borderBottomLeftRadius: 60, borderBottomRightRadius: 10}}>
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10, borderBottomLeftRadius: 60, borderBottomRightRadius: 10}}>
                <View style={{ alignSelf:'center', width: 24, height: 4 , backgroundColor: 'blue', borderRadius: 4, marginTop: 8}}></View>
                <TouchableOpacity style={{ alignItems: 'flex-end', paddingRight: 16}} onPress={ ()=> dispatch({ type: state.liked.filter(id => id === product.id).length > 0? 'REMOVE_FROM_FAVOTITE':'ADD_TO_FAVOTITE' , payload: product.id})}>
                    <Image source={state.liked.filter(id => id === product.id).length > 0? Images.btn_liked: Images.btn_like} />
                </TouchableOpacity>
                <View style={{ flex: 1, maxHeight: 309, justifyContent: 'center', alignItems: 'center', position:'relative'}}>
                    <Image source={product.image} style={{ width: 245, height: 245, backgroundColor: 'red', borderRadius: 245/2}} />
                    <Image source={Images.btn_play} style={{ position: 'absolute'}} />
                </View>
                <View style={{ margin: 32, marginRight: 140}}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#365EFF'}}> {product.price}</Text>
                        <Text style={{ fontSize: 24, marginBottom: 16 }}>{product.name}</Text>
                        <Text style={{ color: '#656565', fontSize: 12, lineHeight: 18 }}>{product.description}</Text>
                </View>
            </View>
            <View style={{ height: 92, padding: 32, flexDirection: 'row'}}>
                <Text style={{ flex: 1, color: '#656565', fontSize: 16}}> Quantity</Text>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around',}}>
                    <TouchableOpacity containerStyle={{ justifyContent: "center", alignItems: 'center', width: 44, height: 44, backgroundColor: 'white', borderRadius: 44/ 2}} onPress={() => quantity > 1 && setQuantity( quantity - 1)} >
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'blue' }}>-</Text>
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', maxWidth: 5,}}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', minWidth: 57 }}>{ quantity }</Text>
                    </View>
                    <TouchableOpacity 
                        containerStyle={{ justifyContent: "center", alignItems: 'center', width: 44, height: 44, backgroundColor: 'white', borderRadius: 44/ 2}} onPress={() => setQuantity( quantity + 1)} >
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'blue' }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
          </View>
        <View style={{ height: 100, justifyContent: 'center'}}>
            <TouchableOpacity containerStyle={{ justifyContent: "center", alignItems: 'center'}} onPress={() => add_to_cart()}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Add to cart</Text>
            </TouchableOpacity>
            {/* <Button titleStyle={{ fontSize: 18, fontWeight: 'bold', color: 'black' }} onPress={() => navigation.goBack()} title="Add To Cart" />   */}
        </View>
      </View>
    );
  }
  
  const MainStack = createStackNavigator();
  const RootStack = createStackNavigator();
  
  function MainStackScreen() {
    return (
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      </MainStack.Navigator>
    );
  }
  
  function RootStackScreen() {
    return (
        <ProductsContextProvider>
            <NavigationContainer>
                <RootStack.Navigator mode="modal">
                    <RootStack.Screen name="Main" component={MainStackScreen} options={{ headerShown: false }}/>
                    <RootStack.Screen name="Details" component={ModalScreen} options={{ headerLeft: null, cardStyle: { 
                        marginTop: 100, borderTopRightRadius: 50, borderTopLeftRadius: 50, 
                        }, 
                        headerShown: false,
                        cardOverlayEnabled: true,
                        cardOverlay: () => <View style={{ flex: 1, backgroundColor: '#000', opacity: 0.20}}></View>
                        }} />
                </RootStack.Navigator>
            </NavigationContainer>
        </ProductsContextProvider>
    );
  }


export default RootStackScreen