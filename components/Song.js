import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Themes } from '../assets/Themes';

const windowWidth = Dimensions.get("window").width;
const fontSize = 13;

const Song = ({index, imageUrl, title, artist, album, duration}) => {
    return (
        <View style={styles.container}>
            <View style={styles.index}>
                <Text style={{color: Themes.colors.gray, fontSize: fontSize}}> {index} </Text>
            </View>
            <Image source={{uri: imageUrl}} style={styles.image} />
            <View style={styles.textSection}>
                <Text style={{color: Themes.colors.white, fontSize: fontSize}} numberOfLines={1}> {title} </Text>
                <Text style={{color: Themes.colors.gray, fontSize: fontSize}} numberOfLines={1}> {artist} </Text>
            </View>
            <View style={{width: windowWidth*0.2}}>
                <Text style={{color: Themes.colors.white, fontSize: fontSize}} numberOfLines={1}> {album} </Text>
            </View>
            <View style={styles.duration}>
                <Text style={{color: Themes.colors.white, fontSize: fontSize}}> {duration} </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.background,
        marginTop: 16,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
    },
    index: {
        marginLeft: 12,
        marginRight: 12,
    },
    image: {
        width: 64,
        height: 64,
        marginRight: 16,
    },
    textSection: {
        flex: 1,
        width: windowWidth * 0.2,
        alignItems: 'flex-start',
        marginRight: 12,
    },
    duration: {
        marginLeft: 12,
        marginRight: 12,
    },
});

export default Song;