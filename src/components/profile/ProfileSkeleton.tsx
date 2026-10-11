export default function ProfileSkeleton() {
  return (
    <div className="flex items-center gap-3">
      <div className="skeleton h-9 w-9 rounded-3xl" />
      <div className="skeleton h-7 w-20 rounded-md" />
      <div className="skeleton ml-2 h-1 w-1 rounded-sm" />
    </div>
  );
}