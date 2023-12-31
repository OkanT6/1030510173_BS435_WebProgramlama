import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  const [name,setName]=useState("Okan")

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => (blog.id !== id))
    setBlogs(newBlogs);

  }


  useEffect(() => {
    console.log("useEffect() ran")
    console.log(name)
  },[name])

  return (
    <div className="Home">

      <BlogList blogs={blogs} handleDelete={handleDelete} title="All Blogs!"></BlogList>
      <BlogList blogs={blogs.filter((blog) => (blog.author === "mario"))} title="Mario's Blogs" handleDelete={handleDelete}></BlogList>
      <h2>{name}</h2>
      <button onClick={()=>setName("Berke")}>Change name</button>
      <button onClick={()=> setName("Okan")}>change again</button>

    </div>

  );

  /* 
  return (
 <div className="home">
   {blogs.map(blog => (
     <div className="blog-preview" key={blog.id} >
       <h2>{ blog.title }</h2>
       <p>Written by { blog.author }</p>
     </div>
   }))
 </div>
);
  */
}

export default Home;