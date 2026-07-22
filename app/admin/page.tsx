import Link from "next/link";
import { supabase } from "@/lib/supabase";
import AddCustomer from "./AddCustomer";
import CustomerQR from "./CustomerQR";
import PurchaseButton from "./PurchaseButton";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const { data: customers, error } = await supabase
    .from("customers")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-600">
          Database Error
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-orange-50 p-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Γÿò HAYK Loyalty Admin
        </h1>

        <AddCustomer />

        <div className="space-y-6">

          {customers?.map((customer) => (

            <div
              key={customer.id}
              className="bg-white rounded-3xl shadow-lg p-6 flex justify-between"
            >

              <div>

                <h2 className="text-2xl font-bold">
                  {customer.NAME}
                </h2>

                <p className="text-gray-500 mt-1">
                  ≡ƒô₧ {customer.PHONE}
                </p>

                <div className="mt-4 flex gap-8">

                  <div>
                    <p className="text-gray-500">
                      Drinks
                    </p>

                    <p className="text-3xl font-bold text-orange-600">
                      {customer.DRINKS ?? 0}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500">
                      Points
                    </p>

                    <p className="text-3xl font-bold text-yellow-600">
                      {customer.points ?? 0}
                    </p>
                  </div>

                </div>

                <div className="flex gap-3 mt-6">

                  <Link
                    href={`/customer/${customer.id}`}
                    className="bg-black text-white px-5 py-3 rounded-xl"
                  >
                    Open
                  </Link>

                  <PurchaseButton id={customer.id} />

                </div>

              </div>

              <CustomerQR id={customer.id} />

            </div>

          ))}

        </div>

      </div>
    </main>
  );
}
