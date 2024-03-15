import React, { useState } from 'react';
import Header from './Header';
import './ManagePromotions.css';

function ManagePromotions({isLoggedIn, setLoggedIn}) {
    const [promotions, setPromotions] = useState([
        // some dummy data
        { id: 1, name: 'Early Bird', description: 'Get 20% off for early bookings', code: 'EARLY20', amount: 0.80 },
        { id: 2, name: 'Summer Sale', description: 'Enjoy the summer with a 15% discount', code: 'SUMMER15', amount: 0.85 },
    ]);

    const [newPromotion, setNewPromotion] = useState({ name: '', description: '', code: '', amount: '' });

    const addPromotion = () => {
        if (!newPromotion.name || !newPromotion.code || !newPromotion.amount) {
            alert('Please fill in all fields.');
            return;
        }
        setPromotions([...promotions, { ...newPromotion, id: promotions.length + 1 }]);
        setNewPromotion({ name: '', description: '', code: '', amount: '' }); // Reset form
    };

    const deletePromotion = (id) => {
        setPromotions(promotions.filter(promotion => promotion.id !== id));
    };

    const handleInputChange = (e) => {
        setNewPromotion({ ...newPromotion, [e.target.name]: e.target.value });
    };

    return (
        <div>
<Header isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
            <div className="manage-promotions"> 
            <h5>Manage Promotions</h5>
            <div className="promotion-list">
                {promotions.map((promotion) => (
                    <div key={promotion.id} className="promotion-item">
                        <div className="promotion-details">
                            <h3>{promotion.name}</h3>
                            <p>{promotion.description}</p>
                            <p>Code: {promotion.code}</p>
                            <p>Discount: {promotion.amount * 100}%</p>
                        </div>
                        <button onClick={() => deletePromotion(promotion.id)} className="btn-delete">Delete</button>
                    </div>
                ))}
            </div>
            <div className="add-promotion-form">
                <h3>Add New Promotion</h3>
                <input
                    type="text"
                    placeholder="Promotion Name"
                    name="name"
                    value={newPromotion.name}
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder="Description"
                    name="description"
                    value={newPromotion.description}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Code"
                    name="code"
                    value={newPromotion.code}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    step="0.01"
                    placeholder="Amount (as a decimal Eg. .80 = 80%)"
                    name="amount"
                    value={newPromotion.amount}
                    onChange={handleInputChange}
                />
                <button onClick={addPromotion} className="btn-add">Add Promotion</button>
            </div>
            </div>

        </div>
    );
}

export default ManagePromotions;
