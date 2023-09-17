import React, { useState, useEffect } from 'react';
import Bill from "../components/Bill"
import axios from 'axios';

export default function Home() {
  const [billData, setBillData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/bills');
        const bills = response["data"]["results"][0]["bills"];
        setBillData(bills);
      } catch (error) {
        console.error("There was an error fetching data", error);
      }
    };

    fetchData();
  }, []); // The empty array means this useEffect runs once when the component mounts

  return (
    <div>
      {billData.length > 0 ? (
        billData.map((bill, index) => (
          <Bill
            key={index}
            title={bill.title}
            body='A bunch of text text'
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
