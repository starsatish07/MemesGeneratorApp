import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './MemeCard.css';

const MemeCard = (props) => {
    const navigate = useNavigate();

    return (
        <Card className="meme-card">
            <Card.Img variant="top" src={props.img} className="meme-card-img" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Button 
                    onClick={() => navigate(`/edit/?url=${props.img}`)} 
                    variant="primary"
                >
                    Edit
                </Button>
            </Card.Body>
        </Card>
    );
};

export default MemeCard;
