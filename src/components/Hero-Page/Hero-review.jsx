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
      <div className="elfsight-app-cc20f194-1979-4484-996d-45bd4147b020" data-elfsight-app-lazy></div>
    </div>
  );
}
