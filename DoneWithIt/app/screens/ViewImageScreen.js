import {View, Image, StyleSheet} from 'react-native';

import colors from '../config/colors';

export default function ViewImageScreen() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.black,
        },
        
        close: {
            backgroundColor: colors.primary,
            height: 50,
            width: 50,
            position: 'absolute',
            left: 20,
            top: 50
        },

        delete: {
            backgroundColor: colors.secondary,
            height: 50,
            width: 50,
            position: 'absolute',
            right: 20,
            top: 50
        },

        image: {
            resizeMode: 'contain',
            flex: 0.5,
            width: '100%',
            height: '100%',
            position: 'absolute'
        }

    })
    return (
        <View style={styles.container}>
            <View style={styles.close}/>
            <View style={styles.delete}/>
            <Image style={styles.image} source={require('/Users/macpro/Documents/Projects/PaulBoye-py/done-with-it/DoneWithIt/app/assets/chair.jpg')}/>
        </View>
    )
}