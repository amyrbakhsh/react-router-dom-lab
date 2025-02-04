// src/components/MailboxForm/MailboxForm.jsx
import React, { useState } from 'react';

const MailboxForm = ({ addBox }) => {
    const [boxOwner, setBoxOwner] = useState('');
    const [boxSize, setBoxSize] = useState('Small');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBox = { boxOwner, boxSize };
        addBox(newBox);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="boxOwner">Box Owner:</label>
                <input
                    type="text"
                    id="boxOwner"
                    value={boxOwner}
                    onChange={(e) => setBoxOwner(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="boxSize">Box Size:</label>
                <select
                    id="boxSize"
                    value={boxSize}
                    onChange={(e) => setBoxSize(e.target.value)}
                >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            </div>
            <button type="submit">Add Mailbox</button>
        </form>
    );
}

export default MailboxForm;
