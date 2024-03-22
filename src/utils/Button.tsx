interface buttonType {
  buttonText: string;
}

const Button: React.FC<buttonType> = ({buttonText}) => {
  return(
    <div className="flex items-center justify-center px-5 py-3 bg-[#131314] text-[#ffffff] rounded-xl shadow-shdw-1 leading-none">
        {buttonText}
    </div>
  );
}

export default Button;