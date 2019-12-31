import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { Image } from 'react-native';


import { images } from '../constants/images';

const OnboardingLogo = () => (
    <Box center>
        <Box mb="sm">
            <Image source={images.logo} />
        </Box>
        <Box mb="sm">
            <Text size="2x1">
                Vitalis
            </Text>
        </Box>
        <Text color="green" size="2x1"> Better Living. </Text>
    </Box>
);

export default OnboardingLogo;

