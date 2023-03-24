import React, { useState } from 'react';

const Article = ({ post, user, posts, comments }) => {

    const [show, setShow] = useState( false );

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
        setShow(!show);
    }

    return (
            <React.Fragment>
                <button className="toggleBtnBlog" onClick={ToggleContent}>{ show ? 'Részletek elrejtése' : 'Részletek megjelenítése' }</button>
                { show &&
                    <div>
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
                }
            </React.Fragment>
    )

}

export default Article;
