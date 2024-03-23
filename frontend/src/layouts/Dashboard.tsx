import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon, ChevronDownIcon} from "@heroicons/react/24/solid";
import CalendarUI from "../components/CalendarUI";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const App: React.FC = () => {
  const date = useSelector((state: RootState) => state.date.date);

  return(
    <div className="max-w-screen-xl mx-auto">
      <div className="mx-10">
        <div>
            <h1 className="text-center font-bold text-7xl tracking-tight leading-tight">Track. Save. Thrive.</h1>
        </div>

        <div className="my-12">
          <div className="flex items-center max-w-2xl min-h-20 m-auto rounded-3xl shadow-sh_Light">
              
                <form className="flex justify-between items-center w-full mx-6">
                  <div className="pl-0 pr-4 flex items-center justify-center">
                    <ChevronDownIcon className="h-6 w-6" />
                    <p>{date.toString()}</p>
                    <ChevronUpIcon className="h-6 w-6" />
                  </div>

                  <div>
                    <input type="text" className="max-w-16 text-center border border-1 border-slate-600"/>
                  </div>

                  <div className="w-full">
                    <input className="outline-none flex items-center w-full text-xl font-medium tracking-tight placeholder:text-[#888888]" placeholder="Record your expenses here" />
                  </div>
              
                  <div className="flex items-center justify-end">
                      <button className="p-4"><PlusCircleIcon className="h-6 w-6" /> </button>
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