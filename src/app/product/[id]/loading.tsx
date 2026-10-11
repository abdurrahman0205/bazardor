const CardDetailsSkeleton = () => {
  return (
    <div className="container mx-auto flex max-w-5xl flex-col gap-5 px-5 lg:px-0 animate-pulse">

      {/* Breadcrumb */}
      <div className="h-4 w-40 rounded bg-gray-200" />

      {/* Product overview */}
      <div className="flex flex-col justify-between gap-10 rounded-2xl border border-[#E1E8E1] bg-white px-6 py-10 md:flex-row md:items-center md:gap-0">
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 rounded-2xl bg-gray-200" />

          <div className="flex flex-col gap-3">
            <div className="h-8 w-40 rounded bg-gray-200" />
            <div className="h-4 w-32 rounded bg-gray-200" />
            <div className="h-4 w-64 max-w-full rounded bg-gray-200" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 rounded-2xl bg-[#F0F5F0] px-10 py-5">
          <div className="h-4 w-20 rounded bg-gray-200" />
          <div className="h-10 w-32 rounded bg-gray-200" />
          <div className="h-4 w-24 rounded bg-gray-200" />
          <div className="h-4 w-16 rounded bg-gray-200" />
        </div>
      </div>

      {/* Price summary and market table */}
      <div className="rounded-2xl border border-[#E1E8E1] bg-white px-5 py-6">
        <div className="mb-4 h-7 w-40 rounded bg-gray-200" />

        <div className="grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-2xl border border-[#E1E8E1] px-7 py-5"
            >
              <div className="h-4 w-24 rounded bg-gray-200" />
              <div className="h-9 w-32 rounded bg-gray-200" />
              <div className="h-4 w-36 rounded bg-gray-200" />
            </div>
          ))}
        </div>

        <div className="mb-4 mt-8 h-7 w-56 rounded bg-gray-200" />

        {/* Table header */}
        <div className="flex justify-between gap-4 border-b border-[#E1E8E1] px-4 py-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-4 w-16 shrink-0 rounded bg-gray-200"
            />
          ))}
        </div>

        {/* Table rows */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="flex justify-between gap-4 border-b border-[#E1E8E1] px-4 py-4"
          >
            {Array.from({ length: 5 }).map((_, colIndex) => (
              <div
                key={colIndex}
                className="h-4 w-16 shrink-0 rounded bg-gray-200"
              />
            ))}
          </div>
        ))}
      </div>

      {/* Category link */}
      <div className="h-10 w-32 rounded-md bg-gray-200" />

    </div>
  );
};

export default CardDetailsSkeleton;