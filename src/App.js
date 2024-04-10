
import './App.css';
import ReactPaginate from 'react-paginate';


function App() {

  const handlePageClick = (data) => {
    console.log(data)
  }

  return (
    <div className="App">
      <header></header>
      <div>
        <ReactPaginate 
          previousLabel={'prev'}
          nextLabel={'next'}
          breakLabel={'...'}
          pageCount={20}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
}

export default App;
