'use client';

export function TemplatePreview() {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Template Previews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 w-full h-48"></div>
        <div className="bg-gray-200 w-full h-48"></div>
        <div className="bg-gray-200 w-full h-48"></div>
      </div>
    </section>
  );
}
