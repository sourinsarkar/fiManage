import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface dateType {
    date: Date
}

const initialState: dateType = {
    date: new Date()
}

export const dateSlice = createSlice({
    name: "date",
    initialState,
    reducers: {
        incrementDate: (state, action: PayloadAction<number>) => {
            const newDate = new Date(state.date);
            newDate.setDate(newDate.getDate() + action.payload);
            state.date = newDate;
        },
        decrementDate: (state, action: PayloadAction<number>) => {
            const newDate = new Date(state.date);
            newDate.setDate(newDate.getDate() - action.payload);
            state.date = newDate;
        },
    },
});

export const { incrementDate, decrementDate } = dateSlice.actions;
export default dateSlice.reducer;