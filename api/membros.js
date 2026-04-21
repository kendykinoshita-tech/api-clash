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

  const API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijc1YzE2Y2JhLTY0YzctNDViNy1hODIyLTA3MDJhZGMyNzY1YiIsImlhdCI6MTc3NjczMTkxNSwic3ViIjoiZGV2ZWxvcGVyLzllYTM5MDc4LWRmNmItMGIyOS0wODY2LTA0NjM2NmQ2Mzg1OSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE3Mi42OS4zOS4xMzAiLCIxNzIuNjkuMzkuMTMxIiwiMTA0LjIyLjEwLjIzMSIsIjEwNC4yMi4xMC4yMzAiLCIxNzIuNzEuMjM5LjExOCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.ccemDWDTSynSv8NjI6QyNP5sxEtE_sW5BKcOIOYjD9HlqN8kIG4kfPmoKrVXw6PUCGGCH8PyrYU6ixkTxvXb5Q";
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
