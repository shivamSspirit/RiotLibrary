import { useCallback } from "react";
import { toast } from "react-toastify";

export const useToast = () => {
  const showToast = useCallback((type, message) => {
    console.log('type',type)
    toast[type](message, {
      position: "top-right",
      autoClose:2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    
    });
  }, []);

  return { showToast };
};