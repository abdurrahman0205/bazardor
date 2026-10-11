
export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6">

      {/* Spinner */}
      <div className="relative flex h-20 w-20 items-center justify-center">
        <div className="absolute inset-0 animate-spin rounded-full border-[5px] border-[#E1E8E1] border-t-[#1A9951]" />

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F0F5F0] text-3xl">
          🌿
        </div>
      </div>

      {/* Loading text */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-[#18352A]">
          তথ্য লোড হচ্ছে...
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          বাজারের সর্বশেষ তথ্য সংগ্রহ করা হচ্ছে
        </p>
      </div>

    </div>
  );
}