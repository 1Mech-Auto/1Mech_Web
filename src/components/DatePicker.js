import React,{useState} from 'react'

const DatePicker = ({ label }) => {
  const [date, setDate] = useState("2022-03-30");

  return (
    <div className="text-sm grid gap-2">
      <label>{label}</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="flex items-center outline-none border relative text-[#8094ae] py-2 px-2 rounded-md font-medium capitalize"
      />
    </div>
  );
};

export default DatePicker