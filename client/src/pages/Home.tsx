import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import type {RootState} from '../store/store';
import {setEmail, setMessage, submitSlice} from '../store/slice/homeSlice';
import Swal from 'sweetalert2';

function Home () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const email = useSelector((state: RootState) => state.home.email);
    const message = useSelector((state: RootState) => state.home.message);

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();

        submitSlice(email, message, dispatch);
    }

    return(
        <>
        <br />

        <div style={{display:'flex', justifyContent:'center'}}>
            <div style={{width:300}}>
                <form onSubmit={submit}>
                    <input type="email" placeholder='Enter a email' value={email} onChange={(e) => dispatch(setEmail(e.target.value))} className='form-control'/>
                    <br />
                    <input type="text" placeholder='Enter a message' value={message} onChange={(e) => dispatch(setMessage(e.target.value))} className='form-control'/>
                    <br />
                    <button className='btn btn-primary w-100'>Submit</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default Home;