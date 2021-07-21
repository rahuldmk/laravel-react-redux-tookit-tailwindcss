import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//import { RootState } from '../../store/store';

export interface CouterState {
    value: number
}

const initialState: CouterState = {
    value: 0
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})


export const { increment, decrement, incrementByAmount } = userSlice.actions;
//export const selectCount = (state:RootState) => state.user.value;
export default userSlice.reducer;