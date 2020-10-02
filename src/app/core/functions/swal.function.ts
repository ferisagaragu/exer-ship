import Swal from 'sweetalert2';

export const successAlert = (message) => {
  return Swal.fire({
    title: 'Yeeii!!',
    text: message,
    icon: 'success'
  });
}

export const errorAlert = (message) => {
  return Swal.fire({
    title: 'Ohh no!!',
    text: message,
    icon: 'error'
  });
}
