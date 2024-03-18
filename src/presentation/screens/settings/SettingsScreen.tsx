import {Pressable, Text, View } from 'react-native'
import { styles } from '../../../config/app-theme'
import { useCounterStore } from '../../store/counter-store';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export const SettingsScreen = () => {

    const counter = useCounterStore(state=>state.counter);
    const incrementBy = useCounterStore(state=>state.incrementBy);

    const navigation = useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            title:`Contador: ${counter}`
        })
    },[counter])

    return (
        <View style={styles.container}>
            <Text>Count: {counter}</Text>
            <Pressable style={styles.primaryButton}
                onPress={()=>incrementBy(1)}
            >
                <Text>+1</Text>
            </Pressable>

            <Pressable style={styles.primaryButton}
                onPress={()=>incrementBy(-1)}
            >
                <Text>-1</Text>
            </Pressable>
        </View>
    )
}