const LoadMoreDataBtn = ({ state, fetchDataFunc, additionalParam }) => {
  if (state !== null && state.totalDocs > state.results.length) {
    return (
      <button
        onClick={() =>
          fetchDataFunc({ ...additionalParam, page: state.page + 1 })
        }
        className="bg-purple/70 p-2 px-3 hover:bg-purple/50 rounded-md items-center gap-2 "
      >
        Load More
      </button>
    );
  }
};

export default LoadMoreDataBtn;
