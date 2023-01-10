import React, { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  const [showDrugstore, setShowDrugstore] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [showOnline, setShowOnline] = useState(false);
  const [showOther, setShowOther] = useState(false);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://feedbackform.herokuapp.com/all", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  }, []);
  console.log(data);
  const handleDrugstoreClick = () => {
    setShowDrugstore(true);
    setShowProduct(false);
    setShowOnline(false);
    setShowOther(false);
  };
  const handleProductClick = () => {
    setShowDrugstore(false);
    setShowProduct(true);
    setShowOnline(false);
    setShowOther(false);
  };
  const handleOnlineClick = () => {
    setShowDrugstore(false);
    setShowProduct(false);
    setShowOnline(true);
    setShowOther(false);
  };
  const handleOtherClick = () => {
    setShowDrugstore(false);
    setShowProduct(false);
    setShowOnline(false);
    setShowOther(true);
  };
  return (
    <div className="App">
      <div className="header w-full flex m-2 justify-center">
        <button
          className="p-2 rounded-xl bg-green m-2 text-white"
          onClick={handleDrugstoreClick}
        >
          აფთიაქი
        </button>
        <button
          className="p-2 rounded-xl bg-green m-2 text-white"
          onClick={handleProductClick}
        >
          პროდუქცია
        </button>
        <button
          className="p-2 rounded-xl bg-green m-2 text-white"
          onClick={handleOnlineClick}
        >
          ონლაინ მაღაზია
        </button>
        <button
          className="p-2 rounded-xl bg-green m-2 text-white"
          onClick={handleOtherClick}
        >
          სხვა
        </button>
      </div>
      <div className="flex justify-center"> 
      {showDrugstore &&
        data
          .filter((item) => item.formAbout === "სააფთიაქო სერვისი")
          .map((item) => (
            <div
              key={item._id}
              className="p-2 m-2 flex flex-col items-center bg-readableBg text-white w-1/4 rounded-xl drop-shadow-xl"
            >
              <div>აფთიაქი : {item.drugStoreInfo}</div>
              <div>ვიზიტის დრო : {item.visitTime}</div>
              <div>არის ანონიმური : {item.anonim ? "დიახ" : "არა"}</div>
              <div>უნდა დაკავშირება : {item.contactInfo}</div>
              <div>საკონტაქტო : {item.howToContact}</div>
              <div>შეტყობინება : {item.message}</div>
              <div className="flex">
                <button className="p-2 rounded-xl bg-purple m-2 text-white">
                  წაშლა
                </button>
                <button className="p-2 rounded-xl bg-blue m-2 text-white">
                  დაარქივება
                </button>
                <button className="p-2 rounded-xl bg-green m-2 text-white">
                  პასუხის გაცემა
                </button>
              </div>
            </div>
          ))}
        
      {showProduct &&
        data
          .filter((item) => item.formAbout === "პროდუქცია")
          .map((item) => (
            <div
              key={item._id}
              className="p-2 m-2 flex flex-col items-center bg-readableBg text-white w-1/4 rounded-xl drop-shadow-xl"
            >
              <div>ბრენდი : {item.brandName}</div>
              <div>არის ანონიმური : {item.anonim ? "დიახ" : "არა"}</div>
              <div>უნდა დაკავშირება : {item.contactInfo}</div>
              <div>საკონტაქტო : {item.howToContact}</div>
              <div>შეტყობინება : {item.message}</div>
              <div className="flex">
                <button className="p-2 rounded-xl bg-purple m-2 text-white">
                  წაშლა
                </button>
                <button className="p-2 rounded-xl bg-blue m-2 text-white">
                  დაარქივება
                </button>
                <button className="p-2 rounded-xl bg-green m-2 text-white">
                  პასუხის გაცემა
                </button>
              </div>
            </div>
          ))}
      {showOnline &&
        data
          .filter((item) => item.formAbout === "ვებ-გვერდი")
          .map((item) => (
            <div
              key={item._id}
              className="p-2 m-2 flex flex-col items-center bg-readableBg text-white w-1/4 rounded-xl drop-shadow-xl"
            >
              <div>არის ანონიმური : {item.anonim ? "დიახ" : "არა"}</div>
              <div>უნდა დაკავშირება : {item.contactInfo}</div>
              <div>საკონტაქტო : {item.howToContact}</div>
              <div>შეტყობინება : {item.message}</div>
              <div className="flex">
                <button className="p-2 rounded-xl bg-purple m-2 text-white">
                  წაშლა
                </button>
                <button className="p-2 rounded-xl bg-blue m-2 text-white">
                  დაარქივება
                </button>
                <button className="p-2 rounded-xl bg-green m-2 text-white">
                  პასუხის გაცემა
                </button>
              </div>
            </div>
          ))}

      {showOther &&
        data
          .filter((item) => item.formAbout === "სხვა")
          .map((item) => (
            <div
              key={item._id}
              className="p-2 m-2 flex flex-col items-center bg-readableBg text-white w-1/4 rounded-xl drop-shadow-xl"
            >
              <div>არის ანონიმური : {item.anonim ? "დიახ" : "არა"}</div>
              <div>უნდა დაკავშირება : {item.contactInfo}</div>
              <div>საკონტაქტო : {item.howToContact}</div>
              <div>შეტყობინება : {item.message}</div>
              <div className="flex">
                <button className="p-2 rounded-xl bg-purple m-2 text-white">
                  წაშლა
                </button>
                <button className="p-2 rounded-xl bg-blue m-2 text-white">
                  დაარქივება
                </button>
                <button className="p-2 rounded-xl bg-green m-2 text-white">
                  პასუხის გაცემა
                </button>
              </div>
            </div>
          ))}
            </div>
    </div>
  );
}

export default App;
