import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { RootState } from "@/store/store";
import { toggleLanguage } from "@/store/languageSlice";
import { translations } from "@/data/translations";

const LanguageToggle = memo(() => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );

  return (
    <div className="fixed top-4 right-16 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-full p-1 flex gap-1 border border-primary/20">
      <Button
        variant={currentLanguage === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => currentLanguage !== "en" && dispatch(toggleLanguage())}
        className={`rounded-full px-3 ${currentLanguage === "en" ? "hover:bg-primary/90" : "hover:bg-accent"}`}
      >
        EN
      </Button>
      <Button
        variant={currentLanguage === "fr" ? "default" : "ghost"}
        size="sm"
        onClick={() => currentLanguage !== "fr" && dispatch(toggleLanguage())}
        className={`rounded-full px-3 ${currentLanguage === "fr" ? "hover:bg-primary/90" : "hover:bg-accent"}`}
      >
        FR
      </Button>
    </div>
  );
});

LanguageToggle.displayName = "LanguageToggle";
export default LanguageToggle;