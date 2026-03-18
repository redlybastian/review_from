"use server";

// We'll use this function to handle the form submission
export async function createReview(formData: FormData) {
  // 1. Extract the data using the 'name' attribute from your HTML inputs
  const name = formData.get("name");
  const email = formData.get("email");
  const content = formData.get("content");

  // 2. For now, we just log it to your terminal (not the browser console!)
  console.log("New Review Received:", { name, email, content });

  // 3. Return a response to the UI
  return { success: true };
}