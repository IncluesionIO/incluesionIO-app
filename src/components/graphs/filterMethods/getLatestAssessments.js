import format from "date-fns/format";

/**
 * @description - Formats data from the API to the nessessary data for the charts
 * @param {*} dataset - API data
 * @param {*} setLoading - Loading state boolean from parent element
 * @returns Object containing labels and the datasets
 */
const getLatestAssessments = (dataset, setLoading, dataTitle) => {
  var map = new Map();
  dataset.forEach((assessment) => {
    //Format each key into mmddyyyy to sort appropriately
    const key = format(new Date(assessment.timestamp), "MM/dd/yyyy");
    //Set the count for the key, if key exists add one, otherwise set the key to 1
    map.set(key, map.get(key) + 1 || 1);
  });
  //Change map to array, sort the array by the key, and return the last seven entries.
  //In other words, the last seven days with activity
  const data = [...map].sort().slice(-7);
  const labels = [];
  const values = [];
  data.map((data) => {
    labels.push(format(new Date(data[0]), "MM/dd"));
    values.push(data[1]);
  });
  setLoading(false);
  return {
    labels,
    datasets: [
      {
        label: `Top 7 Days of ${dataTitle}`,
        data: values,
        backgroundColor: "#000f4dee",
      },
    ],
  };
};

export default getLatestAssessments;
