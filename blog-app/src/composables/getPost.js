import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function getPost(id) {
  const postRef = doc(db, "posts", id);  // Reference to the post document by ID
  const postSnap = await getDoc(postRef);

  if (postSnap.exists()) {
    return { id: postSnap.id, ...postSnap.data() };
  } else {
    throw new Error(`Post with ID ${id} not found`);
  }
}