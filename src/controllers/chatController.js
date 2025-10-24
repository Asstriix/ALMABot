
import { v4 as uuidv4 } from "uuid";

export const getChatView = (req, res) => {
  res.render("chat", { title: "ALMA · Psicoanalista virtual" });
};

export const postMessage = async (req, res) => {
  try{
    const { message } = req.body || {};
    if (!message) return res.status(400).json({ ok:false, error:"message requerido" });

    let sid = req.cookies?.sid;
    if (!sid){
      sid = "sess_" + uuidv4().replace(/-/g,"").slice(0,16);
      res.cookie("sid", sid, { httpOnly:true, sameSite:"lax", secure:false, maxAge: 180*24*3600*1000 });
    }

    const r = await fetch(process.env.N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "content-type":"application/json", "accept":"application/json" },
      body: JSON.stringify({ message, sessionId: sid }),
      cache: "no-store"
    });

    const text = await r.text();
    let data;
    try { data = text ? JSON.parse(text) : { ok:false, error:"empty_response" }; }
    catch { data = { ok:false, error:"invalid_json", raw: text }; }

    return res.status(200).json(data);
  }catch(e){
    return res.status(200).json({ ok:false, error:"webhook_failed" });
  }
};
