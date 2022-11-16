const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')
const { default: axios } = require('axios')

const initialState = {
  userList: [],
  userToken: '',
  isAuth: false
}
export const fetchAllUserData = createAsyncThunk('uesrs/FetchAllUser', async () => {
  const response = await axios.get('http://localhost:5000/user/get-user')
  return await response.data
})
export const addUserData = createAsyncThunk('users/addUserData', async (data) => {
  const response = await axios.post('http://localhost:5000/user/new-user', data)
  return await response.data
})
export const updateUserData = createAsyncThunk(
  'users/updateUserData',
  async ({userId, UserUpdatedData}) => {
    console.log('data>>>>', UserUpdatedData)
    const response = await axios.post(
      `http://localhost:5000/user/edit-user/${userId}`,
      UserUpdatedData,
    )
    console.log('response data', response.data)
    return await response.data
  },
)
export const deleteUserData = createAsyncThunk('users/deleteUserData', async(userId) => {
  await axios.delete(`http://localhost:5000/user/delete-user/${userId}` )
})
export const userSignIn = createAsyncThunk('users/userSignIn',async(data) => {
  const response = await axios.post('http://localhost:5000/user-auth/sign-in', data)
  return response.data
})


const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    getUserToken : (state) => {
      return state.userToken
    }, 
    userLogOut: (state) => {
      state.userToken = ''
      localStorage.removeItem('token')
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllUserData.fulfilled, (state, action) => {
      state.userList = action.payload
    })
    builder.addCase(userSignIn.fulfilled, (state, action) => {
      console.log('action/payload>>>>>',action.payload)
      state.userToken = action.payload.token
      localStorage.setItem('token', action.payload.token)
      state.isAuth = !state.isAuth
    })
  },
})

export const userDataReducer = userSlice.reducer
export const userDataAction = userSlice.actions
