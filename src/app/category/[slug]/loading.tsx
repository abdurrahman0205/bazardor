const Loading = () => {
  return (
    <div className="container mx-auto mt-5 max-w-5xl">
      <div className="flex flex-col gap-8">

        {/* Category Header */}
        <div className="flex items-center gap-2 rounded-2xl bg-white px-5 py-2">
          <div className="h-8.75 w-8.75 rounded-lg animate-pulse bg-[#454A45]/20" />

          <div className="flex flex-col gap-2">
            <div className="h-7 w-20 rounded-md animate-pulse bg-[#454A45]/25" />
            <div className="h-4 w-56 rounded-md animate-pulse bg-[#454A45]/20" />
          </div>
        </div>

        {/* Product Count + Sort Button */}
        <div className="flex items-center justify-between rounded-2xl bg-white px-3 py-5">
          <div className="h-4 w-44 rounded-md animate-pulse bg-[#454A45]/25" />
          <div className="h-9 w-24 rounded-lg animate-pulse bg-[#454A45]/25" />
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="flex w-full flex-col rounded-2xl border border-[#E1E8E1] bg-white px-3 py-2"
            >
              {/* Product Name and Unit */}
              <div className="flex justify-start gap-2">
                <div className="rounded-xl bg-[#454A45]/10 px-3 py-2">
                  <div className="h-[27px] w-[27px] rounded-md animate-pulse bg-[#454A45]/25" />
                </div>

                <div className="flex flex-1 flex-col gap-2 py-1">
                  <div className="h-5 w-28 rounded-md animate-pulse bg-[#454A45]/30" />
                  <div className="h-3 w-16 rounded-md animate-pulse bg-[#454A45]/25" />
                </div>
              </div>

              {/* Today's Price */}
              <div className="mt-3 h-4 w-20 rounded-md animate-pulse bg-[#454A45]/25" />

              {/* Price and Percentage */}
              <div className="flex items-center justify-between">
                <div className="h-7 w-24 rounded-md animate-pulse bg-[#454A45]/35" />
                <div className="h-9 w-20 rounded-2xl animate-pulse bg-[#454A45]/25" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Loading;