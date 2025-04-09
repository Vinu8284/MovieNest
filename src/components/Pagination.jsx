import { Link, useLocation } from 'react-router-dom';
import '../index.css';

const Pagination = ({ currentPage, totalPages }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query') || '';

  const getPageUrl = (page) => {
    const basePath = location.pathname;
    if (query) {
      return `${basePath}?query=${query}&page=${page}`;
    }
    return `${basePath}?page=${page}`;
  };

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <Link to={getPageUrl(currentPage - 1)} className="pagination-button">
          Prev
        </Link>
      )}
      <span className="pagination-info">
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages && (
        <Link to={getPageUrl(currentPage + 1)} className="pagination-button">
          Next
        </Link>
      )}
    </div>
  );
};

export default Pagination;