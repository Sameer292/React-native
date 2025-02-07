import { Link } from 'expo-router'
import React, { Component, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, View, StyleSheet, Button, Pressable, Alert, TextInput } from 'react-native'

function contact() {

  const [enteredName, setenteredName] = useState('');
  const [listOfCoffee, setlistOfCoffee] = useState([]);


  function listInputhandler(text) {
    setenteredName(text);
  }

  function addListhandler() {

    if (enteredName.length === 0) {
      Alert.alert('Please enter the name of the coffee');
      return;
    }
    setlistOfCoffee([...listOfCoffee, enteredName]);
    // setlistOfCoffee([])
    setenteredName('')

  }


  // render() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput defaultValue={enteredName} onChangeText={listInputhandler} style={styles.textinp} placeholder='Enter name of the coffee' />
        <TouchableOpacity onPress={addListhandler} style={styles.buttonEnter}>
          <Text style={styles.entertext}>Enter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Listcontainer}>
        <Text>
          Your list of coffee are...
        </Text>

        {

          listOfCoffee.map((coffee) => {
            return <Text style={styles.coffee} key={coffee} >{coffee}</Text>
          })

        }


      </View>
    </View>
  )

}

export default contact

const styles = StyleSheet.create({
  entertext: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#6BA3BE',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textinp: {
    borderColor: 'black',
    borderWidth: 1,
    color: '#03122f',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 20,
    width: '70%',
    height: 60,
    borderRadius: 8,
    backgroundColor: '#F3DADF',
  },
  buttonEnter: {
    height: 60,
    borderRadius: 10,
    backgroundColor: '#274D60',
    justifyContent: 'center',
    width: '25%',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  Listcontainer: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  coffee: {
    color: '#f3dadf',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 6,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#413B61',
    // color: 'white',
    paddingLeft: 20,
  }


})