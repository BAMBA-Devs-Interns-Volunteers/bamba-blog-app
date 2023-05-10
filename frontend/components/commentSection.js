import moment from "moment";

export default function CommentSection({ comments = [] }) {
  console.log(comments);
  return (
    <>
      <h2 className="mt-10 mb-4 text-2xl leading-tight lg:text-5xl">
        Comments:
      </h2>
      <ul>
        {comments?.map(({ _id, _createdAt, name, email, comment }) => (
          <li key={_id} className="mb-5 p-4">
            <hr className="mb-5" />
            <h4 className="mb text-bold text-[1.2rem] leading-tight">
              <a href={`mailto:${email}`}>{name}</a> 
            </h4>
              <p className="text-[0.9rem] text-slate-500">{moment(_createdAt).format("ddd mm yyy") }</p>
            <p className="pt-4">{comment}</p>
            <hr className="mt-5 mb-5" />
          </li>
        ))}
      </ul>
    </>
  )
}