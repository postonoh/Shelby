import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { TouchableOpacity, Image } from 'react-native';
import { images } from '../constants/images';
import { FontAwesome } from '@expo/vector-icons'


const bgColor = type => {
    switch (type) {
        case 'google':
            return '#1976D2';
        case 'facebook':
            return '#4D6FA9';
        default:
            return 'white';
    }
}

const LoginButton = ({ children, type, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Box dir="row" align="center" shadow={1} bg={bgColor(type)} w="80%" self="center" p="xs" radius="xs" h={50} mb="sm">
            <Box mr="sm">
                <Box bg="white" h={32} w={32} radius="xs" center>
                    {type === 'google' && <Image source={images.googleColorIcon} />}
                    {type === 'facebook' && <FontAwesome name="facebook" color="#4D6FA9" size={25} />}
                </Box>
            </Box>
            <Box>
                <Text size="sm" color="white">{children}</Text>
            </Box>
        </Box>

    </TouchableOpacity>

);

export default LoginButton;
