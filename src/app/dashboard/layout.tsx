export default function DashboardLayout({
    children
} :{
    children: React.ReactNode
}
){
    return <div>
        {/* Add Sidebard */}
        <section>

        </section>
        {/* Navigation Links */}
        <section>
            <nav>
                <a href="/profile">Profile</a> |
                <a href="/settings">Settings</a> |
                <a href="/checkout">Checkout</a> |
                <a href="/order">Order</a> |
                <a href="/products">products</a>
            </nav>
        </section>
        <section>
            {children}
        </section>
    </div>
}