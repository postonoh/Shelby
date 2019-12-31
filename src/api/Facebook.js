import Constants from 'expo-constants';
import * as Facebook from 'expo-facebook';

const permissions = ['public_profile', 'email'];

const loginAsync = async () => {
    try {
        await Facebook.initializeAsync(Constants.manifest.facebookAppId);
        const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile', 'email'],
        });
        if (type === 'success') {
            return Promise.resolve(token);
        }

        return Promise.reject('No success');
    } catch (error) {
        return Promise.reject(error); 
    }
};

export const FacebookApi = {
    loginAsync,
};
