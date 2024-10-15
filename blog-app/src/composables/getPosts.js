import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Adjust the path if needed

export async function getPosts() {
  const postsCollection = collection(db, "posts");  // Points to your "posts" collection
  const postsSnapshot = await getDocs(postsCollection);
  const postsList = postsSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return postsList;
}