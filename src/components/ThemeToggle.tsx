import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/themeSlice";
import { RootState } from "@/store/store";
import { memo } from "react";

const ThemeToggle = memo(() => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => dispatch(toggleTheme())}
      className="fixed top-4 right-4 z-50"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6" />
      ) : (
        <Moon className="h-6 w-6" />
      )}
    </Button>
  );
});

ThemeToggle.displayName = "ThemeToggle";
export default ThemeToggle;