import { supabase } from "@/lib/supabase";
import QRCode from "./QRCode";

export default async function CustomerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: customer } = await supabase
    .from("customers")
    .select("*")
    .eq("id", id)
    .single();

  if (!customer) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#F8F6F2]">
        <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
          <h1 className="text-3xl font-bold text-[#3A2414]">
            Customer Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            This customer does not exist.
          </p>
        </div>
      </main>
    );
  }

  const customerName = customer.name ?? customer.NAME ?? "";
  const customerPhone = customer.phone ?? customer.PHONE ?? "";
  const points = customer.points ?? 0;
  const drinks = customer.drinks ?? customer.DRINKS ?? 0;

  const nextReward = 100;
  const progress = Math.min((points / nextReward) * 100, 100);

  return (
    <main className="min-h-screen bg-[#F8F6F2] py-10 px-5">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden">
          <div className="bg-[#3A2414] text-white p-8">
            <h1 className="text-4xl font-black tracking-wide">
              HAYK
            </h1>

            <p className="opacity-80 mt-1">
              Loyalty Club
            </p>

            <div className="mt-8">
              <h2 className="text-3xl font-bold">
                {customerName}
              </h2>

              <p className="opacity-80 mt-2">
                {customerPhone}
              </p>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-orange-100 p-6">
                <p className="text-gray-600">
                  Coffees
                </p>

                <p className="text-4xl font-black text-orange-700 mt-2">
                  {drinks}
                </p>
              </div>

              <div className="rounded-3xl bg-yellow-100 p-6">
                <p className="text-gray-600">
                  Points
                </p>

                <p className="text-4xl font-black text-yellow-700 mt-2">
                  {points}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">
                  Next Reward
                </span>

                <span className="font-bold">
                  {points}/{nextReward}
                </span>
              </div>

              <div className="w-full h-4 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className="h-full bg-[#3A2414] transition-all duration-500"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>

              <p className="text-sm text-gray-500 mt-3">
                {Math.max(nextReward - points, 0)} points until your next free coffee.
              </p>
            </div>

            <QRCode id={id} />

        

            <div className="mt-10 rounded-3xl bg-[#F8F6F2] p-6">
              <h3 className="font-bold text-xl mb-4">
                Rewards
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>☕ Free Espresso</span>
                  <span>100 pts</span>
                </div>

                <div className="flex justify-between">
                  <span>🥐 Free Croissant</span>
                  <span>200 pts</span>
                </div>

                <div className="flex justify-between">
                  <span>🎁 Premium Gift</span>
                  <span>500 pts</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}