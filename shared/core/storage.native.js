import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

global.storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
    sync: {}
});

export default global.storage;
