export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const allowed = new Set(["ArmChair_01", "Barrel_01"]);
  const asset = String(req.query?.asset || "");
  if (!allowed.has(asset)) {
    return res.status(400).json({ error: "Unsupported asset id" });
  }

  try {
    const upstream = await fetch("https://api.polyhaven.com/files/" + encodeURIComponent(asset), {
      headers: {
        "Accept": "application/json",
        "User-Agent": "MICROVERSE-COMPLETE/1.0 (https://github.com/rakhan17/Microverse)"
      }
    });
    if (!upstream.ok) {
      return res.status(upstream.status).json({ error: "Poly Haven request failed" });
    }
    const data = await upstream.json();
    res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=604800");
    res.setHeader("X-Asset-Source", "Poly Haven");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(502).json({ error: "Asset provider unavailable" });
  }
}
