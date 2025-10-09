import { Route, Router } from "@mui/icons-material";

export default function RouterComponent() {
    return <>
        <Router>
            <Route path="/api-form" element={<ApiFormComponent />} />
        </Router>

    </>
}