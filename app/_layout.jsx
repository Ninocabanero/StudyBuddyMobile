
import { Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const MainLayout = () =>{

    const [fontsLoaded, error] = useFonts({
      "NerkoOne-Regular": require("../assets/fonts/NerkoOne-Regular.ttf"),
       
      });
      
      useEffect(() => {
        if (error) throw error;
      
        if (fontsLoaded) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded, error]);
      
      if (!fontsLoaded && !error) {
        return null;
      }
      
    return (
        <Stack>
            <Stack.Screen name='index' options={{headerShown:false}} />
           
        </Stack>
    )


}
 export default MainLayout