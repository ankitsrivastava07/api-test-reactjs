import './css/ApiFormComponent.css'
export default function ApiFormComponent() {

    return (
        <>
            <form action={ }>
                <div className="row justify-content-center mb-3 margin-top">
                    <div className="col-md-6 ">
                        <label className="form-label">Enter your API here</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder="Enter your API here Ex. https://google.com"
                        />
                    </div>666
                </div>

                <div className="nav-item dropdown row justify-content-center mb-3 ">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Method
                    </label>

                    <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/">Get</a>
                        <a className="dropdown-item" href="/">Post</a>
                        <a className="dropdown-item" href="/">Patch</a>
                        <a className="dropdown-item" href="/">Put</a>
                        <a className="dropdown-item" href="/">Delete</a>
                        <a className="dropdown-item" href="/">Options</a>
                        <a className="dropdown-item" href="/">Head</a>
                    </div>
                </div>

                <div className="row justify-content-center mb-3">
                    <div className="col-md-6">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            Payload
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="8"
                            placeholder="E.g. 
                        {
                        &quot;key1&quot;:&quot;value1&quot;,
                        &quot;key2&quot;:&quot;value2&quot;
                        }"
                        ></textarea>
                    </div>
                </div>

                <div className="row justify-content-center mb-3">
                    <div className="col-md-6">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            Api Response
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="8"
                        ></textarea>
                    </div>
                </div>

                <div className="row justify-content-center mb-3">
                    <div className="col-md-6">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            Api Detail
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="8"
                        ></textarea>
                    </div>
                </div>

                <div className="row justify-content-center mb-3">
                    <div className="col-md-6">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            Execution Time:-
                        </label>
                    </div>
                </div>
                <div className="row justify-content-center mb-3">
                    <div className="col-md-6">
                        <button type="button" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </>
    )

}