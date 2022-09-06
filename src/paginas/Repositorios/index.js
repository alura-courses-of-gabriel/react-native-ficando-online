import React, { useEffect, useState } from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import estilos from './estilos';
import buscaRepositorios from "../../servicos/requisicoes/repositorios";

export default function Repositorios({ route, navigation }) {
    const [repo, setRepo] = useState([]);

    useEffect(async () => {
        const resultado = await buscaRepositorios(route.params.id);
        setRepo(resultado)
    }, [])

    return (
        <View style={estilos.container}>
                <Text style={estilos.repositoriosTexto}>{repo.length} repositórios criados</Text>
                <TouchableOpacity
                    style={estilos.botao}
                    onPress={() => navigation.navigate('CriarRepositorio')}
                >
                    <Text style={estilos.textoBotao}>Adicionar novo repositório</Text>
                </TouchableOpacity>

            <FlatList data={repo} style={{width: '100%'}} renderItem={(item) => {
                <TouchableOpacity
                    style={estilos.repositorio}
                    onPress={() => navigation.navigate("InfoRepos", item)}
                >
                    <Text>{item.name}</Text>
                    <Text>Atualizado em: {item.}</Text>
                </TouchableOpacity>
            }}



        </View>
    );
}
