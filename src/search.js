import React, {Constants, useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default function Search(){ 

    const [cep, setCep] = useState('');
    const [data, setData] = useState([]);

    const buscarCep = () => {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then (response => response.json())
            .then (data => setData(data))
            .catch(error => (error));
    }

    const clear = () => {
        setData('');
        setCep('');
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.headerImg} source={require('../img/icon_search.png')} />
                <Text style={styles.headerText}>Consulta CEP</Text>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.text}>Consulta de Endereço por CEP</Text>
                <Text style={styles.subText}>Informe o CEP desejado no campo abaixo:</Text>
            </View>            
            <View>
                <TextInput  style={styles.input}
                            maxLength={8}
                            keyboardType={'numeric'}
                            placeholder={'CEP'}
                            value={cep}
                            onChangeText={cep => setCep(cep)}
                            require={true}/>
                <View style={styles.containerButton}>
                    <TouchableOpacity   style={styles.button}
                                        onPress={buscarCep}>
                        <Text style={styles.textButton}>Buscar</Text>
                    </TouchableOpacity>      
                    <TouchableOpacity   style={styles.button}
                                        onPress={clear}>
                        <Text style={styles.textButton}>Limpar</Text>
                    </TouchableOpacity>   
                </View>          
            </View>
            <View style={styles.containerResult}>
                <Text style={styles.text}>Dados do CEP</Text>
                <View style={styles.result}>
                    <Text style={styles.subText}>CEP: </Text>
                    <Text  style={styles.subText}>{data.cep}</Text>                    
                </View>
                <View style={styles.result}>                    
                    <Text style={styles.subText}>Logradouro: </Text>
                    <Text style={styles.subText}>{data.logradouro}</Text>
                </View>
                <View style={styles.result}>
                    <Text style={styles.subText}>Bairro: </Text>
                    <Text style={styles.subText}>{data.bairro}</Text>
                </View>
                <View style={styles.result}>
                    <Text style={styles.subText}>Cidade: </Text>
                    <Text style={styles.subText}>{data.localidade}</Text>
                </View>
                <View style={styles.result}>
                    <Text style={styles.subText}>UF: </Text>
                    <Text style={styles.subText}>{data.uf}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#044066',
    },
    header: {
        backgroundColor: '#fff', 
        flexDirection: 'row'
    },
    headerText:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        color: '#044066'
    },
    headerImg:{
        margin: 10,
        maxWidth : 38,
        maxHeight: 38,
    },
    containerText:{
        padding: 20
    },  
    text:{
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    subText:{
        fontSize: 15,
        color: '#fff'
    },
    containerButton:{
        flexDirection: 'row',
        margin: 10,
    },
    button:{
        backgroundColor: '#F7BC0E',
        borderRadius: 10,
        margin: 10
    },
    textButton:{
        color: '#fff',
        paddingHorizontal: 35,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    input:{
        backgroundColor: '#fff',
        fontSize: 15,
        padding: 10,
        marginHorizontal: 20,
        borderRadius: 10
    },
    containerResult:{
        padding: 20
    },
    result:{
        flexDirection: 'row'
    }
});