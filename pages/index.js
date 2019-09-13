import React from "react";

function Home() {
  React.useEffect(() => {
    console.log("committed");
  });

  return <div>Welcome to Next.js!</div>;
}

export default Home;
