import { useEffect, useState } from "react";
import { supabase } from "./client";

function App() {

  const [ posts, setPosts ] = useState([]);
  const [ post, setPost ] = useState({ title: "", content: "" });

  const { title, content } = post;

  useEffect(() => {
    fetchPosts();
  }, []);

  async function createPost() {
    await supabase.from("Posts").insert([{ title, content }]).single();
    setPost({title: "", content: ""})
    fetchPosts();
  }

  async function fetchPosts() {
    const { data, error } = await supabase.from('Posts').select();
    console.log(error)
    setPost({title: "", content: ""});
    setPosts(data);
  }

  async function deletePost(id) {
    const { data, error } = await supabase
      .from('Posts')
      .delete()
      .match({ id }) 
  }

  return (
    <div className="bg-green-600 h-screen w-full">
      <h1 className="flex justify-center text-4xl skew-x-[-7deg] font-bold text-white">React with Supabase ❤️</h1>
      <div className="flex flex-col items-center gap-2 py-5">
        <input placeholder="Title" value={title} className="h-[40px] p-2 rounded-md" onChange={e => setPost({...post, title: e.target.value})} />
        <input placeholder="Content" value={content} className="h-[40px] p-2 rounded-md" onChange={e => setPost({...post, content: e.target.value})} />
        <button className="bg-green-700 px-8 py-2 rounded-lg text-white" onClick={createPost}>Submit</button>
      </div>
      <div className="flex flex-col items-center">
        <h1>All Posts :</h1>
        {posts?.map(post => (
          <div key={post.title} className="flex items-center">
            <div className="bg-pink-600 p-5 flex flex-col gap-1">
              <p className="bg-pink-700 p-2 text-white">{post.title}</p>
              <p className="bg-pink-700 p-2 text-white">{post.content}</p>
            </div>
            <div className="bg-pink-600 p-2 h-[124px] cursor-pointer flex items-center text-white" onClick={() => deletePost(post.id)}>X</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
