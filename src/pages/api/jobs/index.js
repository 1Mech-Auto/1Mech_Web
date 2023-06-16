import { jobList } from "../../../../data/job";
export default function handler(req, res) {
  if (req.method === "GET") {
    // Handle GET request
    const data = { message: "This is a GET request" };
    res.status(200).json(jobList);
  } else if (req.method === "POST") {
    // const clientForm = req.body.clientForm;
    // const newClient = {
    //   id: Date.now(),
    //   clientDetails: clientForm,
    //   // date: formattedDate,
    // };
    // clientsList.push(newClient);
    // res.status(201).json(newClient);
    // Handle POST request
    const { body } = req;
    const data = { message: "This is a POST request", body };
    const jobForm = req.body.jobForm;
    const newForm = {
      id: Date.now(),
      jobForm: jobForm,
    };
    jobList.push(newForm);
    res.status(201).json(jobList);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
