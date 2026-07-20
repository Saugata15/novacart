const Shimmer = ({ count = 8 }) => {
  return (
    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse overflow-hidden rounded-3xl border border-slate-800 bg-slate-900"
        >
          {/* Image */}
          <div className="h-60 bg-slate-800" />

          {/* Content */}
          <div className="space-y-4 p-6">
            <div className="h-4 w-20 rounded-full bg-slate-800" />

            <div className="h-6 w-3/4 rounded bg-slate-800" />

            <div className="space-y-2">
              <div className="h-3 rounded bg-slate-800" />
              <div className="h-3 w-5/6 rounded bg-slate-800" />
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="h-8 w-24 rounded bg-slate-800" />

              <div className="h-12 w-12 rounded-xl bg-slate-800" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;