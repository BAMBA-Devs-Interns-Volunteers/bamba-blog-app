

export default function CommentSection({ comments = [] }) {
  console.log(comments);
  return (
    <>
      <h2 className="mt-10 mb-4 text-2xl leading-tight lg:text-5xl">
        Comments:
      </h2>
      <ul>
        {comments?.map(({ _id, _createdAt, name, email, comment }) => (
          <li key={_id} className="mb-5">
            <hr className="mb-5" />
            <h4 className="mb-2 leading-tight">
              <a href={`mailto:${email}`}>{name}</a> 
              <p>{new Date(_createdAt).toDateString() }</p>
            </h4>
            <p>{comment}</p>
            <hr className="mt-5 mb-5" />
          </li>
        ))}
      </ul>
    </>
  )
}