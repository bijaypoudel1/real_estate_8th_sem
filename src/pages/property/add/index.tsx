import CustomRadio from "@/components/forms/radio";
import { useState } from "react";
import MapboxMap from "@/components/map";
import ImageUploader from "@/components/imageuploader";
import { useRouter } from "next/router";
import { SucessToast } from "@/components/common/toast";

const AddProperty = () => {
  const router = useRouter();
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [heightLight, setHeightLight] = useState("");
  const [propertylocation, setLocation] = useState("");
  const [area, setArea] = useState("");
  const [roadType, setRoadType] = useState("");
  const [priceOnCall, setPriceOnCall] = useState<any>(false);
  const locationOptions = [
    { value: "koshi", label: "Koshi" },
    { value: "madesh", label: "Madhesh" },
    { value: "Bagmati", label: "Bagmati" },
    { value: "Gandaki", label: "Gandaki" },
    { value: "Lumbini", label: "Lumbini" },
    { value: "Sudurpaschim", label: "Sudurpaschim" },
    { value: "Karnali", label: "Karnali" },
  ];
  const roadOptions = [
    { value: "paved", label: "paved" },
    { value: "blacked topped", label: "blacked topped" },
    { value: "alley", label: "alley" },
    { value: "dhalan", label: "dhalan" },
    { value: "graveled", label: "graveled" },
    { value: "soil", label: "soil" },
  ];

  const heightLightOptions = [
    { value: "koshi", label: "south" },
    { value: "madesh", label: "north" },
    { value: "Bagmati", label: "east" },
    { value: "Gandaki", label: "west" },
    { value: "Lumbini", label: "south-east" },
    { value: "Sudurpaschim", label: "south-west" },
    { value: "Karnali", label: "north-east" },
    { value: "Karnali", label: "north-west" },
  ];

  const categoryOptions = [
    { value: "house", label: "House" },
    { value: "land", label: "Land" },
    { value: "flats", label: "Flats" },
    { value: "appartment", label: "appartment" },
  ];

  return (
    <div className="min-h-[50vh]">
      <div className="flex ">
        <div className="bg-white w-[200px] min-h-[50vh] flex flex-col gap-3 uppercase shadow-lg p-3 mt-2">
          <button className="flex gap-2 hover:bg-blue-300 p-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="currentColor" stroke-width="1.5">
                <path
                  stroke-linecap="round"
                  d="M22 22H2m0-11l8.126-6.5a3 3 0 0 1 3.748 0L22 11m-6.5-5.5v-2A.5.5 0 0 1 16 3h2.5a.5.5 0 0 1 .5.5v5M4 22V9.5M20 22V9.5"
                />
                <path d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14c-1.414 0-2.121 0-2.56.44C9 14.878 9 15.585 9 17v5m5-12.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" />
              </g>
            </svg>
            <p>Home</p>
          </button>
          <button className="flex gap-2 hover:bg-blue-300 p-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  stroke="currentColor"
                  stroke-width="1.5"
                  d="M21 12a8.958 8.958 0 0 1-1.526 5.016A8.991 8.991 0 0 1 12 21a8.991 8.991 0 0 1-7.474-3.984A9 9 0 1 1 21 12Z"
                />
                <path
                  fill="currentColor"
                  d="M13.25 9c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 9h-1.5ZM12 10.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 11.75v-1.5ZM10.75 9c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 9h1.5ZM12 7.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 6.25v1.5ZM5.166 17.856l-.719-.214l-.117.392l.267.31l.569-.488Zm13.668 0l.57.489l.266-.31l-.117-.393l-.719.214ZM9 15.75h6v-1.5H9v1.5Zm0-1.5a4.752 4.752 0 0 0-4.553 3.392l1.438.428A3.252 3.252 0 0 1 9 15.75v-1.5Zm3 6a8.23 8.23 0 0 1-6.265-2.882l-1.138.977A9.73 9.73 0 0 0 12 21.75v-1.5Zm3-4.5c1.47 0 2.715.978 3.115 2.32l1.438-.428A4.752 4.752 0 0 0 15 14.25v1.5Zm3.265 1.618A8.23 8.23 0 0 1 12 20.25v1.5a9.73 9.73 0 0 0 7.403-3.405l-1.138-.977Z"
                />
              </g>
            </svg>
            <p>My Profile</p>
          </button>
          <button className="flex gap-2 hover:bg-blue-300 p-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M14 5V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v1C3.8 5 2 6.8 2 9v11c0 1.1.9 2 2 2h11.2l-2-2H4v-4h2v2h1v-2h5v-1H4V9c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v3h2V9c0-2.2-1.8-4-4-4m-2 0H8V4h4v1m-2 4l-2 2l2 2l2-2l-2-2m11.8 8.8l-3.6-3.6c-.2-.1-.4-.2-.6-.2h-2.8c-.4 0-.8.4-.8.8v2.8c0 .2.1.4.2.6l3.6 3.6c.1.1.3.2.6.2c.2 0 .4-.1.6-.2l2.8-2.8c.1-.1.2-.3.2-.6c0-.2-.1-.4-.2-.6M15.4 16c-.3 0-.6-.3-.6-.6s.3-.6.6-.6s.6.3.6.6s-.3.6-.6.6Z"
              />
            </svg>
            <p>My Properties</p>
          </button>
          <button className="flex gap-2 hover:bg-blue-300 p-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M178 28c-20.09 0-37.92 7.93-50 21.56C115.92 35.93 98.09 28 78 28a66.08 66.08 0 0 0-66 66c0 72.34 105.81 130.14 110.31 132.57a12 12 0 0 0 11.38 0C138.19 224.14 244 166.34 244 94a66.08 66.08 0 0 0-66-66Zm-5.49 142.36a328.69 328.69 0 0 1-44.51 31.8a328.69 328.69 0 0 1-44.51-31.8C61.82 151.77 36 123.42 36 94a42 42 0 0 1 42-42c17.8 0 32.7 9.4 38.89 24.54a12 12 0 0 0 22.22 0C145.3 61.4 160.2 52 178 52a42 42 0 0 1 42 42c0 29.42-25.82 57.77-47.49 76.36Z"
              />
            </svg>
            <p>My Favoriete</p>
          </button>
        </div>
        {/* add */}
        <div className="p-10 w-full ">
          <h1 className="text-2xl w-full font-bold text-blue-400">
            Add Property
          </h1>
          <div className="h-0.5 w-full bg-gray-200"></div>
          {/* property overview */}
          <div className="mt-6">
            <p className="text-blue-400">Property Overview</p>
            {/* type */}
            <div className="mt-3">
              <p className="text-sm text-gray-900">FOR</p>
              <div className="cursor-pointer mt-3 w-fit">
                <CustomRadio
                  value={type}
                  setValue={setType}
                  radioOptions={[
                    { value: "rent", label: "rent" },
                    { value: "sell", label: "Sell" },
                  ]}
                />
              </div>
            </div>
            {/* category */}
            <div className="mt-3">
              <p className="text-sm text-gray-900">PROPERTY CATEGORY</p>
              <div className="cursor-pointer mt-3 w-fit">
                <CustomRadio
                  value={category}
                  setValue={setCategory}
                  radioOptions={categoryOptions}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {/* land type */}
            <div className="mt-3">
              <p className="project_label__DEjnY">Land Type*</p>
              <select className="undefined">
                <option selected disabled value="">
                  Select a Land Type
                </option>
                <option value="Agricultural">Agricultural</option>
                <option value="Commercial">Commercial</option>
                <option value="Others">Others</option>
              </select>
            </div>
            {/* location */}
            <div className="mt-3">
              <p className="text-sm text-gray-900">PROPERTY LOCATION</p>
              <div className="cursor-pointer mt-3 w-fit">
                <CustomRadio
                  value={propertylocation}
                  setValue={setLocation}
                  radioOptions={locationOptions}
                />
              </div>
            </div>
            {/* district and muncipility */}
            <div className="flex gap-10 items-center">
              <div className="mt-3">
                <p className="project_label__DEjnY">DISTRICT</p>
                <select>
                  <option disabled selected value="">
                    Select a district
                  </option>
                  <option value="Mechi">Mechi</option>
                  <option value="Biratnagar">Biratnagar</option>
                  <option value="Taplejung">Taplejung</option>
                  <option value="Dhankuta">Dhankuta</option>
                  <option value="Bhojpur">Bhojpur</option>
                  <option value="Hanumannagar">Hanumannagar</option>
                  <option value="Sagarmatha">Sagarmatha</option>
                  <option value="Janakpur">Janakpur</option>
                  <option value="Dolakha">Dolakha</option>
                  <option value="Chautara">Chautara</option>
                  <option value="Kathmandu">Kathmandu</option>
                  <option value="Bara">Bara</option>
                  <option value="Trishuli">Trishuli</option>
                  <option value="Rapti">Rapti</option>
                  <option value="Gorkha">Gorkha</option>
                  <option value="Pokhara">Pokhara</option>
                  <option value="Syangja">Syangja</option>
                  <option value="Lumbini">Lumbini</option>
                  <option value="Baglung">Baglung</option>
                  <option value="Gulmi">Gulmi</option>
                  <option value="Kapilavastu">Kapilavastu</option>
                  <option value="Pyuthan">Pyuthan</option>
                  <option value="Humla">Humla</option>
                  <option value="Karnali">Karnali</option>
                  <option value="Jajarkot">Jajarkot</option>
                  <option value="Salyan">Salyan</option>
                  <option value="Dailekh">Dailekh</option>
                  <option value="Nepalganj">Nepalganj</option>
                  <option value="Bajhang">Bajhang</option>
                  <option value="Doti">Doti</option>
                  <option value="Dhangadhi">Dhangadhi</option>
                  <option value="Mahakali">Mahakali</option>
                </select>
              </div>
              <div className="mt-3">
                <p className="project_label__DEjnY">MUNCIPILITY</p>
                <select>
                  <option disabled selected value="">
                    Select a muncipility
                  </option>
                  <option value="Bhadrapur">Bhadrapur Municipality</option>
                  <option value="Mechinagar">Mechinagar Municipality</option>
                  <option value="Kankai">Kankai Municipality</option>
                  <option value="Damak">Damak Municipality</option>
                  <option value="Arjundhara">Arjundhara Municipality</option>
                </select>
              </div>
            </div>
            {/* heightlight */}
            <div className="mt-3">
              <p className="text-sm text-gray-900">PROPERTY HEIGHTLIGHT</p>
              <div className="cursor-pointer mt-3 w-fit">
                <CustomRadio
                  value={heightLight}
                  setValue={setHeightLight}
                  radioOptions={heightLightOptions}
                />
              </div>
            </div>
            {/* area */}
            <div className="mt-3">
              <p className="text-sm text-gray-900">PROPERTY AREA</p>
              <div className="cursor-pointer mt-3 w-fit">
                <CustomRadio
                  value={area}
                  setValue={setArea}
                  radioOptions={[
                    { value: "hill", label: "hill" },
                    { value: "terai", label: "terai" },
                    { value: "mountain", label: "mountain" },
                  ]}
                />
              </div>
            </div>

            {/* total area */}
            <div className="">
              <p>Area</p>
              <div className="flex gap-10">
                <div className="flex gap-2 items-center">
                  <input
                    type="number"
                    className="border-b w-32 mt-1 border-b-gray-900 outline-none"
                  />
                  <p>BIGHA</p>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="number"
                    className="border-b w-32 mt-1 border-b-gray-900 outline-none"
                  />
                  <p>KATHA</p>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="number"
                    className="border-b w-32 mt-1 border-b-gray-900 outline-none"
                  />
                  <p>DHUR</p>
                </div>
              </div>
            </div>

            {/* location select */}
            <div className="h-[70vh]">
              <MapboxMap />
            </div>
            {/* raod type */}
            <div className="mt-3">
              <p className="text-sm text-gray-900">ROAD TYPE</p>
              <div className="cursor-pointer mt-3 w-fit">
                <CustomRadio
                  value={roadType}
                  setValue={setRoadType}
                  radioOptions={roadOptions}
                />
              </div>
            </div>
            {/* image */}
            <ImageUploader />
            {/* payment */}
            <div className="">
              <p className="text-sm mb-2 text-gray-900">PAYMENT STRUCTURE</p>
              <label className="">Price on call</label>
              <input
                value={priceOnCall}
                onChange={(e) => setPriceOnCall(e.target.checked)}
                type="checkbox"
                className="h-5 ml-3 w-5"
              />
            </div>
            {/* price */}
            {!priceOnCall && (
              <div className="">
                <p>Price</p>
                <input
                  type="number"
                  className="border-b w-44 mt-1 border-b-gray-900 outline-none"
                />
              </div>
            )}
            {/* title */}
            <div className="">
              <p>Title</p>
              <input
                type="text"
                className="border-b w-full mt-1 border-b-gray-900 outline-none"
              />
            </div>
            <div className="mt-4">
              <button
                onClick={() => {
                  router.push("/");
                  SucessToast("Property Added Sucessfully");
                }}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                ADD PROPERTY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddProperty;
