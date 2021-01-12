import { useEffect, useState } from 'react';
import { db } from '../firebase';

const useDB = () => {
  const [books, setBooks] = useState(null);
  useEffect(() => {
    db.collection('MyBooks')
      .get()
      .then((snapshot) => {
        const books = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          books.push(data);
        });
        setBooks(books);
      });
  }, []);

  return { books };
};
export default useDB;
