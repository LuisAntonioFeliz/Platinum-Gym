import { protegerRuta } from "../middleware/auth.js";

router.get("/", protegerRuta, async (req, res) => {
    const clientes = await Cliente.find();
    res.json({ success: true, data: clientes });
});
