import React, { useState } from 'react'
import { FlatList,Text, View, StyleSheet, Alert } from 'react-native'
import Goalitem from '@/components/Goalitem'
import Goalinput from '@/components/Goalinput'

function contact() {

  const [listOfCoffee, setlistOfCoffee] = useState([]);



  function addListhandler(enteredName) {

    if (enteredName.length === 0) {
      Alert.alert('Please enter the name of the coffee please');
      return;
    }
    //Just use key instead. it's much easier setlistOfCoffee([...listOfCoffee, { text:enteredName, key:Math.random().toString() }]);
    setlistOfCoffee([...listOfCoffee, {text:enteredName, id:Math.random().toString()} ]);
    //The id is put for example
    // setlistOfCoffee([])
    

  }

  return (
    <View style={styles.container}>
      <Goalinput  addListhandler={addListhandler} />
      <View style={styles.Listcontainer}>
        <Text>
          Your list of coffee are...
        </Text>

        <FlatList data={listOfCoffee} renderItem={
          (itemData) => <Goalitem coffee={itemData.item.text} />
        }
          keyExtractor={(item, index) => item.id}
        />
        {/* The keyExtractor is used to identify the unique key of the item use key in the data object instead, makes it easier  */}

      </View>
    </View>
  )

}

export default contact

const styles = StyleSheet.create({
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
  Listcontainer: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  }


})