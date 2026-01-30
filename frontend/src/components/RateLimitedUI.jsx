const RateLimitedUI = () => {
  return (
    <div className="alert alert-warning">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        <div>
          <h3 className="font-bold">Rate Limited!</h3>
          <div className="text-xs">Too many requests. Please try again later.</div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;