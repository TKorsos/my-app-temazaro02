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
                { show &&
                    <div>
                        <div className="posts-body">
                            <h3>Post adatai</h3>
                            <li><span className='postuserdata'>User ID:</span> {post.userId}</li>
                            <li><span className='postuserdata'>ID:</span> {post.id}</li>
                            <li><span className='postuserdata'>Title:</span> {post.title}</li>
                            <li><span className='postuserdata'>Body:</span> {post.body}</li>
                            <hr className='articlehr' />
                        </div>
                        <div className="users-body">
                            <h3>User adatai</h3>
                            <li><span className='postuserdata'>User ID:</span> {user.id}</li>
                            <li><span className='postuserdata'>User name:</span> {user.name}</li>
                            <li><span className='postuserdata'>Postok száma:</span> { getPostsByCountUserId(user.id, posts) }</li>
                            <li><span className='postuserdata'>Username:</span> {user.username}</li>
                            <li><span className='postuserdata'>User e-mail:</span> {user.email}</li>
                            <li><span className='postuserdata'>User address1:</span> {user.address.street} {user.address.suite}</li>
                            <li><span className='postuserdata'>User address2:</span> {user.address.city} {user.address.zipcode}</li>
                            <li><span className='postuserdata'>User geo:</span> {user.address.geo.lat} {user.address.geo.lng}</li>
                            <li><span className='postuserdata'>User phonenumber:</span> {user.phone}</li>
                            <li><span className='postuserdata'>User website:</span> {user.website}</li>
                            <li><span className='postuserdata'>User company:</span> {user.company.name} | {user.company.catchPhrase} | {user.company.bs}</li>
                            <hr className='articlehr' />
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

                <button className="toggleBtnBlog" onClick={ToggleContent}>{ show ? 'Részletek elrejtése' : 'Részletek megjelenítése' }</button>
            </React.Fragment>
    )

}

export default Article;
