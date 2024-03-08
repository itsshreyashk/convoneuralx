export default function showError(message: string, set_error_message: any, duration : number) {
  set_error_message(message);
  document.querySelector('.Error_Popup_Container')?.classList.toggle('hidden');

  setTimeout(() => {
    document.querySelector('.Error_Popup_Container')?.classList.toggle('hidden');
  }, duration);
}