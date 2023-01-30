import Link from "next/link";
import {useRouter} from 'next/navigation';

export default function DashboardLayout({
    children
} :{
    children: React.ReactNode
}
){
    const router = useRouter();
    return <div>
        {/* Add Sidebard */}
        <section>

        </section>
        {/* Navigation Links */}
        <section>
            <nav>
                <Link href="/dashboard/profile">Profile</Link> |
                <Link href="/dashboard/settings">Settings</Link> |
                <Link href="/dashboard/checkout">Checkout</Link> |
                <Link href="/dashboard/order">Order</Link> |
                <Link href="/dashboard/products">products</Link> |
                {/* <Link href="/">Go back to Home</Link> */}
                <button onClick={() => router.push('/')}>Go back to Home</button>
            </nav>
        </section>
        <section>
            {children}
        </section>
    </div>
}