import React from 'react'

export const FormConsult = ({register,onSubmit}) => {
    return (
        <form
            onSubmit={onSubmit}
            action=""
            id="form"
            className="d-flex flex-column justify-content-center align-items-center mt-5 border rounded bg-body-secondary p-5 shadow "
        >
            <div className="mb-3">
                <label htmlFor="valor" className="form-label">
                    Patente o DNI
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="valor"
                    id="valor"
                    {...register("valor")}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Buscar
            </button>
        </form>
            )

}
