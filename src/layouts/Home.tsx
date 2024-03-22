// import CalendarUI from "../components/CalendarUI
import Navbar from "../components/Navbar";
import { PaperAirplaneIcon, SparklesIcon } from "@heroicons/react/24/solid";

const App: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="mx-10">
        <Navbar />

        <div>
            <h1 className="text-center font-bold text-7xl tracking-tight leading-tight">Reimagine the way you<br />track expenses</h1>
        </div>
        <div className="my-12">
            <div className="flex items-center max-w-2xl min-h-20 m-auto rounded-3xl shadow-sh_Light">
                <div className="flex justify-between items-center w-full mx-6">
                    <div>
                    <div className="pl-0 pr-4"><SparklesIcon className="h-6 w-6" /></div>
                    </div>
                    <div className="w-full">
                        <p className="flex items-center text-xl font-medium tracking-tight text-primeTextColor">Record your expenses here</p>
                    </div>
                    <div className="flex items-center justify-end">
                        <div className="p-4"><PaperAirplaneIcon className="h-6 w-6" /> </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="mx-auto text-center flex items-center justify-center px-5 py-3 bg-[#131314] text-[#ffffff] rounded-xl shadow-shdw-1 leading-none">Create an account</div>
        </div>
      </div>
    </div>
  );
};

export default App;
