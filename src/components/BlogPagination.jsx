const BlogPagination = ({ 
  currentPage, 
  setCurrentPage, 
  pagination, 
  totalBlogs, 
  limit = 12 
}) => {
  const totalPages = Math.ceil(totalBlogs / limit);
  
  if (totalBlogs <= limit) return null;

  return (
    <>
      <div className="flex justify-center items-center mt-16 gap-4">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={!pagination.prev || currentPage === 1}
          className="px-4 py-2 border border-gray-600 rounded-lg text-black hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          Previous
        </button>
        
        <div className="flex gap-2">
          {(() => { 

            // changing when there are more than 5 pages and shifting left slide when page increases
            const pages = [];
            const maxVisible = 3;
            
            if (totalPages <= maxVisible) {
              for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
              }
            } else {
              if (currentPage <= 3) {
                for (let i = 1; i <= maxVisible; i++) {
                  pages.push(i);
                }
              } else if (currentPage >= totalPages - 2) {
                for (let i = totalPages - maxVisible + 1; i <= totalPages; i++) {
                  pages.push(i);
                }
              } else {
                for (let i = currentPage - 2; i <= currentPage + 2; i++) {
                  pages.push(i);
                }
              }
            }
            
            return pages.map(pageNum => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-10 h-10 rounded-lg transition-colors cursor-pointer ${
                  currentPage === pageNum 
                    ? 'bg-purple-600 text-white' 
                    : 'border border-gray-600 text-black hover:bg-purple-600/20'
                }`}
              >
                {pageNum}
              </button>
            ));
          })()}
        </div>
        
        <button
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={!pagination.next || currentPage >= totalPages}
          className="px-4 py-2 border border-gray-600 rounded-lg cursor-pointer text-black hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
        </button>
      </div>
      
      <div className="text-center mt-8 text-gray-400 font-montserrat">
        Showing {((currentPage - 1) * limit) + 1}-{Math.min(currentPage * limit, totalBlogs)} of {totalBlogs} blogs
      </div>
    </>
  );
};

export default BlogPagination;