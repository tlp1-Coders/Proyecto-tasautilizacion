import React from 'react'

export const FormConsult = ( {handleSubmit}) => {
    return (
        <form
            onSubmit={handleSubmit}
            action=""
            id="form"
            className="d-flex flex-column justify-content-center align-items-center border rounded p-5 shadow bg-body-tertiary"
        >
            <div className="mb-3">
                <label htmlFor="valor" className="form-label">
                    Patente o DNI
                </label>
                <input
                    type="text"
                    className="form-control rounded-4"
                    name="valor"
                    id="valor"
                    {...register("valor")}
                />
            </div>
            <div className=''>
                <button type="submit" className="btn btn-primary rounded-5 px-5">
                    Consultar
                </button>
            </div>
        </form>
    )
}
