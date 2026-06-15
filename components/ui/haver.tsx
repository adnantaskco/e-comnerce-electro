import CartPage from "@/app/cart/page"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { FiShoppingBag } from "react-icons/fi"

export function HoverCardDemo() {
  return (
    <HoverCard openDelay={10} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button variant="link"><FiShoppingBag size={24} /></Button>
      </HoverCardTrigger>
      <HoverCardContent className=" w-400 h-104 ">
        
       <CartPage></CartPage>
      </HoverCardContent>
    </HoverCard>
  )
}
