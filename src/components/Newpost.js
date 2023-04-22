const Newpost = ({
  newTitle,
  setNewtitle,
  postBody,
  setPostbody,
  HandleSubmmit,
}) => {
  return (
    <div className='newpost'>
      <form onSubmit={HandleSubmmit}>
        <label className='posts' htmlFor='posts'>
          Add title
        </label>
        <input
          className='aqaya'
          type='text'
          id='posts'
          required
          value={newTitle}
          onChange={(e) => setNewtitle(e.target.value)}
          placeholder='Add Item'
        />

        <label htmlFor='body'>Add post</label>
        <textarea
          className='aqaya'
          type='text'
          placeholder='Add text'
          id='body'
          required
          value={postBody}
          onChange={(e) => setPostbody(e.target.value)}
        />
      </form>
      <button className='btn' type='button' onClick={HandleSubmmit}>
        submmit
      </button>
    </div>
  )
}

export default Newpost
