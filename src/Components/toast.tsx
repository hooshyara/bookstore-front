import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toast = () => {
  const notify = () => toast.success('انجام شد!');

  return (
    <>
      <button onClick={notify}>نمایش Toast</button>
      <ToastContainer />
    </>
  );
}