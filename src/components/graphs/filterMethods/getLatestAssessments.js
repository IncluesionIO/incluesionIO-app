import axios from "axios";
import format from "date-fns/format";

const getLatestAssessments = (url, setLoading) => {
  return axios
    .get(url)
    .then((response) => {
      var map = new Map();
      response.data.map((assessment) => {
        //Format each key into mmddyyyy to sort appropriately
        const key = format(new Date(assessment.timestamp), "MM/dd/yyyy");
        //Set the count for the key, if key exists add one, otherwise set the key to 1
        map.set(key, map.get(key) + 1 || 1);
      });
      //Change map to array, sort the array by the key, and return the last seven entries.
      //In other words, the last seven days with activity
      const data = [...map].sort().slice(-7);
      const labels = []
      const values = [];
      data.map((data) => {
        labels.push(format(new Date(data[0]), "MM/dd"));
        values.push(data[1]);
      });
      setLoading(false);
      return { labels, datasets: [
        {
            label: "Previous 7 Days of Latest Assessments",
            data: values,
            backgroundColor: "#000f4dee"
        }
      ] };
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getLatestAssessments;
