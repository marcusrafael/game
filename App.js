import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [jogos, setJogos] = useState([]);

  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");

  function limparCampos() {
    setId("");
    setNome("");
    setQuantidade("");
    setPreco("");
  }

  function excluir(id) {
    const novaLista = jogos.filter((jogo) => jogo.id !== id);
    setJogos(novaLista);
  }

  function editar(id, nome, quantidade, preco) {
    setId(id);
    setNome(nome);
    setQuantidade(quantidade);
    setPreco(preco);
  }

  function salvar(id) {
    setJogos(
      jogos.map((item) => {
        if (item.id === id) {
          item.id = id;
          item.nome = nome;
          item.quantidade = quantidade;
          item.preco = preco;
          return item;
        }
      }),
    );
  }

  const Item = ({ id, nome, quantidade, preco }) => {
    return (
      <View>
        <Text>
          {id}
          {nome}
          {quantidade}
          {preco}
        </Text>
        <Button title="Excluir" color="red" onPress={() => excluir(id)} />
        <Button
          title="Editar"
          onPress={() => {
            editar(id, nome, quantidade, preco);
          }}
        />
        <Button
          title="Salva"
          onPress={() => {
            salvar(id);
          }}
        />
      </View>
    );
  };

  function criar() {
    const jogo = { id: id, nome: nome, quantidade: quantidade, preco: preco };
    setJogos([...jogos, jogo]);
    limparCampos();
    console.log(jogos);
  }

  return (
    <View>
      <Text>Bem-vindo ao Games! 🕹️</Text>
      <Text>ID</Text>
      <TextInput value={id} onChangeText={setId} placeholder={"Digite o ID"} />
      <Text>Nome</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder={"Digite o Nome"}
      />
      <Text>Quantidade</Text>
      <TextInput
        value={quantidade}
        onChangeText={setQuantidade}
        placeholder={"Digite a Quantidade"}
      />
      <Text>Preço</Text>
      <TextInput
        value={preco}
        onChangeText={setPreco}
        placeholder={"Digite o Preço"}
      />
      <Button title="Criar" onPress={() => criar()} />
      <FlatList
        data={jogos}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            nome={item.nome}
            quantidade={item.quantidade}
            preco={item.preco}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
