import Swal, { SweetAlertResult } from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export const successAlert = (message: string): Promise<SweetAlertResult> => {
  return Swal.fire({
    title: 'Yeeii!!',
    text: message,
    icon: 'success'
  });
}

export const errorAlert = (message: string): Promise<SweetAlertResult> => {
  return Swal.fire({
    title: 'Ohh no!!',
    text: message,
    icon: 'error'
  });
}

export const successToast = (message: string): Promise<SweetAlertResult> => {
  return Toast.fire({
    icon: 'success',
    title: message
  })
}
