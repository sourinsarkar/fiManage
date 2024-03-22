import SourinIcon from "/images/sourin-icon.svg"
import Button from "../utils/Button"
import { Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="my-6 leading-none">
        <div className="flex justify-between items-center">
            <div>
                <div><img src={SourinIcon} alt="Sourin Logo" className="h-8" /></div>
            </div>
            <Link to="/signin">
              <Button buttonText="Sign In"/>
            </Link>
        </div>
    </div>
  );
}

export default App;