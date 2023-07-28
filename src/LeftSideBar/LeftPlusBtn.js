function LeftPlusBtn ({onChange}){
  return(
    <button onClick={function(event){
      event.preventDefault();
      onChange();
    }}className='btn'>+</button>
  );
}

export default LeftPlusBtn;