import { registerRootComponent } from 'expo';

//semana 1
import { Hello } from './components/semana1/Hello';
//semana 2
import { Frase } from './components/semana2/frase';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Frase);
