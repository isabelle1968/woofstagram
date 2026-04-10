import { useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function InputWithLabel({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#9a8fb3"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [nomePet, setNomePet] = useState('');
  const [aniversarioPet, setAniversarioPet] = useState('');
  const [racaPet, setRacaPet] = useState('');
  const [brinquedoFavorito, setBrinquedoFavorito] = useState('');

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={true}
    >
      <View style={styles.card}>
        <Text style={styles.title}>🐶 Woofstagram</Text>
        <Text style={styles.subtitle}>Cadastro do seu pet</Text>

        <InputWithLabel
          label="E-mail"
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
        />

        <InputWithLabel
          label="Senha"
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />

        <InputWithLabel
          label="Confirmar senha"
          placeholder="Digite novamente sua senha"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry={true}
        />

        <InputWithLabel
          label="Nome do pet"
          placeholder="Digite o nome do pet"
          value={nomePet}
          onChangeText={setNomePet}
        />

        <InputWithLabel
          label="Data de aniversário"
          placeholder="Ex: 10/05/2020"
          value={aniversarioPet}
          onChangeText={setAniversarioPet}
        />

        <InputWithLabel
          label="Raça"
          placeholder="Digite a raça do pet"
          value={racaPet}
          onChangeText={setRacaPet}
        />

        <InputWithLabel
          label="Brinquedo favorito"
          placeholder="Digite o brinquedo favorito"
          value={brinquedoFavorito}
          onChangeText={setBrinquedoFavorito}
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Entrar no app"
            onPress={() => navigation.navigate('Main')}
            color="#6c3cc9"
          />
        </View>
      </View>

      <View style={{ height: 80 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f7f1ff',
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 40,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    maxWidth: 700,
    backgroundColor: '#efe7fb',
    borderRadius: 24,
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#6c3cc9',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#7d6f99',
    textAlign: 'center',
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#5a3d8a',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d8c8f3',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: '#2d2340',
  },
  buttonContainer: {
    marginTop: 12,
  },
});
<View style={{ height: 500 }} />