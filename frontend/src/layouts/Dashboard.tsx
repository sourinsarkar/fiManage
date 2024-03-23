import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon, ChevronDownIcon} from "@heroicons/react/24/solid";
import CalendarUI from "../components/CalendarUI";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { incrementDate, decrementDate } from "../slices/calendar/date";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const App: React.FC = () => {
  const date = useSelector((state: RootState) => state.date.date);
  const dispatch = useDispatch();

  const handleIncrementDate = () => {
    dispatch(incrementDate(1));  
  }
  
  const handleDecrementDate = () => {
    dispatch(decrementDate(1));  
  }
  const navigate = useNavigate();
  const [expenseNote, setExpenseNote] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    if (!expenseNote) {
      console.error('Expense note is required');
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/expenseData", {
        expenseDate: date,
        expenseAmount,
        expenseNote,
      },{
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      if(response.status !== 201) {
        throw new Error("Error saving the expense data.");
      }

      console.log(response.data);
    } catch (error: any) {
      if (error.response) {
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
      } else if (error.request) {
        console.error(error.request);
      } else {
        console.error('Error', error.message);
      }
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return(
    <div className="max-w-screen-xl mx-auto">
      <div className="mx-10">
        <div>
            <h1 className="text-center font-bold text-7xl tracking-tight leading-tight">Track. Save. Thrive.</h1>
        </div>

        <button onClick={handleLogout}>Logout</button>

        <div className="my-12">
          <div className="flex items-center max-w-2xl min-h-20 m-auto rounded-3xl shadow-sh_Light">
              
                <form onSubmit={handleSubmit} className="flex justify-between items-center w-full mx-6">
                  <div className="pl-0 pr-4 flex items-center justify-center">
                    <ChevronDownIcon className="h-6 w-6" onClick={handleDecrementDate} />
                    <input type="text"
                            readOnly
                            value={`${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`} 
                            className="max-w-16 text-center"
                    />
                    <ChevronUpIcon className="h-6 w-6" onClick={handleIncrementDate}/>
                  </div>

                  <div>
                    <input type="number"
                            value={expenseAmount}
                            onChange={(event) => setExpenseAmount(event.target.value)} 
                            placeholder=""
                            className="max-w-16 text-center border border-1 border-slate-600"/>
                  </div>

                  <div className="w-full">
                    <input type="text"
                            value={expenseNote}
                            onChange={(event) => setExpenseNote(event.target.value)}
                            placeholder="Record your expenses here"
                            className="outline-none flex items-center w-full text-xl font-medium tracking-tight placeholder:text-[#888888]" />
                  </div>
              
                  <div className="flex items-center justify-end">
                      <button type="submit" className="p-4"><PlusCircleIcon className="h-6 w-6" /> </button>
                  </div>
                </form>
          </div>
        </div>

        <div>
          <CalendarUI />
        </div>
      </div>
    </div>
  );
}

export default App;