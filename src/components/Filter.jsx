const Filter = ({ searchTerm, onSearchChange }) => {
    return (
      <div>
        Search: <input value={searchTerm} onChange={onSearchChange} />
      </div>
    );
  };
  
  export default Filter;
  