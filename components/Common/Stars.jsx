import { Star } from "lucide-react";

export default function Stars({ rating, reviews }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs text-slate-600">
      <span className="inline-flex items-center gap-0.5 rounded bg-green-600 text-white px-1.5 py-0.5 font-semibold">
        {rating} <Star size={10} fill="currentColor" />
      </span>
      {reviews != null && <span>({reviews})</span>}
    </span>
  );
}
