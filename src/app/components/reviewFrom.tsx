"use client";
import { useState } from "react";

export default function ReviewForm() {
  const [formData, setFormData] = useState({ review: "", rating: 5 });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!formData.review.trim()) return alert("Write a review!");
  
  setIsSubmitted(true);
};

  if (isSubmitted) {
    return (
      <div className="animate-feedback p-6 border rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Feedback Received!</h2>
        <p className="italic">{`"${formData.review}"`}</p>
        <p>Rating: {formData.rating} ⭐</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <textarea
        className="border p-2"
        value={formData.review}
        onChange={(e) => setFormData({ ...formData, review: e.target.value })}
        placeholder="How was your experience?"
      />
      <select 
        value={formData.rating}
        onChange={(e) => setFormData({ ...formData, rating:Number(e.target.value ) })}
      >
        {[1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num} Stars</option>)}
      </select>
      <button className="bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
  );
}