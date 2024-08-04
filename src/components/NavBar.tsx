import { IoMenu } from "react-icons/io5";

export const NavBar = () => {
	return (
		<nav className="flex items-center border-b-shadow border-b-xs h-16 sticky top-0 w-full">
			<a href="/" className="ml-4 flex-grow">
				<div className="flex border-shadow border-xs rounded-full items-center">
					<div className="w-4 h-4 bg-snow rounded-full m-3" />
					<div className="text-lg pr-3">mzyxnuel</div>
				</div>
			</a>

			<div className="flex mr-4 ml-4">
            <IoMenu className="text-3xl" />
			</div>
		</nav>
	);
};
