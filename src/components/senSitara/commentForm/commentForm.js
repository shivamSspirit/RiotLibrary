import React from 'reacat'
import { useState } from 'react'
import '/commentform.css'
import CommentCard from '../commentCard/commentCard';


function CommentForm() {

    const [comment, setComment] = useState({
        title: '',
        description: ''
    });

    const [comments, setCommnents] = useState([])


    const handleComments = async (e) => {
        const names = e.target.name;
        if (names === 'title') {
            setComment({
                ...comment, title: e.target.value
            })
        } else if (names === 'description') {
            setComment({
                ...comment, description: e.target.value
            })
        }
    }


    const addCommment = async (e) => {
        e.preventDefault();
        const comment = { ...comment };
        setCommnents(...comments, comment);
    }


    const clearForm=()=>{
        setComment({
            title: '',
            description: ''
        })
    }


    return (
        <div className='comment-section'>

        <div className='comment-form-container'>
            <form className='comment-form' onSubmit={addCommment}>
                <div className='c-form-parts'>
                    <label htmlFor='title' className='c-title'>Notes</label>
                    <input className='c-title-input' name='title' value={comment?.title} onChange={handleComments} type='text' placeholder='title...' />
                </div>
                <div className='c-form-parts' >
                    <textarea name='description' className='c-des-area' onChange={handleComments} value={comment?.description} placeholder='description' />
                </div>
                <div className='c-form-parts'>
                    <button type='submit' className='save'>Save</button>
                    <button onClick={clearForm} className='clear'>Clear</button>
                </div>
            </form>
        </div>



        <div className='comment-container'>
            {comments&&comments?.map((item,idx)=>(
                <CommentCard key={idx} comment={item}/>
            ))}
        </div>


        </div>
    )
}

export default CommentForm
