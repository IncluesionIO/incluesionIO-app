/**
 * @description - Gets the lifetime average answers for all questions on the assessment
 * @param {*} dataset 
 * @param {*} setLoading 
 * @returns - An array containing a pair of each question and it's average answer
 */
const getLifetimeAverageAnswerPerQuestion = (dataset, setLoading) => {
  const questionValues = new Map();
  const seenCount = new Map()
  
  dataset.map((assessment) => {
    const dataArray = Object.entries(assessment.data)
    dataArray.forEach((question) =>
    {
      if(!question[0].includes('Company ID'))
      questionValues.set(question[0], (questionValues.get(question[0]) || 0) + parseInt(question[1]))
        seenCount.set(question[0], (seenCount.get(question[0]) || 0) + 1)
    })
  })
  
  questionValues.forEach((value, key) =>
    {
      questionValues.set(key, (value / seenCount.get(key)).toFixed(2))
    })

  return [...questionValues.entries()]
  //   //Set the count for the key, if key exists add one, otherwise set the key to 1
  //   if (map.get(key)) {
  //     map.set(key, map.get(key) + 1);
  //   }
  // });
  // //Change map to array, sort the array by the key, and return the last seven entries.
  // //In other words, the last seven days with activity
  // const data = [...map].sort().slice(-7);
  // const labels = [];
  // const values = [];
  // data.map((data) => {
  //   labels.push(format(new Date(data[0]), "MM/dd"));
  //   values.push(data[1]);
  // });
  // setLoading(false);
  // return {
  //   labels,
  //   datasets: [
  //     {
  //       label: "Previous 7 Days of Assessment Activity",
  //       data: values,
  //       backgroundColor: "#000f4dee",
  //     },
  //   ],
  // };
};

export default getLifetimeAverageAnswerPerQuestion;
