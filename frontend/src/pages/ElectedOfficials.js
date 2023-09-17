import Politician from "../components/Politician"

function ElectedOfficials() {

    const politicianData = [
        {
            name: 'Katherine Clark (D)',
            position: 'U.S. House of Representatives',
            address: '24 Beacon St, Boston, MA 02133',
            email: 'katherin.clark@house.gov',
            phone: '123-456-7890',
            photoLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Katherine_Clark%2C_official_portrait%2C_118th_Congress_%28longer_crop%29.jpg/1024px-Katherine_Clark%2C_official_portrait%2C_118th_Congress_%28longer_crop%29.jpg"
        },
        {
            name: 'Elizabeth Warren (D)',
            position: 'U.S. Senate',
            address: '24 Beacon St, Boston, MA 02133',
            email: 'elizabeth.warren@senate.gov',
            phone: '123-456-7890',
            photoLink: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Elizabeth_Warren%2C_official_portrait%2C_114th_Congress.jpg"
        }
    ];

    return (
        <html>
        <div className="cover">
            My Representatives
        </div>
            <body className="rep-list">
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
            </body>
        </html>
    )
}

export default ElectedOfficials;