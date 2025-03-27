import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

export default function Reviews() {
  // Create a free Featurable account at https://featurable.com
  // Then create a new Featurable widget and copy the widget ID
  const featurableWidgetId = process.env.FEATUREABLE_API_KEY

  return (
    <ReactGoogleReviews
      layout="carousel"
      featurableId={featurableWidgetId}
    />
  );
}



