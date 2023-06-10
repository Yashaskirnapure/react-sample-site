const Card = ({title, body}) => {
  return (
    <div className="Card">
        <h1>{title}</h1>
        <p>{body}</p>
    </div>
  )
}

export default Card