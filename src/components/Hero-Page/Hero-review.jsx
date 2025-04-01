import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import { useEffect } from "react";
export default function Reviews() {
  useEffect(() => {
    // Create the script element dynamically
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.setAttribute("data-elfsight-app-lazy", "true");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup on component unmount
    };
  }, []);

  return (
    <div>
      {/* This is where the reviews widget will appear */}
      <div className="elfsight-app-47a554e9-6976-47d6-b6df-7d773be19808" data-elfsight-app-lazy></div>
      {/*<iframe src='https://widgets.sociablekit.com/google-reviews/iframe/25541114' frameBorder='0' width='100%' height='1000'></iframe> */}

    </div>
  );
}
