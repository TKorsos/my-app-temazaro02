import React, { useEffect, useState } from "react";

export default function Blog() {

    // létrehozott szükséges state-ek
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);
    const [contentToggle, setContentToggle] = useState( true );
    const [displayText, setDisplayText] = useState( 'block' );

    const [mainclick, setMainclick] = useState( "" );
    const [subclick, setSubclick] = useState( "" );

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

    // posts és comments api összekötése id alapján
    const getCommentsByPostId = (postId, comments) => {
        return comments.filter( c => c.postId === postId);
    }

    // users-hez tartozó posts-ok száma
    const getPostsByCountUserId = (userId, posts) => {
        return posts.filter( p => p.userId === userId).length;
    }

    // kattintásra megváltoztatja a contentToggle state értékét
    const ToggleContent = () => {
        setContentToggle(!contentToggle);
    }

    // contentToggle változás hatására ellenőrzi a displayText értékét és a megfelelő új értéket helyezi el benne
    useEffect( () => {
        { displayText === "block" ? setDisplayText("none") : setDisplayText("block") }
    }, [contentToggle] )

    return (
        <div className="container">
            <h1>Blog oldal tartalma</h1>
            <div className="blog">
                {
                    posts.map( (post, index) => {
                        const postId = post.userId;
                        const user = getUsersById(postId, users);

                        return <React.Fragment key={index}>
                                    {/*event.target -  data={ post.id } ??? state-tel megadva? */}
                                    <div onClick={ToggleContent} >
                                        <h2>{post.id}. {post.title}</h2>
                                        <p>{user.name}</p>

                                        {/* data={ post.id } ??? */}
                                        <div style={ { display: displayText } }>
                                            <div className="posts-body">
                                                <h3>Post adatai</h3>
                                                <li>User ID: {post.userId}</li>
                                                <li>ID: {post.id}</li>
                                                <li>Title: {post.title}</li>
                                                <li>Body: {post.body}</li>
                                                <hr/>
                                            </div>

                                            <div className="users-body">
                                                <h3>User adatai</h3>
                                                <li>User ID: {user.id}</li>
                                                <li>User name: {user.name}</li>
                                                <li>Postok száma: { getPostsByCountUserId(user.id, posts) }</li>
                                                <li>Username: {user.username}</li>
                                                <li>User e-mail: {user.email}</li>
                                                <li>User address1: {user.address.street} {user.address.suite}</li>
                                                <li>User address2: {user.address.city} {user.address.zipcode}</li>
                                                <li>User geo: {user.address.geo.lat} {user.address.geo.lng}</li>
                                                <li>User phonenumber: {user.phone}</li>
                                                <li>User website: {user.website}</li>
                                                <li>User company: {user.company.name} | {user.company.catchPhrase} | {user.company.bs}</li>
                                                <hr/>
                                            </div>

                                            <div className="comments-body">
                                                <h3>Comments</h3>
                                                {
                                                    getCommentsByPostId(post.id, comments).map( (comment, index) => {
                                                        return <React.Fragment key={index}>
                                                                    <li>{comment.body}</li>
                                                                </React.Fragment>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                </React.Fragment>
                    })
                }
            </div>
        </div>
    );
};