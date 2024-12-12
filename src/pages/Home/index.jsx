import React, { useState, useEffect } from 'react';
import "./index.css";
import { Link } from 'react-router-dom';

function Home() {
      const [posts, setPosts] = useState([]);

      useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                  .then(response => response.json())
                  .then(data => setPosts(data.slice(0, 10)));
      }, []);

      return (
            <div>
                  <div>
                        <Link to='/'><button>Voltar</button>
                        </Link>
                  </div>
                  <div className='box1'>
                        <h1>Consumo de Api Title e Body</h1>
                        {posts.map(post => (
                              <div className='post' key={post.id}>
                                    <h2>{post.title}</h2>
                                    <p>{post.body}</p>
                              </div>
                        ))}
                  </div>
            </div>

      );
}

export default Home;
