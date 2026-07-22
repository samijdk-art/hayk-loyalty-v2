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
      <main className="min-h-screen flex items-center justify-center bg-stone-100">
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h1 className="text-3xl font-bold text-red-600">
            Database Error
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-100 via-orange-50 to-amber-100">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}

        <div className="mb-10">

          <p className="uppercase tracking-[8px] text-amber-700 font-semibold">
            HAYK
          </p>

          <h1 className="text-5xl font-bold mt-2">
            Loyalty Dashboard
          </h1>

          <p className="text-gray-600 mt-3 text-lg">
            Manage customers, points and rewards.
          </p>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white rounded-3xl p-7 shadow-lg">

            <p className="text-gray-500">
              Customers
            </p>

            <h2 className="text-5xl font-bold mt-3">
              {customers?.length ?? 0}
            </h2>

          </div>

          <div className="bg-white rounded-3xl p-7 shadow-lg">

            <p className="text-gray-500">
              Total Drinks
            </p>

            <h2 className="text-5xl font-bold mt-3 text-orange-600">

              {customers?.reduce(
                (sum, c) => sum + (c.DRINKS ?? 0),
                0
              )}

            </h2>

          </div>

          <div className="bg-white rounded-3xl p-7 shadow-lg">

            <p className="text-gray-500">
              Total Points
            </p>

            <h2 className="text-5xl font-bold mt-3 text-yellow-600">

              {customers?.reduce(
                (sum, c) => sum + (c.points ?? 0),
                0
              )}

            </h2>

          </div>

        </div>

        {/* Add Customer */}

        <div className="mb-10">
          <AddCustomer />
        </div>

        {/* Customers */}

        <div className="grid lg:grid-cols-2 gap-8">

          {customers?.map((customer) => (

            <div
              key={customer.id}
              className="bg-white rounded-[30px] shadow-xl hover:shadow-2xl transition-all duration-300 p-7"
            >

              <div className="flex justify-between items-start gap-6">

                <div className="flex-1">

                  <div className="flex items-center gap-4">

                    <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-2xl font-bold text-amber-700">

                      {customer.NAME?.charAt(0)}

                    </div>

                    <div>

                      <h2 className="text-2xl font-bold">

                        {customer.NAME}

                      </h2>

                      <p className="text-gray-500 mt-1">

                        {customer.PHONE}

                      </p>

                    </div>

                  </div>

                  <div className="grid grid-cols-2 gap-5 mt-8">

                    <div className="rounded-2xl bg-orange-50 p-5">

                      <p className="text-gray-500">
                        Drinks
                      </p>

                      <p className="text-4xl font-bold text-orange-600 mt-2">
                        {customer.DRINKS ?? 0}
                      </p>

                    </div>

                    <div className="rounded-2xl bg-yellow-50 p-5">

                      <p className="text-gray-500">
                        Points
                      </p>

                      <p className="text-4xl font-bold text-yellow-600 mt-2">
                        {customer.points ?? 0}
                      </p>

                    </div>

                  </div>

                  <div className="flex flex-wrap gap-3 mt-8">

                    <Link
                      href={`/customer/${customer.id}`}
                      className="px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition"
                    >
                      Open Card
                    </Link>

                    <PurchaseButton id={customer.id} />

                  </div>

                </div>

                <CustomerQR id={customer.id} />

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}