'use client';

export function SubscriptionForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center">
        <input type="email" placeholder="Enter your email" className="border p-2 mb-4 sm:mb-0 sm:mr-2 flex-grow" required />
        <button type="submit" className="bg-accent text-secondary py-2 px-4 rounded">Subscribe</button>
      </form>
    </section>
  );
}
