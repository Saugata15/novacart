import { CheckCircle2, Mail, Star, User } from "lucide-react";

const Reviews = ({ review }) => {
  const { reviewerName, date, comment, rating, reviewerEmail } = review;

  const formattedDate = new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 max-sm:px-4 transition-all duration-300 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-400/5">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        {/* Reviewer */}

        <div className="flex max-sm:flex-col max-sm:items-start items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-400/10 text-lg font-bold text-amber-400">
            {reviewerName
              .split(" ")
              .map((word) => word[0])
              .join("")}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-white">
                {reviewerName}
              </h3>

              <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400">
                <CheckCircle2 size={14} />
                Verified
              </span>
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <Mail size={14} />
                {reviewerEmail}
              </span>

              <span>{formattedDate}</span>
            </div>
          </div>
        </div>

        {/* Rating */}

        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={18}
              className={
                star <= rating
                  ? "fill-amber-400 text-amber-400"
                  : "text-slate-600"
              }
            />
          ))}

          <span className="ml-2 font-medium text-white">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Review */}

      <p className="mt-6 leading-8 text-slate-300">{comment}</p>
    </div>
  );
};

export default Reviews;