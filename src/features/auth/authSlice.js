import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../apis/commonApi"

export const fetchLogin = createAsyncThunk("auth/fetchLogin",
async(params)=>{
  const response = await authApi.post('/login',{params})
  return response.data
}
)

export const fetchSignup = createAsyncThunk("auth/fetchSignup",
async(params)=>{
  const response = await authApi.post('/register',{params})
  return response.data
}
)

// it is working on postman not in code 
export const fetchEdit = createAsyncThunk("auth/fetchEdit",
async(name,email,phone,token)=>{
    console.log(name,email,phone)
  const response = await authApi.post(`/edit-profile?name=${name}&phone=${phone}&email=${email}`,{ headers: {"Content-Type": 'application/x-www-form-urlencoded',"Authorization" : `Bearer ${token}`} })
  console.log(response)
  return response.data
}
)

const initialState = {
    userData: {},
    token: null,
    error: null
  };



const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchLogin.fulfilled]:(state,{payload})=>{
            return{
                ...state,
                userData: payload.result.userdata,
                token: payload.result.token
            }
        },
        [fetchSignup.fulfilled]:(state,{payload})=>{
            return{
                ...state,
                userData: payload.result.userData,
                token: payload.result.token
            }
        },
        [fetchSignup.rejected]:(state,{payload})=>{
            return{
                ...state,
                error: payload.error
            }
        },
        [fetchEdit.fulfilled]:(state,{payload})=>{
           console.log(payload)
        }
    }
})

export const userInfo = (state) => state.auth.userData
export const userToken = (state) => state.auth.token
export default authSlice.reducer