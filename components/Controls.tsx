export const Controls = ({ children }: { children: React.ReactNode }) => (
    <div className="mx-auto grid max-w-[80%] grid-cols-1 grid-rows-2 gap-2 pt-4 pb-16 min-[701px]:max-w-[600px] min-[701px]:grid-cols-[1fr_200px] min-[701px]:grid-rows-1 min-[701px]:gap-8">
        {children}
    </div>
);
