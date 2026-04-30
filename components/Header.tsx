import Link from 'next/link';

const Header = () => (
    <header className="flex justify-center p-12">
        <Link href="/" className="border-b-0" rel="noreferrer noopener">
            <div className="flex items-center">
                <div className="mr-4 block w-[60px]">
                    <img width="60px" src="https://static.killedbygoogle.com/com/tombstone.svg" height="60px" alt="Tombstone" />
                </div>
                <h1 className="m-0 text-[2.75rem] font-light">Killed by Google</h1>
            </div>
        </Link>
    </header>
);

export default Header;
