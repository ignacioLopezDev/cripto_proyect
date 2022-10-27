import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  entities: [],
  loading: false,
}

const getPosts /* apiData */ = createAsyncThunk(
  'posts/getPosts',
  async (thunkAPI) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (data) => data.json()
  )
  return res
})


export const postSlice /* apiDataSlice */= createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.entities = payload
    },
    [getPosts.rejected]: (state) => {
      state.loading = false
    },
  },
})

export const postReducer = postSlice.reducer


---------------------------

import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../redux/features/posts/postThunk'

export default function Home() {
  const dispatch = useDispatch()
  const { entities, loading } = useSelector((state) => state.posts)

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <h2>Blog Posts</h2>
      {entities.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  )
}






