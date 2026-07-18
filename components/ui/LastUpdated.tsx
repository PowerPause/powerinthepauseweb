export function LastUpdated({ date }: { date: string }) {
  return (
    <p className="text-sm text-navy/50 font-sans mt-10 pt-6 border-t border-navy/10">
      Last updated: {date}
    </p>
  );
}
