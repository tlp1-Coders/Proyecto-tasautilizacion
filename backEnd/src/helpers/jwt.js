import jwt from 'jsonwebtoken'

export const createJWT = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.SECRET_KEY,{ expiresIn: '5h'}, (err, token) => {
      if (err) {
        reject('Error al firmar el token')
        console.log(err);
      }

      resolve({ token })
    })
  })
};

export const verifyJWT = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
      if (err) {
        reject(err)
        console.log(err);
      }
      resolve (payload)
    });

})}