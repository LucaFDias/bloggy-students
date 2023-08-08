import { Input } from "@/components/ui/input";
interface InputSearchProps {
  placeholder?: string;
  type: string;
  icon?: any;
};

const InputSearch: React.FC<InputSearchProps> = ({
  placeholder,
  type,
  icon: Icon
}) => {
  return (
    <div className="w-full sm:w-[200px] relative border rounded">
        <Input
          type={type}
          className="
            border-none 
            pl-2 
            pr-8 
            mr-1 
            w-full 
            placeholder:text-gray-500
            focus"
          placeholder={placeholder}
        />
        <Icon 
          size={20}
          className="absolute top-[50%] right-0 translate-y-[-50%] text-gray-500 mr-1"/>
      </div>
  );
};

export default InputSearch;