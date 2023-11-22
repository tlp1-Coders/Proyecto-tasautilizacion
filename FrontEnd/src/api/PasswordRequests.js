export const sendPasswordResetRequest = async (valor) => {
    const response = await fetch(
        `${import.meta.env.VITE_BACK_URL}/api/auth/forgotPassword`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(valor),
        }
      );
      const data = await response.json();
      if (response.status !== 200) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        return data;
      }
}

export const resetPassword = async (valor, token) => {
    const response = await fetch(
        `http://localhost:4000/api/auth/resetPassword`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token,
          },
          body: JSON.stringify(valor),
        }
      );
      const data = await response.json();
      if (response.status !== 200) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        return data;
      }
};
