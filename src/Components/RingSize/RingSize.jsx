import React, { useState } from 'react';
import './RingSize.css';

const DropdownWithClear = () => {
    const [selectedSize, setSelectedSize] = useState("Choose");

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    };

    const clearSelection = () => {
        setSelectedSize("Choose");
    };

    return (
        <div>
            <div className="ring-size mt-3 d-flex align-items-center ">
                <h6 className="fw-medium text-uppercase mb-2" style={{ fontSize: "14px" }}>
                    Ring Size
                </h6>
                <div className="dropdown " style={{ marginLeft: "40px" }}>
                    <select className="size-dropdown me-3" value={selectedSize} onChange={handleSizeChange} >
                        <option value="Choose" disabled>
                            Choose
                        </option>
                        {(() => {
                            const options = [];
                            for (let size = 6; size <= 26; size++) {
                                options.push(
                                    <option key={size} value={size}>
                                        {size}
                                    </option>
                                );
                            }
                            return options;
                        })()}
                    </select>
                </div>
                <button className="clear-button" onClick={clearSelection}>
                    Clear
                </button>
            </div>
        </div>
    );
};

export default DropdownWithClear;
