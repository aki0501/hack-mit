import React, { useState, useEffect } from 'react';
import Bill from "../components/Bill"
import "../styles/styles.css"
import axios from 'axios';

export default function Home() {
  const [billData, setBillData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/bills');
        if ("data" in response) {
            const bills = response["data"]["results"][0]["bills"];
            setBillData(bills);
        }
      } catch (error) {
        console.error("There was an error fetching data", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
        <div className="cover">
            Pending Legislation
        </div>
        <div className="bill-list">
        {billData.length > 0 ? (
            billData.map((bill, index) => (
            <Bill
                key={index}
                title={bill.short_title || "No Title"}
                body={bill.title || "No Body"}
                billUrl={bill.govtrack_url || "#"}
            />
            ))
        ) : (
            <p>Loading...</p>
        )}
        </div>
    </div>
  );
}
