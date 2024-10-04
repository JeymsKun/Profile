import Profile from './screens/profile';
import { useFonts } from 'expo-font';
import { ThemeProvider } from './ThemeContext';;

export default function App() {
  const [loadedFonts] = useFonts({
    'regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'semiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'extraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
  });

  if (!loadedFonts) {
    return null;
  }

  return (
    <ThemeProvider>
      <Profile />
    </ThemeProvider>
  );
}
