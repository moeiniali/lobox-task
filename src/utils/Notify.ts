import toast from "react-hot-toast";

//notification for success and error events-------------------------------- 
export const notifyError = (messageNotify: string | undefined | null) => {
 toast.error(messageNotify || '', {
  position: "top-right",
  duration: 5000,

  style: {
   fontSize: '14px',
   fontWeight: 500
  }
 });
};
export const notifySuccess = (messageNotify: string | undefined | null) => {
 toast.success(messageNotify || '', {
  position: "top-right",
  duration: 5000,
  style: {
   fontSize: '14px',
   fontWeight: 500
  }
 });
};