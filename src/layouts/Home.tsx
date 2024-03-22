// import CalendarUI from "../components/CalendarUI";
import Navbar from "../components/Navbar";

const App: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="mx-10">
        <Navbar />
        <div>
            <h1 className="text-center font-semibold text-5xl tracking-tight text-primaryFontColor">Reimagine the way you track expenses</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
