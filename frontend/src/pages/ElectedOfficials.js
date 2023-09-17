import React, { useState, useEffect } from 'react';
import Politician from '../components/Politician';
import axios from 'axios';

function ElectedOfficials() {
    const [ttt, setTtt] = useState("ooo");
    const [t, setT] = useState("p");
    var [repsData, setRepsData] = useState([]); // Initialize repsData as an empty array

    const politicianData = [
        {
            name: 'Katherine Clark (D)',
            position: 'U.S. House of Representatives',
            address: '24 Beacon St, Boston, MA 02133',
            email: 'katherine.clark@house.gov',
            phone: '(202) 225-2836',
            photoLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Katherine_Clark%2C_official_portrait%2C_118th_Congress_%28longer_crop%29.jpg/1024px-Katherine_Clark%2C_official_portrait%2C_118th_Congress_%28longer_crop%29.jpg"
        },
        {
            name: 'Elizabeth Warren (D)',
            position: 'U.S. Senate',
            address: '24 Beacon St, Boston, MA 02133',
            email: 'elizabeth.warren@senate.gov',
            phone: '(617) 565-3170',
            photoLink: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Elizabeth_Warren%2C_official_portrait%2C_114th_Congress.jpg"
        },
        {
            name: 'Ed Markey (D)',
            position: 'U.S. Senate',
            address: '24 Beacon St, Boston, MA 02133',
            email: 'ed.markey@senate.gov',
            phone: '(617) 565-8519',
            photoLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Edward_Markey%2C_official_portrait%2C_114th_Congress.jpg/440px-Edward_Markey%2C_official_portrait%2C_114th_Congress.jpg"
        },
        {
            name: 'Kamala Harris (D)',
            position: 'U.S. Vice President',
            address: '24 Beacon St, Boston, MA 02133',
            email: 'ed.markey@senate.gov',
            phone: '(617) 565-8519',
            photoLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Edward_Markey%2C_official_portrait%2C_114th_Congress.jpg/440px-Edward_Markey%2C_official_portrait%2C_114th_Congress.jpg"
        }
    ];

    useEffect(() => {
        // Fetch data from the API when the component mounts
        axios.get('http://localhost:3000/get_reps')
            .then(response => {
                console.log(response.data);
                // Set the repsData state with the fetched data
                setRepsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // The empty dependency array ensures this effect runs once on component mount

    function handleClick() {
        // Now you can use the fetched repsData to update t
        setT(JSON.stringify(repsData));
    }

    return (
        <html>
        <div className="cover">
            My Representatives
        </div>
            <div className="rep-list">
                {politicianData.map((data, index) => (
                    <Politician
                        key={index}
                        name={data.name}
                        position={data.position}
                        address={data.address}
                        email={data.email}
                        phone={data.phone}
                        photoLink={data.photoLink}
                    />
                ))}
                <button onClick={handleClick}>Email</button>
            </div>
        </html>
    );
}

export default ElectedOfficials;