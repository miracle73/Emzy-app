import React from 'react'
import { StatusBar, Platform } from 'react-native'
import { NativeBaseProvider } from 'native-base';
import Navigation from './app/Components/Navigation/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ContextProvider } from './app/data_storage/contextApi/AppContext';
import { colors } from './app/Utils/theme/colors';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Toast from 'react-native-toast-message'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const queryClient = new QueryClient();

const App = () => {

  return (
    <ContextProvider>
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider>
          <SafeAreaProvider>
            <StatusBar
              barStyle={Platform.OS == 'ios' ? 'light-content' : 'light-content'}
              backgroundColor={colors.tealishBlue}
              animated={true} />
            <GestureHandlerRootView>
              <Navigation />
            </GestureHandlerRootView>
            <Toast />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </QueryClientProvider>
    </ContextProvider>
  )
}

export default App
