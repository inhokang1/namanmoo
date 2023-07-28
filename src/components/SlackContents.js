function SlackContents() {
  return (
    <div className="sideBar slack">
      <button className='btn slack'>+</button>
      <div className="contentsWrap slack">
        <button className='btn clear'>-</button>
        <div className="content slack">
        </div>
      </div>
    </div>
  );
}

export default SlackContents;