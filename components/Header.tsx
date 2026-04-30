import Link from 'next/link';

const Header = () => (
    <header className="flex justify-center p-6 min-[701px]:p-12">
        <Link href="/" className="border-b-0" rel="noreferrer noopener">
            <div className="flex items-center">
                <div className="mr-[10px] h-16">
                    <img width="60px" height="60px" src="https://static.killedbygoogle.com/com/tombstone.svg" alt="Tombstone" />
                </div>
                <h1 className="m-0 whitespace-nowrap text-[2.5em] font-thin min-[701px]:text-[2.75rem]">Killed by Google</h1>
            </div>
        </Link>
    </header>
);

export default Header;
