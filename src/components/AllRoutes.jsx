import { Route, Routes } from "react-router-dom";

import { EditPage } from "./EditPage";

import { Home } from "./Home";

import { NotFoundPage } from "./NotFoundPage";


export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/edit" element={<EditPage />} />
            </Routes>
        </>
    )
}