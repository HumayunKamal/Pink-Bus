import { useEffect } from "react";
import { useAppContext } from "~/context/AppContext";
import Dialog from "./dialog";

const ErrorModal = () => {
  const { globalState, handleChange } = useAppContext();

  // Clear error after 2 seconds
  useEffect(() => {
    if (!globalState.error) return;
    const timeoutId = setTimeout(() => {
      handleChange({ name: "error", value: "" });
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [globalState.error]);

  // Don't render if there's no error
  if (!globalState.error) return null;

  return (
    <Dialog
      content={globalState.error}
      className="fixed top-1/2 left-1/2 z-50 w-fit -translate-x-1/2 -translate-y-1/2"
    />
  );
};

export default ErrorModal;
