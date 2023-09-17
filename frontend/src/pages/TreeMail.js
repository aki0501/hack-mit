import React, { useState, useEffect } from 'react';
import "../styles/styles.css"
import axios from 'axios';

export default function TreeMail() {

    const [treeMail, setTreeMail] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/treemail');
            setTreeMail(response.data);
        } catch (error) {
            console.error("There was an error fetching data", error);
        }
        };

        fetchData();
    }, []);


    
    return (
        <div className="cover">
            {treeMail}
        </div>
    )
}