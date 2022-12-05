import React, { useState, useCallback, useEffect } from 'react';
import { Alert } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import { storeUserName, readUserName } from '../../services/storage';

import { useAppDispatch } from '../../hooks';
import { setUser } from '../../userSlice';

import api from '../../services/api';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import ModalLoading from '../../Components/ModalLoading';

import { Container, LoginLabel } from './styles';

import ApiError from '../../errors/ApiError';

type RootDrawerParamList = {
  Login: undefined;
  Home: undefined;
  Favorites: undefined;
};

type LoginScreenNavigationProps = DrawerNavigationProp<RootDrawerParamList,'Login'>;

type LoginProps = {
  navigation: LoginScreenNavigationProps;
}

const Login = ({ navigation }: LoginProps) => {
  const [userName, setUserName] = useState('');
  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const dispatch = useAppDispatch();

  const handleLogin = useCallback(async () => {   

    try {
      setIsLoadingModal(true);

      const response = await api.get(`https://api.github.com/users/${userName}`);

      dispatch(setUser(response.data));

      await storeUserName(userName);

      setIsLoadingModal(false);

      navigation.navigate('Home');
    } catch (error) {
      setIsLoadingModal(false);
      const err = error as ApiError;

      if (err.statusCode === 404)
        return Alert.alert('Atenção', `Usuário não encontrado.`);  

      Alert.alert('Atenção', `Não foi possível buscar usuário.\n\n${err.message}`);
    }    
  }, [userName]);

  useEffect(() => {
    const getStoredUser = async () => {      
      const userName = await readUserName();
      
      if (!!userName) {
        setUserName(userName);        
      }
    };

    getStoredUser();
  },[]);

  return (
    <Container>
      <LoginLabel>Olá! Digite seu usuário do github para continuar:</LoginLabel>
      <Input 
        label='Usuário' 
        icon='user' 
        value={userName}
        onChangeText={newText => setUserName(newText)}
        clearButton 
      />
      <Button label='Continuar' icon='check' onPress={handleLogin}/>
      <ModalLoading
        isVisible={isLoadingModal}
        setIsVisible={setIsLoadingModal}
      />
    </Container>
  );
}

export default Login;