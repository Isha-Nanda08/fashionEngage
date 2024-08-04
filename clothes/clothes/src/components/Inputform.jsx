import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import CardInput from "./CardInput";
 
export default function Inputform() {
  return (
     <div className="  my-4 h-auto w-auto  p-16 rounded-lg ">
  <div className=" grid grid-cols-2 gap-2 font-serif">
    <div className="flex items-start flex-col justify-center ">
       <label className="text-lg font-bold   mx-1" htmlFor="">Title</label>
       <input className="border border-gray-700 rounded-lg p-2 h-8 w-54" type="text" placeholder="Floral dress..." />
    </div>
    <div className="flex items-start flex-col justify-center ">
       <label className="text-lg font-bold   mx-1" htmlFor="">Sizes</label>
       <input className="border border-gray-700 rounded-lg p-2 h-8 w-54" type="text" placeholder="AS, S, M, L..." />
    </div>
    <div className="flex items-start flex-col justify-center ">
       <label className="text-lg font-bold   mx-1" htmlFor="">Cloth Material</label>
       <input className="border border-gray-700 rounded-lg p-2 h-8 w-54" type="text" placeholder="Cotton..." />
    </div>
    <div className="flex items-start flex-col justify-center ">
       <label className="text-lg font-bold   mx-1" htmlFor="">Price</label>
       <input className="border border-gray-700 rounded-lg p-2 h-8 w-54" type="text" placeholder="Rupees 500..." />
    </div>
    <div className="flex items-start flex-col justify-center ">
       <label className="text-lg font-bold   mx-1" htmlFor="">Description</label>
       <textarea className="border border-gray-700 rounded-lg p-2  min-h-32 max-h-32" type="text" placeholder="Describe your design" />
    </div>
    <CardInput/>
  </div>
    </div>
  );
}