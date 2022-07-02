import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export const useFetchPositions = () => {
  const [positions, setPositions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const spidermanColRef = collection(db, 'spiderman');
    const phineasColRef = collection(db, 'phineas');
    const ashColRef = collection(db, 'ash');

    const loadPositions = async () => {
      setIsLoading(true);
      const snapshots = await Promise.all([
        getDocs(spidermanColRef),
        getDocs(phineasColRef),
        getDocs(ashColRef),
      ]);
      const fetchedPositions = [];
      snapshots.forEach((snapshot) => {
        snapshot.docs.forEach((doc) => {
          fetchedPositions.push({
            ...doc.data(),
          });
        });
      });
      setPositions(fetchedPositions);
      setIsLoading(false);
    };

    loadPositions();
  }, []);

  return {
    positions,
    isLoading,
  };
};
