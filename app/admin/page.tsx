import Link from "next/link";
import { supabase } from "@/lib/supabase";
import AddCustomer from "./AddCustomer";
import CustomerQR from "./CustomerQR";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const { data: customers, error } = await supabase
    .from("customers")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    console.log("ADMIN ERROR:", error);

    return (
      <main className="min-h-screen flex items-center justify-center bg-red-50">
        <h1 className="text-2xl font-bold text-red-600">
          Database Error
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-orange-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          ☕ HAYK Loyalty Admin
        </h1>

        <AddCustomer />

        <div className="space-y-6">
          {customers?.map((customer) => (
            <div
              key={customer.id}
              className="bg-white rounded-3xl shadow p-6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold">
                    {customer.NAME}
                  </h2>

                  <p>📞 {customer.PHONE}</p>

                  <p className="mt-2">
                    ☕ Drinks: {customer.DRINKS ?? 0}
                  </p>

                  <p>
                    ⭐ Points: {customer.points ?? 0}
                  </p>

                  <Link
                    href={`/customer/${customer.id}`}
                    className="inline-block mt-4 bg-black text-white px-5 py-3 rounded-xl"
                  >
                    Open Customer
                  </Link>
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