import { CEL_DATA, CEL_ERROR, CEL_LOADING, SINGLE_DATA } from "./cleAction"

const initialState = {
    celList: [],
    Loading: false,
    Error: false,
    single: {}
}

export const celReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case CEL_DATA: return { ...store, celList: payload, Loading: false, Error: false }

        case SINGLE_DATA: return { ...store, single: payload, Loading: false, Error: false }

        case CEL_ERROR: return { ...store, Loading: false, Error: true }

        case CEL_LOADING: return { ...store, Loading: true, Error: false }

        default: return store;
    }
}