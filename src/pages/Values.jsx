import React, {useState} from 'react'
import './style/Values.css'

export default function ({data, handleValueChange, handleJSONValueChange}) {

    const [toggleFlag,
        setToggleFlag] = useState(true);

    function toggle() {
        setToggleFlag(!toggleFlag);
    }
    return (
        <div className='valuesBox'>
            <div>

                <div style={{
                    display: 'flex'
                }}>
                    <div
                        className={toggleFlag
                        ? 'type-input'
                        : 'type-JSON'}
                        onClick={toggle}>
                        <h6>Input</h6>
                    </div>
                    <div
                        className={toggleFlag
                        ? 'type-JSON'
                        : 'type-input'}
                        onClick={toggle}>
                        <h7>JSON</h7>
                    </div>
                </div>
                {toggleFlag
                    ? <div className='box1'>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input
                                    name='name'
                                    type="text"
                                    value={data.name}
                                    onChange={handleValueChange}
                                    className="form-control"
                                    id="name"></input>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Invoice ID</label>
                                <input
                                    name='invoiceID'
                                    type="text"
                                    onChange={handleValueChange}
                                    value={data.invoiceID}
                                    className="form-control"
                                    id="invoiceID"></input>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Address</label>
                                <input
                                    name='address'
                                    type="text"
                                    onChange={handleValueChange}
                                    value={data.address}
                                    className="form-control"
                                    id="address"></input>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Amount</label>
                                <input
                                    name='amount'
                                    type="text"
                                    onChange={handleValueChange}
                                    value={data.amount}
                                    className="form-control"
                                    id="amount"></input>
                            </div>
                        </div>
                    : <div className='box2'>
                        <textarea
                            class="form-control rounded-0"
                            id="exampleFormControlTextarea1"
                            name='exampleFormControlTextarea1'
                            value={JSON.stringify(data)}
                            onChange={handleJSONValueChange}
                            rows="10"></textarea>

                    </div>
                }
                <div style={{position:'absolute', bottom:'0px', margin:'10px 20px', color:'rgba(255, 255, 255, 0.155)'}}>
                    <p>Developed By</p>
                    <h6>SOLOMON MITHRA</h6>
                </div>
            </div>
        </div>
    )
}
