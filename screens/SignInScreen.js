import { Button, StyleSheet, Text, View } from 'react-native';

export default function SignInScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <View style={styles.backgroundCircleTop} />
      <View style={styles.backgroundCircleBottom} />

      <View style={styles.card}>
        <Text style={styles.logo}>🐶 Woofstagram</Text>
        <Text style={styles.title}>Bem-vindo(a)!</Text>
        <Text style={styles.subtitle}>
          O cantinho perfeito para cadastrar e acompanhar seu pet com carinho.
        </Text>

        <View style={styles.petRow}>
          <Text style={styles.petEmoji}>🐾</Text>
          <Text style={styles.petEmoji}>🐶</Text>
          <Text style={styles.petEmoji}>🐱</Text>
          <Text style={styles.petEmoji}>💜</Text>
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            title="Ir para cadastro"
            onPress={() => navigation.navigate('SignUp')}
            color="#7c3aed"
          />
        </View>

        <Text style={styles.footerText}>
          Crie o perfil do seu pet e entre no app.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5efff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  backgroundCircleTop: {
    position: 'absolute',
    top: -40,
    right: -20,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#d8b4fe',
    opacity: 0.35,
  },

  backgroundCircleBottom: {
    position: 'absolute',
    bottom: -50,
    left: -30,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#c4b5fd',
    opacity: 0.25,
  },

  card: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#ffffff',
    borderRadius: 28,
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    shadowColor: '#7c3aed',
    shadowOpacity: 0.15,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },

  logo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#6d28d9',
    marginBottom: 10,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#3b0764',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 15,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 18,
    paddingHorizontal: 8,
  },

  petRow: {
    flexDirection: 'row',
    marginBottom: 22,
  },

  petEmoji: {
    fontSize: 24,
    marginHorizontal: 6,
  },

  buttonWrapper: {
    width: '100%',
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 16,
  },

  footerText: {
    fontSize: 13,
    color: '#8b5cf6',
    textAlign: 'center',
  },
});