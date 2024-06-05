import '../App.css';
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { userDetails } from '../Data';

function Profile() {
    const profileDetail = userDetails[0];
    const [formData, setFormData] = useState({
        firstName: profileDetail.firstName,
        lastName: profileDetail.lastName,
        email: profileDetail.email,
        address: profileDetail.address,
    });
    const [showAlert, setShowAlert] = useState(false);


    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowAlert(true);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Account Information</h2>
            {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                    Profile updated successfully!
                </Alert>
            )}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstName" value={formData.firstName} onChange={onInputChange} required />
                </Form.Group>
                <br />

                <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastName" value={formData.lastName} onChange={onInputChange} required />
                </Form.Group>
                <br />

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={onInputChange} required />
                </Form.Group>
                <br />

                <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name="address" value={formData.address} onChange={onInputChange} required />
                </Form.Group>
                <br />
                <Button variant="primary" type="submit">Save Changes</Button>
            </Form>
        </div>
    );
}

export default Profile;
