import React, { useState, useEffect } from 'react';
import {Text,View,TextInput,StatusBar,TouchableOpacity,Image,ScrollView,Alert,} from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './Style/styles';
import Contacts from '../../Contacts.json';


export default function SearchScreen(props) {
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
 

  
  const PhoneBook = ()=>{
        setUsers(Contacts);    
  }
 
  
  return (
    <View style={{ flex: 1, paddingTop: 20 }} onLayout={PhoneBook}>
      <View style={styles.container}>
        <View style={styles.searchView}>
          <View style={styles.inputView}>
            <TextInput
              defaultValue={searchText}
              style={styles.input}
              placeholder='Search'
              textContentType='name'
              onChangeText=
              {(text) => {
                setSearchText(text);
                if (text === '') {
                  return setFilteredUsers([]);
                }
                const filtered_users = users.filter((user) =>
                  user.firstName.toLowerCase().startsWith(text.toLowerCase())
                );
                setFilteredUsers(filtered_users);
                
              }}
              returnKeyType='search'
            />
            {searchText.length === 0 ? (
              <TouchableOpacity>
                <Icon name='search' size={24} color='#333' />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setSearchText('');
                  setFilteredUsers([]);
                }}
              >
                <Icon name='cancel' size={24} color='#333' />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {filteredUsers.length > 0 ? (
          <ScrollView>
            {filteredUsers.map((user) => (
                
              <TouchableOpacity
              
                style={styles.userCard}
                onPress={() => {
                    
                    props.navigation.navigate('Contact',user);
                    
                }}>
                <Image
                  style={styles.userImage}
                  source={{ uri: user.picture }}
                />
                <View style={styles.userCardRight}>
                  <Text
                    style={{ fontSize: 18, fontWeight: '500' }}
                  >{`${user.firstName} ${user.lastName}`}</Text>
                  <Text>{`${user.title}`}</Text>
                </View>
              </TouchableOpacity>
            ))}
            
            <View style={{ height: 50 }}></View>
          </ScrollView>
        ) : searchText.length > 0 ? (
          <View style={styles.messageBox}>
            <Text style={styles.messageBoxText}>No user found</Text>
          </View>
        ) : (
          <ScrollView style={styles.searchScroll}>
            {users.map((user) => (
                
              <TouchableOpacity
                style={styles.userCard}
                onPress={() => {
                    props.navigation.navigate('Contact',user);
                }}>
                <Image
                  style={styles.userImage}
                  source={{ uri: user.picture }}
                />
                <View style={styles.userCardRight}>
                  <Text
                    style={{ fontSize: 18, fontWeight: '500' }}
                  >{`${user.firstName} ${user.lastName}`}</Text>
                  <Text>{`${user.title}`}</Text>
                </View>
              </TouchableOpacity>
            ))}
            
            <View style={{ height: 50 }}></View>
          </ScrollView>
        )}
      </View>
    </View>
  );
}



// useEffect(() => {
  //   StatusBar.setBarStyle('dark-content', false);
  //   axios.get('https://randomuser.me/api/?results=150').then(({ data }) => {
  //     setUsers(data.results);
  //     // console.log(Contacts);
  //   });
  // }, []);
  // setFirstName(user.firstName)


   // const [pic,setPic]=useState('');
  // const [firstName,setFirstName]=useState('');
  // const [lastName,setLastName]=useState('');
  // const [phoneNumber,setPhoneNumber]=useState('');
  // const [emailId,setEmailId]=useState('');
  // const [title,setTitle]=useState('');


  // setFirstName(user.firstName);
                    // setLastName(user.lastName);
                    // setPic(user.picture);
                    // setTitle(user.title);
                    // setEmailId(user.email);
                    // setPhoneNumber(user.mobilephone);

                     // console.log(users);
        // console.log(Contacts); 
  // props.navigation.navigate('Contact',{firstName:user.firstName,lastName,pic,title,phoneNumber,emailId});
  

   // <View style={styles.messageBox}>
          //   <Text style={styles.messageBoxText}>  Search for Contacts  </Text>
          // </View>