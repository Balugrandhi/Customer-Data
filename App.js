import React, { useEffect, useState } from 'react';
import './App.css'
import TableWithSearchAndPagination from './CustomTable'; // Assuming the Table component is in a separate file
import axios from 'axios';

const App = () => {
  // Sample data
  // const data = [{
  //   "sno": 1,
  //   "customer_name": "Newton Fritsch",
  //   "age": 79,
  //   "phone": "750.702.0138",
  //   "location": "Morarstad",
  //   "created_at": "2023-06-25T10:11:23.100Z"
  // }, {
  //   "sno": 2,
  //   "customer_name": "Jeremie Stiedemann",
  //   "age": 76,
  //   "phone": "(917) 926-5005",
  //   "location": "New Dalton",
  //   "created_at": "2023-09-22T06:59:22.582Z"
  // }, {
  //   "sno": 3,
  //   "customer_name": "Dock Skiles",
  //   "age": 32,
  //   "phone": "380.927.6326",
  //   "location": "Romagueraborough",
  //   "created_at": "2023-12-20T14:44:04.603Z"
  // }, {
  //   "sno": 4,
  //   "customer_name": "Alvina Muller",
  //   "age": 58,
  //   "phone": "509.285.3354 x62062",
  //   "location": "Onaport",
  //   "created_at": "2023-05-03T19:35:23.264Z"
  // }, {
  //   "sno": 5,
  //   "customer_name": "Jameson Wunsch",
  //   "age": 74,
  //   "phone": "(294) 054-9055 x969",
  //   "location": "Homenickborough",
  //   "created_at": "2024-02-05T19:32:38.844Z"
  // }, {
  //   "sno": 6,
  //   "customer_name": "Isabell Rohan",
  //   "age": 20,
  //   "phone": "(143) 283-7724",
  //   "location": "Travontown",
  //   "created_at": "2023-05-17T12:18:12.824Z"
  // }, {
  //   "sno": 7,
  //   "customer_name": "Norris Lynch",
  //   "age": 58,
  //   "phone": "395-192-0415 x79093",
  //   "location": "Ottisshire",
  //   "created_at": "2023-03-07T18:44:39.737Z"
  // }, {
  //   "sno": 8,
  //   "customer_name": "Veda Batz",
  //   "age": 44,
  //   "phone": "(000) 532-9031 x95864",
  //   "location": "West Colten",
  //   "created_at": "2023-12-08T05:42:16.319Z"
  // }, {
  //   "sno": 9,
  //   "customer_name": "Shanon Prosacco PhD",
  //   "age": 37,
  //   "phone": "158.401.1757 x7401",
  //   "location": "New Valentineton",
  //   "created_at": "2023-12-26T20:38:24.784Z"
  // }, {
  //   "sno": 10,
  //   "customer_name": "Allan Thiel",
  //   "age": 70,
  //   "phone": "1-951-811-1510 x8962",
  //   "location": "Quigleytown",
  //   "created_at": "2023-09-06T07:21:09.095Z"
  // }, {
  //   "sno": 11,
  //   "customer_name": "Willy Altenwerth",
  //   "age": 73,
  //   "phone": "150-396-4233",
  //   "location": "Hammeschester",
  //   "created_at": "2023-08-17T20:37:37.769Z"
  // }, {
  //   "sno": 12,
  //   "customer_name": "Janiya Flatley",
  //   "age": 65,
  //   "phone": "180-967-0032 x730",
  //   "location": "South Sofia",
  //   "created_at": "2023-04-17T11:13:02.264Z"
  // }, {
  //   "sno": 13,
  //   "customer_name": "Manuel Harber III",
  //   "age": 63,
  //   "phone": "086-264-0815 x873",
  //   "location": "Lake Shanyburgh",
  //   "created_at": "2023-11-24T03:24:57.159Z"
  // }, {
  //   "sno": 14,
  //   "customer_name": "Colton Armstrong",
  //   "age": 59,
  //   "phone": "857-019-8875",
  //   "location": "South Janiceville",
  //   "created_at": "2024-01-12T23:31:21.537Z"
  // }, {
  //   "sno": 15,
  //   "customer_name": "Manuela Moen PhD",
  //   "age": 77,
  //   "phone": "379-692-4521 x151",
  //   "location": "West Elwynville",
  //   "created_at": "2023-12-08T02:38:32.441Z"
  // }, {
  //   "sno": 16,
  //   "customer_name": "Grayson Kautzer",
  //   "age": 59,
  //   "phone": "(966) 951-7369 x4188",
  //   "location": "East Fermin",
  //   "created_at": "2023-11-09T04:21:18.607Z"
  // }, {
  //   "sno": 17,
  //   "customer_name": "Mable Kuvalis",
  //   "age": 19,
  //   "phone": "866.970.6847",
  //   "location": "East Jamesonborough",
  //   "created_at": "2023-10-06T22:32:29.867Z"
  // }, {
  //   "sno": 18,
  //   "customer_name": "Danny Pollich",
  //   "age": 78,
  //   "phone": "135.548.3939 x167",
  //   "location": "Frederiqueshire",
  //   "created_at": "2023-10-20T04:23:56.921Z"
  // }, {
  //   "sno": 19,
  //   "customer_name": "Lysanne Larson",
  //   "age": 69,
  //   "phone": "1-237-044-9015",
  //   "location": "Port Myafort",
  //   "created_at": "2023-10-27T12:09:40.744Z"
  // }, {
  //   "sno": 20,
  //   "customer_name": "Adella Hammes",
  //   "age": 69,
  //   "phone": "1-319-195-4059 x59720",
  //   "location": "Jacobsberg",
  //   "created_at": "2023-04-19T19:06:10.747Z"
  // }, {
  //   "sno": 21,
  //   "customer_name": "Rubie Armstrong",
  //   "age": 55,
  //   "phone": "237-777-7415 x9300",
  //   "location": "Macejkovicbury",
  //   "created_at": "2024-02-29T12:25:14.734Z"
  // }, {
  //   "sno": 22,
  //   "customer_name": "Jannie Kling",
  //   "age": 28,
  //   "phone": "1-011-955-3763",
  //   "location": "Sipesview",
  //   "created_at": "2023-10-06T05:32:33.072Z"
  // }, {
  //   "sno": 23,
  //   "customer_name": "Tamara Morissette",
  //   "age": 62,
  //   "phone": "671.990.1429 x30563",
  //   "location": "New Raphaelchester",
  //   "created_at": "2023-03-24T06:34:12.123Z"
  // }, {
  //   "sno": 24,
  //   "customer_name": "Candida Swift",
  //   "age": 69,
  //   "phone": "(595) 964-7675 x23432",
  //   "location": "Schmelerberg",
  //   "created_at": "2023-04-07T16:37:11.209Z"
  // }, {
  //   "sno": 25,
  //   "customer_name": "Melyssa Schowalter",
  //   "age": 42,
  //   "phone": "(622) 604-0155 x942",
  //   "location": "West Valliemouth",
  //   "created_at": "2023-09-03T02:13:41.971Z"
  // }, {
  //   "sno": 26,
  //   "customer_name": "Ahmad Luettgen",
  //   "age": 41,
  //   "phone": "422.021.9421 x03171",
  //   "location": "Ellaland",
  //   "created_at": "2023-04-30T02:57:03.168Z"
  // }, {
  //   "sno": 27,
  //   "customer_name": "Bradford Nikolaus",
  //   "age": 47,
  //   "phone": "(472) 336-3177",
  //   "location": "Bobbiechester",
  //   "created_at": "2023-05-18T03:50:06.691Z"
  // }, {
  //   "sno": 28,
  //   "customer_name": "Orval Hirthe DDS",
  //   "age": 36,
  //   "phone": "673.686.3481 x5422",
  //   "location": "Bransonmouth",
  //   "created_at": "2023-03-21T18:56:24.121Z"
  // }, {
  //   "sno": 29,
  //   "customer_name": "Tony Funk",
  //   "age": 52,
  //   "phone": "891.762.4796",
  //   "location": "Abbottshire",
  //   "created_at": "2023-07-01T03:57:09.485Z"
  // }, {
  //   "sno": 30,
  //   "customer_name": "Janelle Reilly",
  //   "age": 69,
  //   "phone": "1-169-554-0532",
  //   "location": "Turnerbury",
  //   "created_at": "2023-11-13T12:49:11.890Z"
  // }, {
  //   "sno": 31,
  //   "customer_name": "Shanny Dickens",
  //   "age": 38,
  //   "phone": "(292) 573-9194 x161",
  //   "location": "West Tessieview",
  //   "created_at": "2023-06-27T03:01:39.048Z"
  // }, {
  //   "sno": 32,
  //   "customer_name": "Sylvia Armstrong",
  //   "age": 44,
  //   "phone": "(540) 673-7900",
  //   "location": "New Marcelborough",
  //   "created_at": "2023-08-10T09:37:40.788Z"
  // }, {
  //   "sno": 33,
  //   "customer_name": "Lexie Mitchell",
  //   "age": 36,
  //   "phone": "1-313-830-3131 x75959",
  //   "location": "Lake Aric",
  //   "created_at": "2023-05-18T03:54:13.445Z"
  // }, {
  //   "sno": 34,
  //   "customer_name": "Jeremy Rogahn",
  //   "age": 45,
  //   "phone": "045.243.8691 x8399",
  //   "location": "Valentinaside",
  //   "created_at": "2023-06-01T19:20:32.452Z"
  // }, {
  //   "sno": 35,
  //   "customer_name": "Elena Corwin",
  //   "age": 35,
  //   "phone": "(928) 145-8472 x7588",
  //   "location": "Greenfelderberg",
  //   "created_at": "2023-03-23T20:50:20.811Z"
  // }, {
  //   "sno": 36,
  //   "customer_name": "Alverta Mraz",
  //   "age": 25,
  //   "phone": "822.175.7916 x4179",
  //   "location": "Yundtborough",
  //   "created_at": "2024-02-24T06:52:36.646Z"
  // }, {
  //   "sno": 37,
  //   "customer_name": "Loy Berge PhD",
  //   "age": 39,
  //   "phone": "(260) 378-4113",
  //   "location": "Olaport",
  //   "created_at": "2024-02-24T13:08:14.948Z"
  // }, {
  //   "sno": 38,
  //   "customer_name": "Barney Gutmann",
  //   "age": 77,
  //   "phone": "313.884.7168",
  //   "location": "Rosemaryville",
  //   "created_at": "2023-09-19T01:31:44.589Z"
  // }, {
  //   "sno": 39,
  //   "customer_name": "Lesly McClure",
  //   "age": 28,
  //   "phone": "536.768.8663",
  //   "location": "Margaritamouth",
  //   "created_at": "2023-10-19T21:37:40.427Z"
  // }, {
  //   "sno": 40,
  //   "customer_name": "Mr. Omer Lehner",
  //   "age": 80,
  //   "phone": "1-255-910-5997",
  //   "location": "New Leannberg",
  //   "created_at": "2023-03-07T02:34:43.297Z"
  // }, {
  //   "sno": 41,
  //   "customer_name": "Simeon Miller",
  //   "age": 20,
  //   "phone": "(690) 102-3702 x8351",
  //   "location": "Lake Chris",
  //   "created_at": "2023-08-28T11:17:51.632Z"
  // }, {
  //   "sno": 42,
  //   "customer_name": "Billie Friesen",
  //   "age": 27,
  //   "phone": "1-466-464-8285 x15810",
  //   "location": "Ryantown",
  //   "created_at": "2024-01-14T03:18:32.554Z"
  // }, {
  //   "sno": 43,
  //   "customer_name": "Tristin Mohr",
  //   "age": 72,
  //   "phone": "(386) 745-3555 x505",
  //   "location": "North Ariel",
  //   "created_at": "2023-12-27T02:31:31.445Z"
  // }, {
  //   "sno": 44,
  //   "customer_name": "Branson Willms",
  //   "age": 63,
  //   "phone": "(970) 286-1336 x3436",
  //   "location": "Cristbury",
  //   "created_at": "2023-10-14T00:55:15.435Z"
  // }, {
  //   "sno": 45,
  //   "customer_name": "Freddie Kuhic",
  //   "age": 33,
  //   "phone": "962-709-7260 x3765",
  //   "location": "East Granville",
  //   "created_at": "2023-11-24T16:28:00.963Z"
  // }, {
  //   "sno": 46,
  //   "customer_name": "Mrs. Chandler Moen",
  //   "age": 79,
  //   "phone": "1-153-723-0008 x45621",
  //   "location": "New Mafaldaberg",
  //   "created_at": "2023-04-28T07:30:59.941Z"
  // }, {
  //   "sno": 47,
  //   "customer_name": "Estelle Tillman",
  //   "age": 44,
  //   "phone": "(894) 646-0297 x4042",
  //   "location": "Enoshaven",
  //   "created_at": "2024-02-16T04:10:43.329Z"
  // }, {
  //   "sno": 48,
  //   "customer_name": "Jasper Wuckert",
  //   "age": 66,
  //   "phone": "623.670.8387",
  //   "location": "Gottliebville",
  //   "created_at": "2023-12-05T00:33:55.951Z"
  // }, {
  //   "sno": 49,
  //   "customer_name": "Ms. Angie Lang",
  //   "age": 24,
  //   "phone": "1-788-348-5325 x8448",
  //   "location": "North Eldridgeberg",
  //   "created_at": "2023-03-20T22:39:10.461Z"
  // }, {
  //   "sno": 50,
  //   "customer_name": "Santina Beatty",
  //   "age": 51,
  //   "phone": "502-716-9987",
  //   "location": "West Wavaton",
  //   "created_at": "2023-04-05T22:40:01.499Z"
  // }];

  const [data, setData] = useState(null);

  useEffect(() => {
    // Define the URL for your API endpoint
    const apiUrl = 'http://localhost:5000/api/gettabledata'; // Replace with your API endpoint

    // Make an API call when the component mounts
    axios.get(apiUrl)
      .then(response => {
        // Set the fetched data to the state
        setData(response.data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {data? (
        <div class="page">
          <h1>Customer Data</h1>
          <TableWithSearchAndPagination data={data} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;