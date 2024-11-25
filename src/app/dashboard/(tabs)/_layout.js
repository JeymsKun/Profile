import React from 'react'
import { Tabs } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { ThemeProvider } from '../../../../ThemeContext'
import { useFonts } from 'expo-font';

const DashboardLayout = () => {
    const [loadedFonts] = useFonts({
        'regular': require('../../../../assets/fonts/Poppins-Regular.ttf'),
        'medium': require('../../../../assets/fonts/Poppins-Medium.ttf'),
        'semiBold': require('../../../../assets/fonts/Poppins-SemiBold.ttf'),
        'extraBold': require('../../../../assets/fonts/Poppins-ExtraBold.ttf'),
    });
    
    if (!loadedFonts) {
        return null;
    }

    return (
        <ThemeProvider>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: 'black',
                    tabBarActiveBackgroundColor: 'gray',
                    tabBarLabelStyle: {
                        fontSize: 12,
                    },
                    tabBarStyle:{
                        margin: 10,
                        borderRadius: 10,
                    },            
                    tabBarShowLabel: true
                }} 
            >
                <Tabs.Screen name='home'
                    options={{
                        title: 'Home',  
                        tabBarIcon: ({ focused }) => <MaterialCommunityIcons name={focused ? 'home': 'home-outline'} size={24} color='black' />
                    }}
                />
                <Tabs.Screen name='profile'
                    options={{
                        title: 'Profile',
                        tabBarIcon: ({focused}) => <MaterialCommunityIcons name={focused ? 'account': 'account-outline'} size={24} color='black' />
                    }}
                />
                <Tabs.Screen name='setting'
                    options={{
                        title: 'Setting',
                        tabBarIcon: ({focused}) => <MaterialCommunityIcons name={focused ? 'cog' : 'cog-outline'} size={24} color='black' />
                    }}
                />
            </Tabs>
        </ThemeProvider>
    )
}
export default DashboardLayout