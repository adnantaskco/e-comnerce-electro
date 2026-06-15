import { FieldDemo } from "@/components/ui/paymentfield";
import React from "react";

function Page() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="mx-auto w-full max-w-2xl rounded-lg border p-6 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold">
            Payment Details
          </h2>

          <FieldDemo />
        </div>
      </div>
    </section>
  );
}

export default Page;