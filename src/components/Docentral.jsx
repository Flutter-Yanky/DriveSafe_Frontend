import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

// Define an array of descriptions
const descriptions = [
  "Please upload your License here.",
  "Please upload your RC here.",
  "Please upload your PUC here.",
  "Please upload your Insurance here."
];

// Define an array of headings
const headings = [
  "1.Upload License",
  "2.Upload RC",
  "3.Upload PUC",
  "4.Upload Insurance"
];

const routes =[
    "dlupload",
    "rcupload",
    "pucupload",
    "insurupload"
]


const Docentral = () => {
    return (
        <div>
          <Navbar />
          <div className="grid grid-cols-2 gap-12 p-8">
            {headings.map((heading, index) => (
              <div key={index} className="p-8 bg-gray-100 rounded-lg">
                <h2 className="text-2xl font-semibold mb-6">{heading}</h2>
                <p className="text-lg text-gray-700 mb-6">{descriptions[index]}</p>
                <Link to={routes[index]} className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" >
                  Click Here
                </Link>
              </div>
            ))}
          </div>
          <div className="bg-sageGreen p-8">
            <p className="text-lg text-white">{`Facilitate the ability to upload documents without navigating away from the current page by integrating a document uploading feature within the existing interface.`}</p>
          </div>
        </div>
      );
}

export default Docentral