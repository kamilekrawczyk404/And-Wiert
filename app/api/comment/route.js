export async function POST(req, res) {
  const { id, username, message } = await req.json();

  console.log(id);
}
