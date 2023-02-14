import React from "react";

const App = () => {
  const relativeList = [
    { key: "relativeListItem1", name: "Aunt Mary" },
    { key: "relativeListItem2", name: "Uncle John" },
    { key: "relativeListItem3", name: "Grandma" },
    { key: "relativeListItem4", name: "Grandpa" },
  ];

  return (
    <div id="main">
      <div>
        <ol key="relativeList">
          {relativeList.map((relative) => (
            <li key={relative.key}>{relative.name}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default App;
