import React from "react";
export const TargetList = ({}) => {

    // destinations
    const destinationsData = [
        // ??beijing 

{
        id: 1,
        name: 'beijng',
        thumbnail: 'paris-thumbnail.jpg',
        description: '??,????,??????????',
        detail: '????????????????????????????????',
        image: 'paris.jpg',
        comments: ['???????!', '????????!'],
        },
        {
        id: 2,
        name: '??',
        thumbnail: 'tokyo-thumbnail.jpg',
        description: '??,????????????',
        detail: '????????????,????????????????',
        image: 'tokyo.jpg',
        comments: ['????????!', '????????????!'],
        },
    ];
    
    function DestinationList({ destinations, onItemClick }) {
    return (
      <div>
        <h2>?????????</h2>
        <ul>
          {destinations.map(destination => (
            <li key={destination.id}>
              <button onClick={() => onItemClick(destination)}>
                <img src={destination.thumbnail} alt={destination.name} />
                <p>{destination.name}</p>
                <p>{destination.description}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  function DestinationDetail({ destination }) {
    return (
      <div>
        <h2>{destination.name}</h2>
        <img src={destination.image} alt={destination.name} />
        <p>{destination.detail}</p>
        <h3>??</h3>
        <ul>
          {destination.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    );
  }
  

    const [selectedDestination, setSelectedDestination] = useState(null);

    const handleItemClick = destination => {
      setSelectedDestination(destination);
    };
  
    return (
      <div>
        {selectedDestination ? (
          <DestinationDetail destination={selectedDestination} />
        ) : (
          <DestinationList destinations={destinationsData} onItemClick={handleItemClick} />
        )}
      </div>
    );
 
}