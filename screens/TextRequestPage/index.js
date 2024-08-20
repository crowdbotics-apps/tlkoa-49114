import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';

const OpenAIScreen = () => {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleSend = async () => {
    try {
      const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
        },
        body: JSON.stringify({
          prompt: inputText,
          temperature: 0.7,
          max_tokens: 150,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0
        })
      });
      const data = await response.json();
      setResponseText(data.choices[0].text.trim());
    } catch (error) {
      console.error('Error:', error);
      setResponseText('Failed to fetch response. Please try again.');
    }
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Ask me anything..." value={inputText} onChangeText={setInputText} multiline />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
      <View style={styles.responseContainer}>
        <Text style={styles.responseText}>{responseText}</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    width: '90%',
    marginBottom: 20
  },
  textInput: {
    height: 100,
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    textAlignVertical: 'top'
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 10
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18
  },
  responseContainer: {
    marginTop: 20,
    width: '90%'
  },
  responseText: {
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    minHeight: 100
  }
});
export default OpenAIScreen;