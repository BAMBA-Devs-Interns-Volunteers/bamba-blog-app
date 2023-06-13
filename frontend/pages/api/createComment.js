import { client } from "../../lib/client"



export default async function createComment(req, res) {
  // console.log("Request body data",req);
  const { postId, name, email, comment } = req.body
  // console.log("Server received", postId, name, email, comment);
  try {
    await client.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: postId,
      },
      name,
      email,
      comment,
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: `Couldn't submit comment`, err })
  }
  // router.refresh()
  return res.status(200).json({ message: 'Comment submitted' })
}