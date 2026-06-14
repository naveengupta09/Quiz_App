import { Webhook } from 'svix';
import User from '../model/User.js';

export const clerkWebhook = async (req, res) => {
    try{
        console.log("Received Clerk webhook");
        const WEBHOOL_SECRET = process.env.CLERK_WEBHOOK_SECRET;
        const payload = req.body.toString();
        const header = req.headers;

        const wh = new Webhook(WEBHOOL_SECRET);
        
const evt = wh.verify(payload, {
    "svix-id": headers["svix-id"],
    "svix-timestamp": headers["svix-timestamp"],
    "svix-signature": headers["svix-signature"],
});
const { type, data } = evt;
console.log("EVENT TYPE:", type);

if(type === "user.created") {
    const primaryEmail = data.email_addresses?.find((e) => e.id === data.primary_email_address_id)?.email_address || "";

    const role = primaryEmail === "naveenkumar54111@gmail.com" ? "admin" : "user";

    await User.filterOneAndUpdate(
        { clerkId: data.id },
        {
            clerkId: data.id,
            email: primaryEmail,
            fullName: `${data.first_name || ""} ${data.last_name || ""}`,
            role: role
        },
        { upsert: true, new: true }
    );
}

if(type === "session.created") {
    console.log("LOGIN DETECTED");
    await User.findOneAndUpdate(
        { clerkId: data.user_id },
        {
            clerkId: data.user_id,
            isLoggedIn: true
        },
        {upsert: true, new: true}
    );
}

if(type === "session.ended") {
    console.log("LOGOUT DETECTED");
    await User.findOneAndUpdate(
        { clerkId: data.user_id },
        { isLoggedIn: false }
    );
}

if(type === "session.removed") {
    console.log("LOGOUT DETECTED");
    await User.findOneAndUpdate(
        { clerkId: data.user_id },
        { isLoggedIn: false }
    );
}
        res.status(200).json({ success: true });
    }
    catch (err) {
        console.error("Webhook error:", err);
        res.status(400).json({ message: "Webhook error" });
    }
}