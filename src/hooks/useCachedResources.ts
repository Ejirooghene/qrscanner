import { useState, useEffect } from 'react';
// import SplashScreen from 'expo-splash-screen';
// import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { FontAwesome, MaterialCommunityIcons, MaterialIcons, Entypo, AntDesign, Ionicons } from '@expo/vector-icons';


const useCachedResources = (): boolean => {
    const [isReady, setIsReady] = useState<boolean>(false);

    // SplashScreen.preventAutoHideAsync(); 

    const loadResourcesAsync = async() => {
        try {
            // SplashScreen.preventAutoHideAsync();

            // load fonts 
            await Font.loadAsync({
                "Regular": require('../assets/fonts/Poppins-Regular.ttf'),
                "Medium": require('../assets/fonts/Poppins-Medium.ttf'),
                "Bold": require('../assets/fonts/Poppins-Bold.ttf'),
                ...Ionicons.font,
                ...FontAwesome.font,
                ...MaterialCommunityIcons.font,
                ...MaterialIcons.font,
                ...Entypo.font,
                ...AntDesign.font, 
            }); 

            // const images = [
            //     require(''),
            // ]

            // const cacheImages = images.map( image => {
            //     return Asset.fromModule(image).downloadAsync();
            // })

            // await Promise.all(cacheImages);
            await new Promise((resolve) => setTimeout(resolve, 1000));

        } catch(error) {
            console.log('Error caching resources:', error)
        } finally {
            setIsReady(true);
        }
    }

    useEffect(() => {
        loadResourcesAsync();
    }, []);

    return isReady;
}

export default useCachedResources;