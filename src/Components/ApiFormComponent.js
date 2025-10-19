import { useEffect, useState } from 'react'
import './css/ApiFormComponent.css'
import axios from 'axios';

export default function ApiFormComponent() {
    const [selectedMethod, setSelectedMethod] = useState("");
    const [apiResponse, setApiResponse] = useState();

    const handleSubmitEvent = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        console.log(formData);
        const api = formData.get("api");

        const data = {
            methodType: selectedMethod,
            uri: api,
            requestBody: formData.get("payload")
        };

        const res = await axios.post('https://p661i8bidb.execute-api.ap-south-1.amazonaws.com/dev/apiTestApp', data);
        setApiResponse(JSON.stringify(res.data, null, 2));
    };

    function handleChange(event) {
        setSelectedMethod(event.target.value);
    }

    useEffect(() => {
        console.log("Selected Method: ", selectedMethod);
    }, [selectedMethod])

    useEffect(() => {
        console.log("API Response: ", apiResponse);
    }, [apiResponse]);

    return (
        <>
            <form onSubmit={handleSubmitEvent}>
                <div className="row justify-content-center mb-3 margin-top">
                    <div className="col-md-6">
                        <label className="form-label">Enter your API here</label>
                        <input
                            type="text" name="api"
                            className="form-control"
                            id="firstName"
                            placeholder="Enter your API here Ex. https://google.com"
                        />
                    </div>
                </div>

                <div className="nav-item dropdown row justify-content-center mb-3 " name="method">
                    <label htmlFor="exampleFormControlTextarea1" >
                        Method :
                    </label>

                    <select value={selectedMethod} onChange={handleChange} name="method">
                        <option value="">-- Select Method --</option>
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                        <option value="PATCH">PATCH</option>
                        <option value="DELETE">DELETE</option>
                        <option value="HEAD">HEAD</option>
                        <option value="OPTIONS">OPTIONS</option>
                    </select>

                </div>

                <div className="row justify-content-center mb-3">
                    <div className="col-md-6">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            Payload
                        </label>
                        <textarea name="payload"
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
                        <pre
                            className="form-control"
                            id="hght"
                            rows="8"
                        >
                            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                                {(() => {
                                    // Guard clause: handle no data
                                    if (!apiResponse || apiResponse === 'undefined') {
                                        return 'No response yet';
                                    }

                                    let parsed = null;

                                    // Only parse if it's a valid JSON string
                                    if (typeof apiResponse === 'string') {
                                        if (
                                            apiResponse.trim().startsWith('{') &&
                                            apiResponse.trim().endsWith('}')
                                        ) {
                                            try {
                                                parsed = JSON.parse(apiResponse);
                                            } catch (e) {
                                                return `Invalid JSON: ${e.message}`;
                                            }
                                        } else {
                                            return 'Invalid JSON format';
                                        }
                                    } else {
                                        parsed = apiResponse; // already a JS object
                                    }

                                    // Final safe render
                                    const responseText = parsed?.responseText;
                                    if (!responseText) return 'No Data Found';

                                    return responseText
                                        .replace(/, /g, '\n')
                                        .replace(/=/g, ': ');
                                })()}
                            </pre>

                        </pre>
                    </div>
                </div>

                <div className="row justify-content-center mb-3">
                    <div className="col-md-6">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            Api Detail
                        </label>
                        <pre
                            className="form-control"
                            id="hght"
                            rows="8"
                            style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}                        >

                            {(() => {
                                // Guard clause: handle no data
                                if (!apiResponse || apiResponse === 'undefined') {
                                    return 'No response yet';
                                }

                                let parsed = null;

                                // Only parse if it's a valid JSON string
                                if (typeof apiResponse === 'string') {
                                    if (
                                        apiResponse.trim().startsWith('{') &&
                                        apiResponse.trim().endsWith('}')
                                    ) {
                                        try {
                                            parsed = JSON.parse(apiResponse);
                                        } catch (e) {
                                            return `Invalid JSON: ${e.message}`;
                                        }
                                    } else {
                                        return 'Invalid JSON format';
                                    }
                                } else {
                                    parsed = apiResponse; // already a JS object
                                }

                                // Final safe render
                                const responseHeader = parsed?.responseHeader;
                                if (!responseHeader) return apiResponse;

                                return responseHeader
                                    .replace(/, /g, '\n')
                                    .replace(/=/g, ': ');
                            })()}

                        </pre>
                    </div>
                </div>

                <div className="row justify-content-center mb-3">
                    <div className="col-md-6">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            Execution Time :- {apiResponse && JSON.parse(apiResponse).executionTime}
                        </label>
                    </div>
                </div>
                <div className="row justify-content-center mb-3">
                    <div className="col-md-6">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}