import sanityClient from '@sanity/client'
const config = {
    dataset: 'production',
    projectId: "ek734hes",
    apiVersion: '2021-10-21',
    useCdn: true,
    token: "skBKnnGPTJhdILSkL6pXmw8hbaHHwHd3WhZkNKwob9Tw0hPcIokWPQtZL2jigdmueMairYoMrJKiCv5DA6Scm02gBWYjRZYNVJ6N1AdqKtG6CriWAJHXMmPnhiashVwmdJMzgaBR98GxuBuHNbHmjEUBFAjV57YiywffRC4tkihy63e6krrK"
}
const client = sanityClient(config)

console.log("client data", client)

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
  return res.status(200).json({ message: 'Comment submitted' })
}