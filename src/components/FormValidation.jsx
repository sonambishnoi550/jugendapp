import React, { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    date: "",
    location: "",
    price: "",
    details: "",
  });
  const [selectedImages, setSelectedImages] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleImageChange = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
    setSelectedImages([...selectedImages, ...newImages]);
  };
  const triggerFileInput = () => {
    document.getElementById("imageInput").click();
  };
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleOptionSelect = (option) => {
    setFormData({ ...formData, category: option });
    setIsDropdownOpen(false);
  };
  return (
    <div className="bg-offwhite py-[60px]">
      <div className="container">
        <h1 className="font-bold text-4xl leading-custom-md text-naturalblack text-center pb-5">
          Event einsenden</h1>
        <p className="text-xl leading-custom-lg max-w-[768px] mx-auto text-center text-gray font-light pb-5 max-sm:text-base">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <div className="max-w-[768px] mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="border-dotted border-lightgray border-2 rounded-[30px] flex py-2 px-4 max-sm:px-[10px] max-sm:gap-3 gap-4 mb-5 max-w-[768px] mx-auto">
              {selectedImages.map((image, index) => (
                <img key={index} className="rounded-[20px] max-w-[96px]" src={image} alt={`Selected Image ${index + 1}`} />))}
              <button type="button" onClick={triggerFileInput} className="border-dotted border-lightgray border-2 rounded-[20px] py-10 px-10 relative z-10">
                <img src="./assets/images/svg/plus-icon.svg" alt="plus" /></button>
            </div>
            <input id="imageInput" type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageChange} multiple />
            <div className="flex p-4 rounded-[30px] border-lightgray border bg-white mb-5 max-sm:mb-3 relative">
              <input className="w-full outline-none text-sm font-bold" type="text" name="category" placeholder="Kategorie" value={formData.category} onChange={handleChange} />
              <button type="button" onClick={handleDropdownToggle} className="relative z-10">
                <img src="./assets/images/svg/kategorie.svg" alt="icon" /></button>
              {isDropdownOpen && (
                <div className="absolute bg-white border border-gray-300 rounded-[10px] mt-2 w-[150px] z-10 right-[4%] top-[4%]">
                  <ul>
                    <li className="p-2 cursor-pointer text-sm font-bold" onClick={() => handleOptionSelect('Food')}> Food </li>
                    <li className="p-2 cursor-pointer text-sm font-bold" onClick={() => handleOptionSelect('Travel')} > Travel </li>
                    <li className="p-2 cursor-pointer text-sm font-bold" onClick={() => handleOptionSelect('Movies')} > Movies</li>
                  </ul>
                </div>)}
            </div>
            <div className="sm:flex gap-5 mb-5 max-sm:mb-3">
              <input className="py-[17.5px] pl-4 max-sm:w-full max-sm:mb-3  rounded-[30px] border-lightgray border outline-none text-sm font-bold w-[50%]"
                type="text" required name="title" placeholder="Titel" value={formData.title} onChange={handleChange} />
              <input className="py-[17.5px] pl-4 max-sm:w-full rounded-[30px] border-lightgray border outline-none text-sm font-bold w-[50%]"
                type="text" required name="date" placeholder="Datum" value={formData.date} onChange={handleChange} />
            </div>
            <div className="sm:flex gap-5 pb-5 max-sm:pb-3">
              <input className="py-[17.5px] pl-4 max-sm:w-full max-sm:mb-3 rounded-[30px] border-lightgray border outline-none text-sm font-bold w-[50%]"
                type="text" required name="location" placeholder="Standort" value={formData.location} onChange={handleChange} />
              <input className="py-[17.5px] pl-4 max-sm:w-full rounded-[30px] border-lightgray border outline-none text-sm font-bold w-[50%]"
                type="text" required name="price" placeholder="Preis" value={formData.price} onChange={handleChange} />
            </div>
            <textarea
              className="w-full py-[55.5px] max-sm:pt-10 max-sm:pb-5 mb-5 leading-6 text-sm font-bold resize-none outline-none pl-4 rounded-[30px] border-lightgray border text-gray"
              placeholder="Details zur Veranstaltung" name="details" value={formData.details} onChange={handleChange} ></textarea>
            <button className="py-4 px-[115px] max-sm:px-0 max-sm:w-full text-center rounded-[30px] mx-auto bg-custom-gradient sm:flex font-bold text-white">
              Event einsenden </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default FormValidation;