import { Button } from "./ui/button"


const MainNav = () => {
    return(
        <Button 
            variant="ghost" 
            className="font-bold hover:text-dailyPrimary hover:bg-white text-CustomGrey"
        >
          Conectar conta
        </Button>
    );
};

export default MainNav;