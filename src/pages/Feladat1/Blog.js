import React, { useEffect, useState } from "react";
import Article from "./Article";

export default function Blog() {

    // létrehozott szükséges state-ek
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);
    const [goToTop, setGoToTop] = useState( false );

    // ajax segítségével lekért adatok
    useEffect( () => {
        Promise.all([
            fetch("https://jsonplaceholder.typicode.com/posts"),
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch("https://jsonplaceholder.typicode.com/comments"),
        ])
            .then( async res => {
                const posts = await res[0].json();
                const users = await res[1].json();
                const comments = await res[2].json();

                return { posts: posts, users: users, comments: comments }
            })
            .then( data => {
                setPosts( data.posts );
                setUsers( data.users );
                setComments( data.comments );
            })
    }, [] )

    // posts és users api összekötése id alapján
    const getUsersById = (postId, users) => {
        const userIndex = users.findIndex( u => u.id === postId);
        return users[userIndex];
    }

    // fel gomb megjelenése
    useEffect( () => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 200) {
                setGoToTop(true);
            }
            else {
                setGoToTop(false);
            }
        })
    }, [])

    return (
        <div className="container">
            <h1 className="sub-h1">Blog oldal tartalma</h1>
            <div className="blog">
                {
                    posts.map( (post, index) => {
                        const postId = post.userId;
                        const user = getUsersById(postId, users);

                        return <React.Fragment key={index}>
                                    <div>
                                        <h2>{post.id}. {post.title}</h2>
                                        <p>{user.name}</p>
                                        <Article post={post} user={user} posts={posts} comments={comments} />
                                    </div>
                                    <hr className="bloghr" />
                                </React.Fragment>
                    })
                }
            </div>
            
            {
                goToTop && (
                    <a href="#root" className="upbtn" ><span className="gototop">^</span></a>
                )
            }
            
        </div>
    );
};