import React from 'react';

const List = () => {
    return (
        <div>
            <ul id='post-list'>
        {txtList.map((txt, idx) => (
          <li key={idx}>{txt}</li>
        ))}
      </ul>
        </div>
    );
}

export default List;