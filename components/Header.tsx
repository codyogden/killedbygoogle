import Link from 'next/link';

const Header = () => (
    <header className="flex justify-center p-6 min-[701px]:p-12">
        <Link href="/" className="border-b-0" rel="noreferrer noopener">
            <div className="flex items-center">
                <div className="mr-4 block w-[60px]">
                    <img width="60px" src="https://static.killedbygoogle.com/com/tombstone.svg" height="60px" alt="Tombstone" />
                </div>
                <h1 className="m-0 whitespace-nowrap text-[1.75rem] font-light min-[701px]:text-[2.75rem]">Killed by Google</h1>
            </div>
        </Link>
    </header>
);

export default Header;
