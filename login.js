import React, { useEffect } from 'react';
import { View, Text, BackHandler, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as AuthSession from 'expo-auth-session';


export function login() {
    const navigation = useNavigation();

    //Comando utilizado através do useEffect para evitar que a animação da tela splash se repita após o usuário usar o back.
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true
        })
    }, [])

    //Função assíncrona criada para passar os parâmetros necessários para o login via Google.
    async function handleSignIn() {

        const CLIENT_ID = '1059836562881-1trgti4aldugcah36s0fi2tm9vhef1gj.apps.googleusercontent.com';
        const REDIRECT_URI = 'https://auth.expo.io/@guilhermecod/InvestMedia';
        const RESPONSE_TYPE = 'token';
        const SCOPE = 'profile email';


        const authUrl = encodeURI(`https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`);
        console.log(authUrl);
        const response = await AuthSession.startAsync({ authUrl });

        console.log(response);

        navigation.navigate('ativos');

    }

    return (
        //Imagem da logo do InvestMedia e botão personalizado do login com o Google.
        // Parte do código que permite a utilização de uma imagem no botão.
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.fundo}>
                <Image style={styles.ImagemLogin}
                    source={require('../assets/LoginImage.png')}
                />
    
                <TouchableOpacity

                    onPress={handleSignIn}
                    style={styles.botaogoogle}
                    activeOpacity={0.5}>
                    <Image
                        source={require('../../src/assets/googlebutton.png')}
                        style={styles.imagembotaogoogle}
                    />
                    <View style={styles.separadorbotao} />
                    <Text style={{ color: '#808080', marginBottom: 4, marginLeft: 48, fontWeight: "bold" }}>
                        Continuar com o Google
                    </Text>
                    
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}


//Estilos utilizados nessa tela.

const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: '#f5f5f6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ImagemLogin: {
        width: 350,
        resizeMode: 'contain',
        marginTop: 90,

    },
    botaogoogle: {

        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 5,
        borderColor: '#fff',
        height: 55,
        borderRadius: 30,
        margin: 5,
        width: 300,
        marginTop: 10,
        marginBottom: 410,
    },
    imagembotaogoogle: {

        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    separadorbotao: {

        backgroundColor: '#fff',
        width: 1,
        height: 40,
    },
});