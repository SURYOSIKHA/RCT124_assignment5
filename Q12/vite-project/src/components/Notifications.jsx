// import { toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// toast.configure();

// export const notify = (task) => {
//   toast(`Reminder: ${task.title} is due soon!`, {
//     position: toast.POSITION.TOP_RIGHT,
//     autoClose: 5000,
//   });
// };

// export const scheduleNotification = (task) => {
//   const reminderTime = task.reminder || 5;
//   const delay = new Date(task.dueDate) - Date.now() - reminderTime * 60000;
//   if (delay > 0) {
//     setTimeout(() => notify(task), delay);
//   }
// };
