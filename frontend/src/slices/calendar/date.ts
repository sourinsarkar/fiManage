import { createSlice } from "@reduxjs/toolkit"

interface dateType {
    date: Date
}

const initialState: dateType = {
    date: new Date()
}

export const date = createSlice({
    name: "date",
    initialState,
    reducers: {
        incrementDate: (state) => {
            const newDate = new Date(state.date);
            newDate.setDate(newDate.getDate() + 1);
            state.date = newDate;
        },
        decrementDate: (state) => {
            const newDate = new Date(state.date);
            newDate.setDate(newDate.getDate() - 1);
            state.date = newDate;
        },
    },
});

export const { incrementDate, decrementDate } = date.actions;
export default date.reducer;