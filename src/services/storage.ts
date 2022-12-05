import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_KEY = '@reactjsChallenge:username';

const REPO_KEY = '@reactjsChallenge:repos';

interface IRepo {
  id: number;
  name: string;
  full_name: string;
}

export const storeUserName = (userName: string) => {
  return new Promise<void>((resolve,reject) => {
    AsyncStorage.setItem(USER_KEY,userName)
      .then(() => resolve())
      .catch(error => reject(error));
  });
}

export const readUserName = () => {
  return new Promise<string>((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(user => resolve(user || ''))
      .catch(error => reject(error));
  });
}

export const removeUserName = () => {
  return new Promise<void>((resolve,reject) => {
    AsyncStorage.removeItem(USER_KEY)
      .then(() => resolve())
      .catch(error => reject(error));
  });
}

export const storeRepoList = (repos: IRepo[]) => {
  return new Promise<void>((resolve, reject) => {
    AsyncStorage.setItem(REPO_KEY, JSON.stringify(repos))
      .then(() => resolve())
      .catch(error => reject(error));
  });
}

export const readRepoList = () => {
  return new Promise<Array<IRepo>>((resolve, reject) => {
    AsyncStorage.getItem(REPO_KEY)
      .then(data => resolve(JSON.parse(data || '[]') as IRepo[]))
      .catch(error => reject(error));
  });
}

export const removeRepoList = () => {
  return new Promise<void>((resolve,reject) => {
    AsyncStorage.removeItem(REPO_KEY)
      .then(() => resolve())
      .catch(error => reject(error));
  });
}