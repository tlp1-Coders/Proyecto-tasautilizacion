import React from 'react'

export const HomePage = () => {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-12">
            <h1>Bienvenido</h1>
          </div>
          <div className="col-12 row">
            <main className='col-7'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio facilis, quibusdam quas excepturi minus dolorum. Nihil facere repudiandae assumenda ipsum magni sint molestias dignissimos unde consequatur, impedit officia voluptas qui.</p>
            </main>
            <aside className='col-5'>
                <img className='img-fluid rounded' src="../../public/pagatuscuentas.png" alt="paga tus cuentas" />
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
