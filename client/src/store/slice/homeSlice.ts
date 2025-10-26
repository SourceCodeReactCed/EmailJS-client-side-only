import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

//interface here
interface homeState {
    email: string;
    message: string;
}

const initialState : homeState = {
    email: '',
    message: '',
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        
        setMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        }
    }
});

export const submitSlice = async (email: string, message: string, dispatch: any) => {
    // EmailJS Function Start
    try {
        const res = await emailjs.send(
        'service_kfhm5bo',
        'template_rp17jre',
        {
            to_email: email,
            message: message,
            name: 'Sample Name',
        },
        'eO_F8LZfnTStUfMgO'
    );
    console.log(res);
    Swal.fire('Success', 'Email sent!', 'success');
  } catch (err) {
    console.error(err);
    Swal.fire('Error', 'Failed to send email.', 'error');
  }
 // EmailJS Function End  
}

export const {setEmail, setMessage} = homeSlice.actions;

export default homeSlice.reducer;