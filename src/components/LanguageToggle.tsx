import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { RootState } from "@/store/store";
import { toggleLanguage } from "@/store/languageSlice";
import { Languages } from "lucide-react";

const LanguageToggle = memo(() => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => dispatch(toggleLanguage())}
      className="fixed top-4 right-16 z-50"
    >
      <Languages className="h-6 w-6" />
      <span className="sr-only">
        {currentLanguage === "en" ? "Switch to French" : "Switch to English"}
      </span>
    </Button>
  );
});

LanguageToggle.displayName = "LanguageToggle";
export default LanguageToggle;