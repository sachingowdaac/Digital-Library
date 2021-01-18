import { useEffect, useState } from 'react';
import { db } from '../firebase';

const useDB = () => {
  const [books, setBooks] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection('MyBooks').get();
      setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchData();
  });

  return { books };
};
export default useDB;
