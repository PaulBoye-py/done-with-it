import { View, ImageBackground, StyleSheet, Text, Image} from "react-native";
import colors from "../config/colors";

export default function Welcomescreen() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            // alignItems: 'center'
        },
        
        image: {
            height: '100%',
            width: '100%',
            flex: 4,
        },

        logo: {
            height: '10%',
            width: '20%',
            borderRadius: '50',
            opacity: '0.7',
            backgroundColor: '',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            alignSelf: 'center',
            top: '10%'
        },

        text: {
            position: 'absolute',
            alignSelf: 'center',
            top: '22%'

        }

    });

    return (
        <View style={styles.container}>
            <ImageBackground 
                style={styles.image} 
                source={require('/Users/macpro/Documents/Projects/PaulBoye-py/done-with-it/DoneWithIt/app/assets/background.jpg')}
            />
            
            <Image style={styles.logo} source={require('/Users/macpro/Documents/Projects/PaulBoye-py/done-with-it/DoneWithIt/app/assets/logo-red.png')}/>
            <Text style={styles.text}>Sell What You Don't Need</Text>
            <View style={{
                backgroundColor: colors.primary,
                flex: 0.5,
            }}/>
            <View style={{
                backgroundColor: colors.secondary,
                flex: 0.5,
            }}/>
        </View>
    );

    
}