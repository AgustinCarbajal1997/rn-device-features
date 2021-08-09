import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('users.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY NOT NULL,
            name TEXT NOT NULL,
            surname TEXT NOT NULL,
            image TEXT NOT NULL
          )`,
          [],
          () => { resolve() },
          (_, err) => { reject(err) },
        )
      });
    });
  
    return promise;
  }


export const insertUser = (
    id,
    name,
    surname,
    image
  ) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `INSERT INTO users (id,name, surname, image) VALUES (?, ?, ?, ?)`,
          [id, name, surname, image],
          (_, result) => resolve(result),
          (_, err) => reject(err),
        );
      });
    });
  
    return promise;
  }



  export const fetchUser = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM users;',
          [],
          (_, result) => resolve(result),
          (_, err) => reject(err),
        );
      });
    });
  
    return promise;
  }