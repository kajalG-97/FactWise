import axios from "axios"

export const CEL_LOADING = "CEL_LOADING"

export const CEL_DATA = "CEL_DATA"

export const CEL_ERROR = "CEL_ERROR"

export const SINGLE_DATA = "SINGLE_DATA"

export const celLoading = () => ({ type: "CEL_LOADING" })

export const celError = () => ({ type: "CEL_ERROR" })

export const celData = (payload) => ({ type: CEL_DATA, payload });

export const singleData = (payload) => ({ type: SINGLE_DATA, payload });


export const getCelData = () => (dispatch) => {

    dispatch(celLoading());

    axios.get(`http://localhost:2400/celebrities`).then(({ data }) => {

        dispatch(celData(data))
    })
        .catch((err) => dispatch(celError()));
}


export const getSingleData = (id) => (dispatch) => {

    dispatch(celLoading());

    axios.get(`http://localhost:2400/celebrities/${id}`).then(({ data }) => { dispatch(singleData(data)) })
        .catch((err) => dispatch(celError()));
}


export const celPatchData = (id, data, navigate) => (dispatch) => {
    dispatch(celLoading());
    axios.patch(`http://localhost:2400/celebrities/${id}`, data).then(({ data }) => {

        getCelData()
        setTimeout(() => {
            alert("Edited !")
            navigate("/")
        }, 1000)
    })
        .catch((err) => dispatch(celError()));
}



export const celDeleteData = (id) => (dispatch) => {
    dispatch(celLoading());
    axios.delete(`http://localhost:2400/celebrities/${id}`).then(({ data }) => {

        getCelData()

    })
        .catch((err) => dispatch(celError()));
}
