import eachDayOfInterval from "date-fns/eachDayOfInterval";
import format from "date-fns/format";
import subDays from "date-fns/subDays";

const getLastSevenDaysOfData = (dataset, setLoading, datatitle) => {
  var map = new Map();
  eachDayOfInterval({
    start: subDays(new Date(), 6),
    end: new Date(),
  }).forEach((interval) => {
    map.set(format(interval, "MM/dd/yyyy"), 0);
  });
  dataset.map((datapoint) => {
    //Format each key into mmddyyyy to sort appropriately
    const key = format(new Date(datapoint.timestamp), "MM/dd/yyyy");
    //Set the count for the key, if key exists add one, otherwise set the key to 1
    if (map.get(key)) {
      map.set(key, map.get(key) + 1);
    }
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
        label: `Previous 7 Days of ${datatitle}`,
        data: values,
        backgroundColor: "#000f4dee",
      },
    ],
  };
};

export default getLastSevenDaysOfData;
