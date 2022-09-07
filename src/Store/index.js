import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from 'src/firebase/firebase'

const { configureStore, createSlice } = require('@reduxjs/toolkit')
const initialUserDataState = { token: '', isLoggedIn: false }
const initialOperationState = { data: [] }
const userDataSlice = createSlice({
  name: 'userData',
  initialState: initialUserDataState,
  reducers: {
    loginHandler(state, action) {
      state.token = action.payload
      state.isLoggedIn = !state.isLoggedIn
    },
  },
})

const operationSlice = createSlice({
  name: 'operation',
  initialState: initialOperationState,
  reducers: {
    deletehandler(id) {
      deleteDoc(doc(db, 'userData', id))
    },

    fetchUserData(state) {
      console.log('Fetch data ')
      try {
        const q = query(collection(db, 'userData'), orderBy('time', 'desc'))
        const getdata = async () => {
          await onSnapshot(q, (querySnapshot) => {
            state.data.push(
              querySnapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              })),
            )
          })
        }
        getdata()
      } catch (error) {
        console.log(error)
      }
    },

    addUser(state, action) {
      const newItem = action.payload
      const tablename = collection(db, 'userData')
      addDoc(tablename, {
        username: newItem.username,
        email: newItem.email,
        age: newItem.age,
        dob: newItem.dob,
        gender: newItem.gender,
        role: newItem.role,
        time: Date().toLocaleString(),
      })
    },
  },
})
export const userAction = userDataSlice.actions
export const operationAction = operationSlice.actions

export const reduxStore = configureStore({
  reducer: { userData: userDataSlice.reducer, operation: operationSlice.reducer },
})
