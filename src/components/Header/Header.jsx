import React from "react";

export default function Header() {
	return (
		<div>
			<div className="w-100  flex p-3 justify-center align-middle border-b-2 border-red-300 mb-3">
				<div className="flex align-baseline m-auto">
					<img src="/images/ECHO-light.png" width={"80px"} />
				</div>
				<div className="flex-grow flex justify-center m-auto">Menu</div>
				<div className="flex align-baseline m-auto"> Login </div>
			</div>
		</div>
	);
}
