import { SparklesIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";

const App: React.FC = () => {
  
  return(
    <div className="max-w-screen-xl mx-auto">
      <div className="mx-10">
        <div>
            <h1 className="text-center font-bold text-7xl tracking-tight leading-tight">Track. Save. Thrive.</h1>
        </div>
        <div className="my-12">
            <div className="flex items-center max-w-2xl min-h-20 m-auto rounded-3xl shadow-sh_Light">
                <div className="flex justify-between items-center w-full mx-6">
                    <div>
                    <div className="pl-0 pr-4"><SparklesIcon className="h-6 w-6" /></div>
                    </div>
                    <div className="w-full">
                      <input className="outline-none flex items-center w-full text-xl font-medium tracking-tight placeholder:text-[#888888]" placeholder="Record your expenses here" />
                    </div>
                    <div className="flex items-center justify-end">
                        <div className="p-4"><PaperAirplaneIcon className="h-6 w-6" /> </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;