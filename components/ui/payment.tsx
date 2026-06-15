import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";

export default function PaymentButton() {
  const handlePayment = () => {
    console.log("Proceeding to payment...");
    // payment gateway redirect
    // router.push("/checkout");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full bg-green-600 hover:bg-green-700">
          Proceed to Payment
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Confirm Your Order
          </AlertDialogTitle>

          <AlertDialogDescription>
            You are about to proceed to payment. Please review your cart items
            before continuing.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>
            Continue Shopping
          </AlertDialogCancel>
            <a href="/payment">
            
            <AlertDialogAction onClick={handlePayment}>
            Pay Now
          </AlertDialogAction>
            </a>
          
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}