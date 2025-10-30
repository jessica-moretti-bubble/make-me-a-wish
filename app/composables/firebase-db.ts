import { collection, getDocs, addDoc } from "firebase/firestore";

export async function getCollectionData<T = Record<string, any>>(
  collectionName: string
): Promise<(T & { id: string })[]> {
  const colRef = collection(db, collectionName);
  const snapshot = await getDocs(colRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as (T & { id: string })[];
}

export async function addDocument<T>(collectionName: string, data: T) {
  try {
    const colRef = collection(db, collectionName);
    const docRef = await addDoc(colRef, data);
    console.log("✅ Documento aggiunto con ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("❌ Errore durante l'inserimento del documento:", error);
    return null;
  }
}
