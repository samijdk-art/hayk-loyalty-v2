"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function AddCustomer() {

  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");



  async function handleSubmit() {


    if (!name || !phone) {

      setMessage("Please enter name and phone");

      return;

    }



    setSaving(true);

    setMessage("");



    try {


      const res = await fetch("/api/customer", {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

        },


        body: JSON.stringify({

          NAME: name,

          PHONE: phone,

        }),


      });



      if (!res.ok) {

        const error = await res.json();

        setMessage(error.error || "Save failed");

        setSaving(false);

        return;

      }



      setName("");

      setPhone("");

      setMessage("Customer saved successfully");


      router.refresh();



    } catch (error) {


      setMessage("Server error");


    }



    setSaving(false);


  }



  return (


    <div className="bg-white rounded-3xl shadow p-6 mb-8">


      <h2 className="text-2xl font-bold mb-5">

        Add Customer

      </h2>



      <input

        className="
        border
        rounded-xl
        p-3
        w-full
        mb-3
        "

        placeholder="Customer Name"

        value={name}

        onChange={(e) => setName(e.target.value)}

      />



      <input

        className="
        border
        rounded-xl
        p-3
        w-full
        mb-4
        "

        placeholder="Phone Number"

        value={phone}

        onChange={(e) => setPhone(e.target.value)}

      />



      <button


        onClick={handleSubmit}


        disabled={saving}


        className="
        bg-black
        text-white
        rounded-xl
        px-6
        py-3
        "


      >

        {saving ? "Saving..." : "Save Customer"}


      </button>



      {message && (

        <p className="mt-4 text-sm text-gray-600">

          {message}

        </p>

      )}



    </div>


  );

}