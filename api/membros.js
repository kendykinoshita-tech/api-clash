export default async function handler(req, res) {
  // Libera o acesso para o seu site no GitHub
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjBhNzUxOWIwLTc4MmYtNGM5NC1hNjExLWUxYzJlMTkzMmU4YyIsImlhdCI6MTc3NjczMzM0Niwic3ViIjoiZGV2ZWxvcGVyLzllYTM5MDc4LWRmNmItMGIyOS0wODY2LTA0NjM2NmQ2Mzg1OSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjc2Ljc2LjIxLjIxIiwiNzYuNzYuMjEuMjIiLCI3Ni43Ni4yMS45IiwiNzYuNzYuMjEuMTIzIl0sInR5cGUiOiJjbGllbnQifV19.oDCvMwWisQOu0L0DWZFo1eTEQbcgKvj0qCLnHW2QmC8WlzwzSCgDx48tNu6g6DYqxxikWlb2TsdTeV1VpTUnGw";
  const CLAN_TAG = "%232JQVVGUPY";
  const url = `https://api.clashofclans.com/v1/clans/${CLAN_TAG}/members`;

  try {
    const response = await fetch(url, {
      headers: { "Authorization": `Bearer ${API_KEY}` }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro na conexão com a Supercell" });
  }
}
