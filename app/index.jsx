import {Text, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router';
const index = () => {
  return (
    <View className="bg-violet-950 flex-1 items-center justify-center">
   
      <Text className="text-slate-50 text-4xl py-20 font-nregular">Fav Musika</Text>
      <Text className="text-slate-50 text-2xl">Home Page</Text>
     
    
      <Link href="/home">Go to home</Link>
      
    </View>
  )
}

export default index

