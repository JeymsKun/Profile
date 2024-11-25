import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as PaperProvider } from 'react-native-paper'; 

const RootLayout = () => {

    return (
        <PaperProvider>
            <SafeAreaProvider>
                <Stack
                    screenOptions={{        
                    animation: 'none',
                    }}
                >
                    <Stack.Screen name="index" options={{ headerShown: false }} />
                    <Stack.Screen name="reset" options={{ title: 'Reset'}} />
                    <Stack.Screen name="signup" options={{ title: 'SignUp'}} />
                </Stack>
            </SafeAreaProvider>       
        </PaperProvider>
       
    )
}