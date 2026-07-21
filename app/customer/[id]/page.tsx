import { supabase } from "@/lib/supabase";
import PurchaseButton from "./PurchaseButton";
import QRCode from "./QRCode";


export default async function CustomerPage({

  params,

}: {

  params: Promise<{ id: string }>

}) {


  const { id } = await params;


  const { data: customer } = await supabase
    .from("customers")
    .select("*")
    .eq("id", id)
    .single();



  if (!customer) {

    return (

      <main className="min-h-screen flex items-center justify-center">

        <h1 className="text-3xl font-bold">
          Customer Not Found
        </h1>

      </main>

    );

  }



  return (

    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white p-6">

      <div className="max-w-md mx-auto">


        <div className="bg-white rounded-3xl shadow-xl p-8">


          <h1 className="text-3xl font-bold">
            ☕ HAYK
          </h1>


          <p className="text-gray-500">
            Loyalty Club
          </p>



          <div className="mt-8">


            <h2 className="text-2xl font-bold">
              {customer.NAME}
            </h2>


            <p className="mt-3">
              📞 {customer.PHONE}
            </p>



            <div className="mt-6 bg-yellow-100 rounded-2xl p-5">


              <p>
                Current Points
              </p>


              <p className="text-4xl font-bold text-yellow-700">
                {customer.points ?? 0}
              </p>


            </div>



            <div className="mt-6 bg-orange-100 rounded-2xl p-5">


              <p>
                Drinks
              </p>


              <p className="text-4xl font-bold text-orange-700">
                {customer.DRINKS ?? 0}
              </p>


            </div>



            <PurchaseButton id={id} />


            <QRCode id={id} />


          </div>


        </div>


      </div>


    </main>

  );

}