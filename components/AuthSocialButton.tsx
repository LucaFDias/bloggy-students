import { Button } from "./ui/button";

interface AuthSocialButtonProps {
  icon?: any;
  onClick: () => void;
};

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick
}) => {
  return (
    <Button
      onClick={onClick}
      className="
        inline-flex
        w-full
        justify-center
        rounded-md
        px-4 py-2
        shadow-sm
        ring-1
        ring-inset
        ring-gray-300
        focus:outline-offset-0
      "
    >
      <Icon size={20}/>
    </Button>
  );
};

export default AuthSocialButton;